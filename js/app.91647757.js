(function(t){function e(e){for(var n,a,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,a=1;a<s.length;a++){var o=s[a];0!==i[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=s[0]))}return t}var n={},a={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-6d746818":"6c9e2cf5"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s={"chunk-6d746818":1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=new Promise((function(e,s){for(var n="css/"+({}[t]||t)+"."+{"chunk-6d746818":"2a42ca35"}[t]+".css",i=c.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=r[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete a[t],f.parentNode.removeChild(f),s(r)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,s){n=i[t]=[e,s]}));e.push(n[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var s=i[t];if(0!==s){if(s){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,s[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(s,n,function(e){return t[e]}.bind(null,n));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-blockchain/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},3563:function(t,e,s){},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("vue-doro")],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:""+t.actualStepClass},[s("app-header"),s("main",{staticClass:"page__main"},[s("h2",{staticClass:"main__step-title"},[t._v(t._s(t.actualStep.title))]),s("vue-doro-timer",{attrs:{timer:t.actualStep.time,isPlaying:t.isPlaying},on:{timeFinished:t.setNextStep}}),s("span",{staticClass:"main__rounds"},[t._v(" "+t._s(t.actualRound)+"/"+t._s(t.rounds)+" rounds ")]),s("vue-doro-actions",{on:{setAdjustments:t.setAdjustments,toggleIsPlaying:t.setIsPlaying,skipStep:t.setNextStep}})],1)],1)},o=[],c=s("3835"),u=s("ade3"),l=(s("159b"),s("4fad"),function(t,e){var s=e._c;return s("header",{key:"header",staticClass:"header"},[e._m(0)])}),d=[function(t,e){var n=e._c;return n("div",{staticClass:"header__logo"},[n("img",{staticClass:"logo__image",attrs:{src:s("cf05"),alt:"VueDoro logo"}}),n("h1",{staticClass:"logo__title"},[e._v("VueDoro")])])}],f=(s("dc89"),s("2877")),m={},h=Object(f["a"])(m,l,d,!0,null,"130905ec",null),j=h.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("radial-progress-bar",{attrs:{diameter:t.timerDiameter,"total-steps":t.timerTotalSteps,"completed-steps":t.completedSteps,"stroke-width":5,"inner-stroke-width":2,"inner-stroke-color":"#888","start-color":"#888","stop-color":"#444","is-clockwise":!1}},[s("span",{staticClass:"timer-numbers"},[t._v(" "+t._s(t.actualTimer)+" ")])])},p=[],g=(s("ac1f"),s("5319"),s("c1df")),v=s.n(g),y=s("a362"),k=s.n(y),A=s("531a"),S=s.n(A),T={components:{RadialProgressBar:S.a},props:{timer:{type:String,required:!0},isPlaying:{type:Boolean,required:!0}},data:function(){return{actualTimer:"",timerInterval:null,timerDiameter:400}},computed:{timerTotalSteps:function(){return this.transformTimeToNumber(this.timer)},completedSteps:function(){return this.transformTimeToNumber(this.actualTimer)-Math.abs(this.timerTotalSteps)}},mounted:function(){this.setTimerWidth(),window.addEventListener("resize",this.setTimerWidth),this.setActualTimer(this.timer)},watch:{timer:function(t){this.setActualTimer(t),this.isPlaying&&(this.stopCountdownTimer(),this.initCountdownTimer())},isPlaying:function(t){t?this.initCountdownTimer():(this.stopCountdownTimer(),this.changePageTitle("VueDoro"))},actualTimer:function(t,e){var s=this;if(this.isPlaying&&this.changePageTitle(t),"00:01"===e&&"00:00"===t){var n=1e3;setTimeout((function(){s.stopCountdownTimer(),s.playAlarm(),s.setTimeFinished()}),n)}}},methods:{transformTimeToNumber:function(t){return+t.replace(":","")},setTimerWidth:function(){var t=window.screen.width;t<=450&&(this.timerDiameter=300),t<350&&(this.timerDiameter=250),t>450&&(this.timerDiameter=400)},changePageTitle:function(t){document.title=t},setTimeFinished:function(){this.$emit("timeFinished")},playAlarm:function(){var t=new Audio(k.a);t.play()},setActualTimer:function(t){this.actualTimer=t},stopCountdownTimer:function(){clearInterval(this.timerInterval)},subtractOneSecond:function(){var t=v()(this.actualTimer,"mm:ss").subtract(1,"seconds").format("mm:ss");this.setActualTimer(t)},initCountdownTimer:function(){var t=this,e=1e3;this.timerInterval=setInterval((function(){t.subtractOneSecond()}),e)}}},w=T,_=(s("8622"),Object(f["a"])(w,b,p,!1,null,"7bbff476",null)),E=_.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"actions"},[s("button",{staticClass:"actions__button",on:{click:t.toggleModal}},[s("sliders-icon")],1),s("button",{staticClass:"actions__button--toggle",on:{click:t.toggleIsPlaying}},[s("transition-group",{attrs:{name:"toggle-buttons"}},[t.isPlaying?s("pause-icon",{key:"pause"}):s("play-icon",{key:"play"})],1)],1),s("button",{staticClass:"actions__button",on:{click:t.skipStep}},[s("skip-forward-icon")],1),s("action-adjustments",{directives:[{name:"show",rawName:"v-show",value:t.isShowingAdjustments,expression:"isShowingAdjustments"}],on:{setAdjustments:t.setAdjustments,close:t.toggleModal}})],1)},O=[],P=(s("d3b7"),s("3ca3"),s("ddb0"),s("0a35")),C={components:{SlidersIcon:P["d"],PlayIcon:P["b"],PauseIcon:P["a"],SkipForwardIcon:P["c"],ActionAdjustments:function(){return s.e("chunk-6d746818").then(s.bind(null,"1280"))}},data:function(){return{isPlaying:!1,isShowingAdjustments:!1}},methods:{setAdjustments:function(t){this.$emit("setAdjustments",t)},skipStep:function(){this.$emit("skipStep")},toggleIsPlaying:function(){this.isPlaying=!this.isPlaying,this.$emit("toggleIsPlaying",this.isPlaying)},toggleModal:function(){this.isShowingAdjustments=!this.isShowingAdjustments}}},z=C,x=(s("9a4f"),Object(f["a"])(z,L,O,!1,null,"342f09b6",null)),B=x.exports,I=s("c002"),D=I["a"].FOCUS,N=I["a"].SHORT,R=I["a"].LONG,M=I["a"].ROUNDS,F={name:"VueDoro",components:{AppHeader:j,VueDoroTimer:E,VueDoroActions:B},data:function(){return{actualRound:1,rounds:M,isPlaying:!1,actualStep:null,steps:{focus:{time:D.TIME,title:D.LABEL},shortBreak:{time:N.TIME,title:N.LABEL},longBreak:{time:R.TIME,title:R.LABEL}}}},created:function(){this.setActualStep(this.steps.focus)},computed:{actualStepClass:function(){var t;if(!this.actualStep)return"";var e=(t={},Object(u["a"])(t,D.LABEL,"focus"),Object(u["a"])(t,N.LABEL,"short"),Object(u["a"])(t,R.LABEL,"long"),t);return"page--".concat(e[this.actualStep.title])}},methods:{setNextStep:function(){var t=this.actualStep.title;t===R.LABEL?(this.setActualRound(1),this.setActualStep(this.steps.focus)):t===D.LABEL&&this.actualRound===this.rounds?this.setActualStep(this.steps.longBreak):t===D.LABEL&&this.actualRound!==this.rounds?this.setActualStep(this.steps.shortBreak):t===N.LABEL&&this.actualRound!==this.rounds&&(this.setActualStep(this.steps.focus),this.setActualRound(this.actualRound+1))},setIsPlaying:function(t){this.isPlaying=t},setActualStep:function(t){this.actualStep=t},setActualRound:function(t){this.actualRound=t},setAdjustments:function(t){var e=this;Object.entries(t).forEach((function(t){var s=Object(c["a"])(t,2),n=s[0],a=s[1];"rounds"===n?e.rounds=+a:e.steps[n].time=a,e.setActualRound(1),e.setActualStep(e.steps.focus)}))}}},$=F,U=(s("e499"),Object(f["a"])($,r,o,!1,null,"f48d0b94",null)),V=U.exports,q={name:"App",components:{VueDoro:V}},H=q,W=(s("7faf"),Object(f["a"])(H,a,i,!1,null,null,null)),G=W.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(G)}}).$mount("#app")},"60e1":function(t,e,s){},"79da":function(t,e,s){},"7faf":function(t,e,s){"use strict";s("b8ff")},8622:function(t,e,s){"use strict";s("79da")},"9a4f":function(t,e,s){"use strict";s("f54a")},a362:function(t,e,s){t.exports=s.p+"media/alarm.19c2fae7.mp3"},b8ff:function(t,e,s){},c002:function(t,e,s){"use strict";e["a"]={FOCUS:{LABEL:"Focus time",TIME:"25:00"},SHORT:{LABEL:"Short break",TIME:"05:00"},LONG:{LABEL:"Long break",TIME:"15:00"},ROUNDS:4}},cf05:function(t,e,s){t.exports=s.p+"img/logo.a5e76381.png"},dc89:function(t,e,s){"use strict";s("3563")},e499:function(t,e,s){"use strict";s("60e1")},f54a:function(t,e,s){}});
//# sourceMappingURL=app.91647757.js.map