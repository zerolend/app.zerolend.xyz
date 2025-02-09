"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8316],{41188:function(e,t,n){var o=n(67294),r=n(2714),a=n(23326);t.Z=function(e,t,n){void 0===n&&(n={});var c=(0,r.Z)(e),i=(0,o.useRef)(null),l=(0,o.useCallback)(function(){i.current&&clearInterval(i.current)},[]);return(0,o.useEffect)(function(){if((0,a.hj)(t)&&!(t<0))return n.immediate&&c(),i.current=setInterval(c,t),l},[t,n.immediate]),l}},2714:function(e,t,n){var o=n(67294),r=n(23326),a=n(51046);t.Z=function(e){a.Z&&!(0,r.mf)(e)&&console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e));var t=(0,o.useRef)(e);t.current=(0,o.useMemo)(function(){return e},[e]);var n=(0,o.useRef)();return n.current||(n.current=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.current.apply(this,e)}),n.current}},8316:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var o=n(18763),r=n(41188),a=n(54117),c=n(56469),i=n(67294),l=n(42763),s=`.ant-modal-content .ant-modal-footer {
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
`,u=({info:e})=>{var t;let n,u,d;let{t:p}=(0,l.$G)(),{setWrongPassword:m,setPaymentVerify:f,userInfo:v,showSelectSecurityAccount:g}=(0,o.ta)(),w=(0,o.sa)(),{authCoreModal:y}=(0,o.qa)(),b=()=>{var e,t,n,o;(null==(e=null==v?void 0:v.security_account)?void 0:e.email)&&(null==(t=null==v?void 0:v.security_account)?void 0:t.phone)?g(!0):w("/account/set-password",{state:{account:(null==(n=null==v?void 0:v.security_account)?void 0:n.email)||(null==(o=null==v?void 0:v.security_account)?void 0:o.phone)}})},h=()=>{m({visible:!1})},[x,E]=(0,i.useState)(),[z,_]=(0,i.useState)((null==(t=e.accountFrozen)?void 0:t.seconds)||0);return(0,r.Z)(()=>{let e=z-1;_(e),e<=0&&(E(void 0),h())},x),(0,i.useEffect)(()=>(e.accountFrozen&&(_(e.accountFrozen.seconds),E(1e3)),()=>{E(void 0)}),[e.accountFrozen]),i.createElement(i.Fragment,null,i.createElement("style",null,s),i.createElement(a.Z,{open:e.visible,closable:!1,centered:!0,okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}},getContainer:()=>y.rootBody},i.createElement("div",{className:"wrong-password-content"},i.createElement(o.la,{className:"close-icon",onClick:h}),e.accountFrozen?i.createElement(i.Fragment,null,i.createElement("div",{className:"modal-title"},p("account.incorrect_payment_password")),i.createElement("div",{className:"tip m-margin-top-20"},p("account.incorrect_tip2"))):i.createElement("div",{className:"tip m-margin-top-20"},p("account.incorrect_tip1")),e.accountFrozen&&i.createElement("div",{className:"frozen-countdown"},(n=(n=Math.floor(z/60/60))<10?"0"+n:n)+":"+(u=(u=Math.floor(z/60%60))<10?"0"+u:u)+":"+(d=(d=Math.floor(z%60))<10?"0"+d:d)),i.createElement(c.Z,{className:"btn",onClick:()=>{m({visible:!1}),f({visible:!1}),b()}},p("account.forgot_password")),!e.accountFrozen&&i.createElement(c.Z,{className:"btn",onClick:h},p("account.retry")))))}}}]);