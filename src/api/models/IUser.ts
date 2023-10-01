export interface IUser {
    // public identifier
    pID: string;
    photo?: {
        hash: string;
    };
    firstName: string;
    lastName: string;
    birthdate: string;
    gender: 'male' | 'female';
    interests: any;
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

export function userTitle(user: IUser) {
    return `${user.firstName} ${user.lastName}, ${calculateAge(user.birthdate)}`.trim();
}
