"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8316],{41188:function(e,t,n){var o=n(67294),r=n(2714),a=n(23326);t.Z=function(e,t,n){void 0===n&&(n={});var c=(0,r.Z)(e),l=(0,o.useRef)(null),i=(0,o.useCallback)(function(){l.current&&clearInterval(l.current)},[]);return(0,o.useEffect)(function(){if((0,a.hj)(t)&&!(t<0))return n.immediate&&c(),l.current=setInterval(c,t),i},[t,n.immediate]),i}},8316:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var o=n(86727),r=n(41188),a=n(54117),c=n(56469),l=n(67294),i=n(67421),s=`.ant-modal-content .ant-modal-footer {
  display: none;
}
.wrong-password-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrong-password-content .modal-title {
  font-size: 22px;
  font-weight: bold;
  position: relative;
  top: 7px;
  margin-bottom: 12px;
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
  border-radius: var(--primary-btn-border-radius);
  font-size: var(--primary-btn-font-size);
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.wrong-password-content .close-icon {
  align-self: flex-end;
}
`,u=({info:e})=>{var t;let n,u,d;let{t:p}=(0,i.$G)(),{setWrongPassword:m,setPaymentVerify:f,userInfo:v,showSelectSecurityAccount:g}=(0,o.ta)(),w=(0,o.sa)(),{authCoreModal:b}=(0,o.qa)(),y=()=>{var e,t,n,o;(null==(e=null==v?void 0:v.security_account)?void 0:e.email)&&(null==(t=null==v?void 0:v.security_account)?void 0:t.phone)?g(!0):w("/account/set-password",{state:{account:(null==(n=null==v?void 0:v.security_account)?void 0:n.email)||(null==(o=null==v?void 0:v.security_account)?void 0:o.phone)}})},h=()=>{m({visible:!1})},[x,E]=(0,l.useState)(),[z,_]=(0,l.useState)((null==(t=e.accountFrozen)?void 0:t.seconds)||0);return(0,r.Z)(()=>{let e=z-1;_(e),e<=0&&(E(void 0),h())},x),(0,l.useEffect)(()=>(e.accountFrozen&&(_(e.accountFrozen.seconds),E(1e3)),()=>{E(void 0)}),[e.accountFrozen]),l.createElement(l.Fragment,null,l.createElement("style",null,s),l.createElement(a.Z,{open:e.visible,closable:!1,centered:!0,okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}},getContainer:()=>b.rootBody},l.createElement("div",{className:"wrong-password-content"},l.createElement(o.la,{className:"close-icon",onClick:h}),e.accountFrozen?l.createElement(l.Fragment,null,l.createElement("div",{className:"modal-title"},p("account.incorrect_payment_password")),l.createElement("div",{className:"tip m-margin-top-20"},p("account.incorrect_tip2"))):l.createElement("div",{className:"tip m-margin-top-20"},p("account.incorrect_tip1")),e.accountFrozen&&l.createElement("div",{className:"frozen-countdown"},(n=(n=Math.floor(z/60/60))<10?"0"+n:n)+":"+(u=(u=Math.floor(z/60%60))<10?"0"+u:u)+":"+(d=(d=Math.floor(z%60))<10?"0"+d:d)),l.createElement(c.Z,{className:"btn",onClick:()=>{m({visible:!1}),f({visible:!1}),y()}},p("account.forgot_password")),!e.accountFrozen&&l.createElement(c.Z,{className:"btn",onClick:h},p("account.retry")))))}}}]);