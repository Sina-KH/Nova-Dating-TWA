import type { NextPage } from 'next';
import Head from 'next/head';
import ExploreScreen from '@/screens/explore/ExploreScreen';
import React from 'react';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Explore</title>
            </Head>{' '}
            <ExploreScreen />
        </>
    );
};

export default Home;
