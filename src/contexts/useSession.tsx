import React, { useContext, useEffect, useState } from 'react';
import { UserGetTokenRequest } from '@/api/requests/userGetTokenRequest';

const MySessionContext = React.createContext<{
    sessionToken?: string;
}>({
    sessionToken: undefined
});

export function useSession() {
    return useContext(MySessionContext);
}

interface MySessionProviderProps {
    sessionToken?: string;
    children: React.ReactNode;
}
function MySessionProvider(props: MySessionProviderProps) {
    const [sessionToken, setSessionToken] = useState<string | undefined>(undefined);

    // Send data to back-end service, validate hash and receive session token
    useEffect(() => {
        let hash = window.Telegram.WebApp.initData;
        if (!hash && process.env.NEXT_PUBLIC_FAKE_HASH) hash = process.env.NEXT_PUBLIC_FAKE_HASH;

        new UserGetTokenRequest({ hash: hash })
            .call()
            .then((response) => {
                setSessionToken(response?.session.token ?? undefined);
            })
            .catch((e) => {});
    }, []);

    return (
        <MySessionContext.Provider
            value={{
                sessionToken: sessionToken
            }}
        >
            {sessionToken?.length ? props.children : undefined}
        </MySessionContext.Provider>
    );
}

export default MySessionProvider;
