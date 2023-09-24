import { useState } from 'react';
import clsx from 'clsx';

interface Props {
    items: {
        id: string;
        name: string;
    }[];
    selectedID: string;
    onSelectionChanged?: (id: string) => void;
}

export default function MyRadioSelect(props: Props) {
    return (
        <div className={'w-full flex flex-col space-y-4'}>
            {props.items.map((it) => {
                return (
                    <button
                        key={it.id}
                        className={clsx(
                            'p-2 w-full cursor-none select-none rounded-xl font-bold',
                            it.id == props.selectedID
                                ? 'bg-telegram-button text-telegram-button-text'
                                : 'border text-telegram-text'
                        )}
                        onClick={() => {
                            props.onSelectionChanged?.(it.id);
                        }}
                    >
                        <div className={'flex flex-row justify-between items-center'}>
                            <p>{it.name}</p>
                            <svg
                                className={it.id == props.selectedID ? 'stroke-telegram-button-text' : 'opacity-0'}
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M4.16666 9.99992L8.33332 14.1666L16.6667 5.83325"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
