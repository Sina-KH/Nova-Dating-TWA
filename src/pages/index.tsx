import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-telegram-white">
            <Head>
                <title>Explore</title>
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center"></main>
        </div>
    );
};

export default Home;
