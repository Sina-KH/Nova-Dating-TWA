import axios from 'axios';
import { ApiRequest, ApiRequestMethod } from '@/api/requests/IApiRequest';

export async function sendAPIRequest<O>(
    method: ApiRequestMethod,
    path: string,
    input: any,
    token?: string
): Promise<O | null> {
    switch (method.toString()) {
        case ApiRequestMethod.POST.toString():
            try {
                const response = await axios.post<O>(`${process.env.NEXT_PUBLIC_URL_BACK}` + path, input, {
                    headers: {
                        token: token
                    }
                });
                return response.data;
            } catch (e) {
                throw e;
            }
    }
    return null;
}
