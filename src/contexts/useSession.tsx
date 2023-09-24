import React, { useContext, useEffect, useState } from 'react';
import { UserGetTokenRequest } from '@/api/requests/userGetTokenRequest';
import { IUser } from '@/api/models/IUser';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MySessionContext = React.createContext<{
    sessionToken?: string;
    user?: IUser;
}>({});

export function useSession() {
    return useContext(MySessionContext);
}

function MySessionProvider(props: { children: React.ReactNode }) {
    const [sessionToken, setSessionToken] = useState<string | undefined>(undefined);
    const [user, setUser] = useState<IUser | undefined>(undefined);
    const router = useRouter();

    // Send data to back-end service, validate hash and receive session token
    useEffect(() => {
        let hash = window.Telegram.WebApp.initData;
        if (!hash && process.env.NEXT_PUBLIC_FAKE_HASH) hash = process.env.NEXT_PUBLIC_FAKE_HASH;

        new UserGetTokenRequest({ hash: hash })
            .call()
            .then((response) => {
                setSessionToken(response?.session.token ?? undefined);
                setUser(response?.user);
            })
            .catch((e) => {});
    }, []);

    // check if app should redirect to register
    if (sessionToken?.length && !!user && !router.pathname.startsWith('/register')) {
        router.push(
            {
                pathname: '/register'
            },
            '/register',
            { shallow: true }
        );
    }

    return (
        <MySessionContext.Provider value={{ sessionToken, user }}>
            {sessionToken?.length && !!user ? props.children : undefined}
        </MySessionContext.Provider>
    );
}

export default MySessionProvider;
