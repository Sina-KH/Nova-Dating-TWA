import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default function MyTitle({ children }: Props) {
    return <p className={'font-bold text-3xl text-telegram-text'}>{children}</p>;
}
