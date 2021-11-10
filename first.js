chrome.runtime.sendMessage( {
	text: "getTabID"
}, tabId => {
	var obj = {};
	obj[ tabId.tab ] = 'first';
	chrome.storage.local.set( obj );
} );

document.querySelectorAll( '[title="fontstylesheet"]' )
	.forEach( e => e.remove() );

var head = document.head;
var link = document.createElement( "link" );

link.type = "text/css";
link.rel = "stylesheet";
link.href = 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/headings-css/heading-styles-1.css';
link.title = 'fontstylesheet';

var font = document.createElement( 'link' );
font.type = "text/css";
font.rel = "stylesheet";
font.href = ':https://codepen.io/peterbenoit/pen/oNeMYQE.css';
font.title = 'fontstylesheet';

head.appendChild( link );
head.appendChild( font );
