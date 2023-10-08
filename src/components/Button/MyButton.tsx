import React from 'react';
import clsx from 'clsx';

interface Props {
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

export default function MyButton({ className, disabled, onClick, children }: Props) {
    const button = (
        <button
            className={clsx(
                'w-full select-none text-telegram-button-text font-bold text-lg py-2 px-4 rounded-xl',
                disabled ? 'bg-telegram-secondary-bg text-telegram-hint' : 'bg-telegram-button',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
    return <>{className ? <div className={clsx('w-full', className)}>{button}</div> : button}</>;
}
