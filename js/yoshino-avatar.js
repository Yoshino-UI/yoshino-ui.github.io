(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{186:function(e,t){e.exports='import * as React from \'react\';\nimport { Avatar } from \'../../../../components/\';\n\nexport default function () {\n  return (\n    <div>\n      <div style={{display: \'flex\', alignItems: \'center\'}}>\n        <Avatar size="large" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>\n        <Avatar src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>\n        <Avatar size="small" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>\n      </div>\n      <div style={{display: \'flex\', alignItems: \'center\'}}>\n        <Avatar shape="square" size="large" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>\n        <Avatar shape="square" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>\n        <Avatar shape="square" size="small" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>\n      </div>\n    </div>\n  )\n}\n'},187:function(e,t){e.exports="#### 自定义\n可以通过`src`自定义图片资源。"},188:function(e,t){e.exports="import * as React from 'react';\nimport { Avatar, Icon } from '../../../../components/';\n\nexport default function () {\n  return (\n    <div>\n      <div style={{display: 'flex', alignItems: 'center'}}>\n        <Avatar size=\"large\"/>\n        <Avatar/>\n        <Avatar size=\"small\"/>\n      </div>\n      <div style={{display: 'flex', alignItems: 'center'}}>\n        <Avatar size=\"large\" icon={<Icon type='social-reddit'/>} shape=\"square\" style={{backgroundColor: '#f06292', color: '#ffebee'}}/>\n        <Avatar shape=\"square\" icon={<Icon type='social-reddit'/>}/>\n        <Avatar size=\"small\" shape=\"square\" icon={<Icon type='social-reddit'/>}/>\n      </div>\n    </div>\n  )\n}\n"},189:function(e,t){e.exports="#### 基本使用\n简单的基本使用。"},190:function(e,t){e.exports="## Avatar 头像\n用于表示用户头像信息。\n\n## 代码演示\n"},460:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(190),c=n(57),r=n(59),l=n(58),i=[{title:"API",json:[{props:"size",intro:"头像尺寸",type:"'small' | 'default' | 'large'",defaultValue:"default"},{props:"shape",intro:"形状",type:"'circle' | 'square'",defaultValue:"circle"},{props:"icon",intro:"头像内容，也可以是文字",type:"ReactNode",defaultValue:"person"},{props:"src",intro:"图片资源",type:"string",defaultValue:"-"}]}],p=n(8),o=function(){return s.createElement("div",null,s.createElement("div",{style:{display:"flex",alignItems:"center"}},s.createElement(p.c,{size:"large"}),s.createElement(p.c,null),s.createElement(p.c,{size:"small"})),s.createElement("div",{style:{display:"flex",alignItems:"center"}},s.createElement(p.c,{size:"large",icon:s.createElement(p.n,{type:"social-reddit"}),shape:"square",style:{backgroundColor:"#f06292",color:"#ffebee"}}),s.createElement(p.c,{shape:"square",icon:s.createElement(p.n,{type:"social-reddit"})}),s.createElement(p.c,{size:"small",shape:"square",icon:s.createElement(p.n,{type:"social-reddit"})})))},m=n(189),d=function(){return s.createElement("div",null,s.createElement("div",{style:{display:"flex",alignItems:"center"}},s.createElement(p.c,{size:"large",src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"}),s.createElement(p.c,{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"}),s.createElement(p.c,{size:"small",src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"})),s.createElement("div",{style:{display:"flex",alignItems:"center"}},s.createElement(p.c,{shape:"square",size:"large",src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"}),s.createElement(p.c,{shape:"square",src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"}),s.createElement(p.c,{shape:"square",size:"small",src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"})))},u=n(187);n.d(t,"default",function(){return v});const h=n(188),f=n(186);class v extends s.Component{render(){return s.createElement("div",null,s.createElement(c.a,{text:a}),s.createElement(r.a,{text:m,demo:s.createElement(o,null),code:h}),s.createElement(r.a,{text:u,demo:s.createElement(d,null),code:f}),s.createElement(l.a,{api:i}))}}}}]);