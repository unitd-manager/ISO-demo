(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[111,181],{1094:function(e,t,i){},141:function(e,t,i){"use strict";var c=i(63),n=i(12),s=i(58),a=i(3);t.a=function(e){var t=Object(n.f)(),i=t.pathname.split("/")[1],r=t.pathname.split("/")[2];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:e.heading}),Object(a.jsxs)(c.c,{children:[Object(a.jsx)(c.d,{to:"/",tag:s.b,className:"text-decoration-none",children:"Home"}),i?Object(a.jsx)(c.d,{active:!0,children:i}):"",r?Object(a.jsx)(c.d,{active:!0,children:r}):""]})]})}},146:function(e,t,i){"use strict";i.r(t);var c=i(63),n=(i(1),i(3));function s(e){var t=e.details,i=void 0===t?null:t,s=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(c.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(c.eb,{children:[Object(n.jsx)(c.s,{children:s}),i&&Object(n.jsxs)(c.s,{children:[Object(n.jsx)(c.eb,{children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",i&&i.created_by," ",i&&i.creation_date]})}),Object(n.jsx)(c.eb,{className:"d-flex",children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",i&&i.modified_by," ",i&&i.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,i=e.title,a=e.subtitle,r=e.creationModificationDate;return Object(n.jsxs)(c.i,{className:"shadow-none",children:[Object(n.jsx)(s,{details:r,title:i}),Object(n.jsxs)(c.j,{className:"p-4",children:[Object(n.jsx)(c.m,{className:"text-muted mb-3",children:a||""}),Object(n.jsx)("div",{children:t})]})]})}},1463:function(e,t,i){"use strict";i.r(t);i(1);var c=i(1093),n=(i(1094),i(141)),s=i(146),a=i(3),r={FR:540,AU:360,GB:690,GE:200,IN:400,RO:600,RU:300,US:2920};t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(n.a,{}),Object(a.jsx)(s.default,{title:"World Map",children:Object(a.jsx)(c.VectorMap,{map:"world_mill",backgroundColor:"transparent",zoomOnScroll:!1,containerStyle:{width:"100%",height:"375px"},containerClassName:"map",regionStyle:{initial:{fill:"#d5e4e4","fill-opacity":.9,stroke:"1","stroke-width":1,"stroke-opacity":.5}},series:{regions:[{values:r,scale:["#1e88e5"]}]}})}),Object(a.jsx)(s.default,{title:"USA Map",children:Object(a.jsx)(c.VectorMap,{map:"us_aea",backgroundColor:"transparent",containerStyle:{width:"100%",height:"225px"},regionStyle:{initial:{fill:"#b8e9f1","fill-opacity":.9,stroke:"1","stroke-width":1,"stroke-opacity":.5}},containerClassName:"map"})})]})}}}]);
//# sourceMappingURL=111.2bd6f1e1.chunk.js.map