(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[115,181],{141:function(e,t,c){"use strict";var s=c(63),n=c(12),i=c(58),r=c(3);t.a=function(e){var t=Object(n.f)(),c=t.pathname.split("/")[1],o=t.pathname.split("/")[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:e.heading}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),c?Object(r.jsx)(s.d,{active:!0,children:c}):"",o?Object(r.jsx)(s.d,{active:!0,children:o}):""]})]})}},143:function(e,t,c){"use strict";var s=c(158);c(181);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},146:function(e,t,c){"use strict";c.r(t);var s=c(63),n=(c(1),c(3));function i(e){var t=e.details,c=void 0===t?null:t,i=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(s.eb,{children:[Object(n.jsx)(s.s,{children:i}),c&&Object(n.jsxs)(s.s,{children:[Object(n.jsx)(s.eb,{children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(n.jsx)(s.eb,{className:"d-flex",children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,r=e.subtitle,o=e.creationModificationDate;return Object(n.jsxs)(s.i,{className:"shadow-none",children:[Object(n.jsx)(i,{details:o,title:c}),Object(n.jsxs)(s.j,{className:"p-4",children:[Object(n.jsx)(s.m,{className:"text-muted mb-3",children:r||""}),Object(n.jsx)("div",{children:t})]})]})}},1496:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(9),i=c(27),r=c(1),o=c(63),a=c(158),l=c(12),d=c(141),j=c(146),b=c(7),h=c(143),O=c(3);t.default=function(){var e=Object(r.useState)({title:""}),t=Object(i.a)(e,2),c=t[0],u=t[1],x=Object(l.g)();return Object(r.useEffect)((function(){}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(d.a,{}),Object(O.jsx)(a.a,{}),Object(O.jsx)(o.eb,{children:Object(O.jsx)(o.s,{md:"6",xs:"12",children:Object(O.jsx)(j.default,{title:"Key Details",children:Object(O.jsxs)(o.A,{children:[Object(O.jsx)(o.C,{children:Object(O.jsx)(o.eb,{children:Object(O.jsxs)(o.s,{md:"12",children:[Object(O.jsxs)(o.H,{children:[" ","Title ",Object(O.jsx)("span",{className:"required",children:" *"})," "]}),Object(O.jsx)(o.E,{type:"text",name:"title",onChange:function(e){u(Object(n.a)(Object(n.a)({},c),{},Object(s.a)({},e.target.name,e.target.value)))}})]})})}),Object(O.jsx)(o.C,{children:Object(O.jsx)(o.eb,{children:Object(O.jsxs)("div",{className:"pt-3 mt-3 d-flex align-items-center gap-2",children:[Object(O.jsx)(o.e,{color:"primary",onClick:function(){b.a.post("/blog/insertBlog",c).then((function(e){var t=e.data.data.insertId;console.log(t),Object(h.a)("blog inserted successfully.","success"),setTimeout((function(){x("/BlogEdit/".concat(t))}),300)})).catch((function(){Object(h.a)("Network connection error.","error")}))},type:"button",className:"btn mr-2 shadow-none",children:"Save & Continue"}),Object(O.jsx)(o.e,{onClick:function(){x("/Blog")},type:"button",className:"btn btn-dark shadow-none",children:"Go to List"})]})})})]})})})})]})}}}]);
//# sourceMappingURL=115.aa10669f.chunk.js.map