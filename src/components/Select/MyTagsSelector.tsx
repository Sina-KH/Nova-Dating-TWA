import { ITag } from '@/types/ITag';
import clsx from 'clsx';

interface Props {
    className?: string;
    tags: ITag[];
    selectedTags: string[];
    onSelectionChanged?: (newSelection: string[]) => void;
}

export default function MyTagsSelector({ className, tags, selectedTags, onSelectionChanged }: Props) {
    return (
        <div className={clsx('w-full grid grid-cols-2 gap-4', className)}>
            {tags.map((it) => {
                return (
                    <button
                        key={it._id}
                        className={clsx(
                            'p-2 cursor-none select-none rounded-xl font-bold border',
                            selectedTags.indexOf(it._id) > -1
                                ? 'border-transparent bg-telegram-button text-telegram-button-text fill-telegram-button-text'
                                : 'text-telegram-text'
                        )}
                        onClick={() => {
                            if (selectedTags.indexOf(it._id) > -1)
                                selectedTags = selectedTags.filter((selectedTag) => selectedTag !== it._id);
                            else selectedTags.push(it._id);
                            onSelectionChanged?.([...selectedTags]);
                        }}
                    >
                        <div className={'flex flex-row items-center space-x-2'}>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: it.icon
                                }}
                            />
                            <p>{it.name}</p>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
