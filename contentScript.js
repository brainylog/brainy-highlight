getSelectionAndCopy = () => {
  selection = window.getSelection().toString();
  copySelection(selection);
};

copySelection = (selection) => {
  if (!selection) {
    return;
  }
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://5q71jg.deta.dev/extensionFiles/", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      // TODO: add error alert
    }
  };
  xhr.send(JSON.stringify({ text: selection }));
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.action) {
    case "getSelectionAndCopy":
      getSelectionAndCopy();
      break;
    case "copyContextualSelection":
      copySelection(request.payload);
      break;
  }
});
// chrome.runtime.onMessage.addListener(function (message, callback) {
//   if (message == copy_highlighted_content) {
//     console.log("In content script");
//     alert("Hello");
//     // chrome.tabs.executeScript({
//     //   code: 'document.body.style.backgroundColor="orange"'
//     // });
//   }
