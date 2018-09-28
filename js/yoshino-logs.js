(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{338:function(n,e,t){var o=t(98);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0},a=t(14)(o,i);o.locals&&(n.exports=o.locals),o.locals||n.hot.accept(98,function(e){var o;"string"==typeof(o=t(98))&&(o=[[n.i,o,""]]),a(o)}),n.hot.dispose(function(){a()});var l=t(13)(n.i,{fileMap:"{fileName}"});n.hot.dispose(l)},339:function(n,e){n.exports="## `2018-05-04` - [0.1.0]\n功能添加\n  - 🌟添加组件 Icon 图标\n  - 🌟添加组件 Breadcrumb 面包屑导航\n  - 🌟添加组件 Button 按钮\n  - 🌟添加组件 Card 卡片\n  - 🌟添加组件 Backtop 回到顶部\n  - 🌟添加组件 Alert 提示框\n  - 🌟添加组件 Timeline 时间轴\n  - 🌟添加组件 Switch 开关\n  - 🌟添加组件 Loading 加载\n  - 🌟添加组件 Divider 分割线\n  - 🌟添加组件 Rate 评分\n  - 🌟添加组件 Progress 进度条\n  - 🌟添加组件 Avatar 头像\n  - 🌟添加组件 Badge 徽标\n  - 🌟添加组件 Tag 标签\n  - 🌟添加组件 Input 输入框\n  - 🌟添加组件 InputNumber 数字输入框\n  - 🌟添加组件 Dropdown下拉菜单\n  - 🌟添加组件 Pagination分页\n  - 🌟添加组件 Steps步骤条\n  - 🌟添加组件 AutoComplete自动完成\n  - 🌟添加组件 Radio单选框\n  - 🌟添加组件 Collapse折叠面板\n  - 🌟添加组件 Tooltip文字提示\n  - 🌟添加组件 Checkbox 多选框\n  - 🌟添加组件 Slider 滑动条\n  - 🌟添加组件 Menu 菜单\n\n## `2018-05-05` - [0.1.1]\n功能添加\n  - 🌟 支持使用`babel-plugin-import`进行按需加载\n\n\nBug修复\n  - 🐞 采用泛型定义Input类型，解决any带来的类型丢失问题\n  - 🐞 修复`Pop`中部分浏览器`ClientRect`无法设置的BUG\n  - 🐞 修复`Slider`中部分浏览器滑动拖动异常问题 - DOMRect.x 与 DOMRect.left\n  - 🐞 解决暴露components引来的tsconfig问题\n  - 🐞 修复input同时赋值defaultValue和value的问题\n  - 🐞 修复一些组件的`warning`提示\n  \n## `2018-05-23` - [0.1.2]\nBug修复\n  - 🐞 修复lib、es丢失的问题\n\n## `2018-05-23` - [0.1.3]\nBug修复\n  - 🐞 修复`BackTop`命名不规范问题\n  \n## `2018-07-01` - [0.1.4]\n功能添加\n  - 🌟 完成新组件`Notification`\n  - 🌟 `menu`组件添加`offset`控制子项偏移量\n\nBug修复\n  - 🐞 修复`Alert`有`description`没有`icon`时样式异常的问题\n  - 🐞 修复`autocomplete`上下选择内容选取失效以及回车选中一项后不再触发list的bug\n  - 🐞 修复`collapse`点击`pannel`内容会引起关闭的问题\n\n优化\n  - 🤔 修改`alert`动画\n  - 🤔 `notification`添加返回`key`用于`close`\n\n## `2018-07-05 - 2018-09-04` - [0.1.5 - 0.1.43]\n功能添加\n  - 🌟 添加`transitions`的子模块`Expand、Slide、Scale`\n  - 🌟 添加`helpers`的子模块`ClickOutside`\n  - 🌟 添加`modal`组件\n  - 🌟 添加`drawer`组件\n  - 🌟 添加`table`组件\n  - 🌟 支持按需加载\n  - 🌟 添加`select`组件\n  - 🌟 添加`message`组件\n  - 🌟 添加`carousel`组件\n  - 🌟 添加`tabs`组件\n\nBug修复\n  - 🐞 修复`notification`自动关闭无动画的bug\n  - 🐞 修复`pop`渲染`position`问题\n  - 🐞 修复`modal`设置定时关闭后提前手动关闭报错的`bug`\n  - 🐞 修复`package.json`中`typings`配置错误问题\n  - 🐞 修复`modal`无`icon`时`container`宽度异常的问题\n  - 🐞 修复`noification`某些情况下点击失效的bug\n  - 🐞 修复`notification`动画异常问题\n  - 🐞 修复`select`禁用时icon动画异常的问题\n  - 🐞 修复`ripple`中心位置异常问题\n\n优化\n  - 🤔 `modal`添加`showCancel`属性\n  - 🤔 `modal`添加关闭按钮\n  - 🤔 `modal`添加蒙层\n  - 🤔 `modal`增加内嵌功能\n\n## `2018-09-13` - [0.1.44 - <font color='red'>Break Change!💀</font>] \n> 请参照`快速开始`里面重新配置按需加载引用方式!\n\nBug修复\n  - 🐞 重构组件载入方式，修复依赖组件引用时css重复加载问题\n\n## `2018-09-18` - [0.2.3 - <font color='red'>Break Change!💀</font>]\n优化\n  - 💎 改造`icon`，实现按需加载，仅引入使用的图标的svg😇，在此之前的版本均是引入整个字体库文件。\n\n## `2018-09-19 - 2018-09-28` - [0.2.4 - 0.2.6]\n项目流程\n  - 💎 集成`travis build`测试🚧\n\n功能添加\n  - 🌟 添加`Grid`组件\n\nBug修复\n  - 🐞 修复`loading`组件`3px`bug\n\n优化\n  - 🤔 `Slider`添加`step`属性\n  - 🤔 `Transition`添加`wekit`前缀\n"},340:function(n,e){n.exports="### 更新日志\n仅记录一些重要的版本日志"},564:function(n,e,t){"use strict";t.r(e);var o=t(1),i=t(0),a=t(340),l=t.n(a),r=t(339),s=t.n(r),c=t(88),p=t(7),u=(t(338),function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.dealLogsString=function(n){var e=n.split("##");return e.shift(),e.map(function(n){return{version:n.match(/- \[(.*?)\]/)[1],content:n.replace(/- \[.*?\]/,"\r\n")}}).reverse()},e}return o.__extends(e,n),e.prototype.render=function(){return i.createElement("div",{className:"logs-box"},i.createElement(c.a,{text:l.a}),i.createElement("div",{style:{marginTop:40}},i.createElement(p.J,null,this.dealLogsString(s.a).map(function(n,e){return i.createElement(p.J.Item,{time:i.createElement("h2",{dangerouslySetInnerHTML:{__html:n.version}}),key:e},i.createElement(c.a,{text:n.content}))}))))},e}(i.Component));e.default=u},98:function(n,e,t){(n.exports=t(15)(!1)).push([n.i,".logs-box ul {\n  list-style: circle inside;\n  padding-left: 0;\n}\n.logs-box ul li {\n  padding-left: 10px;\n}\n",""])}}]);