(window.webpackJsonp=window.webpackJsonp||[]).push([["yoshino-loading"],{"./docs/pages/components/Loading/api.tsx":
/*!***********************************************!*\
  !*** ./docs/pages/components/Loading/api.tsx ***!
  \***********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    {\n        title: 'API',\n        json: [\n            {\n                props: 'type',\n                intro: '加载图标的样式',\n                type: \"'a' | 'b' | 'c' | 'd'\",\n                defaultValue: 'a',\n            },\n            {\n                props: 'size',\n                intro: '加载图标大小，当设置auto的时可以通过style的font-size设置图标大小',\n                type: \"'small' | 'default' | 'large' | auto''\",\n                defaultValue: 'default',\n            },\n            {\n                props: 'text',\n                intro: '加载文本',\n                type: 'string | boolean',\n                defaultValue: '-',\n            },\n            {\n                props: 'icon',\n                intro: '自定义icon',\n                type: 'ReactNode',\n                defaultValue: '-',\n            },\n            {\n                props: 'loading',\n                intro: '加载状态',\n                type: 'boolean',\n                defaultValue: 'true',\n            },\n            {\n                props: 'color',\n                intro: '图标颜色, 也可以通过style的color来设置',\n                type: 'string',\n                defaultValue: '-',\n            },\n        ]\n    }\n]);\n\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/api.tsx?")},"./docs/pages/components/Loading/demo/loadingContainer.md":
/*!****************************************************************!*\
  !*** ./docs/pages/components/Loading/demo/loadingContainer.md ***!
  \****************************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "#### 包裹需要加载的页面"\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/demo/loadingContainer.md?')},"./docs/pages/components/Loading/demo/loadingContainer.tsx":
/*!*****************************************************************!*\
  !*** ./docs/pages/components/Loading/demo/loadingContainer.tsx ***!
  \*****************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _yoshino_components___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yoshino/components/ */ "./components/index.tsx");\n\n\n\nvar App = /** @class */ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](App, _super);\n    function App() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.state = {\n            value: false,\n        };\n        return _this;\n    }\n    App.prototype.render = function () {\n        var _this = this;\n        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_2__["Loading"], { text: \'\\u81EA\\u5B9A\\u4E49\\u52A0\\u8F7D\\u6587\\u672C\', size: \'small\', loading: this.state.value },\n                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_2__["Alert"], { type: \'info\', showIcon: true, title: \'\\u6D88\\u606F\\u63D0\\u793A\\u6587\\u6848\' })),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,\n                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_2__["Switch"], { checked: this.state.value, onChange: function (v) { return _this.setState({ value: v }); } }))));\n    };\n    return App;\n}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));\n/* harmony default export */ __webpack_exports__["default"] = (App);\n\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/demo/loadingContainer.tsx?')},"./docs/pages/components/Loading/demo/loadingCustom.md":
/*!*************************************************************!*\
  !*** ./docs/pages/components/Loading/demo/loadingCustom.md ***!
  \*************************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "#### 其余加载样式。\\n\\n"\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/demo/loadingCustom.md?')},"./docs/pages/components/Loading/demo/loadingCustom.tsx":
/*!**************************************************************!*\
  !*** ./docs/pages/components/Loading/demo/loadingCustom.tsx ***!
  \**************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _yoshino_components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yoshino/components/ */ "./components/index.tsx");\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Loading"], { text: \'\\u81EA\\u5B9A\\u4E49\\u52A0\\u8F7D\\u6587\\u672C\', size: \'large\', type: \'a\' }),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Loading"], { text: \'\\u81EA\\u5B9A\\u4E49\\u52A0\\u8F7D\\u6587\\u672C\', size: \'large\', type: \'b\' }),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Loading"], { text: \'\\u81EA\\u5B9A\\u4E49\\u52A0\\u8F7D\\u6587\\u672C\', size: \'large\', type: \'c\' }),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Loading"], { text: \'\\u81EA\\u5B9A\\u4E49icon\\u989C\\u8272\', size: \'large\', type: \'d\', color: \'red\' }),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Loading"], { text: \'\\u81EA\\u5B9A\\u4E49icon\\u56FE\\u6807\', size: \'large\', icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Icon"], { type: \'ios-refresh\' }) })));\n});\n\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/demo/loadingCustom.tsx?')},"./docs/pages/components/Loading/demo/loadingDemo.md":
/*!***********************************************************!*\
  !*** ./docs/pages/components/Loading/demo/loadingDemo.md ***!
  \***********************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "#### 基本使用\\n简单的基本使用。`size`设置为`auto`时能根据font-size自动调整大小\\n"\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/demo/loadingDemo.md?')},"./docs/pages/components/Loading/demo/loadingDemo.tsx":
/*!************************************************************!*\
  !*** ./docs/pages/components/Loading/demo/loadingDemo.tsx ***!
  \************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _yoshino_components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yoshino/components/ */ "./components/index.tsx");\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Loading"], { size: \'small\' }),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Loading"], { text: true }),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Loading"], { text: \'\\u81EA\\u5B9A\\u4E49\\u52A0\\u8F7D\\u6587\\u672C\', size: \'large\' }),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Loading"], { text: \'\\u81EA\\u5B9A\\u4E49\\u52A0\\u8F7D\\u6587\\u672C\', size: \'auto\', style: { fontSize: 50 } })));\n});\n\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/demo/loadingDemo.tsx?')},"./docs/pages/components/Loading/index.md":
/*!************************************************!*\
  !*** ./docs/pages/components/Loading/index.md ***!
  \************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "## Loading 加载\\n表示当前处于加载状态中。\\n\\n## 代码演示\\n"\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/index.md?')},"./docs/pages/components/Loading/index.tsx":
/*!*************************************************!*\
  !*** ./docs/pages/components/Loading/index.tsx ***!
  \*************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.md */ "./docs/pages/components/Loading/index.md");\n/* harmony import */ var _index_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _docs_components_Markdown___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @docs/components/Markdown/ */ "./docs/components/Markdown/index.tsx");\n/* harmony import */ var _docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @docs/components/CodeBox/ */ "./docs/components/CodeBox/index.tsx");\n/* harmony import */ var _docs_components_ApiBox___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @docs/components/ApiBox/ */ "./docs/components/ApiBox/index.tsx");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./docs/pages/components/Loading/api.tsx");\n/* harmony import */ var _demo_loadingDemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/loadingDemo */ "./docs/pages/components/Loading/demo/loadingDemo.tsx");\n/* harmony import */ var _demo_loadingDemo_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/loadingDemo.md */ "./docs/pages/components/Loading/demo/loadingDemo.md");\n/* harmony import */ var _demo_loadingDemo_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_demo_loadingDemo_md__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _demo_loadingCustom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo/loadingCustom */ "./docs/pages/components/Loading/demo/loadingCustom.tsx");\n/* harmony import */ var _demo_loadingCustom_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo/loadingCustom.md */ "./docs/pages/components/Loading/demo/loadingCustom.md");\n/* harmony import */ var _demo_loadingCustom_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_demo_loadingCustom_md__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _demo_loadingContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo/loadingContainer */ "./docs/pages/components/Loading/demo/loadingContainer.tsx");\n/* harmony import */ var _demo_loadingContainer_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo/loadingContainer.md */ "./docs/pages/components/Loading/demo/loadingContainer.md");\n/* harmony import */ var _demo_loadingContainer_md__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_demo_loadingContainer_md__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\nvar loadingDemoCode = __webpack_require__(/*! raw-loader!./demo/loadingDemo */ "./node_modules/raw-loader/index.js!./docs/pages/components/Loading/demo/loadingDemo.tsx");\n\n\nvar loadingCustomCode = __webpack_require__(/*! raw-loader!./demo/loadingCustom */ "./node_modules/raw-loader/index.js!./docs/pages/components/Loading/demo/loadingCustom.tsx");\n\n\nvar loadingContainerCode = __webpack_require__(/*! raw-loader!./demo/loadingContainer */ "./node_modules/raw-loader/index.js!./docs/pages/components/Loading/demo/loadingContainer.tsx");\nvar LoadingPage = /** @class */ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoadingPage, _super);\n    function LoadingPage() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    LoadingPage.prototype.render = function () {\n        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_Markdown___WEBPACK_IMPORTED_MODULE_3__["default"], { text: _index_md__WEBPACK_IMPORTED_MODULE_2__ }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__["default"], { text: _demo_loadingDemo_md__WEBPACK_IMPORTED_MODULE_8__, demo: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_demo_loadingDemo__WEBPACK_IMPORTED_MODULE_7__["default"], null), code: loadingDemoCode }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__["default"], { text: _demo_loadingCustom_md__WEBPACK_IMPORTED_MODULE_10__, demo: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_demo_loadingCustom__WEBPACK_IMPORTED_MODULE_9__["default"], null), code: loadingCustomCode }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__["default"], { text: _demo_loadingContainer_md__WEBPACK_IMPORTED_MODULE_12__, demo: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_demo_loadingContainer__WEBPACK_IMPORTED_MODULE_11__["default"], null), code: loadingContainerCode }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_ApiBox___WEBPACK_IMPORTED_MODULE_5__["default"], { api: _api__WEBPACK_IMPORTED_MODULE_6__["default"] })));\n    };\n    return LoadingPage;\n}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));\n/* harmony default export */ __webpack_exports__["default"] = (LoadingPage);\n\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/index.tsx?')},"./node_modules/raw-loader/index.js!./docs/pages/components/Loading/demo/loadingContainer.tsx":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./docs/pages/components/Loading/demo/loadingContainer.tsx ***!
  \*******************************************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = \"import * as React from 'react';\\nimport { Loading, Switch, Alert } from '@yoshino/components/';\\n\\nexport default class App extends React.Component {\\n  state = {\\n    value: false,\\n  };\\n\\n  render() {\\n     return (\\n      <div>\\n        <Loading text='自定义加载文本' size='small' loading={this.state.value}>\\n          <Alert type='info' showIcon title='消息提示文案'/>\\n        </Loading>\\n        <div>\\n          <Switch checked={this.state.value} onChange={(v) => this.setState({value: v})} />\\n        </div>\\n      </div>\\n    );\\n  }\\n}\\n\"\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/demo/loadingContainer.tsx?./node_modules/raw-loader")},"./node_modules/raw-loader/index.js!./docs/pages/components/Loading/demo/loadingCustom.tsx":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./docs/pages/components/Loading/demo/loadingCustom.tsx ***!
  \****************************************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = \"import * as React from 'react';\\nimport { Loading, Icon } from '@yoshino/components/';\\n\\nexport default function() {\\n  return (\\n    <div>\\n      <Loading text='自定义加载文本' size='large' type='a'/>\\n      <Loading text='自定义加载文本' size='large' type='b'/>\\n      <Loading text='自定义加载文本' size='large' type='c'/>\\n      <Loading text='自定义icon颜色' size='large' type='d' color='red'/>\\n      <Loading text='自定义icon图标' size='large' icon={<Icon type='ios-refresh'/>}/>\\n    </div>\\n  );\\n}\\n\"\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/demo/loadingCustom.tsx?./node_modules/raw-loader")},"./node_modules/raw-loader/index.js!./docs/pages/components/Loading/demo/loadingDemo.tsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./docs/pages/components/Loading/demo/loadingDemo.tsx ***!
  \**************************************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = \"import * as React from 'react';\\nimport { Loading } from '@yoshino/components/';\\n\\nexport default function() {\\n  return (\\n    <div>\\n      <Loading size='small'/>\\n      <Loading text/>\\n      <Loading text='自定义加载文本' size='large'/>\\n      <Loading text='自定义加载文本' size='auto' style={{fontSize: 50}}/>\\n    </div>\\n  );\\n}\\n\"\n\n//# sourceURL=webpack:///./docs/pages/components/Loading/demo/loadingDemo.tsx?./node_modules/raw-loader")}}]);