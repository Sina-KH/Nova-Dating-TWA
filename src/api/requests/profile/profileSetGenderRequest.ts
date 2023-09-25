import { ApiRequest, ApiRequestMethod } from '@/api/requests/IApiRequest';
import { IUser } from '@/api/models/IUser';

export class ProfileSetGenderRequest extends ApiRequest<{ gender: string }, {}> {
    path = 'profile/setGender';
    method = ApiRequestMethod.POST;

    input;
    constructor(input: { gender: string }) {
        super();
        this.input = input;
    }
}
