import {YASP_FI_API} from '../constants/urls';

export function getYaspApiStaticSrc(imageSlug: string, staticCategory?: string): string {
    return `${YASP_FI_API}/static/${staticCategory ? staticCategory : 'asset'}/${imageSlug}.svg`;

}
