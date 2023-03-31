import { loadExtensionScript } from '../utils/load-extension-script';

async function injectProvider() {
  const src = chrome.runtime.getURL('injections.js');

  const attributes = {
    'data-extension-id': chrome.runtime.id,
  };

  await loadExtensionScript('yasp-aa-extension', src, attributes);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'SET_SAFE_CPK') {
    window.localStorage.setItem('safe', request.payload)
  }
});

injectProvider();
