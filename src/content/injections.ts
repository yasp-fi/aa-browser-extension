import { inject } from "../utils/inject";



const ethereumProvider = {

}

export function performProviderInject(
    provider: unknown,
) {
    try {
        if (window) {
            inject(window, 'ethereum', provider)
        }
    } catch (error) {
        console.error('failed to inject')
    }
}


performProviderInject(
    ethereumProvider
);
