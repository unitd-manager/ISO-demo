(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[103],{142:function(t,e,n){"use strict";var p=n(63),r=n(12),s=n(58),i=n(2);e.a=function(t){var e=Object(r.g)(),n=e.pathname.split("/")[1],o=e.pathname.split("/")[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:t.heading}),Object(i.jsxs)(p.c,{children:[Object(i.jsx)(p.d,{to:"/",tag:s.b,className:"text-decoration-none",children:"Home"}),n?Object(i.jsx)(p.d,{active:!0,children:n}):"",o?Object(i.jsx)(p.d,{active:!0,children:o}):""]})]})}},1476:function(t,e,n){"use strict";n.r(e);var p=n(27),r=n(1),s=n(281),i=n(63),o=(n(261),n(200),n(201),n(157)),c=n.n(o),a=(n(203),n(204),n(205),n(206),n(58)),l=n(7),_=n(142),x=n(199),d=n(2);e.default=function(){var t=Object(r.useState)(null),e=Object(p.a)(t,2),n=e[0],o=e[1],m=Object(r.useState)(!1),k=Object(p.a)(m,2),j=k[0],y=k[1];Object(r.useEffect)((function(){l.a.get("/score/getScoreManage").then((function(t){o(t.data.data),c()("#example").DataTable({pagingType:"full_numbers",pageLength:20,processing:!0,dom:"Bfrtip",buttons:[{extend:"print",text:"Print",className:"shadow-none btn btn-primary"}]}),y(!1)})).catch((function(){y(!1)}))}),[]);var b=[{name:"#",selector:"",grow:0,wrap:!0,width:"4%"},{name:"Edit",selector:"edit",cell:function(){return Object(d.jsx)(s.a,{})},grow:0,width:"auto",button:!0,sortable:!1},{name:"Company",selector:"company_name",sortable:!0,grow:0},{name:"Score",selector:"first_name",sortable:!0,grow:0,wrap:!0},{name:"Review Status",selector:"review_status",sortable:!0,grow:2,wrap:!0}];return Object(d.jsx)("div",{className:"MainDiv",children:Object(d.jsxs)("div",{className:" pt-xs-25",children:[Object(d.jsx)(_.a,{}),Object(d.jsxs)(x.a,{loading:j,title:"Score List",Button:Object(d.jsx)(a.b,{to:"/ScoreManagementDetails",children:Object(d.jsx)(i.e,{color:"primary",className:"shadow-none",children:"Add New"})}),children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:b.map((function(t){return Object(d.jsx)("td",{children:t.name},t.name)}))})}),Object(d.jsx)("tbody",{children:n&&n.map((function(t,e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e+1}),Object(d.jsx)("td",{children:Object(d.jsx)(a.b,{to:"/ScoreManagementEdit/".concat(t.score_management_id,"?tab=1"),children:Object(d.jsx)(s.a,{})})}),Object(d.jsx)("td",{children:t.company_name}),Object(d.jsx)("td",{children:t.correct_count}),Object(d.jsx)("td",{children:t.review_status})]},t.score_management_id)}))})]})]})})}},198:function(t){t.exports=JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 5","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":8,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":24,"s":[30],"e":[100]},{"t":40}]},"r":{"k":0},"p":{"k":[187.875,77.125,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":8,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":24,"s":[200,200,100],"e":[100,100,100]},{"t":40}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0.3137254901960784,0.803921568627451,0.5372549019607843,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":1,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 4","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":6,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":22,"s":[30],"e":[100]},{"t":36}]},"r":{"k":0},"p":{"k":[162.125,76.625,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":6,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":22,"s":[200,200,100],"e":[100,100,100]},{"t":36}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[1,0.8392156862745098,0.34509803921568627,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 3","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":4,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":20,"s":[30],"e":[100]},{"t":32}]},"r":{"k":0},"p":{"k":[135.625,76.625,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":4,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":20,"s":[200,200,100],"e":[100,100,100]},{"t":32}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0,0.7490196078431373,0.9529411764705882,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 2","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":2,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":16,"s":[30],"e":[100]},{"t":28}]},"r":{"k":0},"p":{"k":[109.375,76.625,0]},"a":{"k":[-76.625,-3.125,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":2,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":16,"s":[200,200,100],"e":[100,100,100]},{"t":28}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0.9490196078431372,0.39215686274509803,0.36470588235294116,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 1","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":0,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":12,"s":[30],"e":[100]},{"t":24}]},"r":{"k":0},"p":{"k":[82.625,76.625,0]},"a":{"k":[-76.625,-3.375,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":0,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":12,"s":[200,200,100],"e":[100,100,100]},{"t":24}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0,0,0,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1}],"v":"4.5.4","ddd":0,"ip":0,"op":40,"fr":24,"w":280,"h":160}')},199:function(t,e,n){"use strict";var p=n(63),r=(n(1),n(202)),s=n.n(r),i=n(198),o=n(2),c=function(){var t={loop:!0,autoplay:!0,renderer:"svg",animationData:i,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return Object(o.jsx)("div",{children:Object(o.jsx)(s.a,{options:t,height:100,width:100})})};e.a=function(t){return Object(o.jsx)("div",{children:Object(o.jsx)(p.i,{children:Object(o.jsxs)(p.j,{children:[Object(o.jsxs)(p.eb,{className:"mb-2 title_border",children:[Object(o.jsxs)(p.s,{children:[Object(o.jsx)(p.o,{tag:"h5",children:t.title}),Object(o.jsx)(p.m,{className:"mb-2 text-muted",tag:"h6",children:t.subtitle})]}),Object(o.jsx)(p.s,{className:"d-flex",style:{justifyContent:"flex-end"},xl:3,sm:12,children:t.Button})]}),t.loading?Object(o.jsx)(c,{}):Object(o.jsx)(p.ib,{id:"example",className:"no-wrap mt-3 align-middle example ".concat(t.additionalClasses),striped:!0,responsive:!0,borderless:!0,children:t.children})]})})})}},281:function(t,e,n){"use strict";var p=n(1),r=n.n(p),s=n(0),i=n.n(s);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&(t[p]=n[p])}return t},o.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,p,r=function(t,e){if(null==t)return{};var n,p,r={},s=Object.keys(t);for(p=0;p<s.length;p++)n=s[p],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(p=0;p<s.length;p++)n=s[p],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=Object(p.forwardRef)((function(t,e){var n=t.color,p=void 0===n?"currentColor":n,s=t.size,i=void 0===s?24:s,a=c(t,["color","size"]);return r.a.createElement("svg",o({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:p,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}))}));a.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},a.displayName="Edit2",e.a=a}}]);
//# sourceMappingURL=103.3443e9a4.chunk.js.map