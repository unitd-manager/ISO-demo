(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[60,181],{141:function(e,t,c){"use strict";var n=c(63),o=c(12),i=c(58),s=c(3);t.a=function(e){var t=Object(o.f)(),c=t.pathname.split("/")[1],a=t.pathname.split("/")[2];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{children:e.heading}),Object(s.jsxs)(n.c,{children:[Object(s.jsx)(n.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),c?Object(s.jsx)(n.d,{active:!0,children:c}):"",a?Object(s.jsx)(n.d,{active:!0,children:a}):""]})]})}},143:function(e,t,c){"use strict";var n=c(158);c(181);t.a=function(e,t){return"success"===t?n.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?n.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?n.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?n.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(n.b)(e)}},146:function(e,t,c){"use strict";c.r(t);var n=c(63),o=(c(1),c(3));function i(e){var t=e.details,c=void 0===t?null:t,i=e.title;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(n.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(o.jsxs)(n.eb,{children:[Object(o.jsx)(n.s,{children:i}),c&&Object(o.jsxs)(n.s,{children:[Object(o.jsx)(n.eb,{children:Object(o.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(o.jsx)(n.eb,{className:"d-flex",children:Object(o.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,s=e.subtitle,a=e.creationModificationDate;return Object(o.jsxs)(n.i,{className:"shadow-none",children:[Object(o.jsx)(i,{details:a,title:c}),Object(o.jsxs)(n.j,{className:"p-4",children:[Object(o.jsx)(n.m,{className:"text-muted mb-3",children:s||""}),Object(o.jsx)("div",{children:t})]})]})}},1557:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(9),i=c(27),s=c(1),a=c(63),r=c(12),l=c(158),d=c(759),j=c(141),u=c(146),b=c(320),h=c(319),O=c(143),m=(c(274),c(269),c(7)),p=c(270),x=c(400),f=c(3);function g(e){var t=e.editSectionData,c=e.navigate,n=e.applyChanges,o=e.backToList,i=e.id;return Object(f.jsx)(a.A,{children:Object(f.jsx)(a.C,{children:Object(f.jsx)(p.a,{children:Object(f.jsxs)(a.eb,{children:[Object(f.jsx)(a.s,{children:Object(f.jsx)(a.e,{className:"shadow-none",color:"primary",onClick:function(){t(),setTimeout((function(){c("/Section")}),1100)},children:"Save"})}),Object(f.jsx)(a.s,{children:Object(f.jsx)(a.e,{className:"shadow-none",color:"primary",onClick:function(){t(),n()},children:"Apply"})}),Object(f.jsx)(a.s,{children:Object(f.jsx)(a.e,{className:"shadow-none",color:"dark",onClick:function(){window.confirm("Are you sure you want to cancel  \n  \n You will lose any changes made")?c("/Section"):n()},children:" Cancel"})}),Object(f.jsx)(a.s,{children:Object(f.jsx)(x.a,{pictureroom:"SectionPic",ifpiture:!0,id:i,columnname:"section_id",tablename:"section"})}),Object(f.jsx)(a.s,{children:Object(f.jsx)(a.e,{className:"shadow-none",color:"dark",onClick:function(){o()},children:"Back to List"})})]})})})})}var v=c(203);function y(e){var t=e.section,c=e.valuelist,n=e.handleInputs;return Object(f.jsx)(u.default,{title:"Section Details",creationModificationDate:t,children:Object(f.jsxs)(a.eb,{children:[Object(f.jsx)(a.s,{md:"3",children:Object(f.jsxs)(a.C,{children:[Object(f.jsxs)(a.H,{children:["Title",Object(f.jsx)("span",{className:"required",children:" *"})]}),Object(f.jsx)(a.E,{type:"text",onChange:n,value:t&&t.section_title,name:"section_title"})]})}),Object(f.jsx)(a.s,{md:"4",children:Object(f.jsxs)(a.C,{children:[Object(f.jsx)(a.H,{children:"Section Type"}),Object(f.jsxs)(a.E,{type:"select",onChange:n,value:t&&t.section_type,name:"section_type",children:[Object(f.jsx)("option",{defaultValue:"selected",children:"Please Select"}),c&&c.map((function(e){return Object(f.jsx)("option",{value:e.value,children:e.value},e.value)}))]})]})}),Object(f.jsxs)(a.s,{md:"4",children:[Object(f.jsx)(a.H,{children:"Button Position"}),Object(f.jsxs)(a.E,{type:"select",onChange:n,value:t&&t.button_position,name:"button_position",children:[Object(f.jsx)("option",{defaultValue:"selected",children:"Please Select"}),Object(f.jsx)("option",{value:"Top",children:"Top"}),Object(f.jsx)("option",{value:"Admin",children:"Admin"}),Object(f.jsx)("option",{value:"Reports",children:"Reports"})]})]}),Object(f.jsxs)(a.s,{md:"3",children:[Object(f.jsx)(a.H,{children:"Groups"}),Object(f.jsxs)(a.E,{type:"select",onChange:n,value:t&&t.groups,name:"groups",children:[Object(f.jsx)("option",{defaultValue:"selected",children:"Please Select"}),Object(f.jsx)("option",{value:"Reports",children:"Reports"}),Object(f.jsx)("option",{value:"Home",children:"Home"}),Object(f.jsx)("option",{value:"Admin",children:"Admin"}),Object(f.jsx)("option",{value:"Main",children:"Main"})]})]}),Object(f.jsx)(a.s,{md:"4",children:Object(f.jsxs)(a.C,{children:[Object(f.jsx)(a.H,{children:"Routes"}),Object(f.jsx)(a.E,{type:"text",onChange:n,value:t&&t.routes,name:"routes"})]})}),Object(f.jsx)(a.s,{md:"4",children:Object(f.jsxs)(a.C,{children:[Object(f.jsx)(a.H,{children:"Number Of Rows"}),Object(f.jsx)(a.E,{type:"text",onChange:n,value:t&&t.number_of_rows,name:"number_of_rows"})]})}),Object(f.jsxs)(a.s,{md:"3",children:[Object(f.jsx)(a.H,{children:"Published"}),Object(f.jsxs)(a.C,{children:[Object(f.jsx)(a.E,{type:"radio",name:"published",value:"1",onChange:n,defaultChecked:t&&1===t.published&&!0}),Object(f.jsx)(a.H,{children:"Yes"}),Object(f.jsx)(a.E,{type:"radio",name:"published",value:"0",onChange:n,defaultChecked:t&&0===t.published&&!0}),Object(f.jsx)(a.H,{children:"No"})]})]})]})})}t.default=function(){var e=Object(s.useState)(),t=Object(i.a)(e,2),c=t[0],p=t[1],x=Object(s.useState)("1"),C=Object(i.a)(x,2),w=C[0],N=C[1],S=Object(s.useState)(!1),k=Object(i.a)(S,2),_=k[0],T=k[1],P=Object(s.useState)(""),B=Object(i.a)(P,2),D=B[0],A=B[1],M=Object(s.useState)(""),E=Object(i.a)(M,2),H=E[0],I=E[1],F=Object(s.useState)(),R=Object(i.a)(F,2),U=R[0],Y=R[1],G=Object(s.useState)({modelType:""}),L=Object(i.a)(G,2),z=L[0],J=L[1],V=Object(r.h)().id,q=Object(r.g)(),Q=function(e){w!==e&&N(e)},W=function(){J({modelType:"picture"})},K=function(){m.a.post("/section/getSectionById",{section_id:V}).then((function(e){p(e.data.data[0])})).catch((function(){Object(O.a)("Section Data Not Found","info")}))};return Object(s.useEffect)((function(){K(),m.a.get("/section/getValueList").then((function(e){Y(e.data.data)})).catch((function(){Object(O.a)("valuelist not found","info")}))}),[V]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{heading:c&&c.section_title}),Object(f.jsx)(g,{editSectionData:function(){""!==c.section_title?(c.modification_date=v.a,m.a.post("/section/editSection",c).then((function(){Object(O.a)("Record editted successfully","success"),K()})).catch((function(){Object(O.a)("Unable to edit record.","error")}))):Object(O.a)("Please fill all required fields","warning")},navigate:q,applyChanges:function(){},DeleteSection:function(){m.a.post("/section/deleteSection",{section_id:V}).then((function(){Object(O.a)("Record editted successfully","success")})).catch((function(){Object(O.a)("Unable to edit record.","error")}))},backToList:function(){q("/Section")},id:V}),Object(f.jsx)(a.A,{children:Object(f.jsx)(a.C,{children:Object(f.jsx)(y,{handleInputs:function(e){p(Object(o.a)(Object(o.a)({},c),{},Object(n.a)({},e.target.name,e.target.value)))},section:c,valuelist:U})})}),Object(f.jsxs)(u.default,{children:[Object(f.jsx)(l.a,{}),Object(f.jsxs)(a.R,{tabs:!0,children:[Object(f.jsx)(a.S,{children:Object(f.jsx)(a.T,{className:"1"===w?"active":"",onClick:function(){Q("1")},children:"Picture"})}),Object(f.jsx)(a.S,{children:Object(f.jsx)(a.T,{className:"2"===w?"active":"",onClick:function(){Q("2")},children:"Banner"})})]}),Object(f.jsxs)(a.gb,{className:"p-4",activeTab:w,children:[Object(f.jsx)(a.hb,{tabId:"1",children:Object(f.jsx)(a.A,{children:Object(f.jsxs)(a.C,{children:[Object(f.jsx)(a.eb,{children:Object(f.jsx)(a.s,{xs:"12",md:"3",className:"mb-3",children:Object(f.jsx)(a.e,{className:"shadow-none",color:"primary",onClick:function(){A("SectionPic"),I(["JPG","PNG","GIF"]),W(),T(!0)},children:Object(f.jsx)(d.a,{className:"rounded-circle",width:"20"})})})}),Object(f.jsx)(h.a,{moduleId:V,attachmentModal:_,setAttachmentModal:T,roomName:D,fileTypes:H,altTagData:"Section Data",desc:"Section Data",recordType:"Picture",mediaType:z.modelType}),Object(f.jsx)(b.a,{moduleId:V,roomName:"SectionPic",recordType:"Picture"})]})})}),Object(f.jsx)(a.hb,{tabId:"2",children:Object(f.jsx)(a.A,{children:Object(f.jsxs)(a.C,{children:[Object(f.jsx)(a.eb,{children:Object(f.jsx)(a.s,{xs:"12",md:"3",className:"mb-3",children:Object(f.jsx)(a.e,{className:"shadow-none",color:"primary",onClick:function(){A("menu"),I(["JPG","PNG","GIF"]),W(),T(!0)},children:Object(f.jsx)(d.a,{className:"rounded-circle",width:"20"})})})}),Object(f.jsx)(h.a,{moduleId:V,attachmentModal:_,setAttachmentModal:T,roomName:D,fileTypes:H,altTagData:"Banner Data",desc:"Banner Data",recordType:"Picture",mediaType:z.modelType}),Object(f.jsx)(b.a,{moduleId:V,roomName:"menu",recordType:"Picture"})]})})})]})]})]})}},203:function(e,t,c){"use strict";var n=c(186),o=c.n(n)()().format("DD-MM-YYYY h:mm:ss a");t.a=o},269:function(e,t,c){},270:function(e,t,c){"use strict";var n=c(63),o=c(3),i={textAlign:"right",marginRight:"10px"},s={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(o.jsx)(n.i,{className:"shadow-none",children:Object(o.jsx)(n.j,{style:i,children:Object(o.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:s,children:t})})})}},319:function(e,t,c){"use strict";var n=c(27),o=c(1),i=c(63),s=c(399),a=c(7),r=c(143),l=c(3);t.a=function(e){var t=e.attachmentModal,c=e.setAttachmentModal,d=e.moduleId,j=e.roomName,u=e.fileTypes,b=e.altTagData,h=e.desc,O=Object(o.useState)([]),m=Object(n.a)(O,2),p=m[0],x=m[1],f=Object(o.useState)(),g=Object(n.a)(f,2),v=g[0],y=g[1],C=Object(o.useState)(null),w=Object(n.a)(C,2),N=w[0],S=w[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(i.N,{isOpen:t,children:[Object(l.jsx)(i.Q,{children:"Upload Media"}),Object(l.jsxs)(i.O,{children:[Object(l.jsxs)(i.C,{children:[Object(l.jsx)(s.a,{multiple:!0,handleChange:function(e){var t=Object.entries(e).map((function(e){return e[1]}));x(e),y(t),console.log(e)},name:"file",types:u}),v?v.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:[" Name: ",e.name," "]})})})):Object(l.jsx)("span",{children:"No file selected"})]}),N&&Object(l.jsx)("div",{className:"progress mt-2",children:Object(l.jsx)("div",{className:"progress-bar h-4",role:"progressbar","aria-valuenow":N,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(N,"%")},children:"".concat(N,"% uploaded")})})]}),Object(l.jsxs)(i.P,{children:[Object(l.jsx)(i.e,{color:"primary",className:"shadow-none",onClick:function(){!function(){if(p){var e=new FormData;Object.entries(p).map((function(e){return e[1]})).forEach((function(t){e.append("files",t)})),e.append("record_id",d),e.append("room_name",j),e.append("alt_tag_data",b),e.append("description",h),a.a.post("/file/uploadFiles",e,{onUploadProgress:function(e){console.log(Math.round(e.loaded/e.total*100)),S(Math.round(e.loaded/e.total*100))}}).then((function(){Object(r.a)("Files Uploaded Successfully","success")})).catch((function(){c(!1),Object(r.a)("Unable to upload File","error")}))}else Object(r.a)("No files selected","info")}()},children:"Upload"}),Object(l.jsx)(i.e,{color:"secondary",className:"shadow-none",onClick:function(){window.location.reload(),c(!1)},children:"Cancel"})]})]})})}},320:function(e,t,c){"use strict";var n=c(27),o=c(1),i=c(302),s=c.n(i),a=c(550),r=c(143),l=c(7),d=c(3);t.a=function(e){var t=e.moduleId,c=e.roomName,i={},j=Object(o.useState)(null),u=Object(n.a)(j,2),b=u[0],h=u[1];return Object(o.useEffect)((function(){l.a.post("/file/getListOfFiles",{record_id:t,room_name:c}).then((function(e){h(e.data)}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{style:i,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{style:i,children:[Object(d.jsx)("th",{style:i,children:"File Name"}),Object(d.jsx)("th",{width:"5%"})]})}),Object(d.jsx)("tbody",{children:b?b.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:i,children:Object(d.jsx)("a",{href:"https://isodemo.unitdtechnologies.com/storage/uploads/".concat(e.name),target:"_blank",rel:"noreferrer",children:e.name})}),Object(d.jsx)("td",{style:i,children:Object(d.jsxs)("button",{type:"button",className:"btn shadow-none",onClick:function(){var t;t=e.media_id,s.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&l.a.post("/file/deleteFile",{media_id:t}).then((function(e){console.log(e),s.a.fire("Deleted!","Media has been deleted.","success")})).catch((function(){Object(r.a)("Unable to Delete Media","info")}))}))},children:[Object(d.jsx)(a.a,{})," "]})})]},e.media_id)})):Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("p",{children:"no files uploaded yet"})})})})]})})}},400:function(e,t,c){"use strict";c(1);var n=c(12),o=c(63),i=c(302),s=c.n(i),a=c(550),r=c(7),l=c(143),d=c(3);t.a=function(e){var t=e.id,c=e.columnname,i=e.tablename,j=e.ifpiture,u=void 0!==j&&j,b=e.ifAttachment,h=void 0!==b&&b,O=e.pictureroom,m=e.attachmentroom,p=Object(n.g)(),x=function(e,t){r.a.post("/file/deleteFileByRoomNameAndId",{room_name:t,record_id:e}).then((function(e){200===e.status?(Object(l.a)("Media and Records files deleted.","error"),p(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))},f=function(){s.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&r.a.post("/commonApi/deleteRecord",{idvalue:t,columnname:c,tablename:i}).then((function(e){200===e.status?u?x(t,O):h?x(t,m):(Object(l.a)("Record deleted successfully."),p(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))}))};return Object(d.jsxs)(o.e,{color:"danger",onClick:function(){f()},children:["Delete ",Object(d.jsx)(a.a,{size:20})]})}},759:function(e,t,c){"use strict";var n=c(1),o=c.n(n),i=c(0),s=c.n(i);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var c,n,o=function(e,t){if(null==e)return{};var c,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(o[c]=e[c]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(o[c]=e[c])}return o}var l=Object(n.forwardRef)((function(e,t){var c=e.color,n=void 0===c?"currentColor":c,i=e.size,s=void 0===i?24:i,l=r(e,["color","size"]);return o.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),o.a.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),o.a.createElement("polyline",{points:"21 15 16 10 5 21"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.displayName="Image",t.a=l}}]);
//# sourceMappingURL=60.3a5161f4.chunk.js.map