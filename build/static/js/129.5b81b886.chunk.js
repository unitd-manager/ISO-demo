(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[129],{1090:function(e,t,r){"use strict";var n=r(1),o=r.n(n),a=r(0),c=r.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,c=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}),o.a.createElement("line",{x1:"4",y1:"22",x2:"4",y2:"15"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Flag",t.a=l},141:function(e,t,r){"use strict";var n=r(63),o=r(12),a=r(58),c=r(3);t.a=function(e){var t=Object(o.f)(),r=t.pathname.split("/")[1],i=t.pathname.split("/")[2];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:e.heading}),Object(c.jsxs)(n.c,{children:[Object(c.jsx)(n.d,{to:"/",tag:a.b,className:"text-decoration-none",children:"Home"}),r?Object(c.jsx)(n.d,{active:!0,children:r}):"",i?Object(c.jsx)(n.d,{active:!0,children:i}):""]})]})}},1481:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var n=r(27),o=r(1),a=r(304),c=r(1090),i=(r(271),r(207),r(208),r(160)),s=r.n(i),l=(r(209),r(210),r(211),r(213),r(58)),d=r(7),u=r(141),j=r(3);function b(){var e=Object(o.useState)(null),t=Object(n.a)(e,2),r=t[0],i=t[1];Object(o.useEffect)((function(){setTimeout((function(){s()("#example").DataTable({pagingType:"full_numbers",pageLength:20,processing:!0,dom:"Bfrtip",buttons:["print"]})}),1e3),d.a.get("/tender/getTenders").then((function(e){i(e.data.data)}))}),[]);var b=[{name:"id",selector:"opportunity_id",grow:0,wrap:!0,width:"4%"},{name:"Edit",selector:"edit",cell:function(){return Object(j.jsx)(l.b,{to:"/TenderEdit",children:Object(j.jsx)(a.a,{})})},grow:0,width:"auto",button:!0,sortable:!1},{name:"Lang",selector:"flag",cell:function(){return Object(j.jsx)(c.a,{})},grow:0,width:"auto",wrap:!0},{name:"Code",selector:"opportunity_code",sortable:!0,grow:0,wrap:!0},{name:"Project",selector:"title",sortable:!0,grow:2,wrap:!0},{name:"Ref No",selector:"office_ref_no",sortable:!0,grow:0},{name:"Main Con",selector:"company_name",sortable:!0,width:"auto",grow:3},{name:"Actual Closing",selector:"closinactual_closing",sortable:!0,grow:2,width:"auto"},{name:"Status",selector:"status",sortable:!0,grow:2,wrap:!0},{name:"Quoted By",selector:"quote_ref",sortable:!0,width:"auto"}];return Object(j.jsx)("div",{className:"MainDiv",children:Object(j.jsxs)("div",{className:" pt-xs-25",children:[Object(j.jsx)(u.a,{}),Object(j.jsxs)("table",{id:"example",className:"display border border-secondary rounded",children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:b.map((function(e){return Object(j.jsx)("td",{children:e.name},e.name)}))})}),Object(j.jsx)("tbody",{children:r&&r.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.opportunity_id}),Object(j.jsx)("td",{children:Object(j.jsx)(l.b,{to:"/TenderEdit",children:Object(j.jsx)(a.a,{})})}),Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:e.opportunity_code}),Object(j.jsx)("td",{children:e.title}),Object(j.jsx)("td",{children:e.office_ref_no}),Object(j.jsx)("td",{children:e.company_name}),Object(j.jsx)("td",{children:e.closinactual_closing}),Object(j.jsx)("td",{children:e.status}),Object(j.jsx)("td",{children:e.quote_ref})]},e.title)}))})]})]})})}},304:function(e,t,r){"use strict";var n=r(1),o=r.n(n),a=r(0),c=r.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,c=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Edit2",t.a=l}}]);
//# sourceMappingURL=129.5b81b886.chunk.js.map