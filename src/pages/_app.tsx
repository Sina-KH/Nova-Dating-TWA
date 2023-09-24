import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { Open_Sans } from 'next/font/google';
import MainContainer from '@/components/Containers/MainContainer';
import Head from 'next/head';
import MySessionProvider from '@/contexts/useSession';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LocalizationResources from '@/helpers/localizationResources';
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';
import { useRouter } from 'next/router';

i18n.use(initReactI18next)
    .init({
        resources: LocalizationResources,
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false
        }
    })
    .then();

const font = Open_Sans({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <style jsx global>{`
                html {
                    font-family: ${font.style.fontFamily};
                }
            `}</style>
            <MySessionProvider>
                <MainContainer>
                    <Component {...pageProps} />
                </MainContainer>
                {!router.pathname.startsWith('/register') ? <BottomNavigation /> : undefined}
            </MySessionProvider>
        </>
    );
}

export default MyApp;
