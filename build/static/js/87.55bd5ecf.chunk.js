(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[87],{143:function(e,t,r){"use strict";var s=r(158);r(181);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},1465:function(e,t,r){"use strict";r.r(t);r(1);var s=r(63),n=r(706),a=r(704),i=r(12),o=r(58),c=r(76),l=r(551),d=r(552),b=r(553),u=r(7),m=(r(143),r(3));t.default=function(e){e.setToken;var t=Object(i.g)(),r=(Object(c.usePermify)().setUser,a.b().shape({email:a.d().email("Email is invalid").required("Email is required"),password:a.d().min(6,"Password must be at least 6 characters").required("Password is required")}));return Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsx)(d.a,{className:"position-absolute left bottom-0"}),Object(m.jsx)(b.a,{className:"position-absolute end-0 top"}),Object(m.jsx)(s.u,{fluid:!0,className:"h-100",children:Object(m.jsx)(s.eb,{className:"justify-content-center align-items-center h-100",children:Object(m.jsxs)(s.s,{lg:"12",className:"loginContainer",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)(s.i,{children:Object(m.jsx)(s.j,{className:"p-4 m-1",children:Object(m.jsx)(n.d,{initialValues:{email:"admin@gmail.com",password:"admin@123"},validationSchema:r,onSubmit:function(e){var r;r=e,u.a.post("/api/backlogin",r).then((function(e){e&&"401"===e.data.status?alert("Invalid Username or Password"):t("/userdashboard")})).catch((function(e){console.log(e)}))},render:function(e){var t=e.errors,r=e.touched;return Object(m.jsxs)(n.c,{children:[Object(m.jsxs)(s.C,{children:[Object(m.jsx)(s.H,{htmlFor:"email",children:"Email"}),Object(m.jsx)(n.b,{name:"email",type:"text",className:"form-control".concat(t.email&&r.email?" is-invalid":"")}),Object(m.jsx)(n.a,{name:"email",component:"div",className:"invalid-feedback"})]}),Object(m.jsxs)(s.C,{children:[Object(m.jsx)(s.H,{htmlFor:"password",children:"Password"}),Object(m.jsx)(n.b,{name:"password",type:"password",className:"form-control".concat(t.password&&r.password?" is-invalid":"")}),Object(m.jsx)(n.a,{name:"password",component:"div",className:"invalid-feedback"})]}),Object(m.jsxs)(s.C,{className:"form-check d-flex",inline:!0,children:[Object(m.jsxs)(s.H,{check:!0,children:[Object(m.jsx)(s.E,{type:"checkbox"}),"Remember me"]}),Object(m.jsx)(o.b,{className:"ms-auto text-decoration-none",to:"/forgotPwd",children:Object(m.jsx)("small",{children:"Forgot Pwd?"})})]}),Object(m.jsx)(s.C,{children:Object(m.jsx)(s.e,{type:"submit",color:"primary",className:"me-2",children:"Login"})})]})}})})})]})})})]})}},410:function(e,t,r){"use strict";t.a=r.p+"static/media/logo.b8526821.png"},551:function(e,t,r){"use strict";var s=r(58),n=(r(1),r(410)),a=r(3);t.a=function(){return Object(a.jsx)(s.b,{to:"/",className:"d-flex align-items-center gap-2",children:Object(a.jsx)("img",{src:n.a,alt:"Logo",className:"w-100"})})}},552:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var s,n=r(1),a=["title","titleId"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function c(e,t){var r=e.title,c=e.titleId,l=o(e,a);return n.createElement("svg",i({width:376,height:317,viewBox:"0 0 376 317",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},l),r?n.createElement("title",{id:c},r):null,s||(s=n.createElement("path",{d:"M98 59.596C70 -2.00401 21 -4.07068 0 2.59599V316.596L375 315.596C377.4 234.796 297 180.263 257 165.596C215.667 155.929 126 121.196 98 59.596Z",fill:"#2B87F3"})))}var l=n.forwardRef(c);r.p},553:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var s,n,a=r(1),i=["title","titleId"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function l(e,t){var r=e.title,l=e.titleId,d=c(e,i);return a.createElement("svg",o({width:235,height:255,viewBox:"0 0 235 255",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},d),r?a.createElement("title",{id:l},r):null,s||(s=a.createElement("path",{d:"M68.0998 80.8352C29.568 58.8255 50.7474 26.3993 66.1536 12.9374L221.331 57.3035L173.743 227.335C119.588 252.59 90.715 235.279 83.0476 223.467C77.2742 209.877 90.3539 183.104 97.6153 171.416C117.578 148.566 120.185 122.853 118.994 112.853C112.554 93.0899 82.3813 83.2732 68.0998 80.8352Z",fill:"#62CFF1",fillOpacity:.5})),n||(n=a.createElement("path",{d:"M88 72C43.2 60 55.3333 19 67 0L235 1V197C187.8 240.2 154 230.333 143 220C133.4 207.2 139 174.667 143 160C156.6 129.6 152 101.333 148 91C136 71.8 103 70.3333 88 72Z",fill:"#62CFF1"})))}var d=a.forwardRef(l);r.p}}]);
//# sourceMappingURL=87.55bd5ecf.chunk.js.map