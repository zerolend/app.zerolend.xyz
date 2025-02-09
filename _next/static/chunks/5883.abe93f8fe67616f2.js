"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5883],{15883:function(t,n,o){o.r(n),o.d(n,{default:function(){return s}});var e=o(18763),a=o(54117),r=o(56469),c=o(67294),l=o(42763),i=`.ant-modal-content .ant-modal-footer {
  display: none;
}
.wrong-password-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrong-password-content .modal-title {
  margin-top: 20px 0;
  font-size: 22px;
  line-height: 25px;
  text-align: center;
  color: var(--text-color);
}
.wrong-password-content .tip {
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 16px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.3;
  text-align: center;
  color: var(--secondary-text-color);
}
.wrong-password-content .frozen-countdown {
  margin-top: 12px;
  margin-bottom: 22px;
  font-weight: bold;
  font-size: 24px;
  color: var(--text-color);
}
.wrong-password-content .btn {
  width: 100%;
  height: 47px;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.wrong-password-content .btn.cancel {
  color: var(--secondary-btn-color);
  background: var(--secondary-btn-background-color);
}
.wrong-password-content .close-icon {
  align-self: flex-end;
}
`,s=({modal:t})=>{var n;let{visible:o,confirm:s}=t,{t:d}=(0,l.$G)(),{setPaymentPassword:p,showAccountTipModal:m,modalOptions:g}=(0,e.ta)(),{authCoreModal:u}=(0,e.qa)();return c.createElement(c.Fragment,null,c.createElement("style",null,i),c.createElement(a.Z,{open:o,closable:!1,centered:!0,okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}},width:"90%",getContainer:()=>u.rootBody},c.createElement("div",{className:"wrong-password-content"},c.createElement(e.la,{className:"close-icon",onClick:()=>m({visible:!1})}),c.createElement("h3",{className:"modal-title m-margin-top-40"},d("account.account_modal1_title")),c.createElement("div",{className:"tip"},d("account.account_modal1_tip")),c.createElement(r.Z,{className:"btn",onClick:()=>{m({visible:!1}),p()}},d("account.account_modal1_btn1")),(null==(n=g.promptSettingConfig)?void 0:n.promptPaymentPasswordSettingWhenSign)!==3&&c.createElement(r.Z,{className:"btn cancel",onClick:()=>{null==s||s(),m({visible:!1})}},d("account.account_modal1_btn2")))))}}}]);