(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[108,181],{141:function(e,t,c){"use strict";var s=c(63),n=c(12),a=c(58),i=c(3);t.a=function(e){var t=Object(n.f)(),c=t.pathname.split("/")[1],r=t.pathname.split("/")[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:e.heading}),Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.d,{to:"/",tag:a.b,className:"text-decoration-none",children:"Home"}),c?Object(i.jsx)(s.d,{active:!0,children:c}):"",r?Object(i.jsx)(s.d,{active:!0,children:r}):""]})]})}},143:function(e,t,c){"use strict";var s=c(158);c(181);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},146:function(e,t,c){"use strict";c.r(t);var s=c(63),n=(c(1),c(3));function a(e){var t=e.details,c=void 0===t?null:t,a=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(s.eb,{children:[Object(n.jsx)(s.s,{children:a}),c&&Object(n.jsxs)(s.s,{children:[Object(n.jsx)(s.eb,{children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(n.jsx)(s.eb,{className:"d-flex",children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,i=e.subtitle,r=e.creationModificationDate;return Object(n.jsxs)(s.i,{className:"shadow-none",children:[Object(n.jsx)(a,{details:r,title:c}),Object(n.jsxs)(s.j,{className:"p-4",children:[Object(n.jsx)(s.m,{className:"text-muted mb-3",children:i||""}),Object(n.jsx)("div",{children:t})]})]})}},1502:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(9),a=c(27),i=c(1),r=c(63),l=c(158),o=c(12),d=c(141),j=c(146),b=c(7),u=c(143),h=c(203),O=c(3);t.default=function(){var e=Object(i.useState)(),t=Object(a.a)(e,2),c=t[0],x=t[1],m=Object(i.useState)({key_text:"",value:""}),p=Object(a.a)(m,2),f=p[0],g=p[1],v=Object(o.h)().id,y=Object(o.g)(),C=function(e){g(Object(n.a)(Object(n.a)({},f),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(i.useEffect)((function(){b.a.get("/valuelist/getValueListDropdown").then((function(e){x(e.data.data)})).catch((function(){Object(u.a)("Unable to edit record.","error")}))}),[v]),Object(O.jsxs)("div",{children:[Object(O.jsx)(d.a,{}),Object(O.jsx)(l.a,{}),Object(O.jsx)(r.eb,{children:Object(O.jsx)(r.s,{md:"6",xs:"12",children:Object(O.jsx)(j.default,{title:"Key Details",children:Object(O.jsxs)(r.A,{children:[Object(O.jsx)(r.C,{children:Object(O.jsx)(r.eb,{children:Object(O.jsxs)(r.s,{md:"12",children:[Object(O.jsxs)(r.H,{children:["Value List Name ",Object(O.jsx)("span",{className:"required",children:" *"})]}),Object(O.jsxs)(r.E,{type:"select",onChange:C,value:f&&f.key_text,name:"key_text",children:[Object(O.jsx)("option",{defaultValue:"selected",children:"Please Select"}),c&&c.map((function(e){return Object(O.jsx)("option",{value:e.name,children:e.name},e.name)}))]})]})})}),Object(O.jsx)(r.C,{children:Object(O.jsx)(r.eb,{children:Object(O.jsxs)(r.s,{md:"12",children:[Object(O.jsxs)(r.H,{children:["Value",Object(O.jsx)("span",{className:"required",children:" *"})]}),Object(O.jsx)(r.E,{type:"text",onChange:C,value:f&&f.value,name:"value"})]})})}),Object(O.jsx)(r.C,{children:Object(O.jsx)(r.eb,{children:Object(O.jsxs)("div",{className:"pt-3 mt-3 d-flex align-items-center gap-2",children:[Object(O.jsx)(r.e,{color:"primary",type:"button",className:"btn mr-2 shadow-none",onClick:function(){""!==f.key_text&&""!==f.value?(f.creation_date=h.a,b.a.post("/valuelist/insertValueList",f).then((function(e){var t=e.data.data.insertId;Object(u.a)("Valuelist inserted successfully.","success"),setTimeout((function(){y("/ValueListEdit/".concat(t))}),300)})).catch((function(){Object(u.a)("Unable to edit record.","error")}))):Object(u.a)("Please fill all required fields","warning")},children:"Save & Continue"}),Object(O.jsx)(r.e,{type:"submit",className:"btn btn-dark shadow-none",onClick:function(e){window.confirm("Are you sure you want to cancel? ")?y("/Valuelist"):e.preventDefault()},children:"Cancel"})]})})})]})})})})]})}},203:function(e,t,c){"use strict";var s=c(186),n=c.n(s)()().format("DD-MM-YYYY h:mm:ss a");t.a=n}}]);
//# sourceMappingURL=108.3ee11d32.chunk.js.map