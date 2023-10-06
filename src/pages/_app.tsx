import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import MainContainer from '@/components/Containers/MainContainer';
import Head from 'next/head';
import MySessionProvider, { useSession } from '@/contexts/useSession';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LocalizationResources from '@/helpers/localizationResources';
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';
import { useRouter } from 'next/router';
import MyGrowingContainer from '@/components/Containers/MyGrowingContainer';
import { IUserStatus } from '@/types/IUser';
import clsx from 'clsx';

i18n.use(initReactI18next)
    .init({
        resources: LocalizationResources,
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false
        }
    })
    .then();

function MyApp(props: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MySessionProvider>
                <MyAppContent {...props} />
            </MySessionProvider>
        </>
    );
}

function MyAppContent({ Component, pageProps }: AppProps) {
    const { sessionToken, user } = useSession();
    const dataLoaded = sessionToken?.length && !!user;

    const router = useRouter();

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
        <div className={'flex flex-col h-screen'}>
            <div className={clsx('h-full', showBottomNavigation ? 'pb-12' : '')}>
                <MainContainer>
                    <Component {...pageProps} />
                </MainContainer>
            </div>
            {showBottomNavigation ? <BottomNavigation /> : undefined}
        </div>
    );
}

export default MyApp;
