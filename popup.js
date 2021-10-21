document.getElementById('firstss').addEventListener('click', function () {
    chrome.tabs.executeScript({
        file: 'first.js'
    });
});

document.getElementById('secondss').addEventListener('click', function () {
    chrome.tabs.executeScript({
        file: 'second.js'
    });
});

document.getElementById('thirdss').addEventListener('click', function () {
    chrome.tabs.executeScript({
        file: 'third.js'
    });
});

document.getElementById('fourthss').addEventListener('click', function () {
    chrome.tabs.executeScript({
        file: 'fourth.js'
    });
});

document.getElementById('removeallss').addEventListener('click', function () {
    chrome.tabs.executeScript({
        file: 'remove.js'
    });
    removeAllKeys();
});


// show all keys
function getAllKeys() {
    chrome.storage.local.get(null, function (items) {
        var allKeys = Object.keys(items);
        console.log(allKeys);
    });
    // chrome.storage.sync.get(null, function (items) {
    //     var allKeys = Object.keys(items);
    //     console.log(allKeys);
    // });
}


// remove all keys
function removeAllKeys() {
    // chrome.storage.sync.clear();
    chrome.storage.local.clear();
}

// var tab = 123;
// var obj = {};
// obj[tab] = 'first';
// chrome.storage.local.set(obj);

// chrome.storage.local.get('123', function(e){console.log(e)})