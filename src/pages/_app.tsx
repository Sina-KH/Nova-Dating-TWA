import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import MainContainer from '@/components/Containers/MainContainer';
import axios from 'axios';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    const [isHashValid, setIsHashValid] = useState(false);

    // Wait for validation to complete before rendering the page and stop the
    // rendering if the hash is invalid.
    useEffect(() => {
        console.log({ webAppInitData: window.Telegram.WebApp.initData });
        if (process.env.NEXT_PUBLIC_VALIDATE_HASH === 'true') {
            axios
                .post('/api/validate-hash', { hash: window.Telegram.WebApp.initData })
                .then((response: any) => setIsHashValid(response.status === 200));
        } else {
            setIsHashValid(true);
        }
    }, []);

    if (!isHashValid) {
        return null;
    }

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainContainer>
                <Component {...pageProps} />
            </MainContainer>
        </>
    );
}

export default MyApp;
