"use strict"
define("ember-table-demo/app",["exports","ember-table-demo/resolver","ember-load-initializers","ember-table-demo/config/environment"],function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,r.default)(o,n.default.modulePrefix)
var l=o
e.default=l}),define("ember-table-demo/components/-ember-table-private/row-wrapper",["exports","ember-table/components/-private/row-wrapper"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/components/-ember-table-private/simple-checkbox",["exports","ember-table/components/-private/simple-checkbox"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/components/ember-table",["exports","ember-table/components/ember-table/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/components/ember-tbody",["exports","ember-table/components/ember-tbody/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/components/ember-td",["exports","ember-table/components/ember-td/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/components/ember-tfoot",["exports","ember-table/components/ember-tfoot/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/components/ember-th",["exports","ember-table/components/ember-th/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/components/ember-th/resize-handle",["exports","ember-table/components/ember-th/resize-handle/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/components/ember-th/sort-indicator",["exports","ember-table/components/ember-th/sort-indicator/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/components/ember-thead",["exports","ember-table/components/ember-thead/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/components/ember-tr",["exports","ember-table/components/ember-tr/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/components/vertical-collection",["exports","@html-next/vertical-collection/components/vertical-collection/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/controllers/application",["exports"],function(e){function t(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),t=2+Math.floor(4*Math.random()),r="";r.length<t;)r+=e[Math.floor(e.length*Math.random())]
return r}function r(){return{symbol:t(),price:(e=.5+500*Math.random(),e.toFixed(2))}
var e}function n(e){return Array(e).fill().map(r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Controller.extend({columns:Ember.computed(function(){return[{name:"Ticker Symbol",valuePath:"symbol",textAlign:"center"},{name:"Price (USD)",valuePath:"price",textAlign:"right"}]}),rows:Ember.computed(function(){return n(this.numRows)}),numRows:25,actions:{addRows:function(){this.rows.pushObjects(n(parseInt(this.numRows)))}}})
e.default=o}),define("ember-table-demo/helpers/and",["exports","ember-truth-helpers/helpers/and"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}})}),define("ember-table-demo/helpers/app-version",["exports","ember-table-demo/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,l=n.versionOnly||n.hideSha,u=n.shaOnly||n.hideVersion,a=null
return l&&(n.showExtended&&(a=o.match(r.versionExtendedRegExp)),a||(a=o.match(r.versionRegExp))),u&&(a=o.match(r.shaRegExp)),a?a[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o}),define("ember-table-demo/helpers/append",["exports","ember-composable-helpers/helpers/append"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"append",{enumerable:!0,get:function(){return t.append}})}),define("ember-table-demo/helpers/array",["exports","ember-composable-helpers/helpers/array"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"array",{enumerable:!0,get:function(){return t.array}})}),define("ember-table-demo/helpers/cancel-all",["exports","ember-concurrency/helpers/cancel-all"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/chunk",["exports","ember-composable-helpers/helpers/chunk"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"chunk",{enumerable:!0,get:function(){return t.chunk}})}),define("ember-table-demo/helpers/compact",["exports","ember-composable-helpers/helpers/compact"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/compute",["exports","ember-composable-helpers/helpers/compute"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"compute",{enumerable:!0,get:function(){return t.compute}})}),define("ember-table-demo/helpers/contains",["exports","ember-composable-helpers/helpers/contains"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"contains",{enumerable:!0,get:function(){return t.contains}})}),define("ember-table-demo/helpers/dec",["exports","ember-composable-helpers/helpers/dec"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"dec",{enumerable:!0,get:function(){return t.dec}})}),define("ember-table-demo/helpers/drop",["exports","ember-composable-helpers/helpers/drop"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})}),define("ember-table-demo/helpers/filter-by",["exports","ember-composable-helpers/helpers/filter-by"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/filter",["exports","ember-composable-helpers/helpers/filter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/find-by",["exports","ember-composable-helpers/helpers/find-by"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/flatten",["exports","ember-composable-helpers/helpers/flatten"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"flatten",{enumerable:!0,get:function(){return t.flatten}})})
define("ember-table-demo/helpers/group-by",["exports","ember-composable-helpers/helpers/group-by"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})}),define("ember-table-demo/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})}),define("ember-table-demo/helpers/has-next",["exports","ember-composable-helpers/helpers/has-next"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"hasNext",{enumerable:!0,get:function(){return t.hasNext}})}),define("ember-table-demo/helpers/has-previous",["exports","ember-composable-helpers/helpers/has-previous"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"hasPrevious",{enumerable:!0,get:function(){return t.hasPrevious}})}),define("ember-table-demo/helpers/inc",["exports","ember-composable-helpers/helpers/inc"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"inc",{enumerable:!0,get:function(){return t.inc}})}),define("ember-table-demo/helpers/intersect",["exports","ember-composable-helpers/helpers/intersect"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/invoke",["exports","ember-composable-helpers/helpers/invoke"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"invoke",{enumerable:!0,get:function(){return t.invoke}})}),define("ember-table-demo/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})}),define("ember-table-demo/helpers/is-empty",["exports","ember-truth-helpers/helpers/is-empty"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("ember-table-demo/helpers/join",["exports","ember-composable-helpers/helpers/join"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})}),define("ember-table-demo/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})}),define("ember-table-demo/helpers/map-by",["exports","ember-composable-helpers/helpers/map-by"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/map",["exports","ember-composable-helpers/helpers/map"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/next",["exports","ember-composable-helpers/helpers/next"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"next",{enumerable:!0,get:function(){return t.next}})}),define("ember-table-demo/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return t.notEq}})}),define("ember-table-demo/helpers/not",["exports","ember-truth-helpers/helpers/not"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})}),define("ember-table-demo/helpers/object-at",["exports","ember-composable-helpers/helpers/object-at"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"objectAt",{enumerable:!0,get:function(){return t.objectAt}})}),define("ember-table-demo/helpers/optional",["exports","ember-composable-helpers/helpers/optional"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"optional",{enumerable:!0,get:function(){return t.optional}})}),define("ember-table-demo/helpers/or",["exports","ember-truth-helpers/helpers/or"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})}),define("ember-table-demo/helpers/perform",["exports","ember-concurrency/helpers/perform"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/pipe-action",["exports","ember-composable-helpers/helpers/pipe-action"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/pipe",["exports","ember-composable-helpers/helpers/pipe"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"pipe",{enumerable:!0,get:function(){return t.pipe}})}),define("ember-table-demo/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-table-demo/helpers/previous",["exports","ember-composable-helpers/helpers/previous"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"previous",{enumerable:!0,get:function(){return t.previous}})}),define("ember-table-demo/helpers/queue",["exports","ember-composable-helpers/helpers/queue"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"queue",{enumerable:!0,get:function(){return t.queue}})}),define("ember-table-demo/helpers/range",["exports","ember-composable-helpers/helpers/range"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"range",{enumerable:!0,get:function(){return t.range}})}),define("ember-table-demo/helpers/reduce",["exports","ember-composable-helpers/helpers/reduce"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})
define("ember-table-demo/helpers/reject-by",["exports","ember-composable-helpers/helpers/reject-by"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/repeat",["exports","ember-composable-helpers/helpers/repeat"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"repeat",{enumerable:!0,get:function(){return t.repeat}})}),define("ember-table-demo/helpers/reverse",["exports","ember-composable-helpers/helpers/reverse"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/shuffle",["exports","ember-composable-helpers/helpers/shuffle"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"shuffle",{enumerable:!0,get:function(){return t.shuffle}})}),define("ember-table-demo/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-table-demo/helpers/slice",["exports","ember-composable-helpers/helpers/slice"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/sort-by",["exports","ember-composable-helpers/helpers/sort-by"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/take",["exports","ember-composable-helpers/helpers/take"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/task",["exports","ember-concurrency/helpers/task"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/toggle-action",["exports","ember-composable-helpers/helpers/toggle-action"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/toggle",["exports","ember-composable-helpers/helpers/toggle"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"toggle",{enumerable:!0,get:function(){return t.toggle}})}),define("ember-table-demo/helpers/union",["exports","ember-composable-helpers/helpers/union"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/helpers/without",["exports","ember-composable-helpers/helpers/without"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"without",{enumerable:!0,get:function(){return t.without}})}),define("ember-table-demo/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})}),define("ember-table-demo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-table-demo/config/environment"],function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var l={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=l}),define("ember-table-demo/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("ember-table-demo/initializers/ember-concurrency",["exports","ember-concurrency/initializers/ember-concurrency"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("ember-table-demo/initializers/export-application-global",["exports","ember-table-demo/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n}),define("ember-table-demo/initializers/user-agent",["exports","ember-useragent/initializers/user-agent"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("ember-table-demo/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("ember-table-demo/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-table-demo/router",["exports","ember-table-demo/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){})
var n=r
e.default=n}),define("ember-table-demo/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/services/user-agent",["exports","ember-useragent/services/user-agent"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-table-demo/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"RjqiHCcq",block:'{"symbols":["t"],"statements":[[7,"div"],[11,"class","container mt-20 mx-auto bg-gray-100 p-4"],[9],[0,"\\n  "],[7,"div"],[11,"class","text-center"],[9],[0,"\\n    "],[7,"h1"],[11,"class","inline-block px-4 py-2 bg-gray-200 text-2xl mb-8"],[9],[0,"\\n      Ember Table Demo\\n    "],[10],[0,"\\n  "],[10],[0,"\\n  "],[7,"div"],[11,"class","w-9/12 mx-auto"],[9],[0,"\\n    "],[7,"div"],[11,"class","stock-table bg-gray-200 mx-auto p-2"],[9],[0,"\\n"],[4,"ember-table",null,null,{"statements":[[0,"        "],[1,[29,"component",[[29,"-assert-implicit-component-helper-argument",[[24,1,["head"]],"expected `t.head` to be a contextual component but found a string. Did you mean `(component t.head)`? (\'ember-table-demo/templates/application.hbs\' @ L10:C10) "],null]],[["columns","widthConstraint"],[[25,["columns"]],"eq-container"]]],false],[0,"\\n        "],[1,[29,"component",[[29,"-assert-implicit-component-helper-argument",[[24,1,["body"]],"expected `t.body` to be a contextual component but found a string. Did you mean `(component t.body)`? (\'ember-table-demo/templates/application.hbs\' @ L11:C10) "],null]],[["rows"],[[25,["rows"]]]]],false],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[10],[0,"\\n    "],[7,"div"],[11,"class","bg-gray-200 mx-auto mt-4 p-4"],[9],[0,"\\n      "],[7,"h2"],[11,"class","text-l border-b-2 border-gray-500 mb-8"],[9],[0,"\\n        Actions\\n      "],[10],[0,"\\n      "],[7,"div"],[11,"class","mb-4"],[9],[0,"\\n        Add\\n        "],[1,[29,"input",null,[["class","type","value","enter"],["w-12 mx-1 text-center px-1","number",[25,["numRows"]],[29,"action",[[24,0,[]],"addRows"],null]]]],false],[0,"\\n        rows.\\n      "],[10],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"ember-table-demo/templates/application.hbs"}})
e.default=t}),define("ember-table-demo/utils/color-ramp",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){if(0===e)return""
var n="",o=!0,l=!1,u=void 0
try{for(var a,i=r[Symbol.iterator]();!(o=(a=i.next()).done);o=!0){var d=a.value
e>=d&&(n=t[d])}}catch(f){l=!0,u=f}finally{try{o||null==i.return||i.return()}finally{if(l)throw u}}return"bg-".concat(n)}
var t={"-30":"red-500","-20":"red-400","-10":"red-300","-5":"red-200","-1":"red-100",25:"green-500",20:"green-400",10:"green-300",5:"green-200",1:"green-100"},r=Object.keys(t).map(function(e){return parseFloat(e)}).sort(function(e,t){return e-t})}),define("ember-table-demo/config/environment",[],function(){try{var e="ember-table-demo/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("ember-table-demo/app").default.create({name:"ember-table-demo",version:"random-rows+2177914f"})
