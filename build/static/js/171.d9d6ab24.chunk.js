(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[171],{1483:function(e,t,c){"use strict";c.r(t);var n=c(27),s=c(1),j=c(527),l=c(807),a=c(58),o=(c(652),c(63)),r=c(1038),i=c(631),d=c.n(i),b=(c(808),c(7)),h=c(928),x=c(929),O=c(1010),u=c(927),p=c(3);var m=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(o.i,{style:{padding:"10px"},children:[Object(p.jsxs)(o.eb,{className:"mb-1",children:[Object(p.jsxs)(o.s,{className:"d-flex ",children:[Object(p.jsx)(h.a,{}),Object(p.jsx)("h2",{className:"ms-3 fw-bolder",children:"Reports"})]}),Object(p.jsxs)(o.s,{className:"d-flex justify-content-end ",children:[Object(p.jsx)("p",{style:{marginRight:"10px"},className:"fw-bolder",children:"Choose Report Name"}),Object(p.jsx)(o.C,{children:Object(p.jsx)(o.E,{type:"select",name:"Select Category",style:{padding:"5px 120px",alignItems:"left"},children:Object(p.jsx)("option",{children:"Sales by Model [by Qty]"})})})]})]}),Object(p.jsx)(o.eb,{className:"mb-1",children:Object(p.jsxs)(o.s,{className:"d-flex justify-content-end px-10",children:[Object(p.jsx)("div",{children:Object(p.jsxs)(o.E,{type:"select",className:"custom-select",children:[Object(p.jsx)("option",{value:"0",children:"Start Month"}),Object(p.jsx)("option",{value:"1",children:"January"}),Object(p.jsx)("option",{value:"2",children:"February"}),Object(p.jsx)("option",{value:"3",children:"March"}),Object(p.jsx)("option",{value:"4",children:"April"}),Object(p.jsx)("option",{value:"5",children:"May"}),Object(p.jsx)("option",{value:"6",children:"June"}),Object(p.jsx)("option",{value:"7",children:"July"}),Object(p.jsx)("option",{value:"8",children:"August"}),Object(p.jsx)("option",{value:"9",children:"September"}),Object(p.jsx)("option",{value:"10",children:"October"}),Object(p.jsx)("option",{value:"11",children:"November"}),Object(p.jsx)("option",{value:"12",children:"December"})]})}),Object(p.jsx)("div",{className:"ms-2",children:Object(p.jsxs)(o.E,{type:"select",className:"custom-select",children:[Object(p.jsx)("option",{value:"0",children:"Start Month"}),Object(p.jsx)("option",{value:"1",children:"January"}),Object(p.jsx)("option",{value:"2",children:"February"}),Object(p.jsx)("option",{value:"3",children:"March"}),Object(p.jsx)("option",{value:"4",children:"April"}),Object(p.jsx)("option",{value:"5",children:"May"}),Object(p.jsx)("option",{value:"6",children:"June"}),Object(p.jsx)("option",{value:"7",children:"July"}),Object(p.jsx)("option",{value:"8",children:"August"}),Object(p.jsx)("option",{value:"9",children:"September"}),Object(p.jsx)("option",{value:"10",children:"October"}),Object(p.jsx)("option",{value:"11",children:"November"}),Object(p.jsx)("option",{value:"12",children:"December"})]})}),Object(p.jsxs)(o.e,{style:{background:"#4684B3",border:"1px solid #CEE1EF",marginLeft:"5px"},children:[Object(p.jsx)(x.a,{})," Show Report"]}),Object(p.jsx)(O.a,{className:"mt-2"}),Object(p.jsx)(o.e,{style:{background:"#2CB562",border:"1px solid #CEE1EF"},children:Object(p.jsx)(u.a,{})})]})}),Object(p.jsxs)(o.eb,{className:"fw-bolder",style:{fontfamily:"Square Peg"},children:[Object(p.jsx)("h2",{children:"Sales by Model [by Qty]"}),Object(p.jsx)("p",{children:"Start Month: "}),Object(p.jsx)("p",{children:"End Month: "})]}),Object(p.jsxs)(o.ib,{className:"border",children:[Object(p.jsxs)("thead",{className:"text-center",children:[Object(p.jsx)("th",{className:"border","md-2":!0,children:"#"}),Object(p.jsx)("th",{children:"Sub Model"})]}),Object(p.jsx)("tbody",{className:"text-light bg-dark",style:{textAlign:"right"},children:Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colSpan:"2",children:"Total Qty"})})})]})]})})};t.default=function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1],h=Object(s.useState)(""),x=Object(n.a)(h,2),O=x[0],u=x[1],y=Object(s.useState)([]),v=Object(n.a)(y,2),g=v[0],f=v[1],S=Object(s.useState)(""),C=Object(n.a)(S,2),N=C[0],E=C[1],_=Object(s.useRef)(null),T=function(){b.a.get("/api/getProjects").then((function(e){console.log(e.data),i(e.data.data),f(e.data.data);var t=e.data.data,c=[["S.no","Code","Title","Company","Contact","Category","STATUS"]];t.forEach((function(e){c.push(["",e.project_code,e.title,e.company_name,e.contact_name,e.category,e.status])})),console.log(c),u(c)})).catch((function(e){console.log(e)}))};return Object(s.useEffect)((function(){return T(),function(){T()}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{}),Object(p.jsx)(o.eb,{children:Object(p.jsx)(o.s,{children:Object(p.jsx)(o.i,{children:Object(p.jsxs)(o.j,{children:[Object(p.jsxs)(o.eb,{children:[Object(p.jsxs)(o.s,{md:"6",children:[Object(p.jsx)(a.b,{to:"/projects/addproject",children:Object(p.jsx)(o.e,{color:"primary",className:"mt-3",children:"Add Project"})}),Object(p.jsx)(r.CSVLink,{style:{marginTop:18,marginRight:10,marginLeft:10},className:"btn btn-block btn-success",data:O,children:"Excel"}),Object(p.jsx)(o.e,{onClick:function(){!function(){var e=new d.a("portrait","pt","A4");e.setFontSize(15);var t={startY:50,head:[["S.no","Code","Title","Company","Contact","Category","STATUS"]],body:c.map((function(e){return["",e.project_code,e.title,e.company_name,e.contact_name,e.category,e.status]}))};e.text("Project Report",40,40),e.autoTable(t),e.save("report.pdf")}()},color:"danger btn-outline",className:"mt-3",children:"PDF"})]}),Object(p.jsx)(o.s,{md:"2"}),Object(p.jsx)(o.s,{md:"4",children:Object(p.jsxs)(o.C,{children:[Object(p.jsx)(o.H,{children:"Status"}),Object(p.jsxs)(o.E,{onChange:function(e){E(e.target.value),console.log(N);var t=e.target.value,c=[["S.no","Code","Title","Company","Contact","Category","STATUS"]],n=[];g.forEach((function(e){e.status===t&&(n.push(e),c.push(["",e.project_code,e.title,e.company_name,e.contact_name,e.category,e.status]))})),console.log(c),u(c),i(n)},type:"select",name:"Select Category",children:[Object(p.jsx)("option",{value:"",children:"All"}),Object(p.jsx)("option",{value:"WIP",children:"WIP"}),Object(p.jsx)("option",{value:"Closed",children:"Closed"}),Object(p.jsx)("option",{value:"Hold",children:"Hold"})]})]})})]}),Object(p.jsxs)(o.ib,{ref:_,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"#"}),Object(p.jsx)("th",{}),Object(p.jsx)("th",{children:Object(p.jsx)(j.a,{})}),Object(p.jsx)("th",{children:"Code"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Company"}),Object(p.jsx)("th",{children:"Contact"}),Object(p.jsx)("th",{children:"Category"}),Object(p.jsx)("th",{children:"Status"})]})}),c.map((function(e){return Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.project_id}),Object(p.jsx)("td",{children:Object(p.jsx)(a.b,{to:"editproject/".concat(e.project_id),children:Object(p.jsx)(l.a,{})})}),Object(p.jsx)("td",{children:Object(p.jsx)(j.a,{})}),Object(p.jsx)("td",{children:e.project_code}),Object(p.jsx)("td",{children:e.title}),Object(p.jsx)("td",{children:e.company_name}),Object(p.jsx)("td",{children:e.contact_name}),Object(p.jsx)("td",{children:e.category}),Object(p.jsx)("td",{children:e.status})]})})}))]})]})})})})]})}}}]);
//# sourceMappingURL=171.d9d6ab24.chunk.js.map