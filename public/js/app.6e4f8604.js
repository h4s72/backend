(function(e){function t(t){for(var a,l,i=t[0],s=t[1],c=t[2],f=0,p=[];f<i.length;f++)l=i[f],r[l]&&p.push(r[l][0]),r[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09f0":function(e,t,n){"use strict";var a=n("e234"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("NavigationDrawer",{attrs:{show:e.showSideBar}}),n("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":""}},[n("v-toolbar-side-icon",{on:{click:e.toggleSideBar}}),n("v-toolbar-title",[e._v("Envirorer")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:""}},[e._v("Glenn Hysén")])],1)],1),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("router-view")],1)],1)],1)},l=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{app:"",clipped:"","mobile-break-point":1e3},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},e._l(e.items,function(t){return n("v-list-tile",{key:t.title,attrs:{to:t.path,exact:""},on:{click:function(e){}}},[n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-tile-action",[e._v("\n        "+e._s(t.title)+"\n      ")])],1)}),1)],1)},s=[],c={props:{show:{type:Boolean}},data:function(){return{drawer:null,items:[{path:"/",title:"Hem",icon:"home"},{path:"/journal",title:"Journal",icon:"assignment"},{path:"/challenges",title:"Weekly Challenges",icon:"check_circle"},{path:"/stats",title:"Statistics",icon:"bar_chart"}]}},watch:{show:function(){this.drawer=!this.drawer}}},u=c,f=n("2877"),p=n("6544"),d=n.n(p),v=n("132d"),h=n("8860"),m=n("ba95"),b=n("40fe"),g=n("f774"),w=Object(f["a"])(u,i,s,!1,null,null,null),y=w.exports;d()(w,{VIcon:v["a"],VList:h["a"],VListTile:m["a"],VListTileAction:b["a"],VNavigationDrawer:g["a"]});var _={name:"App",data:function(){return{showSideBar:!0}},computed:{appLoaded:function(){return this.$store.username.length>0}},components:{NavigationDrawer:y},methods:{toggleSideBar:function(){this.showSideBar=!this.showSideBar}}},k=_,x=n("7496"),V=n("8336"),j=n("a523"),S=n("549c"),O=n("9910"),T=n("71d9"),B=n("2a7f"),P=n("706c"),D=Object(f["a"])(k,o,l,!1,null,null,null),E=D.exports;d()(D,{VApp:x["a"],VBtn:V["a"],VContainer:j["a"],VContent:S["a"],VSpacer:O["a"],VToolbar:T["a"],VToolbarItems:B["a"],VToolbarSideIcon:P["a"],VToolbarTitle:B["b"]});var L=n("8c4f"),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"align-center":"","justify-start":"",column:"","fill-height":""}},[n("h1",[e._v("Welcome to envirorer")]),n("p",[e._v("Your utility for living a more sustainable life.")])])},C=[],A={},J=A,M=n("a722"),N=Object(f["a"])(J,$,C,!1,null,null,null),F=N.exports;d()(N,{VLayout:M["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"align-center":"","justify-start":"",column:"","fill-height":""}},[n("h1",[e._v("Journal")]),n("p",[e._v("Your journal below")]),n("v-form",{ref:"form"},[n("v-text-field",{attrs:{label:"Water Usage",required:""},model:{value:e.water_usage,callback:function(t){e.water_usage=e._n(t)},expression:"water_usage"}}),n("v-text-field",{attrs:{label:"Daily CO2 emission",required:""},model:{value:e.co2emission,callback:function(t){e.co2emission=t},expression:"co2emission"}}),n("v-btn",{attrs:{color:"success"},on:{click:e.sendData}},[e._v("\n      Update\n    ")])],1)],1)},I=[],W={data:function(){return{water_usage:0,co2emission:0}},methods:{sendData:function(){console.log("Running SENDDATA")}}},X=W,q=(n("09f0"),n("4bd4")),U=n("2677"),Y=Object(f["a"])(X,H,I,!1,null,"3e495891",null),G=Y.exports;d()(Y,{VBtn:V["a"],VForm:q["a"],VLayout:M["a"],VTextField:U["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"align-center":"","justify-start":"",column:"","fill-height":""}},[n("h1",[e._v("Statistics")]),n("p",[e._v("Below are your freakin stats")]),n("v-sparkline",{attrs:{labels:e.labels,value:e.value,color:"gray","line-width":"2",padding:"16"}})],1)},z=[],K={data:function(){return{labels:["1950","1960","1970","1980","1990","2000","2010","2019"],value:[200,675,410,390,310,460,250,240]}}},Q=K,Z=n("7f2e"),ee=Object(f["a"])(Q,R,z,!1,null,null,null),te=ee.exports;d()(ee,{VLayout:M["a"],VSparkline:Z["a"]});var ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"align-center":"","justify-start":"",column:""}},[n("h1",[e._v("Challenges")]),n("p",[e._v("Here you can find your weekly challenges, make sure to mark as done when finished.")]),n("v-form",[n("v-checkbox",{attrs:{label:"1 day without driving car","append-icon":"time_to_leave",messages:["100 XP"]}}),n("v-checkbox",{attrs:{label:"1 day only eating leftovers","append-icon":"delete",messages:["75 XP"]},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),n("v-checkbox",{attrs:{label:"Buying no new clothes","append-icon":"sync",messages:["5 XP"]}})],1)],1)},ae=[],re={data:function(){return{checked:!0}}},oe=re,le=(n("7035"),n("ac7c")),ie=Object(f["a"])(oe,ne,ae,!1,null,"54dd4ab0",null),se=ie.exports;d()(ie,{VCheckbox:le["a"],VForm:q["a"],VLayout:M["a"]}),a["a"].use(L["a"]);var ce=new L["a"]({routes:[{path:"/",name:"home",component:F},{path:"/journal",name:"journal",component:G},{path:"/challenges",name:"challenges",component:se},{path:"/stats",name:"stats",component:te}]}),ue=n("2f62");a["a"].use(ue["a"]);var fe=new ue["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:ce,store:fe,render:function(e){return e(E)}}).$mount("#app")},7035:function(e,t,n){"use strict";var a=n("9339"),r=n.n(a);r.a},9339:function(e,t,n){},e234:function(e,t,n){}});
//# sourceMappingURL=app.6e4f8604.js.map