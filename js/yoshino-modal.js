(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{135:function(n,e){n.exports="import * as React from 'react';\nimport { Modal, Button } from '../../../../components/';\n\nexport default class App extends React.Component {\n  state = {\n    count: 1,\n    visible: false,\n  };\n\n  onClick = () => {\n    this.setState({\n      count: this.state.count + 1,\n      visible: true,\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.onClick}>点一次count++</Button>\n        <Modal\n          visible={this.state.visible}\n          bodyContent={this.state.count}\n          onClose={() => this.setState({visible: false})}\n        />\n      </div>\n    );\n  }\n}\n"},136:function(n,e){n.exports="#### 内嵌render的Modal\n写在`render`里的`Modal`，可以动态更新Modal中的内容。\n"},137:function(n,e){n.exports="import * as React from 'react';\nimport { Modal, Button } from '../../../../components/';\n\nexport default function() {\n  const info = () => {\n    Modal.info({\n      title: 'info',\n      content: 'infoinfoinfoinfoinfoinfoinfoinfoinfoinfo',\n      width: 400,\n    });\n  };\n\n  const success = () => {\n    Modal.success({\n      title: 'success',\n      content: 'successsuccesssuccesssuccesssuccesssuccess',\n      width: 400,\n    });\n  };\n\n  const error = () => {\n    Modal.error({\n      title: 'error',\n      content: 'errorerrorerrorerrorerrorerrorerrorerrorerror',\n      width: 400,\n    });\n  };\n\n  const warning = () => {\n    Modal.warning({\n      title: 'warning',\n      content: 'warningwarningwarningwarningwarningwarning',\n      width: 400,\n    });\n  };\n  return (\n    <div>\n      <Button onClick={info}>info</Button>\n      <Button onClick={success}>success</Button>\n      <Button onClick={error}>error</Button>\n      <Button onClick={warning}>warning</Button>\n    </div>\n  );\n}\n"},138:function(n,e){n.exports="#### 四种带默认图标的对话框\n四中对话框的`type`分别为`info`、`success`、`error`、`warning`，各自带有默认图标，并且只有确认键。\n"},139:function(n,e){n.exports="import * as React from 'react';\nimport { Modal, Icon, Button } from '../../../../components/';\n\nexport default function() {\n  const confirm = () => {\n    Modal.confirm({\n      icon: <Icon type='checkmark-round'/>,\n      title: '这是一个标题！！！',\n      content: '这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！',\n      width: 400,\n      onOk: () => true,\n    });\n  };\n\n  const autoClose = () => {\n    const ref = Modal.confirm({\n      title: '这是一个标题！！！',\n      content: '这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！',\n      width: 400,\n      showCancel: false,\n    });\n    setTimeout(() => {\n      Modal.close(ref);\n    }, 2000);\n  };\n\n  return (\n    <div>\n      <Button onClick={confirm}>confirm</Button>\n      <Button onClick={autoClose}>打开一个2秒后自动关闭的对话框</Button>\n    </div>\n  );\n}\n"},140:function(n,e){n.exports="#### 基本使用\n`confirm`打开一个具有确定和取消的对话框\n"},141:function(n,e){n.exports="- Modal.confirm(config)\n- Modal.success(config)\n- Modal.error(config)\n- Modal.info(config)\n- Modal.warning(config)\n- Modal.close(key: String)\n\n`confirm`、`success`、`error`、`info`、`warning`都会返回一个`key`，用于`close`方法来关闭制定窗口。\n\nconfig 参数如下："},142:function(n,e){n.exports="## Modal \n\n\n## 代码演示\n"},533:function(n,e,t){"use strict";t.r(e);var o=t(1),r=t(0),i=t(142),c=t(86),s=t(88),l=t(87),a=[{title:"API",intro:t(141),json:[{props:"zIndex",intro:"对应css的z-index",type:"number",defaultValue:"1000"},{props:"width",intro:"对话框宽度",type:"number",defaultValue:"256"},{props:"onOk",intro:"确认按钮回调，返回值为`true`时关闭",type:"() => boolean",defaultValue:"-"},{props:"onCancel",intro:"取消按钮回到",type:"() => void",defaultValue:"-"},{props:"onClose",intro:"对话框关闭时回调，点击取消、确定、以及右上角关闭时都会触发",type:"() => void",defaultValue:"-"},{props:"okText",intro:"确认按钮文本",type:"ReactNode",defaultValue:"确定"},{props:"cancelText",intro:"取消按钮文本",type:"ReactNode",defaultValue:"取消"},{props:"title",intro:"标题",type:"ReactNode",defaultValue:"-"},{props:"content",intro:"内容",type:"ReactNode",defaultValue:"-"},{props:"bodyContent",intro:"主体部分，可以覆盖title、content以icon",type:"ReactNode",defaultValue:"-"},{props:"icon",intro:"图标",type:"ReactNode",defaultValue:"-"},{props:"showCancel",intro:"是否显示取消按钮",type:"boolean",defaultValue:"false"},{props:"showClose",intro:"是否显示关闭按钮",type:"boolean",defaultValue:"true"},{props:"showMask",intro:"是否显示蒙层",type:"boolean",defaultValue:"true"},{props:"maskClosable",intro:"点击蒙层是否关闭",type:"boolean",defaultValue:"true"},{props:"maskClick",intro:"蒙层点击事件",type:"() => void",defaultValue:"-"},{props:"maskStyle",intro:"蒙层样式",type:"React.CSSProperties",defaultValue:"-"}]}],u=t(8),f=function(){return r.createElement("div",null,r.createElement(u.g,{onClick:function(){u.u.confirm({icon:r.createElement(u.o,{type:"checkmark-round"}),title:"这是一个标题！！！",content:"这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！",width:400,onOk:function(){return!0}})}},"confirm"),r.createElement(u.g,{onClick:function(){var n=u.u.confirm({title:"这是一个标题！！！",content:"这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！",width:400,showCancel:!1});setTimeout(function(){u.u.close(n)},2e3)}},"打开一个2秒后自动关闭的对话框"))},d=t(140),p=function(){return r.createElement("div",null,r.createElement(u.g,{onClick:function(){u.u.info({title:"info",content:"infoinfoinfoinfoinfoinfoinfoinfoinfoinfo",width:400})}},"info"),r.createElement(u.g,{onClick:function(){u.u.success({title:"success",content:"successsuccesssuccesssuccesssuccesssuccess",width:400})}},"success"),r.createElement(u.g,{onClick:function(){u.u.error({title:"error",content:"errorerrorerrorerrorerrorerrorerrorerrorerror",width:400})}},"error"),r.createElement(u.g,{onClick:function(){u.u.warning({title:"warning",content:"warningwarningwarningwarningwarningwarning",width:400})}},"warning"))},m=t(138),w=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.state={count:1,visible:!1},e.onClick=function(){e.setState({count:e.state.count+1,visible:!0})},e}return o.__extends(e,n),e.prototype.render=function(){var n=this;return r.createElement("div",null,r.createElement(u.g,{onClick:this.onClick},"点一次count++"),r.createElement(u.u,{visible:this.state.visible,bodyContent:this.state.count,onClose:function(){return n.setState({visible:!1})}}))},e}(r.Component),g=t(136),C=t(139),h=t(137),k=t(135),y=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return o.__extends(e,n),e.prototype.render=function(){return r.createElement("div",null,r.createElement(c.a,{text:i}),r.createElement(s.a,{text:d,demo:r.createElement(f,null),code:C}),r.createElement(s.a,{text:m,demo:r.createElement(p,null),code:h}),r.createElement(s.a,{text:g,demo:r.createElement(w,null),code:k}),r.createElement(l.a,{api:a}))},e}(r.Component);e.default=y}}]);