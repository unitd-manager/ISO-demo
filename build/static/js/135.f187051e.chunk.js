(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[135,181],{141:function(e,t,c){"use strict";var i=c(63),n=c(12),s=c(58),a=c(3);t.a=function(e){var t=Object(n.f)(),c=t.pathname.split("/")[1],r=t.pathname.split("/")[2];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:e.heading}),Object(a.jsxs)(i.c,{children:[Object(a.jsx)(i.d,{to:"/",tag:s.b,className:"text-decoration-none",children:"Home"}),c?Object(a.jsx)(i.d,{active:!0,children:c}):"",r?Object(a.jsx)(i.d,{active:!0,children:r}):""]})]})}},146:function(e,t,c){"use strict";c.r(t);var i=c(63),n=(c(1),c(3));function s(e){var t=e.details,c=void 0===t?null:t,s=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(i.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(i.eb,{children:[Object(n.jsx)(i.s,{children:s}),c&&Object(n.jsxs)(i.s,{children:[Object(n.jsx)(i.eb,{children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(n.jsx)(i.eb,{className:"d-flex",children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,a=e.subtitle,r=e.creationModificationDate;return Object(n.jsxs)(i.i,{className:"shadow-none",children:[Object(n.jsx)(s,{details:r,title:c}),Object(n.jsxs)(i.j,{className:"p-4",children:[Object(n.jsx)(i.m,{className:"text-muted mb-3",children:a||""}),Object(n.jsx)("div",{children:t})]})]})}},1469:function(e,t,c){"use strict";c.r(t);var i=c(27),n=c(1),s=c(63),a=c(303),r=c.n(a),j=c(141),d=c(146),l=c(7),o=c(3);t.default=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(j.a,{}),Object(o.jsx)(s.eb,{children:Object(o.jsx)(s.s,{md:"12",children:Object(o.jsx)(d.default,{title:"Add Projects",children:Object(o.jsxs)(s.A,{children:[Object(o.jsxs)(s.C,{children:[Object(o.jsx)(s.H,{htmlFor:"exampleEmail12",children:"Project Name"}),Object(o.jsx)(s.E,{type:"email",name:"email",id:"exampleEmail12",onInput:function(e){return a(e.target.value)}})]}),Object(o.jsx)(s.e,{onClick:function(){""!==c?l.a.post("/api/addProject",{title:c}).then((function(e){e&&"400"===e.data.status?alert("Cannot add project."):(r.a.fire({title:"Success",text:"Project Added!",icon:"success"}),window.location.reload())})).catch((function(e){console.log(e)})):r.a.fire({title:"Error",text:"Project name is required!",icon:"warning"})},color:"primary",children:"Submit"})]})})})})]})}}}]);
//# sourceMappingURL=135.f187051e.chunk.js.map