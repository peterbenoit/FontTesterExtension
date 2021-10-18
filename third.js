chrome.storage.sync.get(['activesheet'], function(sheet) {
    console.log('Active Stylesheet', sheet);
});

let activetab = '';
chrome.storage.sync.get(['tab'], function(tab) {
    console.log('Active tab', tab);
    activetab = tab;
});


document.querySelectorAll('[title="fontstylesheet"]').forEach(e => e.remove());

var head = document.head;
var link = document.createElement("link");

link.type = "text/css";
link.rel = "stylesheet";
link.href = 'https://codepen.io/peterbenoit/pen/vYJLGLx.css';
link.title = 'fontstylesheet';

head.appendChild(link);

chrome.storage.sync.set({'activesheet': 'third', 'tab': activetab }, function() {
    console.log('Settings saved');
});