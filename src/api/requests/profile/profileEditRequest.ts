import { ApiRequest, ApiRequestMethod } from '@/api/requests/IApiRequest';
import { IUser } from '@/api/models/IUser';

interface Input {
    firstName: string;
    lastName: string;
    birthdate: string;
    photo?: File;
}

export class ProfileEditRequest extends ApiRequest<Input, {}> {
    path = 'profile/edit';
    method = ApiRequestMethod.FORM_DATA;

    input;
    constructor(input: Input) {
        super();
        this.input = input;
    }
}
