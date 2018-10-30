(window.webpackJsonp=window.webpackJsonp||[]).push([["yoshino-tag"],{"./docs/pages/components/Tag/api.tsx":
/*!*******************************************!*\
  !*** ./docs/pages/components/Tag/api.tsx ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    {\n        title: 'API',\n        json: [\n            {\n                props: 'mode',\n                intro: '标签模式',\n                type: \"'custom' | 'geek'\",\n                defaultValue: 'custom',\n            },\n            {\n                props: 'color',\n                intro: '颜色',\n                type: 'string',\n                defaultValue: '-',\n            },\n            {\n                props: 'closeable',\n                intro: '是否可以关闭',\n                type: 'boolean',\n                defaultValue: 'false',\n            },\n            {\n                props: 'onClose',\n                intro: '关闭回调',\n                type: '() => void',\n                defaultValue: '-',\n            },\n        ]\n    }\n]);\n\n\n//# sourceURL=webpack:///./docs/pages/components/Tag/api.tsx?")},"./docs/pages/components/Tag/demo/tagCustom.md":
/*!*****************************************************!*\
  !*** ./docs/pages/components/Tag/demo/tagCustom.md ***!
  \*****************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "#### Geek模式\\n`geek`模式下根据`color`会生成炫酷的标签。\\n"\n\n//# sourceURL=webpack:///./docs/pages/components/Tag/demo/tagCustom.md?')},"./docs/pages/components/Tag/demo/tagCustom.tsx":
/*!******************************************************!*\
  !*** ./docs/pages/components/Tag/demo/tagCustom.tsx ***!
  \******************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _yoshino_components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yoshino/components/ */ "./components/index.tsx");\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Tag"], { color: \'#108ee9\', mode: \'geek\' }, "#108ee9"),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Tag"], { color: \'#87d068\', mode: \'geek\' }, "#87d068"),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Tag"], { color: \'#9e9d24\', mode: \'geek\' }, "#9e9d24"),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Tag"], { color: \'#ffab91\', mode: \'geek\' }, "#ffab91"),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Tag"], { color: \'#b0bec5\', mode: \'geek\' }, "#b0bec5")));\n});\n\n\n//# sourceURL=webpack:///./docs/pages/components/Tag/demo/tagCustom.tsx?')},"./docs/pages/components/Tag/demo/tagDemo.md":
/*!***************************************************!*\
  !*** ./docs/pages/components/Tag/demo/tagDemo.md ***!
  \***************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "#### 基本使用\\n简单的基本使用。\\n"\n\n//# sourceURL=webpack:///./docs/pages/components/Tag/demo/tagDemo.md?')},"./docs/pages/components/Tag/demo/tagDemo.tsx":
/*!****************************************************!*\
  !*** ./docs/pages/components/Tag/demo/tagDemo.tsx ***!
  \****************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _yoshino_components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yoshino/components/ */ "./components/index.tsx");\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,\n            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Tag"], null, "\\u53EF\\u4E50"),\n            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Tag"], { closeable: true, onClose: function () { return console.log(\'关闭了\'); } }, "\\u96EA\\u78A7")),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,\n            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Tag"], { color: \'#108ee9\', closeable: true }, "\\u51B0\\u7EA2\\u8336"))));\n});\n\n\n//# sourceURL=webpack:///./docs/pages/components/Tag/demo/tagDemo.tsx?')},"./docs/pages/components/Tag/index.md":
/*!********************************************!*\
  !*** ./docs/pages/components/Tag/index.md ***!
  \********************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "## Tag 标签\\n一般用于描述或者分类。\\n\\n## 代码演示\\n"\n\n//# sourceURL=webpack:///./docs/pages/components/Tag/index.md?')},"./docs/pages/components/Tag/index.tsx":
/*!*********************************************!*\
  !*** ./docs/pages/components/Tag/index.tsx ***!
  \*********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.md */ "./docs/pages/components/Tag/index.md");\n/* harmony import */ var _index_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _docs_components_Markdown___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @docs/components/Markdown/ */ "./docs/components/Markdown/index.tsx");\n/* harmony import */ var _docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @docs/components/CodeBox/ */ "./docs/components/CodeBox/index.tsx");\n/* harmony import */ var _docs_components_ApiBox___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @docs/components/ApiBox/ */ "./docs/components/ApiBox/index.tsx");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./docs/pages/components/Tag/api.tsx");\n/* harmony import */ var _demo_tagDemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/tagDemo */ "./docs/pages/components/Tag/demo/tagDemo.tsx");\n/* harmony import */ var _demo_tagDemo_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/tagDemo.md */ "./docs/pages/components/Tag/demo/tagDemo.md");\n/* harmony import */ var _demo_tagDemo_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_demo_tagDemo_md__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _demo_tagCustom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo/tagCustom */ "./docs/pages/components/Tag/demo/tagCustom.tsx");\n/* harmony import */ var _demo_tagCustom_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo/tagCustom.md */ "./docs/pages/components/Tag/demo/tagCustom.md");\n/* harmony import */ var _demo_tagCustom_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_demo_tagCustom_md__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\nvar tagDemoCode = __webpack_require__(/*! raw-loader!./demo/tagDemo */ "./node_modules/raw-loader/index.js!./docs/pages/components/Tag/demo/tagDemo.tsx");\n\n\nvar tagCustomCode = __webpack_require__(/*! raw-loader!./demo/tagCustom */ "./node_modules/raw-loader/index.js!./docs/pages/components/Tag/demo/tagCustom.tsx");\nvar TagPage = /** @class */ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TagPage, _super);\n    function TagPage() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    TagPage.prototype.render = function () {\n        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_Markdown___WEBPACK_IMPORTED_MODULE_3__["default"], { text: _index_md__WEBPACK_IMPORTED_MODULE_2__ }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__["default"], { text: _demo_tagDemo_md__WEBPACK_IMPORTED_MODULE_8__, demo: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_demo_tagDemo__WEBPACK_IMPORTED_MODULE_7__["default"], null), code: tagDemoCode }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__["default"], { text: _demo_tagCustom_md__WEBPACK_IMPORTED_MODULE_10__, demo: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_demo_tagCustom__WEBPACK_IMPORTED_MODULE_9__["default"], null), code: tagCustomCode }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_ApiBox___WEBPACK_IMPORTED_MODULE_5__["default"], { api: _api__WEBPACK_IMPORTED_MODULE_6__["default"] })));\n    };\n    return TagPage;\n}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));\n/* harmony default export */ __webpack_exports__["default"] = (TagPage);\n\n\n//# sourceURL=webpack:///./docs/pages/components/Tag/index.tsx?')},"./node_modules/raw-loader/index.js!./docs/pages/components/Tag/demo/tagCustom.tsx":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./docs/pages/components/Tag/demo/tagCustom.tsx ***!
  \********************************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = \"import * as React from 'react';\\nimport { Tag } from '@yoshino/components/';\\n\\nexport default function() {\\n  return (\\n    <div>\\n      <Tag color='#108ee9' mode='geek'>#108ee9</Tag>\\n      <Tag color='#87d068' mode='geek'>#87d068</Tag>\\n      <Tag color='#9e9d24' mode='geek'>#9e9d24</Tag>\\n      <Tag color='#ffab91' mode='geek'>#ffab91</Tag>\\n      <Tag color='#b0bec5' mode='geek'>#b0bec5</Tag>\\n    </div>\\n  );\\n}\\n\"\n\n//# sourceURL=webpack:///./docs/pages/components/Tag/demo/tagCustom.tsx?./node_modules/raw-loader")},"./node_modules/raw-loader/index.js!./docs/pages/components/Tag/demo/tagDemo.tsx":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./docs/pages/components/Tag/demo/tagDemo.tsx ***!
  \******************************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = \"import * as React from 'react';\\nimport { Tag } from '@yoshino/components/';\\n\\nexport default function() {\\n  return (\\n    <div>\\n      <div>\\n        <Tag>可乐</Tag>\\n        <Tag closeable onClose={() => console.log('关闭了')}>雪碧</Tag>\\n      </div>\\n      <div>\\n        <Tag color='#108ee9' closeable>冰红茶</Tag>\\n      </div>\\n    </div>\\n  );\\n}\\n\"\n\n//# sourceURL=webpack:///./docs/pages/components/Tag/demo/tagDemo.tsx?./node_modules/raw-loader")}}]);