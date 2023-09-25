import { ApiRequest, ApiRequestMethod } from '@/api/requests/IApiRequest';
import { IUser } from '@/api/models/IUser';
import { ITag, ITagType } from '@/api/models/ITag';

export class TagListRequest extends ApiRequest<{ type: ITagType }, { tags: ITag[] }> {
    path = 'tag/list';
    method = ApiRequestMethod.GET;

    input;
    constructor(input: { type: ITagType }) {
        super();
        this.input = input;
    }
}
