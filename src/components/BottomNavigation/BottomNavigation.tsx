import { BottomNavigationTab } from '@/components/BottomNavigation/BottomNavigationTab';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const tabs = [
    {
        key: 'matches',
        icon: (
            <svg width="32" height="32" viewBox="0 0 23 23">
                <path
                    id="Vector"
                    d="M17.0548 2.29626H6.05481C4.53314 2.29626 3.30481 3.51543 3.30481 5.01876V15.0196C3.30481 16.5229 4.53314 17.7421 6.05481 17.7421H6.75148C7.48481 17.7421 8.18148 18.0263 8.69481 18.5396L10.2623 20.0888C10.9773 20.7946 12.1415 20.7946 12.8565 20.0888L14.424 18.5396C14.9373 18.0263 15.6431 17.7421 16.3673 17.7421H17.0548C18.5765 17.7421 19.8048 16.5229 19.8048 15.0196V5.01876C19.8048 3.51543 18.5765 2.29626 17.0548 2.29626ZM11.8115 14.1763C11.674 14.2221 11.4448 14.2221 11.2981 14.1763C10.1065 13.7638 7.42981 12.0679 7.42981 9.18043C7.43898 7.90626 8.45648 6.8796 9.72148 6.8796C10.4731 6.8796 11.1331 7.2371 11.5548 7.79626C11.9765 7.2371 12.6365 6.8796 13.3881 6.8796C14.6531 6.8796 15.6798 7.90626 15.6798 9.18043C15.6706 12.0679 13.0031 13.7638 11.8115 14.1763Z"
                />
            </svg>
        ),
        selectedClassName: 'fill-telegram-button'
    },
    {
        key: 'explore',
        icon: (
            <svg width="49" height="49" viewBox="0 0 49 49" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24.5548" cy="24.4629" r="23.5" stroke="url(#paint0_linear_18_118)" />
                <g clipPath="url(#clip0_18_118)">
                    <path
                        d="M25 14C19.49 14 15 18.49 15 24C15 29.51 19.49 34 25 34C30.51 34 35 29.51 35 24C35 18.49 30.51 14 25 14ZM23.5 28.13C20.88 28.13 20.88 28.13 20.88 25.51C20.88 22.41 23.4 19.89 26.5 19.89C29.12 19.89 29.12 19.89 29.12 22.51C29.12 25.6 26.6 28.13 23.5 28.13Z"
                        className={'fill-telegram-bg'}
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_18_118"
                        x1="22.5924"
                        y1="14.3549"
                        x2="12.77"
                        y2="46.0048"
                        gradientUnits="userSpaceOnUse"
                    ></linearGradient>
                    <clipPath id="clip0_18_118">
                        <rect width="24" height="24" className={'fill-telegram-bg'} transform="translate(13 12)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        selectedClassName: 'fill-telegram-button stroke-telegram-button-text'
    },
    {
        key: 'profile',
        icon: (
            <svg width="26" height="26" viewBox="0 0 19 19">
                <g id="user(3) 1" clipPath="url(#clip0_18_126)">
                    <path
                        id="Vector"
                        d="M12.6431 10.9907H6.46628C5.46239 10.9919 4.49996 11.3913 3.7901 12.1011C3.08023 12.811 2.6809 13.7734 2.67969 14.7773C2.67969 16.9049 4.40442 18.6296 6.53198 18.6296H12.5774C14.705 18.6296 16.4297 16.9049 16.4297 14.7773C16.4285 13.7734 16.0291 12.811 15.3193 12.1011C14.6094 11.3913 13.647 10.9919 12.6431 10.9907Z"
                    />
                    <path
                        id="Vector_2"
                        d="M9.55452 9.46293C12.0858 9.46293 14.1379 7.4109 14.1379 4.8796C14.1379 2.34829 12.0858 0.296265 9.55452 0.296265C7.02322 0.296265 4.97119 2.34829 4.97119 4.8796C4.97119 7.4109 7.02322 9.46293 9.55452 9.46293Z"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_18_126">
                        <rect
                            width="18.3333"
                            height="18.3333"
                            className={'fill-telegram-bg'}
                            transform="translate(0.387939 0.296265)"
                        />
                    </clipPath>
                </defs>
            </svg>
        ),
        selectedClassName: 'fill-telegram-button stroke-telegram-button'
    }
];

export default function BottomNavigation() {
    const router = useRouter();
    let selectedTab = router.pathname.split('/')[1];
    return (
        <div
            className="fixed bottom-0 left-0 z-50 w-full"
            style={{
                height: '113px'
            }}
        >
            <svg viewBox="0 0 360 127" fill="none" className={'w-full'}>
                <g filter="url(#filter0_d_18_111)">
                    <path
                        d="M8.56425 80.0014C13.184 64.3989 26.3923 52.7968 42.5328 50.7326C133.571 39.0896 225.527 39.0891 316.565 50.7311C332.712 52.7959 345.923 64.4056 350.538 80.0157L359.086 108.926H-1.35807e-06L8.56425 80.0014Z"
                        className={'fill-telegram-secondary-bg'}
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_18_111"
                        x="-30"
                        y="0"
                        width="419.086"
                        height="126.926"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="-12" />
                        <feGaussianBlur stdDeviation="15" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_111" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_111" result="shape" />
                    </filter>
                </defs>
            </svg>
            <div className={`absolute top-6 bottom-0 left-0 right-0 h-full flex flex-row items-center`}>
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
