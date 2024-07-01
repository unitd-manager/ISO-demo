/*! For license information please see 93.dca524a4.chunk.js.LICENSE.txt */
(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[93],{1018:function(e,t,r){},141:function(e,t,r){"use strict";var n=r(63),o=r(12),a=r(58),c=r(3);t.a=function(e){var t=Object(o.f)(),r=t.pathname.split("/")[1],s=t.pathname.split("/")[2];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:e.heading}),Object(c.jsxs)(n.c,{children:[Object(c.jsx)(n.d,{to:"/",tag:a.b,className:"text-decoration-none",children:"Home"}),r?Object(c.jsx)(n.d,{active:!0,children:r}):"",s?Object(c.jsx)(n.d,{active:!0,children:s}):""]})]})}},1566:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(63),c=function(e,t){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},c(e,t)};var s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function l(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],c=0,s=a.length;c<s;c++,o++)n[o]=a[c];return n}var u=function(e,t){var r=null;return function(){clearTimeout(r);var n=arguments,o=this;r=setTimeout((function(){e.apply(o,n)}),t)}},p=Object.prototype.hasOwnProperty,f=Object.prototype.toString;var d=function(e){if(null==e)return!0;if("boolean"==typeof e)return!1;if("number"==typeof e)return 0===e;if("string"==typeof e)return 0===e.length;if("function"==typeof e)return 0===e.length;if(Array.isArray(e))return 0===e.length;if(e instanceof Error)return""===e.message;if(e.toString==f)switch(e.toString()){case"[object File]":case"[object Map]":case"[object Set]":return 0===e.size;case"[object Object]":for(var t in e)if(p.call(e,t))return!1;return!0}return!1};function h(e,t,r,n){var o,a=null==(o=n)||"number"===typeof o||"boolean"===typeof o?n:r(n),c=t.get(a);return"undefined"===typeof c&&(c=e.call(this,n),t.set(a,c)),c}function y(e,t,r){var n=Array.prototype.slice.call(arguments,3),o=r(n),a=t.get(o);return"undefined"===typeof a&&(a=e.apply(this,n),t.set(o,a)),a}function m(e,t,r,n,o){return r.bind(t,e,n,o)}function v(e,t){return m(e,this,1===e.length?h:y,t.cache.create(),t.serializer)}function g(){return JSON.stringify(arguments)}function b(){this.cache=Object.create(null)}b.prototype.has=function(e){return e in this.cache},b.prototype.get=function(e){return this.cache[e]},b.prototype.set=function(e,t){this.cache[e]=t};var w={create:function(){return new b}},k=function(e,t){var r=t&&t.cache?t.cache:w,n=t&&t.serializer?t.serializer:g;return(t&&t.strategy?t.strategy:v)(e,{cache:r,serializer:n})},O={variadic:function(e,t){return m(e,this,y,t.cache.create(),t.serializer)},monadic:function(e,t){return m(e,this,h,t.cache.create(),t.serializer)}};k.strategies=O;var j=function(e){return!!e&&!d(e)},N=function(e){return j(e)?e:[]},x=function(e){var t,r=e.data,n=i(e,["data"]),o=N(r),a=s({parent:"",level:0},n);return Array.isArray(o)?o.reduce((function(e,t,r){var n=s({node:t,index:r,nodeName:t.key},a);return l(e,T(n))}),[]):(t=o,Object.entries(t).sort((function(e,t){return e[1].index-t[1].index})).reduce((function(e,t){var r=t[0],n=t[1],o=s({node:n,nodeName:r},a);return l(e,T(o))}),[]))},K=function(e){var t=e.label,r=e.searchTerm,n=function(e){return e.trim().toLowerCase()};return n(t).includes(n(r))},S=function(e){return e.label},T=function(e){var t=e.node,r=e.nodeName,n=e.matchSearch,o=void 0===n?K:n,a=e.locale,c=void 0===a?S:a,u=i(e,["node","nodeName","matchSearch","locale"]),p=u.parent,f=u.level,d=u.openNodes,h=u.searchTerm,y=t.nodes,m=t.label,v=void 0===m?"unknown":m,g=i(t,["nodes","label"]),b=[p,r].filter((function(e){return e})).join("/"),w=j(y),k=w&&(d.includes(b)||!!h),O=c(s({label:v},g)),T=!h||o(s({label:O,searchTerm:h},g)),A=s(s(s({},u),g),{label:O,hasNodes:w,isOpen:k,key:b}),I=N(y),q=k?x(s(s({data:I,locale:c,matchSearch:o},u),{parent:b,level:f+1})):[];return T?l([A],q):q},A=k(x),I=x;var q=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var c=r.apply(null,o);c&&e.push(c)}else if("object"===a)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()})),E=function(e){var t=e.on,r=e.openedIcon,n=e.closedIcon;return o.a.createElement("div",{role:"img","aria-label":"Toggle",className:"rstm-toggle-icon-symbol"},t?r:n)},P=function(e){var t=e.hasNodes,r=void 0!==t&&t,n=e.isOpen,a=void 0!==n&&n,c=e.level,i=void 0===c?0:c,l=e.onClick,u=e.toggleNode,p=e.active,f=e.focused,d=e.openedIcon,h=void 0===d?"-":d,y=e.closedIcon,m=void 0===y?"+":y,v=e.label,g=void 0===v?"unknown":v,b=e.style,w=void 0===b?{}:b;return o.a.createElement("li",{className:q("rstm-tree-item","rstm-tree-item-level"+i,{"rstm-tree-item--active":p},{"rstm-tree-item--focused":f}),style:s({paddingLeft:.75+2*(r?0:1)+1.75*i+"rem"},w),role:"button","aria-pressed":p,onClick:l},r&&o.a.createElement("div",{className:"rstm-toggle-icon",onClick:function(e){r&&u&&u(),e.stopPropagation()}},o.a.createElement(E,{on:a,openedIcon:h,closedIcon:m})),g)},C=function(e){var t=e.search,r=e.items;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement("input",{className:"rstm-search","aria-label":"Type and search",type:"search",placeholder:"Type and search",onChange:function(e){var r=e.target.value;t&&t(r)}}),o.a.createElement("ul",{className:"rstm-tree-item-group"},r.map((function(e){var t=e.key,r=i(e,["key"]);return o.a.createElement(P,s({key:t},r))}))))},z=function(e){var t=e.children,r=e.up,n=e.down,a=e.left,c=e.right,s=e.enter;return o.a.createElement("div",{tabIndex:0,onKeyDown:function(e){switch(e.key){case"ArrowUp":r();break;case"ArrowDown":n();break;case"ArrowLeft":a();break;case"ArrowRight":c();break;case"Enter":s()}}},t)},D=function(e){return console.log(e)},_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={openNodes:t.props.initialOpenNodes||[],searchTerm:"",activeKey:t.props.initialActiveKey||"",focusKey:t.props.initialFocusKey||""},t.resetOpenNodes=function(e,r,n){var o=t.props.initialOpenNodes,a=Array.isArray(e)&&e||o||[];t.setState({openNodes:a,searchTerm:"",activeKey:r||"",focusKey:n||r||""})},t.search=function(e){var r=t.props.debounceTime;u((function(e){return t.setState({searchTerm:e})}),r)(e)},t.toggleNode=function(e){if(!t.props.openNodes){var r=t.state.openNodes,n=r.includes(e)?r.filter((function(t){return t!==e})):l(r,[e]);t.setState({openNodes:n})}},t.generateItems=function(){var e=t.props,r=e.data,n=e.onClickItem,o=e.locale,a=e.matchSearch,c=t.state.searchTerm,i=t.props.openNodes||t.state.openNodes,l=t.props.activeKey||t.state.activeKey,u=t.props.focusKey||t.state.focusKey,p=t.props.cacheSearch?A:I;return(r?p({data:r,openNodes:i,searchTerm:c,locale:o,matchSearch:a}):[]).map((function(e){var r=e.key===u,o=e.key===l,a=e.hasNodes?function(){return t.toggleNode(e.key)}:void 0;return s(s({},e),{focused:r,active:o,onClick:function(){var r=t.props.activeKey||e.key;t.setState({activeKey:r,focusKey:r}),n&&n(e)},toggleNode:a})}))},t.getKeyDownProps=function(e){var r=t.props.onClickItem,n=t.state,o=n.focusKey,a=n.activeKey,c=(n.searchTerm,e.findIndex((function(e){return e.key===(o||a)}))),u=function(e){var t=e.key.split("/");return t.length>1?t.slice(0,t.length-1).join("/"):e.key};return{up:function(){t.setState((function(t){var r=t.focusKey;return{focusKey:c>0?e[c-1].key:r}}))},down:function(){t.setState((function(t){var r=t.focusKey;return{focusKey:c<e.length-1?e[c+1].key:r}}))},left:function(){var r=e[c];r&&t.setState((function(e){var t=e.openNodes,n=i(e,["openNodes"]),o=t.filter((function(e){return e!==r.key}));return r.isOpen?s(s({},n),{openNodes:o,focusKey:r.key}):s(s({},n),{focusKey:u(r)})}))},right:function(){var r=e[c],n=r.hasNodes,o=r.key;n&&t.setState((function(e){return{openNodes:l(e.openNodes,[o])}}))},enter:function(){t.setState((function(e){return{activeKey:e.focusKey}})),r&&r(e[c])}}},t}return function(e,t){function r(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.componentDidUpdate=function(e){var t=this.props,r=t.data,n=t.initialOpenNodes,o=t.resetOpenNodesOnDataUpdate;e.data!==r&&o&&n&&this.setState({openNodes:n})},t.prototype.render=function(){var e=this.props,t=e.children,r=e.hasSearch,n=e.disableKeyboard,a=this.state.searchTerm,c=this.search,i=this.generateItems(),l=this.resetOpenNodes,u=t||C,p=r?{search:c,resetOpenNodes:l,items:i,searchTerm:a}:{items:i,resetOpenNodes:l};return n?u(p):o.a.createElement(z,s({},this.getKeyDownProps(i)),u(p))},t.defaultProps={data:{},onClickItem:D,debounceTime:125,children:C,hasSearch:!0,cacheSearch:!0,resetOpenNodesOnDataUpdate:!1,disableKeyboard:!1},t}(o.a.Component),F=_,L=r(141),U=(r(732),r(1018),r(3));t.default=function(){return Object(U.jsxs)("div",{children:[Object(U.jsx)(L.a,{}),Object(U.jsx)(a.eb,{children:Object(U.jsx)(a.s,{children:Object(U.jsx)(a.i,{children:Object(U.jsx)(a.j,{children:Object(U.jsx)(F,{data:[{key:"mammal",label:"Mammal",nodes:[{key:"canidae",label:"Canidae",nodes:[{key:"dog",label:"Dog",nodes:[],url:"https://www.google.com/search?q=dog"},{key:"fox",label:"Fox",nodes:[],url:"https://www.google.com/search?q=fox"},{key:"wolf",label:"Wolf",nodes:[],url:"https://www.google.com/search?q=wolf"}],url:"https://www.google.com/search?q=canidae"}],url:"https://www.google.com/search?q=mammal"},{key:"reptile",label:"Reptile",nodes:[{key:"squamata",label:"Squamata",nodes:[{key:"lizard",label:"Lizard",url:"https://www.google.com/search?q=lizard"},{key:"snake",label:"Snake",url:"https://www.google.com/search?q=snake"},{key:"gekko",label:"Gekko",url:"https://www.google.com/search?q=gekko"}],url:"https://www.google.com/search?q=squamata"}],url:"https://www.google.com/search?q=reptile"}]})})})})})]})}},732:function(e,t,r){}}]);
//# sourceMappingURL=93.dca524a4.chunk.js.map