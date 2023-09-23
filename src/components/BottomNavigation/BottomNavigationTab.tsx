import React from 'react';

interface Props {
    icon: React.ReactNode;
    title: string;
    isSelected: boolean;
}

export function BottomNavigationTab({ title, icon, isSelected }: Props) {
    return (
        <button
            type="button"
            className={`${
                isSelected
                    ? 'fill-telegram-button stroke-telegram-button'
                    : 'fill-telegram-secondary-bg stroke-telegram-secondary-bg'
            } inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group`}
        >
            {icon}
            <span className="text-sm text-telegram-button">{title}</span>
        </button>
    );
}
