(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[92],{143:function(e,t,r){"use strict";var n=r(155);r(179);t.a=function(e,t){return"success"===t?n.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?n.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?n.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?n.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(n.b)(e)}},1469:function(e,t,r){"use strict";r.r(t);r(1);var n=r(63),i=r(711),s=r(709),o=r(12),a=r(58),c=r(75),l=r(466),d=r(467),u=r(468),p=r(7),m=r(143),b=r(2);t.default=function(e){e.setToken,Object(o.h)();var t=Object(c.usePermify)().setUser,r=function(e){p.a.post("/api/backlogin",e).then((function(e){var r,n;e&&"401"===e.data.status?alert("Invalid Username or Password"):(r=e.data.data,n=e.data,p.a.post("/usergroup/getusergroupForLoginUser",{user_group_id:r.user_group_id}).then((function(e){var i=e.data.data,s=[];i.forEach((function(e){e.edit&&s.push("".concat(e.section_title,"-edit")),e.detail&&s.push("".concat(e.section_title,"-detail")),e.duplicate&&s.push("".concat(e.section_title,"-duplicate")),e.export&&s.push("".concat(e.section_title,"-export")),e.import&&s.push("".concat(e.section_title,"-import")),e.list&&s.push("".concat(e.section_title,"-list")),e.new&&s.push("".concat(e.section_title,"-new")),e.print&&s.push("".concat(e.section_title,"-print")),e.publish&&s.push("".concat(e.section_title,"-publish")),e.remove&&s.push("".concat(e.section_title,"-remove"))})),localStorage.setItem("user",JSON.stringify(r)),localStorage.setItem("token",JSON.stringify(n.token)),t({id:"1",roles:["admin"],permissions:s}),setTimeout((function(){window.location.reload()}),200)})).catch((function(){Object(m.a)("Network connection error.","error")})))})).catch((function(e){console.log(e)}))},h=s.b().shape({email:s.d().email("Email is invalid").required("Email is required"),password:s.d().min(6,"Password must be at least 6 characters").required("Password is required")});return Object(b.jsxs)("div",{className:"loginBox",children:[Object(b.jsx)(d.a,{className:"position-absolute left bottom-0"}),Object(b.jsx)(u.a,{className:"position-absolute end-0 top"}),Object(b.jsx)(n.u,{fluid:!0,className:"h-100",children:Object(b.jsx)(n.eb,{className:"justify-content-center align-items-center h-100",children:Object(b.jsxs)(n.s,{lg:"12",className:"loginContainer",children:[Object(b.jsx)(l.a,{}),Object(b.jsx)(n.i,{children:Object(b.jsx)(n.j,{className:"p-4 m-1",children:Object(b.jsx)(i.d,{initialValues:{email:"admin@gmail.com",password:"admin@123"},validationSchema:h,onSubmit:function(e){r(e)},render:function(e){var t=e.errors,r=e.touched;return Object(b.jsxs)(i.c,{children:[Object(b.jsxs)(n.C,{children:[Object(b.jsx)(n.H,{htmlFor:"email",children:"Email"}),Object(b.jsx)(i.b,{name:"email",type:"text",className:"form-control".concat(t.email&&r.email?" is-invalid":"")}),Object(b.jsx)(i.a,{name:"email",component:"div",className:"invalid-feedback"})]}),Object(b.jsxs)(n.C,{children:[Object(b.jsx)(n.H,{htmlFor:"password",children:"Password"}),Object(b.jsx)(i.b,{name:"password",type:"password",className:"form-control".concat(t.password&&r.password?" is-invalid":"")}),Object(b.jsx)(i.a,{name:"password",component:"div",className:"invalid-feedback"})]}),Object(b.jsxs)(n.C,{className:"form-check d-flex",inline:!0,children:[Object(b.jsxs)(n.H,{check:!0,children:[Object(b.jsx)(n.E,{type:"checkbox"}),"Remember me"]}),Object(b.jsx)(a.b,{className:"ms-auto text-decoration-none",to:"/forgotPwd",children:Object(b.jsx)("small",{children:"Forgot Pwd?"})})]}),Object(b.jsx)(n.C,{children:Object(b.jsx)(n.e,{type:"submit",color:"primary",className:"me-2",children:"Login"})})]})}})})})]})})})]})}},374:function(e,t,r){"use strict";t.a=r.p+"static/media/logo.b8526821.png"},466:function(e,t,r){"use strict";var n=r(58),i=(r(1),r(374)),s=r(2);t.a=function(){return Object(s.jsx)(n.b,{to:"/",className:"d-flex align-items-center gap-2",children:Object(s.jsx)("img",{src:i.a,alt:"Logo",className:"w-100"})})}},467:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n,i=r(1),s=["title","titleId"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function c(e,t){var r=e.title,c=e.titleId,l=a(e,s);return i.createElement("svg",o({width:376,height:317,viewBox:"0 0 376 317",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},l),r?i.createElement("title",{id:c},r):null,n||(n=i.createElement("path",{d:"M98 59.596C70 -2.00401 21 -4.07068 0 2.59599V316.596L375 315.596C377.4 234.796 297 180.263 257 165.596C215.667 155.929 126 121.196 98 59.596Z",fill:"#2B87F3"})))}var l=i.forwardRef(c);r.p},468:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n,i,s=r(1),o=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function l(e,t){var r=e.title,l=e.titleId,d=c(e,o);return s.createElement("svg",a({width:235,height:255,viewBox:"0 0 235 255",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},d),r?s.createElement("title",{id:l},r):null,n||(n=s.createElement("path",{d:"M68.0998 80.8352C29.568 58.8255 50.7474 26.3993 66.1536 12.9374L221.331 57.3035L173.743 227.335C119.588 252.59 90.715 235.279 83.0476 223.467C77.2742 209.877 90.3539 183.104 97.6153 171.416C117.578 148.566 120.185 122.853 118.994 112.853C112.554 93.0899 82.3813 83.2732 68.0998 80.8352Z",fill:"#62CFF1",fillOpacity:.5})),i||(i=s.createElement("path",{d:"M88 72C43.2 60 55.3333 19 67 0L235 1V197C187.8 240.2 154 230.333 143 220C133.4 207.2 139 174.667 143 160C156.6 129.6 152 101.333 148 91C136 71.8 103 70.3333 88 72Z",fill:"#62CFF1"})))}var d=s.forwardRef(l);r.p}}]);
//# sourceMappingURL=92.21088022.chunk.js.map