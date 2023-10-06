export enum IUserStatus {
    preRegistered = 0,
    active = 1
}

export interface IUser {
    // public identifier
    pID: string;

    // general fields
    photo?: {
        hash: string;
    };
    firstName: string;
    lastName: string;
    gender: 'male' | 'female';
    interests: any;

    // passed if users requests for their own data
    birthdate?: string;
    status?: IUserStatus;

    // age (passed for other users)
    age?: number;

    // client-side data
    reacted?: 'liked' | 'disliked';
    reactReqInProgress?: boolean;
}

function calculateAge(birthdate: string) {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export function userTitle(user: Partial<IUser>) {
    return `${user.firstName || ''} ${user.lastName || ''}, ${
        user.birthdate ? calculateAge(user.birthdate) : user.age || ''
    }`.trim();
}