(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{249:function(e,t){e.exports="import * as React from 'react';\nimport { Badge, Avatar, Icon } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <Badge count={10}><Avatar size='large'/></Badge>\n      <Badge count={0} dotted><Icon type='ios-cart-outline' style={{color: 'red', fontSize: 30}}/></Badge>\n    </div>\n  );\n}\n"},250:function(e,t){e.exports="#### 搭配使用\n可搭配`Avatar`合`Icon`使用。\n"},251:function(e,t){e.exports="import * as React from 'react';\nimport { Badge } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <Badge  count={77} style={{backgroundColor: '#448aff'}}/>\n      <Badge  count={1000} style={{backgroundColor: '#c5e1a5'}}/>\n    </div>\n  );\n}\n"},252:function(e,t){e.exports="#### 基本使用\n简单的基本使用。 \n"},253:function(e,t){e.exports="## Badge 徽标\n一般用于消息提醒。\n\n## 代码演示\n"},533:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),a=n(253),c=n(88),l=n(90),u=n(89),i=[{title:"API",json:[{props:"count",intro:"展示的数字",type:"number",defaultValue:"-"},{props:"max",intro:"展示数字最大值",type:"number",defaultValue:"99"},{props:"showZero",intro:"count为0的时候是否显示徽标",type:"boolean",defaultValue:"false"},{props:"dotted",intro:"小点，设置后count无效",type:"boolean",defaultValue:"false"}]}],d=n(7),p=function(){return r.createElement("div",null,r.createElement(d.e,{count:77,style:{backgroundColor:"#448aff"}}),r.createElement(d.e,{count:1e3,style:{backgroundColor:"#c5e1a5"}}))},s=n(252),f=function(){return r.createElement("div",null,r.createElement(d.e,{count:10},r.createElement(d.c,{size:"large"})),r.createElement(d.e,{count:0,dotted:!0},r.createElement(d.o,{type:"ios-cart-outline",style:{color:"red",fontSize:30}})))},m=n(250),y=n(251),g=n(249),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.render=function(){return r.createElement("div",null,r.createElement(c.a,{text:a}),r.createElement(l.a,{text:s,demo:r.createElement(p,null),code:y}),r.createElement(l.a,{text:m,demo:r.createElement(f,null),code:g}),r.createElement(u.a,{api:i}))},t}(r.Component);t.default=E}}]);