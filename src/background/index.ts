


if (chrome) {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.target === 'contentScript' && message.type === 'SET_SAFE_CPK') {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                console.info(tabs)
                const activeTabId = tabs[0].id;

                console.info(activeTabId, message);

                chrome.tabs.sendMessage(activeTabId!, message)
            });
        }
    })
}
