chrome.storage.sync.get(['activesheet'], function(items) {
    console.log('Active Stylesheet', items);
});
document.querySelectorAll('[title="fontstylesheet"]').forEach(e => e.remove());

var head = document.head;
var link = document.createElement("link");

link.type = "text/css";
link.rel = "stylesheet";
link.href = 'https://codepen.io/peterbenoit/pen/NWjYeXq.css';
link.title = 'fontstylesheet';

head.appendChild(link);

chrome.storage.sync.set({'activesheet': 'first'}, function() {
    console.log('Settings saved');
});