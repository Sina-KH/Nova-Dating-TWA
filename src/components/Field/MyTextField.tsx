import React, { useState } from 'react';
import MyFieldPlaceholderLabel from '@/components/Field/MyFieldPlaceholderLabel';

interface Props {
    placeholder: string;
    value?: string;
    onValueChanged?: (newValue: string) => void;
}

export default function MyTextField({ placeholder, value, onValueChanged }: Props) {
    const [isFocused, setFocused] = useState(false);
    return (
        <div className="w-full">
            <div
                className="relative h-10 w-full"
                onBlur={() => {
                    setFocused(false);
                }}
            >
                <input
                    className="peer h-full w-full rounded-[7px]
                         border border-telegram-secondary-bg border-t-transparent bg-transparent px-3 py-2.5
                          text-sm font-normal text-telegram-text outline outline-0 transition-all
                           placeholder-shown:border placeholder-shown:border-telegram-secondary-bg
                            placeholder-shown:border-t-telegram-secondary-bg
                             focus:border-2 focus:border-telegram-button focus:border-t-transparent focus:outline-0
                              disabled:border-0 disabled:opacity-50"
                    placeholder=" "
                    defaultValue={value}
                    onFocus={() => {
                        setFocused(true);
                    }}
                    onChange={(e) => {
                        onValueChanged?.(e.target.value);
                    }}
                />
                <MyFieldPlaceholderLabel isFieldEmpty={!value} isFocused={isFocused} placeholder={placeholder} />
            </div>
        </div>
    );
}
