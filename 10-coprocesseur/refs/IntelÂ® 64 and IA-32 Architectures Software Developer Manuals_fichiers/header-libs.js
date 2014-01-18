window.Modernizr=function(AX,AW,AV){function U(A){AO.cssText=A
}function T(B,A){return U(AK.join(B+";")+(A||""))
}function S(B,A){return typeof B===A
}function R(B,A){return !!~(""+B).indexOf(A)
}function Q(B,A){for(var D in B){var C=B[D];
if(!R(C,"-")&&AO[C]!==AV){return A=="pfx"?C:!0
}}return !1
}function P(B,A,E){for(var D in B){var C=A[B[D]];
if(C!==AV){return E===!1?B[D]:S(C,"function")?C.bind(E||A):C
}}return !1
}function O(B,A,E){var D=B.charAt(0).toUpperCase()+B.slice(1),C=(B+" "+AI.join(D+" ")+D).split(" ");
return S(A,"string")||S(A,"undefined")?Q(C,A):(C=(B+" "+AH.join(D+" ")+D).split(" "),P(C,A,E))
}function N(){AT.input=function(C){for(var B=0,A=C.length;
B<A;
B++){AD[C[B]]=C[B] in AN
}return AD.list&&(AD.list=!!AW.createElement("datalist")&&!!AX.HTMLDataListElement),AD
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),AT.inputtypes=function(A){for(var F=0,E,D,C,B=A.length;
F<B;
F++){AN.setAttribute("type",D=A[F]),E=AN.type!=="text",E&&(AN.value=AM,AN.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(D)&&AN.style.WebkitAppearance!==AV?(AR.appendChild(AN),C=AW.defaultView,E=C.getComputedStyle&&C.getComputedStyle(AN,null).WebkitAppearance!=="textfield"&&AN.offsetHeight!==0,AR.removeChild(AN)):/^(search|tel)$/.test(D)||(/^(url|email)$/.test(D)?E=AN.checkValidity&&AN.checkValidity()===!1:E=AN.value!=AM)),AE[A[F]]=!!E
}return AE
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var AU="2.6.2",AT={},AS=!0,AR=AW.documentElement,AQ="modernizr",AP=AW.createElement(AQ),AO=AP.style,AN=AW.createElement("input"),AM=":)",AL={}.toString,AK=" -webkit- -moz- -o- -ms- ".split(" "),AJ="Webkit Moz O ms",AI=AJ.split(" "),AH=AJ.toLowerCase().split(" "),AG={svg:"http://www.w3.org/2000/svg"},AF={},AE={},AD={},AC=[],AB=AC.slice,AA,Z=function(K,J,I,H){var G,F,E,D,C=AW.createElement("div"),B=AW.body,A=B||AW.createElement("body");
if(parseInt(I,10)){while(I--){E=AW.createElement("div"),E.id=H?H[I]:AQ+(I+1),C.appendChild(E)
}}return G=["&#173;",'<style id="s',AQ,'">',K,"</style>"].join(""),C.id=AQ,(B?C:A).innerHTML+=G,A.appendChild(C),B||(A.style.background="",A.style.overflow="hidden",D=AR.style.overflow,AR.style.overflow="hidden",AR.appendChild(A)),F=J(C,K),B?C.parentNode.removeChild(C):(A.parentNode.removeChild(A),AR.style.overflow=D),!!F
},Y=function(A){var C=AX.matchMedia||AX.msMatchMedia;
if(C){return C(A).matches
}var B;
return Z("@media "+A+" { #"+AQ+" { position: absolute; } }",function(D){B=(AX.getComputedStyle?getComputedStyle(D,null):D.currentStyle)["position"]=="absolute"
}),B
},X=function(){function B(E,D){D=D||AW.createElement(A[E]||"div"),E="on"+E;
var C=E in D;
return C||(D.setAttribute||(D=AW.createElement("div")),D.setAttribute&&D.removeAttribute&&(D.setAttribute(E,""),C=S(D[E],"function"),S(D[E],"undefined")||(D[E]=AV),D.removeAttribute(E))),D=null,C
}var A={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
return B
}(),W={}.hasOwnProperty,V;
!S(W,"undefined")&&!S(W.call,"undefined")?V=function(B,A){return W.call(B,A)
}:V=function(B,A){return A in B&&S(B.constructor.prototype[A],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(A){var D=this;
if(typeof D!="function"){throw new TypeError
}var C=AB.call(arguments,1),B=function(){if(this instanceof B){var E=function(){};
E.prototype=D.prototype;
var G=new E,F=D.apply(G,C.concat(AB.call(arguments)));
return Object(F)===F?F:G
}return D.apply(A,C.concat(AB.call(arguments)))
};
return B
}),AF.flexbox=function(){return O("flexWrap")
},AF.canvas=function(){var A=AW.createElement("canvas");
return !!A.getContext&&!!A.getContext("2d")
},AF.canvastext=function(){return !!AT.canvas&&!!S(AW.createElement("canvas").getContext("2d").fillText,"function")
},AF.webgl=function(){return !!AX.WebGLRenderingContext
},AF.touch=function(){var A;
return"ontouchstart" in AX||AX.DocumentTouch&&AW instanceof DocumentTouch?A=!0:Z(["@media (",AK.join("touch-enabled),("),AQ,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(B){A=B.offsetTop===9
}),A
},AF.geolocation=function(){return"geolocation" in navigator
},AF.postmessage=function(){return !!AX.postMessage
},AF.websqldatabase=function(){return !!AX.openDatabase
},AF.indexedDB=function(){return !!O("indexedDB",AX)
},AF.hashchange=function(){return X("hashchange",AX)&&(AW.documentMode===AV||AW.documentMode>7)
},AF.history=function(){return !!AX.history&&!!history.pushState
},AF.draganddrop=function(){var A=AW.createElement("div");
return"draggable" in A||"ondragstart" in A&&"ondrop" in A
},AF.websockets=function(){return"WebSocket" in AX||"MozWebSocket" in AX
},AF.rgba=function(){return U("background-color:rgba(150,255,150,.5)"),R(AO.backgroundColor,"rgba")
},AF.hsla=function(){return U("background-color:hsla(120,40%,100%,.5)"),R(AO.backgroundColor,"rgba")||R(AO.backgroundColor,"hsla")
},AF.multiplebgs=function(){return U("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(AO.background)
},AF.backgroundsize=function(){return O("backgroundSize")
},AF.borderimage=function(){return O("borderImage")
},AF.borderradius=function(){return O("borderRadius")
},AF.boxshadow=function(){return O("boxShadow")
},AF.textshadow=function(){return AW.createElement("div").style.textShadow===""
},AF.opacity=function(){return T("opacity:.55"),/^0.55$/.test(AO.opacity)
},AF.cssanimations=function(){return O("animationName")
},AF.csscolumns=function(){return O("columnCount")
},AF.cssgradients=function(){var B="background-image:",A="gradient(linear,left top,right bottom,from(#9f9),to(white));",C="linear-gradient(left top,#9f9, white);";
return U((B+"-webkit- ".split(" ").join(A+B)+AK.join(C+B)).slice(0,-B.length)),R(AO.backgroundImage,"gradient")
},AF.cssreflections=function(){return O("boxReflect")
},AF.csstransforms=function(){return !!O("transform")
},AF.csstransforms3d=function(){var A=!!O("perspective");
return A&&"webkitPerspective" in AR.style&&Z("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(B,C){A=B.offsetLeft===9&&B.offsetHeight===3
}),A
},AF.csstransitions=function(){return O("transition")
},AF.fontface=function(){var A;
return Z('@font-face {font-family:"font";src:url("https://")}',function(F,E){var D=AW.getElementById("smodernizr"),C=D.sheet||D.styleSheet,B=C?C.cssRules&&C.cssRules[0]?C.cssRules[0].cssText:C.cssText||"":"";
A=/src/i.test(B)&&B.indexOf(E.split(" ")[0])===0
}),A
},AF.generatedcontent=function(){var A;
return Z(["#",AQ,"{font:0/0 a}#",AQ,':after{content:"',AM,'";visibility:hidden;font:3px/1 a}'].join(""),function(B){A=B.offsetHeight>=3
}),A
},AF.video=function(){var A=AW.createElement("video"),C=!1;
try{if(C=!!A.canPlayType){C=new Boolean(C),C.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),C.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),C.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")
}}catch(B){}return C
},AF.audio=function(){var A=AW.createElement("audio"),C=!1;
try{if(C=!!A.canPlayType){C=new Boolean(C),C.ogg=A.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),C.mp3=A.canPlayType("audio/mpeg;").replace(/^no$/,""),C.wav=A.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),C.m4a=(A.canPlayType("audio/x-m4a;")||A.canPlayType("audio/aac;")).replace(/^no$/,"")
}}catch(B){}return C
},AF.localstorage=function(){try{return localStorage.setItem(AQ,AQ),localStorage.removeItem(AQ),!0
}catch(A){return !1
}},AF.sessionstorage=function(){try{return sessionStorage.setItem(AQ,AQ),sessionStorage.removeItem(AQ),!0
}catch(A){return !1
}},AF.webworkers=function(){return !!AX.Worker
},AF.applicationcache=function(){return !!AX.applicationCache
},AF.svg=function(){return !!AW.createElementNS&&!!AW.createElementNS(AG.svg,"svg").createSVGRect
},AF.inlinesvg=function(){var A=AW.createElement("div");
return A.innerHTML="<svg/>",(A.firstChild&&A.firstChild.namespaceURI)==AG.svg
},AF.smil=function(){return !!AW.createElementNS&&/SVGAnimate/.test(AL.call(AW.createElementNS(AG.svg,"animate")))
},AF.svgclippaths=function(){return !!AW.createElementNS&&/SVGClipPath/.test(AL.call(AW.createElementNS(AG.svg,"clipPath")))
};
for(var M in AF){V(AF,M)&&(AA=M.toLowerCase(),AT[AA]=AF[M](),AC.push((AT[AA]?"":"no-")+AA))
}return AT.input||N(),AT.addTest=function(B,A){if(typeof B=="object"){for(var C in B){V(B,C)&&AT.addTest(C,B[C])
}}else{B=B.toLowerCase();
if(AT[B]!==AV){return AT
}A=typeof A=="function"?A():A,typeof AS!="undefined"&&AS&&(AR.className+=" "+(A?"":"no-")+B),AT[B]=A
}return AT
},U(""),AP=AN=null,function(x,w){function H(f,e){var h=f.createElement("p"),g=f.getElementsByTagName("head")[0]||f.documentElement;
return h.innerHTML="x<style>"+e+"</style>",g.insertBefore(h.lastChild,g.firstChild)
}function G(){var b=A.elements;
return typeof b=="string"?b.split(" "):b
}function F(d){var c=J[d[L]];
return c||(c={},K++,d[L]=K,J[K]=c),c
}function E(b,h,e){h||(h=w);
if(I){return h.createElement(b)
}e||(e=F(h));
var d;
return e.cache[b]?d=e.cache[b].cloneNode():t.test(b)?d=(e.cache[b]=e.createElem(b)).cloneNode():d=e.createElem(b),d.canHaveChildren&&!u.test(b)?e.frag.appendChild(d):d
}function D(b,l){b||(b=w);
if(I){return b.createDocumentFragment()
}l=l||F(b);
var k=l.frag.cloneNode(),j=0,i=G(),h=i.length;
for(;
j<h;
j++){k.createElement(i[j])
}return k
}function C(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return A.shivMethods?E(a,d,c):c.createElem(a)
},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+G().join().replace(/\w+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'
})+");return n}")(A,c.frag)
}function B(b){b||(b=w);
var d=F(b);
return A.shivCSS&&!s&&!d.hasCSS&&(d.hasCSS=!!H(b,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),I||C(b,d),b
}var v=x.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,t=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,s,L="_html5shiv",K=0,J={},I;
(function(){try{var b=w.createElement("a");
b.innerHTML="<xyz></xyz>",s="hidden" in b,I=b.childNodes.length==1||function(){w.createElement("a");
var c=w.createDocumentFragment();
return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"
}()
}catch(d){s=!0,I=!0
}})();
var A={elements:v.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:v.shivCSS!==!1,supportsUnknownElements:I,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:B,createElement:E,createDocumentFragment:D};
x.html5=A,B(w)
}(this,AW),AT._version=AU,AT._prefixes=AK,AT._domPrefixes=AH,AT._cssomPrefixes=AI,AT.mq=Y,AT.hasEvent=X,AT.testProp=function(A){return Q([A])
},AT.testAllProps=O,AT.testStyles=Z,AT.prefixed=function(B,A,C){return A?O(B,A,C):O(B,"pfx")
},AR.className=AR.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(AS?" js "+AC.join(" "):""),AT
}(this,this.document),function(AD,AC,AB){function AA(A){return"[object Function]"==P.call(A)
}function Z(A){return"string"==typeof A
}function Y(){}function X(A){return !A||"loaded"==A||"complete"==A||"uninitialized"==A
}function W(){var A=O.shift();
M=1,A?A.t?R(function(){("c"==A.t?L.injectCss:L.injectJs)(A.s,0,A.a,A.x,A.e,1)
},0):(A(),W()):M=0
}function V(t,s,q,p,n,m,h){function g(a){if(!B&&X(b.readyState)&&(v.r=B=1,!M&&W(),b.onload=b.onreadystatechange=null,a)){"img"!=t&&R(function(){I.removeChild(b)
},50);
for(var c in D[s]){D[s].hasOwnProperty(c)&&D[s][c].onload()
}}}var h=h||L.errorTimeout,b=AC.createElement(t),B=0,A=0,v={t:q,s:s,e:n,a:m,x:h};
1===D[s]&&(A=1,D[s]=[]),"object"==t?b.data=s:(b.src=s,b.type=t),b.width=b.height="0",b.onerror=b.onload=b.onreadystatechange=function(){g.call(this,A)
},O.splice(p,0,v),"img"!=t&&(A||2===D[s]?(I.insertBefore(b,J?null:Q),R(g,h)):D[s].push(b))
}function U(B,A,h,g,e){return M=0,A=A||"j",Z(B)?V("c"==A?G:H,B,A,this.i++,h,g,e):(O.splice(this.i++,0,B),1==O.length&&W()),this
}function T(){var A=L;
return A.loader={load:U,i:0},A
}var S=AC.documentElement,R=AD.setTimeout,Q=AC.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!AC.createRange().compareNode,I=J?S:Q.parentNode,S=AD.opera&&"[object Opera]"==P.call(AD.opera),S=!!AC.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(A){return"[object Array]"==P.call(A)
},E=[],D={},C={timeout:function(B,A){return A.length&&(B.timeout=A[0]),B
}},N,L;
L=function(c){function A(i){var i=i.split("!"),h=E.length,o=i.pop(),n=i.length,o={url:o,origUrl:o,prefixes:i},m,l,j;
for(l=0;
l<n;
l++){j=i[l].split("="),(m=C[j.shift()])&&(o=m(o,j))
}for(l=0;
l<h;
l++){o=E[l](o)
}return o
}function k(b,q,p,o,n){var m=A(b),l=m.autoCallback;
m.url.split(".").pop().split("?").shift(),m.bypass||(q&&(q=AA(q)?q:q[b]||q[o]||q[b.split("/").pop().split("?")[0]]),m.instead?m.instead(b,q,p,o,n):(D[m.url]?m.noexec=!0:D[m.url]=1,p.load(m.url,m.forceCSS||!m.forceJS&&"css"==m.url.split(".").pop().split("?").shift()?"c":AB,m.noexec,m.attrs,m.timeout),(AA(q)||AA(l))&&p.load(function(){T(),q&&q(m.origUrl,n,o),l&&l(m.origUrl,n,o),D[m.url]=2
})))
}function f(w,v){function u(b,h){if(b){if(Z(b)){h||(r=function(){var i=[].slice.call(arguments);
q.apply(this,i),p()
}),k(b,r,v,0,t)
}else{if(Object(b)===b){for(g in o=function(){var a=0,i;
for(i in b){b.hasOwnProperty(i)&&a++
}return a
}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(AA(r)?r=function(){var i=[].slice.call(arguments);
q.apply(this,i),p()
}:r[g]=function(i){return function(){var a=[].slice.call(arguments);
i&&i.apply(this,a),p()
}
}(q[g])),k(b[g],r,v,g,t))
}}}}else{!h&&p()
}}var t=!!w.test,s=w.load||w.both,r=w.callback||Y,q=r,p=w.complete||Y,o,g;
u(t?w.yep:w.nope,!!s),s&&u(s)
}var e,d,B=this.yepnope.loader;
if(Z(c)){k(c,0,B,0)
}else{if(F(c)){for(e=0;
e<c.length;
e++){d=c[e],Z(d)?k(d,0,B,0):F(d)?L(d):Object(d)===d&&f(d,B)
}}else{Object(c)===c&&f(c,B)
}}},L.addPrefix=function(B,A){C[B]=A
},L.addFilter=function(A){E.push(A)
},L.errorTimeout=10000,null==AC.readyState&&AC.addEventListener&&(AC.readyState="loading",AC.addEventListener("DOMContentLoaded",N=function(){AC.removeEventListener("DOMContentLoaded",N,0),AC.readyState="complete"
},0)),AD.yepnope=T(),AD.yepnope.executeStack=W,AD.yepnope.injectJs=function(p,n,m,h,g,f){var b=AC.createElement("script"),B,A,h=h||L.errorTimeout;
b.src=p;
for(A in m){b.setAttribute(A,m[A])
}n=f?W:n||Y,b.onreadystatechange=b.onload=function(){!B&&X(b.readyState)&&(B=1,n(),b.onload=b.onreadystatechange=null)
},R(function(){B||(B=1,n(1))
},h),g?b.onload():Q.parentNode.insertBefore(b,Q)
},AD.yepnope.injectCss=function(A,l,k,h,f,b){var h=AC.createElement("link"),B,l=b?W:l||Y;
h.href=A,h.rel="stylesheet",h.type="text/css";
for(B in k){h.setAttribute(B,k[B])
}f||(Q.parentNode.insertBefore(h,Q),R(l,0))
}
}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))
};
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)
},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()
},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())
},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))
};
x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;
if(!e){return this
}if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n){return !n||n.jquery?(n||r).find(e):this.constructor(n).find(e)
}if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n)){for(i in n){x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i])
}}return this
}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2]){return r.find(e)
}this.length=1,this[0]=o
}return this.context=a,this.selector=e,this
}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))
},selector:"",length:0,toArray:function(){return g.call(this)
},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]
},pushStack:function(e){var t=x.merge(this.constructor(),e);
return t.prevObject=this,t.context=this.context,t
},each:function(e,t){return x.each(this,e,t)
},ready:function(e){return x.ready.promise().done(e),this
},slice:function(){return this.pushStack(g.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var t=this.length,n=+e+(0>e?t:0);
return this.pushStack(n>=0&&t>n?[this[n]]:[])
},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;
for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);
u>l;
l++){if(null!=(o=arguments[l])){for(i in o){e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r))
}}}return s
},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x
},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)
},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body){return setTimeout(x.ready)
}x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))
}},isFunction:function(e){return"function"===x.type(e)
},isArray:Array.isArray||function(e){return"array"===x.type(e)
},isWindow:function(e){return null!=e&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e
},isPlainObject:function(e){var n;
if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e)){return !1
}try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf")){return !1
}}catch(r){return !1
}if(x.support.ownLast){for(n in e){return v.call(e,n)
}}for(n in e){}return n===t||v.call(e,n)
},isEmptyObject:function(e){var t;
for(t in e){return !1
}return !0
},error:function(e){throw Error(e)
},parseHTML:function(e,t,n){if(!e||"string"!=typeof e){return null
}"boolean"==typeof t&&(n=t,t=!1),t=t||a;
var r=k.exec(e),i=!n&&[];
return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))
},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)
},parseXML:function(n){var r,i;
if(!n||"string"!=typeof n){return null
}try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
}catch(o){r=t
}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r
},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)
})(t)
},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)
},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);
if(n){if(a){for(;
o>i;
i++){if(r=t.apply(e[i],n),r===!1){break
}}}else{for(i in e){if(r=t.apply(e[i],n),r===!1){break
}}}}else{if(a){for(;
o>i;
i++){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}else{for(i in e){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}}return e
},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)
}:function(e){return null==e?"":(e+"").replace(C,"")
},makeArray:function(e,t){var n=t||[];
return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n
},inArray:function(e,t,n){var r;
if(t){if(m){return m.call(t,e,n)
}for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;
r>n;
n++){if(n in t&&t[n]===e){return n
}}}return -1
},merge:function(e,n){var r=n.length,i=e.length,o=0;
if("number"==typeof r){for(;
r>o;
o++){e[i++]=n[o]
}}else{while(n[o]!==t){e[i++]=n[o++]
}}return e.length=i,e
},grep:function(e,t,n){var r,i=[],o=0,a=e.length;
for(n=!!n;
a>o;
o++){r=!!t(e[o],o),n!==r&&i.push(e[o])
}return i
},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];
if(a){for(;
o>i;
i++){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}else{for(i in e){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}return d.apply([],s)
},guid:1,proxy:function(e,n){var r,i,o;
return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))
},i.guid=e.guid=e.guid||x.guid++,i):t
},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;
if("object"===x.type(r)){o=!0;
for(l in r){x.access(e,n,l,r[l],!0,a,s)
}}else{if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)
})),n)){for(;
u>l;
l++){n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)))
}}}return o?e:c?n.call(e):u?n(e[0],r):a
},now:function(){return(new Date).getTime()
},swap:function(e,t,n,r){var i,o,a={};
for(o in t){a[o]=e.style[o],e.style[o]=t[o]
}i=n.apply(e,r||[]);
for(o in t){e.style[o]=a[o]
}return i
}}),x.ready.promise=function(t){if(!n){if(n=x.Deferred(),"complete"===a.readyState){setTimeout(x.ready)
}else{if(a.addEventListener){a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1)
}else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);
var r=!1;
try{r=null==e.frameElement&&a.documentElement
}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")
}catch(e){return setTimeout(o,50)
}_(),x.ready()
}}()
}}}return n.promise(t)
},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()
});
function M(e){var t=e.length,n=x.type(e);
return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)
}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0
},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;
for(;
n>t;
t++){if(this[t]===e){return t
}}return -1
},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;
return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)
};
try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType
}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))
}:function(e,t){var n=e.length,r=0;
while(e[n++]=t[r++]){}e.length=n-1
}}
}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;
if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e){return n
}if(1!==(l=t.nodeType)&&9!==l){return[]
}if(h&&!i){if(o=Z.exec(e)){if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode){return n
}if(a.id===s){return n.push(a),n
}}else{if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s){return n.push(a),n
}}}else{if(o[2]){return M.apply(n,t.getElementsByTagName(e)),n
}if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName){return M.apply(n,t.getElementsByClassName(s)),n
}}}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;
while(u--){c[u]=m+xt(c[u])
}y=V.test(e)&&t.parentNode||t,x=c.join(",")
}if(x){try{return M.apply(n,y.querySelectorAll(x)),n
}catch(T){}finally{d||t.removeAttribute("id")
}}}}return At(e.replace(z,"$1"),t,n,i)
}function st(e){return K.test(e+"")
}function lt(){var e=[];
function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r
}return t
}function ut(e){return e[b]=!0,e
}function ct(e){var t=f.createElement("div");
try{return !!e(t)
}catch(n){return !1
}finally{t.parentNode&&t.parentNode.removeChild(t),t=null
}}function pt(e,t,n){e=e.split("|");
var r,i=e.length,a=n?null:t;
while(i--){(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)
}}function ft(e,t){var n=e.getAttributeNode(t);
return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null
}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)
}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t
}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);
if(r){return r
}if(n){while(n=n.nextSibling){if(n===t){return -1
}}}return e?1:-1
}function mt(e){return function(t){var n=t.nodeName.toLowerCase();
return"input"===n&&t.type===e
}
}function yt(e){return function(t){var n=t.nodeName.toLowerCase();
return("input"===n||"button"===n)&&t.type===e
}
}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;
while(a--){n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
}})
})
}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;
return t?"HTML"!==t.nodeName:!1
},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;
return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()
}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")
}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")
}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length
}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length
}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length
}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);
return n&&n.parentNode?[n]:[]
}},o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){return e.getAttribute("id")===t
}
}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");
return n&&n.value===t
}
}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t
}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);
if("*"===e){while(n=o[i++]){1===n.nodeType&&r.push(n)
}return r
}return o
},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t
},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")
}),ct(function(e){var t=n.createElement("input");
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")
})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)
}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))
}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return !0
}}}return !1
},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))
}),A=d.compareDocumentPosition?function(e,t){if(e===t){return S=!0,0
}var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);
return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1
}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];
if(e===t){return S=!0,0
}if(!o||!a){return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0
}if(o===a){return gt(e,t)
}r=e;
while(r=r.parentNode){s.unshift(r)
}r=t;
while(r=r.parentNode){l.unshift(r)
}while(s[i]===l[i]){i++
}return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0
},n):f
},at.matches=function(e,t){return at(e,null,null,t)
},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t))){try{var n=y.call(e,t);
if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType){return n
}}catch(i){}}return at(t,f,null,[e]).length>0
},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)
},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);
var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;
return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a
},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)
},at.uniqueSort=function(e){var t,n=[],i=0,o=0;
if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++]){t===e[o]&&(i=n.push(o))
}while(i--){e.splice(n[i],1)
}}return e
},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent){return e.textContent
}for(e=e.firstChild;
e;
e=e.nextSibling){n+=a(e)
}}else{if(3===i||4===i){return e.nodeValue
}}}else{for(;
t=e[r];
r++){n+=a(t)
}}return n
},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e
},PSEUDO:function(e){var n,r=!e[5]&&e[2];
return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))
}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();
return"*"===e?function(){return !0
}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t
}
},CLASS:function(e){var t=N[e+" "];
return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")
})
},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);
return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}
},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
return 1===r&&0===i?function(e){return !!e.parentNode
}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;
if(m){if(o){while(g){p=t;
while(p=p[g]){if(s?p.nodeName.toLowerCase()===y:1===p.nodeType){return !1
}}h=g="only"===e&&!h&&"nextSibling"
}return !0
}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];
while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];
break
}}}else{if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T){f=u[1]
}else{while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t)){break
}}}}return f-=i,f===r||0===f%r&&f/r>=0
}}
},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);
return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;
while(a--){i=F.call(e,o[a]),e[i]=!(n[i]=o[a])
}}):function(e){return r(e,0,n)
}):r
}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));
return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;
while(s--){(o=a[s])&&(e[s]=!(t[s]=o))
}}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()
}
}),has:ut(function(e){return function(t){return at(e,t).length>0
}
}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1
}
}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;
do{if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
}}while((t=t.parentNode)&&1===t.nodeType);
return !1
}
}),target:function(t){var n=e.location&&e.location.hash;
return n&&n.slice(1)===t.id
},root:function(e){return e===d
},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===!1
},disabled:function(e){return e.disabled===!0
},checked:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&!!e.checked||"option"===t&&!!e.selected
},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType){return !1
}}return !0
},parent:function(e){return !o.pseudos.empty(e)
},header:function(e){return tt.test(e.nodeName)
},input:function(e){return et.test(e.nodeName)
},button:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&"button"===e.type||"button"===t
},text:function(e){var t;
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)
},first:vt(function(){return[0]
}),last:vt(function(e,t){return[t-1]
}),eq:vt(function(e,t,n){return[0>n?n+t:n]
}),even:vt(function(e,t){var n=0;
for(;
t>n;
n+=2){e.push(n)
}return e
}),odd:vt(function(e,t){var n=1;
for(;
t>n;
n+=2){e.push(n)
}return e
}),lt:vt(function(e,t,n){var r=0>n?n+t:n;
for(;
--r>=0;
){e.push(r)
}return e
}),gt:vt(function(e,t,n){var r=0>n?n+t:n;
for(;
t>++r;
){e.push(r)
}return e
})}};
for(n in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){o.pseudos[n]=mt(n)
}for(n in {submit:!0,reset:!0}){o.pseudos[n]=yt(n)
}function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];
if(c){return t?0:c.slice(0)
}s=e,l=[],u=o.preFilter;
while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));
for(a in o.filter){!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length))
}if(!n){break
}}return t?s.length:s?at.error(e):k(e,l).slice(0)
}function xt(e){var t=0,n=e.length,r="";
for(;
n>t;
t++){r+=e[t].value
}return r
}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;
return t.first?function(t,n,i){while(t=t[r]){if(1===t.nodeType||o){return e(t,n,i)
}}}:function(t,n,s){var l,u,c,p=T+" "+a;
if(s){while(t=t[r]){if((1===t.nodeType||o)&&e(t,n,s)){return !0
}}}else{while(t=t[r]){if(1===t.nodeType||o){if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i){return l===!0
}}else{if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0){return !0
}}}}}}
}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;
while(i--){if(!e[i](t,n,r)){return !1
}}return !0
}:e[0]
}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;
for(;
l>s;
s++){(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s))
}return a
}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;
if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;
while(c--){(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))
}}if(o){if(i||e){if(i){u=[],c=y.length;
while(c--){(p=y[c])&&u.push(m[c]=p)
}i(null,y=[],u,l)
}c=y.length;
while(c--){(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))
}}}else{y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)
}})
}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t
},s,!0),p=wt(function(e){return F.call(t,e)>-1
},s,!0),f=[function(e,n,r){return !a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))
}];
for(;
i>l;
l++){if(n=o.relative[e[l].type]){f=[wt(Tt(f),n)]
}else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;
i>r;
r++){if(o.relative[e[r].type]){break
}}return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))
}f.push(n)
}}return Tt(f)
}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||0.1;
for(w&&(u=l!==f&&l,i=n);
null!=(h=N[b]);
b++){if(a&&h){g=0;
while(m=e[g++]){if(m(h,l,c)){p.push(h);
break
}}w&&(T=k,i=++n)
}r&&((h=!m&&h)&&v--,s&&x.push(h))
}if(v+=b,r&&b!==v){g=0;
while(m=t[g++]){m(x,y,l,c)
}if(s){if(v>0){while(b--){x[b]||y[b]||(y[b]=q.call(p))
}}y=Ct(y)
}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)
}return w&&(T=k,u=C),x
};
return r?ut(s):s
}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];
if(!o){t||(t=bt(e)),n=t.length;
while(n--){o=kt(t[n]),o[b]?r.push(o):i.push(o)
}o=E(e,Et(i,r))
}return o
};
function St(e,t,n){var r=0,i=t.length;
for(;
i>r;
r++){at(e,t[r],n)
}return n
}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);
if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t){return n
}e=e.slice(s.shift().value.length)
}a=Q.needsContext.test(e)?0:s.length;
while(a--){if(u=s[a],o.relative[c=u.type]){break
}if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e){return M.apply(n,i),n
}break
}}}return l(e,f)(i,t,!h,n,V.test(e)),n
}o.pseudos.nth=o.pseudos.eq;
function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains
}(e);
var O={};
function F(e){var t=O[e]={};
return x.each(e.match(T)||[],function(e,n){t[n]=!0
}),t
}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);
var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;
l&&o>a;
a++){if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;
break
}}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())
},p={add:function(){if(l){var t=l.length;
(function i(t){x.each(t,function(t,n){var r=x.type(n);
"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)
})
})(arguments),n?o=l.length:r&&(s=t,c(r))
}return this
},remove:function(){return l&&x.each(arguments,function(e,t){var r;
while((r=x.inArray(t,l,r))>-1){l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)
}}),this
},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)
},empty:function(){return l=[],o=0,this
},disable:function(){return l=u=r=t,this
},disabled:function(){return !l
},lock:function(){return u=t,r||p.disable(),this
},locked:function(){return !u
},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this
},fire:function(){return p.fireWith(this,arguments),this
},fired:function(){return !!i
}};
return p
},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this
},then:function(){var e=arguments;
return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];
i[o[1]](function(){var e=s&&s.apply(this,arguments);
e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)
})
}),e=null
}).promise()
},promise:function(e){return null!=e?x.extend(e,r):r
}},i={};
return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];
r[o[1]]=a.add,s&&a.add(function(){n=s
},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=a.fireWith
}),r.promise(i),e&&e.call(i,i),i
},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)
}
},s,l,u;
if(r>1){for(s=Array(r),l=Array(r),u=Array(r);
r>t;
t++){n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i
}}return i||o.resolveWith(u,n),o.promise()
}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");
if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length){return t
}s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;
try{delete d.test
}catch(h){t.deleteExpando=!1
}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1
}),d.cloneNode(!0).click());
for(f in {submit:!0,change:!0,focusin:!0}){d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1
}d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;
for(f in x(t)){break
}return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];
l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth
}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t
}({});
var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;
function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;
if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n){return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o
}}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;
if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;
while(i--){delete r[t[i]]
}if(n?!I(r):!x.isEmptyObject(r)){return 
}}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)
}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)
},data:function(e,t,n){return R(e,t,n)
},removeData:function(e,t){return W(e,t)
},_data:function(e,t,n){return R(e,t,n,!0)
},_removeData:function(e,t){return W(e,t,!0)
},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType){return !1
}var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];
return !t||t!==!0&&e.getAttribute("classid")===t
}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];
if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;
r.length>a;
a++){i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]))
}x._data(s,"parsedAttrs",!0)
}return o
}return"object"==typeof e?this.each(function(){x.data(this,e)
}):arguments.length>1?this.each(function(){x.data(this,e,n)
}):s?$(s,e,x.data(s,e)):null
},removeData:function(e){return this.each(function(){x.removeData(this,e)
})
}});
function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();
if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r
}catch(o){}x.data(e,n,r)
}else{r=t
}}return r
}function I(e){var t;
for(t in e){if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t){return !1
}}return !0
}x.extend({queue:function(e,n,r){var i;
return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t
},dequeue:function(e,t){t=t||"fx";
var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)
};
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";
return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)
})})
}}),x.fn.extend({queue:function(e,n){var r=2;
return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);
x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)
})
},dequeue:function(e){return this.each(function(){x.dequeue(this,e)
})
},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);
n.stop=function(){clearTimeout(r)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])
};
"string"!=typeof e&&(n=e,e=t),e=e||"fx";
while(s--){r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l))
}return l(),o.promise(n)
}});
var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;
x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)
},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)
})
},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)
},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]
}catch(n){}})
},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).addClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;
while(i=t[o++]){0>r.indexOf(" "+i+" ")&&(r+=i+" ")
}n.className=x.trim(r)
}}}return this
},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;
while(i=t[o++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")
}}n.className=e?x.trim(r):""
}}}return this
},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;
return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)
}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];
while(o=u[a++]){l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)
}}else{(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")
}})
},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;
for(;
r>n;
n++){if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0){return !0
}}return !1
},val:function(e){var n,r,i,o=this[0];
if(arguments.length){return i=x.isFunction(e),this.each(function(n){var o;
1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""
})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set" in r&&r.set(this,o,"value")!==t||(this.value=o))
})
}if(o){return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get" in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)
}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");
return null!=t?t:e.text
}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;
for(;
s>l;
l++){if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o){return t
}a.push(t)
}}return a
},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;
while(a--){r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0)
}return n||(e.selectedIndex=-1),o
}}},attr:function(e,n,r){var o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get" in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set" in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))
}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);
if(o&&1===e.nodeType){while(n=o[i++]){r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)
}}},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;
return e.setAttribute("type",t),n&&(e.value=n),t
}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set" in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get" in o&&null!==(i=o.get(e,n))?i:e[n]
}},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");
return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1
}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n
}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;
x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;
return x.expr.attrHandle[n]=o,a
}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null
}
}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)
}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);
return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t
}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null
},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);
return r&&r.specified?r.value:t
},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)
}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t
}}
})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)
}}
}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t
},set:function(e,t){return e.style.cssText=t+""
}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this
}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t
}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value
})
});
var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;
function it(){return !0
}function ot(){return !1
}function at(){try{return a.activeElement
}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);
if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)
},f.elem=e),n=(n||"").match(T)||[""],u=n.length;
while(u--){s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0)
}e=null
}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);
if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;
while(u--){if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;
while(o--){a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a))
}l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])
}else{for(d in c){x.event.remove(e,d+t[u],n,r,!0)
}}}x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))
}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];
if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);
u;
u=u.parentNode){h.push(u),f=u
}f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)
}d=0;
while((u=h[d++])&&!n.isPropagationStopped()){n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault()
}if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;
try{i[g]()
}catch(y){}x.event.triggered=t,f&&(i[l]=f)
}return n.result
}},dispatch:function(e){e=x.event.fix(e);
var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};
if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;
while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;
while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped()){(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
}}return c.postDispatch&&c.postDispatch.call(this,e),e.result
}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;
if(l&&u.nodeType&&(!e.button||"click"!==e.type)){for(;
u!=this;
u=u.parentNode||this){if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;
l>a;
a++){i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i)
}o.length&&s.push({elem:u,handlers:o})
}}}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s
},fix:function(e){if(e[x.expando]){return e
}var t,n,r,i=e.type,o=e,s=this.fixHooks[i];
s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;
while(t--){n=r[t],e[n]=o[n]
}return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;
return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus){try{return this.focus(),!1
}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t
},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t
},_default:function(e){return x.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)
}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});
r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)
}:function(e,t,n){var r="on"+t;
e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))
},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)
},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()
}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n
}}
}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;
r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0
}),x._data(r,"submitBubbles",!0))
}),t)
},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))
},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)
}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)
})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;
Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)
}),x._data(t,"changeBubbles",!0))
}),t)
},handle:function(e){var n=e.target;
return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t
},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)
}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)
};
x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)
},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)
}}
}),x.fn.extend({on:function(e,n,r,i,o){var a,s;
if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);
for(a in e){this.on(a,n,r,e[a],o)
}return this
}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1){i=ot
}else{if(!i){return this
}}return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)
},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)
})
},one:function(e,t,n,r){return this.on(e,t,n,r,1)
},off:function(e,n,r){var i,o;
if(e&&e.preventDefault&&e.handleObj){return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
}if("object"==typeof e){for(o in e){this.off(o,n,e[o])
}return this
}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)
})
},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)
})
},triggerHandler:function(e,n){var r=this[0];
return r?x.event.trigger(e,n,r,!0):t
}});
var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};
x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;
if("string"!=typeof e){return this.pushStack(x(e).filter(function(){for(t=0;
i>t;
t++){if(x.contains(r[t],this)){return !0
}}}))
}for(t=0;
i>t;
t++){x.find(e,r[t],n)
}return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n
},has:function(e){var t,n=x(e,this),r=n.length;
return this.filter(function(){for(t=0;
r>t;
t++){if(x.contains(this,n[t])){return !0
}}})
},not:function(e){return this.pushStack(ft(this,e||[],!0))
},filter:function(e){return this.pushStack(ft(this,e||[],!1))
},is:function(e){return !!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length
},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;
for(;
i>r;
r++){for(n=this[r];
n&&n!==t;
n=n.parentNode){if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);
break
}}}return this.pushStack(o.length>1?x.unique(o):o)
},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);
return this.pushStack(x.unique(r))
},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}});
function pt(e,t){do{e=e[t]
}while(e&&1!==e.nodeType);
return e
}x.each({parent:function(e){var t=e.parentNode;
return t&&11!==t.nodeType?t:null
},parents:function(e){return x.dir(e,"parentNode")
},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)
},next:function(e){return pt(e,"nextSibling")
},prev:function(e){return pt(e,"previousSibling")
},nextAll:function(e){return x.dir(e,"nextSibling")
},prevAll:function(e){return x.dir(e,"previousSibling")
},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)
},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)
},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return x.sibling(e.firstChild)
},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)
}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)
}
}),x.extend({filter:function(e,t,n){var r=t[0];
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType
}))
},dir:function(e,n,r){var i=[],o=e[n];
while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r))){1===o.nodeType&&i.push(o),o=o[n]
}return i
},sibling:function(e,t){var n=[];
for(;
e;
e=e.nextSibling){1===e.nodeType&&e!==t&&n.push(e)
}return n
}});
function ft(e,t,n){if(x.isFunction(t)){return x.grep(e,function(e,r){return !!t.call(e,r,e)!==n
})
}if(t.nodeType){return x.grep(e,function(e){return e===t!==n
})
}if("string"==typeof t){if(st.test(t)){return x.filter(t,e,n)
}t=x.filter(t,e)
}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n
})
}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();
if(n.createElement){while(t.length){n.createElement(t.pop())
}}return n
}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));
At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.insertBefore(e,t.firstChild)
}})
},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)
})
},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
})
},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;
for(;
null!=(n=r[i]);
i++){t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n))
}return this
},empty:function(){var e,t=0;
for(;
null!=(e=this[t]);
t++){1===e.nodeType&&x.cleanData(Ft(e,!1));
while(e.firstChild){e.removeChild(e.firstChild)
}e.options&&x.nodeName(e,"select")&&(e.options.length=0)
}return this
},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)
})
},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;
if(e===t){return 1===n.nodeType?n.innerHTML.replace(gt,""):t
}if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");
try{for(;
i>r;
r++){n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e)
}n=0
}catch(o){}}n&&this.empty().append(e)
},null,e,arguments.length)
},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]
}),t=0;
return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];
i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))
},!0),t?this:this.remove()
},detach:function(e){return this.remove(e,!0)
},domManip:function(e,t,n){e=d.apply([],e);
var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);
if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h)){return this.each(function(r){var i=p.eq(r);
g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)
})
}if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;
c>u;
u++){i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u)
}if(o){for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;
o>u;
u++){i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")))
}}l=r=null
}return this
}});
function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e
}function qt(e){var t=Et.exec(e.type);
return t?e.type=t[1]:e.removeAttribute("type"),e
}function _t(e,t){var n,r=0;
for(;
null!=(n=e[r]);
r++){x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))
}}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;
if(s){delete a.handle,a.events={};
for(n in s){for(r=0,i=s[n].length;
i>r;
r++){x.event.add(t,n,s[n][r])
}}}a.data&&(a.data=x.extend({},a.data))
}}function Ot(e,t){var n,r,i;
if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);
for(r in i.events){x.removeEvent(t,r,i.handle)
}t.removeAttribute(x.expando)
}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;
for(;
a>=r;
r++){n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get())
}return this.pushStack(i)
}
});
function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
if(!s){for(s=[],r=e.childNodes||e;
null!=(o=r[a]);
a++){!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n))
}}return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s
}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)
}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);
if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e))){for(r=Ft(o),s=Ft(e),a=0;
null!=(i=s[a]);
++a){r[a]&&Ot(i,r[a])
}}if(t){if(n){for(s=s||Ft(e),r=r||Ft(o),a=0;
null!=(i=s[a]);
a++){Mt(i,r[a])
}}else{Mt(e,o)
}}return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o
},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;
for(;
p>h;
h++){if(o=e[h],o||0===o){if("object"===x.type(o)){x.merge(d,o.nodeType?[o]:o)
}else{if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];
while(i--){s=s.lastChild
}if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;
while(i--){x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)
}}x.merge(d,s.childNodes),s.textContent="";
while(s.firstChild){s.removeChild(s.firstChild)
}s=f.lastChild
}else{d.push(t.createTextNode(o))
}}}}s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;
while(o=d[h++]){if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;
while(o=s[i++]){kt.test(o.type||"")&&n.push(o)
}}}return s=null,f
},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;
for(;
null!=(n=e[s]);
s++){if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events){for(r in a.events){f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle)
}}u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))
}}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e)){return this.each(function(t){x(this).wrapAll(e.call(this,t))
})
}if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;
while(e.firstChild&&1===e.firstChild.nodeType){e=e.firstChild
}return e
}).append(this)
}return this
},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))
}):this.each(function(){var t=x(this),n=t.contents();
n.length?n.wrapAll(e):t.append(e)
})
},wrap:function(e){var t=x.isFunction(e);
return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)
})
},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)
}).end()
}});
var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];
function tn(e,t){if(t in e){return t
}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;
while(i--){if(t=en[i]+n,t in e){return t
}}return r
}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)
}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;
for(;
s>a;
a++){r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))))
}for(a=0;
s>a;
a++){r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"))
}return e
}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;
if(x.isArray(n)){for(o=Rt(e),i=n.length;
i>s;
s++){a[n[s]]=x.css(e,n[s],!1,o)
}return a
}return r!==t?x.style(e,n,r):x.css(e,n)
},e,n,arguments.length>1)
},show:function(){return rn(this,!0)
},hide:function(){return rn(this)
},toggle:function(e){var t="boolean"==typeof e;
return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()
})
}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");
return""===n?"1":n
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;
if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t){return s&&"get" in s&&(o=s.get(e,!1,i))!==t?o:u[n]
}if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set" in s&&(r=s.set(e,r,i))===t))){try{u[n]=r
}catch(c){}}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);
return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get" in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a
}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;
return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l
}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;
return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l
});
function on(e,t,n){var r=Vt.exec(t);
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;
for(;
4>o;
o+=2){"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)))
}return a
}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);
if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i)){return i
}r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0
}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"
}function ln(e){var t=a,n=Gt[e];
return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n
}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");
return n.remove(),r
}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)
}):sn(e,n,i):t
},set:function(e,t,r){var i=r&&Rt(e);
return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)
}}
}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":t?"1":""
},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)
}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t
}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t
}}
})
}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))
},x.expr.filters.visible=function(e){return !x.expr.filters.hidden(e)
}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];
for(;
4>r;
r++){i[e+Zt[r]+t]=o[r]||o[r-2]||o[0]
}return i
}},Ut.test(e)||(x.cssHooks[e+t].set=on)
});
var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;
x.fn.extend({serialize:function(){return x.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");
return e?x.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))
}).map(function(e,t){var n=x(this).val();
return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}
}):{name:t.name,value:n.replace(fn,"\r\n")}
}).get()
}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
};
if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e)){x.each(e,function(){o(this.name,this.value)
})
}else{for(r in e){gn(r,e[r],n,o)
}}return i.join("&").replace(cn,"+")
};
function gn(e,t,n,r){var i;
if(x.isArray(t)){x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)
})
}else{if(n||"object"!==x.type(t)){r(e,t)
}else{for(i in t){gn(e+"["+i+"]",t[i],n,r)
}}}}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
}
}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)
},bind:function(e,t,n){return this.on(e,null,t,n)
},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)
},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
}});
var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");
try{yn=o.href
}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href
}mn=En.exec(yn.toLowerCase())||[];
function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");
var r,i=0,o=t.toLowerCase().match(T)||[];
if(x.isFunction(n)){while(r=o[i++]){"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}}
}function qn(e,n,r,i){var o={},a=e===jn;
function s(l){var u;
return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);
return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)
}),u
}return s(n.dataTypes[0])||!o["*"]&&s("*")
}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};
for(i in n){n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i])
}return r&&x.extend(!0,e,r),e
}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn){return Sn.apply(this,arguments)
}var i,o,a,s=this,l=e.indexOf(" ");
return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)
}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])
}),this
},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)
}
}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)
},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};
var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;
if(2===b){if(!c){c={};
while(t=Tn.exec(a)){c[t[1].toLowerCase()]=t[2]
}}t=c[e.toLowerCase()]
}return null==t?null:t
},getAllResponseHeaders:function(){return 2===b?a:null
},setRequestHeader:function(e,t){var n=e.toLowerCase();
return b||(e=v[n]=v[n]||e,y[e]=t),this
},overrideMimeType:function(e){return b||(p.mimeType=e),this
},statusCode:function(e){var t;
if(e){if(2>b){for(t in e){m[t]=[m[t],e[t]]
}}else{C.always(e[C.status])
}}return this
},abort:function(e){var t=e||w;
return u&&u.abort(t),k(0,t),this
}};
if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b){return C
}l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);
for(i in p.headers){C.setRequestHeader(i,p.headers[i])
}if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b)){return C.abort()
}w="abort";
for(i in {success:1,error:1,complete:1}){C[i](p[i])
}if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")
},p.timeout));
try{b=1,u.send(y,k)
}catch(N){if(!(2>b)){throw N
}k(-1,N)
}}else{k(-1,"No Transport")
}function k(e,n,r,i){var c,y,v,w,T,N=n;
2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))
}return C
},getJSON:function(e,t,n){return x.get(e,t,n,"json")
},getScript:function(e,n){return x.get(e,t,n,"script")
}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})
}
});
function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;
while("*"===u[0]){u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"))
}if(o){for(s in l){if(l[s]&&l[s].test(o)){u.unshift(s);
break
}}}if(u[0] in r){a=u[0]
}else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;
break
}i||(i=s)
}a=a||i
}return a?(a!==u[0]&&u.unshift(a),r[a]):t
}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();
if(c[1]){for(a in e.converters){u[a.toLowerCase()]=e.converters[a]
}}o=c.shift();
while(o){if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift()){if("*"===o){o=l
}else{if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a){for(i in u){if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));
break
}}}if(a!==!0){if(a&&e["throws"]){t=a(t)
}else{try{t=a(t)
}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}
}}}}}}}return{state:"success",data:t}
}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e
}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;
return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))
},r.insertBefore(n,r.firstChild)
},abort:function(){n&&n.onload(t,!0)
}}
}});
var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;
x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;
return this[e]=!0,e
}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");
return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]
},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments
},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t
}),"script"):t
});
var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;
for(e in Pn){Pn[e](t,!0)
}};
function In(){try{return new e.XMLHttpRequest
}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")
}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return !this.isLocal&&In()||zn()
}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials" in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;
return{send:function(i,o){var a,s,l=n.xhr();
if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields){for(s in n.xhrFields){l[s]=n.xhrFields[s]
}}n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{for(s in i){l.setRequestHeader(s,i[s])
}}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;
try{if(r&&(i||4===l.readyState)){if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i){4!==l.readyState&&l.abort()
}else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);
try{c=l.statusText
}catch(f){c=""
}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404
}}}catch(d){i||o(-1,d)
}p&&o(s,c,p,u)
},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()
},abort:function(){r&&r(t,!0)
}}
}});
var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;
if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;
do{s=s||".5",a/=s,x.style(n.elem,e,a+o)
}while(s!==(s=n.cur()/r)&&1!==s&&--l)
}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n
}]};
function Kn(){return setTimeout(function(){Xn=t
}),Xn=x.now()
}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;
for(;
a>o;
o++){if(r=i[o].call(n,t,e)){return r
}}}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem
}),l=function(){if(i){return !1
}var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;
for(;
l>a;
a++){u.tweens[a].run(o)
}return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)
},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);
return u.tweens.push(r),r
},stop:function(t){var n=0,r=t?u.tweens.length:0;
if(i){return this
}for(i=!0;
r>n;
n++){u.tweens[n].run(1)
}return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this
}}),c=u.props;
for(tr(c,u.opts.specialEasing);
a>o;
o++){if(r=Gn[o].call(u,e,c,u.opts)){return r
}}return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
}function tr(e,t){var n,r,i,o,a;
for(n in e){if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand" in a){o=a.expand(o),delete e[r];
for(n in o){n in e||(e[n]=o[n],t[n]=i)
}}else{t[r]=i
}}}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
var n,r=0,i=e.length;
for(;
i>r;
r++){n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)
}},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)
}});
function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");
n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()
}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()
})
})),1===e.nodeType&&("height" in t||"width" in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
}));
for(r in t){if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){continue
}c[r]=d&&d[r]||x.style(e,r)
}}if(!x.isEmptyObject(c)){d?"hidden" in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()
}),u.done(function(){var t;
x._removeData(e,"fxshow");
for(t in c){x.style(e,t,c[t])
}});
for(r in c){a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))
}}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)
}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")
},cur:function(){var e=rr.propHooks[this.prop];
return e&&e.get?e.get(this):rr.propHooks._default.get(this)
},run:function(e){var t,n=rr.propHooks[this.prop];
return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this
}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]
},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];
x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)
}
}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)
},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);
(i||x._data(this,"finish"))&&t.stop(!0)
};
return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
},stop:function(e,n,r){var i=function(e){var t=e.stop;
delete e.stop,t(r)
};
return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);
if(n){a[n]&&a[n].stop&&i(a[n])
}else{for(n in a){a[n]&&a[n].stop&&Jn.test(n)&&i(a[n])
}}for(n=o.length;
n--;
){o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1))
}(t||!r)&&x.dequeue(this,e)
})
},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;
for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;
t--;
){o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
}for(t=0;
a>t;
t++){r[t]&&r[t].finish&&r[t].finish.call(this)
}delete n.finish
})
}});
function ir(e,t){var n,r={height:e},i=0;
for(t=t?1:0;
4>i;
i+=2-t){n=Zt[i],r["margin"+n]=r["padding"+n]=e
}return t&&(r.opacity=r.width=e),r
}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)
}
}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};
return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)
},r
},x.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;
for(Xn=x.now();
n.length>r;
r++){e=n[r],e()||n[r]!==e||n.splice(r--,1)
}n.length||x.fx.stop(),Xn=t
},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()
},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))
},x.fx.stop=function(){clearInterval(Un),Un=null
},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem
}).length
}),x.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)
})
}var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;
if(s){return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o
}},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");
"static"===r&&(e.style.position="relative");
var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;
l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using" in t?t.using.call(e,u):i.css(u)
}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];
return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;
while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position")){e=e.offsetParent
}return e||s
})
}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);
x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);
return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)
},e,i,arguments.length,null)
}
});
function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1
}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
return x.access(this,function(n,r,i){var o;
return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)
},n,a?i:t,a,null)
}
})
}),x.fn.size=function(){return this.length
},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x
}))
})(window);
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(AH,R,q){function W(C){var A=R.console;
AD[C]||(AD[C]=!0,AH.migrateWarnings.push(C),A&&A.warn&&!AH.migrateMute&&(A.warn("JQMIGRATE: "+C),AH.migrateTrace&&A.trace&&A.trace()))
}function AL(H,A,C,N){if(Object.defineProperty){try{return Object.defineProperty(H,A,{configurable:!0,enumerable:!0,get:function(){return W(N),C
},set:function(Q){W(N),C=Q
}}),q
}catch(M){}}AH._definePropertyBroken=!0,H[A]=C
}var AD={};
AH.migrateWarnings=[],!AH.migrateMute&&R.console&&R.console.log&&R.console.log("JQMIGRATE: Logging is active"),AH.migrateTrace===q&&(AH.migrateTrace=!0),AH.migrateReset=function(){AD={},AH.migrateWarnings.length=0
},"BackCompat"===document.compatMode&&W("jQuery is not compatible with Quirks Mode");
var Z=AH("<input/>",{size:1}).attr("size")&&AH.attrFn,U=AH.attr,P=AH.attrHooks.value&&AH.attrHooks.value.get||function(){return null
},AJ=AH.attrHooks.value&&AH.attrHooks.value.set||function(){return q
},AA=/^(?:input|button)$/i,AI=/^[238]$/,Y=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,AG=/^(?:checked|selected)$/i;
AL(AH,"attrFn",Z||{},"jQuery.attrFn is deprecated"),AH.attr=function(M,A,H,C){var Q=A.toLowerCase(),N=M&&M.nodeType;
return C&&(4>U.length&&W("jQuery.fn.attr( props, pass ) is deprecated"),M&&!AI.test(N)&&(Z?A in Z:AH.isFunction(AH.fn[A])))?AH(M)[A](H):("type"===A&&H!==q&&AA.test(M.nodeName)&&M.parentNode&&W("Can't change the 'type' of an input or button in IE 6/7/8"),!AH.attrHooks[Q]&&Y.test(Q)&&(AH.attrHooks[Q]={get:function(b,c){var S,T=AH.prop(b,c);
return T===!0||"boolean"!=typeof T&&(S=b.getAttributeNode(c))&&S.nodeValue!==!1?c.toLowerCase():q
},set:function(T,c,b){var S;
return c===!1?AH.removeAttr(T,b):(S=AH.propFix[b]||b,S in T&&(T[S]=!0),T.setAttribute(b,b.toLowerCase())),b
}},AG.test(Q)&&W("jQuery.fn.attr('"+Q+"') may use property instead of attribute")),U.call(AH,M,A,H))
},AH.attrHooks.value={get:function(C,A){var H=(C.nodeName||"").toLowerCase();
return"button"===H?P.apply(this,arguments):("input"!==H&&"option"!==H&&W("jQuery.fn.attr('value') no longer gets properties"),A in C?C.value:null)
},set:function(H,C){var A=(H.nodeName||"").toLowerCase();
return"button"===A?AJ.apply(this,arguments):("input"!==A&&"option"!==A&&W("jQuery.fn.attr('value', val) no longer sets properties"),H.value=C,q)
}};
var AF,AE,O=AH.fn.init,z=AH.parseJSON,I=/^([^<]*)(<[\w\W]+>)([^>]*)$/;
AH.fn.init=function(H,M,A){var C;
return H&&"string"==typeof H&&!AH.isPlainObject(M)&&(C=I.exec(AH.trim(H)))&&C[0]&&("<"!==H.charAt(0)&&W("$(html) HTML strings must start with '<' character"),C[3]&&W("$(html) HTML text after last tag is ignored"),"#"===C[0].charAt(0)&&(W("HTML string cannot start with a '#' character"),AH.error("JQMIGRATE: Invalid selector string (XSS)")),M&&M.context&&(M=M.context),AH.parseHTML)?O.call(this,AH.parseHTML(C[2],M,!0),M,A):O.apply(this,arguments)
},AH.fn.init.prototype=AH.fn,AH.parseJSON=function(A){return A||null===A?z.apply(this,arguments):(W("jQuery.parseJSON requires a valid JSON string"),null)
},AH.sub=function(){function A(H,M){return new A.fn.init(H,M)
}AH.extend(!0,A,this),A.superclass=this,A.fn=A.prototype=this(),A.fn.constructor=A,A.sub=this.sub,A.fn.init=function(M,H){return H&&H instanceof AH&&!(H instanceof A)&&(H=A(H)),AH.fn.init.call(this,M,H,C)
},A.fn.init.prototype=A.fn;
var C=A(document);
return W("jQuery.sub() is deprecated"),A
},AH.ajaxSetup({converters:{"text json":AH.parseJSON}});
var AK=AH.fn.data;
AH.fn.data=function(H){var A,C,M=this[0];
return !M||"events"!==H||1!==arguments.length||(A=AH.data(M,H),C=AH._data(M,H),A!==q&&A!==C||C===q)?AK.apply(this,arguments):(W("Use of jQuery.fn.data('events') is deprecated"),C)
};
var AC=/\/(java|ecma)script/i,L=AH.fn.andSelf||AH.fn.addBack;
AH.fn.andSelf=function(){return W("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),L.apply(this,arguments)
},AH.clean||(AH.clean=function(T,Q,H,A){Q=Q||document,Q=!Q.nodeType&&Q[0]||Q,Q=Q.ownerDocument||Q,W("jQuery.clean() is deprecated");
var b,S,N,C,M=[];
if(AH.merge(M,AH.buildFragment(T,Q).childNodes),H){for(N=function(a){return !a.type||AC.test(a.type)?A?A.push(a.parentNode?a.parentNode.removeChild(a):a):H.appendChild(a):q
},b=0;
null!=(S=M[b]);
b++){AH.nodeName(S,"script")&&N(S)||(H.appendChild(S),S.getElementsByTagName!==q&&(C=AH.grep(AH.merge([],S.getElementsByTagName("script")),N),M.splice.apply(M,[b+1,0].concat(C)),b+=C.length))
}}return M
});
var E=AH.event.add,J=AH.event.remove,AB=AH.event.trigger,F=AH.fn.toggle,B=AH.fn.live,G=AH.fn.die,D="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",V=RegExp("\\b(?:"+D+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,X=function(A){return"string"!=typeof A||AH.event.special.hover?A:(K.test(A)&&W("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),A&&A.replace(K,"mouseenter$1 mouseleave$1"))
};
AH.event.props&&"attrChange"!==AH.event.props[0]&&AH.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),AH.event.dispatch&&AL(AH.event,"handle",AH.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),AH.event.add=function(M,H,N,A,C){M!==document&&V.test(H)&&W("AJAX events should be attached to document: "+H),E.call(this,M,X(H||""),N,A,C)
},AH.event.remove=function(M,C,N,H,A){J.call(this,M,X(C)||"",N,H,A)
},AH.fn.error=function(){var A=Array.prototype.slice.call(arguments,0);
return W("jQuery.fn.error() is deprecated"),A.splice(0,0,"error"),arguments.length?this.bind.apply(this,A):(this.triggerHandler.apply(this,A),this)
},AH.fn.toggle=function(H,Q){if(!AH.isFunction(H)||!AH.isFunction(Q)){return F.apply(this,arguments)
}W("jQuery.fn.toggle(handler, handler...) is deprecated");
var A=arguments,C=H.guid||AH.guid++,N=0,M=function(T){var S=(AH._data(this,"lastToggle"+H.guid)||0)%N;
return AH._data(this,"lastToggle"+H.guid,S+1),T.preventDefault(),A[S].apply(this,arguments)||!1
};
for(M.guid=C;
A.length>N;
){A[N++].guid=C
}return this.click(M)
},AH.fn.live=function(C,H,A){return W("jQuery.fn.live() is deprecated"),B?B.apply(this,arguments):(AH(this.context).on(C,this.selector,H,A),this)
},AH.fn.die=function(A,C){return W("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(AH(this.context).off(A,this.selector||"**",C),this)
},AH.event.trigger=function(H,C,M,A){return M||V.test(H)||W("Global events are undocumented and deprecated"),AB.call(this,H,C,M||document,A)
},AH.each(D.split("|"),function(A,C){AH.event.special[C]={setup:function(){var H=this;
return H!==document&&(AH.event.add(document,C+"."+AH.guid,function(){AH.event.trigger(C,null,H,!0)
}),AH._data(this,C,AH.guid++)),!1
},teardown:function(){return this!==document&&AH.event.remove(document,C+"."+AH._data(this,C)),!1
}}
})
}(jQuery,window);
(function(D,C,E){var A,B;
D.uaMatch=function(G){G=G.toLowerCase();
var F=/(yabrowser)[ \/]([\w.]+)/.exec(G)||/(chrome)[ \/]([\w.]+)/.exec(G)||/(webkit)(?:.*version|)[ \/]([\w.]+)/.exec(G)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(G)||/(msie) ([\w.]+)/.exec(G)||G.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(G)||[];
return{browser:F[1]||"",version:F[2]||"0"}
};
if(!D.browser){A=D.uaMatch(C.navigator.userAgent);
B={};
if(A.browser){B[A.browser]=true;
B.version=A.version
}if(B.chrome){B.webkit=true
}else{if(B.yabrowser){B.webkit=true
}else{if(B.webkit){B.safari=true
}}}D.browser=B
}})(jQuery,window);
var uA,bN,bV,bvClass,OS,dE;
var bvClass=bM=dT=wk="";
(function(F,E,G){dE=document.documentElement;
uA=E.navigator.userAgent.toLowerCase();
var D=/(trident)[ \/]([\w.]+)/.exec(uA)||[],C=D[1]||"",B=D[2]||"0",A=document.documentMode;
if($.browser.msie){bN="ie";
bV=$.browser.version
}if(C=="trident"){var H;
if(bV==="7.0"&&B==="4.0"){bM=" ie8_cv";
H=/(^|\s)ie7(\s|$)/
}if(bV==="7.0"&&B==="5.0"||bV==="8.0"&&B==="5.0"){bM=" ie9_cv";
H=(/(^|\s)ie7(\s|$)/)?/(^|\s)ie7(\s|$)/:/(^|\s)ie8(\s|$)/
}H=(/(^|\s)ie7(\s|$)/)?/(^|\s)ie7(\s|$)/:/(^|\s)ie8(\s|$)/;
dE.className=dE.className.replace(H,"$1$2");
if(parseFloat(bV)!==parseFloat(A)){bV=A
}}if($.browser.opera){bN="opera";
bV=$.browser.version
}if($.browser.mozilla){bN="ff";
bV=$.browser.version
}if($.browser.chrome){bN="chrome";
bV=$.browser.version
}if($.browser.yabrowser){bN="yandex";
bV=$.browser.version
}if($.browser.safari){bN="safari";
bV=$.browser.version
}if($.browser.webkit){wk=" webkit"
}if(uA.indexOf("mobile")!==-1){dT=" mobile"
}if(uA.indexOf("iphone")!==-1){bN="m_safari";
OS=" iphone"
}if(uA.indexOf("ipad")!==-1){bN="m_safari";
OS=" ipad"
}if(uA.indexOf("android")!==-1){OS=" android"
}if(uA.indexOf("blackberry")!==-1){OS=" blackBerry"
}if(uA.indexOf("windows")!==-1){OS=" win"
}if(uA.indexOf("macintosh")!==-1){OS=" mac"
}bvClass=parseFloat(bV).toString().replace(/[.\s]+/g,"_");
dE.className+=OS+" "+bN+" "+bN+bvClass+bM+dT+wk
})(jQuery,window);
(function(A){A.fn.shuffle=function(){var D=this.get(),C=function(E){return Math.floor(Math.random()*E)
},B=A.map(D,function(){var F=C(D.length),E=A(D[F]).clone(true)[0];
D.splice(F,1);
return E
});
this.each(function(E){A(this).replaceWith(A(B[E]))
});
return A(B)
}
})(jQuery);
(function(A){A.fn.preload=function(){this.each(function(){var B=new Image();
B.src=this
})
}
})(jQuery);
(function(A){A.fn.eqlHgts=function(G,F,E){var H=A(this),C=null,D=0,B=A(this).closest(".module").find(".gallery-controls");
H.each(function(){var I=A(this).height();
if(A(this).index()===0){D=0
}if(I>D){D=I;
C=A(this)
}if(C!=null){if(F==="panel"&&C.siblings(".gallery-controls").length!==0){C.parent().css("min-height",D+40)
}else{C.parent().css("min-height",D)
}}else{A(this).parent().css("min-height",D)
}});
if(G==="blade"){B.find(".large").filter(function(){var K,J=A(this).closest(".module").find(".module-content"),L=J.find(".content-items"),I=J.find(".panel:visible");
if(L.length){K=L.height()/2
}else{if(I.length){K=(I.height()/2)-20
}else{K=J.height()/2
}}A(this).css("top",-(K+40))
})
}return this
}
})(jQuery);
(function(A){A.fn.sidebarArrow=function(){var D=A(this),B=A(D).position().top,G=A(D).height(),J=A(D).closest("ul"),C=J.find(".active_link_arrow"),E=C.height();
C.animate({top:B+(G/2)-(E/2-2)},300,"linear");
var F=J.outerHeight(true),H=J.siblings(".selected"),I=H.height();
if(F>I){H.css("min-height",F)
}return this
}
})(jQuery);
(function(B){function A(C,D){this.element=B(C);
this.opts=B.extend({slContSel:"module-slider-container",slItemSel:"module-slider-item",slControlsSel:"module-slider-controls",slDotsSel:"module-slider-dots",slLeftSel:"module-slider-left",slRightSel:"module-slider-right",speed:800,checkControlsAfter:false},D);
this.init()
}A.prototype.init=function(){var D=this;
var E=B("."+this.opts.slItemSel,this.element);
var C=E.length;
this.itemWidth=E.width();
this.clickable=true;
this.element.width(this.itemWidth);
this.maxIndex=C-1;
this.currentIndex=0;
B("."+this.opts.slContSel,this.element).css("width",C*this.itemWidth);
if(C==1||C==0){this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slLeftSel+" a").hide();
this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slRightSel+" a").hide();
this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slDotsSel+" a").hide();
return 
}for(var F=0;
F<C;
F++){B(document.createElement("li")).html("<a rel="+F+' href="#">'+(F+1)+"</a>").appendTo(this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slDotsSel)).click(function(G){G.preventDefault();
D.animate(B("a",B(this)).attr("rel"))
})
}this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slLeftSel+" a").click(function(G){G.preventDefault();
D.animate("prev")
});
this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slRightSel+" a").click(function(G){G.preventDefault();
D.animate("next")
});
this.recalcControls();
this.setCurrent(0);
this.checkControls()
};
A.prototype.recalcControls=function(){var C=this.element.next("."+this.opts.slControlsSel);
var D=C.find("."+this.opts.slLeftSel).outerWidth()+C.find("."+this.opts.slRightSel).outerWidth()+C.find("."+this.opts.slDotsSel).outerWidth();
C.css("padding-left",(C.outerWidth()-D)/2)
};
A.prototype.setCurrent=function(C){C=parseInt(C);
this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slDotsSel+" li").removeClass("active");
this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slDotsSel+" li").eq(C).addClass("active")
};
A.prototype.animate=function(D){var C=this;
function I(){if(C.currentIndex>C.maxIndex){C.currentIndext=0
}if(C.currentIndex<0){C.currentIndex=C.maxIndex
}B("."+C.opts.slContSel,C.element).css("margin-left",(C.currentIndex*C.itemWidth*-1));
C.clickable=true;
C.setCurrent(C.currentIndex);
if(!C.opts.checkControlsAfter){C.checkControls()
}}if(this.clickable){this.clickable=false;
var E=this.currentIndex;
switch(D){case"next":this.currentIndex=(E>=this.maxIndex)?parseInt(this.maxIndex):parseInt(this.currentIndex)+1;
break;
case"prev":this.currentIndex=(this.currentIndex<=0)?0:parseInt(this.currentIndex)-1;
break;
case"first":this.currentIndex=0;
break;
case"last":this.currentIndex=this.maxIndex;
break;
default:this.currentIndex=D;
break
}var H=Math.abs(E-this.currentIndex);
var F=H*this.opts.speed;
var G=(this.currentIndex*this.itemWidth*-1);
if(!this.opts.checkControlsAfter){this.checkControls()
}B("."+this.opts.slContSel,this.element).animate({marginLeft:G},{queue:false,duration:F,complete:I})
}};
A.prototype.checkControls=function(){if(this.currentIndex==this.maxIndex){this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slRightSel+" a").hide()
}else{this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slRightSel+" a").show()
}if(this.currentIndex==0){this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slLeftSel+" a").hide()
}else{this.element.next("."+this.opts.slControlsSel).find("."+this.opts.slLeftSel+" a").show()
}};
B.fn.extend({slider:function(C){return this.each(function(){this.slider=new A(this,C)
})
},recalcSlControls:function(){return this.each(function(){this.slider.recalcControls()
})
}})
})(jQuery);
(function(C){C.fn.rssfeed=function(E,D,F){var G={limit:10,showerror:true,errormsg:"",key:null,ssl:false};
var D=C.extend(G,D);
return this.each(function(I,L){var H=C(L);
var K="";
if(D.ssl){K="s"
}if(!H.hasClass("rssFeed")){H.addClass("rssFeed")
}if(E==null){return false
}var J=window.location.protocol+K+"//ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(E);
if(D.limit!=null){J+="&num="+D.limit
}if(D.key!=null){J+="&key="+D.key
}J+="&output=json_xml";
C.getJSON(J,function(M){if(M.responseStatus==200){B(L,M.responseData,D);
if(C.isFunction(F)){F.call(this,H)
}}else{if(D.showerror){if(D.errormsg!=""){var N=D.errormsg
}else{var N=M.responseDetails
}}C(L).html('<div class="rssError"><p>'+N+"</p></div>")
}})
})
};
var B=function(H,D,L){var J=D.feed;
if(!J){return false
}var F="";
var K="odd";
var G=A(D.xmlString);
F+='<ul class="news-items">';
for(var E=0;
E<J.entries.length;
E++){var I=J.entries[E];
if(E==0){F+='<li class="news-item selected"><a href='+I.link+">"+I.title+"</a></li>"
}else{F+='<li class="news-item"><a href='+I.link+">"+I.title+"</a></li>"
}}F+="</ul>";
C(H).html(F)
};
function A(F){var E=navigator.appName;
var D;
if(E=="Microsoft Internet Explorer"){D=new ActiveXObject("Microsoft.XMLDOM");
D.async="false";
D.loadXML(F)
}else{D=(new DOMParser()).parseFromString(F,"text/xml")
}return D
}})(jQuery);
var swfobject=function(){var AQ="undefined",Ac="object",AB="Shockwave Flash",X="ShockwaveFlash.ShockwaveFlash",Ad="application/x-shockwave-flash",AC="SWFObjectExprInst",AW="onreadystatechange",AF=window,Ak=document,Aa=navigator,AA=false,Z=[Am],Af=[],AG=[],AL=[],Ai,AD,AP,AS,AK=false,At=false,Ag,AN,Ah=true,AH=function(){var A=typeof Ak.getElementById!=AQ&&typeof Ak.getElementsByTagName!=AQ&&typeof Ak.createElement!=AQ,E=Aa.userAgent.toLowerCase(),C=Aa.platform.toLowerCase(),H=C?/win/.test(C):/win/.test(E),J=C?/mac/.test(C):/mac/.test(E),G=/webkit/.test(E)?parseFloat(E.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,D=!+"\v1",F=[0,0,0],K=null;
if(typeof Aa.plugins!=AQ&&typeof Aa.plugins[AB]==Ac){K=Aa.plugins[AB].description;
if(K&&!(typeof Aa.mimeTypes!=AQ&&Aa.mimeTypes[Ad]&&!Aa.mimeTypes[Ad].enabledPlugin)){AA=true;
D=false;
K=K.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
F[0]=parseInt(K.replace(/^(.*)\..*$/,"$1"),10);
F[1]=parseInt(K.replace(/^.*\.(.*)\s.*$/,"$1"),10);
F[2]=/[a-zA-Z]/.test(K)?parseInt(K.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0
}}else{if(typeof AF.ActiveXObject!=AQ){try{var I=new ActiveXObject(X);
if(I){K=I.GetVariable("$version");
if(K){D=true;
K=K.split(" ")[1].split(",");
F=[parseInt(K[0],10),parseInt(K[1],10),parseInt(K[2],10)]
}}}catch(B){}}}return{w3:A,pv:F,wk:G,ie:D,win:H,mac:J}
}(),Aj=function(){if(!AH.w3){return 
}if((typeof Ak.readyState!=AQ&&Ak.readyState=="complete")||(typeof Ak.readyState==AQ&&(Ak.getElementsByTagName("body")[0]||Ak.body))){Ao()
}if(!AK){if(typeof Ak.addEventListener!=AQ){Ak.addEventListener("DOMContentLoaded",Ao,false)
}if(AH.ie&&AH.win){Ak.attachEvent(AW,function(){if(Ak.readyState=="complete"){Ak.detachEvent(AW,arguments.callee);
Ao()
}});
if(AF==top){(function(){if(AK){return 
}try{Ak.documentElement.doScroll("left")
}catch(A){setTimeout(arguments.callee,0);
return 
}Ao()
})()
}}if(AH.wk){(function(){if(AK){return 
}if(!/loaded|complete/.test(Ak.readyState)){setTimeout(arguments.callee,0);
return 
}Ao()
})()
}Ab(Ao)
}}();
function Ao(){if(AK){return 
}try{var B=Ak.getElementsByTagName("body")[0].appendChild(AR("span"));
B.parentNode.removeChild(B)
}catch(A){return 
}AK=true;
var D=Z.length;
for(var C=0;
C<D;
C++){Z[C]()
}}function AJ(A){if(AK){A()
}else{Z[Z.length]=A
}}function Ab(A){if(typeof AF.addEventListener!=AQ){AF.addEventListener("load",A,false)
}else{if(typeof Ak.addEventListener!=AQ){Ak.addEventListener("load",A,false)
}else{if(typeof AF.attachEvent!=AQ){Al(AF,"onload",A)
}else{if(typeof AF.onload=="function"){var B=AF.onload;
AF.onload=function(){B();
A()
}
}else{AF.onload=A
}}}}}function Am(){if(AA){Y()
}else{AM()
}}function Y(){var D=Ak.getElementsByTagName("body")[0];
var B=AR(Ac);
B.setAttribute("type",Ad);
var A=D.appendChild(B);
if(A){var C=0;
(function(){if(typeof A.GetVariable!=AQ){var E=A.GetVariable("$version");
if(E){E=E.split(" ")[1].split(",");
AH.pv=[parseInt(E[0],10),parseInt(E[1],10),parseInt(E[2],10)]
}}else{if(C<10){C++;
setTimeout(arguments.callee,10);
return 
}}D.removeChild(B);
A=null;
AM()
})()
}else{AM()
}}function AM(){var G=Af.length;
if(G>0){for(var H=0;
H<G;
H++){var C=Af[H].id;
var L=Af[H].callbackFn;
var A={success:false,id:C};
if(AH.pv[0]>0){var I=Ar(C);
if(I){if(AO(Af[H].swfVersion)&&!(AH.wk&&AH.wk<312)){AX(C,true);
if(L){A.success=true;
A.ref=AU(C);
L(A)
}}else{if(Af[H].expressInstall&&AT()){var E={};
E.data=Af[H].expressInstall;
E.width=I.getAttribute("width")||"0";
E.height=I.getAttribute("height")||"0";
if(I.getAttribute("class")){E.styleclass=I.getAttribute("class")
}if(I.getAttribute("align")){E.align=I.getAttribute("align")
}var F={};
var D=I.getElementsByTagName("param");
var K=D.length;
for(var J=0;
J<K;
J++){if(D[J].getAttribute("name").toLowerCase()!="movie"){F[D[J].getAttribute("name")]=D[J].getAttribute("value")
}}AE(E,F,C,L)
}else{Ae(I);
if(L){L(A)
}}}}}else{AX(C,true);
if(L){var B=AU(C);
if(B&&typeof B.SetVariable!=AQ){A.success=true;
A.ref=B
}L(A)
}}}}}function AU(B){var D=null;
var C=Ar(B);
if(C&&C.nodeName=="OBJECT"){if(typeof C.SetVariable!=AQ){D=C
}else{var A=C.getElementsByTagName(Ac)[0];
if(A){D=A
}}}return D
}function AT(){return !At&&AO("6.0.65")&&(AH.win||AH.mac)&&!(AH.wk&&AH.wk<312)
}function AE(F,D,H,E){At=true;
AP=E||null;
AS={success:false,id:H};
var A=Ar(H);
if(A){if(A.nodeName=="OBJECT"){Ai=An(A);
AD=null
}else{Ai=A;
AD=H
}F.id=AC;
if(typeof F.width==AQ||(!/%$/.test(F.width)&&parseInt(F.width,10)<310)){F.width="310"
}if(typeof F.height==AQ||(!/%$/.test(F.height)&&parseInt(F.height,10)<137)){F.height="137"
}Ak.title=Ak.title.slice(0,47)+" - Flash Player Installation";
var B=AH.ie&&AH.win?"ActiveX":"PlugIn",C="MMredirectURL="+AF.location.toString().replace(/&/g,"%26")+"&MMplayerType="+B+"&MMdoctitle="+Ak.title;
if(typeof D.flashvars!=AQ){D.flashvars+="&"+C
}else{D.flashvars=C
}if(AH.ie&&AH.win&&A.readyState!=4){var G=AR("div");
H+="SWFObjectNew";
G.setAttribute("id",H);
A.parentNode.insertBefore(G,A);
A.style.display="none";
(function(){if(A.readyState==4){A.parentNode.removeChild(A)
}else{setTimeout(arguments.callee,10)
}})()
}AZ(F,D,H)
}}function Ae(A){if(AH.ie&&AH.win&&A.readyState!=4){var B=AR("div");
A.parentNode.insertBefore(B,A);
B.parentNode.replaceChild(An(A),B);
A.style.display="none";
(function(){if(A.readyState==4){A.parentNode.removeChild(A)
}else{setTimeout(arguments.callee,10)
}})()
}else{A.parentNode.replaceChild(An(A),A)
}}function An(B){var D=AR("div");
if(AH.win&&AH.ie){D.innerHTML=B.innerHTML
}else{var E=B.getElementsByTagName(Ac)[0];
if(E){var A=E.childNodes;
if(A){var F=A.length;
for(var C=0;
C<F;
C++){if(!(A[C].nodeType==1&&A[C].nodeName=="PARAM")&&!(A[C].nodeType==8)){D.appendChild(A[C].cloneNode(true))
}}}}}return D
}function AZ(E,G,C){var D,A=Ar(C);
if(AH.wk&&AH.wk<312){return D
}if(A){if(typeof E.id==AQ){E.id=C
}if(AH.ie&&AH.win){var F="";
for(var I in E){if(E[I]!=Object.prototype[I]){if(I.toLowerCase()=="data"){G.movie=E[I]
}else{if(I.toLowerCase()=="styleclass"){F+=' class="'+E[I]+'"'
}else{if(I.toLowerCase()!="classid"){F+=" "+I+'="'+E[I]+'"'
}}}}}var H="";
for(var J in G){if(G[J]!=Object.prototype[J]){H+='<param name="'+J+'" value="'+G[J]+'" />'
}}A.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+F+">"+H+"</object>";
AG[AG.length]=E.id;
D=Ar(E.id)
}else{var B=AR(Ac);
B.setAttribute("type",Ad);
for(var K in E){if(E[K]!=Object.prototype[K]){if(K.toLowerCase()=="styleclass"){B.setAttribute("class",E[K])
}else{if(K.toLowerCase()!="classid"){B.setAttribute(K,E[K])
}}}}for(var L in G){if(G[L]!=Object.prototype[L]&&L.toLowerCase()!="movie"){Ap(B,L,G[L])
}}A.parentNode.replaceChild(B,A);
D=B
}}return D
}function Ap(B,D,C){var A=AR("param");
A.setAttribute("name",D);
A.setAttribute("value",C);
B.appendChild(A)
}function AV(A){var B=Ar(A);
if(B&&B.nodeName=="OBJECT"){if(AH.ie&&AH.win){B.style.display="none";
(function(){if(B.readyState==4){As(A)
}else{setTimeout(arguments.callee,10)
}})()
}else{B.parentNode.removeChild(B)
}}}function As(A){var B=Ar(A);
if(B){for(var C in B){if(typeof B[C]=="function"){B[C]=null
}}B.parentNode.removeChild(B)
}}function Ar(A){var C=null;
try{C=Ak.getElementById(A)
}catch(B){}return C
}function AR(A){return Ak.createElement(A)
}function Al(A,C,B){A.attachEvent(C,B);
AL[AL.length]=[A,C,B]
}function AO(A){var B=AH.pv,C=A.split(".");
C[0]=parseInt(C[0],10);
C[1]=parseInt(C[1],10)||0;
C[2]=parseInt(C[2],10)||0;
return(B[0]>C[0]||(B[0]==C[0]&&B[1]>C[1])||(B[0]==C[0]&&B[1]==C[1]&&B[2]>=C[2]))?true:false
}function AY(B,F,A,C){if(AH.ie&&AH.mac){return 
}var E=Ak.getElementsByTagName("head")[0];
if(!E){return 
}var G=(A&&typeof A=="string")?A:"screen";
if(C){Ag=null;
AN=null
}if(!Ag||AN!=G){var D=AR("style");
D.setAttribute("type","text/css");
D.setAttribute("media",G);
Ag=E.appendChild(D);
if(AH.ie&&AH.win&&typeof Ak.styleSheets!=AQ&&Ak.styleSheets.length>0){Ag=Ak.styleSheets[Ak.styleSheets.length-1]
}AN=G
}if(AH.ie&&AH.win){if(Ag&&typeof Ag.addRule==Ac){Ag.addRule(B,F)
}}else{if(Ag&&typeof Ak.createTextNode!=AQ){Ag.appendChild(Ak.createTextNode(B+" {"+F+"}"))
}}}function AX(A,C){if(!Ah){return 
}var B=C?"visible":"hidden";
if(AK&&Ar(A)){Ar(A).style.visibility=B
}else{AY("#"+A,"visibility:"+B)
}}function AI(B){var A=/[\\\"<>\.;]/;
var C=A.exec(B)!=null;
return C&&typeof encodeURIComponent!=AQ?encodeURIComponent(B):B
}var Aq=function(){if(AH.ie&&AH.win){window.attachEvent("onunload",function(){var A=AL.length;
for(var B=0;
B<A;
B++){AL[B][0].detachEvent(AL[B][1],AL[B][2])
}var D=AG.length;
for(var C=0;
C<D;
C++){AV(AG[C])
}for(var E in AH){AH[E]=null
}AH=null;
for(var F in swfobject){swfobject[F]=null
}swfobject=null
})
}}();
return{registerObject:function(A,E,C,B){if(AH.w3&&A&&E){var D={};
D.id=A;
D.swfVersion=E;
D.expressInstall=C;
D.callbackFn=B;
Af[Af.length]=D;
AX(A,false)
}else{if(B){B({success:false,id:A})
}}},getObjectById:function(A){if(AH.w3){return AU(A)
}},embedSWF:function(K,E,H,F,C,A,B,I,G,J){var D={success:false,id:E};
if(AH.w3&&!(AH.wk&&AH.wk<312)&&K&&E&&H&&F&&C){AX(E,false);
AJ(function(){H+="";
F+="";
var Q={};
if(G&&typeof G===Ac){for(var O in G){Q[O]=G[O]
}}Q.data=K;
Q.width=H;
Q.height=F;
var N={};
if(I&&typeof I===Ac){for(var P in I){N[P]=I[P]
}}if(B&&typeof B===Ac){for(var L in B){if(typeof N.flashvars!=AQ){N.flashvars+="&"+L+"="+B[L]
}else{N.flashvars=L+"="+B[L]
}}}if(AO(C)){var M=AZ(Q,N,E);
if(Q.id==E){AX(E,true)
}D.success=true;
D.ref=M
}else{if(A&&AT()){Q.data=A;
AE(Q,N,E,J);
return 
}else{AX(E,true)
}}if(J){J(D)
}})
}else{if(J){J(D)
}}},switchOffAutoHideShow:function(){Ah=false
},ua:AH,getFlashPlayerVersion:function(){return{major:AH.pv[0],minor:AH.pv[1],release:AH.pv[2]}
},hasFlashPlayerVersion:AO,createSWF:function(A,B,C){if(AH.w3){return AZ(A,B,C)
}else{return undefined
}},showExpressInstall:function(B,A,D,C){if(AH.w3&&AT()){AE(B,A,D,C)
}},removeSWF:function(A){if(AH.w3){AV(A)
}},createCSS:function(B,A,C,D){if(AH.w3){AY(B,A,C,D)
}},addDomLoadEvent:AJ,addLoadEvent:Ab,getQueryParamValue:function(B){var A=Ak.location.search||Ak.location.hash;
if(A){if(/\?/.test(A)){A=A.split("?")[1]
}if(B==null){return AI(A)
}var C=A.split("&");
for(var D=0;
D<C.length;
D++){if(C[D].substring(0,C[D].indexOf("="))==B){return AI(C[D].substring((C[D].indexOf("=")+1)))
}}}return""
},expressInstallCallback:function(){if(At){var A=Ar(AC);
if(A&&Ai){A.parentNode.replaceChild(Ai,A);
if(AD){AX(AD,true);
if(AH.ie&&AH.win){Ai.style.display="block"
}}if(AP){AP(AS)
}}At=false
}}}
}();
var JSON;
if(!JSON){JSON={}
}(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
}}());
var docViewer;
function getDocViewer(){if(docViewer){return docViewer
}else{docViewer=window.FlexPaperViewer_Instance.getApi()
}return docViewer
}window.FlexPaperViewer=window.$f=function(){var A=arguments[2].config;
window.FlexPaperViewer_Instance=flashembed(arguments[1],{src:arguments[0]+".swf",version:[10,0],expressInstall:"js/expressinstall.swf"},{SwfFile:escape(A.SwfFile),Scale:A.Scale,ZoomTransition:A.ZoomTransition,ZoomTime:A.ZoomTime,ZoomInterval:A.ZoomInterval,FitPageOnLoad:A.FitPageOnLoad,FitWidthOnLoad:A.FitWidthOnLoad,PrintEnabled:A.PrintEnabled,FullScreenAsMaxWindow:A.FullScreenAsMaxWindow,ProgressiveLoading:A.ProgressiveLoading,MinZoomSize:A.MinZoomSize,MaxZoomSize:A.MaxZoomSize,SearchMatchAll:A.SearchMatchAll,SearchServiceUrl:A.SearchServiceUrl,InitViewMode:A.InitViewMode,BitmapBasedRendering:A.BitmapBasedRendering,StartAtPage:A.StartAtPage,ViewModeToolsVisible:A.ViewModeToolsVisible,ZoomToolsVisible:A.ZoomToolsVisible,NavToolsVisible:A.NavToolsVisible,CursorToolsVisible:A.CursorToolsVisible,SearchToolsVisible:A.SearchToolsVisible,localeChain:A.localeChain,key:A.key})
};
function onExternalLinkClicked(A){window.location.href=A
}function onProgress(A,B){}function onDocumentLoading(){}function onCurrentPageChanged(A){}function onDocumentLoaded(A){}function onPageLoading(A){}function onPageLoaded(A){}function onDocumentLoadedError(A){}function onDocumentPrinted(){}(function(){var G=document.all,I="http://www.adobe.com/go/getflashplayer",C=typeof jQuery=="function",E=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,B={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:false,cachebusting:false};
if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};
__flash_savedUnloadHandler=function(){}
})
}function H(M,L){if(L){for(var K in L){if(L.hasOwnProperty(K)){M[K]=L[K]
}}}return M
}function A(K,N){var M=[];
for(var L in K){if(K.hasOwnProperty(L)){M[L]=N(K[L])
}}return M
}window.flashembed=function(K,M,L){if(typeof K=="string"){K=document.getElementById(K.replace("#",""))
}if(!K){return 
}K.onclick=function(){return false
};
if(typeof M=="string"){M={src:M}
}return new D(K,H(H({},B),M),L)
};
var F=H(window.flashembed,{conf:B,getVersion:function(){var M,K;
try{K=navigator.plugins["Shockwave Flash"].description.slice(16)
}catch(O){try{M=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
K=M&&M.GetVariable("$version")
}catch(N){try{M=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
K=M&&M.GetVariable("$version")
}catch(L){}}}K=E.exec(K);
return K?[K[1],K[3]]:[0,0]
},asString:function(L){if(L===null||L===undefined){return null
}var K=typeof L;
if(K=="object"&&L.push){K="array"
}switch(K){case"string":L=L.replace(new RegExp('(["\\\\])',"g"),"\\$1");
L=L.replace(/^\s?(\d+\.?\d+)%/,"$1pct");
return'"'+L+'"';
case"array":return"["+A(L,function(O){return F.asString(O)
}).join(",")+"]";
case"function":return'"function()"';
case"object":var M=[];
for(var N in L){if(L.hasOwnProperty(N)){M.push('"'+N+'":'+F.asString(L[N]))
}}return"{"+M.join(",")+"}"
}return String(L).replace(/\s/g," ").replace(/\'/g,'"')
},getHTML:function(O,L){O=H({},O);
var N='<object width="'+O.width+'" height="'+O.height+'" id="'+O.id+'" name="'+O.id+'"';
if(O.cachebusting){O.src+=((O.src.indexOf("?")!=-1?"&":"?")+Math.random())
}if(O.w3c||!G){N+=' data="'+O.src+'" type="application/x-shockwave-flash"'
}else{N+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
}N+=">";
if(O.w3c||G){N+='<param name="movie" value="'+O.src+'" />'
}O.width=O.height=O.id=O.w3c=O.src=null;
O.onFail=O.version=O.expressInstall=null;
for(var M in O){if(O[M]){N+='<param name="'+M+'" value="'+O[M]+'" />'
}}var P="";
if(L){for(var K in L){if(L[K]){var Q=L[K];
P+=K+"="+(/function|object/.test(typeof Q)?F.asString(Q):Q)+"&"
}}P=P.slice(0,-1);
N+='<param name="flashvars" value=\''+P+"' />"
}N+='<param name="wmode" value="opaque"/>';
N+="</object>";
return N
},isSupported:function(K){return J[0]>K[0]||J[0]==K[0]&&J[1]>=K[1]
}});
var J=F.getVersion();
function D(K,O,N){if(F.isSupported(O.version)){K.innerHTML=F.getHTML(O,N)
}else{if(O.expressInstall&&F.isSupported([6,65])){K.innerHTML=F.getHTML(H(O,{src:O.expressInstall}),{MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title})
}else{if(!K.innerHTML.replace(/\s/g,"")){var M=((document.location.protocol=="https:")?"https://":"http://");
K.innerHTML="<a href='http://www.adobe.com/go/getflashplayer'><img src='"+M+"www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a>";
if(K.tagName=="A"){K.onclick=function(){location.href=I
}
}}if(O.onFail){var L=O.onFail.call(this);
if(typeof L=="string"){K.innerHTML=L
}}}}if(G){window[O.id]=document.getElementById(O.id)
}H(this,{getRoot:function(){return K
},getOptions:function(){return O
},getConf:function(){return N
},getApi:function(){return K.firstChild
}})
}if(C){jQuery.tools=jQuery.tools||{version:"1.2.5"};
jQuery.tools.flashembed={conf:B};
jQuery.fn.flashembed=function(L,K){return this.each(function(){$(this).data("flashembed",flashembed(this,L,K))
})
}
}})();
$(function(){var B=0;
var N=300;
var h=500;
var Q=0;
var A=0;
var L=false;
var Y=0;
var S=0;
var H=".uheader .newmenu-container";
var W=".uheader .newmenu-container .newmenu-contents";
var U=".uheader .newmenu-container .newmenu-contents div.level.primary";
var i=".uheader .newmenu-container .newmenu-contents div.level.middle.one";
var g=".uheader .newmenu-container .newmenu-contents div.level.middle.two";
var X=".uheader .newmenu-container .newmenu-contents div.level.menu-content";
var I=true;
var C=true;
var c=0-$(U).width();
$(i).css("margin-left",c);
var F=0-$(i).width();
$(g).css("margin-left",F);
var V=0-($(U).width()+$(i).width());
$(X).css("margin-left",V);
var R="";
var P=false;
if($.browser.msie){$(U+" img.selectedImg").attr("src","/etc/designs/intel/us/en/images/new-menu-background-white-selected-IE.png");
$(i+" img.selectedImg").each(function(j){$(this).attr("src","/etc/designs/intel/us/en/images/new-menu-background-white-selected-IE.png")
});
$(g+" img.selectedImg").each(function(j){$(this).attr("src","/etc/designs/intel/us/en/images/new-menu-background-white-selected-IE.png")
})
}function E(){$(U+"  div.primaryItemContainer").each(function(j){A+=$(this).outerHeight(true)
});
if($.browser.msie){A+=1
}L=true
}function b(q,m){var l=$(q).hasClass("open");
var k=false;
var j=0;
if(!l){$(q).css({visibility:"hidden",display:"block"})
}if($(m).css("display")=="none"){k=true
}if(k){$(m).show()
}if(q==X){var n=0;
var p=0;
$(m+" div.links-column").each(function(r){if($(this).hasClass("no-column-two")){n+=$(this).outerHeight(true)
}else{if($(this).hasClass("one")){p=$(this).outerHeight(true);
if($(this).next().hasClass("two")){if($(this).next().outerHeight(true)>p){p=$(this).next().outerHeight(true)
}}}n+=p;
p=0
}});
if($(m+" h2").length>0){n+=$(m+" h2").outerHeight(true)
}if($(m+" div.highlight").length>0){var o=$(m+" div.highlight div.highlight-img").outerHeight(true);
if($(m+" div.highlight div.highlight-content").outerHeight(true)>o){o=$(m+" div.highlight div.highlight-content").outerHeight(true)
}$(m+" div.highlight").css("height",o);
n+=$(m+" div.highlight").outerHeight(true)
}$(m).css("height",n);
Y=$(m).outerHeight(true);
S=$(X+" div.new-menu-close-button").height()+5;
j=Y+S
}else{j=$(m).outerHeight(true)
}if(k){$(m).hide()
}if(!l){$(q).css({visibility:"",display:""})
}return j
}function f(m,l){var k=22;
var j=l+" h2";
if(m>(Y+S)){k=m-(Y+S);
if($("body").hasClass("ie7_0")){$(j).css("height","20px")
}}if(k<22){k=22
}$(j).css("padding-top",k);
$(j).addClass("margin-set");
$(l).css("height",Y+k);
return(Y+k+S)
}function G(l,k,m){var j=0;
if(l!=""){j=b(i,l)
}if(k!=""){if(b(g,k)>j){j=b(g,k)
}}if(m!=""){if(b(X,m)>j){j=b(X,m)
}}if(j<A){j=A-1
}if($(m+" div.highlight").length>0&&!$(m+" h2").hasClass("margin-set")){j=f(j,m)
}$(U).height(j);
$(i).height(j);
$(g).height(j);
$(X).height(j)
}function O(l){var m=$(l).position().top;
var k=$(l).height();
var j=$("img",$(l).parent()).height();
$("img",$(l).parent()).show();
if($("img",$(l).parent()).css("margin-top")!="0px"){$("img",$(l).parent()).animate({"margin-top":m+(k/2)-(j/2)},N,"linear")
}else{$("img",$(l).parent()).css("margin-top",m+(k/2)-(j/2))
}if($(l).parent().parent().hasClass("middle")&&$(l).parent().parent().hasClass("one")&&I){$("img",$(l).parent()).hide();
I=false
}if($(l).parent().parent().hasClass("middle")&&$(l).parent().parent().hasClass("two")&&C){$("img",$(l).parent()).hide();
C=false
}}function M(l){var m=$(l).position().top;
var k=$(l).height();
var j=$("img",$(l).parent()).height();
$("img",$(l).parent()).show();
$("img",$(l).parent()).css("margin-top",m+(k/2)-(j/2)-3)
}function a(k){var j="first";
if(R!=""&&!P){j=R
}var l="";
var n="";
var m=$(i+" "+k+" p."+j).attr("menucontainer");
if(m.indexOf("_content")<0){l=m;
n=$(g+" "+l+" p."+j).attr("menucontainer")
}else{n=m
}$(i+" div.middle-content").hide().removeClass("open");
$(i+" "+k).show().addClass("open");
$(i+" "+k+" p.middle-item").removeClass("selected");
$(i+" "+k+" p."+j).addClass("selected");
if(!$(i).hasClass("open")){$(i).show().addClass("open");
$(i).animate({"margin-left":"0px"},N,"linear",function(){$(i+" img.selectedImg").show();
if(l==""){T(n,true)
}else{K(l,n)
}})
}else{if(l==""){T(n,true)
}else{K(l,n)
}}O(i+" "+k+" p."+j)
}function K(k,l){var j="first";
if(R!=""&&!P){j=R
}$(X+" div.main-content.open").hide();
$(X+" "+l).show();
$(g+" div.middle-content").hide().removeClass("open");
$(g+" "+k).show().addClass("open");
$(g+" "+k+" p.middle-item").removeClass("selected");
$(g+" "+k+" p."+j).addClass("selected");
if(!$(g).hasClass("open")){$(g).show().addClass("open");
$(g).animate({"margin-left":"0px"},N,"linear",function(){$(g+" img.selectedImg").show();
T(l,false)
})
}else{T(l,false)
}O(g+" "+k+" p."+j)
}function Z(){menuLazyImageLoadHandler=function(){};
var j=$("#lazyloadmenutextarea");
j.before(j.text());
j.html("");
j.hide()
}menuLazyImageLoadHandler=Z;
function T(k,j){$(X+" div.main-content").hide().removeClass("open");
$(X+" "+k).show().addClass("open");
if(!$(X).hasClass("open")){$(X).show().addClass("open");
$(X).animate({"margin-left":"0px"},N,"linear",function(){})
}if(j&&$(g).hasClass("open")){$(g).animate({"margin-left":F},N,"linear",function(){$(g+" div.middle-content p.middle-item").removeClass("selected");
$(g+" div.middle-content").removeClass("open");
$(g).hide().removeClass("open")
})
}P=true
}function J(k){menuLazyImageLoadHandler();
var j="first";
if(R!=""&&!P){j=R
}M($(k));
$(U+" div.primaryItemContainer.selected").removeClass("selected");
$(k).addClass("selected");
var m=$("p",k).attr("menucontainer");
var l="";
var n="";
if($(i+" "+m+" p."+j).attr("menucontainer").indexOf("_content")<0){l=$(i+" "+m+" p."+j).attr("menucontainer");
n=$(g+" "+l+" p."+j).attr("menucontainer");
G(i+" "+m,g+" "+l,X+" "+n)
}else{n=$(i+" "+m+" p."+j).attr("menucontainer");
G(i+" "+m,"",X+" "+n)
}if(R!=""&&!P){$(U).animate({height:"toggle"},N,"linear",function(){$(U).addClass("open");
if(!L){E()
}a(m)
})
}else{a(m)
}}function D(){$(U+" img").css({"margin-top":"0px",display:"none"});
$(U+" div.primaryItemContainer.selected").removeClass("selected");
$(U).animate({height:"toggle"},h,"linear",function(){$(W).hide();
$(H).hide();
$(this).height(A);
$(this).removeClass("open");
$(H).removeClass("open")
})
}function e(){if($(X).hasClass("open")){$(X+" div.main-content").hide().removeClass("open");
$(X).animate({"margin-left":V,height:"toggle"},h,"linear");
$(X).delay(h/2).hide().removeClass("open")
}if($(g).hasClass("open")){$(g+" div.middle-content").hide().removeClass("open");
$(g+" div.middle-content p.middle-item").removeClass("selected");
$(g).animate({"margin-left":F,height:"toggle"},h,"linear",function(){$(g).hide().removeClass("open")
})
}if($(i).hasClass("open")){$(i+" div.middle-content").hide().removeClass("open");
$(i+" div.middle-content p.middle-item").removeClass("selected");
$(i).animate({"margin-left":c,height:"toggle"},h,"linear",function(){$(i).hide().removeClass("open")
})
}D();
$("#header ul li.newmenu a").removeClass("open");
I=true;
C=true;
P=false
}function d(){$(H).show().addClass("open");
$(W).show();
$("#header ul li.newmenu a").addClass("open");
if(typeof $(W).attr("programidentifier")!=="undefined"&&$(W).attr("programidentifier")!==false){R="PI-"+$(W).attr("programidentifier");
J($(U+" div.primaryItemContainer."+R))
}else{$(U).animate({height:"toggle"},N,"linear");
$(U).addClass("open");
if(!L){E()
}}}$("#header ul li.newmenu, #header ul li.newmenu a").click(function(j){j.preventDefault();
j.stopPropagation();
if($(H).hasClass("open")){e()
}else{d()
}});
$("body").click(function(j){if(($(H).hasClass("open")&&!$(j.target).hasClass("dont-close-menu"))&&($(j.target).closest("#background-chooser").length==0&&!$(j.target).hasClass("slider-item"))){e()
}});
$(document).delegate(X+" div.new-menu-close-button img","click",function(){e()
});
$(document).delegate(U+" div.primaryItemContainer","click",function(){if(!$(this).hasClass("selected")){J(this)
}});
$(document).delegate(i+" div.middle-content p.middle-item","click",function(){if(!$(this).hasClass("linkItem")&&!$(this).hasClass("selected")){$(i+" div.middle-content").removeClass("open");
$(i+" div.middle-content p.middle-item.selected").removeClass("selected");
$(this).addClass("selected");
$(this).parent().addClass("open");
O(this);
var j="";
var k="";
if($(this).attr("menucontainer").indexOf("_content")<0){j=$(this).attr("menucontainer");
k=$(g+" "+j+" p.first").attr("menucontainer");
G(i+" div.middle-content.open",g+" "+j,X+" "+k);
K(j,k)
}else{k=$(this).attr("menucontainer");
G(i+" div.middle-content.open","",X+" "+k);
T(k,true)
}}});
$(document).delegate(g+" div.middle-content p.middle-item","click",function(){if(!$(this).hasClass("selected")){$(g+" div.middle-content").removeClass("open");
$(g+" div.middle-content p.middle-item.selected").removeClass("selected");
$(this).addClass("selected");
$(this).parent().addClass("open");
O(this);
var j=$(this).attr("menucontainer");
G(i+" div.middle-content.open",g+" div.middle-content.open",X+" "+j);
T(j,false)
}})
});
var interval;
var newsinterval;
var homeTimer=lockInterval=controlshidden=noloop=0;
var noloopShowcase=0;
var shuffleImg=1;
var carouselStart="";
var stopTicker=false;
var scrolling=false;
var pageLoadTimerDelay=5000;
var inactivityTimerDelay=5000;
var transitionInterval=3000;
var slideTimer=100;
var accordionTimer=500;
var fadeDuration=600;
var menuTimeout=500;
var tickerScrollSpeed=7000;
var popTitle;
var popDesc;
$(function(){var C=parseInt(bV);
setNavClassFromCookie();
$("body.ie .uheader.header #header li.directory").attr("aria-haspopup","true");
$("body.ie .uheader.header div.unav li.subnavtext").each(function(J){$(this).attr("aria-haspopup","true")
});
if($(".printlogo").length==0){$("<img src='/etc/designs/intel/us/en/images/printlogo.png' class='printlogo' style='display:none'/>").prependTo("body")
}$(".navigation:nth-child(3)").addClass("nobodr");
$(".cust-table table tr td:first-child").addClass("addcolor");
$(".cust-table table tr:even").addClass("evenrows");
$(".cust-table table tr:odd").addClass("oddrows");
var A=$(window).height();
var B=$(window).width();
try{$(".pdf-link").fancybox({width:"900",height:"660",autoScale:"true"})
}catch(D){}var E="";
$('.clearOnFocus[title="password"], .clearOnFocus[title="Password"]').live("focus click",function(){if($(this).siblings().length>0){$(this).hide().siblings().removeClass("hidden").show()
}});
centerVertically($(".centerMeVertically").not(".imagetext centerMeVertically"));
centerVertically($(".imagetext .centerMeVertically"),0,305);
$('.clearOnFocus[type="password"]').blur(function(){if($(this).siblings().length>0&&$(this).val()==""){$(this).hide().siblings().removeClass("hidden").show()
}});
$("body").delegate(".clearOnFocus","focus",function(){if($(this).val()==$(this).attr("title")){E=$(this).val();
$(this).val("")
}});
$("body").delegate(".clearOnFocus","blur",function(){if($(this).val()==""){$(this).val(E)
}});
$(".share-buttons-toggle").bind("click",function(){$(".extra-share-buttons").toggle();
$(".share-buttons-toggle span.share-more").toggle();
$(".share-buttons-toggle span.share-less").toggle()
});
$(".module ul.sidebar li a").on("click",function(L){L.preventDefault();
var J=$(this).parent("li").index();
var M=$(this).parents(".module-content").find(".panel").eq(J);
$(this).addClass("selected").parent().siblings().find("a").removeClass("selected");
$(M).addClass("selected").siblings().removeClass("selected");
if($(this).parents(".related-comp").hasClass("module")){var K=$(this).parents(".related-comp").find(".relatedViewMore");
switch($(this).data("name")){case"assetdetail":K.find("span").text(K.data("viewcontent"));
K.attr("href",K.data("urlcontent"));
break;
case"topiccollection":K.find("span").text(K.data("viewtopics"));
K.attr("href",K.data("urltopics"));
break;
case"productcollection":K.find("span").text(K.data("viewproducts"));
break
}}});
$("#main-hero .home-toggle, .collection-hero .home-toggle").bind("click",function(J){J.preventDefault();
$("#main-hero .business-toggle, .collection-hero .business-toggle").removeClass("active");
$("#main-hero .home-toggle, .collection-hero .home-toggle").addClass("active");
$("#main-hero, .collection-hero ").removeClass("business").addClass("home");
if($("#main-hero .carousel-controls.home .carousel-dot.active, .collection-hero .carousel-controls.home .carousel-dot.active").hasClass("grey")){$("#main-hero, .collection-hero ").removeClass("blue").addClass("grey")
}if($("#main-hero .carousel-controls.home .carousel-dot.active, .collection-hero .carousel-controls.home .carousel-dot.active").hasClass("blue")){$("#main-hero, .collection-hero ").removeClass("grey").addClass("blue")
}});
$("#main-hero .business-toggle, .collection-hero .business-toggle").bind("click",function(J){J.preventDefault();
$("#main-hero .home-toggle, .collection-hero .home-toggle").removeClass("active");
$("#main-hero .business-toggle, .collection-hero .business-toggle").addClass("active");
$("#main-hero, .collection-hero ").removeClass("home").addClass("business");
if($("#main-hero .carousel-controls.business .carousel-dot.active, .collection-hero .carousel-controls.business .carousel-dot.active").hasClass("grey")){$("#main-hero, .collection-hero ").removeClass("blue").addClass("grey")
}if($("#main-hero .carousel-controls.business .carousel-dot.active, .collection-hero .carousel-controls.business .carousel-dot.active").hasClass("blue")){$("#main-hero, .collection-hero ").removeClass("grey").addClass("blue")
}});
$(".business-toggle").live("mouseenter",function(J){showTooltip($(this).attr("alt"),$(this))
});
$(".home-toggle").live("mouseenter",function(J){showTooltip($(this).attr("alt"),$(this))
});
$(".business-toggle, .home-toggle, .save").live("mouseleave",function(){var J=$(this);
window.setTimeout(function(){if($(".tooltip-flyout").attr("hasmouse")!="true"&&J.attr("hasmouse")!="true"){hideTooltip()
}},150)
});
if($("#lookup-hero table").not(".legend").find("tr").length>5){$("#lookup-hero table").not(".legend").find("tr").each(function(J){if(J>=5){$(this).addClass("hidden")
}});
$("#lookup-hero .show-more").removeClass("hidden")
}$(".cust-table").find("table:eq(0)").each(function(K){if($(this).find("tr").length>6){$(this).find("tr").each(function(M){if(M>=6){$(this).addClass("hidden")
}});
$(this).siblings().find("tr").addClass("hidden");
var J=$(".view-more-products").data("viewmoreproducttext");
var L=$(".view-more-products").data("viewlessproducttext");
$(this).parent().append('<a href="#" class="show-more-a">'+J+'</a><a href="#" class="show-less-a hidden">'+L+"</a>")
}});
$(".cust-table .show-more-a").click(function(J){J.preventDefault();
$(this).siblings().find("tr").removeClass("hidden");
$(this).siblings(".show-less-a").removeClass("hidden");
$(this).addClass("hidden")
});
$(".cust-table .show-less-a").click(function(J){J.preventDefault();
$(this).siblings().each(function(K){$(".cust-table").find("table:eq(0)").each(function(L){if($(this).find("tr").length>6){$(this).find("tr").each(function(M){if(M>=6){$(this).addClass("hidden")
}})
}$(this).siblings().find("tr").addClass("hidden")
})
});
$(this).siblings(".show-more-a").removeClass("hidden");
$(this).addClass("hidden")
});
$("#lookup-hero .show-more, .cust-table .show-more").live("click",function(J){J.preventDefault();
$(this).parents("#lookup-hero, .cust-table").find("table tr, .show-less").removeClass("hidden");
$(this).addClass("hidden")
});
$("#lookup-hero .show-less, .cust-table .show-less").live("click",function(J){J.preventDefault();
$(this).parents("#lookup-hero, .cust-table").find("table tr").each(function(K){if(K>=6){$(this).addClass("hidden")
}});
$(this).parents("#lookup-hero, .cust-table").find(".show-more").removeClass("hidden");
$(this).addClass("hidden")
});
if($("body").hasClass("video-detail")){$(".video-nav ul li a").bind("click",function(K){K.preventDefault();
var J="#"+$(this).attr("rel");
$(".video-panel").addClass("hidden");
$(J).removeClass("hidden")
});
$("#conversations-hero ul li a").bind("click",function(J){J.preventDefault();
var K="#"+$(this).attr("rel");
$("#conversations-hero ul li a").removeClass("selected");
$(this).addClass("selected");
$(".conversation div").addClass("hidden");
$(K).removeClass("hidden")
})
}$(".module .header").live("click",function(J){if(J.target==this){$(this).siblings(".content").slideToggle()
}});
$(".subheading.show-more").live("click",function(J){J.preventDefault();
$(this).parent().removeClass("collapsed");
updateMenuHeight()
});
$(".subheading.show-less").live("click",function(J){J.preventDefault();
$(this).parent().addClass("collapsed");
updateMenuHeight()
});
$(".directory").live("click mouseenter",function(J){if(J.type=="click"&&$(this).attr("hasmouse")=="true"){J.preventDefault();
$(this).attr("hasmouse","");
closeNavMenu(1)
}else{$(this).attr("hasmouse","true");
if(!$(this).find("a").hasClass("selected")){$(".directory a, .sites a, .library a, .my-intel .link, .my-intel-link, .save").removeClass("selected");
closeMyIntel();
closeSigninBox();
$(this).find("a").addClass("selected");
$(this).addClass("selected");
$("#menu-wrapper").show();
$("#subnav-wrapper").css({position:"fixed",top:"61px"});
$(".boxnav.navbg").slideDown(slideTimer);
$(".subnavtext:first-child").trigger("click");
updateMenuHeight()
}}});
$("#close-menu").live("click",function(J){J.preventDefault();
closeNavMenu(1)
});
$(".subnavtext").each(function(J){$(this).bind("click mouseenter",function(K){if(K.type=="click"){K.preventDefault()
}$(this).attr("hasmouse","true");
var M=$(this);
var L=1;
if(K.type=="mouseenter"){L=100
}window.setTimeout(function(){if(!M.hasClass("active")&&M.attr("hasmouse")=="true"){$(".subnavtext").removeClass("active");
$(".submenu").hide();
$(".submenu").eq(J).show();
$("#submenu-wrapper").slideDown(slideTimer,function(){if(M.attr("hasmouse")=="true"){$(".subnavtext").removeClass("active");
M.addClass("active");
updateMenuHeight()
}});
closeNavMenu()
}},L)
})
});
$(".subnavtext").live("mouseleave",function(J){$(this).attr("hasmouse","")
});
$(".boxnav, .directory").live("mouseenter",function(J){$(this).attr("hasmouse","true")
});
$(".boxnav, .directory").live("mouseleave",function(J){$(this).attr("hasmouse","");
closeNavMenu()
});
$("#menu-close-btn").live("click",function(J){J.preventDefault();
closeNavMenu(1,true)
});
$(".language").live("click",function(J){J.preventDefault();
$("#language-chooser").slideToggle(fadeDuration,function(){$("#language-chooser").toggleClass("hidden");
$(".language").toggleClass("selected")
})
});
$("#language-chooser .close-button").live("click",function(J){J.preventDefault();
closeLanguageMenu(1,true)
});
$(".tools").live("click",function(J){J.preventDefault();
$("#tools-chooser").slideToggle(fadeDuration,function(){$("#tools-chooser").toggleClass("hidden");
$(".tools").toggleClass("selected")
})
});
$("#tools-chooser .close-button").live("click",function(J){J.preventDefault();
closeToolsMenu(1,true)
});
$(".my-intel-link").bind("mouseenter",function(K){$this=$(this);
$this.attr("hasmouse","true");
var J=($this.offset().left+($this.outerWidth()/2*0))+20;
var L=($this.offset().top+$this.outerHeight())+20;
window.setTimeout(function(){if($this.attr("hasmouse")=="true"&&$(".tooltip-flyout").attr("hasmouse")!="true"){showTooltip($this.attr("alt"),$this)
}},100)
});
$(".save, .my-intel-link").bind("mouseleave",function(J){if(!($(J.target).hasClass("my-intel-link")||$(J.target).hasClass("save"))||true){$(this).attr("hasmouse","")
}window.setTimeout(function(){if($(".tooltip-flyout").attr("hasmouse")!="true"&&$(".my-intel-link, .save").attr("hasmouse")!="true"){hideTooltip()
}},150)
});
$(".save, .my-intel-link").bind("click",function(J){J.preventDefault();
if($(".my-intel-link, .save").hasClass("selected")){closeMyIntel(1,true)
}else{closeSigninBox();
$(".my-intel .link, .currentpage").removeClass("selected");
$(".boxnav.myintelbg").slideDown(function(){$(".my-intel-link, .save").addClass("selected")
})
}});
$(".create-btn").bind("click",function(J){J.preventDefault();
$(".register-myintel").addClass("boxnav myintelbg").removeClass("hidden").show();
$(".savedcontent").addClass("hidden").removeClass("boxnav myintelbg").hide()
});
$(".register-myintel .cancel").bind("click",function(J){J.preventDefault();
$(".savedcontent").addClass("boxnav myintelbg").removeClass("hidden").show();
$(".register-myintel").addClass("hidden").removeClass("boxnav myintelbg").hide()
});
$(".savedcontent .sign-in").live("click",function(J){J.preventDefault();
$(".savedcontent .navigationmyintelfirst ul.login").addClass("hidden").hide();
$(".savedcontent .navigationmyintelfirst ul.profile").removeClass("hidden").show()
});
$(".savedcontent .log-out").live("click",function(J){$(".savedcontent .navigationmyintelfirst ul.profile").addClass("hidden").hide();
$(".savedcontent .navigationmyintelfirst ul.login").removeClass("hidden").show()
});
$(".myintelbg .close-button, .myintel-close-btn").live("click",function(J){J.preventDefault();
closeMyIntel()
});
$(".searchmyintel li a").live("click",function(K){K.preventDefault();
$(".searchmyintel li a").removeClass("selected");
$(this).addClass("selected");
var J=$(".searchmyintel li a").index(this);
$(".middlemyintel > div").removeClass("selected").addClass("hidden");
$(".middlemyintel > div").eq(J).addClass("selected").removeClass("hidden")
});
$("#footnotes .close-button").live("click",function(J){J.preventDefault();
$(this).removeClass("close-button").addClass("open-button").parents(".module").addClass("closed").find(".module-content").slideUp();
$(this).attr("title",$(this).attr("data-id-open"))
});
$("#footnotes .open-button").live("click",function(J){J.preventDefault();
$(this).removeClass("open-button").addClass("close-button").parents(".module").removeClass("closed").find(".module-content").slideDown();
$(this).attr("title",$(this).attr("data-id-close"))
});
$(document).bind("click",function(J){if($(J.target).parents(".boxnav.navbg, .directory, .sites, .library, .background-slider-items").length==0){if(!$(J.target).hasClass("slider-item")||$(J.target).attr("hasmouse")!="true"){closeNavMenu(1)
}}if($(J.target).parents(".menu-wrappermyintel, .savedcontent, .register-myintel, .my-intel-link, .save, .tooltip-flyout, .background-slider-items").length==0&&!$(J.target).hasClass("savedcontent")&&!$(J.target).hasClass("save")&&!$(J.target).hasClass("my-intel-link")&&!$(J.target).hasClass("register-myintel")){if(!$(J.target).hasClass("slider-item")||$(J.target).attr("hasmouse")=="true"){closeMyIntel(1)
}}if($(J.target).parents("#language-chooser, .language, .background-slider-items").length==0&&!$(J.target).hasClass("language")&&!$(J.target).hasClass("slider-item")){closeLanguageMenu(1)
}if($(J.target).parents("#tools-chooser, .tools, .background-slider-items").length==0&&!$(J.target).hasClass("tools")&&!$(J.target).hasClass("slider-item")){closeToolsMenu(1)
}if($(J.target).parents("#hpsform, .predictive-search, .background-slider-items, #rotatingshowcase a").length==0&&!$(J.target).hasClass("predictive-search")&&!$(J.target).hasClass("slider-item")&&!$(J.target).hasClass("prev")&&!$(J.target).hasClass("next")){$("#hpsform .predictive-search").addClass("hideme");
$("#searchBox").attr("value",$("#searchBox").attr("title"))
}if($(J.target).parents(".signin-nav-box, .sign-in-link").length==0&&!$(J.target).hasClass("signin-nav-box")){closeSigninBox(1)
}});
$(".searchmyintel li.savedCont a").mouseenter(function(){$(".recetlyViewedframe").hide();
$(".savedframe").show()
},function(){$(".recetlyViewedframe").hide()
});
$(".searchmyintel li.recentViewed a").mouseenter(function(){$(".savedframe").hide();
$(".recetlyViewedframe").show()
},function(){$(".recetlyViewedframe").hide();
$(".savedframe").show()
});
$(".see-all.more").bind("click",function(J){J.preventDefault();
$(this).siblings().show();
$(this).hide()
});
$(".see-all.less").bind("click",function(J){J.preventDefault();
$(this).siblings(".filter").slice(5).hide();
$(this).siblings(".more").show();
$(this).hide()
});
$(".see-all a").live("click",function(J){$(this).parent().trigger("click")
});
$(".close-btn, .filter-checkbox").live("click",function(J){J.preventDefault();
closePreviews()
});
$(".preview-btn").live("click",function(K){K.preventDefault();
closePreviews();
$(this).addClass("hidden");
$(this).siblings(".open-btn").addClass("hidden");
$(this).parents(".list-item-content-wrapper").find(".list-item-desc").addClass("hidden");
$(this).parents(".list-item-content-wrapper").find(".list-item-descLong").removeClass("hidden");
$(this).siblings(".view-btn, .close-btn").removeClass("hidden");
$(this).parents(".list-item, .list-item-wrapper").addClass("open");
var J=$(this).parents(".list-item-content-wrapper").outerHeight();
if($(this).parents(".list-item").find(".list-item-img-wrapper").length>0){if($(this).parents(".list-item").find(".list-item-img-wrapper").outerHeight()>J){J=$(this).parents(".list-item").find(".list-item-img-wrapper").outerHeight()
}}$(this).parents(".list-item-content-wrapper, .list-item-img-wrapper").css("height",J);
$(this).parents(".list-item-wrapper").css("height",J+60);
matchHeights()
});
$(".filter-list-title").live("click",function(J){J.preventDefault();
if(!$(this).hasClass("no-toggle")&&!$(this).parents(".filter-list-wrapper").hasClass("no-toggle")){if($(this).parents("#filter-list-list").hasClass("locked")){$(this).toggleClass("closed");
$(this).parent(".filter-list-wrapper").siblings(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list-title").addClass("closed");
$(this).parents("#filter-list-list").find(".filter-list-title.closed").siblings(".filter-list,.toggle-options").slideUp(slideTimer,function(){matchHeights()
});
if($(this).hasClass("closed")){if($(this).parent(".filter-list-wrapper").next(".filter-list-wrapper").length>0){$(this).parent(".filter-list-wrapper").next(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list-title").removeClass("closed");
$(this).parent(".filter-list-wrapper").next(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list, .toggle-options").not(".hidden").slideDown(slideTimer,function(){matchHeights()
})
}else{$(this).parent(".filter-list-wrapper").prev(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list-title").removeClass("closed");
$(this).parent(".filter-list-wrapper").prev(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list, .toggle-options").not(".hidden").slideDown(slideTimer,function(){matchHeights()
})
}}else{$(this).removeClass("closed");
$(this).siblings(".filter-list, .toggle-options").not(".hidden").slideDown(accordionTimer,function(){matchHeights()
})
}}else{$(this).siblings("ul").children("li").show();
$(this).siblings("ul").children("li.see-all.more").hide();
$(".filter-list-title").parent(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list-title").not(this).addClass("closed");
$(".filter-list-title").parents(".filter-list-wrapper").find(".filter-list-title.closed").siblings(".filter-list,.toggle-options").slideUp(slideTimer,function(){matchHeights()
});
if($(this).hasClass("closed")){$(this).removeClass("closed");
$(this).siblings(".filter-list, .toggle-options").not(".hidden").slideDown("fast",function(){matchHeights();
$(".see-all.more").siblings().show();
$(".see-all.more").hide()
})
}else{$(this).addClass("closed");
$(this).siblings(".filter-list, .toggle-options").slideUp("fast",function(){matchHeights()
})
}}}});
$(".filter-list-toggle .toggle-option").live("click",function(K){K.preventDefault();
if(!$(this).hasClass("active")){var J=$(this).index();
$(this).addClass("active");
$(this).siblings(".toggle-option").removeClass("active");
$(this).parents(".filter-list-wrapper").find(".filter-list.option").addClass("hidden").hide().removeClass("active");
$(this).parents(".filter-list-wrapper").find(".filter-list.option").eq(J).addClass("active").removeClass("hidden").show()
}});
if($("body").hasClass("video-detail")){$(".video-nav ol li a").bind("click",function(K){K.preventDefault();
var J="#"+$(this).attr("rel");
$(".video-panel").addClass("hidden");
$(J).removeClass("hidden")
});
$(".conversation #forums, .conversation #blogs").addClass("hidden");
$("#conversations-hero ul li a").bind("click",function(J){J.preventDefault();
var K="#"+$(this).attr("rel");
$("#conversations-hero ul li").removeClass("selected");
$(".conversation #forums, .conversation #blogs, .conversation #tweets").removeClass("selected").addClass("hidden");
$(this).parent().removeClass("hidden").addClass("selected");
$(K).removeClass("hidden")
})
}$("#gallery-hero ul li a").bind("click",function(M){M.preventDefault();
$(this).parent().addClass("selected-photo").siblings().removeClass("selected-photo");
$("#gallery-hero .image-viewer").show();
$(".thumbs-viewer").hide();
$(".view-gallery").show();
var J=$(this).parents(".module").find(".carousel-controls");
J.attr("itemContainer",".image-viewer");
J.find(".carousel-dot").remove();
for(var L=0;
L<$(".image-viewer-wrapper .carousel-item").length;
L++){J.find(".carousel-right").before('<img class="carousel-dot" src="/etc/designs/intel/us/en/images/blank.png" />')
}var K=$("#gallery-hero ul li a").index(this);
if(K==0){J.find(".carousel-left").css("visibility","hidden")
}else{J.find(".carousel-left").css("visibility","")
}if(K==($("#gallery-hero ul li a").length-1)){J.find(".carousel-right").css("visibility","hidden")
}else{J.find(".carousel-right").css("visibility","")
}$(".image-viewer-wrapper .carousel-item").removeClass("active").css({"z-index":"",left:""});
J.find(".carousel-dot").eq(K).addClass("active");
$(".image-viewer-wrapper .carousel-item").eq(K).addClass("active").css({"z-index":"1",left:0})
});
$("#gallery-hero a.view-gallery").bind("click",function(L){L.preventDefault();
$("#gallery-hero .image-viewer").hide();
$(".thumbs-viewer").show();
$(".view-gallery").hide();
var J=$(this).parents(".module").find(".carousel-controls");
J.attr("itemcontainer",".thumbs-viewer");
J.find(".carousel-dot").remove();
for(var K=0;
K<$(".thumbs-viewer .carousel-item").length;
K++){J.find(".carousel-right").before('<img class="carousel-dot" src="/etc/designs/intel/us/en/images/blank.png" />')
}J.find(".carousel-dot").first().addClass("active")
});
$(".carousel-dot").live("click",function(M){M.preventDefault();
var J=$(this).index()-$(this).siblings(".carousel-left").length;
if(!$(this).hasClass("active")){var L=$(this).parents(".gallery-controls").find(".carousel-controls").attr("itemContainer");
if($(L).length>1){var O=$(this).parent().parent();
while(O.find(L).length<1){O=O.parent()
}L=O.find(L)
}var N=$(L).find(".carousel-item").eq(J);
var K=$(L).find(".carousel-item.active");
var Q=1;
if(($(this).parent().find(".carousel-dot.active").position().left-$(this).position().left)<0){Q=-1
}K.css({left:0});
$(this).parent().find(".carousel-dot").removeClass("active");
$(this).addClass("active");
var P=$(this);
if($(this).prev(".carousel-dot").length==0){$(this).parent().find(".carousel-left").css("visibility","hidden")
}else{$(this).parent().find(".carousel-left").css("visibility","")
}if($(this).next(".carousel-dot").length==0){$(this).parent().find(".carousel-right").css("visibility","hidden")
}else{$(this).parent().find(".carousel-right").css("visibility","")
}$(L).find(".carousel-item").not(".active").css({"z-index":"1",left:(-Q*($(L).innerWidth()+80))});
$(L).find(".carousel-item").css("z-index","0").removeClass("active");
K.css("z-index","1").animate({left:(Q*($(L).innerWidth()+80))},500);
N.css("z-index","1").animate({left:0},500,function(){$(L).find(".carousel-item").not(N).removeClass("active").css({left:$(L).innerWidth()+80});
N.addClass("active");
K.css("z-index","0");
if(P.hasClass("grey")){$(L).parents(".module").removeClass("blue").addClass("grey")
}else{if(P.hasClass("blue")){$(L).parents(".module").removeClass("grey").addClass("blue")
}}})
}});
$(".carousel-right").live("click",function(K){K.preventDefault();
var J=$(this).parent().attr("itemContainer");
if($(J).length>1){var L=$(this).parent().parent();
while(L.find(J).length<1){L=L.parent()
}J=L.find(J)
}nextCarousel($(J),$(this).parent())
});
$(".carousel-left").live("click",function(K){K.preventDefault();
var J=$(this).parent().attr("itemContainer");
if($(J).length>1){var L=$(this).parent().parent();
while(L.find(J).length<1){L=L.parent()
}J=L.find(J)
}prevCarousel($(J),$(this).parent())
});
$("#footer .latest-news .toggle").live("click",function(J){J.preventDefault();
toggleFooterNews()
});
scrolling=false;
if(newsinterval!=undefined){newsinterval=window.clearInterval(newsinterval)
}newsinterval=window.setInterval(scrollTicker,tickerScrollSpeed);
$("ul.subnav li").bind("click mouseenter",function(K){var N=$(this).outerWidth();
var J=$(this).position();
var L=Math.round(J.left);
var O=L+Math.round(N/2)-1000;
var M=O+"px bottom";
if(!$(this).children(".sign-in-link").length>0||$(this).children(".lock-icon").length>0){$("ul.subnav").css("background-position",M)
}});
$("ul.subnav li").bind("mouseleave",function(K){if($("ul.subnav li.selected").length>0){var N=$("ul.subnav li.selected").outerWidth();
var J=$("ul.subnav li.selected").position();
var L=Math.round(J.left);
var O=L+Math.round(N/2)-1000;
var M=O+"px bottom";
$("ul.subnav").css("background-position",M)
}});
$(".my-intel .link, .sign-in-link .link").live("click mouseenter",function(K){var N=$(this).width();
var J=$(this).offset();
var L=Math.round(J.left);
var O=L+Math.round(N/2)-4000;
if($(this).is(".my-intel-link")||$(this).is(".save")){O-=$("#my-intel-count").width()
}var M=O+"px top";
if(!$(this).parents(".sign-in-link").length>0||$(this).children(".lock-icon").length>0){$(".home.wrapper #header").css("background-position",M)
}});
$(".my-intel .link, .sign-in-link .link").live("mouseleave",function(K){if($(".my-intel .link.selected").length>0){var N=$(".my-intel .link.selected").width();
var J=$(".my-intel .link.selected").offset();
var L=Math.round(J.left);
var O=L+Math.round(N/2)-4000;
if($(this).is(".my-intel-link")||$(this).is(".save")){O-=$("#my-intel-count").width()
}var M=O+"px top";
$(".home.wrapper #header").css("background-position",M)
}else{$(".home.wrapper #header").css("background-position","")
}});
$(".sign-in-link .link").live("click mouseenter",function(K){var N=$(this).width();
var J=$(this).offset();
var L=Math.round(J.left);
var O=L+Math.round(N/2)-3990;
if($(this).is(".sign-in-link")||$(this).is(".save")){O-=$("#sign-in-link").width()
}var M=O+"px top";
if($(this).children(".down-arrow").length<=0){$(".wrapper #header").css("background-position",M)
}});
$(".sign-in-link .link").live("mouseleave",function(K){if($(".my-intel .link.selected").length>0){var N=$(".my-intel .link.selected").width();
var J=$(".my-intel .link.selected").offset();
var L=Math.round(J.left);
var O=L+Math.round(N/2)-4000;
if($(this).is(".sign-in-link")||$(this).is(".save")){O-=$("#sign-in-link").width()
}var M=O+"px top";
$(".wrapper #header").css("background-position",M)
}else{$(".wrapper #header").css("background-position","")
}});
$(".prochatbox .toggle").live("click",function(J){J.preventDefault();
toggleChat()
});
$(".shopblade .img-wrap").bind("click",function(J){window.location=$(this).parent().attr("href")
});
$(".marquee-module a.prev").bind("click",function(K){K.preventDefault();
var J=$(this).parent().find("ul li.selected");
if($(this).parent().find("ul li.selected").length<1){J=$(this).parent().find("ul li:visible")
}if($(this).parent().find("ul li:visible")<1){J=$(this).parent().find("ul li:first-child")
}if($(J).is(":first-child")){$(J).removeClass("selected").siblings("li").last().addClass("selected")
}else{$(J).removeClass("selected").prev().addClass("selected")
}});
if(!noloopShowcase){interval=window.clearTimeout(interval);
interval=window.setTimeout("rotatingshowcase()",transitionInterval)
}$(".marquee-module a.next").bind("click",function(L){L.preventDefault();
var J=$(this).parent().find("ul li.selected");
if($(this).parent().find("ul li.selected").length<1){J=$(this).parent().find("ul li:visible")
}if($(this).parent().find("ul li:visible")<1){J=$(this).parent().find("ul li:first-child")
}$(J).removeClass("selected");
var K=true;
while(K){if($(J).is(":last-child")){J=$(J).siblings("li").first();
K=false;
break
}J=$(J).next();
if($(J).is("li")){K=false;
break
}}$(J).addClass("selected");
if(!noloopShowcase){if($(this).parents("#rotatingshowcase").find("ul li").length>1){interval=window.clearTimeout(interval);
interval=window.setTimeout("rotatingshowcase()",transitionInterval)
}}});
if($(".filter-lists-container").length>0){matchHeights()
}if($("#background-player").length>0){if($("#background-player img").length>0){var G=new Image();
$(G).load(function(){centerInParent($("#background-wrapper .background-item"))
});
G.src=$("#background-player img").attr("src")
}}$("#content").not(".home #content").css("min-height",($(".boxnav.navbg").outerHeight()+60)+"px");
$(window).resize(function(){if($(".filter-lists-container").length>0){matchHeights()
}updateMenuHeight()
});
$("#specs-hero ul.specs-navigation li.selected ul").slideDown(200);
$("#specs-hero ul.specs-navigation li a.filter").bind("click",function(J){J.preventDefault();
if($(this).parent().hasClass("selected")){}else{$("#specs-hero ul.specs-navigation li").removeClass("selected");
$(this).parent().addClass("selected");
$("#specs-hero ul.specs-navigation li ul").slideUp(200);
$(this).next("ul").slideDown(200)
}});
$("#comp-hero ul.laptops-desktops li a").bind("click",function(J){J.preventDefault();
$("#comp-hero ul.laptops-desktops li a").removeClass("selected");
$(this).addClass("selected")
});
$("#comp-hero .content-detail:first").slideDown(200);
$("#comp-hero .family-head").hover(function(){$(this).addClass("hover")
},function(){$(this).removeClass("hover")
});
$("#comp-hero .family-head").bind("click",function(J){J.preventDefault();
if($(this).hasClass("selected")){$(this).removeClass("selected").next(".content-detail").slideUp(200)
}else{$(this).addClass("selected").next(".content-detail").slideDown(200)
}});
$("#comp-hero a.compare-button").bind("click",function(L){L.preventDefault();
var J=$("#comp-hero a.compare-selected").length;
if($(this).hasClass("compare-select")){$(this).removeClass("compare-select").addClass("compare-selected").text("Selected")
}else{if($(this).hasClass("compare-selected")){$(this).removeClass("compare-selected").addClass("compare-select").text("Select")
}}var K=$("#comp-hero a.compare-selected").length;
$("#compare-items h3 span").text(K);
if(K==5&&J==4){$("#comp-hero a.compare-select").removeClass("compare-select").addClass("compare-full").text("Queue Full")
}else{if(K==4&&J==5){$("#comp-hero a.compare-full").removeClass("compare-full").addClass("compare-select").text("Select")
}}});
$("#comp-hero #compare-items a.remove-all").bind("click",function(J){J.preventDefault();
$("#comp-hero #compare-items ul li").html("");
$("#comp-hero a.compare-selected, #comp-hero a.compare-full").removeClass("compare-selected").removeClass("compare-full").addClass("compare-select").text("Select")
});
$("#comp-hero #compare-items li a.remove").bind("click",function(J){J.preventDefault();
$(this).parent().html("")
});
$("#comp-hero table.family th span").hover(function(K){var J="#"+$(this).attr("class");
$(J).css({position:"absolute",top:K.pageY+25,left:K.pageX}).show()
},function(){var J="#"+$(this).attr("class");
$(J).hide()
});
$("#lookup-hero .family-head").hover(function(){$(this).addClass("hover")
},function(){$(this).removeClass("hover")
});
$("#lookup-hero .family-head").bind("click",function(J){J.preventDefault();
if($(this).hasClass("selected")){$(this).removeClass("selected").next(".content-detail").slideUp(200)
}else{$(this).addClass("selected").next(".content-detail").slideDown(200)
}});
$(".assetcontentpar table.striped tr:even").addClass("even");
$(".assetcontentpar table.striped tr:odd").addClass("odd");
$("ul.share-page li.toggle a").bind("click",function(J){J.preventDefault();
$("ul.share-page li.extra").toggleClass("visible");
$("ul.share-page li.toggle").toggleClass("less")
});
$("ul.share-page-top li.toggle a").bind("click",function(J){J.preventDefault();
$("ul.share-page-top li.extra").toggleClass("visible");
$("ul.share-page-top li.toggle").toggleClass("less");
$("ul.share-page-top").toggleClass("less-width")
});
$("ul.share-page-top li:not(.function) a, ul.share-page li:not(.toggle) a").bind("click",function(J){$("#share-popup").toggleClass("visible")
});
$("#share-popup a.close").bind("click",function(J){J.preventDefault();
$("#share-popup").toggleClass("visible")
});
$("#content .module").first().addClass("print-me");
$("#footnotes").addClass("print-me");
if((navigator.userAgent.indexOf("iPad")!=-1)){$(".ipad").removeClass("hidden").show();
$(".nonipad").addClass("hidden").hide()
}if(bN=="ie"&&C<"9.0"){$("#menu-wrapper").append("<div class='ie_shadow'></div>")
}$('a[href="#"]').on("click",function(J){J.preventDefault()
});
var H="";
$(".clrSgn").live("focus",function(){if($(this).val()==$(this).attr("title")){H=$(this).val();
$(this).val("");
$(this).css({color:"#000","border-color":"#0071C5"})
}});
$(".clrSgn").live("blur",function(){if($(this).val()==""){$(this).val(H);
$(this).css({color:"#666","border-color":"#8E8F8F"})
}});
$(".typTxt").show();
$(".typPass").hide();
$(".typTxt").live("focus click",function(){$(this).hide();
$(".typPass").show();
$(".typPass").css({color:"#000","border-color":"#0071C5"});
setTimeout(function(){$(".typPass").focus()
},10)
});
$(".typPass").live("blur",function(){if($(".typPass").val()==""){$(".typTxt").show();
$(".typPass").hide();
$(".typTxt").css({color:"#666","border-color":"#8E8F8F"})
}});
$(".pdf-view").bind("mouseenter",function(N){$this=$(this);
$this.attr("hasmouse","true");
var O=$this.attr("data-preview");
var L=$this.attr("data-download");
var M=$this.attr("data-previewtext");
var R=$this.attr("data-downloadtext");
var P=$this.attr("data-titletext");
var K=" &nbsp; | &nbsp;"+$this.attr("data-size");
var J='<a data-wap="{&quot;linktype&quot;:&quot;previewpdf&quot;}" href="'+O+'">'+M+'</a> &nbsp; | &nbsp; <a data-wap="{&quot;linktype&quot;:&quot;downloadpdf&quot;}" href="'+L+'" title="'+P+'">'+R+"</a>"+K;
var S=($this.offset().left)-70;
var Q=$this.offset().top;
window.setTimeout(function(){if($this.attr("hasmouse")=="true"&&$(".tooltip-flyout").attr("hasmouse")!="true"){showTooltip("",S,Q);
$(".tooltip-flyout .content p").html(J);
if(bN=="ie"&&C<"8.0"){$(".tooltip-flyout").width($(".tooltip-flyout .content p").width()+11)
}$(".tooltip-flyout").addClass("pdf-tip");
$(".tooltip-flyout").addClass("wapwrapper");
$(".tooltip-flyout").attr("data-component","tooltip-flyout");
$(".tooltip-flyout").attr("data-component-id","1")
}},100)
});
$(".pdf-view").bind("mouseleave",function(J){if(!$(J.target).hasClass("pdf-view")||true){$(this).attr("hasmouse","")
}window.setTimeout(function(){if($(".tooltip-flyout").attr("hasmouse")!="true"&&$(".pdf-view").attr("hasmouse")!="true"){hideTooltip();
$(".tooltip-flyout .content p").html("");
$(".tooltip-flyout").width("");
$(".tooltip-flyout").removeClass("pdf-tip");
$(".tooltip-flyout").removeClass("wapwrapper");
$(".tooltip-flyout").removeAttr("data-component");
$(".tooltip-flyout").removeAttr("data-component-id")
}},250)
});
var F;
$("#searchBox").focusin(function(J){$("#predictive-search ul li").find("a").removeClass("result_hover");
if(F!==null&&($("#searchBox").val()!=="")){$("#searchBox").val(F)
}else{$("#searchBox").val("")
}});
$("#searchBox").keydown(function(J){F=$("#searchBox").val();
if(J.keyCode==40){J.preventDefault();
if($("#bestResults").children().length>0){$("#bestResults a").focus().addClass("result_hover")
}else{$("#otherResults li:first-child a").focus().addClass("result_hover")
}}else{if(J.keyCode==38){$("#otherResults li:last-child").children("a").focus().addClass("result_hover")
}}});
$(document).delegate("#bestResults a.result_hover","keydown",function(J){if(J.keyCode==40){J.preventDefault();
$(this).removeClass("result_hover");
$("#otherResults li:first-child a").focus().addClass("result_hover")
}else{if(J.keyCode==38){$(this).removeClass("result_hover");
$("#searchBox").focus()
}}});
$(document).delegate("#otherResults li a.result_hover","keydown",function(J){if(J.keyCode==40){J.preventDefault();
$(this).removeClass("result_hover");
$(this).parent("li").next("li").children("a").focus().addClass("result_hover");
if($(this).parent("li").next("li").html()==null){$("#searchBox").focus()
}}else{if(J.keyCode==38){$(this).parent("li").prev("li").children("a").focus().addClass("result_hover");
$(this).removeClass("result_hover");
if($(this).parent("li").prev("li").html()==null){if($("#bestResults").children().length>0){$("#bestResults a").focus().addClass("result_hover")
}else{$("#searchBox").focus()
}}}}});
$(document).delegate("#bestResults","mouseover",function(J){F=$("#searchBox").val();
$("#predictive-search ul li").find("a").removeClass("result_hover");
$(this).children("a").focus().addClass("result_hover");
if(F!==null){$("#searchBox").val(F)
}});
$(document).delegate("#otherResults li","mouseover",function(J){F=$("#searchBox").val();
$("#predictive-search ul li").find("a").removeClass("result_hover");
$(this).children("a").focus().addClass("result_hover");
if(F!==null){$("#searchBox").val(F)
}});
$(".collapsable .module-header").bind("click",function(J){J.preventDefault();
$(this).siblings(".module-content").slideToggle();
$(this).children("a").toggleClass("close-button");
$(this).parent(".collapsable").toggleClass("closed");
if($(this).parent(".collapsable").hasClass("closed")){$(this).siblings(".module-content").children(".optionalComponent").hide();
$(this).siblings(".module-content").children(".show-config-details").removeClass("toggle-view")
}});
$(".show-config-details").bind("click",function(J){J.preventDefault();
$(this).siblings(".optionalComponent").slideToggle();
$(this).toggleClass("roll-up")
});
if(!shuffleImg){$(".rotatingShowcaseFeature li").shuffle()
}if(bN=="ff"&&C>=3||bN=="ie"&&C>=7||bN=="safari"&&C>=3||bN=="chrome"&&C>=5||bN=="yandex"&&C>=1){$("body").addClass("new_browser")
}else{$("body").addClass("old_browser")
}var I=[];
$("ul.flow li canvas.content").each(function(){imgWidth=$(this).attr("src");
I.push(imgWidth)
});
$("ul.flow li img.content").each(function(){imgWidth=$(this).attr("src");
I.push(imgWidth)
});
$(".ContentFlow a.item, .ContentFlow .item a, .ContentFlow .item canvas").live("click",function(J){if(!$(this).hasClass("active")){J.preventDefault()
}});
if($(".iframe iframe").length){$(".iframe iframe").load(function(){var J=$(this).contents().height();
$(this).height(J)
})
}$(".tool-images").delegate(".toolicontooltip","mouseenter",function(J){showTooltip($(this).data("title"),$(this))
});
$(".tool-images").delegate(".toolicontooltip","mouseleave",function(J){hideTooltip()
});
$(".module-type-4 .panel ul").find("li:even").addClass("clearfloat")
});
function replaceVal(){$("#predictive-search ul li a").each(function(A){$(this).focusin(function(){var B=$(this).text();
$("#searchBox").val(B)
})
})
}function rotatingshowcase(){$("#rotatingshowcase a.next").click()
}function closeSigninBox(F,C){if($(".sign-in-link, .tooltip-flyout, .signin-nav-box").attr("hasmouse")!="true"||C){$(".signin-nav-box").slideUp("fast",function(){$(".sign-in-link .link a").removeClass("selected");
$(".currentpage").addClass("selected")
});
if($(".sign-in-link .link.selected").length>0){var E=$(".sign-in-link .link.selected").width();
var A=$(".sign-in-link .link.selected").offset();
var B=Math.round(A.left);
var G=B+Math.round(E/2)-4000;
if($(this).is(".sign-in-link")||$(this).is(".save")){G-=$("#sign-in-link").width()
}var D=G+"px top";
$(".home.wrapper #header").css("background-position",D)
}else{$(".home.wrapper #header").css("background-position","")
}}}function matchHeights(){}function nextBGCarousel(){if($("#background-slider-items").position().left>($(".slider-item").length-4)*-57&&!$("#next-arrow").hasClass("disabled")){var A=57*4;
$(".slider-item").show();
$("#background-slider-items").animate({left:"-="+A},"fast",function(){$(".slider-arrow").addClass("disabled");
var C=$("#background-slider-items").position().left;
var B=$("#background-slider-wrapper").innerWidth();
if(($(".slider-item.selected").position().left+C)<0){$(".slider-item.selected").css({width:55,height:36})
}else{$(".slider-item.selected").css({width:"",height:""})
}$(".slider-item").each(function(D){if(($(this).position().left+$(this).outerWidth()+C)>B){$(this).hide()
}});
if($("#background-slider-items").position().left<0){$("#prev-arrow").removeClass("disabled")
}else{$("#prev-arrow").addClass("disabled")
}if($("#background-slider-items").position().left<=($(".slider-item").length-4)*-57){$("#next-arrow").addClass("disabled")
}else{$("#next-arrow").removeClass("disabled")
}})
}}function prevBGCarousel(){if($("#background-slider-items").position().left<0&&!$("#prev-arrow").hasClass("disabled")){$(".slider-arrow").addClass("disabled");
var A=57*4;
$(".slider-item").show();
$("#background-slider-items").animate({left:"+="+A},"fast",function(){var C=$("#background-slider-items").position().left;
var B=$("#background-slider-wrapper").innerWidth();
if(($(".slider-item.selected").position().left+C)<0){$(".slider-item.selected").css({width:55,height:36})
}else{$(".slider-item.selected").css({width:"",height:""})
}$(".slider-item").each(function(D){if(($(this).position().left+$(this).outerWidth()+C)>B){$(this).hide()
}});
if($("#background-slider-items").position().left>=0){$("#prev-arrow").addClass("disabled")
}else{$("#prev-arrow").removeClass("disabled")
}if($("#background-slider-items").position().left<=($(".slider-item").length-4)*-57){$("#next-arrow").addClass("disabled")
}else{$("#next-arrow").removeClass("disabled")
}})
}}function resetBGCarousel(){if($("#background-slider-items").position().left<0&&!$("#prev-arrow").hasClass("disabled")){$(".slider-arrow").addClass("disabled");
$(".slider-item").show();
$("#background-slider-items").animate({left:0},"fast",function(){var B=$("#background-slider-items").position().left;
var A=$("#background-slider-wrapper").innerWidth();
if(($(".slider-item.selected").position().left+B)<0){$(".slider-item.selected").css({width:55,height:36})
}else{$(".slider-item.selected").css({width:"",height:""})
}$(".slider-item").each(function(C){if(($(this).position().left+$(this).outerWidth()+B)>A){$(this).hide()
}});
if($("#background-slider-items").position().left>=0){$("#prev-arrow").addClass("disabled")
}else{$("#prev-arrow").removeClass("disabled")
}if($("#background-slider-items").position().left<=($(".slider-item").length-4)*-57){$("#next-arrow").addClass("disabled")
}else{$("#next-arrow").removeClass("disabled")
}})
}}function changeBG(E,D,F,C,I,H){if(!E){var E="#ffffff"
}if(!D){var D=""
}if(!C){var C=""
}if(!I){var I=""
}if(!H){var H=""
}if(F&&!$(F).hasClass("selected")&&!$(F).hasClass("disabled")){$(".slider-item").addClass("disabled");
var A,B;
$(".slider-item.selected").css({width:"",height:""});
$(".slider-item").each(function(K){if($(this).hasClass("selected")){$(this).removeClass("selected");
var L=$(this).attr("src");
var J=L.lastIndexOf(".75.49");
if(J>=0){L=L.replace(".75.49",".57.38")
}$(this).attr("src",L)
}});
A=$(F).attr("src");
B=A.lastIndexOf(".");
if(B>=0&&A.indexOf(".75.49")==-1){A=A.replace(".57.38",".75.49")
}$(F).attr("src",A).addClass("selected");
var G=$("#background-wrapper").children();
if($(D).hasClass("background-video")){if($("#background-video-player .videoContainer img").length>0){$("#background-video-player .videoContainer img").attr("src",$(D).attr("still"))
}else{$("#background-video-player .videoContainer").prepend("<img alt='' src='"+$(D).attr("still")+"' />")
}$("#background-video-player").hide().css("background-color",E).prependTo($("#background-wrapper")).fadeIn(fadeDuration,function(){if($(D).hasClass("background-video")){intelVideoLoadVideo($(D).attr("data"));
hideHomeControls();
lockInterval=1;
if(homeTimer){interval=window.clearTimeout(interval)
}intelVideoPlay()
}else{if(controlshidden){showHomeControls()
}}});
$("#background-wrapper").animate({backgroundColor:E},fadeDuration);
centerInParent($("#background-video-player"))
}else{$(D).hide().css("background-color",E).prependTo($("#background-wrapper")).fadeIn(fadeDuration);
$("#background-wrapper").animate({backgroundColor:E},fadeDuration);
centerInParent($(D))
}$("#background-wrapper").animate({backgroundColor:E},fadeDuration);
centerInParent($(D));
G.fadeOut(fadeDuration,function(){G.appendTo("#background-items");
$(".slider-item").removeClass("disabled");
$("body, #content").css("background-color",E)
});
if(C!=""){$("#home-copy h2").text(C);
$("#home-copy h4 a").text(I).attr("href",H)
}}if(!lockInterval&&!noloop){if(!homeTimer){homeTimer=1;
interval=window.setTimeout(nextBG,transitionInterval)
}else{interval=window.clearTimeout(interval);
interval=window.setTimeout(nextBG,transitionInterval)
}}}function nextBG(){var B=$(".slider-item.selected").next(".slider-item");
if($(".slider-item.selected").next(".slider-item").length<=0){B=$(".slider-item").first()
}var D=$(".slider-item.selected").attr("onclick")+",";
D=D.replace("'#","").replace("'","").split(",")[1];
if(D==carouselStart||noloop==1){lockInterval=1;
noloop=1;
if(homeTimer){interval=window.clearTimeout(interval)
}}else{if(carouselStart==""){carouselStart=D
}var C=$("#background-slider-items").position().left;
var A=$("#background-slider-wrapper").innerWidth();
B.show();
if((B.position().left+B.outerWidth()+C)>A){$("#next-arrow").trigger("click")
}else{if((B.position().left+B.outerWidth()+C)<0){resetBGCarousel()
}}B.trigger("click")
}}function centerInParent(C,B,G){if(!B){var B=0
}if(!G){var G=0
}var F=$(C).parent().outerWidth()-(G);
var E=$(C).parent().outerHeight()-(B);
var A=(E-$(C).innerHeight())/2;
var D=(F-$(C).innerWidth())/2;
$(C).css({position:"absolute",top:A,left:D})
}function centerVertically(C,B,D){if(!B){var B=0
}if(!D){var D=$(C).parent().outerHeight()-(B)
}var A=(D-$(C).outerHeight())/2;
$(C).css({position:"absolute",top:A,"margin-top":"0px","margin-bottom":"0px"})
}function closePreviews(){$(".list-item, .list-item-wrapper, .list-item-content-wrapper, .list-item-img-wrapper").removeClass("open").css("height","");
$(".view-btn, .close-btn, .list-item-descLong").addClass("hidden");
$(".preview-btn, .open-btn, .list-item-desc").removeClass("hidden");
matchHeights()
}function closeMyIntel(F,C){if($(".boxnav.myintelbg, .tooltip-flyout, .save, .my-intel-link").attr("hasmouse")!="true"||C){$(".boxnav.myintelbg").slideUp("fast",function(){$(".my-intel-link, .save").removeClass("selected");
$(".currentpage").addClass("selected");
$(".register-myintel").removeClass("boxnav myintelbg").addClass("hidden");
$(".savedcontent").addClass("boxnav myintelbg")
});
if($(".my-intel .link.selected").length>0){var E=$(".my-intel .link.selected").width();
var A=$(".my-intel .link.selected").offset();
var B=Math.round(A.left);
var G=B+Math.round(E/2)-4000;
if($(this).is(".my-intel-link")||$(this).is(".save")){G-=$("#my-intel-count").width()
}var D=G+"px top";
$(".home.wrapper #header").css("background-position",D)
}else{$(".home.wrapper #header").css("background-position","")
}}}function closeNavMenu(B,A){if(!B){var B=menuTimeout
}if(!A){var A=false
}if(A){$(".subnavtext").removeClass("active");
$(".directory, .directory a, .sites a, .library a").removeClass("selected");
$("#submenu-wrapper").slideUp(slideTimer);
$(".boxnav.navbg").slideUp(slideTimer,function(){updateMenuHeight();
$("#menu-wrapper").hide();
if(!$(".my-intel-link, .save").hasClass("selected")){$(".currentpage").addClass("selected")
}});
return 
}window.setTimeout(function(){if($(".boxnav.navbg").attr("hasmouse")!="true"&&$(".directory").attr("hasmouse")!="true"){$(".subnavtext").removeClass("active");
$(".directory, .directory a, .sites a, .library a").removeClass("selected");
$("#submenu-wrapper").slideUp(slideTimer);
$(".boxnav.navbg").slideUp(slideTimer,function(){updateMenuHeight();
$("#menu-wrapper").hide();
if(!$(".my-intel-link, .save").hasClass("selected")){$(".currentpage").addClass("selected")
}$("ul.subnav").css("background-position","left bottom")
})
}},B)
}function updateMenuHeight(){$(".navright, .home #content, body").css("min-height","");
if($("#submenu-wrapper:visible").length>0){$("#content").css("min-height",($(".boxnav.navbg").outerHeight()+60)+"px");
$("body").css("min-height",($(".boxnav.navbg").outerHeight()+65)+"px");
$(".navright, .navigation").css("min-height","").css("min-height",($(".boxnav.navbg").innerHeight()-135));
$("#background-player, #background-wrapper").height($("body").innerHeight());
$(".ie_shadow").css("min-height","").css("min-height",($(".boxnav.navbg").innerHeight()-45)).show()
}else{$(".ie_shadow").hide().css("min-height","");
$("body, .home #content, #background-player, #background-wrapper, .navright, .navigation").css("min-height","");
$("#background-player, #background-wrapper").height($(".home.wrapper").innerHeight())
}if($("#background-player").length>0){centerInParent($("#background-wrapper").children(".background-item").first())
}}function toggleFooterNews(){if($("#footer .latest-news a").hasClass("open")){stopTicker=true;
$(".news-items").stop().css({left:""});
window.clearInterval(newsinterval);
$("#footer .latest-news").animate({width:68},"fast",function(){$("#footer .latest-news").addClass("closed")
});
$("#footer .latest-news a").removeClass("open")
}else{scrolling=false;
if(newsinterval!=undefined){newsinterval=window.clearInterval(newsinterval)
}newsinterval=window.setInterval(scrollTicker,tickerScrollSpeed);
$("#footer .latest-news a").addClass("open")
}}function getBackButton(A,B,C){if(A[C]!=undefined){return A[C]
}return B
}function closeLanguageMenu(){$("#language-chooser").slideUp(fadeDuration);
$(".language").removeClass("selected")
}function closeToolsMenu(){$("#tools-chooser").slideUp(fadeDuration);
$(".tools").removeClass("selected")
}function nextCarousel(A,E){if($(A).find(".carousel-item.active").length>0){$(A).find(".carousel-item").not(".active").css({left:$(A).innerWidth()+80});
var C=$(A).find(".carousel-item.active");
C.css({left:0});
var D=$(E).find(".carousel-dot.active").next(".carousel-dot");
if(D.length==0){D=$(E).find(".carousel-dot").first()
}var B=$(A).find(".carousel-item.active").next(".carousel-item");
if(B.length==0){B=$(A).find(".carousel-item").first()
}$(E).find(".carousel-dot").removeClass("active");
$(D).addClass("active");
if($(E).find(".carousel-dot.active").prev(".carousel-dot").length==0){$(E).find(".carousel-left").css("visibility","hidden")
}else{$(E).find(".carousel-left").css("visibility","")
}if($(E).find(".carousel-dot.active").next(".carousel-dot").length==0){$(E).find(".carousel-right").css("visibility","hidden")
}else{$(E).find(".carousel-right").css("visibility","")
}$(A).find(".carousel-item").css("z-index","0").removeClass("active");
B.css("z-index","1");
C.animate({left:-($(A).innerWidth()+80)},500);
B.animate({left:0},500,function(){$(A).find(".carousel-item").not(B).removeClass("active").css({left:$(A).innerWidth()+80});
B.addClass("active")
})
}}function prevCarousel(A,E){if($(A).find(".carousel-item.active").length>0){$(A).find(".carousel-item").not(".active").css({left:-($(A).innerWidth()+80)});
var C=$(A).find(".carousel-item.active");
C.css({left:0});
var D=$(E).find(".carousel-dot.active").prev(".carousel-dot");
if(D.length==0){D=$(E).find(".carousel-dot").last()
}var B=$(A).find(".carousel-item.active").prev(".carousel-item");
if(B.length==0){B=$(A).find(".carousel-item").last()
}$(E).find(".carousel-dot").removeClass("active");
$(D).addClass("active");
if($(E).find(".carousel-dot.active").prev(".carousel-dot").length==0){$(E).find(".carousel-left").css("visibility","hidden")
}else{$(E).find(".carousel-left").css("visibility","")
}if($(E).find(".carousel-dot.active").next(".carousel-dot").length==0){$(E).find(".carousel-right").css("visibility","hidden")
}else{$(E).find(".carousel-right").css("visibility","")
}$(A).find(".carousel-item").css("z-index","0").removeClass("active");
B.css("z-index","1");
C.animate({left:$(A).innerWidth()+80},500);
B.animate({left:0},500,function(){$(A).find(".carousel-item").not(B).removeClass("active").css({left:-($(A).innerWidth()+80)});
B.addClass("active")
})
}}function scrollTicker(){if((stopTicker!=undefined&&stopTicker)||scrolling){return false
}scrolling=true;
var B=$("#footer .latest-news .news-item.selected").show();
var A=B.next(".news-item");
if(B.next(".news-item").length<=0){A=$("#footer .latest-news .news-item:first")
}B.fadeOut("fast",function(){B.removeClass("selected");
A.fadeIn("fast",function(){A.addClass("selected");
stopTicker=false;
scrolling=false
})
})
}function createTooltip(B){var A='<div class="tooltip-flyout hidden">';
A+='<div class="top">';
A+='<div class="right"></div>';
A+="</div>";
A+='<div class="middle">';
A+='<div class="right">';
A+='<div class="content">';
A+="<p>"+B+"</p>";
A+="</div>";
A+="</div>";
A+="</div>";
A+='<div class="bottom">';
A+='<div class="right"></div>';
A+="</div>";
A+="</div>";
$("body").append(A);
$(".tooltip-flyout").live("mouseenter",function(C){$(this).attr("hasmouse","true")
});
$(".tooltip-flyout").live("mouseleave",function(C){$(this).attr("hasmouse","");
window.setTimeout(function(){hideTooltip()
},100)
});
$(".tooltip-flyout").live("click",function(C){if(!$(this).hasClass("pdf-tip")){C.preventDefault();
$(this).attr("hasmouse","");
hideTooltip()
}})
}function showTooltip(F,A,G){if(!A&&!G){var A=0;
var G=0;
if(!E){var E=window.event
}if(E.pageX||E.pageY){A=E.pageX;
G=E.pageY
}else{if(E.clientX||E.clientY){A=E.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
G=E.clientY+document.body.scrollTop+document.documentElement.scrollTop
}}}else{if(!G){var D=$(A);
var A=D.offset().left+D.outerWidth()/4;
var G=D.offset().top+(D.outerHeight()/2);
$(".tooltip-flyout").die("click");
$(".tooltip-flyout").live("click",function(H){$(".tooltip-flyout").attr("hasmouse","");
hideTooltip()
})
}}if($(".tooltip-flyout").length<1){createTooltip(F)
}else{$(".tooltip-flyout .content p").text(F)
}$(".tooltip-flyout").offset({top:0,left:0});
$(".tooltip-flyout").removeClass("hidden").show();
var C=A-$(".tooltip-flyout").outerWidth()-30;
var B=G+($(".tooltip-flyout").outerHeight()/3);
if(B<50){B=50
}if(C<0){C=0
}$(".tooltip-flyout").css({top:B+"px",left:C+"px"})
}function hideTooltip(){if($(".tooltip-flyout").attr("hasmouse")!="true"){$(".tooltip-flyout").addClass("hidden").hide()
}}function toggleChat(){$("#lpInvite").slideToggle()
}function createCookie(C,D,E){if(E){var B=new Date();
B.setTime(B.getTime()+(E*24*60*60*1000));
var A="; expires="+B.toGMTString()
}else{var A=""
}document.cookie=C+"="+D+A+"; path=/"
}function readCookie(B){var D=B+"=";
var A=document.cookie.split(";");
for(var C=0;
C<A.length;
C++){var E=A[C];
while(E.charAt(0)==" "){E=E.substring(1,E.length)
}if(E.indexOf(D)==0){return E.substring(D.length,E.length)
}}return null
}function eraseCookie(A){createCookie(A,"",-1)
}function setAgnosticCookie(){if(readCookie("usertype")==null){createCookie("usertype","agnostic",60);
setNavClassFromCookie()
}}function setConsumerCookie(){createCookie("usertype","consumer",60);
setNavClassFromCookie()
}function setBusinessCookie(){createCookie("usertype","business",60);
setNavClassFromCookie()
}function setNavClassFromCookie(){var A=readCookie("usertype");
if(A=="business"){$(".boxnav.navbg").addClass("business").removeClass("consumer");
if($(".slider-item.work").length>0){$(".slider-item.work").first().trigger("click")
}}else{$(".boxnav.navbg").addClass("consumer").removeClass("business");
if($(".slider-item.home").length>0){$(".slider-item.home").first().trigger("click")
}}}function hide_popUp(){$("#contBlockOverlay").remove();
$("#hideBG").remove()
}$(".edNavBar li").live("mouseenter",function(A){$(this).attr("hasmouse","true");
$(this).children(".dropdown-menu").slideDown("fast",function(){$(this).children(".drpdwn-content-block").find("a:last-child").addClass("last-child");
$(".edNavBar").find("li").removeClass("active");
$(this).parent("li").addClass("active")
})
});
$(".edNavBar li").live("mouseleave",function(A){$(this).attr("hasmouse","");
$(this).children(".dropdown-menu").slideUp("fast",function(){$(this).children(".drpdwn-content-block").find("a:last-child").removeClass("last-child");
$(".edNavBar").find("li").removeClass("active")
})
});
var currentURLDirs=jQuery(location).attr("pathname").split("/");
if(currentURLDirs[1]=="content"&&currentURLDirs[2]=="www"&&currentURLDirs[3]=="cn"&&currentURLDirs[4]=="zh"){$.getScript("/etc/designs/intel/us/en/js/radar.js")
}$(function(){if($(".conversation-bubble p").hasClass("not-shown")!="false"){$("#conversationFeature .marquee-module.images p.not-shown").parent().children(".comment").addClass("author")
}$(".module-type-4 .panel ul").find("li:even").addClass("clearfloat");
$(".sidebar-two-column-blade .panel ul, .module.related-comp .panel1 ul, .small-icon-2col .panel ul").each(function(){_this=$(this);
_this.find("li:even").addClass("clear-element");
_this.find("li:nth-child(-n+2)").addClass("no-margin-top")
});
$(".three-column-blade ul, .small-icon-3col ul").each(function(){_this=$(this);
_this.find("li:nth-child(4n)").addClass("clear-element");
_this.find("li:nth-child(-n+3)").addClass("no-margin-top")
});
if($(".customfiltered").length){if($(".customfiltered .panel:visible > .carousel-item").length){$(".customfiltered .panel:visible > .carousel-item").eqlHgts("blade","panel")
}if($(".customfiltered .content-items > .carousel-item").length){$(".customfiltered .content-items > .carousel-item").eqlHgts("blade")
}$(".customfiltered .sidebar a").on("click",function(D){var B=$(this).attr("rel"),C=$(this).parents(".sidebar").siblings("."+B),E;
C.filter(function(){return E=$(this).attr("style")
});
if(typeof E==="undefined"&&C.children().hasClass("carousel-item")){C.children(".carousel-item").eqlHgts("blade","panel")
}})
}if($(".video-carousal").length){$(".video-carousal ul:first-child").addClass("active").css("left","0");
$(".video-carousal ul:first-child").each(function(B){if($(this).find("li").length<4){var C=($(this).find("li").length)*($(this).find("li").outerWidth()+40);
$(this).addClass("clearfix").css({width:C,position:"relative",margin:"0 auto"})
}});
$(window).load(function(){if($(".video-carousal > .carousel-item").length){$(".video-carousal > .carousel-item").eqlHgts("blade")
}})
}if($(".softwaresupportblade").length){if($(".softwaresupportblade .panel:visible > .carousel-item").length){$(".softwaresupportblade .panel:visible > .carousel-item").eqlHgts("blade","panel")
}$(".softwaresupportblade .sidebar a").on("click",function(B){var C=$(this).attr("rel");
$(this).closest(".module").find("."+C+" > .carousel-item").eqlHgts("blade","panel")
})
}if($(".benchmark-blade").length){$(".benchmark-blade .module-content > .carousel-item").eqlHgts("blade")
}if($(".related-comp").length){$(".related-comp .panel:visible").find(".carousel-item").eqlHgts("blade","panel");
$(".related-comp .sidebar a").on("click",function(B){var C=$(this).attr("rel");
$(this).closest(".module").find("."+C+" > .carousel-item").eqlHgts("blade","panel")
})
}if($(".technicaldocument").length){$(".technicaldocument .panel:visible > .carousel-item").eqlHgts("blade","panel")
}if($(".shop .module-content > .carousel-item").length){$(".shop .module-content > .carousel-item").eqlHgts("blade")
}if($(".relatedtechnologies .module-content > .carousel-item").length){$(".relatedtechnologies .module-content > .carousel-item").eqlHgts("blade")
}if($(".tools-carousel > .carousel-item").length){$(".tools-carousel > .carousel-item").eqlHgts("blade")
}if($(".b2bbladepicks .module-content > .carousel-item").length){$(".b2bbladepicks .module-content > .carousel-item").eqlHgts("blade")
}var A=".module ul.sidebar li a";
$(A).on("click",function(B){$(this).sidebarArrow()
});
$(A+".selected").each(function(){$(this).sidebarArrow()
})
});
function titleURL(A){document.getElementById("viewMoreId").href=A
}$(function(){$(".module-type-1 .sidebar a, .module-type-2 .sidebar a, .module-type-4 .sidebar a").bind("click",function(A){A.preventDefault();
$(this).addClass("selected").parent().siblings().find("a").removeClass("selected");
$(this).closest(".module").find(".panel").eq($(this).closest("li").index()).addClass("selected").siblings().removeClass("selected");
$(this).closest(".module").find(".panel .module-slider-wrap").recalcSlControls()
});
if($(".module-slider-wrap").length){$(".module .module-slider-wrap").slider({speed:300})
}});
$(function(){var E=$(".right-rail").height();
var K=$(".content-well").height();
if(!$("#content div.module").hasClass("in-author-mode")){var I=$(".rr-components .rightrailcustomizable").outerHeight();
var B=$(".rr-top").outerHeight();
var A=$(".rr-bottom").outerHeight();
var L=200;
var F=200;
var C=800;
var J=0;
var G=0;
var H=50;
var D=false;
if((I+B+A)>K){D=true;
G=K-(B+A);
if(G<H){G=H
}if(K<(B+A+G)){K=B+A+G
}$(".rr-components").height(G);
$(".right-rail").height(K)
}if((I+B+A)<K){$(".right-rail").height(I+B+A);
G=I
}if(D){$(".controls").show();
$(".rr-bottom .controls .scroll .down").bind("click",function(M){if($(this).hasClass("active")){if((I-(J+G))<L){J=I-G;
$(this).removeClass("active")
}else{J+=L
}if(J+G==I){$(this).removeClass("active")
}$(".rr-components").animate({scrollTop:J},C);
if(J!=0&&!($(".rr-bottom .controls .scroll .up").hasClass("active"))){$(".rr-bottom .controls .scroll .up").addClass("active")
}}});
$(".rr-bottom .controls .scroll .up").bind("click",function(M){if($(this).hasClass("active")){if(J<F){J=0;
$(this).removeClass("active")
}else{J-=F
}if(J==0){$(this).removeClass("active")
}$(".rr-components").animate({scrollTop:J},C);
if(J!=(I-G)&&!($(".rr-bottom .controls .scroll .down").hasClass("active"))){$(".rr-bottom .controls .scroll .down").addClass("active")
}}})
}}$(".rr-components .content-binder .cb-link").children("a").each(function(M){if(checkIfVisited($(this).attr("href"))){$(this).parent("div.cb-link").addClass("visited")
}});
$(".rr-components .content-binder .cb-link").children("a").bind("click",function(M){$(this).parent("div.cb-link").addClass("visited");
document.cookie=$(this).attr("href")+"=hasBeenVisited"
});
$(".rr-components .content-binder .cb-link.with-image").hover(function(){$(this).children("a").children("div.image-desc").show()
},function(){$(this).children("a").children("div.image-desc").hide()
})
});
var cookies=document.cookie.split(";");
function checkIfVisited(A){for(var B=0;
B<cookies.length;
B++){var C=cookies[B];
if(C.indexOf(A)!=-1){return true
}}return false
}$(document).ready(function(I){var A;
var B=$(".sidebar-compatible-products");
if(B.hasClass("has-sub")){A=B.find(".sub-categories:first li:first a").attr("rel")
}else{A=B.find(".category.first a").attr("rel")
}function F(){var O=$("#compatibleProducts ."+A).children("ul").length;
var N='<img alt="selector" class="carousel-dot" src="/etc/designs/intel/us/en/images/blank.png">',L='<img alt="selector" class="carousel-dot active" src="/etc/designs/intel/us/en/images/blank.png">',M='<img alt="next" class="carousel-right" src="/etc/designs/intel/us/en/images/carouselRight.png">',P='<img alt="next" class="carousel-left" src="/etc/designs/intel/us/en/images/carouselLeft.png" style="visibility: hidden;">';
$("#compatibleProducts ."+A).find(".carousel-item").removeClass("active").removeAttr("style");
$("#compatibleProducts ."+A).find(".carousel-item:first").addClass("active").css({"z-index":1,left:0});
$("#compatibleProducts .gallery-controls").css("visibility","hidden");
$("#compatibleProducts .gallery-controls .carousel-controls").attr("itemcontainer","");
$("#compatibleProducts .carousel-controls").html("");
if(O>1){$("#compatibleProducts .gallery-controls").css("visibility","visible");
$("#compatibleProducts .gallery-controls .carousel-controls").attr("itemcontainer","."+A);
$("#compatibleProducts .carousel-controls").append(P+L);
while(O>1){$("#compatibleProducts .carousel-controls").append(N);
O--
}$("#compatibleProducts .carousel-controls").append(M)
}}F();
$("#compatibleProducts .module-content ul.sidebar-compatible-products.has-sub li.category").click(function(){$("#compatibleProducts .module-content ul.sidebar-compatible-products.has-sub li.sub-categories").hide();
$("#compatibleProducts .module-content ul.sidebar-compatible-products.has-sub li.collapse").addClass("expand");
$("#compatibleProducts .module-content ul.sidebar-compatible-products.has-sub li.collapse").removeClass("collapse");
$(this).next().show();
$("ul li:first a",$(this).next()).addClass("selected");
A=$("ul li:first a",$(this).next()).attr("rel");
F();
$(this).addClass("collapse");
$(this).removeClass("expand")
});
$("#compatibleProducts .sidebar-compatible-products li.category a").click(function(){if($(".sidebar-compatible-products").hasClass("has-sub")){A=$(this).attr("rel")+"-sub1"
}else{A=$(this).attr("rel")
}$("#compatibleProducts .sidebar-compatible-products li.category a").removeClass("selected");
$("#compatibleProducts div.panel").removeClass("selected");
$(this).addClass("selected");
$("."+A).addClass("selected");
F()
});
$("#compatibleProducts .sidebar-compatible-products li.sub-categories ul li a").click(function(){A=$(this).attr("rel");
$("#compatibleProducts .sidebar-compatible-products li.sub-categories ul li a").removeClass("selected");
$("#compatibleProducts div.panel").removeClass("selected");
$(this).addClass("selected");
$("."+A).addClass("selected");
F()
});
var C=0;
$(".productDetailNavigation .navItems ul.items").each(function(L){if($(this).height()>C){C=$(this).height()
}});
$(".productDetailNavigation .navItems ul.items").each(function(L){$(this).css("height",C)
});
var E=600;
var G=150;
var D=275;
var H=0;
function K(){$(".productDetailNavigation .navItems").css("display","none");
$(".pdtNavShowToggle p.expand").show();
$(".pdtNavShowToggle p.close").hide();
$(".pdtNavShowToggle").removeClass("close");
$(".pdtNavShowToggle").addClass("expand")
}$(".productDetailNavigation .navItems ul li a").bind("click",function(M){$(".productDetailNavigation .navItems ul li.selected").removeClass("selected");
$(".productDetailNavigation .navSection div.item.selected").removeClass("selected");
$(this).parent().addClass("selected");
$(this).parent().css("background","");
var L=$(this).parent().parent().index()+1;
$(".productDetailNavigation .navSection div.item:nth-child("+L+")").addClass("selected");
if($(this).parent().parent().parent().parent().hasClass("fixed")){$(".productDetailNavigation.collapseVersion .navItems").css("display","none")
}M.preventDefault();
eleId=$(this).attr("href");
if(eleId=="#"){H=0
}else{if(!$(".productDetailNavigation").hasClass("fixed")){H=$(eleId).position().top-G-D
}else{H=$(eleId).position().top-G
}}if(H<0){H=0
}K();
$("html, body").stop().animate({scrollTop:H},E,"swing")
});
if($(".productDetailNavigation .navSection").length){var J=$(".productDetailNavigation .navSection").position().top;
$(window).scroll(function(){if(J>=$(window).scrollTop()){if($(".productDetailNavigation").hasClass("fixed")){$(".productDetailNavigation").removeClass("fixed")
}}else{if(!$(".productDetailNavigation").hasClass("fixed")){$(".productDetailNavigation").addClass("fixed")
}}})
}$(".pdtNavShowToggle p.close").click(function(L){$(".productDetailNavigation .navItems").css("display","none");
$(".pdtNavShowToggle p.expand").show();
$(this).hide();
$(".pdtNavShowToggle").removeClass("close");
$(".pdtNavShowToggle").addClass("expand");
$(".productDetailNavigation .navSection div.item").css("cursor","pointer")
});
$(".pdtNavShowToggle p.expand").click(function(L){$(".productDetailNavigation .navItems").css("display","");
$(".pdtNavShowToggle p.close").show();
$(this).hide();
$(".pdtNavShowToggle").removeClass("expand");
$(".pdtNavShowToggle").addClass("close");
$(".productDetailNavigation .navSection div.item").css("cursor","text")
});
$(".productDetailNavigation .navSection div.item").click(function(L){if($(".pdtNavShowToggle p").hasClass("expand")){$(".productDetailNavigation .navItems").css("display","");
$(".pdtNavShowToggle p.close").show();
$(".pdtNavShowToggle p.expand").hide();
$(".pdtNavShowToggle").removeClass("expand");
$(".pdtNavShowToggle").addClass("close");
$(".productDetailNavigation .navSection div.item").css("cursor","text")
}})
});
(function(A){A.fn.ezMark=function(B){B=B||{};
var C={checkboxCls:B.checkboxCls||"ez-checkbox",radioCls:B.radioCls||"ez-radio",checkedCls:B.checkedCls||"ez-checked",selectedCls:B.selectedCls||"ez-selected",hideCls:"ez-hide"};
return this.each(function(){var E=A(this);
var D=E.attr("type")=="checkbox"?'<div class="'+C.checkboxCls+'">':'<div class="'+C.radioCls+'">';
if(E.attr("type")=="checkbox"){E.addClass(C.hideCls).wrap(D).change(function(){if(A(this).is(":checked")){A(this).parent().addClass(C.checkedCls)
}else{A(this).parent().removeClass(C.checkedCls)
}});
if(E.is(":checked")){E.parent().addClass(C.checkedCls)
}}else{if(E.attr("type")=="radio"){E.addClass(C.hideCls).wrap(D).change(function(){A('input[name="'+A(this).attr("name")+'"]').each(function(){if(A(this).is(":checked")){A(this).parent().addClass(C.selectedCls)
}else{A(this).parent().removeClass(C.selectedCls)
}})
});
if(E.is(":checked")){E.parent().addClass(C.selectedCls)
}}}})
}
})(jQuery);