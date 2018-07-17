(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{167:function(e,n){e.exports='import * as React from \'react\';\nimport { Tag } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div>\n      <Tag color="#108ee9" mode="geek">#108ee9</Tag>\n      <Tag color="#87d068" mode="geek">#87d068</Tag>\n      <Tag color="#9e9d24" mode="geek">#9e9d24</Tag>\n      <Tag color="#ffab91" mode="geek">#ffab91</Tag>\n      <Tag color="#b0bec5" mode="geek">#b0bec5</Tag>\n    </div>\n  )\n}\n'},168:function(e,n){e.exports="#### Geek模式\n`geek`模式下根据`color`会生成炫酷的标签。\n"},169:function(e,n){e.exports="import * as React from 'react';\nimport { Tag } from '../../../../components/';\n\nexport default function () {\n  return (\n    <div>\n      <div>\n        <Tag>可乐</Tag>\n        <Tag closeable onClose={() => console.log('关闭了')}>雪碧</Tag>\n      </div>\n      <div>\n        <Tag color=\"#108ee9\" closeable>冰红茶</Tag>\n      </div>\n    </div>\n  )\n}\n"},170:function(e,n){e.exports="#### 基本使用\n简单的基本使用。\n"},171:function(e,n){e.exports="## Tag 标签\n一般用于描述或者分类。\n\n## 代码演示\n"},467:function(e,n,o){"use strict";o.r(n);var t=o(0),l=o(171),r=o(62),a=o(64),c=o(63),d=[{title:"API",json:[{props:"mode",intro:"标签模式",type:"'custom' | 'geek'",defaultValue:"custom"},{props:"color",intro:"颜色",type:"string",defaultValue:"-"},{props:"closeable",intro:"是否可以关闭",type:"boolean",defaultValue:"false"},{props:"onClose",intro:"关闭回调",type:"() => void",defaultValue:"-"}]}],m=o(8),u=function(){return t.createElement("div",null,t.createElement("div",null,t.createElement(m.D,null,"可乐"),t.createElement(m.D,{closeable:!0,onClose:()=>console.log("关闭了")},"雪碧")),t.createElement("div",null,t.createElement(m.D,{color:"#108ee9",closeable:!0},"冰红茶")))},i=o(170),s=function(){return t.createElement("div",null,t.createElement(m.D,{color:"#108ee9",mode:"geek"},"#108ee9"),t.createElement(m.D,{color:"#87d068",mode:"geek"},"#87d068"),t.createElement(m.D,{color:"#9e9d24",mode:"geek"},"#9e9d24"),t.createElement(m.D,{color:"#ffab91",mode:"geek"},"#ffab91"),t.createElement(m.D,{color:"#b0bec5",mode:"geek"},"#b0bec5"))},g=o(168);o.d(n,"default",function(){return b});const p=o(169),f=o(167);class b extends t.Component{render(){return t.createElement("div",null,t.createElement(r.a,{text:l}),t.createElement(a.a,{text:i,demo:t.createElement(u,null),code:p}),t.createElement(a.a,{text:g,demo:t.createElement(s,null),code:f}),t.createElement(c.a,{api:d}))}}}}]);