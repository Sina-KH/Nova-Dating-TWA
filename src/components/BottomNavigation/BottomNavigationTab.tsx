import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface Props {
    path: string;
    icon: React.ReactNode;
    isSelected: boolean;
    selectedClassName: string;
}

export function BottomNavigationTab({ path, icon, isSelected, selectedClassName }: Props) {
    const router = useRouter();

    return (
        <button
            type="button"
            className={`${
                isSelected ? selectedClassName : 'stroke-telegram-text opacity-50'
            } cursor-none select-none flex flex-grow items-center justify-center`}
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
            {icon}
        </button>
    );
}
