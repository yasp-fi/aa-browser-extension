
import { loadExtensionScript } from "../utils/load-extension-script";


async function injectProvider() {
    const src = chrome.runtime.getURL('injections.js');

    const attributes = {
        'data-extension-id': chrome.runtime.id,
    };

    await loadExtensionScript('yasp-aa-extension', src, attributes)

}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.info(request)
    if (request.type === 'SET_SAFE_CPK') {
        // Process the received data
        console.log(request.data);
    }
});

injectProvider();

