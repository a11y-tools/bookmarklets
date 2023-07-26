/*
*   build-html.js - node program that outputs HTML list of bookmarklet links
*/

/* The url defaults to localhost for development. */
/* To override, pass in as command-line argument. */
var url = process.argv[2] || 'http://localhost/bookmarklets/build/';
console.log(buildHtml(url));

function buildHtml (url) {
  return `<ul>
  ${createListItem('Forms', url)}
  ${createListItem('Headings', url)}
  ${createListItem('Images', url)}
  ${createListItem('Landmarks', url)}
  ${createListItem('Lists', url)}
</ul>`
}

function createListItem (name, url) {
  return `<li><a href="${createBookmarkletHref(name, url)}">${name}</a></li>`;
}

function createBookmarkletHref (name, url) {
  var bookmarklet = `window.a11y${name}`;
  var scriptname = `${name.toLowerCase()}.js`;
  var baseUrl = url.trim();
  if (!baseUrl.endsWith('/')) baseUrl += '/';

  return `javascript:if(${bookmarklet})${bookmarklet}.run();else{(function(){var%20head=document.getElementsByTagName('head')[0];var%20link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href='${baseUrl}styles.css';head.appendChild(link);var%20script=document.createElement('script');script.src='${baseUrl}${scriptname}';head.appendChild(script)})()}`;
}
