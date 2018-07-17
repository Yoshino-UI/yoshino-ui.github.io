(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{477:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(97),s=n(62),a=n(64),c=n(63),r=[{title:"API - Expand",intro:"Transitions.Expand",json:[{props:"timeout",intro:"动画时间",type:"number",defaultValue:"-"},{props:"active",intro:"激活状态",type:"boolean",defaultValue:"-"}]},{title:"API - Slide",intro:"Transitions.Slide",json:[{props:"timeout",intro:"动画时间",type:"number",defaultValue:"-"},{props:"active",intro:"激活状态",type:"boolean",defaultValue:"-"},{props:"direction",intro:"方向",type:"`left` | `top` | `right` | `bottom`",defaultValue:"-"}]}],l=n(8);n(65);const{Expand:d}=l.G;class m extends i.Component{constructor(){super(...arguments),this.state={active:!1},this.onExpand=(()=>{const{active:e}=this.state;this.setState({active:!e})})}render(){const{active:e}=this.state,t={height:200,lineHeight:"200px"};return i.createElement("div",{style:{height:300}},i.createElement(l.g,{onClick:this.onExpand},"展开折叠"),i.createElement(d,{timeout:300,active:e},i.createElement("div",{className:"transitions-expand-demo-box",style:t},"高度是",200,"px")))}}var h=n(95);const{Slide:p}=l.G;class v extends i.Component{constructor(){super(...arguments),this.state={active:!0},this.onSlide=(e=>{this.setState({active:e})})}render(){const{active:e}=this.state;return i.createElement("div",null,i.createElement(l.B,{checked:e,onChange:this.onSlide},"开/关"),i.createElement("div",{className:"transitions-slide-demo-box"},i.createElement("div",null,i.createElement(p,{timeout:300,active:e,direction:"top"},i.createElement("div",{className:"transitions-slide-demo-top"},"top")),i.createElement(p,{timeout:300,active:e,direction:"right"},i.createElement("div",{className:"transitions-slide-demo-right"},"right"))),i.createElement("div",null,i.createElement(p,{timeout:300,active:e,direction:"left"},i.createElement("div",{className:"transitions-slide-demo-left"},"left")),i.createElement(p,{timeout:300,active:e,direction:"bottom"},i.createElement("div",{className:"transitions-slide-demo-bottom"},"bottom")))))}}var u=n(93);const{Scale:x}=l.G;class g extends i.Component{constructor(){super(...arguments),this.state={active:!0},this.onScale=(e=>{this.setState({active:e})})}render(){const{active:e}=this.state,t={height:200,lineHeight:"200px"};return i.createElement("div",{style:{height:300}},i.createElement(l.B,{checked:e,onChange:this.onScale},"开/关"),i.createElement(x,{timeout:300,active:e},i.createElement("div",{className:"transitions-expand-demo-box",style:t},"放缩")))}}var S=n(91);n.d(t,"default",function(){return y});const E=n(94),f=n(92),b=n(90);class y extends i.Component{render(){return i.createElement("div",null,i.createElement(s.a,{text:o}),i.createElement(a.a,{text:h,demo:i.createElement(m,null),code:E}),i.createElement(a.a,{text:u,demo:i.createElement(v,null),code:f}),i.createElement(a.a,{text:S,demo:i.createElement(g,null),code:b}),i.createElement(c.a,{api:r}))}}},65:function(e,t,n){var i=n(96);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0};n(14)(i,o);i.locals&&(e.exports=i.locals)},90:function(e,t){e.exports="import * as React from 'react';\nimport { Transitions, Switch } from '../../../../components/';\nimport './index.less';\n\nconst {Scale} = Transitions;\n\nexport default class App extends React.Component {\n  state = {\n    active: true,\n  }\n\n  onScale = (checked: boolean) => {\n    this.setState({\n      active: checked,\n    });\n  }\n\n  render () {\n    const height = 200;\n    const {active} = this.state;\n    const style: React.CSSProperties = {\n      height,\n      lineHeight: `${height}px`,\n    };\n    return (\n      <div style={{height: 300}}>\n        <Switch checked={active} onChange={this.onScale}>开/关</Switch>\n        <Scale\n          timeout={300}\n          active={active}\n        >\n          <div\n            className='transitions-expand-demo-box'\n            style={style}\n          >\n            放缩\n          </div>\n        </Scale>\n      </div>\n    )\n  }\n}\n"},91:function(e,t){e.exports="#### Scale 放缩"},92:function(e,t){e.exports="import * as React from 'react';\nimport { Transitions, Switch } from '../../../../components/';\nimport './index.less';\n\nconst {Slide} = Transitions;\n\nexport default class App extends React.Component {\n  state = {\n    active: true,\n  }\n\n  onSlide = (checked: boolean) => {\n    this.setState({\n      active: checked,\n    });\n  }\n\n  render () {\n    const {active} = this.state;\n    return (\n      <div>\n        <Switch checked={active} onChange={this.onSlide}>开/关</Switch>\n        <div className={'transitions-slide-demo-box'}>\n          <div>\n            <Slide\n            timeout={300}\n            active={active}\n            direction='top'\n            >\n              <div className={'transitions-slide-demo-top'}>top</div>\n            </Slide>\n            <Slide\n              timeout={300}\n              active={active}\n              direction='right'\n            >\n              <div className={'transitions-slide-demo-right'}>right</div>\n            </Slide>\n          </div>\n          <div>\n            <Slide\n              timeout={300}\n              active={active}\n              direction='left'\n            >\n              <div className={'transitions-slide-demo-left'}>left</div>\n            </Slide>\n            <Slide\n              timeout={300}\n              active={active}\n              direction='bottom'\n            >\n              <div className={'transitions-slide-demo-bottom'}>bottom</div>\n            </Slide>\n          </div>\n        </div>\n      </div>\n    )\n  }\n}\n"},93:function(e,t){e.exports="#### Slide 划入、划出动画\n支持`left`、`right`、`top`、`bottom`四个方向。"},94:function(e,t){e.exports="import * as React from 'react';\nimport { Transitions, Button } from '../../../../components/';\nimport './index.less';\n\nconst {Expand} = Transitions;\n\nexport default class App extends React.Component {\n  state = {\n    active: false,\n  };\n\n  onExpand = () => {\n    const {active} = this.state;\n    this.setState({active: !active});\n  }\n\n  render() {\n    const height = 200;\n    const {active} = this.state;\n    const style: React.CSSProperties = {\n      height,\n      lineHeight: `${height}px`,\n    };\n    return (\n      <div style={{height: 300}}>\n        <Button onClick={this.onExpand}>展开折叠</Button>\n        <Expand\n          timeout={300}\n          active={active}\n        >\n          <div\n            className='transitions-expand-demo-box'\n            style={style}\n          >\n            高度是{height}px\n          </div>\n        </Expand>\n      </div>\n    );\n  }\n}\n"},95:function(e,t){e.exports="#### Expand 展开、折叠动画\n用于展开、折叠过度，让内容过度更加流畅。"},96:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,".transitions-expand-demo-box {\n  width: 12.5rem;\n  background: #51b26d;\n  color: white;\n  text-align: center;\n  margin-top: 0.625rem;\n}\n\n.transitions-slide-demo-box {\n  height: 13.75rem;\n}\n\n.transitions-slide-demo-left,\n.transitions-slide-demo-right,\n.transitions-slide-demo-top,\n.transitions-slide-demo-bottom {\n  display: inline-block;\n  margin-right: 1.25rem;\n  margin-bottom: 0.625rem;\n  width: 12.5rem;\n  height: 6.25rem;\n  background: #51b26d;\n  color: white;\n  line-height: 6.25rem;\n  text-align: center;\n  font-size: 1.5rem;\n}",""])},97:function(e,t){e.exports="## Transitions 过度动画\n`Transitions`是`yoshino`内部的一些通用过度动画，抽离出来供开发者使用。\n\n## 代码演示\n"}}]);