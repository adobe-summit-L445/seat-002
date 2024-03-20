import*as t from"@dropins/tools/event-bus.js";import*as r from"@dropins/tools/fetch-graphql.js";import*as e from"@dropins/tools/preact-compat.js";import*as n from"@dropins/tools/preact-hooks.js";import*as o from"@dropins/tools/preact-jsx-runtime.js";import*as i from"@dropins/tools/preact.js";export const id=160;export const ids=[160];export const modules={1520:(t,r,e)=>{e.d(r,{OC:()=>h});var n=e(7320),o=e(2720);function i(){throw new Error("Cycle detected")}var a=Symbol.for("preact-signals");function s(){if(c>1)c--;else{for(var t,r=!1;void 0!==f;){var e=f;for(f=void 0,v++;void 0!==e;){var n=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&y(e))try{e.c()}catch(e){r||(t=e,r=!0)}e=n}}if(v=0,c--,r)throw t}}var u=void 0;var l,f=void 0,c=0,v=0,d=0;function p(t){if(void 0!==u){var r=t.n;if(void 0===r||r.t!==u)return r={i:0,S:t,p:u.s,n:void 0,t:u,e:void 0,x:void 0,r},void 0!==u.s&&(u.s.n=r),u.s=r,t.n=r,32&u.f&&t.S(r),r;if(-1===r.i)return r.i=0,void 0!==r.n&&(r.n.p=r.p,void 0!==r.p&&(r.p.n=r.n),r.p=u.s,r.n=void 0,u.s.n=r,u.s=r),r}}function m(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function h(t){return new m(t)}function y(t){for(var r=t.s;void 0!==r;r=r.n)if(r.S.i!==r.i||!r.S.h()||r.S.i!==r.i)return!0;return!1}function g(t){for(var r=t.s;void 0!==r;r=r.n){var e=r.S.n;if(void 0!==e&&(r.r=e),r.S.n=r,r.i=-1,void 0===r.n){t.s=r;break}}}function b(t){for(var r=t.s,e=void 0;void 0!==r;){var n=r.p;-1===r.i?(r.S.U(r),void 0!==n&&(n.n=r.n),void 0!==r.n&&(r.n.p=n)):e=r,r.S.n=r.r,void 0!==r.r&&(r.r=void 0),r=n}t.s=e}function _(t){m.call(this,void 0),this.x=t,this.s=void 0,this.g=d-1,this.f=4}function j(t){var r=t.u;if(t.u=void 0,"function"==typeof r){c++;var e=u;u=void 0;try{r()}catch(r){throw t.f&=-2,t.f|=8,x(t),r}finally{u=e,s()}}}function x(t){for(var r=t.s;void 0!==r;r=r.n)r.S.U(r);t.x=void 0,t.s=void 0,j(t)}function O(t){if(u!==this)throw new Error("Out-of-order effect");b(this),u=t,this.f&=-2,8&this.f&&x(this),s()}function S(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function E(t){var r=new S(t);try{r.c()}catch(t){throw r.d(),t}return r.d.bind(r)}function w(t,r){n.options[t]=r.bind(null,n.options[t]||function(){})}function k(t){l&&l(),l=t&&t.S()}function C(t){var r=this,e=t.data,i=function(t){return(0,o.useMemo)((function(){return h(t)}),[])}(e);i.value=e;var a=(0,o.useMemo)((function(){for(var t=r.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return r.__$u.c=function(){var t;(0,n.isValidElement)(a.peek())||3!==(null==(t=r.base)?void 0:t.nodeType)?(r.__$f|=1,r.setState({})):r.base.data=a.peek()},function(t){return new _(t)}((function(){var t=i.value.value;return 0===t?0:!0===t?"":t||""}))}),[]);return a.value}function F(t,r,e,n){var o=r in t&&void 0===t.ownerSVGElement,i=h(e);return{o:function(t,r){i.value=t,n=r},d:E((function(){var e=i.value.value;n[r]!==e&&(n[r]=e,o?t[r]=e:e?t.setAttribute(r,e):t.removeAttribute(r))}))}}m.prototype.brand=a,m.prototype.h=function(){return!0},m.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},m.prototype.U=function(t){if(void 0!==this.t){var r=t.e,e=t.x;void 0!==r&&(r.x=e,t.e=void 0),void 0!==e&&(e.e=r,t.x=void 0),t===this.t&&(this.t=e)}},m.prototype.subscribe=function(t){var r=this;return E((function(){var e=r.value,n=32&this.f;this.f&=-33;try{t(e)}finally{this.f|=n}}))},m.prototype.valueOf=function(){return this.value},m.prototype.toString=function(){return this.value+""},m.prototype.toJSON=function(){return this.value},m.prototype.peek=function(){return this.v},Object.defineProperty(m.prototype,"value",{get:function(){var t=p(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(u instanceof _&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){v>100&&i(),this.v=t,this.i++,d++,c++;try{for(var r=this.t;void 0!==r;r=r.x)r.t.N()}finally{s()}}}}),(_.prototype=new m).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===d)return!0;if(this.g=d,this.f|=1,this.i>0&&!y(this))return this.f&=-2,!0;var t=u;try{g(this),u=this;var r=this.x();(16&this.f||this.v!==r||0===this.i)&&(this.v=r,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return u=t,b(this),this.f&=-2,!0},_.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var r=this.s;void 0!==r;r=r.n)r.S.S(r)}m.prototype.S.call(this,t)},_.prototype.U=function(t){if(void 0!==this.t&&(m.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var r=this.s;void 0!==r;r=r.n)r.S.U(r)}},_.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},_.prototype.peek=function(){if(this.h()||i(),16&this.f)throw this.v;return this.v},Object.defineProperty(_.prototype,"value",{get:function(){1&this.f&&i();var t=p(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),S.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var r=this.x();"function"==typeof r&&(this.u=r)}finally{t()}},S.prototype.S=function(){1&this.f&&i(),this.f|=1,this.f&=-9,j(this),g(this),c++;var t=u;return u=this,O.bind(this,t)},S.prototype.N=function(){2&this.f||(this.f|=2,this.o=f,f=this)},S.prototype.d=function(){this.f|=8,1&this.f||x(this)},C.displayName="_st",Object.defineProperties(m.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:C},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),w("__b",(function(t,r){if("string"==typeof r.type){var e,n=r.props;for(var o in n)if("children"!==o){var i=n[o];i instanceof m&&(e||(r.__np=e={}),e[o]=i,n[o]=i.peek())}}t(r)})),w("__r",(function(t,r){k();var e,n=r.__c;n&&(n.__$f&=-2,void 0===(e=n.__$u)&&(n.__$u=e=function(t){var r;return E((function(){r=this})),r.c=function(){n.__$f|=1,n.setState({})},r}())),n,k(e),t(r)})),w("__e",(function(t,r,e,n){k(),void 0,t(r,e,n)})),w("diffed",(function(t,r){var e;if(k(),void 0,"string"==typeof r.type&&(e=r.__e)){var n=r.__np,o=r.props;if(n){var i=e.U;if(i)for(var a in i){var s=i[a];void 0===s||a in n||(s.d(),i[a]=void 0)}else e.U=i={};for(var u in n){var l=i[u],f=n[u];void 0===l?(l=F(e,u,f,o),i[u]=l):l.o(f,o)}}}t(r)})),w("unmount",(function(t,r){if("string"==typeof r.type){var e=r.__e;if(e){var n=e.U;if(n)for(var o in e.U=void 0,n){var i=n[o];i&&i.d()}}}else{var a=r.__c;if(a){var s=a.__$u;s&&(a.__$u=void 0,s.d())}}t(r)})),w("__h",(function(t,r,e,n){(n<3||9===n)&&(r.__$f|=2),t(r,e,n)})),n.Component.prototype.shouldComponentUpdate=function(t,r){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var n in r)return!0;for(var o in t)if("__source"!==o&&t[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in t))return!0;return!1}},128:(t,r,e)=>{e.d(r,{_:()=>g});var n=e(5536),o=e.n(n),i=e(7008),a=e.n(i),s=e(1496),u=e.n(s),l=e(9836),f=e.n(l),c=e(9904),v=e.n(c),d=e(4192),p=e.n(d),m=e(640),h={};h.styleTagTransform=p(),h.setAttributes=f(),h.insert=u().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=v();o()(m.c,h);m.c&&m.c.locals&&m.c.locals;var y=e(8340),g=function(t){var r=t.className,e=t.children,n=t.level,o=void 0===n?2:n,i=o>=1&&o<=6?"h".concat(o):"h2";return(0,y.jsx)(i,{className:r,children:e})}},8812:(t,r,e)=>{e.d(r,{u:()=>H});var n=e(1824),o=e(4628),i=e(128),a=e(2460),s=e(8340),u=function(){return(0,s.jsxs)("p",{className:"checkout-login-form__signIn",children:[(0,s.jsx)(a.a,{id:"Checkout.LoginForm.account"}),(0,s.jsx)("a",{className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(a.a,{id:"Checkout.LoginForm.signIn"})})]})},l=e(920),f=e(6216),c=function(t){var r=t.value,e=t.error,n=t.hint,o=t.onChange,i=t.onBlur,u=t.onInvalid,c=(0,a.cF)({LoginFormLabel:"Checkout.LoginForm.ariaLabel",LoginFormFloatingLabel:"Checkout.LoginForm.floatingLabel",LoginFormPlaceholder:"Checkout.LoginForm.placeholder"});return(0,s.jsx)(l.I,{size:"medium",error:e,hint:n,children:(0,s.jsx)(f.E,{id:"customer-email",name:"userName",type:"email",value:r,autocomplete:"email",placeholder:c.LoginFormPlaceholder,floatingLabel:c.LoginFormFloatingLabel,onChange:o,onBlur:i,onInvalid:u,required:!0,"aria-label":c.LoginFormLabel,"aria-required":!0})})},v=e(5536),d=e.n(v),p=e(7008),m=e.n(p),h=e(1496),y=e.n(h),g=e(9836),b=e.n(g),_=e(9904),j=e.n(_),x=e(4192),O=e.n(x),S=e(9392),E={};E.styleTagTransform=O(),E.setAttributes=b(),E.insert=y().bind(null,"head"),E.domAPI=m(),E.insertStyleElement=j();d()(S.c,E);S.c&&S.c.locals&&S.c.locals;var w=e(4944);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}var C=["className","currentEmail","hint","error","onEmailChange","onEmailBlur","onEmailInvalid"];function F(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function L(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?F(Object(e),!0).forEach((function(r){P(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):F(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function P(t,r,e){return(r=function(t){var r=function(t,r){if("object"!=k(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==k(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function I(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var N=function(t){var r=t.className,e=t.currentEmail,n=t.hint,o=t.error,l=void 0===o?null:o,f=t.onEmailChange,v=t.onEmailBlur,d=t.onEmailInvalid,p=I(t,C),m=(0,a.cF)({Title:"Checkout.LoginForm.title"});return(0,s.jsxs)("div",{className:"checkout-login-form",children:[(0,s.jsxs)("div",{className:"checkout-login-form__heading",children:[(0,s.jsx)(i._,{level:2,className:"checkout-login-form__title",children:m.Title}),(0,s.jsx)(u,{})]}),(0,s.jsx)("div",{className:"checkout-login-form__content",children:(0,s.jsxs)("form",L(L({className:(0,w.i)(["dropin-login-form__form",r]),noValidate:!0},p),{},{children:[(0,s.jsx)("button",{type:"submit",disabled:!0,style:"display: none","aria-hidden":"true"}),(0,s.jsx)(c,{value:e||void 0,error:l||"",hint:n,onChange:f,onBlur:v,onInvalid:d})]}))})]})},A=e(2720),$=e(2248),M=e(5668);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}var U=["className","email"];function R(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function D(t,r,e){return(r=function(t){var r=function(t,r){if("object"!=T(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==T(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function V(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,s=[],u=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(s.push(n.value),s.length!==r);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return B(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return B(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function G(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var H=function(t){var r=t.className,e=t.email,i=void 0===e?null:e,u=G(t,U),l=(0,a.cF)({LoginFormInvalidEmailError:"Checkout.LoginForm.invalidEmailError",LoginFormMissingEmailError:"Checkout.LoginForm.missingEmailError",LoginFormEmailExists:"Checkout.LoginForm.emailExists"}),f=M.s.value.data,c=(null==f?void 0:f.id)||"",v=!!f,d=V((0,A.useState)(!1),2),p=d[0],m=d[1],h=V((0,A.useState)(i),2),y=h[0],g=h[1],b=V((0,A.useState)(),2),_=b[0],j=b[1],x=V((0,A.useState)(!0),2),O=x[0],S=x[1],E=function(t){return t.valid?null:t.valueMissing?l.LoginFormMissingEmailError:l.LoginFormInvalidEmailError};return!p&&v&&(m(!0),g((null==f?void 0:f.email)||i)),(0,A.useEffect)((function(){if(y&&!_&&(null==f?void 0:f.email)!==y){var t=setTimeout((function(){(0,n.s)(y).then((function(t){S(t),(0,o.S)({cartId:c,email:y}).catch((function(t){console.log("set email failed",t)}))})).catch((function(t){console.log(t),j(l.LoginFormInvalidEmailError),S(!0)}))}),1e3);return function(){t&&clearTimeout(t)}}}),[y,_,l.LoginFormInvalidEmailError,null==f?void 0:f.email,c]),(0,s.jsx)(N,function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?R(Object(e),!0).forEach((function(r){D(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({name:$.i,className:r,currentEmail:y,hint:O?"":l.LoginFormEmailExists,error:_,onEmailChange:function(t){var r=t.target.value;g(r),j(null),S(!0)},onEmailBlur:function(t){var r=t.target.validity;j(E(r))},onEmailInvalid:function(t){var r=t.target.validity;j(E(r))}},u))}},2248:(t,r,e)=>{e.d(r,{i:()=>n});var n="login-form"},5600:(t,r,e)=>{e.d(r,{cp:()=>o.u,iO:()=>n.i,uY:()=>o.u});var n=e(2248),o=e(8812)},640:(t,r,e)=>{e.d(r,{c:()=>s});var n=e(6008),o=e.n(n),i=e(2076),a=e.n(i)()(o());a.push([t.id,"\n",""]);const s=a},9392:(t,r,e)=>{e.d(r,{c:()=>s});var n=e(6008),o=e.n(n),i=e(2076),a=e.n(i)()(o());a.push([t.id,".checkout-login-form{\n    display:grid;\n}\n\n.checkout-login-form__heading{\n    display:grid;\n    grid-template-columns:repeat(2, 1fr [col-start]);\n    grid-auto-rows:max-content;\n}\n\n.checkout-login-form__content{\n    grid-auto-rows:max-content;\n}\n\n.checkout-login-form__title{\n    grid-column-start:1;\n    color:var(--color-neutral-800);\n    font:var(--type-headline-2-default-font);\n    letter-spacing:var(--type-headline-2-default-letter-spacing);\n    margin:0;\n}\n\n.checkout-login-form__signIn{\n    grid-column-start:2;\n    color:var(--color-neutral-800);\n    font:var(--type-body-2-default-font);\n    letter-spacing:var(--type-body-2-default-letter-spacing);\n    margin-bottom:var(--spacing-medium);\n    align-self:flex-end;\n    justify-self:flex-end;\n    margin-top:var(--spacing-xxsmall);\n}\n\na.checkout-login-form__link{\n    font:var(--type-body-2-strong-font);\n    margin-left:var(--spacing-xxsmall);\n}\n@media only screen and (min-width:320px) and (max-width: 768px){\n    .checkout-login-form__heading{\n        grid-template-columns:repeat(1, 1fr [col-start]);\n        grid-template-rows:1fr;\n    }\n\n    .checkout-login-form__signIn{\n        grid-column-start:1;\n        align-self:flex-start;\n        justify-self:flex-start;\n        padding-top:var(--spacing-xsmall);\n    }\n}\n",""]);const s=a},8122:(r,e,n)=>{r.exports=(t=>{var r={};return n.d(r,t),r})({events:()=>t.events})},8616:(t,e,n)=>{t.exports=(t=>{var r={};return n.d(r,t),r})({FetchGraphQL:()=>r.FetchGraphQL})},6528:(t,r,n)=>{t.exports=(t=>{var r={};return n.d(r,t),r})({createContext:()=>e.createContext,forwardRef:()=>e.forwardRef,useCallback:()=>e.useCallback,useContext:()=>e.useContext,useEffect:()=>e.useEffect,useImperativeHandle:()=>e.useImperativeHandle,useMemo:()=>e.useMemo,useRef:()=>e.useRef,useState:()=>e.useState})},2720:(t,r,e)=>{t.exports=(t=>{var r={};return e.d(r,t),r})({useCallback:()=>n.useCallback,useContext:()=>n.useContext,useDebugValue:()=>n.useDebugValue,useEffect:()=>n.useEffect,useId:()=>n.useId,useImperativeHandle:()=>n.useImperativeHandle,useLayoutEffect:()=>n.useLayoutEffect,useMemo:()=>n.useMemo,useReducer:()=>n.useReducer,useRef:()=>n.useRef,useState:()=>n.useState})},6168:(t,r,e)=>{t.exports=(t=>{var r={};return e.d(r,t),r})({Fragment:()=>o.Fragment,jsx:()=>o.jsx,jsxs:()=>o.jsxs})},7320:(t,r,e)=>{t.exports=(t=>{var r={};return e.d(r,t),r})({Component:()=>i.Component,Fragment:()=>i.Fragment,cloneElement:()=>i.cloneElement,createContext:()=>i.createContext,createElement:()=>i.createElement,createRef:()=>i.createRef,h:()=>i.h,hydrate:()=>i.hydrate,isValidElement:()=>i.isValidElement,options:()=>i.options,render:()=>i.render,toChildArray:()=>i.toChildArray})}};import a from"../runtime.js";import*as s from"../456.js";a.C(s);import*as u from"../856.js";a.C(u);import*as l from"../872.js";a.C(l);import*as f from"../612.js";a.C(f);import*as c from"./LoginForm.js";a.C(c);var v,d=(v=5600,a(a.s=v)),p=d.iO,m=d.uY,h=d.cp;export{p as LOGIN_FORM_NAME,m as LoginForm,h as default};