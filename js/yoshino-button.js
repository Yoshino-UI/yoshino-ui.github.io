(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{238:function(e,t){e.exports='import * as React from \'react\';\nimport { Button } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div>\n      <Button disabled type="primary">Primary</Button>\n      <Button size="large">Default</Button>\n      <Button disabled type="dashed">Dashed</Button>\n      <Button size="small" type="danger">Danger</Button>\n    </div>\n  )\n}'},239:function(e,t){e.exports="#### 不可用状态\n添加`disabled`属性可让按钮处于不可用状态，此时事件属性无效。"},240:function(e,t){e.exports='import * as React from \'react\';\nimport { Button } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div style={{padding: 10, backgroundColor: \'#bec8c8\'}}>\n      <Button ghost type="primary">Primary</Button>\n      <Button ghost size="large">Default</Button>\n      <Button ghost type="dashed">Dashed</Button>\n      <Button ghost size="small" type="danger">Danger</Button>\n    </div>\n  )\n}'},241:function(e,t){e.exports="#### 幽灵模式\n幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。"},242:function(e,t){e.exports="import * as React from 'react';\nimport { Button } from '../../../../components/';\n\nexport default class ButtonLoading extends React.Component {\n  state = {\n    loading: false,\n  }\n\n  render () {\n    return (\n      <Button\n        type=\"primary\"\n        icon=\"play\"\n        loading={this.state.loading}\n        onClick={() => {\n          this.setState({loading: true});\n          setTimeout(() => {\n            this.setState({loading: false});\n          }, 2000);\n        }}\n      >\n        点我进入加载\n      </Button>\n    );\n  }\n}"},243:function(e,t){e.exports="#### 加载中的按钮\n添加 `loading` 属性即可让按钮处于加载状态。"},244:function(e,t){e.exports='import * as React from \'react\';\nimport { Button } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div>\n      <div>\n        <Button type="primary" icon="play">播放</Button>\n        <Button type="primary" icon="pause">暂停</Button>\n        <Button type="primary" icon="skip-backward">上一首</Button>\n        <Button type="primary" icon="skip-forward" tail>下一首</Button>\n      </div>\n      <div style={{marginTop: 20}}>\n        <Button type="primary" shape="circle" icon="arrow-up-a"/>\n        <Button shape="circle" icon="arrow-up-a"/>\n        <Button type="dashed" shape="circle" icon="arrow-up-a"/>\n        <Button type="danger" shape="circle" icon="arrow-up-a"/>\n      </div>\n    </div>\n  )\n}'},245:function(e,t){e.exports="#### 按钮的图标及形状\n通过设置`icon`属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。`icon`可以是一个`Element`，也可以是对应的`Icon`组件的`type`值。\n\n可以通过`tail`控制图标在组件中的位置\n\n可以通过`shape设置按钮的形状`。\n"},246:function(e,t){e.exports='import * as React from \'react\';\nimport { Button } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div>\n      <Button type="primary">Primary</Button>\n      <Button>Default</Button>\n      <Button type="dashed">Dashed</Button>\n      <Button type="danger">Danger</Button>\n    </div>\n  )\n}'},247:function(e,t){e.exports="#### 按钮类型\n按钮类型有：主要按钮、默认按钮、虚线按钮、危险按钮。\n\n通过设置type为`primary`、`default`、`dashed`、`danger`创建不同的按钮，不设置为默认为`default`。"},252:function(e,t){e.exports="## Button 按钮\n通用组件，用于点击操作，一般在触发业务逻辑时使用。\n\n\n## 代码演示\n"},478:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(252),o=n(57),i=n(59),l=n(58),p=[{title:"API",json:[{props:"disabled",intro:"是否禁用",type:"boolean",defaultValue:"false"},{props:"type",intro:"按钮类型",type:"primary, dashed, danger, default",defaultValue:"default"},{props:"shape",intro:"形状",type:"circle",defaultValue:"-"},{props:"size",intro:"按钮大小",type:"small, large, default",defaultValue:"default"},{props:"ghost",intro:"幽灵模式",type:"boolean",defaultValue:"false"},{props:"icon",intro:"string, ReactNode",type:"string, ReactNode",defaultValue:"-"},{props:"tail",intro:"图标所在位置为尾部",type:"boolean",defaultValue:"false"},{props:"loading",intro:"加载状态",type:"boolean",defaultValue:"false"}]}],c=n(8),u=function(){return a.createElement("div",null,a.createElement(c.g,{type:"primary"},"Primary"),a.createElement(c.g,null,"Default"),a.createElement(c.g,{type:"dashed"},"Dashed"),a.createElement(c.g,{type:"danger"},"Danger"))},s=n(247),d=function(){return a.createElement("div",null,a.createElement("div",null,a.createElement(c.g,{type:"primary",icon:"play"},"播放"),a.createElement(c.g,{type:"primary",icon:"pause"},"暂停"),a.createElement(c.g,{type:"primary",icon:"skip-backward"},"上一首"),a.createElement(c.g,{type:"primary",icon:"skip-forward",tail:!0},"下一首")),a.createElement("div",{style:{marginTop:20}},a.createElement(c.g,{type:"primary",shape:"circle",icon:"arrow-up-a"}),a.createElement(c.g,{shape:"circle",icon:"arrow-up-a"}),a.createElement(c.g,{type:"dashed",shape:"circle",icon:"arrow-up-a"}),a.createElement(c.g,{type:"danger",shape:"circle",icon:"arrow-up-a"})))},m=n(245);class y extends a.Component{constructor(){super(...arguments),this.state={loading:!1}}render(){return a.createElement(c.g,{type:"primary",icon:"play",loading:this.state.loading,onClick:()=>{this.setState({loading:!0}),setTimeout(()=>{this.setState({loading:!1})},2e3)}},"点我进入加载")}}var g=n(243),f=function(){return a.createElement("div",{style:{padding:10,backgroundColor:"#bec8c8"}},a.createElement(c.g,{ghost:!0,type:"primary"},"Primary"),a.createElement(c.g,{ghost:!0,size:"large"},"Default"),a.createElement(c.g,{ghost:!0,type:"dashed"},"Dashed"),a.createElement(c.g,{ghost:!0,size:"small",type:"danger"},"Danger"))},B=n(241),h=function(){return a.createElement("div",null,a.createElement(c.g,{disabled:!0,type:"primary"},"Primary"),a.createElement(c.g,{size:"large"},"Default"),a.createElement(c.g,{disabled:!0,type:"dashed"},"Dashed"),a.createElement(c.g,{size:"small",type:"danger"},"Danger"))},E=n(239);n.d(t,"default",function(){return k});const x=n(246),v=n(244),b=n(242),w=n(240),D=n(238);class k extends a.Component{render(){return a.createElement("div",{className:""},a.createElement(o.a,{text:r}),a.createElement(i.a,{text:s,demo:a.createElement(u,null),code:x}),a.createElement(i.a,{text:m,demo:a.createElement(d,null),code:v}),a.createElement(i.a,{text:g,demo:a.createElement(y,null),code:b}),a.createElement(i.a,{text:B,demo:a.createElement(f,null),code:w}),a.createElement(i.a,{text:E,demo:a.createElement(h,null),code:D}),a.createElement(l.a,{api:p}))}}}}]);