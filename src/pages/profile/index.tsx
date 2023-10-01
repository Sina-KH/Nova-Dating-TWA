import type { NextPage } from 'next';
import Head from 'next/head';
import ExploreScreen from '@/screens/explore/ExploreScreen';
import EditProfileScreen from '@/screens/profile/EditProfileScreen';

const ProfilePage: NextPage = () => {
    return <EditProfileScreen />;
};

export default ProfilePage;
