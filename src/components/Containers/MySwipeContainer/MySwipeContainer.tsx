import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { SwipeEventData } from 'react-swipeable/src/types';
import { IUser, userTitle } from '@/types/IUser';
import MySwipeContainerActions from '@/components/Containers/MySwipeContainer/MySwipeContainerActions';
import { hashToImageURL } from '@/helpers/mediaHelpers';

interface Props {
    users: Partial<IUser>[];
    userLiked: (userPID: string) => void;
    userDisliked: (userPID: string) => void;
    loadMoreNeeded: () => void;
}

export default function MySwipeContainer({ users, userLiked, userDisliked, loadMoreNeeded }: Props) {
    // current rotation and translate based on drag data
    const [rotation, setRotation] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    // current active index
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSwipe = (direction: string) => {
        // check if all users are swiped and nothing is selected
        if (activeIndex < 0) return;

        if (direction === 'left') {
            userDisliked(users[activeIndex].pID!);
        } else if (direction === 'right') {
            userLiked(users[activeIndex].pID!);
        }
        // find and activate first visible card
        const nextIndex = users.findIndex((it) => !it.reacted);
        if (nextIndex >= 0) {
            setActiveIndex(nextIndex);
        } else {
            // reacted to all, need to load more. (after reaction requests)
            loadMoreNeeded();
            setActiveIndex(-1);
        }
    };

    // handle user swipes/drags
    const handleSwiping = (eventData: SwipeEventData) => {
        const maxRotation = 25;
        const maxDragDistance = 150;

        // Calculate the new rotation and translation
        const newRotation = (eventData.deltaX / maxDragDistance) * maxRotation;
        const newTranslateX = eventData.deltaX;

        setRotation(newRotation);
        setTranslateX(newTranslateX);
    };

    const handleSwiped = () => {
        // Reset rotation and translation when swipe ends
        setRotation(0);
        setTranslateX(0);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        onSwiping: handleSwiping,
        onSwiped: handleSwiped
    });

    if (!users.length) return <p className={'w-full h-full text-center'}>empty view here</p>;

    return (
        <div className={'flex flex-col w-full h-full overflow-x-hidden overflow-y-hidden'}>
            {/*swipe container*/}
            <div className="relative swipe-container w-full h-full" {...handlers}>
                {users.map((user, index) => {
                    let positionStyles = {};
                    switch (user.reacted) {
                        case 'liked':
                            positionStyles = {
                                transform: `translateX(500px) rotate(80deg)`,
                                transition: `transform 0.3s ease`
                            };
                            break;
                        case 'disliked':
                            positionStyles = {
                                transform: `translateX(-500px) rotate(-80deg)`,
                                transition: `transform 0.3s ease`
                            };
                            break;
                        default:
                            if (index === activeIndex) {
                                positionStyles = {
                                    transform: `translateX(${translateX}px) rotate(${rotation}deg)`,
                                    transition: `transform 0.1s ease`
                                };
                            }
                    }
                    return (
                        // user card
                        <div
                            key={user.pID}
                            className={'absolute top-8 bottom-8 left-8 right-8'}
                            style={{
                                ...positionStyles,
                                zIndex: users.length - index
                            }}
                        >
                            {/*user image container*/}
                            <div className={'relative rounded-2xl w-full h-full bg-telegram-secondary-bg'}>
                                {user.photo?.hash && (
                                    <img
                                        src={hashToImageURL(user.photo!.hash)!}
                                        alt={'profile'}
                                        className={'h-full w-full rounded-3xl'}
                                    />
                                )}
                                {/*bottom user data*/}
                                <div
                                    className={
                                        'absolute bottom-0 left-0 right-0 pl-2 pr-2 bg-gray-500 ' +
                                        'backdrop-blur-sm backdrop-opacity-60 rounded-b-2xl'
                                    }
                                >
                                    {/*user's name and age*/}
                                    <p className={'w-full text-telegram-button-text font-bold text-lg text-left'}>
                                        {userTitle(user)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            )
            <MySwipeContainerActions />
        </div>
    );
}
