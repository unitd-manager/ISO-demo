(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[164],{1127:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s(9),i=s(27),r=s(1),a=s.n(r),o=s(63),l=s(7),j=s(143),d=s(3);t.default=function(e){var t=e.editLineModal,s=e.setEditLineModal,b=e.FetchLineItemData,h=Object(r.useState)(null),u=Object(i.a)(h,2),O=u[0],x=u[1],p=function(e){x(Object(c.a)(Object(c.a)({},O),{},Object(n.a)({},e.target.name,e.target.value)))};return a.a.useEffect((function(){x(b)}),[b]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(o.N,{isOpen:t,children:[Object(d.jsx)(o.Q,{children:"Line Items"}),Object(d.jsxs)(o.O,{children:[Object(d.jsx)(o.C,{children:Object(d.jsxs)(o.eb,{children:[Object(d.jsx)(o.H,{sm:"2",children:"Title"}),Object(d.jsx)(o.s,{sm:"10",children:Object(d.jsx)(o.E,{type:"textarea",name:"title",defaultValue:O&&O.title,onChange:p})})]})}),Object(d.jsx)(o.C,{children:Object(d.jsxs)(o.eb,{children:[Object(d.jsx)(o.H,{sm:"2",children:"Description"}),Object(d.jsx)(o.s,{sm:"10",children:Object(d.jsx)(o.E,{type:"textarea",name:"description",defaultValue:O&&O.description,onChange:p})})]})}),Object(d.jsx)(o.C,{children:Object(d.jsxs)(o.eb,{children:[Object(d.jsx)(o.H,{sm:"2",children:"Qty"}),Object(d.jsx)(o.s,{sm:"10",children:Object(d.jsx)(o.E,{type:"text",name:"quantity",defaultValue:O&&O.quantity,onChange:p})})]})}),Object(d.jsx)(o.C,{children:Object(d.jsxs)(o.eb,{children:[Object(d.jsx)(o.H,{sm:"2",children:"UoM"}),Object(d.jsx)(o.s,{sm:"10",children:Object(d.jsx)(o.E,{type:"text",name:"unit",defaultValue:O&&O.unit,onChange:p})})]})}),Object(d.jsx)(o.C,{children:Object(d.jsxs)(o.eb,{children:[Object(d.jsx)(o.H,{sm:"2",children:"Unit Price"}),Object(d.jsx)(o.s,{sm:"10",children:Object(d.jsx)(o.E,{type:"text",name:"unit_price",defaultValue:O&&O.unit_price,onChange:p})})]})}),Object(d.jsx)(o.C,{children:Object(d.jsxs)(o.eb,{children:[Object(d.jsx)(o.H,{sm:"2",children:"Total Price"}),Object(d.jsx)(o.s,{sm:"10",children:Object(d.jsx)(o.E,{type:"text",name:"amount",defaultValue:O&&O.amount,onChange:p})})]})})]}),Object(d.jsxs)(o.P,{children:[Object(d.jsx)(o.e,{color:"primary",className:"shadow-none",type:"button",onClick:function(){l.a.post("/tender/edit-TabQuoteLine",O).then((function(e){console.log("edit Line Item",e.data.data),Object(j.a)("Edit Line Item Udated Successfully.","success"),window.location.reload()})).catch((function(){Object(j.a)("Unable to edit quote. please fill all fields","error")}))},children:" Save & Continue "}),Object(d.jsx)(o.e,{color:"secondary",className:"shadow-none",onClick:function(){s(!1)},children:" Cancel "})]})]})})}},143:function(e,t,s){"use strict";var n=s(158);s(184);t.a=function(e,t){return"success"===t?n.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?n.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?n.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?n.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(n.b)(e)}}}]);
//# sourceMappingURL=164.c621236f.chunk.js.map