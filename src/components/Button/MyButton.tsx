import React from 'react';
import clsx from 'clsx';

interface Props {
    disabled: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

export default function MyButton({ disabled, onClick, children }: Props) {
    return (
        <button
            className={clsx(
                'w-full cursor-none select-none text-telegram-button-text font-bold text-lg py-2 px-4 rounded-xl',
                disabled ? 'bg-telegram-secondary-bg text-telegram-hint' : 'bg-telegram-button'
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
