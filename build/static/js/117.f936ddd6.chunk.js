(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[117,181],{141:function(e,t,c){"use strict";var s=c(63),i=c(12),n=c(58),r=c(3);t.a=function(e){var t=Object(i.f)(),c=t.pathname.split("/")[1],a=t.pathname.split("/")[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:e.heading}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.d,{to:"/",tag:n.b,className:"text-decoration-none",children:"Home"}),c?Object(r.jsx)(s.d,{active:!0,children:c}):"",a?Object(r.jsx)(s.d,{active:!0,children:a}):""]})]})}},143:function(e,t,c){"use strict";var s=c(158);c(181);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},146:function(e,t,c){"use strict";c.r(t);var s=c(63),i=(c(1),c(3));function n(e){var t=e.details,c=void 0===t?null:t,n=e.title;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(i.jsxs)(s.eb,{children:[Object(i.jsx)(s.s,{children:n}),c&&Object(i.jsxs)(s.s,{children:[Object(i.jsx)(s.eb,{children:Object(i.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(i.jsx)(s.eb,{className:"d-flex",children:Object(i.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,r=e.subtitle,a=e.creationModificationDate;return Object(i.jsxs)(s.i,{className:"shadow-none",children:[Object(i.jsx)(n,{details:a,title:c}),Object(i.jsxs)(s.j,{className:"p-4",children:[Object(i.jsx)(s.m,{className:"text-muted mb-3",children:r||""}),Object(i.jsx)("div",{children:t})]})]})}},1488:function(e,t,c){"use strict";c.r(t);var s=c(2),i=c(9),n=c(27),r=c(1),a=c(63),o=c(158),d=c(12),l=c(141),j=c(146),b=c(143),h=c(7),u=c(3);t.default=function e(){var t=Object(r.useState)(),c=Object(n.a)(t,2),O=c[0],x=c[1],m=Object(d.g)(),p=Object(r.useState)({title:"",item_code:"",site_id:0}),f=Object(n.a)(p,2),g=f[0],v=f[1];return Object(r.useEffect)((function(){h.a.get("/product/getMaxItemCode").then((function(e){x(e.data.data[0].itemc)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)(l.a,{}),Object(u.jsx)(o.a,{}),Object(u.jsx)(a.eb,{children:Object(u.jsx)(a.s,{md:"6",children:Object(u.jsx)(j.default,{title:"Key Details",children:Object(u.jsxs)(a.A,{children:[Object(u.jsx)(a.C,{children:Object(u.jsx)(a.eb,{children:Object(u.jsxs)(a.s,{md:"12",children:[Object(u.jsxs)(a.H,{children:["Title",Object(u.jsx)("span",{className:"required",children:" *"})]}),Object(u.jsx)(a.E,{type:"text",onChange:function(e){v(Object(i.a)(Object(i.a)({},g),{},Object(s.a)({},e.target.name,e.target.value)))},value:e&&e.title,name:"title"})]})})}),Object(u.jsx)(a.C,{children:Object(u.jsx)(a.eb,{children:Object(u.jsxs)("div",{className:"pt-3 mt-3 d-flex align-items-center gap-2",children:[Object(u.jsx)(a.e,{className:"shadow-none",color:"primary",onClick:function(){g.item_code=parseFloat(O)+1,""!==g.title&&""!==g.item_code?h.a.post("/product/insertProduct",g).then((function(e){var t=e.data.data.insertId;Object(b.a)("Product inserted successfully.","success"),setTimeout((function(){m("/ProductEdit/".concat(t))}),300)})).catch((function(){Object(b.a)("Unable to edit record.","error")})):Object(b.a)("Please fill all required fields.","warning")},children:"Save & Continue"}),Object(u.jsx)(a.e,{onClick:function(){m("/ProductEdit")},type:"button",className:"btn btn-dark shadow-none",children:"Cancel"})]})})})]})})})})]})}}}]);
//# sourceMappingURL=117.f936ddd6.chunk.js.map