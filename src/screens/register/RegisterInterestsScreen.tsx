import { useTranslation } from 'react-i18next';
import { useSession } from '@/contexts/useSession';
import Image from 'next/image';
import MyButton from '@/components/Button/MyButton';
import MyRadioSelect from '@/components/Select/MyRadioSelect';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ProfileSetGenderRequest } from '@/api/requests/profileSetGenderRequest';
import MyTitle from '@/components/Label/MyTitle';

export default function RegisterInterestsScreen() {
    const { sessionToken } = useSession();
    const { t } = useTranslation();
    const [selectedGender, setSelectedGender] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className={'w-full h-full pt-8 flex flex-col items-start space-y-4'}>
                <MyTitle>{t('register.interests.title')}</MyTitle>

                <MyButton
                    disabled={!selectedGender.length}
                    onClick={() => {
                        if (!selectedGender.length) return;
                        if (isLoading) return;
                        setIsLoading(true);
                        new ProfileSetGenderRequest({ gender: selectedGender })
                            .call(sessionToken)
                            .then((response) => {
                                router.push(
                                    {
                                        pathname: '/register/interests'
                                    },
                                    '/register/interests',
                                    { shallow: true }
                                );
                            })
                            .catch((err) => {
                                console.log(err);
                                setIsLoading(false);
                            });
                    }}
                >
                    {t('register.gender.next')}
                </MyButton>
            </div>
        </>
    );
}
