export enum ImagePresentationType {
    medium = 'm1000'
}

export function hashToImageURL(hash?: string, presentationType?: ImagePresentationType) {
    return hash
        ? process.env.NEXT_PUBLIC_URL_MEDIA! + hash + (presentationType ? '&pt=' + presentationType : '')
        : undefined;
}
