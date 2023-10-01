import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { SwipeEventData } from 'react-swipeable/src/types';
import { IUser, userTitle } from '@/api/models/IUser';
import MySwipeContainerActions from '@/components/Containers/MySwipeContainer/MySwipeContainerActions';
import Image from 'next/image';
import { hashToImageURL } from '@/helpers/mediaHelpers';

interface Props {
    users: IUser[];
}

export default function MySwipeContainer({ users }: Props) {
    const [rotation, setRotation] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const handleSwipe = (direction: string) => {
        console.log({ direction });
        if (direction === 'left') {
            // Handle dislike action
        } else if (direction === 'right') {
            // Handle like action
        }

        // Move to the next card
        // setActiveIndex(activeIndex + 1);
    };

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

    return (
        // Container div with no scrolls
        <div className={'flex flex-col w-full h-full overflow-x-hidden overflow-y-hidden'}>
            {/*swipe container*/}
            <div className="swipe-container w-full h-full" {...handlers}>
                {users.map((user) => {
                    return (
                        // user card
                        <div
                            key={user.pID}
                            className={'w-full h-full p-8'}
                            style={{
                                transform: `translateX(${translateX}px) rotate(${rotation}deg)`,
                                transition: 'transform 0.1s ease'
                            }}
                        >
                            {/*user image container*/}
                            <div className={'relative rounded-2xl w-full h-full bg-telegram-button'}>
                                {user.photo?.hash && (
                                    <Image
                                        src={hashToImageURL(user.photo!.hash)!}
                                        alt={'profile'}
                                        className={'rounded-3xl'}
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                )}
                                {/*bottom user data*/}
                                <div
                                    className={
                                        'absolute bottom-0 left-0 right-0 pl-2 pr-2 bg-gray-500 backdrop-blur-sm backdrop-opacity-60 rounded-b-2xl'
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
            <MySwipeContainerActions />
        </div>
    );
}
