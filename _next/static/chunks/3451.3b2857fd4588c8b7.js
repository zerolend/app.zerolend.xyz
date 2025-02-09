"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3451],{29662:function(e,t,n){n.d(t,{a:function(){return p}});var r=n(17566),o=n(18763),a=n(55126),l=n(67294),i=`.icon-eye {
  display: block;
  margin: auto;
  font-size: 23px;
}
`,c=()=>l.createElement(l.Fragment,null,l.createElement("style",null,i),l.createElement(r.b,{className:"icon-eye",name:"eye_open"})),m=()=>l.createElement(l.Fragment,null,l.createElement("style",null,i),l.createElement(r.b,{className:"icon-eye",name:"eye_close"})),s=`.password-input {
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
`,p=e=>{let t=l.useRef(null);return l.createElement(l.Fragment,null,l.createElement("style",null,s),l.createElement(a.Z.Password,{ref:t,className:"password-input"+(null!=e&&e.className?` ${null==e?void 0:e.className}`:""),iconRender:e=>e?l.createElement("div",null,l.createElement(c,null)):l.createElement("div",null,l.createElement(m,null)),onChange:t=>{var n;null!=e&&e.onChange&&(null==(n=null==e?void 0:e.onChange)||n.call(e,t.target.value))},defaultValue:null==e?void 0:e.defaultValue,maxLength:(null==e?void 0:e.maxLength)||20,onPressEnter:t=>{var n;return null==(n=null==e?void 0:e.onPressEnter)?void 0:n.call(e,t)},onBlur:t=>{var n;return null==(n=null==e?void 0:e.onBlur)?void 0:n.call(e,t)},autoFocus:!!((0,o.S)(null==e?void 0:e.autoFocus)&&(0,o.y)())||(null==e?void 0:e.autoFocus)}))}},23451:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(29662),o=n(63728),a=n(81163),l=n(18763),i=n(76099),c=n(68376),m=n(98373),s=n(24371),p=n(47753),u=n(4116),d=n(56469),f=n(67294),v=n(42763),g=`.mp-verify-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  font-size: 14px;
  color: var(--text-color);
  background-color: var(--theme-background-color);
}
.mp-verify-container .ant-form {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  min-height: 360px;
}
.mp-verify-container .ant-form .scroll-content {
  flex: 1;
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
}
.mp-verify-container .ant-form-item {
  margin-bottom: 0;
}
.mp-verify-container .mp-verify-title {
  margin-top: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: var(--text-color);
}
.mp-verify-container .mp-input-name {
  align-self: flex-start;
  margin-top: 30px;
  font-weight: 400;
}
.mp-verify-container .mp-input {
  margin-top: 6px;
}
.mp-verify-container .mp-input-error {
  align-self: flex-start;
  margin-top: 8px;
  color: var(--error-color);
}
.mp-verify-container .mp-tip-space {
  width: 100%;
  margin-top: 25px;
  margin-bottom: 110px;
  line-height: 20px;
}
.mp-verify-container .mp-tip-space span {
  color: var(--text-color);
}
.mp-verify-container .bottom-container {
  width: 100%;
}
.mp-verify-container .bottom-container.footer {
  padding-left: 18px;
  padding-right: 18px;
}
.mp-verify-container .bottom-container .mp-next {
  position: relative;
  display: block;
  width: 100%;
  max-width: 800px;
  margin: auto;
}
.mp-verify-container .bottom-container .footer-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--footer-height);
  margin: 0;
}
.mp-verify-container .bottom-container .footer-box img {
  margin: 0;
}
`,x=e=>{let{Text:t,Link:n}=s.default,x=(0,l.sa)(),[h,y]=(0,f.useState)(!1),{t:E}=(0,v.$G)(),{loginVerifyMasterPassword:b}=e||{},w=f.useRef(null),[_,N]=(0,f.useState)(!0),{loginSuccessRedirectToApp:S}=(0,l.ta)(),k=(0,o.a)(),{run:R,loading:C}=(0,m.Z)(c.Sh,{manual:!0,onBefore:()=>{(0,c.KH)({record_type:i.oX.PAGE_MASTER_PASSWORD_VERIFY})},onSuccess:e=>{e?((0,c.KH)({record_type:i.oX.PAGE_MASTER_PASSWORD_VERIFY_SUCCESS}),b?S():x(-1)):y(!0)},onError:e=>{k.error((null==e?void 0:e.message)||"check master password error")}});return(0,f.useEffect)(()=>{setTimeout(()=>{var e,t;null==(t=null==(e=w.current)?void 0:e.querySelector(".password-input input"))||t.focus()},200)},[]),f.createElement("div",{className:"mp-verify-container",ref:w},f.createElement("style",null,g),f.createElement("div",{className:"mp-verify-title"},E("account.restore_wallet")),f.createElement(p.Z,{layout:"vertical",onFinish:e=>{let{password:t}=e;(null==t?void 0:t.length)>=6&&(null==t?void 0:t.length)<=20?(y(!1),R(t)):y(!0)},onValuesChange:e=>{let{password:t}=e;y(!1),N(!t)}},f.createElement("div",{className:"scroll-content"},f.createElement("div",{className:"mp-input-name padding-top-16"},E("account.master_password")),f.createElement(p.Z.Item,{name:"password"},f.createElement(r.a,{className:"mp-input"})),h&&f.createElement("div",{className:"mp-input-error"},E("account.password_error")),f.createElement(u.Z,{direction:"vertical",className:"mp-tip-space"},f.createElement(t,null,E("account.mpc_tss_intro")),f.createElement(t,null,E("account.input_decrypt_hint")," ",f.createElement(n,{onClick:()=>{x("/account/master-password/description")},className:"more-text-btn"},E("account.learn_more_period"))))),f.createElement(p.Z.Item,null,f.createElement("div",{className:"bottom-container footer"},f.createElement(d.Z,{className:"primary-antd-btn mp-next",htmlType:"submit",loading:C,disabled:_},E("common.confirm")),f.createElement(a.a,{className:"footer-box-v2"})))))}}}]);