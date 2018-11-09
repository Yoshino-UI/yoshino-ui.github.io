(window.webpackJsonp=window.webpackJsonp||[]).push([["yoshino-modal"],{"./docs/pages/components/Modal/api.tsx":
/*!*********************************************!*\
  !*** ./docs/pages/components/Modal/api.tsx ***!
  \*********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.md */ \"./docs/pages/components/Modal/config.md\");\n/* harmony import */ var _config_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_md__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    {\n        title: 'API',\n        intro: _config_md__WEBPACK_IMPORTED_MODULE_0__,\n        json: [\n            {\n                props: 'zIndex',\n                intro: '对应css的z-index',\n                type: 'number',\n                defaultValue: '1000',\n            },\n            {\n                props: 'width',\n                intro: '对话框宽度',\n                type: 'number',\n                defaultValue: '256',\n            },\n            {\n                props: 'onOk',\n                intro: '确认按钮回调，返回值为`true`时关闭',\n                type: '() => boolean',\n                defaultValue: '-',\n            },\n            {\n                props: 'onCancel',\n                intro: '取消按钮回到',\n                type: '() => void',\n                defaultValue: '-',\n            },\n            {\n                props: 'onClose',\n                intro: '对话框关闭时回调，点击取消、确定、以及右上角关闭时都会触发',\n                type: '() => void',\n                defaultValue: '-',\n            },\n            {\n                props: 'okText',\n                intro: '确认按钮文本，也可以是一个`Element`',\n                type: 'ReactNode',\n                defaultValue: '确定',\n            },\n            {\n                props: 'okButtonProps',\n                intro: '确认按钮的`props`，详情见`Button Props`',\n                type: 'ReactNode',\n                defaultValue: '确定',\n            },\n            {\n                props: 'cancelText',\n                intro: '取消按钮文本，也可以是一个`Element`',\n                type: 'ReactNode',\n                defaultValue: '取消',\n            },\n            {\n                props: 'cancelButtonProps',\n                intro: '取消按钮的`props`，，详情见`Button Props`',\n                type: 'ReactNode',\n                defaultValue: '取消',\n            },\n            {\n                props: 'title',\n                intro: '标题',\n                type: 'ReactNode',\n                defaultValue: '-',\n            },\n            {\n                props: 'content',\n                intro: '内容',\n                type: 'ReactNode',\n                defaultValue: '-',\n            },\n            {\n                props: 'bodyContent',\n                intro: '主体部分，可以覆盖title、content以icon',\n                type: 'ReactNode',\n                defaultValue: '-',\n            },\n            {\n                props: 'icon',\n                intro: '图标',\n                type: 'ReactNode',\n                defaultValue: '-',\n            },\n            {\n                props: 'showCancel',\n                intro: '是否显示取消按钮',\n                type: 'boolean',\n                defaultValue: 'false',\n            },\n            {\n                props: 'showClose',\n                intro: '是否显示关闭按钮',\n                type: 'boolean',\n                defaultValue: 'false',\n            },\n            {\n                props: 'showMask',\n                intro: '是否显示蒙层',\n                type: 'boolean',\n                defaultValue: 'true',\n            },\n            {\n                props: 'maskClosable',\n                intro: '点击蒙层是否关闭',\n                type: 'boolean',\n                defaultValue: 'true',\n            },\n            {\n                props: 'maskClick',\n                intro: '蒙层点击事件',\n                type: '() => void',\n                defaultValue: '-',\n            },\n            {\n                props: 'maskStyle',\n                intro: '蒙层样式',\n                type: 'React.CSSProperties',\n                defaultValue: '-',\n            },\n        ]\n    }\n]);\n\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/api.tsx?")},"./docs/pages/components/Modal/config.md":
/*!***********************************************!*\
  !*** ./docs/pages/components/Modal/config.md ***!
  \***********************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "- Modal.confirm(config)\\n- Modal.success(config)\\n- Modal.error(config)\\n- Modal.info(config)\\n- Modal.warning(config)\\n- Modal.close(key: String)\\n\\n`confirm`、`success`、`error`、`info`、`warning`都会返回一个`key`，用于`close`方法来关闭制定窗口。\\n\\nconfig 参数如下："\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/config.md?')},"./docs/pages/components/Modal/demo/modalCustom.md":
/*!*********************************************************!*\
  !*** ./docs/pages/components/Modal/demo/modalCustom.md ***!
  \*********************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "#### 四种带默认图标的对话框\\n四中对话框的`type`分别为`info`、`success`、`error`、`warning`，各自带有默认图标，并且只有确认键。\\n"\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/demo/modalCustom.md?')},"./docs/pages/components/Modal/demo/modalCustom.tsx":
/*!**********************************************************!*\
  !*** ./docs/pages/components/Modal/demo/modalCustom.tsx ***!
  \**********************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _yoshino_components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yoshino/components/ */ "./components/index.tsx");\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n    var info = function () {\n        _yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Modal"].info({\n            title: \'info\',\n            content: \'infoinfoinfoinfoinfoinfoinfoinfoinfoinfo\',\n            width: 400,\n        });\n    };\n    var success = function () {\n        _yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Modal"].success({\n            title: \'success\',\n            content: \'successsuccesssuccesssuccesssuccesssuccess\',\n            width: 400,\n        });\n    };\n    var error = function () {\n        _yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Modal"].error({\n            title: \'error\',\n            content: \'errorerrorerrorerrorerrorerrorerrorerrorerror\',\n            width: 400,\n        });\n    };\n    var warning = function () {\n        _yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Modal"].warning({\n            title: \'warning\',\n            content: \'warningwarningwarningwarningwarningwarning\',\n            width: 400,\n        });\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Button"], { onClick: info }, "info"),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Button"], { onClick: success }, "success"),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Button"], { onClick: error }, "error"),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Button"], { onClick: warning }, "warning")));\n});\n\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/demo/modalCustom.tsx?')},"./docs/pages/components/Modal/demo/modalDemo.md":
/*!*******************************************************!*\
  !*** ./docs/pages/components/Modal/demo/modalDemo.md ***!
  \*******************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "#### 基本使用\\n`confirm`打开一个具有确定和取消的对话框\\n"\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/demo/modalDemo.md?')},"./docs/pages/components/Modal/demo/modalDemo.tsx":
/*!********************************************************!*\
  !*** ./docs/pages/components/Modal/demo/modalDemo.tsx ***!
  \********************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _yoshino_components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yoshino/components/ */ "./components/index.tsx");\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n    var confirm = function () {\n        _yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Modal"].confirm({\n            icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Icon"], { type: \'md-checkmark\' }),\n            title: \'这是一个标题！！！\',\n            content: \'这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！\',\n            width: 400,\n            showClose: true,\n        });\n    };\n    var autoClose = function () {\n        var ref = _yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Modal"].confirm({\n            title: \'这是一个标题！！！\',\n            content: \'这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！\',\n            width: 400,\n            showCancel: false,\n        });\n        setTimeout(function () {\n            _yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Modal"].close(ref);\n        }, 2000);\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Button"], { onClick: confirm }, "confirm"),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Button"], { onClick: autoClose }, "\\u6253\\u5F00\\u4E00\\u4E2A2\\u79D2\\u540E\\u81EA\\u52A8\\u5173\\u95ED\\u7684\\u5BF9\\u8BDD\\u6846")));\n});\n\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/demo/modalDemo.tsx?')},"./docs/pages/components/Modal/demo/modalInner.md":
/*!********************************************************!*\
  !*** ./docs/pages/components/Modal/demo/modalInner.md ***!
  \********************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "#### 内嵌render的Modal\\n写在`render`里的`Modal`，可以动态更新Modal中的内容。\\n"\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/demo/modalInner.md?')},"./docs/pages/components/Modal/demo/modalInner.tsx":
/*!*********************************************************!*\
  !*** ./docs/pages/components/Modal/demo/modalInner.tsx ***!
  \*********************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _yoshino_components___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yoshino/components/ */ "./components/index.tsx");\n\n\n\nvar App = /** @class */ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](App, _super);\n    function App() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.state = {\n            count: 1,\n            visible: false,\n        };\n        _this.onClick = function () {\n            _this.setState({\n                count: _this.state.count + 1,\n                visible: true,\n            });\n        };\n        return _this;\n    }\n    App.prototype.render = function () {\n        var _this = this;\n        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_2__["Button"], { onClick: this.onClick }, "\\u70B9\\u4E00\\u6B21count++"),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_2__["Modal"], { visible: this.state.visible, bodyContent: this.state.count, onClose: function () { return _this.setState({ visible: false }); }, okButtonProps: { loading: true } })));\n    };\n    return App;\n}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));\n/* harmony default export */ __webpack_exports__["default"] = (App);\n\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/demo/modalInner.tsx?')},"./docs/pages/components/Modal/index.md":
/*!**********************************************!*\
  !*** ./docs/pages/components/Modal/index.md ***!
  \**********************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "## Modal \\n\\n\\n## 代码演示\\n"\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/index.md?')},"./docs/pages/components/Modal/index.tsx":
/*!***********************************************!*\
  !*** ./docs/pages/components/Modal/index.tsx ***!
  \***********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.md */ "./docs/pages/components/Modal/index.md");\n/* harmony import */ var _index_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _docs_components_Markdown___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @docs/components/Markdown/ */ "./docs/components/Markdown/index.tsx");\n/* harmony import */ var _docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @docs/components/CodeBox/ */ "./docs/components/CodeBox/index.tsx");\n/* harmony import */ var _docs_components_ApiBox___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @docs/components/ApiBox/ */ "./docs/components/ApiBox/index.tsx");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./docs/pages/components/Modal/api.tsx");\n/* harmony import */ var _demo_modalDemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/modalDemo */ "./docs/pages/components/Modal/demo/modalDemo.tsx");\n/* harmony import */ var _demo_modalDemo_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/modalDemo.md */ "./docs/pages/components/Modal/demo/modalDemo.md");\n/* harmony import */ var _demo_modalDemo_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_demo_modalDemo_md__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _demo_modalCustom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo/modalCustom */ "./docs/pages/components/Modal/demo/modalCustom.tsx");\n/* harmony import */ var _demo_modalCustom_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo/modalCustom.md */ "./docs/pages/components/Modal/demo/modalCustom.md");\n/* harmony import */ var _demo_modalCustom_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_demo_modalCustom_md__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _demo_modalInner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo/modalInner */ "./docs/pages/components/Modal/demo/modalInner.tsx");\n/* harmony import */ var _demo_modalInner_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo/modalInner.md */ "./docs/pages/components/Modal/demo/modalInner.md");\n/* harmony import */ var _demo_modalInner_md__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_demo_modalInner_md__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\nvar modalDemoCode = __webpack_require__(/*! raw-loader!./demo/modalDemo */ "./node_modules/raw-loader/index.js!./docs/pages/components/Modal/demo/modalDemo.tsx");\n\n\nvar modalCustomCode = __webpack_require__(/*! raw-loader!./demo/modalCustom */ "./node_modules/raw-loader/index.js!./docs/pages/components/Modal/demo/modalCustom.tsx");\n\n\nvar modalInnerCode = __webpack_require__(/*! raw-loader!./demo/modalInner */ "./node_modules/raw-loader/index.js!./docs/pages/components/Modal/demo/modalInner.tsx");\nvar ModalPage = /** @class */ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ModalPage, _super);\n    function ModalPage() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    ModalPage.prototype.render = function () {\n        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_Markdown___WEBPACK_IMPORTED_MODULE_3__["default"], { text: _index_md__WEBPACK_IMPORTED_MODULE_2__ }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__["default"], { text: _demo_modalDemo_md__WEBPACK_IMPORTED_MODULE_8__, demo: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_demo_modalDemo__WEBPACK_IMPORTED_MODULE_7__["default"], null), code: modalDemoCode }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__["default"], { text: _demo_modalCustom_md__WEBPACK_IMPORTED_MODULE_10__, demo: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_demo_modalCustom__WEBPACK_IMPORTED_MODULE_9__["default"], null), code: modalCustomCode }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__["default"], { text: _demo_modalInner_md__WEBPACK_IMPORTED_MODULE_12__, demo: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_demo_modalInner__WEBPACK_IMPORTED_MODULE_11__["default"], null), code: modalInnerCode }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_ApiBox___WEBPACK_IMPORTED_MODULE_5__["default"], { api: _api__WEBPACK_IMPORTED_MODULE_6__["default"] })));\n    };\n    return ModalPage;\n}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));\n/* harmony default export */ __webpack_exports__["default"] = (ModalPage);\n\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/index.tsx?')},"./node_modules/raw-loader/index.js!./docs/pages/components/Modal/demo/modalCustom.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./docs/pages/components/Modal/demo/modalCustom.tsx ***!
  \************************************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = \"import * as React from 'react';\\nimport { Modal, Button } from '@yoshino/components/';\\n\\nexport default function() {\\n  const info = () => {\\n    Modal.info({\\n      title: 'info',\\n      content: 'infoinfoinfoinfoinfoinfoinfoinfoinfoinfo',\\n      width: 400,\\n    });\\n  };\\n\\n  const success = () => {\\n    Modal.success({\\n      title: 'success',\\n      content: 'successsuccesssuccesssuccesssuccesssuccess',\\n      width: 400,\\n    });\\n  };\\n\\n  const error = () => {\\n    Modal.error({\\n      title: 'error',\\n      content: 'errorerrorerrorerrorerrorerrorerrorerrorerror',\\n      width: 400,\\n    });\\n  };\\n\\n  const warning = () => {\\n    Modal.warning({\\n      title: 'warning',\\n      content: 'warningwarningwarningwarningwarningwarning',\\n      width: 400,\\n    });\\n  };\\n  return (\\n    <div>\\n      <Button onClick={info}>info</Button>\\n      <Button onClick={success}>success</Button>\\n      <Button onClick={error}>error</Button>\\n      <Button onClick={warning}>warning</Button>\\n    </div>\\n  );\\n}\\n\"\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/demo/modalCustom.tsx?./node_modules/raw-loader")},"./node_modules/raw-loader/index.js!./docs/pages/components/Modal/demo/modalDemo.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./docs/pages/components/Modal/demo/modalDemo.tsx ***!
  \**********************************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = \"import * as React from 'react';\\nimport { Modal, Icon, Button } from '@yoshino/components/';\\n\\nexport default function() {\\n  const confirm = () => {\\n    Modal.confirm({\\n      icon: <Icon type='md-checkmark'/>,\\n      title: '这是一个标题！！！',\\n      content: '这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！',\\n      width: 400,\\n      showClose: true,\\n    });\\n  };\\n\\n  const autoClose = () => {\\n    const ref = Modal.confirm({\\n      title: '这是一个标题！！！',\\n      content: '这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！',\\n      width: 400,\\n      showCancel: false,\\n    });\\n    setTimeout(() => {\\n      Modal.close(ref);\\n    }, 2000);\\n  };\\n\\n  return (\\n    <div>\\n      <Button onClick={confirm}>confirm</Button>\\n      <Button onClick={autoClose}>打开一个2秒后自动关闭的对话框</Button>\\n    </div>\\n  );\\n}\\n\"\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/demo/modalDemo.tsx?./node_modules/raw-loader")},"./node_modules/raw-loader/index.js!./docs/pages/components/Modal/demo/modalInner.tsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./docs/pages/components/Modal/demo/modalInner.tsx ***!
  \***********************************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = \"import * as React from 'react';\\nimport { Modal, Button } from '@yoshino/components/';\\n\\nexport default class App extends React.Component {\\n  state = {\\n    count: 1,\\n    visible: false,\\n  };\\n\\n  onClick = () => {\\n    this.setState({\\n      count: this.state.count + 1,\\n      visible: true,\\n    });\\n  }\\n\\n  render() {\\n    return (\\n      <div>\\n        <Button onClick={this.onClick}>点一次count++</Button>\\n        <Modal\\n          visible={this.state.visible}\\n          bodyContent={this.state.count}\\n          onClose={() => this.setState({visible: false})}\\n          okButtonProps={{loading: true}}\\n        />\\n      </div>\\n    );\\n  }\\n}\\n\"\n\n//# sourceURL=webpack:///./docs/pages/components/Modal/demo/modalInner.tsx?./node_modules/raw-loader")}}]);