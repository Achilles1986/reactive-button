"use strict";var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(null==t&&n.path)}},n.exports),n.exports}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".reactive-btn-wrapper,\n.reactive-btn {\n  --reactive-button-min-width: 100px;\n  --reactive-button-min-height: 35px;\n  --reactive-button-font-size: 14px;\n  --reactive-button-font-weight: 400;\n  --reactive-button-border-radius: 0px;\n  --reactive-button-text-color: #ffffff;\n  --reactive-progress-color: rgba(0, 0, 0, 0.15);\n\n  --reactive-button-primary-color: rgba(88, 103, 221, 1);\n  --reactive-button-secondary-color: rgba(108, 117, 125, 1);\n  --reactive-button-dark-color: rgba(66, 78, 106, 1);\n  --reactive-button-light-color: rgba(183, 186, 191, 1);\n  --reactive-button-green-color: rgba(37, 162, 51, 1);\n  --reactive-button-red-color: rgba(244, 81, 108, 1);\n  --reactive-button-yellow-color: rgba(255, 193, 7, 1);\n  --reactive-button-teal-color: rgba(0, 181, 173, 1);\n  --reactive-button-violet-color: rgba(100, 53, 201, 1);\n  --reactive-button-blue-color: rgba(66, 153, 225, 1);\n\n  --reactive-progress-outline-primary-color: rgba(88, 103, 221, 0.3);\n  --reactive-progress-outline-secondary-color: rgba(108, 117, 125, 0.3);\n  --reactive-progress-outline-dark-color: rgba(66, 78, 106, 0.3);\n  --reactive-progress-outline-light-color: rgba(214, 212, 212, 0.3);\n  --reactive-progress-outline-green-color: rgba(37, 162, 51, 0.3);\n  --reactive-progress-outline-red-color: rgba(244, 81, 108, 0.3);\n  --reactive-progress-outline-yellow-color: rgba(255, 193, 7, 0.3);\n  --reactive-progress-outline-teal-color: rgba(0, 181, 173, 0.3);\n  --reactive-progress-outline-violet-color: rgba(100, 53, 201, 0.3);\n  --reactive-progress-outline-blue-color: rgba(66, 153, 225, 0.3);\n}\n\n.reactive-btn-wrapper {\n  display: inline-block;\n  min-width: var(--reactive-button-min-width);\n  height: var(--reactive-button-min-height);\n}\n\n.reactive-btn-wrapper.tiny {\n  min-width: calc(var(--reactive-button-min-width) - 35px);\n  height: calc(var(--reactive-button-min-height) - 11px);\n}\n\n.reactive-btn-wrapper.small {\n  min-width: calc(var(--reactive-button-min-width) - 25px);\n  height: calc(var(--reactive-button-min-height) - 5px);\n}\n\n.reactive-btn-wrapper.large {\n  min-width: calc(var(--reactive-button-min-width) + 25px);\n  height: calc(var(--reactive-button-min-height) + 5px);\n}\n\n.reactive-btn-wrapper.block {\n  width: 100%;\n}\n\n.reactive-btn {\n  margin-bottom: 0;\n  padding: 6px 14px 6px;\n  font-size: var(--reactive-button-font-size);\n  font-weight: var(--reactive-button-font-weight);\n  width: 100%;\n  min-height: 100%;\n  color: var(--reactive-button-text-color);\n  text-align: center;\n  line-height: 1.5;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  vertical-align: middle;\n  cursor: pointer;\n  background-color: var(--reactive-button-primary-color);\n  border: none;\n  -webkit-border-radius: var(--reactive-button-border-radius);\n  -moz-border-radius: var(--reactive-button-border-radius);\n  border-radius: var(--reactive-button-border-radius);\n  -webkit-box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.1s;\n  -moz-transition: 0.1s;\n  transition: 0.1s;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  outline: none !important;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n}\n\n.reactive-btn.outline {\n  background-color: transparent !important;\n}\n\n.reactive-btn:disabled {\n  cursor: default;\n}\n\n.reactive-btn:hover:not(:disabled):not(.disabled) {\n  opacity: 0.85;\n}\n\n.reactive-btn:not(.no-animation):hover:not(:disabled):not(.disabled) {\n  opacity: 0.85;\n  -webkit-box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);\n  margin-top: -1px;\n  padding: 6px 14px 8px;\n}\n\n.reactive-btn:not(.no-animation):active:not(:disabled):not(.disabled) {\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  margin-top: 1px;\n  padding: 6px 14px 4px;\n}\n\n.reactive-btn:focus {\n  outline: none !important;\n}\n\n.reactive-btn.rounded {\n  border-radius: 50rem !important;\n  -webkit-border-radius: 50rem !important;\n  -moz-border-radius: 50rem !important;\n}\n\n.reactive-btn.disabled {\n  opacity: 0.7;\n}\n\n.reactive-btn .content {\n  position: relative;\n}\n\n.reactive-btn .progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background-color: var(--reactive-progress-color);\n  transform: translateX(-100%);\n  transition: transform 0.2s ease;\n}\n\n.reactive-btn:not([data-button-state='idle']) .progress {\n  transform: translateX(0%);\n  transition: transform 3s cubic-bezier(0.59, 0.01, 0.41, 0.99);\n}\n\n.reactive-btn .drbll1:after {\n  content: '.';\n  animation: dots 1s steps(5, end) infinite;\n}\n\n.reactive-btn-wrapper.tiny .reactive-btn {\n  font-size: calc(var(--reactive-button-font-size) - 4px);\n  line-height: 1;\n}\n\n.reactive-btn-wrapper.small .reactive-btn {\n  font-size: calc(var(--reactive-button-font-size) - 2px);\n}\n\n.reactive-btn-wrapper.large .reactive-btn {\n  font-size: calc(var(--reactive-button-font-size) + 2px);\n}\n\n/* primary button starts */\n.reactive-btn.primary.outline {\n  border-color: var(--reactive-button-primary-color);\n  color: var(--reactive-button-primary-color);\n  border: 1px solid var(--reactive-button-primary-color);\n  box-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n  -webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n  -moz-box-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n}\n\n.reactive-btn.primary.outline .progress {\n  background-color: var(--reactive-progress-outline-primary-color) !important;\n}\n\n.reactive-btn.primary.outline:hover:not(:disabled):not(.disabled) {\n  box-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n  -webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n  -moz-box-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n}\n\n.reactive-btn.primary.shadow {\n  box-shadow: 0px 5px 16px -3px var(--reactive-button-primary-color) !important;\n}\n\n/* primary button ends */\n\n/* secondary button starts */\n.reactive-btn.secondary {\n  background: var(--reactive-button-secondary-color);\n}\n\n.reactive-btn.secondary.outline {\n  border-color: var(--reactive-button-secondary-color);\n  color: var(--reactive-button-secondary-color);\n  border: 1px solid var(--reactive-button-secondary-color);\n  box-shadow: inset 0 -1px 0 var(--reactive-button-secondary-color);\n  -webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-secondary-color);\n  -moz-box-shadow: inset 0 -1px 0 var(--reactive-button-secondary-color);\n}\n\n.reactive-btn.secondary.outline .progress {\n  background-color: var(--reactive-progress-outline-secondary-color) !important;\n}\n\n.reactive-btn.secondary.outline:hover:not(:disabled):not(.disabled) {\n  box-shadow: inset 0 -3px 0 var(--reactive-button-secondary-color);\n  -webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-secondary-color);\n  -moz-box-shadow: inset 0 -3px 0 var(--reactive-button-secondary-color);\n}\n\n.reactive-btn.secondary.shadow {\n  box-shadow: 0px 5px 16px -3px var(--reactive-button-secondary-color) !important;\n}\n\n/* secondary button ends */\n\n/* dark button starts */\n\n.reactive-btn.dark {\n  background: var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.outline {\n  border-color: var(--reactive-button-dark-color);\n  color: var(--reactive-button-dark-color);\n  border: 1px solid var(--reactive-button-dark-color);\n  box-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n  -webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n  -moz-box-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.outline .progress {\n  background-color: var(--reactive-progress-outline-dark-color) !important;\n}\n\n.reactive-btn.dark.outline:hover:not(:disabled):not(.disabled) {\n  box-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n  -webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n  -moz-box-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.shadow {\n  box-shadow: 0px 5px 16px -3px var(--reactive-button-dark-color) !important;\n}\n\n/* dark button ends */\n\n/* light button starts */\n\n.reactive-btn.light {\n  background: var(--reactive-button-light-color);\n  color: #000000;\n}\n\n.reactive-btn.light.outline {\n  border-color: var(--reactive-button-light-color);\n  color: var(--reactive-button-light-color);\n  border: 1px solid var(--reactive-button-light-color);\n  box-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n  -webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n  -moz-box-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n}\n\n.reactive-btn.light.outline .progress {\n  background-color: var(--reactive-progress-outline-light-color) !important;\n}\n\n.reactive-btn.light.outline:hover:not(:disabled):not(.disabled) {\n  box-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n  -webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n  -moz-box-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n}\n\n.reactive-btn.light.shadow {\n  box-shadow: 0px 5px 16px -3px var(--reactive-button-light-color) !important;\n}\n\n/* light button ends */\n\n/* green button starts */\n.reactive-btn.green {\n  background: var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.outline {\n  border-color: var(--reactive-button-green-color);\n  color: var(--reactive-button-green-color);\n  border: 1px solid var(--reactive-button-green-color);\n  box-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n  -webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n  -moz-box-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.outline .progress {\n  background-color: var(--reactive-progress-outline-green-color) !important;\n}\n\n.reactive-btn.green.outline:hover:not(:disabled):not(.disabled) {\n  box-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n  -webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n  -moz-box-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.shadow {\n  box-shadow: 0px 5px 16px -3px var(--reactive-button-green-color) !important;\n}\n\n/* green button ends */\n\n/* red button starts */\n.reactive-btn.red {\n  background: var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.outline {\n  border-color: var(--reactive-button-red-color);\n  color: var(--reactive-button-red-color);\n  border: 1px solid var(--reactive-button-red-color);\n  box-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n  -webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n  -moz-box-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.outline .progress {\n  background-color: var(--reactive-progress-outline-red-color) !important;\n}\n\n.reactive-btn.red.outline:hover:not(:disabled):not(.disabled) {\n  box-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n  -webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n  -moz-box-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.shadow {\n  box-shadow: 0px 5px 16px -3px var(--reactive-button-red-color) !important;\n}\n\n/* red button ends */\n\n/* yellow button starts */\n.reactive-btn.yellow {\n  background: var(--reactive-button-yellow-color);\n  color: #000000;\n}\n\n.reactive-btn.yellow.outline {\n  border-color: var(--reactive-button-yellow-color);\n  color: var(--reactive-button-yellow-color);\n  border: 1px solid var(--reactive-button-yellow-color);\n  box-shadow: inset 0 -1px 0 var(--reactive-button-yellow-color);\n  -webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-yellow-color);\n  -moz-box-shadow: inset 0 -1px 0 var(--reactive-button-yellow-color);\n}\n\n.reactive-btn.yellow.outline .progress {\n  background-color: var(--reactive-progress-outline-yellow-color) !important;\n}\n\n.reactive-btn.yellow.outline:hover:not(:disabled):not(.disabled) {\n  box-shadow: inset 0 -3px 0 var(--reactive-button-yellow-color);\n  -webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-yellow-color);\n  -moz-box-shadow: inset 0 -3px 0 var(--reactive-button-yellow-color);\n}\n\n.reactive-btn.yellow.shadow {\n  box-shadow: 0px 5px 16px -3px var(--reactive-button-yellow-color) !important;\n}\n\n/* yellow button ends */\n\n/* teal button starts */\n.reactive-btn.teal {\n  background: var(--reactive-button-teal-color);\n}\n\n.reactive-btn.teal.outline {\n  border-color: var(--reactive-button-teal-color);\n  color: var(--reactive-button-teal-color);\n  border: 1px solid var(--reactive-button-teal-color);\n  box-shadow: inset 0 -1px 0 var(--reactive-button-teal-color);\n  -webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-teal-color);\n  -moz-box-shadow: inset 0 -1px 0 var(--reactive-button-teal-color);\n}\n\n.reactive-btn.teal.outline .progress {\n  background-color: var(--reactive-progress-outline-teal-color) !important;\n}\n\n.reactive-btn.teal.outline:hover:not(:disabled):not(.disabled) {\n  box-shadow: inset 0 -3px 0 var(--reactive-button-teal-color);\n  -webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-teal-color);\n  -moz-box-shadow: inset 0 -3px 0 var(--reactive-button-teal-color);\n}\n\n.reactive-btn.teal.shadow {\n  box-shadow: 0px 5px 16px -3px var(--reactive-button-teal-color) !important;\n}\n\n/* teal button ends */\n\n/* violet button starts */\n.reactive-btn.violet {\n  background: var(--reactive-button-violet-color);\n}\n\n.reactive-btn.violet.outline {\n  border-color: var(--reactive-button-violet-color);\n  color: var(--reactive-button-violet-color);\n  border: 1px solid var(--reactive-button-violet-color);\n  box-shadow: inset 0 -1px 0 var(--reactive-button-violet-color);\n  -webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-violet-color);\n  -moz-box-shadow: inset 0 -1px 0 var(--reactive-button-violet-color);\n}\n\n.reactive-btn.violet.outline .progress {\n  background-color: var(--reactive-progress-outline-violet-color) !important;\n}\n\n.reactive-btn.violet.outline:hover:not(:disabled):not(.disabled) {\n  box-shadow: inset 0 -3px 0 var(--reactive-button-violet-color);\n  -webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-violet-color);\n  -moz-box-shadow: inset 0 -3px 0 var(--reactive-button-violet-color);\n}\n\n.reactive-btn.violet.shadow {\n  box-shadow: 0px 5px 16px -3px var(--reactive-button-violet-color) !important;\n}\n\n/* violet button ends */\n\n/* blue button starts */\n.reactive-btn.blue {\n  background: var(--reactive-button-blue-color);\n}\n\n.reactive-btn.blue.outline {\n  border-color: var(--reactive-button-blue-color);\n  color: var(--reactive-button-blue-color);\n  border: 1px solid var(--reactive-button-blue-color);\n  box-shadow: inset 0 -1px 0 var(--reactive-button-blue-color);\n  -webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-blue-color);\n  -moz-box-shadow: inset 0 -1px 0 var(--reactive-button-blue-color);\n}\n\n.reactive-btn.blue.outline .progress {\n  background-color: var(--reactive-progress-outline-blue-color) !important;\n}\n\n.reactive-btn.blue.outline:hover:not(:disabled):not(.disabled) {\n  box-shadow: inset 0 -3px 0 var(--reactive-button-blue-color);\n  -webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-blue-color);\n  -moz-box-shadow: inset 0 -3px 0 var(--reactive-button-blue-color);\n}\n\n.reactive-btn.blue.shadow {\n  box-shadow: 0px 5px 16px -3px var(--reactive-button-blue-color) !important;\n}\n\n/* blue button ends */\n\n.reactive-spin {\n  animation: reactive-spin 2s infinite linear;\n}\n.reactive-btn-loading-svg,\n.reactive-btn-success-svg,\n.reactive-btn-error-svg {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n\n@keyframes dots {\n  0%,\n  20% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);\n  }\n\n  40% {\n    color: white;\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);\n  }\n\n  60% {\n    text-shadow: 0.25em 0 0 white, 0.5em 0 0 rgba(0, 0, 0, 0);\n  }\n\n  80%,\n  100% {\n    text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;\n  }\n}\n\n@keyframes reactive-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n");var i="function"==typeof Symbol&&Symbol.for,c=i?Symbol.for("react.element"):60103,l=i?Symbol.for("react.portal"):60106,s=i?Symbol.for("react.fragment"):60107,u=i?Symbol.for("react.strict_mode"):60108,b=i?Symbol.for("react.profiler"):60114,d=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,v=i?Symbol.for("react.async_mode"):60111,f=i?Symbol.for("react.concurrent_mode"):60111,y=i?Symbol.for("react.forward_ref"):60112,m=i?Symbol.for("react.suspense"):60113,x=i?Symbol.for("react.suspense_list"):60120,g=i?Symbol.for("react.memo"):60115,h=i?Symbol.for("react.lazy"):60116,w=i?Symbol.for("react.block"):60121,k=i?Symbol.for("react.fundamental"):60117,S=i?Symbol.for("react.responder"):60118,E=i?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case c:switch(e=e.type){case v:case f:case s:case b:case u:case m:return e;default:switch(e=e&&e.$$typeof){case p:case y:case h:case g:case d:return e;default:return t}}case l:return t}}}function T(e){return O(e)===f}var z={AsyncMode:v,ConcurrentMode:f,ContextConsumer:p,ContextProvider:d,Element:c,ForwardRef:y,Fragment:s,Lazy:h,Memo:g,Portal:l,Profiler:b,StrictMode:u,Suspense:m,isAsyncMode:function(e){return T(e)||O(e)===v},isConcurrentMode:T,isContextConsumer:function(e){return O(e)===p},isContextProvider:function(e){return O(e)===d},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===c},isForwardRef:function(e){return O(e)===y},isFragment:function(e){return O(e)===s},isLazy:function(e){return O(e)===h},isMemo:function(e){return O(e)===g},isPortal:function(e){return O(e)===l},isProfiler:function(e){return O(e)===b},isStrictMode:function(e){return O(e)===u},isSuspense:function(e){return O(e)===m},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===b||e===u||e===m||e===x||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===g||e.$$typeof===d||e.$$typeof===p||e.$$typeof===y||e.$$typeof===k||e.$$typeof===S||e.$$typeof===E||e.$$typeof===w)},typeOf:O},j=a((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,b=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,x=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case s:case u:case o:case i:case a:case d:return p;default:var y=p&&p.$$typeof;switch(y){case l:case b:case f:case v:case c:return y;default:return t}}case r:return t}}}var w=s,k=u,S=l,E=c,O=n,T=b,z=o,j=f,$=v,N=r,C=i,P=a,_=d,I=!1;function R(e){return h(e)===u}t.AsyncMode=w,t.ConcurrentMode=k,t.ContextConsumer=S,t.ContextProvider=E,t.Element=O,t.ForwardRef=T,t.Fragment=z,t.Lazy=j,t.Memo=$,t.Portal=N,t.Profiler=C,t.StrictMode=P,t.Suspense=_,t.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||h(e)===s},t.isConcurrentMode=R,t.isContextConsumer=function(e){return h(e)===l},t.isContextProvider=function(e){return h(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return h(e)===b},t.isFragment=function(e){return h(e)===o},t.isLazy=function(e){return h(e)===f},t.isMemo=function(e){return h(e)===v},t.isPortal=function(e){return h(e)===r},t.isProfiler=function(e){return h(e)===i},t.isStrictMode=function(e){return h(e)===a},t.isSuspense=function(e){return h(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===i||e===a||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===v||e.$$typeof===c||e.$$typeof===l||e.$$typeof===b||e.$$typeof===m||e.$$typeof===x||e.$$typeof===g||e.$$typeof===y)},t.typeOf=h}()})),$=a((function(e){"production"===process.env.NODE_ENV?e.exports=z:e.exports=j})),N=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;function _(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var I=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=_(e),a=1;a<arguments.length;a++){for(var i in n=Object(arguments[a]))C.call(n,i)&&(o[i]=n[i]);if(N){r=N(n);for(var c=0;c<r.length;c++)P.call(n,r[c])&&(o[r[c]]=n[r[c]])}}return o},R=Function.call.bind(Object.prototype.hasOwnProperty),A="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",M=R,D=function(){};if("production"!==process.env.NODE_ENV){var V=A,F={},L=M;D=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function q(e,t,n,r,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(L(e,a)){var i;try{if("function"!=typeof e[a]){var c=Error((r||"React class")+": "+n+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[a](t,a,r,n,null,V)}catch(e){i=e}if(!i||i instanceof Error||D((r||"React class")+": type specification of "+n+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in F)){F[i.message]=!0;var l=o?o():"";D("Failed "+n+" type: "+i.message+(null!=l?l:""))}}}q.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(F={})};var W=q,B=function(){};function U(){return null}"production"!==process.env.NODE_ENV&&(B=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}});function Y(){}function J(){}J.resetWarningCache=Y;var X=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator;var r="<<anonymous>>",o={array:l("array"),bigint:l("bigint"),bool:l("boolean"),func:l("function"),number:l("number"),object:l("object"),string:l("string"),symbol:l("symbol"),any:c(U),arrayOf:function(e){return c((function(t,n,r,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var c=t[n];if(!Array.isArray(c))return new i("Invalid "+o+" `"+a+"` of type `"+b(c)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<c.length;l++){var s=e(c,l,r,o,a+"["+l+"]",A);if(s instanceof Error)return s}return null}))},element:c((function(t,n,r,o,a){var c=t[n];return e(c)?null:new i("Invalid "+o+" `"+a+"` of type `"+b(c)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:c((function(e,t,n,r,o){var a=e[t];return $.isValidElementType(a)?null:new i("Invalid "+r+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return c((function(t,n,o,a,c){if(!(t[n]instanceof e)){var l=e.name||r;return new i("Invalid "+a+" `"+c+"` of type `"+(((s=t[n]).constructor&&s.constructor.name?s.constructor.name:r)+"` supplied to `")+o+"`, expected instance of `"+l+"`.")}var s;return null}))},node:c((function(e,t,n,r,o){return u(e[t])?null:new i("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return c((function(t,n,r,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],l=b(c);if("object"!==l)return new i("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var s in c)if(M(c,s)){var u=e(c,s,r,o,a+"."+s,A);if(u instanceof Error)return u}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&B(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),U;function t(t,n,r,o,c){for(var l=t[n],s=0;s<e.length;s++)if(a(l,e[s]))return null;var u=JSON.stringify(e,(function(e,t){return"symbol"===d(t)?String(t):t}));return new i("Invalid "+o+" `"+c+"` of value `"+String(l)+"` supplied to `"+r+"`, expected one of "+u+".")}return c(t)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&B("Invalid argument supplied to oneOfType, expected an instance of array."),U;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return B("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(n)+" at index "+t+"."),U}return c((function(t,n,r,o,a){for(var c=[],l=0;l<e.length;l++){var s=(0,e[l])(t,n,r,o,a,A);if(null==s)return null;s.data&&M(s.data,"expectedType")&&c.push(s.data.expectedType)}return new i("Invalid "+o+" `"+a+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return c((function(t,n,r,o,a){var c=t[n],l=b(c);if("object"!==l)return new i("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var p=e[u];if("function"!=typeof p)return s(r,o,a,u,d(p));var v=p(c,u,r,o,a+"."+u,A);if(v)return v}return null}))},exact:function(e){return c((function(t,n,r,o,a){var c=t[n],l=b(c);if("object"!==l)return new i("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var u=I({},t[n],e);for(var p in u){var v=e[p];if(M(e,p)&&"function"!=typeof v)return s(r,o,a,p,d(v));if(!v)return new i("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=v(c,p,r,o,a+"."+p,A);if(f)return f}return null}))}};function a(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function i(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function c(e){if("production"!==process.env.NODE_ENV)var n={},o=0;function a(a,c,l,s,u,b,d){if(s=s||r,b=b||l,d!==A){if(t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var v=s+":"+l;!n[v]&&o<3&&(B("You are manually calling a React.PropTypes validation function for the `"+b+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[v]=!0,o++)}}return null==c[l]?a?null===c[l]?new i("The "+u+" `"+b+"` is marked as required in `"+s+"`, but its value is `null`."):new i("The "+u+" `"+b+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(c,l,s,u,b)}var c=a.bind(null,!1);return c.isRequired=a.bind(null,!0),c}function l(e){return c((function(t,n,r,o,a,c){var l=t[n];return b(l)!==e?new i("Invalid "+o+" `"+a+"` of type `"+d(l)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function s(e,t,n,r,o){return new i((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function u(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(u);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!u(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!u(i[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function d(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function p(e){var t=d(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,o.checkPropTypes=W,o.resetWarningCache=W.resetWarningCache,o.PropTypes=o,o},H=function(){function e(e,t,n,r,o,a){if(a!==A){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:J,resetWarningCache:Y};return n.PropTypes=n,n},G=a((function(e){if("production"!==process.env.NODE_ENV){var t=$;e.exports=X(t.isElement,!0)}else e.exports=H()})),K=n.default.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"spinner",className:"reactive-btn-loading-svg reactive-spin",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n.default.createElement("path",{fill:"currentColor",d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"})),Q=n.default.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",className:"reactive-btn-success-svg",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n.default.createElement("path",{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"})),Z=n.default.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times",className:"reactive-btn-error-svg",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},n.default.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})),ee=function(t){var o=t.color?t.color:"primary",a=t.idleText?t.idleText:"Click Me",i=t.loadingText&&""!==t.loadingText?t.loadingText:"Loading",c=t.successText&&""!==t.successText?t.successText:"Success",l=t.errorText&&""!==t.errorText?t.errorText:"Error",s=t.type?t.type:"button",u="reactive-btn".concat(t.className?" "+t.className:""),b=!!t.outline,d=!!t.shadow,p=t.style?t.style:{},v=!!t.rounded,f=t.size?t.size:"normal",y=void 0===t.animation||!1!==t.animation,m=r(e.useState(t.buttonState?t.buttonState:"idle"),2),x=m[0],g=m[1];e.useEffect((function(){void 0!==t.buttonState&&(g(t.buttonState),"success"!==t.buttonState&&"error"!==t.buttonState||setTimeout((function(){g("idle")}),t.messageDuration?t.messageDuration:2e3))}),[t.buttonState,t.messageDuration]);var h;return n.default.createElement(n.default.Fragment,null,n.default.createElement("span",{className:"reactive-btn-wrapper ".concat(f).concat(t.block?" block":""),style:{width:t.width,height:t.height}},n.default.createElement("button",{ref:void 0!==t.buttonRef?t.buttonRef:null,disabled:"idle"!==x||t.disabled,"data-button-state":x,type:s,className:"".concat(u," ").concat(o).concat(b?" outline":"").concat(y?"":" no-animation").concat(v?" rounded":"").concat(d?" shadow":"").concat(t.disabled?" disabled":""),onClick:function(){void 0!==t.onClick&&t.onClick()},style:p},n.default.createElement("span",{className:"progress"}),n.default.createElement("span",{className:"content"},n.default.createElement(n.default.Fragment,null,"idle"===(h=x)?a:"loading"===h?"Loading"===i?n.default.createElement(n.default.Fragment,null,K," ",i):i:"success"===h?"Success"===c?n.default.createElement(n.default.Fragment,null,Q," ",c):c:"error"===h?"Error"===l?n.default.createElement(n.default.Fragment,null,Z," ",l):l:void 0)))))};ee.propTypes={color:G.string,idleText:G.oneOfType([G.string,G.node]),loadingText:G.oneOfType([G.string,G.node]),successText:G.oneOfType([G.string,G.node]),errorText:G.oneOfType([G.string,G.node]),type:G.string,className:G.string,outline:G.bool,shadow:G.bool,style:G.oneOfType([G.object,G.array]),rounded:G.bool,size:G.string,animation:G.bool,buttonState:G.string,onClick:G.func,messageDuration:G.number,block:G.bool,width:G.string,height:G.string,buttonRef:G.oneOfType([G.func,G.shape({current:G.any})]),disabled:G.bool},module.exports=ee;
