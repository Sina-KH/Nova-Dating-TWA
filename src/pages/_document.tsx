import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import MainContainer from '@/components/Containers/MainContainer';

function MyDocument() {
    return (
        <Html>
            <Head>
                <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
            </Head>
            <body>
                <MainContainer>
                    <Main />
                    <NextScript />
                </MainContainer>
            </body>
        </Html>
    );
}

export default MyDocument;
