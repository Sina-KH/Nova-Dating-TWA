import React from 'react';
import MySwipeContainer from '@/components/Containers/MySwipeContainer/MySwipeContainer';

export default function ExploreScreen() {
    return (
        <MySwipeContainer
            users={[
                {
                    pID: '123',
                    birthdate: '1996-01-01',
                    firstName: 'A',
                    gender: 'female',
                    interests: [],
                    lastName: 'B',
                    photo: { hash: '' }
                }
            ]}
        />
    );
}
