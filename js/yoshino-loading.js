(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{187:function(e,t){e.exports="import * as React from 'react';\nimport { Loading, Switch, Alert } from '@yoshino/components/';\n\nexport default class App extends React.Component {\n  state = {\n    value: false,\n  };\n\n  render() {\n     return (\n      <div>\n        <Loading text='自定义加载文本' size='small' loading={this.state.value}>\n          <Alert type='info' showIcon title='消息提示文案'/>\n        </Loading>\n        <div>\n          <Switch checked={this.state.value} onChange={(v) => this.setState({value: v})} />\n        </div>\n      </div>\n    );\n  }\n}\n"},188:function(e,t){e.exports="#### 包裹需要加载的页面"},189:function(e,t){e.exports="import * as React from 'react';\nimport { Loading } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <Loading text='自定义加载文本' size='large' type='a'/>\n      <Loading text='自定义加载文本' size='large' type='b'/>\n      <Loading text='自定义加载文本' size='large' type='c'/>\n      <Loading text='自定义加载文本' size='large' type='d'/>\n    </div>\n  );\n}\n"},190:function(e,t){e.exports="#### 其余加载样式。\n\n"},191:function(e,t){e.exports="import * as React from 'react';\nimport { Loading } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <div>\n      <Loading size='small'/>\n      <Loading text/>\n      <Loading text='自定义加载文本' size='large'/>\n    </div>\n  );\n}\n"},192:function(e,t){e.exports="#### 基本使用\n简单的基本使用。\n"},193:function(e,t){e.exports="## Loading 加载\n表示当前处于加载状态中。\n\n## 代码演示\n"},544:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=n(193),l=n(88),i=n(90),s=n(89),c=[{title:"API",json:[{props:"type",intro:"加载图标的样式",type:"'a' | 'b' | 'c' | 'd'",defaultValue:"a"},{props:"size",intro:"加载图标大小",type:"'small' | 'default' | 'large'",defaultValue:"default"},{props:"text",intro:"加载文本",type:"string | boolean",defaultValue:"-"},{props:"icon",intro:"自定义icon",type:"ReactNode",defaultValue:"-"},{props:"loading",intro:"加载状态",type:"boolean",defaultValue:"true"}]}],u=n(7),p=function(){return r.createElement("div",null,r.createElement(u.r,{size:"small"}),r.createElement(u.r,{text:!0}),r.createElement(u.r,{text:"自定义加载文本",size:"large"}))},d=n(192),m=function(){return r.createElement("div",null,r.createElement(u.r,{text:"自定义加载文本",size:"large",type:"a"}),r.createElement(u.r,{text:"自定义加载文本",size:"large",type:"b"}),r.createElement(u.r,{text:"自定义加载文本",size:"large",type:"c"}),r.createElement(u.r,{text:"自定义加载文本",size:"large",type:"d"}))},f=n(190),x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={value:!1},t}return a.__extends(t,e),t.prototype.render=function(){var e=this;return r.createElement("div",null,r.createElement(u.r,{text:"自定义加载文本",size:"small",loading:this.state.value},r.createElement(u.a,{type:"info",showIcon:!0,title:"消息提示文案"})),r.createElement("div",null,r.createElement(u.E,{checked:this.state.value,onChange:function(t){return e.setState({value:t})}})))},t}(r.Component),g=n(188),v=n(191),E=n(189),y=n(187),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){return r.createElement("div",null,r.createElement(l.a,{text:o}),r.createElement(i.a,{text:d,demo:r.createElement(p,null),code:v}),r.createElement(i.a,{text:f,demo:r.createElement(m,null),code:E}),r.createElement(i.a,{text:g,demo:r.createElement(x,null),code:y}),r.createElement(s.a,{api:c}))},t}(r.Component);t.default=h}}]);