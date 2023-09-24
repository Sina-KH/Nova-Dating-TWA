import { BottomNavigationTab } from '@/components/BottomNavigation/BottomNavigationTab';
import React from 'react';

interface Props {}

const tabs = [
    {
        key: 'profile',
        title: 'Profile',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="M12 10C13.933 10 15.5 8.433 15.5 6.5C15.5 4.56701 13.933 3 12 3C10.067 3 8.5 4.56701 8.5 6.5C8.5 8.433 10.067 10 12 10Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3 20.4V21H21V20.4C21 18.1598 21 17.0397 20.5641 16.184C20.1806 15.4314 19.5686 14.8195 18.816 14.436C17.9603 14 16.8402 14 14.6 14H9.4C7.1598 14 6.0397 14 5.18405 14.436C4.43139 14.8195 3.81947 15.4314 3.43598 16.184C3 17.0397 3 18.1598 3 20.4Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        )
    }
];

export default function BottomNavigation(props: Props) {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-telegram-bg border-t border-gray-200">
            <div className={`grid h-full max-w-lg grid-cols-${tabs.length} mx-auto font-medium`}>
                {tabs.map((it) => {
                    return <BottomNavigationTab key={it.key} icon={it.icon} title={it.title} isSelected />;
                })}
            </div>
        </div>
    );
}
