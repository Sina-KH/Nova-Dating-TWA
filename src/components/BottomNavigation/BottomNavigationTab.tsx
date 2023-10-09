import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface Props {
    path: string;
    icon: React.ReactNode;
    isSelected: boolean;
    selectedClassName: string;
    badge?: boolean;
}

export function BottomNavigationTab({ path, icon, isSelected, selectedClassName, badge }: Props) {
    const router = useRouter();

    return (
        <button
            type="button"
            className={clsx(
                isSelected ? selectedClassName : 'stroke-telegram-text',
                'select-none flex flex-grow items-center justify-center relative'
            )}
            onClick={() => {
                router
                    .push(
                        {
                            pathname: `/${path}`
                        },
                        `/${path}`,
                        { shallow: true }
                    )
                    .then();
            }}
        >
            <div className={isSelected ? '' : 'opacity-50'}>{icon}</div>
            {badge ? (
                <div className={'absolute top-0 mr-6 left-auto right-auto rounded-full h-2 w-2 bg-red-600'} />
            ) : undefined}
        </button>
    );
}
