chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text == "getTabID") {
        sendResponse({tab: sender.tab.id});
     }
});

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM LOADED');
}, false);


chrome.tabs.onActivated.addListener(function (info) {
    var tabId = info.tabId,
        windowId = info.windowId;
    console.log("oA", tabId, windowId);
});

chrome.tabs.onActiveChanged.addListener(function (tabId, info) {
    var windowId = info.windowId;
    console.log("oAC", tabId, windowId);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url) {
        console.log('URL changed', tabId);

        chrome.storage.local.get(tabId.toString(), function( obj ){
            console.log( 'tab', obj[tabId] );

            chrome.tabs.executeScript({
                file: obj[tabId] + '.js'
            });
        });
    }
});

function saveTabId(tabid) {
    chrome.storage.local.set({
        'tabId': tabid
    });
}

function getTabId() {
    chrome.storage.local.get('tabId', function ( t ) {
        console.log('tabId -> ', t );
    });
}