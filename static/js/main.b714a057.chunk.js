(this.webpackJsonpworldtime=this.webpackJsonpworldtime||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),i=n.n(r),s=(n(14),n(9)),o=n(3),j=n.n(o),u=n(5),l=n(2),d=n(0),b=Object(c.createContext)(),O=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(d.jsx)(b.Provider,{value:[a,r],children:e.children})},h=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1];return{data:n,getData:function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t).then((function(e){return e.json()})).then((function(e){return a(e),e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},p=function(){var e=h(),t=(e.data,e.getData),n=Object(c.useState)(),a=Object(l.a)(n,2),r=a[0],i=a[1],o=Object(c.useContext)(b),O=Object(l.a)(o,2),p=(O[0],O[1]),m=function(){var e=Object(u.a)(j.a.mark((function e(n){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.target.value,e.next=3,t("https://worldtimeapi.org/api/timezone/"+c);case 3:a=e.sent,i(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.target.value,e.next=3,t("https://worldtimeapi.org/api/timezone/"+c).then((function(e){p((function(t){return[].concat(Object(s.a)(t),[e])}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"selectlocation",children:Object(d.jsxs)("div",{className:"dropdown",children:[Object(d.jsx)("select",{name:"continent",id:"continent",onChange:m,children:["Africa","America","Antarctica","Asia","Atlantic","Australia","Europe","Indian","Pacific"].map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))}),r&&Object(d.jsx)("select",{name:"areas",id:"areas",onChange:f,children:r.map((function(e){return Object(d.jsx)("option",{value:e,children:e.slice(e.indexOf("/")+1,e.length)},e)}))})]})})},m=n(19),f=function(e){var t=e.data.datetime.substring(0,26),n=e.data.timezone,a=Object(c.useContext)(b),r=Object(l.a)(a,2),i=r[0],s=r[1];return Object(d.jsx)(d.Fragment,{children:e.data&&Object(d.jsxs)("div",{className:"card",onClick:function(){var e=i.filter((function(e){return e.timezone!==n}));s(e)},children:[Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("p",{className:"place",children:n.slice(n.indexOf("/")+1,n.length)}),Object(d.jsx)("p",{className:"time",children:Object(m.a)(new Date(Date.parse(t)),"h:m a")}),Object(d.jsx)("p",{className:"date",children:Object(m.a)(new Date(t),"EEEE, do LLL.")})]}),Object(d.jsxs)("div",{className:"contain",children:[Object(d.jsx)("div",{className:"gradient"}),Object(d.jsx)("img",{src:function(){var e=new Date(Date.parse(t)).getHours();return 6<=e&&e<=11?"/images/morning.png":12<=e&&e<=16?"/images/afternoon.png":17<=e&&e<=20?"/images/evening.png":21<=e&&e<=24||1<=e&&e<=5?"/images/night.png":void 0}(),alt:""})]})]})})},x=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("https://worldtimeapi.org/api/ip").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),Object(d.jsx)("div",{className:"helper",children:n&&Object(d.jsxs)("div",{className:"yourlocation",children:[Object(d.jsx)("p",{className:"annot",children:"Your Current Location"}),Object(d.jsx)(f,{data:n})]})})},v=function(){var e=Object(c.useContext)(b),t=Object(l.a)(e,2),n=t[0];t[1];return Object(d.jsx)(d.Fragment,{children:n.length>0&&Object(d.jsx)("div",{className:"otherlocations",children:Object(d.jsxs)("div",{className:"bruh",children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"locationlist",children:n.map((function(e,t){return Object(d.jsx)(f,{data:e},t)}))})]})})})},g=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("p",{className:"title",children:"World Time"})})};var N=function(){return Object(d.jsx)(O,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{}),Object(d.jsx)(p,{}),Object(d.jsx)(x,{}),Object(d.jsx)(v,{})]})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b714a057.chunk.js.map