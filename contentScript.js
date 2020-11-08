alert("Hello I'm a content script");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  str = window.getSelection().toString();
  alert("You selected " + str);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://5q71jg.deta.dev/extensionFiles/", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      // JSON.parse does not evaluate the attacker's scripts.

      alert(xhr.responseText);
      // var resp = JSON.parse(xhr.responseText);
    }
  };
  xhr.send(JSON.stringify({text: str}));
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
