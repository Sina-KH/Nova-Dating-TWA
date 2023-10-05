import { ApiRequest, ApiRequestMethod } from '@/api/requests/IApiRequest';

export class ProfileSetInterestsRequest extends ApiRequest<{ interests: string[] }, {}> {
    path = 'profile/setInterests';
    method = ApiRequestMethod.POST;

    input;
    constructor(input: { interests: string[] }) {
        super();
        this.input = input;
    }
}
