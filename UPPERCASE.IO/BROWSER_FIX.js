RUN(function(){"use strict";var o=function(o){document.write('<script src="/UPPERCASE.IO/R/BROWSER_FIX/'+o+'.js"></script>')};"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),void 0===global.JSON&&o("JSON"),void 0===global.pageYOffset&&o("SCROLL_TOP"),void 0===global.pageXOffset&&o("SCROLL_LEFT"),(void 0===global.console||void 0===console.log||void 0===console.log.apply)&&o("console.log"),void 0===global.localStorage&&o("STORE"),void 0===global.onhashchange&&o("EVENT_LOW"),void 0===document.createElement("input").placeholder&&o("INPUT"),void 0===DIV({style:{color:"rgba(88, 88, 88, 0.88)"}}).getStyle("color")&&o("RGBA"),void 0===Date.now&&(Date.now=function(){return(new Date).getTime()}),void 0===global.Audio&&o("SOUND"),"Microsoft Internet Explorer"===navigator.appName&&o("FIX_IE"),void 0!==navigator.userAgent&&-1!==navigator.userAgent.toLowerCase().indexOf("android")&&o("FIX_ANDROID")});