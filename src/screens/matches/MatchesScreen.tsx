import { useSession } from '@/contexts/useSession';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { IMatch } from '@/types/IMatch';
import { MatchListRequest } from '@/api/requests/match/matchListRequest';
import { LogoIcon } from '@/assets/logoIcon';
import ExploreUserCardImage from '@/components/Card/ExploreUserCard/ExploreUserCardImage';
import MyButton from '@/components/Button/MyButton';
import MyLoadingView from '@/components/Loading/MyLoadingView';
import { ChatIcon } from '@/assets/chatIcon';
import MyPromotionLabel from '@/components/Label/MyPromotionLabel';

export default function MatchesScreen() {
    const { sessionToken, user } = useSession();
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [matches, setMatches] = useState<IMatch[]>([]);
    const router = useRouter();

    // pagination
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);

    // load first page on mount
    useEffect(() => {
        setIsLoading(true);
        new MatchListRequest({})
            .call(sessionToken)
            .then((response) => {
                setIsLoading(false);
                setMatches(response.matches || []);
            })
            .catch((e) => {
                setIsLoading(false);
                console.log(e);
            });
    }, [sessionToken]);

    // Pagination logic
    const observer = useRef<IntersectionObserver>();
    const lastElementRef = useCallback(
        (node: HTMLDivElement) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasNextPage && !isLoadingMore) {
                    console.log('is loading more...');
                    loadMore();
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasNextPage]
    );
    function loadMore() {
        setIsLoadingMore(true);
        new MatchListRequest({ before: matches[matches.length - 1]._id })
            .call(sessionToken)
            .then((response) => {
                if (!response.matches.length) setHasNextPage(false);
                setMatches(matches.concat(response.matches));
                setIsLoadingMore(false);
            })
            .catch((e) => {
                setIsLoadingMore(false);
                console.log(e);
            });
    }

    return (
        <div className={'w-full h-full flex flex-col items-center p-8 overflow-y-scroll'}>
            <div className={'w-full flex flex-row pb-8 items-center gap-2'}>
                <LogoIcon />
                <MyPromotionLabel className={'font-bold text-2xl flex-grow'} text={t('matches.title')} />
            </div>

            {isLoading ? (
                <MyLoadingView />
            ) : (
                <>
                    <div className={'grid grid-cols-2 gap-4'}>
                        {matches.map((match) => {
                            const peerUser = match.firstUser.pID === user?.pID ? match.secondUser : match.firstUser;
                            return (
                                <div
                                    key={match._id}
                                    className={'flex flex-col'}
                                    ref={matches[matches.length - 1]._id === match._id ? lastElementRef : null}
                                >
                                    <ExploreUserCardImage user={peerUser} />
                                    <MyButton
                                        className={'mt-1'}
                                        onClick={() => {
                                            router.push('tg://user?id=48656726');
                                            if (peerUser._id?.startsWith('t_'))
                                                router.push('tg://user?id=' + peerUser._id!.substring(2)).then();
                                        }}
                                    >
                                        <div className={'flex flex-row justify-center items-center'}>
                                            <ChatIcon />
                                            <p className={'px-2 text-telegram-button-text text-sm'}>
                                                {t('matches.startChat')}
                                            </p>
                                        </div>
                                    </MyButton>
                                </div>
                            );
                        })}
                    </div>
                    {isLoadingMore ? <MyLoadingView /> : undefined}
                </>
            )}
        </div>
    );
}
