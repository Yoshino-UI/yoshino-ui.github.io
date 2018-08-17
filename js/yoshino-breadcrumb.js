(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{203:function(e,t){e.exports="import * as React from 'react';\nimport { Breadcrumb, Icon } from '../../../../components/';\n\nexport default function() {\n  return (\n    <Breadcrumb separator='>'>\n      <Breadcrumb.Item><Icon type='home'/>首页</Breadcrumb.Item>\n      <Breadcrumb.Item><Icon type='ionic'/>中心</Breadcrumb.Item>\n      <Breadcrumb.Item><Icon type='edit'/>编辑</Breadcrumb.Item>\n    </Breadcrumb>\n  );\n}\n"},204:function(e,t){e.exports="#### 自定分隔符\n设置`separator`来自定义分隔符\n"},205:function(e,t){e.exports="import * as React from 'react';\nimport { Breadcrumb } from '../../../../components/';\n\nexport default function() {\n  return (\n    <Breadcrumb>\n      <Breadcrumb.Item>中国</Breadcrumb.Item>\n      <Breadcrumb.Item>四川</Breadcrumb.Item>\n      <Breadcrumb.Item>成都</Breadcrumb.Item>\n      <Breadcrumb.Item>天府三街</Breadcrumb.Item>\n    </Breadcrumb>\n  );\n}\n"},206:function(e,t){e.exports="#### 基本使用\n简单的基本使用。\n"},207:function(e,t){e.exports="## Breadcrumb 面包屑导航\n`Breadcrumb`组件显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。\n\n## 代码演示\n"},512:function(e,t,n){"use strict";n.r(t);var r=n(1),m=n(0),c=n(207),a=n(86),o=n(88),u=n(87),l=[{title:"Breadcrumb",json:[{props:"separator",intro:"分隔符",type:"string | ReactNode",defaultValue:"`/`"}]}],d=n(8),p=function(){return m.createElement(d.f,null,m.createElement(d.f.Item,null,"中国"),m.createElement(d.f.Item,null,"四川"),m.createElement(d.f.Item,null,"成都"),m.createElement(d.f.Item,null,"天府三街"))},i=n(206),f=function(){return m.createElement(d.f,{separator:">"},m.createElement(d.f.Item,null,m.createElement(d.o,{type:"home"}),"首页"),m.createElement(d.f.Item,null,m.createElement(d.o,{type:"ionic"}),"中心"),m.createElement(d.f.Item,null,m.createElement(d.o,{type:"edit"}),"编辑"))},b=n(204),I=n(205),s=n(203),B=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){return m.createElement("div",null,m.createElement(a.a,{text:c}),m.createElement(o.a,{text:i,demo:m.createElement(p,null),code:I}),m.createElement(o.a,{text:b,demo:m.createElement(f,null),code:s}),m.createElement(u.a,{api:l}))},t}(m.Component);t.default=B}}]);