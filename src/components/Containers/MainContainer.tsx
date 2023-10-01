import React from 'react';
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';

interface Props {
    children: React.ReactNode;
}

export default function MainContainer({ children }: Props) {
    return <main className={'h-full flex flex-col items-center justify-around'}>{children}</main>;
}
