function resizeIframe(e,t){if($("#iframe, .sizes").animate({width:e},500),1==t){var n=$("#input-resolution");n.prop("Counter",$("#iframe").width()+41).animate({Counter:e},{duration:500,easing:"swing",step:function(e){n.val(Math.ceil(e)+"px")}})}}function copyToClipboard(e){$(".codebox").select();var t=document.execCommand("copy"),n=t?"correctamente":"incorrectamente";alert("Copiado "+n)}$(function(){var e=$(document).width(),t=$(".codebox").val(),n=(e-990)/2-190,r=(e-990)/2-84;$(".sizes ul li").click(function(){var e=parseInt($(this).attr("data-size"),10);$(".sizes ul li.active").removeClass("active"),$(this).addClass("active"),resizeIframe(e,1)}),$("#input-resolution").on("change paste",function(){var e=$(this).val();resizeIframe(e,0)}),$(".menu-float").css("right",n),$(".button-arrow").css("right",r),$("#copy-content").click(function(){copyToClipboard(t)}),$("#picto-img").click(function(){$(".menu-dark").slideToggle(300),$(this).toggleClass("rotated-left rotated-right")}),$(".button-arrow").click(function(e){return e.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1})}),!function(){var e=null;!function(){function t(e){function t(){try{s.doScroll("left")}catch(e){return void a(t,50)}n("poll")}function n(t){"readystatechange"==t.type&&"complete"!=o.readyState||(("load"==t.type?r:o)[d](p+t.type,n,!1),l||!(l=!0))||e.call(r,t.type||t)}var i=o.addEventListener,l=!1,c=!0,u=i?"addEventListener":"attachEvent",d=i?"removeEventListener":"detachEvent",p=i?"":"on";if("complete"==o.readyState)e.call(r,"lazy");else{if(o.createEventObject&&s.doScroll){try{c=!r.frameElement}catch(f){}c&&t()}o[u](p+"DOMContentLoaded",n,!1),o[u](p+"readystatechange",n,!1),r[u](p+"load",n,!1)}}function n(){f&&t(function(){var e=m.length;v(e?function(){for(var t=0;e>t;++t)(function(e){a(function(){r.exports[m[e]].apply(r,arguments)},0)})(t)}:void 0)})}for(var r=window,a=r.setTimeout,o=document,s=o.documentElement,i=o.head||o.getElementsByTagName("head")[0]||s,l="",c=o.scripts,u=c.length;--u>=0;){var d=c[u],p=d.src.match(/^[^#?]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(p){l=p[1]||"",d.parentNode.removeChild(d);break}}var f=!0,h=[],g=[],m=[];for(l.replace(/[&?]([^&=]+)=([^&]+)/g,function(e,t,n){n=decodeURIComponent(n),t=decodeURIComponent(t),"autorun"==t?f=!/^[0fn]/i.test(n):"lang"==t?h.push(n):"skin"==t?g.push(n):"callback"==t&&m.push(n)}),u=0,l=h.length;l>u;++u)(function(){var t=o.createElement("script");t.onload=t.onerror=t.onreadystatechange=function(){!t||t.readyState&&!/loaded|complete/.test(t.readyState)||(t.onerror=t.onload=t.onreadystatechange=e,--y,y||a(n,0),t.parentNode&&t.parentNode.removeChild(t),t=e)},t.type="text/javascript",t.src="https://google-code-prettify.googlecode.com/svn/loader/lang-"+encodeURIComponent(h[u])+".js",i.insertBefore(t,i.firstChild)})(h[u]);for(var y=h.length,c=[],u=0,l=g.length;l>u;++u)c.push("https://google-code-prettify.googlecode.com/svn/loader/skins/"+encodeURIComponent(g[u])+".css");c.push("https://google-code-prettify.googlecode.com/svn/loader/prettify.css"),function(e){function t(r){if(r!==n){var a=o.createElement("link");a.rel="stylesheet",a.type="text/css",n>r+1&&(a.error=a.onerror=function(){t(r+1)}),a.href=e[r],i.appendChild(a)}}var n=e.length;t(0)}(c);var v=function(){window.PR_SHOULD_USE_CONTINUATION=!0;var t;return function(){function n(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=d[n])?t:n>="0"&&"7">=n?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){return 32>e?(16>e?"\\x0":"\\x")+e.toString(16):(e=String.fromCharCode(e),"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e)}function r(e){var r=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a="^"===r[0],o=["["];a&&o.push("^");for(var a=a?1:0,s=r.length;s>a;++a){var i=r[a];if(/\\[bdsw]/i.test(i))o.push(i);else{var l,i=t(i);s>a+2&&"-"===r[a+1]?(l=t(r[a+2]),a+=2):l=i,e.push([i,l]),65>l||i>122||(65>l||i>90||e.push([32|Math.max(65,i),32|Math.min(l,90)]),97>l||i>122||e.push([-33&Math.max(97,i),-33&Math.min(l,122)]))}}for(e.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]}),r=[],s=[],a=0;a<e.length;++a)i=e[a],i[0]<=s[1]+1?s[1]=Math.max(s[1],i[1]):r.push(s=i);for(a=0;a<r.length;++a)i=r[a],o.push(n(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&o.push("-"),o.push(n(i[1])));return o.push("]"),o.join("")}function a(e){for(var t=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),a=t.length,i=[],l=0,c=0;a>l;++l){var u=t[l];"("===u?++c:"\\"===u.charAt(0)&&(u=+u.substring(1))&&(c>=u?i[u]=-1:t[l]=n(u))}for(l=1;l<i.length;++l)-1===i[l]&&(i[l]=++o);for(c=l=0;a>l;++l)u=t[l],"("===u?(++c,i[c]||(t[l]="(?:")):"\\"===u.charAt(0)&&(u=+u.substring(1))&&c>=u&&(t[l]="\\"+i[u]);for(l=0;a>l;++l)"^"===t[l]&&"^"!==t[l+1]&&(t[l]="");if(e.ignoreCase&&s)for(l=0;a>l;++l)u=t[l],e=u.charAt(0),u.length>=2&&"["===e?t[l]=r(u):"\\"!==e&&(t[l]=u.replace(/[A-Za-z]/g,function(e){return e=e.charCodeAt(0),"["+String.fromCharCode(-33&e,32|e)+"]"}));return t.join("")}for(var o=0,s=!1,i=!1,l=0,c=e.length;c>l;++l){var u=e[l];if(u.ignoreCase)i=!0;else if(/[a-z]/i.test(u.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0,i=!1;break}}for(var d={b:8,t:9,n:10,v:11,f:12,r:13},p=[],l=0,c=e.length;c>l;++l){if(u=e[l],u.global||u.multiline)throw Error(""+u);p.push("(?:"+a(u)+")")}return RegExp(p.join("|"),i?"gi":"g")}function r(e,t){function n(e){var l=e.nodeType;if(1==l){if(!r.test(e.className)){for(l=e.firstChild;l;l=l.nextSibling)n(l);l=e.nodeName.toLowerCase(),"br"!==l&&"li"!==l||(a[i]="\n",s[i<<1]=o++,s[i++<<1|1]=e)}}else 3!=l&&4!=l||(l=e.nodeValue,l.length&&(l=t?l.replace(/\r\n?/g,"\n"):l.replace(/[\t\n\r ]+/g," "),a[i]=l,s[i<<1]=o,o+=l.length,s[i++<<1|1]=e))}var r=/(?:^|\s)nocode(?:\s|$)/,a=[],o=0,s=[],i=0;return n(e),{a:a.join("").replace(/\n$/,""),d:s}}function o(e,t,n,r){t&&(e={a:t,e:e},n(e),r.push.apply(r,e.g))}function s(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling)var r=n.nodeType,t=1===r?t?e:n:3===r&&C.test(n.nodeValue)?e:t;return t===e?void 0:t}function i(t,r){function a(e){for(var t=e.e,n=[t,"pln"],c=0,u=e.a.match(s)||[],p={},f=0,h=u.length;h>f;++f){var g,m=u[f],y=p[m],v=void 0;if("string"==typeof y)g=!1;else{var b=i[m.charAt(0)];if(b)v=m.match(b[1]),y=b[0];else{for(g=0;l>g;++g)if(b=r[g],v=m.match(b[1])){y=b[0];break}v||(y="pln")}!(g=y.length>=5&&"lang-"===y.substring(0,5))||v&&"string"==typeof v[1]||(g=!1,y="src"),g||(p[m]=y)}if(b=c,c+=m.length,g){g=v[1];var w=m.indexOf(g),x=w+g.length;v[2]&&(x=m.length-v[2].length,w=x-g.length),y=y.substring(5),o(t+b,m.substring(0,w),a,n),o(t+b+w,g,d(y,g),n),o(t+b+x,m.substring(x),a,n)}else n.push(t+b,y)}e.g=n}var s,i={};!function(){for(var a=t.concat(r),o=[],l={},c=0,u=a.length;u>c;++c){var d=a[c],p=d[3];if(p)for(var f=p.length;--f>=0;)i[p.charAt(f)]=d;d=d[1],p=""+d,l.hasOwnProperty(p)||(o.push(d),l[p]=e)}o.push(/[\S\s]/),s=n(o)}();var l=r.length;return a}function l(t){var n=[],r=[];t.tripleQuotedStrings?n.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,e,"'\""]):t.multiLineStrings?n.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,e,"'\"`"]):n.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,e,"\"'"]),t.verbatimStrings&&r.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,e]);var a=t.hashComments;if(a&&(t.cStyleComments?(a>1?n.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,e,"#"]):n.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,e,"#"]),r.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,e])):n.push(["com",/^#[^\n\r]*/,e,"#"])),t.cStyleComments&&(r.push(["com",/^\/\/[^\n\r]*/,e]),r.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,e])),a=t.regexLiterals){var o=(a=a>1?"":"\n\r")?".":"[\\S\\s]";r.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+a+"])(?:[^/\\x5B\\x5C"+a+"]|\\x5C"+o+"|\\x5B(?:[^\\x5C\\x5D"+a+"]|\\x5C"+o+")*(?:\\x5D|$))+/")+")")])}return(a=t.types)&&r.push(["typ",a]),a=(""+t.keywords).replace(/^ | $/g,""),a.length&&r.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),e]),n.push(["pln",/^\s+/,e," \r\n	 "]),a="^.[^\\s\\w.$@'\"`/\\\\]*",t.regexLiterals&&(a+="(?!s*/)"),r.push(["lit",/^@[$_a-z][\w$@]*/i,e],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,e],["pln",/^[$_a-z][\w$@]*/i,e],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,e,"0123456789"],["pln",/^\\[\S\s]?/,e],["pun",RegExp(a),e]),i(n,r)}function c(e,t,n){function r(e){var t=e.nodeType;if(1!=t||o.test(e.className)){if((3==t||4==t)&&n){var l=e.nodeValue,c=l.match(s);c&&(t=l.substring(0,c.index),e.nodeValue=t,(l=l.substring(c.index+c[0].length))&&e.parentNode.insertBefore(i.createTextNode(l),e.nextSibling),a(e),t||e.parentNode.removeChild(e))}}else if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)r(e)}function a(e){function t(e,n){var r=n?e.cloneNode(!1):e,a=e.parentNode;if(a){var a=t(a,1),o=e.nextSibling;a.appendChild(r);for(var s=o;s;s=o)o=s.nextSibling,a.appendChild(s)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var n,e=t(e.nextSibling,0);(n=e.parentNode)&&1===n.nodeType;)e=n;c.push(e)}for(var o=/(?:^|\s)nocode(?:\s|$)/,s=/\r\n?|\n/,i=e.ownerDocument,l=i.createElement("li");e.firstChild;)l.appendChild(e.firstChild);for(var c=[l],u=0;u<c.length;++u)r(c[u]);t===(0|t)&&c[0].setAttribute("value",t);var d=i.createElement("ol");d.className="linenums";for(var t=Math.max(0,t-1|0)||0,u=0,p=c.length;p>u;++u)l=c[u],l.className="L"+(u+t)%10,l.firstChild||l.appendChild(i.createTextNode(" ")),d.appendChild(l);e.appendChild(d)}function u(e,t){for(var n=t.length;--n>=0;){var r=t[n];N.hasOwnProperty(r)?f.console&&console.warn("cannot override language handler %s",r):N[r]=e}}function d(e,t){return e&&N.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),N[e]}function p(e){var t=e.h;try{var n=r(e.c,e.i),a=n.a;e.a=a,e.d=n.d,e.e=0,d(t,a)(e);var o=/\bMSIE\s(\d+)/.exec(navigator.userAgent),o=o&&+o[1]<=8,t=/\n/g,s=e.a,i=s.length,n=0,l=e.d,c=l.length,a=0,u=e.g,p=u.length,h=0;u[p]=i;var g,m;for(m=g=0;p>m;)u[m]!==u[m+2]?(u[g++]=u[m++],u[g++]=u[m++]):m+=2;for(p=g,m=g=0;p>m;){for(var y=u[m],v=u[m+1],b=m+2;p>=b+2&&u[b+1]===v;)b+=2;u[g++]=y,u[g++]=v,m=b}u.length=g;var w,x=e.c;x&&(w=x.style.display,x.style.display="none");try{for(;c>a;){var S,C=l[a+2]||i,$=u[h+2]||i,b=Math.min(C,$),N=l[a+1];if(1!==N.nodeType&&(S=s.substring(n,b))){o&&(S=S.replace(t,"\r")),N.nodeValue=S;var k=N.ownerDocument,E=k.createElement("span");E.className=u[h+1];var T=N.parentNode;T.replaceChild(E,N),E.appendChild(N),C>n&&(l[a+1]=N=k.createTextNode(s.substring(b,C)),T.insertBefore(N,E.nextSibling))}n=b,n>=C&&(a+=2),n>=$&&(h+=2)}}finally{x&&(x.style.display=w)}}catch(_){f.console&&console.log(_&&_.stack||_)}}var f=window,h=["break,continue,do,else,for,if,return,while"],g=[[h,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],m=[g,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],y=[g,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],v=[y,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],g=[g,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],b=[h,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],w=[h,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],x=[h,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],h=[h,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],S=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,C=/\S/,$=l({keywords:[m,v,g,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",b,w,h],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),N={};u($,["default-code"]),u(i([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),u(i([["pln",/^\s+/,e," 	\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,e,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'\/>]|\/(?=\s)))/],["pun",/^[\/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]),u(i([],[["atv",/^[\S\s]+/]]),["uq.val"]),u(l({keywords:m,hashComments:!0,cStyleComments:!0,types:S}),["c","cc","cpp","cxx","cyc","m"]),u(l({keywords:"null,true,false"}),["json"]),u(l({keywords:v,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:S}),["cs"]),u(l({keywords:y,cStyleComments:!0}),["java"]),u(l({keywords:h,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),u(l({keywords:b,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),u(l({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),u(l({keywords:w,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),u(l({keywords:g,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),u(l({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),u(l({keywords:x,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),u(i([],[["str",/^[\S\s]+/]]),["regex"]);var k=f.PR={createSimpleLexer:i,registerLangHandler:u,sourceDecorator:l,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(e,t,n){var r=document.createElement("div");return r.innerHTML="<pre>"+e+"</pre>",r=r.firstChild,n&&c(r,n,!0),p({h:t,j:n,c:r,i:1}),r.innerHTML},prettyPrint:t=t=function(t,n){function r(){for(var n=f.PR_SHOULD_USE_CONTINUATION?g.now()+250:1/0;y<l.length&&g.now()<n;y++){for(var o=l[y],u=$,d=o;d=d.previousSibling;){var h=d.nodeType,N=(7===h||8===h)&&d.nodeValue;if(N?!/^\??prettify\b/.test(N):3!==h||/\S/.test(d.nodeValue))break;if(N){u={},N.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(e,t,n){u[t]=n});break}}if(d=o.className,(u!==$||b.test(d))&&!w.test(d)){for(h=!1,N=o.parentNode;N;N=N.parentNode)if(C.test(N.tagName)&&N.className&&b.test(N.className)){h=!0;break}if(!h){if(o.className+=" prettyprinted",h=u.lang,!h){var k,h=d.match(v);!h&&(k=s(o))&&S.test(k.tagName)&&(h=k.className.match(v)),h&&(h=h[1])}if(x.test(o.tagName))N=1;else var N=o.currentStyle,E=i.defaultView,N=(N=N?N.whiteSpace:E&&E.getComputedStyle?E.getComputedStyle(o,e).getPropertyValue("white-space"):0)&&"pre"===N.substring(0,3);E=u.linenums,(E="true"===E||+E)||(E=(E=d.match(/\blinenums\b(?::(\d+))?/))?E[1]&&E[1].length?+E[1]:!0:!1),E&&c(o,E,N),m={h:h,c:o,j:E,i:N},p(m)}}}y<l.length?a(r,250):"function"==typeof t&&t()}for(var o=n||document.body,i=o.ownerDocument||document,o=[o.getElementsByTagName("pre"),o.getElementsByTagName("code"),o.getElementsByTagName("xmp")],l=[],u=0;u<o.length;++u)for(var d=0,h=o[u].length;h>d;++d)l.push(o[u][d]);var o=e,g=Date;g.now||(g={now:function(){return+new Date}});var m,y=0,v=/\blang(?:uage)?-([\w.]+)(?!\S)/,b=/\bprettyprint\b/,w=/\bprettyprinted\b/,x=/pre|xmp/i,S=/^code$/i,C=/^(?:pre|code|xmp)$/i,$={};r()}};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return k})}(),t}();y||a(n,0)}()}(),$(window).resize(function(){var e=$(document).width(),t=(e-990)/2-190,n=(e-990)/2-84;$(".menu-float").css("right",t),$(".button-arrow").css("right",n)});var offset=220,duration=500;$(window).scroll(function(){$(this).scrollTop()>offset?$(".button-arrow").fadeIn(duration):$(".button-arrow").fadeOut(duration)});