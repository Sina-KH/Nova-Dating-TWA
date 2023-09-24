import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default function MyButton({ children }: Props) {
    return (
        <button className="w-full cursor-none bg-telegram-button hover:bg-telegram-button-700 text-telegram-button-text font-bold text-lg py-2 px-4 rounded-xl">
            {children}
        </button>
    );
}
