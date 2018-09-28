(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{213:function(t,e){t.exports="import * as React from 'react';\nimport { Steps, Icon } from '@yoshino/components/';\n\nconst StepsItem = Steps.Item;\n\nexport default function() {\n  return (\n    <Steps size='small' current={2}>\n      <StepsItem title='第一步' icon={<Icon type='help-buoy'/>}/>\n      <StepsItem title='第二步' icon={<Icon type='android-favorite'/>}/>\n      <StepsItem title='第三步' icon={<Icon type='android-contacts'/>} status='error'/>\n    </Steps>\n  );\n}\n"},214:function(t,e){t.exports="#### 错误状态\n可以设置错误状态。\n"},215:function(t,e){t.exports="import * as React from 'react';\nimport { Steps, Button } from '@yoshino/components/';\n\nconst StepsItem = Steps.Item;\n\nexport default class App extends React.Component {\n  state = {\n    current: 0,\n  };\n\n  render() {\n    return (\n      <div>\n        <Button\n          onClick={() => {\n            const current = this.state.current - 1;\n            if (current >= 0) {\n              this.setState({current});\n            }\n          }}\n        >\n          上一步\n        </Button>\n        <Button\n          onClick={() => {\n            const current = this.state.current + 1;\n            if (current <= 2) {\n              this.setState({current});\n            }\n          }}\n        >\n          下一步\n        </Button>\n        <Steps current={this.state.current} direction='vertical'>\n          <StepsItem title='第一步'>\n            第一步第一步第一步第一步第一步第一步第一步第一步第一步\n            第一步第一步第一步第一步第一步第一步第一步第一步第一步第一\n          </StepsItem>\n          <StepsItem title='第二步'>\n            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步\n            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步\n          </StepsItem>\n          <StepsItem title='第二步'>\n            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步\n            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步\n          </StepsItem>\n        </Steps>\n      </div>\n    );\n  }\n}\n"},216:function(t,e){t.exports="#### 垂直步骤条\n可以设置`direction`来让步骤条垂直显示。\n"},217:function(t,e){t.exports="import * as React from 'react';\nimport { Steps, Icon } from '@yoshino/components/';\n\nconst StepsItem = Steps.Item;\n\nexport default function() {\n  return (\n    <Steps size='small' current={2}>\n      <StepsItem title='第一步' icon={<Icon type='help-buoy'/>}/>\n      <StepsItem title='第二步' icon={<Icon type='android-favorite'/>}/>\n      <StepsItem title='第三步' icon={<Icon type='android-contacts'/>}/>\n    </Steps>\n  );\n}\n"},218:function(t,e){t.exports="#### 自定义图标\n可以通过`icon`自定义每个步骤的图标。\n"},219:function(t,e){t.exports="import * as React from 'react';\nimport { Steps, Button } from '@yoshino/components/';\n\nconst StepsItem = Steps.Item;\n\nexport default class App extends React.Component {\n  state = {\n    current: 0,\n  };\n\n  render() {\n    return (\n      <div>\n        <Button\n          onClick={() => {\n            const current = this.state.current - 1;\n            if (current >= 0) {\n              this.setState({current});\n            }\n          }\n        }\n        >\n          上一步\n        </Button>\n        <Button\n          onClick={() => {\n            const current = this.state.current + 1;\n            if (current <= 2) {\n              this.setState({current});\n            }\n          }}\n        >\n          下一步\n        </Button>\n        <Steps current={this.state.current}>\n          <StepsItem title='第一步'>\n            第一步第一步第一步第一步第一步第一步第一步第一步第一步\n            第一步第一步第一步第一步第一步第一步第一步第一步第一步第一\n          </StepsItem>\n          <StepsItem title='第二步'>\n            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步\n            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步\n          </StepsItem>\n          <StepsItem title='第二步'>\n            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步\n            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步\n          </StepsItem>\n        </Steps>\n      </div>\n    );\n  }\n\n}\n"},220:function(t,e){t.exports="#### 基本使用\n简单的基本使用。\n"},221:function(t,e){t.exports="## Steps 步骤条\n流程状态。\n\n## 代码演示\n"},560:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0),c=n(221),i=n(88),s=n(90),a=n(89),l=[{title:"Steps",json:[{props:"direction",intro:"方向",type:"'vertical' | 'horizontal'",defaultValue:""},{props:"current",intro:"当前步骤  从0开始计数",type:"number",defaultValue:"-"},{props:"size",intro:"大小",type:"'default' | 'small'",defaultValue:"default"}]},{title:"Steps.Item",json:[{props:"title",intro:"步骤标题",type:"string",defaultValue:"-"},{props:"icon",intro:"自定义图标",type:"ReactNode",defaultValue:"-"},{props:"status",intro:"当前步骤状态",type:"'error' | 'finished'",defaultValue:"-"}]}],p=n(7),u=p.E.Item,m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={current:0},e}return r.__extends(e,t),e.prototype.render=function(){var t=this;return o.createElement("div",null,o.createElement(p.g,{onClick:function(){var e=t.state.current-1;e>=0&&t.setState({current:e})}},"上一步"),o.createElement(p.g,{onClick:function(){var e=t.state.current+1;e<=2&&t.setState({current:e})}},"下一步"),o.createElement(p.E,{current:this.state.current},o.createElement(u,{title:"第一步"},"第一步第一步第一步第一步第一步第一步第一步第一步第一步 第一步第一步第一步第一步第一步第一步第一步第一步第一步第一"),o.createElement(u,{title:"第二步"},"第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步 第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步"),o.createElement(u,{title:"第二步"},"第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步 第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步")))},e}(o.Component),d=n(220),f=p.E.Item,S=function(){return o.createElement(p.E,{size:"small",current:2},o.createElement(f,{title:"第一步",icon:o.createElement(p.p,{type:"help-buoy"})}),o.createElement(f,{title:"第二步",icon:o.createElement(p.p,{type:"android-favorite"})}),o.createElement(f,{title:"第三步",icon:o.createElement(p.p,{type:"android-contacts"})}))},E=n(218),I=p.E.Item,y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={current:0},e}return r.__extends(e,t),e.prototype.render=function(){var t=this;return o.createElement("div",null,o.createElement(p.g,{onClick:function(){var e=t.state.current-1;e>=0&&t.setState({current:e})}},"上一步"),o.createElement(p.g,{onClick:function(){var e=t.state.current+1;e<=2&&t.setState({current:e})}},"下一步"),o.createElement(p.E,{current:this.state.current,direction:"vertical"},o.createElement(I,{title:"第一步"},"第一步第一步第一步第一步第一步第一步第一步第一步第一步 第一步第一步第一步第一步第一步第一步第一步第一步第一步第一"),o.createElement(I,{title:"第二步"},"第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步 第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步"),o.createElement(I,{title:"第二步"},"第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步 第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步")))},e}(o.Component),h=n(216),v=p.E.Item,x=function(){return o.createElement(p.E,{size:"small",current:2},o.createElement(v,{title:"第一步",icon:o.createElement(p.p,{type:"help-buoy"})}),o.createElement(v,{title:"第二步",icon:o.createElement(p.p,{type:"android-favorite"})}),o.createElement(v,{title:"第三步",icon:o.createElement(p.p,{type:"android-contacts"}),status:"error"}))},C=n(214),k=n(219),B=n(217),b=n(215),R=n(213),w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.render=function(){return o.createElement("div",null,o.createElement(i.a,{text:c}),o.createElement(s.a,{text:d,demo:o.createElement(m,null),code:k}),o.createElement(s.a,{text:E,demo:o.createElement(S,null),code:B}),o.createElement(s.a,{text:h,demo:o.createElement(y,null),code:b}),o.createElement(s.a,{text:C,demo:o.createElement(x,null),code:R}),o.createElement(a.a,{api:l}))},e}(o.Component);e.default=w}}]);