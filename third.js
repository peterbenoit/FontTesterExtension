chrome.runtime.sendMessage({
    text: "getTabID"
}, tabId => {
    // console.log('My tabId is', tabId);

    var obj = {};
    obj[tabId.tab] = 'third';
    chrome.storage.local.set(obj);
});

document.querySelectorAll('[title="fontstylesheet"]').forEach(e => e.remove());

var head = document.head;
var link = document.createElement("link");

link.type = "text/css";
link.rel = "stylesheet";
link.href = 'https://codepen.io/peterbenoit/pen/vYJLGLx.css';
link.title = 'fontstylesheet';

head.appendChild(link);