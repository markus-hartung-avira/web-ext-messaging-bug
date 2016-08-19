# web-ext-messaging-bug

Demo extension for bug that occurs when a extension page registers a listener for
chrome.runtime.onMessage, and then the page is navigated away from.

The handler will recieve messages as if it where registered in the background script.
Once the user navigates away from the page the handler will still persit but throw errors when
trying to access the message object.
Once the tab that registered the handler is closed, the handler is removed as well.
