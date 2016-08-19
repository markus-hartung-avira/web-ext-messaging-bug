function onMessage (message) {
  console.log('blocked onMessage', message);
  // Trying to access any property on the message object will throw the following error in the
  // browser console:
  // Unchecked lastError value: Error: Permission denied to access property "content"
  // The error is only thrown when the blocked.html page has been navigated away from.
  console.log('blocked onMessage content', message.content);
};
// This handler will recieve messages from other tabs which is consistent with the chrome
// implementation, but it does not get removed when navigating to another page in the same tab,
// instead it will throw the above error message.
// Once the inital tab is closed the handler will be removed as well.
chrome.runtime.onMessage.addListener(onMessage);

// Removing the listener explicitly seems to fix the issue.
// window.onunload = function() {
//   chrome.runtime.onMessage.removeListener(onMessage);
// }

