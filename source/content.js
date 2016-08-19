var message = {
  content: true
};
console.log('content sendMessage', message);
chrome.runtime.sendMessage(message, (response) => {
  console.log('content response:', response);
  document.body.style.backgroundColor = response.color;
});
