import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { SwipeEventData } from 'react-swipeable/src/types';
import { IUser } from '@/types/IUser';
import MySwipeContainerActions from '@/components/Containers/MySwipeContainer/MySwipeContainerActions';
import ExploreUserCard from '@/components/Card/ExploreUserCard/ExploreUserCard';

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

    return (
        <div className={'flex flex-col w-full h-full overflow-x-hidden'}>
            {/*swipe container*/}
            <div className="relative swipe-container w-full h-full" {...handlers}>
                {users.map((user, index) => {
                    return (
                        <ExploreUserCard
                            key={index}
                            user={user}
                            isActive={index === activeIndex}
                            isPassed={index < activeIndex}
                            zIndex={users.length - index}
                            translateX={translateX}
                            rotation={rotation}
                        />
                    );
                })}
            </div>
            {/*<MySwipeContainerActions />*/}
        </div>
    );
}
