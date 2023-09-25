export interface IUser {
    photo?: {
        hash: string;
    };
    firstName: string;
    lastName: string;
    birthdate: string;
    gender: 'male' | 'female';
}
