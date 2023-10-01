import { useTranslation } from 'react-i18next';
import { useSession } from '@/contexts/useSession';
import MyButton from '@/components/Button/MyButton';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MyTitle from '@/components/Label/MyTitle';
import MySubTitle from '@/components/Label/MySubTitle';
import MyTagsSelector from '@/components/Select/MyTagsSelector';
import { TagListRequest } from '@/api/requests/tagListRequest';
import { ITag, ITagType } from '@/api/models/ITag';
import MyGrowingContainer from '@/components/Containers/MyGrowingContainer';
import { ProfileSetInterestsRequest } from '@/api/requests/profile/profileSetInterestsRequest';

export default function RegisterInterestsScreen() {
    const { sessionToken } = useSession();
    const { t } = useTranslation();
    const [interests, setInterests] = useState<ITag[] | null>(null);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

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
        <div className={'w-full h-full pt-8 pb-8 flex flex-col items-start space-y-4 pl-4 pr-4'}>
            <MyTitle>{t('register.interests.title')}</MyTitle>
            <MySubTitle>{t('register.interests.description')}</MySubTitle>

            <MyGrowingContainer>
                {interests ? (
                    <MyTagsSelector
                        tags={interests}
                        selectedTags={selectedInterests}
                        onSelectionChanged={(newSelection) => {
                            setSelectedInterests(newSelection);
                        }}
                    />
                ) : null}
            </MyGrowingContainer>

            <MyButton
                disabled={!selectedInterests.length}
                onClick={() => {
                    if (!selectedInterests.length) return;
                    if (isLoading) return;
                    setIsLoading(true);
                    new ProfileSetInterestsRequest({ interests: selectedInterests })
                        .call(sessionToken)
                        .then(() => {
                            router
                                .push(
                                    {
                                        pathname: '/explore'
                                    },
                                    '/explore',
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
                {t('register.interests.next')}
            </MyButton>
        </div>
    );
}
