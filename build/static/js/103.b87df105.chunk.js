(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[103,181],{141:function(e,t,c){"use strict";var s=c(63),n=c(12),i=c(58),a=c(3);t.a=function(e){var t=Object(n.f)(),c=t.pathname.split("/")[1],r=t.pathname.split("/")[2];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:e.heading}),Object(a.jsxs)(s.c,{children:[Object(a.jsx)(s.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),c?Object(a.jsx)(s.d,{active:!0,children:c}):"",r?Object(a.jsx)(s.d,{active:!0,children:r}):""]})]})}},143:function(e,t,c){"use strict";var s=c(158);c(181);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},146:function(e,t,c){"use strict";c.r(t);var s=c(63),n=(c(1),c(3));function i(e){var t=e.details,c=void 0===t?null:t,i=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(s.eb,{children:[Object(n.jsx)(s.s,{children:i}),c&&Object(n.jsxs)(s.s,{children:[Object(n.jsx)(s.eb,{children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(n.jsx)(s.eb,{className:"d-flex",children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,a=e.subtitle,r=e.creationModificationDate;return Object(n.jsxs)(s.i,{className:"shadow-none",children:[Object(n.jsx)(i,{details:r,title:c}),Object(n.jsxs)(s.j,{className:"p-4",children:[Object(n.jsx)(s.m,{className:"text-muted mb-3",children:a||""}),Object(n.jsx)("div",{children:t})]})]})}},1516:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(9),i=c(27),a=c(1),r=c(63),o=c(12),l=c(158),d=c(141),j=c(146),b=c(143),u=c(7),h=c(203),O=c(67),m=c(3);t.default=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],x=t[1],g=Object(a.useContext)(O.b).loggedInuser,f=Object(o.g)(),p=Object(a.useState)([]),v=Object(i.a)(p,2),y=v[0],C=v[1],_=function(e){C(Object(n.a)(Object(n.a)({},y),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){u.a.get("/questionmanagement/getCategory").then((function(e){x(e.data.data)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)(d.a,{}),Object(m.jsx)(l.a,{}),Object(m.jsx)(r.eb,{children:Object(m.jsx)(r.s,{md:"6",children:Object(m.jsx)(j.default,{title:"Question Details",children:Object(m.jsx)(r.A,{children:Object(m.jsxs)(r.C,{children:[Object(m.jsx)(r.eb,{children:Object(m.jsxs)(r.s,{md:"12",children:[Object(m.jsx)(r.H,{children:"Category"}),Object(m.jsxs)(r.E,{type:"select",onChange:_,value:y&&y.category_id,name:"category_id",children:[Object(m.jsx)("option",{value:"selected",children:"Please Select"}),c&&c.map((function(e){return Object(m.jsxs)("option",{value:e.category_id,children:[" ",e.category_title]},e.category_id)}))]})]})}),Object(m.jsx)(r.eb,{children:Object(m.jsxs)(r.s,{md:"12",children:[Object(m.jsx)(r.H,{children:"Question"}),Object(m.jsx)(r.E,{type:"textarea",onChange:_,value:y&&y.question,name:"question"})]})}),Object(m.jsx)(r.eb,{children:Object(m.jsxs)("div",{className:"pt-3 mt-3 d-flex align-items-center gap-2",children:[Object(m.jsx)(r.e,{className:"shadow-none",color:"primary",onClick:function(){""!==y.title?(y.creation_date=h.a,y.created_by=g.first_name,u.a.post("/questionmanagement/insertQuestion",y).then((function(e){var t=e.data.data.insertId;Object(b.a)("Question inserted successfully.","success"),setTimeout((function(){f("/QuestionManagementEdit/".concat(t))}),300)})).catch((function(){Object(b.a)("Network connection error.","error")}))):Object(b.a)("Please fill all required fields.","error")},children:"Save"}),Object(m.jsx)(r.e,{onClick:function(){f(-1)},type:"button",className:"btn btn-dark shadow-none",children:"Cancel"})]})})]})})})})})]})}},203:function(e,t,c){"use strict";var s=c(186),n=c.n(s)()().format("DD-MM-YYYY h:mm:ss a");t.a=n}}]);
//# sourceMappingURL=103.b87df105.chunk.js.map