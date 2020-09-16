(function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],i=0,m=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),_()}function _(){for(var e,t=0;t<n.length;t++){for(var _=n[t],r=!0,c=1;c<_.length;c++){var u=_[c];0!==a[u]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=_[0]))}return e}var r={},a={app:0},n=[];function o(t){if(r[t])return r[t].exports;var _=r[t]={i:t,l:!1,exports:{}};return e[t].call(_.exports,_,_.exports,o),_.l=!0,_.exports}o.m=e,o.c=r,o.d=function(e,t,_){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(o.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(_,r,function(t){return e[t]}.bind(null,r));return _},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/calculator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;n.push([0,"chunk-vendors"]),_()})({0:function(e,t,_){e.exports=_("56d7")},"034f":function(e,t,_){"use strict";var r=_("85ec"),a=_.n(r);a.a},1320:function(e,t,_){"use strict";var r=_("f061"),a=_.n(r);a.a},"2eff":function(e,t,_){"use strict";var r=_("3fc7"),a=_.n(r);a.a},"3fc7":function(e,t,_){},"56d7":function(e,t,_){"use strict";_.r(t);_("e260"),_("e6cf"),_("cca6"),_("a79d");var r=_("2b0e"),a=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",[_("v-app",[_("Calculator")],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",[_("v-container",{staticClass:"calculator-shell",attrs:{"mt-5":"","grid-list-md":""}},[_("v-layout",{attrs:{row:"",wrap:""}},[_("v-flex",{attrs:{xs12:""}},[_("v-card",[_("v-toolbar",{attrs:{color:"blue-grey darken-4"}},[_("v-toolbar-title",{staticClass:"white--text"},[e._v(" "+e._s(e.appName)+" ")])],1),_("v-card-text",{staticClass:"py-4 blue-grey lighten-4"},[_("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[_("v-layout",{attrs:{row:"",wrap:""}},[_("calculator-display",{attrs:{formula:e.formula}}),e._l(e.buttons,(function(t,r){return _("calculator-button",{key:r,staticClass:"flex xs3",attrs:{"click-event-name":e.clickEventName,color:t.length>1?t[1]:"",symbol:t[0]},on:{"calculator-button-click":e.processButtonClick}})}))],2)],1)],1)],1)],1)],1)],1)],1)},c=[],u=_("a97d"),l=u["a"],s=(_("1320"),_("2877")),i=Object(s["a"])(l,o,c,!1,null,"62195cc9",null),m=i.exports,p={name:"App",components:{Calculator:m}},d=p,f=(_("034f"),Object(s["a"])(d,a,n,!1,null,null,null)),E=f.exports,b=_("2f62"),v=(_("96cf"),_("1da1")),h=_("bc3a"),O=_.n(h),x={namespaced:!0,state:{number:"0"},mutations:{SET_NUMBER:function(e,t){e.number=t}},actions:{loadNumber:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var _,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return _=e.commit,t.next=3,O.a.get("http://localhost:3000/getNum");case 3:r=t.sent,a=r.data,_("SET_NUMBER",a);case 6:case"end":return t.stop()}}),t)})))()},sendNumber:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function _(){var r;return regeneratorRuntime.wrap((function(_){while(1)switch(_.prev=_.next){case 0:return r=e.commit,_.next=3,O.a.put("http://localhost:3000/updateNum/".concat(t));case 3:r("SET_NUMBER",t);case 4:case"end":return _.stop()}}),_)})))()}}};r["default"].use(b["a"]);var k=new b["a"].Store({modules:{memory:x}}),M=_("ce5b"),P=_.n(M);_("bf40");r["default"].use(P.a),r["default"].config.productionTip=!1;var D={},C=new P.a(D);new r["default"]({store:k,vuetify:C,render:function(e){return e(E)}}).$mount("#app")},6865:function(e,t,_){"use strict";var r=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",[_("v-btn",{attrs:{dark:"",color:e.color,block:"",large:""},on:{click:e.click}},[e._v(" "+e._s(e.symbol)+" ")])],1)},a=[],n={name:"CalculatorButton",components:{},props:{clickEventName:{type:String,default:"click"},color:{type:String,default:"grey darken-3"},symbol:{default:""}},methods:{click:function(){this.$emit(this.clickEventName,this.symbol)}}},o=n,c=_("2877"),u=Object(c["a"])(o,r,a,!1,null,null,null);t["a"]=u.exports},"85ec":function(e,t,_){},a97d:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fb6a"),core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("4d63"),core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("25f0"),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("466d"),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("5319"),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("96cf"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__),_home_runner_work_calculator_calculator_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("1da1"),_home_runner_work_calculator_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("5530"),_components_CalculatorDisplay_vue__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("e9a8"),_components_CalculatorButton_vue__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("6865"),vuex__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("2f62");__webpack_exports__["a"]={name:"Calculator",components:{CalculatorDisplay:_components_CalculatorDisplay_vue__WEBPACK_IMPORTED_MODULE_9__["a"],CalculatorButton:_components_CalculatorButton_vue__WEBPACK_IMPORTED_MODULE_10__["a"]},data:function(){return{appName:"Calculator",buttons:[["AC","red darken-3"],["CE","red darken-3"],["MS","red darken-3"],["MR","red darken-3"],["7"],["8"],["9"],["÷"],["4"],["5"],["6"],["x"],["1"],["2"],["3"],["-"],["0"],["."],["="],["+"]],clickEventName:"calculator-button-click",formula:"0",isLoading:!1}},computed:Object(_home_runner_work_calculator_calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["a"])({},Object(vuex__WEBPACK_IMPORTED_MODULE_11__["b"])("memory",{ans:"number"})),methods:{processButtonClick:function processButtonClick(symbol){var _this=this;return Object(_home_runner_work_calculator_calculator_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["a"])(regeneratorRuntime.mark((function _callee(){var validFormula;return regeneratorRuntime.wrap((function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.t0=symbol,_context.next="AC"===_context.t0?3:"CE"===_context.t0?4:"MS"===_context.t0?7:"MR"===_context.t0?11:"="===_context.t0?14:20;break;case 3:return _context.abrupt("return",_this.setFormula("0"));case 4:return validFormula=_this.formula.slice(0,_this.formula.length-1),0===validFormula.length&&(validFormula="0"),_context.abrupt("return",_this.setFormula(validFormula));case 7:return validFormula=_this.formula.replace(/÷/g,"/").replace(/\x/g,"*"),_this.setFormula(eval(validFormula)+""),_this.$store.dispatch("memory/sendNumber",_this.formula),_context.abrupt("return",_this.setFormula(eval(validFormula)+""));case 11:return _context.next=13,_this.$store.dispatch("memory/loadNumber");case 13:return _context.abrupt("return",_this.setFormula(eval(_this.ans)+""));case 14:if(!_this.validateEntry(_this.formula,symbol)){_context.next=17;break}return validFormula=_this.formula.replace(/÷/g,"/").replace(/\x/g,"*"),_context.abrupt("return",_this.setFormula(eval(validFormula)+""));case 17:return validFormula=_this.formula.slice(0,-1),validFormula=validFormula.replace(/÷/g,"/").replace(/\x/g,"*"),_context.abrupt("return",_this.setFormula(eval(validFormula)+""));case 20:if(!_this.validateEntry(_this.formula,symbol)){_context.next=22;break}return _context.abrupt("return",_this.setFormula(_this.formula+symbol));case 22:case"end":return _context.stop()}}),_callee)})))()},setFormula:function(e){this.formula=e.replace(/^[0]*([^0]+)$/,"$1")},validateEntry:function(e,t){var _=e+t,r="";switch(t){case".":if(_.match(/\.[\d]*\./))return!1;break;case"+":case"x":case"÷":if(_==="0"+t)return!1;if(r=new RegExp("[\\+\\-\\÷\\x][\\"+t+"]"),_.match(r))return!1;break;case"-":if(_.match(/--/))return!1;break;case"=":if(r=new RegExp("[\\+\\-\\÷\\x][\\"+t+"]"),_.match(r))return!1;break}return!0}},mounted:function(){var e=this;window.addEventListener("keyup",(function(t){return t.key.match(/^[\d\\+\\-\\.\\=]$/)?e.processButtonClick(t.key):"*"===t.key?e.processButtonClick("x"):"/"===t.key?e.processButtonClick("÷"):"Delete"===t.key?e.processButtonClick("AC"):"Backspace"===t.key?e.processButtonClick("CE"):"Enter"===t.key?e.processButtonClick("="):void 0}))}}},e9a8:function(e,t,_){"use strict";var r=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",[_("v-flex",{staticClass:"mb-2 text-xs-right",attrs:{xs12:""}},[_("v-text-field",{staticClass:"formula-input",attrs:{solo:"",readonly:"",value:e.formulaInput}}),_("div",{staticClass:"formula mt-1 mr-3",domProps:{innerHTML:e._s(e.formula)}})],1)],1)},a=[],n=(_("ac1f"),_("466d"),{name:"CalculatorDisplay",components:{},props:{formula:{default:""}},data:function(){return{}},computed:{formulaInput:function(){return this.formula.match(/[\\-]?[\d\\.]+[\\+\\-\\x\\÷]*$/)}},methods:{buttonClick:function(e){console.log("todo: buttonclick",e)}}}),o=n,c=(_("2eff"),_("2877")),u=Object(c["a"])(o,r,a,!1,null,null,null);t["a"]=u.exports},f061:function(e,t,_){}});
//# sourceMappingURL=app.a5fee11b.js.map