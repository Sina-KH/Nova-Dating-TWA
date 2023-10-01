import { useSession } from '@/contexts/useSession';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MyTitle from '@/components/Label/MyTitle';
import MyGrowingContainer from '@/components/Containers/MyGrowingContainer';
import MyButton from '@/components/Button/MyButton';
import MyTextField from '@/components/Field/MyTextField';
import MyEditPhoto from '@/components/Image/MyEditPhoto';
import { ProfileEditRequest } from '@/api/requests/profile/profileEditRequest';
import MyDateField from '@/components/Field/MyDateField';
import { hashToImageURL, ImagePresentationType } from '@/helpers/mediaHelpers';

export default function RegisterProfileScreen() {
    const { sessionToken, user } = useSession();
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [birthdate, setBirthdate] = useState(user?.birthdate ? new Date(user.birthdate) : undefined);
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    return (
        <div className={'w-full h-full pt-8 pb-8 flex flex-col items-start space-y-4 pl-4 pr-4'}>
            <MyTitle>{t('register.profile.title')}</MyTitle>

            <MyGrowingContainer className={'flex flex-col gap-4 items-center'}>
                {/*Profile image selector*/}
                <MyEditPhoto
                    defaultImage={hashToImageURL(user?.photo?.hash, ImagePresentationType.medium)}
                    onImageSelect={(newImage) => {
                        setSelectedImage(newImage);
                    }}
                />
                {/*Firstname*/}
                <MyTextField
                    placeholder={t('register.profile.firstName')}
                    value={firstName}
                    onValueChanged={(newValue) => {
                        setFirstName(newValue);
                    }}
                />
                {/*Lastname*/}
                <MyTextField
                    placeholder={t('register.profile.lastName')}
                    value={lastName}
                    onValueChanged={(newValue) => {
                        setLastName(newValue);
                    }}
                />
                {/*Birthdate*/}
                <MyDateField
                    placeholder={t('register.profile.birthdate')}
                    value={birthdate}
                    onValueChanged={(newValue) => {
                        setBirthdate(newValue);
                    }}
                />
            </MyGrowingContainer>

            <MyButton
                disabled={!firstName?.length && !lastName?.length}
                onClick={() => {
                    if (!birthdate || (!firstName?.length && !lastName?.length)) return;
                    if (isLoading) return;
                    setIsLoading(true);
                    new ProfileEditRequest({
                        firstName: firstName ?? '',
                        lastName: lastName ?? '',
                        birthdate: birthdate.toISOString(),
                        photo: selectedImage
                    })
                        .call(sessionToken)
                        .then(() => {
                            router
                                .push(
                                    {
                                        pathname: '/register/gender'
                                    },
                                    '/register/gender',
                                    { shallow: true }
                                )
                                .then();
                        })
                        .catch((err) => {
                            console.log(err);
                            setIsLoading(false);
                        });
                }}
            >
                {t('register.profile.next')}
            </MyButton>
        </div>
    );
}
