import 'react-image-crop/dist/ReactCrop.css';
import { Crop, PercentCrop, ReactCrop } from 'react-image-crop';
import React, { useEffect, useMemo, useState } from 'react';
import MySecondaryButton from '@/components/Button/MySecondaryButton';
import { useTranslation } from 'react-i18next';
import MyButton from '@/components/Button/MyButton';
import { PixelCrop } from 'react-image-crop/src/types';

interface Props {
    selectedFile: Blob;
    onCancel: () => void;
    onSubmit: (selectedImage: File) => void;
}
export default function MyPhotoCropper({ selectedFile, onCancel, onSubmit }: Props) {
    const { t } = useTranslation();
    const [previewURL, setPreviewURL] = useState<string | undefined>(undefined);
    const [croppedFile, setCroppedFile] = useState<File | undefined>(undefined);

    const [crop, setCrop] = useState<Crop>({
        unit: '%',
        x: 25,
        y: 25,
        width: 50,
        height: 50
    });

    // set image to crop, on mount
    useEffect(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewURL(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
    }, []);

    // load and cache image from preview url
    const image = useMemo(() => {
        let img = new Image();
        if (previewURL) {
            img.src = previewURL;
            img.onload = () => {
                initCropArea();
            };
        }
        return img;
    }, [previewURL]);

    // init default crop area based on image size
    function initCropArea() {
        // using % because it is easier as we do not have preview image's size here.
        if (image.width < image.height) {
            setCrop({
                unit: '%',
                x: 0,
                y: (((image.height - image.width) / image.height) * 100) / 2,
                width: 100,
                height: (image.width / image.height) * 100
            });
        } else {
            setCrop({
                unit: '%',
                x: (((image.width - image.height) / image.width) * 100) / 2,
                y: 0,
                width: (image.height / image.width) * 100,
                height: 100
            });
        }
    }

    // create file on crop
    const onCropComplete = (croppedAreaPixels: PixelCrop, croppedAreaPercents: PercentCrop) => {
        // check if selection is near to square. (we set default crop using % so it can be very little pixels different!)
        if (Math.abs(croppedAreaPixels.width - croppedAreaPixels.height) > croppedAreaPixels.width / 100) return;
        if (!previewURL) return;

        // Generate a cropped image
        const canvas = document.createElement('canvas');

        const widthFactor = image.naturalWidth / 100;
        const heightFactor = image.naturalHeight / 100;

        canvas.width = croppedAreaPercents.width * widthFactor;
        canvas.height = croppedAreaPercents.height * heightFactor;

        const croppedWidthHeight = croppedAreaPercents.width * widthFactor;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(
            image,
            croppedAreaPercents.x * widthFactor,
            croppedAreaPercents.y * heightFactor,
            croppedWidthHeight,
            croppedWidthHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );

        canvas.toBlob(
            (blob) => {
                if (blob) {
                    const fileName = 'photo.jpeg';
                    console.log(blob);
                    setCroppedFile(new File([blob], fileName, { type: 'image/jpeg' }));
                }
            },
            'image/jpeg',
            1
        );
    };

    return (
        <div className={'w-full h-full flex flex-col items-center space-y-4 p-8 overflow-y-scroll'}>
            <div className={'relative w-full pb-4 items-center'}>
                <p className={'font-bold text-2xl flex-grow text-center'}>{t('cropper.title')}</p>
            </div>

            <div className={'w-full flex flex-col flex-grow gap-4 items-center justify-center'}>
                <ReactCrop
                    crop={crop}
                    aspect={1}
                    className={'rounded-2xl'}
                    onChange={(c) => {
                        setCrop(c);
                    }}
                    onComplete={onCropComplete}
                >
                    <img src={previewURL} />
                </ReactCrop>
            </div>

            <div className={'w-full flex flex-row gap-4'}>
                <MySecondaryButton
                    onClick={() => {
                        onCancel();
                    }}
                    className={'w-full'}
                >
                    {t('cropper.cancel')}
                </MySecondaryButton>
                <MyButton
                    onClick={() => {
                        if (croppedFile) onSubmit(croppedFile);
                    }}
                >
                    {t('cropper.crop')}
                </MyButton>
            </div>
        </div>
    );
}
