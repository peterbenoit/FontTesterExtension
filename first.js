
let activetab = '';
chrome.storage.local.get('tabId', function(tab) {
    console.log('Active tab', tab.tabId);
    activetab = tab;
});


var obj = {};
obj[activetab] = 'first';
chrome.storage.local.set(obj);

// remove all the injected font style sheets
document.querySelectorAll('[title="fontstylesheet"]').forEach(e => e.remove());

var head = document.head;
var link = document.createElement("link");

link.type = "text/css";
link.rel = "stylesheet";
link.href = 'https://codepen.io/peterbenoit/pen/NWjYeXq.css';
link.title = 'fontstylesheet';

head.appendChild(link);


// show all keys
function getAllKeys() {
    chrome.storage.local.get(null, function(items) {
        var allKeys = Object.keys(items);
        console.log(allKeys);
    });
    chrome.storage.sync.get(null, function(items) {
        var allKeys = Object.keys(items);
        console.log(allKeys);
    });
}


// remove all keys
function removeAllKeys() {
    chrome.storage.sync.clear(); chrome.storage.local.clear();
}