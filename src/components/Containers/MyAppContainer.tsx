import { AppProps } from 'next/app';
import { useSession } from '@/contexts/useSession';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IUserStatus } from '@/types/IUser';
import clsx from 'clsx';
import MainContainer from '@/components/Containers/MainContainer';
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';

export default function MyAppContent({ Component, pageProps }: AppProps) {
    const { sessionToken, user } = useSession();
    const [isDark, setIsDark] = useState(false);
    const dataLoaded = sessionToken?.length && !!user;

    const router = useRouter();

    useEffect(() => {
        // check if theme is dark. we switch secondary bg and primary bg on dark scheme
        setIsDark(window.Telegram.WebApp.colorScheme === 'dark');
    }, []);

    // callback on init data validation using back-end service
    useEffect(() => {
        // check if app should redirect user to home or register
        if (!dataLoaded) return;
        // check if we should redirect user to home
        if (user?.status !== IUserStatus.preRegistered) {
            let homePath = '/explore';
            router
                .push(
                    {
                        pathname: homePath
                    },
                    homePath,
                    { shallow: true }
                )
                .then();
            return;
        }
        // check if we should redirect user to register
        const shouldRedirectToRegister =
            // user not registered completely
            user.status === IUserStatus.preRegistered &&
            // not in intro
            router.pathname !== '/' &&
            // not in register, already!
            !router.pathname.startsWith('/register');
        if (shouldRedirectToRegister) {
            let registerPath = '/register';
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
    }, [sessionToken]);

    // empty if loading data
    if (!dataLoaded) return <></>; // is loading

    const showBottomNavigation = !!user && user.status !== IUserStatus.preRegistered;
    return (
        <div className={clsx('flex flex-col h-screen', isDark ? 'color-scheme-dark' : '')}>
            <div className={clsx('h-full', showBottomNavigation ? 'pb-12' : '')}>
                <MainContainer>
                    <Component {...pageProps} />
                </MainContainer>
            </div>
            {showBottomNavigation ? <BottomNavigation /> : undefined}
        </div>
    );
}
