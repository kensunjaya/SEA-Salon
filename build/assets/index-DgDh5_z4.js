function z1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var d0={exports:{}},hc={},f0={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),W1=Symbol.for("react.portal"),H1=Symbol.for("react.fragment"),q1=Symbol.for("react.strict_mode"),K1=Symbol.for("react.profiler"),G1=Symbol.for("react.provider"),Q1=Symbol.for("react.context"),Y1=Symbol.for("react.forward_ref"),X1=Symbol.for("react.suspense"),J1=Symbol.for("react.memo"),Z1=Symbol.for("react.lazy"),n_=Symbol.iterator;function eC(t){return t===null||typeof t!="object"?null:(t=n_&&t[n_]||t["@@iterator"],typeof t=="function"?t:null)}var p0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m0=Object.assign,g0={};function Us(t,e,n){this.props=t,this.context=e,this.refs=g0,this.updater=n||p0}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _0(){}_0.prototype=Us.prototype;function Xf(t,e,n){this.props=t,this.context=e,this.refs=g0,this.updater=n||p0}var Jf=Xf.prototype=new _0;Jf.constructor=Xf;m0(Jf,Us.prototype);Jf.isPureReactComponent=!0;var r_=Array.isArray,y0=Object.prototype.hasOwnProperty,Zf={current:null},v0={key:!0,ref:!0,__self:!0,__source:!0};function E0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)y0.call(e,r)&&!v0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Oa,type:t,key:s,ref:o,props:i,_owner:Zf.current}}function tC(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ep(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function nC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var i_=/\/+/g;function Rh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nC(""+t.key):e.toString(36)}function Hl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case W1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Rh(o,0):r,r_(i)?(n="",t!=null&&(n=t.replace(i_,"$&/")+"/"),Hl(i,e,n,"",function(c){return c})):i!=null&&(ep(i)&&(i=tC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(i_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",r_(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Rh(s,l);o+=Hl(s,e,n,u,i)}else if(u=eC(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Rh(s,l++),o+=Hl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function vl(t,e,n){if(t==null)return t;var r=[],i=0;return Hl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},ql={transition:null},iC={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:ql,ReactCurrentOwner:Zf};function w0(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:vl,forEach:function(t,e,n){vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vl(t,function(){e++}),e},toArray:function(t){return vl(t,function(e){return e})||[]},only:function(t){if(!ep(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Us;ee.Fragment=H1;ee.Profiler=K1;ee.PureComponent=Xf;ee.StrictMode=q1;ee.Suspense=X1;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iC;ee.act=w0;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=m0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)y0.call(e,u)&&!v0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Oa,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:Q1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:G1,_context:t},t.Consumer=t};ee.createElement=E0;ee.createFactory=function(t){var e=E0.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:Y1,render:t}};ee.isValidElement=ep;ee.lazy=function(t){return{$$typeof:Z1,_payload:{_status:-1,_result:t},_init:rC}};ee.memo=function(t,e){return{$$typeof:J1,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};ee.unstable_act=w0;ee.useCallback=function(t,e){return Tt.current.useCallback(t,e)};ee.useContext=function(t){return Tt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return Tt.current.useEffect(t,e)};ee.useId=function(){return Tt.current.useId()};ee.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Tt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};ee.useRef=function(t){return Tt.current.useRef(t)};ee.useState=function(t){return Tt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return Tt.current.useTransition()};ee.version="18.3.1";f0.exports=ee;var L=f0.exports;const Bn=$1(L),sC=z1({__proto__:null,default:Bn},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oC=L,aC=Symbol.for("react.element"),lC=Symbol.for("react.fragment"),uC=Object.prototype.hasOwnProperty,cC=oC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hC={key:!0,ref:!0,__self:!0,__source:!0};function T0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uC.call(e,r)&&!hC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:aC,type:t,key:s,ref:o,props:i,_owner:cC.current}}hc.Fragment=lC;hc.jsx=T0;hc.jsxs=T0;d0.exports=hc;var k=d0.exports,yd={},I0={exports:{}},Ut={},S0={exports:{}},C0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var Z=$.length;$.push(Q);e:for(;0<Z;){var Se=Z-1>>>1,fe=$[Se];if(0<i(fe,Q))$[Se]=Q,$[Z]=fe,Z=Se;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],Z=$.pop();if(Z!==Q){$[0]=Z;e:for(var Se=0,fe=$.length,xe=fe>>>1;Se<xe;){var Rn=2*(Se+1)-1,An=$[Rn],Pn=Rn+1,kn=$[Pn];if(0>i(An,Z))Pn<fe&&0>i(kn,An)?($[Se]=kn,$[Pn]=Z,Se=Pn):($[Se]=An,$[Rn]=Z,Se=Rn);else if(Pn<fe&&0>i(kn,Z))$[Se]=kn,$[Pn]=Z,Se=Pn;else break e}}return Q}function i($,Q){var Z=$.sortIndex-Q.sortIndex;return Z!==0?Z:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,v=!1,C=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function b($){if(P=!1,R($),!C)if(n(u)!==null)C=!0,Zs(U);else{var Q=n(c);Q!==null&&Cn(b,Q.startTime-$)}}function U($,Q){C=!1,P&&(P=!1,T(_),_=-1),v=!0;var Z=m;try{for(R(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!A());){var Se=p.callback;if(typeof Se=="function"){p.callback=null,m=p.priorityLevel;var fe=Se(p.expirationTime<=Q);Q=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(u)&&r(u),R(Q)}else r(u);p=n(u)}if(p!==null)var xe=!0;else{var Rn=n(c);Rn!==null&&Cn(b,Rn.startTime-Q),xe=!1}return xe}finally{p=null,m=Z,v=!1}}var B=!1,w=null,_=-1,E=5,I=-1;function A(){return!(t.unstable_now()-I<E)}function D(){if(w!==null){var $=t.unstable_now();I=$;var Q=!0;try{Q=w(!0,$)}finally{Q?S():(B=!1,w=null)}}else B=!1}var S;if(typeof y=="function")S=function(){y(D)};else if(typeof MessageChannel<"u"){var Bt=new MessageChannel,Gr=Bt.port2;Bt.port1.onmessage=D,S=function(){Gr.postMessage(null)}}else S=function(){N(D,0)};function Zs($){w=$,B||(B=!0,S())}function Cn($,Q){_=N(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||v||(C=!0,Zs(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var Z=m;m=Q;try{return $()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=m;m=$;try{return Q()}finally{m=Z}},t.unstable_scheduleCallback=function($,Q,Z){var Se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Se+Z:Se):Z=Se,$){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Z+fe,$={id:d++,callback:Q,priorityLevel:$,startTime:Z,expirationTime:fe,sortIndex:-1},Z>Se?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(P?(T(_),_=-1):P=!0,Cn(b,Z-Se))):($.sortIndex=fe,e(u,$),C||v||(C=!0,Zs(U))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var Q=m;return function(){var Z=m;m=Q;try{return $.apply(this,arguments)}finally{m=Z}}}})(C0);S0.exports=C0;var dC=S0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fC=L,Ft=dC;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R0=new Set,ta={};function ki(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(ta[t]=e,t=0;t<e.length;t++)R0.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=Object.prototype.hasOwnProperty,pC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,s_={},o_={};function mC(t){return vd.call(o_,t)?!0:vd.call(s_,t)?!1:pC.test(t)?o_[t]=!0:(s_[t]=!0,!1)}function gC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _C(t,e,n,r){if(e===null||typeof e>"u"||gC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var tp=/[\-:]([a-z])/g;function np(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tp,np);tt[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tp,np);tt[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tp,np);tt[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function rp(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_C(e,n,i,r)&&(n=null),r||i===null?mC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=fC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,El=Symbol.for("react.element"),Gi=Symbol.for("react.portal"),Qi=Symbol.for("react.fragment"),ip=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),A0=Symbol.for("react.provider"),P0=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),Td=Symbol.for("react.suspense_list"),op=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),k0=Symbol.for("react.offscreen"),a_=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=a_&&t[a_]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Ah;function Po(t){if(Ah===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ah=e&&e[1]||""}return`
`+Ah+t}var Ph=!1;function kh(t,e){if(!t||Ph)return"";Ph=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ph=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Po(t):""}function yC(t){switch(t.tag){case 5:return Po(t.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return t=kh(t.type,!1),t;case 11:return t=kh(t.type.render,!1),t;case 1:return t=kh(t.type,!0),t;default:return""}}function Id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qi:return"Fragment";case Gi:return"Portal";case Ed:return"Profiler";case ip:return"StrictMode";case wd:return"Suspense";case Td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P0:return(t.displayName||"Context")+".Consumer";case A0:return(t._context.displayName||"Context")+".Provider";case sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case op:return e=t.displayName||null,e!==null?e:Id(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Id(t(e))}catch{}}return null}function vC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Id(e);case 8:return e===ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function N0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EC(t){var e=N0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=EC(t))}function x0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=N0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sd(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function l_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D0(t,e){e=e.checked,e!=null&&rp(t,"checked",e,!1)}function Cd(t,e){D0(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rd(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function u_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rd(t,e,n){(e!=="number"||hu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function us(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function c_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(ko(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function O0(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function h_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function b0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?b0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tl,L0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wC=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){wC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function M0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function V0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=M0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TC=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kd(t,e){if(e){if(TC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dd=null,cs=null,hs=null;function d_(t){if(t=Ma(t)){if(typeof Dd!="function")throw Error(F(280));var e=t.stateNode;e&&(e=gc(e),Dd(t.stateNode,t.type,e))}}function F0(t){cs?hs?hs.push(t):hs=[t]:cs=t}function U0(){if(cs){var t=cs,e=hs;if(hs=cs=null,d_(t),e)for(t=0;t<e.length;t++)d_(e[t])}}function j0(t,e){return t(e)}function B0(){}var Nh=!1;function z0(t,e,n){if(Nh)return t(e,n);Nh=!0;try{return j0(t,e,n)}finally{Nh=!1,(cs!==null||hs!==null)&&(B0(),U0())}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var r=gc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Od=!1;if(Hn)try{var go={};Object.defineProperty(go,"passive",{get:function(){Od=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Od=!1}function IC(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Fo=!1,du=null,fu=!1,bd=null,SC={onError:function(t){Fo=!0,du=t}};function CC(t,e,n,r,i,s,o,l,u){Fo=!1,du=null,IC.apply(SC,arguments)}function RC(t,e,n,r,i,s,o,l,u){if(CC.apply(this,arguments),Fo){if(Fo){var c=du;Fo=!1,du=null}else throw Error(F(198));fu||(fu=!0,bd=c)}}function Ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function f_(t){if(Ni(t)!==t)throw Error(F(188))}function AC(t){var e=t.alternate;if(!e){if(e=Ni(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return f_(i),t;if(s===r)return f_(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function W0(t){return t=AC(t),t!==null?H0(t):null}function H0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=H0(t);if(e!==null)return e;t=t.sibling}return null}var q0=Ft.unstable_scheduleCallback,p_=Ft.unstable_cancelCallback,PC=Ft.unstable_shouldYield,kC=Ft.unstable_requestPaint,De=Ft.unstable_now,NC=Ft.unstable_getCurrentPriorityLevel,lp=Ft.unstable_ImmediatePriority,K0=Ft.unstable_UserBlockingPriority,pu=Ft.unstable_NormalPriority,xC=Ft.unstable_LowPriority,G0=Ft.unstable_IdlePriority,dc=null,mn=null;function DC(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(dc,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:LC,OC=Math.log,bC=Math.LN2;function LC(t){return t>>>=0,t===0?32:31-(OC(t)/bC|0)|0}var Il=64,Sl=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=No(l):(s&=o,s!==0&&(r=No(s)))}else o=n&~i,o!==0?r=No(o):s!==0&&(r=No(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function MC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=MC(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q0(){var t=Il;return Il<<=1,!(Il&4194240)&&(Il=64),t}function xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function FC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function up(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Y0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var X0,cp,J0,Z0,eE,Md=!1,Cl=[],Er=null,wr=null,Tr=null,ia=new Map,sa=new Map,cr=[],UC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function m_(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function _o(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ma(e),e!==null&&cp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jC(t,e,n,r,i){switch(e){case"focusin":return Er=_o(Er,t,e,n,r,i),!0;case"dragenter":return wr=_o(wr,t,e,n,r,i),!0;case"mouseover":return Tr=_o(Tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ia.set(s,_o(ia.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,sa.set(s,_o(sa.get(s)||null,t,e,n,r,i)),!0}return!1}function tE(t){var e=ri(t.target);if(e!==null){var n=Ni(e);if(n!==null){if(e=n.tag,e===13){if(e=$0(n),e!==null){t.blockedOn=e,eE(t.priority,function(){J0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xd=r,n.target.dispatchEvent(r),xd=null}else return e=Ma(n),e!==null&&cp(e),t.blockedOn=n,!1;e.shift()}return!0}function g_(t,e,n){Kl(t)&&n.delete(e)}function BC(){Md=!1,Er!==null&&Kl(Er)&&(Er=null),wr!==null&&Kl(wr)&&(wr=null),Tr!==null&&Kl(Tr)&&(Tr=null),ia.forEach(g_),sa.forEach(g_)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,Md||(Md=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,BC)))}function oa(t){function e(i){return yo(i,t)}if(0<Cl.length){yo(Cl[0],t);for(var n=1;n<Cl.length;n++){var r=Cl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Er!==null&&yo(Er,t),wr!==null&&yo(wr,t),Tr!==null&&yo(Tr,t),ia.forEach(e),sa.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)tE(n),n.blockedOn===null&&cr.shift()}var ds=Jn.ReactCurrentBatchConfig,gu=!0;function zC(t,e,n,r){var i=he,s=ds.transition;ds.transition=null;try{he=1,hp(t,e,n,r)}finally{he=i,ds.transition=s}}function $C(t,e,n,r){var i=he,s=ds.transition;ds.transition=null;try{he=4,hp(t,e,n,r)}finally{he=i,ds.transition=s}}function hp(t,e,n,r){if(gu){var i=Vd(t,e,n,r);if(i===null)Bh(t,e,r,_u,n),m_(t,r);else if(jC(i,t,e,n,r))r.stopPropagation();else if(m_(t,r),e&4&&-1<UC.indexOf(t)){for(;i!==null;){var s=Ma(i);if(s!==null&&X0(s),s=Vd(t,e,n,r),s===null&&Bh(t,e,r,_u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bh(t,e,r,null,n)}}var _u=null;function Vd(t,e,n,r){if(_u=null,t=ap(r),t=ri(t),t!==null)if(e=Ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _u=t,null}function nE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NC()){case lp:return 1;case K0:return 4;case pu:case xC:return 16;case G0:return 536870912;default:return 16}default:return 16}}var gr=null,dp=null,Gl=null;function rE(){if(Gl)return Gl;var t,e=dp,n=e.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Gl=i.slice(t,1<r?1-r:void 0)}function Ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function __(){return!1}function jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:__,this.isPropagationStopped=__,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fp=jt(js),La=Ae({},js,{view:0,detail:0}),WC=jt(La),Dh,Oh,vo,fc=Ae({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(Dh=t.screenX-vo.screenX,Oh=t.screenY-vo.screenY):Oh=Dh=0,vo=t),Dh)},movementY:function(t){return"movementY"in t?t.movementY:Oh}}),y_=jt(fc),HC=Ae({},fc,{dataTransfer:0}),qC=jt(HC),KC=Ae({},La,{relatedTarget:0}),bh=jt(KC),GC=Ae({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),QC=jt(GC),YC=Ae({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XC=jt(YC),JC=Ae({},js,{data:0}),v_=jt(JC),ZC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tR[t])?!!e[t]:!1}function pp(){return nR}var rR=Ae({},La,{key:function(t){if(t.key){var e=ZC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pp,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iR=jt(rR),sR=Ae({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E_=jt(sR),oR=Ae({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pp}),aR=jt(oR),lR=Ae({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),uR=jt(lR),cR=Ae({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hR=jt(cR),dR=[9,13,27,32],mp=Hn&&"CompositionEvent"in window,Uo=null;Hn&&"documentMode"in document&&(Uo=document.documentMode);var fR=Hn&&"TextEvent"in window&&!Uo,iE=Hn&&(!mp||Uo&&8<Uo&&11>=Uo),w_=" ",T_=!1;function sE(t,e){switch(t){case"keyup":return dR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yi=!1;function pR(t,e){switch(t){case"compositionend":return oE(e);case"keypress":return e.which!==32?null:(T_=!0,w_);case"textInput":return t=e.data,t===w_&&T_?null:t;default:return null}}function mR(t,e){if(Yi)return t==="compositionend"||!mp&&sE(t,e)?(t=rE(),Gl=dp=gr=null,Yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iE&&e.locale!=="ko"?null:e.data;default:return null}}var gR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function I_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gR[t.type]:e==="textarea"}function aE(t,e,n,r){F0(r),e=yu(e,"onChange"),0<e.length&&(n=new fp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,aa=null;function _R(t){yE(t,0)}function pc(t){var e=Zi(t);if(x0(e))return t}function yR(t,e){if(t==="change")return e}var lE=!1;if(Hn){var Lh;if(Hn){var Mh="oninput"in document;if(!Mh){var S_=document.createElement("div");S_.setAttribute("oninput","return;"),Mh=typeof S_.oninput=="function"}Lh=Mh}else Lh=!1;lE=Lh&&(!document.documentMode||9<document.documentMode)}function C_(){jo&&(jo.detachEvent("onpropertychange",uE),aa=jo=null)}function uE(t){if(t.propertyName==="value"&&pc(aa)){var e=[];aE(e,aa,t,ap(t)),z0(_R,e)}}function vR(t,e,n){t==="focusin"?(C_(),jo=e,aa=n,jo.attachEvent("onpropertychange",uE)):t==="focusout"&&C_()}function ER(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(aa)}function wR(t,e){if(t==="click")return pc(e)}function TR(t,e){if(t==="input"||t==="change")return pc(e)}function IR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:IR;function la(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vd.call(e,i)||!an(t[i],e[i]))return!1}return!0}function R_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function A_(t,e){var n=R_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=R_(n)}}function cE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hE(){for(var t=window,e=hu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hu(t.document)}return e}function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SR(t){var e=hE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cE(n.ownerDocument.documentElement,n)){if(r!==null&&gp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=A_(n,s);var o=A_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CR=Hn&&"documentMode"in document&&11>=document.documentMode,Xi=null,Fd=null,Bo=null,Ud=!1;function P_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ud||Xi==null||Xi!==hu(r)||(r=Xi,"selectionStart"in r&&gp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bo&&la(Bo,r)||(Bo=r,r=yu(Fd,"onSelect"),0<r.length&&(e=new fp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Xi)))}function Al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ji={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionend:Al("Transition","TransitionEnd")},Vh={},dE={};Hn&&(dE=document.createElement("div").style,"AnimationEvent"in window||(delete Ji.animationend.animation,delete Ji.animationiteration.animation,delete Ji.animationstart.animation),"TransitionEvent"in window||delete Ji.transitionend.transition);function mc(t){if(Vh[t])return Vh[t];if(!Ji[t])return t;var e=Ji[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dE)return Vh[t]=e[n];return t}var fE=mc("animationend"),pE=mc("animationiteration"),mE=mc("animationstart"),gE=mc("transitionend"),_E=new Map,k_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){_E.set(t,e),ki(e,[t])}for(var Fh=0;Fh<k_.length;Fh++){var Uh=k_[Fh],RR=Uh.toLowerCase(),AR=Uh[0].toUpperCase()+Uh.slice(1);zr(RR,"on"+AR)}zr(fE,"onAnimationEnd");zr(pE,"onAnimationIteration");zr(mE,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(gE,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PR=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function N_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RC(r,e,void 0,t),t.currentTarget=null}function yE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;N_(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;N_(i,l,c),s=u}}}if(fu)throw t=bd,fu=!1,bd=null,t}function ye(t,e){var n=e[Wd];n===void 0&&(n=e[Wd]=new Set);var r=t+"__bubble";n.has(r)||(vE(e,t,2,!1),n.add(r))}function jh(t,e,n){var r=0;e&&(r|=4),vE(n,t,r,e)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[Pl]){t[Pl]=!0,R0.forEach(function(n){n!=="selectionchange"&&(PR.has(n)||jh(n,!1,t),jh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pl]||(e[Pl]=!0,jh("selectionchange",!1,e))}}function vE(t,e,n,r){switch(nE(e)){case 1:var i=zC;break;case 4:i=$C;break;default:i=hp}n=i.bind(null,e,n,t),i=void 0,!Od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ri(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}z0(function(){var c=s,d=ap(n),p=[];e:{var m=_E.get(t);if(m!==void 0){var v=fp,C=t;switch(t){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":v=iR;break;case"focusin":C="focus",v=bh;break;case"focusout":C="blur",v=bh;break;case"beforeblur":case"afterblur":v=bh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=y_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=qC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=aR;break;case fE:case pE:case mE:v=QC;break;case gE:v=uR;break;case"scroll":v=WC;break;case"wheel":v=hR;break;case"copy":case"cut":case"paste":v=XC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=E_}var P=(e&4)!==0,N=!P&&t==="scroll",T=P?m!==null?m+"Capture":null:m;P=[];for(var y=c,R;y!==null;){R=y;var b=R.stateNode;if(R.tag===5&&b!==null&&(R=b,T!==null&&(b=ra(y,T),b!=null&&P.push(ca(y,b,R)))),N)break;y=y.return}0<P.length&&(m=new v(m,C,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==xd&&(C=n.relatedTarget||n.fromElement)&&(ri(C)||C[qn]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(C=n.relatedTarget||n.toElement,v=c,C=C?ri(C):null,C!==null&&(N=Ni(C),C!==N||C.tag!==5&&C.tag!==6)&&(C=null)):(v=null,C=c),v!==C)){if(P=y_,b="onMouseLeave",T="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=E_,b="onPointerLeave",T="onPointerEnter",y="pointer"),N=v==null?m:Zi(v),R=C==null?m:Zi(C),m=new P(b,y+"leave",v,n,d),m.target=N,m.relatedTarget=R,b=null,ri(d)===c&&(P=new P(T,y+"enter",C,n,d),P.target=R,P.relatedTarget=N,b=P),N=b,v&&C)t:{for(P=v,T=C,y=0,R=P;R;R=$i(R))y++;for(R=0,b=T;b;b=$i(b))R++;for(;0<y-R;)P=$i(P),y--;for(;0<R-y;)T=$i(T),R--;for(;y--;){if(P===T||T!==null&&P===T.alternate)break t;P=$i(P),T=$i(T)}P=null}else P=null;v!==null&&x_(p,m,v,P,!1),C!==null&&N!==null&&x_(p,N,C,P,!0)}}e:{if(m=c?Zi(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var U=yR;else if(I_(m))if(lE)U=TR;else{U=ER;var B=vR}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=wR);if(U&&(U=U(t,c))){aE(p,U,n,d);break e}B&&B(t,m,c),t==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&Rd(m,"number",m.value)}switch(B=c?Zi(c):window,t){case"focusin":(I_(B)||B.contentEditable==="true")&&(Xi=B,Fd=c,Bo=null);break;case"focusout":Bo=Fd=Xi=null;break;case"mousedown":Ud=!0;break;case"contextmenu":case"mouseup":case"dragend":Ud=!1,P_(p,n,d);break;case"selectionchange":if(CR)break;case"keydown":case"keyup":P_(p,n,d)}var w;if(mp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Yi?sE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(iE&&n.locale!=="ko"&&(Yi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Yi&&(w=rE()):(gr=d,dp="value"in gr?gr.value:gr.textContent,Yi=!0)),B=yu(c,_),0<B.length&&(_=new v_(_,t,null,n,d),p.push({event:_,listeners:B}),w?_.data=w:(w=oE(n),w!==null&&(_.data=w)))),(w=fR?pR(t,n):mR(t,n))&&(c=yu(c,"onBeforeInput"),0<c.length&&(d=new v_("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=w))}yE(p,e)})}function ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ra(t,n),s!=null&&r.unshift(ca(t,s,i)),s=ra(t,e),s!=null&&r.push(ca(t,s,i))),t=t.return}return r}function $i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function x_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ra(n,s),u!=null&&o.unshift(ca(n,u,l))):i||(u=ra(n,s),u!=null&&o.push(ca(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kR=/\r\n?/g,NR=/\u0000|\uFFFD/g;function D_(t){return(typeof t=="string"?t:""+t).replace(kR,`
`).replace(NR,"")}function kl(t,e,n){if(e=D_(e),D_(t)!==e&&n)throw Error(F(425))}function vu(){}var jd=null,Bd=null;function zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $d=typeof setTimeout=="function"?setTimeout:void 0,xR=typeof clearTimeout=="function"?clearTimeout:void 0,O_=typeof Promise=="function"?Promise:void 0,DR=typeof queueMicrotask=="function"?queueMicrotask:typeof O_<"u"?function(t){return O_.resolve(null).then(t).catch(OR)}:$d;function OR(t){setTimeout(function(){throw t})}function zh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),oa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oa(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function b_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),hn="__reactFiber$"+Bs,ha="__reactProps$"+Bs,qn="__reactContainer$"+Bs,Wd="__reactEvents$"+Bs,bR="__reactListeners$"+Bs,LR="__reactHandles$"+Bs;function ri(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=b_(t);t!==null;){if(n=t[hn])return n;t=b_(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){return t=t[hn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function gc(t){return t[ha]||null}var Hd=[],es=-1;function $r(t){return{current:t}}function we(t){0>es||(t.current=Hd[es],Hd[es]=null,es--)}function me(t,e){es++,Hd[es]=t.current,t.current=e}var br={},mt=$r(br),Pt=$r(!1),di=br;function Ts(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function Eu(){we(Pt),we(mt)}function L_(t,e,n){if(mt.current!==br)throw Error(F(168));me(mt,e),me(Pt,n)}function EE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,vC(t)||"Unknown",i));return Ae({},n,r)}function wu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,di=mt.current,me(mt,t),me(Pt,Pt.current),!0}function M_(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=EE(t,e,di),r.__reactInternalMemoizedMergedChildContext=t,we(Pt),we(mt),me(mt,t)):we(Pt),me(Pt,n)}var bn=null,_c=!1,$h=!1;function wE(t){bn===null?bn=[t]:bn.push(t)}function MR(t){_c=!0,wE(t)}function Wr(){if(!$h&&bn!==null){$h=!0;var t=0,e=he;try{var n=bn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,_c=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),q0(lp,Wr),i}finally{he=e,$h=!1}}return null}var ts=[],ns=0,Tu=null,Iu=0,zt=[],$t=0,fi=null,Ln=1,Mn="";function Zr(t,e){ts[ns++]=Iu,ts[ns++]=Tu,Tu=t,Iu=e}function TE(t,e,n){zt[$t++]=Ln,zt[$t++]=Mn,zt[$t++]=fi,fi=t;var r=Ln;t=Mn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-rn(e)+i|n<<i|r,Mn=s+t}else Ln=1<<s|n<<i|r,Mn=t}function _p(t){t.return!==null&&(Zr(t,1),TE(t,1,0))}function yp(t){for(;t===Tu;)Tu=ts[--ns],ts[ns]=null,Iu=ts[--ns],ts[ns]=null;for(;t===fi;)fi=zt[--$t],zt[$t]=null,Mn=zt[--$t],zt[$t]=null,Ln=zt[--$t],zt[$t]=null}var Lt=null,Ot=null,Ie=!1,en=null;function IE(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function V_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fi!==null?{id:Ln,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Ot=null,!0):!1;default:return!1}}function qd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kd(t){if(Ie){var e=Ot;if(e){var n=e;if(!V_(t,e)){if(qd(t))throw Error(F(418));e=Ir(n.nextSibling);var r=Lt;e&&V_(t,e)?IE(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Lt=t)}}else{if(qd(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ie=!1,Lt=t}}}function F_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function Nl(t){if(t!==Lt)return!1;if(!Ie)return F_(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zd(t.type,t.memoizedProps)),e&&(e=Ot)){if(qd(t))throw SE(),Error(F(418));for(;e;)IE(t,e),e=Ir(e.nextSibling)}if(F_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Lt?Ir(t.stateNode.nextSibling):null;return!0}function SE(){for(var t=Ot;t;)t=Ir(t.nextSibling)}function Is(){Ot=Lt=null,Ie=!1}function vp(t){en===null?en=[t]:en.push(t)}var VR=Jn.ReactCurrentBatchConfig;function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function xl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function U_(t){var e=t._init;return e(t._payload)}function CE(t){function e(T,y){if(t){var R=T.deletions;R===null?(T.deletions=[y],T.flags|=16):R.push(y)}}function n(T,y){if(!t)return null;for(;y!==null;)e(T,y),y=y.sibling;return null}function r(T,y){for(T=new Map;y!==null;)y.key!==null?T.set(y.key,y):T.set(y.index,y),y=y.sibling;return T}function i(T,y){return T=Ar(T,y),T.index=0,T.sibling=null,T}function s(T,y,R){return T.index=R,t?(R=T.alternate,R!==null?(R=R.index,R<y?(T.flags|=2,y):R):(T.flags|=2,y)):(T.flags|=1048576,y)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,y,R,b){return y===null||y.tag!==6?(y=Yh(R,T.mode,b),y.return=T,y):(y=i(y,R),y.return=T,y)}function u(T,y,R,b){var U=R.type;return U===Qi?d(T,y,R.props.children,b,R.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===lr&&U_(U)===y.type)?(b=i(y,R.props),b.ref=Eo(T,y,R),b.return=T,b):(b=nu(R.type,R.key,R.props,null,T.mode,b),b.ref=Eo(T,y,R),b.return=T,b)}function c(T,y,R,b){return y===null||y.tag!==4||y.stateNode.containerInfo!==R.containerInfo||y.stateNode.implementation!==R.implementation?(y=Xh(R,T.mode,b),y.return=T,y):(y=i(y,R.children||[]),y.return=T,y)}function d(T,y,R,b,U){return y===null||y.tag!==7?(y=ui(R,T.mode,b,U),y.return=T,y):(y=i(y,R),y.return=T,y)}function p(T,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Yh(""+y,T.mode,R),y.return=T,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case El:return R=nu(y.type,y.key,y.props,null,T.mode,R),R.ref=Eo(T,null,y),R.return=T,R;case Gi:return y=Xh(y,T.mode,R),y.return=T,y;case lr:var b=y._init;return p(T,b(y._payload),R)}if(ko(y)||mo(y))return y=ui(y,T.mode,R,null),y.return=T,y;xl(T,y)}return null}function m(T,y,R,b){var U=y!==null?y.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return U!==null?null:l(T,y,""+R,b);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case El:return R.key===U?u(T,y,R,b):null;case Gi:return R.key===U?c(T,y,R,b):null;case lr:return U=R._init,m(T,y,U(R._payload),b)}if(ko(R)||mo(R))return U!==null?null:d(T,y,R,b,null);xl(T,R)}return null}function v(T,y,R,b,U){if(typeof b=="string"&&b!==""||typeof b=="number")return T=T.get(R)||null,l(y,T,""+b,U);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case El:return T=T.get(b.key===null?R:b.key)||null,u(y,T,b,U);case Gi:return T=T.get(b.key===null?R:b.key)||null,c(y,T,b,U);case lr:var B=b._init;return v(T,y,R,B(b._payload),U)}if(ko(b)||mo(b))return T=T.get(R)||null,d(y,T,b,U,null);xl(y,b)}return null}function C(T,y,R,b){for(var U=null,B=null,w=y,_=y=0,E=null;w!==null&&_<R.length;_++){w.index>_?(E=w,w=null):E=w.sibling;var I=m(T,w,R[_],b);if(I===null){w===null&&(w=E);break}t&&w&&I.alternate===null&&e(T,w),y=s(I,y,_),B===null?U=I:B.sibling=I,B=I,w=E}if(_===R.length)return n(T,w),Ie&&Zr(T,_),U;if(w===null){for(;_<R.length;_++)w=p(T,R[_],b),w!==null&&(y=s(w,y,_),B===null?U=w:B.sibling=w,B=w);return Ie&&Zr(T,_),U}for(w=r(T,w);_<R.length;_++)E=v(w,T,_,R[_],b),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?_:E.key),y=s(E,y,_),B===null?U=E:B.sibling=E,B=E);return t&&w.forEach(function(A){return e(T,A)}),Ie&&Zr(T,_),U}function P(T,y,R,b){var U=mo(R);if(typeof U!="function")throw Error(F(150));if(R=U.call(R),R==null)throw Error(F(151));for(var B=U=null,w=y,_=y=0,E=null,I=R.next();w!==null&&!I.done;_++,I=R.next()){w.index>_?(E=w,w=null):E=w.sibling;var A=m(T,w,I.value,b);if(A===null){w===null&&(w=E);break}t&&w&&A.alternate===null&&e(T,w),y=s(A,y,_),B===null?U=A:B.sibling=A,B=A,w=E}if(I.done)return n(T,w),Ie&&Zr(T,_),U;if(w===null){for(;!I.done;_++,I=R.next())I=p(T,I.value,b),I!==null&&(y=s(I,y,_),B===null?U=I:B.sibling=I,B=I);return Ie&&Zr(T,_),U}for(w=r(T,w);!I.done;_++,I=R.next())I=v(w,T,_,I.value,b),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?_:I.key),y=s(I,y,_),B===null?U=I:B.sibling=I,B=I);return t&&w.forEach(function(D){return e(T,D)}),Ie&&Zr(T,_),U}function N(T,y,R,b){if(typeof R=="object"&&R!==null&&R.type===Qi&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case El:e:{for(var U=R.key,B=y;B!==null;){if(B.key===U){if(U=R.type,U===Qi){if(B.tag===7){n(T,B.sibling),y=i(B,R.props.children),y.return=T,T=y;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===lr&&U_(U)===B.type){n(T,B.sibling),y=i(B,R.props),y.ref=Eo(T,B,R),y.return=T,T=y;break e}n(T,B);break}else e(T,B);B=B.sibling}R.type===Qi?(y=ui(R.props.children,T.mode,b,R.key),y.return=T,T=y):(b=nu(R.type,R.key,R.props,null,T.mode,b),b.ref=Eo(T,y,R),b.return=T,T=b)}return o(T);case Gi:e:{for(B=R.key;y!==null;){if(y.key===B)if(y.tag===4&&y.stateNode.containerInfo===R.containerInfo&&y.stateNode.implementation===R.implementation){n(T,y.sibling),y=i(y,R.children||[]),y.return=T,T=y;break e}else{n(T,y);break}else e(T,y);y=y.sibling}y=Xh(R,T.mode,b),y.return=T,T=y}return o(T);case lr:return B=R._init,N(T,y,B(R._payload),b)}if(ko(R))return C(T,y,R,b);if(mo(R))return P(T,y,R,b);xl(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,y!==null&&y.tag===6?(n(T,y.sibling),y=i(y,R),y.return=T,T=y):(n(T,y),y=Yh(R,T.mode,b),y.return=T,T=y),o(T)):n(T,y)}return N}var Ss=CE(!0),RE=CE(!1),Su=$r(null),Cu=null,rs=null,Ep=null;function wp(){Ep=rs=Cu=null}function Tp(t){var e=Su.current;we(Su),t._currentValue=e}function Gd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){Cu=t,Ep=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if(Ep!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(Cu===null)throw Error(F(308));rs=t,Cu.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var ii=null;function Ip(t){ii===null?ii=[t]:ii.push(t)}function AE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ip(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kn(t,r)}function Kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function Sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function PE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ip(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kn(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,up(t,n)}}function j_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ru(t,e,n,r){var i=t.updateQueue;ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,v=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(m=e,v=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){p=C.call(v,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,m=typeof C=="function"?C.call(v,p,m):C,m==null)break e;p=Ae({},p,m);break e;case 2:ur=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);mi|=o,t.lanes=o,t.memoizedState=p}}function B_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Va={},gn=$r(Va),da=$r(Va),fa=$r(Va);function si(t){if(t===Va)throw Error(F(174));return t}function Cp(t,e){switch(me(fa,e),me(da,t),me(gn,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pd(e,t)}we(gn),me(gn,e)}function Cs(){we(gn),we(da),we(fa)}function kE(t){si(fa.current);var e=si(gn.current),n=Pd(e,t.type);e!==n&&(me(da,t),me(gn,n))}function Rp(t){da.current===t&&(we(gn),we(da))}var Ce=$r(0);function Au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wh=[];function Ap(){for(var t=0;t<Wh.length;t++)Wh[t]._workInProgressVersionPrimary=null;Wh.length=0}var Xl=Jn.ReactCurrentDispatcher,Hh=Jn.ReactCurrentBatchConfig,pi=0,Re=null,Ve=null,We=null,Pu=!1,zo=!1,pa=0,FR=0;function ot(){throw Error(F(321))}function Pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function kp(t,e,n,r,i,s){if(pi=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?zR:$R,t=n(r,i),zo){s=0;do{if(zo=!1,pa=0,25<=s)throw Error(F(301));s+=1,We=Ve=null,e.updateQueue=null,Xl.current=WR,t=n(r,i)}while(zo)}if(Xl.current=ku,e=Ve!==null&&Ve.next!==null,pi=0,We=Ve=Re=null,Pu=!1,e)throw Error(F(300));return t}function Np(){var t=pa!==0;return pa=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Re.memoizedState=We=t:We=We.next=t,We}function Gt(){if(Ve===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=We===null?Re.memoizedState:We.next;if(e!==null)We=e,Ve=t;else{if(t===null)throw Error(F(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},We===null?Re.memoizedState=We=t:We=We.next=t}return We}function ma(t,e){return typeof e=="function"?e(t):e}function qh(t){var e=Gt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((pi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Re.lanes|=d,mi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,an(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kh(t){var e=Gt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);an(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function NE(){}function xE(t,e){var n=Re,r=Gt(),i=e(),s=!an(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,xp(bE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ga(9,OE.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(F(349));pi&30||DE(n,e,i)}return i}function DE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function OE(t,e,n,r){e.value=n,e.getSnapshot=r,LE(e)&&ME(t)}function bE(t,e,n){return n(function(){LE(e)&&ME(t)})}function LE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function ME(t){var e=Kn(t,1);e!==null&&sn(e,t,1,-1)}function z_(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e.queue=t,t=t.dispatch=BR.bind(null,Re,t),[e.memoizedState,t]}function ga(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function VE(){return Gt().memoizedState}function Jl(t,e,n,r){var i=cn();Re.flags|=t,i.memoizedState=ga(1|e,n,void 0,r===void 0?null:r)}function yc(t,e,n,r){var i=Gt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&Pp(r,o.deps)){i.memoizedState=ga(e,n,s,r);return}}Re.flags|=t,i.memoizedState=ga(1|e,n,s,r)}function $_(t,e){return Jl(8390656,8,t,e)}function xp(t,e){return yc(2048,8,t,e)}function FE(t,e){return yc(4,2,t,e)}function UE(t,e){return yc(4,4,t,e)}function jE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function BE(t,e,n){return n=n!=null?n.concat([t]):null,yc(4,4,jE.bind(null,e,t),n)}function Dp(){}function zE(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $E(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function WE(t,e,n){return pi&21?(an(n,e)||(n=Q0(),Re.lanes|=n,mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function UR(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Hh.transition;Hh.transition={};try{t(!1),e()}finally{he=n,Hh.transition=r}}function HE(){return Gt().memoizedState}function jR(t,e,n){var r=Rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qE(t))KE(e,n);else if(n=AE(t,e,n,r),n!==null){var i=wt();sn(n,t,r,i),GE(n,e,r)}}function BR(t,e,n){var r=Rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qE(t))KE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,an(l,o)){var u=e.interleaved;u===null?(i.next=i,Ip(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=AE(t,e,i,r),n!==null&&(i=wt(),sn(n,t,r,i),GE(n,e,r))}}function qE(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function KE(t,e){zo=Pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function GE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,up(t,n)}}var ku={readContext:Kt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},zR={readContext:Kt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:$_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,jE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jR.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:z_,useDebugValue:Dp,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=z_(!1),e=t[0];return t=UR.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=cn();if(Ie){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ke===null)throw Error(F(349));pi&30||DE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$_(bE.bind(null,r,s,t),[t]),r.flags|=2048,ga(9,OE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=Ke.identifierPrefix;if(Ie){var n=Mn,r=Ln;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$R={readContext:Kt,useCallback:zE,useContext:Kt,useEffect:xp,useImperativeHandle:BE,useInsertionEffect:FE,useLayoutEffect:UE,useMemo:$E,useReducer:qh,useRef:VE,useState:function(){return qh(ma)},useDebugValue:Dp,useDeferredValue:function(t){var e=Gt();return WE(e,Ve.memoizedState,t)},useTransition:function(){var t=qh(ma)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:NE,useSyncExternalStore:xE,useId:HE,unstable_isNewReconciler:!1},WR={readContext:Kt,useCallback:zE,useContext:Kt,useEffect:xp,useImperativeHandle:BE,useInsertionEffect:FE,useLayoutEffect:UE,useMemo:$E,useReducer:Kh,useRef:VE,useState:function(){return Kh(ma)},useDebugValue:Dp,useDeferredValue:function(t){var e=Gt();return Ve===null?e.memoizedState=t:WE(e,Ve.memoizedState,t)},useTransition:function(){var t=Kh(ma)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:NE,useSyncExternalStore:xE,useId:HE,unstable_isNewReconciler:!1};function Jt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vc={isMounted:function(t){return(t=t._reactInternals)?Ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Rr(t),s=zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(sn(e,t,i,r),Yl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Rr(t),s=zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(sn(e,t,i,r),Yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=Rr(t),i=zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sr(t,i,r),e!==null&&(sn(e,t,r,n),Yl(e,t,r))}};function W_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!la(n,r)||!la(i,s):!0}function QE(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Kt(s):(i=kt(e)?di:mt.current,r=e.contextTypes,s=(r=r!=null)?Ts(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function H_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vc.enqueueReplaceState(e,e.state,null)}function Yd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Sp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Kt(s):(s=kt(e)?di:mt.current,i.context=Ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vc.enqueueReplaceState(i,i.state,null),Ru(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",r=e;do n+=yC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HR=typeof WeakMap=="function"?WeakMap:Map;function YE(t,e,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xu||(xu=!0,lf=r),Xd(t,e)},n}function XE(t,e,n){n=zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xd(t,e),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function q_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new HR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=sA.bind(null,t,e,n),e.then(t,t))}function K_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function G_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zn(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var qR=Jn.ReactCurrentOwner,Rt=!1;function Et(t,e,n,r){e.child=t===null?RE(e,null,n,r):Ss(e,t.child,n,r)}function Q_(t,e,n,r,i){n=n.render;var s=e.ref;return fs(e,i),r=kp(t,e,n,r,s,i),n=Np(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ie&&n&&_p(e),e.flags|=1,Et(t,e,r,i),e.child)}function Y_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!jp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,JE(t,e,s,r,i)):(t=nu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=Ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function JE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(la(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return Jd(t,e,n,r,i)}function ZE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(ss,Dt),Dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(ss,Dt),Dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(ss,Dt),Dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(ss,Dt),Dt|=r;return Et(t,e,i,n),e.child}function ew(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jd(t,e,n,r,i){var s=kt(n)?di:mt.current;return s=Ts(e,s),fs(e,i),n=kp(t,e,n,r,s,i),r=Np(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ie&&r&&_p(e),e.flags|=1,Et(t,e,n,i),e.child)}function X_(t,e,n,r,i){if(kt(n)){var s=!0;wu(e)}else s=!1;if(fs(e,i),e.stateNode===null)Zl(t,e),QE(e,n,r),Yd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kt(c):(c=kt(n)?di:mt.current,c=Ts(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&H_(e,o,r,c),ur=!1;var m=e.memoizedState;o.state=m,Ru(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Pt.current||ur?(typeof d=="function"&&(Qd(e,n,d,r),u=e.memoizedState),(l=ur||W_(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,PE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Jt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Kt(u):(u=kt(n)?di:mt.current,u=Ts(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&H_(e,o,r,u),ur=!1,m=e.memoizedState,o.state=m,Ru(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||Pt.current||ur?(typeof v=="function"&&(Qd(e,n,v,r),C=e.memoizedState),(c=ur||W_(e,n,c,r,m,C,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Zd(t,e,n,r,s,i)}function Zd(t,e,n,r,i,s){ew(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&M_(e,n,!1),Gn(t,e,s);r=e.stateNode,qR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,l,s)):Et(t,e,l,s),e.memoizedState=r.state,i&&M_(e,n,!0),e.child}function tw(t){var e=t.stateNode;e.pendingContext?L_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&L_(t,e.context,!1),Cp(t,e.containerInfo)}function J_(t,e,n,r,i){return Is(),vp(i),e.flags|=256,Et(t,e,n,r),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function nw(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Ce,i&1),t===null)return Kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,r,0,null),t=ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tf(n),e.memoizedState=ef,t):Op(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return KR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ar(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ar(l,s):(s=ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ef,r}return s=t.child,t=s.sibling,r=Ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Op(t,e){return e=Tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Dl(t,e,n,r){return r!==null&&vp(r),Ss(e,t.child,null,n),t=Op(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function KR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gh(Error(F(422))),Dl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tc({mode:"visible",children:r.children},i,0,null),s=ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=tf(o),e.memoizedState=ef,s);if(!(e.mode&1))return Dl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Gh(s,r,void 0),Dl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Rt||l){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kn(t,i),sn(r,t,i,-1))}return Up(),r=Gh(Error(F(421))),Dl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=oA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=Ir(i.nextSibling),Lt=e,Ie=!0,en=null,t!==null&&(zt[$t++]=Ln,zt[$t++]=Mn,zt[$t++]=fi,Ln=t.id,Mn=t.overflow,fi=e),e=Op(e,r.children),e.flags|=4096,e)}function Z_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gd(t.return,e,n)}function Qh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function rw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Z_(t,n,e);else if(t.tag===19)Z_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Au(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Au(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qh(e,!0,n,null,s);break;case"together":Qh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GR(t,e,n){switch(e.tag){case 3:tw(e),Is();break;case 5:kE(e);break;case 1:kt(e.type)&&wu(e);break;case 4:Cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(Su,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?nw(t,e,n):(me(Ce,Ce.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);me(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,ZE(t,e,n)}return Gn(t,e,n)}var iw,nf,sw,ow;iw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nf=function(){};sw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(gn.current);var s=null;switch(n){case"input":i=Sd(t,i),r=Sd(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Ad(t,i),r=Ad(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vu)}kd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ta.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ow=function(t,e,n,r){n!==r&&(e.flags|=4)};function wo(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function QR(t,e,n){var r=e.pendingProps;switch(yp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return kt(e.type)&&Eu(),at(e),null;case 3:return r=e.stateNode,Cs(),we(Pt),we(mt),Ap(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(hf(en),en=null))),nf(t,e),at(e),null;case 5:Rp(e);var i=si(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)sw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return at(e),null}if(t=si(gn.current),Nl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[ha]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<xo.length;i++)ye(xo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":l_(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":c_(r,s),ye("invalid",r)}kd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,l,t),i=["children",""+l]):ta.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":wl(r),u_(r,s,!0);break;case"textarea":wl(r),h_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=b0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[ha]=r,iw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nd(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<xo.length;i++)ye(xo[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":l_(t,r),i=Sd(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ye("invalid",t);break;case"textarea":c_(t,r),i=Ad(t,r),ye("invalid",t);break;default:i=r}kd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?V0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&L0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&na(t,u):typeof u=="number"&&na(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ta.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&rp(t,s,u,o))}switch(n){case"input":wl(t),u_(t,r,!1);break;case"textarea":wl(t),h_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?us(t,!!r.multiple,s,!1):r.defaultValue!=null&&us(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)ow(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=si(fa.current),si(gn.current),Nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return at(e),null;case 13:if(we(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Ot!==null&&e.mode&1&&!(e.flags&128))SE(),Is(),e.flags|=98560,s=!1;else if(s=Nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[hn]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else en!==null&&(hf(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Ue===0&&(Ue=3):Up())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return Cs(),nf(t,e),t===null&&ua(e.stateNode.containerInfo),at(e),null;case 10:return Tp(e.type._context),at(e),null;case 17:return kt(e.type)&&Eu(),at(e),null;case 19:if(we(Ce),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wo(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Au(t),o!==null){for(e.flags|=128,wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>As&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Au(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return at(e),null}else 2*De()-s.renderingStartTime>As&&n!==1073741824&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Ce.current,me(Ce,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return Fp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Dt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function YR(t,e){switch(yp(e),e.tag){case 1:return kt(e.type)&&Eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),we(Pt),we(mt),Ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rp(e),null;case 13:if(we(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Ce),null;case 4:return Cs(),null;case 10:return Tp(e.type._context),null;case 22:case 23:return Fp(),null;case 24:return null;default:return null}}var Ol=!1,ct=!1,XR=typeof WeakSet=="function"?WeakSet:Set,W=null;function is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function rf(t,e,n){try{n()}catch(r){ke(t,e,r)}}var ey=!1;function JR(t,e){if(jd=gu,t=hE(),gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:t,selectionRange:n},gu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,N=C.memoizedState,T=e.stateNode,y=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:Jt(e.type,P),N);T.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){ke(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return C=ey,ey=!1,C}function $o(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rf(e,n,s)}i=i.next}while(i!==r)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function aw(t){var e=t.alternate;e!==null&&(t.alternate=null,aw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[ha],delete e[Wd],delete e[bR],delete e[LR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lw(t){return t.tag===5||t.tag===3||t.tag===4}function ty(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vu));else if(r!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}function af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var Ye=null,Zt=!1;function sr(t,e,n){for(n=n.child;n!==null;)uw(t,e,n),n=n.sibling}function uw(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(dc,n)}catch{}switch(n.tag){case 5:ct||is(n,e);case 6:var r=Ye,i=Zt;Ye=null,sr(t,e,n),Ye=r,Zt=i,Ye!==null&&(Zt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Zt?(t=Ye,n=n.stateNode,t.nodeType===8?zh(t.parentNode,n):t.nodeType===1&&zh(t,n),oa(t)):zh(Ye,n.stateNode));break;case 4:r=Ye,i=Zt,Ye=n.stateNode.containerInfo,Zt=!0,sr(t,e,n),Ye=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rf(n,e,o),i=i.next}while(i!==r)}sr(t,e,n);break;case 1:if(!ct&&(is(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ke(n,e,l)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,sr(t,e,n),ct=r):sr(t,e,n);break;default:sr(t,e,n)}}function ny(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XR),e.forEach(function(r){var i=aA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,Zt=!1;break e;case 3:Ye=l.stateNode.containerInfo,Zt=!0;break e;case 4:Ye=l.stateNode.containerInfo,Zt=!0;break e}l=l.return}if(Ye===null)throw Error(F(160));uw(s,o,i),Ye=null,Zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cw(e,t),e=e.sibling}function cw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),un(t),r&4){try{$o(3,t,t.return),Ec(3,t)}catch(P){ke(t,t.return,P)}try{$o(5,t,t.return)}catch(P){ke(t,t.return,P)}}break;case 1:Xt(e,t),un(t),r&512&&n!==null&&is(n,n.return);break;case 5:if(Xt(e,t),un(t),r&512&&n!==null&&is(n,n.return),t.flags&32){var i=t.stateNode;try{na(i,"")}catch(P){ke(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&D0(i,s),Nd(l,o);var c=Nd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?V0(i,p):d==="dangerouslySetInnerHTML"?L0(i,p):d==="children"?na(i,p):rp(i,d,p,c)}switch(l){case"input":Cd(i,s);break;case"textarea":O0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?us(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?us(i,!!s.multiple,s.defaultValue,!0):us(i,!!s.multiple,s.multiple?[]:"",!1))}i[ha]=s}catch(P){ke(t,t.return,P)}}break;case 6:if(Xt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){ke(t,t.return,P)}}break;case 3:if(Xt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(P){ke(t,t.return,P)}break;case 4:Xt(e,t),un(t);break;case 13:Xt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mp=De())),r&4&&ny(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(c=ct)||d,Xt(e,t),ct=c):Xt(e,t),un(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,v=m.child,m.tag){case 0:case 11:case 14:case 15:$o(4,m,m.return);break;case 1:is(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){ke(r,n,P)}}break;case 5:is(m,m.return);break;case 22:if(m.memoizedState!==null){iy(p);continue}}v!==null?(v.return=m,W=v):iy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=M0("display",o))}catch(P){ke(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){ke(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Xt(e,t),un(t),r&4&&ny(t);break;case 21:break;default:Xt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(na(i,""),r.flags&=-33);var s=ty(t);af(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ty(t);of(t,l,o);break;default:throw Error(F(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZR(t,e,n){W=t,hw(t)}function hw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ol;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ct;l=Ol;var c=ct;if(Ol=o,(ct=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?sy(i):u!==null?(u.return=o,W=u):sy(i);for(;s!==null;)W=s,hw(s),s=s.sibling;W=i,Ol=l,ct=c}ry(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):ry(t)}}function ry(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||Ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&B_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}B_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&oa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ct||e.flags&512&&sf(e)}catch(m){ke(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function iy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function sy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{sf(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{sf(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var eA=Math.ceil,Nu=Jn.ReactCurrentDispatcher,bp=Jn.ReactCurrentOwner,qt=Jn.ReactCurrentBatchConfig,ae=0,Ke=null,Le=null,Ze=0,Dt=0,ss=$r(0),Ue=0,_a=null,mi=0,wc=0,Lp=0,Wo=null,St=null,Mp=0,As=1/0,On=null,xu=!1,lf=null,Cr=null,bl=!1,_r=null,Du=0,Ho=0,uf=null,eu=-1,tu=0;function wt(){return ae&6?De():eu!==-1?eu:eu=De()}function Rr(t){return t.mode&1?ae&2&&Ze!==0?Ze&-Ze:VR.transition!==null?(tu===0&&(tu=Q0()),tu):(t=he,t!==0||(t=window.event,t=t===void 0?16:nE(t.type)),t):1}function sn(t,e,n,r){if(50<Ho)throw Ho=0,uf=null,Error(F(185));ba(t,n,r),(!(ae&2)||t!==Ke)&&(t===Ke&&(!(ae&2)&&(wc|=n),Ue===4&&hr(t,Ze)),Nt(t,r),n===1&&ae===0&&!(e.mode&1)&&(As=De()+500,_c&&Wr()))}function Nt(t,e){var n=t.callbackNode;VC(t,e);var r=mu(t,t===Ke?Ze:0);if(r===0)n!==null&&p_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&p_(n),e===1)t.tag===0?MR(oy.bind(null,t)):wE(oy.bind(null,t)),DR(function(){!(ae&6)&&Wr()}),n=null;else{switch(Y0(r)){case 1:n=lp;break;case 4:n=K0;break;case 16:n=pu;break;case 536870912:n=G0;break;default:n=pu}n=vw(n,dw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dw(t,e){if(eu=-1,tu=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var r=mu(t,t===Ke?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ou(t,r);else{e=r;var i=ae;ae|=2;var s=pw();(Ke!==t||Ze!==e)&&(On=null,As=De()+500,li(t,e));do try{rA();break}catch(l){fw(t,l)}while(!0);wp(),Nu.current=s,ae=i,Le!==null?e=0:(Ke=null,Ze=0,e=Ue)}if(e!==0){if(e===2&&(i=Ld(t),i!==0&&(r=i,e=cf(t,i))),e===1)throw n=_a,li(t,0),hr(t,r),Nt(t,De()),n;if(e===6)hr(t,r);else{if(i=t.current.alternate,!(r&30)&&!tA(i)&&(e=Ou(t,r),e===2&&(s=Ld(t),s!==0&&(r=s,e=cf(t,s))),e===1))throw n=_a,li(t,0),hr(t,r),Nt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:ei(t,St,On);break;case 3:if(hr(t,r),(r&130023424)===r&&(e=Mp+500-De(),10<e)){if(mu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$d(ei.bind(null,t,St,On),e);break}ei(t,St,On);break;case 4:if(hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eA(r/1960))-r,10<r){t.timeoutHandle=$d(ei.bind(null,t,St,On),r);break}ei(t,St,On);break;case 5:ei(t,St,On);break;default:throw Error(F(329))}}}return Nt(t,De()),t.callbackNode===n?dw.bind(null,t):null}function cf(t,e){var n=Wo;return t.current.memoizedState.isDehydrated&&(li(t,e).flags|=256),t=Ou(t,e),t!==2&&(e=St,St=n,e!==null&&hf(e)),t}function hf(t){St===null?St=t:St.push.apply(St,t)}function tA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!an(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Lp,e&=~wc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function oy(t){if(ae&6)throw Error(F(327));ps();var e=mu(t,0);if(!(e&1))return Nt(t,De()),null;var n=Ou(t,e);if(t.tag!==0&&n===2){var r=Ld(t);r!==0&&(e=r,n=cf(t,r))}if(n===1)throw n=_a,li(t,0),hr(t,e),Nt(t,De()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ei(t,St,On),Nt(t,De()),null}function Vp(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(As=De()+500,_c&&Wr())}}function gi(t){_r!==null&&_r.tag===0&&!(ae&6)&&ps();var e=ae;ae|=1;var n=qt.transition,r=he;try{if(qt.transition=null,he=1,t)return t()}finally{he=r,qt.transition=n,ae=e,!(ae&6)&&Wr()}}function Fp(){Dt=ss.current,we(ss)}function li(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xR(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(yp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eu();break;case 3:Cs(),we(Pt),we(mt),Ap();break;case 5:Rp(r);break;case 4:Cs();break;case 13:we(Ce);break;case 19:we(Ce);break;case 10:Tp(r.type._context);break;case 22:case 23:Fp()}n=n.return}if(Ke=t,Le=t=Ar(t.current,null),Ze=Dt=e,Ue=0,_a=null,Lp=wc=mi=0,St=Wo=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function fw(t,e){do{var n=Le;try{if(wp(),Xl.current=ku,Pu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pu=!1}if(pi=0,We=Ve=Re=null,zo=!1,pa=0,bp.current=null,n===null||n.return===null){Ue=1,_a=e,Le=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=K_(o);if(v!==null){v.flags&=-257,G_(v,o,l,s,e),v.mode&1&&q_(s,c,e),e=v,u=c;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){q_(s,c,e),Up();break e}u=Error(F(426))}}else if(Ie&&l.mode&1){var N=K_(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),G_(N,o,l,s,e),vp(Rs(u,l));break e}}s=u=Rs(u,l),Ue!==4&&(Ue=2),Wo===null?Wo=[s]:Wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=YE(s,u,e);j_(s,T);break e;case 1:l=u;var y=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Cr===null||!Cr.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=XE(s,l,e);j_(s,b);break e}}s=s.return}while(s!==null)}gw(n)}catch(U){e=U,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function pw(){var t=Nu.current;return Nu.current=ku,t===null?ku:t}function Up(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ke===null||!(mi&268435455)&&!(wc&268435455)||hr(Ke,Ze)}function Ou(t,e){var n=ae;ae|=2;var r=pw();(Ke!==t||Ze!==e)&&(On=null,li(t,e));do try{nA();break}catch(i){fw(t,i)}while(!0);if(wp(),ae=n,Nu.current=r,Le!==null)throw Error(F(261));return Ke=null,Ze=0,Ue}function nA(){for(;Le!==null;)mw(Le)}function rA(){for(;Le!==null&&!PC();)mw(Le)}function mw(t){var e=yw(t.alternate,t,Dt);t.memoizedProps=t.pendingProps,e===null?gw(t):Le=e,bp.current=null}function gw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YR(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Le=null;return}}else if(n=QR(n,e,Dt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Ue===0&&(Ue=5)}function ei(t,e,n){var r=he,i=qt.transition;try{qt.transition=null,he=1,iA(t,e,n,r)}finally{qt.transition=i,he=r}return null}function iA(t,e,n,r){do ps();while(_r!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FC(t,s),t===Ke&&(Le=Ke=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bl||(bl=!0,vw(pu,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qt.transition,qt.transition=null;var o=he;he=1;var l=ae;ae|=4,bp.current=null,JR(t,n),cw(n,t),SR(Bd),gu=!!jd,Bd=jd=null,t.current=n,ZR(n),kC(),ae=l,he=o,qt.transition=s}else t.current=n;if(bl&&(bl=!1,_r=t,Du=i),s=t.pendingLanes,s===0&&(Cr=null),DC(n.stateNode),Nt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xu)throw xu=!1,t=lf,lf=null,t;return Du&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===uf?Ho++:(Ho=0,uf=t):Ho=0,Wr(),null}function ps(){if(_r!==null){var t=Y0(Du),e=qt.transition,n=he;try{if(qt.transition=null,he=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,Du=0,ae&6)throw Error(F(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:$o(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,v=d.return;if(aw(d),d===c){W=null;break}if(m!==null){m.return=v,W=m;break}W=v}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$o(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,W=T;break e}W=s.return}}var y=t.current;for(W=y;W!==null;){o=W;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,W=R;else e:for(o=y;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ec(9,l)}}catch(U){ke(l,l.return,U)}if(l===o){W=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,W=b;break e}W=l.return}}if(ae=i,Wr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(dc,t)}catch{}r=!0}return r}finally{he=n,qt.transition=e}}return!1}function ay(t,e,n){e=Rs(n,e),e=YE(t,e,1),t=Sr(t,e,1),e=wt(),t!==null&&(ba(t,1,e),Nt(t,e))}function ke(t,e,n){if(t.tag===3)ay(t,t,n);else for(;e!==null;){if(e.tag===3){ay(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){t=Rs(n,t),t=XE(e,t,1),e=Sr(e,t,1),t=wt(),e!==null&&(ba(e,1,t),Nt(e,t));break}}e=e.return}}function sA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(Ze&n)===n&&(Ue===4||Ue===3&&(Ze&130023424)===Ze&&500>De()-Mp?li(t,0):Lp|=n),Nt(t,e)}function _w(t,e){e===0&&(t.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var n=wt();t=Kn(t,e),t!==null&&(ba(t,e,n),Nt(t,n))}function oA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_w(t,n)}function aA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),_w(t,n)}var yw;yw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,GR(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Ie&&e.flags&1048576&&TE(e,Iu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zl(t,e),t=e.pendingProps;var i=Ts(e,mt.current);fs(e,n),i=kp(null,e,r,t,i,n);var s=Np();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,wu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sp(e),i.updater=vc,e.stateNode=i,i._reactInternals=e,Yd(e,r,t,n),e=Zd(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&_p(e),Et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uA(r),t=Jt(r,t),i){case 0:e=Jd(null,e,r,t,n);break e;case 1:e=X_(null,e,r,t,n);break e;case 11:e=Q_(null,e,r,t,n);break e;case 14:e=Y_(null,e,r,Jt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Jd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),X_(t,e,r,i,n);case 3:e:{if(tw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,PE(t,e),Ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Rs(Error(F(423)),e),e=J_(t,e,r,n,i);break e}else if(r!==i){i=Rs(Error(F(424)),e),e=J_(t,e,r,n,i);break e}else for(Ot=Ir(e.stateNode.containerInfo.firstChild),Lt=e,Ie=!0,en=null,n=RE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),r===i){e=Gn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return kE(e),t===null&&Kd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zd(r,i)?o=null:s!==null&&zd(r,s)&&(e.flags|=32),ew(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&Kd(e),null;case 13:return nw(t,e,n);case 4:return Cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ss(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Q_(t,e,r,i,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(Su,r._currentValue),r._currentValue=o,s!==null)if(an(s.value,o)){if(s.children===i.children&&!Pt.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=zn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Gd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,fs(e,n),i=Kt(i),r=r(i),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),Y_(t,e,r,i,n);case 15:return JE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Zl(t,e),e.tag=1,kt(r)?(t=!0,wu(e)):t=!1,fs(e,n),QE(e,r,i),Yd(e,r,i,n),Zd(null,e,r,!0,t,n);case 19:return rw(t,e,n);case 22:return ZE(t,e,n)}throw Error(F(156,e.tag))};function vw(t,e){return q0(t,e)}function lA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new lA(t,e,n,r)}function jp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uA(t){if(typeof t=="function")return jp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sp)return 11;if(t===op)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")jp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qi:return ui(n.children,i,s,e);case ip:o=8,i|=8;break;case Ed:return t=Wt(12,n,e,i|2),t.elementType=Ed,t.lanes=s,t;case wd:return t=Wt(13,n,e,i),t.elementType=wd,t.lanes=s,t;case Td:return t=Wt(19,n,e,i),t.elementType=Td,t.lanes=s,t;case k0:return Tc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A0:o=10;break e;case P0:o=9;break e;case sp:o=11;break e;case op:o=14;break e;case lr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ui(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function Tc(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=k0,t.lanes=n,t.stateNode={isHidden:!1},t}function Yh(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Xh(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xh(0),this.expirationTimes=xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bp(t,e,n,r,i,s,o,l,u){return t=new cA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sp(s),t}function hA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ew(t){if(!t)return br;t=t._reactInternals;e:{if(Ni(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(kt(n))return EE(t,n,e)}return e}function ww(t,e,n,r,i,s,o,l,u){return t=Bp(n,r,!0,t,i,s,o,l,u),t.context=Ew(null),n=t.current,r=wt(),i=Rr(n),s=zn(r,i),s.callback=e??null,Sr(n,s,i),t.current.lanes=i,ba(t,i,r),Nt(t,r),t}function Ic(t,e,n,r){var i=e.current,s=wt(),o=Rr(i);return n=Ew(n),e.context===null?e.context=n:e.pendingContext=n,e=zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sr(i,e,o),t!==null&&(sn(t,i,o,s),Yl(t,i,o)),o}function bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ly(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zp(t,e){ly(t,e),(t=t.alternate)&&ly(t,e)}function dA(){return null}var Tw=typeof reportError=="function"?reportError:function(t){console.error(t)};function $p(t){this._internalRoot=t}Sc.prototype.render=$p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ic(t,e,null,null)};Sc.prototype.unmount=$p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gi(function(){Ic(null,t,null,null)}),e[qn]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&tE(t)}};function Wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uy(){}function fA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=bu(o);s.call(c)}}var o=ww(e,r,t,0,null,!1,!1,"",uy);return t._reactRootContainer=o,t[qn]=o.current,ua(t.nodeType===8?t.parentNode:t),gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=bu(u);l.call(c)}}var u=Bp(t,0,!1,null,null,!1,!1,"",uy);return t._reactRootContainer=u,t[qn]=u.current,ua(t.nodeType===8?t.parentNode:t),gi(function(){Ic(e,u,n,r)}),u}function Rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=bu(o);l.call(u)}}Ic(e,o,t,i)}else o=fA(n,e,t,i,r);return bu(o)}X0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(up(e,n|1),Nt(e,De()),!(ae&6)&&(As=De()+500,Wr()))}break;case 13:gi(function(){var r=Kn(t,1);if(r!==null){var i=wt();sn(r,t,1,i)}}),zp(t,1)}};cp=function(t){if(t.tag===13){var e=Kn(t,134217728);if(e!==null){var n=wt();sn(e,t,134217728,n)}zp(t,134217728)}};J0=function(t){if(t.tag===13){var e=Rr(t),n=Kn(t,e);if(n!==null){var r=wt();sn(n,t,e,r)}zp(t,e)}};Z0=function(){return he};eE=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Dd=function(t,e,n){switch(e){case"input":if(Cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gc(r);if(!i)throw Error(F(90));x0(r),Cd(r,i)}}}break;case"textarea":O0(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};j0=Vp;B0=gi;var pA={usingClientEntryPoint:!1,Events:[Ma,Zi,gc,F0,U0,Vp]},To={findFiberByHostInstance:ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mA={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W0(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||dA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{dc=Ll.inject(mA),mn=Ll}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pA;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wp(e))throw Error(F(200));return hA(t,e,null,n)};Ut.createRoot=function(t,e){if(!Wp(t))throw Error(F(299));var n=!1,r="",i=Tw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bp(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,ua(t.nodeType===8?t.parentNode:t),new $p(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=W0(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return gi(t)};Ut.hydrate=function(t,e,n){if(!Cc(e))throw Error(F(200));return Rc(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!Wp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Tw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ww(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,ua(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Sc(e)};Ut.render=function(t,e,n){if(!Cc(e))throw Error(F(200));return Rc(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!Cc(t))throw Error(F(40));return t._reactRootContainer?(gi(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Vp;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Rc(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function Iw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iw)}catch(t){console.error(t)}}Iw(),I0.exports=Ut;var gA=I0.exports,cy=gA;yd.createRoot=cy.createRoot,yd.hydrateRoot=cy.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ya.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const hy="popstate";function _A(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return df("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Cw(i)}return vA(e,n,null,t)}function je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Sw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yA(){return Math.random().toString(36).substr(2,8)}function dy(t,e){return{usr:t.state,key:t.key,idx:e}}function df(t,e,n,r){return n===void 0&&(n=null),ya({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zs(e):e,{state:n,key:e&&e.key||r||yA()})}function Cw(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function vA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=yr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(ya({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=yr.Pop;let N=d(),T=N==null?null:N-c;c=N,u&&u({action:l,location:P.location,delta:T})}function m(N,T){l=yr.Push;let y=df(P.location,N,T);c=d()+1;let R=dy(y,c),b=P.createHref(y);try{o.pushState(R,"",b)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(b)}s&&u&&u({action:l,location:P.location,delta:1})}function v(N,T){l=yr.Replace;let y=df(P.location,N,T);c=d();let R=dy(y,c),b=P.createHref(y);o.replaceState(R,"",b),s&&u&&u({action:l,location:P.location,delta:0})}function C(N){let T=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof N=="string"?N:Cw(N);return y=y.replace(/ $/,"%20"),je(T,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,T)}let P={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(hy,p),u=N,()=>{i.removeEventListener(hy,p),u=null}},createHref(N){return e(i,N)},createURL:C,encodeLocation(N){let T=C(N);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:v,go(N){return o.go(N)}};return P}var fy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fy||(fy={}));function EA(t,e,n){return n===void 0&&(n="/"),wA(t,e,n,!1)}function wA(t,e,n,r){let i=typeof e=="string"?zs(e):e,s=Pw(i.pathname||"/",n);if(s==null)return null;let o=Rw(t);TA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=OA(s);l=xA(o[u],c,r)}return l}function Rw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(je(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ci([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(je(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Rw(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:kA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Aw(s.path))i(s,o,u)}),e}function Aw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Aw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function TA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const IA=/^:[\w-]+$/,SA=3,CA=2,RA=1,AA=10,PA=-2,py=t=>t==="*";function kA(t,e){let n=t.split("/"),r=n.length;return n.some(py)&&(r+=PA),e&&(r+=CA),n.filter(i=>!py(i)).reduce((i,s)=>i+(IA.test(s)?SA:s===""?RA:AA),r)}function NA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=my({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=my({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:ci([s,p.pathname]),pathnameBase:UA(ci([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=ci([s,p.pathnameBase]))}return o}function my(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=DA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const C=l[p];return v&&!C?c[m]=void 0:c[m]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function DA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Sw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function OA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Sw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Pw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function bA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?zs(t):t;return{pathname:n?n.startsWith("/")?n:LA(n,e):e,search:jA(r),hash:BA(i)}}function LA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function MA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function VA(t,e){let n=MA(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function FA(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=zs(t):(i=ya({},t),je(!i.pathname||!i.pathname.includes("?"),Jh("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),Jh("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),Jh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=bA(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const ci=t=>t.join("/").replace(/\/\/+/g,"/"),UA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,BA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const kw=["post","put","patch","delete"];new Set(kw);const $A=["get",...kw];new Set($A);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}const Hp=L.createContext(null),WA=L.createContext(null),Ac=L.createContext(null),Pc=L.createContext(null),$s=L.createContext({outlet:null,matches:[],isDataRoute:!1}),Nw=L.createContext(null);function kc(){return L.useContext(Pc)!=null}function xw(){return kc()||je(!1),L.useContext(Pc).location}function Dw(t){L.useContext(Ac).static||L.useLayoutEffect(t)}function xi(){let{isDataRoute:t}=L.useContext($s);return t?rP():HA()}function HA(){kc()||je(!1);let t=L.useContext(Hp),{basename:e,future:n,navigator:r}=L.useContext(Ac),{matches:i}=L.useContext($s),{pathname:s}=xw(),o=JSON.stringify(VA(i,n.v7_relativeSplatPath)),l=L.useRef(!1);return Dw(()=>{l.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=FA(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ci([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function qA(t,e){return KA(t,e)}function KA(t,e,n,r){kc()||je(!1);let{navigator:i}=L.useContext(Ac),{matches:s}=L.useContext($s),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=xw(),d;if(e){var p;let N=typeof e=="string"?zs(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||je(!1),d=N}else d=c;let m=d.pathname||"/",v=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let C=EA(t,{pathname:v}),P=JA(C&&C.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:ci([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:ci([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&P?L.createElement(Pc.Provider,{value:{location:va({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:yr.Pop}},P):P}function GA(){let t=nP(),e=zA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const QA=L.createElement(GA,null);class YA extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement($s.Provider,{value:this.props.routeContext},L.createElement(Nw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function XA(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(Hp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement($s.Provider,{value:e},r)}function JA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||je(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:v}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let v,C=!1,P=null,N=null;n&&(v=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||QA,u&&(c<0&&m===0?(C=!0,N=null):c===m&&(C=!0,N=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),y=()=>{let R;return v?R=P:C?R=N:p.route.Component?R=L.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=d,L.createElement(XA,{match:p,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:R})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?L.createElement(YA,{location:n.location,revalidation:n.revalidation,component:P,error:v,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}var Ow=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ow||{}),Lu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Lu||{});function ZA(t){let e=L.useContext(Hp);return e||je(!1),e}function eP(t){let e=L.useContext(WA);return e||je(!1),e}function tP(t){let e=L.useContext($s);return e||je(!1),e}function bw(t){let e=tP(),n=e.matches[e.matches.length-1];return n.route.id||je(!1),n.route.id}function nP(){var t;let e=L.useContext(Nw),n=eP(Lu.UseRouteError),r=bw(Lu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function rP(){let{router:t}=ZA(Ow.UseNavigateStable),e=bw(Lu.UseNavigateStable),n=L.useRef(!1);return Dw(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,va({fromRouteId:e},s)))},[t,e])}function ar(t){je(!1)}function iP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yr.Pop,navigator:s,static:o=!1,future:l}=t;kc()&&je(!1);let u=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:u,navigator:s,static:o,future:va({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=zs(r));let{pathname:d="/",search:p="",hash:m="",state:v=null,key:C="default"}=r,P=L.useMemo(()=>{let N=Pw(d,u);return N==null?null:{location:{pathname:N,search:p,hash:m,state:v,key:C},navigationType:i}},[u,d,p,m,v,C,i]);return P==null?null:L.createElement(Ac.Provider,{value:c},L.createElement(Pc.Provider,{children:n,value:P}))}function sP(t){let{children:e,location:n}=t;return qA(ff(e),n)}new Promise(()=>{});function ff(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,ff(r.props.children,s));return}r.type!==ar&&je(!1),!r.props.index||!r.props.children||je(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ff(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const oP="6";try{window.__reactRouterVersion=oP}catch{}const aP="startTransition",gy=sC[aP];function lP(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=_A({window:i,v5Compat:!0}));let o=s.current,[l,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=L.useCallback(p=>{c&&gy?gy(()=>u(p)):u(p)},[u,c]);return L.useLayoutEffect(()=>o.listen(d),[o,d]),L.createElement(iP,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var _y;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_y||(_y={}));var yy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(yy||(yy={}));var vy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw Ws(e)},Ws=function(t){return new Error("Firebase Database ("+Lw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new cP;const m=s<<2|l>>4;if(r.push(m),c!==64){const v=l<<4&240|c>>2;if(r.push(v),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vw=function(t){const e=Mw(t);return qp.encodeByteArray(e,!0)},Mu=function(t){return Vw(t).replace(/\./g,"")},Vu=function(t){try{return qp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){return Fw(void 0,t)}function Fw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dP(n)||(t[n]=Fw(t[n],e[n]));return t}function dP(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=()=>fP().__FIREBASE_DEFAULTS__,mP=()=>{if(typeof process>"u"||typeof vy>"u")return;const t=vy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vu(t[1]);return e&&JSON.parse(e)},Nc=()=>{try{return pP()||mP()||gP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Uw=t=>{var e,n;return(n=(e=Nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_P=t=>{const e=Uw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jw=()=>{var t;return(t=Nc())===null||t===void 0?void 0:t.config},Bw=t=>{var e;return(e=Nc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Mu(JSON.stringify(n)),Mu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function vP(){var t;const e=(t=Nc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wP(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $w(){return Lw.NODE_ADMIN===!0}function TP(){return!vP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function IP(){try{return typeof indexedDB=="object"}catch{return!1}}function SP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CP,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fa.prototype.create)}}class Fa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?RP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Zn(i,l,r)}}function RP(t,e){return t.replace(AP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){return JSON.parse(t)}function Xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ea(Vu(s[0])||""),n=Ea(Vu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},PP=function(t){const e=Ww(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kP=function(t){const e=Ww(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ps(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Uu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ey(s)&&Ey(o)){if(!Uu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ey(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Do(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const m=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],c,d;for(let p=0;p<80;p++){p<40?p<20?(c=l^s&(o^l),d=1518500249):(c=s^o^l,d=1859775393):p<60?(c=s&o|l&(s|o),d=2400959708):(c=s^o^l,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[p]&4294967295;u=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function xP(t,e){const n=new DP(t,e);return n.subscribe.bind(n)}class DP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zh),i.error===void 0&&(i.error=Zh),i.complete===void 0&&(i.complete=Zh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zh(){}function bP(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,z(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Kp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FP(e))try{this.getOrInitializeService({instanceIdentifier:ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ti){return this.instances.has(e)}getOptions(e=ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ti){return this.component?this.component.multipleInstances?e:ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VP(t){return t===ti?void 0:t}function FP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const jP={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},BP=te.INFO,zP={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},$P=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=BP,this._logHandler=$P,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const WP=(t,e)=>e.some(n=>t instanceof n);let wy,Ty;function HP(){return wy||(wy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qP(){return Ty||(Ty=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hw=new WeakMap,mf=new WeakMap,qw=new WeakMap,ed=new WeakMap,Qp=new WeakMap;function KP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hw.set(n,t)}).catch(()=>{}),Qp.set(e,t),e}function GP(t){if(mf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});mf.set(t,e)}let gf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QP(t){gf=t(gf)}function YP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(td(this),e,...n);return qw.set(r,e.sort?e.sort():[e]),Pr(r)}:qP().includes(t)?function(...e){return t.apply(td(this),e),Pr(Hw.get(this))}:function(...e){return Pr(t.apply(td(this),e))}}function XP(t){return typeof t=="function"?YP(t):(t instanceof IDBTransaction&&GP(t),WP(t,HP())?new Proxy(t,gf):t)}function Pr(t){if(t instanceof IDBRequest)return KP(t);if(ed.has(t))return ed.get(t);const e=XP(t);return e!==t&&(ed.set(t,e),Qp.set(e,t)),e}const td=t=>Qp.get(t);function JP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Pr(o.result),u.oldVersion,u.newVersion,Pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const ZP=["get","getKey","getAll","getAllKeys","count"],ek=["put","add","delete","clear"],nd=new Map;function Iy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nd.get(e))return nd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ek.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return nd.set(e,s),s}QP(t=>({...t,get:(e,n,r)=>Iy(e,n)||t.get(e,n,r),has:(e,n)=>!!Iy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _f="@firebase/app",Sy="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Dc("@firebase/app"),rk="@firebase/app-compat",ik="@firebase/analytics-compat",sk="@firebase/analytics",ok="@firebase/app-check-compat",ak="@firebase/app-check",lk="@firebase/auth",uk="@firebase/auth-compat",ck="@firebase/database",hk="@firebase/database-compat",dk="@firebase/functions",fk="@firebase/functions-compat",pk="@firebase/installations",mk="@firebase/installations-compat",gk="@firebase/messaging",_k="@firebase/messaging-compat",yk="@firebase/performance",vk="@firebase/performance-compat",Ek="@firebase/remote-config",wk="@firebase/remote-config-compat",Tk="@firebase/storage",Ik="@firebase/storage-compat",Sk="@firebase/firestore",Ck="@firebase/vertexai-preview",Rk="@firebase/firestore-compat",Ak="firebase",Pk="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="[DEFAULT]",kk={[_f]:"fire-core",[rk]:"fire-core-compat",[sk]:"fire-analytics",[ik]:"fire-analytics-compat",[ak]:"fire-app-check",[ok]:"fire-app-check-compat",[lk]:"fire-auth",[uk]:"fire-auth-compat",[ck]:"fire-rtdb",[hk]:"fire-rtdb-compat",[dk]:"fire-fn",[fk]:"fire-fn-compat",[pk]:"fire-iid",[mk]:"fire-iid-compat",[gk]:"fire-fcm",[_k]:"fire-fcm-compat",[yk]:"fire-perf",[vk]:"fire-perf-compat",[Ek]:"fire-rc",[wk]:"fire-rc-compat",[Tk]:"fire-gcs",[Ik]:"fire-gcs-compat",[Sk]:"fire-fst",[Rk]:"fire-fst-compat",[Ck]:"fire-vertex","fire-js":"fire-js",[Ak]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map,Nk=new Map,vf=new Map;function Cy(t,e){try{t.container.addComponent(e)}catch(n){_i.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yi(t){const e=t.name;if(vf.has(e))return _i.debug(`There were multiple attempts to register component ${e}.`),!1;vf.set(e,t);for(const n of ju.values())Cy(n,t);for(const n of Nk.values())Cy(n,t);return!0}function Yp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new Fa("app","Firebase",xk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=Pk;function Kw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(n||(n=jw()),!n)throw kr.create("no-options");const s=ju.get(i);if(s){if(Uu(n,s.options)&&Uu(r,s.config))return s;throw kr.create("duplicate-app",{appName:i})}const o=new UP(i);for(const u of vf.values())o.addComponent(u);const l=new Dk(n,r,o);return ju.set(i,l),l}function Gw(t=yf){const e=ju.get(t);if(!e&&t===yf&&jw())return Kw();if(!e)throw kr.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let i=(r=kk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_i.warn(l.join(" "));return}yi(new Lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="firebase-heartbeat-database",bk=1,wa="firebase-heartbeat-store";let rd=null;function Qw(){return rd||(rd=JP(Ok,bk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wa)}catch(n){console.warn(n)}}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),rd}async function Lk(t){try{const n=(await Qw()).transaction(wa),r=await n.objectStore(wa).get(Yw(t));return await n.done,r}catch(e){if(e instanceof Zn)_i.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_i.warn(n.message)}}}async function Ry(t,e){try{const r=(await Qw()).transaction(wa,"readwrite");await r.objectStore(wa).put(e,Yw(t)),await r.done}catch(n){if(n instanceof Zn)_i.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_i.warn(r.message)}}}function Yw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=1024,Vk=30*24*60*60*1e3;class Fk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ay();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Vk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ay(),{heartbeatsToSend:r,unsentEntries:i}=Uk(this._heartbeatsCache.heartbeats),s=Mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ay(){return new Date().toISOString().substring(0,10)}function Uk(t,e=Mk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Py(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Py(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IP()?SP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Lk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Py(t){return Mu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){yi(new Lr("platform-logger",e=>new tk(e),"PRIVATE")),yi(new Lr("heartbeat",e=>new Fk(e),"PRIVATE")),_n(_f,Sy,t),_n(_f,Sy,"esm2017"),_n("fire-js","")}Bk("");function Xp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Xw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zk=Xw,Jw=new Fa("auth","Firebase",Xw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Dc("@firebase/auth");function $k(t,...e){Bu.logLevel<=te.WARN&&Bu.warn(`Auth (${Di}): ${t}`,...e)}function ru(t,...e){Bu.logLevel<=te.ERROR&&Bu.error(`Auth (${Di}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw Jp(t,...e)}function yn(t,...e){return Jp(t,...e)}function Zw(t,e,n){const r=Object.assign(Object.assign({},zk()),{[e]:n});return new Fa("auth","Firebase",r).create(e,{appName:t.name})}function $n(t){return Zw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jw.create(t,...e)}function G(t,e,...n){if(!t)throw Jp(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ru(e),new Error(e)}function Qn(t,e){t||Vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wk(){return ky()==="http:"||ky()==="https:"}function ky(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wk()||EP()||"connection"in navigator)?navigator.onLine:!0}function qk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=Gp()||zw()}get(){return Hk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=new Ua(3e4,6e4);function Hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qr(t,e,n,r,i={}){return tT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Hs(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),eT.fetch()(nT(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function tT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kk),e);try{const i=new Yk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ml(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ml(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ml(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ml(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zw(t,d,c);ln(t,d)}}catch(i){if(i instanceof Zn)throw i;ln(t,"network-request-failed",{message:String(i)})}}async function ja(t,e,n,r,i={}){const s=await qr(t,e,n,r,i);return"mfaPendingCredential"in s&&ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zp(t.config,i):`${t.config.apiScheme}://${i}`}function Qk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),Gk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(t,e,r);return i.customData._tokenResponse=n,i}function Ny(t){return t!==void 0&&t.enterprise!==void 0}class Xk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Qk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Jk(t,e){return qr(t,"GET","/v2/recaptchaConfig",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function rT(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eN(t,e=!1){const n=gt(t),r=await n.getIdToken(e),i=em(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qo(id(i.auth_time)),issuedAtTime:qo(id(i.iat)),expirationTime:qo(id(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function id(t){return Number(t)*1e3}function em(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ru("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vu(n);return i?JSON.parse(i):(ru("Failed to decode base64 JWT payload"),null)}catch(i){return ru("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xy(t){const e=em(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&tN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qo(this.lastLoginAt),this.creationTime=qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ta(t,rT(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?iT(s.providerUserInfo):[],l=iN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new wf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function rN(t){const e=gt(t);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iT(t){return t.map(e=>{var{providerId:n}=e,r=Xp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(t,e){const n=await tT(t,{},async()=>{const r=Hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",eT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oN(t,e){return qr(t,"POST","/v2/accounts:revokeToken",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=xy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await sN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ms;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ta(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eN(this,e)}reload(){return rN(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await Ta(this,Zk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:R,emailVerified:b,isAnonymous:U,providerData:B,stsTokenManager:w}=n;G(R&&w,e,"internal-error");const _=ms.fromJSON(this.name,w);G(typeof R=="string",e,"internal-error"),or(p,e.name),or(m,e.name),G(typeof b=="boolean",e,"internal-error"),G(typeof U=="boolean",e,"internal-error"),or(v,e.name),or(C,e.name),or(P,e.name),or(N,e.name),or(T,e.name),or(y,e.name);const E=new Fn({uid:R,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:U,photoURL:C,phoneNumber:v,tenantId:P,stsTokenManager:_,createdAt:T,lastLoginAt:y});return B&&Array.isArray(B)&&(E.providerData=B.map(I=>Object.assign({},I))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new ms;i.updateFromServerResponse(n);const s=new Fn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?iT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ms;l.updateFromIdToken(r);const u=new Fn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=new Map;function Un(t){Qn(t instanceof Function,"Expected a class definition");let e=Dy.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sT.type="NONE";const Oy=sT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=iu(this.userKey,i.apiKey,s),this.fullPersistenceKey=iu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(Un(Oy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Un(Oy);const o=iu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Fn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new gs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new gs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cT(e))return"Blackberry";if(hT(e))return"Webos";if(tm(e))return"Safari";if((e.includes("chrome/")||aT(e))&&!e.includes("edge/"))return"Chrome";if(uT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oT(t=nt()){return/firefox\//i.test(t)}function tm(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aT(t=nt()){return/crios\//i.test(t)}function lT(t=nt()){return/iemobile/i.test(t)}function uT(t=nt()){return/android/i.test(t)}function cT(t=nt()){return/blackberry/i.test(t)}function hT(t=nt()){return/webos/i.test(t)}function Oc(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aN(t=nt()){var e;return Oc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lN(){return wP()&&document.documentMode===10}function dT(t=nt()){return Oc(t)||uT(t)||hT(t)||cT(t)||/windows phone/i.test(t)||lT(t)}function uN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t,e=[]){let n;switch(t){case"Browser":n=by(nt());break;case"Worker":n=`${by(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Di}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e={}){return qr(t,"GET","/v2/passwordPolicy",Hr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=6;class fN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ly(this),this.idTokenSubscription=new Ly(this),this.beforeStateQueue=new cN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rT(this,{idToken:e}),r=await Fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject($n(this));const n=e?gt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hN(this),n=new fN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$k(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Oi(t){return gt(t)}class Ly{constructor(e){this.auth=e,this.observer=null,this.addObserver=xP(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mN(t){bc=t}function pT(t){return bc.loadJS(t)}function gN(){return bc.recaptchaEnterpriseScript}function _N(){return bc.gapiScript}function yN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vN="recaptcha-enterprise",EN="NO_RECAPTCHA";class wN{constructor(e){this.type=vN,this.auth=Oi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Jk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Xk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Ny(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(EN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Ny(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=gN();u.length!==0&&(u+=l),pT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function My(t,e,n,r=!1){const i=new wN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Tf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await My(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await My(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t,e){const n=Yp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Uu(s,e??{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function IN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function SN(t,e,n){const r=Oi(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=mT(e),{host:o,port:l}=CN(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),RN()}function mT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CN(t){const e=mT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vy(o)}}}function Vy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function AN(t,e){return qr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e){return ja(t,"POST","/v1/accounts:signInWithPassword",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kN(t,e){return ja(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}async function NN(t,e){return ja(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends nm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ia(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ia(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tf(e,n,"signInWithPassword",PN);case"emailLink":return kN(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tf(e,r,"signUpPassword",AN);case"emailLink":return NN(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e){return ja(t,"POST","/v1/accounts:signInWithIdp",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN="http://localhost";class vi extends nm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:xN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ON(t){const e=Do(Oo(t)).link,n=e?Do(Oo(e)).deep_link_id:null,r=Do(Oo(t)).deep_link_id;return(r?Do(Oo(r)).link:null)||r||n||e||t}class rm{constructor(e){var n,r,i,s,o,l;const u=Do(Oo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=DN((i=u.mode)!==null&&i!==void 0?i:null);G(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ON(e);try{return new rm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.providerId=qs.PROVIDER_ID}static credential(e,n){return Ia._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rm.parseLink(n);return G(r,"argument-error"),Ia._fromEmailAndCode(e,r.code,r.tenantId)}}qs.PROVIDER_ID="password";qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends gT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ba{constructor(){super("facebook.com")}static credential(e){return vi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ba{constructor(){super("github.com")}static credential(e){return vi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ba{constructor(){super("twitter.com")}static credential(e,n){return vi._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,e){return ja(t,"POST","/v1/accounts:signUp",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Fn._fromIdTokenResponse(e,r,i),o=Fy(r);return new Ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Fy(r);return new Ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Fy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends Zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$u.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $u(e,n,r,i)}}function _T(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$u._fromErrorAndOperation(t,s,e,r):s})}async function LN(t,e,n=!1){const r=await Ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(t,e,n=!1){const{auth:r}=t;if(fn(r.app))return Promise.reject($n(r));const i="reauthenticate";try{const s=await Ta(t,_T(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=em(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(t,e,n=!1){if(fn(t.app))return Promise.reject($n(t));const r="signIn",i=await _T(t,r,e),s=await Ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function VN(t,e){return yT(Oi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(t){const e=Oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FN(t,e,n){if(fn(t.app))return Promise.reject($n(t));const r=Oi(t),o=await Tf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&vT(t),u}),l=await Ei._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function UN(t,e,n){return fn(t.app)?Promise.reject($n(t)):VN(gt(t),qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vT(t),r})}function jN(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function BN(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function zN(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}const Wu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wu,"1"),this.storage.removeItem(Wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(){const t=nt();return tm(t)||Oc(t)}const WN=1e3,HN=10;class wT extends ET{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$N()&&uN(),this.fallbackToPolling=dT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,HN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wT.type="LOCAL";const qN=wT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT extends ET{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}TT.type="SESSION";const IT=TT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await KN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=im("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function QN(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function YN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JN(){return ST()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="firebaseLocalStorageDb",ZN=1,Hu="firebaseLocalStorage",RT="fbase_key";class za{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mc(t,e){return t.transaction([Hu],e?"readwrite":"readonly").objectStore(Hu)}function ex(){const t=indexedDB.deleteDatabase(CT);return new za(t).toPromise()}function If(){const t=indexedDB.open(CT,ZN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hu,{keyPath:RT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hu)?e(r):(r.close(),await ex(),e(await If()))})})}async function Uy(t,e,n){const r=Mc(t,!0).put({[RT]:e,value:n});return new za(r).toPromise()}async function tx(t,e){const n=Mc(t,!1).get(e),r=await new za(n).toPromise();return r===void 0?null:r.value}function jy(t,e){const n=Mc(t,!0).delete(e);return new za(n).toPromise()}const nx=800,rx=3;class AT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await If(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ST()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lc._getInstance(JN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await YN(),!this.activeServiceWorker)return;this.sender=new GN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await If();return await Uy(e,Wu,"1"),await jy(e,Wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Mc(i,!1).getAll();return new za(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AT.type="LOCAL";const ix=AT;new Ua(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t,e){return e?Un(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends nm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ox(t){return yT(t.auth,new sm(t),t.bypassAuthState)}function ax(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),MN(n,new sm(t),t.bypassAuthState)}async function lx(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),LN(n,new sm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ox;case"linkViaPopup":case"linkViaRedirect":return lx;case"reauthViaPopup":case"reauthViaRedirect":return ax;default:ln(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=new Ua(2e3,1e4);class os extends PT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ux.get())};e()}}os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx="pendingRedirect",su=new Map;class hx extends PT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=su.get(this.auth._key());if(!e){try{const r=await dx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}su.set(this.auth._key(),e)}return this.bypassAuthState||su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dx(t,e){const n=mx(e),r=px(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fx(t,e){su.set(t._key(),e)}function px(t){return Un(t._redirectPersistence)}function mx(t){return iu(cx,t.config.apiKey,t.name)}async function gx(t,e,n=!1){if(fn(t.app))return Promise.reject($n(t));const r=Oi(t),i=sx(r,e),o=await new hx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=10*60*1e3;class yx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_x&&this.cachedEventUids.clear(),this.cachedEventUids.has(By(e))}saveEventToCache(e){this.cachedEventUids.add(By(e)),this.lastProcessedEventTime=Date.now()}}function By(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex(t,e={}){return qr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tx=/^https?/;async function Ix(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ex(t);for(const n of e)try{if(Sx(n))return}catch{}ln(t,"unauthorized-domain")}function Sx(t){const e=Ef(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Tx.test(n))return!1;if(wx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=new Ua(3e4,6e4);function zy(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Rx(t){return new Promise((e,n)=>{var r,i,s;function o(){zy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zy(),n(yn(t,"network-request-failed"))},timeout:Cx.get()})}if(!((i=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vn().gapi)===null||s===void 0)&&s.load)o();else{const l=yN("iframefcb");return vn()[l]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},pT(`${_N()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ou=null,e})}let ou=null;function Ax(t){return ou=ou||Rx(t),ou}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=new Ua(5e3,15e3),kx="__/auth/iframe",Nx="emulator/auth/iframe",xx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ox(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zp(e,Nx):`https://${t.config.authDomain}/${kx}`,r={apiKey:e.apiKey,appName:t.name,v:Di},i=Dx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hs(r).slice(1)}`}async function bx(t){const e=await Ax(t),n=vn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Ox(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),l=vn().setTimeout(()=>{s(o)},Px.get());function u(){vn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mx=500,Vx=600,Fx="_blank",Ux="http://localhost";class $y{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jx(t,e,n,r=Mx,i=Vx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Lx),{width:r.toString(),height:i.toString(),top:s,left:o}),c=nt().toLowerCase();n&&(l=aT(c)?Fx:n),oT(c)&&(e=e||Ux,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[v,C])=>`${m}${v}=${C},`,"");if(aN(c)&&l!=="_self")return Bx(e||"",l),new $y(null);const p=window.open(e||"",l,d);G(p,t,"popup-blocked");try{p.focus()}catch{}return new $y(p)}function Bx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx="__/auth/handler",$x="emulator/auth/handler",Wx=encodeURIComponent("fac");async function Wy(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Di,eventId:i};if(e instanceof gT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ba){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Wx}=${encodeURIComponent(u)}`:"";return`${Hx(t)}?${Hs(l).slice(1)}${c}`}function Hx({config:t}){return t.emulator?Zp(t,$x):`https://${t.authDomain}/${zx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="webStorageSupport";class qx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=IT,this._completeRedirectFn=gx,this._overrideRedirectResult=fx}async _openPopup(e,n,r,i){var s;Qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Wy(e,n,r,Ef(),i);return jx(e,o,im())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Wy(e,n,r,Ef(),i);return QN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bx(e),r=new yx(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sd,{type:sd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sd];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ix(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dT()||tm()||Oc()}}const Kx=qx;var Hy="@firebase/auth",qy="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yx(t){yi(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fT(t)},c=new pN(r,i,s,u);return IN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yi(new Lr("auth-internal",e=>{const n=Oi(e.getProvider("auth").getImmediate());return(r=>new Gx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Hy,qy,Qx(t)),_n(Hy,qy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=5*60,Jx=Bw("authIdTokenMaxAge")||Xx;let Ky=null;const Zx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Jx)return;const i=n==null?void 0:n.token;Ky!==i&&(Ky=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eD(t=Gw()){const e=Yp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TN(t,{popupRedirectResolver:Kx,persistence:[ix,qN,IT]}),r=Bw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Zx(s.toString());BN(n,o,()=>o(n.currentUser)),jN(n,l=>o(l))}}const i=Uw("auth");return i&&SN(n,`http://${i}`),n}function tD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yx("Browser");const tr=L.createContext();var nD="firebase",rD="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n(nD,rD,"app");var Gy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hi,NT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function E(){}E.prototype=_.prototype,w.D=_.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(I,A,D){for(var S=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)S[Bt-2]=arguments[Bt];return _.prototype[A].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,E){E||(E=0);var I=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)I[A]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(A=0;16>A;++A)I[A]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=w.g[0],E=w.g[1],A=w.g[2];var D=w.g[3],S=_+(D^E&(A^D))+I[0]+3614090360&4294967295;_=E+(S<<7&4294967295|S>>>25),S=D+(A^_&(E^A))+I[1]+3905402710&4294967295,D=_+(S<<12&4294967295|S>>>20),S=A+(E^D&(_^E))+I[2]+606105819&4294967295,A=D+(S<<17&4294967295|S>>>15),S=E+(_^A&(D^_))+I[3]+3250441966&4294967295,E=A+(S<<22&4294967295|S>>>10),S=_+(D^E&(A^D))+I[4]+4118548399&4294967295,_=E+(S<<7&4294967295|S>>>25),S=D+(A^_&(E^A))+I[5]+1200080426&4294967295,D=_+(S<<12&4294967295|S>>>20),S=A+(E^D&(_^E))+I[6]+2821735955&4294967295,A=D+(S<<17&4294967295|S>>>15),S=E+(_^A&(D^_))+I[7]+4249261313&4294967295,E=A+(S<<22&4294967295|S>>>10),S=_+(D^E&(A^D))+I[8]+1770035416&4294967295,_=E+(S<<7&4294967295|S>>>25),S=D+(A^_&(E^A))+I[9]+2336552879&4294967295,D=_+(S<<12&4294967295|S>>>20),S=A+(E^D&(_^E))+I[10]+4294925233&4294967295,A=D+(S<<17&4294967295|S>>>15),S=E+(_^A&(D^_))+I[11]+2304563134&4294967295,E=A+(S<<22&4294967295|S>>>10),S=_+(D^E&(A^D))+I[12]+1804603682&4294967295,_=E+(S<<7&4294967295|S>>>25),S=D+(A^_&(E^A))+I[13]+4254626195&4294967295,D=_+(S<<12&4294967295|S>>>20),S=A+(E^D&(_^E))+I[14]+2792965006&4294967295,A=D+(S<<17&4294967295|S>>>15),S=E+(_^A&(D^_))+I[15]+1236535329&4294967295,E=A+(S<<22&4294967295|S>>>10),S=_+(A^D&(E^A))+I[1]+4129170786&4294967295,_=E+(S<<5&4294967295|S>>>27),S=D+(E^A&(_^E))+I[6]+3225465664&4294967295,D=_+(S<<9&4294967295|S>>>23),S=A+(_^E&(D^_))+I[11]+643717713&4294967295,A=D+(S<<14&4294967295|S>>>18),S=E+(D^_&(A^D))+I[0]+3921069994&4294967295,E=A+(S<<20&4294967295|S>>>12),S=_+(A^D&(E^A))+I[5]+3593408605&4294967295,_=E+(S<<5&4294967295|S>>>27),S=D+(E^A&(_^E))+I[10]+38016083&4294967295,D=_+(S<<9&4294967295|S>>>23),S=A+(_^E&(D^_))+I[15]+3634488961&4294967295,A=D+(S<<14&4294967295|S>>>18),S=E+(D^_&(A^D))+I[4]+3889429448&4294967295,E=A+(S<<20&4294967295|S>>>12),S=_+(A^D&(E^A))+I[9]+568446438&4294967295,_=E+(S<<5&4294967295|S>>>27),S=D+(E^A&(_^E))+I[14]+3275163606&4294967295,D=_+(S<<9&4294967295|S>>>23),S=A+(_^E&(D^_))+I[3]+4107603335&4294967295,A=D+(S<<14&4294967295|S>>>18),S=E+(D^_&(A^D))+I[8]+1163531501&4294967295,E=A+(S<<20&4294967295|S>>>12),S=_+(A^D&(E^A))+I[13]+2850285829&4294967295,_=E+(S<<5&4294967295|S>>>27),S=D+(E^A&(_^E))+I[2]+4243563512&4294967295,D=_+(S<<9&4294967295|S>>>23),S=A+(_^E&(D^_))+I[7]+1735328473&4294967295,A=D+(S<<14&4294967295|S>>>18),S=E+(D^_&(A^D))+I[12]+2368359562&4294967295,E=A+(S<<20&4294967295|S>>>12),S=_+(E^A^D)+I[5]+4294588738&4294967295,_=E+(S<<4&4294967295|S>>>28),S=D+(_^E^A)+I[8]+2272392833&4294967295,D=_+(S<<11&4294967295|S>>>21),S=A+(D^_^E)+I[11]+1839030562&4294967295,A=D+(S<<16&4294967295|S>>>16),S=E+(A^D^_)+I[14]+4259657740&4294967295,E=A+(S<<23&4294967295|S>>>9),S=_+(E^A^D)+I[1]+2763975236&4294967295,_=E+(S<<4&4294967295|S>>>28),S=D+(_^E^A)+I[4]+1272893353&4294967295,D=_+(S<<11&4294967295|S>>>21),S=A+(D^_^E)+I[7]+4139469664&4294967295,A=D+(S<<16&4294967295|S>>>16),S=E+(A^D^_)+I[10]+3200236656&4294967295,E=A+(S<<23&4294967295|S>>>9),S=_+(E^A^D)+I[13]+681279174&4294967295,_=E+(S<<4&4294967295|S>>>28),S=D+(_^E^A)+I[0]+3936430074&4294967295,D=_+(S<<11&4294967295|S>>>21),S=A+(D^_^E)+I[3]+3572445317&4294967295,A=D+(S<<16&4294967295|S>>>16),S=E+(A^D^_)+I[6]+76029189&4294967295,E=A+(S<<23&4294967295|S>>>9),S=_+(E^A^D)+I[9]+3654602809&4294967295,_=E+(S<<4&4294967295|S>>>28),S=D+(_^E^A)+I[12]+3873151461&4294967295,D=_+(S<<11&4294967295|S>>>21),S=A+(D^_^E)+I[15]+530742520&4294967295,A=D+(S<<16&4294967295|S>>>16),S=E+(A^D^_)+I[2]+3299628645&4294967295,E=A+(S<<23&4294967295|S>>>9),S=_+(A^(E|~D))+I[0]+4096336452&4294967295,_=E+(S<<6&4294967295|S>>>26),S=D+(E^(_|~A))+I[7]+1126891415&4294967295,D=_+(S<<10&4294967295|S>>>22),S=A+(_^(D|~E))+I[14]+2878612391&4294967295,A=D+(S<<15&4294967295|S>>>17),S=E+(D^(A|~_))+I[5]+4237533241&4294967295,E=A+(S<<21&4294967295|S>>>11),S=_+(A^(E|~D))+I[12]+1700485571&4294967295,_=E+(S<<6&4294967295|S>>>26),S=D+(E^(_|~A))+I[3]+2399980690&4294967295,D=_+(S<<10&4294967295|S>>>22),S=A+(_^(D|~E))+I[10]+4293915773&4294967295,A=D+(S<<15&4294967295|S>>>17),S=E+(D^(A|~_))+I[1]+2240044497&4294967295,E=A+(S<<21&4294967295|S>>>11),S=_+(A^(E|~D))+I[8]+1873313359&4294967295,_=E+(S<<6&4294967295|S>>>26),S=D+(E^(_|~A))+I[15]+4264355552&4294967295,D=_+(S<<10&4294967295|S>>>22),S=A+(_^(D|~E))+I[6]+2734768916&4294967295,A=D+(S<<15&4294967295|S>>>17),S=E+(D^(A|~_))+I[13]+1309151649&4294967295,E=A+(S<<21&4294967295|S>>>11),S=_+(A^(E|~D))+I[4]+4149444226&4294967295,_=E+(S<<6&4294967295|S>>>26),S=D+(E^(_|~A))+I[11]+3174756917&4294967295,D=_+(S<<10&4294967295|S>>>22),S=A+(_^(D|~E))+I[2]+718787259&4294967295,A=D+(S<<15&4294967295|S>>>17),S=E+(D^(A|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+D&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var E=_-this.blockSize,I=this.B,A=this.h,D=0;D<_;){if(A==0)for(;D<=E;)i(this,w,D),D+=this.blockSize;if(typeof w=="string"){for(;D<_;)if(I[A++]=w.charCodeAt(D++),A==this.blockSize){i(this,I),A=0;break}}else for(;D<_;)if(I[A++]=w[D++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var E=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=E&255,E/=256;for(this.u(w),w=Array(16),_=E=0;4>_;++_)for(var I=0;32>I;I+=8)w[E++]=this.g[_]>>>I&255;return w};function s(w,_){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=_(w)}function o(w,_){this.h=_;for(var E=[],I=!0,A=w.length-1;0<=A;A--){var D=w[A]|0;I&&D==_||(E[A]=D,I=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return N(c(-w));for(var _=[],E=1,I=0;w>=E;I++)_[I]=w/E|0,E*=4294967296;return new o(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return N(d(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(_,8)),I=p,A=0;A<w.length;A+=8){var D=Math.min(8,w.length-A),S=parseInt(w.substring(A,A+D),_);8>D?(D=c(Math.pow(_,D)),I=I.j(D).add(c(S))):(I=I.j(E),I=I.add(c(S)))}return I}var p=u(0),m=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var w=0,_=1,E=0;E<this.g.length;E++){var I=this.i(E);w+=(0<=I?I:4294967296+I)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(P(this))return"-"+N(this).toString(w);for(var _=c(Math.pow(w,6)),E=this,I="";;){var A=b(E,_).g;E=T(E,A.j(_));var D=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=A,C(E))return D+I;for(;6>D.length;)D="0"+D;I=D+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=T(this,w),P(w)?-1:C(w)?0:1};function N(w){for(var _=w.g.length,E=[],I=0;I<_;I++)E[I]=~w.g[I];return new o(E,~w.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],I=0,A=0;A<=_;A++){var D=I+(this.i(A)&65535)+(w.i(A)&65535),S=(D>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=S>>>16,D&=65535,S&=65535,E[A]=S<<16|D}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(w,_){return w.add(N(_))}t.j=function(w){if(C(this)||C(w))return p;if(P(this))return P(w)?N(this).j(N(w)):N(N(this).j(w));if(P(w))return N(this.j(N(w)));if(0>this.l(v)&&0>w.l(v))return c(this.m()*w.m());for(var _=this.g.length+w.g.length,E=[],I=0;I<2*_;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var D=this.i(I)>>>16,S=this.i(I)&65535,Bt=w.i(A)>>>16,Gr=w.i(A)&65535;E[2*I+2*A]+=S*Gr,y(E,2*I+2*A),E[2*I+2*A+1]+=D*Gr,y(E,2*I+2*A+1),E[2*I+2*A+1]+=S*Bt,y(E,2*I+2*A+1),E[2*I+2*A+2]+=D*Bt,y(E,2*I+2*A+2)}for(I=0;I<_;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=_;I<2*_;I++)E[I]=0;return new o(E,0)};function y(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function R(w,_){this.g=w,this.h=_}function b(w,_){if(C(_))throw Error("division by zero");if(C(w))return new R(p,p);if(P(w))return _=b(N(w),_),new R(N(_.g),N(_.h));if(P(_))return _=b(w,N(_)),new R(N(_.g),_.h);if(30<w.g.length){if(P(w)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=_;0>=I.l(w);)E=U(E),I=U(I);var A=B(E,1),D=B(I,1);for(I=B(I,2),E=B(E,2);!C(I);){var S=D.add(I);0>=S.l(w)&&(A=A.add(E),D=S),I=B(I,1),E=B(E,1)}return _=T(w,A.j(_)),new R(A,_)}for(A=p;0<=w.l(_);){for(E=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),D=c(E),S=D.j(_);P(S)||0<S.l(w);)E-=I,D=c(E),S=D.j(_);C(D)&&(D=m),A=A.add(D),w=T(w,S)}return new R(A,w)}t.A=function(w){return b(this,w).h},t.and=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)&w.i(I);return new o(E,this.h&w.h)},t.or=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)|w.i(I);return new o(E,this.h|w.h)},t.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)^w.i(I);return new o(E,this.h^w.h)};function U(w){for(var _=w.g.length+1,E=[],I=0;I<_;I++)E[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(E,w.h)}function B(w,_){var E=_>>5;_%=32;for(var I=w.g.length-E,A=[],D=0;D<I;D++)A[D]=0<_?w.i(D+E)>>>_|w.i(D+E+1)<<32-_:w.i(D+E);return new o(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,NT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,hi=o}).apply(typeof Gy<"u"?Gy:typeof self<"u"?self:typeof window<"u"?window:{});var Vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xT,DT,bo,OT,au,Sf,bT,LT,MT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vl=="object"&&Vl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,x={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,x,O){for(var j=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)j[pe-2]=arguments[pe];return h.prototype[x].apply(g,j)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const x=a.length||0,O=g.length||0;a.length=x+O;for(let j=0;j<O;j++)a[x+j]=g[j]}else a.push(g)}}class T{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var U=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function B(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let O=0;O<E.length;O++)f=E[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function D(a){l.setTimeout(()=>{throw a},0)}function S(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Bt{constructor(){this.h=this.g=null}add(h,f){const g=Gr.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Gr=new T(()=>new Zs,a=>a.reset());class Zs{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Cn,$=!1,Q=new Bt,Z=()=>{const a=l.Promise.resolve(void 0);Cn=()=>{a.then(Se)}};var Se=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){D(f)}var h=Gr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Rn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function An(a,h){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(U){e:{try{b(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&An.aa.h.call(this)}}C(An,xe);var Pn={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),h1=0;function d1(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++h1,this.da=this.fa=!1}function nl(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function rl(a){this.src=a,this.g={},this.h=0}rl.prototype.add=function(a,h,f,g,x){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var j=ih(a,h,g,x);return-1<j?(h=a[j],f||(h.fa=!1)):(h=new d1(h,this.src,O,!!g,x),h.fa=f,a.push(h)),h};function rh(a,h){var f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=x)&&Array.prototype.splice.call(g,x,1),O&&(nl(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ih(a,h,f,g){for(var x=0;x<a.length;++x){var O=a[x];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return x}return-1}var sh="closure_lm_"+(1e6*Math.random()|0),oh={};function rg(a,h,f,g,x){if(Array.isArray(h)){for(var O=0;O<h.length;O++)rg(a,h[O],f,g,x);return null}return f=og(f),a&&a[kn]?a.K(h,f,c(g)?!!g.capture:!!g,x):f1(a,h,f,!1,g,x)}function f1(a,h,f,g,x,O){if(!h)throw Error("Invalid event type");var j=c(x)?!!x.capture:!!x,pe=lh(a);if(pe||(a[sh]=pe=new rl(a)),f=pe.add(h,f,g,j,O),f.proxy)return f;if(g=p1(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Rn||(x=j),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(sg(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function p1(){function a(f){return h.call(a.src,a.listener,f)}const h=m1;return a}function ig(a,h,f,g,x){if(Array.isArray(h))for(var O=0;O<h.length;O++)ig(a,h[O],f,g,x);else g=c(g)?!!g.capture:!!g,f=og(f),a&&a[kn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=ih(O,f,g,x),-1<f&&(nl(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=lh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ih(h,f,g,x)),(f=-1<a?h[a]:null)&&ah(f))}function ah(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[kn])rh(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(sg(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=lh(h))?(rh(f,a),f.h==0&&(f.src=null,h[sh]=null)):nl(a)}}}function sg(a){return a in oh?oh[a]:oh[a]="on"+a}function m1(a,h){if(a.da)a=!0;else{h=new An(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&ah(a),a=f.call(g,h)}return a}function lh(a){return a=a[sh],a instanceof rl?a:null}var uh="__closure_events_fn_"+(1e9*Math.random()>>>0);function og(a){return typeof a=="function"?a:(a[uh]||(a[uh]=function(h){return a.handleEvent(h)}),a[uh])}function rt(){fe.call(this),this.i=new rl(this),this.M=this,this.F=null}C(rt,fe),rt.prototype[kn]=!0,rt.prototype.removeEventListener=function(a,h,f,g){ig(this,a,h,f,g)};function yt(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new xe(h,a);else if(h instanceof xe)h.target=h.target||a;else{var x=h;h=new xe(g,a),I(h,x)}if(x=!0,f)for(var O=f.length-1;0<=O;O--){var j=h.g=f[O];x=il(j,g,!0,h)&&x}if(j=h.g=a,x=il(j,g,!0,h)&&x,x=il(j,g,!1,h)&&x,f)for(O=0;O<f.length;O++)j=h.g=f[O],x=il(j,g,!1,h)&&x}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)nl(f[g]);delete a.g[h],a.h--}}this.F=null},rt.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},rt.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function il(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,O=0;O<h.length;++O){var j=h[O];if(j&&!j.da&&j.capture==f){var pe=j.listener,Ge=j.ha||j.src;j.fa&&rh(a.i,j),x=pe.call(Ge,g)!==!1&&x}}return x&&!g.defaultPrevented}function ag(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function lg(a){a.g=ag(()=>{a.g=null,a.i&&(a.i=!1,lg(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class g1 extends fe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:lg(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eo(a){fe.call(this),this.h=a,this.g={}}C(eo,fe);var ug=[];function cg(a){B(a.g,function(h,f){this.g.hasOwnProperty(f)&&ah(h)},a),a.g={}}eo.prototype.N=function(){eo.aa.N.call(this),cg(this)},eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ch=l.JSON.stringify,_1=l.JSON.parse,y1=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function hh(){}hh.prototype.h=null;function hg(a){return a.h||(a.h=a.i())}function dg(){}var to={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dh(){xe.call(this,"d")}C(dh,xe);function fh(){xe.call(this,"c")}C(fh,xe);var Qr={},fg=null;function sl(){return fg=fg||new rt}Qr.La="serverreachability";function pg(a){xe.call(this,Qr.La,a)}C(pg,xe);function no(a){const h=sl();yt(h,new pg(h))}Qr.STAT_EVENT="statevent";function mg(a,h){xe.call(this,Qr.STAT_EVENT,a),this.stat=h}C(mg,xe);function vt(a){const h=sl();yt(h,new mg(h,a))}Qr.Ma="timingevent";function gg(a,h){xe.call(this,Qr.Ma,a),this.size=h}C(gg,xe);function ro(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function io(){this.g=!0}io.prototype.xa=function(){this.g=!1};function v1(a,h,f,g,x,O){a.info(function(){if(a.g)if(O)for(var j="",pe=O.split("&"),Ge=0;Ge<pe.length;Ge++){var le=pe[Ge].split("=");if(1<le.length){var it=le[0];le=le[1];var st=it.split("_");j=2<=st.length&&st[1]=="type"?j+(it+"="+le+"&"):j+(it+"=redacted&")}}else j=null;else j=O;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+j})}function E1(a,h,f,g,x,O,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+O+" "+j})}function Ui(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+T1(a,f)+(g?" "+g:"")})}function w1(a,h){a.info(function(){return"TIMEOUT: "+h})}io.prototype.info=function(){};function T1(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var O=x[0];if(O!="noop"&&O!="stop"&&O!="close")for(var j=1;j<x.length;j++)x[j]=""}}}}return ch(f)}catch{return h}}var ol={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_g={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ph;function al(){}C(al,hh),al.prototype.g=function(){return new XMLHttpRequest},al.prototype.i=function(){return{}},ph=new al;function nr(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new eo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yg}function yg(){this.i=null,this.g="",this.h=!1}var vg={},mh={};function gh(a,h,f){a.L=1,a.v=hl(Nn(h)),a.m=f,a.P=!0,Eg(a,null)}function Eg(a,h){a.F=Date.now(),ll(a),a.A=Nn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),bg(f.i,"t",g),a.C=0,f=a.j.J,a.h=new yg,a.g=Jg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new g1(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(ug[0]=x.toString()),x=ug);for(var O=0;O<x.length;O++){var j=rg(f,x[O],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),no(),v1(a.i,a.u,a.A,a.l,a.R,a.m)}nr.prototype.ca=function(a){a=a.target;const h=this.M;h&&xn(a)==3?h.j():this.Y(a)},nr.prototype.Y=function(a){try{if(a==this.g)e:{const st=xn(this.g);var h=this.g.Ba();const zi=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Bg(this.g)))){this.J||st!=4||h==7||(h==8||0>=zi?no(3):no(2)),_h(this);var f=this.g.Z();this.X=f;t:if(wg(this)){var g=Bg(this.g);a="";var x=g.length,O=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yr(this),so(this);var j="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==x-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,E1(this.i,this.u,this.A,this.l,this.R,st,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ge=this.g;if((pe=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(pe)){var le=pe;break t}}le=null}if(f=le)Ui(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yh(this,f);else{this.o=!1,this.s=3,vt(12),Yr(this),so(this);break e}}if(this.P){f=!0;let Yt;for(;!this.J&&this.C<j.length;)if(Yt=I1(this,j),Yt==mh){st==4&&(this.s=4,vt(14),f=!1),Ui(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==vg){this.s=4,vt(15),Ui(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else Ui(this.i,this.l,Yt,null),yh(this,Yt);if(wg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||j.length!=0||this.h.h||(this.s=1,vt(16),f=!1),this.o=this.o&&f,!f)Ui(this.i,this.l,j,"[Invalid Chunked Response]"),Yr(this),so(this);else if(0<j.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Sh(it),it.M=!0,vt(11))}}else Ui(this.i,this.l,j,null),yh(this,j);st==4&&Yr(this),this.o&&!this.J&&(st==4?Gg(this.j,this):(this.o=!1,ll(this)))}else j1(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Yr(this),so(this)}}}catch{}finally{}};function wg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function I1(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?mh:(f=Number(h.substring(f,g)),isNaN(f)?vg:(g+=1,g+f>h.length?mh:(h=h.slice(g,g+f),a.C=g+f,h)))}nr.prototype.cancel=function(){this.J=!0,Yr(this)};function ll(a){a.S=Date.now()+a.I,Tg(a,a.I)}function Tg(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ro(m(a.ba,a),h)}function _h(a){a.B&&(l.clearTimeout(a.B),a.B=null)}nr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(w1(this.i,this.A),this.L!=2&&(no(),vt(17)),Yr(this),this.s=2,so(this)):Tg(this,this.S-a)};function so(a){a.j.G==0||a.J||Gg(a.j,a)}function Yr(a){_h(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,cg(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function yh(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||vh(f.h,a))){if(!a.K&&vh(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)gl(f),pl(f);else break e;Ih(f),vt(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=ro(m(f.Za,f),6e3));if(1>=Cg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Jr(f,11)}else if((a.K||f.g==a)&&gl(f),!y(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let le=x[h];if(f.T=le[0],le=le[1],f.G==2)if(le[0]=="c"){f.K=le[1],f.ia=le[2];const it=le[3];it!=null&&(f.la=it,f.j.info("VER="+f.la));const st=le[4];st!=null&&(f.Aa=st,f.j.info("SVER="+f.Aa));const zi=le[5];zi!=null&&typeof zi=="number"&&0<zi&&(g=1.5*zi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Yt=a.g;if(Yt){const yl=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yl){var O=g.h;O.g||yl.indexOf("spdy")==-1&&yl.indexOf("quic")==-1&&yl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Eh(O,O.h),O.h=null))}if(g.D){const Ch=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ch&&(g.ya=Ch,_e(g.I,g.D,Ch))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=a;if(g.qa=Xg(g,g.J?g.ia:null,g.W),j.K){Rg(g.h,j);var pe=j,Ge=g.L;Ge&&(pe.I=Ge),pe.B&&(_h(pe),ll(pe)),g.g=j}else qg(g);0<f.i.length&&ml(f)}else le[0]!="stop"&&le[0]!="close"||Jr(f,7);else f.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Jr(f,7):Th(f):le[0]!="noop"&&f.l&&f.l.ta(le),f.v=0)}}no(4)}catch{}}var S1=class{constructor(a,h){this.g=a,this.map=h}};function Ig(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cg(a){return a.h?1:a.g?a.g.size:0}function vh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Eh(a,h){a.g?a.g.add(h):a.h=h}function Rg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ig.prototype.cancel=function(){if(this.i=Ag(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ag(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function C1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function R1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Pg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=R1(a),g=C1(a),x=g.length,O=0;O<x;O++)h.call(void 0,g[O],f&&f[O],a)}var kg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function A1(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),x=null;if(0<=g){var O=a[f].substring(0,g);x=a[f].substring(g+1)}else O=a[f];h(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Xr){this.h=a.h,ul(this,a.j),this.o=a.o,this.g=a.g,cl(this,a.s),this.l=a.l;var h=a.i,f=new lo;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Ng(this,f),this.m=a.m}else a&&(h=String(a).match(kg))?(this.h=!1,ul(this,h[1]||"",!0),this.o=oo(h[2]||""),this.g=oo(h[3]||"",!0),cl(this,h[4]),this.l=oo(h[5]||"",!0),Ng(this,h[6]||"",!0),this.m=oo(h[7]||"")):(this.h=!1,this.i=new lo(null,this.h))}Xr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ao(h,xg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ao(h,xg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ao(f,f.charAt(0)=="/"?N1:k1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ao(f,D1)),a.join("")};function Nn(a){return new Xr(a)}function ul(a,h,f){a.j=f?oo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function cl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ng(a,h,f){h instanceof lo?(a.i=h,O1(a.i,a.h)):(f||(h=ao(h,x1)),a.i=new lo(h,a.h))}function _e(a,h,f){a.i.set(h,f)}function hl(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function oo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ao(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,P1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function P1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xg=/[#\/\?@]/g,k1=/[#\?:]/g,N1=/[#\?]/g,x1=/[#\?@]/g,D1=/#/g;function lo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function rr(a){a.g||(a.g=new Map,a.h=0,a.i&&A1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=lo.prototype,t.add=function(a,h){rr(this),this.i=null,a=ji(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Dg(a,h){rr(a),h=ji(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Og(a,h){return rr(a),h=ji(a,h),a.g.has(h)}t.forEach=function(a,h){rr(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)},t.na=function(){rr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const x=a[g];for(let O=0;O<x.length;O++)f.push(h[g])}return f},t.V=function(a){rr(this);let h=[];if(typeof a=="string")Og(this,a)&&(h=h.concat(this.g.get(ji(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return rr(this),this.i=null,a=ji(this,a),Og(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function bg(a,h,f){Dg(a,h),0<f.length&&(a.i=null,a.g.set(ji(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var x=O;j[g]!==""&&(x+="="+encodeURIComponent(String(j[g]))),a.push(x)}}return this.i=a.join("&")};function ji(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function O1(a,h){h&&!a.j&&(rr(a),a.i=null,a.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(Dg(this,g),bg(this,x,f))},a)),a.j=h}function b1(a,h){const f=new io;if(l.Image){const g=new Image;g.onload=v(ir,f,"TestLoadImage: loaded",!0,h,g),g.onerror=v(ir,f,"TestLoadImage: error",!1,h,g),g.onabort=v(ir,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(ir,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function L1(a,h){const f=new io,g=new AbortController,x=setTimeout(()=>{g.abort(),ir(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(x),O.ok?ir(f,"TestPingServer: ok",!0,h):ir(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),ir(f,"TestPingServer: error",!1,h)})}function ir(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function M1(){this.g=new y1}function V1(a,h,f){const g=f||"";try{Pg(a,function(x,O){let j=x;c(x)&&(j=ch(x)),h.push(g+O+"="+encodeURIComponent(j))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function uo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(uo,hh),uo.prototype.g=function(){return new dl(this.l,this.j)},uo.prototype.i=function(a){return function(){return a}}({});function dl(a,h){rt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(dl,rt),t=dl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ho(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,co(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ho(this)),this.g&&(this.readyState=3,ho(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?co(this):ho(this),this.readyState==3&&Lg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,co(this))},t.Qa=function(a){this.g&&(this.response=a,co(this))},t.ga=function(){this.g&&co(this)};function co(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ho(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ho(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(dl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mg(a){let h="";return B(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function wh(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Mg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):_e(a,h,f))}function Pe(a){rt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Pe,rt);var F1=/^https?$/i,U1=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ph.g(),this.v=this.o?hg(this.o):hg(ph),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Vg(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(U1,h,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,j]of f)this.g.setRequestHeader(O,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jg(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Vg(this,O)}};function Vg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Fg(a),fl(a)}function Fg(a){a.A||(a.A=!0,yt(a,"complete"),yt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,yt(this,"complete"),yt(this,"abort"),fl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fl(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ug(this):this.bb())},t.bb=function(){Ug(this)};function Ug(a){if(a.h&&typeof o<"u"&&(!a.v[1]||xn(a)!=4||a.Z()!=2)){if(a.u&&xn(a)==4)ag(a.Ea,0,a);else if(yt(a,"readystatechange"),xn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=j===0){var x=String(a.D).match(kg)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!F1.test(x?x.toLowerCase():"")}f=g}if(f)yt(a,"complete"),yt(a,"success");else{a.m=6;try{var O=2<xn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Fg(a)}}finally{fl(a)}}}}function fl(a,h){if(a.g){jg(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||yt(a,"ready");try{f.onreadystatechange=g}catch{}}}function jg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),_1(h)}};function Bg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function j1(a){const h={};a=(a.g&&2<=xn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var f=A(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[x]||[];h[x]=O,O.push(f)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function zg(a){this.Aa=0,this.i=[],this.j=new io,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fo("baseRetryDelayMs",5e3,a),this.cb=fo("retryDelaySeedMs",1e4,a),this.Wa=fo("forwardChannelMaxRetries",2,a),this.wa=fo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ig(a&&a.concurrentRequestLimit),this.Da=new M1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){vt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Xg(this,null,this.W),ml(this)};function Th(a){if($g(a),a.G==3){var h=a.U++,f=Nn(a.I);if(_e(f,"SID",a.K),_e(f,"RID",h),_e(f,"TYPE","terminate"),po(a,f),h=new nr(a,a.j,h),h.L=2,h.v=hl(Nn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Jg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ll(h)}Yg(a)}function pl(a){a.g&&(Sh(a),a.g.cancel(),a.g=null)}function $g(a){pl(a),a.u&&(l.clearTimeout(a.u),a.u=null),gl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ml(a){if(!Sg(a.h)&&!a.s){a.s=!0;var h=a.Ga;Cn||Z(),$||(Cn(),$=!0),Q.add(h,a),a.B=0}}function B1(a,h){return Cg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ro(m(a.Ga,a,h),Qg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new nr(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(x.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Hg(this,x,h),f=Nn(this.I),_e(f,"RID",a),_e(f,"CVER",22),this.D&&_e(f,"X-HTTP-Session-Id",this.D),po(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(Mg(O)))+"&"+h:this.m&&wh(f,this.m,O)),Eh(this.h,x),this.Ua&&_e(f,"TYPE","init"),this.P?(_e(f,"$req",h),_e(f,"SID","null"),x.T=!0,gh(x,f,null)):gh(x,f,h),this.G=2}}else this.G==3&&(a?Wg(this,a):this.i.length==0||Sg(this.h)||Wg(this))};function Wg(a,h){var f;h?f=h.l:f=a.U++;const g=Nn(a.I);_e(g,"SID",a.K),_e(g,"RID",f),_e(g,"AID",a.T),po(a,g),a.m&&a.o&&wh(g,a.m,a.o),f=new nr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Hg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Eh(a.h,f),gh(f,g,h)}function po(a,h){a.H&&B(a.H,function(f,g){_e(h,g,f)}),a.l&&Pg({},function(f,g){_e(h,g,f)})}function Hg(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let O=-1;for(;;){const j=["count="+f];O==-1?0<f?(O=x[0].g,j.push("ofs="+O)):O=0:j.push("ofs="+O);let pe=!0;for(let Ge=0;Ge<f;Ge++){let le=x[Ge].g;const it=x[Ge].map;if(le-=O,0>le)O=Math.max(0,x[Ge].g-100),pe=!1;else try{V1(it,j,"req"+le+"_")}catch{g&&g(it)}}if(pe){g=j.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function qg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Cn||Z(),$||(Cn(),$=!0),Q.add(h,a),a.v=0}}function Ih(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ro(m(a.Fa,a),Qg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Kg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ro(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),pl(this),Kg(this))};function Sh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Kg(a){a.g=new nr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Nn(a.qa);_e(h,"RID","rpc"),_e(h,"SID",a.K),_e(h,"AID",a.T),_e(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(h,"TO",a.ja),_e(h,"TYPE","xmlhttp"),po(a,h),a.m&&a.o&&wh(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=hl(Nn(h)),f.m=null,f.P=!0,Eg(f,a)}t.Za=function(){this.C!=null&&(this.C=null,pl(this),Ih(this),vt(19))};function gl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Gg(a,h){var f=null;if(a.g==h){gl(a),Sh(a),a.g=null;var g=2}else if(vh(a.h,h))f=h.D,Rg(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;g=sl(),yt(g,new gg(g,f)),ml(a)}else qg(a);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&B1(a,h)||g==2&&Ih(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:Jr(a,5);break;case 4:Jr(a,10);break;case 3:Jr(a,6);break;default:Jr(a,2)}}}function Qg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Jr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const x=!g;g=new Xr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ul(g,"https"),hl(g),x?b1(g.toString(),f):L1(g.toString(),f)}else vt(2);a.G=0,a.l&&a.l.sa(h),Yg(a),$g(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Yg(a){if(a.G=0,a.ka=[],a.l){const h=Ag(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Xg(a,h,f){var g=f instanceof Xr?Nn(f):new Xr(f);if(g.g!="")h&&(g.g=h+"."+g.g),cl(g,g.s);else{var x=l.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var O=new Xr(null);g&&ul(O,g),h&&(O.g=h),x&&cl(O,x),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&_e(g,f,h),_e(g,"VER",a.la),po(a,g),g}function Jg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Pe(new uo({eb:f})):new Pe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zg(){}t=Zg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function _l(){}_l.prototype.g=function(a,h){return new xt(a,h)};function xt(a,h){rt.call(this),this.g=new zg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!y(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Bi(this)}C(xt,rt),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Th(this.g)},xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ch(a),a=f);h.i.push(new S1(h.Ya++,a)),h.G==3&&ml(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,Th(this.g),delete this.g,xt.aa.N.call(this)};function e_(a){dh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(e_,dh);function t_(){fh.call(this),this.status=1}C(t_,fh);function Bi(a){this.g=a}C(Bi,Zg),Bi.prototype.ua=function(){yt(this.g,"a")},Bi.prototype.ta=function(a){yt(this.g,new e_(a))},Bi.prototype.sa=function(a){yt(this.g,new t_)},Bi.prototype.ra=function(){yt(this.g,"b")},_l.prototype.createWebChannel=_l.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,MT=function(){return new _l},LT=function(){return sl()},bT=Qr,Sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ol.NO_ERROR=0,ol.TIMEOUT=8,ol.HTTP_ERROR=6,au=ol,_g.COMPLETE="complete",OT=_g,dg.EventType=to,to.OPEN="a",to.CLOSE="b",to.ERROR="c",to.MESSAGE="d",rt.prototype.listen=rt.prototype.K,bo=dg,DT=uo,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,xT=Pe}).apply(typeof Vl<"u"?Vl:typeof self<"u"?self:typeof window<"u"?window:{});const Qy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Dc("@firebase/firestore");function Io(){return wi.logLevel}function H(t,...e){if(wi.logLevel<=te.DEBUG){const n=e.map(om);wi.debug(`Firestore (${Ks}): ${t}`,...n)}}function Yn(t,...e){if(wi.logLevel<=te.ERROR){const n=e.map(om);wi.error(`Firestore (${Ks}): ${t}`,...n)}}function ks(t,...e){if(wi.logLevel<=te.WARN){const n=e.map(om);wi.warn(`Firestore (${Ks}): ${t}`,...n)}}function om(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function ge(t,e){t||Y()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class sD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oD{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new VT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new ut(e)}}class aD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new aD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new uD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=hD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Ns(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Be(0,0))}static max(){return new X(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Sa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends Sa{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const dD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Sa{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return dD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ne.fromString(e))}static fromName(e){return new K(Ne.fromString(e).popFirst(5))}static empty(){return new K(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ne(e.slice()))}}function fD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Mr(i,K.empty(),e)}function pD(t){return new Mr(t.readTime,t.key,-1)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(X.min(),K.empty(),-1)}static max(){return new Mr(X.max(),K.empty(),-1)}}function mD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _D{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==gD)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function yD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}am.oe=-1;function Vc(t){return t==null}function qu(t){return t===0&&1/t==-1/0}function vD(t){return typeof t=="number"&&Number.isInteger(t)&&!qu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function UT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me=class Cf{constructor(e,n){this.comparator=e,this.root=n||xr.EMPTY}insert(e,n){return new Cf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xr.BLACK,null,null))}remove(e){return new Cf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fl(this.root,e,this.comparator,!0)}},Fl=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},xr=class Dn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Dn.RED,this.left=i??Dn.EMPTY,this.right=s??Dn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Dn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Dn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Dn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}};xr.EMPTY=null,xr.RED=!0,xr.BLACK=!1;xr.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new xr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xy(this.data.getIterator())}getIteratorFrom(e){return new Xy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Xy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new bt([])}unionWith(e){let n=new et(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new jT("Invalid base64 string: "+s):s}}(e);return new _t(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const ED=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(ge(!!t),typeof t=="string"){let e=0;const n=ED.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ti(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function um(t){const e=t.mapValue.fields.__previous_value__;return lm(e)?um(e):e}function Ca(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lm(t)?4:TD(t)?9007199254740991:10:Y()}function In(t,e){if(t===e)return!0;const n=Ii(t);if(n!==Ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ca(t).isEqual(Ca(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vr(i.timestampValue),l=Vr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ti(i.bytesValue).isEqual(Ti(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?qu(o)===qu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Yy(o)!==Yy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!In(o[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function Aa(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function xs(t,e){if(t===e)return 0;const n=Ii(t),r=Ii(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Jy(t.timestampValue,e.timestampValue);case 4:return Jy(Ca(t),Ca(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ti(s),u=Ti(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ue(l[c],u[c]);if(d!==0)return d}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(be(s.latitude),be(o.latitude));return l!==0?l:ue(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=xs(l[c],u[c]);if(d)return d}return ue(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ul.mapValue&&o===Ul.mapValue)return 0;if(s===Ul.mapValue)return 1;if(o===Ul.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ue(u[p],d[p]);if(m!==0)return m;const v=xs(l[u[p]],c[d[p]]);if(v!==0)return v}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Jy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Vr(t),r=Vr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Ds(t){return Rf(t)}function Rf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ti(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Rf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Rf(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function Af(t){return!!t&&"integerValue"in t}function cm(t){return!!t&&"arrayValue"in t}function Zy(t){return!!t&&"nullValue"in t}function ev(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lu(t){return!!t&&"mapValue"in t}function Ko(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ko(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ko(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ko(n)}setAll(e){let n=Je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ko(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());lu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];lu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){bi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(Ko(this.value))}}function BT(t){const e=[];return bi(t.fields,(n,r)=>{const i=new Je([n]);if(lu(r)){const s=BT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,X.min(),X.min(),X.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,X.min(),X.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,X.min(),X.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.position=e,this.inclusive=n}}function tv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=xs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function nv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n="asc"){this.field=e,this.dir=n}}function ID(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{}class Fe extends zT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CD(e,n,r):n==="array-contains"?new PD(e,r):n==="in"?new kD(e,r):n==="not-in"?new ND(e,r):n==="array-contains-any"?new xD(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RD(e,r):new AD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xs(n,this.value)):n!==null&&Ii(this.value)===Ii(n)&&this.matchesComparison(xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends zT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Sn(e,n)}matches(e){return $T(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $T(t){return t.op==="and"}function WT(t){return SD(t)&&$T(t)}function SD(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function Pf(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(WT(t))return t.filters.map(e=>Pf(e)).join(",");{const e=t.filters.map(n=>Pf(n)).join(",");return`${t.op}(${e})`}}function HT(t,e){return t instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof Sn?function(r,i){return i instanceof Sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&HT(o,i.filters[l]),!0):!1}(t,e):void Y()}function qT(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ds(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(qT).join(" ,")+"}"}(t):"Filter"}class CD extends Fe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class RD extends Fe{constructor(e,n){super(e,"in",n),this.keys=KT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AD extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=KT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function KT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class PD extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cm(n)&&Aa(n.arrayValue,this.value)}}class kD extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Aa(this.value.arrayValue,n)}}class ND extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Aa(this.value.arrayValue,n)}}class xD extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Aa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function rv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DD(t,e,n,r,i,s,o)}function hm(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),e.ue=n}return e.ue}function dm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ID(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!HT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nv(t.startAt,e.startAt)&&nv(t.endAt,e.endAt)}function kf(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function OD(t,e,n,r,i,s,o,l){return new Fc(t,e,n,r,i,s,o,l)}function fm(t){return new Fc(t)}function iv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bD(t){return t.collectionGroup!==null}function Go(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new et(Je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Gu(s,r))}),n.has(Je.keyField().canonicalString())||e.ce.push(new Gu(Je.keyField(),r))}return e.ce}function En(t){const e=J(t);return e.le||(e.le=LD(e,Go(t))),e.le}function LD(t,e){if(t.limitType==="F")return rv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Gu(i.field,s)});const n=t.endAt?new Ku(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ku(t.startAt.position,t.startAt.inclusive):null;return rv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nf(t,e,n){return new Fc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uc(t,e){return dm(En(t),En(e))&&t.limitType===e.limitType}function GT(t){return`${hm(En(t))}|lt:${t.limitType}`}function Hi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>qT(i)).join(", ")}]`),Vc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ds(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ds(i)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function jc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Go(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=tv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Go(r),i)||r.endAt&&!function(o,l,u){const c=tv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Go(r),i))}(t,e)}function MD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function QT(t){return(e,n)=>{let r=!1;for(const i of Go(t)){const s=VD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VD(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?xs(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return UT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=new Me(K.comparator);function Xn(){return FD}const YT=new Me(K.comparator);function Lo(...t){let e=YT;for(const n of t)e=e.insert(n.key,n);return e}function XT(t){let e=YT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function oi(){return Qo()}function JT(){return Qo()}function Qo(){return new Gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const UD=new Me(K.comparator),jD=new et(K.comparator);function ne(...t){let e=jD;for(const n of t)e=e.add(n);return e}const BD=new et(ue);function zD(){return BD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qu(e)?"-0":e}}function eI(t){return{integerValue:""+t}}function $D(t,e){return vD(e)?eI(e):ZT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this._=void 0}}function WD(t,e,n){return t instanceof Qu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lm(s)&&(s=um(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Pa?nI(t,e):t instanceof ka?rI(t,e):function(i,s){const o=tI(i,s),l=sv(o)+sv(i.Pe);return Af(o)&&Af(i.Pe)?eI(l):ZT(i.serializer,l)}(t,e)}function HD(t,e,n){return t instanceof Pa?nI(t,e):t instanceof ka?rI(t,e):n}function tI(t,e){return t instanceof Yu?function(r){return Af(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Qu extends Bc{}class Pa extends Bc{constructor(e){super(),this.elements=e}}function nI(t,e){const n=iI(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class ka extends Bc{constructor(e){super(),this.elements=e}}function rI(t,e){let n=iI(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class Yu extends Bc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function sv(t){return be(t.integerValue||t.doubleValue)}function iI(t){return cm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Pa&&i instanceof Pa||r instanceof ka&&i instanceof ka?Ns(r.elements,i.elements,In):r instanceof Yu&&i instanceof Yu?In(r.Pe,i.Pe):r instanceof Qu&&i instanceof Qu}(t.transform,e.transform)}class KD{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zc{}function sI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new aI(t.key,wn.none()):new Ha(t.key,t.data,wn.none());{const n=t.data,r=Ct.empty();let i=new et(Je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Kr(t.key,r,new bt(i.toArray()),wn.none())}}function GD(t,e,n){t instanceof Ha?function(i,s,o){const l=i.value.clone(),u=av(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(i,s,o){if(!uu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=av(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(oI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yo(t,e,n,r){return t instanceof Ha?function(s,o,l,u){if(!uu(s.precondition,o))return l;const c=s.value.clone(),d=lv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kr?function(s,o,l,u){if(!uu(s.precondition,o))return l;const c=lv(s.fieldTransforms,u,o),d=o.data;return d.setAll(oI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return uu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function QD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=tI(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function ov(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ns(r,i,(s,o)=>qD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ha extends zc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kr extends zc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function oI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function av(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,HD(o,l,n[i]))}return r}function lv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,WD(s,o,e))}return r}class aI extends zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YD extends zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=JT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=sI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,r)=>ov(n,r))&&Ns(this.baseMutations,e.baseMutations,(n,r)=>ov(n,r))}}class pm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return UD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new pm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,ie;function eO(t){switch(t){default:return Y();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function lI(t){if(t===void 0)return Yn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Oe.OK:return V.OK;case Oe.CANCELLED:return V.CANCELLED;case Oe.UNKNOWN:return V.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return V.INTERNAL;case Oe.UNAVAILABLE:return V.UNAVAILABLE;case Oe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Oe.NOT_FOUND:return V.NOT_FOUND;case Oe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Oe.ABORTED:return V.ABORTED;case Oe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Oe.DATA_LOSS:return V.DATA_LOSS;default:return Y()}}(ie=Oe||(Oe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=new hi([4294967295,4294967295],0);function uv(t){const e=tO().encode(t),n=new NT;return n.update(e),new Uint8Array(n.digest())}function cv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new hi([n,r],0),new hi([i,s],0)]}class mm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Mo(`Invalid padding: ${n}`);if(r<0)throw new Mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Mo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(hi.fromNumber(r)));return i.compare(nO)===1&&(i=new hi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=uv(e),[r,i]=cv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new mm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=uv(e),[r,i]=cv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,qa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $c(X.min(),i,new Me(ue),Xn(),ne())}}class qa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qa(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class uI{constructor(e,n){this.targetId=e,this.me=n}}class cI{constructor(e,n,r=_t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class hv{constructor(){this.fe=0,this.ge=fv(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new qa(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=fv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xn(),this.qe=dv(),this.Qe=new Me(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(kf(s))if(r===0){const o=new K(s.path);this.Ue(n,o,ht.newNoDocument(o,X.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ti(r).toUint8Array()}catch(u){if(u instanceof jT)return ks("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new mm(o,i,s)}catch(u){return ks(u instanceof Mo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&kf(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ht.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new $c(e,n,this.Qe,this.ke,r);return this.ke=Xn(),this.qe=dv(),this.Qe=new Me(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new hv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new et(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function dv(){return new Me(K.comparator)}function fv(){return new Me(K.comparator)}const iO={asc:"ASCENDING",desc:"DESCENDING"},sO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oO={and:"AND",or:"OR"};class aO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xf(t,e){return t.useProto3Json||Vc(e)?e:{value:e}}function Xu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lO(t,e){return Xu(t,e.toTimestamp())}function Tn(t){return ge(!!t),X.fromTimestamp(function(n){const r=Vr(n);return new Be(r.seconds,r.nanos)}(t))}function gm(t,e){return Df(t,e).canonicalString()}function Df(t,e){const n=function(i){return new Ne(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dI(t){const e=Ne.fromString(t);return ge(_I(e)),e}function Of(t,e){return gm(t.databaseId,e.path)}function od(t,e){const n=dI(e);if(n.get(1)!==t.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(pI(n))}function fI(t,e){return gm(t.databaseId,e)}function uO(t){const e=dI(t);return e.length===4?Ne.emptyPath():pI(e)}function bf(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pI(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pv(t,e,n){return{name:Of(t,e),fields:n.value.mapValue.fields}}function cO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ge(d===void 0||typeof d=="string"),_t.fromBase64String(d||"")):(ge(d===void 0||d instanceof Buffer||d instanceof Uint8Array),_t.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:lI(c.code);return new q(d,c.message||"")}(o);n=new cI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=od(t,r.document.name),s=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):X.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=ht.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new cu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=od(t,r.document),s=r.readTime?Tn(r.readTime):X.min(),o=ht.newNoDocument(i,s),l=r.removedTargetIds||[];n=new cu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=od(t,r.document),s=r.removedTargetIds||[];n=new cu([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZD(i,s),l=r.targetId;n=new uI(l,o)}}return n}function hO(t,e){let n;if(e instanceof Ha)n={update:pv(t,e.key,e.value)};else if(e instanceof aI)n={delete:Of(t,e.key)};else if(e instanceof Kr)n={update:pv(t,e.key,e.data),updateMask:EO(e.fieldMask)};else{if(!(e instanceof YD))return Y();n={verify:Of(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Qu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Pa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ka)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function dO(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Tn(i.updateTime):Tn(s);return o.isEqual(X.min())&&(o=Tn(s)),new KD(o,i.transformResults||[])}(n,e))):[]}function fO(t,e){return{documents:[fI(t,e.path)]}}function pO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fI(t,i);const s=function(c){if(c.length!==0)return gI(Sn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:qi(m.field),direction:_O(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function mO(t){let e=uO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=mI(p);return m instanceof Sn&&WT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Gu(Ki(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Vc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,v=p.values||[];return new Ku(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,v=p.values||[];return new Ku(v,m)}(n.endAt)),OD(e,i,o,s,l,"F",u,c)}function gO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ki(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ki(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ki(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ki(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(Ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(r=>mI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function _O(t){return iO[t]}function yO(t){return sO[t]}function vO(t){return oO[t]}function qi(t){return{fieldPath:t.canonicalString()}}function Ki(t){return Je.fromServerFormat(t.fieldPath)}function gI(t){return t instanceof Fe?function(n){if(n.op==="=="){if(ev(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NAN"}};if(Zy(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ev(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NOT_NAN"}};if(Zy(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qi(n.field),op:yO(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const r=n.getFilters().map(i=>gI(i));return r.length===1?r[0]:{compositeFilter:{op:vO(n.op),filters:r}}}(t):Y()}function EO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _I(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r,i,s=X.min(),o=X.min(),l=_t.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e){this.ct=e}}function TO(t){const e=mO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(){this._n=new SO}addToCollectionParentIndex(e,n){return this._n.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Mr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class SO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new et(Ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new et(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Os(0)}static Ln(){return new Os(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(){this.changes=new Gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Yo(r.mutation,i,bt.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=oi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Lo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=oi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Xn();const o=Qo(),l=function(){return Qo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Kr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Yo(d.mutation,c,d.mutation.getFieldMask(),Be.now())):o.set(c.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new RO(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Qo();let i=new Me((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||bt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=JT();d.forEach(m=>{if(!s.has(m)){const v=sI(n.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(oi());let l=-1,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:XT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Lo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,m){return new Fc(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ht.newInvalidDocument(d)))});let l=Lo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Yo(d.mutation,c,bt.empty(),Be.now()),jc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return M.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Tn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:TO(i.bundledQuery),readTime:Tn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(){this.overlays=new Me(K.comparator),this.hr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=oi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=oi(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Me((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=oi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=oi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JD(n,r));let s=this.hr.get(n);s===void 0&&(s=ne(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.Pr=new et($e.Ir),this.Tr=new et($e.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new $e(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new K(new Ne([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new K(new Ne([])),r=new $e(n,e),i=new $e(n,e+1);let s=ne();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return K.comparator(e.key,n.key)||ue(e.pr,n.pr)}static Er(e,n){return ue(e.pr,n.pr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new et($e.Ir)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(ue);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),M.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new $e(new K(s),0);let l=new et(ue);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},o),M.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return M.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new $e(n,0),i=this.wr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.vr=e,this.docs=function(){return new Me(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||mD(pD(d),r)<=0||(i.has(d.key)||jc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Fr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DO(this)}getSize(e){return M.resolve(this.size)}}class DO extends CO{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e){this.persistence=e,this.Mr=new Gs(n=>hm(n),dm),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Or=0,this.Nr=new _m,this.targetCount=0,this.Lr=Os.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),M.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Os(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.qn(n),M.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n){this.Br={},this.overlays={},this.kr=new am(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new OO(this),this.indexManager=new IO,this.remoteDocumentCache=function(i){return new xO(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new wO(n),this.$r=new PO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new NO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new LO(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return M.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class LO extends _D{constructor(e){super(),this.currentSequenceNumber=e}}class ym{constructor(e){this.persistence=e,this.zr=new _m,this.jr=null}static Hr(e){return new ym(e)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),M.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Jr,r=>{const i=K.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return M.or([()=>M.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return TP()?8:yD(nt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new MO;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Io()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Hi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),M.resolve()):(Io()<=te.DEBUG&&H("QueryEngine","Query:",Hi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Io()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Hi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):M.resolve())}ji(e,n){if(iv(n))return M.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nf(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,o,u.readTime)?this.ji(e,Nf(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return iv(n)||i.isEqual(X.min())?M.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?M.resolve(null):(Io()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hi(n)),this.es(e,o,n,fD(i,-1)).next(l=>l))})}Zi(e,n){let r=new et(QT(e));return n.forEach((i,s)=>{jc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Io()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Hi(n)),this.zi.getDocumentsMatchingQuery(e,n,Mr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Me(ue),this.rs=new Gs(s=>hm(s),dm),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AO(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function UO(t,e,n,r){return new FO(t,e,n,r)}async function yI(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:l}))})})}function jO(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let v=M.resolve();return m.forEach(C=>{v=v.next(()=>d.getEntry(u,C)).next(P=>{const N=c.docVersions.get(C);ge(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function vI(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function BO(t,e){const n=J(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,p)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(_t.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(P,N,T){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,v,d)&&l.push(n.Qr.updateTargetData(s,v))});let u=Xn(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(zO(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(X.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function zO(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function $O(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WO(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Lf(t,e,n){const r=J(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Wa(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function mv(t,e,n){const r=J(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=J(u),m=p.rs.get(d);return m!==void 0?M.resolve(p.ns.get(m)):p.Qr.getTargetData(c,d)}(r,o,En(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ne())).next(l=>(HO(r,MD(e),l),{documents:l,hs:s})))}function HO(t,e,n){let r=t.ss.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class gv{constructor(){this.activeTargetIds=zD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qO{constructor(){this.no=new gv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new gv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl=null;function ad(){return jl===null?jl=function(){return 268435456+Math.round(2147483648*Math.random())}():jl++,"0x"+jl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class YO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=ad(),u=this.vo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ks("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ks}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=GO[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=ad();return new Promise((o,l)=>{const u=new xT;u.setWithCredentials(!0),u.listenOnce(OT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case au.NO_ERROR:const d=u.getResponseJson();H(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case au.TIMEOUT:H(lt,`RPC '${e}' ${s} timed out`),l(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case au.HTTP_ERROR:const p=u.getStatus();if(H(lt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const C=function(N){const T=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(v.status);l(new q(C,v.message))}else l(new q(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(V.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(lt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(lt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=ad(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=MT(),l=LT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new DT({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(lt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,v=!1;const C=new QO({lo:N=>{v?H(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(H(lt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(lt,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},ho:()=>p.close()}),P=(N,T,y)=>{N.listen(T,R=>{try{y(R)}catch(b){setTimeout(()=>{throw b},0)}})};return P(p,bo.EventType.OPEN,()=>{v||(H(lt,`RPC '${e}' stream ${i} transport opened.`),C.mo())}),P(p,bo.EventType.CLOSE,()=>{v||(v=!0,H(lt,`RPC '${e}' stream ${i} transport closed`),C.po())}),P(p,bo.EventType.ERROR,N=>{v||(v=!0,ks(lt,`RPC '${e}' stream ${i} transport errored:`,N),C.po(new q(V.UNAVAILABLE,"The operation could not be completed")))}),P(p,bo.EventType.MESSAGE,N=>{var T;if(!v){const y=N.data[0];ge(!!y);const R=y,b=R.error||((T=R[0])===null||T===void 0?void 0:T.error);if(b){H(lt,`RPC '${e}' stream ${i} received error:`,b);const U=b.status;let B=function(E){const I=Oe[E];if(I!==void 0)return lI(I)}(U),w=b.message;B===void 0&&(B=V.INTERNAL,w="Unknown error status: "+U+" with message "+b.message),v=!0,C.po(new q(B,w)),p.close()}else H(lt,`RPC '${e}' stream ${i} received:`,y),C.yo(y)}}),P(l,bT.STAT_EVENT,N=>{N.stat===Sf.PROXY?H(lt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Sf.NOPROXY&&H(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function ld(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t){return new aO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new EI(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XO extends wI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=cO(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Tn(o.readTime):X.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=bf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=kf(u)?{documents:fO(s,u)}:{query:pO(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hI(s,o.resumeToken);const c=xf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Xu(s,o.snapshotVersion.toTimestamp());const c=xf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=gO(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=bf(this.serializer),n.removeTarget=e,this.i_(n)}}class JO extends wI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=dO(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.A_(r,n)}return ge(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=bf(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hO(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Df(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(V.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,Df(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class eb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Yn(n),this.y_=!1):H("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Li(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.M_.add(4),await Ka(c),c.N_.set("Unknown"),c.M_.delete(4),await Hc(c)}(this))})}),this.N_=new eb(r,i)}}async function Hc(t){if(Li(t))for(const e of t.x_)await e(!0)}async function Ka(t){for(const e of t.x_)await e(!1)}function TI(t,e){const n=J(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Im(n)?Tm(n):Qs(n).Xo()&&wm(n,e))}function Em(t,e){const n=J(t),r=Qs(n);n.F_.delete(e),r.Xo()&&II(n,e),n.F_.size===0&&(r.Xo()?r.n_():Li(n)&&n.N_.set("Unknown"))}function wm(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).P_(e)}function II(t,e){t.L_.xe(e),Qs(t).I_(e)}function Tm(t){t.L_=new rO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.N_.w_()}function Im(t){return Li(t)&&!Qs(t).Zo()&&t.F_.size>0}function Li(t){return J(t).M_.size===0}function SI(t){t.L_=void 0}async function nb(t){t.N_.set("Online")}async function rb(t){t.F_.forEach((e,n)=>{wm(t,e)})}async function ib(t,e){SI(t),Im(t)?(t.N_.D_(e),Tm(t)):t.N_.set("Unknown")}async function sb(t,e,n){if(t.N_.set("Online"),e instanceof cI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ju(t,r)}else if(e instanceof cu?t.L_.Ke(e):e instanceof uI?t.L_.He(e):t.L_.We(e),!n.isEqual(X.min()))try{const r=await vI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(_t.EMPTY_BYTE_STRING,d.snapshotVersion)),II(s,u);const p=new vr(d.target,u,c,d.sequenceNumber);wm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Ju(t,r)}}async function Ju(t,e,n){if(!Wa(e))throw e;t.M_.add(1),await Ka(t),t.N_.set("Offline"),n||(n=()=>vI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Hc(t)})}function CI(t,e){return e().catch(n=>Ju(t,n,e))}async function qc(t){const e=J(t),n=Fr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;ob(e);)try{const i=await $O(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,ab(e,i)}catch(i){await Ju(e,i)}RI(e)&&AI(e)}function ob(t){return Li(t)&&t.v_.length<10}function ab(t,e){t.v_.push(e);const n=Fr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function RI(t){return Li(t)&&!Fr(t).Zo()&&t.v_.length>0}function AI(t){Fr(t).start()}async function lb(t){Fr(t).V_()}async function ub(t){const e=Fr(t);for(const n of t.v_)e.d_(n.mutations)}async function cb(t,e,n){const r=t.v_.shift(),i=pm.from(r,e,n);await CI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qc(t)}async function hb(t,e){e&&Fr(t).E_&&await async function(r,i){if(function(o){return eO(o)&&o!==V.ABORTED}(i.code)){const s=r.v_.shift();Fr(r).t_(),await CI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qc(r)}}(t,e),RI(t)&&AI(t)}async function yv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Li(n);n.M_.add(3),await Ka(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Hc(n)}async function db(t,e){const n=J(t);e?(n.M_.delete(2),await Hc(n)):e||(n.M_.add(2),await Ka(n),n.N_.set("Unknown"))}function Qs(t){return t.B_||(t.B_=function(n,r,i){const s=J(n);return s.f_(),new XO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:nb.bind(null,t),To:rb.bind(null,t),Ao:ib.bind(null,t),h_:sb.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Im(t)?Tm(t):t.N_.set("Unknown")):(await t.B_.stop(),SI(t))})),t.B_}function Fr(t){return t.k_||(t.k_=function(n,r,i){const s=J(n);return s.f_(),new JO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:lb.bind(null,t),Ao:hb.bind(null,t),R_:ub.bind(null,t),A_:cb.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await qc(t)):(await t.k_.stop(),t.v_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Sm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cm(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Wa(t))return new q(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Lo(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.q_=new Me(K.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Y():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class bs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new bs(e,n,ys.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class pb{constructor(){this.queries=new Gs(e=>GT(e),Uc),this.onlineState="Unknown",this.z_=new Set}}async function mb(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new fb,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Cm(o,`Initialization of query '${Hi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Rm(n)}async function gb(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _b(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&Rm(n)}function yb(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Rm(t){t.z_.forEach(e=>{e.next()})}var Mf,Ev;(Ev=Mf||(Mf={})).J_="default",Ev.Cache="cache";class vb{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Mf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.key=e}}class kI{constructor(e){this.key=e}}class Eb{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ne(),this.mutatedKeys=ne(),this.Ia=QT(e),this.Ta=new ys(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new vv,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),v=jc(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;m&&v?m.data.isEqual(v.data)?C!==P&&(r.track({type:3,doc:v}),N=!0):this.Ra(m,v)||(r.track({type:2,doc:v}),N=!0,(u&&this.Ia(v,u)>0||c&&this.Ia(v,c)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),N=!0):m&&!v&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(v?(o=o.add(v),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(v,C){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return P(v)-P(C)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new bs(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new vv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ne(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new kI(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new PI(r))}),n}pa(e){this.la=e.hs,this.Pa=ne();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return bs.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class wb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Tb{constructor(e){this.key=e,this.wa=!1}}class Ib{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Gs(l=>GT(l),Uc),this.Da=new Map,this.Ca=new Set,this.va=new Me(K.comparator),this.Fa=new Map,this.Ma=new _m,this.xa={},this.Oa=new Map,this.Na=Os.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Sb(t,e,n=!0){const r=LI(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await NI(r,e,n,!0),i}async function Cb(t,e){const n=LI(t);await NI(n,e,!0,!1)}async function NI(t,e,n,r){const i=await WO(t.localStore,En(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Rb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&TI(t.remoteStore,i),l}async function Rb(t,e,n,r,i){t.Ba=(p,m,v)=>async function(P,N,T,y){let R=N.view.da(T);R.Xi&&(R=await mv(P.localStore,N.query,!1).then(({documents:w})=>N.view.da(w,R)));const b=y&&y.targetChanges.get(N.targetId),U=y&&y.targetMismatches.get(N.targetId)!=null,B=N.view.applyChanges(R,P.isPrimaryClient,b,U);return Tv(P,N.targetId,B.fa),B.snapshot}(t,p,m,v);const s=await mv(t.localStore,e,!0),o=new Eb(e,s.hs),l=o.da(s.documents),u=qa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Tv(t,n,c.fa);const d=new wb(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function Ab(t,e,n){const r=J(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Uc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Lf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Em(r.remoteStore,i.targetId),Vf(r,i.targetId)}).catch($a)):(Vf(r,i.targetId),await Lf(r.localStore,i.targetId,!0))}async function Pb(t,e){const n=J(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Em(n.remoteStore,r.targetId))}async function kb(t,e,n){const r=Mb(t);try{const i=await function(o,l){const u=J(o),c=Be.now(),d=l.reduce((v,C)=>v.add(C.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=Xn(),P=ne();return u.os.getEntries(v,d).next(N=>{C=N,C.forEach((T,y)=>{y.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,C)).next(N=>{p=N;const T=[];for(const y of l){const R=QD(y,p.get(y.key).overlayedDocument);R!=null&&T.push(new Kr(y.key,R,BT(R.value.mapValue),wn.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,T,l)}).next(N=>{m=N;const T=N.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(v,N.batchId,T)})}).then(()=>({batchId:m.batchId,changes:XT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Me(ue)),c=c.insert(l,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ga(r,i.changes),await qc(r.remoteStore)}catch(i){const s=Cm(i,"Failed to persist write");n.reject(s)}}async function xI(t,e){const n=J(t);try{const r=await BO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?ge(o.wa):i.removedDocuments.size>0&&(ge(o.wa),o.wa=!1))}),await Ga(n,r,e)}catch(r){await $a(r)}}function wv(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.U_)m.j_(l)&&(c=!0)}),c&&Rm(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Nb(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Me(K.comparator);o=o.insert(s,ht.newNoDocument(s,X.min()));const l=ne().add(s),u=new $c(X.min(),new Map,new Me(ue),o,l);await xI(r,u),r.va=r.va.remove(s),r.Fa.delete(e),Am(r)}else await Lf(r.localStore,e,!1).then(()=>Vf(r,e,n)).catch($a)}async function xb(t,e){const n=J(t),r=e.batch.batchId;try{const i=await jO(n.localStore,e);OI(n,r,null),DI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ga(n,i)}catch(i){await $a(i)}}async function Db(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ge(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);OI(r,e,n),DI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ga(r,i)}catch(i){await $a(i)}}function DI(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function OI(t,e,n){const r=J(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||bI(t,r)})}function bI(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Em(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Am(t))}function Tv(t,e,n){for(const r of n)r instanceof PI?(t.Ma.addReference(r.key,e),Ob(t,r)):r instanceof kI?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||bI(t,r.key)):Y()}function Ob(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Am(t))}function Am(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new K(Ne.fromString(e)),r=t.Na.next();t.Fa.set(r,new Tb(n)),t.va=t.va.insert(n,r),TI(t.remoteStore,new vr(En(fm(n.path)),r,"TargetPurposeLimboResolution",am.oe))}}async function Ga(t,e,n){const r=J(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=vm.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.qi,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>M.forEach(m.Qi,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!Wa(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const v=d.ns.get(m),C=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(C);d.ns=d.ns.insert(m,P)}}}(r.localStore,s))}async function bb(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await yI(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new q(V.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ga(n,r.us)}}function Lb(t,e){const n=J(t),r=n.Fa.get(e);if(r&&r.wa)return ne().add(r.key);{let i=ne();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function LI(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Nb.bind(null,e),e.Sa.h_=_b.bind(null,e.eventManager),e.Sa.ka=yb.bind(null,e.eventManager),e}function Mb(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Db.bind(null,e),e}class Iv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return UO(this.persistence,new VO,e.initialUser,this.serializer)}createPersistence(e){return new bO(ym.Hr,this.serializer)}createSharedClientState(e){return new qO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bb.bind(null,this.syncEngine),await db(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pb}()}createDatastore(e){const n=Wc(e.databaseInfo.databaseId),r=function(s){return new YO(s)}(e.databaseInfo);return function(s,o,l,u){return new ZO(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new tb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>wv(this.syncEngine,n,0),function(){return _v.D()?new _v:new KO}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Ib(i,s,o,l,u,c);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=J(r);H("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Ka(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=FT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ud(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await yI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bb(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>yv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>yv(e.remoteStore,i)),t._onlineComponents=e}function jb(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Bb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await ud(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!jb(n))throw n;ks("Error using user provided cache. Falling back to memory cache: "+n),await ud(t,new Iv)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await ud(t,new Iv);return t._offlineComponents}async function MI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Sv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Sv(t,new Vb))),t._onlineComponents}function zb(t){return MI(t).then(e=>e.syncEngine)}async function $b(t){const e=await MI(t),n=e.eventManager;return n.onListen=Sb.bind(null,e.syncEngine),n.onUnlisten=Ab.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Cb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Pb.bind(null,e.syncEngine),n}function Wb(t,e,n={}){const r=new Nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Fb({next:m=>{o.enqueueAndForget(()=>gb(s,p));const v=m.docs.has(l);!v&&m.fromCache?c.reject(new q(V.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&u&&u.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new vb(fm(l.path),d,{includeMetadataChanges:!0,ra:!0});return mb(s,p)}(await $b(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t,e,n){if(!n)throw new q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qb(t,e,n,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rv(t){if(!K.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Si(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pm(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=VI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class km{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Av({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Av(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iD;switch(r.type){case"firstParty":return new lD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cv.get(n);r&&(H("ComponentProvider","Removing Datastore"),Cv.delete(n),r.terminate())}(this),Promise.resolve()}}function Kb(t,e,n,r={}){var i;const s=(t=Si(t,km))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ut.MOCK_USER;else{l=yP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(c)}t._authCredentials=new sD(new VT(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nm(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Na(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class Na extends Nm{constructor(e,n,r){super(e,n,fm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new K(e))}withConverter(e){return new Na(this.firestore,e,this._path)}}function Ur(t,e,...n){if(t=gt(t),arguments.length===1&&(e=FT.newId()),Hb("doc","path",e),t instanceof km){const r=Ne.fromString(e,...n);return Rv(r),new Mt(t,null,new K(r))}{if(!(t instanceof Mt||t instanceof Na))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Rv(r),new Mt(t.firestore,t instanceof Na?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new EI(this,"async_queue_retry"),this.hu=()=>{const n=ld();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=ld();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=ld();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Nr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Wa(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Yn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Sm.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Y()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Kc extends km{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Gb}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||UI(this),this._firestoreClient.terminate()}}function Qb(t,e){const n=typeof t=="object"?t:Gw(),r=typeof t=="string"?t:"(default)",i=Yp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_P("firestore");s&&Kb(i,...s)}return i}function FI(t){return t._firestoreClient||UI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function UI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new wD(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,VI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Ub(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ls(_t.fromBase64String(e))}catch(n){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ls(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=/^__.*__$/;class Xb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ha(e,this.data,n,this.fieldTransforms)}}class jI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function BI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Om{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Om(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Zu(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(BI(this.fu)&&Yb.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Jb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wc(e)}Fu(e,n,r,i=!1){return new Om({fu:e,methodName:n,vu:r,path:Je.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zI(t){const e=t._freezeSettings(),n=Wc(t._databaseId);return new Jb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Zb(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);bm("Data must be an object, but it was:",o,r);const l=$I(r,o);let u,c;if(s.merge)u=new bt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Ff(e,p,n);if(!o.contains(m))throw new q(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);HI(d,m)||d.push(m)}u=new bt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new Xb(new Ct(l),u,c)}class Qc extends xm{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qc}}function eL(t,e,n,r){const i=t.Fu(1,e,n);bm("Data must be an object, but it was:",i,r);const s=[],o=Ct.empty();bi(r,(u,c)=>{const d=Lm(e,u,n);c=gt(c);const p=i.Su(d);if(c instanceof Qc)s.push(d);else{const m=Yc(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new bt(s);return new jI(o,l,i.fieldTransforms)}function tL(t,e,n,r,i,s){const o=t.Fu(1,e,n),l=[Ff(e,r,n)],u=[i];if(s.length%2!=0)throw new q(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Ff(e,s[m])),u.push(s[m+1]);const c=[],d=Ct.empty();for(let m=l.length-1;m>=0;--m)if(!HI(c,l[m])){const v=l[m];let C=u[m];C=gt(C);const P=o.Su(v);if(C instanceof Qc)c.push(v);else{const N=Yc(C,P);N!=null&&(c.push(v),d.set(v,N))}}const p=new bt(c);return new jI(d,p,o.fieldTransforms)}function Yc(t,e){if(WI(t=gt(t)))return bm("Unsupported field value:",e,t),$I(t,e);if(t instanceof xm)return function(r,i){if(!BI(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Yc(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $D(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:Xu(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xu(i.serializer,s)}}if(r instanceof Dm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ls)return{bytesValue:hI(i.serializer,r._byteString)};if(r instanceof Mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Pm(r)}`)}(t,e)}function $I(t,e){const n={};return UT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,(r,i)=>{const s=Yc(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function WI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Dm||t instanceof Ls||t instanceof Mt||t instanceof xm)}function bm(t,e,n){if(!WI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Pm(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Ff(t,e,n){if((e=gt(e))instanceof Gc)return e._internalPath;if(typeof e=="string")return Lm(t,e);throw Zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const nL=new RegExp("[~\\*/\\[\\]]");function Lm(t,e,n){if(e.search(nL)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gc(...e.split("."))._internalPath}catch{throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(V.INVALID_ARGUMENT,l+t+u)}function HI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(KI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rL extends qI{data(){return super.data()}}function KI(t,e){return typeof e=="string"?Lm(t,e):e instanceof Gc?e._internalPath:e._delegate._internalPath}class iL{convertValue(e,n="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Dm(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=um(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);ge(_I(r));const i=new Ra(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GI extends qI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new aL(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(KI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class aL extends GI{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){t=Si(t,Mt);const e=Si(t.firestore,Kc);return Wb(FI(e),t._key).then(n=>cL(e,t,n))}class lL extends iL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function uL(t,e,n){t=Si(t,Mt);const r=Si(t.firestore,Kc),i=sL(t.converter,e);return YI(r,[Zb(zI(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wn.none())])}function QI(t,e,n,...r){t=Si(t,Mt);const i=Si(t.firestore,Kc),s=zI(i);let o;return o=typeof(e=gt(e))=="string"||e instanceof Gc?tL(s,"updateDoc",t._key,e,n,r):eL(s,"updateDoc",t._key,e),YI(i,[o.toMutation(t._key,wn.exists(!0))])}function YI(t,e){return function(r,i){const s=new Nr;return r.asyncQueue.enqueueAndForget(async()=>kb(await zb(r),i,s)),s.promise}(FI(t),e)}function cL(t,e,n){const r=n.docs.get(e._key),i=new lL(t);return new GI(t,i,e._key,r,new oL(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ks=i})(Di),yi(new Lr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Kc(new oD(r.getProvider("auth-internal")),new cD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),_n(Qy,"4.6.3",e),_n(Qy,"4.6.3","esm2017")})();const hL={apiKey:"AIzaSyAlW8QN9AIVpgwuOympZFA5bmKZReffBCA",authDomain:"sea-salon-f3bee.firebaseapp.com",projectId:"sea-salon-f3bee",storageBucket:"sea-salon-f3bee.appspot.com",messagingSenderId:"112677358874",appId:"1:112677358874:web:2adc6ace27b4046110b0a3"},XI=Kw(hL),jr=Qb(XI),Xc=eD(XI),Mi=t=>{const{userData:e,setUserData:n}=L.useContext(tr),r=xi(),i=o=>{r(o)},s=async()=>{await Xc.signOut(),n({name:"Not Signed In",email:"null@mail.com",phone:"000000000",role:"Customer",uid:"000000000000000000000000"}),r("/login")};return k.jsxs("div",{className:"fixed w-full h-[8vh] bg-white font-sans flex items-center px-[4vh]",children:[k.jsx("div",{className:"text-black text-[2vh] font-medium",children:"SEA Salon"}),e.name!=="Not Signed In"&&k.jsxs("div",{className:"flex flex-grow h-full ml-[10vh] text-black items-center px-[5vh]",children:[k.jsx("button",{className:"text-[1.75vh] py-[0.75vh] px-[2vh] rounded-full mx-[2.5vh]",onClick:()=>i("/"),children:"Home"}),e.role==="Admin"?k.jsxs("div",{children:[k.jsx("button",{className:"text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[2.5vh]",onClick:()=>i("/addservice"),children:"Add new service"}),k.jsx("button",{className:"text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[2.5vh]",onClick:()=>i("/viewreview"),children:"View Review"})]}):k.jsxs("div",{children:[k.jsx("button",{className:"text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[2.5vh]",onClick:()=>i("/review"),children:"Review"}),k.jsx("button",{className:"text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[2.5vh]",onClick:()=>i("/reservation"),children:"Reservation"})]})]}),e.name==="Not Signed In"?!t.authPage&&k.jsx("div",{className:"flex items-center flex-grow justify-end",children:k.jsx("button",{className:"text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[3vh] bg-black hover:bg-gray-500",onClick:()=>i("/login"),children:"Sign In"})}):k.jsx("div",{className:"w-fit h-full flex items-center text-black text-[1.75vh]",children:k.jsxs("button",{className:"px-[4vh] py-[0.75vh] rounded-full",onClick:()=>s(),children:[e.name," - ",e.role]})})]})},dL="/SEA-Salon/assets/haircut-CZzvqJ1o.png",fL="/SEA-Salon/assets/manicure-BSgmpntQ.png",pL="/SEA-Salon/assets/facial_treatment-Dy-1_wGr.png",mL="/SEA-Salon/assets/default_icon-BNwVbdFy.png";var Pv={};const kv="@firebase/database",Nv="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let JI="";function gL(t){JI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ea(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return er(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _L(e)}}catch{}return new yL},ai=ZI("localStorage"),vL=ZI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Dc("@firebase/database"),EL=function(){let t=1;return function(){return t++}}(),eS=function(t){const e=LP(t),n=new NP;n.update(e);const r=n.digest();return qp.encodeByteArray(r)},Ya=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ya.apply(null,r):typeof r=="object"?e+=Xe(r):e+=r,e+=" "}return e};let Xo=null,xv=!0;const wL=function(t,e){z(!e,"Can't turn on custom loggers persistently."),vs.logLevel=te.VERBOSE,Xo=vs.log.bind(vs)},dt=function(...t){if(xv===!0&&(xv=!1,Xo===null&&vL.get("logging_enabled")===!0&&wL()),Xo){const e=Ya.apply(null,t);Xo(e)}},Xa=function(t){return function(...e){dt(t,...e)}},Uf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ya(...t);vs.error(e)},Ci=function(...t){const e=`FIREBASE FATAL ERROR: ${Ya(...t)}`;throw vs.error(e),new Error(e)},Vt=function(...t){const e="FIREBASE WARNING: "+Ya(...t);vs.warn(e)},TL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},IL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ms="[MIN_NAME]",Ri="[MAX_NAME]",Ys=function(t,e){if(t===e)return 0;if(t===Ms||e===Ri)return-1;if(e===Ms||t===Ri)return 1;{const n=Dv(t),r=Dv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},SL=function(t,e){return t===e?0:t<e?-1:1},So=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Xe(e))},Mm=function(t){if(typeof t!="object"||t===null)return Xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Xe(e[r]),n+=":",n+=Mm(t[e[r]]);return n+="}",n},nS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Qt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const rS=function(t){z(!tS(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let p="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},CL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},AL=new RegExp("^-?(0*)\\d{1,10}$"),PL=-2147483648,kL=2147483647,Dv=function(t){if(AL.test(t)){const e=Number(t);if(e>=PL&&e<=kL)return e}return null},Ja=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},NL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="5",iS="v",sS="s",oS="r",aS="f",lS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uS="ls",cS="p",jf="ac",hS="websocket",dS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,n,r,i,s=!1,o="",l=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ai.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ai.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fS(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(e===hS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===dS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bL(t)&&(n.ns=t.namespace);const i=[];return Qt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(){this.counters_={}}incrementCounter(e,n=1){er(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd={},hd={};function Fm(t){const e=t.toString();return cd[e]||(cd[e]=new LL),cd[e]}function ML(t,e){const n=t.toString();return hd[n]||(hd[n]=e()),hd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ja(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="start",FL="close",UL="pLPCommand",jL="pRTLPCB",pS="id",mS="pw",gS="ser",BL="cb",zL="seg",$L="ts",WL="d",HL="dframe",_S=1870,yS=30,qL=_S-yS,KL=25e3,GL=3e4;class as{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xa(e),this.stats_=Fm(n),this.urlFn=u=>(this.appCheckToken&&(u[jf]=this.appCheckToken),fS(n,dS,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GL)),IL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Um((...s)=>{const[o,l,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ov)this.id=l,this.password=u;else if(o===FL)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ov]="t",r[gS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[BL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[iS]=Vm,this.transportSessionId&&(r[sS]=this.transportSessionId),this.lastSessionId&&(r[uS]=this.lastSessionId),this.applicationId&&(r[cS]=this.applicationId),this.appCheckToken&&(r[jf]=this.appCheckToken),typeof location<"u"&&location.hostname&&lS.test(location.hostname)&&(r[oS]=aS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){as.forceAllow_=!0}static forceDisallow(){as.forceDisallow_=!0}static isAvailable(){return as.forceAllow_?!0:!as.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CL()&&!RL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Vw(n),i=nS(r,qL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[HL]="t",r[pS]=e,r[mS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Um{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=EL(),window[UL+this.uniqueCallbackIdentifier]=e,window[jL+this.uniqueCallbackIdentifier]=n,this.myIFrame=Um.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){dt("frame writing exception"),l.stack&&dt(l.stack),dt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pS]=this.myID,e[mS]=this.myPW,e[gS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yS+r.length<=_S;){const o=this.pendingSegs.shift();r=r+"&"+zL+i+"="+o.seg+"&"+$L+i+"="+o.ts+"&"+WL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(KL)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL=16384,YL=45e3;let ec=null;typeof MozWebSocket<"u"?ec=MozWebSocket:typeof WebSocket<"u"&&(ec=WebSocket);class tn{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xa(this.connId),this.stats_=Fm(n),this.connURL=tn.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[iS]=Vm,typeof location<"u"&&location.hostname&&lS.test(location.hostname)&&(o[oS]=aS),n&&(o[sS]=n),r&&(o[uS]=r),i&&(o[jf]=i),s&&(o[cS]=s),fS(e,hS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ai.set("previous_websocket_failure",!0);try{let r;$w(),this.mySock=new ec(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ec!==null&&!tn.forceDisallow_}static previouslyFailed(){return ai.isInMemoryStorage||ai.get("previous_websocket_failure")===!0}markConnectionHealthy(){ai.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ea(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=nS(n,QL);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[as,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tn&&tn.isAvailable();let r=n&&!tn.previouslyFailed();if(e.webSocketOnly&&(n||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[tn];else{const i=this.transports_=[];for(const s of xa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);xa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL=6e4,JL=5e3,ZL=10*1024,e2=100*1024,dd="t",bv="d",t2="s",Lv="r",n2="e",Mv="o",Vv="a",Fv="n",Uv="p",r2="h";class i2{constructor(e,n,r,i,s,o,l,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xa("c:"+this.id+":"),this.transportManager_=new xa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Jo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>e2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(dd in e){const n=e[dd];n===Vv?this.upgradeIfSecondaryHealthy_():n===Lv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Mv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=So("t",e),r=So("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=So("t",e),r=So("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=So(dd,e);if(bv in e){const r=e[bv];if(n===r2){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Fv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===t2?this.onConnectionShutdown_(r):n===Lv?this.onReset_(r):n===n2?Uf("Server Error: "+r):n===Mv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Uf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vm!==r&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Jo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ai.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends ES{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new tc}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=32,Bv=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new Te("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Br(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function wS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function s2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function TS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function IS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function qe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Te(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function Ht(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return Ht(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function SS(t,e){if(Br(t)!==Br(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function nn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Br(t)>Br(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class o2{constructor(e,n){this.errorPrefix_=n,this.parts_=TS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=xc(this.parts_[r]);CS(this)}}function a2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=xc(e),CS(t)}function l2(t){const e=t.parts_.pop();t.byteLength_-=xc(e),t.parts_.length>0&&(t.byteLength_-=1)}function CS(t){if(t.byteLength_>Bv)throw new Error(t.errorPrefix_+"has a key path longer than "+Bv+" bytes ("+t.byteLength_+").");if(t.parts_.length>jv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jv+") or object contains a cycle "+ni(t))}function ni(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm extends ES{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new jm}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=1e3,u2=60*5*1e3,zv=30*1e3,c2=1.3,h2=3e4,d2="server_kill",$v=3;class Wn extends vS{constructor(e,n,r,i,s,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=Wn.nextPersistentConnectionId_++,this.log_=Xa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Co,this.maxReconnectDelay_=u2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!$w())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Xe(s)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Kp,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const u=l.d,c=l.s;Wn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&er(e,"w")){const r=Ps(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=PP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Uf("Unrecognized action received from server: "+Xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Co,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Co,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>h2&&(this.reconnectDelay_=Co),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*c2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,r())},c=function(p){z(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,l=new i2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Vt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(d2)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Vt(p),u())}}}interrupt(e){dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pf(this.interruptReasons_)&&(this.reconnectDelay_=Co,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Mm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Te(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){dt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$v&&(this.reconnectDelay_=zv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){dt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$v&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+JI.replace(/\./g,"-")]=1,Gp()?e["framework.cordova"]=1:zw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tc.getInstance().currentlyOnline();return pf(this.interruptReasons_)&&e}}Wn.nextPersistentConnectionId_=0;Wn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(Ms,e),i=new oe(Ms,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl;class RS extends Jc{static get __EMPTY_NODE(){return Bl}static set __EMPTY_NODE(e){Bl=e}compare(e,n){return Ys(e.name,n.name)}isDefinedOn(e){throw Ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Ri,Bl)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Bl)}toString(){return".key"}}const Es=new RS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??At.EMPTY_NODE,this.right=s??At.EMPTY_NODE}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return At.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return At.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0;He.BLACK=!1;class f2{copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class At{constructor(e,n=At.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new At(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new At(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new zl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new zl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new zl(this.root_,null,this.comparator_,!0,e)}}At.EMPTY_NODE=new f2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t,e){return Ys(t.name,e.name)}function Bm(t,e){return Ys(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bf;function m2(t){Bf=t}const AS=function(t){return typeof t=="number"?"number:"+rS(t):"string:"+t},PS=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&er(e,".sv"),"Priority must be a string or number.")}else z(t===Bf||t.isEmpty(),"priority of unexpected type.");z(t===Bf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wv;class ze{constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),PS(this.priorityNode_)}static set __childrenNodeConstructor(e){Wv=e}static get __childrenNodeConstructor(){return Wv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:se(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||Br(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=rS(this.value_):e+=this.value_,this.lazyHash_=eS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ze.VALUE_TYPE_ORDER.indexOf(n),s=ze.VALUE_TYPE_ORDER.indexOf(r);return z(i>=0,"Unknown leaf type: "+n),z(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kS,NS;function g2(t){kS=t}function _2(t){NS=t}class y2 extends Jc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ys(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Ri,new ze("[PRIORITY-POST]",NS))}makePost(e,n){const r=kS(e);return new oe(n,new ze("[PRIORITY-POST]",r))}toString(){return".priority"}}const pt=new y2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=Math.log(2);class E2{constructor(e){const n=s=>parseInt(Math.log(s)/v2,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nc=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let p,m;if(d===0)return null;if(d===1)return p=t[u],m=n?n(p):p,new He(m,p.node,He.BLACK,null,null);{const v=parseInt(d/2,10)+u,C=i(u,v),P=i(v+1,c);return p=t[v],m=n?n(p):p,new He(m,p.node,He.BLACK,C,P)}},s=function(u){let c=null,d=null,p=t.length;const m=function(C,P){const N=p-C,T=p;p-=C;const y=i(N+1,T),R=t[N],b=n?n(R):R;v(new He(b,R.node,P,null,y))},v=function(C){c?(c.left=C,c=C):(d=C,c=C)};for(let C=0;C<u.count;++C){const P=u.nextBitIsOne(),N=Math.pow(2,u.count-(C+1));P?m(N,He.BLACK):(m(N,He.BLACK),m(N,He.RED))}return d},o=new E2(t.length),l=s(o);return new At(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd;const Wi={};class jn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(Wi&&pt,"ChildrenNode.ts has not been loaded"),fd=fd||new jn({".priority":Wi},{".priority":pt}),fd}get(e){const n=Ps(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof At?n:null}hasIndex(e){return er(this.indexSet_,e.toString())}addIndex(e,n){z(e!==Es,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=nc(r,e.getCompare()):l=Wi;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=l,new jn(d,c)}addToIndexes(e,n){const r=Fu(this.indexes_,(i,s)=>{const o=Ps(this.indexSet_,s);if(z(o,"Missing index implementation for "+s),i===Wi)if(o.isDefinedOn(e.node)){const l=[],u=n.getIterator(oe.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&l.push(c),c=u.getNext();return l.push(e),nc(l,o.getCompare())}else return Wi;else{const l=n.get(e.name);let u=i;return l&&(u=u.remove(new oe(e.name,l))),u.insert(e,e.node)}});return new jn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Fu(this.indexes_,i=>{if(i===Wi)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new jn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;class ce{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&PS(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ro||(Ro=new ce(new At(Bm),null,jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ro}updatePriority(e){return this.children_.isEmpty()?this:new ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ro:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ro:this.priorityNode_;return new ce(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{z(se(e)!==".priority"||Br(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ee(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(pt,(o,l)=>{n[o]=l.val(e),r++,s&&ce.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AS(this.getPriority().val())+":"),this.forEachChild(pt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":eS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Za?-1:0}withIndex(e){if(e===Es||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Es||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(pt),i=n.getIterator(pt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Es?null:this.indexMap_.get(e.toString())}}ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class w2 extends ce{constructor(){super(new At(Bm),ce.EMPTY_NODE,jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ce.EMPTY_NODE}isEmpty(){return!1}}const Za=new w2;Object.defineProperties(oe,{MIN:{value:new oe(Ms,ce.EMPTY_NODE)},MAX:{value:new oe(Ri,Za)}});RS.__EMPTY_NODE=ce.EMPTY_NODE;ze.__childrenNodeConstructor=ce;m2(Za);_2(Za);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=!0;function ft(t,e=null){if(t===null)return ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ze(n,ft(e))}if(!(t instanceof Array)&&T2){const n=[];let r=!1;if(Qt(t,(o,l)=>{if(o.substring(0,1)!=="."){const u=ft(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new oe(o,u)))}}),n.length===0)return ce.EMPTY_NODE;const s=nc(n,p2,o=>o.name,Bm);if(r){const o=nc(n,pt.getCompare());return new ce(s,ft(e),new jn({".priority":o},{".priority":pt}))}else return new ce(s,ft(e),jn.Default)}else{let n=ce.EMPTY_NODE;return Qt(t,(r,i)=>{if(er(t,r)&&r.substring(0,1)!=="."){const s=ft(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ft(e))}}g2(ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2 extends Jc{constructor(e){super(),this.indexPath_=e,z(!re(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ys(e.name,n.name):s}makePost(e,n){const r=ft(e),i=ce.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=ce.EMPTY_NODE.updateChild(this.indexPath_,Za);return new oe(Ri,e)}toString(){return TS(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2 extends Jc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ys(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=ft(e);return new oe(n,r)}toString(){return".value"}}const C2=new S2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(t){return{type:"value",snapshotNode:t}}function A2(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function P2(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function k2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ms}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ri}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pt}copy(){const e=new zm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pt?n="$priority":t.index_===C2?n="$value":t.index_===Es?n="$key":(z(t.index_ instanceof I2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Kv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends vS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Xa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=rc.getListenId_(e,r),l={};this.listens_[o]=l;const u=qv(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let p=d;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(s,p,!1,r),Ps(this.listens_,o)===l){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=rc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=qv(e._queryParams),r=e._path.toString(),i=new Kp;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hs(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=Ea(l.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(){this.rootNode_=ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){return{value:null,children:new Map}}function xS(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,ic());const i=t.children.get(r);e=Ee(e),xS(i,e,n)}}function zf(t,e,n){t.value!==null?n(e,t.value):x2(t,(r,i)=>{const s=new Te(e.toString()+"/"+r);zf(i,s,n)})}function x2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=10*1e3,O2=30*1e3,b2=5*60*1e3;class L2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new D2(e);const r=Gv+(O2-Gv)*Math.random();Jo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Qt(e,(i,s)=>{s>0&&er(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Jo(this.reportStats_.bind(this),Math.floor(Math.random()*2*b2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function DS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function OS(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bS(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pn.ACK_USER_WRITE,this.source=DS()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new sc(de(),n,this.revert)}}else return z(se(this.path)===e,"operationForChild called for unrelated child."),new sc(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pn.OVERWRITE}operationForChild(e){return re(this.path)?new Ai(this.source,de(),this.snap.getImmediateChild(e)):new Ai(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Ai(this.source,de(),n.value):new Da(this.source,de(),n)}else return z(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Da(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function M2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(k2(o.childName,o.snapshotNode))}),Ao(t,i,"child_removed",e,r,n),Ao(t,i,"child_added",e,r,n),Ao(t,i,"child_moved",s,r,n),Ao(t,i,"child_changed",e,r,n),Ao(t,i,"value",e,r,n),i}function Ao(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,u)=>F2(t,l,u)),o.forEach(l=>{const u=V2(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(u,t.query_))})})}function V2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function F2(t,e,n){if(e.childName==null||n.childName==null)throw Ws("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t,e){return{eventCache:t,serverCache:e}}function Zo(t,e,n,r){return LS(new $m(e,n,r),t.serverCache)}function MS(t,e,n,r){return LS(t.eventCache,new $m(e,n,r))}function $f(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd;const U2=()=>(pd||(pd=new At(SL)),pd);class ve{constructor(e,n=U2()){this.value=e,this.children=n}static fromObject(e){let n=new ve(null);return Qt(e,(r,i)=>{n=n.set(new Te(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(re(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ee(e),n);return s!=null?{path:qe(new Te(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(Ee(e)):new ve(null)}}set(e,n){if(re(e))return new ve(n,this.children);{const r=se(e),s=(this.children.get(r)||new ve(null)).set(Ee(e),n),o=this.children.insert(r,s);return new ve(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(Ee(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ve(null):new ve(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(Ee(e)):null}}setTree(e,n){if(re(e))return n;{const r=se(e),s=(this.children.get(r)||new ve(null)).setTree(Ee(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ve(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(qe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(Ee(e),qe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(Ee(e),qe(n,i),r):new ve(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(qe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.writeTree_=e}static empty(){return new on(new ve(null))}}function ea(t,e,n){if(re(e))return new on(new ve(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ht(i,e);return s=s.updateChild(o,n),new on(t.writeTree_.set(i,s))}else{const i=new ve(n),s=t.writeTree_.setTree(e,i);return new on(s)}}}function Qv(t,e,n){let r=t;return Qt(n,(i,s)=>{r=ea(r,qe(e,i),s)}),r}function Yv(t,e){if(re(e))return on.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new on(n)}}function Wf(t,e){return Vi(t,e)!=null}function Vi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ht(n.path,e)):null}function Xv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pt,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function Dr(t,e){if(re(e))return t;{const n=Vi(t,e);return n!=null?new on(new ve(n)):new on(t.writeTree_.subtree(e))}}function Hf(t){return t.writeTree_.isEmpty()}function Vs(t,e){return VS(de(),t.writeTree_,e)}function VS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(z(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=VS(qe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(qe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t,e){return $S(e,t)}function j2(t,e,n,r,i){z(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ea(t.visibleWrites,e,n)),t.lastWriteId=r}function B2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function z2(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&$2(l,r.path)?i=!1:nn(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return W2(t),!0;if(r.snap)t.visibleWrites=Yv(t.visibleWrites,r.path);else{const l=r.children;Qt(l,u=>{t.visibleWrites=Yv(t.visibleWrites,qe(r.path,u))})}return!0}else return!1}function $2(t,e){if(t.snap)return nn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nn(qe(t.path,n),e))return!0;return!1}function W2(t){t.visibleWrites=US(t.allWrites,H2,de()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function H2(t){return t.visible}function US(t,e,n){let r=on.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)nn(n,o)?(l=Ht(n,o),r=ea(r,l,s.snap)):nn(o,n)&&(l=Ht(o,n),r=ea(r,de(),s.snap.getChild(l)));else if(s.children){if(nn(n,o))l=Ht(n,o),r=Qv(r,l,s.children);else if(nn(o,n))if(l=Ht(o,n),re(l))r=Qv(r,de(),s.children);else{const u=Ps(s.children,se(l));if(u){const c=u.getChild(Ee(l));r=ea(r,de(),c)}}}else throw Ws("WriteRecord should have .snap or .children")}}return r}function jS(t,e,n,r,i){if(!r&&!i){const s=Vi(t.visibleWrites,e);if(s!=null)return s;{const o=Dr(t.visibleWrites,e);if(Hf(o))return n;if(n==null&&!Wf(o,de()))return null;{const l=n||ce.EMPTY_NODE;return Vs(o,l)}}}else{const s=Dr(t.visibleWrites,e);if(!i&&Hf(s))return n;if(!i&&n==null&&!Wf(s,de()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(nn(c.path,e)||nn(e,c.path))},l=US(t.allWrites,o,e),u=n||ce.EMPTY_NODE;return Vs(l,u)}}}function q2(t,e,n){let r=ce.EMPTY_NODE;const i=Vi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Dr(t.visibleWrites,e);return n.forEachChild(pt,(o,l)=>{const u=Vs(Dr(s,new Te(o)),l);r=r.updateImmediateChild(o,u)}),Xv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Dr(t.visibleWrites,e);return Xv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function K2(t,e,n,r,i){z(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=qe(e,n);if(Wf(t.visibleWrites,s))return null;{const o=Dr(t.visibleWrites,s);return Hf(o)?i.getChild(n):Vs(o,i.getChild(n))}}function G2(t,e,n,r){const i=qe(e,n),s=Vi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Dr(t.visibleWrites,i);return Vs(o,r.getNode().getImmediateChild(n))}else return null}function Q2(t,e){return Vi(t.visibleWrites,e)}function Y2(t,e,n,r,i,s,o){let l;const u=Dr(t.visibleWrites,e),c=Vi(u,de());if(c!=null)l=c;else if(n!=null)l=Vs(u,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],p=o.getCompare(),m=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=m.getNext();for(;v&&d.length<i;)p(v,r)!==0&&d.push(v),v=m.getNext();return d}else return[]}function X2(){return{visibleWrites:on.empty(),allWrites:[],lastWriteId:-1}}function qf(t,e,n,r){return jS(t.writeTree,t.treePath,e,n,r)}function BS(t,e){return q2(t.writeTree,t.treePath,e)}function Jv(t,e,n,r){return K2(t.writeTree,t.treePath,e,n,r)}function oc(t,e){return Q2(t.writeTree,qe(t.treePath,e))}function J2(t,e,n,r,i,s){return Y2(t.writeTree,t.treePath,e,n,r,i,s)}function Wm(t,e,n){return G2(t.writeTree,t.treePath,e,n)}function zS(t,e){return $S(qe(t.treePath,e),t.writeTree)}function $S(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Hv(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,P2(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,A2(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Hv(r,e.snapshotNode,i.oldSnap));else throw Ws("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const WS=new eM;class Hm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $m(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pi(this.viewCache_),s=J2(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function tM(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nM(t,e,n,r,i){const s=new Z2;let o,l;if(n.type===pn.OVERWRITE){const c=n;c.source.fromUser?o=Kf(t,e,c.path,c.snap,r,i,s):(z(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!re(c.path),o=ac(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===pn.MERGE){const c=n;c.source.fromUser?o=iM(t,e,c.path,c.children,r,i,s):(z(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Gf(t,e,c.path,c.children,r,i,l,s))}else if(n.type===pn.ACK_USER_WRITE){const c=n;c.revert?o=aM(t,e,c.path,r,i,s):o=sM(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===pn.LISTEN_COMPLETE)o=oM(t,e,n.path,r,s);else throw Ws("Unknown operation type: "+n.type);const u=s.getChanges();return rM(e,o,u),{viewCache:o,changes:u}}function rM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$f(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(R2($f(e)))}}function HS(t,e,n,r,i,s){const o=e.eventCache;if(oc(r,n)!=null)return e;{let l,u;if(re(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Pi(e),d=c instanceof ce?c:ce.EMPTY_NODE,p=BS(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const c=qf(r,Pi(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=se(n);if(c===".priority"){z(Br(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const p=Jv(r,n,d,u);p!=null?l=t.filter.updatePriority(d,p):l=o.getNode()}else{const d=Ee(n);let p;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=Jv(r,n,o.getNode(),u);m!=null?p=o.getNode().getImmediateChild(c).updateChild(d,m):p=o.getNode().getImmediateChild(c)}else p=Wm(r,c,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),c,p,d,i,s):l=o.getNode()}}return Zo(e,l,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function ac(t,e,n,r,i,s,o,l){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(re(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const v=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),v,null)}else{const v=se(n);if(!u.isCompleteForPath(n)&&Br(n)>1)return e;const C=Ee(n),N=u.getNode().getImmediateChild(v).updateChild(C,r);v===".priority"?c=d.updatePriority(u.getNode(),N):c=d.updateChild(u.getNode(),v,N,C,WS,null)}const p=MS(e,c,u.isFullyInitialized()||re(n),d.filtersNodes()),m=new Hm(i,p,s);return HS(t,p,n,i,m,l)}function Kf(t,e,n,r,i,s,o){const l=e.eventCache;let u,c;const d=new Hm(i,e,s);if(re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Zo(e,c,!0,t.filter.filtersNodes());else{const p=se(n);if(p===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Zo(e,c,l.isFullyInitialized(),l.isFiltered());else{const m=Ee(n),v=l.getNode().getImmediateChild(p);let C;if(re(m))C=r;else{const P=d.getCompleteChild(p);P!=null?wS(m)===".priority"&&P.getChild(IS(m)).isEmpty()?C=P:C=P.updateChild(m,r):C=ce.EMPTY_NODE}if(v.equals(C))u=e;else{const P=t.filter.updateChild(l.getNode(),p,C,m,d,o);u=Zo(e,P,l.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Zv(t,e){return t.eventCache.isCompleteForChild(e)}function iM(t,e,n,r,i,s,o){let l=e;return r.foreach((u,c)=>{const d=qe(n,u);Zv(e,se(d))&&(l=Kf(t,l,d,c,i,s,o))}),r.foreach((u,c)=>{const d=qe(n,u);Zv(e,se(d))||(l=Kf(t,l,d,c,i,s,o))}),l}function e0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Gf(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;re(n)?c=r:c=new ve(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((p,m)=>{if(d.hasChild(p)){const v=e.serverCache.getNode().getImmediateChild(p),C=e0(t,v,m);u=ac(t,u,new Te(p),C,i,s,o,l)}}),c.children.inorderTraversal((p,m)=>{const v=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!d.hasChild(p)&&!v){const C=e.serverCache.getNode().getImmediateChild(p),P=e0(t,C,m);u=ac(t,u,new Te(p),P,i,s,o,l)}}),u}function sM(t,e,n,r,i,s,o){if(oc(i,n)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(re(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return ac(t,e,n,u.getNode().getChild(n),i,s,l,o);if(re(n)){let c=new ve(null);return u.getNode().forEachChild(Es,(d,p)=>{c=c.set(new Te(d),p)}),Gf(t,e,n,c,i,s,l,o)}else return e}else{let c=new ve(null);return r.foreach((d,p)=>{const m=qe(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),Gf(t,e,n,c,i,s,l,o)}}function oM(t,e,n,r,i){const s=e.serverCache,o=MS(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return HS(t,o,n,r,WS,i)}function aM(t,e,n,r,i,s){let o;if(oc(r,n)!=null)return e;{const l=new Hm(r,e,i),u=e.eventCache.getNode();let c;if(re(n)||se(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=qf(r,Pi(e));else{const p=e.serverCache.getNode();z(p instanceof ce,"serverChildren would be complete if leaf node"),d=BS(r,p)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=se(n);let p=Wm(r,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=u.getImmediateChild(d)),p!=null?c=t.filter.updateChild(u,d,p,Ee(n),l,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,ce.EMPTY_NODE,Ee(n),l,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qf(r,Pi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||oc(r,de())!=null,Zo(e,c,o,t.filter.filtersNodes())}}function lM(t,e){const n=Pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function t0(t,e,n,r){e.type===pn.MERGE&&e.source.queryId!==null&&(z(Pi(t.viewCache_),"We should always have a full cache before handling merges"),z($f(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=nM(t.processor_,i,e,n,r);return tM(t.processor_,s.viewCache),z(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,uM(t,s.changes,s.viewCache.eventCache.getNode())}function uM(t,e,n,r){const i=t.eventRegistrations_;return M2(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n0;function cM(t){z(!n0,"__referenceConstructor has already been defined"),n0=t}function qm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return z(s!=null,"SyncTree gave us an op for an invalid query."),t0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(t0(o,e,n,r));return s}}function Km(t,e){let n=null;for(const r of t.views.values())n=n||lM(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r0;function hM(t){z(!r0,"__referenceConstructor has already been defined"),r0=t}class i0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=X2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dM(t,e,n,r,i){return j2(t.pendingWriteTree_,e,n,r,i),i?eh(t,new Ai(DS(),e,n)):[]}function ls(t,e,n=!1){const r=B2(t.pendingWriteTree_,e);if(z2(t.pendingWriteTree_,e)){let s=new ve(null);return r.snap!=null?s=s.set(de(),!0):Qt(r.children,o=>{s=s.set(new Te(o),!0)}),eh(t,new sc(r.path,s,n))}else return[]}function Zc(t,e,n){return eh(t,new Ai(OS(),e,n))}function fM(t,e,n){const r=ve.fromObject(n);return eh(t,new Da(OS(),e,r))}function pM(t,e,n,r){const i=QS(t,r);if(i!=null){const s=YS(i),o=s.path,l=s.queryId,u=Ht(o,e),c=new Ai(bS(l),u,n);return XS(t,o,c)}else return[]}function mM(t,e,n,r){const i=QS(t,r);if(i){const s=YS(i),o=s.path,l=s.queryId,u=Ht(o,e),c=ve.fromObject(n),d=new Da(bS(l),u,c);return XS(t,o,d)}else return[]}function qS(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const u=Ht(o,e),c=Km(l,u);if(c)return c});return jS(i,e,s,n,!0)}function eh(t,e){return KS(e,t.syncPointTree_,null,FS(t.pendingWriteTree_,de()))}function KS(t,e,n,r){if(re(t.path))return GS(t,e,n,r);{const i=e.get(de());n==null&&i!=null&&(n=Km(i,de()));let s=[];const o=se(t.path),l=t.operationForChild(o),u=e.children.get(o);if(u&&l){const c=n?n.getImmediateChild(o):null,d=zS(r,o);s=s.concat(KS(l,u,c,d))}return i&&(s=s.concat(qm(i,t,r,n))),s}}function GS(t,e,n,r){const i=e.get(de());n==null&&i!=null&&(n=Km(i,de()));let s=[];return e.children.inorderTraversal((o,l)=>{const u=n?n.getImmediateChild(o):null,c=zS(r,o),d=t.operationForChild(o);d&&(s=s.concat(GS(d,l,u,c)))}),i&&(s=s.concat(qm(i,t,r,n))),s}function QS(t,e){return t.tagToQueryMap.get(e)}function YS(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function XS(t,e,n){const r=t.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const i=FS(t.pendingWriteTree_,e);return qm(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gm(n)}node(){return this.node_}}class Qm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=qe(this.path_,e);return new Qm(this.syncTree_,n)}node(){return qS(this.syncTree_,this.path_)}}const gM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},s0=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _M(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yM(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_M=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},yM=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},vM=function(t,e,n,r){return Ym(e,new Qm(n,t),r)},EM=function(t,e,n){return Ym(t,new Gm(e),n)};function Ym(t,e,n){const r=t.getPriority().val(),i=s0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=s0(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ze(l,ft(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ze(i))),o.forEachChild(pt,(l,u)=>{const c=Ym(u,e.getImmediateChild(l),n);c!==u&&(s=s.updateImmediateChild(l,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Jm(t,e){let n=e instanceof Te?e:new Te(e),r=t,i=se(n);for(;i!==null;){const s=Ps(r.node.children,i)||{children:{},childCount:0};r=new Xm(i,r,s),n=Ee(n),i=se(n)}return r}function Xs(t){return t.node.value}function JS(t,e){t.node.value=e,Qf(t)}function ZS(t){return t.node.childCount>0}function wM(t){return Xs(t)===void 0&&!ZS(t)}function th(t,e){Qt(t.node.children,(n,r)=>{e(new Xm(n,t,r))})}function e1(t,e,n,r){n&&!r&&e(t),th(t,i=>{e1(i,e,!0,r)}),n&&r&&e(t)}function TM(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function el(t){return new Te(t.parent===null?t.name:el(t.parent)+"/"+t.name)}function Qf(t){t.parent!==null&&IM(t.parent,t.name,t)}function IM(t,e,n){const r=wM(n),i=er(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Qf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM=/[\[\].#$\/\u0000-\u001F\u007F]/,CM=/[\[\].#$\u0000-\u001F\u007F]/,md=10*1024*1024,t1=function(t){return typeof t=="string"&&t.length!==0&&!SM.test(t)},RM=function(t){return typeof t=="string"&&t.length!==0&&!CM.test(t)},AM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),RM(t)},n1=function(t,e,n){const r=n instanceof Te?new o2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ni(r));if(typeof e=="function")throw new Error(t+"contains a function "+ni(r)+" with contents = "+e.toString());if(tS(e))throw new Error(t+"contains "+e.toString()+" "+ni(r));if(typeof e=="string"&&e.length>md/3&&xc(e)>md)throw new Error(t+"contains a string greater than "+md+" utf8 bytes "+ni(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Qt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!t1(o)))throw new Error(t+" contains an invalid key ("+o+") "+ni(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);a2(r,o),n1(t,l,r),l2(r)}),i&&s)throw new Error(t+' contains ".value" child '+ni(r)+" in addition to actual children.")}},PM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!t1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!AM(n))throw new Error(bP(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function NM(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!SS(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Fi(t,e,n){NM(t,n),xM(t,r=>nn(r,e)||nn(e,r))}function xM(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(DM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function DM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Xo&&dt("event: "+n.toString()),Ja(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM="repo_interrupt",bM=25;class LM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ic(),this.transactionQueueTree_=new Xm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MM(t,e,n){if(t.stats_=Fm(t.repoInfo_),t.forceRestClient_||NL())t.server_=new rc(t.repoInfo_,(r,i,s,o)=>{o0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>a0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wn(t.repoInfo_,e,(r,i,s,o)=>{o0(t,r,i,s,o)},r=>{a0(t,r)},r=>{FM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ML(t.repoInfo_,()=>new L2(t.stats_,t.server_)),t.infoData_=new N2,t.infoSyncTree_=new i0({startListening:(r,i,s,o)=>{let l=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(l=Zc(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Zm(t,"connected",!1),t.serverSyncTree_=new i0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,u)=>{const c=o(l,u);Fi(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function VM(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function r1(t){return gM({timestamp:VM(t)})}function o0(t,e,n,r,i){t.dataUpdateCount++;const s=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Fu(n,c=>ft(c));o=mM(t.serverSyncTree_,s,u,i)}else{const u=ft(n);o=pM(t.serverSyncTree_,s,u,i)}else if(r){const u=Fu(n,c=>ft(c));o=fM(t.serverSyncTree_,s,u)}else{const u=ft(n);o=Zc(t.serverSyncTree_,s,u)}let l=s;o.length>0&&(l=tg(t,s)),Fi(t.eventQueue_,l,o)}function a0(t,e){Zm(t,"connected",e),e===!1&&jM(t)}function FM(t,e){Qt(e,(n,r)=>{Zm(t,n,r)})}function Zm(t,e,n){const r=new Te("/.info/"+e),i=ft(n);t.infoData_.updateSnapshot(r,i);const s=Zc(t.infoSyncTree_,r,i);Fi(t.eventQueue_,r,s)}function UM(t){return t.nextWriteId_++}function jM(t){i1(t,"onDisconnectEvents");const e=r1(t),n=ic();zf(t.onDisconnect_,de(),(i,s)=>{const o=vM(i,s,t.serverSyncTree_,e);xS(n,i,o)});let r=[];zf(n,de(),(i,s)=>{r=r.concat(Zc(t.serverSyncTree_,i,s));const o=WM(t,i);tg(t,o)}),t.onDisconnect_=ic(),Fi(t.eventQueue_,de(),r)}function BM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(OM)}function i1(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),dt(n,...e)}function s1(t,e,n){return qS(t.serverSyncTree_,e,n)||ce.EMPTY_NODE}function eg(t,e=t.transactionQueueTree_){if(e||nh(t,e),Xs(e)){const n=a1(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zM(t,el(e),n)}else ZS(e)&&th(e,n=>{eg(t,n)})}function zM(t,e,n){const r=n.map(c=>c.currentWriteId),i=s1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];z(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=Ht(e,d.path);s=s.updateChild(p,d.currentOutputSnapshotRaw)}const l=s.val(!0),u=e;t.server_.put(u.toString(),l,c=>{i1(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const p=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(ls(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&p.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();nh(t,Jm(t.transactionQueueTree_,e)),eg(t,t.transactionQueueTree_),Fi(t.eventQueue_,e,d);for(let m=0;m<p.length;m++)Ja(p[m])}else{if(c==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Vt("transaction at "+u.toString()+" failed: "+c);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=c}tg(t,e)}},o)}function tg(t,e){const n=o1(t,e),r=el(n),i=a1(t,n);return $M(t,i,r),r}function $M(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],c=Ht(n,u.path);let d=!1,p;if(z(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,p=u.abortReason,i=i.concat(ls(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=bM)d=!0,p="maxretry",i=i.concat(ls(t.serverSyncTree_,u.currentWriteId,!0));else{const m=s1(t,u.path,o);u.currentInputSnapshot=m;const v=e[l].update(m.val());if(v!==void 0){n1("transaction failed: Data returned ",v,u.path);let C=ft(v);typeof v=="object"&&v!=null&&er(v,".priority")||(C=C.updatePriority(m.getPriority()));const N=u.currentWriteId,T=r1(t),y=EM(C,m,T);u.currentOutputSnapshotRaw=C,u.currentOutputSnapshotResolved=y,u.currentWriteId=UM(t),o.splice(o.indexOf(N),1),i=i.concat(dM(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),i=i.concat(ls(t.serverSyncTree_,N,!0))}else d=!0,p="nodata",i=i.concat(ls(t.serverSyncTree_,u.currentWriteId,!0))}Fi(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(p),!1,null))))}nh(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Ja(r[l]);eg(t,t.transactionQueueTree_)}function o1(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&Xs(r)===void 0;)r=Jm(r,n),e=Ee(e),n=se(e);return r}function a1(t,e){const n=[];return l1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function l1(t,e,n){const r=Xs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);th(e,i=>{l1(t,i,n)})}function nh(t,e){const n=Xs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,JS(e,n.length>0?n:void 0)}th(e,r=>{nh(t,r)})}function WM(t,e){const n=el(o1(t,e)),r=Jm(t.transactionQueueTree_,e);return TM(r,i=>{gd(t,i)}),gd(t,r),e1(r,i=>{gd(t,i)}),n}function gd(t,e){const n=Xs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ls(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?JS(e,void 0):n.length=s+1,Fi(t.eventQueue_,el(e),i);for(let o=0;o<r.length;o++)Ja(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const l0=function(t,e){const n=KM(t),r=n.namespace;n.domain==="firebase.com"&&Ci(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ci("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new OL(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Te(n.pathString)}},KM=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(d,p)),d<p&&(i=HM(t.substring(d,p)));const m=qM(t.substring(Math.min(t.length,p)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const C=e.indexOf(".");r=e.substring(0,C).toLowerCase(),n=e.substring(C+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:wS(this._path)}get ref(){return new Js(this._repo,this._path)}get _queryIdentifier(){const e=Kv(this._queryParams),n=Mm(e);return n==="{}"?"default":n}get _queryObject(){return Kv(this._queryParams)}isEqual(e){if(e=gt(e),!(e instanceof ng))return!1;const n=this._repo===e._repo,r=SS(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+s2(this._path)}}class Js extends ng{constructor(e,n){super(e,n,new zm,!1)}get parent(){const e=IS(this._path);return e===null?null:new Js(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}cM(Js);hM(Js);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM="FIREBASE_DATABASE_EMULATOR_HOST",Yf={};let QM=!1;function YM(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ci("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=l0(s,i),l=o.repoInfo,u;typeof process<"u"&&Pv&&(u=Pv[GM]),u?(s=`http://${u}?ns=${l.namespace}`,o=l0(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new DL(t.name,t.options,e);PM("Invalid Firebase Database URL",o),re(o.path)||Ci("Database URL must point to the root of a Firebase Database (not including a child path).");const d=JM(l,t,c,new xL(t.name,n));return new ZM(d,t)}function XM(t,e){const n=Yf[e];(!n||n[t.key]!==t)&&Ci(`Database ${e}(${t.repoInfo_}) has already been deleted.`),BM(t),delete n[t.key]}function JM(t,e,n,r){let i=Yf[e.name];i||(i={},Yf[e.name]=i);let s=i[t.toURLString()];return s&&Ci("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new LM(t,QM,n,r),i[t.toURLString()]=s,s}class ZM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Js(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(XM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ci("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(t){gL(Di),yi(new Lr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return YM(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_n(kv,Nv,t),_n(kv,Nv,"esm2017")}Wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};eV();const tl=()=>{const{serviceData:t}=L.useContext(tr);return k.jsxs("div",{className:"w-full bg-white h-[20vh] font-sans flex mt-auto text-black text-center items-center",children:[k.jsxs("div",{className:"border border-t-black min-w-[10%] h-full flex flex-col justify-center items-center",children:[k.jsx("div",{className:"text-left w-full px-[2vh] text-[1.5vh]",children:"Contact Detail:"}),k.jsxs("div",{className:"my-[0.75vh] px-[2vh] text-left w-full text-[1.5vh]",children:[k.jsx("div",{className:"font-semibold",children:"Thomas"}),k.jsx("div",{children:"08123456789"})]}),k.jsxs("div",{className:"my-[0.75vh] px-[2vh] text-left w-full text-[1.5vh]",children:[k.jsx("div",{className:"font-semibold",children:"Sekar"}),k.jsx("div",{children:"08164829372"})]})]}),k.jsx("div",{className:"border border-x-black border-t-black w-[30%] h-full font-light flex flex-col justify-center text-[3vh] bg-gray-300",children:"Our Services"}),k.jsxs("div",{className:"border border-t-black border-r-black w-[20%] h-full flex flex-col justify-center items-center text-[1.5vh]",children:[k.jsx("img",{src:dL,alt:"Haircut",className:"w-[8vh] h-[8vh] opacity-60 m-[1vh]"}),k.jsx("div",{children:"Haircuts and styling"})]}),k.jsxs("div",{className:"border border-t-black border-r-black w-[20%] h-full flex flex-col justify-center items-center text-[1.5vh]",children:[k.jsx("img",{src:fL,alt:"Manicure",className:"w-[8vh] h-[8vh] opacity-60 m-[1vh]"}),k.jsx("div",{children:"Manicure and Pedicure"})]}),k.jsxs("div",{className:"border border-t-black border-r-black w-[20%] h-full flex flex-col justify-center items-center text-[1.5vh]",children:[k.jsx("img",{src:pL,alt:"Facial Treatments",className:"w-[8vh] h-[8vh] opacity-60 m-[1vh]"}),k.jsx("div",{children:"Facial Treatments"})]}),t.map((e,n)=>k.jsxs("div",{className:"border border-t-black border-r-black w-[20%] h-full flex flex-col justify-center items-center text-[1.5vh]",children:[k.jsx("img",{src:mL,alt:"Service",className:"w-[8vh] h-[8vh] opacity-60 m-[1vh]"}),k.jsx("div",{children:e.name})]},n))]})},tV=()=>k.jsxs("div",{className:"flex flex-col min-h-screen",children:[k.jsx(Mi,{}),k.jsxs("div",{className:"bg-[url('./assets/background.jpg')] flex flex-grow flex-col w-screen bg-cover pt-[8vh] p-[3vh] text-black font-sans",children:[k.jsx("div",{className:"ml-[10vh] mt-[25vh] text-[10vh] font-semibold",children:"SEA SALON"}),k.jsx("div",{className:"ml-[10vh] text-[3vh]",children:"Beauty and Elegance Redefined"})]}),k.jsx(tl,{})]});var nV={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function rV(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return nV[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function $l(t){var e=rV(t);return"".concat(e.value).concat(e.unit)}var iV=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},lc=function(){return lc=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},lc.apply(this,arguments)},sV=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},oV=iV("ScaleLoader","0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}","scale");function Fs(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,l=t.cssOverride,u=l===void 0?{}:l,c=t.height,d=c===void 0?35:c,p=t.width,m=p===void 0?4:p,v=t.radius,C=v===void 0?2:v,P=t.margin,N=P===void 0?2:P,T=sV(t,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),y=lc({display:"inherit"},u),R=function(b){return{backgroundColor:i,width:$l(m),height:$l(d),margin:$l(N),borderRadius:$l(C),display:"inline-block",animation:"".concat(oV," ").concat(1/o,"s ").concat(b*.1,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return n?L.createElement("span",lc({style:y},T),L.createElement("span",{style:R(1)}),L.createElement("span",{style:R(2)}),L.createElement("span",{style:R(3)}),L.createElement("span",{style:R(4)}),L.createElement("span",{style:R(5)})):null}var u1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u0=Bn.createContext&&Bn.createContext(u1),aV=["attr","size","title"];function lV(t,e){if(t==null)return{};var n=uV(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function uV(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function uc(){return uc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uc.apply(this,arguments)}function c0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function cc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?c0(Object(n),!0).forEach(function(r){cV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function cV(t,e,n){return e=hV(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hV(t){var e=dV(t,"string");return typeof e=="symbol"?e:e+""}function dV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function c1(t){return t&&t.map((e,n)=>Bn.createElement(e.tag,cc({key:n},e.attr),c1(e.child)))}function fV(t){return e=>Bn.createElement(pV,uc({attr:cc({},t.attr)},e),c1(t.child))}function pV(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=lV(t,aV),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),Bn.createElement("svg",uc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:cc(cc({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Bn.createElement("title",null,s),t.children)};return u0!==void 0?Bn.createElement(u0.Consumer,null,n=>e(n)):e(u1)}function dn(t){return fV({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"},child:[]}]})(t)}const mV=()=>{const{userData:t,user:e}=L.useContext(tr),[n,r]=L.useState(0),[i,s]=L.useState(0),[o,l]=L.useState(""),[u,c]=L.useState(!1),[d,p]=L.useState(!1);L.useEffect(()=>{e||m("/login")},[]);const m=xi(),v=async()=>{try{const N=Ur(jr,"datas","review"),T=await Qa(N);return T.exists()?T.data():(console.log("Data does not exist in database!"),null)}catch(N){return console.error("Error getting document:",N),null}},C=async()=>{try{c(!0);const N=await v();if(N){const T={review:[...N.review,{rating:i,comment:o,name:t.name}]};await QI(Ur(jr,"datas","review"),{review:T.review}),p(!0),setTimeout(()=>{p(!1),m("/")},3e3)}else console.log("Data does not exist in database!")}catch(N){console.error("Error getting document:",N)}finally{c(!1)}},P=async()=>{await C()};return k.jsxs("div",{className:"flex flex-col min-h-screen",children:[d&&k.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 bg-black font-sans text-3xl",children:[k.jsx("div",{children:"Thank you for your review! You'll be redirected to Home page shortly."}),k.jsx(Fs,{loading:!0,color:"white",margin:5,height:35})]}),u&&k.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black",children:k.jsx(Fs,{loading:u,color:"white",margin:5,height:35})}),k.jsx(Mi,{}),k.jsxs("div",{className:"bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[8vh] text-black font-sans p-[10vh]",children:[k.jsx("div",{className:"mt-[10vh] text-[6vh] font-semibold",children:"How was your experience with our services?"}),k.jsx("div",{className:"text-[3vh]",children:"Provide us a review"}),k.jsxs("div",{className:"flex mt-[5vh]",children:[k.jsx("button",{onClick:()=>s(1),onMouseEnter:()=>r(1),onMouseLeave:()=>r(0),className:"hover:bg-transparent pr-[1vh]",children:k.jsx(dn,{color:`${n>0||i>0?"#ffb900":"gray"}`,size:"8vh"})}),k.jsx("button",{onClick:()=>s(2),onMouseEnter:()=>r(2),onMouseLeave:()=>r(0),className:"hover:bg-transparent pr-[1vh]",children:k.jsx(dn,{color:`${n>1||i>1?"#ffb900":"gray"}`,size:"8vh"})}),k.jsx("button",{onClick:()=>s(3),onMouseEnter:()=>r(3),onMouseLeave:()=>r(0),className:"hover:bg-transparent pr-[1vh]",children:k.jsx(dn,{color:`${n>2||i>2?"#ffb900":"gray"}`,size:"8vh"})}),k.jsx("button",{onClick:()=>s(4),onMouseEnter:()=>r(4),onMouseLeave:()=>r(0),className:"hover:bg-transparent pr-[1vh]",children:k.jsx(dn,{color:`${n>3||i>3?"#ffb900":"gray"}`,size:"8vh"})}),k.jsx("button",{onClick:()=>s(5),onMouseEnter:()=>r(5),onMouseLeave:()=>r(0),className:"hover:bg-transparent pr-[1vh]",children:k.jsx(dn,{color:`${n>4||i>4?"#ffb900":"gray"}`,size:"8vh"})})]}),i>0&&k.jsxs("div",{className:"w-full",children:[k.jsx("textarea",{name:"",id:"",placeholder:"Comments",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[0.75vh] mt-[5vh] text-[2vh] w-full",value:o,onChange:N=>l(N.target.value)}),k.jsx("button",{onClick:()=>P(),className:"bg-black w-fit px-[4vh] py-[1vh] rounded-[1vh] mt-[4vh] text-white hover:bg-gray-500 text-[1.5vh]",children:"Submit"})]})]}),k.jsx(tl,{})]})},gV=()=>{const{serviceData:t,user:e}=L.useContext(tr),[n,r]=L.useState(""),[i,s]=L.useState(""),[o,l]=L.useState(""),[u,c]=L.useState(""),[d,p]=L.useState("");L.useEffect(()=>{e||m("/login")},[]);const m=xi(),v=()=>{if(n===""||i===""||o===""||u===""||d===""){alert("Please fill in all fields!");return}m("/")};return k.jsxs("div",{className:"flex flex-col min-h-screen",children:[k.jsx(Mi,{}),k.jsxs("div",{className:"bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[8vh] text-black font-sans p-[10vh]",children:[k.jsx("div",{className:"mt-[5vh] mb-[1vh] text-[4vh] font-semibold",children:"Reservation Form"}),k.jsxs("div",{className:"w-full",children:[k.jsx("input",{name:"",id:"",placeholder:"Name",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full",value:n,onChange:C=>r(C.target.value)}),k.jsx("input",{name:"",id:"",placeholder:"Active phone number",className:"bg-transparent border border-5 border-gray-500 rounded-xl p-[1vh] my-[1vh] text-[1.75vh] w-full",value:i,onChange:C=>s(C.target.value)}),k.jsxs("select",{name:"Type of Service",id:"cars",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans",children:[k.jsx("option",{value:"",disabled:"true",children:"Type of service"}),k.jsx("option",{value:"Haircuts and Styling",children:"Haircuts and Styling"}),k.jsx("option",{value:"Manicure and Pedicure",children:"Manicure and Pedicure"}),k.jsx("option",{value:"Facial Treatments",children:"Facial Treatments"}),t.map((C,P)=>k.jsx("option",{value:C.name,children:C.name},P))]}),k.jsx("input",{type:"date",id:"",placeholder:"Date",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full",value:u,onChange:C=>c(C.target.value)}),k.jsx("input",{type:"time",id:"",placeholder:"Time",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full",value:d,onChange:C=>p(C.target.value)}),k.jsx("button",{onClick:()=>v(),className:"bg-black w-fit px-[4vh] py-[1vh] rounded-[1vh] mt-[4vh] text-white hover:bg-gray-500 text-[1.5vh]",children:"Submit"})]})]}),k.jsx(tl,{})]})};var Qe=[];for(var _d=0;_d<256;++_d)Qe.push((_d+256).toString(16).slice(1));function _V(t,e=0){return(Qe[t[e+0]]+Qe[t[e+1]]+Qe[t[e+2]]+Qe[t[e+3]]+"-"+Qe[t[e+4]]+Qe[t[e+5]]+"-"+Qe[t[e+6]]+Qe[t[e+7]]+"-"+Qe[t[e+8]]+Qe[t[e+9]]+"-"+Qe[t[e+10]]+Qe[t[e+11]]+Qe[t[e+12]]+Qe[t[e+13]]+Qe[t[e+14]]+Qe[t[e+15]]).toLowerCase()}var Wl,yV=new Uint8Array(16);function vV(){if(!Wl&&(Wl=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Wl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Wl(yV)}var EV=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const h0={randomUUID:EV};function wV(t,e,n){if(h0.randomUUID&&!e&&!t)return h0.randomUUID();t=t||{};var r=t.random||(t.rng||vV)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,_V(r)}const TV=()=>{const[t,e]=L.useState(""),[n,r]=L.useState(""),[i,s]=L.useState(""),[o,l]=L.useState(""),[u,c]=L.useState(""),[d,p]=L.useState(!1),m=xi(),v=async()=>{try{await uL(Ur(jr,"users",u),{uid:wV(),name:t,email:u,phone:n,password:i,role:"Customer"})}catch(P){console.log(P)}},C=async()=>{if(t===""||n===""||i===""||o===""||u===""){alert("Please fill in all fields!");return}if(i!==o){alert("Password and confirm password do not match!");return}try{p(!0),await FN(Xc,u,i),await v(),m("/login")}catch(P){console.log(P)}finally{p(!1)}};return k.jsxs("div",{className:"flex flex-col min-h-screen",children:[d&&k.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black",children:k.jsx(Fs,{loading:d,color:"white",margin:5,height:35})}),k.jsx(Mi,{authPage:!0}),k.jsxs("div",{className:"bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[10vh] text-black font-sans p-[10vh]",children:[k.jsx("div",{className:"mt-[5vh] text-[4vh] font-semibold",children:"Register your account"}),k.jsxs("div",{className:"w-full",children:[k.jsx("input",{type:"string",placeholder:"Full Name",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans",value:t,onChange:P=>e(P.target.value)}),k.jsx("input",{type:"email",placeholder:"Email",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans",value:u,onChange:P=>c(P.target.value)}),k.jsx("input",{type:"text",placeholder:"Phone Number",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans",value:n,onChange:P=>r(P.target.value)}),k.jsx("input",{type:"password",placeholder:"Password",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans",value:i,onChange:P=>s(P.target.value)}),k.jsx("input",{type:"password",placeholder:"Confirm Password",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans",value:o,onChange:P=>l(P.target.value)}),k.jsxs("div",{className:"flex mt-[1vh] text-[1.5vh]",children:[k.jsx("div",{className:"mr-[1vh]",children:"Already have an account?"}),k.jsx("a",{onClick:()=>m("/login"),className:"text-gray-500 cursor-pointer hover:underline",children:"Login here"})]}),k.jsx("button",{onClick:()=>C(),className:"bg-black w-fit px-[4vh] py-[1vh] rounded-[1vh] mt-[4vh] text-white hover:bg-gray-500 text-[1.5vh]",children:"Register"})]})]})]})},IV=()=>{const{setUserData:t,setAdmin:e}=L.useContext(tr),[n,r]=L.useState(""),[i,s]=L.useState(""),[o,l]=L.useState(!1),u=xi(),c=async()=>{if(i===""||n===""){alert("Please fill in all required fields!");return}try{l(!0),await UN(Xc,i,n);const m=await p();m.role==="Admin"&&e(!0),t(m),u("/")}catch(m){console.error(m),alert(m.message.slice(10))}finally{l(!1)}},d=m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),c())},p=async()=>{try{const m=Ur(jr,"users",i),v=await Qa(m);return v.exists()?v.data():(console.log("Data does not exist in database!"),null)}catch(m){return console.error("Error getting document:",m),null}};return k.jsxs("div",{className:"flex flex-col min-h-screen",children:[o&&k.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black",children:k.jsx(Fs,{loading:o,color:"white",margin:5,height:35})}),k.jsx(Mi,{authPage:!0}),k.jsxs("div",{className:"bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[10vh] text-black font-sans p-[10vh]",children:[k.jsx("div",{className:"mt-[5vh] text-[4vh] font-semibold",children:"Sign in to your account"}),k.jsxs("div",{className:"w-full",children:[k.jsx("input",{type:"email",placeholder:"Email",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans",value:i,onChange:m=>s(m.target.value)}),k.jsx("input",{type:"password",onKeyDown:d,placeholder:"Password",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans",value:n,onChange:m=>r(m.target.value)}),k.jsxs("div",{className:"flex mt-[1vh] text-[1.5vh]",children:[k.jsx("div",{className:"mr-[1vh]",children:"Don't have an account?"}),k.jsx("a",{onClick:()=>u("/register"),className:"text-gray-500 cursor-pointer hover:underline",children:"Register here"})]}),k.jsx("button",{onClick:()=>c(),className:"bg-black w-fit px-[4vh] py-[1vh] rounded-[1vh] mt-[4vh] text-white hover:bg-gray-500 text-[1.5vh]",children:"Sign in"})]})]})]})},SV=()=>{const{setServiceData:t,admin:e}=L.useContext(tr);L.useState("");const[n,r]=L.useState(""),[i,s]=L.useState(0),[o,l]=L.useState(!1),u=xi();L.useEffect(()=>{e||u("/login")});const c=m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),p())},d=async()=>{try{const m=Ur(jr,"datas","services"),v=await Qa(m);return v.exists()?v.data():(console.log("Data does not exist in database!"),null)}catch(m){return console.error("Error getting document:",m),null}},p=async()=>{if(n===""||i<=0){alert("Please fill in all fields!");return}try{l(!0);const m=await d();if(m){const v={service:[...m.service,{duration:i.toString(),name:n}]};await QI(Ur(jr,"datas","services"),{service:v.service}),t(v.service),alert("Service added successfully!"),r(""),s(0)}else console.log("Data does not exist in database!")}catch(m){console.error("Error getting document:",m)}finally{l(!1)}};return k.jsxs("div",{className:"flex flex-col min-h-screen",children:[o&&k.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black",children:k.jsx(Fs,{loading:o,color:"white",margin:5,height:35})}),k.jsx(Mi,{authPage:!0}),k.jsxs("div",{className:"bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[10vh] text-black font-sans p-[10vh]",children:[k.jsx("div",{className:"mt-[5vh] text-[4vh] font-semibold",children:"Add a new service"}),k.jsxs("div",{className:"w-full",children:[k.jsx("input",{type:"text",placeholder:"Service name",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full",value:n,onChange:m=>r(m.target.value)}),k.jsx("input",{type:"number",onKeyDown:c,placeholder:"Duration",className:"bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full",value:i,onChange:m=>s(m.target.value)}),k.jsx("button",{onClick:()=>p(),className:"bg-black w-fit px-[4vh] py-[1vh] rounded-[1vh] mt-[4vh] text-white hover:bg-gray-500 text-[1.5vh]",children:"Add service"})]})]}),k.jsx(tl,{})]})},CV=()=>{const{setServiceData:t,admin:e}=L.useContext(tr);L.useState(""),L.useState("");const[n,r]=L.useState([]),[i,s]=L.useState(!1),o=xi();L.useEffect(()=>{e?l():o("/login")});const l=async()=>{try{const u=Ur(jr,"datas","review"),c=await Qa(u);c.exists()?r(c.data().review):console.log("Data does not exist in database!")}catch(u){console.error("Error getting document:",u)}};return k.jsxs("div",{className:"flex flex-col min-h-screen",children:[i&&k.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black",children:k.jsx(Fs,{loading:i,color:"white",margin:5,height:35})}),k.jsx(Mi,{authPage:!0}),k.jsxs("div",{className:"bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[8vh] text-black font-sans p-[10vh] text-[1.5vh]",children:[k.jsx("div",{className:"mt-[5vh] text-[4vh] font-semibold",children:"Customer reviews"}),n.map((u,c)=>k.jsxs("div",{className:"mt-[2vh] border-2",children:[k.jsxs("div",{className:"flex mb-[0.5vh]",children:[k.jsx(dn,{color:u.rating>0?"#ffb900":"gray"}),k.jsx(dn,{color:u.rating>1?"#ffb900":"gray"}),k.jsx(dn,{color:u.rating>2?"#ffb900":"gray"}),k.jsx(dn,{color:u.rating>3?"#ffb900":"gray"}),k.jsx(dn,{color:u.rating>4?"#ffb900":"gray"})]}),k.jsxs("div",{className:"font-semibold flex",children:["Comment: ",k.jsx("div",{className:"font-regular ml-[1vh]",children:u.comment})]}),k.jsxs("div",{className:"font-semibold flex",children:["Name: ",k.jsx("div",{className:"font-regular ml-[1vh]",children:u.name})]})]},c))]}),k.jsx(tl,{})]})},RV=()=>{const{setServiceData:t}=L.useContext(tr),e=async()=>{try{const n=Ur(jr,"datas","services"),r=await Qa(n);r.exists()?t(r.data().service):(console.log("Data does not exist in database!"),t([]))}catch(n){console.error("Error getting document:",n),t([])}};return L.useEffect(()=>{e()},[]),k.jsxs("main",{className:"flex flex-col min-h-screen",children:[k.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),k.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),k.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",rel:"stylesheet"}),k.jsx(lP,{basename:"/SEA-Salon",children:k.jsxs(sP,{children:[k.jsx(ar,{path:"/",element:k.jsx(tV,{})}),k.jsx(ar,{path:"/review",element:k.jsx(mV,{})}),k.jsx(ar,{path:"/reservation",element:k.jsx(gV,{})}),k.jsx(ar,{path:"/register",element:k.jsx(TV,{})}),k.jsx(ar,{path:"/login",element:k.jsx(IV,{})}),k.jsx(ar,{path:"/addservice",element:k.jsx(SV,{})}),k.jsx(ar,{path:"/viewreview",element:k.jsx(CV,{})})]})})]})},AV=({children:t})=>{const[e,n]=L.useState(null),[r,i]=L.useState([]),[s,o]=L.useState({name:"Not Signed In",email:"null@mail.com",phone:"000000000",role:"Customer",uid:"000000000000000000000000"}),[l,u]=L.useState(!1);return L.useEffect(()=>zN(Xc,d=>{n(d)}),[]),k.jsx(tr.Provider,{value:{userData:s,user:e,setUserData:o,setAdmin:u,admin:l,serviceData:r,setServiceData:i},children:t})};yd.createRoot(document.getElementById("root")).render(k.jsx(Bn.StrictMode,{children:k.jsx(AV,{children:k.jsx(RV,{})})}));
