(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{266:function(e,n){e.exports="import * as React from 'react';\nimport { Rate, Icon} from '../../../../components/';\n\nexport default function() {\n  return (\n    <div>\n      <Rate value={2} character='牛' clear onChange={(v) => console.log(`当前得分：${v}`)}/>\n      <Rate\n        value={2}\n        character={<Icon type='social-github' style={{fontSize: '20px'}}/>}\n        clear\n        half\n        onChange={(v) => console.log(`当前得分：${v}`)}\n      />\n    </div>\n  );\n}\n"},267:function(e,n){e.exports="#### 允许半值以及自定义字符\n设置`half`可以支持选中半星\n\n设置`character`可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。\n\n设置`clear`支持清除。"},268:function(e,n){e.exports="import * as React from 'react';\nimport { Rate } from '../../../../components/';\n\nexport default function() {\n  return (\n    <div>\n      <Rate value={2}/>\n    </div>\n  );\n}\n"},269:function(e,n){e.exports="#### 基本使用\n基本使用"},270:function(e,n){e.exports="## Rate 评分\n对目标进行评分操作。\n\n## 代码演示\n"},523:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t(0),r=t(270),l=t(86),c=t(88),u=t(87),i=[{title:"API",json:[{props:"count",intro:"字符个数",type:"number",defaultValue:"5"},{props:"value",intro:"初始值",type:"number",defaultValue:"0"},{props:"half",intro:"是否允许半值",type:"boolean",defaultValue:"false"},{props:"clear",intro:"是否允许清除",type:"boolean",defaultValue:"false"},{props:"onChange",intro:"变化回调",type:"(value: number) => void;",defaultValue:"-"},{props:"character",intro:"自定义字符",type:"string | ReactNode",defaultValue:"-"}]}],p=t(8),f=function(){return o.createElement("div",null,o.createElement(p.z,{value:2}))},s=t(269),m=function(){return o.createElement("div",null,o.createElement(p.z,{value:2,character:"牛",clear:!0,onChange:function(e){return console.log("当前得分："+e)}}),o.createElement(p.z,{value:2,character:o.createElement(p.o,{type:"social-github",style:{fontSize:"20px"}}),clear:!0,half:!0,onChange:function(e){return console.log("当前得分："+e)}}))},d=t(267),v=t(268),h=t(266),x=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(n,e),n.prototype.render=function(){return o.createElement("div",null,o.createElement(l.a,{text:r}),o.createElement(c.a,{text:s,demo:o.createElement(f,null),code:v}),o.createElement(c.a,{text:d,demo:o.createElement(m,null),code:h}),o.createElement(u.a,{api:i}))},n}(o.Component);n.default=x}}]);