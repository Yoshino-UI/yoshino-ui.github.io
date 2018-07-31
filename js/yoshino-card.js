(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{174:function(e,t){e.exports="import * as React from 'react';\nimport { Card } from '../../../../components/';\n\nexport default function () {\n  return (\n    <div style={{background: '#ccc', height: '200', padding: '20px'}}>\n      <Card title=\"标题\" style={{width: '200px'}} border={false}>\n        <div>11111</div>\n      </Card>\n    </div>\n  )\n}\n"},175:function(e,t){e.exports="#### 无边框\n在非白色北京下可设置`border`抹去边框。\n"},176:function(e,t){e.exports="import * as React from 'react';\nimport { Card, Icon } from '../../../../components/';\n\nexport default function () {\n  return (\n    <Card style={{width:300, margin: 10}} \n      title=\"标题\"\n      extra={(\n      <div><span>更多</span><Icon type=\"more\"/></div>\n      )}\n      border\n      shadow\n    >\n      <div>2342342343</div>\n    </Card>\n  )\n}\n"},177:function(e,t){e.exports="#### 带阴影的卡片\n设置`shadow`可以使卡片更具有立体感。\n"},178:function(e,t){e.exports="import * as React from 'react';\nimport { Card } from '../../../../components/';\n\nexport default function () {\n  return (\n    <Card title=\"标题\">\n      <div>11111</div>\n    </Card>\n  )\n}\n"},179:function(e,t){e.exports="#### 基本使用\n简单的基本使用。\n"},180:function(e,t){e.exports="## Card 卡片\n用于集中展示一些块状信息。\n\n## 代码演示\n"},474:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(180),a=n(57),l=n(59),d=n(58),i=[{title:"API",json:[{props:"title",intro:"标题",type:"string",defaultValue:""},{props:"extra",intro:"更多",type:"ReactNode",defaultValue:""},{props:"border",intro:"边框",type:"boolean",defaultValue:"true"},{props:"boxshadow",intro:"阴影",type:"boolean",defaultValue:"false"}]}],c=n(8),p=function(){return r.createElement(c.h,{title:"标题"},r.createElement("div",null,"11111"))},u=n(179),s=function(){return r.createElement(c.h,{style:{width:300,margin:10},title:"标题",extra:r.createElement("div",null,r.createElement("span",null,"更多"),r.createElement(c.n,{type:"more"})),border:!0,shadow:!0},r.createElement("div",null,"2342342343"))},m=n(177),f=function(){return r.createElement("div",{style:{background:"#ccc",height:"200",padding:"20px"}},r.createElement(c.h,{title:"标题",style:{width:"200px"},border:!1},r.createElement("div",null,"11111")))},x=n(175);n.d(t,"default",function(){return w});const E=n(178),v=n(176),h=n(174);class w extends r.Component{render(){return r.createElement("div",null,r.createElement(a.a,{text:o}),r.createElement(l.a,{text:u,demo:r.createElement(p,null),code:E}),r.createElement(l.a,{text:x,demo:r.createElement(f,null),code:h}),r.createElement(l.a,{text:m,demo:r.createElement(s,null),code:v}),r.createElement(d.a,{api:i}))}}}}]);