(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[91,168],{141:function(e,t,c){"use strict";var s=c(63),n=c(12),i=c(58),r=c(3);t.a=function(e){var t=Object(n.f)(),c=t.pathname.split("/")[1],a=t.pathname.split("/")[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:e.heading}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),c?Object(r.jsx)(s.d,{active:!0,children:c}):"",a?Object(r.jsx)(s.d,{active:!0,children:a}):""]})]})}},1418:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(9),i=c(27),r=c(1),a=c(63),o=c(160),l=c(12),d=c(143),j=c(141),b=c(147),h=c(7),O=c(219),u=c(3);t.default=function(){var e=Object(l.g)(),t=Object(l.h)().id,c=Object(r.useState)({section_title:""}),x=Object(i.a)(c,2),m=x[0],p=x[1];return Object(r.useEffect)((function(){}),[t]),Object(u.jsxs)("div",{children:[Object(u.jsx)(j.a,{}),Object(u.jsx)(o.a,{}),Object(u.jsx)(a.eb,{children:Object(u.jsx)(a.s,{md:"6",xs:"12",children:Object(u.jsx)(b.default,{title:"Key Details",children:Object(u.jsxs)(a.A,{children:[Object(u.jsx)(a.C,{children:Object(u.jsx)(a.eb,{children:Object(u.jsxs)(a.s,{md:"12",children:[Object(u.jsxs)(a.H,{children:["Title",Object(u.jsx)("span",{className:"required",children:" *"})]}),Object(u.jsx)(a.E,{type:"text",name:"section_title",onChange:function(e){!function(e){p(Object(n.a)(Object(n.a)({},m),{},Object(s.a)({},e.target.name,e.target.value)))}(e)}})]})})}),Object(u.jsx)(a.C,{children:Object(u.jsx)(a.eb,{children:Object(u.jsxs)("div",{className:"pt-3 mt-3 d-flex align-items-center gap-2",children:[Object(u.jsx)(a.e,{color:"primary",onClick:function(){""!==m.section_title?(m.created_date=O.a,h.a.post("/section/insertSection",m).then((function(t){var c=t.data.data.insertId;console.log(c),Object(d.a)("Section inserted successfully.","success"),setTimeout((function(){e("/SectionEdit/".concat(c))}),300)})).catch((function(){Object(d.a)("Network connection error.","error")}))):Object(d.a)("Please fill all required fields","warning")},type:"button",className:"btn mr-2 shadow-none",children:"Save & Continue"}),Object(u.jsx)(a.e,{onClick:function(){e(-1)},type:"button",className:"btn btn-dark shadow-none",children:"Go to List"})]})})})]})})})})]})}},143:function(e,t,c){"use strict";var s=c(160);c(184);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},147:function(e,t,c){"use strict";c.r(t);var s=c(63),n=(c(1),c(3));function i(e){var t=e.details,c=void 0===t?null:t,i=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(s.eb,{children:[Object(n.jsx)(s.s,{children:i}),c&&Object(n.jsxs)(s.s,{children:[Object(n.jsx)(s.eb,{children:Object(n.jsxs)("small",{children:["Modification Date: ",c&&c.modification_date]})}),Object(n.jsx)(s.eb,{className:"d-flex",children:Object(n.jsxs)("small",{children:["Creation Date: ",c&&c.creation_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,r=e.subtitle,a=e.creationModificationDate;return Object(n.jsxs)(s.i,{className:"shadow-none",children:[Object(n.jsx)(i,{details:a,title:c}),Object(n.jsxs)(s.j,{className:"p-4",children:[Object(n.jsx)(s.m,{className:"text-muted mb-3",children:r||""}),Object(n.jsx)("div",{children:t})]})]})}},219:function(e,t,c){"use strict";var s=c(189),n=c.n(s)()().format("DD-MM-YYYY h:mm:ss a");t.a=n}}]);
//# sourceMappingURL=91.05be511e.chunk.js.map