import { ApiRequest, ApiRequestMethod } from '@/api/requests/IApiRequest';

export class UserGetTokenRequest extends ApiRequest<{ hash: string }, { session: { token: string } }> {
    path = 'user/getToken';
    method = ApiRequestMethod.POST;

    input;
    constructor(input: { hash: string }) {
        super();
        this.input = input;
    }
}
