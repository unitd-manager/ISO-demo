(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[71,181],{141:function(e,t,c){"use strict";var n=c(63),a=c(12),s=c(58),i=c(3);t.a=function(e){var t=Object(a.f)(),c=t.pathname.split("/")[1],r=t.pathname.split("/")[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:e.heading}),Object(i.jsxs)(n.c,{children:[Object(i.jsx)(n.d,{to:"/",tag:s.b,className:"text-decoration-none",children:"Home"}),c?Object(i.jsx)(n.d,{active:!0,children:c}):"",r?Object(i.jsx)(n.d,{active:!0,children:r}):""]})]})}},143:function(e,t,c){"use strict";var n=c(158);c(181);t.a=function(e,t){return"success"===t?n.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?n.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?n.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?n.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(n.b)(e)}},146:function(e,t,c){"use strict";c.r(t);var n=c(63),a=(c(1),c(3));function s(e){var t=e.details,c=void 0===t?null:t,s=e.title;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(n.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(a.jsxs)(n.eb,{children:[Object(a.jsx)(n.s,{children:s}),c&&Object(a.jsxs)(n.s,{children:[Object(a.jsx)(n.eb,{children:Object(a.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(a.jsx)(n.eb,{className:"d-flex",children:Object(a.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,i=e.subtitle,r=e.creationModificationDate;return Object(a.jsxs)(n.i,{className:"shadow-none",children:[Object(a.jsx)(s,{details:r,title:c}),Object(a.jsxs)(n.j,{className:"p-4",children:[Object(a.jsx)(n.m,{className:"text-muted mb-3",children:i||""}),Object(a.jsx)("div",{children:t})]})]})}},1551:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(9),s=c(27),i=c(1),r=c(12),o=(c(274),c(269),c(158)),l=c(186),j=c.n(l),d=c(141),b=c(63),u=c(270),h=c(3);function O(e){var t=e.backToList,c=e.editSubCategoryData,n=Object(r.g)();return Object(h.jsx)(b.A,{children:Object(h.jsx)(b.C,{children:Object(h.jsx)(u.a,{children:Object(h.jsxs)(b.eb,{children:[Object(h.jsx)(b.s,{children:Object(h.jsx)(b.e,{color:"primary",onClick:function(){c(),setTimeout((function(){n("/SubCategory")}),800)},children:"Save"})}),Object(h.jsx)(b.s,{children:Object(h.jsx)(b.e,{className:"shadow-none",color:"primary",onClick:function(){c()},children:"Apply"})}),Object(h.jsx)(b.s,{children:Object(h.jsx)(b.e,{className:"shadow-none",color:"dark",onClick:function(){t()},children:"Back to List"})})]})})})})}var x=c(146);function g(e){var t=e.subcategoryeditdetails,c=e.handleInputs,n=e.category;return Object(h.jsx)(b.A,{children:Object(h.jsx)(b.C,{children:Object(h.jsx)(x.default,{title:"Sub Category Details",creationModificationDate:t,children:Object(h.jsxs)(b.eb,{children:[Object(h.jsx)(b.s,{md:"3",children:Object(h.jsxs)(b.C,{children:[Object(h.jsx)(b.H,{children:"Title"}),Object(h.jsx)(b.E,{type:"text",onChange:c,value:t&&t.sub_category_title,name:"sub_category_title"})]})}),Object(h.jsx)(b.s,{md:"3",children:Object(h.jsxs)(b.C,{children:[Object(h.jsx)(b.H,{children:"Category"}),Object(h.jsxs)(b.E,{type:"select",name:"category_id",onChange:c,value:t&&t.category_id,children:[Object(h.jsx)("option",{defaultValue:"selected",children:"Please Select"}),n&&n.map((function(e){return Object(h.jsx)("option",{value:e.category_id,children:e.concattitle},e.category_id)}))]})]})}),Object(h.jsx)(b.s,{md:"3",children:Object(h.jsxs)(b.C,{children:[Object(h.jsx)(b.H,{children:"Sub Category Type"}),Object(h.jsxs)(b.E,{type:"select",name:"sub_category_type",onChange:c,value:t&&t.sub_category_type,children:[Object(h.jsx)("option",{children:" Please Select "}),Object(h.jsx)("option",{defaultValue:"Content",children:"Content"}),Object(h.jsx)("option",{value:"Enquiry Form",children:"Enquiry Form "}),Object(h.jsx)("option",{value:"Regisration",children:"Regisration"})]})]})}),Object(h.jsx)(b.s,{md:"3",children:Object(h.jsxs)(b.C,{children:[Object(h.jsx)(b.H,{children:"External Link"}),Object(h.jsx)(b.E,{type:"text",onChange:c,value:t&&t.external_link,name:"external_link"})]})}),Object(h.jsx)(b.s,{md:"3",children:Object(h.jsxs)(b.C,{children:[Object(h.jsx)(b.H,{children:"Internal Link"}),Object(h.jsx)(b.E,{type:"text",onChange:c,value:t&&t.internal_link,name:"internal_link"})]})}),Object(h.jsx)(b.s,{md:"3",children:Object(h.jsxs)(b.C,{children:[Object(h.jsx)(b.H,{children:"Published"}),Object(h.jsx)("br",{}),Object(h.jsx)(b.E,{name:"published",value:"1",type:"radio",defaultChecked:t&&1===t.published&&!0,onChange:c}),Object(h.jsx)(b.H,{children:" Yes "}),Object(h.jsx)(b.E,{name:"published",value:"0",type:"radio",defaultChecked:t&&0===t.published&&!0,onChange:c}),Object(h.jsx)(b.H,{children:"No"})]})})]})})})})}function y(e){var t=e.subcategoryeditdetails,c=e.handleInputs;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(b.A,{children:Object(h.jsx)(b.C,{children:Object(h.jsx)(x.default,{title:"Page Meta Data",children:Object(h.jsxs)(b.eb,{children:[Object(h.jsx)(b.s,{md:"4",children:Object(h.jsxs)(b.C,{children:[Object(h.jsx)(b.H,{children:"Page Title"}),Object(h.jsx)(b.E,{type:"text",onChange:c,value:t&&t.meta_title,name:"meta_title"})]})}),Object(h.jsx)(b.s,{md:"4",children:Object(h.jsxs)(b.C,{children:[Object(h.jsx)(b.H,{children:"Page Description"}),Object(h.jsx)(b.E,{type:"textarea",name:"meta_description",onChange:c,value:t&&t.meta_description})]})}),Object(h.jsx)(b.s,{md:"4",children:Object(h.jsxs)(b.C,{children:[Object(h.jsx)(b.H,{children:"Page Keywords"}),Object(h.jsx)(b.E,{type:"textarea",name:"meta_keyword",onChange:c,value:t&&t.meta_keyword})]})}),Object(h.jsxs)(b.s,{md:"4",children:[Object(h.jsx)(b.H,{children:"SEO Title "}),Object(h.jsx)(b.E,{type:"text",onChange:c,value:t&&t.seo_title,name:"seo_title"})]})]})})})})})}var p=c(143),m=c(7),f=c(203);t.default=function(){var e=Object(i.useState)(),t=Object(s.a)(e,2),c=t[0],l=t[1],b=Object(i.useState)(),u=Object(s.a)(b,2),x=u[0],C=u[1],v=Object(i.useState)(),_=Object(s.a)(v,2),S=_[0],k=_[1],H=Object(r.h)().id,w=Object(r.g)(),E=function(e){C(Object(a.a)(Object(a.a)({},x),{},Object(n.a)({},e.target.name,e.target.value)))},D=function(){m.a.post("/subcategory/getSubCategoryById",{sub_category_id:H}).then((function(e){var t=e.data.data[0];t.sub_category_type||(t.sub_category_type="Content"),C(t)})).catch((function(){Object(p.a)("SubCategory Data Not Found","info")}))};return Object(i.useEffect)((function(){D(),m.a.get("/subcategory/getCategory").then((function(e){l(e.data.data)})).catch((function(){Object(p.a)("SubCategory Data Not Found","info")})),m.a.get("/subcategory/getSubCategoryTypeFromValueList").then((function(e){k(e.data.data)})).catch((function(){Object(p.a)("SubCategory Type Data Not Found","info")}))}),[H]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{}),Object(h.jsx)(o.a,{}),Object(h.jsx)(O,{saveChanges:function(){""!==x.sub_category_title&&w("/SubCategory"),window.location.reload()},applyChanges:function(){},backToList:function(){w("/SubCategory")},editSubCategoryData:function(){x.modification_date=j()().format("DD-MM-YYYY"),""!==x.sub_category_title?(x.modification_date=f.a,m.a.post("/subcategory/editSubCategory",x).then((function(){Object(p.a)("Record editted successfully","success"),D()})).catch((function(){Object(p.a)("Unable to edit record.","error")}))):Object(p.a)("Please fill all required fields","warning")},deleteSubCategoryData:function(){m.a.post("/subcategory/deleteSubCategory",{sub_category_id:H}).then((function(){Object(p.a)("Record editted successfully","success")})).catch((function(){Object(p.a)("Unable to edit record.","error")}))},navigate:w,id:H}),Object(h.jsx)(d.a,{}),Object(h.jsx)(g,{subcategoryeditdetails:x,handleInputs:E,category:c,subcategorytypedetails:S}),Object(h.jsx)(y,{subcategoryeditdetails:x,handleInputs:E})]})}},203:function(e,t,c){"use strict";var n=c(186),a=c.n(n)()().format("DD-MM-YYYY h:mm:ss a");t.a=a},269:function(e,t,c){},270:function(e,t,c){"use strict";var n=c(63),a=c(3),s={textAlign:"right",marginRight:"10px"},i={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(a.jsx)(n.i,{className:"shadow-none",children:Object(a.jsx)(n.j,{style:s,children:Object(a.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:i,children:t})})})}},274:function(e,t,c){}}]);
//# sourceMappingURL=71.ffe18f87.chunk.js.map