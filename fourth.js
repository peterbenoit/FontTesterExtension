chrome.storage.local.get(['activesheet'], function(sheet) {
    console.log('Active Stylesheet', sheet);
});

let activetab = '';
chrome.storage.local.get(['tab'], function(tab) {
    console.log('Active tab', tab);
    activetab = tab;
});


document.querySelectorAll('[title="fontstylesheet"]').forEach(e => e.remove());

var head = document.head;
var link = document.createElement("link");

link.type = "text/css";
link.rel = "stylesheet";
link.href = 'https://codepen.io/peterbenoit/pen/porgbdE.css';
link.title = 'fontstylesheet';

head.appendChild(link);

chrome.storage.local.set({'activesheet': 'fourth', 'tab': activetab }, function() {
    console.log('Settings saved');
});