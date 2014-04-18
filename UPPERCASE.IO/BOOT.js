global.BOOT=BOOT=function(params){"use strict";var cluster=require("cluster"),version=Date.now(),cpuCount=require("os").cpus().length,i,work=function(sharedData){var fs=require("fs"),path=require("path"),MULTI_LANG_SUPPORT=params.MULTI_LANG_SUPPORT,MULTI_PLATFORM_SUPPORT=params.MULTI_PLATFORM_SUPPORT,rootPath=__dirname+"/..",browserScript="\nglobal = window;\n",securedBrowserScript="\nglobal = window;\n",platformScripts={},css="",logoText,pageContent="",initMultiPlatformScripts,saveMultiPlatformScripts,stringifyJSONWithFunction,loadAll,generatePageContent,startServer,startREPL;initMultiPlatformScripts=function(){var t,e;for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(e=MULTI_PLATFORM_SUPPORT[t],platformScripts[t]=void 0===e.initScript?"":e.initScript)},saveMultiPlatformScripts=function(){var t,e;for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(e=MULTI_PLATFORM_SUPPORT[t],fs.writeFileSync(e.path,platformScripts[t]))},stringifyJSONWithFunction=function(data){return JSON.stringify(data,function(t,e){return"function"==typeof e?"__THIS_IS_FUNCTION_START__"+e.toString()+"__THIS_IS_FUNCTION_END__":e},"	").replace(/("__THIS_IS_FUNCTION_START__(.*)__THIS_IS_FUNCTION_END__")/g,function(match,content){return eval("("+eval('"'+content.substring('"__THIS_IS_FUNCTION_START__'.length,content.length-'__THIS_IS_FUNCTION_END__"'.length)+'"')+")").toString()})},loadAll=function(){var t,e,n,i,r,o,s,a,c,l,O,P,f,S,_,d,u,p;t=function(t){var e=t.path,n=t.name;return fs.statSync(rootPath+"/"+e).isDirectory()===!0&&"."!==n[0]&&"node_modules"!==n&&"not_load"!==n&&"deprecated"!==n&&"_"!==n[0]},e=function(){fs.readdirSync(rootPath).forEach(function(e){var n,i,r,o,s,a;if(t({path:e,name:e})===!0)if(i=e.split("."),1===i.length){global[e]=BOX(e),browserScript+="global."+e+" = "+e+" = BOX('"+e+"');\n",securedBrowserScript+="global."+e+" = "+e+" = BOX('"+e+"');\n";for(a in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(a)===!0&&(platformScripts[a]+="global."+e+" = "+e+" = BOX('"+e+"');\n")}else for(o=global,s="",n=0;n<i.length;n+=1)if(r=i[n],s+=(""===s?"":".")+r,n<i.length-1){o=void 0!==o[r]?o[r]:o[r]={},browserScript+="if (global."+s+" === undefined) { global."+s+" = "+s+" = {}; }\n",securedBrowserScript+="if (global."+s+" === undefined) { global."+s+" = "+s+" = {}; }\n";for(a in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(a)===!0&&(platformScripts[a]+="if (global."+s+" === undefined) { global."+s+" = "+s+" = {}; }\n")}else{o[r]=BOX(e),browserScript+="global."+s+" = "+s+" = BOX('"+e+"');\n",securedBrowserScript+="global."+s+" = "+s+" = BOX('"+e+"');\n";for(a in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(a)===!0&&(platformScripts[a]+="global."+s+" = "+s+" = BOX('"+e+"');\n")}})},n=function(t){var e,n,i,r=rootPath+"/"+t,o=path.extname(t);if(r.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e)===!0&&o==="."+e)return n="//"+fs.statSync(r).mtime.getTime(),(fs.existsSync(r+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(r+".__UPPERCASE_IO_COMPILED").toString().substring(0,n.length)!==n)&&(i=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(r).toString(),r),fs.writeFileSync(r+".__UPPERCASE_IO_COMPILED",i)),void require(r+".__UPPERCASE_IO_COMPILED");".js"===o?require(r):".__UPPERCASE_IO_COMPILED"===o&&fs.existsSync(r.substring(0,r.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(r)},i=function(t){var e,n,i,r=rootPath+"/"+t,o=path.extname(t);if(r.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e)===!0&&o==="."+e)return n="//"+fs.statSync(r).mtime.getTime(),fs.existsSync(r+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(r+".__UPPERCASE_IO_COMPILED").toString().substring(0,n.length)!==n?(i=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(r).toString(),r),fs.writeFileSync(r+".__UPPERCASE_IO_COMPILED",i)):i=fs.readFileSync(r+".__UPPERCASE_IO_COMPILED").toString(),browserScript+=i+"\n",void(securedBrowserScript+=i+"\n");".js"===o?(i=fs.readFileSync(r).toString(),browserScript+=i+"\n",securedBrowserScript+=i+"\n"):".__UPPERCASE_IO_COMPILED"===o&&fs.existsSync(r.substring(0,r.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(r)},r=function(t){var e,n,i,r=rootPath+"/"+t,o=path.extname(t);if(r.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e)===!0&&o==="."+e)return n="//"+fs.statSync(r).mtime.getTime(),fs.existsSync(r+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(r+".__UPPERCASE_IO_COMPILED").toString().substring(0,n.length)!==n?(i=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(r).toString(),r),fs.writeFileSync(r+".__UPPERCASE_IO_COMPILED",i)):i=fs.readFileSync(r+".__UPPERCASE_IO_COMPILED").toString(),void(securedBrowserScript+=i+"\n");".js"===o?(i=fs.readFileSync(r).toString(),securedBrowserScript+=i+"\n"):".__UPPERCASE_IO_COMPILED"===o&&fs.existsSync(r.substring(0,r.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(r)},o=function(t,e){var n,i,r,o=rootPath+"/"+e,s=path.extname(e);if(o.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(n in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(n)===!0&&s==="."+n)return i="//"+fs.statSync(o).mtime.getTime(),fs.existsSync(o+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(o+".__UPPERCASE_IO_COMPILED").toString().substring(0,i.length)!==i?(r=i+"\n"+MULTI_LANG_SUPPORT[n](fs.readFileSync(o).toString(),o),fs.writeFileSync(o+".__UPPERCASE_IO_COMPILED",r)):r=fs.readFileSync(o+".__UPPERCASE_IO_COMPILED").toString(),void(platformScripts[t]+=r+"\n");".js"===s?(r=fs.readFileSync(o).toString(),platformScripts[t]+=r+"\n"):".__UPPERCASE_IO_COMPILED"===s&&fs.existsSync(o.substring(0,o.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(o)},s=function(t){var e;n(t),i(t);for(e in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(e)===!0&&o(e,t)},a=function(e,n){var i=function(e){var r,o;if(fs.existsSync(e)===!0)for(r=[],fs.readdirSync(e).forEach(function(i){var o=e+"/"+i;t({path:o,name:i})===!0?r.push(o):fs.statSync(rootPath+"/"+o).isDirectory()!==!0&&n(o)}),o=0;o<r.length;o+=1)i(r[o])};FOR_BOX(function(t){i(t.boxName+"/"+e)})},c=function(t){a(t,n)},l=function(t){a(t,i)},O=function(t){a(t,r)},P=function(){var t;for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&a(t,function(e){o(t,e)})},f=function(t){a(t,s)},S=function(){var t;if(void 0!==params){if(void 0!==params.CONFIG){EXTEND_DATA({origin:global.CONFIG,extend:params.CONFIG}),browserScript+="EXTEND_DATA({ origin : global.CONFIG, extend : "+stringifyJSONWithFunction(params.CONFIG)+" });\n",securedBrowserScript+="EXTEND_DATA({ origin : global.CONFIG, extend : "+stringifyJSONWithFunction(params.CONFIG)+" });\n";for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(platformScripts[t]+="EXTEND_DATA({ origin : global.CONFIG, extend : "+stringifyJSONWithFunction(params.CONFIG)+" });\n")}void 0!==params.SERVER_CONFIG&&(EXTEND_DATA({origin:global.SERVER_CONFIG,extend:params.SERVER_CONFIG}),SERVER_CONFIG.rootPath=rootPath),void 0!==params.BROWSER_CONFIG&&(browserScript+="EXTEND_DATA({ origin : global.BROWSER_CONFIG, extend : "+stringifyJSONWithFunction(params.BROWSER_CONFIG)+" });\n",securedBrowserScript+="EXTEND_DATA({ origin : global.BROWSER_CONFIG, extend : "+stringifyJSONWithFunction(params.BROWSER_CONFIG)+" });\n");for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&void 0!==params[t+"_CONFIG"]&&(platformScripts[t]+="EXTEND_DATA({ origin : global."+t+"_CONFIG, extend : "+stringifyJSONWithFunction(params[t+"_CONFIG"])+" });\n")}CONFIG.version=sharedData.version,browserScript+="CONFIG.version = "+CONFIG.version+";\n",securedBrowserScript+="CONFIG.version = "+CONFIG.version+";\n";for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(platformScripts[t]+="CONFIG.version = "+CONFIG.version+";\n")},_=function(){var t=UPPERCASE.IO.MODULE("mongolian");UPPERCASE.IO.db=(new t).db(SERVER_CONFIG.dbName),SERVER_CONFIG.isNotRequiringDBAuth!==!0&&UPPERCASE.IO.db.auth(SERVER_CONFIG.dbUsername,SERVER_CONFIG.dbPassword)},d=function(t){var e=rootPath+"/"+t,n=path.extname(t),i=fs.readFileSync(e).toString();".css"===n&&(css+=i)},u=function(){var t,e=UPPERCASE.IO.MODULE("uglify-js"),n=UPPERCASE.IO.MODULE("sqwish");browserScript=e.minify(browserScript,{fromString:!0,mangle:!0}).code,securedBrowserScript=e.minify(securedBrowserScript,{fromString:!0,mangle:!0}).code,css=n.minify(css);for(t in platformScripts)platformScripts.hasOwnProperty(t)===!0&&(platformScripts[t]=e.minify(platformScripts[t],{fromString:!0,mangle:!0}).code)},p=function(){logoText=fs.readFileSync(rootPath+"/UPPERCASE.IO/LOGO"),browserScript="/* Welcome to JavaScript World! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n*/"+browserScript,css="/* Welcome to CSS World! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n*/"+css},s("UPPERCASE.IO/METHOD.js"),s("UPPERCASE.IO/CLASS.js"),s("UPPERCASE.IO/OBJECT.js"),s("UPPERCASE.IO/BOX.js"),s("UPPERCASE.IO/FOR_BOX.js"),e(),f("COMMON"),c("SERVER"),l("BROWSER"),O("BROWSER_SECURED"),P(),i("UPPERCASE.IO/BROWSER_FIX.js"),S(),SERVER_CONFIG.isNotUsingDB!==!0&&_(),i("UPPERCASE.IO/BROWSER_INIT.js"),d("UPPERCASE.IO/STYLE.css"),CONFIG.isDevMode!==!0&&u(),p()},generatePageContent=function(){pageContent+="<!DOCTYPE html>",pageContent+="<!--\n\n  Welcome! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n-->",pageContent+="<html>",pageContent+="<head>",pageContent+='<meta charset="utf-8">',pageContent+='<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'+(CONFIG.isMobileFullScreen===!0?", minimal-ui":"")+'">',pageContent+='<meta name="google" value="notranslate">',void 0!==CONFIG.googleSiteVerificationKey&&(pageContent+='<meta name="google-site-verification" content="'+CONFIG.googleSiteVerificationKey+'" />'),pageContent+='<meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">',void 0!==CONFIG.description&&(pageContent+='<meta name="description" content="'+CONFIG.description+'">'),pageContent+="<title>"+CONFIG.defaultTitle+"</title>",pageContent+='<link rel="stylesheet" type="text/css" href="__CSS?'+CONFIG.version+'" />',pageContent+="</head>",pageContent+="<body>",pageContent+="<noscript>",pageContent+='<p style="padding:15px;">',pageContent+="자바스크립트 기능이 꺼져있습니다. 브라우저의 자바스크립트 기능을 켜 주시기 바랍니다. 감사합니다~! ^-^",pageContent+="<br>",pageContent+="JavaScript is disabled. Please enable JavaScript in your browser. Thank you~! :)",pageContent+="</p>",pageContent+="</noscript>",pageContent+='<script type="text/javascript" src="__SCRIPT?'+CONFIG.version+'"></script>',pageContent+="</body>",pageContent+="</html>"},startServer=function(){var t,e,n,i,r=require("http"),o=require("https"),s=UPPERCASE.IO.MODULE("socket.io"),a=UPPERCASE.IO.MODULE("formidable").IncomingForm,c=UPPERCASE.IO.MODULE("imagemagick");i=function(t,e){var n,i,r,o,s,l,O,P,f,S,_,d,u,p,E,C,I,R,g,T,m,h,F,U,N,A=t.url,v={};s=function(t){var e=path.extname(t);return".png"===e?"image/png":".jpg"===e||".jpeg"===e?"image/jpeg":".gif"===e?"image/gif":".js"===e?"text/javascript":".css"===e?"text/css":".txt"===e?"text/plain":".html"===e?"text/html":".swf"===e?"application/x-shockwave-flash":"application/octet-stream"},l=function(t){return"text/javascript"===t?"utf-8":"text/css"===t?"utf-8":"text/plain"===t?"binary":"text/html"===t?"utf-8":"image/png"===t?"binary":"image/jpeg"===t?"binary":"image/gif"===t?"binary":"application/x-shockwave-flash"===t?"binary":"binary"},O=function(){var t=A.indexOf("?");-1!==t&&(i=parseInt(A.substring(t+1),10),A=A.substring(0,t))},P=function(){n=A.substring(1)},f=function(){var t=n.indexOf("/");-1===t?r=CONFIG.defaultBoxName:(r=n.substring(0,t),n=n.substring(t+1))},S=function(){var t=n.indexOf("/");-1===t?o="":(o=n.substring(0,t),n=n.substring(t+1))},_=function(){var e;return void 0===t.headers.authorization?!1:(e=new Buffer(t.headers.authorization.split(" ")[1],"base64").toString().split(":"),console.log("Decoded authorization: "+e),e[0]===SERVER_CONFIG.securedUsername&&e[1]===SERVER_CONFIG.securedPassword)},d=function(e){return e===!0?void 0!==t.headers["if-none-match"]||void 0!==t.headers["if-modified-since"]:void 0!==t.headers["if-none-match"]&&parseInt(t.headers["if-none-match"],10)===CONFIG.version||void 0!==t.headers["if-modified-since"]&&new Date(t.headers["if-modified-since"]).getTime()===1e3*parseInt(CONFIG.version/1e3,10)},u=function(t){e.writeHead(302,{Location:t}),e.end()},p=function(){console.log("Someone is trying to AUTH!: "+t.connection.remoteAddress),e.statusCode=401,e.setHeader("WWW-Authenticate",'Basic realm="AUTH"'),e.end()},E=function(){e.statusCode=304,e.end()},C=function(t){var n=t.content,i=t.contentType,r=t.encoding,o=t.isToCache,s=t.lastModifiedTime;e.setHeader("Content-Type",i),void 0!==s?(e.setHeader("ETag",s.getTime()),e.setHeader("Last-Modified",s.toUTCString())):o===!0&&(e.setHeader("ETag",CONFIG.version),e.setHeader("Last-Modified",new Date(CONFIG.version).toUTCString())),e.statusCode=200,e.end(n,r)},I=function(){fs.exists(CONFIG.defaultBoxName+"/favicon.ico",function(t){t===!0?fs.readFile(CONFIG.defaultBoxName+"/favicon.ico","binary",function(t,n){null===t&&e.end(n,"binary")}):fs.readFile("UPPERCASE.IO/favicon.ico","utf-8",function(t,n){null===t&&e.end(n,"binary")})})},R=function(){void 0===t.headers.authorization?p():_()===!0?fs.exists(CONFIG.defaultBoxName+"/AUTHED.html",function(t){t===!0?fs.readFile(CONFIG.defaultBoxName+"/AUTHED.html","utf-8",function(t,n){null===t&&(e.writeHead(500,{"Content-Type":"text/html"}),e.end(n,"utf-8"))}):fs.readFile("UPPERCASE.IO/AUTHED.html","utf-8",function(t,n){null===t&&(e.writeHead(500,{"Content-Type":"text/html"}),e.end(n,"utf-8"))})}):fs.readFile("UPPERCASE.IO/AUTH_ERROR.html","utf-8",function(t,n){null===t&&(e.writeHead(500,{"Content-Type":"text/html"}),e.end(n,"utf-8"))})},g=function(){C({content:pageContent,contentType:"text/html",encoding:"utf-8"})},T=function(){d()===!0&&CONFIG.isDevMode!==!0?E():i!==CONFIG.version&&CONFIG.isDevMode!==!0?u(A+"?"+CONFIG.version):C(_()===!0?{content:securedBrowserScript,contentType:"text/javascript",encoding:"utf-8",isToCache:!0}:{content:browserScript,contentType:"text/javascript",encoding:"utf-8",isToCache:!0})},m=function(){d()===!0&&CONFIG.isDevMode!==!0?E():i!==CONFIG.version&&CONFIG.isDevMode!==!0?u(A+"?"+CONFIG.version):C({content:css,contentType:"text/css",encoding:"utf-8",isToCache:!0})},h=function(){var n=new a,i=[],o={};n.uploadDir="__RF/"+r+"/__TEMP/",fs.existsSync(rootPath+"/"+n.uploadDir)===!1&&console.log("Not exists folder: "+rootPath+"/"+n.uploadDir),void 0!==global[r]&&fs.existsSync(rootPath+"/"+n.uploadDir)===!0?(n.on("field",function(t,e){o[t]=e}).on("file",function(t,e){i.push({tempPath:e.path,size:e.size,name:e.name,type:e.type,lastModifiedTime:e.lastModifiedDate})}).on("end",function(){var t=global[r].DB("__UPLOAD_FILE"),n=0;EACH(i,function(s){var a=s.tempPath;return s.size>1024*CONFIG.maxUploadFileMB*1024?(e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='SIZE'</script>","utf-8"),!1):(EACH(o,function(t,e){""!==t.trim()&&(s[e]=t)}),REMOVE_AT({data:s,key:"tempPath"}),void c.readMetadata(a,function(o,l){var O=function(){t.createData(s,function(t,o){var s=UPPERCASE.IO.MODULE("mv"),c=rootPath+"/__RF/"+r+"/"+o.id;void 0===t&&s(a,c,function(){n+=1,n===i.length&&(EACH(i,function(t,e){i[e]=PACK_DATA(t)}),e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>fileDataSet="+JSON.stringify(i)+"</script>","utf-8")),console.log("File '"+c+"' ("+o.name+", "+o.size+" byte) uploaded.")})})};void 0!==l.exif?(s.exif=l.exif,c.convert([a,"-auto-orient",a],function(){O()})):O()}))})}).on("error",function(){e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='ERROR'</script>","utf-8")}),n.parse(t)):(e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='ERROR'</script>","utf-8"))},F=function(){var t,e,o;d()===!0?E():i!==CONFIG.version?u(A+"?"+CONFIG.version):(t=rootPath+"/"+r+"/R/"+n,void 0!==v[t]?C(v[t]):(e=s(n),o=l(e),fs.exists(t,function(n){n===!0?fs.readFile(t,o,function(n,i){null!==n?N():C(v[t]={content:i,contentType:e,encoding:o,isToCache:!0})}):N()})))},U=function(){var t;d(!0)===!0?E():(t=rootPath+"/__RF/"+r+"/"+n,fs.exists(t,function(e){e===!0?fs.readFile(t,"binary",function(e,n){null!==e?N():fs.stat(t,function(t,e){null!==t?N():C({content:n,contentType:"application/octet-stream",encoding:"binary",lastModifiedTime:e.mtime})})}):N()}))},N=function(){fs.exists(CONFIG.defaultBoxName+"/ERROR.html",function(t){t===!0?fs.readFile(CONFIG.defaultBoxName+"/ERROR.html","utf-8",function(t,n){null===t&&(e.writeHead(500,{"Content-Type":"text/html"}),e.end(n,"utf-8"))}):fs.readFile("UPPERCASE.IO/ERROR.html","utf-8",function(t,n){null===t&&(e.writeHead(500,{"Content-Type":"text/html"}),e.end(n,"utf-8"))})})},O(),P(),"favicon.ico"===n?I():"__AUTH"===n?R():""===n?g():"__SCRIPT"===n?T():"__CSS"===n?m():(f(),S(),"R"===o?F(r):"RF"===o?U(r):"__UPLOAD"===n&&"POST"===t.method.toUpperCase()?h():N())},t=r.createServer(i).listen(CONFIG.port),void 0!==SERVER_CONFIG.securedPort&&(e=o.createServer({key:fs.readFileSync(rootPath+"/"+SERVER_CONFIG.securedKeyFileName),cert:fs.readFileSync(rootPath+"/"+SERVER_CONFIG.securedCrtFileName)},i).listen(SERVER_CONFIG.securedPort)),n=s.listen(t),CONFIG.isDevMode===!0?n.set("log level",2):n.set("log level",1),n.set("store",new s.RedisStore),n.set("flash policy port",void 0===CONFIG.flashPolicyServerPort?CONFIG.port+1955:CONFIG.flashPolicyServerPort),n.set("transports",CONFIG.transports),CONNS.type.socketPack=n.sockets,OBJECT.init(),FOR_BOX(function(t){void 0!==t.MAIN&&t.MAIN()}),console.log("[UPPERCASE.IO] "+CONFIG.defaultTitle+" WORKER #"+cluster.worker.id+" (PID:"+cluster.worker.process.pid+") BOOTed. => http://localhost:"+CONFIG.port+(void 0!==SERVER_CONFIG.securedPort?" SECUREd => https://localhost:"+SERVER_CONFIG.securedPort:""))},startREPL=function(){DELAY(1,function(){var t=require("repl");t.start({prompt:"UPPERCASE.IO> ",input:process.stdin,output:process.stdout})})},initMultiPlatformScripts(),loadAll(),saveMultiPlatformScripts(),generatePageContent(),startServer(),1===cluster.worker.id&&SERVER_CONFIG.isUsingREPL===!0&&startREPL()},fork=function(){cluster.fork().send({version:version})};if(cluster.isMaster){for(i=0;cpuCount>i;i+=1)fork();cluster.on("exit",function(t,e,n){console.log("[UPPERCASE.IO] WORKER #"+t.id+" (PID:"+t.process.pid+") died. ("+(void 0!==n?n:e)+"). restarting..."),fork()})}else process.on("message",work)};