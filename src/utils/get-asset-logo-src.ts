import {YASP_FI_API} from '../constants/urls';

export function getAssetLogoSrc(imageSlug: string): string {
    return `${YASP_FI_API}/static/asset/${imageSlug}.svg`;
}
