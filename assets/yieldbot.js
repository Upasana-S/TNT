/*! Yieldbot Intent Tag | 2018 Yieldbot, Inc. */var ybotq=ybotq||[],yieldbot=yieldbot||{};!function(){yieldbot.cts_js=+new Date;for(var e,t,i,o,n,r,l,s,a=function(){return+new Date},d=function(){return a()-yieldbot.framework_window.yieldbot.cts_js},u=function(){return(0|36*Math.random()).toString(36)},c=function(){return(a().toString(36)+"xxxxxxxxxx".replace(/[x]/g,u)).toLowerCase()},y=Array.prototype.indexOf,b=(function(e,t){var i,o;if(null==e)return-1;if(y&&e.indexOf===y)return e.indexOf(t);for(i=0,o=e.length;i<o;i++)if(i in e&&e[i]===t)return i;return-1}),f=function(e,t){null==t&&(t=I),e?be("_debug",e,t):pe("_debug")},p=function(){var e=arguments,t=Array.prototype.slice.call(e);1===t.length&&t.push(d()),yieldbot.framework_window.yieldbot._history.push(t),ye("_debug")&&v(t)},_=function(e){p.apply(null,["ybotq.push."+yieldbot.framework_window.yieldbot._pushCount,d(),e]),yieldbot.framework_window.yieldbot._pushCount+=1},m=function(e,t){return function(){var i=Array.prototype.slice.call(arguments);return i.unshift(d()),i.unshift(e),p.apply(null,i),t.apply(null,arguments)}},w=function(){if(yieldbot.framework_window.console){yieldbot.framework_window.console.group&&yieldbot.framework_window.console.group("Yieldbot History");for(var e=0,t=yieldbot.framework_window.yieldbot._history.length;e<t;e++)v(yieldbot.framework_window.yieldbot._history[e]);yieldbot.framework_window.console.groupEnd&&yieldbot.framework_window.console.groupEnd()}},v=function(){yieldbot.framework_window.console&&yieldbot.framework_window.console.log&&yieldbot.framework_window.console.log.apply(yieldbot.framework_window.console,arguments)},h=/^\s\s*/,g=/\s\s*$/,k=function(e){return e.replace(h,"").replace(g,"")},x="v2018-10-17|120c4e5",j=window,T=window.top,z=escape,S=unescape,I=18e4,A=1e3,E=!1,q=!1,C=[],P=[],O={},D=null,B=!1,N={},M={},R={BID:0,AD:1,IMP:2,INF:3},L={},H=["bidTime","idx","pvd","type"],F="i",G=!1,Y=!1,$=null,V={},W=null,J=null,K=!1,Q=function(e,t){return e.getElementById(t)},U=function(e,t){if(0===arguments.length){F&&(e="//"+F+".yldbt.com/m/");var i=ye("c",!0);return i&&(e=i),"http://"===e.slice(0,7)&&(e=e.slice(5)),"//"===e.slice(0,2)&&(e=("https:"===document.location.protocol?"https:":"http:")+e),e}be("c",e,I),p("url_prefix",e),t&&(E=t)},X=function(e,t,i){var o,n=e.length,r=t||";",l=i||"=";for(o=0;o<n;o++)1===e[o].length?e[o]=e[o][0]:2===e[o].length&&(e[o]=e[o][0]+l+z(e[o][1]));return e.join(r)},Z=function(e){return E&&e.push(["_url_prefix",U()]),e.push(["e"]),X(e,"&")},ee=function(){Y=!0},te=function(){Y=!1},ie=function(e){if(0===arguments.length){var t=j!==yieldbot.framework_window?yieldbot.framework_window.yieldbot.psn():null;return n||t||ye("b",!0)}yieldbot.framework_window.yieldbot._initialized||(n=k(""+e),be("b",n,I))},oe=function(e){n=k(""+e)},ne=function(e){A=e},re=function(e){r=e},le=function(e){if(0===arguments.length)return F||ye("d",!0);F=k(""+e),be("d",F,I)},se=function(e){F=e},ae=function(e){return U()+ie()+"/"+e},de=function(e,t){var i=new Image(1,1);i.onload=function(){},i.src=ae(e)+"?"+t},ue=function(e,t,i){var o=ae(t)+"?"+i;if(Y){var n=e.document.createElement("script");n.src=o;var r=e.document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r)}else e.document.write('<script type="text/javascript" src="'+o+'"><\/script>')},ce=function(e){de("info.gif",Z(e))},ye=function(e,t){var i="__ybot"+e;try{var o=new RegExp("(^|;)[ ]*"+i+"=([^;]*)"),n=o.exec(yieldbot.framework_window.document.cookie);return n?S(n[2]):void 0}catch(e){if(!t){var r=[];r.push(["v",x]),r.push(["op","getCookie"]),r.push(["ts",a()]),r.push(["k",i]),r.push(["m",e?e.message||e:"_info"]),ce(r)}return!1}},be=function(e,t,i,o,n,r){n=$||n;var l="__ybot"+e;try{var s;i&&(s=new Date,s.setTime(s.getTime()+i)),yieldbot.framework_window.document.cookie=l+"="+z(t)+(i?";expires="+s.toGMTString():"")+";path="+(o||"/")+(n?";domain="+n:"")+(r?";secure":"")}catch(e){var d=[];d.push(["v",x]),d.push(["op","setCookie"]),d.push(["ts",a()]),d.push(["k",l]),d.push(["ev",t]),d.push(["m",e?e.message||e:"_info"]),ce(d)}},fe=function(e){if(0===arguments.length)return $;if(p.apply(null,["setting domain name",e]),null!=e){var t=new RegExp(e.replace(/^\./,"")+"$");document.domain.match(t)||p.apply(null,["domain name error","can't set \""+e+'" as the domain because is\'s not part of "'+document.domain+'"'])}$=e},pe=function(e,t,i,o){be(e,"",-1,t,i,o)},_e=function(e){e?(be("n","1",I),L=null,L={}):pe("n")},me=function(){q=!0},we=function(){return ye("u")},ve=function(){var e=ye("s");if(e)return e.split(".")[0]},he=function(){if(r)return r;var e=ye("s");return e?e.split(".")[2]:void 0},ge=function(){var e,t,i,o,n,s,u,y,b,f,_,m,w=yieldbot.framework_window,v=w.document,h=w.screen,g=w.navigator,k=/[ +]/g,j=function(e){return e.replace(k,"%20")};t=c(),m=a(),_=ye("v"),i=ye("u")||c(),y=ye("s"),b=ye("n"),y?(u=y.split("."),n=u[0],s=1+parseInt(u[3],10),f=parseInt(u[1],10),e=u[2]):(n=c(),s=1,f=_?0:1),o=[n,f,t,s].join("."),be("u",i,2592e6),be("v",m,2592e6),be("s",o,I),b&&be("n",b,I),r=t,pe("p");var z=[];if(z.push(["cb","yieldbot.updateState"]),z.push(["v",x]),z.push(["vi",i]),z.push(["si",n]),z.push(["pvi",t]),z.push(["pvd",s]),l=s,e&&z.push(["lpvi",e]),f&&z.push(["nv"]),D&&z.push(["npv",1]),function(){if("boolean"===et(g.cookieEnabled))return!g.cookieEnabled;return function(){return be("t","1"),"1"!==ye("t")}()}()&&z.push(["cd"]),P.length){z.push(["sn",P.join("|")]);var S,A,E=[];for(S=0;S<P.length;S++)A=P[S],V[A]?E.push(V[A].join(".")):E.push("");z.push(["ssz",E.join("|")])}return b&&z.push(["sb"]),J&&z.push(["itc",J]),z.push(["lo",j(v.location.href)]),z.push(["r",j(function(){var e="";if(D)return D;try{e=T.document.referrer}catch(t){if(w.parent)try{e=w.parent.document.referrer}catch(t){e=""}}return""===e&&(e=v.referrer),e}())]),z.push(["sd",h.width+"x"+h.height]),z.push(["to",(new Date).getTimezoneOffset()/60]),z.push(["la",g.language||g.userLanguage]),z.push(["np",g.platform]),z.push(["ua",g.userAgent]),_&&z.push(["lpv",m-parseInt(_,10)]),yieldbot.framework_window.yieldbot.cts_ns&&z.push(["cts_ns",yieldbot.framework_window.yieldbot.cts_ns]),z.push(["cts_js",yieldbot.framework_window.yieldbot.cts_js]),yieldbot.framework_window.yieldbot.cts_ini=a(),z.push(["cts_ini",yieldbot.framework_window.yieldbot.cts_ini]),p("cts_ini",d(),yieldbot.framework_window.yieldbot.cts_ini),Z(z)},ke=function(e,t,i,o,n,r,l){var s,a;a=n.createElement("iframe"),a.frameBorder="0",a.width=r,a.height=l,a.scrolling="no",a.id=i,o&&(a.src="javascript:false"),a.allowTransparency="true",e.appendChild(a);try{var d=a.contentWindow.document;d.write(t),d.close()}catch(e){s="javascript:var d=document.open();d.domain='"+yieldbot.framework_window.document.domain+"';",a.src=s+'d.write("'+t.replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}},xe=function(e){yieldbot.framework_window.yieldbot["cts_rend_"+e.request_id]=a(),p("cts_rend",e.request_id,yieldbot.framework_window.yieldbot["cts_rend_"+e.request_id]);var t=e.size[0],i=e.size[1],o=e.html,n=e.style,r=!e.silent,l=e.request_id,s=e.wrapper_id,d=e.delay,u=s||"ybot-"+l,c=j,y=c.document,b=Q(y,u),f=y.createElement("div"),_=f.style;f.className="ybot-creative creative-wrapper",b.appendChild(f),_.width=t+"px",_.height=i+"px",r&&(o+='<script type="text/javascript">var y=window.parent.yieldbot;y.impression("'+l+'");<\/script>');var m="<!DOCTYPE html><head><meta charset=utf-8><style>"+n+"</style></head><body>"+o+"</body>",w=/MSIE[ ]+6/.test(c.navigator.userAgent),v=u+"-iframe";null!=d?setTimeout(function(){ke(f,m,v,w,y,t,i)},d):ke(f,m,v,w,y,t,i)},je=function(){},Te=function(e,t,i){var o=b(P,e),n={};if(-1===o&&(P.push(e),O[e]=t),"object"===et(t)?n=t:"string"===et(t)&&(n.dom_id=t),"string"===et(n.dom_id)?N[e]=n.dom_id:delete N[e],"number"===et(i)?(n.time=i,M[e]=n.time):delete M[e],tt(n.sizes)){var r,l=[];if(2===n.sizes.length&&"number"===et(n.sizes[0])&&"number"===et(n.sizes[1]))l.push(n.sizes.join("x"));else for(r=0;r<n.sizes.length;r++)tt(n.sizes[r])?l.push(n.sizes[r].join("x")):_("invalid slot size "+n.sizes[r]);V[e]=l}null!=t&&"string"!==et(t)&&"object"!==et(t)&&p("invalid slot config",t),p("slot config",e,n)},ze=function(e){var t,i,o,n,r;for(i=0;i<e.length;i++)if("string"===et(e[i])){t=e[i].split(":"),o=t[0],n=t[1]||"";var l=n?o+":"+n:o;L[l]||(r={slot:o},n&&(r.size=n),r.type=R.BID,L[l]=r)}else p("invalid slot type",e[i])},Se=function(e,t){var i,o,n={};for(i=0;i<e.length;i++)if("object"===et(e[i]))if(o=e[i],o.slot){var r=o.slot+":"+o.size,s=L[r];if(!s||s&&s.pvd!==l){var d=n.hasOwnProperty(o.slot)?n[o.slot]:-1;n[o.slot]=d+1;var u={};for(var c in o)u[c]=o[c];u.type=R.BID,u.bidTime=a(),u.idx=n[o.slot],u.pvi=t,u.pvd=l,L[r]=u}}else p("missing required `slot` field",o)},Ie=function(){var e=[];for(var t in L){var i=L[t],o=i&&i.type===R.BID&&i.slot?i.slot:"";o&&-1===b(e,o)&&e.push(o)}return e},Ae=function(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},Ee=function(e,t){var i={};if(e)for(var o in L){var n=L[o];if(n.slot&&n.slot===e&&(0===n.idx||t)){i=Ae(n);break}}for(var r=0;r<H.length;r++){delete i[H[r]]}return i},qe=function(){var e=ye("e");return e?e.split("."):[]},Ce=function(e){var t,i,o=[];for(t=0;t<e.length;t++)i=e[t].split(":")[0],o.push(i);be("e",o.join("."),I)},Pe=function(e){G=e},Oe=function(e,t,i,o){var n,r,l=i||"ybot_",s=[],a=[];for(o=o||",",s.push(["y"]),n=0;n<e.length;n++)r=Ee(e[n],!0),"object"===et(r)&&r.size?a.push(e[n]+":"+r.size):a.push(e[n]);return s.push([l+"slot",a.join(o)]),s.push([l+"psn",ie()]),s.push([l+"pvi",he()]),s.push([l+"subdomain",le()]),X(s,t)},De=function(e){var t,i,o,n=Ie();if(!e)return!1;for(e.split&&(o=e.split(",")),o||(o=e),i=o.length,t=0;t<i;t++)if(b(n,k(o[t]))>-1)return G&&(L=null,L={}),k(o[t]);return!1},Be=function(e,t,i){var o=De(e);return o?Oe([o],t,i):"n"},Ne=function(e,t,i,o){var n,r,l,s,a=[];if(o=o||["size","cpm","ds"],i=i||"ybot_",l=De(e),s=Ee(e),l&&"array"===et(o))for(a.push(["y"]),a.push([i+"slot",l]),n=0;n<o.length;n++)r=o[n],void 0!==s[r]&&a.push([i+r,s[r]]),p("slotParams",r+" is ",s[r]);else a.push(["n"]);return l||p("slotParams","could not find slotName",e),"array"!==et(o)&&p("slotParams","params type","expected:array","actual:"+et(o)),X(a,t)},Me=function(e){var t=Ie();return t.length?Oe(t,"&","ybot_",e):"n"},Re=function(e){return De(e)?"y":"n"},Le=function(e,t){De(t)&&googletag.cmd.push(function(){googletag.pubads().setTargeting(e,"y")})},He=function(e,t){De(t)&&GA_googleAddAttr(e,"y")},Fe=function(){!B&&yieldbot.framework_window.yieldbot._initialized||(i=a(),t=t||yieldbot.framework_window.yieldbot.default_init_timeout,setTimeout(function(){if(!o){var e="init response took more than "+t+"ms to load, triggering resume()";p(e);var i=[["v",x],["ts",a()],["api_error",e]];ce(i),ut()}},t),null!=ie()&&(p("triggering init call"),yieldbot.framework_window.yieldbot._initialized=!0,ue(yieldbot.framework_window,"v1/init",ge()),me(),D=j.document.location.href))},Ge=(function(e){return!!(e&&e.IntersectionObserver&&e.IntersectionObserverEntry&&e.IntersectionObserverEntry.prototype&&"intersectionRatio"in e.IntersectionObserverEntry.prototype)}),Ye=function(e){for(var t="none";e!==T;)try{e=e.parent,e.document,t="so"}catch(e){t="co"}return t},$e=function(e,t,i){var o,n,r="object"===et(e),l=r&&e.slot?e.slot:"",s=l?l.split(":"):[],a=s[0]||"",d=s[1]||"",u=s[2]?s[2].split("-"):[],c=u[0]||"",y=[],b=yieldbot.framework_window.yieldbot;!c&&b.__slotBidEntry&&(n=b.__slotBidEntry(l)||b.__slotBidEntry(a),c=n&&n.pvi?n.pvi:he()||""),o=u[1]||ie()||c||void 0,re(c),ie(o),L[t]={type:R.AD,psn:o,pvi:c,slot:a,size:d,wi:i},y.push(["ri",t]),y.push(["pvi",c]);var f=d?":"+d:"";if(y.push(["slot",a+f]),r)for(var p in e)"slot"!==p&&e.hasOwnProperty(p)&&y.push([p,e[p]]);return b.__slotRendered(l),{psn:o,query:y}},Ve=function(e,t){var i=c(),o=$e(e,i,t),n=o.query;oe(o.psn),n.push(["v",x]);var r,l;(r=we())&&n.push(["vi",r]),(l=ve())&&n.push(["si",l]),t&&n.push(["wi",t]),Y||t||j.document.write('<div id="ybot-'+i+'"></div>');var s=a();yieldbot.framework_window.yieldbot["cts_ad_"+(e&&e.slot)]=s,yieldbot.framework_window.yieldbot.cts_res&&n.push(["cts_res",yieldbot.framework_window.yieldbot.cts_res]),n.push(["cts_ad",s]),Ge(window)&&n.push(["ioa"]),n.push(["it",Ye(window)]),p("cts_ad",e&&e.slot,s),ue(j,"ad/creative.js",Z(n))},We=function(e,t){var i,o=j,n=o.document;if(!N[e]||!document.getElementById(N[e]))return void p("invalid slot","requestedSlot="+e,"_slotToDomId[requestedSlot]="+N[e]);if(T===j&&!yieldbot.framework_window.yieldbot._initialized)return void C.push(function(){setTimeout(function(){We(e,t)},0)});var r=M[e]||2e3,l=De(e);l&&!Ie()&&N[e]?(i=Q(n,N[e]),i.innerHTML="",Ve({slot:l},N[e])):qe().length?setTimeout(function(){l=De(e),l?(i=Q(n,N[e]),i.innerHTML="",Ve({slot:l},N[e])):t()},r):t()},Je=function(e){var t,i=[],o=yieldbot.framework_window.yieldbot.__slotBidEntry(e);t=o&&o.pvi?o.pvi:he(),i.push(["v",x]);var n,r;(n=we())&&i.push(["vi",n]),(r=ve())&&i.push(["si",r]),i.push(["pvi",t]),i.push(["ri",e]),Q(j.document,"ybot-frame-"+e);var l=a();yieldbot.framework_window.yieldbot["cts_imp_"+e]=l,i.push(["cts_rend",yieldbot.framework_window.yieldbot["cts_rend_"+e]]),i.push(["cts_imp",l]),p("cts_imp",e,l),de("ad/impression.gif",Z(i))},Ke=!1,Qe=[],Ue={dfp_sb_manager:2,psn:1,ad:1,init:0},Xe=function(e){var t,i,o;if(Qe.push(e),o=Qe[0],!Ue.hasOwnProperty(o)){var n=[];for(n.push(["v",x]),n.push(["ts",a()]),n.push(["api_error",o+" not supported with unwrapped call"]),i=Qe.length,t=0;t<i;t++)n.push(["arg_stack",Qe[t]]);return ce(n),["noop"]}return Ue[o]===Qe.length-1?(Ke=!0,Qe):["noop"]},Ze={},et=function(e){return null==e?String(e):Ze[Object.prototype.toString.call(e)]||"object"},tt=Array.isArray||function(e){return"array"===et(e)},it=function(e){var t,i,o,n,r;if(i=Ee(e),r=Re(e),t={ybot_ad:r},"y"===r&&"object"===et(i)){for(o in i)n="ybot_"+o,t[n]=i[o];t.ybot_pvi=he()+"-"+ie()}return t},ot=function(e,t){var i=[];e=e||":",t=t||",";for(var o in O){var n=O[o],r=n&&n.sizes?n.sizes:null,l=[];if(r)for(var s=0;s<r.length;s++){var a=r[s],d=o+":"+a.join("x");l.push(d)}else l.push(o);var u=rt(l,e);Array.prototype.push.apply(i,u)}return i.join(t)},nt=function(e){var t=[];for(var i in L){var o=L[i];o.slot&&o.slot==e&&t.push(o)}return t},rt=function(e,t){for(var i=[],o=0;o<e.length;o++){var n=e[o],r=[];if(-1===n.indexOf(":"))r=nt(n);else{var s=L[n];r=s?[s]:[]}for(var a=0;a<r.length;a++){var d=r[a];d&&0===d.idx&&d.pvd&&d.pvd===l&&i.push([d.slot,d.size,d.ds?"ds":d.cpm].join(t))}}return i},lt=function(e,t){var i,o;if(t&&"function"===et(t.setTargeting)){i=it(e);for(o in i)t.setTargeting(o,i[o])}},st=function(e){var t="";for(var i in L){var o=L[i];if(o.slot&&o.slot===e&&0===o.idx){t=o.size||"";break}}return t},at=function(e){var t,i,o,n,r,l;if(_(e.toString()),"function"===et(e))o=e;else{if(tt(e)||(e=Xe(e)),r=e[0],l=e.slice(1),yieldbot.hasOwnProperty(r))o=yieldbot[r],l&&(n=l);else{var s=[];for(s.push(["v",x]),s.push(["op",r]),s.push(["ts",a()]),s.push(["api_error",r+" function not available"]),i=l.length,t=0;t<i;t++)s.push(["arg",l[t]]);ce(s),o=yieldbot.noop}Ke&&(Ke=!1,Qe=[])}if(q&&"resume"!==r)C.push(e);else try{o.apply(yieldbot,n||[])}catch(e){var s=[];s.push(["v",x]),s.push(["ts",a()]),ye("_debug")&&(v("Caught error in ybotq.push"),v(e.stack||e.stackTrace||"Error in ybotq.push with no stack trace")),s.push(["apie",e.message||e]);try{ce(s)}catch(e){}}},dt=function(e){var t,i;if(!e.framework)for(i=e.length,t=0;t<i;t++)at(e[t])},ut=function(){yieldbot.framework_window.yieldbot.cts_res=a(),p("cts_res",d(),yieldbot.framework_window.yieldbot.cts_res),q=!1,dt(C),C=[]},ct=function(e){if(o=a()-i,W=e,o>t)return void p("init took "+o+"ms to respond",d(),e);"object"!==et(e)?(p("invalid data structure returned for v1/init",e),v("invalid data structure returned for v1/init",e),ut()):("array"===et(e.errors)&&e.errors.length>0&&(p("vi/init errors",e.errors),e.integration_test&&yieldbot.framework_window.alert(e.errors)),"array"===et(e.warnings)&&e.warnings.length>0&&(p("vi/init warnings",e.warnings),e.integration_test&&yieldbot.framework_window.alert(e.warnings)),e.slots||p("v1/init warnings","no slots"),e.slots&&"array"===et(e.slots)&&Se(e.slots,e.pvi||void 0),e.subdomain_iframe&&se(e.subdomain_iframe),e.url_prefix&&U(e.url_prefix),e.block_session&&_e(e.block_session),e.ad_serve_first_slot_only&&Pe(e.ad_serve_first_slot_only),K=!!e.hasOwnProperty("optout")&&e.optout,K&&(p("Opt-out: "+we()),pe("u")),ut())},yt=function(){return"object"===et(W)&&"undefined"!==et(W.minibar)&&"undefined"!==et(n)},bt=function(e){if(yt()){var t,i,o,n="https:"===j.document.location.protocol?"https:":"http:";t=j.document.getElementsByTagName("script")[0],i=j.document.createElement("script"),i.src=n+"//cdn.yldbt.com/js/yieldbot.minibar.js",i.onload=function(){(o=yieldbot.minibar)&&(o.extraContent=e,o.initResponse=W,o.render())},t.parentNode.insertBefore(i,t)}},ft=function(){J=1},pt=function(){var e=null;return W&&W.trending&&W.trending.data&&(e=W.trending),e},_t=function(e,t){B=!0;var i=et(e);if("function"===i&&"object"===et(t)){var o="init not called. invalid parameter order - nextPageview(object, function): "+i+", "+et(t);return p(o),void v(o)}t="function"===i?e:t;var n="";if("object"!==i)for(n in O)Te(n,O[n]);else{P=[],O={},V={};for(n in e)Te(n,{sizes:e[n]})}Fe(),me(),"function"===et(t)&&ybotq.push(t)},mt=function(e){delete L[e]},wt=function(e){var t=L[e]||void 0;if(!t)for(var i in L){var o=L[i],n=i.split(":"),r=n[0]||"";if(r===e&&0===o.idx){t=L[i];break}}return t},vt=function(e){clearInterval(s);var t=e||I;p("__setSessionInterval",t),s=setInterval(function(){for(var e in L){var i=L[e];i.bidTime&&a()>=i.bidTime+t&&delete L[e]}},t)},ht=function(e){l=e},gt="Boolean Number String Function Array Date RegExp Object".split(" "),kt=0;kt<gt.length;kt++)Ze["[object "+gt[kt]+"]"]=gt[kt].toLowerCase();if(!yieldbot.framework){yieldbot.framework=!0,yieldbot.default_init_timeout=4e3,yieldbot.noop=function(){},yieldbot.enableAsync=yieldbot.enable_async=m("yieldbot.enableAsync",ee),yieldbot.enableSync=yieldbot.enable_sync=m("yieldbot.enableSync",te),yieldbot.data_collection_opt_out=m("yieldbot.data_collection_opt_out",je),yieldbot.dfp_sb_manager=m("yieldbot.dfp_sb_manager",Le),yieldbot.gam_manager=m("yieldbot.gam_manager",He),yieldbot.pub=yieldbot.psn=m("yieldbot.pub",ie),yieldbot.psn_iframe=m("yieldbot.psn_iframe",oe),yieldbot.subdomain=m("yieldbot.subdomain",le),yieldbot.pvi_iframe=m("yieldbot.pvi_iframe",re),yieldbot.subdomain_iframe=m("(deprecated) yieldbot.subdomain_iframe",se),yieldbot._block_session=m("(deprecated) yieldbot._block_session",_e),yieldbot._url_prefix=m("(deprecated) yieldbot._url_prefix",U),yieldbot.ad_serve_first_slot_only=m("(deprecated) yieldbot.ad_serve_first_slot_only",Pe),yieldbot.set_slots=m("(deprecated) yieldbot.set_slots",ze),yieldbot.set_alternate_slots=m("(deprecated) yieldbot.set_alternate_slots",Ce),yieldbot.resume=m("(deprecated) yieldbot.resume",ut),yieldbot.ad_params=m("yieldbot.ad_params",Be),yieldbot.run_queue=m("yieldbot.run_queue",dt),yieldbot.defineSlot=m("yieldbot.defineSlot",Te),yieldbot.adAvailable=m("yieldbot.adAvailable",Re),yieldbot.slot_available=m("yieldbot.slot_available",De),yieldbot.alternateSlot=m("yieldbot.alternateSlot",We),yieldbot.params=m("yieldbot.params",Be),yieldbot.slotParams=m("yieldbot.slotParams",function(e,t,i,o){return Ne(e,t,i,o)}),yieldbot.singleRequestParams=m("yieldbot.singleRequestParams",Me),yieldbot._erase_cookie=m("yieldbot.eraseCookie",pe),yieldbot._get_cookie=m("yieldbot.getCookie",ye),yieldbot._set_cookie=m("yieldbot.setCookie",be),yieldbot._render=m("yieldbot._render",xe),yieldbot._info=m("yieldbot.info",ce),yieldbot._info_init_time_limit=m("yieldbot._info_init_time_limit",ne),yieldbot.type=m("yieldbot.type",et),yieldbot.debug=m("yieldbot.debug",f),yieldbot.log=m("yieldbot.log",p),yieldbot.dumpLog=m("yieldbot.dumpLog",w),yieldbot.go=yieldbot.enablePub=yieldbot.track=yieldbot.init=m("yieldbot.go",Fe),yieldbot.ad=m("yieldbot.ad",Ve),yieldbot.renderAd=m("yieldbot.renderAd",function(e,t){Ve({slot:e},t)});var xt=!1;for(yieldbot.renderIfAvailable=m("yieldbot.renderIfAvailable",function(e,t){De(e)&&(xt=!0,Ve({slot:e},t))}),yieldbot.adNotAvailable=m("yieldbot.adNotAvailable",function(e){xt||e()}),yieldbot.getAvailableSizes=m("yieldbot.getAvailableSizes",st),yieldbot.setSlotTargeting=m("yieldbot.setSlotTargeting",lt),yieldbot.getSlotCriteria=m("yieldbot.getSlotCriteria",it),yieldbot.updateState=m("yieldbot.updateState",ct),yieldbot.hasMinibar=m("yieldbot.hasMinibar",yt),yieldbot.renderMinibar=m("yieldbot.renderMinibar",bt),yieldbot.includeTrendingContent=m("yieldbot.includeTrendingContent",ft),yieldbot.getTrendingContent=m("yieldbot.getTrendingContent",pt),yieldbot.getPageCriteria=m("yieldbot.getPageCriteria",ot),yieldbot.nextPageview=m("yieldbot.nextPageView",_t),yieldbot.setInitTimeout=m("yieldbot.setInitTimeout",function(e){"number"===et(e)?t=e:p('called "yieldbot.setInitTimeout" with "'+et(e)+'" instead of "number"',d())}),yieldbot.getInitTimeout=m("yieldbot.getInitTimeout",function(){return t}),yieldbot.impression=m("yieldbot.impression",Je),yieldbot.framework_window=j,yieldbot._initialized=!1,yieldbot._history=[],yieldbot._pushCount=0,yieldbot.domainName=m("yieldbot.domainName",fe),yieldbot.__resetDefaults=function(){yieldbot._initialized=!1,P=[],O={},V={},N={},M={},n=void 0,r=void 0,L={},K=!1;var e,t=["a","b","c","d","e","p","s","t","v","u","n","z","_opt_out","_debug"];for(e=0;e<t.length;e++)pe(t[e]);vt(I),p("__resetDefaults was called!")},yieldbot.__initial_message=ge,yieldbot.__getDefinedSlots=function(){return P},yieldbot.__getSlotToDomId=function(){return N},yieldbot.__getSlotTimeout=function(){return M},yieldbot.__getMultiSize=function(){return V},yieldbot.__slotRendered=function(e){mt(e)},yieldbot.__slotBidEntry=function(e){return wt(e)},yieldbot.__setSessionInterval=function(e){vt(e)},yieldbot.__setSessionDepth=function(e){ht(e)},e=window;e!==T;)try{e=e.parent,e.ybotq&&e.ybotq.framework&&(yieldbot.framework_window=e)}catch(e){}var jt=j===yieldbot.framework_window;yieldbot.framework_window.performance&&yieldbot.framework_window.performance.timing?(yieldbot.framework_window.yieldbot.cts_ns=window.performance.timing.navigationStart,jt||p("subsequent yieldbot.intent tag load",yieldbot.cts_js-yieldbot.framework_window.yieldbot.cts_js)):jt||p("subsequent yieldbot.intent tag load","unknown"),jt&&(p("cts_ns",d(),yieldbot.framework_window.yieldbot.cts_ns),p("cts_js",d(),yieldbot.framework_window.yieldbot.cts_js)),dt(ybotq),ybotq={push:function(){var e,t=arguments.length;for(e=0;e<t;e++)at(arguments[e])},framework:!0},yieldbot.__setSessionInterval()}}();