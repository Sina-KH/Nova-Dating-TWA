import { ITag } from '@/types/ITag';
import clsx from 'clsx';
import Image from 'next/image';
import { relativePathToURL } from '@/helpers/mediaHelpers';

interface Props {
    className?: string;
    tags: ITag[];
    selectedTags: string[];
    onSelectionChanged?: (newSelection: string[]) => void;
}

export default function MyTagsSelector({ className, tags, selectedTags, onSelectionChanged }: Props) {
    return (
        <div className={clsx('w-full grid grid-cols-2 gap-2', className)}>
            {tags.map((it) => {
                return (
                    <button
                        key={it._id}
                        className={clsx(
                            'p-2 cursor-none select-none rounded-full font-bold border-2 bg-telegram-secondary-bg',
                            selectedTags.indexOf(it._id) > -1
                                ? 'border-telegram-button text-telegram-button'
                                : 'border-transparent text-telegram-text'
                        )}
                        onClick={() => {
                            if (selectedTags.indexOf(it._id) > -1)
                                selectedTags = selectedTags.filter((selectedTag) => selectedTag !== it._id);
                            else selectedTags.push(it._id);
                            onSelectionChanged?.([...selectedTags]);
                        }}
                    >
                        <div className={'flex flex-col items-center'}>
                            <Image width={32} height={32} src={relativePathToURL(it.icon)} alt={it.name} />
                            <p className={'text-telegram-text'}>{it.name}</p>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
