(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{178:function(t,e){t.exports="import * as React from 'react';\nimport { BackTop } from '@yoshino/components/';\nconst img = require('./fire.png');\n\nexport default function() {\n  return (\n    <BackTop bottom={50} right={100} height={1} onBackTop={() => alert('到顶了！')}>\n      <img style={{width: 100, height: 100}} src={img}/>\n    </BackTop>\n  );\n}\n"},179:function(t,e){t.exports="#### 自定义\n可以自定义`backtop`的触发条件以及图标。\n"},180:function(t,e,n){t.exports=n.p+"b8671db01a25605cac6a98abbe9e678a.png"},181:function(t,e){t.exports="import * as React from 'react';\nimport { BackTop } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <BackTop/>\n    </div>\n  );\n}\n"},182:function(t,e){t.exports="#### 基本使用\n简单的基本使用。"},183:function(t,e){t.exports="## BackTop 返回顶部\n返回页面顶部的操作按钮。\n\n## 代码演示\n"},525:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(0),a=n(183),i=n(88),p=n(90),c=n(89),u=[{title:"API",json:[{props:"bottom",intro:"距离底部距离",type:"number",defaultValue:"800"},{props:"right",intro:"距离右侧距离",type:"number",defaultValue:"50"},{props:"height",intro:"触发backtop的高度",type:"number",defaultValue:"800"},{props:"duration",intro:"动画时间",type:"number",defaultValue:"500"},{props:"onBackTop",intro:"回调函数",type:"() => void",defaultValue:"-"}]}],l=n(7),m=function(){return r.createElement("div",null,r.createElement(l.d,null))},s=n(182),f=n(180),d=function(){return r.createElement(l.d,{bottom:50,right:100,height:1,onBackTop:function(){return alert("到顶了！")}},r.createElement("img",{style:{width:100,height:100},src:f}))},h=n(179),b=n(181),g=n(178),k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.prototype.render=function(){return r.createElement("div",null,r.createElement(i.a,{text:a}),r.createElement(p.a,{text:s,demo:r.createElement(m,null),code:b}),r.createElement(p.a,{text:h,demo:r.createElement(d,null),code:g}),r.createElement(c.a,{api:u}))},e}(r.Component);e.default=k}}]);