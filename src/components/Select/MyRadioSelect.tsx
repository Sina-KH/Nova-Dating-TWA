import { useState } from 'react';
import clsx from 'clsx';

interface Props {
    items: {
        id: string;
        name: string;
    }[];
    onSelectionChanged?: (id: string) => void;
}

export default function MyRadioSelect(props: Props) {
    const [selectedItem, setSelectedItem] = useState(props.items.length ? props.items[0].id : null);
    return (
        <div className={'w-full flex flex-col space-y-4'}>
            {props.items.map((it) => {
                return (
                    <button
                        key={it.id}
                        className={clsx(
                            'p-2 w-full cursor-none rounded-xl font-bold',
                            it.id == selectedItem
                                ? 'bg-telegram-button text-telegram-button-text'
                                : 'border text-telegram-text'
                        )}
                        onClick={() => {
                            setSelectedItem(it.id);
                            props.onSelectionChanged?.(it.id);
                        }}
                    >
                        <div className={'flex flex-row justify-between'}>
                            <p>{it.name}</p>
                            <svg
                                className={
                                    it.id == selectedItem
                                        ? 'stroke-telegram-button-text'
                                        : 'stroke-telegram-hint opacity-30'
                                }
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M4.16666 9.99992L8.33332 14.1666L16.6667 5.83325"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
