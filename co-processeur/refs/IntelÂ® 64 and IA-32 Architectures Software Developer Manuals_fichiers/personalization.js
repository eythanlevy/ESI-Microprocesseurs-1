if(!window.CQ_Analytics){window.CQ_Analytics={}
}CQ_Analytics.Operator=(function(){return function(){}
})();
CQ_Analytics.Operator.IS="is";
CQ_Analytics.Operator.EQUALS="equals";
CQ_Analytics.Operator.NOT_EQUAL="notequal";
CQ_Analytics.Operator.GREATER="greater";
CQ_Analytics.Operator.GREATER_OR_EQUAL="greaterorequal";
CQ_Analytics.Operator.OLDER="older";
CQ_Analytics.Operator.OLDER_OR_EQUAL="olderorequal";
CQ_Analytics.Operator.LESS="less";
CQ_Analytics.Operator.LESS_OR_EQUAL="lessorequal";
CQ_Analytics.Operator.YOUNGER="younger";
CQ_Analytics.Operator.YOUNGER_OR_EQUAL="youngerorequal";
CQ_Analytics.Operator.CONTAINS="contains";
CQ_Analytics.Operator.BEGINS_WITH="beginswith";
CQ_Analytics.OperatorActions=function(){var mapping={};
var addOperator=function(name,text,operation){mapping[name]=[text,operation]
};
addOperator(CQ_Analytics.Operator.EQUALS,CQ.I18n.getMessage("equals"),"==");
addOperator(CQ_Analytics.Operator.IS,CQ.I18n.getMessage("is"),"==");
addOperator(CQ_Analytics.Operator.NOT_EQUAL,CQ.I18n.getMessage("is not equal to"),"!=");
addOperator(CQ_Analytics.Operator.GREATER,CQ.I18n.getMessage("is greater than"),">");
addOperator(CQ_Analytics.Operator.GREATER_OR_EQUAL,CQ.I18n.getMessage("is equal to or greater than"),">=");
addOperator(CQ_Analytics.Operator.OLDER,CQ.I18n.getMessage("is older than"),">");
addOperator(CQ_Analytics.Operator.OLDER_OR_EQUAL,CQ.I18n.getMessage("is equal to or older than"),">=");
addOperator(CQ_Analytics.Operator.LESS,CQ.I18n.getMessage("is less than"),"<");
addOperator(CQ_Analytics.Operator.LESS_OR_EQUAL,CQ.I18n.getMessage("is equal to or less than"),"<=");
addOperator(CQ_Analytics.Operator.YOUNGER,CQ.I18n.getMessage("is younger than"),"<");
addOperator(CQ_Analytics.Operator.YOUNGER_OR_EQUAL,CQ.I18n.getMessage("is equal to or younger than"),"<=");
addOperator(CQ_Analytics.Operator.CONTAINS,CQ.I18n.getMessage("contains",null,"Ex: language contains french, Ex: gender contains female"),function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
return s1.toLowerCase().indexOf(s2.toLowerCase())!=-1
}return true
}return false
});
addOperator(CQ_Analytics.Operator.BEGINS_WITH,"begins with",function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
return s1.toLowerCase().indexOf(s2.toLowerCase())==0
}return true
}return false
});
var getByIndex=function(op,index){if(mapping[op]&&mapping[op][index]){return mapping[op][index]
}return""
};
var escapeQuote=function(str){if(str){str=str.replace(new RegExp("\\'","ig"),str)
}return str
};
return{getText:function(operator){return getByIndex(operator,0)
},getOperation:function(operator){return getByIndex(operator,1)
},operate:function(object,property,operator,value,valueFormat){try{if(object&&object[property]){var toEval="";
var op=this.getOperation(operator);
op=op?op:operator;
var objectValue=CQ.shared.XSS.getXSSTablePropertyValue(object,property);
if(typeof op=="function"){return op.call(this,objectValue,value,valueFormat)
}else{if(valueFormat){toEval=valueFormat+"("+objectValue+") "+op+" "+valueFormat+"("+value+")"
}else{var s1=escapeQuote(objectValue);
var s2=escapeQuote(value);
toEval="'"+s1+"' "+op+" '"+s2+"'"
}var b=eval(toEval);
return b
}}}catch(e){}return false
}}
}();
var RUZEE=window.RUZEE||{};
RUZEE.ShadedBorder={create:function(Q){var M=/msie/i.test(navigator.userAgent)&&!window.opera;
var a=M&&!window.XMLHttpRequest;
function S(o,b){for(k in b){if(/ie_/.test(k)){if(M){o.style[k.substr(3)]=b[k]
}}else{o.style[k]=b[k]
}}}function V(o){var b=document.createElement("div");
b.className="sb-gen";
S(b,o);
return b
}function T(b){b=b<0?0:b;
if(b>0.99999){return""
}return M?" filter:alpha(opacity="+(b*100)+");":" opacity:"+b+";"
}var I=Q.shadow||0;
var c=Q.corner||0;
var G=0;
var F=Q.border||0;
var H=Q.borderOpacity||1;
var X=I!=0;
var P=c>I?c:I;
var R=P;
var B=P;
var j=P;
if(F>0){G=c;
c=c-F
}var L=c!=0&&X?Math.round(P/3):0;
var K=L;
var O=Math.round(L/2);
var N=c>0?"sb-inner":"sb-shadow";
var U="sb-shadow";
var f="sb-border";
var J=Q.edges||"trlb";
if(!/t/i.test(J)){B=0
}if(!/b/i.test(J)){j=0
}if(!/l/i.test(J)){P=0
}if(!/r/i.test(J)){R=0
}var e={position:"absolute",left:"0",top:"0",width:P+"px",height:B+"px",ie_fontSize:"1px",overflow:"hidden",margin:"0",padding:"0"};
var A=V(e);
delete e.left;
e.right="0";
e.width=R+"px";
var m=V(e);
delete e.top;
e.bottom="0";
e.height=j+"px";
var d=V(e);
delete e.right;
e.left="0";
e.width=P+"px";
var g=V(e);
var h=V({position:"absolute",width:"100%",height:B+"px",ie_fontSize:"1px",top:"0",left:"0",overflow:"hidden",margin:"0",padding:"0"});
var Z=V({position:"relative",height:B+"px",ie_fontSize:"1px",margin:"0 "+R+"px 0 "+P+"px",overflow:"hidden",padding:"0"});
h.appendChild(Z);
var Y=V({position:"absolute",left:"0",bottom:"0",width:"100%",height:j+"px",ie_fontSize:"1px",overflow:"hidden",margin:"0",padding:"0"});
var n=V({position:"relative",height:j+"px",ie_fontSize:"1px",margin:"0 "+R+"px 0 "+P+"px",overflow:"hidden",padding:"0"});
Y.appendChild(n);
var E=V({position:"absolute",top:(-j)+"px",left:"0",width:"100%",height:"100%",overflow:"hidden",ie_fontSize:"1px",padding:"0",margin:"0"});
function W(q,AE,AI){var AB=AI?P:R;
var AL=AE?B:j;
var AF=AE?O:-O;
var v=[];
var r=[];
var b=[];
var AC=0;
var AJ=1;
if(AI){AC=AB-1;
AJ=-1
}for(var AA=0;
AA<AB;
++AA){var AM=AL-1;
var o=-1;
if(AE){AM=0;
o=1
}var u=false;
for(var z=AL-1;
z>=0&&!u;
--z){var AG='<div style="position:absolute; top:'+AM+"px; left:"+AC+"px; width:1px; height:1px; overflow:hidden; margin:0; padding:0;";
var AK=AA-L;
var p=z-K-AF;
var AN=Math.sqrt(AK*AK+p*p);
var AD=false;
if(c>0){if(AK<0&&p<G&&p>=c||p<0&&AK<G&&AK>=c){v.push(AG+T(H)+'" class="'+f+'"></div>')
}else{if(AN<G&&AN>=c-1&&AK>=0&&p>=0){var AO=AG;
if(AN>=G-1){AO+=T((G-AN)*H);
AD=true
}else{AO+=T(H)
}v.push(AO+'" class="'+f+'"></div>')
}}var AO=AG+" z-index:2;"+(AE?"background-position:0 -"+(c-p-1)+"px;":"background-image:none;");
var AH=function(){if(!AE){AO=AO.replace(/top\:\d+px/,"top:0px")
}AO=AO.replace(/height\:1px/,"height:"+(z+1)+"px");
r.push(AO+'" class="'+N+'"></div>');
u=true
};
if(AK<0&&p<c||p<0&&AK<c){AH()
}else{if(AN<c&&AK>=0&&p>=0){if(AN>=c-1){AO+=T(c-AN);
AD=true;
r.push(AO+'" class="'+N+'"></div>')
}else{AH()
}}else{AD=true
}}}else{AD=true
}if(I>0&&AD){AN=Math.sqrt(AA*AA+z*z);
if(AN<I){b.push(AG+" z-index:0; "+T(1-(AN/I))+'" class="'+U+'"></div>')
}}AM+=o
}AC+=AJ
}q.innerHTML=b.concat(v.concat(r)).join("")
}function C(r){var q=[];
q.push('<div style="position:relative; top:'+(B+j)+"px; height:2048px;  margin:0 "+(R-c-L)+"px 0 "+(P-c-L)+"px;  padding:0; overflow:hidden; background-position:0 "+(B>0?-(c+K+O):"0")+'px;" class="'+N+'"></div>');
var o='<div style="position:absolute; width:1px; top:'+(B+j)+"px; height:2048px; padding:0; margin:0;";
if(I>0){for(var b=0;
b<P-c-L;
++b){q.push(o+" left:"+b+"px;"+T((b+1)/P)+'" class="'+U+'"></div>')
}for(var b=0;
b<R-c-L;
++b){q.push(o+" right:"+b+"px;"+T((b+1)/R)+'" class="'+U+'"></div>')
}}if(F>0){var p=" width:"+F+"px;"+T(H)+'" class="'+f+'"></div>';
q.push(o+" left:"+(P-G-L)+"px;"+p);
q.push(o+" right:"+(R-G-L)+"px;"+p)
}r.innerHTML=q.join("")
}function D(r,o){var u=[];
var q=o?B:j;
var b='<div style="height:1px; overflow:hidden; position:absolute; margin:0; padding:0; width:100%; left:0px; ';
var p=o?O:-O;
for(var v=0;
v<q-p-K-c;
++v){if(I>0){u.push(b+(o?"top:":"bottom:")+v+"px;"+T((v+1)*1/q)+'" class="'+U+'"></div>')
}}if(v>=F){u.push(b+(o?"top:":"bottom:")+(v-F)+"px;"+T(H)+" height:"+F+'px;" class="'+f+'"></div>')
}u.push(b+(o?"background-position-y:0; top:":"background-image:none; bottom:")+v+"px; height:"+(c+K+p)+'px;" class="'+N+'"></div>');
r.innerHTML=u.join("")
}W(A,true,true);
W(m,true,false);
W(g,false,true);
W(d,false,false);
C(E);
D(Z,true);
D(n,false);
return{render:function(o){if(typeof o=="string"){o=document.getElementById(o)
}if(o.length!=undefined){for(var r=0;
r<o.length;
++r){this.render(o[r])
}return 
}o.className+=" sb";
S(o,{position:"relative",background:"transparent"});
var p=o.firstChild;
while(p){var q=p.nextSibling;
if(p.nodeType==1&&p.className=="sb-gen"){o.removeChild(p)
}p=q
}var v=o.firstChild;
var s=h.cloneNode(true);
var u=E.cloneNode(true);
var t=Y.cloneNode(true);
o.insertBefore(A.cloneNode(true),v);
o.insertBefore(m.cloneNode(true),v);
o.insertBefore(g.cloneNode(true),v);
o.insertBefore(d.cloneNode(true),v);
o.insertBefore(s,v);
o.insertBefore(u,v);
o.insertBefore(t,v);
if(a){o.onmouseover=function(){this.className+=" hover"
};
o.onmouseout=function(){this.className=this.className.replace(/ hover/,"")
};
window.setTimeout(function(){o.className+=" hover";
o.className=o.className.replace(/ hover/,"")
},100)
}if(M){function b(){s.style.width=t.style.width=u.style.width=o.offsetWidth+"px";
u.firstChild.style.height=o.offsetHeight+"px"
}o.onresize=b;
b()
}}}
}};
CQ_Analytics.Utils=new function(){return{registerDocumentEventHandler:function(C,B){var A=window.document[C];
if(typeof window.document[C]!="function"){window.document[C]=B
}else{window.document[C]=function(D){if(A){A(D)
}B(D)
}
}},eventWrapper:function(A){return function(D){var C,B;
if(document.all){C=window.event.keyCode;
B=window.event
}else{C=(typeof (D.which)!="undefined")?D.which:0;
B=D
}if(B){A(B,C)
}}
},loadElement:function(A,B){$CQ("#"+B).load(A)
},loadTeaserElement:function(A,D){var E=$CQ("#"+D).css("height");
var F=$CQ("#"+D).height();
if(F>0){$CQ("#"+D).css("height",F)
}var G=function(L){if(L&&L!=""){var K=$CQ(L).css("display","none");
$CQ("#"+D).append(K);
K.fadeIn(function(){if(E&&E!="0px"){$CQ("#"+D).css("height",E)
}})
}else{if(E&&E!="0px"){$CQ("#"+D).css("height",E)
}}};
var H=function(K,L){if(!CQ_Analytics.Utils.teasersCache){CQ_Analytics.Utils.teasersCache={}
}CQ_Analytics.Utils.teasersCache[K]=L
};
var B=function(){if(CQ_Analytics.Utils.teasersCache&&CQ_Analytics.Utils.teasersCache[A]){G(CQ_Analytics.Utils.teasersCache[A])
}else{CQ_Analytics.Utils.teasersLoading=CQ_Analytics.Utils.teasersLoading||{};
if(CQ_Analytics.Utils.teasersLoading[A]){window.setTimeout(function(){CQ_Analytics.Utils.loadTeaserElement(A,D)
},100)
}else{CQ_Analytics.Utils.teasersLoading[A]=true;
I()
}}};
var I=function(){CQ.shared.HTTP.get(A,function(N,M,K){if(M){var L=K.body;
if(L){L=L.replace(new RegExp("\\n","ig"),"");
L=L.replace(new RegExp("\\r","ig"),"");
H(A,L);
B();
delete CQ_Analytics.Utils.teasersLoading[A]
}}else{H(A,"")
}})
};
var C=$CQ("#"+D).children().length;
if(C>0){var J=0;
$CQ("#"+D).children().fadeOut(function(){var K=$CQ(this);
window.setTimeout(function(){K.remove();
J++;
if(J>=C){B()
}},50)
})
}else{B()
}},clearElement:function(A){if(A){$CQ("#"+A).html("")
}},indexOf:function(D,C){for(var B=0,A=D.length;
B<A;
B++){if(D[B]==C){return B
}}return -1
},load:function(A,C,B){return CQ.shared.HTTP.get(A,C,B)
},post:function(A,D,C,B){return CQ.shared.HTTP.post(A,D,C,B)
},getPagePath:function(){return CQ.shared.HTTP.getPath()
},getPath:function(A){return CQ.shared.HTTP.getPath(A)
},addParameter:function(B,A,C){return CQ.shared.HTTP.addParameter(B,A,C)
},removeParameters:function(A){return CQ.shared.HTTP.removeParameters(A)
},removeAnchor:function(A){return CQ.shared.HTTP.removeAnchor(A)
},getSchemeAndAuthority:function(A){return CQ.shared.HTTP.getSchemeAndAuthority(A)
},internalize:function(A,B){return CQ.shared.HTTP.internalize(B)
},externalize:function(A,B){return CQ.shared.HTTP.externalize(A,B)
},encodePathOfURI:function(A){return CQ.shared.HTTP.encodePathOfURI(A)
},encodePath:function(A){return CQ.shared.HTTP.encodePath(A)
},getContextPath:function(){return CQ.shared.HTTP.getContextPath()
},detectContextPath:function(){return CQ.shared.HTTP.detectContextPath()
},urlEncode:function(H){if(!H){return""
}if(typeof H=="string"){return H
}var C=[];
for(var F in H){var E=H[F],B=encodeURIComponent(F);
var G=typeof E;
if(G=="undefined"){C.push(B,"=&")
}else{if(G!="function"&&G!="object"){C.push(B,"=",encodeURIComponent(E),"&")
}else{if(typeof E=="array"){if(E.length){for(var D=0,A=E.length;
D<A;
D++){C.push(B,"=",encodeURIComponent(E[D]===undefined?"":E[D]),"&")
}}else{C.push(B,"=&")
}}}}}C.pop();
return C.join("")
},getUID:function(){var A=Math.floor(Math.random()*(Math.pow(2,42)-1));
return this.getTimestamp().toString(16)+A.toString(16)
},getTimestamp:function(){var A=new Date();
return A.getTime()
},insert:function(D,C,B){if(!D||isNaN(C)||!B){return D
}var A="";
var F=0;
var E=C;
while(E<D.length){A+=D.substring(F,E)+B;
F+=C;
E+=C
}if(F<D.length){A+=D.substring(F)
}return A
},addListener:function(){if(window.addEventListener){return function(D,B,C,A){D.addEventListener(B,C,(A))
}
}else{if(window.attachEvent){return function(D,B,C,A){D.attachEvent("on"+B,C)
}
}else{return function(){}
}}},removeListener:function(){if(window.removeEventListener){return function(D,B,C,A){D.removeEventListener(B,C,(A))
}
}else{if(window.detachEvent){return function(C,A,B){C.detachEvent("on"+A,B)
}
}else{return function(){}
}}}}
};
CQ_Analytics.ClickstreamcloudRenderingUtils=new function(){return{createLink:function(F,D,B,A){var C=document.createElement("a");
C.href=A;
C.onclick=D;
C.innerHTML=F;
if(B){for(var E in B){if(B.hasOwnProperty(E)){C[E]=B[E]
}}}return C
},createStaticLink:function(D,A,C){var B=document.createElement("a");
B.href=A;
B.innerHTML=D;
B.title=C;
B.alt=C;
return B
},createNameValue:function(B,D,A,E){var C=document.createElement("span");
C.className=A||"ccl-data";
C.innerHTML=B+" = "+D;
C.title=E;
C.alt=E;
return C
},createText:function(D,A,C){var B=document.createElement("span");
B.className=A||"ccl-data";
if(D&&D.indexOf&&((D.indexOf("/home")!=-1&&D.indexOf("/image")!=-1)||(D.indexOf("/")!=-1&&D.indexOf(".png")!=-1))){B.innerHTML='<img src="'+D+'.prof.thumbnail.png" border="0">'
}else{if(D&&D.indexOf&&D.indexOf("www.gravatar.com")!=-1){B.innerHTML='<img src="'+D+'">'
}else{B.innerHTML=D
}}B.title=C;
B.alt=C;
return B
},createEditablePropertySpan:function(B,D){var A="var editSpan = this.nextSibling; this.style.display = 'none'; editSpan.style.display = 'block';";
var E="var editSpan = this.parentNode; var readSpan = this.parentNode.previousSibling;var newValue = this.value;editSpan.style.display = 'none'; readSpan.innerHTML = '"+B+" = '+value; readSpan.style.display = 'block';";
var C=document.createElement("span");
C.innerHTML='<span class="ccl-data" onclick="'+A+'">'+B+" = "+D+"</span>";
C.innerHTML+='<span class="ccl-data" style="display: none;">'+B+' = <input class="ccl-input" type="text" value="'+D+'" onblur="'+E+'"></span>';
C.className="ccl-data";
return C
}}
};
CQ_Analytics.ClientContextUtils=new function(){return{renderStoreProperty:function(F,C,B,D,E,A){if(CQ_Analytics&&CQ_Analytics.CCM){CQ_Analytics.CCM.onReady(function(){var G=function(){var H=CQ_Analytics.StoreRegistry.getStore(C);
if(H){var I=function(){var L=H.getProperty(B)||A;
var K=$CQ("#"+F);
if(K.attr("contenteditable")&&K.attr("contenteditable")!="inherit"){return 
}if(typeof (L)=="string"&&((L.indexOf("/")==0&&(L.toLowerCase().indexOf(".png")!=-1||L.toLowerCase().indexOf(".jpg")!=-1||L.toLowerCase().indexOf(".gif")!=-1)||L.toLowerCase().indexOf("http")==0))){if(!L||L==""){K.children().remove();
K.html("No "+B)
}else{var J="";
if(K.parents(".cq-cc-thumbnail").length==0||L.toLowerCase().indexOf("http")==0||L.indexOf("/libs/wcm/mobile")==0){J=L.replace(new RegExp("&amp;","g"),"&")
}else{J="/etc/clientcontext/shared/thumbnail/content.png";
J=CQ.shared.HTTP.addParameter(J,"path",CQ_Analytics.Variables.replaceVariables(L))
}J=CQ_Analytics.Variables.replaceVariables(J);
if(K.find("div").css("background-image")!="url("+J+")"){if(H.fireEvent("beforepropertyrender",H,F)!==false){K.html("");
K.children().remove();
$CQ("<div>").addClass("cq-cc-thumbnail-img").css("background-image","url("+_g.shared.HTTP.externalize(J)+")").appendTo(K);
H.fireEvent("propertyrender",H,F)
}}}}else{L=CQ_Analytics.Variables.replaceVariables(L);
L=(!L||L=="")?"No "+B:L=D+L+E;
if(K.html()!=L){if(H.fireEvent("beforepropertyrender",H,F)!==false){K.html(L);
H.fireEvent("propertyrender",H,F)
}}}};
if(H.fireEvent("beforeinitialpropertyrender",H,F)!==false){I();
if(H.addListener){H.addListener("update",function(){I()
})
}H.fireEvent("initialpropertyrender",H,F)
}}};
CQ_Analytics.ClientContextUtils.onStoreRegistered(C,G)
})
}},renderStore:function(B,A){if(CQ_Analytics&&CQ_Analytics.CCM&&B&&A){CQ_Analytics.CCM.onReady(function(){var C=function(){var D=CQ_Analytics.StoreRegistry.getStore(A);
if(D){D.divId=B;
var E=function(){if(D.fireEvent("beforerender",D,D.divId)!==false){D.renderer(D,D.divId);
D.fireEvent("render",D,D.divId)
}};
if(D.fireEvent("beforeinitialrender",D,B)!==false){E();
if(D.addListener){D.addListener("update",function(){E()
})
}D.fireEvent("initialrender",D,B)
}}};
CQ_Analytics.ClientContextUtils.onStoreRegistered(A,C)
})
}},storesOptionsProvider:function(){var C=[];
var A=CQ_Analytics.StoreRegistry.getStores();
for(var B in A){C.push({value:B})
}return C
},storePropertiesOptionsProvider:function(C,E){var B=[];
var A=CQ_Analytics.StoreRegistry.getStore(C);
if(A){var G=A.getPropertyNames();
for(var D=0;
D<G.length;
D++){var F=G[D];
if(!CQ.shared.XSS.KEY_REGEXP.test(F)){var H={value:F};
if(E){H.text=F+" - "+A.getProperty(F)
}B.push(H)
}}}return B
},onStoreRegistered:function(B,C){if(C){var A=CQ_Analytics.StoreRegistry.getStore(B);
if(A){C.call(A,A)
}else{CQ_Analytics.CCM.addListener("storeregister",function(E,D){if(D.getName()==B){C.call(D,D)
}})
}}},onStoreInitialized:function(C,E,B){if(B===true){B=CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY
}var D=function(){var F=CQ_Analytics.StoreRegistry.getStore(C);
if(F.DELAYED_INIT_TIMEOUT){window.clearTimeout(F.DELAYED_INIT_TIMEOUT);
F.DELAYED_INIT_TIMEOUT=null
}if(B>0){F.DELAYED_INIT_TIMEOUT=window.setTimeout(function(){F.DELAYED_INIT_TIMEOUT=null;
E.call(F,"initialize",F)
},B)
}else{E.call(F,"initialize",F)
}};
var A=CQ_Analytics.StoreRegistry.getStore(C);
if(A){if(A.isInitialized()){D.call(A);
A.addListener("initialize",function(G,F){D.call(F)
})
}else{A.addListener("initialize",function(G,F){D.call(F)
})
}}else{CQ_Analytics.CCM.addListener("storeregister",function(G,F){if(F.getName()==C){CQ_Analytics.ClientContextUtils.onStoreInitialized(C,E,B)
}})
}},init:function(D,C){CQ_Analytics.ClientContextMgr.PATH=D;
CQ_Analytics.ClientContextMgr.loadConfig(null,true);
var A=CQ.shared.HTTP.externalize(D+"/content/jcr:content/stores.init.js");
A=CQ.shared.HTTP.addParameter(A,"path",C);
A=CQ.shared.HTTP.noCaching(A);
var B=CQ.shared.HTTP.get(A)
},initUI:function(B,A){CQ_Analytics.ClientContextUI.create(B,A)
}}
};
CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY=200;
CQ_Analytics.Variables=new function(){return{containsVariable:function(A){return CQ_Analytics.Variables.getVariables(A).length>0
},getVariables:function(B){if(!B||typeof (B)!="string"){return[]
}var A=B.match(new RegExp("\\$\\{([\\w/]*)\\}","ig"));
return A?A:[]
},replaceVariables:function(E){if(!E){return E
}var F="";
var D=E;
var G=CQ_Analytics.Variables.getVariables(E);
while(G.length>0&&F.indexOf(G.join())==-1){for(var C=0;
C<G.length;
C++){var B=G[C].substring(2,G[C].length-1);
var A=CQ_Analytics.ClientContext.get(B)||"";
D=CQ_Analytics.Variables.replace(D,B,A)
}F+=G.join();
G=CQ_Analytics.Variables.getVariables(D)
}return D
},replace:function(A,B,C){return A.replace(new RegExp("\\$\\{"+B+"\\}","ig"),C)
}}
};
CQ_Analytics.Cookie={set:function(C,D,E){var A="";
if(E){var B=new Date();
B.setTime(B.getTime()+(E*24*60*60*1000));
A="; expires="+B.toGMTString()
}document.cookie=C+"="+D+A+"; path=/"
},read:function(B){var D=B+"=";
var A=document.cookie.split(";");
for(var C=0;
C<A.length;
C++){var E=A[C];
while(E.charAt(0)==" "){E=E.substring(1,E.length)
}if(E.indexOf(D)==0){return E.substring(D.length,E.length)
}}return null
},erase:function(A){CQ_Analytics.Cookie.set(A,"",-1)
}};
CQ_Analytics.SessionPersistence=function(){return{COOKIE_NAME:"SessionPersistence-"+CQURLInfo.runModes.replace(",","-"),set:function(C,D){if(C!="PROFILEDATA"){D=D||"";
var F=this.getMap();
if(!F){F=""
}var B=F.indexOf(C+":=");
if(B==-1){F+=C+":="+D+"|"
}else{var E=F.substring(0,B);
var A=F.substring(F.indexOf("|",B+2)+1);
F=E+C+":="+D+"|"+A
}this.setMap(F)
}},get:function(B){var D=this.getMap();
var C="";
if(D){var A=D.indexOf(B+":=");
if(A!=-1){C=D.substring(A+(B+":=").length,D.indexOf("|",A+2))
}}C=(C=="null"?"":(C||""));
return C
},getMap:function(){var A=CQ_Analytics.Cookie.read(this.COOKIE_NAME);
if(A){return decodeURIComponent(A)
}return null
},setMap:function(A){CQ_Analytics.Cookie.set(this.COOKIE_NAME,encodeURIComponent(A),365)
},clearMap:function(){CQ_Analytics.Cookie.erase(this.COOKIE_NAME)
},remove:function(C){var E=this.getMap();
if(!E){E=""
}var B=E.indexOf(C+":=");
if(B!=-1){var D=E.substring(0,B);
var A=E.substring(E.indexOf("|",B+2)+1);
E=D+A
}this.setMap(E)
}}
};
CQ_Analytics.Observable=function(){this.fireEvent=function(D){if(D&&this.listeners){D=D.toLowerCase();
var B=Array.prototype.slice.call(arguments,0);
for(var C=0;
C<this.listeners.length;
C++){var A=this.listeners[C];
if(D==A.event){if(A.fireFn.apply(A.scope||this||window,B)===false){return false
}}}}return true
}
};
CQ_Analytics.Observable.prototype.addListener=function(C,A,B){this.listeners=this.listeners||new Array();
if(C&&A){this.listeners.push({event:C.toLowerCase(),fireFn:A,scope:B})
}};
CQ_Analytics.Observable.prototype.removeListener=function(C,A){this.listeners=this.listeners||new Array();
if(C&&A){for(var B=0;
B<this.listeners.length;
B++){if(this.listeners[B].event==C&&this.listeners[B].fireFn==A){this.listeners.splice(B,1)
}}}};
CQ_Analytics.Observable.prototype.listeners=null;
if(!CQ_Analytics.StoreRegistry){CQ_Analytics.StoreRegistry=new function(){var A={};
return{register:function(B){if(B.STORENAME){A[B.STORENAME]=B
}},getStores:function(){return A
},getStore:function(B){return A[B]
}}
}()
}CQ_Analytics.SessionStore=function(){};
CQ_Analytics.SessionStore.prototype=new CQ_Analytics.Observable();
CQ_Analytics.SessionStore.prototype.setProperty=function(A,C){if(this.data==null){this.init()
}this.data[A]=C;
var B=CQ.shared.XSS.getXSSPropertyName(A);
this.data[B]=CQ.shared.XSS.getXSSValue(C);
this.fireEvent("update",A)
};
CQ_Analytics.SessionStore.prototype.initialized=false;
CQ_Analytics.SessionStore.prototype.init=function(){this.initialized=true;
this.fireEvent("initialize",this)
};
CQ_Analytics.SessionStore.prototype.getLabel=function(A){return A
};
CQ_Analytics.SessionStore.prototype.getLink=function(A){return A
};
CQ_Analytics.SessionStore.prototype.removeProperty=function(A){if(this.data==null){this.init()
}if(this.data[A]){delete this.data[A]
}var B=CQ.shared.XSS.getXSSPropertyName(A);
if(this.data[B]){delete this.data[B]
}this.fireEvent("update",A)
};
CQ_Analytics.SessionStore.prototype.getPropertyNames=function(A){if(this.data==null){this.init()
}A=A?A:[];
var B=new Array();
for(var C in this.data){if(CQ_Analytics.Utils.indexOf(A,C)==-1){B.push(C)
}}return B
};
CQ_Analytics.SessionStore.prototype.getSessionStore=function(){return this
};
CQ_Analytics.SessionStore.prototype.clear=function(){this.data=null
};
CQ_Analytics.SessionStore.prototype.getData=function(B){if(this.data==null){this.init()
}if(B){var A={};
for(var C in this.data){if(CQ_Analytics.Utils.indexOf(B,C)==-1){A[C]=this.data[C]
}}return A
}else{return this.data
}};
CQ_Analytics.SessionStore.prototype.reset=function(){if(this.data!=null){this.data=null;
this.fireEvent("update")
}};
CQ_Analytics.SessionStore.prototype.getProperty=function(B,A){if(this.data==null){this.init()
}if(!A){var C=CQ.shared.XSS.getXSSPropertyName(B);
if(this.data[C]){return this.data[C]
}}return this.data[B]
};
CQ_Analytics.SessionStore.prototype.getName=function(){return this.STORENAME
};
CQ_Analytics.SessionStore.prototype.addInitProperty=function(A,B){if(!this.initProperty){this.initProperty={}
}this.initProperty[A]=B
};
CQ_Analytics.SessionStore.prototype.getInitProperty=function(A){return this.initProperty?this.initProperty[A]:null
};
CQ_Analytics.SessionStore.prototype.loadInitProperties=function(C,A){if(C){for(var B in C){this.addInitProperty(B,C[B]);
if(A&&this.data&&this.data[B]===undefined){this.setProperty(B,C[B])
}}}};
CQ_Analytics.SessionStore.prototype.isInitialized=function(){return this.initialized
};
CQ_Analytics.PersistedSessionStore=function(){};
CQ_Analytics.PersistedSessionStore.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.PersistedSessionStore.prototype.STOREKEY="key";
CQ_Analytics.PersistedSessionStore.prototype.setNonPersisted=function(A){if(!this.nonPersisted){this.nonPersisted={}
}this.nonPersisted[A]=true
};
CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX="^generated*";
CQ_Analytics.PersistedSessionStore.prototype.isPersisted=function(A){if(!this.nonPersisted){this.nonPersisted={}
}return this.nonPersisted[A]!==true&&!new RegExp(CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX,"ig").test(A)&&!$CQ.isFunction(this.data[A])&&(typeof this.data[A])!="object"
};
CQ_Analytics.PersistedSessionStore.prototype.getStoreKey=function(){return this.STOREKEY
};
CQ_Analytics.PersistedSessionStore.prototype.persist=function(){if(this.fireEvent("beforepersist")!==false){var A=new CQ_Analytics.SessionPersistence();
A.set(this.getStoreKey(),this.toString());
this.fireEvent("persist")
}};
CQ_Analytics.PersistedSessionStore.prototype.setProperty=function(A,C){if(this.data==null){this.init()
}this.data[A]=C;
var B=CQ.shared.XSS.getXSSPropertyName(A);
this.data[B]=CQ.shared.XSS.getXSSValue(C);
if(this.isPersisted(A)){this.persist()
}this.fireEvent("update",A)
};
CQ_Analytics.PersistedSessionStore.prototype.toString=function(){var B=null;
if(this.data){var A=function(E){if(!E||typeof (E)!="string"){return E
}var D=E;
D=D.replace(new RegExp(",","g"),"&#44;");
D=D.replace(new RegExp("=","g"),"&#61;");
D=D.replace(new RegExp("\\|","g"),"&#124;");
return D
};
for(var C in this.data){if(this.isPersisted(C)&&this.data.hasOwnProperty(C)){B=(B===null?"":B+",");
B+=(C+"="+A(this.data[C]))
}}}return B
};
CQ_Analytics.PersistedSessionStore.prototype.parse=function(E){var D=function(H){if(!H||typeof (H)!="string"){return H
}var G=H;
G=G.replace(new RegExp("&#44;","g"),",");
G=G.replace(new RegExp("&#61;","g"),"=");
G=G.replace(new RegExp("&#124;","g"),"|");
return G
};
var C={};
var F=E.split(",");
for(var A in F){if(F.hasOwnProperty(A)){var B=F[A].split("=");
if(B.length==2){C[B[0]]=D(B[1])
}}}return C
};
CQ_Analytics.PersistedSessionStore.prototype.reset=function(A){if(this.data!=null){this.data={};
this.persist();
this.data=null;
if(!A){this.fireEvent("update")
}}};
CQ_Analytics.PersistedSessionStore.prototype.removeProperty=function(A){if(this.data==null){this.init()
}if(this.data[A]){delete this.data[A];
if(this.isPersisted(A)){this.persist()
}}this.fireEvent("update",A)
};
CQ_Analytics.PersistedSessionStore.prototype.clear=function(){var A=new CQ_Analytics.SessionPersistence();
A.remove(this.getStoreKey());
this.data=null
};
if(!CQ_Analytics.ClientContextMgr){CQ_Analytics.ClientContextMgr=function(){this.clientcontext=null;
this.clientcontextToServer=null;
this.stores={};
this.data=null;
this.config=null;
this.isConfigLoaded=false;
this.areStoresLoaded=false
};
CQ_Analytics.ClientContextMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ClientContextMgr.prototype.STOREKEY="CLIENTCONTEXT";
CQ_Analytics.ClientContextMgr.prototype.STORENAME="clientcontext";
CQ_Analytics.ClientContextMgr.prototype.INITIALIZATION_EVENT_TIMER=1000;
CQ_Analytics.ClientContextMgr.prototype.CONFIG_PATH=CQ_Analytics.Utils.externalize("/etc/clientcontext/legacy/config.json",true);
CQ_Analytics.ClientContextMgr.prototype.init=function(){this.clientcontext={};
this.clientcontextToServer={};
var A=new CQ_Analytics.SessionPersistence();
var B=A.get(this.getStoreKey());
if(B){this.data=this.parse(B)
}else{this.data={}
}this.initialized=true;
this.fireEvent("initialize",this)
};
CQ_Analytics.ClientContextMgr.prototype.getSessionId=function(){if(!this.data.sessionId){this.setSessionId(CQ_Analytics.Utils.getUID())
}return this.data.sessionId
};
CQ_Analytics.ClientContextMgr.prototype.setSessionId=function(A){if(A){this.setProperty("sessionId",A)
}};
CQ_Analytics.ClientContextMgr.prototype.getVisitorId=function(){return this.data.visitorId
};
CQ_Analytics.ClientContextMgr.prototype.setVisitorId=function(A){this.setProperty("visitorId",A)
};
CQ_Analytics.ClientContextMgr.prototype.getId=function(){var A=this.getVisitorId();
if(!A){return this.getSessionId()
}return A
};
CQ_Analytics.ClientContextMgr.prototype.isAnonymous=function(){var A=this.getVisitorId();
return(!A)
};
CQ_Analytics.ClientContextMgr.prototype.isMode=function(A){return CQ_Analytics.ClientContextMgr.ServerStorage.isMode(A)
};
CQ_Analytics.ClientContextMgr.prototype.get=function(A){if(this.clientcontext==null){this.init()
}if(A){return this.clientcontextToServer
}return this.clientcontext
};
CQ_Analytics.ClientContextMgr.prototype.register=function(C){if(this.clientcontext==null){this.init()
}var A=this;
this.clientcontext[C.getName()]=C.getData();
this.stores[C.getName()]=C;
CQ_Analytics.StoreRegistry.register(C);
var B=this.getStoreConfig(C.getName());
if(B.stats!==false&&B.stats!="false"){this.clientcontextToServer[C.getName()]=C.getData(B.excludedFromStats)
}if(this.initTimer){window.clearTimeout(this.initTimer);
this.initTimer=null
}this.initTimer=window.setTimeout(function(){A.fireEvent("storesinitialize");
A.areStoresInitialized=true
},this.INITIALIZATION_EVENT_TIMER);
C.addListener("update",function(){A.update(C)
});
CQ_Analytics.ClientContextMgr.ServerStorage.handleStoreRegistration(C);
this.addListener("clear",function(){C.clear()
});
this.fireEvent("storeregister",C);
this.fireEvent("storeupdate",C)
};
CQ_Analytics.ClientContextMgr.prototype.update=function(B){if(this.clientcontext==null){this.init()
}this.clientcontext[B.getName()]=B.getData();
var A=this.getStoreConfig(B.getName());
if(A.stats!==false&&A.stats!="false"){this.clientcontextToServer[B.getName()]=B.getData(A.excludedFromStats)
}this.fireEvent("storeupdate",B)
};
CQ_Analytics.ClientContextMgr.prototype.startPosting=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.startPosting()
};
CQ_Analytics.ClientContextMgr.prototype.stopPosting=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.stopPosting()
};
CQ_Analytics.ClientContextMgr.prototype.post=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.post()
};
CQ_Analytics.ClientContextMgr.prototype.getCCMToJCR=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.getCCMToJCR()
};
CQ_Analytics.ClientContextMgr.prototype.getName=function(){return this.STORENAME
};
CQ_Analytics.ClientContextMgr.prototype.clear=function(){this.clientcontext=null;
this.clientcontextToServer=null;
this.fireEvent("clear")
};
CQ_Analytics.ClientContextMgr.prototype.getRegisteredStore=function(A){return this.stores&&this.stores[A]?this.stores[A]:null
};
CQ_Analytics.ClientContextMgr.prototype.loadConfig=function(c,autoConfig){var setConfig=function(ccm,config){ccm.config=config;
ccm.isConfigLoaded=true;
ccm.fireEvent("configloaded");
ccm.fireEvent("storesloaded");
ccm.areStoresLoaded=true
};
if(c){setConfig(this,c)
}else{if(!autoConfig){var params={};
params.path=CQ_Analytics.Utils.getPagePath();
params.cq_ck=new Date().valueOf();
var url=this.CONFIG_PATH;
url+="?"+CQ_Analytics.Utils.urlEncode(params);
CQ_Analytics.Utils.load(url,function(data,status,response){var config={};
try{config=eval("config = "+response.responseText)
}catch(error){}setConfig(this,config)
},this)
}else{setConfig(this,{})
}}};
CQ_Analytics.ClientContextMgr.prototype.getConfig=function(){return this.config
};
CQ_Analytics.ClientContextMgr.prototype.getStoreConfig=function(A){if(this.config&&this.config.configs&&this.config.configs[A]&&this.config.configs[A]["store"]){return this.config.configs[A]["store"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getEditConfig=function(A){if(this.config&&this.config.configs&&this.config.configs[A]&&this.config.configs[A]["edit"]){return this.config.configs[A]["edit"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getUIConfig=function(A){if(this.config&&this.config.configs&&this.config.configs[A]&&this.config.configs[A]["ui"]){return this.config.configs[A]["ui"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getInitialData=function(A){if(this.config&&this.config.data&&this.config.data[A]){return this.config.data[A]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getStores=function(){return this.stores
};
CQ_Analytics.ClientContextMgr.prototype.onReady=function(B,A){if(B){if(this.areStoresLoaded){B.call(A)
}else{this.addListener("storesloaded",B,A)
}}};
CQ_Analytics.ClientContextMgr=CQ_Analytics.CCM=new CQ_Analytics.ClientContextMgr();
CQ_Analytics.ClickstreamcloudMgr=CQ_Analytics.CCM;
CQ_Analytics.ContextCloudMgr=CQ_Analytics.CCM;
CQ_Analytics.ClientContextMgr.PATH=null;
CQ_Analytics.ClientContextMgr.getClientContextURL=function(A){return CQ_Analytics.ClientContextMgr.PATH+A
};
window.setTimeout(function(){CQ_Analytics.CCM.init()
},1);
CQ_Analytics.Utils.addListener(window,"unload",function(){try{for(var B in CQ_Analytics.ClientContextMgr){delete CQ_Analytics.ClientContextMgr[B]
}CQ_Analytics.ClientContextMgr=null
}catch(A){}CQ_Analytics.CCM=null
})
}if(CQ_Analytics.ClientContextMgr&&!CQ_Analytics.ClientContextMgr.ServerStorage){CQ_Analytics.ClientContextMgr.ServerStorage=function(){this.posting=false;
this.initialized=false
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_PAGELOAD=1;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_TIMER=2;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_DATAUPDATE=4;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_TIMER=600;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PROCESS_TIMER=60;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE=6;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PATH="/var/statistics/";
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.init=function(){if(this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER)){var A=this;
var B=function(){A.timer=window.setInterval(function(){try{var D=parseInt(A.data.lastPost);
var F=false;
if(isNaN(D)){F=true
}else{var E=new Date().getTime();
if(E>D+CQ_Analytics.ClientContextMgr.ServerStorage.POST_TIMER*1000){F=true
}}}catch(C){}if(F){A.post()
}},CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER*1000)
};
B.call(this)
}this.initialized=true
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.isMode=function(A){return(CQ_Analytics.CCM.POST_MODE&A)>0
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.handleStoreRegistration=function(A){if(!this.initialized){this.init()
}if(this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE)){A.addListener("persist",function(){CQ_Analytics.ClientContextMgr.ServerStorage.post(A)
})
}};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.startPosting=function(){this.posting=true
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.stopPosting=function(){this.posting=false
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.post=function(D,F){if(this.posting||F){try{var G=this.getCCMToJCR(D);
var E=CQ_Analytics.Utils.getTimestamp();
G["./jcr:primaryType"]="nt:unstructured";
G["./sessionId"]=CQ_Analytics.CCM.getSessionId();
var C=this.POST_PATH+"clientcontext/";
if(CQ_Analytics.CCM.isAnonymous()){var A=CQ_Analytics.Utils.insert(CQ_Analytics.CCM.getId(),2,"/");
C+="anonymous/"+A+"/"+E
}else{C+="users/"+CQ_Analytics.CCM.getId()+"/"+E
}CQ_Analytics.Utils.post(C,null,G);
this.lastPost=E
}catch(B){}}};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.getCCMToJCR=function(G){var C=CQ_Analytics.CCM.get(true);
var E={};
for(var I in C){if(!G||I==G){var A=C[I],B=encodeURIComponent(I);
var F=typeof A;
if(F=="object"){for(var D in A){var H=A[D];
D=D.replace(":","/");
E["./"+I+"/./"+D]=H
}}else{E["./"+I]=A
}}}return E
};
CQ_Analytics.ClientContextMgr.ServerStorage=new CQ_Analytics.ClientContextMgr.ServerStorage();
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_PAGELOAD=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_PAGELOAD;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_DATAUPDATE=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE;
CQ_Analytics.ClickstreamcloudMgr.POST_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_PROCESS_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE;
CQ_Analytics.ClickstreamcloudMgr.POST_PATH=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PATH
}if(!CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr=function(){this.SEGMENTATION_ROOT="/etc/segmentation";
this.SEGMENT_SELECTOR=".segment.js";
this.SEGMENTATION_SCRIPT_LOADER="cq-segmentation-loader";
this.segments={};
this.boosts={};
var A=this;
this.fireUpdate=function(){A.fireEvent("update")
};
this.init()
};
CQ_Analytics.SegmentMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SegmentMgr.prototype.STORENAME="segments";
CQ_Analytics.SegmentMgr.prototype.register=function(A,C,B){this.segments[A]=C;
this.boosts[A]=!isNaN(B)?parseInt(B):0;
this.fireUpdate()
};
CQ_Analytics.SegmentMgr.prototype.resolveArray=function(E,G,B){G=G||CQ_Analytics.ClientContextMgr.get();
if(!(E instanceof Array)){return this.resolve(E,G)
}B=(B=="AND"?"AND":"OR");
var A=(B=="AND");
for(var D=0;
D<E.length;
D++){var F=E[D];
var C=this.resolve(F,G);
if(B=="AND"){if(C!==true){return C
}}else{if(C===true){return true
}}}return A
};
CQ_Analytics.SegmentMgr.prototype.resolve=function(segmentPath,clientcontext){clientcontext=clientcontext||CQ_Analytics.ClientContextMgr.get();
if(!segmentPath){return false
}if(segmentPath instanceof Array){return this.resolveArray(segmentPath,clientcontext)
}if(segmentPath.indexOf(this.SEGMENTATION_ROOT)!=0){return false
}if(segmentPath==this.SEGMENTATION_ROOT){return true
}if(!this.segments[segmentPath]){return true
}var parent=segmentPath.substring(0,segmentPath.lastIndexOf("/"));
if(parent.indexOf(this.SEGMENTATION_ROOT)==0){var pres=this.resolve(parent,clientcontext);
if(pres!==true){return pres
}}var rules="function(clientcontext, contextcloud, clickstreamcloud) { return true ";
rules+=" && ( "+this.segments[segmentPath]+" ) ";
rules+=";}";
var res=true;
try{var f=null;
eval("f = "+rules+"");
var e=(f==null||f(clientcontext,clientcontext,clientcontext));
res=res&&(e===true)
}catch(error){return"Unresolved - Error while evaluating segment "+segmentPath+" : "+error.message
}return res
};
CQ_Analytics.SegmentMgr.prototype.getResolved=function(C){C=C||CQ_Analytics.ClientContextMgr.get();
var A=new Array();
for(var B in this.segments){if(this.resolve(B,C)===true){A.push(B)
}}return A
};
CQ_Analytics.SegmentMgr.prototype.getMaxBoost=function(D,F){if(!(D instanceof Array)){return this.getBoost(D)
}var B=0;
for(var C=0;
C<D.length;
C++){var E=D[C];
if(this.resolve(E,F)===true){var A=this.boosts[E]||0;
if(A>B){B=A
}}}return B
};
CQ_Analytics.SegmentMgr.prototype.getBoost=function(A){if(!(A instanceof Array)){A=[A]
}return this.boosts[A]||0
};
CQ_Analytics.SegmentMgr.prototype.reload=function(path){var url=path;
if(!url){url=this.SEGMENTATION_ROOT
}if(url){if(url.indexOf(this.SEGMENT_SELECTOR)==-1){url+=this.SEGMENT_SELECTOR
}try{CQ_Analytics.Utils.load(url,function(config,status,response){if(response&&response.responseText){eval(response.responseText)
}},this);
var response=CQ.HTTP.get(scripts[i].src)
}catch(err){}}};
CQ_Analytics.SegmentMgr.prototype.getSessionStore=function(){return this
};
CQ_Analytics.SegmentMgr.prototype.getProperty=function(A){return A
};
CQ_Analytics.SegmentMgr.prototype.getLink=function(A){return A+".html"
};
CQ_Analytics.SegmentMgr.prototype.getLabel=function(C){if(C){var B=C;
var A=B.lastIndexOf("/");
if(A!=-1){B=B.substring(A+1,B.length)
}var D=this.resolve(C);
if(D===true){return B
}else{if(D!==true){return'<span class="invalid" title="'+D+'" alt="'+D+'">'+B+"</span>"
}}}return C
};
CQ_Analytics.SegmentMgr.prototype.getPropertyNames=function(){return this.getResolved()
};
CQ_Analytics.SegmentMgr=new CQ_Analytics.SegmentMgr();
CQ_Analytics.SegmentMgr.loadSegments=function(A){CQ_Analytics.SegmentMgr.areSegmentsLoaded=false;
CQ.shared.HTTP.get(CQ.shared.HTTP.externalize(A+".segment.js"));
CQ_Analytics.SegmentMgr.areSegmentsLoaded=true;
this.fireEvent("segmentsload")
};
CQ_Analytics.SegmentMgr.renderer=function(A,C){if(A&&A.STORENAME==CQ_Analytics.SegmentMgr.STORENAME){var E=A.getPropertyNames();
var F=$CQ("<div>");
for(var D=0;
D<E.length;
D++){var B=E[D];
F.append($CQ("<span>").attr("title",A.getProperty(B)).append($CQ("<a>").attr("href",_g.shared.HTTP.externalize(A.getLink(B))).attr("title",A.getProperty(B)).html(A.getLabel(B))))
}$CQ("#"+C).children().remove();
$CQ("#"+C).append(F)
}};
CQ_Analytics.ClientContextMgr.addListener("storeupdate",CQ_Analytics.SegmentMgr.fireUpdate);
CQ_Analytics.Utils.addListener(window,"unload",function(){try{for(var B in CQ_Analytics.SegmentMgr){delete CQ_Analytics.SegmentMgr[B]
}}catch(A){}CQ_Analytics.SegmentMgr=null
})
}if(!CQ_Analytics.StrategyMgr){CQ_Analytics.StrategyMgr=function(){this.strategies={}
};
CQ_Analytics.StrategyMgr.prototype={};
CQ_Analytics.StrategyMgr.prototype.isRegistered=function(A){return !!this.strategies[A]
};
CQ_Analytics.StrategyMgr.prototype.register=function(B,A){if(typeof A=="function"){this.strategies[B]=A
}};
CQ_Analytics.StrategyMgr.prototype.choose=function(B,A){if(A.length==1){return A[0]
}if(this.strategies[B]){return this.strategies[B].call(this,A)
}};
CQ_Analytics.StrategyMgr=new CQ_Analytics.StrategyMgr()
}CQ_Analytics.StrategyMgr.register("clickstream-score",function(H){if(H.length==1){return H[0]
}var A=[];
if(CQ_Analytics.TagCloudMgr){var K=CQ_Analytics.TagCloudMgr.getTags();
K=K||{};
var J=-1;
for(var E=0;
E<H.length;
E++){var G=0;
var I=H[E].tags;
if(I){for(var D=0;
D<I.length;
D++){var F=I[D].tagID;
G+=parseInt(K[F])||0
}}if(G==J){A.push(H[E])
}else{if(G>J){A=[];
A.push(H[E]);
J=G
}}}}else{A=H
}if(A.length==1){return A[0]
}var B=null;
if(CQ_Analytics.PageDataMgr){B=CQ_Analytics.PageDataMgr.getProperty("random")
}if(!B){B=window.CQ_StrategyRandom
}if(!B){B=window.CQ_StrategyRandom=Math.random()
}if(parseFloat(B)>1){B=1/B
}if(parseFloat(B)==1){B=0
}var C=Math.floor(B*A.length);
return A[C]
});
CQ_Analytics.StrategyMgr.register("first",function(A){return A[0]
});
CQ_Analytics.StrategyMgr.register("random",function(C){var A=null;
if(CQ_Analytics.PageDataMgr){A=CQ_Analytics.PageDataMgr.getProperty("random")
}if(!A){A=window.CQ_StrategyRandom
}if(!A){A=window.CQ_StrategyRandom=Math.random()
}if(parseFloat(A)>1){A=1/A
}if(parseFloat(A)==1){A=0
}var B=Math.floor(A*C.length);
return C[B]
});
if(!CQ_Analytics.ClickstreamcloudUI){CQ_Analytics.ClickstreamcloudUI=function(){this.SHOW_BOX_COOKIE="show-clickstreamcloud";
this.BOX_ID="clickstreamcloud";
this.box=null;
this.top=null;
this.sections=null;
this.bottom=null;
this.nbSection=0;
this.isRendered=false
};
CQ_Analytics.ClickstreamcloudUI.prototype=new CQ_Analytics.Observable();
CQ_Analytics.ClickstreamcloudUI.prototype.createBox=function(C){var A=this;
this.box=document.createElement("div");
this.box.id=this.BOX_ID;
this.box.style.display="none";
var D=document.createElement("div");
this.box.appendChild(D);
this.top=document.createElement("div");
this.top.className="ccl-header ccl-header-close";
this.addListener("close",function(){A.onVisibilityChange()
});
this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createStaticLink("","#ccl",""));
this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Close"),function(){A.box.style.display="none";
A.fireEvent("close")
},{className:"ccl-close"},"#ccl"));
if(this.hideLoadLink===false){this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Load"),function(){A.fireEvent("loadclick")
},{className:"ccl-load"},"#ccl"))
}if(this.hideEditLink===false){this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Edit"),function(){A.fireEvent("editclick")
},{className:"ccl-edit"},"#ccl"))
}D.appendChild(this.top);
this.sections=document.createElement("div");
D.appendChild(this.sections);
this.bottom=document.createElement("div");
this.bottom.className="ccl-spacer";
D.appendChild(this.bottom);
var B=RUZEE.ShadedBorder.create({corner:10,border:2,shadow:21});
B.render(D);
C.appendChild(this.box);
if(D.onresize){this.addListener("show",D.onresize,D)
}};
CQ_Analytics.ClickstreamcloudUI.prototype.init=function(B){B=B||{};
this.parentId=B.target;
var C=document.getElementById(this.parentId);
if(C){this.version=B.version||CQ_Analytics.ClickstreamcloudUI.VERSION_FULL;
this.hideEditLink=B.hideEditLink!==false;
this.hideLoadLink=B.hideLoadLink!==false;
this.disableKeyShortcut=B.disableKeyShortcut!==false;
if(CQ_Analytics.Cookie.read(this.SHOW_BOX_COOKIE)=="true"){this.show()
}if(!this.disableKeyShortcut){var A=this;
CQ_Analytics.Utils.registerDocumentEventHandler("onkeydown",CQ_Analytics.Utils.eventWrapper(function(D,E){if(D.ctrlKey&&D.altKey&&E=="C".charCodeAt(0)){A.toggle()
}}))
}}};
CQ_Analytics.ClickstreamcloudUI.prototype.onVisibilityChange=function(){CQ_Analytics.Cookie.set(this.SHOW_BOX_COOKIE,this.isVisible()?"true":"false",365)
};
CQ_Analytics.ClickstreamcloudUI.prototype.isVisible=function(){return(this.box!=null&&this.box.style.display!="none")
};
CQ_Analytics.ClickstreamcloudUI.prototype.toggle=function(){if(this.isVisible()){this.hide()
}else{this.show()
}};
CQ_Analytics.ClickstreamcloudUI.prototype.register=function(D,A,C){var B=function(){var F=new CQ_Analytics.ClickstreamcloudUI.Section(D,this.version,A||{},C);
var E=CQ_Analytics.CCM.getUIConfig(D.getName())||{};
this.addSection(F,E.rank||null);
D.addListener("update",F.reset,F)
};
if(this.isRendered){B.call(this)
}else{this.addListener("render",B,this)
}};
CQ_Analytics.ClickstreamcloudUI.prototype.addSection=function(C,A){if(A<this.nbSection&&this.nbSection>0){var B=this.nbSection;
var D=this.sections.lastChild;
while(B>A+1){B--;
D=D.previousSibling
}this.sections.insertBefore(C.get(),D)
}else{this.sections.appendChild(C.get())
}this.nbSection++
};
CQ_Analytics.ClickstreamcloudUI.prototype.removeSection=function(A){this.sections.removeChild(A);
this.nbSection--
};
CQ_Analytics.ClickstreamcloudUI.prototype.show=function(){if(!this.isRendered){var A=document.getElementById(this.parentId);
if(A){this.createBox(A);
this.isRendered=true;
this.fireEvent("render")
}}this.box.style.display="block";
this.onVisibilityChange();
this.fireEvent("show")
};
CQ_Analytics.ClickstreamcloudUI.prototype.hide=function(){if(this.box!=null){this.box.style.display="none"
}this.onVisibilityChange()
};
CQ_Analytics.ClickstreamcloudUI.prototype.MODE_TEXTFIELD="textfield";
CQ_Analytics.ClickstreamcloudUI.prototype.MODE_LINK="link";
CQ_Analytics.ClickstreamcloudUI.prototype.MODE_STATIC="static";
CQ_Analytics.ClickstreamcloudUI.prototype.VERSION_FULL="full";
CQ_Analytics.ClickstreamcloudUI.prototype.VERSION_LIGHT="light";
CQ_Analytics.ClickstreamcloudUI.prototype.Section=function(D,A,B,C){this.contentbox=null;
this.section=null;
this.sessionStore=D;
this.version=A;
this.title=B.title;
this.mode=B.mode||CQ_Analytics.ClickstreamcloudUI.MODE_TEXTFIELD;
this.renderer=C;
this.sort=function(J,E){if(!E||!J){return J
}var I=[];
for(var H=0;
H<E.length;
H++){var G=E[H];
var F=$CQ.inArray(G,J);
if(F>-1){I.push(G);
J=$CQ.merge(J.slice(0,F-1),J.slice(F+1,J.length))
}}I=$CQ.merge(I,J);
return I
};
this.buildContentBox=function(){if(this.renderer){this.contentbox=this.renderer.call(this.sessionStore)
}else{this.contentbox=document.createElement("p");
this.contentbox.className="ccl-sectioncontent";
var G=CQ_Analytics.CCM.getStoreConfig(this.sessionStore.getName());
var I=CQ_Analytics.CCM.getUIConfig(this.sessionStore.getName());
var L=this.sessionStore.getPropertyNames(G.invisible);
L=this.sort(L,I.order);
var J=this.sessionStore.getData();
if(this.version==CQ_Analytics.ClickstreamcloudUI.VERSION_LIGHT){var H=new Array();
var N=new Array();
for(var K=0;
K<L.length;
K++){var F=L[K];
var Q=this.sessionStore.getProperty(F);
if(Q==F){H.push(F);
N.push(F)
}else{var P=CQ.shared.XSS.getXSSTablePropertyValue(J,F);
P=CQ_Analytics.Variables.replaceVariables(P);
if(CQ_Analytics.Utils.indexOf(H,P)==-1){H.push(P);
F=CQ.shared.XSS.KEY_REGEXP.test(F)?F.substring(0,F.length-4):F;
N.push(F)
}}}for(var K=0,E=0;
K<H.length;
K++){var F=N[K];
var O=H[K];
O=CQ_Analytics.Variables.replaceVariables(O);
if(this.mode==CQ_Analytics.ClickstreamcloudUI.MODE_LINK){var M=CQ_Analytics.Utils.externalize(this.sessionStore.getLink(F),true);
this.addLink(this.sessionStore.getLabel(F),M,"ccl-data-light",F)
}else{this.addStaticText(O,"ccl-data-light",F)
}E++;
if(E>3){E=0;
this.addLineBreak()
}}}else{for(var K=0;
K<L.length;
K++){var F=L[K];
var P=CQ.shared.XSS.getXSSTablePropertyValue(J,F);
F=CQ.shared.XSS.KEY_REGEXP.test(F)?F.substring(0,F.length-4):F;
if(this.mode==CQ_Analytics.ClickstreamcloudUI.MODE_TEXTFIELD){this.addNameValueField(this.sessionStore.getLabel(F),P,F,"ccl-data",F)
}else{if(this.mode==CQ_Analytics.ClickstreamcloudUI.MODE_LINK){var M=CQ_Analytics.Utils.externalize(this.sessionStore.getLink(F),true);
this.addLink(this.sessionStore.getLabel(F),M,"ccl-data",F)
}else{this.addStaticText(this.sessionStore.getLabel(F),"ccl-data",F)
}}this.contentbox.appendChild(document.createTextNode(" "))
}}}};
this.buildSection=function(){if(this.contentbox==null){this.buildContentBox()
}if(this.section==null){this.section=document.createElement("div")
}var F=document.createElement("div");
F.className="ccl-header";
this.section.appendChild(F);
var E=document.createElement("div");
E.innerHTML=CQ.shared.I18n.getVarMessage(this.title);
E.className="ccl-title";
F.appendChild(E);
this.section.appendChild(this.contentbox)
}
};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype=new CQ_Analytics.Observable();
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.get=function(){if(this.section==null){this.buildSection()
}return this.section
};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.reset=function(){if(!this.isReseting){this.isReseting=true;
if(this.section!=null){while(this.section.hasChildNodes()){this.section.removeChild(this.section.firstChild)
}this.contentbox=null
}this.buildSection();
this.isReseting=false
}};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addNameValueField=function(C,D,B,A,E){this.contentbox.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createNameValue(B,D,A,E))
};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addLink=function(E,C,A,D){if(C){var B=document.createElement("span");
B.className=A||"ccl-data";
B.title=D;
B.alt=D;
B.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createStaticLink(E,C,D));
this.contentbox.appendChild(B)
}else{this.addStaticText(E)
}};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addStaticText=function(C,A,B){if(C){this.contentbox.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createText(C,A,B))
}};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addLineBreak=function(){this.contentbox.appendChild(document.createElement("br"))
};
CQ_Analytics.ClickstreamcloudUI=new CQ_Analytics.ClickstreamcloudUI();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.init(CQ_Analytics.CCM.getConfig()["ui"])
})
}if(!CQ_Analytics.PageDataMgr){CQ_Analytics.PageDataMgr=function(){};
CQ_Analytics.PageDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.PageDataMgr.prototype.STORENAME="pagedata";
CQ_Analytics.PageDataMgr.prototype.FORCE_EXPERIENCE_COOKIE="cq-forceexperience";
CQ_Analytics.PageDataMgr.prototype.init=function(){this.data={};
for(var A in this.initProperty){this.data[A]=this.initProperty[A]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.PageDataMgr.prototype.getLabel=function(A){return A
};
CQ_Analytics.PageDataMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.PageDataMgr.prototype.setExperience=function(A){CQ.shared.HTTP.setCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,A,"/")
};
CQ_Analytics.PageDataMgr.prototype.getExperience=function(){return CQ.shared.HTTP.getCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,"/")
};
CQ_Analytics.PageDataMgr.prototype.clearExperience=function(){CQ.shared.HTTP.clearCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,"/")
};
CQ_Analytics.PageDataMgr=new CQ_Analytics.PageDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.loadInitProperties(CQ_Analytics.CCM.getInitialData(this.getName()));
this.init();
CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()));
CQ_Analytics.CCM.register(this)
},CQ_Analytics.PageDataMgr)
}CQ_Analytics.BrowserInfo=function(){var F=navigator.userAgent.toLowerCase();
var C=function(H){return H.test(F)
};
var E=function(){if(C(/opera/)){return{browserFamily:"Opera",browserVersion:""}
}if(C(/chrome/)){return{browserFamily:"Chrome",browserVersion:""}
}if(C(/safari/)){if(C(/applewebkit\/4/)){return{browserFamily:"Safari",browserVersion:"2"}
}if(C(/version\/3/)){return{browserFamily:"Safari",browserVersion:"3"}
}if(C(/version\/4/)){return{browserFamily:"Safari",browserVersion:"4"}
}if(C(/version\/5/)){return{browserFamily:"Safari",browserVersion:"5"}
}if(C(/version\/6/)){return{browserFamily:"Safari",browserVersion:"6"}
}return{browserFamily:"Safari",browserVersion:"7 or higher"}
}if(C(/webkit/)){return{browserFamily:"WebKit",browserVersion:""}
}if(C(/msie/)){if(C(/msie 6/)){return{browserFamily:"IE",browserVersion:"6"}
}if(C(/msie 7/)){return{browserFamily:"IE",browserVersion:"7"}
}if(C(/msie 8/)){return{browserFamily:"IE",browserVersion:"8"}
}if(C(/msie 9/)){return{browserFamily:"IE",browserVersion:"9"}
}if(C(/msie 10/)){return{browserFamily:"IE",browserVersion:"10"}
}return{browserFamily:"IE",browserVersion:"11 or higher"}
}if(C(/gecko/)){if(C(/rv:1\.8/)){return{browserFamily:"Firefox",browserVersion:"2"}
}if(C(/rv:1\.9/)){return{browserFamily:"Firefox",browserVersion:"3"}
}if(C(/rv:2.0/)){return{browserFamily:"Firefox",browserVersion:"4"}
}if(C(/rv:5./)){return{browserFamily:"Firefox",browserVersion:"5"}
}if(C(/rv:6./)){return{browserFamily:"Firefox",browserVersion:"6"}
}if(C(/rv:7./)){return{browserFamily:"Firefox",browserVersion:"7"}
}if(C(/rv:8./)){return{browserFamily:"Firefox",browserVersion:"8"}
}if(C(/rv:9./)){return{browserFamily:"Firefox",browserVersion:"9"}
}return{browserFamily:"Firefox",browserVersion:"10 or higher"}
}var H=C(/adobeair/);
if(H){return{browserFamily:"Adobe AIR",browserVersion:""}
}return{browserFamily:"Unresolved",browserVersion:"Unresolved"}
};
var D=function(){if(C(/windows 98|win98/)){return"Windows 98"
}if(C(/windows nt 5.0|windows 2000/)){return"Windows 2000"
}if(C(/windows nt 5.1|windows xp/)){return"Windows XP"
}if(C(/windows nt 5.2/)){return"Windows Server 2003"
}if(C(/windows nt 6.0/)){return"Windows Vista"
}if(C(/windows nt 6.1/)){return"Windows 7"
}if(C(/windows nt 4.0|winnt4.0|winnt/)){return"Windows NT 4.0"
}if(C(/windows me/)){return"Windows ME"
}if(C(/mac os x/)){if(C(/ipad/)||C(/iphone/)){return"iOS"
}return"Mac OS X"
}if(C(/macintosh|mac os/)){return"Mac OS"
}if(C(/android/)){return"Android"
}if(C(/linux/)){return"Linux"
}return"Unresolved"
};
var B=function(){if(C(/ipad/)){return"iPad"
}if(C(/iphone/)){return"iPhone"
}if(C(/mobi/)){return"Mobile"
}return"Desktop"
};
var A=E.call();
this.browserFamily=A.browserFamily;
this.browserVersion=A.browserVersion;
this.browserName=this.browserFamily+" "+this.browserVersion;
this.OSName=D.call();
this.deviceType=B.call();
this.ua=F;
var G=/^https/i.test(window.location.protocol);
this.screenResolution=screen.width+"x"+screen.height
};
CQ_Analytics.BrowserInfo.prototype={getBrowserName:function(){return this.browserName
},getBrowserFamily:function(){return this.browserFamily
},getBrowserVersion:function(){return this.browserVersion
},getOSName:function(){return this.OSName
},getScreenResolution:function(){return this.screenResolution
},getDeviceType:function(){return this.deviceType
},getUserAgent:function(){return this.ua
},isMobile:function(A){if(!A){A=this.getDeviceType()
}A=A?A.toLowerCase():"desktop";
return A!="desktop"
},isIE:function(A){return this.getBrowserFamily()=="IE"&&(A?this.getBrowserVersion()==A:true)
},isIE6:function(){return this.isIE("6")
},isIE7:function(){return this.isIE("7")
},isIE8:function(){return this.isIE("8")
},isIE9:function(){return this.isIE("9")
}};
CQ_Analytics.BrowserInfoInstance=new CQ_Analytics.BrowserInfo();
if(!CQ_Analytics.MousePositionMgr){CQ_Analytics.MousePositionMgr=function(){this.position={x:0,y:0};
this.getPageX=function(C){var B=C.pageX;
if(!B&&0!==B){B=C.clientX||0
}return B
};
this.getPageY=function(B){var C=B.pageY;
if(!C&&0!==C){C=B.clientY||0
}return C
};
var A=this;
this.timer=null;
$CQ(document).bind("mousemove",function(E,D,C,H){var F=E||window.event;
if(F){if(!A.timer){var B=A.getPageX(F);
var G=A.getPageY(F);
A.timer=setTimeout(function(){A.setPosition(B,G);
A.timer=null
},500)
}}});
this.init()
};
CQ_Analytics.MousePositionMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.MousePositionMgr.prototype.STORENAME="mouseposition";
CQ_Analytics.MousePositionMgr.prototype.setPosition=function(A,B){this.position.x=A;
this.position.y=B;
this.fireEvent("update")
};
CQ_Analytics.MousePositionMgr.prototype.getProperty=function(A){return this.position[A]
};
CQ_Analytics.MousePositionMgr.prototype.getLabel=function(A){return A
};
CQ_Analytics.MousePositionMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.MousePositionMgr.prototype.getPropertyNames=function(){var A=new Array();
for(var B in this.position){A.push(B)
}return A
};
CQ_Analytics.MousePositionMgr.prototype.getSessionStore=function(){return this
};
CQ_Analytics.MousePositionMgr.prototype.getData=function(A){return this.position
};
CQ_Analytics.MousePositionMgr.prototype.clear=function(){this.position={}
};
CQ_Analytics.MousePositionMgr=new CQ_Analytics.MousePositionMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.MousePositionMgr)
}if(!CQ_Analytics.EventDataMgr){CQ_Analytics.EventDataMgr=function(){};
CQ_Analytics.EventDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.EventDataMgr.prototype.STORENAME="eventdata";
CQ_Analytics.EventDataMgr.prototype.init=function(){this.data={};
for(var A in this.initProperty){this.data[A]=this.initProperty[A]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.EventDataMgr.prototype.getLabel=function(A){return A
};
CQ_Analytics.EventDataMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.EventDataMgr=new CQ_Analytics.EventDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.loadInitProperties(CQ_Analytics.CCM.getInitialData(this.getName()));
this.init();
CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()));
CQ_Analytics.CCM.register(this)
},CQ_Analytics.EventDataMgr)
}if(!window.CQ_Context){window.CQ_Context=function(){};
window.CQ_Context.prototype=new CQ_Analytics.Observable();
window.CQ_Context.prototype.getProfile=function(){return(function(){return{getUserId:function(){return this.getProperty("authorizableId")
},getDisplayName:function(){var A=this.getProperty("formattedName");
if(A){return A
}A=this.getProperty("displayName");
if(A){return A
}return this.getUserId()
},getFirstname:function(){return this.getProperty("givenName")
},getLastname:function(){return this.getProperty("familyName")
},getEmail:function(){return this.getProperty("email")
},getProperty:function(A){if(CQ_Analytics&&CQ_Analytics.ProfileDataMgr){return CQ_Analytics.ProfileDataMgr.getProperty(A)
}return""
},getProperties:function(){if(CQ_Analytics&&CQ_Analytics.ProfileDataMgr){return CQ_Analytics.ProfileDataMgr.getData()
}return{}
},getAvatar:function(){return this.getProperty("avatar")
},onUpdate:function(A,B){if(A&&CQ_Analytics&&CQ_Analytics.ProfileDataMgr){CQ_Analytics.ProfileDataMgr.addListener("update",A,B||this)
}}}
})()
};
window.CQ_Context=new window.CQ_Context()
}window.CQ_trackTeasersStats=true;
function initializeTeaserLoader(B,F,G,E,A,D){E=CQ.Ext&&(E=="true"||E===true);
if(window.CQ_Analytics){var C=function(){var M="/_jcr_content/par.html?wcmmode=disabled";
var K=CQ_Analytics.PageDataMgr.getExperience();
if(K){CQ_Analytics.PageDataMgr.clearExperience();
CQ_Analytics.Utils.loadElement(K+M,G);
return 
}var L=function(O){var Q="";
var U=new Array();
if(CQ_Analytics.SegmentMgr){var S=0;
for(var P=0;
P<B.length;
P++){var R=CQ.shared.HTTP.externalize(B[P].path+".html");
if(!B[P]["segments"]||B[P]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(B[P]["segments"])===true){var N=CQ_Analytics.SegmentMgr.getMaxBoost(B[P]["segments"]);
var T=[B[P]["title"],N,B[P].thumbnail,R];
if(O==B[P].path){Q+=CQ.I18n.getMessage('<b><a href="{3}" class="cq-teaser-segment-link"><img src="{2}" class="cq-teaser-decision-thumbnail cq-teaser-decision-match"></a>Teaser: {0} - match ( boost = {1} )</b><br>',T)
}else{Q+=CQ.I18n.getMessage('<a href="{3}" class="cq-teaser-segment-link"><img src="{2}" class="cq-teaser-decision-thumbnail cq-teaser-decision-match"></a>Teaser: {0} - match ( boost = {1} )<br>',T)
}if(N==S){U.push(B[P])
}else{if(N>S){U=new Array();
U.push(B[P]);
S=N
}}}else{var T=[B[P]["title"],B[P].thumbnail,R];
Q+=CQ.I18n.getMessage('<a href="{2}" class="cq-teaser-segment-link"><img src="{1}" class="cq-teaser-decision-thumbnail cq-teaser-decision-nomatch"></a>Teaser: {0} - no match<br>',T)
}}}Q+=CQ.I18n.getMessage("<br>Strategy <b>{0}</b> selected current teaser.<br>",F);
return Q
};
var J=null;
var H=null;
var I=function(){var U=new Array();
if(CQ_Analytics.SegmentMgr){var S=0;
for(var Q=0;
Q<B.length;
Q++){if(!B[Q]["segments"]||B[Q]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(B[Q]["segments"])===true){var N=CQ_Analytics.SegmentMgr.getMaxBoost(B[Q]["segments"]);
if(N==S){U.push(B[Q])
}else{if(N>S){U=new Array();
U.push(B[Q]);
S=N
}}}}}if(U.length>0){var T=U[0];
if(CQ_Analytics.StrategyMgr){var R=CQ_Analytics.StrategyMgr.choose(F,U);
if(R!=null){T=R
}}if(!J||J.path!=T.path){J=T;
var O=T.path+M;
O=CQ.shared.HTTP.addSelectors(O,CQ.shared.HTTP.getSelectors());
CQ_Analytics.Utils.loadTeaserElement(O,G);
if(window.CQ_trackTeasersStats&&A){if(!CQ_Analytics.loadedTeasersStack){CQ_Analytics.loadedTeasersStack=[];
$CQ(window).unload(function(){try{var V=CQ_Analytics.loadedTeasersStack;
if(V){delete CQ_Analytics.loadedTeasersStack;
var X=A;
for(var Y=0;
Y<V.length;
Y++){X=CQ.shared.HTTP.addParameter(X,"path",V[Y])
}CQ.shared.HTTP.get(X,function(){})
}}catch(W){}})
}CQ_Analytics.loadedTeasersStack.push(T.path)
}if(E){if(D){var P=CQ.WCM.getEditable(D);
if(P){if(P&&P.teaserToolTip){P.teaserToolTip.hide();
P.teaserToolTip.remove();
P.teaserToolTip=null
}else{P.on(CQ.wcm.EditRollover.EVENT_SHOW_HIGHTLIGHT,function(V){if(!this.teaserInfoButton){this.teaserInfoButton=CQ.Ext.DomHelper.append("CQ",{tag:"div",cls:"x-tool x-tool-help cq-teaser-tooltip-tool"},true);
this.teaserInfoButton.position("absolute");
this.teaserInfoButton.on("click",function(){if(!P.teaserToolTip){P.teaserToolTip=new CQ.Ext.Tip({html:L(J.path),title:CQ.I18n.getMessage("Selection decision"),width:450,autoHide:false,closable:true,height:300,floating:true,autoHeight:false,bodyStyle:"overflow-y: scroll;"})
}var W=this.getXY();
P.teaserToolTip.setPosition(W[0]-460,W[1]-100);
P.teaserToolTip.show()
})
}this.teaserInfoButton.anchorTo(V.frameBottom.getEl(),"tr",[-26,-15]);
this.teaserInfoButton.show()
});
P.on(CQ.wcm.EditRollover.EVENT_HIDE_HIGHTLIGHT,function(V){if(this.teaserInfoButton){this.teaserInfoButton.hide()
}})
}}}}}}else{if(E){var P=CQ.WCM.getEditable(D);
if(P&&P.teaserToolTip){P.teaserToolTip.hide();
P.teaserToolTip.remove();
P.teaserToolTip=null
}}CQ_Analytics.Utils.clearElement(G);
J=null
}};
I.call();
if(CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr.addListener("update",I)
}};
if(CQ_Analytics.CCM.areStoresInitialized){C.call(this)
}else{CQ_Analytics.CCM.addListener("storesinitialize",C)
}}}window.CQ_trackLandingPagesStats=true;
function initializeLandingPageLoader(F,D,E,C,A){C=CQ.Ext&&(C=="true"||C===true);
if(window.CQ_Analytics){var G=".html";
var B=function(){var I=null;
var H=function(){var K=new Array();
if(CQ_Analytics.SegmentMgr){var R=0;
for(var O=0;
O<F.length;
O++){if(!F[O]["segments"]||F[O]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(F[O]["segments"])===true){var U=CQ_Analytics.SegmentMgr.getMaxBoost(F[O]["segments"]);
if(U==R){K.push(F[O])
}else{if(U>R){K=new Array();
K.push(F[O]);
R=U
}}}}}if(K.length>0){var N=K[0];
if(CQ_Analytics.StrategyMgr){var S=CQ_Analytics.StrategyMgr.choose(D,K);
if(S!=null){N=S
}}if(!I||I.path!=N.path){var W=I;
I=N;
var M=CQ.shared.HTTP.get(N.path+G);
var X=M.responseText;
var P=function(n,Z){var g="";
if(n&&n.indexOf('id="'+Z+'"')!=-1){var f=n.indexOf('id="'+Z+'"');
var a=n.substring(0,f).lastIndexOf("<div");
var e=n.substring(a);
var m=e.split(new RegExp("<div","ig"));
var c=0;
for(var d=0;
d<m.length;
d++){c++;
var h=m[d].split(new RegExp("</div","ig"));
for(var b=1;
b<h.length;
b++){c--;
if(c==1){var Y=m[d].lastIndexOf("</div")+6;
Y=e.indexOf(m[d])+Y;
e=e.substring(0,Y);
e=e.substring(e.indexOf(">")+1,e.lastIndexOf("</div"));
return e
}}}}return""
};
X=P(X,E);
var T=$CQ("#"+E)[0];
var Q=function(a,Y){if(C){var b=CQ.WCM.getEditables();
for(var c in b){var Z=b[c];
if(!a||Z.path.indexOf(a)!=-1){Z.hide();
Z.remove()
}}}};
var L=document.createElement("div");
L.innerHTML=X;
if(W){$CQ("object",T).parent().fadeOut("slow");
$CQ("img",T).fadeOut("slow");
$CQ(T).slideUp("slow",function(){Q(W.path,false);
$CQ(T).children().remove();
var Y=T.insertBefore(L,T.firstChild);
$CQ(T).slideDown("slow",function(){if(C){CQ.DOM.executeScripts(CQ.Ext.get(L))
}})
})
}else{var J=T.insertBefore(L,T.firstChild);
$CQ(T).slideDown("slow",function(){if(C){CQ.DOM.executeScripts(CQ.Ext.get(L))
}})
}try{if(window.CQ_trackLandingPagesStats&&A){if(!CQ_Analytics.loadedLandingPagesStack){CQ_Analytics.loadedLandingPagesStack=[];
$CQ(window).unload(function(){try{var b=CQ_Analytics.loadedLandingPagesStack;
if(b){delete CQ_Analytics.loadedLandingPagesStack;
var Z=A;
for(var a=0;
a<b.length;
a++){Z=CQ.shared.HTTP.addParameter(Z,"path",b[a])
}CQ.shared.HTTP.get(Z,function(){})
}}catch(Y){}})
}CQ_Analytics.loadedLandingPagesStack.push(N.path)
}}catch(V){}}}else{CQ_Analytics.Utils.clearElement(E);
I=null
}};
H.call();
if(CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr.addListener("update",H)
}};
if(CQ_Analytics.ClickstreamcloudMgr){if(CQ_Analytics.ClickstreamcloudMgr.areStoresLoaded){B.call(this)
}else{CQ_Analytics.ClickstreamcloudMgr.addListener("storesloaded",B)
}}}}CQ_Analytics.PersistedJSONStore=function(){};
CQ_Analytics.PersistedJSONStore.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.PersistedJSONStore.prototype.STOREKEY="";
CQ_Analytics.PersistedJSONStore.prototype.STORENAME="";
CQ_Analytics.PersistedJSONStore.prototype.init=function(){var A=new CQ_Analytics.SessionPersistence();
var B=A.get(this.getStoreKey());
if(!B||B==""){this.data={};
for(var C in this.initProperty){this.data[C]=this.initProperty[C]
}}else{this.data=this.parse(B)
}this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.PersistedJSONStore.prototype.clear=function(){var A=new CQ_Analytics.SessionPersistence();
A.remove(this.getStoreKey());
this.data=null;
this.initProperty={}
};
CQ_Analytics.PersistedJSONStore.prototype.initJSON=function(B,C){if(!C){this.initProperty={}
}var A=function(G,D,F){for(var E in F){if(typeof F[E]=="object"){A(G,D?D+"/"+E:E,F[E])
}else{G[D?D+"/"+E:E]=F[E]
}}};
A(this.initProperty,null,B)
};
CQ_Analytics.PersistedJSONStore.prototype.getJSON=function(){var E=this.getData();
var C={};
for(var G in E){var D=G.split("/");
var F=C;
for(var B=0;
B<D.length;
B++){var A=D[B];
if(B==D.length-1){F[A]=E[G]
}else{F[A]=F[A]||{};
F=F[A]
}}}return C
};
CQ_Analytics.PersistedJSONStore.getInstance=function(A,C){var B=new CQ_Analytics.PersistedJSONStore();
B.STOREKEY=A.toUpperCase();
B.STORENAME=A;
B.initJSON(C);
return B
};
CQ_Analytics.PersistedJSONStore.registerNewInstance=function(A,B){var C=CQ_Analytics.PersistedJSONStore.getInstance(A,B);
C.init();
CQ_Analytics.CCM.register(C);
return C
};
CQ_Analytics.JSONStore=function(){};
CQ_Analytics.JSONStore.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.JSONStore.prototype.STOREKEY="";
CQ_Analytics.JSONStore.prototype.STORENAME="";
CQ_Analytics.JSONStore.prototype.init=function(){this.data={};
for(var A in this.initProperty){this.data[A]=this.initProperty[A]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.JSONStore.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.JSONStore.prototype.initJSON=function(B,C){if(!C){this.initProperty={}
}var A=function(G,D,F){for(var E in F){if(typeof F[E]=="object"){A(G,D?D+"/"+E:E,F[E])
}else{G[D?D+"/"+E:E]=F[E]
}}};
A(this.initProperty,null,B)
};
CQ_Analytics.JSONStore.prototype.getJSON=function(){var E=this.getData();
var C={};
for(var G in E){var D=G.split("/");
var F=C;
for(var B=0;
B<D.length;
B++){var A=D[B];
if(B==D.length-1){F[A]=E[G]
}else{F[A]=F[A]||{};
F=F[A]
}}}return C
};
CQ_Analytics.JSONStore.getInstance=function(A,C){var B=new CQ_Analytics.JSONStore();
B.STOREKEY=A.toUpperCase();
B.STORENAME=A;
B.initJSON(C);
return B
};
CQ_Analytics.JSONStore.registerNewInstance=function(A,B){var C=CQ_Analytics.JSONStore.getInstance(A,B);
C.init();
CQ_Analytics.CCM.register(C);
return C
};
CQ_Analytics.PersistedJSONPStore=function(){};
CQ_Analytics.PersistedJSONPStore.prototype=new CQ_Analytics.PersistedJSONStore();
CQ_Analytics.PersistedJSONPStore.prototype.setServiceURL=function(A){this.serviceURL=A
};
CQ_Analytics.PersistedJSONPStore.prototype.getServiceURL=function(){return this.serviceURL
};
CQ_Analytics.PersistedJSONPStore.prototype.load=function(D,A,E){var C=this.getName();
if(!CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[this.getName()]){CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[C]=function(G){var F=CQ_Analytics.CCM.getRegisteredStore(C);
if(F){F.initJSON(G);
if(A){F.initJSON(A,true)
}}if(E){E.call(F)
}}
}if(D){this.setServiceURL(D)
}var B=this.serviceURL;
B=B.replace("${callback}","CQ_Analytics.PersistedJSONPStore.JSONPCallbacks."+C);
$CQ.getScript(B)
};
CQ_Analytics.PersistedJSONPStore.JSONPCallbacks={};
CQ_Analytics.PersistedJSONPStore.getInstance=function(E,F,B,A,D){if(E&&F){try{var G=new CQ_Analytics.PersistedJSONPStore();
G.STOREKEY=E.toUpperCase();
G.STORENAME=E;
if(F){G.setServiceURL(F)
}if(!A){G.load(F,B,D)
}return G
}catch(C){console.log("Cannot create the JSONP store",E,F,C)
}}return null
};
CQ_Analytics.PersistedJSONPStore.registerNewInstance=function(D,E,B,F){if(!E){return null
}if(!D){var A=CQ.shared.HTTP.getSchemeAndAuthority(E);
if(A){if(A.indexOf(".")!=-1){A=A.substring(0,A.lastIndexOf("."));
D=A.substring(A.lastIndexOf(".")+1)
}else{D=A.substring(A.lastIndexOf("/")+1)
}}else{D=E
}}var C=CQ_Analytics.PersistedJSONPStore.getInstance(D,E,B,false,function(){this.init();
this.reset();
if(F){F.call(this)
}});
if(C!=null){CQ_Analytics.CCM.register(C);
return C
}return null
};
CQ_Analytics.JSONPStore=function(){};
CQ_Analytics.JSONPStore.prototype=new CQ_Analytics.JSONStore();
CQ_Analytics.JSONPStore.prototype.setServiceURL=function(A){this.serviceURL=A
};
CQ_Analytics.JSONPStore.prototype.getServiceURL=function(){return this.serviceURL
};
CQ_Analytics.JSONPStore.prototype.load=function(D,A,E){var C=this.getName();
if(!CQ_Analytics.JSONPStore.JSONPCallbacks[this.getName()]){CQ_Analytics.JSONPStore.JSONPCallbacks[C]=function(G){var F=CQ_Analytics.CCM.getRegisteredStore(C);
if(F){F.initJSON(G);
if(A){F.initJSON(A,true)
}}if(E){E.call(F)
}}
}if(D){this.setServiceURL(D)
}var B=this.serviceURL;
B=B.replace("${callback}","CQ_Analytics.JSONPStore.JSONPCallbacks."+C);
$CQ.getScript(B)
};
CQ_Analytics.JSONPStore.JSONPCallbacks={};
CQ_Analytics.JSONPStore.getInstance=function(E,F,B,A,D){if(E){try{var G=new CQ_Analytics.JSONPStore();
G.STOREKEY=E.toUpperCase();
G.STORENAME=E;
if(F){G.setServiceURL(F);
if(!A){G.load(F,B,D)
}}return G
}catch(C){console.log("Cannot create the JSONP store",E,F,C)
}}return null
};
CQ_Analytics.JSONPStore.registerNewInstance=function(D,E,B,F){if(!D&&E){var A=CQ.shared.HTTP.getSchemeAndAuthority(E);
if(A){if(A.indexOf(".")!=-1){A=A.substring(0,A.lastIndexOf("."));
D=A.substring(A.lastIndexOf(".")+1)
}else{D=A.substring(A.lastIndexOf("/")+1)
}}else{D=E
}}var C=CQ_Analytics.JSONPStore.getInstance(D,E,B,false,function(){this.init();
this.reset();
if(F){F.call(this)
}});
if(C!=null){CQ_Analytics.CCM.register(C);
return C
}return null
};
$CQ(function(){CQ_Analytics.Slider=function(A){return{init:function(){this.vertical=A.vertical;
this.clazz=A.clazz;
this.parent=A.parent;
this.container=$CQ("<div>").addClass("cq-cc-slider").addClass("cq-cc-slider-"+((this.vertical)?"vertical":"horizontal")).addClass(this.clazz).appendTo(this.parent);
this.container.hide();
this.carousel=$CQ("<ul>").addClass("jcarousel-skin-cq-cc").appendTo(this.container)
},show:function(){if(!this.isWidget){var B=this;
A.initCallback=function(C){B.carouselObj=C
};
this.carousel.jcarousel(A);
this.isWidget=true
}var B=this;
this.select(this.computeSelectedIndex(),true,true);
if(this.vertical){this.container.slideDown("fast")
}else{$CQ(".cq-cc-slider",this.parent).css("top",(this.parent.position().top-9)+"px");
$CQ(".cq-cc-slider",this.parent).css("left",(this.parent.position().left-27)+"px");
$CQ(".cq-cc-slider",this.parent).fadeIn(1000,function(){$CQ(".jcarousel-container-horizontal",B.parent).animate({width:"270px"},"fast");
$CQ(".jcarousel-clip-horizontal",B.parent).animate({width:"268px"},"fast",function(){B.carousel.jcarousel()
})
})
}B.container.bind("click",this.stopPropagation);
$CQ(document).bind("click",{scope:this},this.handleDocClick)
},handleDocClick:function(B){B.data.scope.hide()
},stopPropagation:function(B){B.stopPropagation()
},hide:function(){$CQ(document).unbind("click",this.handleDocClick);
this.container.unbind("click",this.stopPropagation);
if(this.vertical){this.container.slideUp("fast")
}else{var B=this;
$CQ(".jcarousel-container-horizontal",this.parent).animate({width:"90px"},"fast");
$CQ(".jcarousel-clip-horizontal",this.parent).animate({width:"90px"},"fast",function(){$CQ(".cq-cc-slider",B.parent).fadeOut(1000)
})
}},select:function(D,G,C){var F=this.getSelected();
if(G||F.length==0||F.attr("jcarouselindex")!=D){var E=this.getItem(D);
F.removeClass("jcarousel-item-selected");
E.addClass("jcarousel-item-selected");
$CQ(this.container).find(".jcarousel-item-selected-marker").removeClass("jcarousel-item-selected-marker");
var B=this.getCurrentValue();
var H=E.children().attr("data-id");
$CQ(this.container).find("[data-id='"+H+"']").addClass("jcarousel-item-selected-marker");
if(B!=H){this.onSelect(H)
}this.carouselObj.scroll($CQ.jcarousel.intval(E.attr("jcarouselindex")),!C)
}},getSelected:function(){return $CQ(this.container).find(".jcarousel-item-selected")
},computeSelectedIndex:function(){var B=this.getCurrentValue();
return $CQ(this.container).find("[data-id='"+B+"']").parent().attr("jcarouselindex")||0
},getItem:function(B){return $CQ(this.container).find("[jcarouselindex="+B+"]")
},onSelect:function(B){},getCurrentValue:function(){}}
}
});
CQ_Analytics.record=function(C){if(C.collect){return[C.event,C.values]
}else{if(C.event){C.options=C.options||{};
try{CQ_Analytics.recordBeforeCallbacks.sort(function(G,F){return G.rank-F.rank
});
for(var E in CQ_Analytics.recordBeforeCallbacks){if(CQ_Analytics.recordBeforeCallbacks[E].func.call(this,C)){return 
}}}catch(D){}var A=C.dataMgr||CQ_Analytics.EventDataMgr;
A.reset();
if(typeof C.event=="string"){A.setProperty("events",C.event)
}else{A.setProperty("events",C.event.join("\u2026"))
}if(C.values){for(var B in C.values){A.setProperty(B,C.values[B])
}}try{CQ_Analytics.recordAfterCallbacks.sort(function(G,F){return G.rank-F.rank
});
for(var E in CQ_Analytics.recordAfterCallbacks){if(CQ_Analytics.recordAfterCallbacks[E].func.call(this,C)){return 
}}}catch(D){}}}};
CQ_Analytics.recordBeforeCallbacks=[];
CQ_Analytics.recordAfterCallbacks=[];
CQ_Analytics.registerBeforeCallback=function(B,A){CQ_Analytics.recordBeforeCallbacks.push({rank:A,func:B})
};
CQ_Analytics.registerAfterCallback=function(B,A){CQ_Analytics.recordAfterCallbacks.push({rank:A,func:B})
};
CQ_Analytics.Cookie={set:function(C,D,E){var A="";
if(E){var B=new Date();
B.setTime(B.getTime()+(E*24*60*60*1000));
A="; expires="+B.toGMTString()
}document.cookie=C+"="+D+A+"; path=/"
},read:function(B){var D=B+"=";
var A=document.cookie.split(";");
for(var C=0;
C<A.length;
C++){var E=A[C];
while(E.charAt(0)==" "){E=E.substring(1,E.length)
}if(E.indexOf(D)==0){return E.substring(D.length,E.length)
}}return null
},erase:function(A){CQ_Analytics.Cookie.set(A,"",-1)
}};
CQ_Analytics.SessionPersistence=function(){return{COOKIE_NAME:"SessionPersistence-"+CQURLInfo.runModes.replace(",","-"),set:function(C,D){if(C!="PROFILEDATA"){D=D||"";
var F=this.getMap();
if(!F){F=""
}var B=F.indexOf(C+":=");
if(B==-1){F+=C+":="+D+"|"
}else{var E=F.substring(0,B);
var A=F.substring(F.indexOf("|",B+2)+1);
F=E+C+":="+D+"|"+A
}this.setMap(F)
}},get:function(B){var D=this.getMap();
var C="";
if(D){var A=D.indexOf(B+":=");
if(A!=-1){C=D.substring(A+(B+":=").length,D.indexOf("|",A+2))
}}C=(C=="null"?"":(C||""));
return C
},getMap:function(){var A=CQ_Analytics.Cookie.read(this.COOKIE_NAME);
if(A){return decodeURIComponent(A)
}return null
},setMap:function(A){CQ_Analytics.Cookie.set(this.COOKIE_NAME,encodeURIComponent(A),365)
},clearMap:function(){CQ_Analytics.Cookie.erase(this.COOKIE_NAME)
},remove:function(C){var E=this.getMap();
if(!E){E=""
}var B=E.indexOf(C+":=");
if(B!=-1){var D=E.substring(0,B);
var A=E.substring(E.indexOf("|",B+2)+1);
E=D+A
}this.setMap(E)
}}
};
CQ_Analytics.Observable=function(){this.fireEvent=function(D){if(D&&this.listeners){D=D.toLowerCase();
var B=Array.prototype.slice.call(arguments,0);
for(var C=0;
C<this.listeners.length;
C++){var A=this.listeners[C];
if(D==A.event){if(A.fireFn.apply(A.scope||this||window,B)===false){return false
}}}}return true
}
};
CQ_Analytics.Observable.prototype.addListener=function(C,A,B){this.listeners=this.listeners||new Array();
if(C&&A){this.listeners.push({event:C.toLowerCase(),fireFn:A,scope:B})
}};
CQ_Analytics.Observable.prototype.removeListener=function(C,A){this.listeners=this.listeners||new Array();
if(C&&A){for(var B=0;
B<this.listeners.length;
B++){if(this.listeners[B].event==C&&this.listeners[B].fireFn==A){this.listeners.splice(B,1)
}}}};
CQ_Analytics.Observable.prototype.listeners=null;
if(!CQ_Analytics.StoreRegistry){CQ_Analytics.StoreRegistry=new function(){var A={};
return{register:function(B){if(B.STORENAME){A[B.STORENAME]=B
}},getStores:function(){return A
},getStore:function(B){return A[B]
}}
}()
}CQ_Analytics.SessionStore=function(){};
CQ_Analytics.SessionStore.prototype=new CQ_Analytics.Observable();
CQ_Analytics.SessionStore.prototype.setProperty=function(A,C){if(this.data==null){this.init()
}this.data[A]=C;
var B=CQ.shared.XSS.getXSSPropertyName(A);
this.data[B]=CQ.shared.XSS.getXSSValue(C);
this.fireEvent("update",A)
};
CQ_Analytics.SessionStore.prototype.initialized=false;
CQ_Analytics.SessionStore.prototype.init=function(){this.initialized=true;
this.fireEvent("initialize",this)
};
CQ_Analytics.SessionStore.prototype.getLabel=function(A){return A
};
CQ_Analytics.SessionStore.prototype.getLink=function(A){return A
};
CQ_Analytics.SessionStore.prototype.removeProperty=function(A){if(this.data==null){this.init()
}if(this.data[A]){delete this.data[A]
}var B=CQ.shared.XSS.getXSSPropertyName(A);
if(this.data[B]){delete this.data[B]
}this.fireEvent("update",A)
};
CQ_Analytics.SessionStore.prototype.getPropertyNames=function(A){if(this.data==null){this.init()
}A=A?A:[];
var B=new Array();
for(var C in this.data){if(CQ_Analytics.Utils.indexOf(A,C)==-1){B.push(C)
}}return B
};
CQ_Analytics.SessionStore.prototype.getSessionStore=function(){return this
};
CQ_Analytics.SessionStore.prototype.clear=function(){this.data=null
};
CQ_Analytics.SessionStore.prototype.getData=function(B){if(this.data==null){this.init()
}if(B){var A={};
for(var C in this.data){if(CQ_Analytics.Utils.indexOf(B,C)==-1){A[C]=this.data[C]
}}return A
}else{return this.data
}};
CQ_Analytics.SessionStore.prototype.reset=function(){if(this.data!=null){this.data=null;
this.fireEvent("update")
}};
CQ_Analytics.SessionStore.prototype.getProperty=function(B,A){if(this.data==null){this.init()
}if(!A){var C=CQ.shared.XSS.getXSSPropertyName(B);
if(this.data[C]){return this.data[C]
}}return this.data[B]
};
CQ_Analytics.SessionStore.prototype.getName=function(){return this.STORENAME
};
CQ_Analytics.SessionStore.prototype.addInitProperty=function(A,B){if(!this.initProperty){this.initProperty={}
}this.initProperty[A]=B
};
CQ_Analytics.SessionStore.prototype.getInitProperty=function(A){return this.initProperty?this.initProperty[A]:null
};
CQ_Analytics.SessionStore.prototype.loadInitProperties=function(C,A){if(C){for(var B in C){this.addInitProperty(B,C[B]);
if(A&&this.data&&this.data[B]===undefined){this.setProperty(B,C[B])
}}}};
CQ_Analytics.SessionStore.prototype.isInitialized=function(){return this.initialized
};
CQ_Analytics.PersistedSessionStore=function(){};
CQ_Analytics.PersistedSessionStore.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.PersistedSessionStore.prototype.STOREKEY="key";
CQ_Analytics.PersistedSessionStore.prototype.setNonPersisted=function(A){if(!this.nonPersisted){this.nonPersisted={}
}this.nonPersisted[A]=true
};
CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX="^generated*";
CQ_Analytics.PersistedSessionStore.prototype.isPersisted=function(A){if(!this.nonPersisted){this.nonPersisted={}
}return this.nonPersisted[A]!==true&&!new RegExp(CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX,"ig").test(A)&&!$CQ.isFunction(this.data[A])&&(typeof this.data[A])!="object"
};
CQ_Analytics.PersistedSessionStore.prototype.getStoreKey=function(){return this.STOREKEY
};
CQ_Analytics.PersistedSessionStore.prototype.persist=function(){if(this.fireEvent("beforepersist")!==false){var A=new CQ_Analytics.SessionPersistence();
A.set(this.getStoreKey(),this.toString());
this.fireEvent("persist")
}};
CQ_Analytics.PersistedSessionStore.prototype.setProperty=function(A,C){if(this.data==null){this.init()
}this.data[A]=C;
var B=CQ.shared.XSS.getXSSPropertyName(A);
this.data[B]=CQ.shared.XSS.getXSSValue(C);
if(this.isPersisted(A)){this.persist()
}this.fireEvent("update",A)
};
CQ_Analytics.PersistedSessionStore.prototype.toString=function(){var B=null;
if(this.data){var A=function(E){if(!E||typeof (E)!="string"){return E
}var D=E;
D=D.replace(new RegExp(",","g"),"&#44;");
D=D.replace(new RegExp("=","g"),"&#61;");
D=D.replace(new RegExp("\\|","g"),"&#124;");
return D
};
for(var C in this.data){if(this.isPersisted(C)&&this.data.hasOwnProperty(C)){B=(B===null?"":B+",");
B+=(C+"="+A(this.data[C]))
}}}return B
};
CQ_Analytics.PersistedSessionStore.prototype.parse=function(E){var D=function(H){if(!H||typeof (H)!="string"){return H
}var G=H;
G=G.replace(new RegExp("&#44;","g"),",");
G=G.replace(new RegExp("&#61;","g"),"=");
G=G.replace(new RegExp("&#124;","g"),"|");
return G
};
var C={};
var F=E.split(",");
for(var A in F){if(F.hasOwnProperty(A)){var B=F[A].split("=");
if(B.length==2){C[B[0]]=D(B[1])
}}}return C
};
CQ_Analytics.PersistedSessionStore.prototype.reset=function(A){if(this.data!=null){this.data={};
this.persist();
this.data=null;
if(!A){this.fireEvent("update")
}}};
CQ_Analytics.PersistedSessionStore.prototype.removeProperty=function(A){if(this.data==null){this.init()
}if(this.data[A]){delete this.data[A];
if(this.isPersisted(A)){this.persist()
}}this.fireEvent("update",A)
};
CQ_Analytics.PersistedSessionStore.prototype.clear=function(){var A=new CQ_Analytics.SessionPersistence();
A.remove(this.getStoreKey());
this.data=null
};
if(!CQ_Analytics.ClientContext){CQ_Analytics.ClientContext=new function(){return{get:function(F,C){if(F){if(F.indexOf("/")!=0){F="/"+F
}var D=F.split("/")[1];
var B=F.substring(F.indexOf("/"+D)+D.length+2,F.length);
var A=CQ_Analytics.CCM.getRegisteredStore(D);
if(A){if(B){var E=A.getProperty(B);
if(E&&C){E=CQ_Analytics.Variables.replaceVariables(E)
}return E
}return A
}}return null
},set:function(E,D){if(E){if(E.indexOf("/")!=0){E="/"+E
}var C=E.split("/")[1];
var B=E.substring(E.indexOf("/"+C)+C.length+2,E.length);
var A=CQ_Analytics.CCM.getRegisteredStore(C);
if(A){if(B){A.setProperty(B,D)
}}}},clear:function(){var A=CQ_Analytics.CCM.getStores();
if(A){for(var B in A){if(A[B].clear){A[B].clear()
}}}},reset:function(){var A=CQ_Analytics.CCM.getStores();
if(A){for(var B in A){if(A[B].reset){A[B].reset()
}}}},persist:function(A){CQ_Analytics.ClientContextMgr.ServerStorage.post(A,true)
}}
}();
window.ClientContext=CQ_Analytics.ClientContext;
window.ContextCloud=CQ_Analytics.ClientContext
}if(!CQ_Analytics.ClientContextUI){CQ_Analytics.ClientContextUI=function(){this.loaded=false;
this.ccUrl=null;
this.visible=false;
this.rendered=false;
this.containerId=null;
this.boxId=null;
this.contentPlaceholderId=null;
this.editMode=false
};
CQ_Analytics.ClientContextUI.prototype=new CQ_Analytics.Observable();
CQ_Analytics.ClientContextUI.prototype.SHOW_BOX_COOKIE="cq-show-clientcontext";
CQ_Analytics.ClientContextUI.prototype.init=function(B,A,E,C,D){this.ccUrl=B;
this.containerId=A;
this.boxId=E;
this.contentPlaceholderId=C;
this.editMode=D;
$CQ(document).bind("keydown",CQ_Analytics.Utils.eventWrapper(function(F,G){if(F.ctrlKey&&F.altKey&&G=="C".charCodeAt(0)){CQ_Analytics.ClientContextUI.toggle()
}}));
if(CQ_Analytics.Cookie.read(this.SHOW_BOX_COOKIE)=="true"){this.show()
}};
CQ_Analytics.ClientContextUI.prototype.render=function(){if(!this.rendered&&this.fireEvent("beforerender")!==false){this.rendered=true;
this.fireEvent("render")
}};
CQ_Analytics.ClientContextUI.prototype.load=function(C){if(this.ccUrl&&(!this.loaded||C)&&this.fireEvent("beforeload")!==false){var B=CQ.shared.HTTP.addParameter(this.ccUrl,"wcmmode",this.editMode?"preview":"disabled");
var A=CQ.shared.HTTP.get(B);
$CQ("#"+this.contentPlaceholderId).html(A.responseText);
this.loaded=true;
this.fireEvent("load")
}};
CQ_Analytics.ClientContextUI.prototype.show=function(){this.load();
this.render();
if(this.fireEvent("beforeshow")!==false){if($CQ.support.opacity){$CQ("#"+this.containerId).show("normal")
}else{$CQ("#"+this.containerId).show()
}this.visible=true;
CQ_Analytics.Cookie.set(this.SHOW_BOX_COOKIE,"true",365);
this.fireEvent("show")
}};
CQ_Analytics.ClientContextUI.prototype.hide=function(){if(this.fireEvent("beforehide")!==false){if($CQ.support.opacity){$CQ("#"+this.containerId).hide("fast")
}else{$CQ("#"+this.containerId).hide()
}this.visible=false;
CQ_Analytics.Cookie.set(this.SHOW_BOX_COOKIE,"false",365);
this.fireEvent("hide")
}};
CQ_Analytics.ClientContextUI.prototype.toggle=function(){if(this.visible){this.hide()
}else{this.show()
}};
CQ_Analytics.ClientContextUI.prototype.onLoad=function(B,A){if(B){if(this.loaded){B.call(A||this)
}else{this.addListener("load",B,A)
}}};
CQ_Analytics.ClientContextUI.prototype.isAvailable=function(){return this.boxId&&$CQ("#"+this.boxId).length>0
};
CQ_Analytics.ClientContextUI.prototype.getBoxId=function(){return this.boxId
};
CQ_Analytics.ClientContextUI=new CQ_Analytics.ClientContextUI();
CQ_Analytics.ClientContextUI.CONTAINER_ID="cq-clientcontext-container";
CQ_Analytics.ClientContextUI.BOX_ID="cq-clientcontext-box";
CQ_Analytics.ClientContextUI.BOX_CLASS="cq-clientcontext";
CQ_Analytics.ClientContextUI.ACTIONS_ID="cq-clientcontext-box-actions";
CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID="cq-clientcontext-box-actions-container";
CQ_Analytics.ClientContextUI.CONTENT_ID="cq-clientcontext-box-content";
CQ_Analytics.ClientContextUI.createPlaceholders=function(){var B=$CQ("<div>").attr("id",CQ_Analytics.ClientContextUI.BOX_ID).addClass(CQ_Analytics.ClientContextUI.BOX_CLASS);
B.append($CQ("<div>").attr("id",CQ_Analytics.ClientContextUI.ACTIONS_ID).append($CQ("<div>").attr("id",CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID)));
B.append($CQ("<div>").attr("id",CQ_Analytics.ClientContextUI.CONTENT_ID));
var A=$CQ("<div>").attr("id",CQ_Analytics.ClientContextUI.CONTAINER_ID);
A.append(B);
$CQ("body").append(A)
};
CQ_Analytics.ClientContextUI.create=function(B,A){CQ_Analytics.ClientContextUI.createPlaceholders();
CQ_Analytics.ClientContextUI.addListener("beforerender",function(){$CQ("<div>").addClass("cq-clientcontext-box-action").addClass("cq-clientcontext-design").attr("title","Open the ClientContext design page").appendTo("#"+CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID).bind("click",function(){CQ.shared.Util.open(_g.shared.HTTP.externalize(B+"/content.html"))
});
$CQ("<div>").addClass("cq-clientcontext-box-action").addClass("cq-clientcontext-load").attr("title","Load a profile in the ClientContext").appendTo("#"+CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID).bind("click",function(){var E=new CQ.personalization.ProfileLoader({});
E.show()
});
$CQ("<div>").addClass("cq-clientcontext-box-action").addClass("cq-clientcontext-reset").attr("title","Reset the ClientContext").appendTo("#"+CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID).bind("click",function(){CQ_Analytics.ClientContext.reset()
});
$CQ("<div>").addClass("cq-clientcontext-box-action").addClass("cq-clientcontext-close").attr("title","Close the ClientContext").appendTo("#"+CQ_Analytics.ClientContextUI.ACTIONS_CONTAINER_ID).bind("click",function(){CQ_Analytics.ClientContextUI.hide()
});
var D=$CQ("#"+CQ_Analytics.ClientContextUI.BOX_ID).offset();
$CQ("#"+CQ_Analytics.ClientContextUI.BOX_ID).draggable({handle:"#"+CQ_Analytics.ClientContextUI.ACTIONS_ID,revert:false,stop:function(){D=$CQ("#"+CQ_Analytics.ClientContextUI.BOX_ID).offset()
}});
$CQ("#"+CQ_Analytics.ClientContextUI.BOX_ID).addClass("CQjquery").resizable();
if(window.CQ&&CQ.wcm&&CQ.wcm.emulator&&CQ.wcm.emulator.EmulatorManager&&CQ.wcm.emulator.EmulatorManager.WRAPPING_EXCLUDED_IDS){CQ.wcm.emulator.EmulatorManager.WRAPPING_EXCLUDED_IDS.push(CQ_Analytics.ClientContextUI.CONTAINER_ID)
}});
var C=CQ.shared.HTTP.addParameter(B+"/content/jcr:content/stores.html","path",A);
CQ_Analytics.ClientContextUI.init(C,CQ_Analytics.ClientContextUI.CONTAINER_ID,CQ_Analytics.ClientContextUI.BOX_ID,CQ_Analytics.ClientContextUI.CONTENT_ID,true)
}
}if(!CQ_Analytics.TagCloudMgr){CQ_Analytics.TagCloudMgr=function(){this.data=null;
this.addedTags={};
this.frequencies=null;
this.initialTags=null;
this.initialAddedTags={};
this.copyObject=function(C){var B={};
for(var A in C){B[A]=C[A]
}return B
}
};
CQ_Analytics.TagCloudMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.TagCloudMgr.prototype.STOREKEY="TAGCLOUD";
CQ_Analytics.TagCloudMgr.prototype.STORENAME="tagcloud";
CQ_Analytics.TagCloudMgr.prototype.parseTagList=function(A){var C={};
var B=A.split(",");
for(var D in B){if(B.hasOwnProperty(D)){var E=B[D].split("=");
if(E.length==2){C[E[0]]=parseInt(E[1])
}}}return C
};
CQ_Analytics.TagCloudMgr.prototype.parseString=function(A){this.data=this.parseTagList(A);
return this
};
CQ_Analytics.TagCloudMgr.prototype.add=function(A){this.addedTags[A]=true;
this.data[A]=(this.data[A]||0)+1
};
CQ_Analytics.TagCloudMgr.prototype.each=function(B){for(var A in this.data){if(this.data.hasOwnProperty(A)){B(A,this.data[A])
}}};
CQ_Analytics.TagCloudMgr.prototype.calculateFrequencies=function(){var C={};
var A=[];
this.each(function(D,E){if(!C[E]){A.push(E)
}C[E]=true
});
A.sort(function B(E,D){if(E>D){return 1
}if(E<D){return -1
}return 0
});
return A
};
CQ_Analytics.TagCloudMgr.prototype.calculateNtile=function(B,C){if(this.frequencies===null){this.frequencies=this.calculateFrequencies()
}var A=0;
while(true){if((A>=(this.frequencies.length-1))||(this.frequencies[A]>=B)){return Math.ceil((A+1)/this.frequencies.length*C)
}A++
}};
CQ_Analytics.TagCloudMgr.prototype.getTags=function(){return this.data
};
CQ_Analytics.TagCloudMgr.prototype.getData=function(A){return this.getTags()
};
CQ_Analytics.TagCloudMgr.prototype.getTag=function(A){return this.data[A]>0?this.data[A]:0
};
CQ_Analytics.TagCloudMgr.prototype.init=function(A){var B=new CQ_Analytics.SessionPersistence();
var D=B.get(this.getStoreKey());
D=D===null?"":new String(D);
this.data=this.parseTagList(D);
if(A){for(var C in A){if(A.hasOwnProperty(C)){this.add(A[C])
}}}this.initialTags=this.copyObject(this.data);
this.initialAddedTags=this.copyObject(this.addedTags);
this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.setProperty=function(A,B){if(this.data==null){this.init()
}if(B>0){this.addedTags[A]=true;
this.data[A]=B>0?B:0
}else{delete this.addedTags[A];
delete this.data[A]
}this.persist();
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.reset=function(){this.clear();
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.getProperty=function(A){if(this.data==null){this.init()
}return this.data[A]>0?this.data[A]:0
};
CQ_Analytics.TagCloudMgr.prototype.removeProperty=function(A){if(this.data==null){this.init()
}this.setProperty(A,0)
};
CQ_Analytics.TagCloudMgr.prototype.clear=function(){var A=new CQ_Analytics.SessionPersistence();
A.remove(this.getStoreKey());
this.addedTags={};
this.data={}
};
CQ_Analytics.TagCloudMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.TagCloudMgr.prototype.getLabel=function(B){if(B){var C=B.split(":");
var A=C[C.length-1].split("/");
B=A[A.length-1]
}return B
};
CQ_Analytics.TagCloudMgr.prototype.createHTMLElement=function(){var E=document.createElement("div");
var C=document.createElement("div");
var B=this;
C.className="cloud";
var D=0;
this.each(function(G,J){var F=document.createElement("div");
var I=B.calculateNtile(J,10);
var K=G.split(":");
var H=K[K.length-1].split("/");
F.innerHTML=H[H.length-1];
F.className="tag";
if(B.addedTags[G]){F.className+=" new"
}F.className+=" tag"+I;
F.title=G+" ("+J+")";
F.setAttribute("data-property",G);
F.setAttribute("data-store",B.STORENAME);
C.appendChild(F);
C.appendChild(document.createTextNode(" "));
D++
});
if(D==0){var A=document.createElement("div");
A.className="tag notag";
A.innerHTML="No interest";
C.appendChild(A)
}E.appendChild(C);
return E
};
CQ_Analytics.TagCloudMgr=new CQ_Analytics.TagCloudMgr();
CQ_Analytics.TagCloudMgr.renderer=function(A,B){if(A&&A.STORENAME==CQ_Analytics.TagCloudMgr.STORENAME){$CQ("#"+B).children().remove();
$CQ("#"+B).append(A.createHTMLElement())
}};
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()),this.createHTMLElement);
CQ_Analytics.CCM.register(this)
},CQ_Analytics.TagCloudMgr)
}if(!CQ_Analytics.SurferInfoMgr){CQ_Analytics.SurferInfoMgr=function(){};
CQ_Analytics.SurferInfoMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SurferInfoMgr.prototype.STOREKEY="SURFERINFO";
CQ_Analytics.SurferInfoMgr.prototype.STORENAME="surferinfo";
CQ_Analytics.SurferInfoMgr.prototype.init=function(){this.data={};
for(var A in this.initProperty){this.data[A]=this.initProperty[A]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.SurferInfoMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.SurferInfoMgr.prototype.getLabel=function(A){return A
};
CQ_Analytics.SurferInfoMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.SurferInfoMgr=new CQ_Analytics.SurferInfoMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){var E=document.referrer;
this.addInitProperty("referer",E);
var G=document.location.search.replace("?","");
var C=G.split("&");
for(i=0,l=C.length;
i<l;
i++){temp=C[i].split("=");
this.addInitProperty(temp[0],temp[1])
}var B=CQ_Analytics.BrowserInfoInstance;
this.addInitProperty("browserFamily",B.getBrowserFamily());
this.addInitProperty("browserVersion",B.getBrowserVersion());
this.addInitProperty("browser","${/surferinfo/browserFamily} ${/surferinfo/browserVersion}");
this.addInitProperty("OS",B.getOSName());
this.addInitProperty("resolution",B.getScreenResolution());
this.addInitProperty("device",B.getDeviceType());
this.addInitProperty("isMobile",B.isMobile());
this.addInitProperty("userAgent",B.getUserAgent());
var A=new Date();
this.addInitProperty("day",A.getDate());
this.addInitProperty("month",A.getMonth()+1);
this.addInitProperty("year",A.getFullYear());
this.addInitProperty("hours",A.getHours());
this.addInitProperty("minutes",A.getMinutes());
var D="${/surferinfo/browserFamily}";
if(B.isMobile()){D="${/surferinfo/device}"
}this.addInitProperty("image",D);
var F=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/surferinfo/resources/${/surferinfo/image}.png");
this.addInitProperty("thumbnail",F);
if(CQ_Analytics.MousePositionMgr){CQ_Analytics.MousePositionMgr.addListener("update",function(){this.setProperty("mouse X",CQ_Analytics.MousePositionMgr.getProperty("x"));
this.setProperty("mouse Y",CQ_Analytics.MousePositionMgr.getProperty("y"))
},this)
}this.addListener("update",function(){var I=this.getProperty("device");
var J="${/surferinfo/browserFamily}";
if(B.isMobile(I)){J="${/surferinfo/device}"
}var H=this.getProperty("image");
if(H!=J){this.setProperty("image",J)
}},this);
CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()));
CQ_Analytics.CCM.register(this)
},CQ_Analytics.SurferInfoMgr)
}if(!CQ_Analytics.MobileSliderUtils){CQ_Analytics.MobileSliderUtils=function(){return{injectCss:function(A){$CQ("head").append("<link>");
var B=$CQ("head").children(":last");
B.attr({rel:"stylesheet",type:"text/css",href:_g.shared.HTTP.externalize(A)})
},removeCss:function(A){$CQ("[href='"+_g.shared.HTTP.externalize(A)+"']").remove()
},switchToMobile:function(A){this.injectMobileBodyClass(A);
this.injectMobileCss(A)
},switchToDesktop:function(A){this.injectDesktopBodyClass(A);
this.injectDesktopCss(A)
},injectDesktopCss:function(D){var A=this.getConfig(D,"DESKTOP_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.injectCss(CQ_Analytics.Variables.replace(B,"app",D))
}}A=this.getConfig(D,"MOBILE_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.removeCss(CQ_Analytics.Variables.replace(B,"app",D))
}}},injectMobileCss:function(D){var A=this.getConfig(D,"MOBILE_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.injectCss(CQ_Analytics.Variables.replace(B,"app",D))
}}A=this.getConfig(D,"DESKTOP_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.removeCss(CQ_Analytics.Variables.replace(B,"app",D))
}}},injectMobileBodyClass:function(C){var B=this.getConfig(C,"MOBILE_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$CQ(document.body).addClass(D)
}}B=this.getConfig(C,"DESKTOP_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$CQ(document.body).removeClass(D)
}}},injectDesktopBodyClass:function(C){var B=this.getConfig(C,"DESKTOP_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$CQ(document.body).addClass(D)
}}B=this.getConfig(C,"MOBILE_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$CQ(document.body).removeClass(D)
}}},getConfig:function(C,B){var A=CQ_Analytics.MobileSliderUtils.CONFIG[C];
if(!A){return null
}return CQ_Analytics.MobileSliderUtils.CONFIG[C][B]
}}
}();
CQ_Analytics.MobileSliderUtils.CONFIG=window.CQMobileSlider||{}
}if(!CQ_Analytics.SocialGraphMgr){CQ_Analytics.SocialGraphMgr=CQ_Analytics.JSONPStore.registerNewInstance("socialgraph");
CQ_Analytics.SocialGraphMgr.internalRenderer=function(A){var C=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
CQ_Analytics.SocialGraphMgr.lastUid=C;
var D=CQ_Analytics.ProfileDataMgr.getProperty("path");
var B=D+".form.html";
B+=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/socialgraph.js");
B+="?limit=10";
B+="&callback=${callback}";
CQ_Analytics.SocialGraphMgr.load(CQ.shared.HTTP.externalize(B),{},function(){$CQ("#"+A).children().remove();
CQ_Analytics.SocialGraphMgr.reset();
var F=CQ_Analytics.ProfileDataMgr.getProperty("formattedName");
var E=$CQ("<div>").addClass("cq-socialgraph");
$CQ("<div>").addClass("cq-socialgraph-text").html(F+"'s friends and followers (social graph): ").appendTo(E);
var M={};
var H=this.getJSON();
var N=H.friends;
if(N){for(var I in N){if(N[I]["authorizableId"]){M[N[I]["authorizableId"]]=N[I]
}}}var K=H.followers;
if(K){for(var I in K){if(K[I]["authorizableId"]){M[K[I]["authorizableId"]]=K[I]
}}}var L=0;
for(var G in M){var J=M[G];
$CQ("<img>").attr("title",J.formattedName||J.authorizableId).attr("src",_g.shared.HTTP.externalize(J.avatar)).appendTo(E);
L++;
if(L>=9){break
}}E.hide();
$CQ("#"+A).append(E);
E.fadeIn("fast")
})
};
CQ_Analytics.SocialGraphMgr.renderer=function(B,A){var C=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
if(C!=CQ_Analytics.SocialGraphMgr.lastUid){CQ_Analytics.SocialGraphMgr.internalRenderer(A)
}};
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this);
CQ_Analytics.ProfileDataMgr.addListener("update",function(){var A=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
if(A!=this.lastUid){this.fireEvent("update")
}},CQ_Analytics.SocialGraphMgr)
},CQ_Analytics.SocialGraphMgr)
}if(CQ_Analytics.SegmentMgr&&!CQ_Analytics.SegmentMgr.isResolvedRegistered){CQ_Analytics.SegmentMgr.isResolvedRegistered=true;
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.StoreRegistry.register(CQ_Analytics.SegmentMgr);
CQ_Analytics.CCM.fireEvent("storeregister",CQ_Analytics.SegmentMgr);
CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()))
},CQ_Analytics.SegmentMgr)
}if(!CQ_Analytics.ProfileDataMgr){CQ_Analytics.ProfileDataMgr=function(){this.addListener("beforepersist",function(){this.checkAuthorizableId()
},this)
};
CQ_Analytics.ProfileDataMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ProfileDataMgr.prototype.STOREKEY="PROFILEDATA";
CQ_Analytics.ProfileDataMgr.prototype.STORENAME="profile";
CQ_Analytics.ProfileDataMgr.prototype.LOADER_PATH=CQ_Analytics.Utils.externalize("/libs/cq/personalization/components/profileloader/content/load.js",true);
CQ_Analytics.ProfileDataMgr.prototype.PROFILE_LOADER=CQ_Analytics.Utils.externalize("/libs/cq/personalization/components/profileloader/content/load.json",true);
CQ_Analytics.ProfileDataMgr.prototype.init=function(){var A=new CQ_Analytics.SessionPersistence();
var B=A.get(this.getStoreKey());
if(!B||B==""){this.data={};
for(var C in this.initProperty){this.data[C]=this.initProperty[C]
}}else{this.data=this.parse(B)
}this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.ProfileDataMgr.prototype.checkAuthorizableId=function(){if(!this.data){this.init()
}if(this.data.authorizableId){CQ_Analytics.CCM.setVisitorId(this.data.authorizableId)
}else{CQ_Analytics.CCM.setVisitorId("")
}};
CQ_Analytics.ProfileDataMgr.prototype.getLabel=function(A){return A
};
CQ_Analytics.ProfileDataMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.ProfileDataMgr.prototype.clear=function(){var A=new CQ_Analytics.SessionPersistence();
A.remove(this.getStoreKey());
this.data=null;
this.initProperty={}
};
CQ_Analytics.ProfileDataMgr.prototype.getLoaderURL=function(){return CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/profiledata/loader.json")
};
CQ_Analytics.ProfileDataMgr.prototype.loadProfile=function(authorizableId){var url=this.getLoaderURL();
url=CQ_Analytics.Utils.addParameter(url,"authorizableId",authorizableId);
try{var object=CQ.shared.HTTP.eval(url);
if(object){this.data={};
for(var p in object){this.data[p]=object[p]
}this.persist();
this.fireEvent("initialize",this);
this.fireEvent("update");
if(CQ_Analytics.ClickstreamcloudEditor){CQ_Analytics.ClickstreamcloudEditor.reload()
}return true
}}catch(error){if(console&&console.log){console.log("Error during profile loading",error)
}}return false
};
CQ_Analytics.ProfileDataMgr=new CQ_Analytics.ProfileDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.checkAuthorizableId();
this.addListener("update",function(A,I){if(I=="birthday"||!I){var J=this.getProperty("birthday");
var K=this.getProperty("age");
var G="";
if(J){try{var C=function(N,M){var L=new Date(M.getTime());
L.setUTCHours(N.getUTCHours(),N.getUTCMinutes(),N.getUTCSeconds(),N.getUTCMilliseconds());
var O=L.getTime()-N.getTime();
return O/(1000*60*60*24)
};
var D=function(L){var M=new Date(L.getFullYear(),0,0);
return C(L,M)*-1
};
var H=new Date(Date.parse(J));
if(!isNaN(H.getTime())){var F=new Date();
if(D(H)==D(F)&&H.getMonth()==F.getMonth()){G=CQ.shared.HTTP.externalize(CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/profiledata/resources/birthday_cake.png"))
}else{var B=F.getFullYear()-H.getFullYear();
if(D(H)>D(F)){G=B
}else{G=Math.max(0,B-1)
}}}else{G=""
}}catch(E){G=""
}}if(K!=G){this.setProperty("age",G)
}}});
CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()));
CQ_Analytics.CCM.register(this)
},CQ_Analytics.ProfileDataMgr)
}if(!CQ_Analytics.GeolocationUtils){CQ_Analytics.GeolocationUtils=new function(){return{init:function(B){var D;
try{if(typeof navigator.geolocation==="undefined"){D=google.gears.factory.create("beta.geolocation")
}else{D=navigator.geolocation
}}catch(E){}var A=function(F){var G=CQ_Analytics.PersistedJSONStore.registerNewInstance(B,F);
G.addListener("update",function(H,J){var K=CQ_Analytics.ClientContext.get(B+"/latitude");
var I=CQ_Analytics.ClientContext.get(B+"/longitude");
if(!K||!I){if(J!="generatedThumbnail"){G.setProperty("generatedThumbnail",CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback)
}else{if(G.getProperty(J,true)!=CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback){G.setProperty(J,CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback)
}}}else{if(G.getProperty("generatedThumbnail",true)==CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback){G.setProperty("generatedThumbnail",G.getInitProperty("generatedThumbnail"))
}if(J=="latitude"||J=="longitude"||!J){CQ_Analytics.GeolocationUtils.computeAddress(K,I,B)
}}})
};
var C=function(I,H){var G=CQ_Analytics.StoreRegistry.getStore(B);
if(G){I=I||CQ_Analytics.GeolocationUtils.DEFAULTS;
var F=I.generatedThumbnail=G.getInitProperty("generatedThumbnail");
G.initJSON(I);
if(!H){G.init();
G.setProperty("generatedThumbnail",F)
}}else{A(I)
}};
A();
if(D){D.getCurrentPosition(function(F){var G={longitude:F.coords.longitude,latitude:F.coords.latitude};
if(F.address){G.address=F.address
}C(G,CQ_Analytics.CCM.areStoresInitialized)
},function(F){if(!CQ_Analytics.CCM.areStoresInitialized){var H="Connection timeout";
if(F.code==1){H="Permission denied"
}else{if(F.code==2){H="Position unavailable"
}}var G={address:{country:H}};
C(G,CQ_Analytics.CCM.areStoresInitialized)
}})
}else{C()
}},computeAddress:function(D,B,A){CQ_Analytics.ClientContext.set(A+"/address/region");
CQ_Analytics.ClientContext.set(A+"/address/countryCode");
CQ_Analytics.ClientContext.set(A+"/address/country");
var C=function(){var E=new google.maps.LatLng(D,B);
var F=new google.maps.Geocoder();
F.geocode({location:E},function(G,I){if(I==="OK"&&G[0]&&G[0].address_components){for(var J=0;
J<G[0].address_components.length;
J++){var H=G[0].address_components[J];
if(H.types&&H.types.length){if(H.types[0]=="administrative_area_level_1"){CQ_Analytics.ClientContext.set(A+"/address/region",H.short_name)
}else{if(H.types[0]=="country"){CQ_Analytics.ClientContext.set(A+"/address/countryCode",H.short_name);
CQ_Analytics.ClientContext.set(A+"/address/country",H.long_name)
}}}}}})
};
if(!window.google){window.geocode_callback=C;
$CQ.getScript("http://maps.google.com/maps/api/js?sensor=false&callback=geocode_callback")
}else{C.call()
}}}
}();
CQ_Analytics.GeolocationUtils.DEFAULTS={latitude:37.331375,longitude:-121.893992};
CQ_Analytics.GeolocationUtils.THUMBNAILS={fallback:"http://maps.googleapis.com/maps/api/staticmap?center=37,-121&zoom=0&size=80x80&sensor=false"}
}if(!CQ_Analytics.ActivityStreamMgr){CQ_Analytics.ActivityStreamMgr=CQ_Analytics.JSONStore.registerNewInstance("activitystream",{});
CQ_Analytics.ActivityStreamMgr.internalRenderer=function(C,A){var B=C+".form.html";
B+=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/activitystream.html");
B+="?limit=3";
CQ.shared.HTTP.get(B,function(E,F,D){$CQ("#"+A).children().remove();
if(F){$CQ("#"+A).append(D.body)
}})
};
CQ_Analytics.ActivityStreamMgr.renderer=function(B,A){if(!B.isReady){B.isReady=true;
CQ_Analytics.ClientContextUtils.onStoreRegistered("profile",function(C){C.addListener("update",function(E,F){var G=this.getProperty("path");
if(G!=CQ_Analytics.ActivityStreamMgr.currentProfilePath){CQ_Analytics.ActivityStreamMgr.currentProfilePath=G;
CQ_Analytics.ActivityStreamMgr.internalRenderer(G,A)
}},C);
var D=C.getProperty("path");
CQ_Analytics.ActivityStreamMgr.currentProfilePath=D;
CQ_Analytics.ActivityStreamMgr.internalRenderer(D,A)
})
}return""
}
}if(!CQ_Analytics.SurferInfoMgr){CQ_Analytics.SurferInfoMgr=function(){};
CQ_Analytics.SurferInfoMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SurferInfoMgr.prototype.STOREKEY="SURFERINFO";
CQ_Analytics.SurferInfoMgr.prototype.STORENAME="surferinfo";
CQ_Analytics.SurferInfoMgr.prototype.init=function(){this.data={};
for(var A in this.initProperty){this.data[A]=this.initProperty[A]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.SurferInfoMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.SurferInfoMgr.prototype.getLabel=function(A){return A
};
CQ_Analytics.SurferInfoMgr.prototype.getLink=function(A){return""
};
CQ_Analytics.SurferInfoMgr=new CQ_Analytics.SurferInfoMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){var E=document.referrer;
this.addInitProperty("referer",E);
var G=document.location.search.replace("?","");
var C=G.split("&");
for(i=0,l=C.length;
i<l;
i++){temp=C[i].split("=");
this.addInitProperty(temp[0],temp[1])
}var B=CQ_Analytics.BrowserInfoInstance;
this.addInitProperty("browserFamily",B.getBrowserFamily());
this.addInitProperty("browserVersion",B.getBrowserVersion());
this.addInitProperty("browser","${/surferinfo/browserFamily} ${/surferinfo/browserVersion}");
this.addInitProperty("OS",B.getOSName());
this.addInitProperty("resolution",B.getScreenResolution());
this.addInitProperty("device",B.getDeviceType());
this.addInitProperty("isMobile",B.isMobile());
this.addInitProperty("userAgent",B.getUserAgent());
var A=new Date();
this.addInitProperty("day",A.getDate());
this.addInitProperty("month",A.getMonth()+1);
this.addInitProperty("year",A.getFullYear());
this.addInitProperty("hours",A.getHours());
this.addInitProperty("minutes",A.getMinutes());
var D="${/surferinfo/browserFamily}";
if(B.isMobile()){D="${/surferinfo/device}"
}this.addInitProperty("image",D);
var F=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/surferinfo/resources/${/surferinfo/image}.png");
this.addInitProperty("thumbnail",F);
if(CQ_Analytics.MousePositionMgr){CQ_Analytics.MousePositionMgr.addListener("update",function(){this.setProperty("mouse X",CQ_Analytics.MousePositionMgr.getProperty("x"));
this.setProperty("mouse Y",CQ_Analytics.MousePositionMgr.getProperty("y"))
},this)
}this.addListener("update",function(){var I=this.getProperty("device");
var J="${/surferinfo/browserFamily}";
if(B.isMobile(I)){J="${/surferinfo/device}"
}var H=this.getProperty("image");
if(H!=J){this.setProperty("image",J)
}},this);
CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()));
CQ_Analytics.CCM.register(this)
},CQ_Analytics.SurferInfoMgr)
}if(!CQ_Analytics.MobileSliderUtils){CQ_Analytics.MobileSliderUtils=function(){return{injectCss:function(A){$CQ("head").append("<link>");
var B=$CQ("head").children(":last");
B.attr({rel:"stylesheet",type:"text/css",href:_g.shared.HTTP.externalize(A)})
},removeCss:function(A){$CQ("[href='"+_g.shared.HTTP.externalize(A)+"']").remove()
},switchToMobile:function(A){this.injectMobileBodyClass(A);
this.injectMobileCss(A)
},switchToDesktop:function(A){this.injectDesktopBodyClass(A);
this.injectDesktopCss(A)
},injectDesktopCss:function(D){var A=this.getConfig(D,"DESKTOP_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.injectCss(CQ_Analytics.Variables.replace(B,"app",D))
}}A=this.getConfig(D,"MOBILE_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.removeCss(CQ_Analytics.Variables.replace(B,"app",D))
}}},injectMobileCss:function(D){var A=this.getConfig(D,"MOBILE_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.injectCss(CQ_Analytics.Variables.replace(B,"app",D))
}}A=this.getConfig(D,"DESKTOP_CSS");
if(A){for(var C=0;
C<A.length;
C++){var B=A[C];
CQ_Analytics.MobileSliderUtils.removeCss(CQ_Analytics.Variables.replace(B,"app",D))
}}},injectMobileBodyClass:function(C){var B=this.getConfig(C,"MOBILE_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$CQ(document.body).addClass(D)
}}B=this.getConfig(C,"DESKTOP_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$CQ(document.body).removeClass(D)
}}},injectDesktopBodyClass:function(C){var B=this.getConfig(C,"DESKTOP_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$CQ(document.body).addClass(D)
}}B=this.getConfig(C,"MOBILE_BODY_CLASS");
if(B){for(var A=0;
A<B.length;
A++){var D=B[A];
$CQ(document.body).removeClass(D)
}}},getConfig:function(C,B){var A=CQ_Analytics.MobileSliderUtils.CONFIG[C];
if(!A){return null
}return CQ_Analytics.MobileSliderUtils.CONFIG[C][B]
}}
}();
CQ_Analytics.MobileSliderUtils.CONFIG=window.CQMobileSlider||{}
};