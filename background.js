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
}, false);