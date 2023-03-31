
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const currentTab = tabs[0];
  
  chrome.scripting.executeScript({
    target: {tabId: currentTab.id || 0, allFrames: true},
    func: () => {
      console.log(1)
    }
  })
})