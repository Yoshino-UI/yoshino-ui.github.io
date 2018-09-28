(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{283:function(e,n){e.exports="import * as React from 'react';\nimport { Slider } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <Slider value={40} disabled/>\n  );\n}\n"},284:function(e,n){e.exports="#### 禁用状态\n设置`disabled`禁用。\n"},285:function(e,n){e.exports="import * as React from 'react';\nimport { Slider } from '@yoshino/components/';\n\nexport default class App extends React.Component {\n  state = {\n    value: 30,\n  };\n\n  render() {\n    return (\n      <Slider\n          value={this.state.value}\n          min={-100}\n          max={100}\n          step={5}\n          onChange={(value) => {\n          console.log('当前值:', value);\n          this.setState({value});\n        }}\n      />\n    );\n  }\n}\n"},286:function(e,n){e.exports="#### 自定义受控组件\n可使用`max`、`min`设置最大最小值，通过onChange变化回调控制值。"},287:function(e,n){e.exports="import * as React from 'react';\nimport { Slider } from '@yoshino/components/';\n\nexport default function() {\n  return (\n    <Slider/>\n  );\n}\n"},288:function(e,n){e.exports="#### 基本使用\n基本使用。\n"},289:function(e,n){e.exports="## Slider 滑动输入条\n用于拖动选取当前值。\n\n## 代码演示\n"},554:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t(0),a=t(289),l=t(88),u=t(90),i=t(89),p=[{title:"API",json:[{props:"value",intro:"滑块值 - 受控",type:"number",defaultValue:"-"},{props:"defaultValue",intro:"滑块值 - 非受控",type:"number",defaultValue:"0"},{props:"onChange",intro:"变化回调",type:"(value: number) => void",defaultValue:"-"},{props:"max",intro:"最大值",type:"number",defaultValue:"100"},{props:"min",intro:"最小值",type:"number",defaultValue:"0"},{props:"disabled",intro:"禁用状态",type:"boolean",defaultValue:"false"},{props:"step",intro:"步长",type:"number",defaultValue:"1"}]}],s=t(7),c=function(){return r.createElement(s.D,null)},m=t(288),d=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={value:30},n}return o.__extends(n,e),n.prototype.render=function(){var e=this;return r.createElement(s.D,{value:this.state.value,min:-100,max:100,step:5,onChange:function(n){console.log("当前值:",n),e.setState({value:n})}})},n}(r.Component),f=t(286),x=function(){return r.createElement(s.D,{value:40,disabled:!0})},v=t(284),h=t(287),y=t(285),b=t(283),E=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(n,e),n.prototype.render=function(){return r.createElement("div",null,r.createElement(l.a,{text:a}),r.createElement(u.a,{text:m,demo:r.createElement(c,null),code:h}),r.createElement(u.a,{text:v,demo:r.createElement(x,null),code:b}),r.createElement(u.a,{text:f,demo:r.createElement(d,null),code:y}),r.createElement(i.a,{api:p}))},n}(r.Component);n.default=E}}]);