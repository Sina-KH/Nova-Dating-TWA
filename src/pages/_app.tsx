import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import MainContainer from '@/components/Containers/MainContainer';
import Head from 'next/head';
import MySessionProvider from '@/contexts/useSession';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MySessionProvider>
                <MainContainer>
                    <Component {...pageProps} />
                </MainContainer>
            </MySessionProvider>
        </>
    );
}

export default MyApp;
