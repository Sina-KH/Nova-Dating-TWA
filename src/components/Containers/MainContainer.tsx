import React from 'react';
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';

interface Props {
    children: React.ReactNode;
}

export default function MainContainer({ children }: Props) {
    return <div className={'h-screen'}>{children}</div>;
}
