import { useSession } from '@/contexts/useSession';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MyTitle from '@/components/Label/MyTitle';
import MyButton from '@/components/Button/MyButton';
import MyTextField from '@/components/Field/MyTextField';
import MyEditPhoto from '@/components/Image/MyEditPhoto';
import { ProfileEditRequest } from '@/api/requests/profile/profileEditRequest';
import MyDateField from '@/components/Field/MyDateField';
import { hashToImageURL, ImagePresentationType } from '@/helpers/mediaHelpers';
import { LogoIcon } from '@/assets/logoIcon';
import MyIconButton from '@/components/Button/MyIconButton';
import ExploreUserCardImage from '@/components/Card/ExploreUserCard/ExploreUserCardImage';
import ExploreUserCardInterests from '@/components/Card/ExploreUserCard/ExploreUserCardInterests';
import MyPromotionLabel from '@/components/Label/MyPromotionLabel';

export default function ProfileScreen() {
    const { user } = useSession();
    const { t } = useTranslation();
    const router = useRouter();

    if (!user) return <></>;

    function editPressed() {
        let registerPath = '/profile/edit';
        router
            .push(
                {
                    pathname: registerPath
                },
                registerPath,
                { shallow: true }
            )
            .then();
        return;
    }

    return (
        <div className={'w-full h-full flex flex-col items-center p-8 overflow-y-scroll'}>
            <div className={'w-full flex flex-row pb-8 items-center gap-2'}>
                <LogoIcon />
                <MyPromotionLabel className={'font-bold text-2xl flex-grow'} text={t('profile.title')} />
                {/*Edit profile button*/}
                <MyIconButton
                    icon={
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.59427 16.4736L5.54296 16.7898L4.59427 16.4736ZM5.28103 14.4133L6.22971 14.7296H6.22971L5.28103 14.4133ZM5.98965 13.2668L6.69676 13.9739L5.98965 13.2668ZM10.8796 8.37683L11.5867 9.08394L10.8796 8.37683ZM12.9538 8.37683L12.2467 9.08394L12.2467 9.08394L12.9538 8.37683ZM14.5462 9.96932L15.2534 9.26221L14.5462 9.96932ZM14.5462 12.0435L15.2534 12.7506L14.5462 12.0435ZM9.65632 16.9334L8.94921 16.2263L8.94921 16.2263L9.65632 16.9334ZM8.50974 17.6421L8.82597 18.5907L8.82597 18.5907L8.50974 17.6421ZM6.44948 18.3288L6.7657 19.2775H6.7657L6.44948 18.3288ZM9.28045 17.2843L8.67821 16.4859L8.6782 16.4859L9.28045 17.2843ZM8.99163 17.4628L8.54693 16.5671L8.99163 17.4628ZM15.1588 10.7231L16.1098 10.4141L16.1098 10.4141L15.1588 10.7231ZM15.1588 11.2897L16.1098 11.5987L16.1098 11.5987L15.1588 11.2897ZM11.6334 7.7643L11.3244 6.81325L11.3244 6.81325L11.6334 7.7643ZM12.1999 7.7643L12.509 6.81325L12.509 6.81325L12.1999 7.7643ZM5.46032 13.9314L6.356 14.3762H6.356L5.46032 13.9314ZM5.63882 13.6426L4.8405 13.0404L4.8405 13.0404L5.63882 13.6426ZM4.25264 18.1149L3.31073 18.4508L4.25264 18.1149ZM4.80816 18.6704L4.47228 19.6123L4.47228 19.6123L4.80816 18.6704ZM14.4571 4.7993C14.0666 4.40878 13.4334 4.40878 13.0429 4.7993C12.6524 5.18983 12.6524 5.82299 13.0429 6.21352L14.4571 4.7993ZM16.7096 9.88018C17.1001 10.2707 17.7333 10.2707 18.1238 9.88018C18.5143 9.48966 18.5143 8.85649 18.1238 8.46597L16.7096 9.88018ZM5.54296 16.7898L6.22971 14.7296L4.33234 14.0971L3.64559 16.1574L5.54296 16.7898ZM6.69676 13.9739L11.5867 9.08394L10.1725 7.66972L5.28255 12.5597L6.69676 13.9739ZM12.2467 9.08394L13.8391 10.6764L15.2534 9.26221L13.6609 7.66972L12.2467 9.08394ZM13.8391 11.3364L8.94921 16.2263L10.3634 17.6405L15.2534 12.7506L13.8391 11.3364ZM8.19351 16.6934L6.13325 17.3801L6.7657 19.2775L8.82597 18.5907L8.19351 16.6934ZM8.94921 16.2263C8.74773 16.4278 8.71183 16.4606 8.67821 16.4859L9.88268 18.0826C10.053 17.9541 10.1997 17.8043 10.3634 17.6405L8.94921 16.2263ZM8.82597 18.5907C9.04565 18.5175 9.24529 18.4533 9.43633 18.3584L8.54693 16.5671C8.5092 16.5858 8.46384 16.6033 8.19351 16.6934L8.82597 18.5907ZM8.6782 16.4859C8.63705 16.517 8.5931 16.5442 8.54693 16.5671L9.43633 18.3584C9.59333 18.2805 9.74275 18.1881 9.88269 18.0826L8.6782 16.4859ZM13.8391 10.6764C14.0323 10.8696 14.1341 10.9725 14.2008 11.0511C14.2599 11.1207 14.2308 11.1031 14.2077 11.0322L16.1098 10.4141C16.0188 10.1339 15.8649 9.92091 15.7255 9.7567C15.5937 9.60141 15.4232 9.43205 15.2534 9.26221L13.8391 10.6764ZM15.2534 12.7506C15.4232 12.5808 15.5937 12.4114 15.7255 12.2561C15.8649 12.0919 16.0188 11.8789 16.1098 11.5987L14.2077 10.9807C14.2308 10.9098 14.2599 10.8922 14.2008 10.9618C14.1341 11.0403 14.0323 11.1432 13.8391 11.3364L15.2534 12.7506ZM14.2077 11.0322C14.2023 11.0154 14.2023 10.9974 14.2077 10.9807L16.1098 11.5987C16.2349 11.2137 16.2349 10.7991 16.1098 10.4141L14.2077 11.0322ZM11.5867 9.08394C11.7799 8.89076 11.8828 8.78896 11.9613 8.72228C12.0309 8.66318 12.0133 8.69232 11.9424 8.71536L11.3244 6.81325C11.0442 6.90429 10.8312 7.05819 10.667 7.1976C10.5117 7.32943 10.3423 7.49989 10.1725 7.66972L11.5867 9.08394ZM13.6609 7.66973C13.491 7.49989 13.3217 7.32943 13.1664 7.1976C13.0022 7.05819 12.7892 6.90429 12.509 6.81325L11.8909 8.71536C11.82 8.69232 11.8024 8.66318 11.872 8.72228C11.9506 8.78896 12.0535 8.89076 12.2467 9.08394L13.6609 7.66973ZM11.9424 8.71536C11.9257 8.7208 11.9077 8.7208 11.8909 8.71536L12.509 6.81325C12.124 6.68817 11.7093 6.68817 11.3244 6.81325L11.9424 8.71536ZM6.22971 14.7296C6.31982 14.4592 6.33727 14.4139 6.356 14.3762L4.56465 13.4867C4.46979 13.6778 4.40557 13.8774 4.33234 14.0971L6.22971 14.7296ZM5.28255 12.5597C5.11881 12.7234 4.96896 12.8701 4.8405 13.0404L6.43713 14.2449C6.4625 14.2113 6.49527 14.1754 6.69676 13.9739L5.28255 12.5597ZM6.356 14.3762C6.37893 14.33 6.40609 14.286 6.43713 14.2449L4.8405 13.0404C4.73494 13.1803 4.64259 13.3297 4.56465 13.4867L6.356 14.3762ZM3.64559 16.1574C3.50261 16.5863 3.37248 16.9735 3.29819 17.2897C3.22738 17.591 3.15619 18.0174 3.31073 18.4508L5.19454 17.779C5.24288 17.9146 5.19323 17.9682 5.24516 17.7472C5.29359 17.5411 5.38737 17.2566 5.54296 16.7898L3.64559 16.1574ZM6.13325 17.3801C5.6665 17.5357 5.38199 17.6295 5.17587 17.6779C4.95491 17.7298 5.00847 17.6802 5.14404 17.7285L4.47228 19.6123C4.90566 19.7669 5.33205 19.6957 5.63337 19.6249C5.94954 19.5506 6.33678 19.4205 6.7657 19.2775L6.13325 17.3801ZM3.31073 18.4508C3.50397 18.9927 3.93039 19.4191 4.47228 19.6123L5.14404 17.7285C5.1676 17.7369 5.18614 17.7555 5.19454 17.779L3.31073 18.4508ZM13.0429 6.21352L16.7096 9.88018L18.1238 8.46597L14.4571 4.7993L13.0429 6.21352Z"
                                className={'fill-telegram-text'}
                            />
                        </svg>
                    }
                    onClick={editPressed}
                />
            </div>

            {/*user image container*/}
            <ExploreUserCardImage user={user} />
            {/*user interests*/}
            <ExploreUserCardInterests user={user} />
        </div>
    );
}
