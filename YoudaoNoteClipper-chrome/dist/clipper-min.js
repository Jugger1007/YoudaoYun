(()=>{"use strict";const e={logEnabled:!0,vendor:"ChromeStore",versionNum:2,server:document.location.protocol+"//note.youdao.com",clipperBaseURL:document.location.protocol+"//note.youdao.com/yws",logurl:"/mapi/ilogrpt?method=putwcplog",checkLogin:"/mapi/user?method=get",getFolders:document.location.protocol+"//note.youdao.com/yws/api/personal/share/subdirs",clipperClipType:"OnlyHTML",clipperDomPrefix:"_YNote",loadingHTML:'<img src="//note.youdao.com/yws/images/webclipper/loading.gif" style="position: absolute;top: 20%;margin-left: -20px;">',clipperFormFields:[["title","text","tl"],["path","text","p"],["content","area","bs"],["source","text","src"],["type","text","type"],["userid","text","userid"],["len","text","len"],["charset","text","cs"],["sign","text","e"]],clipperStyle:"position:fixed;right:10px;top:10px;width:308px;height:415px;z-index: 9999999999999 !important;",styleMerge:{margin:["margin-top","margin-right","margin-bottom","margin-left"],padding:["padding-top","padding-right","padding-bottom","padding-left"],"list-style":["list-style-type","list-style-position","list-style-image"],"border-top":["border-top-width","border-top-style","border-top-color"],"border-bottom":["border-bottom-width","border-bottom-style","border-bottom-color"],"border-left":["border-left-width","border-left-style","border-left-color"],"border-right":["border-right-width","border-right-style","border-right-color"],background:["background-color","background-image","background-repeat","background-position"],margin:["margin-top","margin-right","margin-bottom","margin-left"]},formatTag:{br:null,p:null,img:null},styleQuote:{"font-family":!0},clipperFilterStyles:{keep:{"*":["font-size","font-style","font-weight","font-family","line-height","margin","padding","color","text-align","float","overflow","width","height","border-top","border-bottom","border-right","border-left","visibility","text-decoration","background","margin"],img:["height","width","float","border"],i:["display","background","height","width"],li:["list-style"],ul:["list-style"]},remove:{},"default":{}},clipperFilterAttributes:{keep:{},remove:{style:null,"class":null,classname:null,id:null,onclick:null,onsubmit:null,onmouseover:null,onmouseout:null,onmousedown:null,onpaste:null,contenteditable:null,designmode:null,onload:null,"for":null,method:null,tabindex:null}},filterElements:{keep:{},remove:{style:null,script:null,input:null,select:null,option:null,textarea:null,button:null,object:null,applet:null,embed:null}},listNodes:{ul:null,ol:null},selfCloseTag:{base:null,basefont:null,frame:null,link:null,meta:null,area:null,br:null,col:null,hr:null,img:null,input:null,param:null},translateTagName:{body:"div",form:"div",strong:"span",h1:"span"},names:{FrameName:"YNoteForm"+Math.floor(Math.random(1e4)),FormName:"YNoteForm"+Math.floor(Math.random(1e4))},doc:{mainContent:null,mainContentTag:null,container:window.document,contentType:"1",selectContent:null},css:{dialog:"width:100%;height:100%",view:"width:100%;height:100%"},hasSelection:!1};var t=document;if("function"!=typeof Function.prototype.inherit&&(Function.prototype.inherit=function(e){"function"==typeof e&&(this.prototype=new e,this.prototype.parent=e(),this.prototype.constructor=this)}),CSSStyleDeclaration.prototype.getPropertyCSSValue==undefined){function e(e,t){this.cssText=CSSStyleDeclaration.prototype.getPropertyValue.call(e,t)}e.constructor=e,e.prototype.toString=function(){return this.cssText},CSSStyleDeclaration.prototype.getPropertyCSSValue=function(t){return new e(this,t)}}const n={trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},findPos:function(e){var t={x:0,y:0};if(document.documentElement.getBoundingClientRect())t.x=e.getBoundingClientRect().left+this.scroll().left,t.y=e.getBoundingClientRect().top+this.scroll().top;else for(;e;)t.x+=e.offsetLeft,t.y+=e.offsetTop,e=e.offsetParent;return t},indexOf:function(e,t){if(e.indexOf)return e.indexOf(t);var n=-1;return this.each(e,(function(e){if(this[e]===t)return n=e,!1})),n},each:function(e,t,n){if(e!==undefined&&null!==e){if(e.length===undefined||this.isFunction(e)){for(var o in e)if(e.hasOwnProperty(o)&&!1===t.call(n||e[o],o,e[o]))break}else for(var i=0;i<e.length&&!1!==t.call(n||e,i,e[i]);i++);return e}},css:function(e,t){if("string"==typeof t)return function(e,t){var n="";if("float"==t&&(t=document.defaultView?"float":"styleFloat"),e.style[t])n=e.style[t];else if(e.currentStyle)n=e.currentStyle[t];else if(document.defaultView&&document.defaultView.getComputedStyle){t=t.replace(/([A-Z])/g,"-$1").toLowerCase();var o=document.defaultView.getComputedStyle(e,"");n=o&&o.getPropertyValue(t)}else n=null;if("auto"!=n&&-1===n.indexOf("%")||"width"!==t.toLowerCase()&&"height"!==t.toLowerCase()||"none"==e.style.display||-1===n.indexOf("%")||(n=e["offset"+t.charAt(0).toUpperCase()+t.substring(1).toLowerCase()]+"px"),"opacity"==t)try{n=e.filters["DXImageTransform.Microsoft.Alpha"].opacity,n/=100}catch(i){try{n=e.filters("alpha").opacity}catch(r){}}return n}(e,t);this.each(t,(function(t,n){e.style[t]=n}))},scroll:function(){return{left:document.documentElement.scrollLeft+document.body.scrollLeft,top:document.documentElement.scrollTop+document.body.scrollTop}},browser:{isIE:-1!=navigator.appVersion.indexOf("MSIE",0),isSafari:-1!=navigator.appVersion.indexOf("WebKit",0),isFirefox:-1!=navigator.userAgent.indexOf("Firefox",0),isIpad:navigator.userAgent.indexOf("WebKit")>0&&navigator.userAgent.indexOf("iPad")>0,isIphone:navigator.userAgent.indexOf("WebKit")>0&&navigator.userAgent.indexOf("iPhone")>0,isChrome:navigator.userAgent.indexOf("WebKit")>0&&navigator.userAgent.indexOf("Chrome")>0},trim:function(e){return"string"!=typeof e?e:e.replace(/^\s+/,"").replace(/\s+$/,"")},getCssText:function(e){},check163Auth:function(e){},configuration:function(){return{load:function(){},reload:function(){},addConfigurationChangeListener:function(e){},removeConfigurationChangeListener:function(e){}}},extend:function(e,t,n){if("object"!=typeof t)return!1;for(var o in t)"undefined"!=typeof e[o]?e[o]=n?[e[o],t[o]]:t[o]:e[o]=t[o]},el:function(e){return t.getElementById(e)},mkel:function(e,n){try{var o=t.createElement(e);return n&&n.appendChild(o),o}catch(i){return!1}},addEvent:function(e,t,n){if(!e.nodeType||1!=e.nodeType)return!1;this.browser.isIE?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)},deleteEvent:function(e,t,n){if(!e.nodeType||1!=e.nodeType)return!1;this.browser.isIE?e.detachEvent("on"+t,n):e.removeEventListener(t,n,!1)},wrapperEvent:function(e){return{target:this.browser.isIE?e.srcElement:e.target,offsetX:this.browser.isIE?e.offsetX:e.layerX,offsetY:this.browser.isIE?e.offsetY:e.layerY,x:this.browser.isIE?e.x:e.pageX,y:this.browser.isIE?e.y:e.pageY}},enableDrag:function(e){var t=window;"string"==typeof e&&(e=this.el(e)),e.nodeType&&1==e.nodeType&&"div"==e.tagName.toLowercase()&&(e.style.position="absolute",this.addEvent(e,"mousedown",(function(e){if("undefined"!=typeof t.YNoteDragObject&&null!=t.YNoteDragObject)return!1;var n=this.wrapperEvent(e);t.YNoteDragObject={element:n.target,startX:n.offsetX,startY:n.offsetY}})),"undefined"==typeof t.YNoteDragObject&&(this.addEvent(t.document,"mouseup",(function(e){null!=t.YNoteDragObject&&(t.YNoteDragObject=null)})),this.addEvent(t.document,"mousemove",(function(e){if("undefined"!=typeof t.YNoteDragObject&&null!=t.YNoteDragObject){var n=this.wrapperEvent(e);t.YNoteDragObject.element.style.left=n.x-t.YNoteDragObject.startX+"px",t.YNoteDragObject.element.style.top=n.y-t.YNoteDragObject.startY+"px"}}))))},serverlog:function(t){var n=new Image,o=e.clipperBaseURL+e.logurl;n.src=o+"&s="+t},log:function(n){if(!e.logEnabled)return!1;var o;"undefined"==typeof console&&(console=((o=t.createElement("div")).style.cssText="width:100%;height:500px;border:1pt solid black;position:absolute;left:0px;top:800px",o.innerHTML='<textarea style="width:100%;height:450px" id="console_log"></textarea>',t.body.appendChild(o),{log:function(e){t.getElementById("console_log").value+=e+"\n"}})),"undefined"!=typeof console.log&&console.log(n)},Dom:{appendHTMLToIframe:function(e,t){if(e.tagName&&"iframe"==e.tagName.toLowerCase()){var n=e.contentWindow.document;try{n.open(),n.write(t),n.close()}catch(o){YNode.Common.log("append HTML to [iframe:"+e.name+"] ERROR!")}}}},getCharSet:function(){return this.browser.isIE?document.charset.toLowerCase():document.characterSet.toLowerCase()},HTMLEncode:function(e){var t="",n=e.length,o=navigator.userAgent.toLowerCase();if((!!/msie/.test(o)&&parseFloat(o.match(/msie ([\d.]+)/)[1]))>=7)for(var i=0;i<n;i++)t+=e.charCodeAt(i)+" ";else for(i=0;i<e.length;i++){var r=e.charCodeAt(i),a=e[i];t+=r>127?"&#"+r+";":">"==a?"&gt;":"<"==a?"&lt;":"&"==a?"&amp;":e.charAt(i)}return t},unicodeEncode:function(e){var t="";if("string"==typeof e)for(var n=0;n<e.length;n++){var o=e.charCodeAt(n);t+=o>127?"&#"+o+";":e.charAt(n)}return t},isHTTPS:"https:"===document.location.protocol};var o,i,r,a,s,l,c,d={},p=1,h="addEventListener",u=window.postMessage;d.isFunction=function(e){return"[object Function]"===Object.prototype.toString.call(e)},d.browser=(l={},c=navigator.userAgent.toLowerCase(),(s=c.match(/msie ([\d.]+)/))?l.msie=s[1]:(s=c.match(/firefox\/([\d.]+)/))?l.firefox=s[1]:(s=c.match(/chrome\/([\d.]+)/))?l.chrome=s[1]:(s=c.match(/opera.([\d.]+)/))?l.opera=s[1]:(s=c.match(/version\/([\d.]+).*safari/))&&(l.safari=s[1]),l),d.each=function(e,t,n){if(e!==undefined&&null!==e){if(e.length===undefined||d.isFunction(e)){for(var o in e)if(e.hasOwnProperty(o)&&!1===t.call(n||e[o],o,e[o]))break}else for(var i=0;i<e.length&&!1!==t.call(n||e,i,e[i]);i++);return e}},d.param=function(e){if("string"==typeof e)return e;var t=[];return d.each(e,(function(e,n){n&&(n=encodeURIComponent(n),d.browser.firefox&&(n=encodeURIComponent(unescape(n))),t.push(encodeURIComponent(e)+"="+n))})),t.join("&").replace(r20,"+")},d.postMessage=function(e,t,n){t&&(e="string"==typeof e?e:d.param(e),n=n||parent,u?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+p+++"&"+e))},d.receiveMessage=a=function(e,t,n){u?(e&&(r&&a(),r=function(t){e(t)}),window.addEventListener?window[e?h:"removeEventListener"]("message",r,false):window[e?"attachEvent":"detachEvent"]("onmessage",r)):(o&&clearInterval(o),o=null,e&&(n="number"==typeof t?t:"number"==typeof n?n:100,o=setInterval((function(){var t=document.location.hash,n=/^#?\d+&/;t!==i&&n.test(t)&&(i=t,e({data:t.replace(n,"")}))}),n)))};class g{getSelection(){var e=window;e.document;return n.browser.isIE?this.selection=document.selection:this.selection=e.getSelection(),this.hasSelection()?this.selectionParentWindow=e:this.getNestedRange(e),this.selection}hasSelection(){return n.log("Enter hasSelection"),"function"==typeof this.selection.createRange?""!=this.selection.createRange().htmlText:0!=this.selection.rangeCount}getNestedRange(e){n.log("Enter getNestedRange");var t;if(!(t=e.document.getElementsByTagName("iframe"))||0==t.length)return!1;for(var o=0,i=t.length;o<i;o++){var r=t[o].contentWindow;try{if(r.document,t[o].clientWidth<=10||t[o].clientHeight<=10)continue}catch(c){continue}try{var a="function"==typeof r.getSelection?r.getSelection():r.document.selection;if("function"==typeof a.createRange||"function"==typeof a.getRangeAt){var s=this.selection;if(this.selection=a,this.selectionparentWindow=r,this.hasSelection())return this.selection=s,!1;var l=0;for(e=r;e!==window&&!(++l>3);)e=e.parent;e===window&&this.getNestedRange(r)}}catch(c){continue}}n.log("getNestedRange over")}getSelectionRange(){if(n.log("Enter get getSelectionRange"),this.getSelection(),!this.selection)return!1;if(n.browser.isIE?this.range=this.selection.createRange():this.range=this.selection.getRangeAt(0),n.browser.isIE&&this.range){this.range.commonAncestorContainer=this.range.parentElement(),n.log("Enter get range block");var e=this.range.duplicate();e.collapse(!0);var t=this.getContainerForIE(e);this.range.startContainer=t.el,this.range.startOffset=t.offset;var o=this.range.duplicate();o.collapse(!1),t=this.getContainerForIE(o),this.range.endContainer=t.el,this.range.endOffset=t.offset}return this.range}getAncestor(e,t){}getContainerForIE(e){var t=e.parentElement(),n=t.ownerDocument.body.createTextRange();n.moveToElementText(t),n.setEndPoint("EndToStart",e);var o=n.text.length;if(o<t.innerText.length/2)var i=1,r=t.firstChild;else i=-1,r=t.lastChild,n.moveToElementText(t),n.setEndPoint("StartToStart",e),o=n.text.length;for(;r;){switch(r.nodeType){case 3:if(nodeLength=r.data.length,!(nodeLength<o))return 1==i?{node:r,offset:o}:{el:r,offset:nodeLength-o};var a=o-nodeLength;1==i?n.moveStart("character",a):n.moveEnd("character",-a),o=a;break;case 1:nodeLength=r.innerText.length,1==i?n.moveStart("character",nodeLength):n.moveEnd("character",-nodeLength),o-=nodeLength}r=1==i?r.nextSibling:r.previousSibling}return{el:t,offset:0}}getSelectionHTMLText(){return this.getSelectionRange(),!!this.range&&(n.browser.isIE?this.range.htmlText:"")}}class m{styleForNode(t,o){if(this.cssNameMap={},t&&t.nodeType&&1==t.nodeType){var i=null;i=n.browser.isIE?t.currentStyle:window.getComputedStyle(t,null);var r=e.clipperFilterStyles.keep,a=null;a="undefined"==typeof r[t.tagName.toLowerCase()]?r["*"]:r[t.tagName.toLowerCase()];for(var s={},l=e.styleMerge,c=0;c<a.length;c++){var d;if(n.browser.isIE)l[d=a[c]]?s[d]=this.getCompoundCssString(d,i):(d=this.cssName2ScriptName(a[c]),/#000000|auto|visible|arial/i.test(""+i[d])||(s[d]=(""+i[d]).replace(/"/g,"&quot;")));else if(l[d=a[c]])s[d]=this.getCompoundCssString(d,i);else{var p=i.getPropertyCSSValue(d);null!=p&&(/#000000|auto|visible|arial/i.test(p.cssText)||(s[d]=p.cssText.replace(/"/g,"&quot;")))}}return this.cssArray=s,this.getStyleString(s)}return""}getStyleString(e){var t="";for(var o in e)0!=e[o].length&&(t+=(n.browser.isIE&&"undefined"!=typeof this.cssNameMap[o]&&this.cssNameMap[o].length>0?this.cssNameMap[o]:o)+":"+e[o]+";");return t}getCompoundCssString(t,o){for(var i,r=e.styleMerge,a="",s=0;s<r[t].length;s++){if(n.browser.isIE)i=o[this.cssName2ScriptName(r[t][s])];else i=o.getPropertyCSSValue(r[t][s]).cssText;i&&/.*px$/.test(i)&&(i=Math.ceil(parseFloat(i))+"px"),a+=i+" "}return a=a.substring(0,a.length-1),/(0px ?){4}|(auto ?){4}/i.test(a)?"":a}cssName2ScriptName(e){if("string"==typeof e&&e.indexOf("-")>0){for(var t=e.split("-"),n=t[0],o=1;o<t.length;o++)n+=t[o].substring(0,1).toUpperCase()+t[o].substring(1);return this.cssNameMap[n]=e,n}return"string"==typeof e?"float"==e?"styleFloat":e:""}mergeDefaultCssValue(){}}class f{static CLASS_INIT=0;static CLIPPING=1;static CLIPPED=2;static UPLOADING_FILE=3;static UPLOADED_FILE=4;static UPLOADING_INFO=5;static UPLOADING_INFO=6;static START_LOGIN=7;static DONE=8;static ERROR_CLIP=10001;static ERROR_UPLOAD_FILE=10002;static ERROR_UPLOAD_INFO=10003;static ERROR_UPLOAD_LOGIN=10004;static ERROR_NO_BODY=10005;static CEIL_OF_REQUEST={COUNT:10};constructor(){this.content=null,this.title=null;try{this.source=window.location.href}catch(e){this.source=""}this.type=null,this.selector=new g,this.init()}static createLoadingDiv(){var t=document.createElement("div");return t.id="ydNoteExtensionClipper_loading",t.innerHTML='<div class="saving" style="z-index:9999999999999 !important;position:fixed;width:280px;height:140px;right:20px;top:20px;border: 1px solid #D0D0D0;border-radius:5px;box-shadow:rgba(208,208,208,0.2) 0px 6px 12px; -khtml-border-radius:5px;-webkit-border-radius:5px;-webkit-box-shadow:rgba(208,208,208,0.2) 0px 6px 12px;;-moz-border-radius:5px;-moz-box-shadow:rgba(208,208,208,0.2) 0px 6px 12px;-webkit-transition: all .3s ease-in-out;"><div class="inner" style="background-color: rgb(255, 255, 255);width:280px;height:140px;border-radius: 5px;"><a href="#" class="icon" style="width:10px;height:10px;background:url('+e.clipperBaseURL+'/images/webclipper/close_normal.svg) no-repeat;margin: 20px 20px 0 0;float: right;" onclick="document.body.removeChild(document.getElementById(&#x27;ydNoteExtensionClipper_loading&#x27;));"></a><i class="icon" style="display:inline-block;width:40px;height:40px;background:url('+e.clipperBaseURL+'/images/webclipper/loading.gif) no-repeat;margin: 24px 120px;"></i></div></div>',t}static submitData(e){var t=new FormData(e),n=[];for(var o of t.entries())n.push(o);chrome.runtime.sendMessage({method:"submitForm",url:e.getAttribute("action"),contentType:e.getAttribute("enctype"),formData:n},(function(e){var t=document.querySelector("#_YNoteContentFrame");t.src="about:blank",t.onload=function(){var t=document.getElementById("ydNoteExtensionClipper"),n=document.getElementById("ydNoteExtensionClipper_loading");n||(t.style.display="none",n=f.createLoadingDiv(),document.body.appendChild(n));var o=document.querySelector("#_YNoteContentFrame").contentDocument;o.body.innerHTML=e,o.querySelectorAll("link").forEach((e=>{var t=document.createElement("link");t.href=e.href,o.head.appendChild(t)}));var i=o.querySelectorAll("script"),r=0;!function a(){if(i.length!==r){var e=i[r],s=document.createElement("script");s.onload=function(){a()},s.onerror=function(){a()},r++,e.src?(s.setAttribute("src",e.src),o.head.appendChild(s)):(s.innerHTML=e.innerHTML,o.head.appendChild(s),a())}else n.parentNode&&(n.parentNode.removeChild(n),t.style.display="block")}()}}))}close(){this.wrapper?.parentNode?.removeChild(this.wrapper),this.deleteFrame(),this.state=f.DONE}clipContent(){this.state=f.CLIPPING;(new Date).getTime();try{var t=e.doc.container;return e.hasSelection=!1,this.hasSelection()?(n.log("has selection"),e.doc.contentType="3",e.hasSelection=!0,this.range=this.selector.getSelectionRange(),this.content=this.getSelectedContent(),this.state=f.CLIPPED,this.content):t.body?(n.log("no selection"),this.content=this.getNodeText(t.body),this.state=f.CLIPPED,this.content):(n.log("No Body!"),document.getElementById("_YNoteLoaddingTips").innerHTML="抱歉，由于页面设置，无法获取所选内容",this.state=f.ERROR_NO_BODY,n.serverlog(2),"")}catch(o){try{document.getElementById("_YNoteLoaddingTips").innerHTML="抱歉，由于页面设置，整页抓取失败，请选择部分内容后重试",n.serverlog(3)}catch(i){n.serverlog(4),alert("抱歉，由于页面设置，页面抓取失败!")}}}hasSelection(){if(this.getSelection(),"undefined"!=typeof this.selection&&null!=this.selection&&("function"==typeof this.selection.getRangeAt||"object"==typeof this.selection.createRange||"function"==typeof this.selection.createRange)){if("undefined"!=typeof this.selection.rangeCount&&this.selection.rangeCount<1)return!1;if("function"==typeof this.selection.createRange||"object"==typeof this.selection.createRange)try{if("text"!=this.selection.type.toLowerCase()||""==this.selection.createRange().htmlText)return!1}catch(t){return!1}else if("function"==typeof this.selection.getRangeAt)try{var e=this.selection.getRangeAt(0);if(e.startContainer==e.endContainer&&e.startOffset==e.endOffset)return!1}catch(t){return!0}return!0}return!1}getSelection(){this.selection=this.selector.getSelection()}submit(){this.state=f.UPLOADING_FILE,this.fillForm()}getClipID(){return"/wcp"+(new Date).getTime()+Math.floor(1e3*Math.random())}getHiddenForm(){var e=n.mkel("form");return e.innerHTML="",e}rangeIntersectsNode(e){if(n.browser.isIE){if(this.range){if(1==e.nodeType){var t=e.ownerDocument.body.createTextRange();return t.moveToElementText(e),-1==t.compareEndPoints("StartToEnd",this.range)&&1==t.compareEndPoints("EndToStart",this.range)}return!0}return!1}if(this.range){var o=e.ownerDocument.createRange();try{o.selectNode(e)}catch(i){o.selectNodeContents(e)}return 1==this.range.compareBoundaryPoints(Range.START_TO_END,o)&&-1==this.range.compareBoundaryPoints(Range.END_TO_START,o)}return!1}changeNodeName(t){var n=e.translateTagName;return"undefined"!=typeof n[t.tagName.toLowerCase()]?n[t.tagName.toLowerCase()]:t.tagName.toLowerCase()}isListNode(t){var n=e.listNodes;return t&&1==t.nodeType&&"undefined"!=typeof n[t.nodeName.toLowerCase()]}withAttribute(t){var n=e.clipperFilterAttributes.remove;return"string"==typeof t&&"undefined"==typeof n[t.toLowerCase()]}getNodeAttributesString(e){var t="",n=e.attributes;if(null!=n)for(var o=0;o<n.length;o++){var i=n[o].nodeName.toLowerCase(),r=n[o].nodeValue;"href"!=i&&"src"!=i||(r=0==r.toLowerCase().indexOf("javascript:")||0==r.indexOf("#")?"":this.replaceURL(r),this.withAttribute(i)&&"string"==typeof r&&r.length>0&&(t+=n[o].nodeName+'="'+r.toString()+'" '))}return t.replace(/\s+$/,"")}isCloseTag(t){return t&&"undefined"!=typeof e.selfCloseTag[t.nodeName.toLowerCase()]}isNodeVisible(t){if(t.nodeType){if(n.browser.isIE){if(null!=t.currentStyle&&"none"==t.currentStyle.display)return!1}else try{if("none"==window.getComputedStyle(t,null).getPropertyCSSValue("display").cssText)return!1}catch(i){return!1}var o=e;return(3!=t.nodeType||!t.nodeValue&&0!=t.nodeValue.length)&&(1!=t.nodeType||"undefined"!=typeof o.formatTag[t.tagName.toLowerCase()]||0!=n.trim(t.innerHTML).length)}return!1}keepNode(t){if(t){if(3==t.nodeType)return!0;if(1==t.nodeType)return!(0==t.nodeName.indexOf("#")||!this.isNodeVisible(t))&&"undefined"==typeof e.filterElements.remove[t.nodeName.toLowerCase()]}return!1}replaceURL(e){if(!window.location)return e;e=n.trim(e);var t=window.location.host,o=window.location.protocol,i=window.location.href.split("?")[0].split("#")[0];i=i.substr(0,i.lastIndexOf("/"))+"/";var r=o+"//"+t;return null!=e.match(/^(https?):/i)?e:0==e.indexOf("//")?o+e:0==e.indexOf("/")?r+e:i+e}getNodeText(t,o){for(var i="",r=t,a=e;r!=document.body;){if(r==this.wrapper)return i;if(null==r)return i;r=r.parentNode}if(this.range&&!this.rangeIntersectsNode(t))return i;if(!this.keepNode(t))return i;if(3==t.nodeType)this.range?this.range.startContainer==t&&this.range.startContainer==this.range.endContainer?i+=t.nodeValue.substring(this.range.startOffset,this.range.endOffset):this.range.startContainer==t?i+=t.nodeValue.substring(this.range.startOffset):this.range.endContainer==t?i+=t.nodeValue.substring(0,this.range.endOffset):this.range.commonAncestorContainer!=t&&(i+=t.nodeValue):i+=t.nodeValue;else if(1==t.nodeType){if(t===a.doc.mainContent&&"3"!==a.doc.contentType&&"browser"===a.clipType){var s=(new Date).getTime()/1e5+"";i+=s,a.doc.mainContentTag=s}if("img"===t.tagName.toLowerCase()){var l=window.getComputedStyle(t,null).getPropertyValue("width");if(window.parseInt(l)<120)return i}if(this.range&&this.range.commonAncestorContainer==t&&this.range.startContainer!=this.range.commonAncestorContainer&&!this.isListNode(t));else{var c=this.changeNodeName(t);i+="<"+c;var d=this.getNodeAttributesString(t);if(d.length>0&&(i+=" "+d),this.styleUtil){var p=this.styleUtil.styleForNode(t,o);null!=p&&0!=p.length&&(i+=" style='"+p+"'")}!t.hasChildNodes()&&this.isCloseTag(t)?i+="/>":i+=">"}if("iframe"!=t.tagName.toLowerCase()&&t.hasChildNodes())for(var h=t.childNodes,u=0,g=h.length;u<g;u++){var m=h[u];if(null!=m&&""!=n.trim(m.nodeValue)&&m.nodeType>0&&m.nodeName&&"script"!=m.nodeName.toLowerCase()&&"iframe"!=m.nodeName.toLowerCase()){var f="";if("font"!=m.nodeName.toLowerCase()||m.hasChildNodes())f=this.getNodeText(m,t);else f=m.outerHTML;f&&f.length>0&&(i+=f)}}this.range&&this.range.commonAncestorContainer==t&&!this.isListNode(t)||!t.hasChildNodes()&&this.isCloseTag(t)||(i+="</"+c+">",t===a.doc.mainContent&&"3"!==a.doc.contentType&&"browser"===a.clipType&&(i+=a.doc.mainContentTag))}return i}getSelectedContent(){if(this.hasSelection()){if(n.browser.isIE)return n.log(this.selection.htmlText),this.selection.htmlText?(this.content=this.selection.htmlText,this.selection.htmlText):(this.content=this.getNodeText(this.getRangeContainer(this.range)),this.content);var t,o=this.selector.getSelectionRange();return e.doc.selectContent=o.commonAncestorContainer,""==(t=this.getNodeText(o.commonAncestorContainer))&&n.log("Get Selected ERROR!"),t}}getRangeContainer(e){if(!e)return document.body;for(var t=e.parentElement(),n=t.getBoundingClientRect(),o=e.getBoundingClientRect();n.top>o.top||n.bottom<o.bottom;)n=(t=t.parentNode).getBoundingClientRect();return t}initFrame(){const t=chrome.extension.getURL("widgets/index.html");this.view.innerHTML='<iframe width="100%" height="100%" border="0" frameborder="0" src="'+t+'" id="'+e.clipperDomPrefix+'ContentFrame" name="'+e.doc.contentType+"ContentFrame&"+e.vendor+'" scrolling ="no" style="border-radius: 12px;box-shadow: 0px 4px 8px 0px rgba(35, 45, 71, 0.1);"></iframe>';var n=document.getElementById(e.clipperDomPrefix+"ContentFrame");n&&yApp&&!yApp.isBind&&(n.addEventListener("load",(function(e){yApp.frameHandler(e)}),!1),yApp.isBind=!0)}deleteFrame(){this.view.innerHTML=""}filterResults(e,t,n){var o=e||0;return t&&(!o||o>t)&&(o=t),n&&(!o||o>n)?n:o}init(){n.log("Init YnoteClipper Class"),this.styleUtil=new m,this.path=this.getClipID(),this.requestCount=0,this.state=f.CLASS_INIT;var t=e,o="ydNoteExtensionClipper",i=document.getElementById(o);null!=i&&null!=i.parentNode&&i.parentNode.removeChild(i);var r=n.mkel("div");r.id=o,r.name=o,n.browser.isIE&&(document.getElementsByTagName("html")[0].cssText="background-image:url(about:blank);background-attachment:fixed",document.getElementsByTagName("body")[0].cssText="background-image:url(about:blank);background-attachment:fixed"),r.style.cssText=t.clipperStyle,this.wrapper=r;var a=n.mkel("div",r);a.style.cssText=t.css.dialog,a.id="ydNoteExtensionClipper-New",a.className="ydnwc-dialog";var s=n.mkel("div",a);s.id="ydNoteExtensionClipper_view",s.name="ydNoteExtensionClipper_view",s.style.cssText=t.css.view,this.view=s,this.initFrame();var l=n.mkel("div",r),c=n.mkel("form",l);n.extend(c,{id:t.clipperDomPrefix+"ContentForm",name:t.clipperDomPrefix+"ContentForm",target:t.doc.contentType+"ContentFrame&"+t.vendor,enctype:"multipart/form-data",encoding:"multipart/form-data",method:"POST"}),n.extend(l.style,{display:"none"});for(var d="",p=t.clipperFormFields,h=0;h<p.length;h++)"text"==p[h][1]&&(d+='<input type="text" name="'+p[h][2]+'" id="'+t.clipperDomPrefix+"ContentForm"+p[h][0]+'" value=""/>'),"area"==p[h][1]&&(d+='<textarea name="'+p[h][2]+'" id="'+t.clipperDomPrefix+"ContentForm"+p[h][0]+'"></textarea>');c.innerHTML=d,this.form=c,document.body.appendChild(r)}clearFlash(){var e=n.browser.isIE,t=[];if(e){var o=document.getElementsByTagName("object"),i=document.getElementsByTagName("embed");t=o.length&&o||i}else t=document.getElementsByTagName("embed");for(var r=0,a=t.length;r<a;r++)(e&&t[r]&&"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"==t[r].classid||t[r]&&"application/x-shockwave-flash"==t[r].type||t[r]&&t[r].parentNode.innerHTML.indexOf("application/x-shockwave-flash")>0)&&t[r].parentNode&&t[r].parentNode.removeChild(t[r])}reset(){n.log("Call Reset!"),this.selection=null,this.range=null,this.title=null,this.content=null,this.state=0,this.requestCount=0,this.path=this.getClipID(),"browser"===e.clipType&&(this.wrapper.style.display=""),this.view.innerHTML.length>10&&this.deleteFrame(),this.initFrame()}getNavigatorSign(){var e=navigator.userAgent.toLowerCase(),t=!!/msie/.test(e)&&parseFloat(e.match(/msie ([\d.]+)/)[1]);return parseInt(t)>=7?"true":"false"}fillForm(){n.log("Enter fillForm");var t=this.getNavigatorSign(),o=document,i=e;this.title=o.title,this.content=this.content.replace(/[\r\n]/g,""),i.doc.mainContentTag&&"3"!==i.doc.contentType&&"browser"===i.clipType&&(this.content+="$"+i.doc.mainContentTag),this.content="true"==t?n.HTMLEncode(this.content):n.unicodeEncode(this.content),o.getElementById(i.clipperDomPrefix+"ContentFormpath").value=this.path,o.getElementById(i.clipperDomPrefix+"ContentFormcontent").value=this.content,o.getElementById(i.clipperDomPrefix+"ContentFormsource").value=n.HTMLEncode(this.source),o.getElementById(i.clipperDomPrefix+"ContentFormtitle").value=this.title,o.getElementById(i.clipperDomPrefix+"ContentFormlen").value=this.content.length,o.getElementById(i.clipperDomPrefix+"ContentFormtype").value="FullPage MainBody Selected".split(" ")[i.doc.contentType-1],o.getElementById(i.clipperDomPrefix+"ContentFormsign").value=this.getNavigatorSign()}}class y{constructor(){this.init()}run(){if(n.log("start run.."),n.serverlog(0),!this.checkEnv())return n.log("check Env false"),n.serverlog(1),!1;n.log("manager run"),this.clipper.reset(),"browser"===e.clipType&&(this.clipper.wrapper.display=""),this.clipper.clearFlash(),this.clipper.clipContent(),this.clipper.state==f.CLIPPED&&(n.log("manager clip end"),this.clipper.submit())}submit(){this.clipper.state==f.CLIPPED?(n.log("Do clipper.submit"),this.clipper.submit()):n.log("ERROR! clipper state error")}init(){this.clipper=new f}checkEnv(){var e=window.document;return!!e&&(!!e.body&&(n.log(this.clipper.state),!(this.clipper.state>0&&this.clipper.state<100&&this.clipper.state!=f.DONE)))}}class v{IGNORE_TAGS=["A","DD","DT","OL","OPTION","DL","DD","SCRIPT","STYLE","UL","LI","IFRAME"];TITLE_TAGS=["H1","H2","H3","H4","H5","H6"];MINOR_REGEXP=/comment|combx|disqus|foot|header|menu|rss|shoutbox|sidebar|sponsor/i;MAJOR_REGEXP=/article|entry|post|body|column|main|content/i;TINY_REGEXP=/comment/i;BLANK_REGEXP=/\S/i;constructor(e){this.elem=e,this.offset=n.findPos(e),this._texts=this._getAllTexts(e,6),this.weight=this.calcWeight()}_getAllTexts(e,t){var o=[];if(t>0)for(var i=e.firstChild;i;){if(3==i.nodeType&&this._checkLength(i)){var r=i.parentNode||{},a=r.parentNode||{};this._checkMinorContent(r)||this._checkMinorContent(a)||!n.trim(i.nodeValue)||o.push(i)}else 1==i.nodeType&&this._checkTagName(i)&&(o=o.concat(this._getAllTexts(i,t-1)));i=i.nextSibling}return o}calcStructWeight(){for(var e=0,t=0,o=this._texts.length;t<o;t++){var i=this._texts[t],r=n.trim(i.nodeValue).length,a=1;if(!(r<20)){for(var s=i.parentNode;s&&s!=this.elem;s=s.parentNode)a-=.1;e+=Math.pow(a*r,1.25)}}return e}calcContentWeight(){for(var e=1,t=this.elem;t;t=t.parentNode)t.id&&(this.MAJOR_REGEXP.test(t.id)&&(e+=.4),this.MINOR_REGEXP.test(t.id)&&(e-=.8)),t.className&&(this.MAJOR_REGEXP.test(t.className)&&(e+=.4),this.MINOR_REGEXP.test(t.className)&&(e-=.8));return e}calcWeight(){return this.calcStructWeight()*this.calcContentWeight()}_checkTagName(e){return-1==n.indexOf(this.IGNORE_TAGS,e.tagName)}_checkTitle(){for(var e=this.elem.getElementsByTagName("*"),t=[],o=0;e[o];o++)n.indexOf(this.TITLE_TAGS,e[o].tagName)>-1&&t.push(e[o]);if(t.length>2){for(var i=this.elem.offsetHeight,r=0,a=n.findPos(this.elem),s=.05*i,l=0;t[l];l++){var c=n.findPos(t[l]);c.y-a.y>s&&c.y+t[l].offsetHeight-(a.y+i)&&r++}if(i/r<300)return!0}return!1}_checkLength(e){return Boolean(this.BLANK_REGEXP.test(e.nodeValue))}_checkMinorContent(e){return Boolean(this.TINY_REGEXP.test(e.id+" "+e.className))}_checkVisibility(e){return!("hidden"==n.css(e,"visibility")||"none"==n.css(e,"display")||parseInt(n.css(e,"height"))<=0||parseInt(n.css(e,"width"))<=0)}}class b{IGNORE_TAGS=["HTML","HEAD","META","TITLE","SCRIPT","STYLE","LINK","IMG","FORM","INPUT","BODY","BUTTON","TEXTAREA","SELECT","OPTION","LABEL","IFRAME","UL","OL","LI","DD","DL","DT","A","OBJECT","PARAM","EMBED","NOSCRIPT","EM","B","STRONG","I","INS","BR","HR","PRE","H1","H2","H3","H4","H5","CITE"];constructor(e){this.contentDocument=e}getMainArticle(){var e=null,t="";if(location&&(t=location.hostname),/\b(google|facebook|twitter)\b/i.test(t))return null;var n=this._getAllArticle();if(!n||!n.length)return null;n.sort((function(e,t){return t.weight-e.weight}));for(var o=0;o<2&&(e=n[0],n.splice(0,1),e&&e.weight<500&&(e=null),!e);o++);return e||null}_sort(e){for(var t=0,n=null,o=0;o<e.length;o++){var i=e[o],r=i.weight;r>=t&&(t=r,n=i)}return n}_getAllArticle(){for(var e=this.contentDocument.getElementsByTagName("*"),t=[],n=0,o=e.length;n<o;n++){var i=e[n];this._checkTagName(i)&&this._checkSize(i)&&this._checkVisibility(i)&&(t[t.length]=new v(i))}return t}_checkTagName(e){return-1==n.indexOf(this.IGNORE_TAGS,e.tagName)}_checkVisibility(e){return!("hidden"==n.css(e,"visibility")||"none"==n.css(e,"display")||parseInt(n.css(e,"height"))<=0||parseInt(n.css(e,"width"))<=0)}_checkSize(e){return e.offsetWidth>300&&e.offsetHeight>150}}class x{constructor(e){this.init(),e.imgSrc&&(this.imgSrc=e.imgSrc),e.title&&(this.title=e.title)}init(){this.clipper=new f}run(){e.doc.contentType="3",this.clipper.content="<img src='"+this.imgSrc+"'/>",this.clipper.title=this.title,this.clipper.submit()}}let w={},E=null,C=null,T=e,N=null;function S(e){const t=document.getElementById("YDNewIframe"),n=chrome.extension.getURL(e);if(t)return void(t.src=n);let o=document.createElement("iframe");o.id="YDNewIframe",o.style="position: fixed; right: 10px; top: 10px; z-index: 99999999999 !important; display: block; height: 415px; width: 308px;border:none;border-radius: 12px;box-shadow: 0px 4px 8px 0px rgba(35, 45, 71, 0.1);",o.src=n,document.body.appendChild(o)}function I(){const e=document.getElementById("YDNewIframe");e&&e.parentNode.removeChild(e)}function L(){const e=document.getElementById("ydNoteExtensionClipper");e&&e.parentNode.removeChild(e)}function D(e){d.receiveMessage((function(t){console.log(t,"uiControl");var o,i=document.getElementById("ydNoteExtensionClipper");try{o=JSON.parse(t.data)||""}catch(r){}if("close"===t.data)if("m_clipperImage"===T.clipType)clipperImage.clipper.close(),e.removeClipDiv();else{const t=document.getElementById("YDNewIframe");if(t)return void t.parentNode.removeChild(t);e.clipperManager.clipper.close(),e.removeClipDiv()}else if("loading"===t.data)i.style.display="none",N||(N=document.createElement("div"),N.id="ydNoteExtensionClipper_loading",N.innerHTML='<div class="saving" style="z-index:9999999999999 !important;position:fixed;width:280px;height:140px;right:20px;top:20px;border: 1px solid #D0D0D0;border-radius:5px;box-shadow:rgba(208,208,208,0.2) 0px 6px 12px; -khtml-border-radius:5px;-webkit-border-radius:5px;-webkit-box-shadow:rgba(208,208,208,0.2) 0px 6px 12px;;-moz-border-radius:5px;-moz-box-shadow:rgba(208,208,208,0.2) 0px 6px 12px;-webkit-transition: all .3s ease-in-out;"><div class="inner" style="background-color: rgb(255, 255, 255);width:280px;height:140px;border-radius: 5px;"><a href="#" class="icon" style="width:10px;height:10px;background:url('+T.clipperBaseURL+'/images/webclipper/close_normal.svg) no-repeat;margin: 20px 20px 0 0;float: right;" onclick="document.body.removeChild(document.getElementById(&#x27;ydNoteExtensionClipper_loading&#x27;));"></a><i class="icon" style="display:inline-block;width:40px;height:40px;background:url('+T.clipperBaseURL+'/images/webclipper/loading.gif) no-repeat;margin: 24px 120px;"></i></div></div>'),document.body.appendChild(N);else if(o&&"remove"===o.method)i.style.display="block",e.removeClipDiv();else if(o&&"create"===o.method)"browser"!==T.clipType||T.hasSelection||e.createClipDiv();else if(o&&"saveForm"===o.method)try{const e=JSON.parse(t.data).data;chrome.runtime.sendMessage({method:"submitForm",data:e},(e=>{document.getElementById("_YNoteContentFrame").contentWindow.postMessage({method:"submitStatus",data:e?"success":"fail"},"*")}))}catch(r){n.log("保存笔记失败")}else if(o&&"logout"===o.method)chrome.runtime.sendMessage({method:"logout"},(()=>{L(),e.removeClipDiv(),S("widgets/index.html#/login")}));else if(o&&"getFolders"===o.method)try{const e=JSON.parse(t.data).data||"";chrome.runtime.sendMessage({method:"getCookie",domain:"note.youdao.com",name:"YNOTE_CSTK"},(function(t){chrome.runtime.sendMessage({method:"getFolders",fileId:e,cstk:t},(function(t){document.getElementById("_YNoteContentFrame").contentWindow.postMessage({method:"getFolders",data:JSON.stringify({fileId:e,data:t})},"*")}))}))}catch(r){}}),T.server),window.addEventListener?window.addEventListener("resize",O):window.attachEvent("onresize",O),clearTimeout(E)}function R(){n.log("enter loopFunc:"),"complete"!==document.readyState&&"interactive"!=document.readyState||!document.body?E=setTimeout(R,300):(window._ynote_app_load=!0,window.yApp=new w.App,yApp.checkLogin((function(e){if(!e)return S("widgets/index.html#/login"),D(yApp),void yApp.removeClipDiv();let t;I(),"m_clipperImage"===T.clipType?(window.clipperImage=new x(T.clipOption),window.clipperImage.run(),D(yApp),t=window.clipperImage.clipper.form):(yApp.run(),D(yApp),t=yApp.clipperManager.clipper.form),function(e,t){const n=document.getElementById("_YNoteContentFrame");n.onload=()=>{chrome.runtime.sendMessage({method:"getUserInfo"},(o=>{if(o&&(n.contentWindow.postMessage({method:"getUserInfo",data:JSON.stringify(o)},"*"),e)){const o=new FormData(e),i={};o.forEach(((e,t)=>{i[t]=e})),n.contentWindow.postMessage({method:"formData",data:JSON.stringify(i),type:t},"*")}}))}}(t,T.clipType)})))}function O(){window.yApp&&(C&&(clearTimeout(C),C=null),C=setTimeout((function(){yApp.shadeStatu&&yApp.createClipDiv()}),200))}w.App=class{constructor(){var t=new b(window.document).getMainArticle();t&&(e.doc.mainContent=t.elem,e.doc.contentType="2"),this.mainElem=t}checkLogin(e){chrome.runtime.sendMessage({method:"checkLogin"},e)}creatDiv(e,t,n,o,i,r){var a=document.createElement("div");if(a.id=e,!r)r="position:absolute;filter:alpha(opacity=80);background-color:#666;opacity:0.8;z-index:9999;";return r+="height:"+n+"px;",r+="width:"+t+"px;",r+="left:"+o+"px;",r+="top:"+i+"px;",a.style.cssText=r,a}removeDiv(e){var t=document.getElementById(e);t&&document.body.removeChild(t)}removeClipDiv(){for(var e=0;e<5;e++)this.removeDiv("yShade"+e);this.shadeStatu=!1}createClipDiv(){if(this.mainElem){var e=this.mainElem,t=Math.abs(n.findPos(e.elem).y),o=Math.abs(n.findPos(e.elem).x),i=e.elem.scrollWidth,r=e.elem.scrollHeight;this.makeShade(t,o,i,r),this.shadeStatu=!0}}makeShade(e,t,n,o){var i=document.documentElement.scrollWidth,r=document.documentElement.scrollHeight;this.removeClipDiv();var a=[],s=(document.body.scrollWidth,document.body.offsetWidth,(document.body.offsetWidth-document.documentElement.scrollWidth)/2);a[0]=this.creatDiv("yShade0",i,e,s,0),a[1]=this.creatDiv("yShade1",i,r-e-o,s,e+o),a[2]=this.creatDiv("yShade2",t,o,s,e),a[3]=this.creatDiv("yShade3",i-n-t,o,n+t+s,e),a[4]=this.creatDiv("yShade4",n,o,t-4+s,e-4,"position:absolute;box-sizing: content-box;border:4px solid #5383FE;-webkit-border-radius:5px;-moz-border-radius:5px;-khtml-border-radius:5px;z-index:9999;");for(var l=0,c=a.length;l<c;l++)document.body.appendChild(a[l])}run(){if(e.doc.contentType="1",e.doc.mainContent&&(e.doc.contentType="2"),n.log("YNote Run..."),"undefined"==typeof this.clipperManager)try{this.clipperManager=new y}catch(t){n.log("Exception:"+t)}this.clipperManager.run()}frameHandler(e){n.log("Enter framehandler ");n.wrapperEvent(e);if(this.clipperManager&&"undefined"!=typeof this.clipperManager){var t=this.clipperManager.clipper;if(n.log("CALL FRAMEHANDLER :The State is "+t.state),this.clipperManager.clipper.state===f.UPLOADING_FILE)t.state=f.DONE}}showError(e){n.log(e.message);var t=n.mkel("div",document.body);t.style.cssText="position: absolute;top: 10px;right: 30px;padding: 5px;border-radius: 5px;box-shadow: rgb(92, 184, 229) 0px 0px 2px; -webkit-box-shadow: rgb(92, 184, 229) 0px 0px 2px;background-color: rgba(92, 184, 229, 0.498039) !important;z-index: 999999;",t.innerHTML='<div style="padding: 20px;border: 1px solid rgb(92, 184, 229);background: white;border-radius: 5px;">'+e.text+"</div>",t.onclick=function(){t.style.display="none"},setTimeout((function(){t.click()}),5e3)}},chrome.extension.onRequest.addListener((function(t){"m_clipperPage"===t.action||"m_clipperSelection"===t.action||"browser"===t.action||"m_clipperImage"===t.action?("m_clipperImage"===t.action&&(e.clipOption=t.option),e.clipType=t.action,R()):"checkLoginExtensions"===t.action?document.getElementById("YDNewIframe")&&(I(),chrome.runtime.sendMessage({method:"reload",id:t.id})):"checkLogoutExtensions"===t.action&&document.getElementById("ydNoteExtensionClipper")&&(L(),chrome.runtime.sendMessage({method:"reload",id:t.id}))})),document.body&&document.body.setAttribute("youdao","bind")})();