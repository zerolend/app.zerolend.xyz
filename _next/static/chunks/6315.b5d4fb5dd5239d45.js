"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6315],{29662:function(e,t,n){n.d(t,{a:function(){return m}});var a=n(17566),r=n(18763),o=n(55126),l=n(67294),i=`.icon-eye {
  display: block;
  margin: auto;
  font-size: 23px;
}
`,c=()=>l.createElement(l.Fragment,null,l.createElement("style",null,i),l.createElement(a.b,{className:"icon-eye",name:"eye_open"})),s=()=>l.createElement(l.Fragment,null,l.createElement("style",null,i),l.createElement(a.b,{className:"icon-eye",name:"eye_close"})),p=`.password-input {
  position: relative;
  width: 100%;
  height: 47px;
  min-height: 47px;
  padding: 0;
  border: 1px solid var(--input-border-color) !important;
  border-radius: var(--primary-btn-border-radius);
  overflow: hidden;
  background: none;
}
.password-input input {
  width: 100%;
  height: 45px;
  padding: 0 8px;
  padding-left: 16px !important;
  font-weight: 500;
  font-size: 15px;
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.password-input .ant-input-suffix {
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 14px;
  cursor: pointer;
}
`,m=e=>{let t=l.useRef(null);return l.createElement(l.Fragment,null,l.createElement("style",null,p),l.createElement(o.Z.Password,{ref:t,className:"password-input"+(null!=e&&e.className?` ${null==e?void 0:e.className}`:""),iconRender:e=>e?l.createElement("div",null,l.createElement(c,null)):l.createElement("div",null,l.createElement(s,null)),onChange:t=>{var n;null!=e&&e.onChange&&(null==(n=null==e?void 0:e.onChange)||n.call(e,t.target.value))},defaultValue:null==e?void 0:e.defaultValue,maxLength:(null==e?void 0:e.maxLength)||20,onPressEnter:t=>{var n;return null==(n=null==e?void 0:e.onPressEnter)?void 0:n.call(e,t)},onBlur:t=>{var n;return null==(n=null==e?void 0:e.onBlur)?void 0:n.call(e,t)},autoFocus:!!((0,r.S)(null==e?void 0:e.autoFocus)&&(0,r.y)())||(null==e?void 0:e.autoFocus)}))}},33472:function(e,t,n){n.d(t,{a:function(){return i}});var a=n(17566),r=n(18763),o=n(67294),l=`.p-auth-header {
  position: sticky;
  z-index: 99;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: var(--text-color);
  background-color: var(--theme-background-color);
  opacity: 0.97;
}
.p-auth-header .left {
  position: absolute;
  left: 0;
  min-width: 60px;
  height: 100%;
}
.p-auth-header .left .header-back-btn {
  position: absolute;
  z-index: 100;
  top: 16px;
  left: 16px;
  font-size: 28px;
}
.p-auth-header .middle .info-request {
  position: initial;
  width: auto;
}
.p-auth-header .middle .info-title {
  padding-top: 0;
  margin-top: 4px;
}
.p-auth-header .middle .info-address {
  justify-content: center;
  align-items: center;
  width: 140px;
  padding-top: 2px;
  margin: auto;
  margin-top: 10px;
  text-align: center;
}
.p-auth-header .middle .info-address .copy-icon {
  position: relative;
  top: 1px;
}
.p-auth-header .right {
  position: absolute;
  right: 0;
  min-width: 60px;
  height: 100%;
}
@media (min-width: 600px) {
  .p-auth-header {
    width: calc(100 * var(--vw));
  }
}
`,i=e=>{var t,n;let{children:i,leftContent:c,rightContent:s,onBack:p}=e,{displayBackBtn:m=!1}=e,d=(0,r.sa)(),{customRouter:u}=(0,r.ra)();return p&&(m=!0),(c||(null!=(n=null==(t=null==u?void 0:u.history)?void 0:t.length)?n:0)<=1)&&(m=!1),o.createElement("div",{className:"width-100"},o.createElement("style",null,l),o.createElement("div",{className:"p-auth-header"},o.createElement("div",{className:"left"},o.createElement(o.Fragment,null,m&&o.createElement(a.b,{className:"header-back-btn",name:"circle_back",onClick:()=>{p?p():d(-1)}}),c)),o.createElement("div",{className:"middle"},i),o.createElement("div",{className:"right"},s)))}},96315:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(29662),r=n(33472),o=n(63728),l=n(81163),i=n(18763),c=n(68376),s=n(98373),p=n(24371),m=n(47753),d=n(4116),u=n(56469),h=n(67294),g=n(42763),x=`.mp-change-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  font-size: 14px;
  color: var(--text-color);
}
.mp-change-container .wapper {
  flex: 1;
  width: 100%;
  padding: 0 18px;
}
.mp-change-container .ant-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  height: 100%;
}
.mp-change-container .ant-form .ant-form-item {
  margin-bottom: 0;
}
.mp-change-container .ant-form .scroll-content {
  flex: 1;
  width: 100%;
}
.mp-change-container .mp-change-title {
  margin-top: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: var(--text-color);
}
.mp-change-container .mp-input-name {
  align-self: flex-start;
  margin-top: 10px;
  font-weight: 400;
}
.mp-change-container .mp-input {
  margin-top: 6px;
}
.mp-change-container .mp-input-error {
  align-self: flex-start;
  margin-top: 8px;
  color: var(--error-color);
}
.mp-change-container .mp-tip-space {
  width: 100%;
  margin-top: 25px;
  margin-bottom: 110px;
  line-height: 20px;
}
.mp-change-container .mp-tip-space span {
  color: var(--text-color);
}
.mp-change-container .bottom-container .mp-next {
  width: 100%;
}
.mp-change-container .bottom-container .footer-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--footer-height);
  margin: 0;
}
.mp-change-container .bottom-container .footer-box .footer {
  margin: 0;
}
`,f=()=>{let e=(0,i.sa)(),{t:t}=(0,g.$G)(),{Text:n,Link:f}=p.default,[v,w]=(0,h.useState)(!1),E=(0,o.a)(),[b,y]=(0,h.useState)(!0),{run:N,loading:k}=(0,s.Z)(e=>(0,c._W)(e).then(e=>{if(!e)throw Error("Master password decryption error");return e}),{manual:!0,onSuccess:e=>{_()},onError:e=>{(null==e?void 0:e.message)==="Master password decryption error"?w(!0):E.error((null==e?void 0:e.message)||"check master password error")}}),_=()=>{e("/account/master-password",{state:{setNewMasterPassword:!0}})};return h.createElement("div",{className:"mp-change-container"},h.createElement("style",null,x),h.createElement(r.a,{displayBackBtn:!0},t("account.current_master_password")),h.createElement("div",{className:"wapper"},h.createElement(m.Z,{onFinish:e=>{let{password:t}=e;t&&t.length>=6&&t.length<=20?N(t):w(!0)},layout:"vertical",onValuesChange:e=>{w(!1);let{password:t}=e;y(!t)}},h.createElement("div",{className:"scroll-content"},h.createElement("div",{className:"mp-input-name padding-top-16"},t("account.input_master_password")),h.createElement(m.Z.Item,{name:"password"},h.createElement(a.a,{className:"mp-input"})),v&&h.createElement("div",{className:"mp-input-error"},t("account.password_error")),h.createElement(d.Z,{direction:"vertical",className:"mp-tip-space"},h.createElement(n,null,t("account.mpc_tss_intro")),h.createElement(n,null,t("account.input_decrypt_hint")," ",h.createElement(f,{onClick:()=>{e("/account/master-password/description")},className:"more-text-btn"},t("account.learn_more_period"))))),h.createElement(m.Z.Item,null,h.createElement("div",{className:"bottom-container"},h.createElement(u.Z,{className:"primary-antd-btn mp-next",htmlType:"submit",loading:k,disabled:b},t("common.next")),h.createElement(l.a,null))))))}}}]);