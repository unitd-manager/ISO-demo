(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[175],{1014:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(1);function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,u(t,e)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}var a=function(){},s=n.Fragment?function(t){return t?t.length>1?n.createElement.apply(void 0,[n.Fragment,null].concat(t)):n.Children.only(t):null}:n.Children.only,c=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).t=!1,e.i=null,e.u=a,e}o(e,t);var r=e.prototype;return r.componentWillUnmount=function(){this.u()},r.o=function(t){var e=this;t!==this.i&&(this.u(),this.i=null,t&&(this.i=t,this.u=t.on("updated",(function(){return e.forceUpdate()}))))},r.h=function(){var t=this.props,e=t.of||t.a||t.an||t.this||t.on,r=t.not?"cannot":"can";return t.ability[r](t.I||t.do,e,t.field)},r.render=function(){return this.o(this.props.ability),this.t=this.h(),this.props.passThrough||this.t?this.l():null},r.l=function(){var t=this.props,e=t.children,r=t.ability,n="function"===typeof e?e(this.t,r):e;return s(n)},function(t,e,r){e&&i(t.prototype,e),r&&i(t,r)}(e,[{key:"allowed",get:function(){return this.t}}]),e}(n.PureComponent)},1064:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}r.d(e,"a",(function(){return ce}));var u=function(){function t(t,e){this.operator=t,this.value=e,Object.defineProperty(this,"t",{writable:!0})}var e,r;return t.prototype.addNote=function(t){this.t=this.t||[],this.t.push(t)},e=t,(r=[{key:"notes",get:function(){return this.t}}])&&n(e.prototype,r),t}(),a=function(t){function e(){return t.apply(this,arguments)||this}return o(e,t),e}(u),s=function(t){function e(e,r){if(!Array.isArray(r))throw new Error('"'+e+'" operator expects to receive an array of conditions');return t.call(this,e,r)||this}return o(e,t),e}(a),c="__itself__",f=function(t){function e(e,r,n){var i;return(i=t.call(this,e,n)||this).field=r,i}return o(e,t),e}(u),l=new a("__null__",null),p=Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);function h(t,e){return e instanceof s&&e.operator===t}function v(t,e){return 1===e.length?e[0]:new s(t,function t(e,r,n){for(var i=n||[],o=0,u=r.length;o<u;o++){var a=r[o];h(e,a)?t(e,a.value,i):i.push(a)}return i}(t,e))}var d=function(t){return t},y=function(){return Object.create(null)},g=Object.defineProperty(y(),"__@type@__",{value:"ignore value"});function b(t){var e=[];for(var r in t)p(t,r)&&t[r]!==g&&e.push(r);return e}function m(t,e){e!==l&&t.push(e)}var w=function(t){return v("and",t)},O={compound:function(t,e,r){var n=(Array.isArray(e)?e:[e]).map((function(t){return r.parse(t)}));return new s(t.name,n)},field:function(t,e,r){return new f(t.name,r.field,e)},document:function(t,e){return new a(t.name,e)}},j=function(){function t(t,e){var r=this;void 0===e&&(e=y()),this.i=void 0,this.o=void 0,this.u=void 0,this.s=void 0,this.h=void 0,this.parse=this.parse.bind(this),this.s={operatorToConditionName:e.operatorToConditionName||d,defaultOperatorName:e.defaultOperatorName||"eq",mergeFinalConditions:e.mergeFinalConditions||w},this.i=Object.keys(t).reduce((function(e,n){return e[n]=i({name:r.s.operatorToConditionName(n)},t[n]),e}),{}),this.o=i({},e.fieldContext,{field:"",query:{},parse:this.parse,hasOperators:function(t){return function(t,e,r){if(void 0===r&&(r=!1),!t||t&&t.constructor!==Object)return!1;for(var n in t)if(p(t,n)&&p(e,n)&&(!r||t[n]!==g))return!0;return!1}(t,r.i,e.useIgnoreValue)}}),this.u=i({},e.documentContext,{parse:this.parse,query:{}}),this.h=e.useIgnoreValue?b:Object.keys}var e=t.prototype;return e.setParse=function(t){this.parse=t,this.o.parse=t,this.u.parse=t},e.parseField=function(t,e,r,n){var i=this.i[e];if(!i)throw new Error('Unsupported operator "'+e+'"');if("field"!==i.type)throw new Error("Unexpected "+i.type+' operator "'+e+'" at field level');return this.o.field=t,this.o.query=n,this.parseInstruction(i,r,this.o)},e.parseInstruction=function(t,e,r){return"function"==typeof t.validate&&t.validate(t,e),(t.parse||O[t.type])(t,e,r)},e.parseFieldOperators=function(t,e){for(var r=[],n=this.h(e),i=0,o=n.length;i<o;i++){var u=n[i];if(!this.i[u])throw new Error('Field query for "'+t+'" may contain only operators or a plain object as a value');m(r,this.parseField(t,u,e[u],e))}return r},e.parse=function(t){var e=[],r=this.h(t);this.u.query=t;for(var n=0,i=r.length;n<i;n++){var o=r[n],u=t[o],a=this.i[o];if(a){if("document"!==a.type&&"compound"!==a.type)throw new Error('Cannot use parsing instruction for operator "'+o+'" in "document" context as it is supposed to be used in  "'+a.type+'" context');m(e,this.parseInstruction(a,u,this.u))}else this.o.hasOperators(u)?e.push.apply(e,this.parseFieldOperators(o,u)):m(e,this.parseField(o,this.s.defaultOperatorName,u,t))}return this.s.mergeFinalConditions(e)},t}();function _(t,e){var r=t[e];if("function"!=typeof r)throw new Error('Unable to interpret "'+e+'" condition. Did you forget to register interpreter for it?');return r}function x(t){return t.operator}j.prototype.parseInstruction;function $(t,e){if(!Array.isArray(e))throw new Error('"'+t.name+'" expects value to be an array')}function A(t,e){if($(t,e),!e.length)throw new Error('"'+t.name+'" expects to have at least one element in array')}var E=function(t){return function(e,r){if(typeof r!==t)throw new Error('"'+e.name+'" expects value to be a "'+t+'"')}},F={type:"compound",validate:A,parse:function(t,e,r){var n=r.parse,i=e.map((function(t){return n(t)}));return v(t.name,i)}},M=F,P={type:"compound",validate:A},T={type:"field",validate:function(t,e){if(!e||!(e instanceof RegExp||e.constructor===Object))throw new Error('"'+t.name+'" expects to receive either regular expression or object of field operators')},parse:function(t,e,r){var n=e instanceof RegExp?new f("regex",r.field,e):r.parse(e,r);return new s(t.name,[n])}},C={type:"field",validate:function(t,e){if(!e||e.constructor!==Object)throw new Error('"'+t.name+'" expects to receive an object with nested query or field level operators')},parse:function(t,e,r){var n=r.parse,i=r.field,o=(0,r.hasOperators)(e)?n(e,{field:c}):n(e);return new f(t.name,i,o)}},N={type:"field",validate:E("number")},k={type:"field",validate:$},R=k,q=k,S={type:"field",validate:function(t,e){if(!Array.isArray(e)||2!==e.length)throw new Error('"'+t.name+'" expects an array with 2 numeric elements')}},I={type:"field",validate:E("boolean")},z={type:"field",validate:function(t,e){if(!("string"==typeof e||"number"==typeof e||e instanceof Date))throw new Error('"'+t.name+'" expects value to be comparable (i.e., string, number or date)')}},U=z,D=U,J=U,V={type:"field"},Y=V,L={type:"field",validate:function(t,e){if(!(e instanceof RegExp)&&"string"!=typeof e)throw new Error('"'+t.name+'" expects value to be a regular expression or a string that represents regular expression')},parse:function(t,e,r){var n="string"==typeof e?new RegExp(e,r.query.$options||""):e;return new f(t.name,r.field,n)}},W={type:"field",parse:function(){return l}},B={type:"document",validate:E("function")},G=Object.freeze({__proto__:null,$and:F,$or:M,$nor:P,$not:T,$elemMatch:C,$size:N,$in:k,$nin:R,$all:q,$mod:S,$exists:I,$gte:z,$gt:U,$lt:D,$lte:J,$eq:V,$ne:Y,$regex:L,$options:W,$where:B}),H=function(t){var e,r;function n(e){return t.call(this,e,{defaultOperatorName:"$eq",operatorToConditionName:function(t){return t.slice(1)}})||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.parse=function(e,r){return r&&r.field?w(this.parseFieldOperators(r.field,e)):t.prototype.parse.call(this,e)},n}(j),K=G;function Q(t,e,r){for(var n=0,i=t.length;n<i;n++)if(0===r(t[n],e))return!0;return!1}function X(t,e){return Array.isArray(t)&&Number.isNaN(Number(e))}function Z(t,e,r){if(!X(t,e))return r(t,e);for(var n=[],i=0;i<t.length;i++){var o=r(t[i],e);void 0!==o&&(n=n.concat(o))}return n}function tt(t){return function(e,r,n){var i=n.get(r,e.field);return Array.isArray(i)?i.some((function(r){return t(e,r,n)})):t(e,i,n)}}function et(){return(et=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var rt=function(t,e){return t[e]};function nt(t,e,r){var n=e.lastIndexOf(".");return-1===n?[t,e]:[r(t,e.slice(0,n)),e.slice(n+1)]}function it(t,e,r){if(void 0===r&&(r=rt),e===c)return t;if(!t)throw new Error('Unable to get field "'+e+'" out of '+String(t)+".");return function(t,e,r){if(-1===e.indexOf("."))return Z(t,e,r);for(var n=e.split("."),i=t,o=0,u=n.length;o<u;o++)if(!(i=Z(i,n[o],r))||"object"!=typeof i)return i;return i}(t,e,r)}function ot(t,e){return t===e?0:t>e?1:-1}function ut(t,e){return void 0===e&&(e={}),function(t,e){var r,n=e,o=n&&n.getInterpreterName||x;switch(n?n.numberOfArguments:0){case 1:r=function(e){var r=o(e,n);return _(t,r)(e,u)};break;case 3:r=function(e,r,i){var a=o(e,n);return _(t,a)(e,r,i,u)};break;default:r=function(e,r){var i=o(e,n);return _(t,i)(e,r,u)}}var u=i({},n,{interpret:r});return u.interpret}(t,et({get:it,compare:ot},e))}var at=function(t,e,r){var n=r.interpret;return t.value.some((function(t){return n(t,e)}))},st=function(t,e,r){var n=r.interpret;return t.value.every((function(t){return n(t,e)}))},ct=function(t,e,r){var n=r.compare,i=(0,r.get)(e,t.field);return Array.isArray(i)&&!Array.isArray(t.value)?Q(i,t.value,n):0===n(i,t.value)},ft=function(t,e,r){return!ct(t,e,r)},lt=tt((function(t,e,r){var n=r.compare(e,t.value);return 0===n||-1===n})),pt=tt((function(t,e,r){return-1===r.compare(e,t.value)})),ht=tt((function(t,e,r){return 1===r.compare(e,t.value)})),vt=tt((function(t,e,r){var n=r.compare(e,t.value);return 0===n||1===n})),dt=function(t,e,r){var n=r.get;if(t.field===c)return void 0!==e;var i=nt(e,t.field,n),o=i[0],u=i[1],a=function(e){return!!e&&e.hasOwnProperty(u)===t.value};return X(o,u)?o.some(a):a(o)},yt=tt((function(t,e){return"number"==typeof e&&e%t.value[0]===t.value[1]})),gt=function(t,e,r){var n=r.get,i=nt(e,t.field,n),o=i[0],u=i[1],a=function(e){var r=n(e,u);return Array.isArray(r)&&r.length===t.value};return t.field!==c&&X(o,u)?o.some(a):a(o)},bt=tt((function(t,e){return"string"==typeof e&&t.value.test(e)})),mt=tt((function(t,e,r){var n=r.compare;return Q(t.value,e,n)})),wt=function(t,e,r){return!mt(t,e,r)},Ot=function(t,e,r){var n=r.compare,i=(0,r.get)(e,t.field);return Array.isArray(i)&&t.value.every((function(t){return Q(i,t,n)}))},jt=function(t,e,r){var n=r.interpret,i=(0,r.get)(e,t.field);return Array.isArray(i)&&i.some((function(e){return n(t.value,e)}))},_t=et({},Object.freeze({__proto__:null,or:at,nor:function(t,e,r){return!at(t,e,r)},and:st,not:function(t,e,r){return!(0,r.interpret)(t.value[0],e)},eq:ct,ne:ft,lte:lt,lt:pt,gt:ht,gte:vt,exists:dt,mod:yt,size:gt,regex:bt,within:mt,nin:wt,all:Ot,elemMatch:jt,where:function(t,e){return t.value.call(e)}}),{in:mt});ut(_t);function xt(){return(xt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function $t(t){return t instanceof Date?t.getTime():t&&"function"==typeof t.toJSON?t.toJSON():t}var At=function(t,e){return ot($t(t),$t(e))};function Et(t,e,r){var n,i,o=new H(t),u=ut(e,xt({compare:At},r));if(r&&r.forPrimitives){var a={field:c},s=o.parse;o.setParse((function(t){return s(t,a)}))}return n=o.parse,i=u,function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];var u=n.apply(void 0,[t].concat(r)),a=i.bind(null,u);return a.ast=u,a}}Et(K,_t),Et(["$and","$or"].reduce((function(t,e){return t[e]=xt({},t[e],{type:"field"}),t}),xt({},K,{$nor:xt({},K.$nor,{type:"field",parse:O.compound})})),_t,{forPrimitives:!0});function Ft(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Mt(t,e,r){return e&&Ft(t.prototype,e),r&&Ft(t,r),t}function Pt(){return Pt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Pt.apply(this,arguments)}function Tt(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ct(t,e)}function Ct(t,e){return Ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},Ct(t,e)}function Nt(t){return Array.isArray(t)?t:[t]}var kt="__caslSubjectType__";var Rt=function(t){var e=typeof t;return"string"===e||"function"===e},qt=function(t){return t.modelName||t.name},St=function(t){return"string"===typeof t?t:qt(t)};function It(t){return t.hasOwnProperty(kt)?t.__caslSubjectType__:qt(t.constructor)}function zt(t,e,r){for(var n=r;n<e.length;n++)t.push(e[n])}function Ut(t,e){if(!t||!t.length)return e||[];if(!e||!e.length)return t||[];for(var r=0,n=0,i=[];r<t.length&&n<e.length;)t[r].priority<e[n].priority?(i.push(t[r]),r++):(i.push(e[n]),n++);return zt(i,t,r),zt(i,e,n),i}function Dt(t,e,r){var n=t.get(e);return n||(n=r(),t.set(e,n)),n}var Jt=function(t){return t};var Vt=function(){function t(t,e,r){void 0===r&&(r=0),function(t,e){if(Array.isArray(t.fields)&&!t.fields.length)throw new Error("`rawRule.fields` cannot be an empty array. https://bit.ly/390miLa");if(t.fields&&!e.fieldMatcher)throw new Error('You need to pass "fieldMatcher" option in order to restrict access by fields');if(t.conditions&&!e.conditionsMatcher)throw new Error('You need to pass "conditionsMatcher" option in order to restrict access by conditions')}(t,e),this.action=e.resolveAction(t.action),this.subject=t.subject,this.inverted=!!t.inverted,this.conditions=t.conditions,this.reason=t.reason,this.fields=t.fields?Nt(t.fields):void 0,this.priority=r,this.t=e}var e=t.prototype;return e.i=function(){return this.conditions&&!this.u&&(this.u=this.t.conditionsMatcher(this.conditions)),this.u},e.matchesConditions=function(t){return!this.conditions||(!t||Rt(t)?!this.inverted:this.i()(t))},e.matchesField=function(t){return!this.fields||(t?(this.fields&&!this.o&&(this.o=this.t.fieldMatcher(this.fields)),this.o(t)):!this.inverted)},Mt(t,[{key:"ast",get:function(){var t=this.i();return t?t.ast:void 0}}]),t}();var Yt=function(t){return{value:t.value,prev:t.prev,next:t.next}},Lt=function(){return{rules:[],merged:!1}},Wt=function(){return new Map},Bt=function(t,e){!t.h&&e.fields&&(t.h=!0)},Gt=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e={}),this.h=!1,this.v=new Map,this.l={conditionsMatcher:e.conditionsMatcher,fieldMatcher:e.fieldMatcher,resolveAction:e.resolveAction||Jt},this.p=e.anyAction||"manage",this.g=e.anySubjectType||"all",this.A=e.detectSubjectType||It,this.$=t,this.j=this.m(t)}var e=t.prototype;return e.detectSubjectType=function(t){return Rt(t)?t:t?this.A(t):this.g},e.update=function(t){var e={rules:t,ability:this,target:this};return this.M("update",e),this.$=t,this.j=this.m(t),this.M("updated",e),this},e.m=function(t){for(var e=new Map,r=t.length-1;r>=0;r--){var n=t.length-r-1,i=new Vt(t[r],this.l,n),o=Nt(i.action),u=Nt(i.subject||this.g);Bt(this,i);for(var a=0;a<u.length;a++)for(var s=Dt(e,u[a],Wt),c=0;c<o.length;c++)Dt(s,o[c],Lt).rules.push(i)}return e},e.possibleRulesFor=function(t,e){if(void 0===e&&(e=this.g),!Rt(e))throw new Error('"possibleRulesFor" accepts only subject types (i.e., string or class) as the 2nd parameter');var r=Dt(this.j,e,Wt),n=Dt(r,t,Lt);if(n.merged)return n.rules;var i=t!==this.p&&r.has(this.p)?r.get(this.p).rules:void 0,o=Ut(n.rules,i);return e!==this.g&&(o=Ut(o,this.possibleRulesFor(t,this.g))),n.rules=o,n.merged=!0,o},e.rulesFor=function(t,e,r){var n=this.possibleRulesFor(t,e);if(r&&"string"!==typeof r)throw new Error("The 3rd, `field` parameter is expected to be a string. See https://stalniy.github.io/casl/en/api/casl-ability#can-of-pure-ability for details");return this.h?n.filter((function(t){return t.matchesField(r)})):n},e.on=function(t,e){var r=this,n=function(t,e){var r={value:t,prev:e,next:null};return e&&(e.next=r),r}(e,this.v.get(t)||null);return this.v.set(t,n),function(){var e=r.v.get(t);n.next||n.prev||e!==n?n===e&&r.v.set(t,n.prev):r.v.delete(t),function(t){t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next),t.next=t.prev=null}(n)}},e.M=function(t,e){for(var r=this.v.get(t)||null;null!==r;){var n=r.prev?Yt(r.prev):null;r.value(e),r=n}},Mt(t,[{key:"rules",get:function(){return this.$}}]),t}(),Ht=function(t){function e(){return t.apply(this,arguments)||this}Tt(e,t);var r=e.prototype;return r.can=function(){var t=this.relevantRuleFor.apply(this,arguments);return!!t&&!t.inverted},r.relevantRuleFor=function(t,e,r){for(var n=this.detectSubjectType(e),i=this.rulesFor(t,n,r),o=0,u=i.length;o<u;o++)if(i[o].matchesConditions(e))return i[o];return null},r.cannot=function(){return!this.can.apply(this,arguments)},e}(Gt),Kt={$eq:V,$ne:Y,$lt:D,$lte:J,$gt:U,$gte:z,$in:k,$nin:R,$all:q,$size:N,$regex:L,$options:W,$elemMatch:C,$exists:I},Qt={eq:ct,ne:ft,lt:pt,lte:lt,gt:ht,gte:vt,in:mt,nin:wt,all:Ot,size:gt,regex:bt,elemMatch:jt,exists:dt,and:st},Xt=Et(Kt,Qt),Zt=/[-/\\^$+?.()|[\]{}]/g,te=/\.?\*+\.?/g,ee=/\*+/,re=/\./g;function ne(t,e,r){var n="*"===r[0]||"."===t[0]&&"."===t[t.length-1]?"+":"*",i=-1===t.indexOf("**")?"[^.]":".",o=t.replace(re,"\\$&").replace(ee,i+n);return e+t.length===r.length?"(?:"+o+")?":o}function ie(t,e,r){return"."!==t||"*"!==r[e-1]&&"*"!==r[e+1]?"\\"+t:t}var oe=function(t){var e;return function(r){return"undefined"===typeof e&&(e=t.every((function(t){return-1===t.indexOf("*")}))?null:function(t){var e=t.map((function(t){return t.replace(Zt,ie).replace(te,ne)})),r=e.length>1?"(?:"+e.join("|")+")":e[0];return new RegExp("^"+r+"$")}(t)),null===e?-1!==t.indexOf(r):e.test(r)}},ue=function(t){function e(e,r){return void 0===e&&(e=[]),void 0===r&&(r={}),t.call(this,e,Pt({conditionsMatcher:Xt,fieldMatcher:oe},r))||this}return Tt(e,t),e}(Ht),ae=function(){function t(t){this.O=t}return t.prototype.because=function(t){return this.O.reason=t,this},t}(),se=function(){function t(t){this.rules=[],this.F=t,this.can=this.can.bind(this),this.cannot=this.cannot.bind(this),this.build=this.build.bind(this)}var e=t.prototype;return e.can=function(t,e,r,n){var i={action:t};return e&&(i.subject=e,Array.isArray(r)||"string"===typeof r?i.fields=r:"undefined"!==typeof r&&(i.conditions=r),"undefined"!==typeof n&&(i.conditions=n)),this.rules.push(i),new ae(i)},e.cannot=function(t,e,r,n){var i=this.can(t,e,r,n);return i.O.inverted=!0,i},e.build=function(t){return new this.F(this.rules,t)},t}();function ce(t,e){var r=new se(ue),n=t(r.can,r.cannot);return n&&"function"===typeof n.then?n.then((function(){return r.build(e)})):r.build(e)}var fe=function(t){this.message=t};fe.prototype=Object.create(Error.prototype);var le=function(t){function e(e){var r;return(r=t.call(this,"")||this).ability=e,"function"===typeof Error.captureStackTrace&&(r.name="ForbiddenError",Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r),r.constructor)),r}Tt(e,t),e.setDefaultMessage=function(t){this._="string"===typeof t?function(){return t}:t},e.from=function(t){return new this(t)};var r=e.prototype;return r.setMessage=function(t){return this.message=t,this},r.throwUnlessCan=function(){var t,e=(t=this.ability).relevantRuleFor.apply(t,arguments);if(!e||e.inverted){this.action=arguments.length<=0?void 0:arguments[0],this.subject=arguments.length<=1?void 0:arguments[1],this.subjectType=St(this.ability.detectSubjectType(arguments.length<=1?void 0:arguments[1])),this.field=arguments.length<=2?void 0:arguments[2];var r=e?e.reason:"";throw this.message=this.message||r||this.constructor._(this),this}},e}(fe);le._=function(t){return'Cannot execute "'+t.action+'" on "'+t.subjectType+'"'};Object.freeze({__proto__:null})}}]);
//# sourceMappingURL=175.9dda25ce.chunk.js.map