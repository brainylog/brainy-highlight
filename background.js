chrome.commands.onCommand.addListener(function (command) {
  console.log("Command:", command);
  if (command === "copy_highlighted_text") {
    chrome.windows.getCurrent((w) => {
      chrome.tabs.query({ active: true, windowId: w.id }, (tabs) => {
        const tabId = tabs[0].id;
        chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (
          response
        ) {
          console.log(response);
        });
      });
    });
  }
});
