(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[120,168],{141:function(a,t,e){"use strict";var s=e(63),r=e(12),i=e(58),l=e(3);t.a=function(a){var t=Object(r.f)(),e=t.pathname.split("/")[1],n=t.pathname.split("/")[2];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:a.heading}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),e?Object(l.jsx)(s.d,{active:!0,children:e}):"",n?Object(l.jsx)(s.d,{active:!0,children:n}):""]})]})}},147:function(a,t,e){"use strict";e.r(t);var s=e(63),r=(e(1),e(3));function i(a){var t=a.details,e=void 0===t?null:t,i=a.title;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(r.jsxs)(s.eb,{children:[Object(r.jsx)(s.s,{children:i}),e&&Object(r.jsxs)(s.s,{children:[Object(r.jsx)(s.eb,{children:Object(r.jsxs)("small",{children:["Modification Date: ",e&&e.modification_date]})}),Object(r.jsx)(s.eb,{className:"d-flex",children:Object(r.jsxs)("small",{children:["Creation Date: ",e&&e.creation_date]})})]})]})})})}t.default=function(a){var t=a.children,e=a.title,l=a.subtitle,n=a.creationModificationDate;return Object(r.jsxs)(s.i,{className:"shadow-none",children:[Object(r.jsx)(i,{details:n,title:e}),Object(r.jsxs)(s.j,{className:"p-4",children:[Object(r.jsx)(s.m,{className:"text-muted mb-3",children:l||""}),Object(r.jsx)("div",{children:t})]})]})}},1479:function(a,t,e){"use strict";e.r(t);e(1);var s=e(656),r=e(63),i=function(){return Math.round(100*Math.random())},l={doughnutData:{data:[400,50,100,80,150]},pieData:{data:[300,50,100]},barData:{data:{a:[i(),i(),i(),i(),i(),i(),i()],b:[i(),i(),i(),i(),i(),i(),i()]}},lineData:{data:{a:[i(),i(),i(),i(),i(),i(),i()],b:[i(),i(),i(),i(),i(),i(),i()]}},radarData:{data:{a:[65,59,90,81,56,55,40],b:[28,48,40,19,96,27,100]}},polarData:{data:[11,16,7,3]}},n=e(141),o=e(147),d=e(3),c={labels:["Red","Blue","Yellow","Green","Orange"],datasets:[{data:l.doughnutData.data,backgroundColor:["#dc3545","#2962ff","#fb6340","#2dce89","#4fc3f7"],hoverBackgroundColor:["#dc3545","#2962ff","#fb6340","#2dce89","#4fc3f7"]}]},b={labels:["Green","Yellow","Blue"],datasets:[{data:l.pieData.data,backgroundColor:["#2dce89","#5e72e4","#23b7e5"],hoverBackgroundColor:["#2dce89","#5e72e4","#23b7e5"]}]},j={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Apple",backgroundColor:"#2962ff",borderColor:"#2962ff",data:l.barData.data.a},{label:"Google",backgroundColor:"#4fc3f7",borderColor:"#4fc3f7",data:l.barData.data.b}]},h={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Income",backgroundColor:"rgb(79, 195, 247)",borderColor:"rgb(79, 195, 247)",pointBorderColor:"#fff",data:l.lineData.data.a},{label:"Outcome",backgroundColor:"rgb(246, 249, 252)",borderColor:"rgb(246, 249, 252)",pointBorderColor:"#fff",data:l.lineData.data.b}]},f={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"Apple",backgroundColor:"rgba(246, 45, 81,0.2)",borderColor:"rgba(246, 45, 81,1)",data:l.radarData.data.a},{label:"Google",backgroundColor:"rgba(45, 206, 137,0.2)",borderColor:"rgba(45, 206, 137,1)",data:l.radarData.data.b}]},u={datasets:[{data:l.polarData.data,backgroundColor:["#dc3545","#2962ff","#fb6340","#2dce89"],label:"My dataset"}],labels:["Label 1","Label 2","Label 3","Label 4"]};t.default=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(n.a,{}),Object(d.jsxs)(r.eb,{children:[Object(d.jsx)(r.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Pie Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Pie,{data:b,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}}})})})}),Object(d.jsx)(r.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Bar Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Bar,{data:j,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}},scales:{yAxes:[{gridLines:{display:!1},ticks:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}],xAxes:[{gridLines:{display:!1},ticks:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}]}}})})})}),Object(d.jsx)(r.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Doughnut Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Doughnut,{data:c,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}}})})})}),Object(d.jsx)(r.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Line Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Line,{data:h,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}},scales:{yAxes:[{gridLines:{display:!1},ticks:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}],xAxes:[{gridLines:{display:!1},ticks:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}]}}})})})}),Object(d.jsx)(r.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Polar Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Polar,{data:u,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}}})})})}),Object(d.jsx)(r.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Radar Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Radar,{data:f,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}}})})})})]})]})}}}]);
//# sourceMappingURL=120.bb1a3a81.chunk.js.map