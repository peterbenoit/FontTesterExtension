// /* key: On network URL, value: proxy version. You probably only need to edit this list to add a new extension. */
// const dictionary = {
//   'websupport.cdc.gov': 'websupport-cdc.msappproxy.net',
//   'esp.cdc.gov': 'esp-cdc.msappproxy.net',
//   'mysites.cdc.gov': 'mysites-cdc.msappproxy.net',
//   'intradev.cdc.gov': 'intradev-cdc.msappproxy.net',
//   'intranetwp.cdc.gov': 'intranetwp-cdc.msappproxy.net',
//   'intralink.cdc.gov': 'intralink-cdc.msappproxy.net',
//   'intranet.cdc.gov': 'cdcintranet-cdc.msappproxy.net',
//   'learning.cdc.gov': 'learning-cdc.msappproxy.net',
//   'neighborhood.cdc.gov': 'cdcneighborhood-cdc.msappproxy.net',
//   'cdctoday.cdc.gov': 'cdctoday-cdc.msappproxy.net',
//   'wwwdev.cdc.gov': 'wwwdev-cdc.msappproxy.net',
//   'toolsadmin.cdc.gov': 'toolsadmin-cdc.msappproxy.net',
//   'git.cdc.gov': 'git-cdc.msappproxy.net',
//   'knowledgeshare.cdc.gov': 'knowledgeshare-cdc.msappproxy.net',
//   'peoplestatus.cdc.gov': 'peoplestatus-cdc.msappproxy.net',
//   'webinfo.cdc.gov': 'confluencewebinfoproxy-cdc.msappproxy.net',
//   'confluencedev.cdc.gov': 'confluencedev-cdc.msappproxy.net'
// }

// const dictionaryKeys = Object.keys(dictionary)

// const filter = {
//   urls: ['*://websupport-cdc.msappproxy.net/*', '*://*.cdc.gov/*']
// }

// const listener = (details) => {
//   const urlObj = new URL(details.url)
//   let redirectUrl = ''

//   dictionaryKeys.forEach( (key) => {
//     if(urlObj.host === key) {
//       urlObj.host = dictionary[key]
//       redirectUrl = urlObj.toString()  
//     }
//   })
  
//   if(redirectUrl.length > 0) {
//     return {
//       redirectUrl: redirectUrl
//     }
//   }
// }

// chrome.webRequest.onBeforeRequest.addListener(listener, filter, ['blocking']);



// document.getElementById('first').onclick = function() {
//   alert('first');
// }
