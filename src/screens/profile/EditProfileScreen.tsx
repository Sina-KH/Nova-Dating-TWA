import { useSession } from '@/contexts/useSession';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MyTitle from '@/components/Label/MyTitle';
import MyButton from '@/components/Button/MyButton';
import MyTextField from '@/components/Field/MyTextField';
import MyEditPhoto from '@/components/Image/MyEditPhoto';
import { ProfileEditRequest } from '@/api/requests/profile/profileEditRequest';
import MyDateField from '@/components/Field/MyDateField';
import { hashToImageURL, ImagePresentationType } from '@/helpers/mediaHelpers';
import MyRadioSelect from '@/components/Select/MyRadioSelect';
import MyTagsSelector from '@/components/Select/MyTagsSelector';
import { ITag, ITagType } from '@/types/ITag';
import { TagListRequest } from '@/api/requests/tagListRequest';

export default function EditProfileScreen() {
    const { sessionToken, user, setUser } = useSession();
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [birthdate, setBirthdate] = useState(user?.birthdate ? new Date(user.birthdate) : undefined);
    const [selectedImage, setSelectedImage] = useState<File | undefined>();
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [selectedGender, setSelectedGender] = useState(user?.gender || '');
    const [interests, setInterests] = useState<ITag[] | null>(null);
    const [selectedInterests, setSelectedInterests] = useState<string[]>(
        user?.interests.map((it: Partial<ITag>) => it._id)
    );

    useEffect(() => {
        new TagListRequest({ type: ITagType.interests })
            .call(sessionToken)
            .then((response) => {
                setInterests(response?.tags ?? []);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [sessionToken]);

    return (
        <div className={'w-full h-full flex flex-col items-center space-y-4 p-8 overflow-y-scroll'}>
            <div className={'w-full flex flex-row pb-4 items-center gap-2'}>
                <p className={'font-bold text-2xl flex-grow text-center'}>{t('profile.edit.title')}</p>
            </div>

            <div className={'w-full flex flex-col gap-4 items-center'}>
                {/*Profile image selector*/}
                <MyEditPhoto
                    defaultImage={hashToImageURL(user?.photo?.hash, ImagePresentationType.medium)}
                    onImageSelect={(newImage) => {
                        setSelectedImage(newImage);
                    }}
                />
                <p className={'w-full'}>{t('profile.edit.basicInformation')}</p>
                {/*Firstname*/}
                <MyTextField
                    placeholder={t('profile.edit.firstName')}
                    value={firstName}
                    onValueChanged={(newValue) => {
                        setFirstName(newValue);
                    }}
                />
                {/*Lastname*/}
                <MyTextField
                    placeholder={t('profile.edit.lastName')}
                    value={lastName}
                    onValueChanged={(newValue) => {
                        setLastName(newValue);
                    }}
                />
                {/*Birthdate*/}
                <MyDateField
                    placeholder={t('profile.edit.birthdate')}
                    value={birthdate}
                    onValueChanged={(newValue) => {
                        setBirthdate(newValue);
                    }}
                />
                {/*Gender selection*/}
                <p className={'w-full pt-6'}>{t('profile.edit.gender')}</p>
                <MyRadioSelect
                    items={[
                        {
                            id: 'male',
                            name: t('register.gender.male')
                        },
                        {
                            id: 'female',
                            name: t('register.gender.female')
                        }
                    ]}
                    selectedID={selectedGender}
                    onSelectionChanged={(selectedID: string) => {
                        setSelectedGender(selectedID);
                    }}
                />
                {/*Interests*/}
                <p className={'w-full pt-6'}>{t('profile.edit.gender')}</p>
                {interests ? (
                    <MyTagsSelector
                        tags={interests}
                        selectedTags={selectedInterests}
                        onSelectionChanged={(newSelection) => {
                            setSelectedInterests(newSelection);
                        }}
                    />
                ) : null}
            </div>

            <MyButton
                onClick={() => {
                    if (!birthdate || (!firstName?.length && !lastName?.length)) return;
                    if (!selectedGender.length || !selectedInterests.length) return;
                    if (isLoading) return;
                    setIsLoading(true);
                    new ProfileEditRequest({
                        firstName: firstName ?? '',
                        lastName: lastName ?? '',
                        birthdate: birthdate.toISOString(),
                        gender: selectedGender,
                        interests: selectedInterests.join(','),
                        photo: selectedImage
                    })
                        .call(sessionToken)
                        .then(({ user }) => {
                            console.log({ user });
                            setUser(user);
                            router
                                .push(
                                    {
                                        pathname: '/profile'
                                    },
                                    '/profile',
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
                {t('profile.edit.edit')}
            </MyButton>
        </div>
    );
}