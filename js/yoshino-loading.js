(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{126:function(e,t){e.exports='import * as React from \'react\';\nimport { Loading } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div>\n      <Loading text="自定义加载文本" size="large" type="b"/>\n      <Loading text="自定义加载文本" size="large" type="c"/>\n      <Loading text="自定义加载文本" size="large" type="d"/>\n    </div>\n  )\n}\n'},127:function(e,t){e.exports="#### 其余加载样式。\n另外三种加载样式。\n"},128:function(e,t){e.exports='import * as React from \'react\';\nimport { Loading } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div>\n      <Loading size="small"/>\n      <Loading text/>\n      <Loading text="自定义加载文本" size="large"/>\n    </div>\n  )\n}\n'},129:function(e,t){e.exports="#### 基本使用\n简单的基本使用。\n"},130:function(e,t){e.exports="## Loading 加载\n表示当前处于加载状态中。\n\n## 代码演示\n"},473:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(130),o=n(57),l=n(59),i=n(58),c=[{title:"API",json:[{props:"type",intro:"加载图标的样式",type:"'a' | 'b' | 'c' | 'd';",defaultValue:"a"},{props:"size",intro:"加载图标大小",type:"'small' | 'default' | 'large'",defaultValue:"default"},{props:"text",intro:"加载文本",type:"string | boolean",defaultValue:"-"}]}],s=n(8),d=function(){return a.createElement("div",null,a.createElement(s.q,{size:"small"}),a.createElement(s.q,{text:!0}),a.createElement(s.q,{text:"自定义加载文本",size:"large"}))},p=n(129),u=function(){return a.createElement("div",null,a.createElement(s.q,{text:"自定义加载文本",size:"large",type:"b"}),a.createElement(s.q,{text:"自定义加载文本",size:"large",type:"c"}),a.createElement(s.q,{text:"自定义加载文本",size:"large",type:"d"}))},m=n(127);n.d(t,"default",function(){return g});const f=n(128),x=n(126);class g extends a.Component{render(){return a.createElement("div",null,a.createElement(o.a,{text:r}),a.createElement(l.a,{text:p,demo:a.createElement(d,null),code:f}),a.createElement(l.a,{text:m,demo:a.createElement(u,null),code:x}),a.createElement(i.a,{api:c}))}}}}]);