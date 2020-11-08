alert("Hello I'm a content script");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  str = window.getSelection().toString();
  alert("You selected " + str);
  if (request.greeting == "hello") sendResponse({ farewell: "goodbye" });
});
// chrome.runtime.onMessage.addListener(function (message, callback) {
//   if (message == copy_highlighted_content) {
//     console.log("In content script");
//     alert("Hello");
//     // chrome.tabs.executeScript({
//     //   code: 'document.body.style.backgroundColor="orange"'
//     // });
//   }
