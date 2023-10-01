import React from 'react';

export default function MySwipeContainerActions() {
    return (
        <div className={'flex flex-row'}>
            <div>
                <svg width="84" height="89" viewBox="0 0 168 178" fill="none">
                    <g filter="url(#filter0_d_309_5432)">
                        <circle cx="79" cy="69" r="39" fill="white" />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_309_5432"
                            x="-10"
                            y="0"
                            width="178"
                            height="178"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="20" />
                            <feGaussianBlur stdDeviation="25" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_309_5432" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_309_5432"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
