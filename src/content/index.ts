
import { loadExtensionScript } from "../utils/load-extension-script";


async function injectProvider() {
    const src = chrome.runtime.getURL('injections.js');

    console.info(src)
    const attributes = {
        'data-extension-id': chrome.runtime.id,
    };

    await loadExtensionScript('yasp-aa-extension', src, attributes)
}


injectProvider();
