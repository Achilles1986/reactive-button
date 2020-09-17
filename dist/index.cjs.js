"use strict";var t=require("react");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=n(t);function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}!function(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===e&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(".reactive-btn {\n\t--reactive-button-min-width: 115px;\n\t--reactive-button-height: 20px;\n\t--reactive-button-font-size: 14px;\n\t--reactive-button-font-weight: 400;\n\t--reactive-button-text-color: #FFFFFF;\n\t--reactive-progress-color: rgba(0, 0, 0, .15);\n\n\t--reactive-button-primary-color: rgba(88, 103, 221, 1);\n\t--reactive-button-dark-color: rgba(66, 78, 106, 1);\n\t--reactive-button-light-color: rgba(245, 245, 245, 1);\n\t--reactive-button-green-color: rgba(52, 191, 163, 1);\n\t--reactive-button-red-color: rgba(244, 81, 108, 1);\n\n\t--reactive-progress-outline-primary-color: rgba(88, 103, 221, .3);\n\t--reactive-progress-outline-dark-color: rgba(66, 78, 106, .3);\n\t--reactive-progress-outline-light-color: rgba(245, 245, 245, .3);\n\t--reactive-progress-outline-green-color: rgba(52, 191, 163, .3);\n\t--reactive-progress-outline-red-color: rgba(244, 81, 108, .3);\n\t\n}\n\n.reactive-btn {\n\tmin-width: var(--reactive-button-min-width);\n\tdisplay: inline-block;\n\tmargin-bottom: 0;\n\tpadding: 6px 14px 6px;\n\tfont-size: var(--reactive-button-font-size);\n\tfont-weight: var(--reactive-button-font-weight);\n\tline-height: var(--reactive-button-height);\n\tcolor: var(--reactive-button-text-color);\n\ttext-align: center;\n\ttext-decoration: none;\n\tvertical-align: middle;\n\tcursor: pointer;\n\tbackground-color: var(--reactive-button-primary-color);\n\tborder: none;\n\t-webkit-border-radius: 0;\n\t-moz-border-radius: 0;\n\tborder-radius: 0;\n\t-webkit-box-shadow: inset 0 -2px 0 rgba(0, 0, 0, .2);\n\t-moz-box-shadow: inset 0 -2px 0 rgba(0, 0, 0, .2);\n\tbox-shadow: inset 0 -2px 0 rgba(0, 0, 0, .2);\n\t-webkit-transition: 0.1s;\n\t-moz-transition: 0.1s;\n\ttransition: 0.1s;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tposition: relative;\n\toverflow: hidden;\n\toutline: none;\n}\n\n.reactive-btn.outline {\n\tbackground-color: transparent !important;\n}\n\n.reactive-btn:disabled {\n\tcursor: default;\n}\n\n.reactive-btn:hover:not(:disabled):not(.disabled) {\n\topacity: .85;\n\t-webkit-box-shadow: inset 0 -4px 0 rgba(0, 0, 0, .2);\n\t-moz-box-shadow: inset 0 -4px 0 rgba(0, 0, 0, .2);\n\tbox-shadow: inset 0 -4px 0 rgba(0, 0, 0, .2);\n\tmargin-top: -2px;\n\tpadding: 6px 14px 8px;\n}\n\n.reactive-btn:active:not(:disabled):not(.disabled) {\n\t-webkit-box-shadow: none;\n\t-moz-box-shadow: none;\n\tbox-shadow: none;\n\tmargin-top: 2px;\n\tpadding: 6px 14px 4px;\n}\n\n.reactive-btn:focus {\n\toutline: none;\n}\n\n.reactive-btn.rounded {\n\tborder-radius: 16px;\n}\n\n.reactive-btn.disabled {\n\topacity: .7;\n}\n\n.reactive-btn .content {\n\tposition: relative;\n}\n\n.reactive-btn .progress {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: var(--reactive-progress-color);\n\ttransform: translateX(-100%);\n\ttransition: transform .2s ease;\n}\n\n.reactive-btn:not(.idle) .progress {\n\ttransform: translateX(0%);\n\ttransition: transform 3s cubic-bezier(0.59, 0.01, 0.41, 0.99);\n}\n\n/* button spinner */\n.reactive-btn .rdbs1 {\n\twidth: calc(var(--reactive-button-height) - 5px);\n\theight: calc(var(--reactive-button-height) - 5px);\n\tmargin-right: 3px;\n\tborder-top-color: inherit;\n\tborder-left-color: inherit;\n\tanimation: reactive-spinner 400ms linear infinite;\n\tborder-bottom-color: transparent;\n\tborder-right-color: transparent;\n\tborder-style: solid;\n\tborder-width: 2px;\n\tborder-radius: 50%;\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n\n.reactive-btn .drbll1:after {\n\tcontent: '.';\n\tanimation: dots 1s steps(5, end) infinite;\n}\n\n/* success state */\n/* .reactive-btn.success {\n\topacity: .7;\n} */\n\n\n/* error state */\n.reactive-btn.error.outline {\n\tcolor: white;\n}\n\n.reactive-btn.error .progress {\n\t/* opacity: .8; */\n\tbackground: #f92672 !important;\n}\n\n.reactive-btn.small .rdbs1 {\n\twidth: calc(var(--reactive-button-height) - 7px);\n\theight: calc(var(--reactive-button-height) - 7px);\n}\n\n.reactive-btn.small {\n\tfont-size: calc(var(--reactive-button-font-size) - 2px);\n\tmin-width: calc(var(--reactive-button-min-width) - 25px);\n\tline-height: calc(var(--reactive-button-height) - 5px);\n}\n\n.reactive-btn.large {\n\tfont-size: calc(var(--reactive-button-font-size) + 2px);\n\tmin-width: calc(var(--reactive-button-min-width) + 25px);\n\tline-height: calc(var(--reactive-button-height) + 5px);\n}\n\n.reactive-btn.large .rdbs1 {\n\twidth: calc(var(--reactive-button-height) - 1px);\n\theight: calc(var(--reactive-button-height) - 1px);\n}\n\n.reactive-btn.block {\n\tmin-width: 100%;\n}\n\n\n\n/* primary button starts */\n.reactive-btn.primary.outline {\n\tborder-color: var(--reactive-button-primary-color);\n\tcolor: var(--reactive-button-primary-color);\n\tborder: 1px solid var(--reactive-button-primary-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n}\n\n.reactive-btn.primary.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-primary-color) !important;\n}\n\n.reactive-btn.primary.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n}\n\n.reactive-btn.primary.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-primary-color) !important;\n}\n\n/* primary button ends */\n\n\n\n/* dark button starts */\n\n.reactive-btn.dark {\n\tbackground: var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.outline {\n\tborder-color: var(--reactive-button-dark-color);\n\tcolor: var(--reactive-button-dark-color);\n\tborder: 1px solid var(--reactive-button-dark-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-dark-color) !important;\n}\n\n.reactive-btn.dark.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-dark-color) !important;\n}\n\n/* dark button ends */\n\n\n\n\n/* light button starts */\n\n.reactive-btn.light {\n\tbackground: var(--reactive-button-light-color);\n\tcolor: #000000;\n}\n\n.reactive-btn.light.outline {\n\tborder-color: var(--reactive-button-light-color);\n\tcolor: var(--reactive-button-light-color);\n\tborder: 1px solid var(--reactive-button-light-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n}\n\n.reactive-btn.light.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-light-color) !important;\n}\n\n.reactive-btn.light.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n}\n\n.reactive-btn.light.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-light-color) !important;\n}\n\n/* light button ends */\n\n\n\n\n/* green button starts */\n.reactive-btn.green {\n\tbackground: var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.outline {\n\tborder-color: var(--reactive-button-green-color);\n\tcolor: var(--reactive-button-green-color);\n\tborder: 1px solid var(--reactive-button-green-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-green-color) !important;\n}\n\n.reactive-btn.green.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-green-color) !important;\n}\n\n/* green button ends */\n\n\n\n/* red button starts */\n.reactive-btn.red {\n\tbackground: var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.outline {\n\tborder-color: var(--reactive-button-red-color);\n\tcolor: var(--reactive-button-red-color);\n\tborder: 1px solid var(--reactive-button-red-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-red-color) !important;\n}\n\n.reactive-btn.red.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-red-color) !important;\n}\n\n/* red button ends */\n\n\n\n@keyframes reactive-spinner {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@keyframes dots {\n\n\t0%,\n\t20% {\n\t\tcolor: rgba(0, 0, 0, 0);\n\t\ttext-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n\t}\n\n\t40% {\n\t\tcolor: white;\n\t\ttext-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n\t}\n\n\t60% {\n\t\ttext-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\n\t}\n\n\t80%,\n\t100% {\n\t\ttext-shadow: .25em 0 0 white, .5em 0 0 white;\n\t}\n}");module.exports=function(n){var o,a=n.type?n.type:"button",i=!!n.outline,c=!!n.shadow,b=n.idleLabel?n.idleLabel:"Button",s=n.loadingLabel?n.loadingLabel:'<span class="drbll1"><i class="rdbs1"></i>Loading</span>',l=n.successLabel?n.successLabel:"Success!",d=n.errorLabel?n.errorLabel:"Error!",v="reactive-btn".concat(n.className?" "+n.className:"").concat(n.block?" block":""),u=n.style?n.style:null,p=!!n.rounded,h=n.color?n.color:"primary",g=n.size?n.size:"normal",x=r(t.useState(n.buttonState?n.buttonState:"idle"),2),m=x[0],w=x[1];return t.useEffect((function(){void 0!==n.buttonState&&(w(n.buttonState),"success"!==n.buttonState&&"error"!==n.buttonState||setTimeout((function(){w("idle")}),n.messageDuration?n.messageDuration:1e3))}),[n.buttonState,n.messageDuration]),e.default.createElement(e.default.Fragment,null,e.default.createElement("button",{disabled:"idle"!==m||n.disabled,type:a,className:"".concat(v," ").concat(m," ").concat(h," ").concat(g).concat(i?" outline":"").concat(p?" rounded":"").concat(c?" shadow":"").concat(n.disabled?" disabled":""),onClick:function(){void 0!==n.onClick&&n.onClick()},style:u},e.default.createElement("span",{className:"progress"}),e.default.createElement("span",{className:"content",dangerouslySetInnerHTML:{__html:(o=m,"idle"===o?b:"loading"===o?s:"success"===o?l:"error"===o?d:b)}})))};
