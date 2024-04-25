var Tx=Object.defineProperty;var bx=(hr,Zr,Di)=>Zr in hr?Tx(hr,Zr,{enumerable:!0,configurable:!0,writable:!0,value:Di}):hr[Zr]=Di;var Sh=(hr,Zr,Di)=>(bx(hr,typeof Zr!="symbol"?Zr+"":Zr,Di),Di);(async()=>{(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();class hr{constructor(e,t,r,n,o){this.type=e,this.model=null,t==null&&console.error("models not found");for(const l in t){const c=t[l];if(c.type===e&&c.model){this.model=c.model.clone();break}}this.setPosition(r,n,o)}setPosition(e,t,r){this.posX=e,this.posY=t,this.posZ=r,this.model&&this.model.position.set(this.posX,this.posY,this.posZ)}getPosition(){return{x:this.posX,y:this.posY,z:this.posZ}}}var Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Di(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var rl={exports:{}},il={exports:{}},nl;function Eh(){return nl||(nl=1,function(i){(function(e,t){i.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:Zr,function(e,t){var r=[],n=Object.getPrototypeOf,o=r.slice,l=r.flat?function(a){return r.flat.call(a)}:function(a){return r.concat.apply([],a)},c=r.push,d=r.indexOf,p={},f=p.toString,g=p.hasOwnProperty,_=g.toString,y=_.call(Object),E={},b=function(a){return typeof a=="function"&&typeof a.nodeType!="number"&&typeof a.item!="function"},x=function(a){return a!=null&&a===a.window},v=e.document,O={type:!0,src:!0,nonce:!0,noModule:!0};function L(a,s,h){h=h||v;var m,M,S=h.createElement("script");if(S.text=a,s)for(m in O)M=s[m]||s.getAttribute&&s.getAttribute(m),M&&S.setAttribute(m,M);h.head.appendChild(S).parentNode.removeChild(S)}function B(a){return a==null?a+"":typeof a=="object"||typeof a=="function"?p[f.call(a)]||"object":typeof a}var j="3.7.1",k=/HTML$/i,u=function(a,s){return new u.fn.init(a,s)};u.fn=u.prototype={jquery:j,constructor:u,length:0,toArray:function(){return o.call(this)},get:function(a){return a==null?o.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var s=u.merge(this.constructor(),a);return s.prevObject=this,s},each:function(a){return u.each(this,a)},map:function(a){return this.pushStack(u.map(this,function(s,h){return a.call(s,h,s)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(a,s){return(s+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(a,s){return s%2}))},eq:function(a){var s=this.length,h=+a+(a<0?s:0);return this.pushStack(h>=0&&h<s?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:r.sort,splice:r.splice},u.extend=u.fn.extend=function(){var a,s,h,m,M,S,w=arguments[0]||{},D=1,N=arguments.length,H=!1;for(typeof w=="boolean"&&(H=w,w=arguments[D]||{},D++),typeof w!="object"&&!b(w)&&(w={}),D===N&&(w=this,D--);D<N;D++)if((a=arguments[D])!=null)for(s in a)m=a[s],!(s==="__proto__"||w===m)&&(H&&m&&(u.isPlainObject(m)||(M=Array.isArray(m)))?(h=w[s],M&&!Array.isArray(h)?S=[]:!M&&!u.isPlainObject(h)?S={}:S=h,M=!1,w[s]=u.extend(H,S,m)):m!==void 0&&(w[s]=m));return w},u.extend({expando:"jQuery"+(j+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var s,h;return!a||f.call(a)!=="[object Object]"?!1:(s=n(a),s?(h=g.call(s,"constructor")&&s.constructor,typeof h=="function"&&_.call(h)===y):!0)},isEmptyObject:function(a){var s;for(s in a)return!1;return!0},globalEval:function(a,s,h){L(a,{nonce:s&&s.nonce},h)},each:function(a,s){var h,m=0;if(re(a))for(h=a.length;m<h&&s.call(a[m],m,a[m])!==!1;m++);else for(m in a)if(s.call(a[m],m,a[m])===!1)break;return a},text:function(a){var s,h="",m=0,M=a.nodeType;if(!M)for(;s=a[m++];)h+=u.text(s);return M===1||M===11?a.textContent:M===9?a.documentElement.textContent:M===3||M===4?a.nodeValue:h},makeArray:function(a,s){var h=s||[];return a!=null&&(re(Object(a))?u.merge(h,typeof a=="string"?[a]:a):c.call(h,a)),h},inArray:function(a,s,h){return s==null?-1:d.call(s,a,h)},isXMLDoc:function(a){var s=a&&a.namespaceURI,h=a&&(a.ownerDocument||a).documentElement;return!k.test(s||h&&h.nodeName||"HTML")},merge:function(a,s){for(var h=+s.length,m=0,M=a.length;m<h;m++)a[M++]=s[m];return a.length=M,a},grep:function(a,s,h){for(var m,M=[],S=0,w=a.length,D=!h;S<w;S++)m=!s(a[S],S),m!==D&&M.push(a[S]);return M},map:function(a,s,h){var m,M,S=0,w=[];if(re(a))for(m=a.length;S<m;S++)M=s(a[S],S,h),M!=null&&w.push(M);else for(S in a)M=s(a[S],S,h),M!=null&&w.push(M);return l(w)},guid:1,support:E}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=r[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,s){p["[object "+s+"]"]=s.toLowerCase()});function re(a){var s=!!a&&"length"in a&&a.length,h=B(a);return b(a)||x(a)?!1:h==="array"||s===0||typeof s=="number"&&s>0&&s-1 in a}function R(a,s){return a.nodeName&&a.nodeName.toLowerCase()===s.toLowerCase()}var T=r.pop,W=r.sort,ie=r.splice,F="[\\x20\\t\\r\\n\\f]",ne=new RegExp("^"+F+"+|((?:^|[^\\\\])(?:\\\\.)*)"+F+"+$","g");u.contains=function(a,s){var h=s&&s.parentNode;return a===h||!!(h&&h.nodeType===1&&(a.contains?a.contains(h):a.compareDocumentPosition&&a.compareDocumentPosition(h)&16))};var pe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ge(a,s){return s?a==="\0"?"\uFFFD":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a}u.escapeSelector=function(a){return(a+"").replace(pe,ge)};var _e=v,J=c;(function(){var a,s,h,m,M,S=J,w,D,N,H,te,se=u.expando,Y=0,fe=0,Ke=yo(),yt=yo(),ct=yo(),Kt=yo(),Wt=function(P,z){return P===z&&(M=!0),0},qr="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Xr="(?:\\\\[\\da-fA-F]{1,6}"+F+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",gt="\\["+F+"*("+Xr+")(?:"+F+"*([*^$|!~]?=)"+F+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Xr+"))|)"+F+"*\\]",nn=":("+Xr+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+gt+")*)|.*)\\)|)",Et=new RegExp(F+"+","g"),Ft=new RegExp("^"+F+"*,"+F+"*"),fa=new RegExp("^"+F+"*([>+~]|"+F+")"+F+"*"),Ks=new RegExp(F+"|>"),Yr=new RegExp(nn),ma=new RegExp("^"+Xr+"$"),Kr={ID:new RegExp("^#("+Xr+")"),CLASS:new RegExp("^\\.("+Xr+")"),TAG:new RegExp("^("+Xr+"|[*])"),ATTR:new RegExp("^"+gt),PSEUDO:new RegExp("^"+nn),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+F+"*(even|odd|(([+-]|)(\\d*)n|)"+F+"*(?:([+-]|)"+F+"*(\\d+)|))"+F+"*\\)|)","i"),bool:new RegExp("^(?:"+qr+")$","i"),needsContext:new RegExp("^"+F+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+F+"*((?:-\\d)?\\d*)"+F+"*\\)|)(?=[^-]|$)","i")},Ui=/^(?:input|select|textarea|button)$/i,Ni=/^h\d$/i,Tr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Js=/[+~]/,di=new RegExp("\\\\[\\da-fA-F]{1,6}"+F+"?|\\\\([^\\r\\n\\f])","g"),pi=function(P,z){var X="0x"+P.slice(1)-65536;return z||(X<0?String.fromCharCode(X+65536):String.fromCharCode(X>>10|55296,X&1023|56320))},vx=function(){Ii()},_x=So(function(P){return P.disabled===!0&&R(P,"fieldset")},{dir:"parentNode",next:"legend"});function xx(){try{return w.activeElement}catch{}}try{S.apply(r=o.call(_e.childNodes),_e.childNodes),r[_e.childNodes.length].nodeType}catch{S={apply:function(P,z){J.apply(P,o.call(z))},call:function(P){J.apply(P,o.call(arguments,1))}}}function At(P,z,X,$){var oe,Se,Re,Ie,Ce,pt,qe,Ze=z&&z.ownerDocument,ft=z?z.nodeType:9;if(X=X||[],typeof P!="string"||!P||ft!==1&&ft!==9&&ft!==11)return X;if(!$&&(Ii(z),z=z||w,N)){if(ft!==11&&(Ce=Tr.exec(P)))if(oe=Ce[1]){if(ft===9)if(Re=z.getElementById(oe)){if(Re.id===oe)return S.call(X,Re),X}else return X;else if(Ze&&(Re=Ze.getElementById(oe))&&At.contains(z,Re)&&Re.id===oe)return S.call(X,Re),X}else{if(Ce[2])return S.apply(X,z.getElementsByTagName(P)),X;if((oe=Ce[3])&&z.getElementsByClassName)return S.apply(X,z.getElementsByClassName(oe)),X}if(!Kt[P+" "]&&(!H||!H.test(P))){if(qe=P,Ze=z,ft===1&&(Ks.test(P)||fa.test(P))){for(Ze=Js.test(P)&&Zs(z.parentNode)||z,(Ze!=z||!E.scope)&&((Ie=z.getAttribute("id"))?Ie=u.escapeSelector(Ie):z.setAttribute("id",Ie=se)),pt=ga(P),Se=pt.length;Se--;)pt[Se]=(Ie?"#"+Ie:":scope")+" "+Mo(pt[Se]);qe=pt.join(",")}try{return S.apply(X,Ze.querySelectorAll(qe)),X}catch{Kt(P,!0)}finally{Ie===se&&z.removeAttribute("id")}}}return Mh(P.replace(ne,"$1"),z,X,$)}function yo(){var P=[];function z(X,$){return P.push(X+" ")>s.cacheLength&&delete z[P.shift()],z[X+" "]=$}return z}function Nr(P){return P[se]=!0,P}function Hn(P){var z=w.createElement("fieldset");try{return!!P(z)}catch{return!1}finally{z.parentNode&&z.parentNode.removeChild(z),z=null}}function yx(P){return function(z){return R(z,"input")&&z.type===P}}function Mx(P){return function(z){return(R(z,"input")||R(z,"button"))&&z.type===P}}function xh(P){return function(z){return"form"in z?z.parentNode&&z.disabled===!1?"label"in z?"label"in z.parentNode?z.parentNode.disabled===P:z.disabled===P:z.isDisabled===P||z.isDisabled!==!P&&_x(z)===P:z.disabled===P:"label"in z?z.disabled===P:!1}}function an(P){return Nr(function(z){return z=+z,Nr(function(X,$){for(var oe,Se=P([],X.length,z),Re=Se.length;Re--;)X[oe=Se[Re]]&&(X[oe]=!($[oe]=X[oe]))})})}function Zs(P){return P&&typeof P.getElementsByTagName<"u"&&P}function Ii(P){var z,X=P?P.ownerDocument||P:_e;return X==w||X.nodeType!==9||!X.documentElement||(w=X,D=w.documentElement,N=!u.isXMLDoc(w),te=D.matches||D.webkitMatchesSelector||D.msMatchesSelector,D.msMatchesSelector&&_e!=w&&(z=w.defaultView)&&z.top!==z&&z.addEventListener("unload",vx),E.getById=Hn(function($){return D.appendChild($).id=u.expando,!w.getElementsByName||!w.getElementsByName(u.expando).length}),E.disconnectedMatch=Hn(function($){return te.call($,"*")}),E.scope=Hn(function(){return w.querySelectorAll(":scope")}),E.cssHas=Hn(function(){try{return w.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),E.getById?(s.filter.ID=function($){var oe=$.replace(di,pi);return function(Se){return Se.getAttribute("id")===oe}},s.find.ID=function($,oe){if(typeof oe.getElementById<"u"&&N){var Se=oe.getElementById($);return Se?[Se]:[]}}):(s.filter.ID=function($){var oe=$.replace(di,pi);return function(Se){var Re=typeof Se.getAttributeNode<"u"&&Se.getAttributeNode("id");return Re&&Re.value===oe}},s.find.ID=function($,oe){if(typeof oe.getElementById<"u"&&N){var Se,Re,Ie,Ce=oe.getElementById($);if(Ce){if(Se=Ce.getAttributeNode("id"),Se&&Se.value===$)return[Ce];for(Ie=oe.getElementsByName($),Re=0;Ce=Ie[Re++];)if(Se=Ce.getAttributeNode("id"),Se&&Se.value===$)return[Ce]}return[]}}),s.find.TAG=function($,oe){return typeof oe.getElementsByTagName<"u"?oe.getElementsByTagName($):oe.querySelectorAll($)},s.find.CLASS=function($,oe){if(typeof oe.getElementsByClassName<"u"&&N)return oe.getElementsByClassName($)},H=[],Hn(function($){var oe;D.appendChild($).innerHTML="<a id='"+se+"' href='' disabled='disabled'></a><select id='"+se+"-\r\\' disabled='disabled'><option selected=''></option></select>",$.querySelectorAll("[selected]").length||H.push("\\["+F+"*(?:value|"+qr+")"),$.querySelectorAll("[id~="+se+"-]").length||H.push("~="),$.querySelectorAll("a#"+se+"+*").length||H.push(".#.+[+~]"),$.querySelectorAll(":checked").length||H.push(":checked"),oe=w.createElement("input"),oe.setAttribute("type","hidden"),$.appendChild(oe).setAttribute("name","D"),D.appendChild($).disabled=!0,$.querySelectorAll(":disabled").length!==2&&H.push(":enabled",":disabled"),oe=w.createElement("input"),oe.setAttribute("name",""),$.appendChild(oe),$.querySelectorAll("[name='']").length||H.push("\\["+F+"*name"+F+"*="+F+`*(?:''|"")`)}),E.cssHas||H.push(":has"),H=H.length&&new RegExp(H.join("|")),Wt=function($,oe){if($===oe)return M=!0,0;var Se=!$.compareDocumentPosition-!oe.compareDocumentPosition;return Se||(Se=($.ownerDocument||$)==(oe.ownerDocument||oe)?$.compareDocumentPosition(oe):1,Se&1||!E.sortDetached&&oe.compareDocumentPosition($)===Se?$===w||$.ownerDocument==_e&&At.contains(_e,$)?-1:oe===w||oe.ownerDocument==_e&&At.contains(_e,oe)?1:m?d.call(m,$)-d.call(m,oe):0:Se&4?-1:1)}),w}At.matches=function(P,z){return At(P,null,null,z)},At.matchesSelector=function(P,z){if(Ii(P),N&&!Kt[z+" "]&&(!H||!H.test(z)))try{var X=te.call(P,z);if(X||E.disconnectedMatch||P.document&&P.document.nodeType!==11)return X}catch{Kt(z,!0)}return At(z,w,null,[P]).length>0},At.contains=function(P,z){return(P.ownerDocument||P)!=w&&Ii(P),u.contains(P,z)},At.attr=function(P,z){(P.ownerDocument||P)!=w&&Ii(P);var X=s.attrHandle[z.toLowerCase()],$=X&&g.call(s.attrHandle,z.toLowerCase())?X(P,z,!N):void 0;return $!==void 0?$:P.getAttribute(z)},At.error=function(P){throw new Error("Syntax error, unrecognized expression: "+P)},u.uniqueSort=function(P){var z,X=[],$=0,oe=0;if(M=!E.sortStable,m=!E.sortStable&&o.call(P,0),W.call(P,Wt),M){for(;z=P[oe++];)z===P[oe]&&($=X.push(oe));for(;$--;)ie.call(P,X[$],1)}return m=null,P},u.fn.uniqueSort=function(){return this.pushStack(u.uniqueSort(o.apply(this)))},s=u.expr={cacheLength:50,createPseudo:Nr,match:Kr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(P){return P[1]=P[1].replace(di,pi),P[3]=(P[3]||P[4]||P[5]||"").replace(di,pi),P[2]==="~="&&(P[3]=" "+P[3]+" "),P.slice(0,4)},CHILD:function(P){return P[1]=P[1].toLowerCase(),P[1].slice(0,3)==="nth"?(P[3]||At.error(P[0]),P[4]=+(P[4]?P[5]+(P[6]||1):2*(P[3]==="even"||P[3]==="odd")),P[5]=+(P[7]+P[8]||P[3]==="odd")):P[3]&&At.error(P[0]),P},PSEUDO:function(P){var z,X=!P[6]&&P[2];return Kr.CHILD.test(P[0])?null:(P[3]?P[2]=P[4]||P[5]||"":X&&Yr.test(X)&&(z=ga(X,!0))&&(z=X.indexOf(")",X.length-z)-X.length)&&(P[0]=P[0].slice(0,z),P[2]=X.slice(0,z)),P.slice(0,3))}},filter:{TAG:function(P){var z=P.replace(di,pi).toLowerCase();return P==="*"?function(){return!0}:function(X){return R(X,z)}},CLASS:function(P){var z=Ke[P+" "];return z||(z=new RegExp("(^|"+F+")"+P+"("+F+"|$)"))&&Ke(P,function(X){return z.test(typeof X.className=="string"&&X.className||typeof X.getAttribute<"u"&&X.getAttribute("class")||"")})},ATTR:function(P,z,X){return function($){var oe=At.attr($,P);return oe==null?z==="!=":z?(oe+="",z==="="?oe===X:z==="!="?oe!==X:z==="^="?X&&oe.indexOf(X)===0:z==="*="?X&&oe.indexOf(X)>-1:z==="$="?X&&oe.slice(-X.length)===X:z==="~="?(" "+oe.replace(Et," ")+" ").indexOf(X)>-1:z==="|="?oe===X||oe.slice(0,X.length+1)===X+"-":!1):!0}},CHILD:function(P,z,X,$,oe){var Se=P.slice(0,3)!=="nth",Re=P.slice(-4)!=="last",Ie=z==="of-type";return $===1&&oe===0?function(Ce){return!!Ce.parentNode}:function(Ce,pt,qe){var Ze,ft,Ge,Pt,ur,Qt=Se!==Re?"nextSibling":"previousSibling",br=Ce.parentNode,Jr=Ie&&Ce.nodeName.toLowerCase(),Gn=!qe&&!Ie,nr=!1;if(br){if(Se){for(;Qt;){for(Ge=Ce;Ge=Ge[Qt];)if(Ie?R(Ge,Jr):Ge.nodeType===1)return!1;ur=Qt=P==="only"&&!ur&&"nextSibling"}return!0}if(ur=[Re?br.firstChild:br.lastChild],Re&&Gn){for(ft=br[se]||(br[se]={}),Ze=ft[P]||[],Pt=Ze[0]===Y&&Ze[1],nr=Pt&&Ze[2],Ge=Pt&&br.childNodes[Pt];Ge=++Pt&&Ge&&Ge[Qt]||(nr=Pt=0)||ur.pop();)if(Ge.nodeType===1&&++nr&&Ge===Ce){ft[P]=[Y,Pt,nr];break}}else if(Gn&&(ft=Ce[se]||(Ce[se]={}),Ze=ft[P]||[],Pt=Ze[0]===Y&&Ze[1],nr=Pt),nr===!1)for(;(Ge=++Pt&&Ge&&Ge[Qt]||(nr=Pt=0)||ur.pop())&&!((Ie?R(Ge,Jr):Ge.nodeType===1)&&++nr&&(Gn&&(ft=Ge[se]||(Ge[se]={}),ft[P]=[Y,nr]),Ge===Ce)););return nr-=oe,nr===$||nr%$===0&&nr/$>=0}}},PSEUDO:function(P,z){var X,$=s.pseudos[P]||s.setFilters[P.toLowerCase()]||At.error("unsupported pseudo: "+P);return $[se]?$(z):$.length>1?(X=[P,P,"",z],s.setFilters.hasOwnProperty(P.toLowerCase())?Nr(function(oe,Se){for(var Re,Ie=$(oe,z),Ce=Ie.length;Ce--;)Re=d.call(oe,Ie[Ce]),oe[Re]=!(Se[Re]=Ie[Ce])}):function(oe){return $(oe,0,X)}):$}},pseudos:{not:Nr(function(P){var z=[],X=[],$=tl(P.replace(ne,"$1"));return $[se]?Nr(function(oe,Se,Re,Ie){for(var Ce,pt=$(oe,null,Ie,[]),qe=oe.length;qe--;)(Ce=pt[qe])&&(oe[qe]=!(Se[qe]=Ce))}):function(oe,Se,Re){return z[0]=oe,$(z,null,Re,X),z[0]=null,!X.pop()}}),has:Nr(function(P){return function(z){return At(P,z).length>0}}),contains:Nr(function(P){return P=P.replace(di,pi),function(z){return(z.textContent||u.text(z)).indexOf(P)>-1}}),lang:Nr(function(P){return ma.test(P||"")||At.error("unsupported lang: "+P),P=P.replace(di,pi).toLowerCase(),function(z){var X;do if(X=N?z.lang:z.getAttribute("xml:lang")||z.getAttribute("lang"))return X=X.toLowerCase(),X===P||X.indexOf(P+"-")===0;while((z=z.parentNode)&&z.nodeType===1);return!1}}),target:function(P){var z=e.location&&e.location.hash;return z&&z.slice(1)===P.id},root:function(P){return P===D},focus:function(P){return P===xx()&&w.hasFocus()&&!!(P.type||P.href||~P.tabIndex)},enabled:xh(!1),disabled:xh(!0),checked:function(P){return R(P,"input")&&!!P.checked||R(P,"option")&&!!P.selected},selected:function(P){return P.parentNode&&P.parentNode.selectedIndex,P.selected===!0},empty:function(P){for(P=P.firstChild;P;P=P.nextSibling)if(P.nodeType<6)return!1;return!0},parent:function(P){return!s.pseudos.empty(P)},header:function(P){return Ni.test(P.nodeName)},input:function(P){return Ui.test(P.nodeName)},button:function(P){return R(P,"input")&&P.type==="button"||R(P,"button")},text:function(P){var z;return R(P,"input")&&P.type==="text"&&((z=P.getAttribute("type"))==null||z.toLowerCase()==="text")},first:an(function(){return[0]}),last:an(function(P,z){return[z-1]}),eq:an(function(P,z,X){return[X<0?X+z:X]}),even:an(function(P,z){for(var X=0;X<z;X+=2)P.push(X);return P}),odd:an(function(P,z){for(var X=1;X<z;X+=2)P.push(X);return P}),lt:an(function(P,z,X){var $;for(X<0?$=X+z:X>z?$=z:$=X;--$>=0;)P.push($);return P}),gt:an(function(P,z,X){for(var $=X<0?X+z:X;++$<z;)P.push($);return P})}},s.pseudos.nth=s.pseudos.eq;for(a in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})s.pseudos[a]=yx(a);for(a in{submit:!0,reset:!0})s.pseudos[a]=Mx(a);function yh(){}yh.prototype=s.filters=s.pseudos,s.setFilters=new yh;function ga(P,z){var X,$,oe,Se,Re,Ie,Ce,pt=yt[P+" "];if(pt)return z?0:pt.slice(0);for(Re=P,Ie=[],Ce=s.preFilter;Re;){(!X||($=Ft.exec(Re)))&&($&&(Re=Re.slice($[0].length)||Re),Ie.push(oe=[])),X=!1,($=fa.exec(Re))&&(X=$.shift(),oe.push({value:X,type:$[0].replace(ne," ")}),Re=Re.slice(X.length));for(Se in s.filter)($=Kr[Se].exec(Re))&&(!Ce[Se]||($=Ce[Se]($)))&&(X=$.shift(),oe.push({value:X,type:Se,matches:$}),Re=Re.slice(X.length));if(!X)break}return z?Re.length:Re?At.error(P):yt(P,Ie).slice(0)}function Mo(P){for(var z=0,X=P.length,$="";z<X;z++)$+=P[z].value;return $}function So(P,z,X){var $=z.dir,oe=z.next,Se=oe||$,Re=X&&Se==="parentNode",Ie=fe++;return z.first?function(Ce,pt,qe){for(;Ce=Ce[$];)if(Ce.nodeType===1||Re)return P(Ce,pt,qe);return!1}:function(Ce,pt,qe){var Ze,ft,Ge=[Y,Ie];if(qe){for(;Ce=Ce[$];)if((Ce.nodeType===1||Re)&&P(Ce,pt,qe))return!0}else for(;Ce=Ce[$];)if(Ce.nodeType===1||Re)if(ft=Ce[se]||(Ce[se]={}),oe&&R(Ce,oe))Ce=Ce[$]||Ce;else{if((Ze=ft[Se])&&Ze[0]===Y&&Ze[1]===Ie)return Ge[2]=Ze[2];if(ft[Se]=Ge,Ge[2]=P(Ce,pt,qe))return!0}return!1}}function $s(P){return P.length>1?function(z,X,$){for(var oe=P.length;oe--;)if(!P[oe](z,X,$))return!1;return!0}:P[0]}function Sx(P,z,X){for(var $=0,oe=z.length;$<oe;$++)At(P,z[$],X);return X}function Eo(P,z,X,$,oe){for(var Se,Re=[],Ie=0,Ce=P.length,pt=z!=null;Ie<Ce;Ie++)(Se=P[Ie])&&(!X||X(Se,$,oe))&&(Re.push(Se),pt&&z.push(Ie));return Re}function Qs(P,z,X,$,oe,Se){return $&&!$[se]&&($=Qs($)),oe&&!oe[se]&&(oe=Qs(oe,Se)),Nr(function(Re,Ie,Ce,pt){var qe,Ze,ft,Ge,Pt=[],ur=[],Qt=Ie.length,br=Re||Sx(z||"*",Ce.nodeType?[Ce]:Ce,[]),Jr=P&&(Re||!z)?Eo(br,Pt,P,Ce,pt):br;if(X?(Ge=oe||(Re?P:Qt||$)?[]:Ie,X(Jr,Ge,Ce,pt)):Ge=Jr,$)for(qe=Eo(Ge,ur),$(qe,[],Ce,pt),Ze=qe.length;Ze--;)(ft=qe[Ze])&&(Ge[ur[Ze]]=!(Jr[ur[Ze]]=ft));if(Re){if(oe||P){if(oe){for(qe=[],Ze=Ge.length;Ze--;)(ft=Ge[Ze])&&qe.push(Jr[Ze]=ft);oe(null,Ge=[],qe,pt)}for(Ze=Ge.length;Ze--;)(ft=Ge[Ze])&&(qe=oe?d.call(Re,ft):Pt[Ze])>-1&&(Re[qe]=!(Ie[qe]=ft))}}else Ge=Eo(Ge===Ie?Ge.splice(Qt,Ge.length):Ge),oe?oe(null,Ie,Ge,pt):S.apply(Ie,Ge)})}function el(P){for(var z,X,$,oe=P.length,Se=s.relative[P[0].type],Re=Se||s.relative[" "],Ie=Se?1:0,Ce=So(function(Ze){return Ze===z},Re,!0),pt=So(function(Ze){return d.call(z,Ze)>-1},Re,!0),qe=[function(Ze,ft,Ge){var Pt=!Se&&(Ge||ft!=h)||((z=ft).nodeType?Ce(Ze,ft,Ge):pt(Ze,ft,Ge));return z=null,Pt}];Ie<oe;Ie++)if(X=s.relative[P[Ie].type])qe=[So($s(qe),X)];else{if(X=s.filter[P[Ie].type].apply(null,P[Ie].matches),X[se]){for($=++Ie;$<oe&&!s.relative[P[$].type];$++);return Qs(Ie>1&&$s(qe),Ie>1&&Mo(P.slice(0,Ie-1).concat({value:P[Ie-2].type===" "?"*":""})).replace(ne,"$1"),X,Ie<$&&el(P.slice(Ie,$)),$<oe&&el(P=P.slice($)),$<oe&&Mo(P))}qe.push(X)}return $s(qe)}function Ex(P,z){var X=z.length>0,$=P.length>0,oe=function(Se,Re,Ie,Ce,pt){var qe,Ze,ft,Ge=0,Pt="0",ur=Se&&[],Qt=[],br=h,Jr=Se||$&&s.find.TAG("*",pt),Gn=Y+=br==null?1:Math.random()||.1,nr=Jr.length;for(pt&&(h=Re==w||Re||pt);Pt!==nr&&(qe=Jr[Pt])!=null;Pt++){if($&&qe){for(Ze=0,!Re&&qe.ownerDocument!=w&&(Ii(qe),Ie=!N);ft=P[Ze++];)if(ft(qe,Re||w,Ie)){S.call(Ce,qe);break}pt&&(Y=Gn)}X&&((qe=!ft&&qe)&&Ge--,Se&&ur.push(qe))}if(Ge+=Pt,X&&Pt!==Ge){for(Ze=0;ft=z[Ze++];)ft(ur,Qt,Re,Ie);if(Se){if(Ge>0)for(;Pt--;)ur[Pt]||Qt[Pt]||(Qt[Pt]=T.call(Ce));Qt=Eo(Qt)}S.apply(Ce,Qt),pt&&!Se&&Qt.length>0&&Ge+z.length>1&&u.uniqueSort(Ce)}return pt&&(Y=Gn,h=br),ur};return X?Nr(oe):oe}function tl(P,z){var X,$=[],oe=[],Se=ct[P+" "];if(!Se){for(z||(z=ga(P)),X=z.length;X--;)Se=el(z[X]),Se[se]?$.push(Se):oe.push(Se);Se=ct(P,Ex(oe,$)),Se.selector=P}return Se}function Mh(P,z,X,$){var oe,Se,Re,Ie,Ce,pt=typeof P=="function"&&P,qe=!$&&ga(P=pt.selector||P);if(X=X||[],qe.length===1){if(Se=qe[0]=qe[0].slice(0),Se.length>2&&(Re=Se[0]).type==="ID"&&z.nodeType===9&&N&&s.relative[Se[1].type]){if(z=(s.find.ID(Re.matches[0].replace(di,pi),z)||[])[0],z)pt&&(z=z.parentNode);else return X;P=P.slice(Se.shift().value.length)}for(oe=Kr.needsContext.test(P)?0:Se.length;oe--&&(Re=Se[oe],!s.relative[Ie=Re.type]);)if((Ce=s.find[Ie])&&($=Ce(Re.matches[0].replace(di,pi),Js.test(Se[0].type)&&Zs(z.parentNode)||z))){if(Se.splice(oe,1),P=$.length&&Mo(Se),!P)return S.apply(X,$),X;break}}return(pt||tl(P,qe))($,z,!N,X,!z||Js.test(P)&&Zs(z.parentNode)||z),X}E.sortStable=se.split("").sort(Wt).join("")===se,Ii(),E.sortDetached=Hn(function(P){return P.compareDocumentPosition(w.createElement("fieldset"))&1}),u.find=At,u.expr[":"]=u.expr.pseudos,u.unique=u.uniqueSort,At.compile=tl,At.select=Mh,At.setDocument=Ii,At.tokenize=ga,At.escape=u.escapeSelector,At.getText=u.text,At.isXML=u.isXMLDoc,At.selectors=u.expr,At.support=u.support,At.uniqueSort=u.uniqueSort})();var he=function(a,s,h){for(var m=[],M=h!==void 0;(a=a[s])&&a.nodeType!==9;)if(a.nodeType===1){if(M&&u(a).is(h))break;m.push(a)}return m},Me=function(a,s){for(var h=[];a;a=a.nextSibling)a.nodeType===1&&a!==s&&h.push(a);return h},je=u.expr.match.needsContext,st=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function St(a,s,h){return b(s)?u.grep(a,function(m,M){return!!s.call(m,M,m)!==h}):s.nodeType?u.grep(a,function(m){return m===s!==h}):typeof s!="string"?u.grep(a,function(m){return d.call(s,m)>-1!==h}):u.filter(s,a,h)}u.filter=function(a,s,h){var m=s[0];return h&&(a=":not("+a+")"),s.length===1&&m.nodeType===1?u.find.matchesSelector(m,a)?[m]:[]:u.find.matches(a,u.grep(s,function(M){return M.nodeType===1}))},u.fn.extend({find:function(a){var s,h,m=this.length,M=this;if(typeof a!="string")return this.pushStack(u(a).filter(function(){for(s=0;s<m;s++)if(u.contains(M[s],this))return!0}));for(h=this.pushStack([]),s=0;s<m;s++)u.find(a,M[s],h);return m>1?u.uniqueSort(h):h},filter:function(a){return this.pushStack(St(this,a||[],!1))},not:function(a){return this.pushStack(St(this,a||[],!0))},is:function(a){return!!St(this,typeof a=="string"&&je.test(a)?u(a):a||[],!1).length}});var ae,ye=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Le=u.fn.init=function(a,s,h){var m,M;if(!a)return this;if(h=h||ae,typeof a=="string")if(a[0]==="<"&&a[a.length-1]===">"&&a.length>=3?m=[null,a,null]:m=ye.exec(a),m&&(m[1]||!s))if(m[1]){if(s=s instanceof u?s[0]:s,u.merge(this,u.parseHTML(m[1],s&&s.nodeType?s.ownerDocument||s:v,!0)),st.test(m[1])&&u.isPlainObject(s))for(m in s)b(this[m])?this[m](s[m]):this.attr(m,s[m]);return this}else return M=v.getElementById(m[2]),M&&(this[0]=M,this.length=1),this;else return!s||s.jquery?(s||h).find(a):this.constructor(s).find(a);else{if(a.nodeType)return this[0]=a,this.length=1,this;if(b(a))return h.ready!==void 0?h.ready(a):a(u)}return u.makeArray(a,this)};Le.prototype=u.fn,ae=u(v);var Ae=/^(?:parents|prev(?:Until|All))/,$e={children:!0,contents:!0,next:!0,prev:!0};u.fn.extend({has:function(a){var s=u(a,this),h=s.length;return this.filter(function(){for(var m=0;m<h;m++)if(u.contains(this,s[m]))return!0})},closest:function(a,s){var h,m=0,M=this.length,S=[],w=typeof a!="string"&&u(a);if(!je.test(a)){for(;m<M;m++)for(h=this[m];h&&h!==s;h=h.parentNode)if(h.nodeType<11&&(w?w.index(h)>-1:h.nodeType===1&&u.find.matchesSelector(h,a))){S.push(h);break}}return this.pushStack(S.length>1?u.uniqueSort(S):S)},index:function(a){return a?typeof a=="string"?d.call(u(a),this[0]):d.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,s){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(a,s))))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}});function et(a,s){for(;(a=a[s])&&a.nodeType!==1;);return a}u.each({parent:function(a){var s=a.parentNode;return s&&s.nodeType!==11?s:null},parents:function(a){return he(a,"parentNode")},parentsUntil:function(a,s,h){return he(a,"parentNode",h)},next:function(a){return et(a,"nextSibling")},prev:function(a){return et(a,"previousSibling")},nextAll:function(a){return he(a,"nextSibling")},prevAll:function(a){return he(a,"previousSibling")},nextUntil:function(a,s,h){return he(a,"nextSibling",h)},prevUntil:function(a,s,h){return he(a,"previousSibling",h)},siblings:function(a){return Me((a.parentNode||{}).firstChild,a)},children:function(a){return Me(a.firstChild)},contents:function(a){return a.contentDocument!=null&&n(a.contentDocument)?a.contentDocument:(R(a,"template")&&(a=a.content||a),u.merge([],a.childNodes))}},function(a,s){u.fn[a]=function(h,m){var M=u.map(this,s,h);return a.slice(-5)!=="Until"&&(m=h),m&&typeof m=="string"&&(M=u.filter(m,M)),this.length>1&&($e[a]||u.uniqueSort(M),Ae.test(a)&&M.reverse()),this.pushStack(M)}});var Ye=/[^\x20\t\r\n\f]+/g;function K(a){var s={};return u.each(a.match(Ye)||[],function(h,m){s[m]=!0}),s}u.Callbacks=function(a){a=typeof a=="string"?K(a):u.extend({},a);var s,h,m,M,S=[],w=[],D=-1,N=function(){for(M=M||a.once,m=s=!0;w.length;D=-1)for(h=w.shift();++D<S.length;)S[D].apply(h[0],h[1])===!1&&a.stopOnFalse&&(D=S.length,h=!1);a.memory||(h=!1),s=!1,M&&(h?S=[]:S="")},H={add:function(){return S&&(h&&!s&&(D=S.length-1,w.push(h)),function te(se){u.each(se,function(Y,fe){b(fe)?(!a.unique||!H.has(fe))&&S.push(fe):fe&&fe.length&&B(fe)!=="string"&&te(fe)})}(arguments),h&&!s&&N()),this},remove:function(){return u.each(arguments,function(te,se){for(var Y;(Y=u.inArray(se,S,Y))>-1;)S.splice(Y,1),Y<=D&&D--}),this},has:function(te){return te?u.inArray(te,S)>-1:S.length>0},empty:function(){return S&&(S=[]),this},disable:function(){return M=w=[],S=h="",this},disabled:function(){return!S},lock:function(){return M=w=[],!h&&!s&&(S=h=""),this},locked:function(){return!!M},fireWith:function(te,se){return M||(se=se||[],se=[te,se.slice?se.slice():se],w.push(se),s||N()),this},fire:function(){return H.fireWith(this,arguments),this},fired:function(){return!!m}};return H};function Je(a){return a}function Fe(a){throw a}function Nt(a,s,h,m){var M;try{a&&b(M=a.promise)?M.call(a).done(s).fail(h):a&&b(M=a.then)?M.call(a,s,h):s.apply(void 0,[a].slice(m))}catch(S){h.apply(void 0,[S])}}u.extend({Deferred:function(a){var s=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],h="pending",m={state:function(){return h},always:function(){return M.done(arguments).fail(arguments),this},catch:function(S){return m.then(null,S)},pipe:function(){var S=arguments;return u.Deferred(function(w){u.each(s,function(D,N){var H=b(S[N[4]])&&S[N[4]];M[N[1]](function(){var te=H&&H.apply(this,arguments);te&&b(te.promise)?te.promise().progress(w.notify).done(w.resolve).fail(w.reject):w[N[0]+"With"](this,H?[te]:arguments)})}),S=null}).promise()},then:function(S,w,D){var N=0;function H(te,se,Y,fe){return function(){var Ke=this,yt=arguments,ct=function(){var Wt,qr;if(!(te<N)){if(Wt=Y.apply(Ke,yt),Wt===se.promise())throw new TypeError("Thenable self-resolution");qr=Wt&&(typeof Wt=="object"||typeof Wt=="function")&&Wt.then,b(qr)?fe?qr.call(Wt,H(N,se,Je,fe),H(N,se,Fe,fe)):(N++,qr.call(Wt,H(N,se,Je,fe),H(N,se,Fe,fe),H(N,se,Je,se.notifyWith))):(Y!==Je&&(Ke=void 0,yt=[Wt]),(fe||se.resolveWith)(Ke,yt))}},Kt=fe?ct:function(){try{ct()}catch(Wt){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(Wt,Kt.error),te+1>=N&&(Y!==Fe&&(Ke=void 0,yt=[Wt]),se.rejectWith(Ke,yt))}};te?Kt():(u.Deferred.getErrorHook?Kt.error=u.Deferred.getErrorHook():u.Deferred.getStackHook&&(Kt.error=u.Deferred.getStackHook()),e.setTimeout(Kt))}}return u.Deferred(function(te){s[0][3].add(H(0,te,b(D)?D:Je,te.notifyWith)),s[1][3].add(H(0,te,b(S)?S:Je)),s[2][3].add(H(0,te,b(w)?w:Fe))}).promise()},promise:function(S){return S!=null?u.extend(S,m):m}},M={};return u.each(s,function(S,w){var D=w[2],N=w[5];m[w[1]]=D.add,N&&D.add(function(){h=N},s[3-S][2].disable,s[3-S][3].disable,s[0][2].lock,s[0][3].lock),D.add(w[3].fire),M[w[0]]=function(){return M[w[0]+"With"](this===M?void 0:this,arguments),this},M[w[0]+"With"]=D.fireWith}),m.promise(M),a&&a.call(M,M),M},when:function(a){var s=arguments.length,h=s,m=Array(h),M=o.call(arguments),S=u.Deferred(),w=function(D){return function(N){m[D]=this,M[D]=arguments.length>1?o.call(arguments):N,--s||S.resolveWith(m,M)}};if(s<=1&&(Nt(a,S.done(w(h)).resolve,S.reject,!s),S.state()==="pending"||b(M[h]&&M[h].then)))return S.then();for(;h--;)Nt(M[h],w(h),S.reject);return S.promise()}});var Xe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(a,s){e.console&&e.console.warn&&a&&Xe.test(a.name)&&e.console.warn("jQuery.Deferred exception: "+a.message,a.stack,s)},u.readyException=function(a){e.setTimeout(function(){throw a})};var Mt=u.Deferred();u.fn.ready=function(a){return Mt.then(a).catch(function(s){u.readyException(s)}),this},u.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--u.readyWait:u.isReady)||(u.isReady=!0,!(a!==!0&&--u.readyWait>0)&&Mt.resolveWith(v,[u]))}}),u.ready.then=Mt.then;function U(){v.removeEventListener("DOMContentLoaded",U),e.removeEventListener("load",U),u.ready()}v.readyState==="complete"||v.readyState!=="loading"&&!v.documentElement.doScroll?e.setTimeout(u.ready):(v.addEventListener("DOMContentLoaded",U),e.addEventListener("load",U));var A=function(a,s,h,m,M,S,w){var D=0,N=a.length,H=h==null;if(B(h)==="object"){M=!0;for(D in h)A(a,s,D,h[D],!0,S,w)}else if(m!==void 0&&(M=!0,b(m)||(w=!0),H&&(w?(s.call(a,m),s=null):(H=s,s=function(te,se,Y){return H.call(u(te),Y)})),s))for(;D<N;D++)s(a[D],h,w?m:m.call(a[D],D,s(a[D],h)));return M?a:H?s.call(a):N?s(a[0],h):S},ee=/^-ms-/,ue=/-([a-z])/g;function me(a,s){return s.toUpperCase()}function de(a){return a.replace(ee,"ms-").replace(ue,me)}var ke=function(a){return a.nodeType===1||a.nodeType===9||!+a.nodeType};function ve(){this.expando=u.expando+ve.uid++}ve.uid=1,ve.prototype={cache:function(a){var s=a[this.expando];return s||(s={},ke(a)&&(a.nodeType?a[this.expando]=s:Object.defineProperty(a,this.expando,{value:s,configurable:!0}))),s},set:function(a,s,h){var m,M=this.cache(a);if(typeof s=="string")M[de(s)]=h;else for(m in s)M[de(m)]=s[m];return M},get:function(a,s){return s===void 0?this.cache(a):a[this.expando]&&a[this.expando][de(s)]},access:function(a,s,h){return s===void 0||s&&typeof s=="string"&&h===void 0?this.get(a,s):(this.set(a,s,h),h!==void 0?h:s)},remove:function(a,s){var h,m=a[this.expando];if(m!==void 0){if(s!==void 0)for(Array.isArray(s)?s=s.map(de):(s=de(s),s=s in m?[s]:s.match(Ye)||[]),h=s.length;h--;)delete m[s[h]];(s===void 0||u.isEmptyObject(m))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var s=a[this.expando];return s!==void 0&&!u.isEmptyObject(s)}};var ce=new ve,Pe=new ve,be=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ue=/[A-Z]/g;function Qe(a){return a==="true"?!0:a==="false"?!1:a==="null"?null:a===+a+""?+a:be.test(a)?JSON.parse(a):a}function Ne(a,s,h){var m;if(h===void 0&&a.nodeType===1)if(m="data-"+s.replace(Ue,"-$&").toLowerCase(),h=a.getAttribute(m),typeof h=="string"){try{h=Qe(h)}catch{}Pe.set(a,s,h)}else h=void 0;return h}u.extend({hasData:function(a){return Pe.hasData(a)||ce.hasData(a)},data:function(a,s,h){return Pe.access(a,s,h)},removeData:function(a,s){Pe.remove(a,s)},_data:function(a,s,h){return ce.access(a,s,h)},_removeData:function(a,s){ce.remove(a,s)}}),u.fn.extend({data:function(a,s){var h,m,M,S=this[0],w=S&&S.attributes;if(a===void 0){if(this.length&&(M=Pe.get(S),S.nodeType===1&&!ce.get(S,"hasDataAttrs"))){for(h=w.length;h--;)w[h]&&(m=w[h].name,m.indexOf("data-")===0&&(m=de(m.slice(5)),Ne(S,m,M[m])));ce.set(S,"hasDataAttrs",!0)}return M}return typeof a=="object"?this.each(function(){Pe.set(this,a)}):A(this,function(D){var N;if(S&&D===void 0)return N=Pe.get(S,a),N!==void 0||(N=Ne(S,a),N!==void 0)?N:void 0;this.each(function(){Pe.set(this,a,D)})},null,s,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){Pe.remove(this,a)})}}),u.extend({queue:function(a,s,h){var m;if(a)return s=(s||"fx")+"queue",m=ce.get(a,s),h&&(!m||Array.isArray(h)?m=ce.access(a,s,u.makeArray(h)):m.push(h)),m||[]},dequeue:function(a,s){s=s||"fx";var h=u.queue(a,s),m=h.length,M=h.shift(),S=u._queueHooks(a,s),w=function(){u.dequeue(a,s)};M==="inprogress"&&(M=h.shift(),m--),M&&(s==="fx"&&h.unshift("inprogress"),delete S.stop,M.call(a,w,S)),!m&&S&&S.empty.fire()},_queueHooks:function(a,s){var h=s+"queueHooks";return ce.get(a,h)||ce.access(a,h,{empty:u.Callbacks("once memory").add(function(){ce.remove(a,[s+"queue",h])})})}}),u.fn.extend({queue:function(a,s){var h=2;return typeof a!="string"&&(s=a,a="fx",h--),arguments.length<h?u.queue(this[0],a):s===void 0?this:this.each(function(){var m=u.queue(this,a,s);u._queueHooks(this,a),a==="fx"&&m[0]!=="inprogress"&&u.dequeue(this,a)})},dequeue:function(a){return this.each(function(){u.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,s){var h,m=1,M=u.Deferred(),S=this,w=this.length,D=function(){--m||M.resolveWith(S,[S])};for(typeof a!="string"&&(s=a,a=void 0),a=a||"fx";w--;)h=ce.get(S[w],a+"queueHooks"),h&&h.empty&&(m++,h.empty.add(D));return D(),M.promise(s)}});var De=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,lt=new RegExp("^(?:([+-])=|)("+De+")([a-z%]*)$","i"),tt=["Top","Right","Bottom","Left"],ht=v.documentElement,dt=function(a){return u.contains(a.ownerDocument,a)},Lt={composed:!0};ht.getRootNode&&(dt=function(a){return u.contains(a.ownerDocument,a)||a.getRootNode(Lt)===a.ownerDocument});var Oe=function(a,s){return a=s||a,a.style.display==="none"||a.style.display===""&&dt(a)&&u.css(a,"display")==="none"};function I(a,s,h,m){var M,S,w=20,D=m?function(){return m.cur()}:function(){return u.css(a,s,"")},N=D(),H=h&&h[3]||(u.cssNumber[s]?"":"px"),te=a.nodeType&&(u.cssNumber[s]||H!=="px"&&+N)&&lt.exec(u.css(a,s));if(te&&te[3]!==H){for(N=N/2,H=H||te[3],te=+N||1;w--;)u.style(a,s,te+H),(1-S)*(1-(S=D()/N||.5))<=0&&(w=0),te=te/S;te=te*2,u.style(a,s,te+H),h=h||[]}return h&&(te=+te||+N||0,M=h[1]?te+(h[1]+1)*h[2]:+h[2],m&&(m.unit=H,m.start=te,m.end=M)),M}var Te={};function xe(a){var s,h=a.ownerDocument,m=a.nodeName,M=Te[m];return M||(s=h.body.appendChild(h.createElement(m)),M=u.css(s,"display"),s.parentNode.removeChild(s),M==="none"&&(M="block"),Te[m]=M,M)}function We(a,s){for(var h,m,M=[],S=0,w=a.length;S<w;S++)m=a[S],m.style&&(h=m.style.display,s?(h==="none"&&(M[S]=ce.get(m,"display")||null,M[S]||(m.style.display="")),m.style.display===""&&Oe(m)&&(M[S]=xe(m))):h!=="none"&&(M[S]="none",ce.set(m,"display",h)));for(S=0;S<w;S++)M[S]!=null&&(a[S].style.display=M[S]);return a}u.fn.extend({show:function(){return We(this,!0)},hide:function(){return We(this)},toggle:function(a){return typeof a=="boolean"?a?this.show():this.hide():this.each(function(){Oe(this)?u(this).show():u(this).hide()})}});var Be=/^(?:checkbox|radio)$/i,bt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ct=/^$|^module$|\/(?:java|ecma)script/i;(function(){var a=v.createDocumentFragment(),s=a.appendChild(v.createElement("div")),h=v.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),s.appendChild(h),E.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,s.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!s.cloneNode(!0).lastChild.defaultValue,s.innerHTML="<option></option>",E.option=!!s.lastChild})();var mt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};mt.tbody=mt.tfoot=mt.colgroup=mt.caption=mt.thead,mt.th=mt.td,E.option||(mt.optgroup=mt.option=[1,"<select multiple='multiple'>","</select>"]);function Tt(a,s){var h;return typeof a.getElementsByTagName<"u"?h=a.getElementsByTagName(s||"*"):typeof a.querySelectorAll<"u"?h=a.querySelectorAll(s||"*"):h=[],s===void 0||s&&R(a,s)?u.merge([a],h):h}function wt(a,s){for(var h=0,m=a.length;h<m;h++)ce.set(a[h],"globalEval",!s||ce.get(s[h],"globalEval"))}var Sr=/<|&#?\w+;/;function fr(a,s,h,m,M){for(var S,w,D,N,H,te,se=s.createDocumentFragment(),Y=[],fe=0,Ke=a.length;fe<Ke;fe++)if(S=a[fe],S||S===0)if(B(S)==="object")u.merge(Y,S.nodeType?[S]:S);else if(!Sr.test(S))Y.push(s.createTextNode(S));else{for(w=w||se.appendChild(s.createElement("div")),D=(bt.exec(S)||["",""])[1].toLowerCase(),N=mt[D]||mt._default,w.innerHTML=N[1]+u.htmlPrefilter(S)+N[2],te=N[0];te--;)w=w.lastChild;u.merge(Y,w.childNodes),w=se.firstChild,w.textContent=""}for(se.textContent="",fe=0;S=Y[fe++];){if(m&&u.inArray(S,m)>-1){M&&M.push(S);continue}if(H=dt(S),w=Tt(se.appendChild(S),"script"),H&&wt(w),h)for(te=0;S=w[te++];)Ct.test(S.type||"")&&h.push(S)}return se}var Vr=/^([^.]*)(?:\.(.+)|)/;function ci(){return!0}function ui(){return!1}function ca(a,s,h,m,M,S){var w,D;if(typeof s=="object"){typeof h!="string"&&(m=m||h,h=void 0);for(D in s)ca(a,D,h,m,s[D],S);return a}if(m==null&&M==null?(M=h,m=h=void 0):M==null&&(typeof h=="string"?(M=m,m=void 0):(M=m,m=h,h=void 0)),M===!1)M=ui;else if(!M)return a;return S===1&&(w=M,M=function(N){return u().off(N),w.apply(this,arguments)},M.guid=w.guid||(w.guid=u.guid++)),a.each(function(){u.event.add(this,s,M,m,h)})}u.event={global:{},add:function(a,s,h,m,M){var S,w,D,N,H,te,se,Y,fe,Ke,yt,ct=ce.get(a);if(ke(a))for(h.handler&&(S=h,h=S.handler,M=S.selector),M&&u.find.matchesSelector(ht,M),h.guid||(h.guid=u.guid++),(N=ct.events)||(N=ct.events=Object.create(null)),(w=ct.handle)||(w=ct.handle=function(Kt){return typeof u<"u"&&u.event.triggered!==Kt.type?u.event.dispatch.apply(a,arguments):void 0}),s=(s||"").match(Ye)||[""],H=s.length;H--;)D=Vr.exec(s[H])||[],fe=yt=D[1],Ke=(D[2]||"").split(".").sort(),fe&&(se=u.event.special[fe]||{},fe=(M?se.delegateType:se.bindType)||fe,se=u.event.special[fe]||{},te=u.extend({type:fe,origType:yt,data:m,handler:h,guid:h.guid,selector:M,needsContext:M&&u.expr.match.needsContext.test(M),namespace:Ke.join(".")},S),(Y=N[fe])||(Y=N[fe]=[],Y.delegateCount=0,(!se.setup||se.setup.call(a,m,Ke,w)===!1)&&a.addEventListener&&a.addEventListener(fe,w)),se.add&&(se.add.call(a,te),te.handler.guid||(te.handler.guid=h.guid)),M?Y.splice(Y.delegateCount++,0,te):Y.push(te),u.event.global[fe]=!0)},remove:function(a,s,h,m,M){var S,w,D,N,H,te,se,Y,fe,Ke,yt,ct=ce.hasData(a)&&ce.get(a);if(!(!ct||!(N=ct.events))){for(s=(s||"").match(Ye)||[""],H=s.length;H--;){if(D=Vr.exec(s[H])||[],fe=yt=D[1],Ke=(D[2]||"").split(".").sort(),!fe){for(fe in N)u.event.remove(a,fe+s[H],h,m,!0);continue}for(se=u.event.special[fe]||{},fe=(m?se.delegateType:se.bindType)||fe,Y=N[fe]||[],D=D[2]&&new RegExp("(^|\\.)"+Ke.join("\\.(?:.*\\.|)")+"(\\.|$)"),w=S=Y.length;S--;)te=Y[S],(M||yt===te.origType)&&(!h||h.guid===te.guid)&&(!D||D.test(te.namespace))&&(!m||m===te.selector||m==="**"&&te.selector)&&(Y.splice(S,1),te.selector&&Y.delegateCount--,se.remove&&se.remove.call(a,te));w&&!Y.length&&((!se.teardown||se.teardown.call(a,Ke,ct.handle)===!1)&&u.removeEvent(a,fe,ct.handle),delete N[fe])}u.isEmptyObject(N)&&ce.remove(a,"handle events")}},dispatch:function(a){var s,h,m,M,S,w,D=new Array(arguments.length),N=u.event.fix(a),H=(ce.get(this,"events")||Object.create(null))[N.type]||[],te=u.event.special[N.type]||{};for(D[0]=N,s=1;s<arguments.length;s++)D[s]=arguments[s];if(N.delegateTarget=this,!(te.preDispatch&&te.preDispatch.call(this,N)===!1)){for(w=u.event.handlers.call(this,N,H),s=0;(M=w[s++])&&!N.isPropagationStopped();)for(N.currentTarget=M.elem,h=0;(S=M.handlers[h++])&&!N.isImmediatePropagationStopped();)(!N.rnamespace||S.namespace===!1||N.rnamespace.test(S.namespace))&&(N.handleObj=S,N.data=S.data,m=((u.event.special[S.origType]||{}).handle||S.handler).apply(M.elem,D),m!==void 0&&(N.result=m)===!1&&(N.preventDefault(),N.stopPropagation()));return te.postDispatch&&te.postDispatch.call(this,N),N.result}},handlers:function(a,s){var h,m,M,S,w,D=[],N=s.delegateCount,H=a.target;if(N&&H.nodeType&&!(a.type==="click"&&a.button>=1)){for(;H!==this;H=H.parentNode||this)if(H.nodeType===1&&!(a.type==="click"&&H.disabled===!0)){for(S=[],w={},h=0;h<N;h++)m=s[h],M=m.selector+" ",w[M]===void 0&&(w[M]=m.needsContext?u(M,this).index(H)>-1:u.find(M,this,null,[H]).length),w[M]&&S.push(m);S.length&&D.push({elem:H,handlers:S})}}return H=this,N<s.length&&D.push({elem:H,handlers:s.slice(N)}),D},addProp:function(a,s){Object.defineProperty(u.Event.prototype,a,{enumerable:!0,configurable:!0,get:b(s)?function(){if(this.originalEvent)return s(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(h){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(a){return a[u.expando]?a:new u.Event(a)},special:{load:{noBubble:!0},click:{setup:function(a){var s=this||a;return Be.test(s.type)&&s.click&&R(s,"input")&&hi(s,"click",!0),!1},trigger:function(a){var s=this||a;return Be.test(s.type)&&s.click&&R(s,"input")&&hi(s,"click"),!0},_default:function(a){var s=a.target;return Be.test(s.type)&&s.click&&R(s,"input")&&ce.get(s,"click")||R(s,"a")}},beforeunload:{postDispatch:function(a){a.result!==void 0&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}};function hi(a,s,h){if(!h){ce.get(a,s)===void 0&&u.event.add(a,s,ci);return}ce.set(a,s,!1),u.event.add(a,s,{namespace:!1,handler:function(m){var M,S=ce.get(this,s);if(m.isTrigger&1&&this[s]){if(S)(u.event.special[s]||{}).delegateType&&m.stopPropagation();else if(S=o.call(arguments),ce.set(this,s,S),this[s](),M=ce.get(this,s),ce.set(this,s,!1),S!==M)return m.stopImmediatePropagation(),m.preventDefault(),M}else S&&(ce.set(this,s,u.event.trigger(S[0],S.slice(1),this)),m.stopPropagation(),m.isImmediatePropagationStopped=ci)}})}u.removeEvent=function(a,s,h){a.removeEventListener&&a.removeEventListener(s,h)},u.Event=function(a,s){if(!(this instanceof u.Event))return new u.Event(a,s);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.defaultPrevented===void 0&&a.returnValue===!1?ci:ui,this.target=a.target&&a.target.nodeType===3?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,s&&u.extend(this,s),this.timeStamp=a&&a.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:ui,isPropagationStopped:ui,isImmediatePropagationStopped:ui,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ci,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ci,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ci,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(a,s){function h(m){if(v.documentMode){var M=ce.get(this,"handle"),S=u.event.fix(m);S.type=m.type==="focusin"?"focus":"blur",S.isSimulated=!0,M(m),S.target===S.currentTarget&&M(S)}else u.event.simulate(s,m.target,u.event.fix(m))}u.event.special[a]={setup:function(){var m;if(hi(this,a,!0),v.documentMode)m=ce.get(this,s),m||this.addEventListener(s,h),ce.set(this,s,(m||0)+1);else return!1},trigger:function(){return hi(this,a),!0},teardown:function(){var m;if(v.documentMode)m=ce.get(this,s)-1,m?ce.set(this,s,m):(this.removeEventListener(s,h),ce.remove(this,s));else return!1},_default:function(m){return ce.get(m.target,a)},delegateType:s},u.event.special[s]={setup:function(){var m=this.ownerDocument||this.document||this,M=v.documentMode?this:m,S=ce.get(M,s);S||(v.documentMode?this.addEventListener(s,h):m.addEventListener(a,h,!0)),ce.set(M,s,(S||0)+1)},teardown:function(){var m=this.ownerDocument||this.document||this,M=v.documentMode?this:m,S=ce.get(M,s)-1;S?ce.set(M,s,S):(v.documentMode?this.removeEventListener(s,h):m.removeEventListener(a,h,!0),ce.remove(M,s))}}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,s){u.event.special[a]={delegateType:s,bindType:s,handle:function(h){var m,M=this,S=h.relatedTarget,w=h.handleObj;return(!S||S!==M&&!u.contains(M,S))&&(h.type=w.origType,m=w.handler.apply(this,arguments),h.type=s),m}}}),u.fn.extend({on:function(a,s,h,m){return ca(this,a,s,h,m)},one:function(a,s,h,m){return ca(this,a,s,h,m,1)},off:function(a,s,h){var m,M;if(a&&a.preventDefault&&a.handleObj)return m=a.handleObj,u(a.delegateTarget).off(m.namespace?m.origType+"."+m.namespace:m.origType,m.selector,m.handler),this;if(typeof a=="object"){for(M in a)this.off(M,s,a[M]);return this}return(s===!1||typeof s=="function")&&(h=s,s=void 0),h===!1&&(h=ui),this.each(function(){u.event.remove(this,a,h,s)})}});var mo=/<script|<style|<link/i,zn=/checked\s*(?:[^=]|=\s*.checked.)/i,go=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function ua(a,s){return R(a,"table")&&R(s.nodeType!==11?s:s.firstChild,"tr")&&u(a).children("tbody")[0]||a}function ks(a){return a.type=(a.getAttribute("type")!==null)+"/"+a.type,a}function Hs(a){return(a.type||"").slice(0,5)==="true/"?a.type=a.type.slice(5):a.removeAttribute("type"),a}function vo(a,s){var h,m,M,S,w,D,N;if(s.nodeType===1){if(ce.hasData(a)&&(S=ce.get(a),N=S.events,N)){ce.remove(s,"handle events");for(M in N)for(h=0,m=N[M].length;h<m;h++)u.event.add(s,M,N[M][h])}Pe.hasData(a)&&(w=Pe.access(a),D=u.extend({},w),Pe.set(s,D))}}function C(a,s){var h=s.nodeName.toLowerCase();h==="input"&&Be.test(a.type)?s.checked=a.checked:(h==="input"||h==="textarea")&&(s.defaultValue=a.defaultValue)}function G(a,s,h,m){s=l(s);var M,S,w,D,N,H,te=0,se=a.length,Y=se-1,fe=s[0],Ke=b(fe);if(Ke||se>1&&typeof fe=="string"&&!E.checkClone&&zn.test(fe))return a.each(function(yt){var ct=a.eq(yt);Ke&&(s[0]=fe.call(this,yt,ct.html())),G(ct,s,h,m)});if(se&&(M=fr(s,a[0].ownerDocument,!1,a,m),S=M.firstChild,M.childNodes.length===1&&(M=S),S||m)){for(w=u.map(Tt(M,"script"),ks),D=w.length;te<se;te++)N=M,te!==Y&&(N=u.clone(N,!0,!0),D&&u.merge(w,Tt(N,"script"))),h.call(a[te],N,te);if(D)for(H=w[w.length-1].ownerDocument,u.map(w,Hs),te=0;te<D;te++)N=w[te],Ct.test(N.type||"")&&!ce.access(N,"globalEval")&&u.contains(H,N)&&(N.src&&(N.type||"").toLowerCase()!=="module"?u._evalUrl&&!N.noModule&&u._evalUrl(N.src,{nonce:N.nonce||N.getAttribute("nonce")},H):L(N.textContent.replace(go,""),N,H))}return a}function Z(a,s,h){for(var m,M=s?u.filter(s,a):a,S=0;(m=M[S])!=null;S++)!h&&m.nodeType===1&&u.cleanData(Tt(m)),m.parentNode&&(h&&dt(m)&&wt(Tt(m,"script")),m.parentNode.removeChild(m));return a}u.extend({htmlPrefilter:function(a){return a},clone:function(a,s,h){var m,M,S,w,D=a.cloneNode(!0),N=dt(a);if(!E.noCloneChecked&&(a.nodeType===1||a.nodeType===11)&&!u.isXMLDoc(a))for(w=Tt(D),S=Tt(a),m=0,M=S.length;m<M;m++)C(S[m],w[m]);if(s)if(h)for(S=S||Tt(a),w=w||Tt(D),m=0,M=S.length;m<M;m++)vo(S[m],w[m]);else vo(a,D);return w=Tt(D,"script"),w.length>0&&wt(w,!N&&Tt(a,"script")),D},cleanData:function(a){for(var s,h,m,M=u.event.special,S=0;(h=a[S])!==void 0;S++)if(ke(h)){if(s=h[ce.expando]){if(s.events)for(m in s.events)M[m]?u.event.remove(h,m):u.removeEvent(h,m,s.handle);h[ce.expando]=void 0}h[Pe.expando]&&(h[Pe.expando]=void 0)}}}),u.fn.extend({detach:function(a){return Z(this,a,!0)},remove:function(a){return Z(this,a)},text:function(a){return A(this,function(s){return s===void 0?u.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=s)})},null,a,arguments.length)},append:function(){return G(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var s=ua(this,a);s.appendChild(a)}})},prepend:function(){return G(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var s=ua(this,a);s.insertBefore(a,s.firstChild)}})},before:function(){return G(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return G(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,s=0;(a=this[s])!=null;s++)a.nodeType===1&&(u.cleanData(Tt(a,!1)),a.textContent="");return this},clone:function(a,s){return a=a??!1,s=s??a,this.map(function(){return u.clone(this,a,s)})},html:function(a){return A(this,function(s){var h=this[0]||{},m=0,M=this.length;if(s===void 0&&h.nodeType===1)return h.innerHTML;if(typeof s=="string"&&!mo.test(s)&&!mt[(bt.exec(s)||["",""])[1].toLowerCase()]){s=u.htmlPrefilter(s);try{for(;m<M;m++)h=this[m]||{},h.nodeType===1&&(u.cleanData(Tt(h,!1)),h.innerHTML=s);h=0}catch{}}h&&this.empty().append(s)},null,a,arguments.length)},replaceWith:function(){var a=[];return G(this,arguments,function(s){var h=this.parentNode;u.inArray(this,a)<0&&(u.cleanData(Tt(this)),h&&h.replaceChild(s,this))},a)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,s){u.fn[a]=function(h){for(var m,M=[],S=u(h),w=S.length-1,D=0;D<=w;D++)m=D===w?this:this.clone(!0),u(S[D])[s](m),c.apply(M,m.get());return this.pushStack(M)}});var Q=new RegExp("^("+De+")(?!px)[a-z%]+$","i"),q=/^--/,Ee=function(a){var s=a.ownerDocument.defaultView;return(!s||!s.opener)&&(s=e),s.getComputedStyle(a)},ze=function(a,s,h){var m,M,S={};for(M in s)S[M]=a.style[M],a.style[M]=s[M];m=h.call(a);for(M in s)a.style[M]=S[M];return m},Ve=new RegExp(tt.join("|"),"i");(function(){function a(){if(H){N.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",H.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ht.appendChild(N).appendChild(H);var te=e.getComputedStyle(H);h=te.top!=="1%",D=s(te.marginLeft)===12,H.style.right="60%",S=s(te.right)===36,m=s(te.width)===36,H.style.position="absolute",M=s(H.offsetWidth/3)===12,ht.removeChild(N),H=null}}function s(te){return Math.round(parseFloat(te))}var h,m,M,S,w,D,N=v.createElement("div"),H=v.createElement("div");H.style&&(H.style.backgroundClip="content-box",H.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=H.style.backgroundClip==="content-box",u.extend(E,{boxSizingReliable:function(){return a(),m},pixelBoxStyles:function(){return a(),S},pixelPosition:function(){return a(),h},reliableMarginLeft:function(){return a(),D},scrollboxSize:function(){return a(),M},reliableTrDimensions:function(){var te,se,Y,fe;return w==null&&(te=v.createElement("table"),se=v.createElement("tr"),Y=v.createElement("div"),te.style.cssText="position:absolute;left:-11111px;border-collapse:separate",se.style.cssText="box-sizing:content-box;border:1px solid",se.style.height="1px",Y.style.height="9px",Y.style.display="block",ht.appendChild(te).appendChild(se).appendChild(Y),fe=e.getComputedStyle(se),w=parseInt(fe.height,10)+parseInt(fe.borderTopWidth,10)+parseInt(fe.borderBottomWidth,10)===se.offsetHeight,ht.removeChild(te)),w}}))})();function He(a,s,h){var m,M,S,w,D=q.test(s),N=a.style;return h=h||Ee(a),h&&(w=h.getPropertyValue(s)||h[s],D&&w&&(w=w.replace(ne,"$1")||void 0),w===""&&!dt(a)&&(w=u.style(a,s)),!E.pixelBoxStyles()&&Q.test(w)&&Ve.test(s)&&(m=N.width,M=N.minWidth,S=N.maxWidth,N.minWidth=N.maxWidth=N.width=w,w=h.width,N.width=m,N.minWidth=M,N.maxWidth=S)),w!==void 0?w+"":w}function ut(a,s){return{get:function(){if(a()){delete this.get;return}return(this.get=s).apply(this,arguments)}}}var it=["Webkit","Moz","ms"],nt=v.createElement("div").style,Vt={};function Bt(a){for(var s=a[0].toUpperCase()+a.slice(1),h=it.length;h--;)if(a=it[h]+s,a in nt)return a}function $t(a){var s=u.cssProps[a]||Vt[a];return s||(a in nt?a:Vt[a]=Bt(a)||a)}var Pr=/^(none|table(?!-c[ea]).+)/,Dt={position:"absolute",visibility:"hidden",display:"block"},rt={letterSpacing:"0",fontWeight:"400"};function kn(a,s,h){var m=lt.exec(s);return m?Math.max(0,m[2]-(h||0))+(m[3]||"px"):s}function Qi(a,s,h,m,M,S){var w=s==="width"?1:0,D=0,N=0,H=0;if(h===(m?"border":"content"))return 0;for(;w<4;w+=2)h==="margin"&&(H+=u.css(a,h+tt[w],!0,M)),m?(h==="content"&&(N-=u.css(a,"padding"+tt[w],!0,M)),h!=="margin"&&(N-=u.css(a,"border"+tt[w]+"Width",!0,M))):(N+=u.css(a,"padding"+tt[w],!0,M),h!=="padding"?N+=u.css(a,"border"+tt[w]+"Width",!0,M):D+=u.css(a,"border"+tt[w]+"Width",!0,M));return!m&&S>=0&&(N+=Math.max(0,Math.ceil(a["offset"+s[0].toUpperCase()+s.slice(1)]-S-N-D-.5))||0),N+H}function Wr(a,s,h){var m=Ee(a),M=!E.boxSizingReliable()||h,S=M&&u.css(a,"boxSizing",!1,m)==="border-box",w=S,D=He(a,s,m),N="offset"+s[0].toUpperCase()+s.slice(1);if(Q.test(D)){if(!h)return D;D="auto"}return(!E.boxSizingReliable()&&S||!E.reliableTrDimensions()&&R(a,"tr")||D==="auto"||!parseFloat(D)&&u.css(a,"display",!1,m)==="inline")&&a.getClientRects().length&&(S=u.css(a,"boxSizing",!1,m)==="border-box",w=N in a,w&&(D=a[N])),D=parseFloat(D)||0,D+Qi(a,s,h||(S?"border":"content"),w,m,D)+"px"}u.extend({cssHooks:{opacity:{get:function(a,s){if(s){var h=He(a,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(a,s,h,m){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var M,S,w,D=de(s),N=q.test(s),H=a.style;if(N||(s=$t(D)),w=u.cssHooks[s]||u.cssHooks[D],h!==void 0){if(S=typeof h,S==="string"&&(M=lt.exec(h))&&M[1]&&(h=I(a,s,M),S="number"),h==null||h!==h)return;S==="number"&&!N&&(h+=M&&M[3]||(u.cssNumber[D]?"":"px")),!E.clearCloneStyle&&h===""&&s.indexOf("background")===0&&(H[s]="inherit"),(!w||!("set"in w)||(h=w.set(a,h,m))!==void 0)&&(N?H.setProperty(s,h):H[s]=h)}else return w&&"get"in w&&(M=w.get(a,!1,m))!==void 0?M:H[s]}},css:function(a,s,h,m){var M,S,w,D=de(s),N=q.test(s);return N||(s=$t(D)),w=u.cssHooks[s]||u.cssHooks[D],w&&"get"in w&&(M=w.get(a,!0,h)),M===void 0&&(M=He(a,s,m)),M==="normal"&&s in rt&&(M=rt[s]),h===""||h?(S=parseFloat(M),h===!0||isFinite(S)?S||0:M):M}}),u.each(["height","width"],function(a,s){u.cssHooks[s]={get:function(h,m,M){if(m)return Pr.test(u.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?ze(h,Dt,function(){return Wr(h,s,M)}):Wr(h,s,M)},set:function(h,m,M){var S,w=Ee(h),D=!E.scrollboxSize()&&w.position==="absolute",N=D||M,H=N&&u.css(h,"boxSizing",!1,w)==="border-box",te=M?Qi(h,s,M,H,w):0;return H&&D&&(te-=Math.ceil(h["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(w[s])-Qi(h,s,"border",!1,w)-.5)),te&&(S=lt.exec(m))&&(S[3]||"px")!=="px"&&(h.style[s]=m,m=u.css(h,s)),kn(h,m,te)}}}),u.cssHooks.marginLeft=ut(E.reliableMarginLeft,function(a,s){if(s)return(parseFloat(He(a,"marginLeft"))||a.getBoundingClientRect().left-ze(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(a,s){u.cssHooks[a+s]={expand:function(h){for(var m=0,M={},S=typeof h=="string"?h.split(" "):[h];m<4;m++)M[a+tt[m]+s]=S[m]||S[m-2]||S[0];return M}},a!=="margin"&&(u.cssHooks[a+s].set=kn)}),u.fn.extend({css:function(a,s){return A(this,function(h,m,M){var S,w,D={},N=0;if(Array.isArray(m)){for(S=Ee(h),w=m.length;N<w;N++)D[m[N]]=u.css(h,m[N],!1,S);return D}return M!==void 0?u.style(h,m,M):u.css(h,m)},a,s,arguments.length>1)}});function Yt(a,s,h,m,M){return new Yt.prototype.init(a,s,h,m,M)}u.Tween=Yt,Yt.prototype={constructor:Yt,init:function(a,s,h,m,M,S){this.elem=a,this.prop=h,this.easing=M||u.easing._default,this.options=s,this.start=this.now=this.cur(),this.end=m,this.unit=S||(u.cssNumber[h]?"":"px")},cur:function(){var a=Yt.propHooks[this.prop];return a&&a.get?a.get(this):Yt.propHooks._default.get(this)},run:function(a){var s,h=Yt.propHooks[this.prop];return this.options.duration?this.pos=s=u.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=s=a,this.now=(this.end-this.start)*s+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):Yt.propHooks._default.set(this),this}},Yt.prototype.init.prototype=Yt.prototype,Yt.propHooks={_default:{get:function(a){var s;return a.elem.nodeType!==1||a.elem[a.prop]!=null&&a.elem.style[a.prop]==null?a.elem[a.prop]:(s=u.css(a.elem,a.prop,""),!s||s==="auto"?0:s)},set:function(a){u.fx.step[a.prop]?u.fx.step[a.prop](a):a.elem.nodeType===1&&(u.cssHooks[a.prop]||a.elem.style[$t(a.prop)]!=null)?u.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Yt.propHooks.scrollTop=Yt.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},u.easing={linear:function(a){return a},swing:function(a){return .5-Math.cos(a*Math.PI)/2},_default:"swing"},u.fx=Yt.prototype.init,u.fx.step={};var Er,Li,Xt=/^(?:toggle|show|hide)$/,jr=/queueHooks$/;function en(){Li&&(v.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(en):e.setTimeout(en,u.fx.interval),u.fx.tick())}function ir(){return e.setTimeout(function(){Er=void 0}),Er=Date.now()}function Pi(a,s){var h,m=0,M={height:a};for(s=s?1:0;m<4;m+=2-s)h=tt[m],M["margin"+h]=M["padding"+h]=a;return s&&(M.opacity=M.width=a),M}function _o(a,s,h){for(var m,M=(Ur.tweeners[s]||[]).concat(Ur.tweeners["*"]),S=0,w=M.length;S<w;S++)if(m=M[S].call(h,s,a))return m}function xo(a,s,h){var m,M,S,w,D,N,H,te,se="width"in s||"height"in s,Y=this,fe={},Ke=a.style,yt=a.nodeType&&Oe(a),ct=ce.get(a,"fxshow");h.queue||(w=u._queueHooks(a,"fx"),w.unqueued==null&&(w.unqueued=0,D=w.empty.fire,w.empty.fire=function(){w.unqueued||D()}),w.unqueued++,Y.always(function(){Y.always(function(){w.unqueued--,u.queue(a,"fx").length||w.empty.fire()})}));for(m in s)if(M=s[m],Xt.test(M)){if(delete s[m],S=S||M==="toggle",M===(yt?"hide":"show"))if(M==="show"&&ct&&ct[m]!==void 0)yt=!0;else continue;fe[m]=ct&&ct[m]||u.style(a,m)}if(N=!u.isEmptyObject(s),!(!N&&u.isEmptyObject(fe))){se&&a.nodeType===1&&(h.overflow=[Ke.overflow,Ke.overflowX,Ke.overflowY],H=ct&&ct.display,H==null&&(H=ce.get(a,"display")),te=u.css(a,"display"),te==="none"&&(H?te=H:(We([a],!0),H=a.style.display||H,te=u.css(a,"display"),We([a]))),(te==="inline"||te==="inline-block"&&H!=null)&&u.css(a,"float")==="none"&&(N||(Y.done(function(){Ke.display=H}),H==null&&(te=Ke.display,H=te==="none"?"":te)),Ke.display="inline-block")),h.overflow&&(Ke.overflow="hidden",Y.always(function(){Ke.overflow=h.overflow[0],Ke.overflowX=h.overflow[1],Ke.overflowY=h.overflow[2]})),N=!1;for(m in fe)N||(ct?"hidden"in ct&&(yt=ct.hidden):ct=ce.access(a,"fxshow",{display:H}),S&&(ct.hidden=!yt),yt&&We([a],!0),Y.done(function(){yt||We([a]),ce.remove(a,"fxshow");for(m in fe)u.style(a,m,fe[m])})),N=_o(yt?ct[m]:0,m,Y),m in ct||(ct[m]=N.start,yt&&(N.end=N.start,N.start=0))}}function Z_(a,s){var h,m,M,S,w;for(h in a)if(m=de(h),M=s[m],S=a[h],Array.isArray(S)&&(M=S[1],S=a[h]=S[0]),h!==m&&(a[m]=S,delete a[h]),w=u.cssHooks[m],w&&"expand"in w){S=w.expand(S),delete a[m];for(h in S)h in a||(a[h]=S[h],s[h]=M)}else s[m]=M}function Ur(a,s,h){var m,M,S=0,w=Ur.prefilters.length,D=u.Deferred().always(function(){delete N.elem}),N=function(){if(M)return!1;for(var se=Er||ir(),Y=Math.max(0,H.startTime+H.duration-se),fe=Y/H.duration||0,Ke=1-fe,yt=0,ct=H.tweens.length;yt<ct;yt++)H.tweens[yt].run(Ke);return D.notifyWith(a,[H,Ke,Y]),Ke<1&&ct?Y:(ct||D.notifyWith(a,[H,1,0]),D.resolveWith(a,[H]),!1)},H=D.promise({elem:a,props:u.extend({},s),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},h),originalProperties:s,originalOptions:h,startTime:Er||ir(),duration:h.duration,tweens:[],createTween:function(se,Y){var fe=u.Tween(a,H.opts,se,Y,H.opts.specialEasing[se]||H.opts.easing);return H.tweens.push(fe),fe},stop:function(se){var Y=0,fe=se?H.tweens.length:0;if(M)return this;for(M=!0;Y<fe;Y++)H.tweens[Y].run(1);return se?(D.notifyWith(a,[H,1,0]),D.resolveWith(a,[H,se])):D.rejectWith(a,[H,se]),this}}),te=H.props;for(Z_(te,H.opts.specialEasing);S<w;S++)if(m=Ur.prefilters[S].call(H,a,te,H.opts),m)return b(m.stop)&&(u._queueHooks(H.elem,H.opts.queue).stop=m.stop.bind(m)),m;return u.map(te,_o,H),b(H.opts.start)&&H.opts.start.call(a,H),H.progress(H.opts.progress).done(H.opts.done,H.opts.complete).fail(H.opts.fail).always(H.opts.always),u.fx.timer(u.extend(N,{elem:a,anim:H,queue:H.opts.queue})),H}u.Animation=u.extend(Ur,{tweeners:{"*":[function(a,s){var h=this.createTween(a,s);return I(h.elem,a,lt.exec(s),h),h}]},tweener:function(a,s){b(a)?(s=a,a=["*"]):a=a.match(Ye);for(var h,m=0,M=a.length;m<M;m++)h=a[m],Ur.tweeners[h]=Ur.tweeners[h]||[],Ur.tweeners[h].unshift(s)},prefilters:[xo],prefilter:function(a,s){s?Ur.prefilters.unshift(a):Ur.prefilters.push(a)}}),u.speed=function(a,s,h){var m=a&&typeof a=="object"?u.extend({},a):{complete:h||!h&&s||b(a)&&a,duration:a,easing:h&&s||s&&!b(s)&&s};return u.fx.off?m.duration=0:typeof m.duration!="number"&&(m.duration in u.fx.speeds?m.duration=u.fx.speeds[m.duration]:m.duration=u.fx.speeds._default),(m.queue==null||m.queue===!0)&&(m.queue="fx"),m.old=m.complete,m.complete=function(){b(m.old)&&m.old.call(this),m.queue&&u.dequeue(this,m.queue)},m},u.fn.extend({fadeTo:function(a,s,h,m){return this.filter(Oe).css("opacity",0).show().end().animate({opacity:s},a,h,m)},animate:function(a,s,h,m){var M=u.isEmptyObject(a),S=u.speed(s,h,m),w=function(){var D=Ur(this,u.extend({},a),S);(M||ce.get(this,"finish"))&&D.stop(!0)};return w.finish=w,M||S.queue===!1?this.each(w):this.queue(S.queue,w)},stop:function(a,s,h){var m=function(M){var S=M.stop;delete M.stop,S(h)};return typeof a!="string"&&(h=s,s=a,a=void 0),s&&this.queue(a||"fx",[]),this.each(function(){var M=!0,S=a!=null&&a+"queueHooks",w=u.timers,D=ce.get(this);if(S)D[S]&&D[S].stop&&m(D[S]);else for(S in D)D[S]&&D[S].stop&&jr.test(S)&&m(D[S]);for(S=w.length;S--;)w[S].elem===this&&(a==null||w[S].queue===a)&&(w[S].anim.stop(h),M=!1,w.splice(S,1));(M||!h)&&u.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var s,h=ce.get(this),m=h[a+"queue"],M=h[a+"queueHooks"],S=u.timers,w=m?m.length:0;for(h.finish=!0,u.queue(this,a,[]),M&&M.stop&&M.stop.call(this,!0),s=S.length;s--;)S[s].elem===this&&S[s].queue===a&&(S[s].anim.stop(!0),S.splice(s,1));for(s=0;s<w;s++)m[s]&&m[s].finish&&m[s].finish.call(this);delete h.finish})}}),u.each(["toggle","show","hide"],function(a,s){var h=u.fn[s];u.fn[s]=function(m,M,S){return m==null||typeof m=="boolean"?h.apply(this,arguments):this.animate(Pi(s,!0),m,M,S)}}),u.each({slideDown:Pi("show"),slideUp:Pi("hide"),slideToggle:Pi("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,s){u.fn[a]=function(h,m,M){return this.animate(s,h,m,M)}}),u.timers=[],u.fx.tick=function(){var a,s=0,h=u.timers;for(Er=Date.now();s<h.length;s++)a=h[s],!a()&&h[s]===a&&h.splice(s--,1);h.length||u.fx.stop(),Er=void 0},u.fx.timer=function(a){u.timers.push(a),u.fx.start()},u.fx.interval=13,u.fx.start=function(){Li||(Li=!0,en())},u.fx.stop=function(){Li=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(a,s){return a=u.fx&&u.fx.speeds[a]||a,s=s||"fx",this.queue(s,function(h,m){var M=e.setTimeout(h,a);m.stop=function(){e.clearTimeout(M)}})},function(){var a=v.createElement("input"),s=v.createElement("select"),h=s.appendChild(v.createElement("option"));a.type="checkbox",E.checkOn=a.value!=="",E.optSelected=h.selected,a=v.createElement("input"),a.value="t",a.type="radio",E.radioValue=a.value==="t"}();var ch,ha=u.expr.attrHandle;u.fn.extend({attr:function(a,s){return A(this,u.attr,a,s,arguments.length>1)},removeAttr:function(a){return this.each(function(){u.removeAttr(this,a)})}}),u.extend({attr:function(a,s,h){var m,M,S=a.nodeType;if(!(S===3||S===8||S===2)){if(typeof a.getAttribute>"u")return u.prop(a,s,h);if((S!==1||!u.isXMLDoc(a))&&(M=u.attrHooks[s.toLowerCase()]||(u.expr.match.bool.test(s)?ch:void 0)),h!==void 0){if(h===null){u.removeAttr(a,s);return}return M&&"set"in M&&(m=M.set(a,h,s))!==void 0?m:(a.setAttribute(s,h+""),h)}return M&&"get"in M&&(m=M.get(a,s))!==null?m:(m=u.find.attr(a,s),m??void 0)}},attrHooks:{type:{set:function(a,s){if(!E.radioValue&&s==="radio"&&R(a,"input")){var h=a.value;return a.setAttribute("type",s),h&&(a.value=h),s}}}},removeAttr:function(a,s){var h,m=0,M=s&&s.match(Ye);if(M&&a.nodeType===1)for(;h=M[m++];)a.removeAttribute(h)}}),ch={set:function(a,s,h){return s===!1?u.removeAttr(a,h):a.setAttribute(h,h),h}},u.each(u.expr.match.bool.source.match(/\w+/g),function(a,s){var h=ha[s]||u.find.attr;ha[s]=function(m,M,S){var w,D,N=M.toLowerCase();return S||(D=ha[N],ha[N]=w,w=h(m,M,S)!=null?N:null,ha[N]=D),w}});var $_=/^(?:input|select|textarea|button)$/i,Q_=/^(?:a|area)$/i;u.fn.extend({prop:function(a,s){return A(this,u.prop,a,s,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[u.propFix[a]||a]})}}),u.extend({prop:function(a,s,h){var m,M,S=a.nodeType;if(!(S===3||S===8||S===2))return(S!==1||!u.isXMLDoc(a))&&(s=u.propFix[s]||s,M=u.propHooks[s]),h!==void 0?M&&"set"in M&&(m=M.set(a,h,s))!==void 0?m:a[s]=h:M&&"get"in M&&(m=M.get(a,s))!==null?m:a[s]},propHooks:{tabIndex:{get:function(a){var s=u.find.attr(a,"tabindex");return s?parseInt(s,10):$_.test(a.nodeName)||Q_.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(u.propHooks.selected={get:function(a){var s=a.parentNode;return s&&s.parentNode&&s.parentNode.selectedIndex,null},set:function(a){var s=a.parentNode;s&&(s.selectedIndex,s.parentNode&&s.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this});function tn(a){var s=a.match(Ye)||[];return s.join(" ")}function rn(a){return a.getAttribute&&a.getAttribute("class")||""}function Gs(a){return Array.isArray(a)?a:typeof a=="string"?a.match(Ye)||[]:[]}u.fn.extend({addClass:function(a){var s,h,m,M,S,w;return b(a)?this.each(function(D){u(this).addClass(a.call(this,D,rn(this)))}):(s=Gs(a),s.length?this.each(function(){if(m=rn(this),h=this.nodeType===1&&" "+tn(m)+" ",h){for(S=0;S<s.length;S++)M=s[S],h.indexOf(" "+M+" ")<0&&(h+=M+" ");w=tn(h),m!==w&&this.setAttribute("class",w)}}):this)},removeClass:function(a){var s,h,m,M,S,w;return b(a)?this.each(function(D){u(this).removeClass(a.call(this,D,rn(this)))}):arguments.length?(s=Gs(a),s.length?this.each(function(){if(m=rn(this),h=this.nodeType===1&&" "+tn(m)+" ",h){for(S=0;S<s.length;S++)for(M=s[S];h.indexOf(" "+M+" ")>-1;)h=h.replace(" "+M+" "," ");w=tn(h),m!==w&&this.setAttribute("class",w)}}):this):this.attr("class","")},toggleClass:function(a,s){var h,m,M,S,w=typeof a,D=w==="string"||Array.isArray(a);return b(a)?this.each(function(N){u(this).toggleClass(a.call(this,N,rn(this),s),s)}):typeof s=="boolean"&&D?s?this.addClass(a):this.removeClass(a):(h=Gs(a),this.each(function(){if(D)for(S=u(this),M=0;M<h.length;M++)m=h[M],S.hasClass(m)?S.removeClass(m):S.addClass(m);else(a===void 0||w==="boolean")&&(m=rn(this),m&&ce.set(this,"__className__",m),this.setAttribute&&this.setAttribute("class",m||a===!1?"":ce.get(this,"__className__")||""))}))},hasClass:function(a){var s,h,m=0;for(s=" "+a+" ";h=this[m++];)if(h.nodeType===1&&(" "+tn(rn(h))+" ").indexOf(s)>-1)return!0;return!1}});var ex=/\r/g;u.fn.extend({val:function(a){var s,h,m,M=this[0];return arguments.length?(m=b(a),this.each(function(S){var w;this.nodeType===1&&(m?w=a.call(this,S,u(this).val()):w=a,w==null?w="":typeof w=="number"?w+="":Array.isArray(w)&&(w=u.map(w,function(D){return D==null?"":D+""})),s=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()],(!s||!("set"in s)||s.set(this,w,"value")===void 0)&&(this.value=w))})):M?(s=u.valHooks[M.type]||u.valHooks[M.nodeName.toLowerCase()],s&&"get"in s&&(h=s.get(M,"value"))!==void 0?h:(h=M.value,typeof h=="string"?h.replace(ex,""):h??"")):void 0}}),u.extend({valHooks:{option:{get:function(a){var s=u.find.attr(a,"value");return s??tn(u.text(a))}},select:{get:function(a){var s,h,m,M=a.options,S=a.selectedIndex,w=a.type==="select-one",D=w?null:[],N=w?S+1:M.length;for(S<0?m=N:m=w?S:0;m<N;m++)if(h=M[m],(h.selected||m===S)&&!h.disabled&&(!h.parentNode.disabled||!R(h.parentNode,"optgroup"))){if(s=u(h).val(),w)return s;D.push(s)}return D},set:function(a,s){for(var h,m,M=a.options,S=u.makeArray(s),w=M.length;w--;)m=M[w],(m.selected=u.inArray(u.valHooks.option.get(m),S)>-1)&&(h=!0);return h||(a.selectedIndex=-1),S}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(a,s){if(Array.isArray(s))return a.checked=u.inArray(u(a).val(),s)>-1}},E.checkOn||(u.valHooks[this].get=function(a){return a.getAttribute("value")===null?"on":a.value})});var da=e.location,uh={guid:Date.now()},Vs=/\?/;u.parseXML=function(a){var s,h;if(!a||typeof a!="string")return null;try{s=new e.DOMParser().parseFromString(a,"text/xml")}catch{}return h=s&&s.getElementsByTagName("parsererror")[0],(!s||h)&&u.error("Invalid XML: "+(h?u.map(h.childNodes,function(m){return m.textContent}).join(`
`):a)),s};var hh=/^(?:focusinfocus|focusoutblur)$/,dh=function(a){a.stopPropagation()};u.extend(u.event,{trigger:function(a,s,h,m){var M,S,w,D,N,H,te,se,Y=[h||v],fe=g.call(a,"type")?a.type:a,Ke=g.call(a,"namespace")?a.namespace.split("."):[];if(S=se=w=h=h||v,!(h.nodeType===3||h.nodeType===8)&&!hh.test(fe+u.event.triggered)&&(fe.indexOf(".")>-1&&(Ke=fe.split("."),fe=Ke.shift(),Ke.sort()),N=fe.indexOf(":")<0&&"on"+fe,a=a[u.expando]?a:new u.Event(fe,typeof a=="object"&&a),a.isTrigger=m?2:3,a.namespace=Ke.join("."),a.rnamespace=a.namespace?new RegExp("(^|\\.)"+Ke.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,a.result=void 0,a.target||(a.target=h),s=s==null?[a]:u.makeArray(s,[a]),te=u.event.special[fe]||{},!(!m&&te.trigger&&te.trigger.apply(h,s)===!1))){if(!m&&!te.noBubble&&!x(h)){for(D=te.delegateType||fe,hh.test(D+fe)||(S=S.parentNode);S;S=S.parentNode)Y.push(S),w=S;w===(h.ownerDocument||v)&&Y.push(w.defaultView||w.parentWindow||e)}for(M=0;(S=Y[M++])&&!a.isPropagationStopped();)se=S,a.type=M>1?D:te.bindType||fe,H=(ce.get(S,"events")||Object.create(null))[a.type]&&ce.get(S,"handle"),H&&H.apply(S,s),H=N&&S[N],H&&H.apply&&ke(S)&&(a.result=H.apply(S,s),a.result===!1&&a.preventDefault());return a.type=fe,!m&&!a.isDefaultPrevented()&&(!te._default||te._default.apply(Y.pop(),s)===!1)&&ke(h)&&N&&b(h[fe])&&!x(h)&&(w=h[N],w&&(h[N]=null),u.event.triggered=fe,a.isPropagationStopped()&&se.addEventListener(fe,dh),h[fe](),a.isPropagationStopped()&&se.removeEventListener(fe,dh),u.event.triggered=void 0,w&&(h[N]=w)),a.result}},simulate:function(a,s,h){var m=u.extend(new u.Event,h,{type:a,isSimulated:!0});u.event.trigger(m,null,s)}}),u.fn.extend({trigger:function(a,s){return this.each(function(){u.event.trigger(a,s,this)})},triggerHandler:function(a,s){var h=this[0];if(h)return u.event.trigger(a,s,h,!0)}});var tx=/\[\]$/,ph=/\r?\n/g,rx=/^(?:submit|button|image|reset|file)$/i,ix=/^(?:input|select|textarea|keygen)/i;function Ws(a,s,h,m){var M;if(Array.isArray(s))u.each(s,function(S,w){h||tx.test(a)?m(a,w):Ws(a+"["+(typeof w=="object"&&w!=null?S:"")+"]",w,h,m)});else if(!h&&B(s)==="object")for(M in s)Ws(a+"["+M+"]",s[M],h,m);else m(a,s)}u.param=function(a,s){var h,m=[],M=function(S,w){var D=b(w)?w():w;m[m.length]=encodeURIComponent(S)+"="+encodeURIComponent(D??"")};if(a==null)return"";if(Array.isArray(a)||a.jquery&&!u.isPlainObject(a))u.each(a,function(){M(this.name,this.value)});else for(h in a)Ws(h,a[h],s,M);return m.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=u.prop(this,"elements");return a?u.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!u(this).is(":disabled")&&ix.test(this.nodeName)&&!rx.test(a)&&(this.checked||!Be.test(a))}).map(function(a,s){var h=u(this).val();return h==null?null:Array.isArray(h)?u.map(h,function(m){return{name:s.name,value:m.replace(ph,`\r
`)}}):{name:s.name,value:h.replace(ph,`\r
`)}}).get()}});var nx=/%20/g,ax=/#.*$/,ox=/([?&])_=[^&]*/,sx=/^(.*?):[ \t]*([^\r\n]*)$/mg,lx=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,cx=/^(?:GET|HEAD)$/,ux=/^\/\//,fh={},js={},mh="*/".concat("*"),qs=v.createElement("a");qs.href=da.href;function gh(a){return function(s,h){typeof s!="string"&&(h=s,s="*");var m,M=0,S=s.toLowerCase().match(Ye)||[];if(b(h))for(;m=S[M++];)m[0]==="+"?(m=m.slice(1)||"*",(a[m]=a[m]||[]).unshift(h)):(a[m]=a[m]||[]).push(h)}}function vh(a,s,h,m){var M={},S=a===js;function w(D){var N;return M[D]=!0,u.each(a[D]||[],function(H,te){var se=te(s,h,m);if(typeof se=="string"&&!S&&!M[se])return s.dataTypes.unshift(se),w(se),!1;if(S)return!(N=se)}),N}return w(s.dataTypes[0])||!M["*"]&&w("*")}function Xs(a,s){var h,m,M=u.ajaxSettings.flatOptions||{};for(h in s)s[h]!==void 0&&((M[h]?a:m||(m={}))[h]=s[h]);return m&&u.extend(!0,a,m),a}function hx(a,s,h){for(var m,M,S,w,D=a.contents,N=a.dataTypes;N[0]==="*";)N.shift(),m===void 0&&(m=a.mimeType||s.getResponseHeader("Content-Type"));if(m){for(M in D)if(D[M]&&D[M].test(m)){N.unshift(M);break}}if(N[0]in h)S=N[0];else{for(M in h){if(!N[0]||a.converters[M+" "+N[0]]){S=M;break}w||(w=M)}S=S||w}if(S)return S!==N[0]&&N.unshift(S),h[S]}function dx(a,s,h,m){var M,S,w,D,N,H={},te=a.dataTypes.slice();if(te[1])for(w in a.converters)H[w.toLowerCase()]=a.converters[w];for(S=te.shift();S;)if(a.responseFields[S]&&(h[a.responseFields[S]]=s),!N&&m&&a.dataFilter&&(s=a.dataFilter(s,a.dataType)),N=S,S=te.shift(),S){if(S==="*")S=N;else if(N!=="*"&&N!==S){if(w=H[N+" "+S]||H["* "+S],!w){for(M in H)if(D=M.split(" "),D[1]===S&&(w=H[N+" "+D[0]]||H["* "+D[0]],w)){w===!0?w=H[M]:H[M]!==!0&&(S=D[0],te.unshift(D[1]));break}}if(w!==!0)if(w&&a.throws)s=w(s);else try{s=w(s)}catch(se){return{state:"parsererror",error:w?se:"No conversion from "+N+" to "+S}}}}return{state:"success",data:s}}u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:da.href,type:"GET",isLocal:lx.test(da.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":mh,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,s){return s?Xs(Xs(a,u.ajaxSettings),s):Xs(u.ajaxSettings,a)},ajaxPrefilter:gh(fh),ajaxTransport:gh(js),ajax:function(a,s){typeof a=="object"&&(s=a,a=void 0),s=s||{};var h,m,M,S,w,D,N,H,te,se,Y=u.ajaxSetup({},s),fe=Y.context||Y,Ke=Y.context&&(fe.nodeType||fe.jquery)?u(fe):u.event,yt=u.Deferred(),ct=u.Callbacks("once memory"),Kt=Y.statusCode||{},Wt={},qr={},Xr="canceled",gt={readyState:0,getResponseHeader:function(Et){var Ft;if(N){if(!S)for(S={};Ft=sx.exec(M);)S[Ft[1].toLowerCase()+" "]=(S[Ft[1].toLowerCase()+" "]||[]).concat(Ft[2]);Ft=S[Et.toLowerCase()+" "]}return Ft==null?null:Ft.join(", ")},getAllResponseHeaders:function(){return N?M:null},setRequestHeader:function(Et,Ft){return N==null&&(Et=qr[Et.toLowerCase()]=qr[Et.toLowerCase()]||Et,Wt[Et]=Ft),this},overrideMimeType:function(Et){return N==null&&(Y.mimeType=Et),this},statusCode:function(Et){var Ft;if(Et)if(N)gt.always(Et[gt.status]);else for(Ft in Et)Kt[Ft]=[Kt[Ft],Et[Ft]];return this},abort:function(Et){var Ft=Et||Xr;return h&&h.abort(Ft),nn(0,Ft),this}};if(yt.promise(gt),Y.url=((a||Y.url||da.href)+"").replace(ux,da.protocol+"//"),Y.type=s.method||s.type||Y.method||Y.type,Y.dataTypes=(Y.dataType||"*").toLowerCase().match(Ye)||[""],Y.crossDomain==null){D=v.createElement("a");try{D.href=Y.url,D.href=D.href,Y.crossDomain=qs.protocol+"//"+qs.host!=D.protocol+"//"+D.host}catch{Y.crossDomain=!0}}if(Y.data&&Y.processData&&typeof Y.data!="string"&&(Y.data=u.param(Y.data,Y.traditional)),vh(fh,Y,s,gt),N)return gt;H=u.event&&Y.global,H&&u.active++===0&&u.event.trigger("ajaxStart"),Y.type=Y.type.toUpperCase(),Y.hasContent=!cx.test(Y.type),m=Y.url.replace(ax,""),Y.hasContent?Y.data&&Y.processData&&(Y.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Y.data=Y.data.replace(nx,"+")):(se=Y.url.slice(m.length),Y.data&&(Y.processData||typeof Y.data=="string")&&(m+=(Vs.test(m)?"&":"?")+Y.data,delete Y.data),Y.cache===!1&&(m=m.replace(ox,"$1"),se=(Vs.test(m)?"&":"?")+"_="+uh.guid+++se),Y.url=m+se),Y.ifModified&&(u.lastModified[m]&&gt.setRequestHeader("If-Modified-Since",u.lastModified[m]),u.etag[m]&&gt.setRequestHeader("If-None-Match",u.etag[m])),(Y.data&&Y.hasContent&&Y.contentType!==!1||s.contentType)&&gt.setRequestHeader("Content-Type",Y.contentType),gt.setRequestHeader("Accept",Y.dataTypes[0]&&Y.accepts[Y.dataTypes[0]]?Y.accepts[Y.dataTypes[0]]+(Y.dataTypes[0]!=="*"?", "+mh+"; q=0.01":""):Y.accepts["*"]);for(te in Y.headers)gt.setRequestHeader(te,Y.headers[te]);if(Y.beforeSend&&(Y.beforeSend.call(fe,gt,Y)===!1||N))return gt.abort();if(Xr="abort",ct.add(Y.complete),gt.done(Y.success),gt.fail(Y.error),h=vh(js,Y,s,gt),!h)nn(-1,"No Transport");else{if(gt.readyState=1,H&&Ke.trigger("ajaxSend",[gt,Y]),N)return gt;Y.async&&Y.timeout>0&&(w=e.setTimeout(function(){gt.abort("timeout")},Y.timeout));try{N=!1,h.send(Wt,nn)}catch(Et){if(N)throw Et;nn(-1,Et)}}function nn(Et,Ft,fa,Ks){var Yr,ma,Kr,Ui,Ni,Tr=Ft;N||(N=!0,w&&e.clearTimeout(w),h=void 0,M=Ks||"",gt.readyState=Et>0?4:0,Yr=Et>=200&&Et<300||Et===304,fa&&(Ui=hx(Y,gt,fa)),!Yr&&u.inArray("script",Y.dataTypes)>-1&&u.inArray("json",Y.dataTypes)<0&&(Y.converters["text script"]=function(){}),Ui=dx(Y,Ui,gt,Yr),Yr?(Y.ifModified&&(Ni=gt.getResponseHeader("Last-Modified"),Ni&&(u.lastModified[m]=Ni),Ni=gt.getResponseHeader("etag"),Ni&&(u.etag[m]=Ni)),Et===204||Y.type==="HEAD"?Tr="nocontent":Et===304?Tr="notmodified":(Tr=Ui.state,ma=Ui.data,Kr=Ui.error,Yr=!Kr)):(Kr=Tr,(Et||!Tr)&&(Tr="error",Et<0&&(Et=0))),gt.status=Et,gt.statusText=(Ft||Tr)+"",Yr?yt.resolveWith(fe,[ma,Tr,gt]):yt.rejectWith(fe,[gt,Tr,Kr]),gt.statusCode(Kt),Kt=void 0,H&&Ke.trigger(Yr?"ajaxSuccess":"ajaxError",[gt,Y,Yr?ma:Kr]),ct.fireWith(fe,[gt,Tr]),H&&(Ke.trigger("ajaxComplete",[gt,Y]),--u.active||u.event.trigger("ajaxStop")))}return gt},getJSON:function(a,s,h){return u.get(a,s,h,"json")},getScript:function(a,s){return u.get(a,void 0,s,"script")}}),u.each(["get","post"],function(a,s){u[s]=function(h,m,M,S){return b(m)&&(S=S||M,M=m,m=void 0),u.ajax(u.extend({url:h,type:s,dataType:S,data:m,success:M},u.isPlainObject(h)&&h))}}),u.ajaxPrefilter(function(a){var s;for(s in a.headers)s.toLowerCase()==="content-type"&&(a.contentType=a.headers[s]||"")}),u._evalUrl=function(a,s,h){return u.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(m){u.globalEval(m,s,h)}})},u.fn.extend({wrapAll:function(a){var s;return this[0]&&(b(a)&&(a=a.call(this[0])),s=u(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&s.insertBefore(this[0]),s.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(a){return b(a)?this.each(function(s){u(this).wrapInner(a.call(this,s))}):this.each(function(){var s=u(this),h=s.contents();h.length?h.wrapAll(a):s.append(a)})},wrap:function(a){var s=b(a);return this.each(function(h){u(this).wrapAll(s?a.call(this,h):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(a){return!u.expr.pseudos.visible(a)},u.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var px={0:200,1223:204},pa=u.ajaxSettings.xhr();E.cors=!!pa&&"withCredentials"in pa,E.ajax=pa=!!pa,u.ajaxTransport(function(a){var s,h;if(E.cors||pa&&!a.crossDomain)return{send:function(m,M){var S,w=a.xhr();if(w.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(S in a.xhrFields)w[S]=a.xhrFields[S];a.mimeType&&w.overrideMimeType&&w.overrideMimeType(a.mimeType),!a.crossDomain&&!m["X-Requested-With"]&&(m["X-Requested-With"]="XMLHttpRequest");for(S in m)w.setRequestHeader(S,m[S]);s=function(D){return function(){s&&(s=h=w.onload=w.onerror=w.onabort=w.ontimeout=w.onreadystatechange=null,D==="abort"?w.abort():D==="error"?typeof w.status!="number"?M(0,"error"):M(w.status,w.statusText):M(px[w.status]||w.status,w.statusText,(w.responseType||"text")!=="text"||typeof w.responseText!="string"?{binary:w.response}:{text:w.responseText},w.getAllResponseHeaders()))}},w.onload=s(),h=w.onerror=w.ontimeout=s("error"),w.onabort!==void 0?w.onabort=h:w.onreadystatechange=function(){w.readyState===4&&e.setTimeout(function(){s&&h()})},s=s("abort");try{w.send(a.hasContent&&a.data||null)}catch(D){if(s)throw D}},abort:function(){s&&s()}}}),u.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return u.globalEval(a),a}}}),u.ajaxPrefilter("script",function(a){a.cache===void 0&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),u.ajaxTransport("script",function(a){if(a.crossDomain||a.scriptAttrs){var s,h;return{send:function(m,M){s=u("<script>").attr(a.scriptAttrs||{}).prop({charset:a.scriptCharset,src:a.url}).on("load error",h=function(S){s.remove(),h=null,S&&M(S.type==="error"?404:200,S.type)}),v.head.appendChild(s[0])},abort:function(){h&&h()}}}});var _h=[],Ys=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_h.pop()||u.expando+"_"+uh.guid++;return this[a]=!0,a}}),u.ajaxPrefilter("json jsonp",function(a,s,h){var m,M,S,w=a.jsonp!==!1&&(Ys.test(a.url)?"url":typeof a.data=="string"&&(a.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Ys.test(a.data)&&"data");if(w||a.dataTypes[0]==="jsonp")return m=a.jsonpCallback=b(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,w?a[w]=a[w].replace(Ys,"$1"+m):a.jsonp!==!1&&(a.url+=(Vs.test(a.url)?"&":"?")+a.jsonp+"="+m),a.converters["script json"]=function(){return S||u.error(m+" was not called"),S[0]},a.dataTypes[0]="json",M=e[m],e[m]=function(){S=arguments},h.always(function(){M===void 0?u(e).removeProp(m):e[m]=M,a[m]&&(a.jsonpCallback=s.jsonpCallback,_h.push(m)),S&&b(M)&&M(S[0]),S=M=void 0}),"script"}),E.createHTMLDocument=function(){var a=v.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",a.childNodes.length===2}(),u.parseHTML=function(a,s,h){if(typeof a!="string")return[];typeof s=="boolean"&&(h=s,s=!1);var m,M,S;return s||(E.createHTMLDocument?(s=v.implementation.createHTMLDocument(""),m=s.createElement("base"),m.href=v.location.href,s.head.appendChild(m)):s=v),M=st.exec(a),S=!h&&[],M?[s.createElement(M[1])]:(M=fr([a],s,S),S&&S.length&&u(S).remove(),u.merge([],M.childNodes))},u.fn.load=function(a,s,h){var m,M,S,w=this,D=a.indexOf(" ");return D>-1&&(m=tn(a.slice(D)),a=a.slice(0,D)),b(s)?(h=s,s=void 0):s&&typeof s=="object"&&(M="POST"),w.length>0&&u.ajax({url:a,type:M||"GET",dataType:"html",data:s}).done(function(N){S=arguments,w.html(m?u("<div>").append(u.parseHTML(N)).find(m):N)}).always(h&&function(N,H){w.each(function(){h.apply(this,S||[N.responseText,H,N])})}),this},u.expr.pseudos.animated=function(a){return u.grep(u.timers,function(s){return a===s.elem}).length},u.offset={setOffset:function(a,s,h){var m,M,S,w,D,N,H,te=u.css(a,"position"),se=u(a),Y={};te==="static"&&(a.style.position="relative"),D=se.offset(),S=u.css(a,"top"),N=u.css(a,"left"),H=(te==="absolute"||te==="fixed")&&(S+N).indexOf("auto")>-1,H?(m=se.position(),w=m.top,M=m.left):(w=parseFloat(S)||0,M=parseFloat(N)||0),b(s)&&(s=s.call(a,h,u.extend({},D))),s.top!=null&&(Y.top=s.top-D.top+w),s.left!=null&&(Y.left=s.left-D.left+M),"using"in s?s.using.call(a,Y):se.css(Y)}},u.fn.extend({offset:function(a){if(arguments.length)return a===void 0?this:this.each(function(M){u.offset.setOffset(this,a,M)});var s,h,m=this[0];if(m)return m.getClientRects().length?(s=m.getBoundingClientRect(),h=m.ownerDocument.defaultView,{top:s.top+h.pageYOffset,left:s.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var a,s,h,m=this[0],M={top:0,left:0};if(u.css(m,"position")==="fixed")s=m.getBoundingClientRect();else{for(s=this.offset(),h=m.ownerDocument,a=m.offsetParent||h.documentElement;a&&(a===h.body||a===h.documentElement)&&u.css(a,"position")==="static";)a=a.parentNode;a&&a!==m&&a.nodeType===1&&(M=u(a).offset(),M.top+=u.css(a,"borderTopWidth",!0),M.left+=u.css(a,"borderLeftWidth",!0))}return{top:s.top-M.top-u.css(m,"marginTop",!0),left:s.left-M.left-u.css(m,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&u.css(a,"position")==="static";)a=a.offsetParent;return a||ht})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,s){var h=s==="pageYOffset";u.fn[a]=function(m){return A(this,function(M,S,w){var D;if(x(M)?D=M:M.nodeType===9&&(D=M.defaultView),w===void 0)return D?D[s]:M[S];D?D.scrollTo(h?D.pageXOffset:w,h?w:D.pageYOffset):M[S]=w},a,m,arguments.length)}}),u.each(["top","left"],function(a,s){u.cssHooks[s]=ut(E.pixelPosition,function(h,m){if(m)return m=He(h,s),Q.test(m)?u(h).position()[s]+"px":m})}),u.each({Height:"height",Width:"width"},function(a,s){u.each({padding:"inner"+a,content:s,"":"outer"+a},function(h,m){u.fn[m]=function(M,S){var w=arguments.length&&(h||typeof M!="boolean"),D=h||(M===!0||S===!0?"margin":"border");return A(this,function(N,H,te){var se;return x(N)?m.indexOf("outer")===0?N["inner"+a]:N.document.documentElement["client"+a]:N.nodeType===9?(se=N.documentElement,Math.max(N.body["scroll"+a],se["scroll"+a],N.body["offset"+a],se["offset"+a],se["client"+a])):te===void 0?u.css(N,H,D):u.style(N,H,te,D)},s,w?M:void 0,w)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,s){u.fn[s]=function(h){return this.on(s,h)}}),u.fn.extend({bind:function(a,s,h){return this.on(a,null,s,h)},unbind:function(a,s){return this.off(a,null,s)},delegate:function(a,s,h,m){return this.on(s,a,h,m)},undelegate:function(a,s,h){return arguments.length===1?this.off(a,"**"):this.off(s,a||"**",h)},hover:function(a,s){return this.on("mouseenter",a).on("mouseleave",s||a)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,s){u.fn[s]=function(h,m){return arguments.length>0?this.on(s,null,h,m):this.trigger(s)}});var fx=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;u.proxy=function(a,s){var h,m,M;if(typeof s=="string"&&(h=a[s],s=a,a=h),!!b(a))return m=o.call(arguments,2),M=function(){return a.apply(s||this,m.concat(o.call(arguments)))},M.guid=a.guid=a.guid||u.guid++,M},u.holdReady=function(a){a?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=R,u.isFunction=b,u.isWindow=x,u.camelCase=de,u.type=B,u.now=Date.now,u.isNumeric=function(a){var s=u.type(a);return(s==="number"||s==="string")&&!isNaN(a-parseFloat(a))},u.trim=function(a){return a==null?"":(a+"").replace(fx,"$1")};var mx=e.jQuery,gx=e.$;return u.noConflict=function(a){return e.$===u&&(e.$=gx),a&&e.jQuery===u&&(e.jQuery=mx),u},typeof t>"u"&&(e.jQuery=e.$=u),u})}(il)),il.exports}(function(i){(function(e){e(["jquery"],function(t){return function(){var r,n,o=0,l={error:"error",info:"info",success:"success",warning:"warning"},c={clear:b,remove:x,error:p,getContainer:f,info:g,options:{},subscribe:_,success:y,version:"2.1.4",warning:E},d;return c;function p(R,T,W){return k({type:l.error,iconClass:u().iconClasses.error,message:R,optionsOverride:W,title:T})}function f(R,T){return R||(R=u()),r=t("#"+R.containerId),r.length||T&&(r=L(R)),r}function g(R,T,W){return k({type:l.info,iconClass:u().iconClasses.info,message:R,optionsOverride:W,title:T})}function _(R){n=R}function y(R,T,W){return k({type:l.success,iconClass:u().iconClasses.success,message:R,optionsOverride:W,title:T})}function E(R,T,W){return k({type:l.warning,iconClass:u().iconClasses.warning,message:R,optionsOverride:W,title:T})}function b(R,T){var W=u();r||f(W),O(R,W,T)||v(W)}function x(R){var T=u();if(r||f(T),R&&t(":focus",R).length===0){re(R);return}r.children().length&&r.remove()}function v(R){for(var T=r.children(),W=T.length-1;W>=0;W--)O(t(T[W]),R)}function O(R,T,W){var ie=W&&W.force?W.force:!1;return R&&(ie||t(":focus",R).length===0)?(R[T.hideMethod]({duration:T.hideDuration,easing:T.hideEasing,complete:function(){re(R)}}),!0):!1}function L(R){return r=t("<div/>").attr("id",R.containerId).addClass(R.positionClass),r.appendTo(t(R.target)),r}function B(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function j(R){n&&n(R)}function k(R){var T=u(),W=R.iconClass||T.iconClass;if(typeof R.optionsOverride<"u"&&(T=t.extend(T,R.optionsOverride),W=R.optionsOverride.iconClass||W),Je(T,R))return;o++,r=f(T,!0);var ie=null,F=t("<div/>"),ne=t("<div/>"),pe=t("<div/>"),ge=t("<div/>"),_e=t(T.closeHtml),J={intervalId:null,hideEta:null,maxHideTime:null},he={toastId:o,state:"visible",startTime:new Date,options:T,map:R};return je(),ae(),St(),j(he),T.debug&&console&&console.log(he),F;function Me(U){return U==null&&(U=""),U.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function je(){ye(),Ae(),$e(),et(),Ye(),K(),Le(),st()}function st(){var U="";switch(R.iconClass){case"toast-success":case"toast-info":U="polite";break;default:U="assertive"}F.attr("aria-live",U)}function St(){T.closeOnHover&&F.hover(Xe,Nt),!T.onclick&&T.tapToDismiss&&F.click(Fe),T.closeButton&&_e&&_e.click(function(U){U.stopPropagation?U.stopPropagation():U.cancelBubble!==void 0&&U.cancelBubble!==!0&&(U.cancelBubble=!0),T.onCloseClick&&T.onCloseClick(U),Fe(!0)}),T.onclick&&F.click(function(U){T.onclick(U),Fe()})}function ae(){F.hide(),F[T.showMethod]({duration:T.showDuration,easing:T.showEasing,complete:T.onShown}),T.timeOut>0&&(ie=setTimeout(Fe,T.timeOut),J.maxHideTime=parseFloat(T.timeOut),J.hideEta=new Date().getTime()+J.maxHideTime,T.progressBar&&(J.intervalId=setInterval(Mt,10)))}function ye(){R.iconClass&&F.addClass(T.toastClass).addClass(W)}function Le(){T.newestOnTop?r.prepend(F):r.append(F)}function Ae(){if(R.title){var U=R.title;T.escapeHtml&&(U=Me(R.title)),ne.append(U).addClass(T.titleClass),F.append(ne)}}function $e(){if(R.message){var U=R.message;T.escapeHtml&&(U=Me(R.message)),pe.append(U).addClass(T.messageClass),F.append(pe)}}function et(){T.closeButton&&(_e.addClass(T.closeClass).attr("role","button"),F.prepend(_e))}function Ye(){T.progressBar&&(ge.addClass(T.progressClass),F.prepend(ge))}function K(){T.rtl&&F.addClass("rtl")}function Je(U,A){if(U.preventDuplicates){if(A.message===d)return!0;d=A.message}return!1}function Fe(U){var A=U&&T.closeMethod!==!1?T.closeMethod:T.hideMethod,ee=U&&T.closeDuration!==!1?T.closeDuration:T.hideDuration,ue=U&&T.closeEasing!==!1?T.closeEasing:T.hideEasing;if(!(t(":focus",F).length&&!U))return clearTimeout(J.intervalId),F[A]({duration:ee,easing:ue,complete:function(){re(F),clearTimeout(ie),T.onHidden&&he.state!=="hidden"&&T.onHidden(),he.state="hidden",he.endTime=new Date,j(he)}})}function Nt(){(T.timeOut>0||T.extendedTimeOut>0)&&(ie=setTimeout(Fe,T.extendedTimeOut),J.maxHideTime=parseFloat(T.extendedTimeOut),J.hideEta=new Date().getTime()+J.maxHideTime)}function Xe(){clearTimeout(ie),J.hideEta=0,F.stop(!0,!0)[T.showMethod]({duration:T.showDuration,easing:T.showEasing})}function Mt(){var U=(J.hideEta-new Date().getTime())/J.maxHideTime*100;ge.width(U+"%")}}function u(){return t.extend({},B(),c.options)}function re(R){r||(r=f()),!R.is(":visible")&&(R.remove(),R=null,r.children().length===0&&(r.remove(),d=void 0))}}()})})(function(e,t){i.exports?i.exports=t(Eh()):window.toastr=t(window.jQuery)})})(rl);var Th=rl.exports;const bh=Di(Th);class va extends hr{constructor(e,t,r,n,o,l){super(t,e,r,n,o),this.direction=l}}const mr=11;let _a=[],Vn=[],al=[];class ol extends hr{constructor(e,t,r,n,o){super(e,n,0,-.4,r),this._type=e,this.direction=t,this.zPosition=r,this.entities=[],this.createLane(n,o)}generateRandomPosition(e,t){return Math.floor(Math.random()*(t-e))+e}createLane(e,t){if(!_a.find(r=>r.zPosition==this.zPosition)){if(this.type==="field"){const r=new hr("grass",e,0,-.4,this.zPosition);if(t.add(r.model),this.entities.push(r),this.zPosition!==0){const n=Oi(1,3);for(let o=0;o<n;o++){const l=`tree${Oi(0,3)}`,c=Oi(-mr,mr),d=new hr(l,e,c,0,this.zPosition);t.add(d.model),al.push(d),this.entities.push(d)}}}else if(this.type==="road"){const r=new hr("stripe_road",e,0,-.4,this.zPosition);t.add(r.model);let n=wh(e,t,this.zPosition,this.direction);this.entities.push(n)}else{const r=new hr("railroad",e,0,-.4,this.zPosition);t.add(r.model);let n=Ah(e,t,this.zPosition,this.direction);this.entities.push(n)}_a.push(this)}}}function Oi(i,e){return Math.floor(Math.random()*(e-i))+i}function sl(i,e){for(let t=-9;t<=13;t++){let r=Oi(1,10);const n=t<=0||t==1||r>=1&&r<=4?"field":r>=5&&r<=8?"road":"railroad",o=Math.random()<.5?"left":"right";new ol(n,o,t,i,e)}return{lanes:_a,cars:Vn,list_trees:al}}function wh(i,e,t,r){let n=[];const o=Oi(1,4);for(let l=0;l<o;l++){let c=r==="left"?mr:-mr;const d=t,p=Rh(Oi(1,10)),f=new va(i,p,c,-.2,d,r);f.model.rotateY(r==="left"?-Math.PI/2:Math.PI/2),Vn.push(f),n.push(f),e.add(f.model)}return n}function Ah(i,e,t,r){let n=[],o=r==="left"?1:-1;const l=Math.floor(Math.random()*5);let c=r==="left"?mr+l:-mr-l;const d=t,p=Math.floor(Math.random()*2),f=new va(i,"front_train",c,-.2,d,r);f.model.rotateY(r==="left"?-Math.PI:Math.PI),Vn.push(f),n.push(f),e.add(f.model);for(let _=1;_<=p;_++){c+=.25*o;const y=new va(i,"middle_train",c,-.2,d,r);y.model.rotateY(r==="left"?-Math.PI:Math.PI),Vn.push(y),n.push(y),e.add(y.model)}c+=.25*o;const g=new va(i,"back_train",c,-.2,d,r);return g.model.rotateY(r==="left"?-Math.PI:Math.PI),Vn.push(g),n.push(g),e.add(g.model),n}function Rh(i){switch(i){case 1:case 2:return"orange_car";case 3:case 4:return"blue_truck";case 5:case 6:return"blue_car";case 7:case 8:return"green_car";default:return"police_car"}}function Ch(){_a.forEach(i=>{i.type==="road"?Object.values(i.entities)[0].forEach((e,t)=>{setTimeout(()=>{const r=e.model.position,n=e.direction==="left"?-1:1,o=r.x+.05*n;e.model.position.set(o,r.y,r.z),Math.round(o)==mr*n&&(r.x=e.direction==="left"?mr:-mr)},t*1e3)}):i.type==="railroad"&&Object.values(i.entities)[0].forEach((e,t)=>{setTimeout(()=>{const r=e.model.position,n=e.direction==="left"?-1:1,o=r.x+.075*n;e.model.position.set(o,r.y,r.z),Math.round(o)==mr*n&&(r.x=e.direction==="left"?mr:-mr)},t*1e3)})})}const To="163",Lh=0,ll=1,Ph=2,cl=1,ul=2,$r=3,fi=0,ar=1,Qr=2,mi=0,on=1,hl=2,dl=3,pl=4,Uh=5,Fi=100,Nh=101,Ih=102,Dh=103,Oh=104,Fh=200,Bh=201,zh=202,kh=203,bo=204,wo=205,Hh=206,Gh=207,Vh=208,Wh=209,jh=210,qh=211,Xh=212,Yh=213,Kh=214,Jh=0,Zh=1,$h=2,xa=3,Qh=4,ed=5,td=6,rd=7,Ao=0,id=1,nd=2,gi=0,ad=1,od=2,sd=3,ld=4,cd=5,ud=6,hd=7,fl=300,sn=301,ln=302,Ro=303,Co=304,ya=306,Lo=1e3,Bi=1001,Po=1002,gr=1003,dd=1004,Ma=1005,wr=1006,Uo=1007,zi=1008,vi=1009,pd=1010,fd=1011,ml=1012,gl=1013,cn=1014,_i=1015,Sa=1016,vl=1017,_l=1018,Wn=1020,md=35902,gd=1021,vd=1022,Ir=1023,_d=1024,xd=1025,un=1026,jn=1027,yd=1028,xl=1029,Md=1030,yl=1031,Ml=1033,No=33776,Io=33777,Do=33778,Oo=33779,Sl=35840,El=35841,Tl=35842,bl=35843,wl=36196,Al=37492,Rl=37496,Cl=37808,Ll=37809,Pl=37810,Ul=37811,Nl=37812,Il=37813,Dl=37814,Ol=37815,Fl=37816,Bl=37817,zl=37818,kl=37819,Hl=37820,Gl=37821,Fo=36492,Vl=36494,Wl=36495,Sd=36283,jl=36284,ql=36285,Xl=36286,Ed=3200,Td=3201,Yl=0,bd=1,xi="",Dr="srgb",yi="srgb-linear",Bo="display-p3",Ea="display-p3-linear",Ta="linear",Ut="srgb",ba="rec709",wa="p3",hn=7680,Kl=519,wd=512,Ad=513,Rd=514,Jl=515,Cd=516,Ld=517,Pd=518,Ud=519,Zl=35044,$l="300 es",ei=2e3,Aa=2001;class dn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,o=r.length;n<o;n++)r[n].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=Math.PI/180,ko=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]).toLowerCase()}function or(i,e,t){return Math.max(e,Math.min(t,i))}function Nd(i,e){return(i%e+e)%e}function Ho(i,e,t){return(1-t)*i+t*e}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(or(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*r-l*n+e.x,this.y=o*n+l*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,r,n,o,l,c,d,p){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,o,l,c,d,p)}set(e,t,r,n,o,l,c,d,p){const f=this.elements;return f[0]=e,f[1]=n,f[2]=c,f[3]=t,f[4]=o,f[5]=d,f[6]=r,f[7]=l,f[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,o=this.elements,l=r[0],c=r[3],d=r[6],p=r[1],f=r[4],g=r[7],_=r[2],y=r[5],E=r[8],b=n[0],x=n[3],v=n[6],O=n[1],L=n[4],B=n[7],j=n[2],k=n[5],u=n[8];return o[0]=l*b+c*O+d*j,o[3]=l*x+c*L+d*k,o[6]=l*v+c*B+d*u,o[1]=p*b+f*O+g*j,o[4]=p*x+f*L+g*k,o[7]=p*v+f*B+g*u,o[2]=_*b+y*O+E*j,o[5]=_*x+y*L+E*k,o[8]=_*v+y*B+E*u,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],o=e[3],l=e[4],c=e[5],d=e[6],p=e[7],f=e[8];return t*l*f-t*c*p-r*o*f+r*c*d+n*o*p-n*l*d}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],o=e[3],l=e[4],c=e[5],d=e[6],p=e[7],f=e[8],g=f*l-c*p,_=c*d-f*o,y=p*o-l*d,E=t*g+r*_+n*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=g*b,e[1]=(n*p-f*r)*b,e[2]=(c*r-n*l)*b,e[3]=_*b,e[4]=(f*t-n*d)*b,e[5]=(n*o-c*t)*b,e[6]=y*b,e[7]=(r*d-p*t)*b,e[8]=(l*t-r*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,o,l,c){const d=Math.cos(o),p=Math.sin(o);return this.set(r*d,r*p,-r*(d*l+p*c)+l+e,-n*p,n*d,-n*(-p*l+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new at;function Ql(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Id(){const i=Yn("canvas");return i.style.display="block",i}const ec={};function Dd(i){i in ec||(ec[i]=!0,console.warn(i))}const tc=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rc=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ra={[yi]:{transfer:Ta,primaries:ba,toReference:i=>i,fromReference:i=>i},[Dr]:{transfer:Ut,primaries:ba,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ea]:{transfer:Ta,primaries:wa,toReference:i=>i.applyMatrix3(rc),fromReference:i=>i.applyMatrix3(tc)},[Bo]:{transfer:Ut,primaries:wa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(rc),fromReference:i=>i.applyMatrix3(tc).convertLinearToSRGB()}},Od=new Set([yi,Ea]),Rt={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Od.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=Ra[e].toReference,n=Ra[t].fromReference;return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ra[i].primaries},getTransfer:function(i){return i===xi?Ta:Ra[i].transfer}};function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fn;class Fd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fn===void 0&&(fn=Yn("canvas")),fn.width=e.width,fn.height=e.height;const r=fn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yn("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),o=n.data;for(let l=0;l<o.length;l++)o[l]=pn(o[l]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(pn(t[r]/255)*255):t[r]=pn(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bd=0;class ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let o;if(Array.isArray(n)){o=[];for(let l=0,c=n.length;l<c;l++)n[l].isDataTexture?o.push(Wo(n[l].image)):o.push(Wo(n[l]))}else o=Wo(n);r.url=o}return t||(e.images[this.uuid]=r),r}}function Wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zd=0;class er extends dn{constructor(e=er.DEFAULT_IMAGE,t=er.DEFAULT_MAPPING,r=Bi,n=Bi,o=wr,l=zi,c=Ir,d=vi,p=er.DEFAULT_ANISOTROPY,f=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=qn(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=o,this.minFilter=l,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=d,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lo:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lo:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}er.DEFAULT_IMAGE=null,er.DEFAULT_MAPPING=fl,er.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,r=0,n=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*n+l[12]*o,this.y=l[1]*t+l[5]*r+l[9]*n+l[13]*o,this.z=l[2]*t+l[6]*r+l[10]*n+l[14]*o,this.w=l[3]*t+l[7]*r+l[11]*n+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,o;const l=e.elements,c=l[0],d=l[4],p=l[8],f=l[1],g=l[5],_=l[9],y=l[2],E=l[6],b=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-y)<.01&&Math.abs(_-E)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+y)<.1&&Math.abs(_+E)<.1&&Math.abs(c+g+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,O=(g+1)/2,L=(b+1)/2,B=(d+f)/4,j=(p+y)/4,k=(_+E)/4;return v>O&&v>L?v<.01?(r=0,n=.707106781,o=.707106781):(r=Math.sqrt(v),n=B/r,o=j/r):O>L?O<.01?(r=.707106781,n=0,o=.707106781):(n=Math.sqrt(O),r=B/n,o=k/n):L<.01?(r=.707106781,n=.707106781,o=0):(o=Math.sqrt(L),r=j/o,n=k/o),this.set(r,n,o,t),this}let x=Math.sqrt((E-_)*(E-_)+(p-y)*(p-y)+(f-d)*(f-d));return Math.abs(x)<.001&&(x=1),this.x=(E-_)/x,this.y=(p-y)/x,this.z=(f-d)/x,this.w=Math.acos((c+g+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kd extends dn{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const o=new er(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const l=r.count;for(let c=0;c<l;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,o=this.textures.length;n<o;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends kd{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class nc extends er{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=gr,this.minFilter=gr,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hd extends er{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=gr,this.minFilter=gr,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,o,l,c){let d=r[n+0],p=r[n+1],f=r[n+2],g=r[n+3];const _=o[l+0],y=o[l+1],E=o[l+2],b=o[l+3];if(c===0){e[t+0]=d,e[t+1]=p,e[t+2]=f,e[t+3]=g;return}if(c===1){e[t+0]=_,e[t+1]=y,e[t+2]=E,e[t+3]=b;return}if(g!==b||d!==_||p!==y||f!==E){let x=1-c;const v=d*_+p*y+f*E+g*b,O=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const j=Math.sqrt(L),k=Math.atan2(j,v*O);x=Math.sin(x*k)/j,c=Math.sin(c*k)/j}const B=c*O;if(d=d*x+_*B,p=p*x+y*B,f=f*x+E*B,g=g*x+b*B,x===1-c){const j=1/Math.sqrt(d*d+p*p+f*f+g*g);d*=j,p*=j,f*=j,g*=j}}e[t]=d,e[t+1]=p,e[t+2]=f,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,n,o,l){const c=r[n],d=r[n+1],p=r[n+2],f=r[n+3],g=o[l],_=o[l+1],y=o[l+2],E=o[l+3];return e[t]=c*E+f*g+d*y-p*_,e[t+1]=d*E+f*_+p*g-c*y,e[t+2]=p*E+f*y+c*_-d*g,e[t+3]=f*E-c*g-d*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,o=e._z,l=e._order,c=Math.cos,d=Math.sin,p=c(r/2),f=c(n/2),g=c(o/2),_=d(r/2),y=d(n/2),E=d(o/2);switch(l){case"XYZ":this._x=_*f*g+p*y*E,this._y=p*y*g-_*f*E,this._z=p*f*E+_*y*g,this._w=p*f*g-_*y*E;break;case"YXZ":this._x=_*f*g+p*y*E,this._y=p*y*g-_*f*E,this._z=p*f*E-_*y*g,this._w=p*f*g+_*y*E;break;case"ZXY":this._x=_*f*g-p*y*E,this._y=p*y*g+_*f*E,this._z=p*f*E+_*y*g,this._w=p*f*g-_*y*E;break;case"ZYX":this._x=_*f*g-p*y*E,this._y=p*y*g+_*f*E,this._z=p*f*E-_*y*g,this._w=p*f*g+_*y*E;break;case"YZX":this._x=_*f*g+p*y*E,this._y=p*y*g+_*f*E,this._z=p*f*E-_*y*g,this._w=p*f*g-_*y*E;break;case"XZY":this._x=_*f*g-p*y*E,this._y=p*y*g-_*f*E,this._z=p*f*E+_*y*g,this._w=p*f*g+_*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],o=t[8],l=t[1],c=t[5],d=t[9],p=t[2],f=t[6],g=t[10],_=r+c+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(f-d)*y,this._y=(o-p)*y,this._z=(l-n)*y}else if(r>c&&r>g){const y=2*Math.sqrt(1+r-c-g);this._w=(f-d)/y,this._x=.25*y,this._y=(n+l)/y,this._z=(o+p)/y}else if(c>g){const y=2*Math.sqrt(1+c-r-g);this._w=(o-p)/y,this._x=(n+l)/y,this._y=.25*y,this._z=(d+f)/y}else{const y=2*Math.sqrt(1+g-r-c);this._w=(l-n)/y,this._x=(o+p)/y,this._y=(d+f)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(or(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,o=e._z,l=e._w,c=t._x,d=t._y,p=t._z,f=t._w;return this._x=r*f+l*c+n*p-o*d,this._y=n*f+l*d+o*c-r*p,this._z=o*f+l*p+r*d-n*c,this._w=l*f-r*c-n*d-o*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,o=this._z,l=this._w;let c=l*e._w+r*e._x+n*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=r,this._y=n,this._z=o,this;const d=1-c*c;if(d<=Number.EPSILON){const y=1-t;return this._w=y*l+t*this._w,this._x=y*r+t*this._x,this._y=y*n+t*this._y,this._z=y*o+t*this._z,this.normalize(),this}const p=Math.sqrt(d),f=Math.atan2(p,c),g=Math.sin((1-t)*f)/p,_=Math.sin(t*f)/p;return this._w=l*g+this._w*_,this._x=r*g+this._x*_,this._y=n*g+this._y*_,this._z=o*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*n,this.y=o[1]*t+o[4]*r+o[7]*n,this.z=o[2]*t+o[5]*r+o[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,o=e.elements,l=1/(o[3]*t+o[7]*r+o[11]*n+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*n+o[12])*l,this.y=(o[1]*t+o[5]*r+o[9]*n+o[13])*l,this.z=(o[2]*t+o[6]*r+o[10]*n+o[14])*l,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,o=e.x,l=e.y,c=e.z,d=e.w,p=2*(l*n-c*r),f=2*(c*t-o*n),g=2*(o*r-l*t);return this.x=t+d*p+l*g-c*f,this.y=r+d*f+c*p-o*g,this.z=n+d*g+o*f-l*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n,this.y=o[1]*t+o[5]*r+o[9]*n,this.z=o[2]*t+o[6]*r+o[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,o=e.z,l=t.x,c=t.y,d=t.z;return this.x=n*d-o*c,this.y=o*l-r*d,this.z=r*c-n*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(or(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new V,ac=new mn;class Or{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Ar):Ar.fromBufferAttribute(o,l),Ar.applyMatrix4(e.matrixWorld),this.expandByPoint(Ar);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ca.copy(r.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const n=e.children;for(let o=0,l=n.length;o<l;o++)this.expandByObject(n[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ar),Ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kn),La.subVectors(this.max,Kn),gn.subVectors(e.a,Kn),vn.subVectors(e.b,Kn),_n.subVectors(e.c,Kn),Mi.subVectors(vn,gn),Si.subVectors(_n,vn),Hi.subVectors(gn,_n);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Hi.z,Hi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Hi.z,0,-Hi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Hi.y,Hi.x,0];return!qo(t,gn,vn,_n,La)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,gn,vn,_n,La))?!1:(Pa.crossVectors(Mi,Si),t=[Pa.x,Pa.y,Pa.z],qo(t,gn,vn,_n,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new V,new V,new V,new V,new V,new V,new V,new V],Ar=new V,Ca=new Or,gn=new V,vn=new V,_n=new V,Mi=new V,Si=new V,Hi=new V,Kn=new V,La=new V,Pa=new V,Gi=new V;function qo(i,e,t,r,n){for(let o=0,l=i.length-3;o<=l;o+=3){Gi.fromArray(i,o);const c=n.x*Math.abs(Gi.x)+n.y*Math.abs(Gi.y)+n.z*Math.abs(Gi.z),d=e.dot(Gi),p=t.dot(Gi),f=r.dot(Gi);if(Math.max(-Math.max(d,p,f),Math.min(d,p,f))>c)return!1}return!0}const Gd=new Or,Jn=new V,Xo=new V;class Zn{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Gd.setFromPoints(e).getCenter(r);let n=0;for(let o=0,l=e.length;o<l;o++)n=Math.max(n,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jn.subVectors(e,this.center);const t=Jn.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Jn,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jn.copy(e.center).add(Xo)),this.expandByPoint(Jn.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new V,Yo=new V,Ua=new V,Ei=new V,Ko=new V,Na=new V,Jo=new V;class Zo{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Yo.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Yo);const o=e.distanceTo(t)*.5,l=-this.direction.dot(Ua),c=Ei.dot(this.direction),d=-Ei.dot(Ua),p=Ei.lengthSq(),f=Math.abs(1-l*l);let g,_,y,E;if(f>0)if(g=l*d-c,_=l*c-d,E=o*f,g>=0)if(_>=-E)if(_<=E){const b=1/f;g*=b,_*=b,y=g*(g+l*_+2*c)+_*(l*g+_+2*d)+p}else _=o,g=Math.max(0,-(l*_+c)),y=-g*g+_*(_+2*d)+p;else _=-o,g=Math.max(0,-(l*_+c)),y=-g*g+_*(_+2*d)+p;else _<=-E?(g=Math.max(0,-(-l*o+c)),_=g>0?-o:Math.min(Math.max(-o,-d),o),y=-g*g+_*(_+2*d)+p):_<=E?(g=0,_=Math.min(Math.max(-o,-d),o),y=_*(_+2*d)+p):(g=Math.max(0,-(l*o+c)),_=g>0?o:Math.min(Math.max(-o,-d),o),y=-g*g+_*(_+2*d)+p);else _=l>0?-o:o,g=Math.max(0,-(l*_+c)),y=-g*g+_*(_+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),n&&n.copy(Yo).addScaledVector(Ua,_),y}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const r=ri.dot(this.direction),n=ri.dot(ri)-r*r,o=e.radius*e.radius;if(n>o)return null;const l=Math.sqrt(o-n),c=r-l,d=r+l;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,o,l,c,d;const p=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,n=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,n=(e.min.x-_.x)*p),f>=0?(o=(e.min.y-_.y)*f,l=(e.max.y-_.y)*f):(o=(e.max.y-_.y)*f,l=(e.min.y-_.y)*f),r>l||o>n||((o>r||isNaN(r))&&(r=o),(l<n||isNaN(n))&&(n=l),g>=0?(c=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),r>d||c>n)||((c>r||r!==r)&&(r=c),(d<n||n!==n)&&(n=d),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,r,n,o){Ko.subVectors(t,e),Na.subVectors(r,e),Jo.crossVectors(Ko,Na);let l=this.direction.dot(Jo),c;if(l>0){if(n)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Ei.subVectors(this.origin,e);const d=c*this.direction.dot(Na.crossVectors(Ei,Na));if(d<0)return null;const p=c*this.direction.dot(Ko.cross(Ei));if(p<0||d+p>l)return null;const f=-c*Ei.dot(Jo);return f<0?null:this.at(f/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,r,n,o,l,c,d,p,f,g,_,y,E,b,x){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,o,l,c,d,p,f,g,_,y,E,b,x)}set(e,t,r,n,o,l,c,d,p,f,g,_,y,E,b,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=n,v[1]=o,v[5]=l,v[9]=c,v[13]=d,v[2]=p,v[6]=f,v[10]=g,v[14]=_,v[3]=y,v[7]=E,v[11]=b,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/xn.setFromMatrixColumn(e,0).length(),o=1/xn.setFromMatrixColumn(e,1).length(),l=1/xn.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*l,t[9]=r[9]*l,t[10]=r[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,o=e.z,l=Math.cos(r),c=Math.sin(r),d=Math.cos(n),p=Math.sin(n),f=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=l*f,y=l*g,E=c*f,b=c*g;t[0]=d*f,t[4]=-d*g,t[8]=p,t[1]=y+E*p,t[5]=_-b*p,t[9]=-c*d,t[2]=b-_*p,t[6]=E+y*p,t[10]=l*d}else if(e.order==="YXZ"){const _=d*f,y=d*g,E=p*f,b=p*g;t[0]=_+b*c,t[4]=E*c-y,t[8]=l*p,t[1]=l*g,t[5]=l*f,t[9]=-c,t[2]=y*c-E,t[6]=b+_*c,t[10]=l*d}else if(e.order==="ZXY"){const _=d*f,y=d*g,E=p*f,b=p*g;t[0]=_-b*c,t[4]=-l*g,t[8]=E+y*c,t[1]=y+E*c,t[5]=l*f,t[9]=b-_*c,t[2]=-l*p,t[6]=c,t[10]=l*d}else if(e.order==="ZYX"){const _=l*f,y=l*g,E=c*f,b=c*g;t[0]=d*f,t[4]=E*p-y,t[8]=_*p+b,t[1]=d*g,t[5]=b*p+_,t[9]=y*p-E,t[2]=-p,t[6]=c*d,t[10]=l*d}else if(e.order==="YZX"){const _=l*d,y=l*p,E=c*d,b=c*p;t[0]=d*f,t[4]=b-_*g,t[8]=E*g+y,t[1]=g,t[5]=l*f,t[9]=-c*f,t[2]=-p*f,t[6]=y*g+E,t[10]=_-b*g}else if(e.order==="XZY"){const _=l*d,y=l*p,E=c*d,b=c*p;t[0]=d*f,t[4]=-g,t[8]=p*f,t[1]=_*g+b,t[5]=l*f,t[9]=y*g-E,t[2]=E*g-y,t[6]=c*f,t[10]=b*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vd,e,Wd)}lookAt(e,t,r){const n=this.elements;return dr.subVectors(e,t),dr.lengthSq()===0&&(dr.z=1),dr.normalize(),Ti.crossVectors(r,dr),Ti.lengthSq()===0&&(Math.abs(r.z)===1?dr.x+=1e-4:dr.z+=1e-4,dr.normalize(),Ti.crossVectors(r,dr)),Ti.normalize(),Ia.crossVectors(dr,Ti),n[0]=Ti.x,n[4]=Ia.x,n[8]=dr.x,n[1]=Ti.y,n[5]=Ia.y,n[9]=dr.y,n[2]=Ti.z,n[6]=Ia.z,n[10]=dr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,o=this.elements,l=r[0],c=r[4],d=r[8],p=r[12],f=r[1],g=r[5],_=r[9],y=r[13],E=r[2],b=r[6],x=r[10],v=r[14],O=r[3],L=r[7],B=r[11],j=r[15],k=n[0],u=n[4],re=n[8],R=n[12],T=n[1],W=n[5],ie=n[9],F=n[13],ne=n[2],pe=n[6],ge=n[10],_e=n[14],J=n[3],he=n[7],Me=n[11],je=n[15];return o[0]=l*k+c*T+d*ne+p*J,o[4]=l*u+c*W+d*pe+p*he,o[8]=l*re+c*ie+d*ge+p*Me,o[12]=l*R+c*F+d*_e+p*je,o[1]=f*k+g*T+_*ne+y*J,o[5]=f*u+g*W+_*pe+y*he,o[9]=f*re+g*ie+_*ge+y*Me,o[13]=f*R+g*F+_*_e+y*je,o[2]=E*k+b*T+x*ne+v*J,o[6]=E*u+b*W+x*pe+v*he,o[10]=E*re+b*ie+x*ge+v*Me,o[14]=E*R+b*F+x*_e+v*je,o[3]=O*k+L*T+B*ne+j*J,o[7]=O*u+L*W+B*pe+j*he,o[11]=O*re+L*ie+B*ge+j*Me,o[15]=O*R+L*F+B*_e+j*je,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],o=e[12],l=e[1],c=e[5],d=e[9],p=e[13],f=e[2],g=e[6],_=e[10],y=e[14],E=e[3],b=e[7],x=e[11],v=e[15];return E*(+o*d*g-n*p*g-o*c*_+r*p*_+n*c*y-r*d*y)+b*(+t*d*y-t*p*_+o*l*_-n*l*y+n*p*f-o*d*f)+x*(+t*p*g-t*c*y-o*l*g+r*l*y+o*c*f-r*p*f)+v*(-n*c*f-t*d*g+t*c*_+n*l*g-r*l*_+r*d*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],o=e[3],l=e[4],c=e[5],d=e[6],p=e[7],f=e[8],g=e[9],_=e[10],y=e[11],E=e[12],b=e[13],x=e[14],v=e[15],O=g*x*p-b*_*p+b*d*y-c*x*y-g*d*v+c*_*v,L=E*_*p-f*x*p-E*d*y+l*x*y+f*d*v-l*_*v,B=f*b*p-E*g*p+E*c*y-l*b*y-f*c*v+l*g*v,j=E*g*d-f*b*d-E*c*_+l*b*_+f*c*x-l*g*x,k=t*O+r*L+n*B+o*j;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const u=1/k;return e[0]=O*u,e[1]=(b*_*o-g*x*o-b*n*y+r*x*y+g*n*v-r*_*v)*u,e[2]=(c*x*o-b*d*o+b*n*p-r*x*p-c*n*v+r*d*v)*u,e[3]=(g*d*o-c*_*o-g*n*p+r*_*p+c*n*y-r*d*y)*u,e[4]=L*u,e[5]=(f*x*o-E*_*o+E*n*y-t*x*y-f*n*v+t*_*v)*u,e[6]=(E*d*o-l*x*o-E*n*p+t*x*p+l*n*v-t*d*v)*u,e[7]=(l*_*o-f*d*o+f*n*p-t*_*p-l*n*y+t*d*y)*u,e[8]=B*u,e[9]=(E*g*o-f*b*o-E*r*y+t*b*y+f*r*v-t*g*v)*u,e[10]=(l*b*o-E*c*o+E*r*p-t*b*p-l*r*v+t*c*v)*u,e[11]=(f*c*o-l*g*o-f*r*p+t*g*p+l*r*y-t*c*y)*u,e[12]=j*u,e[13]=(f*b*n-E*g*n+E*r*_-t*b*_-f*r*x+t*g*x)*u,e[14]=(E*c*n-l*b*n-E*r*d+t*b*d+l*r*x-t*c*x)*u,e[15]=(l*g*n-f*c*n+f*r*d-t*g*d-l*r*_+t*c*_)*u,this}scale(e){const t=this.elements,r=e.x,n=e.y,o=e.z;return t[0]*=r,t[4]*=n,t[8]*=o,t[1]*=r,t[5]*=n,t[9]*=o,t[2]*=r,t[6]*=n,t[10]*=o,t[3]*=r,t[7]*=n,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),o=1-r,l=e.x,c=e.y,d=e.z,p=o*l,f=o*c;return this.set(p*l+r,p*c-n*d,p*d+n*c,0,p*c+n*d,f*c+r,f*d-n*l,0,p*d-n*c,f*d+n*l,o*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,o,l){return this.set(1,r,o,0,e,1,l,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,o=t._x,l=t._y,c=t._z,d=t._w,p=o+o,f=l+l,g=c+c,_=o*p,y=o*f,E=o*g,b=l*f,x=l*g,v=c*g,O=d*p,L=d*f,B=d*g,j=r.x,k=r.y,u=r.z;return n[0]=(1-(b+v))*j,n[1]=(y+B)*j,n[2]=(E-L)*j,n[3]=0,n[4]=(y-B)*k,n[5]=(1-(_+v))*k,n[6]=(x+O)*k,n[7]=0,n[8]=(E+L)*u,n[9]=(x-O)*u,n[10]=(1-(_+b))*u,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let o=xn.set(n[0],n[1],n[2]).length();const l=xn.set(n[4],n[5],n[6]).length(),c=xn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(o=-o),e.x=n[12],e.y=n[13],e.z=n[14],Rr.copy(this);const d=1/o,p=1/l,f=1/c;return Rr.elements[0]*=d,Rr.elements[1]*=d,Rr.elements[2]*=d,Rr.elements[4]*=p,Rr.elements[5]*=p,Rr.elements[6]*=p,Rr.elements[8]*=f,Rr.elements[9]*=f,Rr.elements[10]*=f,t.setFromRotationMatrix(Rr),r.x=o,r.y=l,r.z=c,this}makePerspective(e,t,r,n,o,l,c=ei){const d=this.elements,p=2*o/(t-e),f=2*o/(r-n),g=(t+e)/(t-e),_=(r+n)/(r-n);let y,E;if(c===ei)y=-(l+o)/(l-o),E=-2*l*o/(l-o);else if(c===Aa)y=-l/(l-o),E=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=f,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,n,o,l,c=ei){const d=this.elements,p=1/(t-e),f=1/(r-n),g=1/(l-o),_=(t+e)*p,y=(r+n)*f;let E,b;if(c===ei)E=(l+o)*g,b=-2*g;else if(c===Aa)E=o*g,b=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*f,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=b,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const xn=new V,Rr=new It,Vd=new V(0,0,0),Wd=new V(1,1,1),Ti=new V,Ia=new V,dr=new V,oc=new It,sc=new mn;class Fr{constructor(e=0,t=0,r=0,n=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,o=n[0],l=n[4],c=n[8],d=n[1],p=n[5],f=n[9],g=n[2],_=n[6],y=n[10];switch(t){case"XYZ":this._y=Math.asin(or(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,y),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-or(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(or(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-l,p)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-or(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,p));break;case"YZX":this._z=Math.asin(or(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-f,p),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-or(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-f,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jd=0;const cc=new V,yn=new mn,ii=new It,Da=new V,$n=new V,qd=new V,Xd=new mn,uc=new V(1,0,0),hc=new V(0,1,0),dc=new V(0,0,1),pc={type:"added"},Yd={type:"removed"},Mn={type:"childadded",child:null},$o={type:"childremoved",child:null};class zt extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new V,t=new Fr,r=new mn,n=new V(1,1,1);function o(){r.setFromEuler(t,!1)}function l(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new It},normalMatrix:{value:new at}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.multiply(yn),this}rotateOnWorldAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.premultiply(yn),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(dc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Da.copy(e):Da.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),$n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt($n,Da,this.up):ii.lookAt(Da,$n,this.up),this.quaternion.setFromRotationMatrix(ii),n&&(ii.extractRotation(n.matrixWorld),yn.setFromRotationMatrix(ii),this.quaternion.premultiply(yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pc),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yd),$o.child=e,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pc),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const o=this.children[r].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let o=0,l=n.length;o<l;o++)n[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const o=t[r];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let o=0,l=n.length;o<l;o++){const c=n[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function o(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let p=0,f=d.length;p<f;p++){const g=d[p];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,p=this.material.length;d<p;d++)c.push(o(e.materials,this.material[d]));n.material=c}else n.material=o(e.materials,this.material);if(this.children.length>0){n.children=[];for(let c=0;c<this.children.length;c++)n.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];n.animations.push(o(e.animations,d))}}if(t){const c=l(e.geometries),d=l(e.materials),p=l(e.textures),f=l(e.images),g=l(e.shapes),_=l(e.skeletons),y=l(e.animations),E=l(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),f.length>0&&(r.images=f),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=n,r;function l(c){const d=[];for(const p in c){const f=c[p];delete f.metadata,d.push(f)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}zt.DEFAULT_UP=new V(0,1,0),zt.DEFAULT_MATRIX_AUTO_UPDATE=!0,zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cr=new V,ni=new V,Qo=new V,ai=new V,Sn=new V,En=new V,fc=new V,es=new V,ts=new V,rs=new V;class Br{constructor(e=new V,t=new V,r=new V){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Cr.subVectors(e,t),n.cross(Cr);const o=n.lengthSq();return o>0?n.multiplyScalar(1/Math.sqrt(o)):n.set(0,0,0)}static getBarycoord(e,t,r,n,o){Cr.subVectors(n,t),ni.subVectors(r,t),Qo.subVectors(e,t);const l=Cr.dot(Cr),c=Cr.dot(ni),d=Cr.dot(Qo),p=ni.dot(ni),f=ni.dot(Qo),g=l*p-c*c;if(g===0)return o.set(0,0,0),null;const _=1/g,y=(p*d-c*f)*_,E=(l*f-c*d)*_;return o.set(1-y-E,E,y)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,r,n,o,l,c,d){return this.getBarycoord(e,t,r,n,ai)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,ai.x),d.addScaledVector(l,ai.y),d.addScaledVector(c,ai.z),d)}static isFrontFacing(e,t,r,n){return Cr.subVectors(r,t),ni.subVectors(e,t),Cr.cross(ni).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cr.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Cr.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Br.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Br.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,o){return Br.getInterpolation(e,this.a,this.b,this.c,t,r,n,o)}containsPoint(e){return Br.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Br.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,o=this.c;let l,c;Sn.subVectors(n,r),En.subVectors(o,r),es.subVectors(e,r);const d=Sn.dot(es),p=En.dot(es);if(d<=0&&p<=0)return t.copy(r);ts.subVectors(e,n);const f=Sn.dot(ts),g=En.dot(ts);if(f>=0&&g<=f)return t.copy(n);const _=d*g-f*p;if(_<=0&&d>=0&&f<=0)return l=d/(d-f),t.copy(r).addScaledVector(Sn,l);rs.subVectors(e,o);const y=Sn.dot(rs),E=En.dot(rs);if(E>=0&&y<=E)return t.copy(o);const b=y*p-d*E;if(b<=0&&p>=0&&E<=0)return c=p/(p-E),t.copy(r).addScaledVector(En,c);const x=f*E-y*g;if(x<=0&&g-f>=0&&y-E>=0)return fc.subVectors(o,n),c=(g-f)/(g-f+(y-E)),t.copy(n).addScaledVector(fc,c);const v=1/(x+b+_);return l=b*v,c=_*v,t.copy(r).addScaledVector(Sn,l).addScaledVector(En,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function is(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class vt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=Rt.workingColorSpace){if(e=Nd(e,1),t=or(t,0,1),r=or(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,l=2*r-o;this.r=is(l,o,e+1/3),this.g=is(l,o,e),this.b=is(l,o,e-1/3)}return Rt.toWorkingColorSpace(this,n),this}setStyle(e,t=Dr){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=n[1],c=n[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=n[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dr){const r=mc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dr){return Rt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(or(Zt.r*255,0,255))*65536+Math.round(or(Zt.g*255,0,255))*256+Math.round(or(Zt.b*255,0,255))}getHexString(e=Dr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Zt.copy(this),t);const r=Zt.r,n=Zt.g,o=Zt.b,l=Math.max(r,n,o),c=Math.min(r,n,o);let d,p;const f=(c+l)/2;if(c===l)d=0,p=0;else{const g=l-c;switch(p=f<=.5?g/(l+c):g/(2-l-c),l){case r:d=(n-o)/g+(n<o?6:0);break;case n:d=(o-r)/g+2;break;case o:d=(r-n)/g+4;break}d/=6}return e.h=d,e.s=p,e.l=f,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Dr){Rt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,r=Zt.g,n=Zt.b;return e!==Dr?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Oa);const r=Ho(bi.h,Oa.h,t),n=Ho(bi.s,Oa.s,t),o=Ho(bi.l,Oa.l,t);return this.setHSL(r,n,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*n,this.g=o[1]*t+o[4]*r+o[7]*n,this.b=o[2]*t+o[5]*r+o[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new vt;vt.NAMES=mc;let Kd=0;class oi extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=on,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=wo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hn,this.stencilZFail=hn,this.stencilZPass=hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==on&&(r.blending=this.blending),this.side!==fi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bo&&(r.blendSrc=this.blendSrc),this.blendDst!==wo&&(r.blendDst=this.blendDst),this.blendEquation!==Fi&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xa&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hn&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hn&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hn&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}if(t){const o=n(e.textures),l=n(e.images);o.length>0&&(r.textures=o),l.length>0&&(r.images=l)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let o=0;o!==n;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gc extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new V,Fa=new _t;class zr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Dd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,o=this.itemSize;n<o;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Xn(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=sr(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=sr(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=sr(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sr(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=sr(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=sr(t,this.array),r=sr(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=sr(t,this.array),r=sr(r,this.array),n=sr(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,o){return e*=this.itemSize,this.normalized&&(t=sr(t,this.array),r=sr(r,this.array),n=sr(n,this.array),o=sr(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zl&&(e.usage=this.usage),e}}class vc extends zr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class _c extends zr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class tr extends zr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Jd=0;const vr=new It,ns=new zt,Tn=new V,pr=new Or,Qn=new Or,qt=new V;class Lr extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?_c:vc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new at().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vr.makeRotationFromQuaternion(e),this.applyMatrix4(vr),this}rotateX(e){return vr.makeRotationX(e),this.applyMatrix4(vr),this}rotateY(e){return vr.makeRotationY(e),this.applyMatrix4(vr),this}rotateZ(e){return vr.makeRotationZ(e),this.applyMatrix4(vr),this}translate(e,t,r){return vr.makeTranslation(e,t,r),this.applyMatrix4(vr),this}scale(e,t,r){return vr.makeScale(e,t,r),this.applyMatrix4(vr),this}lookAt(e){return ns.lookAt(e),ns.updateMatrix(),this.applyMatrix4(ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tn).negate(),this.translate(Tn.x,Tn.y,Tn.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const o=e[r];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new tr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const o=t[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,pr.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,pr.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(pr.min),this.boundingBox.expandByPoint(pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(pr.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const c=t[o];Qn.setFromBufferAttribute(c),this.morphTargetsRelative?(qt.addVectors(pr.min,Qn.min),pr.expandByPoint(qt),qt.addVectors(pr.max,Qn.max),pr.expandByPoint(qt)):(pr.expandByPoint(Qn.min),pr.expandByPoint(Qn.max))}pr.getCenter(r);let n=0;for(let o=0,l=e.count;o<l;o++)qt.fromBufferAttribute(e,o),n=Math.max(n,r.distanceToSquared(qt));if(t)for(let o=0,l=t.length;o<l;o++){const c=t[o],d=this.morphTargetsRelative;for(let p=0,f=c.count;p<f;p++)qt.fromBufferAttribute(c,p),d&&(Tn.fromBufferAttribute(e,p),qt.add(Tn)),n=Math.max(n,r.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zr(new Float32Array(4*r.count),4));const l=this.getAttribute("tangent"),c=[],d=[];for(let re=0;re<r.count;re++)c[re]=new V,d[re]=new V;const p=new V,f=new V,g=new V,_=new _t,y=new _t,E=new _t,b=new V,x=new V;function v(re,R,T){p.fromBufferAttribute(r,re),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,T),_.fromBufferAttribute(o,re),y.fromBufferAttribute(o,R),E.fromBufferAttribute(o,T),f.sub(p),g.sub(p),y.sub(_),E.sub(_);const W=1/(y.x*E.y-E.x*y.y);isFinite(W)&&(b.copy(f).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(W),x.copy(g).multiplyScalar(y.x).addScaledVector(f,-E.x).multiplyScalar(W),c[re].add(b),c[R].add(b),c[T].add(b),d[re].add(x),d[R].add(x),d[T].add(x))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let re=0,R=O.length;re<R;++re){const T=O[re],W=T.start,ie=T.count;for(let F=W,ne=W+ie;F<ne;F+=3)v(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const L=new V,B=new V,j=new V,k=new V;function u(re){j.fromBufferAttribute(n,re),k.copy(j);const R=c[re];L.copy(R),L.sub(j.multiplyScalar(j.dot(R))).normalize(),B.crossVectors(k,R);const T=B.dot(d[re])<0?-1:1;l.setXYZW(re,L.x,L.y,L.z,T)}for(let re=0,R=O.length;re<R;++re){const T=O[re],W=T.start,ie=T.count;for(let F=W,ne=W+ie;F<ne;F+=3)u(e.getX(F+0)),u(e.getX(F+1)),u(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new zr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const n=new V,o=new V,l=new V,c=new V,d=new V,p=new V,f=new V,g=new V;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),b=e.getX(_+1),x=e.getX(_+2);n.fromBufferAttribute(t,E),o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,x),f.subVectors(l,o),g.subVectors(n,o),f.cross(g),c.fromBufferAttribute(r,E),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,x),c.add(f),d.add(f),p.add(f),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,y=t.count;_<y;_+=3)n.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),l.fromBufferAttribute(t,_+2),f.subVectors(l,o),g.subVectors(n,o),f.cross(g),r.setXYZ(_+0,f.x,f.y,f.z),r.setXYZ(_+1,f.x,f.y,f.z),r.setXYZ(_+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(c,d){const p=c.array,f=c.itemSize,g=c.normalized,_=new p.constructor(d.length*f);let y=0,E=0;for(let b=0,x=d.length;b<x;b++){c.isInterleavedBufferAttribute?y=d[b]*c.data.stride+c.offset:y=d[b]*f;for(let v=0;v<f;v++)_[E++]=p[y++]}return new zr(_,f,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lr,r=this.index.array,n=this.attributes;for(const c in n){const d=n[c],p=e(d,r);t.setAttribute(c,p)}const o=this.morphAttributes;for(const c in o){const d=[],p=o[c];for(let f=0,g=p.length;f<g;f++){const _=p[f],y=e(_,r);d.push(y)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,d=l.length;c<d;c++){const p=l[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const n={};let o=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],f=[];for(let g=0,_=p.length;g<_;g++){const y=p[g];f.push(y.toJSON(e.data))}f.length>0&&(n[d]=f,o=!0)}o&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const p in n){const f=n[p];this.setAttribute(p,f.clone(t))}const o=e.morphAttributes;for(const p in o){const f=[],g=o[p];for(let _=0,y=g.length;_<y;_++)f.push(g[_].clone(t));this.morphAttributes[p]=f}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let p=0,f=l.length;p<f;p++){const g=l[p];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new It,Vi=new Zo,Ba=new Zn,yc=new V,bn=new V,wn=new V,An=new V,as=new V,za=new V,ka=new _t,Ha=new _t,Ga=new _t,Mc=new V,Sc=new V,Ec=new V,Va=new V,Wa=new V;class _r extends zt{constructor(e=new Lr,t=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,o=r.length;n<o;n++){const l=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,o=r.morphAttributes.position,l=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const c=this.morphTargetInfluences;if(o&&c){za.set(0,0,0);for(let d=0,p=o.length;d<p;d++){const f=c[d],g=o[d];f!==0&&(as.fromBufferAttribute(g,e),l?za.addScaledVector(as,f):za.addScaledVector(as.sub(t),f))}t.add(za)}return t}raycast(e,t){const r=this.geometry,n=this.material,o=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ba.copy(r.boundingSphere),Ba.applyMatrix4(o),Vi.copy(e.ray).recast(e.near),!(Ba.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ba,yc)===null||Vi.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(xc.copy(o).invert(),Vi.copy(e.ray).applyMatrix4(xc),!(r.boundingBox!==null&&Vi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,r){let n;const o=this.geometry,l=this.material,c=o.index,d=o.attributes.position,p=o.attributes.uv,f=o.attributes.uv1,g=o.attributes.normal,_=o.groups,y=o.drawRange;if(c!==null)if(Array.isArray(l))for(let E=0,b=_.length;E<b;E++){const x=_[E],v=l[x.materialIndex],O=Math.max(x.start,y.start),L=Math.min(c.count,Math.min(x.start+x.count,y.start+y.count));for(let B=O,j=L;B<j;B+=3){const k=c.getX(B),u=c.getX(B+1),re=c.getX(B+2);n=ja(this,v,e,r,p,f,g,k,u,re),n&&(n.faceIndex=Math.floor(B/3),n.face.materialIndex=x.materialIndex,t.push(n))}}else{const E=Math.max(0,y.start),b=Math.min(c.count,y.start+y.count);for(let x=E,v=b;x<v;x+=3){const O=c.getX(x),L=c.getX(x+1),B=c.getX(x+2);n=ja(this,l,e,r,p,f,g,O,L,B),n&&(n.faceIndex=Math.floor(x/3),t.push(n))}}else if(d!==void 0)if(Array.isArray(l))for(let E=0,b=_.length;E<b;E++){const x=_[E],v=l[x.materialIndex],O=Math.max(x.start,y.start),L=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let B=O,j=L;B<j;B+=3){const k=B,u=B+1,re=B+2;n=ja(this,v,e,r,p,f,g,k,u,re),n&&(n.faceIndex=Math.floor(B/3),n.face.materialIndex=x.materialIndex,t.push(n))}}else{const E=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let x=E,v=b;x<v;x+=3){const O=x,L=x+1,B=x+2;n=ja(this,l,e,r,p,f,g,O,L,B),n&&(n.faceIndex=Math.floor(x/3),t.push(n))}}}}function Zd(i,e,t,r,n,o,l,c){let d;if(e.side===ar?d=r.intersectTriangle(l,o,n,!0,c):d=r.intersectTriangle(n,o,l,e.side===fi,c),d===null)return null;Wa.copy(c),Wa.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Wa);return p<t.near||p>t.far?null:{distance:p,point:Wa.clone(),object:i}}function ja(i,e,t,r,n,o,l,c,d,p){i.getVertexPosition(c,bn),i.getVertexPosition(d,wn),i.getVertexPosition(p,An);const f=Zd(i,e,t,r,bn,wn,An,Va);if(f){n&&(ka.fromBufferAttribute(n,c),Ha.fromBufferAttribute(n,d),Ga.fromBufferAttribute(n,p),f.uv=Br.getInterpolation(Va,bn,wn,An,ka,Ha,Ga,new _t)),o&&(ka.fromBufferAttribute(o,c),Ha.fromBufferAttribute(o,d),Ga.fromBufferAttribute(o,p),f.uv1=Br.getInterpolation(Va,bn,wn,An,ka,Ha,Ga,new _t)),l&&(Mc.fromBufferAttribute(l,c),Sc.fromBufferAttribute(l,d),Ec.fromBufferAttribute(l,p),f.normal=Br.getInterpolation(Va,bn,wn,An,Mc,Sc,Ec,new V),f.normal.dot(r.direction)>0&&f.normal.multiplyScalar(-1));const g={a:c,b:d,c:p,normal:new V,materialIndex:0};Br.getNormal(bn,wn,An,g.normal),f.face=g}return f}class ea extends Lr{constructor(e=1,t=1,r=1,n=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:o,depthSegments:l};const c=this;n=Math.floor(n),o=Math.floor(o),l=Math.floor(l);const d=[],p=[],f=[],g=[];let _=0,y=0;E("z","y","x",-1,-1,r,t,e,l,o,0),E("z","y","x",1,-1,r,t,-e,l,o,1),E("x","z","y",1,1,e,r,t,n,l,2),E("x","z","y",1,-1,e,r,-t,n,l,3),E("x","y","z",1,-1,e,t,r,n,o,4),E("x","y","z",-1,-1,e,t,-r,n,o,5),this.setIndex(d),this.setAttribute("position",new tr(p,3)),this.setAttribute("normal",new tr(f,3)),this.setAttribute("uv",new tr(g,2));function E(b,x,v,O,L,B,j,k,u,re,R){const T=B/u,W=j/re,ie=B/2,F=j/2,ne=k/2,pe=u+1,ge=re+1;let _e=0,J=0;const he=new V;for(let Me=0;Me<ge;Me++){const je=Me*W-F;for(let st=0;st<pe;st++){const St=st*T-ie;he[b]=St*O,he[x]=je*L,he[v]=ne,p.push(he.x,he.y,he.z),he[b]=0,he[x]=0,he[v]=k>0?1:-1,f.push(he.x,he.y,he.z),g.push(st/u),g.push(1-Me/re),_e+=1}}for(let Me=0;Me<re;Me++)for(let je=0;je<u;je++){const st=_+je+pe*Me,St=_+je+pe*(Me+1),ae=_+(je+1)+pe*(Me+1),ye=_+(je+1)+pe*Me;d.push(st,St,ye),d.push(St,ae,ye),J+=6}c.addGroup(y,J,R),y+=J,_+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rn(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function rr(i){const e={};for(let t=0;t<i.length;t++){const r=Rn(i[t]);for(const n in r)e[n]=r[n]}return e}function $d(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Qd={clone:Rn,merge:rr};var ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ep,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rn(e.uniforms),this.uniformsGroups=$d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class bc extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new V,wc=new _t,Ac=new _t;class xr extends bc{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,wc,Ac),t.subVectors(Ac,wc)}setViewOffset(e,t,r,n,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,o=-.5*n;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,p=l.fullHeight;o+=l.offsetX*n/d,t-=l.offsetY*r/p,n*=l.width/d,r*=l.height/p}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cn=-90,Ln=1;class rp extends zt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new xr(Cn,Ln,e,t);n.layers=this.layers,this.add(n);const o=new xr(Cn,Ln,e,t);o.layers=this.layers,this.add(o);const l=new xr(Cn,Ln,e,t);l.layers=this.layers,this.add(l);const c=new xr(Cn,Ln,e,t);c.layers=this.layers,this.add(c);const d=new xr(Cn,Ln,e,t);d.layers=this.layers,this.add(d);const p=new xr(Cn,Ln,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,o,l,c,d]=t;for(const p of t)this.remove(p);if(e===ei)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Aa)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,c,d,p,f]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,o),e.setRenderTarget(r,1,n),e.render(t,l),e.setRenderTarget(r,2,n),e.render(t,c),e.setRenderTarget(r,3,n),e.render(t,d),e.setRenderTarget(r,4,n),e.render(t,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,n),e.render(t,f),e.setRenderTarget(g,_,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Rc extends er{constructor(e,t,r,n,o,l,c,d,p,f){e=e!==void 0?e:[],t=t!==void 0?t:sn,super(e,t,r,n,o,l,c,d,p,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ip extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Rc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ea(5,5,5),o=new wi({name:"CubemapFromEquirect",uniforms:Rn(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ar,blending:mi});o.uniforms.tEquirect.value=t;const l=new _r(n,o),c=t.minFilter;return t.minFilter===zi&&(t.minFilter=wr),new rp(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,r,n){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,r,n);e.setRenderTarget(o)}}const os=new V,np=new V,ap=new at;class Wi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=os.subVectors(r,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(os),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/n;return o<0||o>1?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ap.getNormalMatrix(e),n=this.coplanarPoint(os).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Zn,qa=new V;class ss{constructor(e=new Wi,t=new Wi,r=new Wi,n=new Wi,o=new Wi,l=new Wi){this.planes=[e,t,r,n,o,l]}set(e,t,r,n,o,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(n),c[4].copy(o),c[5].copy(l),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ei){const r=this.planes,n=e.elements,o=n[0],l=n[1],c=n[2],d=n[3],p=n[4],f=n[5],g=n[6],_=n[7],y=n[8],E=n[9],b=n[10],x=n[11],v=n[12],O=n[13],L=n[14],B=n[15];if(r[0].setComponents(d-o,_-p,x-y,B-v).normalize(),r[1].setComponents(d+o,_+p,x+y,B+v).normalize(),r[2].setComponents(d+l,_+f,x+E,B+O).normalize(),r[3].setComponents(d-l,_-f,x-E,B-O).normalize(),r[4].setComponents(d-c,_-g,x-b,B-L).normalize(),t===ei)r[5].setComponents(d+c,_+g,x+b,B+L).normalize();else if(t===Aa)r[5].setComponents(c,g,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(qa.x=n.normal.x>0?e.max.x:e.min.x,qa.y=n.normal.y>0?e.max.y:e.min.y,qa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cc(){let i=null,e=!1,t=null,r=null;function n(o,l){t(o,l),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function op(i){const e=new WeakMap;function t(c,d){const p=c.array,f=c.usage,g=p.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,p,f),c.onUploadCallback();let y;if(p instanceof Float32Array)y=i.FLOAT;else if(p instanceof Uint16Array)c.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=i.SHORT;else if(p instanceof Uint32Array)y=i.UNSIGNED_INT;else if(p instanceof Int32Array)y=i.INT;else if(p instanceof Int8Array)y=i.BYTE;else if(p instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,d,p){const f=d.array,g=d._updateRange,_=d.updateRanges;if(i.bindBuffer(p,c),g.count===-1&&_.length===0&&i.bufferSubData(p,0,f),_.length!==0){for(let y=0,E=_.length;y<E;y++){const b=_[y];i.bufferSubData(p,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}d.clearUpdateRanges()}g.count!==-1&&(i.bufferSubData(p,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count),g.count=-1),d.onUploadCallback()}function n(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(i.deleteBuffer(d.buffer),e.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=e.get(c);if(p===void 0)e.set(c,t(c,d));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,c,d),p.version=c.version}}return{get:n,remove:o,update:l}}class Xa extends Lr{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const o=e/2,l=t/2,c=Math.floor(r),d=Math.floor(n),p=c+1,f=d+1,g=e/c,_=t/d,y=[],E=[],b=[],x=[];for(let v=0;v<f;v++){const O=v*_-l;for(let L=0;L<p;L++){const B=L*g-o;E.push(B,-O,0),b.push(0,0,1),x.push(L/c),x.push(1-v/d)}}for(let v=0;v<d;v++)for(let O=0;O<c;O++){const L=O+p*v,B=O+p*(v+1),j=O+1+p*(v+1),k=O+1+p*v;y.push(L,B,k),y.push(B,j,k)}this.setIndex(y),this.setAttribute("position",new tr(E,3)),this.setAttribute("normal",new tr(b,3)),this.setAttribute("uv",new tr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Up=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ef=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,df=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_f=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Af=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,If=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,im=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:sp,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:up,alphatest_fragment:hp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:fp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:vp,beginnormal_vertex:_p,bsdfs:xp,iridescence_fragment:yp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:bp,color_fragment:wp,color_pars_fragment:Ap,color_pars_vertex:Rp,color_vertex:Cp,common:Lp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Up,displacementmap_pars_vertex:Np,displacementmap_vertex:Ip,emissivemap_fragment:Dp,emissivemap_pars_fragment:Op,colorspace_fragment:Fp,colorspace_pars_fragment:Bp,envmap_fragment:zp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Hp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:ef,envmap_vertex:Vp,fog_vertex:Wp,fog_pars_vertex:jp,fog_fragment:qp,fog_pars_fragment:Xp,gradientmap_pars_fragment:Yp,lightmap_fragment:Kp,lightmap_pars_fragment:Jp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:$p,lights_pars_begin:Qp,lights_toon_fragment:tf,lights_toon_pars_fragment:rf,lights_phong_fragment:nf,lights_phong_pars_fragment:af,lights_physical_fragment:of,lights_physical_pars_fragment:sf,lights_fragment_begin:lf,lights_fragment_maps:cf,lights_fragment_end:uf,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:df,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:ff,map_fragment:mf,map_pars_fragment:gf,map_particle_fragment:vf,map_particle_pars_fragment:_f,metalnessmap_fragment:xf,metalnessmap_pars_fragment:yf,morphinstance_vertex:Mf,morphcolor_vertex:Sf,morphnormal_vertex:Ef,morphtarget_pars_vertex:Tf,morphtarget_vertex:bf,normal_fragment_begin:wf,normal_fragment_maps:Af,normal_pars_fragment:Rf,normal_pars_vertex:Cf,normal_vertex:Lf,normalmap_pars_fragment:Pf,clearcoat_normal_fragment_begin:Uf,clearcoat_normal_fragment_maps:Nf,clearcoat_pars_fragment:If,iridescence_pars_fragment:Df,opaque_fragment:Of,packing:Ff,premultiplied_alpha_fragment:Bf,project_vertex:zf,dithering_fragment:kf,dithering_pars_fragment:Hf,roughnessmap_fragment:Gf,roughnessmap_pars_fragment:Vf,shadowmap_pars_fragment:Wf,shadowmap_pars_vertex:jf,shadowmap_vertex:qf,shadowmask_pars_fragment:Xf,skinbase_vertex:Yf,skinning_pars_vertex:Kf,skinning_vertex:Jf,skinnormal_vertex:Zf,specularmap_fragment:$f,specularmap_pars_fragment:Qf,tonemapping_fragment:em,tonemapping_pars_fragment:tm,transmission_fragment:rm,transmission_pars_fragment:im,uv_pars_fragment:nm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:sm,background_vert:lm,background_frag:cm,backgroundCube_vert:um,backgroundCube_frag:hm,cube_vert:dm,cube_frag:pm,depth_vert:fm,depth_frag:mm,distanceRGBA_vert:gm,distanceRGBA_frag:vm,equirect_vert:_m,equirect_frag:xm,linedashed_vert:ym,linedashed_frag:Mm,meshbasic_vert:Sm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:bm,meshmatcap_vert:wm,meshmatcap_frag:Am,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Lm,meshphong_frag:Pm,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Im,meshtoon_frag:Dm,points_vert:Om,points_frag:Fm,shadow_vert:Bm,shadow_frag:zm,sprite_vert:km,sprite_frag:Hm},we={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},kr={basic:{uniforms:rr([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:rr([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new vt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:rr([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:rr([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:rr([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new vt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:rr([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:rr([we.points,we.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:rr([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:rr([we.common,we.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:rr([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:rr([we.sprite,we.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:rr([we.common,we.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:rr([we.lights,we.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};kr.physical={uniforms:rr([kr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Ya={r:0,b:0,g:0},qi=new Fr,Gm=new It;function Vm(i,e,t,r,n,o,l){const c=new vt(0);let d=o===!0?0:1,p,f,g=null,_=0,y=null;function E(x,v){let O=!1,L=v.isScene===!0?v.background:null;L&&L.isTexture&&(L=(v.backgroundBlurriness>0?t:e).get(L)),L===null?b(c,d):L&&L.isColor&&(b(L,1),O=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,l),(i.autoClear||O)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),L&&(L.isCubeTexture||L.mapping===ya)?(f===void 0&&(f=new _r(new ea(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Rn(kr.backgroundCube.uniforms),vertexShader:kr.backgroundCube.vertexShader,fragmentShader:kr.backgroundCube.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(j,k,u){this.matrixWorld.copyPosition(u.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),qi.copy(v.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),f.material.uniforms.envMap.value=L,f.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(qi)),f.material.toneMapped=Rt.getTransfer(L.colorSpace)!==Ut,(g!==L||_!==L.version||y!==i.toneMapping)&&(f.material.needsUpdate=!0,g=L,_=L.version,y=i.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new _r(new Xa(2,2),new wi({name:"BackgroundMaterial",uniforms:Rn(kr.background.uniforms),vertexShader:kr.background.vertexShader,fragmentShader:kr.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(L.colorSpace)!==Ut,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||_!==L.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,g=L,_=L.version,y=i.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function b(x,v){x.getRGB(Ya,Tc(i)),r.buffers.color.setClear(Ya.r,Ya.g,Ya.b,v,l)}return{getClearColor:function(){return c},setClearColor:function(x,v=1){c.set(x),d=v,b(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,b(c,d)},render:E}}function Wm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},n=_(null);let o=n,l=!1;function c(T,W,ie,F,ne){let pe=!1;const ge=g(F,ie,W);o!==ge&&(o=ge,p(o.object)),pe=y(T,F,ie,ne),pe&&E(T,F,ie,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(pe||l)&&(l=!1,B(T,W,ie,F),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function d(){return i.createVertexArray()}function p(T){return i.bindVertexArray(T)}function f(T){return i.deleteVertexArray(T)}function g(T,W,ie){const F=ie.wireframe===!0;let ne=r[T.id];ne===void 0&&(ne={},r[T.id]=ne);let pe=ne[W.id];pe===void 0&&(pe={},ne[W.id]=pe);let ge=pe[F];return ge===void 0&&(ge=_(d()),pe[F]=ge),ge}function _(T){const W=[],ie=[],F=[];for(let ne=0;ne<t;ne++)W[ne]=0,ie[ne]=0,F[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ie,attributeDivisors:F,object:T,attributes:{},index:null}}function y(T,W,ie,F){const ne=o.attributes,pe=W.attributes;let ge=0;const _e=ie.getAttributes();for(const J in _e)if(_e[J].location>=0){const he=ne[J];let Me=pe[J];if(Me===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor)),he===void 0||he.attribute!==Me||Me&&he.data!==Me.data)return!0;ge++}return o.attributesNum!==ge||o.index!==F}function E(T,W,ie,F){const ne={},pe=W.attributes;let ge=0;const _e=ie.getAttributes();for(const J in _e)if(_e[J].location>=0){let he=pe[J];he===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(he=T.instanceColor));const Me={};Me.attribute=he,he&&he.data&&(Me.data=he.data),ne[J]=Me,ge++}o.attributes=ne,o.attributesNum=ge,o.index=F}function b(){const T=o.newAttributes;for(let W=0,ie=T.length;W<ie;W++)T[W]=0}function x(T){v(T,0)}function v(T,W){const ie=o.newAttributes,F=o.enabledAttributes,ne=o.attributeDivisors;ie[T]=1,F[T]===0&&(i.enableVertexAttribArray(T),F[T]=1),ne[T]!==W&&(i.vertexAttribDivisor(T,W),ne[T]=W)}function O(){const T=o.newAttributes,W=o.enabledAttributes;for(let ie=0,F=W.length;ie<F;ie++)W[ie]!==T[ie]&&(i.disableVertexAttribArray(ie),W[ie]=0)}function L(T,W,ie,F,ne,pe,ge){ge===!0?i.vertexAttribIPointer(T,W,ie,ne,pe):i.vertexAttribPointer(T,W,ie,F,ne,pe)}function B(T,W,ie,F){b();const ne=F.attributes,pe=ie.getAttributes(),ge=W.defaultAttributeValues;for(const _e in pe){const J=pe[_e];if(J.location>=0){let he=ne[_e];if(he===void 0&&(_e==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),_e==="instanceColor"&&T.instanceColor&&(he=T.instanceColor)),he!==void 0){const Me=he.normalized,je=he.itemSize,st=e.get(he);if(st===void 0)continue;const St=st.buffer,ae=st.type,ye=st.bytesPerElement,Le=ae===i.INT||ae===i.UNSIGNED_INT||he.gpuType===gl;if(he.isInterleavedBufferAttribute){const Ae=he.data,$e=Ae.stride,et=he.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ye=0;Ye<J.locationSize;Ye++)v(J.location+Ye,Ae.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ye=0;Ye<J.locationSize;Ye++)x(J.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Ye=0;Ye<J.locationSize;Ye++)L(J.location+Ye,je/J.locationSize,ae,Me,$e*ye,(et+je/J.locationSize*Ye)*ye,Le)}else{if(he.isInstancedBufferAttribute){for(let Ae=0;Ae<J.locationSize;Ae++)v(J.location+Ae,he.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ae=0;Ae<J.locationSize;Ae++)x(J.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Ae=0;Ae<J.locationSize;Ae++)L(J.location+Ae,je/J.locationSize,ae,Me,je*ye,je/J.locationSize*Ae*ye,Le)}}else if(ge!==void 0){const Me=ge[_e];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(J.location,Me);break;case 3:i.vertexAttrib3fv(J.location,Me);break;case 4:i.vertexAttrib4fv(J.location,Me);break;default:i.vertexAttrib1fv(J.location,Me)}}}}O()}function j(){re();for(const T in r){const W=r[T];for(const ie in W){const F=W[ie];for(const ne in F)f(F[ne].object),delete F[ne];delete W[ie]}delete r[T]}}function k(T){if(r[T.id]===void 0)return;const W=r[T.id];for(const ie in W){const F=W[ie];for(const ne in F)f(F[ne].object),delete F[ne];delete W[ie]}delete r[T.id]}function u(T){for(const W in r){const ie=r[W];if(ie[T.id]===void 0)continue;const F=ie[T.id];for(const ne in F)f(F[ne].object),delete F[ne];delete ie[T.id]}}function re(){R(),l=!0,o!==n&&(o=n,p(o.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:c,reset:re,resetDefaultState:R,dispose:j,releaseStatesOfGeometry:k,releaseStatesOfProgram:u,initAttributes:b,enableAttribute:x,disableUnusedAttributes:O}}function jm(i,e,t){let r;function n(d){r=d}function o(d,p){i.drawArrays(r,d,p),t.update(p,r,1)}function l(d,p,f){f!==0&&(i.drawArraysInstanced(r,d,p,f),t.update(p,r,f))}function c(d,p,f){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<f;_++)this.render(d[_],p[_]);else{g.multiDrawArraysWEBGL(r,d,0,p,0,f);let _=0;for(let y=0;y<f;y++)_+=p[y];t.update(_,r,1)}}this.setMode=n,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function qm(i,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:v,maxSamples:O}}function Xm(i){const e=this;let t=null,r=0,n=!1,o=!1;const l=new Wi,c=new at,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||r!==0||n;return n=_,r=g.length,y},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){t=f(g,_,0)},this.setState=function(g,_,y){const E=g.clippingPlanes,b=g.clipIntersection,x=g.clipShadows,v=i.get(g);if(!n||E===null||E.length===0||o&&!x)o?f(null):p();else{const O=o?0:r,L=O*4;let B=v.clippingState||null;d.value=B,B=f(E,_,L,y);for(let j=0;j!==L;++j)B[j]=t[j];v.clippingState=B,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function f(g,_,y,E){const b=g!==null?g.length:0;let x=null;if(b!==0){if(x=d.value,E!==!0||x===null){const v=y+b*4,O=_.matrixWorldInverse;c.getNormalMatrix(O),(x===null||x.length<v)&&(x=new Float32Array(v));for(let L=0,B=y;L!==b;++L,B+=4)l.copy(g[L]).applyMatrix4(O,c),l.normal.toArray(x,B),x[B+3]=l.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function Ym(i){let e=new WeakMap;function t(l,c){return c===Ro?l.mapping=sn:c===Co&&(l.mapping=ln),l}function r(l){if(l&&l.isTexture){const c=l.mapping;if(c===Ro||c===Co)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const p=new ip(d.height);return p.fromEquirectangularTexture(i,l),e.set(l,p),l.addEventListener("dispose",n),t(p.texture,l.mapping)}else return null}}return l}function n(l){const c=l.target;c.removeEventListener("dispose",n);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}class Lc extends bc{constructor(e=-1,t=1,r=1,n=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let o=r-e,l=r+e,c=n+t,d=n-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,l=o+p*this.view.width,c-=f*this.view.offsetY,d=c-f*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pn=4,Pc=[.125,.215,.35,.446,.526,.582],Xi=20,ls=new Lc,Uc=new vt;let cs=null,us=0,hs=0,ds=!1;const Yi=(1+Math.sqrt(5))/2,Un=1/Yi,Nc=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Yi,Un),new V(0,Yi,-Un),new V(Un,0,Yi),new V(-Un,0,Yi),new V(Yi,Un,0),new V(-Yi,Un,0)];class Ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){cs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),ds=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,n,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cs,us,hs),this._renderer.xr.enabled=ds,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sn||e.mapping===ln?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),ds=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wr,minFilter:wr,generateMipmaps:!1,type:Sa,format:Ir,colorSpace:yi,depthBuffer:!1},n=Dc(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(e,t,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Km(o)),this._blurMaterial=Jm(o,e,t)}return n}_compileMaterial(e){const t=new _r(this._lodPlanes[0],e);this._renderer.compile(t,ls)}_sceneToCubeUV(e,t,r,n){const o=new xr(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(Uc),d.toneMapping=gi,d.autoClear=!1;const g=new gc({name:"PMREM.Background",side:ar,depthWrite:!1,depthTest:!1}),_=new _r(new ea,g);let y=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,y=!0):(g.color.copy(Uc),y=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(o.up.set(0,l[b],0),o.lookAt(c[b],0,0)):x===1?(o.up.set(0,0,l[b]),o.lookAt(0,c[b],0)):(o.up.set(0,l[b],0),o.lookAt(0,0,c[b]));const v=this._cubeSize;Ka(n,x*v,b>2?v:0,v,v),d.setRenderTarget(n),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=E}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===sn||e.mapping===ln;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const o=n?this._cubemapMaterial:this._equirectMaterial,l=new _r(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const d=this._cubeSize;Ka(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(l,ls)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const o=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),l=Nc[(n-1)%Nc.length];this._blur(e,n-1,n,o,l)}t.autoClear=r}_blur(e,t,r,n,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,r,n,"latitudinal",o),this._halfBlur(l,e,r,r,n,"longitudinal",o)}_halfBlur(e,t,r,n,o,l,c){const d=this._renderer,p=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,g=new _r(this._lodPlanes[n],p),_=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Xi-1),b=o/E,x=isFinite(o)?1+Math.floor(f*b):Xi;x>Xi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Xi}`);const v=[];let O=0;for(let u=0;u<Xi;++u){const re=u/b,R=Math.exp(-re*re/2);v.push(R),u===0?O+=R:u<x&&(O+=2*R)}for(let u=0;u<v.length;u++)v[u]=v[u]/O;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-r;const B=this._sizeLods[n],j=3*B*(n>L-Pn?n-L+Pn:0),k=4*(this._cubeSize-B);Ka(t,j,k,3*B,2*B),d.setRenderTarget(t),d.render(g,ls)}}function Km(i){const e=[],t=[],r=[];let n=i;const o=i-Pn+1+Pc.length;for(let l=0;l<o;l++){const c=Math.pow(2,n);t.push(c);let d=1/c;l>i-Pn?d=Pc[l-i+Pn-1]:l===0&&(d=0),r.push(d);const p=1/(c-2),f=-p,g=1+p,_=[f,f,g,f,g,g,f,f,g,g,f,g],y=6,E=6,b=3,x=2,v=1,O=new Float32Array(b*E*y),L=new Float32Array(x*E*y),B=new Float32Array(v*E*y);for(let k=0;k<y;k++){const u=k%3*2/3-1,re=k>2?0:-1,R=[u,re,0,u+2/3,re,0,u+2/3,re+1,0,u,re,0,u+2/3,re+1,0,u,re+1,0];O.set(R,b*E*k),L.set(_,x*E*k);const T=[k,k,k,k,k,k];B.set(T,v*E*k)}const j=new Lr;j.setAttribute("position",new zr(O,b)),j.setAttribute("uv",new zr(L,x)),j.setAttribute("faceIndex",new zr(B,v)),e.push(j),n>Pn&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Dc(i,e,t){const r=new ki(i,e,t);return r.texture.mapping=ya,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ka(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function Jm(i,e,t){const r=new Float32Array(Xi),n=new V(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Oc(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Fc(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ps(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zm(i){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,p=d===Ro||d===Co,f=d===sn||d===ln;if(p||f){let g=e.get(c);const _=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new Ic(i)),g=p?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const y=c.image;return p&&y&&y.height>0||f&&y&&n(y)?(t===null&&(t=new Ic(i)),g=p?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",o),g.texture):null}}}return c}function n(c){let d=0;const p=6;for(let f=0;f<p;f++)c[f]!==void 0&&d++;return d===p}function o(c){const d=c.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:l}}function $m(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Qm(i,e,t,r){const n={},o=new WeakMap;function l(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const b=_.morphAttributes[E];for(let x=0,v=b.length;x<v;x++)e.remove(b[x])}_.removeEventListener("dispose",l),delete n[_.id];const y=o.get(_);y&&(e.remove(y),o.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return n[_.id]===!0||(_.addEventListener("dispose",l),n[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const E in _)e.update(_[E],i.ARRAY_BUFFER);const y=g.morphAttributes;for(const E in y){const b=y[E];for(let x=0,v=b.length;x<v;x++)e.update(b[x],i.ARRAY_BUFFER)}}function p(g){const _=[],y=g.index,E=g.attributes.position;let b=0;if(y!==null){const O=y.array;b=y.version;for(let L=0,B=O.length;L<B;L+=3){const j=O[L+0],k=O[L+1],u=O[L+2];_.push(j,k,k,u,u,j)}}else if(E!==void 0){const O=E.array;b=E.version;for(let L=0,B=O.length/3-1;L<B;L+=3){const j=L+0,k=L+1,u=L+2;_.push(j,k,k,u,u,j)}}else return;const x=new(Ql(_)?_c:vc)(_,1);x.version=b;const v=o.get(g);v&&e.remove(v),o.set(g,x)}function f(g){const _=o.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&p(g)}else p(g);return o.get(g)}return{get:c,update:d,getWireframeAttribute:f}}function eg(i,e,t){let r;function n(g){r=g}let o,l;function c(g){o=g.type,l=g.bytesPerElement}function d(g,_){i.drawElements(r,_,o,g*l),t.update(_,r,1)}function p(g,_,y){y!==0&&(i.drawElementsInstanced(r,_,o,g*l,y),t.update(_,r,y))}function f(g,_,y){if(y===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<y;b++)this.render(g[b]/l,_[b]);else{E.multiDrawElementsWEBGL(r,_,0,o,g,0,y);let b=0;for(let x=0;x<y;x++)b+=_[x];t.update(b,r,1)}}this.setMode=n,this.setIndex=c,this.render=d,this.renderInstances=p,this.renderMultiDraw=f}function tg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(o/3);break;case i.LINES:t.lines+=c*(o/2);break;case i.LINE_STRIP:t.lines+=c*(o-1);break;case i.LINE_LOOP:t.lines+=c*o;break;case i.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function rg(i,e,t){const r=new WeakMap,n=new jt;function o(l,c,d){const p=l.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=f!==void 0?f.length:0;let _=r.get(c);if(_===void 0||_.count!==g){let y=function(){re.dispose(),r.delete(c),c.removeEventListener("dispose",y)};_!==void 0&&_.texture.dispose();const E=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],O=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let B=0;E===!0&&(B=1),b===!0&&(B=2),x===!0&&(B=3);let j=c.attributes.position.count*B,k=1;j>e.maxTextureSize&&(k=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const u=new Float32Array(j*k*4*g),re=new nc(u,j,k,g);re.type=_i,re.needsUpdate=!0;const R=B*4;for(let T=0;T<g;T++){const W=v[T],ie=O[T],F=L[T],ne=j*k*4*T;for(let pe=0;pe<W.count;pe++){const ge=pe*R;E===!0&&(n.fromBufferAttribute(W,pe),u[ne+ge+0]=n.x,u[ne+ge+1]=n.y,u[ne+ge+2]=n.z,u[ne+ge+3]=0),b===!0&&(n.fromBufferAttribute(ie,pe),u[ne+ge+4]=n.x,u[ne+ge+5]=n.y,u[ne+ge+6]=n.z,u[ne+ge+7]=0),x===!0&&(n.fromBufferAttribute(F,pe),u[ne+ge+8]=n.x,u[ne+ge+9]=n.y,u[ne+ge+10]=n.z,u[ne+ge+11]=F.itemSize===4?n.w:1)}}_={count:g,texture:re,size:new _t(j,k)},r.set(c,_),c.addEventListener("dispose",y)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let y=0;for(let b=0;b<p.length;b++)y+=p[b];const E=c.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:o}}function ig(i,e,t,r){let n=new WeakMap;function o(d){const p=r.render.frame,f=d.geometry,g=e.get(d,f);if(n.get(g)!==p&&(e.update(g),n.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),n.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),n.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;n.get(_)!==p&&(_.update(),n.set(_,p))}return g}function l(){n=new WeakMap}function c(d){const p=d.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:l}}class Bc extends er{constructor(e,t,r,n,o,l,c,d,p,f){if(f=f!==void 0?f:un,f!==un&&f!==jn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&f===un&&(r=cn),r===void 0&&f===jn&&(r=Wn),super(null,n,o,l,c,d,f,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:gr,this.minFilter=d!==void 0?d:gr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zc=new er,kc=new Bc(1,1);kc.compareFunction=Jl;const Hc=new nc,Gc=new Hd,Vc=new Rc,Wc=[],jc=[],qc=new Float32Array(16),Xc=new Float32Array(9),Yc=new Float32Array(4);function Nn(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let o=Wc[n];if(o===void 0&&(o=new Float32Array(n),Wc[n]=o),e!==0){r.toArray(o,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(o,c)}return o}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Ja(i,e){let t=jc[e];t===void 0&&(t=new Int32Array(e),jc[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function ng(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function lg(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,r))return;Yc.set(r),i.uniformMatrix2fv(this.addr,!1,Yc),Gt(t,r)}}function cg(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,r))return;Xc.set(r),i.uniformMatrix3fv(this.addr,!1,Xc),Gt(t,r)}}function ug(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,r))return;qc.set(r),i.uniformMatrix4fv(this.addr,!1,qc),Gt(t,r)}}function hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function mg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function xg(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);const o=this.type===i.SAMPLER_2D_SHADOW?kc:zc;t.setTexture2D(e||o,n)}function yg(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Gc,n)}function Mg(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Vc,n)}function Sg(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Hc,n)}function Eg(i){switch(i){case 5126:return ng;case 35664:return ag;case 35665:return og;case 35666:return sg;case 35674:return lg;case 35675:return cg;case 35676:return ug;case 5124:case 35670:return hg;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return fg;case 5125:return mg;case 36294:return gg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}function Tg(i,e){i.uniform1fv(this.addr,e)}function bg(i,e){const t=Nn(e,this.size,2);i.uniform2fv(this.addr,t)}function wg(i,e){const t=Nn(e,this.size,3);i.uniform3fv(this.addr,t)}function Ag(i,e){const t=Nn(e,this.size,4);i.uniform4fv(this.addr,t)}function Rg(i,e){const t=Nn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cg(i,e){const t=Nn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lg(i,e){const t=Nn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pg(i,e){i.uniform1iv(this.addr,e)}function Ug(i,e){i.uniform2iv(this.addr,e)}function Ng(i,e){i.uniform3iv(this.addr,e)}function Ig(i,e){i.uniform4iv(this.addr,e)}function Dg(i,e){i.uniform1uiv(this.addr,e)}function Og(i,e){i.uniform2uiv(this.addr,e)}function Fg(i,e){i.uniform3uiv(this.addr,e)}function Bg(i,e){i.uniform4uiv(this.addr,e)}function zg(i,e,t){const r=this.cache,n=e.length,o=Ja(t,n);Ht(r,o)||(i.uniform1iv(this.addr,o),Gt(r,o));for(let l=0;l!==n;++l)t.setTexture2D(e[l]||zc,o[l])}function kg(i,e,t){const r=this.cache,n=e.length,o=Ja(t,n);Ht(r,o)||(i.uniform1iv(this.addr,o),Gt(r,o));for(let l=0;l!==n;++l)t.setTexture3D(e[l]||Gc,o[l])}function Hg(i,e,t){const r=this.cache,n=e.length,o=Ja(t,n);Ht(r,o)||(i.uniform1iv(this.addr,o),Gt(r,o));for(let l=0;l!==n;++l)t.setTextureCube(e[l]||Vc,o[l])}function Gg(i,e,t){const r=this.cache,n=e.length,o=Ja(t,n);Ht(r,o)||(i.uniform1iv(this.addr,o),Gt(r,o));for(let l=0;l!==n;++l)t.setTexture2DArray(e[l]||Hc,o[l])}function Vg(i){switch(i){case 5126:return Tg;case 35664:return bg;case 35665:return wg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Lg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ug;case 35668:case 35672:return Ng;case 35669:case 35673:return Ig;case 5125:return Dg;case 36294:return Og;case 36295:return Fg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Wg{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Eg(t.type)}}class jg{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vg(t.type)}}class qg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let o=0,l=n.length;o!==l;++o){const c=n[o];c.setValue(e,t[c.id],r)}}}const fs=/(\w+)(\])?(\[|\.)?/g;function Kc(i,e){i.seq.push(e),i.map[e.id]=e}function Xg(i,e,t){const r=i.name,n=r.length;for(fs.lastIndex=0;;){const o=fs.exec(r),l=fs.lastIndex;let c=o[1];const d=o[2]==="]",p=o[3];if(d&&(c=c|0),p===void 0||p==="["&&l+2===n){Kc(t,p===void 0?new Wg(c,i,e):new jg(c,i,e));break}else{let f=t.map[c];f===void 0&&(f=new qg(c),Kc(t,f)),t=f}}}class Za{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const o=e.getActiveUniform(t,n),l=e.getUniformLocation(t,o.name);Xg(o,l,this)}}setValue(e,t,r,n){const o=this.map[t];o!==void 0&&o.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let o=0,l=t.length;o!==l;++o){const c=t[o],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,o=e.length;n!==o;++n){const l=e[n];l.id in t&&r.push(l)}return r}}function Jc(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const Yg=37297;let Kg=0;function Jg(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=n;l<o;l++){const c=l+1;r.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return r.join(`
`)}function Zg(i){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(i);let r;switch(e===t?r="":e===wa&&t===ba?r="LinearDisplayP3ToLinearSRGB":e===ba&&t===wa&&(r="LinearSRGBToLinearDisplayP3"),i){case yi:case Ea:return[r,"LinearTransferOETF"];case Dr:case Bo:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[r,"LinearTransferOETF"]}}function Zc(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const o=/ERROR: 0:(\d+)/.exec(n);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+n+`

`+Jg(i.getShaderSource(e),l)}else return n}function $g(i,e){const t=Zg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qg(i,e){let t;switch(e){case ad:t="Linear";break;case od:t="Reinhard";break;case sd:t="OptimizedCineon";break;case ld:t="ACESFilmic";break;case ud:t="AgX";break;case hd:t="Neutral";break;case cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function tv(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function rv(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const o=i.getActiveAttrib(e,n),l=o.name;let c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),t[l]={type:o.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function ta(i){return i!==""}function $c(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ms(i){return i.replace(iv,av)}const nv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function av(i,e){let t=ot[e];if(t===void 0){const r=nv.get(e);if(r!==void 0)t=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ms(t)}const ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(i){return i.replace(ov,sv)}function sv(i,e,t,r){let n="";for(let o=parseInt(e);o<parseInt(t);o++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return n}function tu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$r&&(e="SHADOWMAP_TYPE_VSM"),e}function cv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sn:case ln:e="ENVMAP_TYPE_CUBE";break;case ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ln:e="ENVMAP_MODE_REFRACTION";break}return e}function hv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ao:e="ENVMAP_BLENDING_MULTIPLY";break;case id:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function dv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function pv(i,e,t,r){const n=i.getContext(),o=t.defines;let l=t.vertexShader,c=t.fragmentShader;const d=lv(t),p=cv(t),f=uv(t),g=hv(t),_=dv(t),y=ev(t),E=tv(o),b=n.createProgram();let x,v,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ta).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ta).join(`
`),v.length>0&&(v+=`
`)):(x=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),v=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?ot.tonemapping_pars_fragment:"",t.toneMapping!==gi?Qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,$g("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),l=ms(l),l=$c(l,t),l=Qc(l,t),c=ms(c),c=$c(c,t),c=Qc(c,t),l=eu(l),c=eu(c),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=O+x+l,B=O+v+c,j=Jc(n,n.VERTEX_SHADER,L),k=Jc(n,n.FRAGMENT_SHADER,B);n.attachShader(b,j),n.attachShader(b,k),t.index0AttributeName!==void 0?n.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(b,0,"position"),n.linkProgram(b);function u(W){if(i.debug.checkShaderErrors){const ie=n.getProgramInfoLog(b).trim(),F=n.getShaderInfoLog(j).trim(),ne=n.getShaderInfoLog(k).trim();let pe=!0,ge=!0;if(n.getProgramParameter(b,n.LINK_STATUS)===!1)if(pe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,b,j,k);else{const _e=Zc(n,j,"vertex"),J=Zc(n,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(b,n.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+ie+`
`+_e+`
`+J)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(F===""||ne==="")&&(ge=!1);ge&&(W.diagnostics={runnable:pe,programLog:ie,vertexShader:{log:F,prefix:x},fragmentShader:{log:ne,prefix:v}})}n.deleteShader(j),n.deleteShader(k),re=new Za(n,b),R=rv(n,b)}let re;this.getUniforms=function(){return re===void 0&&u(this),re};let R;this.getAttributes=function(){return R===void 0&&u(this),R};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=n.getProgramParameter(b,Yg)),T},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kg++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=j,this.fragmentShader=k,this}let fv=0;class mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),o=this._getShaderStage(r),l=this._getShaderCacheForMaterial(e);return l.has(n)===!1&&(l.add(n),n.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new gv(e),t.set(e,r)),r}}class gv{constructor(e){this.id=fv++,this.code=e,this.usedTimes=0}}function vv(i,e,t,r,n,o,l){const c=new lc,d=new mv,p=new Set,f=[],g=n.logarithmicDepthBuffer,_=n.vertexTextures;let y=n.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return p.add(R),R===0?"uv":`uv${R}`}function x(R,T,W,ie,F){const ne=ie.fog,pe=F.geometry,ge=R.isMeshStandardMaterial?ie.environment:null,_e=(R.isMeshStandardMaterial?t:e).get(R.envMap||ge),J=_e&&_e.mapping===ya?_e.image.height:null,he=E[R.type];R.precision!==null&&(y=n.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const Me=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,je=Me!==void 0?Me.length:0;let st=0;pe.morphAttributes.position!==void 0&&(st=1),pe.morphAttributes.normal!==void 0&&(st=2),pe.morphAttributes.color!==void 0&&(st=3);let St,ae,ye,Le;if(he){const Tt=kr[he];St=Tt.vertexShader,ae=Tt.fragmentShader}else St=R.vertexShader,ae=R.fragmentShader,d.update(R),ye=d.getVertexShaderID(R),Le=d.getFragmentShaderID(R);const Ae=i.getRenderTarget(),$e=F.isInstancedMesh===!0,et=F.isBatchedMesh===!0,Ye=!!R.map,K=!!R.matcap,Je=!!_e,Fe=!!R.aoMap,Nt=!!R.lightMap,Xe=!!R.bumpMap,Mt=!!R.normalMap,U=!!R.displacementMap,A=!!R.emissiveMap,ee=!!R.metalnessMap,ue=!!R.roughnessMap,me=R.anisotropy>0,de=R.clearcoat>0,ke=R.iridescence>0,ve=R.sheen>0,ce=R.transmission>0,Pe=me&&!!R.anisotropyMap,be=de&&!!R.clearcoatMap,Ue=de&&!!R.clearcoatNormalMap,Qe=de&&!!R.clearcoatRoughnessMap,Ne=ke&&!!R.iridescenceMap,De=ke&&!!R.iridescenceThicknessMap,lt=ve&&!!R.sheenColorMap,tt=ve&&!!R.sheenRoughnessMap,ht=!!R.specularMap,dt=!!R.specularColorMap,Lt=!!R.specularIntensityMap,Oe=ce&&!!R.transmissionMap,I=ce&&!!R.thicknessMap,Te=!!R.gradientMap,xe=!!R.alphaMap,We=R.alphaTest>0,Be=!!R.alphaHash,bt=!!R.extensions;let Ct=gi;R.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const mt={shaderID:he,shaderType:R.type,shaderName:R.name,vertexShader:St,fragmentShader:ae,defines:R.defines,customVertexShaderID:ye,customFragmentShaderID:Le,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:et,instancing:$e,instancingColor:$e&&F.instanceColor!==null,instancingMorph:$e&&F.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:yi,alphaToCoverage:!!R.alphaToCoverage,map:Ye,matcap:K,envMap:Je,envMapMode:Je&&_e.mapping,envMapCubeUVHeight:J,aoMap:Fe,lightMap:Nt,bumpMap:Xe,normalMap:Mt,displacementMap:_&&U,emissiveMap:A,normalMapObjectSpace:Mt&&R.normalMapType===bd,normalMapTangentSpace:Mt&&R.normalMapType===Yl,metalnessMap:ee,roughnessMap:ue,anisotropy:me,anisotropyMap:Pe,clearcoat:de,clearcoatMap:be,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Qe,iridescence:ke,iridescenceMap:Ne,iridescenceThicknessMap:De,sheen:ve,sheenColorMap:lt,sheenRoughnessMap:tt,specularMap:ht,specularColorMap:dt,specularIntensityMap:Lt,transmission:ce,transmissionMap:Oe,thicknessMap:I,gradientMap:Te,opaque:R.transparent===!1&&R.blending===on&&R.alphaToCoverage===!1,alphaMap:xe,alphaTest:We,alphaHash:Be,combine:R.combine,mapUv:Ye&&b(R.map.channel),aoMapUv:Fe&&b(R.aoMap.channel),lightMapUv:Nt&&b(R.lightMap.channel),bumpMapUv:Xe&&b(R.bumpMap.channel),normalMapUv:Mt&&b(R.normalMap.channel),displacementMapUv:U&&b(R.displacementMap.channel),emissiveMapUv:A&&b(R.emissiveMap.channel),metalnessMapUv:ee&&b(R.metalnessMap.channel),roughnessMapUv:ue&&b(R.roughnessMap.channel),anisotropyMapUv:Pe&&b(R.anisotropyMap.channel),clearcoatMapUv:be&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:De&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:tt&&b(R.sheenRoughnessMap.channel),specularMapUv:ht&&b(R.specularMap.channel),specularColorMapUv:dt&&b(R.specularColorMap.channel),specularIntensityMapUv:Lt&&b(R.specularIntensityMap.channel),transmissionMapUv:Oe&&b(R.transmissionMap.channel),thicknessMapUv:I&&b(R.thicknessMap.channel),alphaMapUv:xe&&b(R.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(Mt||me),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!pe.attributes.uv&&(Ye||xe),fog:!!ne,useFog:R.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:F.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:st,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ye&&R.map.isVideoTexture===!0&&Rt.getTransfer(R.map.colorSpace)===Ut,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Qr,flipSided:R.side===ar,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:bt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:bt&&R.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return mt.vertexUv1s=p.has(1),mt.vertexUv2s=p.has(2),mt.vertexUv3s=p.has(3),p.clear(),mt}function v(R){const T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(const W in R.defines)T.push(W),T.push(R.defines[W]);return R.isRawShaderMaterial===!1&&(O(T,R),L(T,R),T.push(i.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function O(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function L(R,T){c.disableAll(),T.supportsVertexTextures&&c.enable(0),T.instancing&&c.enable(1),T.instancingColor&&c.enable(2),T.instancingMorph&&c.enable(3),T.matcap&&c.enable(4),T.envMap&&c.enable(5),T.normalMapObjectSpace&&c.enable(6),T.normalMapTangentSpace&&c.enable(7),T.clearcoat&&c.enable(8),T.iridescence&&c.enable(9),T.alphaTest&&c.enable(10),T.vertexColors&&c.enable(11),T.vertexAlphas&&c.enable(12),T.vertexUv1s&&c.enable(13),T.vertexUv2s&&c.enable(14),T.vertexUv3s&&c.enable(15),T.vertexTangents&&c.enable(16),T.anisotropy&&c.enable(17),T.alphaHash&&c.enable(18),T.batching&&c.enable(19),R.push(c.mask),c.disableAll(),T.fog&&c.enable(0),T.useFog&&c.enable(1),T.flatShading&&c.enable(2),T.logarithmicDepthBuffer&&c.enable(3),T.skinning&&c.enable(4),T.morphTargets&&c.enable(5),T.morphNormals&&c.enable(6),T.morphColors&&c.enable(7),T.premultipliedAlpha&&c.enable(8),T.shadowMapEnabled&&c.enable(9),T.useLegacyLights&&c.enable(10),T.doubleSided&&c.enable(11),T.flipSided&&c.enable(12),T.useDepthPacking&&c.enable(13),T.dithering&&c.enable(14),T.transmission&&c.enable(15),T.sheen&&c.enable(16),T.opaque&&c.enable(17),T.pointsUvs&&c.enable(18),T.decodeVideoTexture&&c.enable(19),T.alphaToCoverage&&c.enable(20),R.push(c.mask)}function B(R){const T=E[R.type];let W;if(T){const ie=kr[T];W=Qd.clone(ie.uniforms)}else W=R.uniforms;return W}function j(R,T){let W;for(let ie=0,F=f.length;ie<F;ie++){const ne=f[ie];if(ne.cacheKey===T){W=ne,++W.usedTimes;break}}return W===void 0&&(W=new pv(i,T,R,o),f.push(W)),W}function k(R){if(--R.usedTimes===0){const T=f.indexOf(R);f[T]=f[f.length-1],f.pop(),R.destroy()}}function u(R){d.remove(R)}function re(){d.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:B,acquireProgram:j,releaseProgram:k,releaseShaderCache:u,programs:f,dispose:re}}function _v(){let i=new WeakMap;function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function t(o){i.delete(o)}function r(o,l,c){i.get(o)[l]=c}function n(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function xv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ru(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function iu(){const i=[];let e=0;const t=[],r=[],n=[];function o(){e=0,t.length=0,r.length=0,n.length=0}function l(g,_,y,E,b,x){let v=i[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:y,groupOrder:E,renderOrder:g.renderOrder,z:b,group:x},i[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=y,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=b,v.group=x),e++,v}function c(g,_,y,E,b,x){const v=l(g,_,y,E,b,x);y.transmission>0?r.push(v):y.transparent===!0?n.push(v):t.push(v)}function d(g,_,y,E,b,x){const v=l(g,_,y,E,b,x);y.transmission>0?r.unshift(v):y.transparent===!0?n.unshift(v):t.unshift(v)}function p(g,_){t.length>1&&t.sort(g||xv),r.length>1&&r.sort(_||ru),n.length>1&&n.sort(_||ru)}function f(){for(let g=e,_=i.length;g<_;g++){const y=i[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:n,init:o,push:c,unshift:d,finish:f,sort:p}}function yv(){let i=new WeakMap;function e(r,n){const o=i.get(r);let l;return o===void 0?(l=new iu,i.set(r,[l])):n>=o.length?(l=new iu,o.push(l)):l=o[n],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new vt};break;case"SpotLight":t={position:new V,direction:new V,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Sv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ev=0;function Tv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bv(i){const e=new Mv,t=Sv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new V);const n=new V,o=new It,l=new It;function c(p,f){let g=0,_=0,y=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let E=0,b=0,x=0,v=0,O=0,L=0,B=0,j=0,k=0,u=0,re=0;p.sort(Tv);const R=f===!0?Math.PI:1;for(let W=0,ie=p.length;W<ie;W++){const F=p[W],ne=F.color,pe=F.intensity,ge=F.distance,_e=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ne.r*pe*R,_+=ne.g*pe*R,y+=ne.b*pe*R;else if(F.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(F.sh.coefficients[J],pe);re++}else if(F.isDirectionalLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){const he=F.shadow,Me=t.get(F);Me.shadowBias=he.bias,Me.shadowNormalBias=he.normalBias,Me.shadowRadius=he.radius,Me.shadowMapSize=he.mapSize,r.directionalShadow[E]=Me,r.directionalShadowMap[E]=_e,r.directionalShadowMatrix[E]=F.shadow.matrix,L++}r.directional[E]=J,E++}else if(F.isSpotLight){const J=e.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(ne).multiplyScalar(pe*R),J.distance=ge,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,r.spot[x]=J;const he=F.shadow;if(F.map&&(r.spotLightMap[k]=F.map,k++,he.updateMatrices(F),F.castShadow&&u++),r.spotLightMatrix[x]=he.matrix,F.castShadow){const Me=t.get(F);Me.shadowBias=he.bias,Me.shadowNormalBias=he.normalBias,Me.shadowRadius=he.radius,Me.shadowMapSize=he.mapSize,r.spotShadow[x]=Me,r.spotShadowMap[x]=_e,j++}x++}else if(F.isRectAreaLight){const J=e.get(F);J.color.copy(ne).multiplyScalar(pe),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=J,v++}else if(F.isPointLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity*R),J.distance=F.distance,J.decay=F.decay,F.castShadow){const he=F.shadow,Me=t.get(F);Me.shadowBias=he.bias,Me.shadowNormalBias=he.normalBias,Me.shadowRadius=he.radius,Me.shadowMapSize=he.mapSize,Me.shadowCameraNear=he.camera.near,Me.shadowCameraFar=he.camera.far,r.pointShadow[b]=Me,r.pointShadowMap[b]=_e,r.pointShadowMatrix[b]=F.shadow.matrix,B++}r.point[b]=J,b++}else if(F.isHemisphereLight){const J=e.get(F);J.skyColor.copy(F.color).multiplyScalar(pe*R),J.groundColor.copy(F.groundColor).multiplyScalar(pe*R),r.hemi[O]=J,O++}}v>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=y;const T=r.hash;(T.directionalLength!==E||T.pointLength!==b||T.spotLength!==x||T.rectAreaLength!==v||T.hemiLength!==O||T.numDirectionalShadows!==L||T.numPointShadows!==B||T.numSpotShadows!==j||T.numSpotMaps!==k||T.numLightProbes!==re)&&(r.directional.length=E,r.spot.length=x,r.rectArea.length=v,r.point.length=b,r.hemi.length=O,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=j,r.spotShadowMap.length=j,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=j+k-u,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=u,r.numLightProbes=re,T.directionalLength=E,T.pointLength=b,T.spotLength=x,T.rectAreaLength=v,T.hemiLength=O,T.numDirectionalShadows=L,T.numPointShadows=B,T.numSpotShadows=j,T.numSpotMaps=k,T.numLightProbes=re,r.version=Ev++)}function d(p,f){let g=0,_=0,y=0,E=0,b=0;const x=f.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const L=p[v];if(L.isDirectionalLight){const B=r.directional[g];B.direction.setFromMatrixPosition(L.matrixWorld),n.setFromMatrixPosition(L.target.matrixWorld),B.direction.sub(n),B.direction.transformDirection(x),g++}else if(L.isSpotLight){const B=r.spot[y];B.position.setFromMatrixPosition(L.matrixWorld),B.position.applyMatrix4(x),B.direction.setFromMatrixPosition(L.matrixWorld),n.setFromMatrixPosition(L.target.matrixWorld),B.direction.sub(n),B.direction.transformDirection(x),y++}else if(L.isRectAreaLight){const B=r.rectArea[E];B.position.setFromMatrixPosition(L.matrixWorld),B.position.applyMatrix4(x),l.identity(),o.copy(L.matrixWorld),o.premultiply(x),l.extractRotation(o),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),B.halfWidth.applyMatrix4(l),B.halfHeight.applyMatrix4(l),E++}else if(L.isPointLight){const B=r.point[_];B.position.setFromMatrixPosition(L.matrixWorld),B.position.applyMatrix4(x),_++}else if(L.isHemisphereLight){const B=r.hemi[b];B.direction.setFromMatrixPosition(L.matrixWorld),B.direction.transformDirection(x),b++}}}return{setup:c,setupView:d,state:r}}function nu(i){const e=new bv(i),t=[],r=[];function n(){t.length=0,r.length=0}function o(p){t.push(p)}function l(p){r.push(p)}function c(p){e.setup(t,p)}function d(p){e.setupView(t,p)}return{init:n,state:{lightsArray:t,shadowsArray:r,lights:e,transmissionRenderTarget:null},setupLights:c,setupLightsView:d,pushLight:o,pushShadow:l}}function wv(i){let e=new WeakMap;function t(n,o=0){const l=e.get(n);let c;return l===void 0?(c=new nu(i),e.set(n,[c])):o>=l.length?(c=new nu(i),l.push(c)):c=l[o],c}function r(){e=new WeakMap}return{get:t,dispose:r}}class Av extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rv extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pv(i,e,t){let r=new ss;const n=new _t,o=new _t,l=new jt,c=new Av({depthPacking:Td}),d=new Rv,p={},f=t.maxTextureSize,g={[fi]:ar,[ar]:fi,[Qr]:Qr},_=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Cv,fragmentShader:Lv}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new Lr;E.setAttribute("position",new zr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new _r(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let v=this.type;this.render=function(k,u,re){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;const R=i.getRenderTarget(),T=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),ie=i.state;ie.setBlending(mi),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const F=v!==$r&&this.type===$r,ne=v===$r&&this.type!==$r;for(let pe=0,ge=k.length;pe<ge;pe++){const _e=k[pe],J=_e.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",_e,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;n.copy(J.mapSize);const he=J.getFrameExtents();if(n.multiply(he),o.copy(J.mapSize),(n.x>f||n.y>f)&&(n.x>f&&(o.x=Math.floor(f/he.x),n.x=o.x*he.x,J.mapSize.x=o.x),n.y>f&&(o.y=Math.floor(f/he.y),n.y=o.y*he.y,J.mapSize.y=o.y)),J.map===null||F===!0||ne===!0){const je=this.type!==$r?{minFilter:gr,magFilter:gr}:{};J.map!==null&&J.map.dispose(),J.map=new ki(n.x,n.y,je),J.map.texture.name=_e.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const Me=J.getViewportCount();for(let je=0;je<Me;je++){const st=J.getViewport(je);l.set(o.x*st.x,o.y*st.y,o.x*st.z,o.y*st.w),ie.viewport(l),J.updateMatrices(_e,je),r=J.getFrustum(),B(u,re,J.camera,_e,this.type)}J.isPointLightShadow!==!0&&this.type===$r&&O(J,re),J.needsUpdate=!1}v=this.type,x.needsUpdate=!1,i.setRenderTarget(R,T,W)};function O(k,u){const re=e.update(b);_.defines.VSM_SAMPLES!==k.blurSamples&&(_.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ki(n.x,n.y)),_.uniforms.shadow_pass.value=k.map.texture,_.uniforms.resolution.value=k.mapSize,_.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(u,null,re,_,b,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(u,null,re,y,b,null)}function L(k,u,re,R){let T=null;const W=re.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(W!==void 0)T=W;else if(T=re.isPointLight===!0?d:c,i.localClippingEnabled&&u.clipShadows===!0&&Array.isArray(u.clippingPlanes)&&u.clippingPlanes.length!==0||u.displacementMap&&u.displacementScale!==0||u.alphaMap&&u.alphaTest>0||u.map&&u.alphaTest>0){const ie=T.uuid,F=u.uuid;let ne=p[ie];ne===void 0&&(ne={},p[ie]=ne);let pe=ne[F];pe===void 0&&(pe=T.clone(),ne[F]=pe,u.addEventListener("dispose",j)),T=pe}if(T.visible=u.visible,T.wireframe=u.wireframe,R===$r?T.side=u.shadowSide!==null?u.shadowSide:u.side:T.side=u.shadowSide!==null?u.shadowSide:g[u.side],T.alphaMap=u.alphaMap,T.alphaTest=u.alphaTest,T.map=u.map,T.clipShadows=u.clipShadows,T.clippingPlanes=u.clippingPlanes,T.clipIntersection=u.clipIntersection,T.displacementMap=u.displacementMap,T.displacementScale=u.displacementScale,T.displacementBias=u.displacementBias,T.wireframeLinewidth=u.wireframeLinewidth,T.linewidth=u.linewidth,re.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ie=i.properties.get(T);ie.light=re}return T}function B(k,u,re,R,T){if(k.visible===!1)return;if(k.layers.test(u.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&T===$r)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,k.matrixWorld);const ie=e.update(k),F=k.material;if(Array.isArray(F)){const ne=ie.groups;for(let pe=0,ge=ne.length;pe<ge;pe++){const _e=ne[pe],J=F[_e.materialIndex];if(J&&J.visible){const he=L(k,J,R,T);k.onBeforeShadow(i,k,u,re,ie,he,_e),i.renderBufferDirect(re,null,ie,he,k,_e),k.onAfterShadow(i,k,u,re,ie,he,_e)}}}else if(F.visible){const ne=L(k,F,R,T);k.onBeforeShadow(i,k,u,re,ie,ne,null),i.renderBufferDirect(re,null,ie,ne,k,null),k.onAfterShadow(i,k,u,re,ie,ne,null)}}const W=k.children;for(let ie=0,F=W.length;ie<F;ie++)B(W[ie],u,re,R,T)}function j(k){k.target.removeEventListener("dispose",j);for(const u in p){const re=p[u],R=k.target.uuid;R in re&&(re[R].dispose(),delete re[R])}}}function Uv(i){function e(){let I=!1;const Te=new jt;let xe=null;const We=new jt(0,0,0,0);return{setMask:function(Be){xe!==Be&&!I&&(i.colorMask(Be,Be,Be,Be),xe=Be)},setLocked:function(Be){I=Be},setClear:function(Be,bt,Ct,mt,Tt){Tt===!0&&(Be*=mt,bt*=mt,Ct*=mt),Te.set(Be,bt,Ct,mt),We.equals(Te)===!1&&(i.clearColor(Be,bt,Ct,mt),We.copy(Te))},reset:function(){I=!1,xe=null,We.set(-1,0,0,0)}}}function t(){let I=!1,Te=null,xe=null,We=null;return{setTest:function(Be){Be?Le(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(Be){Te!==Be&&!I&&(i.depthMask(Be),Te=Be)},setFunc:function(Be){if(xe!==Be){switch(Be){case Jh:i.depthFunc(i.NEVER);break;case Zh:i.depthFunc(i.ALWAYS);break;case $h:i.depthFunc(i.LESS);break;case xa:i.depthFunc(i.LEQUAL);break;case Qh:i.depthFunc(i.EQUAL);break;case ed:i.depthFunc(i.GEQUAL);break;case td:i.depthFunc(i.GREATER);break;case rd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Be}},setLocked:function(Be){I=Be},setClear:function(Be){We!==Be&&(i.clearDepth(Be),We=Be)},reset:function(){I=!1,Te=null,xe=null,We=null}}}function r(){let I=!1,Te=null,xe=null,We=null,Be=null,bt=null,Ct=null,mt=null,Tt=null;return{setTest:function(wt){I||(wt?Le(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(wt){Te!==wt&&!I&&(i.stencilMask(wt),Te=wt)},setFunc:function(wt,Sr,fr){(xe!==wt||We!==Sr||Be!==fr)&&(i.stencilFunc(wt,Sr,fr),xe=wt,We=Sr,Be=fr)},setOp:function(wt,Sr,fr){(bt!==wt||Ct!==Sr||mt!==fr)&&(i.stencilOp(wt,Sr,fr),bt=wt,Ct=Sr,mt=fr)},setLocked:function(wt){I=wt},setClear:function(wt){Tt!==wt&&(i.clearStencil(wt),Tt=wt)},reset:function(){I=!1,Te=null,xe=null,We=null,Be=null,bt=null,Ct=null,mt=null,Tt=null}}}const n=new e,o=new t,l=new r,c=new WeakMap,d=new WeakMap;let p={},f={},g=new WeakMap,_=[],y=null,E=!1,b=null,x=null,v=null,O=null,L=null,B=null,j=null,k=new vt(0,0,0),u=0,re=!1,R=null,T=null,W=null,ie=null,F=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pe=!1,ge=0;const _e=i.getParameter(i.VERSION);_e.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(_e)[1]),pe=ge>=1):_e.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),pe=ge>=2);let J=null,he={};const Me=i.getParameter(i.SCISSOR_BOX),je=i.getParameter(i.VIEWPORT),st=new jt().fromArray(Me),St=new jt().fromArray(je);function ae(I,Te,xe,We){const Be=new Uint8Array(4),bt=i.createTexture();i.bindTexture(I,bt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<xe;Ct++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,We,0,i.RGBA,i.UNSIGNED_BYTE,Be):i.texImage2D(Te+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Be);return bt}const ye={};ye[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),n.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Le(i.DEPTH_TEST),o.setFunc(xa),Xe(!1),Mt(ll),Le(i.CULL_FACE),Fe(mi);function Le(I){p[I]!==!0&&(i.enable(I),p[I]=!0)}function Ae(I){p[I]!==!1&&(i.disable(I),p[I]=!1)}function $e(I,Te){return f[I]!==Te?(i.bindFramebuffer(I,Te),f[I]=Te,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Te),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function et(I,Te){let xe=_,We=!1;if(I){xe=g.get(Te),xe===void 0&&(xe=[],g.set(Te,xe));const Be=I.textures;if(xe.length!==Be.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Ct=Be.length;bt<Ct;bt++)xe[bt]=i.COLOR_ATTACHMENT0+bt;xe.length=Be.length,We=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,We=!0);We&&i.drawBuffers(xe)}function Ye(I){return y!==I?(i.useProgram(I),y=I,!0):!1}const K={[Fi]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};K[Dh]=i.MIN,K[Oh]=i.MAX;const Je={[Fh]:i.ZERO,[Bh]:i.ONE,[zh]:i.SRC_COLOR,[bo]:i.SRC_ALPHA,[jh]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[Hh]:i.DST_ALPHA,[kh]:i.ONE_MINUS_SRC_COLOR,[wo]:i.ONE_MINUS_SRC_ALPHA,[Wh]:i.ONE_MINUS_DST_COLOR,[Gh]:i.ONE_MINUS_DST_ALPHA,[qh]:i.CONSTANT_COLOR,[Xh]:i.ONE_MINUS_CONSTANT_COLOR,[Yh]:i.CONSTANT_ALPHA,[Kh]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(I,Te,xe,We,Be,bt,Ct,mt,Tt,wt){if(I===mi){E===!0&&(Ae(i.BLEND),E=!1);return}if(E===!1&&(Le(i.BLEND),E=!0),I!==Uh){if(I!==b||wt!==re){if((x!==Fi||L!==Fi)&&(i.blendEquation(i.FUNC_ADD),x=Fi,L=Fi),wt)switch(I){case on:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case on:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,O=null,B=null,j=null,k.set(0,0,0),u=0,b=I,re=wt}return}Be=Be||Te,bt=bt||xe,Ct=Ct||We,(Te!==x||Be!==L)&&(i.blendEquationSeparate(K[Te],K[Be]),x=Te,L=Be),(xe!==v||We!==O||bt!==B||Ct!==j)&&(i.blendFuncSeparate(Je[xe],Je[We],Je[bt],Je[Ct]),v=xe,O=We,B=bt,j=Ct),(mt.equals(k)===!1||Tt!==u)&&(i.blendColor(mt.r,mt.g,mt.b,Tt),k.copy(mt),u=Tt),b=I,re=!1}function Nt(I,Te){I.side===Qr?Ae(i.CULL_FACE):Le(i.CULL_FACE);let xe=I.side===ar;Te&&(xe=!xe),Xe(xe),I.blending===on&&I.transparent===!1?Fe(mi):Fe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),n.setMask(I.colorWrite);const We=I.stencilWrite;l.setTest(We),We&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),A(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){R!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),R=I)}function Mt(I){I!==Lh?(Le(i.CULL_FACE),I!==T&&(I===ll?i.cullFace(i.BACK):I===Ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),T=I}function U(I){I!==W&&(pe&&i.lineWidth(I),W=I)}function A(I,Te,xe){I?(Le(i.POLYGON_OFFSET_FILL),(ie!==Te||F!==xe)&&(i.polygonOffset(Te,xe),ie=Te,F=xe)):Ae(i.POLYGON_OFFSET_FILL)}function ee(I){I?Le(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function ue(I){I===void 0&&(I=i.TEXTURE0+ne-1),J!==I&&(i.activeTexture(I),J=I)}function me(I,Te,xe){xe===void 0&&(J===null?xe=i.TEXTURE0+ne-1:xe=J);let We=he[xe];We===void 0&&(We={type:void 0,texture:void 0},he[xe]=We),(We.type!==I||We.texture!==Te)&&(J!==xe&&(i.activeTexture(xe),J=xe),i.bindTexture(I,Te||ye[I]),We.type=I,We.texture=Te)}function de(){const I=he[J];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ke(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(I){st.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),st.copy(I))}function ht(I){St.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),St.copy(I))}function dt(I,Te){let xe=d.get(Te);xe===void 0&&(xe=new WeakMap,d.set(Te,xe));let We=xe.get(I);We===void 0&&(We=i.getUniformBlockIndex(Te,I.name),xe.set(I,We))}function Lt(I,Te){const xe=d.get(Te).get(I);c.get(Te)!==xe&&(i.uniformBlockBinding(Te,xe,I.__bindingPointIndex),c.set(Te,xe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},J=null,he={},f={},g=new WeakMap,_=[],y=null,E=!1,b=null,x=null,v=null,O=null,L=null,B=null,j=null,k=new vt(0,0,0),u=0,re=!1,R=null,T=null,W=null,ie=null,F=null,st.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),n.reset(),o.reset(),l.reset()}return{buffers:{color:n,depth:o,stencil:l},enable:Le,disable:Ae,bindFramebuffer:$e,drawBuffers:et,useProgram:Ye,setBlending:Fe,setMaterial:Nt,setFlipSided:Xe,setCullFace:Mt,setLineWidth:U,setPolygonOffset:A,setScissorTest:ee,activeTexture:ue,bindTexture:me,unbindTexture:de,compressedTexImage2D:ke,compressedTexImage3D:ve,texImage2D:De,texImage3D:lt,updateUBOMapping:dt,uniformBlockBinding:Lt,texStorage2D:Qe,texStorage3D:Ne,texSubImage2D:ce,texSubImage3D:Pe,compressedTexSubImage2D:be,compressedTexSubImage3D:Ue,scissor:tt,viewport:ht,reset:Oe}}function Nv(i,e,t,r,n,o,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _t,f=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,A){return y?new OffscreenCanvas(U,A):Yn("canvas")}function b(U,A,ee){let ue=1;const me=Mt(U);if((me.width>ee||me.height>ee)&&(ue=ee/Math.max(me.width,me.height)),ue<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(ue*me.width),ke=Math.floor(ue*me.height);g===void 0&&(g=E(de,ke));const ve=A?E(de,ke):g;return ve.width=de,ve.height=ke,ve.getContext("2d").drawImage(U,0,0,de,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+de+"x"+ke+")."),ve}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function x(U){return U.generateMipmaps&&U.minFilter!==gr&&U.minFilter!==wr}function v(U){i.generateMipmap(U)}function O(U,A,ee,ue,me=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=A;if(A===i.RED&&(ee===i.FLOAT&&(de=i.R32F),ee===i.HALF_FLOAT&&(de=i.R16F),ee===i.UNSIGNED_BYTE&&(de=i.R8)),A===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.R8UI),ee===i.UNSIGNED_SHORT&&(de=i.R16UI),ee===i.UNSIGNED_INT&&(de=i.R32UI),ee===i.BYTE&&(de=i.R8I),ee===i.SHORT&&(de=i.R16I),ee===i.INT&&(de=i.R32I)),A===i.RG&&(ee===i.FLOAT&&(de=i.RG32F),ee===i.HALF_FLOAT&&(de=i.RG16F),ee===i.UNSIGNED_BYTE&&(de=i.RG8)),A===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.RG8UI),ee===i.UNSIGNED_SHORT&&(de=i.RG16UI),ee===i.UNSIGNED_INT&&(de=i.RG32UI),ee===i.BYTE&&(de=i.RG8I),ee===i.SHORT&&(de=i.RG16I),ee===i.INT&&(de=i.RG32I)),A===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),A===i.RGBA){const ke=me?Ta:Rt.getTransfer(ue);ee===i.FLOAT&&(de=i.RGBA32F),ee===i.HALF_FLOAT&&(de=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(de=ke===Ut?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function L(U,A){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==gr&&U.minFilter!==wr?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function B(U){const A=U.target;A.removeEventListener("dispose",B),k(A),A.isVideoTexture&&f.delete(A)}function j(U){const A=U.target;A.removeEventListener("dispose",j),re(A)}function k(U){const A=r.get(U);if(A.__webglInit===void 0)return;const ee=U.source,ue=_.get(ee);if(ue){const me=ue[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&u(U),Object.keys(ue).length===0&&_.delete(ee)}r.remove(U)}function u(U){const A=r.get(U);i.deleteTexture(A.__webglTexture);const ee=U.source,ue=_.get(ee);delete ue[A.__cacheKey],l.memory.textures--}function re(U){const A=r.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(A.__webglFramebuffer[ue]))for(let me=0;me<A.__webglFramebuffer[ue].length;me++)i.deleteFramebuffer(A.__webglFramebuffer[ue][me]);else i.deleteFramebuffer(A.__webglFramebuffer[ue]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ue])}else{if(Array.isArray(A.__webglFramebuffer))for(let ue=0;ue<A.__webglFramebuffer.length;ue++)i.deleteFramebuffer(A.__webglFramebuffer[ue]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ue=0;ue<A.__webglColorRenderbuffer.length;ue++)A.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ue]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ee=U.textures;for(let ue=0,me=ee.length;ue<me;ue++){const de=r.get(ee[ue]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),l.memory.textures--),r.remove(ee[ue])}r.remove(U)}let R=0;function T(){R=0}function W(){const U=R;return U>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+n.maxTextures),R+=1,U}function ie(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function F(U,A){const ee=r.get(U);if(U.isVideoTexture&&Nt(U),U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){const ue=U.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(ee,U,A);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+A)}function ne(U,A){const ee=r.get(U);if(U.version>0&&ee.__version!==U.version){st(ee,U,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+A)}function pe(U,A){const ee=r.get(U);if(U.version>0&&ee.__version!==U.version){st(ee,U,A);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+A)}function ge(U,A){const ee=r.get(U);if(U.version>0&&ee.__version!==U.version){St(ee,U,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+A)}const _e={[Lo]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},J={[gr]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[Ma]:i.NEAREST_MIPMAP_LINEAR,[wr]:i.LINEAR,[Uo]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},he={[wd]:i.NEVER,[Ud]:i.ALWAYS,[Ad]:i.LESS,[Jl]:i.LEQUAL,[Rd]:i.EQUAL,[Pd]:i.GEQUAL,[Cd]:i.GREATER,[Ld]:i.NOTEQUAL};function Me(U,A){if(A.type===_i&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===wr||A.magFilter===Uo||A.magFilter===Ma||A.magFilter===zi||A.minFilter===wr||A.minFilter===Uo||A.minFilter===Ma||A.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,_e[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,_e[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,_e[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,J[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,J[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,he[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gr||A.minFilter!==Ma&&A.minFilter!==zi||A.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function je(U,A){let ee=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",B));const ue=A.source;let me=_.get(ue);me===void 0&&(me={},_.set(ue,me));const de=ie(A);if(de!==U.__cacheKey){me[de]===void 0&&(me[de]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,ee=!0),me[de].usedTimes++;const ke=me[U.__cacheKey];ke!==void 0&&(me[U.__cacheKey].usedTimes--,ke.usedTimes===0&&u(A)),U.__cacheKey=de,U.__webglTexture=me[de].texture}return ee}function st(U,A,ee){let ue=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ue=i.TEXTURE_3D);const me=je(U,A),de=A.source;t.bindTexture(ue,U.__webglTexture,i.TEXTURE0+ee);const ke=r.get(de);if(de.version!==ke.__version||me===!0){t.activeTexture(i.TEXTURE0+ee);const ve=Rt.getPrimaries(Rt.workingColorSpace),ce=A.colorSpace===xi?null:Rt.getPrimaries(A.colorSpace),Pe=A.colorSpace===xi||ve===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let be=b(A.image,!1,n.maxTextureSize);be=Xe(A,be);const Ue=o.convert(A.format,A.colorSpace),Qe=o.convert(A.type);let Ne=O(A.internalFormat,Ue,Qe,A.colorSpace,A.isVideoTexture);Me(ue,A);let De;const lt=A.mipmaps,tt=A.isVideoTexture!==!0&&Ne!==wl,ht=ke.__version===void 0||me===!0,dt=de.dataReady,Lt=L(A,be);if(A.isDepthTexture)Ne=i.DEPTH_COMPONENT16,A.type===_i?Ne=i.DEPTH_COMPONENT32F:A.type===cn?Ne=i.DEPTH_COMPONENT24:A.type===Wn&&(Ne=i.DEPTH24_STENCIL8),ht&&(tt?t.texStorage2D(i.TEXTURE_2D,1,Ne,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,Ne,be.width,be.height,0,Ue,Qe,null));else if(A.isDataTexture)if(lt.length>0){tt&&ht&&t.texStorage2D(i.TEXTURE_2D,Lt,Ne,lt[0].width,lt[0].height);for(let Oe=0,I=lt.length;Oe<I;Oe++)De=lt[Oe],tt?dt&&t.texSubImage2D(i.TEXTURE_2D,Oe,0,0,De.width,De.height,Ue,Qe,De.data):t.texImage2D(i.TEXTURE_2D,Oe,Ne,De.width,De.height,0,Ue,Qe,De.data);A.generateMipmaps=!1}else tt?(ht&&t.texStorage2D(i.TEXTURE_2D,Lt,Ne,be.width,be.height),dt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be.width,be.height,Ue,Qe,be.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,be.width,be.height,0,Ue,Qe,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){tt&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Ne,lt[0].width,lt[0].height,be.depth);for(let Oe=0,I=lt.length;Oe<I;Oe++)De=lt[Oe],A.format!==Ir?Ue!==null?tt?dt&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Oe,0,0,0,De.width,De.height,be.depth,Ue,De.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Oe,Ne,De.width,De.height,be.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?dt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Oe,0,0,0,De.width,De.height,be.depth,Ue,Qe,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Oe,Ne,De.width,De.height,be.depth,0,Ue,Qe,De.data)}else{tt&&ht&&t.texStorage2D(i.TEXTURE_2D,Lt,Ne,lt[0].width,lt[0].height);for(let Oe=0,I=lt.length;Oe<I;Oe++)De=lt[Oe],A.format!==Ir?Ue!==null?tt?dt&&t.compressedTexSubImage2D(i.TEXTURE_2D,Oe,0,0,De.width,De.height,Ue,De.data):t.compressedTexImage2D(i.TEXTURE_2D,Oe,Ne,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?dt&&t.texSubImage2D(i.TEXTURE_2D,Oe,0,0,De.width,De.height,Ue,Qe,De.data):t.texImage2D(i.TEXTURE_2D,Oe,Ne,De.width,De.height,0,Ue,Qe,De.data)}else if(A.isDataArrayTexture)tt?(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Ne,be.width,be.height,be.depth),dt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ue,Qe,be.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,be.width,be.height,be.depth,0,Ue,Qe,be.data);else if(A.isData3DTexture)tt?(ht&&t.texStorage3D(i.TEXTURE_3D,Lt,Ne,be.width,be.height,be.depth),dt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ue,Qe,be.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,be.width,be.height,be.depth,0,Ue,Qe,be.data);else if(A.isFramebufferTexture){if(ht)if(tt)t.texStorage2D(i.TEXTURE_2D,Lt,Ne,be.width,be.height);else{let Oe=be.width,I=be.height;for(let Te=0;Te<Lt;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ne,Oe,I,0,Ue,Qe,null),Oe>>=1,I>>=1}}else if(lt.length>0){if(tt&&ht){const Oe=Mt(lt[0]);t.texStorage2D(i.TEXTURE_2D,Lt,Ne,Oe.width,Oe.height)}for(let Oe=0,I=lt.length;Oe<I;Oe++)De=lt[Oe],tt?dt&&t.texSubImage2D(i.TEXTURE_2D,Oe,0,0,Ue,Qe,De):t.texImage2D(i.TEXTURE_2D,Oe,Ne,Ue,Qe,De);A.generateMipmaps=!1}else if(tt){if(ht){const Oe=Mt(be);t.texStorage2D(i.TEXTURE_2D,Lt,Ne,Oe.width,Oe.height)}dt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,Qe,be)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Ue,Qe,be);x(A)&&v(ue),ke.__version=de.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function St(U,A,ee){if(A.image.length!==6)return;const ue=je(U,A),me=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+ee);const de=r.get(me);if(me.version!==de.__version||ue===!0){t.activeTexture(i.TEXTURE0+ee);const ke=Rt.getPrimaries(Rt.workingColorSpace),ve=A.colorSpace===xi?null:Rt.getPrimaries(A.colorSpace),ce=A.colorSpace===xi||ke===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,be=A.image[0]&&A.image[0].isDataTexture,Ue=[];for(let I=0;I<6;I++)!Pe&&!be?Ue[I]=b(A.image[I],!0,n.maxCubemapSize):Ue[I]=be?A.image[I].image:A.image[I],Ue[I]=Xe(A,Ue[I]);const Qe=Ue[0],Ne=o.convert(A.format,A.colorSpace),De=o.convert(A.type),lt=O(A.internalFormat,Ne,De,A.colorSpace),tt=A.isVideoTexture!==!0,ht=de.__version===void 0||ue===!0,dt=me.dataReady;let Lt=L(A,Qe);Me(i.TEXTURE_CUBE_MAP,A);let Oe;if(Pe){tt&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,lt,Qe.width,Qe.height);for(let I=0;I<6;I++){Oe=Ue[I].mipmaps;for(let Te=0;Te<Oe.length;Te++){const xe=Oe[Te];A.format!==Ir?Ne!==null?tt?dt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te,0,0,xe.width,xe.height,Ne,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te,lt,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te,0,0,xe.width,xe.height,Ne,De,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te,lt,xe.width,xe.height,0,Ne,De,xe.data)}}}else{if(Oe=A.mipmaps,tt&&ht){Oe.length>0&&Lt++;const I=Mt(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,lt,I.width,I.height)}for(let I=0;I<6;I++)if(be){tt?dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Ue[I].width,Ue[I].height,Ne,De,Ue[I].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,lt,Ue[I].width,Ue[I].height,0,Ne,De,Ue[I].data);for(let Te=0;Te<Oe.length;Te++){const xe=Oe[Te].image[I].image;tt?dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te+1,0,0,xe.width,xe.height,Ne,De,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te+1,lt,xe.width,xe.height,0,Ne,De,xe.data)}}else{tt?dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Ne,De,Ue[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,lt,Ne,De,Ue[I]);for(let Te=0;Te<Oe.length;Te++){const xe=Oe[Te];tt?dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te+1,0,0,Ne,De,xe.image[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te+1,lt,Ne,De,xe.image[I])}}}x(A)&&v(i.TEXTURE_CUBE_MAP),de.__version=me.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ae(U,A,ee,ue,me,de){const ke=o.convert(ee.format,ee.colorSpace),ve=o.convert(ee.type),ce=O(ee.internalFormat,ke,ve,ee.colorSpace);if(!r.get(A).__hasExternalTextures){const Pe=Math.max(1,A.width>>de),be=Math.max(1,A.height>>de);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,de,ce,Pe,be,A.depth,0,ke,ve,null):t.texImage2D(me,de,ce,Pe,be,0,ke,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Fe(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,me,r.get(ee).__webglTexture,0,Je(A)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,me,r.get(ee).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(U,A,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer&&!A.stencilBuffer){let ue=i.DEPTH_COMPONENT24;if(ee||Fe(A)){const me=A.depthTexture;me&&me.isDepthTexture&&(me.type===_i?ue=i.DEPTH_COMPONENT32F:me.type===cn&&(ue=i.DEPTH_COMPONENT24));const de=Je(A);Fe(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,ue,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ue,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,U)}else if(A.depthBuffer&&A.stencilBuffer){const ue=Je(A);ee&&Fe(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,A.width,A.height):Fe(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,U)}else{const ue=A.textures;for(let me=0;me<ue.length;me++){const de=ue[me],ke=o.convert(de.format,de.colorSpace),ve=o.convert(de.type),ce=O(de.internalFormat,ke,ve,de.colorSpace),Pe=Je(A);ee&&Fe(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ce,A.width,A.height):Fe(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ce,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ce,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);const ee=r.get(A.depthTexture).__webglTexture,ue=Je(A);if(A.depthTexture.format===un)Fe(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(A.depthTexture.format===jn)Fe(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ae(U){const A=r.get(U),ee=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Le(A.__webglFramebuffer,U)}else if(ee){A.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ue]),A.__webglDepthbuffer[ue]=i.createRenderbuffer(),ye(A.__webglDepthbuffer[ue],U,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),ye(A.__webglDepthbuffer,U,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(U,A,ee){const ue=r.get(U);A!==void 0&&ae(ue.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&Ae(U)}function et(U){const A=U.texture,ee=r.get(U),ue=r.get(A);U.addEventListener("dispose",j);const me=U.textures,de=U.isWebGLCubeRenderTarget===!0,ke=me.length>1;if(ke||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=A.version,l.memory.textures++),de){ee.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[ve]=[];for(let ce=0;ce<A.mipmaps.length;ce++)ee.__webglFramebuffer[ve][ce]=i.createFramebuffer()}else ee.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ve=0;ve<A.mipmaps.length;ve++)ee.__webglFramebuffer[ve]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(ke)for(let ve=0,ce=me.length;ve<ce;ve++){const Pe=r.get(me[ve]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),l.memory.textures++)}if(U.samples>0&&Fe(U)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ve=0;ve<me.length;ve++){const ce=me[ve];ee.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[ve]);const Pe=o.convert(ce.format,ce.colorSpace),be=o.convert(ce.type),Ue=O(ce.internalFormat,Pe,be,ce.colorSpace,U.isXRRenderTarget===!0),Qe=Je(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Ue,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,ee.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(ee.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),Me(i.TEXTURE_CUBE_MAP,A);for(let ve=0;ve<6;ve++)if(A.mipmaps&&A.mipmaps.length>0)for(let ce=0;ce<A.mipmaps.length;ce++)ae(ee.__webglFramebuffer[ve][ce],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ce);else ae(ee.__webglFramebuffer[ve],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(A)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let ve=0,ce=me.length;ve<ce;ve++){const Pe=me[ve],be=r.get(Pe);t.bindTexture(i.TEXTURE_2D,be.__webglTexture),Me(i.TEXTURE_2D,Pe),ae(ee.__webglFramebuffer,U,Pe,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),x(Pe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ve=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ue.__webglTexture),Me(ve,A),A.mipmaps&&A.mipmaps.length>0)for(let ce=0;ce<A.mipmaps.length;ce++)ae(ee.__webglFramebuffer[ce],U,A,i.COLOR_ATTACHMENT0,ve,ce);else ae(ee.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,ve,0);x(A)&&v(ve),t.unbindTexture()}U.depthBuffer&&Ae(U)}function Ye(U){const A=U.textures;for(let ee=0,ue=A.length;ee<ue;ee++){const me=A[ee];if(x(me)){const de=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ke=r.get(me).__webglTexture;t.bindTexture(de,ke),v(de),t.unbindTexture()}}}function K(U){if(U.samples>0&&Fe(U)===!1){const A=U.textures,ee=U.width,ue=U.height;let me=i.COLOR_BUFFER_BIT;const de=[],ke=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=r.get(U),ce=A.length>1;if(ce)for(let Pe=0;Pe<A.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Pe=0;Pe<A.length;Pe++){de.push(i.COLOR_ATTACHMENT0+Pe),U.depthBuffer&&de.push(ke);const be=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(be===!1&&(U.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&ve.__isTransmissionRenderTarget!==!0&&(me|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]),be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ke]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ke])),ce){const Ue=r.get(A[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,ee,ue,0,0,ee,ue,me,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Pe=0;Pe<A.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);const be=r.get(A[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function Je(U){return Math.min(n.maxSamples,U.samples)}function Fe(U){const A=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Nt(U){const A=l.render.frame;f.get(U)!==A&&(f.set(U,A),U.update())}function Xe(U,A){const ee=U.colorSpace,ue=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ee!==yi&&ee!==xi&&(Rt.getTransfer(ee)===Ut?(ue!==Ir||me!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}function Mt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=T,this.setTexture2D=F,this.setTexture2DArray=ne,this.setTexture3D=pe,this.setTextureCube=ge,this.rebindTextures=$e,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Fe}function Iv(i,e){function t(r,n=xi){let o;const l=Rt.getTransfer(n);if(r===vi)return i.UNSIGNED_BYTE;if(r===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(r===md)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===pd)return i.BYTE;if(r===fd)return i.SHORT;if(r===ml)return i.UNSIGNED_SHORT;if(r===gl)return i.INT;if(r===cn)return i.UNSIGNED_INT;if(r===_i)return i.FLOAT;if(r===Sa)return i.HALF_FLOAT;if(r===gd)return i.ALPHA;if(r===vd)return i.RGB;if(r===Ir)return i.RGBA;if(r===_d)return i.LUMINANCE;if(r===xd)return i.LUMINANCE_ALPHA;if(r===un)return i.DEPTH_COMPONENT;if(r===jn)return i.DEPTH_STENCIL;if(r===yd)return i.RED;if(r===xl)return i.RED_INTEGER;if(r===Md)return i.RG;if(r===yl)return i.RG_INTEGER;if(r===Ml)return i.RGBA_INTEGER;if(r===No||r===Io||r===Do||r===Oo)if(l===Ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===No)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Do)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===No)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Io)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Do)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sl||r===El||r===Tl||r===bl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Sl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===El)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Al||r===Rl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Al)return l===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Rl)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cl||r===Ll||r===Pl||r===Ul||r===Nl||r===Il||r===Dl||r===Ol||r===Fl||r===Bl||r===zl||r===kl||r===Hl||r===Gl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Cl)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ll)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pl)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ul)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nl)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Il)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dl)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ol)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fl)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bl)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zl)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kl)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hl)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gl)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fo||r===Vl||r===Wl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Fo)return l===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sd||r===jl||r===ql||r===Xl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Fo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===jl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ql)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wn?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}class Dv extends xr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ra extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ov={type:"move"};class gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,o=null,l=null;const c=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){l=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,r),v=this._getHandJoint(p,b);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const f=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=f.position.distanceTo(g.position),y=.02,E=.005;p.inputState.pinching&&_>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&o!==null&&(n=o),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Ov)))}return c!==null&&(c.visible=n!==null),d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ra;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new er,o=e.properties.get(n);o.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,n=new wi({vertexShader:Fv,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new _r(new Xa(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class kv extends dn{constructor(e,t){super();const r=this;let n=null,o=1,l=null,c="local-floor",d=1,p=null,f=null,g=null,_=null,y=null,E=null;const b=new zv,x=t.getContextAttributes();let v=null,O=null;const L=[],B=[],j=new _t;let k=null;const u=new xr;u.layers.enable(1),u.viewport=new jt;const re=new xr;re.layers.enable(2),re.viewport=new jt;const R=[u,re],T=new Dv;T.layers.enable(1),T.layers.enable(2);let W=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ye=L[ae];return ye===void 0&&(ye=new gs,L[ae]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ae){let ye=L[ae];return ye===void 0&&(ye=new gs,L[ae]=ye),ye.getGripSpace()},this.getHand=function(ae){let ye=L[ae];return ye===void 0&&(ye=new gs,L[ae]=ye),ye.getHandSpace()};function F(ae){const ye=B.indexOf(ae.inputSource);if(ye===-1)return;const Le=L[ye];Le!==void 0&&(Le.update(ae.inputSource,ae.frame,p||l),Le.dispatchEvent({type:ae.type,data:ae.inputSource}))}function ne(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",ne),n.removeEventListener("inputsourceschange",pe);for(let ae=0;ae<L.length;ae++){const ye=B[ae];ye!==null&&(B[ae]=null,L[ae].disconnect(ye))}W=null,ie=null,b.reset(),e.setRenderTarget(v),y=null,_=null,g=null,n=null,O=null,St.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){o=ae,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){c=ae,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||l},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return n},this.setSession=async function(ae){if(n=ae,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",ne),n.addEventListener("inputsourceschange",pe),x.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(j),n.renderState.layers===void 0){const ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(n,t,ye),n.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new ki(y.framebufferWidth,y.framebufferHeight,{format:Ir,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ye=null,Le=null,Ae=null;x.depth&&(Ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?jn:un,Le=x.stencil?Wn:cn);const $e={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:o};g=new XRWebGLBinding(n,t),_=g.createProjectionLayer($e),n.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),O=new ki(_.textureWidth,_.textureHeight,{format:Ir,type:vi,depthTexture:new Bc(_.textureWidth,_.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const et=e.properties.get(O);et.__ignoreDepthValues=_.ignoreDepthValues}O.isXRRenderTarget=!0,this.setFoveation(d),p=null,l=await n.requestReferenceSpace(c),St.setContext(n),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function pe(ae){for(let ye=0;ye<ae.removed.length;ye++){const Le=ae.removed[ye],Ae=B.indexOf(Le);Ae>=0&&(B[Ae]=null,L[Ae].disconnect(Le))}for(let ye=0;ye<ae.added.length;ye++){const Le=ae.added[ye];let Ae=B.indexOf(Le);if(Ae===-1){for(let et=0;et<L.length;et++)if(et>=B.length){B.push(Le),Ae=et;break}else if(B[et]===null){B[et]=Le,Ae=et;break}if(Ae===-1)break}const $e=L[Ae];$e&&$e.connect(Le)}}const ge=new V,_e=new V;function J(ae,ye,Le){ge.setFromMatrixPosition(ye.matrixWorld),_e.setFromMatrixPosition(Le.matrixWorld);const Ae=ge.distanceTo(_e),$e=ye.projectionMatrix.elements,et=Le.projectionMatrix.elements,Ye=$e[14]/($e[10]-1),K=$e[14]/($e[10]+1),Je=($e[9]+1)/$e[5],Fe=($e[9]-1)/$e[5],Nt=($e[8]-1)/$e[0],Xe=(et[8]+1)/et[0],Mt=Ye*Nt,U=Ye*Xe,A=Ae/(-Nt+Xe),ee=A*-Nt;ye.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(ee),ae.translateZ(A),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert();const ue=Ye+A,me=K+A,de=Mt-ee,ke=U+(Ae-ee),ve=Je*K/me*ue,ce=Fe*K/me*ue;ae.projectionMatrix.makePerspective(de,ke,ve,ce,ue,me),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}function he(ae,ye){ye===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ye.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(n===null)return;b.texture!==null&&(ae.near=b.depthNear,ae.far=b.depthFar),T.near=re.near=u.near=ae.near,T.far=re.far=u.far=ae.far,(W!==T.near||ie!==T.far)&&(n.updateRenderState({depthNear:T.near,depthFar:T.far}),W=T.near,ie=T.far,u.near=W,u.far=ie,re.near=W,re.far=ie,u.updateProjectionMatrix(),re.updateProjectionMatrix(),ae.updateProjectionMatrix());const ye=ae.parent,Le=T.cameras;he(T,ye);for(let Ae=0;Ae<Le.length;Ae++)he(Le[Ae],ye);Le.length===2?J(T,u,re):T.projectionMatrix.copy(u.projectionMatrix),Me(ae,T,ye)};function Me(ae,ye,Le){Le===null?ae.matrix.copy(ye.matrixWorld):(ae.matrix.copy(Le.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ye.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=ko*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(_===null&&y===null))return d},this.setFoveation=function(ae){d=ae,_!==null&&(_.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return b.texture!==null};let je=null;function st(ae,ye){if(f=ye.getViewerPose(p||l),E=ye,f!==null){const Le=f.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let Ae=!1;Le.length!==T.cameras.length&&(T.cameras.length=0,Ae=!0);for(let et=0;et<Le.length;et++){const Ye=Le[et];let K=null;if(y!==null)K=y.getViewport(Ye);else{const Fe=g.getViewSubImage(_,Ye);K=Fe.viewport,et===0&&(e.setRenderTargetTextures(O,Fe.colorTexture,_.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(O))}let Je=R[et];Je===void 0&&(Je=new xr,Je.layers.enable(et),Je.viewport=new jt,R[et]=Je),Je.matrix.fromArray(Ye.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ye.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(K.x,K.y,K.width,K.height),et===0&&(T.matrix.copy(Je.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ae===!0&&T.cameras.push(Je)}const $e=n.enabledFeatures;if($e&&$e.includes("depth-sensing")){const et=g.getDepthInformation(Le[0]);et&&et.isValid&&et.texture&&b.init(e,et,n.renderState)}}for(let Le=0;Le<L.length;Le++){const Ae=B[Le],$e=L[Le];Ae!==null&&$e!==void 0&&$e.update(Ae,ye,p||l)}b.render(e,T),je&&je(ae,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),E=null}const St=new Cc;St.setAnimationLoop(st),this.setAnimationLoop=function(ae){je=ae},this.dispose=function(){}}}const Ki=new Fr,Hv=new It;function Gv(i,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Tc(i)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function n(x,v,O,L,B){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(x,v):v.isMeshToonMaterial?(o(x,v),g(x,v)):v.isMeshPhongMaterial?(o(x,v),f(x,v)):v.isMeshStandardMaterial?(o(x,v),_(x,v),v.isMeshPhysicalMaterial&&y(x,v,B)):v.isMeshMatcapMaterial?(o(x,v),E(x,v)):v.isMeshDepthMaterial?o(x,v):v.isMeshDistanceMaterial?(o(x,v),b(x,v)):v.isMeshNormalMaterial?o(x,v):v.isLineBasicMaterial?(l(x,v),v.isLineDashedMaterial&&c(x,v)):v.isPointsMaterial?d(x,v,O,L):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===ar&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===ar&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const O=e.get(v),L=O.envMap,B=O.envMapRotation;if(L&&(x.envMap.value=L,Ki.copy(B),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),x.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(Ki)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const j=i._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*j,t(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function l(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function c(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function d(x,v,O,L){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*O,x.scale.value=L*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function f(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,O){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ar&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=O.texture,x.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function b(x,v){const O=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(O.matrixWorld),x.nearDistance.value=O.shadow.camera.near,x.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Vv(i,e,t,r){let n={},o={},l=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(O,L){const B=L.program;r.uniformBlockBinding(O,B)}function p(O,L){let B=n[O.id];B===void 0&&(E(O),B=f(O),n[O.id]=B,O.addEventListener("dispose",x));const j=L.program;r.updateUBOMapping(O,j);const k=e.render.frame;o[O.id]!==k&&(_(O),o[O.id]=k)}function f(O){const L=g();O.__bindingPointIndex=L;const B=i.createBuffer(),j=O.__size,k=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,B),i.bufferData(i.UNIFORM_BUFFER,j,k),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,B),B}function g(){for(let O=0;O<c;O++)if(l.indexOf(O)===-1)return l.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const L=n[O.id],B=O.uniforms,j=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let k=0,u=B.length;k<u;k++){const re=Array.isArray(B[k])?B[k]:[B[k]];for(let R=0,T=re.length;R<T;R++){const W=re[R];if(y(W,k,R,j)===!0){const ie=W.__offset,F=Array.isArray(W.value)?W.value:[W.value];let ne=0;for(let pe=0;pe<F.length;pe++){const ge=F[pe],_e=b(ge);typeof ge=="number"||typeof ge=="boolean"?(W.__data[0]=ge,i.bufferSubData(i.UNIFORM_BUFFER,ie+ne,W.__data)):ge.isMatrix3?(W.__data[0]=ge.elements[0],W.__data[1]=ge.elements[1],W.__data[2]=ge.elements[2],W.__data[3]=0,W.__data[4]=ge.elements[3],W.__data[5]=ge.elements[4],W.__data[6]=ge.elements[5],W.__data[7]=0,W.__data[8]=ge.elements[6],W.__data[9]=ge.elements[7],W.__data[10]=ge.elements[8],W.__data[11]=0):(ge.toArray(W.__data,ne),ne+=_e.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ie,W.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(O,L,B,j){const k=O.value,u=L+"_"+B;if(j[u]===void 0)return typeof k=="number"||typeof k=="boolean"?j[u]=k:j[u]=k.clone(),!0;{const re=j[u];if(typeof k=="number"||typeof k=="boolean"){if(re!==k)return j[u]=k,!0}else if(re.equals(k)===!1)return re.copy(k),!0}return!1}function E(O){const L=O.uniforms;let B=0;const j=16;for(let u=0,re=L.length;u<re;u++){const R=Array.isArray(L[u])?L[u]:[L[u]];for(let T=0,W=R.length;T<W;T++){const ie=R[T],F=Array.isArray(ie.value)?ie.value:[ie.value];for(let ne=0,pe=F.length;ne<pe;ne++){const ge=F[ne],_e=b(ge),J=B%j;J!==0&&j-J<_e.boundary&&(B+=j-J),ie.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=B,B+=_e.storage}}}const k=B%j;return k>0&&(B+=j-k),O.__size=B,O.__cache={},this}function b(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function x(O){const L=O.target;L.removeEventListener("dispose",x);const B=l.indexOf(L.__bindingPointIndex);l.splice(B,1),i.deleteBuffer(n[L.id]),delete n[L.id],delete o[L.id]}function v(){for(const O in n)i.deleteBuffer(n[O]);l=[],n={},o={}}return{bind:d,update:p,dispose:v}}class Wv{constructor(e={}){const{canvas:t=Id(),context:r=null,depth:n=!0,stencil:o=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=r.getContextAttributes().alpha}else _=l;const y=new Uint32Array(4),E=new Int32Array(4);let b=null,x=null;const v=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dr,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const L=this;let B=!1,j=0,k=0,u=null,re=-1,R=null;const T=new jt,W=new jt;let ie=null;const F=new vt(0);let ne=0,pe=t.width,ge=t.height,_e=1,J=null,he=null;const Me=new jt(0,0,pe,ge),je=new jt(0,0,pe,ge);let st=!1;const St=new ss;let ae=!1,ye=!1;const Le=new It,Ae=new _t,$e=new V,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return u===null?_e:1}let K=r;function Je(C,G){const Z=t.getContext(C,G);return Z!==null?Z:null}try{const C={alpha:!0,depth:n,stencil:o,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${To}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",We,!1),K===null){const G="webgl2";if(K=Je(G,C),K===null)throw Je(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Fe,Nt,Xe,Mt,U,A,ee,ue,me,de,ke,ve,ce,Pe,be,Ue,Qe,Ne,De,lt,tt,ht,dt,Lt;function Oe(){Fe=new $m(K),Fe.init(),Nt=new qm(K,Fe,e),ht=new Iv(K,Fe),Xe=new Uv(K),Mt=new tg(K),U=new _v,A=new Nv(K,Fe,Xe,U,Nt,ht,Mt),ee=new Ym(L),ue=new Zm(L),me=new op(K),dt=new Wm(K,me),de=new Qm(K,me,Mt,dt),ke=new ig(K,de,me,Mt),De=new rg(K,Nt,A),Ue=new Xm(U),ve=new vv(L,ee,ue,Fe,Nt,dt,Ue),ce=new Gv(L,U),Pe=new yv,be=new wv(Fe),Ne=new Vm(L,ee,ue,Xe,ke,_,d),Qe=new Pv(L,ke,Nt),Lt=new Vv(K,Mt,Nt,Xe),lt=new jm(K,Fe,Mt),tt=new eg(K,Fe,Mt),Mt.programs=ve.programs,L.capabilities=Nt,L.extensions=Fe,L.properties=U,L.renderLists=Pe,L.shadowMap=Qe,L.state=Xe,L.info=Mt}Oe();const I=new kv(L,K);this.xr=I,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const C=Fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(pe,ge,!1))},this.getSize=function(C){return C.set(pe,ge)},this.setSize=function(C,G,Z=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pe=C,ge=G,t.width=Math.floor(C*_e),t.height=Math.floor(G*_e),Z===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(pe*_e,ge*_e).floor()},this.setDrawingBufferSize=function(C,G,Z){pe=C,ge=G,_e=Z,t.width=Math.floor(C*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(Me)},this.setViewport=function(C,G,Z,Q){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,G,Z,Q),Xe.viewport(T.copy(Me).multiplyScalar(_e).round())},this.getScissor=function(C){return C.copy(je)},this.setScissor=function(C,G,Z,Q){C.isVector4?je.set(C.x,C.y,C.z,C.w):je.set(C,G,Z,Q),Xe.scissor(W.copy(je).multiplyScalar(_e).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(C){Xe.setScissorTest(st=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){he=C},this.getClearColor=function(C){return C.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(C=!0,G=!0,Z=!0){let Q=0;if(C){let q=!1;if(u!==null){const Ee=u.texture.format;q=Ee===Ml||Ee===yl||Ee===xl}if(q){const Ee=u.texture.type,ze=Ee===vi||Ee===cn||Ee===ml||Ee===Wn||Ee===vl||Ee===_l,Ve=Ne.getClearColor(),He=Ne.getClearAlpha(),ut=Ve.r,it=Ve.g,nt=Ve.b;ze?(y[0]=ut,y[1]=it,y[2]=nt,y[3]=He,K.clearBufferuiv(K.COLOR,0,y)):(E[0]=ut,E[1]=it,E[2]=nt,E[3]=He,K.clearBufferiv(K.COLOR,0,E))}else Q|=K.COLOR_BUFFER_BIT}G&&(Q|=K.DEPTH_BUFFER_BIT),Z&&(Q|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",We,!1),Pe.dispose(),be.dispose(),U.dispose(),ee.dispose(),ue.dispose(),ke.dispose(),dt.dispose(),Lt.dispose(),ve.dispose(),I.dispose(),I.removeEventListener("sessionstart",Sr),I.removeEventListener("sessionend",fr),Vr.stop()};function Te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const C=Mt.autoReset,G=Qe.enabled,Z=Qe.autoUpdate,Q=Qe.needsUpdate,q=Qe.type;Oe(),Mt.autoReset=C,Qe.enabled=G,Qe.autoUpdate=Z,Qe.needsUpdate=Q,Qe.type=q}function We(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Be(C){const G=C.target;G.removeEventListener("dispose",Be),bt(G)}function bt(C){Ct(C),U.remove(C)}function Ct(C){const G=U.get(C).programs;G!==void 0&&(G.forEach(function(Z){ve.releaseProgram(Z)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,Z,Q,q,Ee){G===null&&(G=et);const ze=q.isMesh&&q.matrixWorld.determinant()<0,Ve=ks(C,G,Z,Q,q);Xe.setMaterial(Q,ze);let He=Z.index,ut=1;if(Q.wireframe===!0){if(He=de.getWireframeAttribute(Z),He===void 0)return;ut=2}const it=Z.drawRange,nt=Z.attributes.position;let Vt=it.start*ut,Bt=(it.start+it.count)*ut;Ee!==null&&(Vt=Math.max(Vt,Ee.start*ut),Bt=Math.min(Bt,(Ee.start+Ee.count)*ut)),He!==null?(Vt=Math.max(Vt,0),Bt=Math.min(Bt,He.count)):nt!=null&&(Vt=Math.max(Vt,0),Bt=Math.min(Bt,nt.count));const $t=Bt-Vt;if($t<0||$t===1/0)return;dt.setup(q,Q,Ve,Z,He);let Pr,Dt=lt;if(He!==null&&(Pr=me.get(He),Dt=tt,Dt.setIndex(Pr)),q.isMesh)Q.wireframe===!0?(Xe.setLineWidth(Q.wireframeLinewidth*Ye()),Dt.setMode(K.LINES)):Dt.setMode(K.TRIANGLES);else if(q.isLine){let rt=Q.linewidth;rt===void 0&&(rt=1),Xe.setLineWidth(rt*Ye()),q.isLineSegments?Dt.setMode(K.LINES):q.isLineLoop?Dt.setMode(K.LINE_LOOP):Dt.setMode(K.LINE_STRIP)}else q.isPoints?Dt.setMode(K.POINTS):q.isSprite&&Dt.setMode(K.TRIANGLES);if(q.isBatchedMesh)Dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Dt.renderInstances(Vt,$t,q.count);else if(Z.isInstancedBufferGeometry){const rt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,kn=Math.min(Z.instanceCount,rt);Dt.renderInstances(Vt,$t,kn)}else Dt.render(Vt,$t)};function mt(C,G,Z){C.transparent===!0&&C.side===Qr&&C.forceSinglePass===!1?(C.side=ar,C.needsUpdate=!0,zn(C,G,Z),C.side=fi,C.needsUpdate=!0,zn(C,G,Z),C.side=Qr):zn(C,G,Z)}this.compile=function(C,G,Z=null){Z===null&&(Z=C),x=be.get(Z),x.init(),O.push(x),Z.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),C!==Z&&C.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights(L._useLegacyLights);const Q=new Set;return C.traverse(function(q){const Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let ze=0;ze<Ee.length;ze++){const Ve=Ee[ze];mt(Ve,Z,q),Q.add(Ve)}else mt(Ee,Z,q),Q.add(Ee)}),O.pop(),x=null,Q},this.compileAsync=function(C,G,Z=null){const Q=this.compile(C,G,Z);return new Promise(q=>{function Ee(){if(Q.forEach(function(ze){U.get(ze).currentProgram.isReady()&&Q.delete(ze)}),Q.size===0){q(C);return}setTimeout(Ee,10)}Fe.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Tt=null;function wt(C){Tt&&Tt(C)}function Sr(){Vr.stop()}function fr(){Vr.start()}const Vr=new Cc;Vr.setAnimationLoop(wt),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(C){Tt=C,I.setAnimationLoop(C),C===null?Vr.stop():Vr.start()},I.addEventListener("sessionstart",Sr),I.addEventListener("sessionend",fr),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(G),G=I.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,G,u),x=be.get(C,O.length),x.init(),O.push(x),Le.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),St.setFromProjectionMatrix(Le),ye=this.localClippingEnabled,ae=Ue.init(this.clippingPlanes,ye),b=Pe.get(C,v.length),b.init(),v.push(b),ci(C,G,0,L.sortObjects),b.finish(),L.sortObjects===!0&&b.sort(J,he),this.info.render.frame++,ae===!0&&Ue.beginShadows();const Z=x.state.shadowsArray;if(Qe.render(Z,C,G),ae===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1)&&Ne.render(b,C),x.setupLights(L._useLegacyLights),G.isArrayCamera){const Q=G.cameras;for(let q=0,Ee=Q.length;q<Ee;q++){const ze=Q[q];ui(b,C,ze,ze.viewport)}}else ui(b,C,G);u!==null&&(A.updateMultisampleRenderTarget(u),A.updateRenderTargetMipmap(u)),C.isScene===!0&&C.onAfterRender(L,C,G),dt.resetDefaultState(),re=-1,R=null,O.pop(),O.length>0?x=O[O.length-1]:x=null,v.pop(),v.length>0?b=v[v.length-1]:b=null};function ci(C,G,Z,Q){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||St.intersectsSprite(C)){Q&&$e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Le);const Ee=ke.update(C),ze=C.material;ze.visible&&b.push(C,Ee,ze,Z,$e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||St.intersectsObject(C))){const Ee=ke.update(C),ze=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$e.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),$e.copy(Ee.boundingSphere.center)),$e.applyMatrix4(C.matrixWorld).applyMatrix4(Le)),Array.isArray(ze)){const Ve=Ee.groups;for(let He=0,ut=Ve.length;He<ut;He++){const it=Ve[He],nt=ze[it.materialIndex];nt&&nt.visible&&b.push(C,Ee,nt,Z,$e.z,it)}}else ze.visible&&b.push(C,Ee,ze,Z,$e.z,null)}}const q=C.children;for(let Ee=0,ze=q.length;Ee<ze;Ee++)ci(q[Ee],G,Z,Q)}function ui(C,G,Z,Q){const q=C.opaque,Ee=C.transmissive,ze=C.transparent;x.setupLightsView(Z),ae===!0&&Ue.setGlobalState(L.clippingPlanes,Z),Ee.length>0&&ca(q,Ee,G,Z),Q&&Xe.viewport(T.copy(Q)),q.length>0&&hi(q,G,Z),Ee.length>0&&hi(Ee,G,Z),ze.length>0&&hi(ze,G,Z),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function ca(C,G,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget===null){x.state.transmissionRenderTarget=new ki(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Sa:vi,minFilter:zi,samples:4,stencilBuffer:o});const He=U.get(x.state.transmissionRenderTarget);He.__isTransmissionRenderTarget=!0}const q=x.state.transmissionRenderTarget;L.getDrawingBufferSize(Ae),q.setSize(Ae.x,Ae.y);const Ee=L.getRenderTarget();L.setRenderTarget(q),L.getClearColor(F),ne=L.getClearAlpha(),ne<1&&L.setClearColor(16777215,.5),L.clear();const ze=L.toneMapping;L.toneMapping=gi,hi(C,Z,Q),A.updateMultisampleRenderTarget(q),A.updateRenderTargetMipmap(q);let Ve=!1;for(let He=0,ut=G.length;He<ut;He++){const it=G[He],nt=it.object,Vt=it.geometry,Bt=it.material,$t=it.group;if(Bt.side===Qr&&nt.layers.test(Q.layers)){const Pr=Bt.side;Bt.side=ar,Bt.needsUpdate=!0,mo(nt,Z,Q,Vt,Bt,$t),Bt.side=Pr,Bt.needsUpdate=!0,Ve=!0}}Ve===!0&&(A.updateMultisampleRenderTarget(q),A.updateRenderTargetMipmap(q)),L.setRenderTarget(Ee),L.setClearColor(F,ne),L.toneMapping=ze}function hi(C,G,Z){const Q=G.isScene===!0?G.overrideMaterial:null;for(let q=0,Ee=C.length;q<Ee;q++){const ze=C[q],Ve=ze.object,He=ze.geometry,ut=Q===null?ze.material:Q,it=ze.group;Ve.layers.test(Z.layers)&&mo(Ve,G,Z,He,ut,it)}}function mo(C,G,Z,Q,q,Ee){C.onBeforeRender(L,G,Z,Q,q,Ee),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(L,G,Z,Q,C,Ee),q.transparent===!0&&q.side===Qr&&q.forceSinglePass===!1?(q.side=ar,q.needsUpdate=!0,L.renderBufferDirect(Z,G,Q,q,C,Ee),q.side=fi,q.needsUpdate=!0,L.renderBufferDirect(Z,G,Q,q,C,Ee),q.side=Qr):L.renderBufferDirect(Z,G,Q,q,C,Ee),C.onAfterRender(L,G,Z,Q,q,Ee)}function zn(C,G,Z){G.isScene!==!0&&(G=et);const Q=U.get(C),q=x.state.lights,Ee=x.state.shadowsArray,ze=q.state.version,Ve=ve.getParameters(C,q.state,Ee,G,Z),He=ve.getProgramCacheKey(Ve);let ut=Q.programs;Q.environment=C.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(C.isMeshStandardMaterial?ue:ee).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,ut===void 0&&(C.addEventListener("dispose",Be),ut=new Map,Q.programs=ut);let it=ut.get(He);if(it!==void 0){if(Q.currentProgram===it&&Q.lightsStateVersion===ze)return ua(C,Ve),it}else Ve.uniforms=ve.getUniforms(C),C.onBuild(Z,Ve,L),C.onBeforeCompile(Ve,L),it=ve.acquireProgram(Ve,He),ut.set(He,it),Q.uniforms=Ve.uniforms;const nt=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(nt.clippingPlanes=Ue.uniform),ua(C,Ve),Q.needsLights=vo(C),Q.lightsStateVersion=ze,Q.needsLights&&(nt.ambientLightColor.value=q.state.ambient,nt.lightProbe.value=q.state.probe,nt.directionalLights.value=q.state.directional,nt.directionalLightShadows.value=q.state.directionalShadow,nt.spotLights.value=q.state.spot,nt.spotLightShadows.value=q.state.spotShadow,nt.rectAreaLights.value=q.state.rectArea,nt.ltc_1.value=q.state.rectAreaLTC1,nt.ltc_2.value=q.state.rectAreaLTC2,nt.pointLights.value=q.state.point,nt.pointLightShadows.value=q.state.pointShadow,nt.hemisphereLights.value=q.state.hemi,nt.directionalShadowMap.value=q.state.directionalShadowMap,nt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,nt.spotShadowMap.value=q.state.spotShadowMap,nt.spotLightMatrix.value=q.state.spotLightMatrix,nt.spotLightMap.value=q.state.spotLightMap,nt.pointShadowMap.value=q.state.pointShadowMap,nt.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=it,Q.uniformsList=null,it}function go(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Za.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function ua(C,G){const Z=U.get(C);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function ks(C,G,Z,Q,q){G.isScene!==!0&&(G=et),A.resetTextureUnits();const Ee=G.fog,ze=Q.isMeshStandardMaterial?G.environment:null,Ve=u===null?L.outputColorSpace:u.isXRRenderTarget===!0?u.texture.colorSpace:yi,He=(Q.isMeshStandardMaterial?ue:ee).get(Q.envMap||ze),ut=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),nt=!!Z.morphAttributes.position,Vt=!!Z.morphAttributes.normal,Bt=!!Z.morphAttributes.color;let $t=gi;Q.toneMapped&&(u===null||u.isXRRenderTarget===!0)&&($t=L.toneMapping);const Pr=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Dt=Pr!==void 0?Pr.length:0,rt=U.get(Q),kn=x.state.lights;if(ae===!0&&(ye===!0||C!==R)){const ir=C===R&&Q.id===re;Ue.setState(Q,C,ir)}let Qi=!1;Q.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==kn.state.version||rt.outputColorSpace!==Ve||q.isBatchedMesh&&rt.batching===!1||!q.isBatchedMesh&&rt.batching===!0||q.isInstancedMesh&&rt.instancing===!1||!q.isInstancedMesh&&rt.instancing===!0||q.isSkinnedMesh&&rt.skinning===!1||!q.isSkinnedMesh&&rt.skinning===!0||q.isInstancedMesh&&rt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&rt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&rt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&rt.instancingMorph===!1&&q.morphTexture!==null||rt.envMap!==He||Q.fog===!0&&rt.fog!==Ee||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ue.numPlanes||rt.numIntersection!==Ue.numIntersection)||rt.vertexAlphas!==ut||rt.vertexTangents!==it||rt.morphTargets!==nt||rt.morphNormals!==Vt||rt.morphColors!==Bt||rt.toneMapping!==$t||rt.morphTargetsCount!==Dt)&&(Qi=!0):(Qi=!0,rt.__version=Q.version);let Wr=rt.currentProgram;Qi===!0&&(Wr=zn(Q,G,q));let Yt=!1,Er=!1,Li=!1;const Xt=Wr.getUniforms(),jr=rt.uniforms;if(Xe.useProgram(Wr.program)&&(Yt=!0,Er=!0,Li=!0),Q.id!==re&&(re=Q.id,Er=!0),Yt||R!==C){Xt.setValue(K,"projectionMatrix",C.projectionMatrix),Xt.setValue(K,"viewMatrix",C.matrixWorldInverse);const ir=Xt.map.cameraPosition;ir!==void 0&&ir.setValue(K,$e.setFromMatrixPosition(C.matrixWorld)),Nt.logarithmicDepthBuffer&&Xt.setValue(K,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Xt.setValue(K,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Er=!0,Li=!0)}if(q.isSkinnedMesh){Xt.setOptional(K,q,"bindMatrix"),Xt.setOptional(K,q,"bindMatrixInverse");const ir=q.skeleton;ir&&(ir.boneTexture===null&&ir.computeBoneTexture(),Xt.setValue(K,"boneTexture",ir.boneTexture,A))}q.isBatchedMesh&&(Xt.setOptional(K,q,"batchingTexture"),Xt.setValue(K,"batchingTexture",q._matricesTexture,A));const en=Z.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&De.update(q,Z,Wr),(Er||rt.receiveShadow!==q.receiveShadow)&&(rt.receiveShadow=q.receiveShadow,Xt.setValue(K,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(jr.envMap.value=He,jr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(jr.envMapIntensity.value=G.environmentIntensity),Er&&(Xt.setValue(K,"toneMappingExposure",L.toneMappingExposure),rt.needsLights&&Hs(jr,Li),Ee&&Q.fog===!0&&ce.refreshFogUniforms(jr,Ee),ce.refreshMaterialUniforms(jr,Q,_e,ge,x.state.transmissionRenderTarget),Za.upload(K,go(rt),jr,A)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Za.upload(K,go(rt),jr,A),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Xt.setValue(K,"center",q.center),Xt.setValue(K,"modelViewMatrix",q.modelViewMatrix),Xt.setValue(K,"normalMatrix",q.normalMatrix),Xt.setValue(K,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ir=Q.uniformsGroups;for(let Pi=0,_o=ir.length;Pi<_o;Pi++){const xo=ir[Pi];Lt.update(xo,Wr),Lt.bind(xo,Wr)}}return Wr}function Hs(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function vo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return u},this.setRenderTargetTextures=function(C,G,Z){U.get(C.texture).__webglTexture=G,U.get(C.depthTexture).__webglTexture=Z;const Q=U.get(C);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const Z=U.get(C);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,Z=0){u=C,j=G,k=Z;let Q=!0,q=null,Ee=!1,ze=!1;if(C){const Ve=U.get(C);Ve.__useDefaultFramebuffer!==void 0?(Xe.bindFramebuffer(K.FRAMEBUFFER,null),Q=!1):Ve.__webglFramebuffer===void 0?A.setupRenderTarget(C):Ve.__hasExternalTextures&&A.rebindTextures(C,U.get(C.texture).__webglTexture,U.get(C.depthTexture).__webglTexture);const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ze=!0);const ut=U.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ut[G])?q=ut[G][Z]:q=ut[G],Ee=!0):C.samples>0&&A.useMultisampledRTT(C)===!1?q=U.get(C).__webglMultisampledFramebuffer:Array.isArray(ut)?q=ut[Z]:q=ut,T.copy(C.viewport),W.copy(C.scissor),ie=C.scissorTest}else T.copy(Me).multiplyScalar(_e).floor(),W.copy(je).multiplyScalar(_e).floor(),ie=st;if(Xe.bindFramebuffer(K.FRAMEBUFFER,q)&&Q&&Xe.drawBuffers(C,q),Xe.viewport(T),Xe.scissor(W),Xe.setScissorTest(ie),Ee){const Ve=U.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ve.__webglTexture,Z)}else if(ze){const Ve=U.get(C.texture),He=G||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ve.__webglTexture,Z||0,He)}re=-1},this.readRenderTargetPixels=function(C,G,Z,Q,q,Ee,ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=U.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){Xe.bindFramebuffer(K.FRAMEBUFFER,Ve);try{const He=C.texture,ut=He.format,it=He.type;if(ut!==Ir&&ht.convert(ut)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const nt=it===Sa&&(Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float"));if(it!==vi&&ht.convert(it)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&it!==_i&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Q&&Z>=0&&Z<=C.height-q&&K.readPixels(G,Z,Q,q,ht.convert(ut),ht.convert(it),Ee)}finally{const He=u!==null?U.get(u).__webglFramebuffer:null;Xe.bindFramebuffer(K.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(C,G,Z=0){const Q=Math.pow(2,-Z),q=Math.floor(G.image.width*Q),Ee=Math.floor(G.image.height*Q);A.setTexture2D(G,0),K.copyTexSubImage2D(K.TEXTURE_2D,Z,0,0,C.x,C.y,q,Ee),Xe.unbindTexture()},this.copyTextureToTexture=function(C,G,Z,Q=0){const q=G.image.width,Ee=G.image.height,ze=ht.convert(Z.format),Ve=ht.convert(Z.type);A.setTexture2D(Z,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Z.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Q,C.x,C.y,q,Ee,ze,Ve,G.image.data):G.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Q,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,ze,G.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,Q,C.x,C.y,ze,Ve,G.image),Q===0&&Z.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(C,G,Z,Q,q=0){const Ee=Math.round(C.max.x-C.min.x),ze=Math.round(C.max.y-C.min.y),Ve=C.max.z-C.min.z+1,He=ht.convert(Q.format),ut=ht.convert(Q.type);let it;if(Q.isData3DTexture)A.setTexture3D(Q,0),it=K.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)A.setTexture2DArray(Q,0),it=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Q.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,Q.unpackAlignment);const nt=K.getParameter(K.UNPACK_ROW_LENGTH),Vt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Bt=K.getParameter(K.UNPACK_SKIP_PIXELS),$t=K.getParameter(K.UNPACK_SKIP_ROWS),Pr=K.getParameter(K.UNPACK_SKIP_IMAGES),Dt=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Dt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Dt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,C.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,C.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?K.texSubImage3D(it,q,G.x,G.y,G.z,Ee,ze,Ve,He,ut,Dt.data):Q.isCompressedArrayTexture?K.compressedTexSubImage3D(it,q,G.x,G.y,G.z,Ee,ze,Ve,He,Dt.data):K.texSubImage3D(it,q,G.x,G.y,G.z,Ee,ze,Ve,He,ut,Dt),K.pixelStorei(K.UNPACK_ROW_LENGTH,nt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Vt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Bt),K.pixelStorei(K.UNPACK_SKIP_ROWS,$t),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Pr),q===0&&Q.generateMipmaps&&K.generateMipmap(it),Xe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),Xe.unbindTexture()},this.resetState=function(){j=0,k=0,u=null,Xe.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bo?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Ea?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jv extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $a extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const au=new V,ou=new V,su=new It,vs=new Zo,Qa=new Zn;class qv extends zt{constructor(e=new Lr,t=new $a){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,o=t.count;n<o;n++)au.fromBufferAttribute(t,n-1),ou.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=au.distanceTo(ou);e.setAttribute("lineDistance",new tr(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,o=e.params.Line.threshold,l=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Qa.copy(r.boundingSphere),Qa.applyMatrix4(n),Qa.radius+=o,e.ray.intersectsSphere(Qa)===!1)return;su.copy(n).invert(),vs.copy(e.ray).applyMatrix4(su);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,p=new V,f=new V,g=new V,_=new V,y=this.isLineSegments?2:1,E=r.index,b=r.attributes.position;if(E!==null){const x=Math.max(0,l.start),v=Math.min(E.count,l.start+l.count);for(let O=x,L=v-1;O<L;O+=y){const B=E.getX(O),j=E.getX(O+1);if(p.fromBufferAttribute(b,B),f.fromBufferAttribute(b,j),vs.distanceSqToSegment(p,f,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(_);k<e.near||k>e.far||t.push({distance:k,point:g.clone().applyMatrix4(this.matrixWorld),index:O,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,l.start),v=Math.min(b.count,l.start+l.count);for(let O=x,L=v-1;O<L;O+=y){if(p.fromBufferAttribute(b,O),f.fromBufferAttribute(b,O+1),vs.distanceSqToSegment(p,f,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(_);B<e.near||B>e.far||t.push({distance:B,point:g.clone().applyMatrix4(this.matrixWorld),index:O,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,o=r.length;n<o;n++){const l=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=n}}}}}const lu=new V,cu=new V;class uu extends qv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,o=t.count;n<o;n+=2)lu.fromBufferAttribute(t,n),cu.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+lu.distanceTo(cu);e.setAttribute("lineDistance",new tr(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ia extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hu=new It,_s=new Zo,eo=new Zn,to=new V;class xs extends zt{constructor(e=new Lr,t=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,o=e.params.Points.threshold,l=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),eo.copy(r.boundingSphere),eo.applyMatrix4(n),eo.radius+=o,e.ray.intersectsSphere(eo)===!1)return;hu.copy(n).invert(),_s.copy(e.ray).applyMatrix4(hu);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,p=r.index,f=r.attributes.position;if(p!==null){const g=Math.max(0,l.start),_=Math.min(p.count,l.start+l.count);for(let y=g,E=_;y<E;y++){const b=p.getX(y);to.fromBufferAttribute(f,b),du(to,b,d,n,e,t,this)}}else{const g=Math.max(0,l.start),_=Math.min(f.count,l.start+l.count);for(let y=g,E=_;y<E;y++)to.fromBufferAttribute(f,y),du(to,y,d,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,o=r.length;n<o;n++){const l=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=n}}}}}function du(i,e,t,r,n,o,l){const c=_s.distanceSqToPoint(i);if(c<t){const d=new V;_s.closestPointToPoint(i,d),d.applyMatrix4(r);const p=n.ray.origin.distanceTo(d);if(p<n.near||p>n.far)return;o.push({distance:p,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,object:l})}}class pu extends oi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new vt(16777215),this.specular=new vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ro={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Xv{constructor(e,t,r){const n=this;let o=!1,l=0,c=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(f){c++,o===!1&&n.onStart!==void 0&&n.onStart(f,l,c),o=!0},this.itemEnd=function(f){l++,n.onProgress!==void 0&&n.onProgress(f,l,c),l===c&&(o=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(f){n.onError!==void 0&&n.onError(f)},this.resolveURL=function(f){return d?d(f):f},this.setURLModifier=function(f){return d=f,this},this.addHandler=function(f,g){return p.push(f,g),this},this.removeHandler=function(f){const g=p.indexOf(f);return g!==-1&&p.splice(g,2),this},this.getHandler=function(f){for(let g=0,_=p.length;g<_;g+=2){const y=p[g],E=p[g+1];if(y.global&&(y.lastIndex=0),y.test(f))return E}return null}}}const Yv=new Xv;class In{constructor(e){this.manager=e!==void 0?e:Yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,o){r.load(e,n,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}In.DEFAULT_MATERIAL_NAME="__DEFAULT";const si={};class Kv extends Error{constructor(e,t){super(e),this.response=t}}class fu extends In{constructor(e){super(e)}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=ro.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:r,onError:n});return}si[e]=[],si[e].push({onLoad:t,onProgress:r,onError:n});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,d=this.responseType;fetch(l).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const f=si[e],g=p.body.getReader(),_=p.headers.get("Content-Length")||p.headers.get("X-File-Size"),y=_?parseInt(_):0,E=y!==0;let b=0;const x=new ReadableStream({start(v){O();function O(){g.read().then(({done:L,value:B})=>{if(L)v.close();else{b+=B.byteLength;const j=new ProgressEvent("progress",{lengthComputable:E,loaded:b,total:y});for(let k=0,u=f.length;k<u;k++){const re=f[k];re.onProgress&&re.onProgress(j)}v.enqueue(B),O()}})}}});return new Response(x)}else throw new Kv(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(d){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return p.json();default:if(c===void 0)return p.text();{const f=/charset="?([^;"\s]*)"?/i.exec(c),g=f&&f[1]?f[1].toLowerCase():void 0,_=new TextDecoder(g);return p.arrayBuffer().then(y=>_.decode(y))}}}).then(p=>{ro.add(e,p);const f=si[e];delete si[e];for(let g=0,_=f.length;g<_;g++){const y=f[g];y.onLoad&&y.onLoad(p)}}).catch(p=>{const f=si[e];if(f===void 0)throw this.manager.itemError(e),p;delete si[e];for(let g=0,_=f.length;g<_;g++){const y=f[g];y.onError&&y.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jv extends In{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=ro.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l;const c=Yn("img");function d(){f(),ro.add(e,this),t&&t(this),o.manager.itemEnd(e)}function p(g){f(),n&&n(g),o.manager.itemError(e),o.manager.itemEnd(e)}function f(){c.removeEventListener("load",d,!1),c.removeEventListener("error",p,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),o.manager.itemStart(e),c.src=e,c}}class Zv extends In{constructor(e){super(e)}load(e,t,r,n){const o=new er,l=new Jv(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},r,n),o}}class mu extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ys=new It,gu=new V,vu=new V;class $v{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),ys.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ys),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qv extends $v{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class e0 extends mu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Qv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class t0 extends mu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let io;class _u{static getContext(){return io===void 0&&(io=new(window.AudioContext||window.webkitAudioContext)),io}static setContext(e){io=e}}class xu extends In{constructor(e){super(e)}load(e,t,r,n){const o=this,l=new fu(this.manager);l.setResponseType("arraybuffer"),l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(d){try{const p=d.slice(0);_u.getContext().decodeAudioData(p,function(f){t(f)}).catch(c)}catch(p){c(p)}},r,n);function c(d){n?n(d):console.error(d),o.manager.itemError(e)}}}class r0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yu(){return(typeof performance>"u"?Date:performance).now()}const Ji=new V,Mu=new mn,i0=new V,Zi=new V;class n0 extends zt{constructor(){super(),this.type="AudioListener",this.context=_u.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new r0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,r=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ji,Mu,i0),Zi.set(0,0,-1).applyQuaternion(Mu),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ji.x,n),t.positionY.linearRampToValueAtTime(Ji.y,n),t.positionZ.linearRampToValueAtTime(Ji.z,n),t.forwardX.linearRampToValueAtTime(Zi.x,n),t.forwardY.linearRampToValueAtTime(Zi.y,n),t.forwardZ.linearRampToValueAtTime(Zi.z,n),t.upX.linearRampToValueAtTime(r.x,n),t.upY.linearRampToValueAtTime(r.y,n),t.upZ.linearRampToValueAtTime(r.z,n)}else t.setPosition(Ji.x,Ji.y,Ji.z),t.setOrientation(Zi.x,Zi.y,Zi.z,r.x,r.y,r.z)}}class Su extends zt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);const Eu=new n0;function a0(i,e){const t=Math.ceil(i),r=Math.floor(e);return Math.floor(Math.random()*(r-t)+t)}function o0(){const i=a0(1,9);console.log(i);const e=new Su(Eu),t=new xu,r=`../assets/sounds/music/${i}.mp3`;t.load(r,n=>{e.setBuffer(n),e.setVolume(.1),e.setLoop(!0),e.play()})}function s0(i){const e=new Su(Eu),t=new xu,r=`../assets/sounds/sfx/${i}.mp3`;t.load(r,n=>{e.setBuffer(n),e.setVolume(1.5),e.play()})}const l0=document.getElementById("counter"),c0=document.getElementById("maxScore"),u0=localStorage.getItem("maxScoreFunWorld");class h0 extends hr{constructor(t,r,n,o,l,c){super(t,r,n,o,l);Sh(this,"isDead",!1);this.scene=c,this.isJumping=!1,this.duration=400,this.ScoreNow=0,this.counter=0}play(t,r){let n=!1;document.addEventListener("keydown",o=>{try{if(!n&&!this.isDead){n=!0,setTimeout(()=>{n=!1},this.duration);let l=o.code,c=0,d=0;switch(l){case"ArrowLeft":c=1,this.jump(c,d);break;case"ArrowRight":c=-1,this.jump(c,d);break;case"ArrowDown":this.targetZ!=0&&(d=-1,this.jump(c,d),this.counter--);break;case"ArrowUp":{d=1,this.jump(c,d),this.targetZ=this.posZ+d;let p=Oi(1,10);const f=p>=1&&p<=4?"field":p>=5&&p<=8?"road":"railroad",g=Math.random()<.5?"left":"right";new ol(f,g,this.targetZ+13,t,r),this.counter++,this.counter>this.ScoreNow&&(this.ScoreNow=this.counter),this.ScoreNow>=u0&&(c0.innerText="Max: "+this.ScoreNow),l0.innerText=this.ScoreNow;break}default:return}}}catch(l){console.log(l)}})}jump(t,r){let n=sl(this.model,this.scene).list_trees,o=new Or().setFromObject(this.model);const l=new V;o.getSize(l);const c=l.x,d=l.y,p=l.z;let f=new Or().setFromCenterAndSize(new V(this.posX+t,this.posY,this.posZ+r),new V(c-.5,d,p-.5)),g=!1;for(let _=0;_<n.length;_++){let y=n[_],E=new Or().setFromObject(y.model);f.intersectsBox(E)&&(g=!0)}g===!1?(this.targetX=this.posX+t,this.targetZ=this.posZ+r,s0("jump"),this.isJumping||(this.isJumping=!0,this.startTime=Date.now(),this.jumpStartPosY=this.model.position.y,this.animate()),this.model.lookAt(this.targetX,0,this.targetZ)):console.error("Con lon dam dau vao cay roi")}animate(){const t=Date.now()-this.startTime,r=Math.min(t/this.duration,1),n=this.jumpStartPosY+.75*Math.sin(Math.PI*r),o=this.posX+(this.targetX-this.posX)*r,l=this.posZ+(this.targetZ-this.posZ)*r;this.model.position.y=n,this.model.position.x=o,this.model.position.z=l,t<this.duration?requestAnimationFrame(()=>this.animate()):(this.isJumping=!1,this.model.position.y=this.jumpStartPosY,this.posX=Math.max(-10,Math.min(10,this.targetX)),this.posZ=this.targetZ)}}const d0=/^[og]\s*(.+)?/,p0=/^mtllib /,f0=/^usemtl /,m0=/^usemap /,Tu=/\s+/,bu=new V,Ms=new V,wu=new V,Au=new V,yr=new V,no=new vt;function g0(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const r=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,o){const l=this._finalize(!1);l&&(l.inherited||l.groupCount<=0)&&this.materials.splice(l.index,1);const c={index:this.materials.length,name:n||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:l!==void 0?l.smooth:this.smooth,groupStart:l!==void 0?l.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(d){const p={index:typeof d=="number"?d:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(c),c},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),n&&this.materials.length>1)for(let l=this.materials.length-1;l>=0;l--)this.materials[l].groupCount<=0&&this.materials.splice(l,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},r&&r.name&&typeof r.clone=="function"){const n=r.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/3)*3},parseNormalIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/3)*3},parseUVIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/2)*2},addVertex:function(e,t,r){const n=this.vertices,o=this.object.geometry.vertices;o.push(n[e+0],n[e+1],n[e+2]),o.push(n[t+0],n[t+1],n[t+2]),o.push(n[r+0],n[r+1],n[r+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,r){const n=this.normals,o=this.object.geometry.normals;o.push(n[e+0],n[e+1],n[e+2]),o.push(n[t+0],n[t+1],n[t+2]),o.push(n[r+0],n[r+1],n[r+2])},addFaceNormal:function(e,t,r){const n=this.vertices,o=this.object.geometry.normals;bu.fromArray(n,e),Ms.fromArray(n,t),wu.fromArray(n,r),yr.subVectors(wu,Ms),Au.subVectors(bu,Ms),yr.cross(Au),yr.normalize(),o.push(yr.x,yr.y,yr.z),o.push(yr.x,yr.y,yr.z),o.push(yr.x,yr.y,yr.z)},addColor:function(e,t,r){const n=this.colors,o=this.object.geometry.colors;n[e]!==void 0&&o.push(n[e+0],n[e+1],n[e+2]),n[t]!==void 0&&o.push(n[t+0],n[t+1],n[t+2]),n[r]!==void 0&&o.push(n[r+0],n[r+1],n[r+2])},addUV:function(e,t,r){const n=this.uvs,o=this.object.geometry.uvs;o.push(n[e+0],n[e+1]),o.push(n[t+0],n[t+1]),o.push(n[r+0],n[r+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,r,n,o,l,c,d,p){const f=this.vertices.length;let g=this.parseVertexIndex(e,f),_=this.parseVertexIndex(t,f),y=this.parseVertexIndex(r,f);if(this.addVertex(g,_,y),this.addColor(g,_,y),c!==void 0&&c!==""){const E=this.normals.length;g=this.parseNormalIndex(c,E),_=this.parseNormalIndex(d,E),y=this.parseNormalIndex(p,E),this.addNormal(g,_,y)}else this.addFaceNormal(g,_,y);if(n!==void 0&&n!==""){const E=this.uvs.length;g=this.parseUVIndex(n,E),_=this.parseUVIndex(o,E),y=this.parseUVIndex(l,E),this.addUV(g,_,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let r=0,n=e.length;r<n;r++){const o=this.parseVertexIndex(e[r],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const r=this.vertices.length,n=this.uvs.length;for(let o=0,l=e.length;o<l;o++)this.addVertexLine(this.parseVertexIndex(e[o],r));for(let o=0,l=t.length;o<l;o++)this.addUVLine(this.parseUVIndex(t[o],n))}};return i.startObject("",!1),i}class v0 extends In{constructor(e){super(e),this.materials=null}load(e,t,r,n){const o=this,l=new fu(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(o.parse(c))}catch(d){n?n(d):console.error(d),o.manager.itemError(e)}},r,n)}setMaterials(e){return this.materials=e,this}parse(e){const t=new g0;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const r=e.split(`
`);let n=[];for(let l=0,c=r.length;l<c;l++){const d=r[l].trimStart();if(d.length===0)continue;const p=d.charAt(0);if(p!=="#")if(p==="v"){const f=d.split(Tu);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(no.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),t.colors.push(no.r,no.g,no.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(p==="f"){const f=d.slice(1).trim().split(Tu),g=[];for(let y=0,E=f.length;y<E;y++){const b=f[y];if(b.length>0){const x=b.split("/");g.push(x)}}const _=g[0];for(let y=1,E=g.length-1;y<E;y++){const b=g[y],x=g[y+1];t.addFace(_[0],b[0],x[0],_[1],b[1],x[1],_[2],b[2],x[2])}}else if(p==="l"){const f=d.substring(1).trim().split(" ");let g=[];const _=[];if(d.indexOf("/")===-1)g=f;else for(let y=0,E=f.length;y<E;y++){const b=f[y].split("/");b[0]!==""&&g.push(b[0]),b[1]!==""&&_.push(b[1])}t.addLineGeometry(g,_)}else if(p==="p"){const f=d.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((n=d0.exec(d))!==null){const f=(" "+n[0].slice(1).trim()).slice(1);t.startObject(f)}else if(f0.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(p0.test(d))t.materialLibraries.push(d.substring(7).trim());else if(m0.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(n=d.split(" "),n.length>1){const g=n[1].trim().toLowerCase();t.object.smooth=g!=="0"&&g!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const o=new ra;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0))for(let l=0,c=t.objects.length;l<c;l++){const d=t.objects[l],p=d.geometry,f=d.materials,g=p.type==="Line",_=p.type==="Points";let y=!1;if(p.vertices.length===0)continue;const E=new Lr;E.setAttribute("position",new tr(p.vertices,3)),p.normals.length>0&&E.setAttribute("normal",new tr(p.normals,3)),p.colors.length>0&&(y=!0,E.setAttribute("color",new tr(p.colors,3))),p.hasUVIndices===!0&&E.setAttribute("uv",new tr(p.uvs,2));const b=[];for(let v=0,O=f.length;v<O;v++){const L=f[v],B=L.name+"_"+L.smooth+"_"+y;let j=t.materials[B];if(this.materials!==null){if(j=this.materials.create(L.name),g&&j&&!(j instanceof $a)){const k=new $a;oi.prototype.copy.call(k,j),k.color.copy(j.color),j=k}else if(_&&j&&!(j instanceof ia)){const k=new ia({size:10,sizeAttenuation:!1});oi.prototype.copy.call(k,j),k.color.copy(j.color),k.map=j.map,j=k}}j===void 0&&(g?j=new $a:_?j=new ia({size:1,sizeAttenuation:!1}):j=new pu,j.name=L.name,j.flatShading=!L.smooth,j.vertexColors=y,t.materials[B]=j),b.push(j)}let x;if(b.length>1){for(let v=0,O=f.length;v<O;v++){const L=f[v];E.addGroup(L.groupStart,L.groupCount,v)}g?x=new uu(E,b):_?x=new xs(E,b):x=new _r(E,b)}else g?x=new uu(E,b[0]):_?x=new xs(E,b[0]):x=new _r(E,b[0]);x.name=d.name,o.add(x)}else if(t.vertices.length>0){const l=new ia({size:1,sizeAttenuation:!1}),c=new Lr;c.setAttribute("position",new tr(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new tr(t.colors,3)),l.vertexColors=!0);const d=new xs(c,l);o.add(d)}return o}}async function _0(i){return new Promise((e,t)=>{const r=new v0,n=new Zv;r.load(i[0],o=>{n.load(i[1],l=>{o.traverse(c=>{if(c instanceof _r){const d=new pu({map:l});c.material=d,c.castShadow=!0,c.receiveShadow=!0}}),e(o)},void 0,l=>{t(l)})},void 0,o=>{t(o)})})}async function x0(i){try{const e=[];for(const t of i){const r=await _0(t.path),n=new Or().setFromObject(r),o=new V;n.getSize(o);let l=0;t.type[1]==="land"||t.type[1]==="road"||t.type[1]==="car"?l=1/Math.min(o.x,o.z):l=1/Math.max(o.x,o.z),r.scale.set(l,l,l),e.push({type:t.type[0],model:r})}return e}catch(e){return console.error("L\u1ED7i khi load model:",e),[]}}function Ru(i,e){return function(){return i.apply(e,arguments)}}const{toString:y0}=Object.prototype,{getPrototypeOf:Ss}=Object,ao=(i=>e=>{const t=y0.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Hr=i=>(i=i.toLowerCase(),e=>ao(e)===i),oo=i=>e=>typeof e===i,{isArray:Dn}=Array,na=oo("undefined");function M0(i){return i!==null&&!na(i)&&i.constructor!==null&&!na(i.constructor)&&Mr(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Cu=Hr("ArrayBuffer");function S0(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&Cu(i.buffer),e}const E0=oo("string"),Mr=oo("function"),Lu=oo("number"),so=i=>i!==null&&typeof i=="object",T0=i=>i===!0||i===!1,lo=i=>{if(ao(i)!=="object")return!1;const e=Ss(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},b0=Hr("Date"),w0=Hr("File"),A0=Hr("Blob"),R0=Hr("FileList"),C0=i=>so(i)&&Mr(i.pipe),L0=i=>{let e;return i&&(typeof FormData=="function"&&i instanceof FormData||Mr(i.append)&&((e=ao(i))==="formdata"||e==="object"&&Mr(i.toString)&&i.toString()==="[object FormData]"))},P0=Hr("URLSearchParams"),U0=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function aa(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let r,n;if(typeof i!="object"&&(i=[i]),Dn(i))for(r=0,n=i.length;r<n;r++)e.call(null,i[r],r,i);else{const o=t?Object.getOwnPropertyNames(i):Object.keys(i),l=o.length;let c;for(r=0;r<l;r++)c=o[r],e.call(null,i[c],c,i)}}function Pu(i,e){e=e.toLowerCase();const t=Object.keys(i);let r=t.length,n;for(;r-- >0;)if(n=t[r],e===n.toLowerCase())return n;return null}const Uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Nu=i=>!na(i)&&i!==Uu;function Es(){const{caseless:i}=Nu(this)&&this||{},e={},t=(r,n)=>{const o=i&&Pu(e,n)||n;lo(e[o])&&lo(r)?e[o]=Es(e[o],r):lo(r)?e[o]=Es({},r):Dn(r)?e[o]=r.slice():e[o]=r};for(let r=0,n=arguments.length;r<n;r++)arguments[r]&&aa(arguments[r],t);return e}const N0=(i,e,t,{allOwnKeys:r}={})=>(aa(e,(n,o)=>{t&&Mr(n)?i[o]=Ru(n,t):i[o]=n},{allOwnKeys:r}),i),I0=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),D0=(i,e,t,r)=>{i.prototype=Object.create(e.prototype,r),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:e.prototype}),t&&Object.assign(i.prototype,t)},O0=(i,e,t,r)=>{let n,o,l;const c={};if(e=e||{},i==null)return e;do{for(n=Object.getOwnPropertyNames(i),o=n.length;o-- >0;)l=n[o],(!r||r(l,i,e))&&!c[l]&&(e[l]=i[l],c[l]=!0);i=t!==!1&&Ss(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},F0=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const r=i.indexOf(e,t);return r!==-1&&r===t},B0=i=>{if(!i)return null;if(Dn(i))return i;let e=i.length;if(!Lu(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},z0=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&Ss(Uint8Array)),k0=(i,e)=>{const t=(i&&i[Symbol.iterator]).call(i);let r;for(;(r=t.next())&&!r.done;){const n=r.value;e.call(i,n[0],n[1])}},H0=(i,e)=>{let t;const r=[];for(;(t=i.exec(e))!==null;)r.push(t);return r},G0=Hr("HTMLFormElement"),V0=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),Iu=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),W0=Hr("RegExp"),Du=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),r={};aa(t,(n,o)=>{let l;(l=e(n,o,i))!==!1&&(r[o]=l||n)}),Object.defineProperties(i,r)},j0=i=>{Du(i,(e,t)=>{if(Mr(i)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=i[t];if(Mr(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},q0=(i,e)=>{const t={},r=n=>{n.forEach(o=>{t[o]=!0})};return Dn(i)?r(i):r(String(i).split(e)),t},X0=()=>{},Y0=(i,e)=>(i=+i,Number.isFinite(i)?i:e),Ts="abcdefghijklmnopqrstuvwxyz",Ou="0123456789",Fu={DIGIT:Ou,ALPHA:Ts,ALPHA_DIGIT:Ts+Ts.toUpperCase()+Ou},K0=(i=16,e=Fu.ALPHA_DIGIT)=>{let t="";const{length:r}=e;for(;i--;)t+=e[Math.random()*r|0];return t};function J0(i){return!!(i&&Mr(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const Z0=i=>{const e=new Array(10),t=(r,n)=>{if(so(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[n]=r;const o=Dn(r)?[]:{};return aa(r,(l,c)=>{const d=t(l,n+1);!na(d)&&(o[c]=d)}),e[n]=void 0,o}}return r};return t(i,0)},$0=Hr("AsyncFunction"),Q0=i=>i&&(so(i)||Mr(i))&&Mr(i.then)&&Mr(i.catch),le={isArray:Dn,isArrayBuffer:Cu,isBuffer:M0,isFormData:L0,isArrayBufferView:S0,isString:E0,isNumber:Lu,isBoolean:T0,isObject:so,isPlainObject:lo,isUndefined:na,isDate:b0,isFile:w0,isBlob:A0,isRegExp:W0,isFunction:Mr,isStream:C0,isURLSearchParams:P0,isTypedArray:z0,isFileList:R0,forEach:aa,merge:Es,extend:N0,trim:U0,stripBOM:I0,inherits:D0,toFlatObject:O0,kindOf:ao,kindOfTest:Hr,endsWith:F0,toArray:B0,forEachEntry:k0,matchAll:H0,isHTMLForm:G0,hasOwnProperty:Iu,hasOwnProp:Iu,reduceDescriptors:Du,freezeMethods:j0,toObjectSet:q0,toCamelCase:V0,noop:X0,toFiniteNumber:Y0,findKey:Pu,global:Uu,isContextDefined:Nu,ALPHABET:Fu,generateString:K0,isSpecCompliantForm:J0,toJSONObject:Z0,isAsyncFn:$0,isThenable:Q0};function xt(i,e,t,r,n){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),n&&(this.response=n)}le.inherits(xt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:le.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Bu=xt.prototype,zu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{zu[i]={value:i}}),Object.defineProperties(xt,zu),Object.defineProperty(Bu,"isAxiosError",{value:!0}),xt.from=(i,e,t,r,n,o)=>{const l=Object.create(Bu);return le.toFlatObject(i,l,function(c){return c!==Error.prototype},c=>c!=="isAxiosError"),xt.call(l,i.message,e,t,r,n),l.cause=i,l.name=i.name,o&&Object.assign(l,o),l};const e_=null;function bs(i){return le.isPlainObject(i)||le.isArray(i)}function ku(i){return le.endsWith(i,"[]")?i.slice(0,-2):i}function Hu(i,e,t){return i?i.concat(e).map(function(r,n){return r=ku(r),!t&&n?"["+r+"]":r}).join(t?".":""):e}function t_(i){return le.isArray(i)&&!i.some(bs)}const r_=le.toFlatObject(le,{},null,function(i){return/^is[A-Z]/.test(i)});function co(i,e,t){if(!le.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=le.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,E){return!le.isUndefined(E[y])});const r=t.metaTokens,n=t.visitor||p,o=t.dots,l=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&le.isSpecCompliantForm(e);if(!le.isFunction(n))throw new TypeError("visitor must be a function");function d(y){if(y===null)return"";if(le.isDate(y))return y.toISOString();if(!c&&le.isBlob(y))throw new xt("Blob is not supported. Use a Buffer instead.");return le.isArrayBuffer(y)||le.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function p(y,E,b){let x=y;if(y&&!b&&typeof y=="object"){if(le.endsWith(E,"{}"))E=r?E:E.slice(0,-2),y=JSON.stringify(y);else if(le.isArray(y)&&t_(y)||(le.isFileList(y)||le.endsWith(E,"[]"))&&(x=le.toArray(y)))return E=ku(E),x.forEach(function(v,O){!(le.isUndefined(v)||v===null)&&e.append(l===!0?Hu([E],O,o):l===null?E:E+"[]",d(v))}),!1}return bs(y)?!0:(e.append(Hu(b,E,o),d(y)),!1)}const f=[],g=Object.assign(r_,{defaultVisitor:p,convertValue:d,isVisitable:bs});function _(y,E){if(!le.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+E.join("."));f.push(y),le.forEach(y,function(b,x){(!(le.isUndefined(b)||b===null)&&n.call(e,b,le.isString(x)?x.trim():x,E,g))===!0&&_(b,E?E.concat(x):[x])}),f.pop()}}if(!le.isObject(i))throw new TypeError("data must be an object");return _(i),e}function Gu(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}function ws(i,e){this._pairs=[],i&&co(i,this,e)}const Vu=ws.prototype;Vu.append=function(i,e){this._pairs.push([i,e])},Vu.toString=function(i){const e=i?function(t){return i.call(this,t,Gu)}:Gu;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};function i_(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Wu(i,e,t){if(!e)return i;const r=t&&t.encode||i_,n=t&&t.serialize;let o;if(n?o=n(e,t):o=le.isURLSearchParams(e)?e.toString():new ws(e,t).toString(r),o){const l=i.indexOf("#");l!==-1&&(i=i.slice(0,l)),i+=(i.indexOf("?")===-1?"?":"&")+o}return i}class ju{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){le.forEach(this.handlers,function(t){t!==null&&e(t)})}}const qu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},n_=typeof URLSearchParams<"u"?URLSearchParams:ws,a_=typeof FormData<"u"?FormData:null,o_=typeof Blob<"u"?Blob:null,s_={isBrowser:!0,classes:{URLSearchParams:n_,FormData:a_,Blob:o_},protocols:["http","https","file","blob","url","data"]},Xu=typeof window<"u"&&typeof document<"u",l_=(i=>Xu&&["ReactNative","NativeScript","NS"].indexOf(i)<0)(typeof navigator<"u"&&navigator.product),c_=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",u_=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xu,hasStandardBrowserEnv:l_,hasStandardBrowserWebWorkerEnv:c_},Symbol.toStringTag,{value:"Module"})),Gr={...u_,...s_};function h_(i,e){return co(i,new Gr.classes.URLSearchParams,Object.assign({visitor:function(t,r,n,o){return Gr.isNode&&le.isBuffer(t)?(this.append(r,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function d_(i){return le.matchAll(/\w+|\[(\w*)]/g,i).map(e=>e[0]==="[]"?"":e[1]||e[0])}function p_(i){const e={},t=Object.keys(i);let r;const n=t.length;let o;for(r=0;r<n;r++)o=t[r],e[o]=i[o];return e}function Yu(i){function e(t,r,n,o){let l=t[o++];if(l==="__proto__")return!0;const c=Number.isFinite(+l),d=o>=t.length;return l=!l&&le.isArray(n)?n.length:l,d?(le.hasOwnProp(n,l)?n[l]=[n[l],r]:n[l]=r,!c):((!n[l]||!le.isObject(n[l]))&&(n[l]=[]),e(t,r,n[l],o)&&le.isArray(n[l])&&(n[l]=p_(n[l])),!c)}if(le.isFormData(i)&&le.isFunction(i.entries)){const t={};return le.forEachEntry(i,(r,n)=>{e(d_(r),n,t,0)}),t}return null}function f_(i,e,t){if(le.isString(i))try{return(e||JSON.parse)(i),le.trim(i)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(i)}const As={transitional:qu,adapter:["xhr","http"],transformRequest:[function(i,e){const t=e.getContentType()||"",r=t.indexOf("application/json")>-1,n=le.isObject(i);if(n&&le.isHTMLForm(i)&&(i=new FormData(i)),le.isFormData(i))return r?JSON.stringify(Yu(i)):i;if(le.isArrayBuffer(i)||le.isBuffer(i)||le.isStream(i)||le.isFile(i)||le.isBlob(i))return i;if(le.isArrayBufferView(i))return i.buffer;if(le.isURLSearchParams(i))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let o;if(n){if(t.indexOf("application/x-www-form-urlencoded")>-1)return h_(i,this.formSerializer).toString();if((o=le.isFileList(i))||t.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return co(o?{"files[]":i}:i,l&&new l,this.formSerializer)}}return n||r?(e.setContentType("application/json",!1),f_(i)):i}],transformResponse:[function(i){const e=this.transitional||As.transitional,t=e&&e.forcedJSONParsing,r=this.responseType==="json";if(i&&le.isString(i)&&(t&&!this.responseType||r)){const n=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(i)}catch(o){if(n)throw o.name==="SyntaxError"?xt.from(o,xt.ERR_BAD_RESPONSE,this,null,this.response):o}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gr.classes.FormData,Blob:Gr.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};le.forEach(["delete","get","head","post","put","patch"],i=>{As.headers[i]={}});const Rs=As,m_=le.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),g_=i=>{const e={};let t,r,n;return i&&i.split(`
`).forEach(function(o){n=o.indexOf(":"),t=o.substring(0,n).trim().toLowerCase(),r=o.substring(n+1).trim(),!(!t||e[t]&&m_[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},Ku=Symbol("internals");function oa(i){return i&&String(i).trim().toLowerCase()}function uo(i){return i===!1||i==null?i:le.isArray(i)?i.map(uo):String(i)}function v_(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(i);)e[r[1]]=r[2];return e}const __=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Cs(i,e,t,r,n){if(le.isFunction(r))return r.call(this,e,t);if(n&&(e=t),!!le.isString(e)){if(le.isString(r))return e.indexOf(r)!==-1;if(le.isRegExp(r))return r.test(e)}}function x_(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function y_(i,e){const t=le.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(i,r+t,{value:function(n,o,l){return this[r].call(this,e,n,o,l)},configurable:!0})})}class ho{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(c,d,p){const f=oa(d);if(!f)throw new Error("header name must be a non-empty string");const g=le.findKey(n,f);(!g||n[g]===void 0||p===!0||p===void 0&&n[g]!==!1)&&(n[g||d]=uo(c))}const l=(c,d)=>le.forEach(c,(p,f)=>o(p,f,d));return le.isPlainObject(e)||e instanceof this.constructor?l(e,t):le.isString(e)&&(e=e.trim())&&!__(e)?l(g_(e),t):e!=null&&o(t,e,r),this}get(e,t){if(e=oa(e),e){const r=le.findKey(this,e);if(r){const n=this[r];if(!t)return n;if(t===!0)return v_(n);if(le.isFunction(t))return t.call(this,n,r);if(le.isRegExp(t))return t.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=oa(e),e){const r=le.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||Cs(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let n=!1;function o(l){if(l=oa(l),l){const c=le.findKey(r,l);c&&(!t||Cs(r,r[c],c,t))&&(delete r[c],n=!0)}}return le.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];(!e||Cs(this,this[o],o,e,!0))&&(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return le.forEach(this,(n,o)=>{const l=le.findKey(r,o);if(l){t[l]=uo(n),delete t[o];return}const c=e?x_(o):String(o).trim();c!==o&&delete t[o],t[c]=uo(n),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return le.forEach(this,(r,n)=>{r!=null&&r!==!1&&(t[n]=e&&le.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(n=>r.set(n)),r}static accessor(e){const t=(this[Ku]=this[Ku]={accessors:{}}).accessors,r=this.prototype;function n(o){const l=oa(o);t[l]||(y_(r,o),t[l]=!0)}return le.isArray(e)?e.forEach(n):n(e),this}}ho.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),le.reduceDescriptors(ho.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(r){this[t]=r}}}),le.freezeMethods(ho);const li=ho;function Ls(i,e){const t=this||Rs,r=e||t,n=li.from(r.headers);let o=r.data;return le.forEach(i,function(l){o=l.call(t,o,n.normalize(),e?e.status:void 0)}),n.normalize(),o}function Ju(i){return!!(i&&i.__CANCEL__)}function sa(i,e,t){xt.call(this,i??"canceled",xt.ERR_CANCELED,e,t),this.name="CanceledError"}le.inherits(sa,xt,{__CANCEL__:!0});function M_(i,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?i(t):e(new xt("Request failed with status code "+t.status,[xt.ERR_BAD_REQUEST,xt.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const S_=Gr.hasStandardBrowserEnv?{write(i,e,t,r,n,o){const l=[i+"="+encodeURIComponent(e)];le.isNumber(t)&&l.push("expires="+new Date(t).toGMTString()),le.isString(r)&&l.push("path="+r),le.isString(n)&&l.push("domain="+n),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read(i){const e=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function E_(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function T_(i,e){return e?i.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):i}function Zu(i,e){return i&&!E_(e)?T_(i,e):e}const b_=Gr.hasStandardBrowserEnv?function(){const i=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let t;function r(n){let o=n;return i&&(e.setAttribute("href",o),o=e.href),e.setAttribute("href",o),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:e.pathname.charAt(0)==="/"?e.pathname:"/"+e.pathname}}return t=r(window.location.href),function(n){const o=le.isString(n)?r(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}();function w_(i){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return e&&e[1]||""}function A_(i,e){i=i||10;const t=new Array(i),r=new Array(i);let n=0,o=0,l;return e=e!==void 0?e:1e3,function(c){const d=Date.now(),p=r[o];l||(l=d),t[n]=c,r[n]=d;let f=o,g=0;for(;f!==n;)g+=t[f++],f=f%i;if(n=(n+1)%i,n===o&&(o=(o+1)%i),d-l<e)return;const _=p&&d-p;return _?Math.round(g*1e3/_):void 0}}function $u(i,e){let t=0;const r=A_(50,250);return n=>{const o=n.loaded,l=n.lengthComputable?n.total:void 0,c=o-t,d=r(c),p=o<=l;t=o;const f={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&p?(l-o)/d:void 0,event:n};f[e?"download":"upload"]=!0,i(f)}}const R_=typeof XMLHttpRequest<"u",C_=R_&&function(i){return new Promise(function(e,t){let r=i.data;const n=li.from(i.headers).normalize();let{responseType:o,withXSRFToken:l}=i,c;function d(){i.cancelToken&&i.cancelToken.unsubscribe(c),i.signal&&i.signal.removeEventListener("abort",c)}let p;if(le.isFormData(r)){if(Gr.hasStandardBrowserEnv||Gr.hasStandardBrowserWebWorkerEnv)n.setContentType(!1);else if((p=n.getContentType())!==!1){const[E,...b]=p?p.split(";").map(x=>x.trim()).filter(Boolean):[];n.setContentType([E||"multipart/form-data",...b].join("; "))}}let f=new XMLHttpRequest;if(i.auth){const E=i.auth.username||"",b=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";n.set("Authorization","Basic "+btoa(E+":"+b))}const g=Zu(i.baseURL,i.url);f.open(i.method.toUpperCase(),Wu(g,i.params,i.paramsSerializer),!0),f.timeout=i.timeout;function _(){if(!f)return;const E=li.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:E,config:i,request:f};M_(function(x){e(x),d()},function(x){t(x),d()},b),f=null}if("onloadend"in f?f.onloadend=_:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(_)},f.onabort=function(){f&&(t(new xt("Request aborted",xt.ECONNABORTED,i,f)),f=null)},f.onerror=function(){t(new xt("Network Error",xt.ERR_NETWORK,i,f)),f=null},f.ontimeout=function(){let E=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const b=i.transitional||qu;i.timeoutErrorMessage&&(E=i.timeoutErrorMessage),t(new xt(E,b.clarifyTimeoutError?xt.ETIMEDOUT:xt.ECONNABORTED,i,f)),f=null},Gr.hasStandardBrowserEnv&&(l&&le.isFunction(l)&&(l=l(i)),l||l!==!1&&b_(g))){const E=i.xsrfHeaderName&&i.xsrfCookieName&&S_.read(i.xsrfCookieName);E&&n.set(i.xsrfHeaderName,E)}r===void 0&&n.setContentType(null),"setRequestHeader"in f&&le.forEach(n.toJSON(),function(E,b){f.setRequestHeader(b,E)}),le.isUndefined(i.withCredentials)||(f.withCredentials=!!i.withCredentials),o&&o!=="json"&&(f.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&f.addEventListener("progress",$u(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",$u(i.onUploadProgress)),(i.cancelToken||i.signal)&&(c=E=>{f&&(t(!E||E.type?new sa(null,i,f):E),f.abort(),f=null)},i.cancelToken&&i.cancelToken.subscribe(c),i.signal&&(i.signal.aborted?c():i.signal.addEventListener("abort",c)));const y=w_(g);if(y&&Gr.protocols.indexOf(y)===-1){t(new xt("Unsupported protocol "+y+":",xt.ERR_BAD_REQUEST,i));return}f.send(r||null)})},Ps={http:e_,xhr:C_};le.forEach(Ps,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{value:e})}catch{}Object.defineProperty(i,"adapterName",{value:e})}});const Qu=i=>`- ${i}`,L_=i=>le.isFunction(i)||i===null||i===!1,eh={getAdapter:i=>{i=le.isArray(i)?i:[i];const{length:e}=i;let t,r;const n={};for(let o=0;o<e;o++){t=i[o];let l;if(r=t,!L_(t)&&(r=Ps[(l=String(t)).toLowerCase()],r===void 0))throw new xt(`Unknown adapter '${l}'`);if(r)break;n[l||"#"+o]=r}if(!r){const o=Object.entries(n).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=e?o.length>1?`since :
`+o.map(Qu).join(`
`):" "+Qu(o[0]):"as no adapter specified";throw new xt("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:Ps};function Us(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new sa(null,i)}function th(i){return Us(i),i.headers=li.from(i.headers),i.data=Ls.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),eh.getAdapter(i.adapter||Rs.adapter)(i).then(function(e){return Us(i),e.data=Ls.call(i,i.transformResponse,e),e.headers=li.from(e.headers),e},function(e){return Ju(e)||(Us(i),e&&e.response&&(e.response.data=Ls.call(i,i.transformResponse,e.response),e.response.headers=li.from(e.response.headers))),Promise.reject(e)})}const rh=i=>i instanceof li?{...i}:i;function On(i,e){e=e||{};const t={};function r(p,f,g){return le.isPlainObject(p)&&le.isPlainObject(f)?le.merge.call({caseless:g},p,f):le.isPlainObject(f)?le.merge({},f):le.isArray(f)?f.slice():f}function n(p,f,g){if(le.isUndefined(f)){if(!le.isUndefined(p))return r(void 0,p,g)}else return r(p,f,g)}function o(p,f){if(!le.isUndefined(f))return r(void 0,f)}function l(p,f){if(le.isUndefined(f)){if(!le.isUndefined(p))return r(void 0,p)}else return r(void 0,f)}function c(p,f,g){if(g in e)return r(p,f);if(g in i)return r(void 0,p)}const d={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c,headers:(p,f)=>n(rh(p),rh(f),!0)};return le.forEach(Object.keys(Object.assign({},i,e)),function(p){const f=d[p]||n,g=f(i[p],e[p],p);le.isUndefined(g)&&f!==c||(t[p]=g)}),t}const ih="1.6.8",Ns={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{Ns[i]=function(t){return typeof t===i||"a"+(e<1?"n ":" ")+i}});const nh={};Ns.transitional=function(i,e,t){function r(n,o){return"[Axios v"+ih+"] Transitional option '"+n+"'"+o+(t?". "+t:"")}return(n,o,l)=>{if(i===!1)throw new xt(r(o," has been removed"+(e?" in "+e:"")),xt.ERR_DEPRECATED);return e&&!nh[o]&&(nh[o]=!0,console.warn(r(o," has been deprecated since v"+e+" and will be removed in the near future"))),i?i(n,o,l):!0}};function P_(i,e,t){if(typeof i!="object")throw new xt("options must be an object",xt.ERR_BAD_OPTION_VALUE);const r=Object.keys(i);let n=r.length;for(;n-- >0;){const o=r[n],l=e[o];if(l){const c=i[o],d=c===void 0||l(c,o,i);if(d!==!0)throw new xt("option "+o+" must be "+d,xt.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new xt("Unknown option "+o,xt.ERR_BAD_OPTION)}}const Is={assertOptions:P_,validators:Ns},Ri=Is.validators;class po{constructor(e){this.defaults=e,this.interceptors={request:new ju,response:new ju}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let n;Error.captureStackTrace?Error.captureStackTrace(n={}):n=new Error;const o=n.stack?n.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=On(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;r!==void 0&&Is.assertOptions(r,{silentJSONParsing:Ri.transitional(Ri.boolean),forcedJSONParsing:Ri.transitional(Ri.boolean),clarifyTimeoutError:Ri.transitional(Ri.boolean)},!1),n!=null&&(le.isFunction(n)?t.paramsSerializer={serialize:n}:Is.assertOptions(n,{encode:Ri.function,serialize:Ri.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let l=o&&le.merge(o.common,o[t.method]);o&&le.forEach(["delete","get","head","post","put","patch","common"],E=>{delete o[E]}),t.headers=li.concat(l,o);const c=[];let d=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(t)===!1||(d=d&&E.synchronous,c.unshift(E.fulfilled,E.rejected))});const p=[];this.interceptors.response.forEach(function(E){p.push(E.fulfilled,E.rejected)});let f,g=0,_;if(!d){const E=[th.bind(this),void 0];for(E.unshift.apply(E,c),E.push.apply(E,p),_=E.length,f=Promise.resolve(t);g<_;)f=f.then(E[g++],E[g++]);return f}_=c.length;let y=t;for(g=0;g<_;){const E=c[g++],b=c[g++];try{y=E(y)}catch(x){b.call(this,x);break}}try{f=th.call(this,y)}catch(E){return Promise.reject(E)}for(g=0,_=p.length;g<_;)f=f.then(p[g++],p[g++]);return f}getUri(e){e=On(this.defaults,e);const t=Zu(e.baseURL,e.url);return Wu(t,e.params,e.paramsSerializer)}}le.forEach(["delete","get","head","options"],function(i){po.prototype[i]=function(e,t){return this.request(On(t||{},{method:i,url:e,data:(t||{}).data}))}}),le.forEach(["post","put","patch"],function(i){function e(t){return function(r,n,o){return this.request(On(o||{},{method:i,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}po.prototype[i]=e(),po.prototype[i+"Form"]=e(!0)});const fo=po;class Ds{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(n){t=n});const r=this;this.promise.then(n=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](n);r._listeners=null}),this.promise.then=n=>{let o;const l=new Promise(c=>{r.subscribe(c),o=c}).then(n);return l.cancel=function(){r.unsubscribe(o)},l},e(function(n,o,l){r.reason||(r.reason=new sa(n,o,l),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ds(function(t){e=t}),cancel:e}}}const U_=Ds;function N_(i){return function(e){return i.apply(null,e)}}function I_(i){return le.isObject(i)&&i.isAxiosError===!0}const Os={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Os).forEach(([i,e])=>{Os[e]=i});const D_=Os;function ah(i){const e=new fo(i),t=Ru(fo.prototype.request,e);return le.extend(t,fo.prototype,e,{allOwnKeys:!0}),le.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return ah(On(i,r))},t}const Ot=ah(Rs);Ot.Axios=fo,Ot.CanceledError=sa,Ot.CancelToken=U_,Ot.isCancel=Ju,Ot.VERSION=ih,Ot.toFormData=co,Ot.AxiosError=xt,Ot.Cancel=Ot.CanceledError,Ot.all=function(i){return Promise.all(i)},Ot.spread=N_,Ot.isAxiosError=I_,Ot.mergeConfig=On,Ot.AxiosHeaders=li,Ot.formToJSON=i=>Yu(le.isHTMLForm(i)?new FormData(i):i),Ot.getAdapter=eh.getAdapter,Ot.HttpStatusCode=D_,Ot.default=Ot;const Fs="https://funroad-server.onrender.com/api/user",O_=document.getElementById("see-rank"),F_=document.querySelector(".end-game button"),B_=document.getElementById("btn-close"),z_=document.getElementById("counter"),k_=document.getElementById("maxScore"),H_=document.querySelector(".end-game"),oh=document.querySelector(".rank-container"),Fn=document.querySelector("#start"),Bs=document.querySelector("#gameTitle");let zs=[],lr;const Bn=new jv,$i=new xr(45,window.innerWidth/window.innerHeight,.1,1e3);$i.position.set(-2,6,-4);const Ci=new Wv({alpha:!0,antialias:!0});Ci.setClearColor(13421772),Ci.shadowMap.enabled=!0,Ci.shadowMap.type=ul,Ci.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Ci.domElement);var cr=new e0(16777215,1);cr.position.set(-50,50,-50),cr.castShadow=!0,cr.intensity=5,cr.shadow.camera.far=100,cr.shadow.camera.left=-15,cr.shadow.camera.right=15,cr.shadow.camera.top=15,cr.shadow.camera.bottom=-15,Bn.add(cr);const G_=new t0(16777215,1);Bn.add(G_);const V_=[{path:["../assets/models/characters/chicken/0.obj","../assets/models/characters/chicken/0.png"],type:["chicken","player"]},{path:["../assets/models/characters/bacon/bacon.obj","../assets/models/characters/bacon/bacon.png"],type:["bacon","player"]},{path:["../assets/models/environment/grass/model.obj","../assets/models/environment/grass/light-grass.png"],type:["grass","land"]},{path:["../assets/models/environment/tree/0/0.obj","../assets/models/environment/tree/0/0.png"],type:["tree0","tree"]},{path:["../assets/models/environment/tree/1/0.obj","../assets/models/environment/tree/1/0.png"],type:["tree1","tree"]},{path:["../assets/models/environment/tree/2/0.obj","../assets/models/environment/tree/2/0.png"],type:["tree2","tree"]},{path:["../assets/models/environment/tree/3/0.obj","../assets/models/environment/tree/3/0.png"],type:["tree3","tree"]},{path:["../assets/models/environment/road/model.obj","../assets/models/environment/road/blank-texture.png"],type:["blank_road","road"]},{path:["../assets/models/environment/road/model.obj","../assets/models/environment/road/stripes-texture.png"],type:["stripe_road","road"]},{path:["../assets/models/environment/railroad/0.obj","../assets/models/environment/railroad/0.png"],type:["railroad","road"]},{path:["../assets/models/vehicles/orange_car/0.obj","../assets/models/vehicles/orange_car/0.png"],type:["orange_car","car"]},{path:["../assets/models/vehicles/blue_truck/0.obj","../assets/models/vehicles/blue_truck/0.png"],type:["blue_truck","car"]},{path:["../assets/models/vehicles/blue_car/0.obj","../assets/models/vehicles/blue_car/0.png"],type:["blue_car","car"]},{path:["../assets/models/vehicles/green_car/0.obj","../assets/models/vehicles/green_car/0.png"],type:["green_car","car"]},{path:["../assets/models/vehicles/police_car/0.obj","../assets/models/vehicles/police_car/0.png"],type:["police_car","car"]},{path:["../assets/models/vehicles/train/back/0.obj","../assets/models/vehicles/train/back/0.png"],type:["back_train","car"]},{path:["../assets/models/vehicles/train/front/0.obj","../assets/models/vehicles/train/front/0.png"],type:["front_train","car"]},{path:["../assets/models/vehicles/train/middle/0.obj","../assets/models/vehicles/train/middle/0.png"],type:["middle_train","car"]}],la=await x0(V_).catch(i=>{console.error("L\u1ED7i khi load model:",i)});function W_(){$i.aspect=window.innerWidth/window.innerHeight,$i.updateProjectionMatrix(),Ci.setSize(window.innerWidth,window.innerHeight),Ci.setPixelRatio(window.devicePixelRatio)}async function sh(){try{const i=await Ot.get(Fs);if(i.data.message==="OK"){const e=document.querySelector(".rank-container"),t=e.querySelector(".rank-header");t.innerHTML="";const r=document.createElement("div");r.classList.add("rank-header"),r.innerHTML=`
        <p>Rank</p>
        <p>Score</p>
      `,t.appendChild(r);const n=i.data.data.sort((o,l)=>l.score-o.score);for(let o=0;o<n.length;o++){const l=n[o],c=document.createElement("div");c.classList.add("rank-item"),c.innerHTML=`
          <p>${o+1}</p>
          <p>${l.name}</p>
          <p>${l.score}</p>
        `,e.appendChild(c)}}}catch(i){console.log(i)}}(async()=>{window.addEventListener("resize",W_),(!localStorage.getItem("maxScoreFunWorld")||localStorage.getItem(!1))&&localStorage.setItem("maxScoreFunWorld",0),sh(),k_.innerText="Max: "+localStorage.getItem("maxScoreFunWorld");const i=document.querySelector(".form");localStorage.getItem("name")?i.style.display="none":(Fn.style.display="none",document.querySelector(".submit").addEventListener("click",async()=>{const e=document.getElementById("name");if(!e.value.trim||e.value==""){bh.info("Please enter a name.");return}try{const t=e.value,r=await Ot.post(Fs,{name:t});if(console.log(r),!r.data.account){console.error("Error creating user:",r.data.message);return}localStorage.setItem("name",r.data.account.name),localStorage.setItem("userId",r.data.account._id),localStorage.setItem("maxScoreFunWorld",r.data.account.score),i.style.display="none",Fn.style.display="block"}catch(t){console.error("Error sending user name to API:",t)}})),j_()})(),J_();function j_(){la==null&&console.error("models null at main"),lr=new h0("chicken",la,0,0,0),Bn.add(lr.model),zs=sl(la,Bn).cars}const q_=1;function X_(){for(let i=0;i<zs.length;i++){const e=zs[i].model.position;if(lr.model.position.distanceTo(e)<q_){K_();return}}}function Y_(){let i=lr.model.position;cr.position.set(i.x-50,50,i.z-50),cr.shadow.camera.left=i.x-15,cr.shadow.camera.right=i.x+15,cr.shadow.camera.top=i.z+15,cr.shadow.camera.bottom=i.z-15}function K_(){H_.style.display="block",lr.isDead=!0}function lh(){requestAnimationFrame(lh),X_(),Y_(),la&&Ch();const i=new Or().setFromObject(lr.model),e=new V;i.getCenter(e),$i.position.set(e.x+3,e.y+10,e.z-6),$i.lookAt(e),Ci.render(Bn,$i)}lh();function J_(){F_.addEventListener("click",async function(){try{if(console.log(lr.ScoreNow),lr.ScoreNow>localStorage.getItem("maxScoreFunWorld")){localStorage.setItem("maxScoreFunWorld",lr.ScoreNow);const e={_id:localStorage.getItem("userId"),score:localStorage.getItem("maxScoreFunWorld")},t=await Ot.put(Fs,e);sh()}}catch(e){console.error("Error sending user name to API:",e)}const i=document.querySelector(".end-game");i.style.display="none",lr.setPosition(0,0,0),$i.position.set(4,12,-5),lr.counter=0,lr.isDead=!1,z_.innerText=lr.counter}),O_.addEventListener("click",function(){oh.style.display="block",Fn.style.display="none",Bs.style.display="none"}),B_.addEventListener("click",function(){oh.style.display="none",Fn.style.display="block",Bs.style.display="block"}),Fn.addEventListener("click",()=>{Fn.style.display="none",Bs.style.display="none",o0(),lr.play(la,Bn)})}})();
