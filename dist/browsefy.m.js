export default function(e){void 0===e&&(e={});var o=e.userAgent;void 0===o&&(o="");var r={browser:"",os:"",platform:"mobile",model:""},i=o.toLowerCase()||window.navigator.userAgent.toLowerCase();if(i.indexOf("macintosh")>-1)r.os="macOS",r.platform="desktop";else if(i.indexOf("windows phone")>-1)r.os="Windows Phone";else{if(i.indexOf("xbox")>-1)return r.browser="Microsoft Edge",r.os="Windows",r.model="XBox",r.platform="console",r;if(i.indexOf("windows")>-1)r.os="Windows",r.platform="desktop";else if(i.indexOf("ipad")>-1)r.os="iOS",r.model="iPad",r.platform="tablet";else if(i.indexOf("iphone")>-1)r.os="iOS",r.model="iPhone";else if(i.indexOf("android")>-1)r.os="Android",i.indexOf("mobile")>-1||(i.indexOf("tablet")>-1||i.indexOf("nexus")>-1)&&(r.platform="tablet");else if(i.indexOf("cros")>-1)r.os="Chrome OS",r.platform="desktop";else{if(i.indexOf("blackberry")>-1||i.indexOf("bb")>-1||i.indexOf("playbook")>-1)return r.browser="BlackBerry",r.os="BlackBerry",r.platform=i.indexOf("playbook")<0?"mobile":"tablet",r;if(i.indexOf("playstation")>-1)return r.browser="PS Web Browser",r.model="PlayStation",r.platform="console",r}}if(i.indexOf("edg")>-1)r.browser="Microsoft Edge";else if(i.indexOf("ucbrowser")>-1)r.browser="UC Browser";else{if(i.indexOf("googlebot")>-1)return r.browser="Googlebot",r.platform="bot",r;i.indexOf("fxios")>-1||i.indexOf("firefox")>-1?r.browser="Firefox":i.indexOf("msie")>-1||i.indexOf("rv:")>-1?r.browser="Internet Explorer":i.indexOf("opera")>-1||i.indexOf("opr")>-1?r.browser="Opera":i.indexOf("chrome")>-1||i.indexOf("crios")>-1?r.browser="Chrome":"Android"!==r.os&&i.indexOf("safari")>-1?r.browser="Safari":i.indexOf("instagram")>-1?r.browser="Instagram":i.indexOf("pinterest")>-1?r.browser="Pinterest":(i.indexOf("fban")>-1||i.indexOf("fbav")>-1)&&i.indexOf("messenger")<0&&i.indexOf("fb_iab")<0?r.browser="Facebook":(i.indexOf("messenger")>-1||i.indexOf("fb_iab")>-1)&&(i.indexOf("fban")<0||i.indexOf("fbav")<0)?r.browser="Facebook Messenger":i.indexOf("en-us")>-1&&(r.browser="Android Browser")}return r}
//# sourceMappingURL=browsefy.m.js.map
