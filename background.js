// left in here in case we need to maintain 



// const filter = {
//     urls: ['*://*.cdc.gov/*']
// }

// const listener = (details) => {
//     console.log(details)
// }

// chrome.webRequest.onBeforeRequest.addListener(listener, filter, ['blocking']);


document.addEventListener('DOMContentLoaded', function () {
    // chrome.storage.local.get(['activesheet'], function (items) {
    //     console.log('Active Stylesheet', items);
    // });
    console.log('DOM LOADED');
}, false);


chrome.tabs.onActivated.addListener(function (info) {
    var tabId = info.tabId,
        windowId = info.windowId;
    console.log("oA", tabId, windowId);
    saveTabId(tabId);
    getTabId();
});

chrome.tabs.onActiveChanged.addListener(function (tabId, info) {
    tabId = tabId; // For comparison
    var windowId = info.windowId;
    console.log("oAC", tabId, windowId);
    saveTabId(tabId);
    getTabId();
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // read changeInfo data and do something with it (like read the url)
    if (changeInfo.url) {
        // do something here
        console.log('URL changed', tabId);

        saveTabId(tabId);
        getTabId();


        // chrome.storage.local.get(['activesheet'], function(sheet) {
        //     console.log('Active sheet ->', sheet);
        //     chrome.tabs.executeScript({
        //         file: sheet.activesheet + '.js'
        //     });
        // });
    }
});

function saveTabId(tabid) {
    chrome.storage.local.set({
        'tabId': tabid
    }, function () {
        console.log('saveTabId -> tabId saved');
    });
}

function getTabId() {
    chrome.storage.local.get('tabId', function ( t ) {
        console.log('tabId -> ', t );
    });
}