import { useTranslation } from 'react-i18next';
import { useSession } from '@/contexts/useSession';
import Image from 'next/image';
import MyButton from '@/components/Button/MyButton';
import MyRadioSelect from '@/components/Select/MyRadioSelect';

export default function RegisterGenderScreen() {
    const { t } = useTranslation();
    const { user } = useSession();

    return (
        <div className={'h-full flex flex-col ml-4 mr-4 items-center justify-around'}>
            <Image src={'/logo.png'} alt={'logo'} width={320} height={180} />

            <div className={'w-full flex flex-col items-start space-y-4'}>
                <p className={'font-bold text-3xl text-telegram-text'}>{t('register.gender.title')}</p>
                <MyRadioSelect
                    items={[
                        {
                            id: 'male',
                            name: t('register.gender.male')
                        },
                        {
                            id: 'female',
                            name: t('register.gender.female')
                        }
                    ]}
                />
            </div>

            <MyButton>{t('register.gender.next')}</MyButton>
        </div>
    );
}
