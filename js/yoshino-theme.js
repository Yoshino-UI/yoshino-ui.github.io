(window.webpackJsonp=window.webpackJsonp||[]).push([["yoshino-theme"],{"./docs/pages/components/Theme/index.tsx":
/*!***********************************************!*\
  !*** ./docs/pages/components/Theme/index.tsx ***!
  \***********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.md */ "./docs/pages/components/Theme/theme.md");\n/* harmony import */ var _theme_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _docs_components_Markdown___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @docs/components/Markdown/ */ "./docs/components/Markdown/index.tsx");\n/* harmony import */ var _yoshino_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @yoshino/components/index */ "./components/index.tsx");\n\n\n\n\n\n\nvar Start = /** @class */ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Start, _super);\n    function Start() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Start.prototype.render = function () {\n        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_Markdown___WEBPACK_IMPORTED_MODULE_3__["default"], { text: _theme_md__WEBPACK_IMPORTED_MODULE_2__ }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_yoshino_components_index__WEBPACK_IMPORTED_MODULE_4__["Alert"], { style: { marginTop: 20 }, type: \'info\', showIcon: true, title: \'\\u6CE8\\u610F\\uFF1A\\u4F7F\\u7528yoshino-cli\\u662F\\u4ECEGitHub\\u62C9\\u53D6\\u6700\\u65B0\\u7684\\u6837\\u5F0F\\u53D8\\u91CF\\uFF0C\\u5E76\\u4E0D\\u662F\\u5F53\\u524D\\u7684yoshino\\u7248\\u672C\\uFF0C\\u5F53yoshio\\u5347\\u7EA7\\u540E\\u9700\\u8981\\u66F4\\u65B0\\u672C\\u5730styles\\u3002\' })));\n    };\n    return Start;\n}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));\n/* harmony default export */ __webpack_exports__["default"] = (Start);\n\n\n//# sourceURL=webpack:///./docs/pages/components/Theme/index.tsx?')},"./docs/pages/components/Theme/theme.md":
/*!**********************************************!*\
  !*** ./docs/pages/components/Theme/theme.md ***!
  \**********************************************/
/*! no static exports found */function(module,exports){eval("module.exports = \"### 定制主题\\n`yoshino`默认提供了一套`UI`主题，由于利用`less`编写的`css`，并且将一些通用变量抽离出来，可以实现样式自定义化，包括但不限于主色、圆角、提示色、组件尺寸等配置。如果需要定制主题则需要在引入样式的文件的时候使用`.less`，组件`less`文件位于`yoshino/lib/${componentName}/styles/`，通用位于`yoshino/components/styles`。\\n\\n### 样式变量\\n如果你的项目使用了`webpack`，那么可以通过变量覆盖的方式来实现主题定制化。\\n```less\\n@import '~yoshino/components/styles/index.less';\\n\\n@primary-color: red;\\n```\\n\\n如果你只需要简单的修改主色调，那么你也可以使用`less-loader`。\\n```js\\n{\\n  loader: 'less-loader',\\n  options: {\\n    modifyVars: {\\n      'primary-color': 'red',\\n  },\\n}\\n```\\n\\n#### 按需加载配置路径需变更\\n##### 手动按需引入\\n```jsx\\nimport Button from 'yoshino/lib/Button';\\nimport 'yoshino/lib/Button/style/less.js';\\n```\\n\\n###### 通用的按需加载方案（推荐）\\n在普通`js`项目中和`ts`项目中均可使用，官方推荐的使用方案\\n\\n需要配合[ui-component-loader](https://github.com/gwuhaolin/ui-component-loader.git)使用实现自动按需加载。\\n\\n首先安装`ui-component-loader`\\n```jsx\\nnpm install ui-component-loader --save-dev\\n```\\n\\n在`webpack`中添加`loader`配置如下\\n```jsx\\n{\\n  loader: 'ui-component-loader',\\n  options: {\\n    'lib': 'yoshino',\\n    'libDir': 'lib',\\n    'style': 'style/less.js',\\n  },\\n},\\n```\\n\\n##### 在babel中使用按需加载\\n需要配合[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)使用实现自动按需加载。\\n\\n首先安装`babel-plugin-import`\\n```jsx\\nnpm install babel-plugin-import --save-dev\\n```\\n\\n在`webpack`的`babel-loader`的`options`的`plugins`中添加配置如下\\n```jsx\\noptions: {\\n  plugins: [[\\\"import\\\", {\\n    \\\"libraryName\\\": \\\"yoshino\\\",\\n    \\\"camel2DashComponentName\\\": false,\\n    \\\"style\\\": (name) => `${name}/style/less.js`,\\n  }]],\\n},\\n```\\n\\n### 更灵活的自定义方式 - `yoshino-cli`\\n通过[yoshino-cli](https://github.com/Yoshino-UI/yoshino-cli)根据项目进行定制化开发。\\n\\n[yoshino-theme-project-demo](https://github.com/Yoshino-UI/yoshino-theme-project-demo)\\n\\n#### 预览官方demo\\n- git clone https://github.com/Yoshino-UI/yoshino-theme-project-demo.git\\n- cd yoshino-theme-project-demo\\n- npm install\\n- npm run start\\n\\n#### 定制组件简单步骤\\n- npm install yoshino-cli -g\\n- yoshino init\\n- yoshino new Button  -o src/yoshino-components\\n- you can find your Button in path `src/yoshino-components/Button`\\n\\n\"\n\n//# sourceURL=webpack:///./docs/pages/components/Theme/theme.md?")}}]);