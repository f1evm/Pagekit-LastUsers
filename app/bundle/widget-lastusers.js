/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__vue_script__ = __webpack_require__(1)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] app\\components\\widget-lastusers.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(2)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
if (__vue_template__) {
__vue_options__.template = __vue_template__
}
if (!__vue_options__.computed) __vue_options__.computed = {}
Object.keys(__vue_styles__).forEach(function (key) {
var module = __vue_styles__[key]
__vue_options__.computed[key] = function () { return module }
})
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "_v-4fe73474/widget-lastusers.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    section: {
        label: 'Settings'
    },
    replace: false,
    props: ['widget', 'config', 'form'],
    data: function data() {
        return {};
    },
    created: function created() {
        this.$options.partials = this.$parent.$options.partials;
        this.$set('widget.data', _.merge({
            count: 5,
            showusername: true,
            showfullname: false,
            order: 0
        }, this.widget.data));
    }
};
window.Widgets.components['fevm-lastusers:settings'] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"uk-grid pk-grid-large pk-width-sidebar-large\" data-uk-grid-margin>\n    <div class=\"pk-width-content uk-form-horizontal\">\n        <div class=\"uk-form-row\">\n            <label for=\"form-title\" class=\"uk-form-label\">{{ 'Widget Title' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input id=\"form-title\" class=\"uk-form-width-large\" type=\"text\" name=\"title\" v-model=\"widget.title\"\n                       v-validate:required>\n                <p class=\"uk-form-help-block uk-text-danger\"\n                   v-show=\"form.title.invalid\">{{ 'Title cannot be blank.' | trans }}</p>\n            </div>\n        </div>\n        <div class=\"uk-form-row\">\n            <label for=\"form-count\" class=\"uk-form-label\">{{ 'Number of Users (0 for all)' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input id=\"form-count\" class=\"uk-form-width-small uk-text-right\" type=\"number\" name=\"count\"\n                       v-model=\"widget.data.count\" min=\"0\" number>\n            </div>\n        </div>\n        <div class=\"uk-form-row\">\n            <label for=\"form-showusername\" class=\"uk-form-label\">{{ 'Show UserName' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <input id=\"form-showusername\" type=\"checkbox\" v-model=\"widget.data.showusername\">\n            </div>\n        </div>\n        <div class=\"uk-form-row\">\n            <label for=\"form-showfullname\" class=\"uk-form-label\">{{ 'Show Full Name' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <input id=\"form-showfullname\" type=\"checkbox\" v-model=\"widget.data.showfullname\">\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-order\" class=\"uk-form-label\">{{ 'Order' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <input type=\"radio\" name=\"form-order\" value=\"0\" v-model=\"widget.data.order\"> {{ 'Oldest first' | trans }}\n                <input type=\"radio\" name=\"form-order\" value=\"1\" v-model=\"widget.data.order\"> {{ 'Newest first' | trans }}\n\n                </select>\n            </div>\n        </div>\n\n\n    </div>\n    <div class=\"pk-width-sidebar\">\n        <partial name=\"settings\"></partial>\n    </div>\n</div>\n\n";

/***/ })
/******/ ]);