(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[177,192],{146:function(e,t,s){"use strict";s.r(t);var i=s(63),c=(s(1),s(2));function n(e){var t=e.details,s=void 0===t?null:t,n=e.title;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(i.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(c.jsxs)(i.eb,{children:[Object(c.jsx)(i.s,{children:n}),s&&Object(c.jsxs)(i.s,{children:[Object(c.jsx)(i.eb,{children:Object(c.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",s&&s.created_by," ",s&&s.creation_date]})}),Object(c.jsx)(i.eb,{className:"d-flex",children:Object(c.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",s&&s.modified_by," ",s&&s.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,s=e.title,a=e.subtitle,r=e.creationModificationDate;return Object(c.jsxs)(i.i,{className:"shadow-none",children:[Object(c.jsx)(n,{details:r,title:s}),Object(c.jsxs)(i.j,{className:"p-4",children:[Object(c.jsx)(i.m,{className:"text-muted mb-3",children:a||""}),Object(c.jsx)("div",{children:t})]})]})}},1468:function(e,t,s){"use strict";s.r(t);var i=s(11),c=s(27),n=s(1),a=s.n(n),r=s(63),d=s(1146),j=s(1102),l=s(146),b=s(2),o={CanEdit:{action:"Can-edit",subject:"address"},CanDelete:{action:"Can-delete",subject:"address"}},m={admin:{permissions:["CanEdit","CanDelete"]},Manager:{permissions:["CanEdit"]},SubscriberReadOnly:{permissions:[]}},u=[{city:"New York",street:"5684 Max Summit",type:"address"},{city:"Manhatten York",street:"5684 Max Summit",type:"address"},{city:"Canada street York",street:"5684 Max Summit",type:"address"},{city:"Delhi street",street:"5684 Max Summit",type:"address"},{city:"UP Chawk",street:"5684 Max Summit",type:"address"}];t.default=function(){var e=a.a.useState(Object.keys(m)[0]),t=Object(c.a)(e,2),s=t[0],n=t[1],h=m[s].permissions.map((function(e){return o[e]})),x=Object(i.a)(h.reduce((function(e,t){var s=t.action;return e.add(s),e}),new Set)),O=Object(d.a)((function(e){h.forEach((function(t){var s=t.action,i=t.subject;e(s,i)}))}));return Object(b.jsx)(r.eb,{children:Object(b.jsx)(r.s,{lg:"12",children:Object(b.jsxs)(l.default,{title:"Roll base Access",children:[Object(b.jsx)(r.g,{children:Object.entries(m).map((function(e){var t=Object(c.a)(e,1)[0];return Object(b.jsx)(r.e,{outline:s!==t,color:"primary",onClick:function(){return n(t)},children:t},t)}))}),Object(b.jsx)("div",{className:"p-3 bg-light mt-3",children:m[s].permissions.map((function(e){return Object(b.jsx)("div",{children:e},e)}))}),Object(b.jsx)(r.I,{className:"mt-4",children:u.map((function(e){var t=e.city,s=e.street,i=e.type;return Object(b.jsx)(r.J,{children:Object(b.jsxs)("div",{children:[t,", ",s,x.map((function(e){return Object(b.jsx)(j.a,{I:e,a:i,ability:O,children:Object(b.jsx)(r.e,{className:"mx-1",size:"sm",children:e})})}))]})},t)}))})]})})})}}}]);
//# sourceMappingURL=177.c5f0bda7.chunk.js.map