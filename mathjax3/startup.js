!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}([function(t,e,n){"use strict";(function(t){var c=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};function u(t,e){try{for(var n=c(Object.keys(e)),r=n.next();!r.done;r=n.next()){var o=r.value;"__esModule"!==o&&("object"==typeof t[o]&&"object"==typeof e[o]?u(t[o],e[o]):null!==e[o]&&void 0!==e[o]&&(t[o]=e[o]))}}catch(t){a={error:t}}finally{try{r&&!r.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}return t;var a,i}Object.defineProperty(e,"__esModule",{value:!0}),e.combineConfig=u,e.combineDefaults=function t(e,n,r){e[n]||(e[n]={}),e=e[n];try{for(var o=c(Object.keys(r)),a=o.next();!a.done;a=o.next()){var i=a.value;"object"==typeof e[i]&&"object"==typeof r[i]?t(e,i,r[i]):null==e[i]&&null!=r[i]&&(e[i]=r[i])}}catch(t){u={error:t}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(u)throw u.error}}return e;var u,s},e.combineWithMathJax=function(t){return u(e.MathJax,t)},void 0===t.MathJax&&(t.MathJax={}),t.MathJax.version||(t.MathJax={version:"3.0.0",_:{},config:t.MathJax}),e.MathJax=t.MathJax}).call(this,n(3))},function(t,l,a){"use strict";(function(n){var c=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(l,"__esModule",{value:!0});var t,e,r=a(0),d=a(2),o=a(2);l.Package=o.Package,l.PackageError=o.PackageError,(e=t=l.Loader||(l.Loader={})).ready=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];0===t.length&&(t=Array.from(d.Package.packages.keys()));var n,r,o=[];try{for(var a=c(t),i=a.next();!i.done;i=a.next()){var u=i.value,s=d.Package.packages.get(u)||new d.Package(u,!0);o.push(s.promise)}}catch(t){n={error:t}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return Promise.all(o)},e.load=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(0===t.length)return Promise.resolve();var n,r,o=[];try{for(var a=c(t),i=a.next();!i.done;i=a.next()){var u=i.value,s=d.Package.packages.get(u);s||(s=new d.Package(u)).provides(l.CONFIG.provides[u]),s.checkNoLoad(),o.push(s.promise)}}catch(t){n={error:t}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return d.Package.loadAll(),Promise.all(o)},e.preLoad=function(){for(var e,t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];try{for(var o=c(n),a=o.next();!a.done;a=o.next()){var i=a.value,u=d.Package.packages.get(i);u||(u=new d.Package(i,!0)).provides(l.CONFIG.provides[i]),u.loaded()}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}},e.defaultReady=function(){void 0!==l.MathJax.startup&&l.MathJax.config.startup.ready()},e.getRoot=function(){var t=n;if("undefined"!=typeof document){var e=document.currentScript||document.getElementById("MathJax-script");e&&(t=e.src.replace(/\/[^\/]*$/,""))}return t},l.MathJax=r.MathJax,void 0===l.MathJax.loader&&(r.combineDefaults(l.MathJax.config,"loader",{paths:{mathjax:t.getRoot()},source:{},dependencies:{},provides:{},load:[],ready:t.defaultReady.bind(t),failed:function(t){return console.log("MathJax("+(t.package||"?")+"): "+t.message)},require:null}),r.combineWithMathJax({loader:t})),l.CONFIG=l.MathJax.config.loader}).call(this,"/")},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),i=[];try{for(;(void 0===e||0<e--)&&!(r=a.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},h=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(a(arguments[e]));return t},p=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var f=n(1),i=function(r){function t(t,e){var n=r.call(this,t)||this;return n.package=e,n}return o(t,r),t}(Error);e.PackageError=i;var u=function(){function l(t,e){void 0===e&&(e=!1),this.isLoaded=!1,this.isLoading=!1,this.hasFailed=!1,this.dependents=[],this.dependencies=[],this.dependencyCount=0,this.provided=[],this.name=t,this.noLoad=e,l.packages.set(t,this),this.promise=this.makePromise(this.makeDependencies())}return l.resolvePath=function(t,e){void 0===e&&(e=!0);var n,r=f.CONFIG.source[t]||t;for(r.match(/^(?:[a-z]+:\/)?\/|\[/)||(r="[mathjax]/"+r.replace(/^\.\//,"")),e&&!r.match(/\.[^\/]+$/)&&(r+=".js");(n=r.match(/^\[([^\]]*)\]/))&&f.CONFIG.paths.hasOwnProperty(n[1]);)r=f.CONFIG.paths[n[1]]+r.substr(n[0].length);return r},Object.defineProperty(l.prototype,"canLoad",{get:function(){return 0===this.dependencyCount&&!this.noLoad&&!this.isLoading&&!this.hasFailed},enumerable:!0,configurable:!0}),l.prototype.makeDependencies=function(){var e,t,n=[],r=l.packages,o=this.noLoad,a=this.name,i=[];f.CONFIG.dependencies.hasOwnProperty(a)?i.push.apply(i,h(f.CONFIG.dependencies[a])):"core"!==a&&i.push("core");try{for(var u=p(i),s=u.next();!s.done;s=u.next()){var c=s.value,d=r.get(c)||new l(c,o);this.dependencies.indexOf(d)<0&&(d.addDependent(this,o),this.dependencies.push(d),d.isLoaded||(this.dependencyCount++,n.push(d.promise)))}}catch(t){e={error:t}}finally{try{s&&!s.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}return n},l.prototype.makePromise=function(t){var n=this,e=new Promise(function(t,e){n.resolve=t,n.reject=e}),r=f.CONFIG[this.name]||{};return r.ready&&(e=e.then(function(t){return r.ready(n.name)})),t.length&&(t.push(e),e=Promise.all(t).then(function(t){return t.join(", ")})),r.failed&&e.catch(function(t){return r.failed(new i(t,n.name))}),e},l.prototype.load=function(){if(!this.isLoaded&&!this.isLoading&&!this.noLoad){this.isLoading=!0;var t=l.resolvePath(this.name);f.CONFIG.require?this.loadCustom(t):this.loadScript(t)}},l.prototype.loadCustom=function(t){var e=this;try{var n=f.CONFIG.require(t);n instanceof Promise?n.then(function(){return e.checkLoad()}).catch(function(){return e.failed("Can't load \""+t+'"')}):this.checkLoad()}catch(t){this.failed(t.message)}},l.prototype.loadScript=function(e){var n=this,t=document.createElement("script");t.src=e,t.charset="UTF-8",t.onload=function(t){return n.checkLoad()},t.onerror=function(t){return n.failed("Can't load \""+e+'"')},document.head.appendChild(t)},l.prototype.loaded=function(){this.isLoaded=!0,this.isLoading=!1;try{for(var t=p(this.dependents),e=t.next();!e.done;e=t.next()){e.value.requirementSatisfied()}}catch(t){o={error:t}}finally{try{e&&!e.done&&(a=t.return)&&a.call(t)}finally{if(o)throw o.error}}try{for(var n=p(this.provided),r=n.next();!r.done;r=n.next()){r.value.loaded()}}catch(t){i={error:t}}finally{try{r&&!r.done&&(u=n.return)&&u.call(n)}finally{if(i)throw i.error}}var o,a,i,u;this.resolve(this.name)},l.prototype.failed=function(t){this.hasFailed=!0,this.isLoading=!1,this.reject(new i(t,this.name))},l.prototype.checkLoad=function(){var e=this;((f.CONFIG[this.name]||{}).checkReady||function(){return Promise.resolve()})().then(function(){return e.loaded()}).catch(function(t){return e.failed(t)})},l.prototype.requirementSatisfied=function(){this.dependencyCount&&(this.dependencyCount--,this.canLoad&&this.load())},l.prototype.provides=function(t){void 0===t&&(t=[]);try{for(var e=p(t),n=e.next();!n.done;n=e.next()){var r=n.value,o=l.packages.get(r);o||(f.CONFIG.dependencies[r]||(f.CONFIG.dependencies[r]=[]),f.CONFIG.dependencies[r].push(r),(o=new l(r,!0)).isLoading=!0),this.provided.push(o)}}catch(t){a={error:t}}finally{try{n&&!n.done&&(i=e.return)&&i.call(e)}finally{if(a)throw a.error}}var a,i},l.prototype.addDependent=function(t,e){this.dependents.push(t),e||this.checkNoLoad()},l.prototype.checkNoLoad=function(){if(this.noLoad){this.noLoad=!1;try{for(var t=p(this.dependencies),e=t.next();!e.done;e=t.next()){e.value.checkNoLoad()}}catch(t){n={error:t}}finally{try{e&&!e.done&&(r=t.return)&&r.call(t)}finally{if(n)throw n.error}}}var n,r},l.loadAll=function(){try{for(var t=p(this.packages.values()),e=t.next();!e.done;e=t.next()){var n=e.value;n.canLoad&&n.load()}}catch(t){r={error:t}}finally{try{e&&!e.done&&(o=t.return)&&o.call(t)}finally{if(r)throw r.error}}var r,o},l}();u.packages=new Map,e.Package=u},function(Zc,$c){var _c;_c=function(){return this}();try{_c=_c||Function("return this")()||eval("this")}catch(t){"object"==typeof window&&(_c=window)}Zc.exports=_c},function(t,e,n){"use strict";n(5);var r=n(1),o=n(0),a=n(9);(0,o.combineDefaults)(MathJax.config.loader,"dependencies",a.dependencies),(0,o.combineDefaults)(MathJax.config.loader,"paths",a.paths),(0,o.combineDefaults)(MathJax.config.loader,"provides",a.provides),r.Loader.preLoad("loader"),r.Loader.load.apply(r.Loader,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(r.CONFIG.load)).then(function(){return r.CONFIG.ready()}).catch(function(t){return r.CONFIG.failed(t)})},function(t,e,n){"use strict";var r=n(0),o=u(n(1)),a=u(n(2)),i=u(n(6));function u(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(0,r.combineWithMathJax)({_:{components:{loader:o,package:a,startup:i}}})},function(t,O,n){"use strict";(function(y){var x=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},v=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(O,"__esModule",{value:!0});var t,e=n(0),b=n(7),g=n(8);!function(u){var e,s,c=new g.PrioritizedList;function r(t){return e.visitTree(t,u.document)}function t(){e=new O.MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor,s=O.MathJax._.mathjax.MathJax,u.input=o(),u.output=a(),u.adaptor=i(),u.handler=f()}function n(){if(u.handler){s.handlers.register(u.handler),m(),u.input&&u.output&&d();var e,t,n=u.output?u.output.name.toLowerCase():"";try{for(var r=v(u.input),o=r.next();!o.done;o=r.next()){var a=o.value,i=a.name.toLowerCase();h(i,a),p(i,a),u.output&&l(i,n,a)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}}}function d(){O.MathJax.Typeset=function(t){void 0===t&&(t=null),u.document.options.elements=t,u.document.render()},O.MathJax.TypesetPromise=function(t){return void 0===t&&(t=null),u.document.options.elements=t,s.handleRetriesFor(function(){u.document.render()})},O.MathJax.TypesetClear=function(){return u.document.clear()}}function l(t,e,n){var r=t+"2"+e;O.MathJax[r]=function(t,e){return void 0===e&&(e={}),e.format=n.name,u.document.convert(t,e)},O.MathJax[r+"Promise"]=function(t,e){return void 0===e&&(e={}),e.format=n.name,s.handleRetriesFor(function(){return u.document.convert(t,e)})},O.MathJax[e+"Stylesheet"]=function(){return u.output.styleSheet(u.document)}}function h(t,n){O.MathJax[t+"2mml"]=function(t,e){return void 0===e&&(e={}),e.end=b.STATE.CONVERT,e.format=n.name,r(u.document.convert(t,e))},O.MathJax[t+"2mmlPromise"]=function(t,e){return void 0===e&&(e={}),e.end=b.STATE.CONVERT,e.format=n.name,s.handleRetriesFor(function(){return r(u.document.convert(t,e))})}}function p(t,e){"tex"===t&&(O.MathJax.texReset=function(){return e.parseOptions.tags.reset()})}function o(){var e,t,n=[];try{for(var r=v(O.CONFIG.input),o=r.next();!o.done;o=r.next()){var a=o.value,i=u.constructors[a];if(!i)throw Error('Input Jax "'+a+'" is not defined (has it been loaded?)');n.push(new i(O.MathJax.config[a]))}}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}return n}function a(){var t=O.CONFIG.output;if(!t)return null;var e=u.constructors[t];if(!e)throw Error('Output Jax "'+t+'" is not defined (has it been loaded?)');return new e(O.MathJax.config[t])}function i(){var t=O.CONFIG.adaptor;if(!t||"none"===t)return null;var e=u.constructors[t];if(!e)throw Error('DOMAdaptor "'+t+'" is not defined (has it been loaded?)');return e(O.MathJax.config[t])}function f(){var t=O.CONFIG.handler;if(!t||"none"===t||!u.adaptor)return null;var e=u.constructors[t];if(!e)throw Error('Handler "'+t+'" is not defined (has it been loaded?)');var n,r,o=new e(u.adaptor,5);try{for(var a=v(c),i=a.next();!i.done;i=a.next()){o=i.value.item(o)}}catch(t){n={error:t}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return o}function m(){return u.document=s.document(O.CONFIG.document,x({},O.MathJax.config.options,{InputJax:u.input,OutputJax:u.output})),u.document}u.constructors={},u.input=[],u.output=null,u.handler=null,u.adaptor=null,u.elements=null,u.document=null,u.promise=null,u.pagePromise=new Promise(function(t,e){var n=y.document;if(n&&n.readyState&&"complete"!==n.readyState&&"interactive"!==n.readyState){var r=function(){return t()};n.defaultView.addEventListener("load",r,!0),n.defaultView.addEventListener("DOMContentLoaded",r,!0)}else t()}),u.toMML=r,u.registerConstructor=function(t,e){u.constructors[t]=e},u.useHandler=function(t,e){void 0===e&&(e=!1),O.CONFIG.handler&&!e||(O.CONFIG.handler=t)},u.useAdaptor=function(t,e){void 0===e&&(e=!1),O.CONFIG.adaptor&&!e||(O.CONFIG.adaptor=t)},u.useInput=function(t,e){void 0===e&&(e=!1),M&&!e||O.CONFIG.input.push(t)},u.useOutput=function(t,e){void 0===e&&(e=!1),O.CONFIG.output&&!e||(O.CONFIG.output=t)},u.extendHandler=function(t,e){void 0===e&&(e=10),c.add(t,e)},u.defaultReady=function(){t(),n(),O.CONFIG.typeset&&O.MathJax.TypesetPromise&&(u.promise=u.pagePromise.then(function(){return O.MathJax.TypesetPromise()}))},u.getComponents=t,u.makeMethods=n,u.makeTypesetMethods=d,u.makeOutputMethods=l,u.makeMmlMethods=h,u.makeResetMethod=p,u.getInputJax=o,u.getOutputJax=a,u.getAdaptor=i,u.getHandler=f,u.getDocument=m}(t=O.Startup||(O.Startup={})),O.MathJax=e.MathJax,void 0===O.MathJax._.startup&&(e.combineDefaults(O.MathJax.config,"startup",{input:[],output:"",handler:null,adaptor:null,document:"undefined"==typeof document?"":document,elements:null,typeset:!0,ready:t.defaultReady.bind(t)}),e.combineWithMathJax({startup:t,options:{}})),O.CONFIG=O.MathJax.config.startup;var M=0!==O.CONFIG.input.length}).call(this,n(3))},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.protoItem=function(t,e,n,r,o,a,i){return void 0===i&&(i=null),{open:t,math:e,close:n,n:r,start:{n:o},end:{n:a},display:i}};var n=function(){function t(t,e,n,r,o){void 0===n&&(n=!0),void 0===r&&(r={i:0,n:0,delim:""}),void 0===o&&(o={i:0,n:0,delim:""}),this.root=null,this.typesetRoot=null,this._state=a.STATE.UNPROCESSED,this.metrics={},this.bbox={},this.inputData={},this.outputData={},this.math=t,this.inputJax=e,this.display=n,this.start=r,this.end=o,this.root=null,this.typesetRoot=null,this.metrics={},this.bbox={},this.inputData={},this.outputData={}}return t.prototype.render=function(t){t.renderActions.renderMath(this,t)},t.prototype.rerender=function(t,e){void 0===e&&(e=a.STATE.RERENDER),this.state()>=e&&this.state(e-1),t.renderActions.renderMath(this,t,e)},t.prototype.convert=function(t,e){void 0===e&&(e=a.STATE.LAST),t.renderActions.renderConvert(this,t,e)},t.prototype.compile=function(t){this.state()<a.STATE.COMPILED&&(this.root=this.inputJax.compile(this),this.state(a.STATE.COMPILED))},t.prototype.typeset=function(t){this.state()<a.STATE.TYPESET&&(this.typesetRoot=t.outputJax[null===this.display?"escaped":"typeset"](this,t),this.state(a.STATE.TYPESET))},t.prototype.updateDocument=function(t){},t.prototype.removeFromDocument=function(t){void 0===t&&(t=!1)},t.prototype.setMetrics=function(t,e,n,r,o){this.metrics={em:t,ex:e,containerWidth:n,lineWidth:r,scale:o}},t.prototype.state=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),null!=t&&(t<a.STATE.INSERTED&&this._state>=a.STATE.INSERTED&&this.removeFromDocument(e),t<a.STATE.TYPESET&&this._state>=a.STATE.TYPESET&&(this.bbox={},this.outputData={}),t<a.STATE.COMPILED&&this._state>=a.STATE.COMPILED&&(this.inputData={}),this._state=t),this._state},t.prototype.reset=function(t){void 0===t&&(t=!1),this.state(a.STATE.UNPROCESSED)},t}();a.AbstractMathItem=n,a.STATE={UNPROCESSED:0,FINDMATH:10,COMPILED:20,CONVERT:100,METRICS:110,RERENDER:125,TYPESET:150,INSERTED:200,RESET:500,LAST:1e4},a.newState=function(t,e){if(t in a.STATE)throw Error("State "+t+" already exists");a.STATE[t]=e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function r(){this.items=[],this.items=[]}return r.prototype[Symbol.iterator]=function(){var t=0,e=this.items;return{next:function(){return{value:e[t++],done:t>e.length}}}},r.prototype.add=function(t,e){void 0===e&&(e=r.DEFAULTPRIORITY);for(var n=this.items.length;0<=--n&&e<this.items[n].priority;);return this.items.splice(n+1,0,{item:t,priority:e}),t},r.prototype.remove=function(t){for(var e=this.items.length;0<=--e&&this.items[e].item!==t;);0<=e&&this.items.splice(e,1)},r.prototype.toArray=function(){return Array.from(this)},r}();r.DEFAULTPRIORITY=5,e.PrioritizedList=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.dependencies={"a11y/semantic-enrich":["input/mml","[sre]"],"a11y/complexity":["a11y/semantic-enrich"],"a11y/explorer":["a11y/semantic-enrich"],"[tex]/all-packages":["input/tex-base"],"[tex]/action":["input/tex-base","[tex]/newcommand"],"[tex]/autoload":["input/tex-base","[tex]/require"],"[tex]/ams":["input/tex-base"],"[tex]/ams_cd":["input/tex-base"],"[tex]/bbox":["input/tex-base","[tex]/ams","[tex]/newcommand"],"[tex]/boldsymbol":["input/tex-base"],"[tex]/braket":["input/tex-base"],"[tex]/cancel":["input/tex-base"],"[tex]/color":["input/tex-base"],"[tex]/configMacros":["input/tex-base","[tex]/newcommand"],"[tex]/enclose":["input/tex-base"],"[tex]/extpfeil":["input/tex-base","[tex]/ams","[tex]/newcommand"],"[tex]/html":["input/tex-base"],"[tex]/mhchem":["input/tex-base","[tex]/ams"],"[tex]/newcommand":["input/tex-base","[tex]/ams"],"[tex]/noerrors":["input/tex-base"],"[tex]/noundefined":["input/tex-base"],"[tex]/physics":["input/tex-base"],"[tex]/require":["input/tex-base"],"[tex]/tagFormat":["input/tex-base"],"[tex]/unicode":["input/tex-base"],"[tex]/verb":["input/tex-base"]},e.paths={tex:"[mathjax]/input/tex/extensions",sre:"[mathjax]/sre/sre_browser"};var r=["[tex]/action","[tex]/ams","[tex]/ams_cd","[tex]/bbox","[tex]/boldsymbol","[tex]/braket","[tex]/cancel","[tex]/color","[tex]/configMacros","[tex]/enclose","[tex]/extpfeil","[tex]/html","[tex]/mhchem","[tex]/newcommand","[tex]/noerrors","[tex]/noundefined","[tex]/physics","[tex]/require","[tex]/unicode","[tex]/verb"];e.provides={startup:["loader"],"input/tex":["input/tex-base","[tex]/ams","[tex]/newcommand","[tex]/noundefined","[tex]/require","[tex]/autoload","[tex]/configMacros"],"input/tex-full":["input/tex-base","[tex]/all-packages"].concat(r),"[tex]/all-packages":r}}]);