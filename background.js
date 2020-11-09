chrome.commands.onCommand.addListener(function (command) {
  console.log("Command:", command);
  if (command === "copy_highlighted_text") {
    chrome.windows.getCurrent((w) => {
      chrome.tabs.query({ active: true, windowId: w.id }, (tabs) => {
        const tabId = tabs[0].id;
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "getSelectionAndCopy" },
          function (response) {
            console.log(response);
          }
        );
      });
    });
  }
});

chrome.contextMenus.create({
  id: "copy",
  title: "Add to Brainylog",
  contexts: ["selection"],
});
chrome.contextMenus.onClicked.addListener((selection) => {
  chrome.windows.getCurrent((w) => {
    chrome.tabs.query({ active: true, windowId: w.id }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "copyContextualSelection", payload: selection.selectionText },
        function (response) {
          console.log(response);
        }
      );
    });
  });
});
