import React, { useEffect, useState } from 'react';
import MySwipeContainer from '@/components/Containers/MySwipeContainer/MySwipeContainer';
import { ExploreUsersRequest } from '@/api/requests/explore/exploreUsersRequest';
import { useSession } from '@/contexts/useSession';
import { IUser } from '@/types/IUser';
import { ReactionLikeRequest } from '@/api/requests/reaction/reactionLikeRequest';
import { ReactionDislikeRequest } from '@/api/requests/reaction/reactionDislikeRequest';

export default function ExploreScreen() {
    const [users, setUsers] = useState<Partial<IUser>[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadMoreNeeded, setIsLoadMoreNeeded] = useState(false);

    const { sessionToken } = useSession();

    // function to load users
    function exploreUsers() {
        new ExploreUsersRequest({})
            .call(sessionToken)
            .then(({ users }) => {
                setUsers(users.reverse());
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }

    // load the users on first load
    useEffect(() => {
        exploreUsers();
    }, []);

    // if `isLoadMoreNeeded` or `users` value changed, check if explore list should be loaded again
    useEffect(() => {
        // check if `load more needed` and all the reactions are processed
        if (isLoadMoreNeeded) {
            setIsLoadMoreNeeded(false);
            const allReactionsProcessed = (users || []).findIndex((it) => it.reactReqInProgress) < 0;
            if (allReactionsProcessed) exploreUsers();
        }
    }, [isLoadMoreNeeded, users]);

    // called when user swiped a user and liked!
    function userLiked(userPID: string) {
        const user = users?.find((it) => it.pID === userPID);
        if (!user) return;
        user.reacted = 'liked';
        user.reactReqInProgress = true;
        setUsers(
            users?.map((it) => {
                if (it.pID === userPID) return user;
                return it;
            }) || null
        );
        new ReactionLikeRequest({ userPID }).call(sessionToken).then(() => {
            delete user.reactReqInProgress;
            setUsers(
                users?.map((it) => {
                    if (it.pID === userPID) return user;
                    return it;
                }) || null
            );
        });
    }

    // called when user swiped a user and disliked!
    function userDisliked(userPID: string) {
        const user = users?.find((it) => it.pID === userPID);
        if (!user) return;
        user.reacted = 'disliked';
        user.reactReqInProgress = true;
        setUsers(
            users?.map((it) => {
                if (it.pID === userPID) return user;
                return it;
            }) || null
        );
        new ReactionDislikeRequest({ userPID }).call(sessionToken).then(() => {
            delete user.reactReqInProgress;
            setUsers(
                users?.map((it) => {
                    if (it.pID === userPID) return user;
                    return it;
                }) || null
            );
        });
    }

    // called when user reacted to all users
    function loadMoreNeeded() {
        setIsLoadMoreNeeded(true);
    }

    return isLoading ? (
        <> </>
    ) : (
        <MySwipeContainer
            users={users || []}
            userLiked={userLiked}
            userDisliked={userDisliked}
            loadMoreNeeded={loadMoreNeeded}
        />
    );
}
