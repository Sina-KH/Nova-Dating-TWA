import React from 'react';
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';

interface Props {
    children: React.ReactNode;
}

export default function MainContainer({ children }: Props) {
    return <div className={'h-screen flex flex-col ml-4 mr-4 items-center justify-around'}>{children}</div>;
}
