import Image from 'next/image';
import React, { useRef, useState } from 'react';

interface Props {
    defaultImage?: string;
    onImageSelect?: (newImage: File) => void;
}

export default function MyEditPhoto({ defaultImage, onImageSelect }: Props) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string | undefined>(defaultImage);

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files && e.target.files[0];
        if (!selectedFile) return;
        setSelectedImage(selectedFile);
        onImageSelect?.(selectedFile);

        // Read the selected file and set it as the image preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewURL(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
    };

    return (
        <div
            className="relative"
            onClick={() => {
                fileInputRef.current?.click();
            }}
        >
            <input
                className={'hidden'}
                type="file"
                accept="image/*"
                onChange={handleFileSelected}
                style={{ display: 'none' }}
                ref={fileInputRef}
            />

            {previewURL ? (
                <Image
                    src={previewURL}
                    width={100}
                    height={100}
                    alt={'profile'}
                    className={'rounded-3xl'}
                    style={{ width: '100px', height: '100px' }}
                />
            ) : (
                <div className={'rounded-3xl bg-telegram-secondary-bg'} style={{ width: '100px', height: '100px' }}>
                    <div className={'h-full fill-telegram-hint flex flex-col items-center justify-center'}>
                        <svg width="48" height="48" viewBox="0 0 24 24">
                            <path
                                d="M12 10C13.933 10 15.5 8.433 15.5 6.5C15.5 4.56701 13.933 3 12 3C10.067 3 8.5 4.56701 8.5 6.5C8.5 8.433 10.067 10 12 10Z"
                                fill="#ADAFBB"
                                stroke="#ADAFBB"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3 20.4V21H21V20.4C21 18.1598 21 17.0397 20.5641 16.184C20.1806 15.4314 19.5686 14.8195 18.816 14.436C17.9603 14 16.8402 14 14.6 14H9.4C7.1598 14 6.0397 14 5.18405 14.436C4.43139 14.8195 3.81947 15.4314 3.43598 16.184C3 17.0397 3 18.1598 3 20.4Z"
                                fill="#ADAFBB"
                                stroke="#ADAFBB"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            )}

            {/*Bottom icon*/}
            <svg
                className="absolute bottom-0 right-0 w-6 h-6 m-4 -mr-2 -mb-2 fill-telegram-button"
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
            >
                <circle cx="19" cy="19" r="18" stroke="white" strokeWidth="2" />
            </svg>
            <svg
                className="absolute bottom-0 right-0 w-3 h-3 m-2 -mr-0.5 -mb-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 7.14539C7.48 7.14539 6.992 7.33962 6.616 7.70477C6.248 8.06215 6.048 8.53607 6.056 9.02553V9.0333C6.056 9.53829 6.256 10.0122 6.624 10.3696C6.992 10.727 7.48 10.9212 8 10.9212C9.072 10.9212 9.936 10.0744 9.944 9.0333C9.944 8.5283 9.744 8.05438 9.376 7.697C9.008 7.33962 8.52 7.14539 8 7.14539ZM12.488 7.19978C12.088 7.19978 11.768 6.88901 11.768 6.50056C11.768 6.1121 12.088 5.79356 12.488 5.79356C12.888 5.79356 13.216 6.1121 13.216 6.50056C13.216 6.88901 12.888 7.19978 12.488 7.19978ZM10.216 11.1931C9.648 11.7447 8.864 12.0866 8 12.0866C7.16 12.0866 6.376 11.768 5.776 11.1931C5.184 10.6104 4.856 9.84906 4.856 9.0333C4.848 8.22531 5.176 7.46393 5.768 6.88124C6.368 6.29856 7.16 5.98002 8 5.98002C8.84 5.98002 9.632 6.29856 10.224 6.87347C10.816 7.45616 11.144 8.22531 11.144 9.0333C11.136 9.88013 10.784 10.6415 10.216 11.1931ZM12.512 3.61043C12.44 3.61043 12.384 3.57159 12.352 3.5172L12.272 3.34628C12.056 2.90344 11.808 2.39068 11.656 2.09545C11.288 1.39623 10.656 1.00777 9.88 1H6.112C5.336 1.00777 4.712 1.39623 4.344 2.09545C4.184 2.40622 3.912 2.96559 3.688 3.42397L3.64 3.5172C3.616 3.57936 3.552 3.61043 3.488 3.61043C1.56 3.61043 0 5.13319 0 6.99778V11.6127C0 13.4772 1.56 15 3.488 15H12.512C14.432 15 16 13.4772 16 11.6127V6.99778C16 5.13319 14.432 3.61043 12.512 3.61043Z"
                    fill="white"
                />
            </svg>
        </div>
    );
}