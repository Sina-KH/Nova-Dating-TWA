import { useTranslation } from 'react-i18next';
import { useSession } from '@/contexts/useSession';
import Image from 'next/image';
import MyButton from '@/components/Button/MyButton';
import MyRadioSelect from '@/components/Select/MyRadioSelect';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ProfileSetGenderRequest } from '@/api/requests/profile/profileSetGenderRequest';
import MyTitle from '@/components/Label/MyTitle';

export default function RegisterGenderScreen() {
    const { sessionToken } = useSession();
    const { t } = useTranslation();
    const [selectedGender, setSelectedGender] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    return (
        <>
            <Image src={'/logo.png'} alt={'logo'} width={320} height={180} />

            <div className={'w-full flex flex-col items-start space-y-4'}>
                <MyTitle>{t('register.gender.title')}</MyTitle>
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
            </div>

            <MyButton
                disabled={!selectedGender.length}
                onClick={() => {
                    if (!selectedGender.length) return;
                    if (isLoading) return;
                    setIsLoading(true);
                    new ProfileSetGenderRequest({ gender: selectedGender })
                        .call(sessionToken)
                        .then(() => {
                            router
                                .push(
                                    {
                                        pathname: '/register/interests'
                                    },
                                    '/register/interests',
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
                {t('register.gender.next')}
            </MyButton>
        </>
    );
}
