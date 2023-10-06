import React, { useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import MyFieldPlaceholderLabel from '@/components/Field/MyFieldPlaceholderLabel';

interface Props {
    placeholder: string;
    value?: Date;
    onValueChanged?: (newValue: Date) => void;
}

export default function MyDateField({ placeholder, value, onValueChanged }: Props) {
    const [isFocused, setFocused] = useState(false);
    const [datePickerOpen, setDatePickerOpen] = useState(false);
    const twentyYearsAgo = useMemo(() => {
        return new Date(new Date().getTime() - 18 * 365 * 24 * 60 * 60 * 1000);
    }, []);
    const hundredYearsAgo = useMemo(() => {
        return new Date(new Date().getTime() - 100 * 365 * 24 * 60 * 60 * 1000);
    }, []);
    return (
        <>
            <style jsx global>{`
                .react-datepicker__input-container {
                    width: inherit;
                }

                .react-datepicker-wrapper {
                    width: 100%;
                }
            `}</style>
            <div className="w-full">
                <div
                    className="relative h-10 w-full"
                    onBlur={() => {
                        setFocused(false);
                    }}
                    onClick={() => {
                        if (!datePickerOpen) setDatePickerOpen(true);
                    }}
                >
                    <DatePicker
                        className="h-full w-full rounded-2xl pb-4 pt-6
                         border border-telegram-secondary-bg border-t-transparent bg-telegram-secondary-bg px-3 py-2.5
                          text-sm font-normal text-telegram-text outline outline-0 transition-all
                           placeholder-shown:border placeholder-shown:border-telegram-secondary-bg
                            placeholder-shown:border-t-telegram-secondary-bg
                             focus:border-2 focus:border-telegram-button focus:outline-0
                              disabled:border-0 disabled:opacity-50"
                        selected={value ? new Date(value) : null}
                        placeholderText=" "
                        onChange={(date: Date) => {
                            onValueChanged?.(date);
                            setDatePickerOpen(false);
                        }}
                        onFocus={() => {
                            setFocused(true);
                        }}
                        dateFormat={'MMMM d, yyyy'}
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={100}
                        minDate={hundredYearsAgo}
                        maxDate={twentyYearsAgo}
                        readOnly={true}
                        open={datePickerOpen}
                    />
                    <MyFieldPlaceholderLabel isFieldEmpty={!value} isFocused={isFocused} placeholder={placeholder} />
                </div>
            </div>
        </>
    );
}
