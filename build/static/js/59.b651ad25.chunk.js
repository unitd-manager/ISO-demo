(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[59,168],{141:function(e,t,n){"use strict";var c=n(63),a=n(12),i=n(58),s=n(3);t.a=function(e){var t=Object(a.f)(),n=t.pathname.split("/")[1],r=t.pathname.split("/")[2];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{children:e.heading}),Object(s.jsxs)(c.c,{children:[Object(s.jsx)(c.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),n?Object(s.jsx)(c.d,{active:!0,children:n}):"",r?Object(s.jsx)(c.d,{active:!0,children:r}):""]})]})}},143:function(e,t,n){"use strict";var c=n(160);n(184);t.a=function(e,t){return"success"===t?c.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?c.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?c.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?c.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(c.b)(e)}},1467:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(9),i=n(27),s=n(1),r=n(12),o=(n(281),n(272),n(160)),l=n(141),d=n(63),u=n(273),j=n(384),b=n(3);function h(e){var t=e.saveChanges,n=e.applyChanges,c=e.backToList,a=e.editValueListData,i=e.id,s=e.navigate;return Object(b.jsx)(d.A,{children:Object(b.jsx)(d.C,{children:Object(b.jsx)(u.a,{children:Object(b.jsxs)(d.eb,{children:[Object(b.jsx)(d.s,{children:Object(b.jsx)(d.e,{color:"primary",className:"shadow-none",onClick:function(){a(),t(),setTimeout((function(){s("/Valuelist")}),1100)},children:"Save"})}),Object(b.jsx)(d.s,{children:Object(b.jsx)(d.e,{color:"primary",className:"shadow-none",onClick:function(){a(),n()},children:"Apply"})}),Object(b.jsx)(d.s,{children:Object(b.jsx)(d.e,{color:"dark",className:"shadow-none",onClick:function(){window.confirm("Are you sure you want to cancel  \n  \n You will lose any changes made")?s("/ValueList"):n()},children:"Cancel"})}),Object(b.jsx)(d.s,{children:Object(b.jsx)(j.a,{id:i,columnname:"valuelist_id",tablename:"valuelist"})}),Object(b.jsx)(d.s,{children:Object(b.jsx)(d.e,{color:"dark",className:"shadow-none",onClick:function(){c()},children:"Back to List"})})]})})})})}var O=n(147),f=function(e){var t=e.valuelisteditdetails,n=e.handleInputs,c=e.valuelistname,a=e.id;return Object(b.jsx)(d.A,{children:Object(b.jsx)(d.C,{children:Object(b.jsx)(O.default,{title:"Valuelist Details",creationModificationDate:t,children:Object(b.jsxs)(d.eb,{children:[Object(b.jsx)(d.s,{md:"4",children:Object(b.jsxs)(d.C,{children:[Object(b.jsxs)(d.H,{children:["Value List Name",Object(b.jsx)("span",{className:"required",children:" *"})]}),Object(b.jsxs)(d.E,{type:"select",onChange:n,value:t&&t.key_text,name:"key_text",children:[Object(b.jsx)("option",{value:"",defaultValue:"selected",children:"Please Select"}),c&&c.map((function(e){return e.id===a?Object(b.jsx)("option",{defaultValue:"selected",value:e.name,children:e.name},e.id):Object(b.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})}),Object(b.jsx)(d.s,{md:"4",children:Object(b.jsxs)(d.C,{children:[Object(b.jsxs)(d.H,{children:["Value ",Object(b.jsx)("span",{className:"required",children:" *"})]}),Object(b.jsx)(d.E,{type:"textarea",onChange:n,value:t&&t.value,name:"value"})]})}),Object(b.jsx)(d.s,{md:"4",children:Object(b.jsxs)(d.C,{children:[Object(b.jsx)(d.H,{children:"Code"}),Object(b.jsx)(d.E,{type:"text",onChange:n,value:t&&t.code,name:"code"})]})}),Object(b.jsx)(d.s,{md:"4",children:Object(b.jsxs)(d.C,{children:[Object(b.jsx)(d.H,{children:"Published"}),Object(b.jsx)("br",{}),Object(b.jsx)(d.H,{children:"Yes"}),Object(b.jsx)(d.E,{name:"published",value:"1",type:"radio",defaultChecked:t&&1===t.published&&!0,onChange:n}),Object(b.jsx)(d.H,{children:"No"}),Object(b.jsx)(d.E,{name:"published",value:"0",type:"radio",defaultChecked:t&&0===t.published&&!0,onChange:n})]})})]})})})})},m=n(143),x=n(7),p=n(219);t.default=function(){var e=Object(s.useState)(),t=Object(i.a)(e,2),n=t[0],d=t[1],u=Object(s.useState)(),j=Object(i.a)(u,2),O=j[0],v=j[1],g=Object(r.h)().id,y=Object(r.g)(),C=function(){x.a.post("/valuelist/getValueListById",{valuelist_id:g}).then((function(e){d(e.data.data[0])})).catch((function(){Object(m.a)("ValueList Data Not Found","info")}))};return Object(s.useEffect)((function(){x.a.get("/valuelist/getValueListDropdown").then((function(e){v(e.data.data)})).catch((function(){Object(m.a)("ValueList Data Not Found","info")})),C()}),[g]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.a,{}),Object(b.jsx)(o.a,{}),Object(b.jsx)(h,{saveChanges:function(){""!==n.key_text&&""!==n.value&&y("/ValueList"),window.location.reload()},applyChanges:function(){},backToList:function(){y("/ValueList")},editValueListData:function(){""!==n.key_text&&""!==n.value?(n.modification_date=p.a,x.a.post("/valuelist/editValueList",n).then((function(){Object(m.a)("Record editted successfully","success"),C()})).catch((function(){Object(m.a)("Unable to edit record.","error")}))):Object(m.a)("Please fill all required fields","warning")},deleteValueListData:function(){x.a.post("/valuelist/deleteValueList",{valuelist_id:g}).then((function(){Object(m.a)("Record editted successfully","success")})).catch((function(){Object(m.a)("Unable to edit record.","error")}))},navigate:y,id:g}),Object(b.jsx)(f,{valuelisteditdetails:n,handleInputs:function(e){d(Object(a.a)(Object(a.a)({},n),{},Object(c.a)({},e.target.name,e.target.value)))},valuelistname:O,id:g})]})}},147:function(e,t,n){"use strict";n.r(t);var c=n(63),a=(n(1),n(3));function i(e){var t=e.details,n=void 0===t?null:t,i=e.title;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(c.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(a.jsxs)(c.eb,{children:[Object(a.jsx)(c.s,{children:i}),n&&Object(a.jsxs)(c.s,{children:[Object(a.jsx)(c.eb,{children:Object(a.jsxs)("small",{children:["Modification Date: ",n&&n.modification_date]})}),Object(a.jsx)(c.eb,{className:"d-flex",children:Object(a.jsxs)("small",{children:["Creation Date: ",n&&n.creation_date]})})]})]})})})}t.default=function(e){var t=e.children,n=e.title,s=e.subtitle,r=e.creationModificationDate;return Object(a.jsxs)(c.i,{className:"shadow-none",children:[Object(a.jsx)(i,{details:r,title:n}),Object(a.jsxs)(c.j,{className:"p-4",children:[Object(a.jsx)(c.m,{className:"text-muted mb-3",children:s||""}),Object(a.jsx)("div",{children:t})]})]})}},219:function(e,t,n){"use strict";var c=n(189),a=n.n(c)()().format("DD-MM-YYYY h:mm:ss a");t.a=a},272:function(e,t,n){},273:function(e,t,n){"use strict";var c=n(63),a=n(3),i={textAlign:"right",marginRight:"10px"},s={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(a.jsx)(c.i,{className:"shadow-none",children:Object(a.jsx)(c.j,{style:i,children:Object(a.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:s,children:t})})})}},281:function(e,t,n){},384:function(e,t,n){"use strict";n(1);var c=n(12),a=n(63),i=n(316),s=n.n(i),r=n(527),o=n(7),l=n(143),d=n(3);t.a=function(e){var t=e.id,n=e.columnname,i=e.tablename,u=e.ifpiture,j=void 0!==u&&u,b=e.ifAttachment,h=void 0!==b&&b,O=e.pictureroom,f=e.attachmentroom,m=Object(c.g)(),x=function(e,t){o.a.post("/file/deleteFileByRoomNameAndId",{room_name:t,record_id:e}).then((function(e){200===e.status?(Object(l.a)("Media and Records files deleted.","error"),m(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))},p=function(){s.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&o.a.post("/commonApi/deleteRecord",{idvalue:t,columnname:n,tablename:i}).then((function(e){200===e.status?j?x(t,O):h?x(t,f):(Object(l.a)("Record deleted successfully."),m(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))}))};return Object(d.jsxs)(a.e,{color:"danger",onClick:function(){p()},children:["Delete ",Object(d.jsx)(r.a,{size:20})]})}},527:function(e,t,n){"use strict";var c=n(1),a=n.n(c),i=n(0),s=n.n(i);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=Object(c.forwardRef)((function(e,t){var n=e.color,c=void 0===n?"currentColor":n,i=e.size,s=void 0===i?24:i,l=o(e,["color","size"]);return a.a.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("polyline",{points:"3 6 5 6 21 6"}),a.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),a.a.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),a.a.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.displayName="Trash2",t.a=l}}]);
//# sourceMappingURL=59.b651ad25.chunk.js.map