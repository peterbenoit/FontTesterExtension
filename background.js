// left in here in case we need to maintain 



// const filter = {
//     urls: ['*://*.cdc.gov/*']
// }

// const listener = (details) => {
//     console.log(details)
// }

// chrome.webRequest.onBeforeRequest.addListener(listener, filter, ['blocking']);


document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get(['activesheet'], function (items) {
        console.log('Active Stylesheet', items);
    });
    console.log('LOADED')
}, false);


chrome.tabs.onActivated.addListener(function (info) {
    var tabId = info.tabId,
        windowId = info.windowId;
    console.log("oA", tabId, windowId);
});
chrome.tabs.onActiveChanged.addListener(function (tabId, info) {
    tabId = tabId; // For comparison
    var windowId = info.windowId;
    console.log("oAC", tabId, windowId);

    chrome.storage.sync.set({
        'tab': tabId
    }, function () {
        console.log('tab saved');
    });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // read changeInfo data and do something with it (like read the url)
    if (changeInfo.url) {
        // do something here
        console.log('url changes', tabId)
    }
});