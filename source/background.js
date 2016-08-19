chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('background onMessage', message, sender);
  sendResponse({color: 'yellow'});
})

chrome.tabs.create({
  url: chrome.extension.getURL('blocked.html')
});
