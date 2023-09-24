import { sendAPIRequest } from '@/api/sendAPIRequest';

export enum ApiRequestMethod {
    GET = 'GET',
    POST = 'POST'
}

export abstract class ApiRequest<I, O> {
    abstract path: string;
    abstract method: ApiRequestMethod;

    abstract input: I;

    call(sessionToken?: string): Promise<O | null> {
        return sendAPIRequest<O>(this.method, this.path, this.input, sessionToken);
    }
}
