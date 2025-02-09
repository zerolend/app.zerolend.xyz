"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9716],{9716:function(e,t,c){c.r(t),c.d(t,{default:function(){return u}});var o=c(18763),n=c(68376),a=c(56469),l=c(67294),r=c(42763),i=`.select-account-drawer .ant-drawer-body {
  padding: 18px !important;
}
.select-account {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.select-account .close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
}
.select-account .account-btn {
  width: 100%;
  height: 47px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  outline: none;
  font-size: var(--primary-btn-font-size);
  line-height: 22px;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.select-account .account-btn:hover {
  opacity: var(--hover-opacity);
}
.select-account .select-account-title {
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--text-color);
}
`,u=e=>{var t,c,u;let{t:s}=(0,r.$G)(),{visible:d,state:p}=e,{showSelectSecurityAccount:m,userInfo:v}=(0,o.ta)(),b=(0,o.sa)(),{authCoreModal:h}=(0,o.qa)(),y=(e,t)=>{p?b("/account/verify",{state:{account:e,...p}}):b("/account/set-password",{state:{account:e}}),m(!1)};return l.createElement(l.Fragment,null,l.createElement("style",null,i),l.createElement(o.oa,{title:null!=(t=s("account.modal_select_verification"))?t:"",placement:"bottom",closable:!1,className:"select-account-drawer",visible:d,maskClosable:!0,forceRender:!0,height:220,onClose:()=>m(!1),getContainer:()=>h.rootBody},l.createElement("div",{className:"select-account"},l.createElement(a.Z,{className:"account-btn",onClick:()=>{var e;return y(null==(e=null==v?void 0:v.security_account)?void 0:e.email,n.Gr.email)}},`${s("account.email")} - ${(0,o.Q)((null==(c=null==v?void 0:v.security_account)?void 0:c.email)||"")}`),l.createElement(a.Z,{className:"account-btn",onClick:()=>{var e;return y(null==(e=null==v?void 0:v.security_account)?void 0:e.phone,n.Gr.phone)}},`${s("account.mobile")} - ${(0,o.R)((null==(u=null==v?void 0:v.security_account)?void 0:u.phone)||"")}`))))}}}]);