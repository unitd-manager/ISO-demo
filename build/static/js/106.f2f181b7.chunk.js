(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[106,181],{141:function(e,t,s){"use strict";var c=s(63),i=s(12),a=s(58),n=s(3);t.a=function(e){var t=Object(i.f)(),s=t.pathname.split("/")[1],r=t.pathname.split("/")[2];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:e.heading}),Object(n.jsxs)(c.c,{children:[Object(n.jsx)(c.d,{to:"/",tag:a.b,className:"text-decoration-none",children:"Home"}),s?Object(n.jsx)(c.d,{active:!0,children:s}):"",r?Object(n.jsx)(c.d,{active:!0,children:r}):""]})]})}},143:function(e,t,s){"use strict";var c=s(158);s(181);t.a=function(e,t){return"success"===t?c.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?c.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?c.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?c.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(c.b)(e)}},146:function(e,t,s){"use strict";s.r(t);var c=s(63),i=(s(1),s(3));function a(e){var t=e.details,s=void 0===t?null:t,a=e.title;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(c.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(i.jsxs)(c.eb,{children:[Object(i.jsx)(c.s,{children:a}),s&&Object(i.jsxs)(c.s,{children:[Object(i.jsx)(c.eb,{children:Object(i.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",s&&s.created_by," ",s&&s.creation_date]})}),Object(i.jsx)(c.eb,{className:"d-flex",children:Object(i.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",s&&s.modified_by," ",s&&s.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,s=e.title,n=e.subtitle,r=e.creationModificationDate;return Object(i.jsxs)(c.i,{className:"shadow-none",children:[Object(i.jsx)(a,{details:r,title:s}),Object(i.jsxs)(c.j,{className:"p-4",children:[Object(i.jsx)(c.m,{className:"text-muted mb-3",children:n||""}),Object(i.jsx)("div",{children:t})]})]})}},1512:function(e,t,s){"use strict";s.r(t);var c=s(2),i=s(9),a=s(27),n=s(1),r=s.n(n),l=s(63),o=s(12),d=s(158),j=s(141),b=s(146),h=s(7),O=s(143),m=s(203),u=s(3);t.default=function(){var e=r.a.useState({email:"",first_name:""}),t=Object(a.a)(e,2),s=t[0],n=t[1],x=Object(o.g)(),f=function(e){n(Object(i.a)(Object(i.a)({},s),{},Object(c.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)("div",{children:[Object(u.jsx)(j.a,{}),Object(u.jsx)(d.a,{}),Object(u.jsx)(l.eb,{children:Object(u.jsx)(l.s,{md:"6",xs:"12",children:Object(u.jsxs)(b.default,{title:"key Details",children:[Object(u.jsx)(l.C,{children:Object(u.jsx)(l.eb,{children:Object(u.jsxs)(l.s,{md:"12",children:[Object(u.jsxs)(l.H,{children:["Name",Object(u.jsx)("span",{className:"required",children:" *"})]}),Object(u.jsx)(l.E,{type:"text",onChange:f,name:"first_name"})]})})}),Object(u.jsx)(l.C,{children:Object(u.jsx)(l.eb,{children:Object(u.jsxs)(l.s,{md:"12",children:[Object(u.jsxs)(l.H,{children:["Email",Object(u.jsx)("span",{className:"required",children:" *"})]}),Object(u.jsx)(l.E,{type:"email",onChange:f,value:s&&s.email,name:"email"})]})})}),Object(u.jsx)(l.C,{children:Object(u.jsx)(l.eb,{children:Object(u.jsxs)("div",{className:"pt-3 mt-3 d-flex align-items-center gap-2",children:[Object(u.jsx)(l.e,{color:"primary",type:"button",className:"btn mr-2 shadow-none",onClick:function(){s.creation_date=m.a,s.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(s.email)?""!==s.email&&""!==s.first_name?h.a.post("/staff/insertStaff",s).then((function(e){var t=e.data.data.insertId;Object(O.a)("Staff Details inserted successfully.","success"),setTimeout((function(){x("/StaffEdit/".concat(t))}),300)})).catch((function(){Object(O.a)("Unable to edit record.","error")})):Object(O.a)("please fill all fields.","warning"):Object(O.a)("Invalid email address","warning"):Object(O.a)("Email is required","warning")},children:"Save & Continue"}),Object(u.jsx)(l.e,{type:"submit",className:"btn btn-dark shadow-none",onClick:function(e){window.confirm("Are you sure you want to cancel? ")?x("/Staff"):e.preventDefault()},children:"Cancel"})]})})})]})})})]})}},203:function(e,t,s){"use strict";var c=s(186),i=s.n(c)()().format("DD-MM-YYYY h:mm:ss a");t.a=i}}]);
//# sourceMappingURL=106.f2f181b7.chunk.js.map