(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[171],{1386:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c(6),s=c(27),i=c(1),r=c.n(i),d=c(63),j=c(299),l=c.n(j),o=c(12),b=c(7),u=c(141),h=c(3);t.default=function(){var e=r.a.useState([]),t=Object(s.a)(e,2),c=t[0],j=t[1],p=Object(i.useState)(""),O=Object(s.a)(p,2),x=O[0],f=O[1],m=Object(i.useState)(""),g=Object(s.a)(m,2),y=g[0],v=g[1],C=Object(i.useState)(""),_=Object(s.a)(C,2),S=_[0],H=_[1],w=Object(i.useState)(""),E=Object(s.a)(w,2),D=E[0],k=E[1],I=Object(i.useState)(""),N=Object(s.a)(I,2),F=N[0],V=N[1],A=Object(i.useState)(null),B=Object(s.a)(A,2),P=B[0],J=B[1],T=Object(o.h)().id,q=function(){b.a.get("/api/getCompany").then((function(e){j(e.data.data)})).catch((function(e){console.log(e)})),b.a.post("/api/getProjectById",{project_id:T}).then((function(e){console.log(e.data.data),f(e.data.data.title),V(e.data.data.company_id),v(e.data.data.description),H(e.data.data.start_date),k(e.data.data.start_date)})).catch((function(e){console.log(e)}))};Object(i.useEffect)((function(){return q(),function(){q()}}),[]);var M=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!==x&&""!==y&&""!==S&&""!==D&&""!==F?((t=new FormData).append("title",x),t.append("description",y),t.append("start_date",S),t.append("estimated_finish_date",D),t.append("company_id",F),t.append("project_id",T),null!=P&&t.append("attachment",P),b.a.post("/attachment/edit-projects",t).then((function(e){e&&"400"===e.data.status?alert("Cannot add project."):(l.a.fire({title:"Success",text:"Project Added!",icon:"success"}),window.location.reload())})).catch((function(e){console.log(e)}))):l.a.fire({title:"Field Missing",text:"Title,description & Dates are required",icon:"warning"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)(u.a,{}),Object(h.jsx)(d.eb,{children:Object(h.jsx)(d.s,{md:"12",children:Object(h.jsxs)(d.i,{children:[Object(h.jsx)(d.j,{className:"bg-light",children:Object(h.jsx)(d.o,{tag:"h4",className:"mb-0",children:"Project Info"})}),Object(h.jsx)(d.j,{children:Object(h.jsxs)(d.A,{children:[Object(h.jsxs)(d.eb,{children:[Object(h.jsx)(d.s,{md:"6",children:Object(h.jsxs)(d.C,{children:[Object(h.jsx)(d.H,{children:"Title"}),Object(h.jsx)(d.E,{defaultValue:x,onInput:function(e){return f(e.target.value)},type:"text",placeholder:""})]})}),Object(h.jsx)(d.s,{md:"6",children:Object(h.jsxs)(d.C,{children:[Object(h.jsx)(d.H,{children:"Description"}),Object(h.jsx)(d.E,{defaultValue:y,onInput:function(e){return v(e.target.value)},type:"text",placeholder:""})]})})]}),Object(h.jsxs)(d.eb,{children:[Object(h.jsx)(d.s,{md:"6",children:Object(h.jsxs)(d.C,{children:[Object(h.jsx)(d.H,{children:"Start Date"}),Object(h.jsx)(d.E,{defaultValue:S,onInput:function(e){return H(e.target.value)},type:"date",placeholder:"DOB Here"})]})}),Object(h.jsx)(d.s,{md:"6",children:Object(h.jsxs)(d.C,{children:[Object(h.jsx)(d.H,{children:"Estimated Finish Date"}),Object(h.jsx)(d.E,{defaultValue:D,onInput:function(e){return k(e.target.value)},type:"date",placeholder:"DOB Here"})]})})]}),Object(h.jsxs)(d.eb,{children:[Object(h.jsx)(d.s,{md:"6",children:Object(h.jsxs)(d.C,{children:[Object(h.jsx)(d.H,{children:"Company"}),Object(h.jsx)(d.E,{defaultChecked:F,onChange:function(e){return V(e.target.value)},type:"select",name:"Select Category",children:c.map((function(e){return Object(h.jsx)("option",{selected:F===e.company_id&&!0,value:e.company_id,children:e.company_name},e.company_id)}))})]})}),Object(h.jsxs)(d.s,{md:"6",children:[Object(h.jsx)(d.H,{children:"Attachments"}),Object(h.jsx)(d.C,{children:Object(h.jsx)(d.E,{onChange:function(e){J(e.target.files[0])},type:"file",placeholder:""})})]})]})]})}),Object(h.jsxs)(d.j,{className:"border-top gap-2 d-flex align-items-center",children:[Object(h.jsx)(d.e,{onClick:function(){M()},type:"submit",className:"btn btn-success",children:"Save"}),Object(h.jsx)(d.e,{type:"button",className:"btn btn-dark ml-2",children:"Cancel"})]})]})})})]})}},141:function(e,t,c){"use strict";var n=c(63),a=c(12),s=c(58),i=c(3);t.a=function(e){var t=Object(a.f)(),c=t.pathname.split("/")[1],r=t.pathname.split("/")[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:e.heading}),Object(i.jsxs)(n.c,{children:[Object(i.jsx)(n.d,{to:"/",tag:s.b,className:"text-decoration-none",children:"Home"}),c?Object(i.jsx)(n.d,{active:!0,children:c}):"",r?Object(i.jsx)(n.d,{active:!0,children:r}):""]})]})}}}]);
//# sourceMappingURL=171.6acfca27.chunk.js.map