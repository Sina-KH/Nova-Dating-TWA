import { BottomNavigationTab } from '@/components/BottomNavigation/BottomNavigationTab';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const tabs = [
    {
        key: 'explore',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24">
                <rect x="9.49905" y="4.49756" width="13" height="18" rx="2" />
                <rect x="0.391632" y="4.48901" width="13" height="18" rx="2" transform="rotate(-15 0.391632 4.48901)" />
            </svg>
        ),
        selectedClassName: 'fill-telegram-button stroke-telegram-button-text'
    },
    {
        key: 'matches',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24">
                <rect x="9.49905" y="4.49756" width="13" height="18" rx="2" />
                <rect x="0.391632" y="4.48901" width="13" height="18" rx="2" transform="rotate(-15 0.391632 4.48901)" />
            </svg>
        ),
        selectedClassName: 'fill-telegram-button stroke-telegram-button-text'
    },
    {
        key: 'profile',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24">
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
        ),
        selectedClassName: 'fill-telegram-button stroke-telegram-button'
    }
];

export default function BottomNavigation() {
    const router = useRouter();
    let selectedTab = router.pathname.split('/')[1];
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-12 bg-telegram-bg border-t border-gray-200">
            <div className={`grid h-full max-w-lg grid-cols-${tabs.length} mx-auto font-medium`}>
                {tabs.map((it) => {
                    return (
                        <BottomNavigationTab
                            key={it.key}
                            path={it.key}
                            icon={it.icon}
                            isSelected={it.key === selectedTab}
                            selectedClassName={it.selectedClassName}
                        />
                    );
                })}
            </div>
        </div>
    );
}
