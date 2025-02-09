"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7570],{37570:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(42768),o=a(33472),n=a(18763),i=a(98373),l=a(67294),d=a(42763),s=a(68376),c=`.payment-password-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  color: var(--text-color);
}
.payment-password-container > .wrapper {
  padding: 0 30px;
}
.payment-password-container .display-none {
  display: none;
}
.payment-password-container .page-title {
  margin-top: 0px;
  font-size: 22px;
  color: var(--text-color);
  text-align: center;
}
.payment-title {
  margin-top: 60px;
  font-size: 22px;
  color: var(--text-color);
}
.patment-tips1 {
  width: 80vw;
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: var(--text-color);
}
@media (min-width: 600px) {
  .patment-tips1 {
    width: calc(80 * var(--vw));
  }
}
.payment-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  padding-bottom: 20px;
}
.success-icon {
  width: 50px;
  height: 50px;
  margin-top: 60px;
}
.payment-desc-1 {
  box-sizing: border-box;
  margin: 15px 0 75px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: var(--text-color);
}
`,p=e=>{let t=(0,n.sa)(),{t:a}=(0,d.$G)(),[p,m]=(0,l.useState)(""),{setWrongPassword:u}=(0,n.ta)(),{loading:g,run:h}=(0,i.Z)(s.H_,{manual:!0,onSuccess:(e,a)=>{t("/account/set-password",{state:{oldPassword:p},replace:!0})},onError:e=>{(m(""),(null==e?void 0:e.error_code)===s.MS.WrongPaymentPassword)?u({visible:!0}):(null==e?void 0:e.error_code)===s.MS.SecurityAccountFrozen&&u({visible:!0,accountFrozen:{seconds:e.extra.seconds||0}})}});return l.createElement(l.Fragment,null,l.createElement("style",null,c),l.createElement("div",{className:"payment-password-container"},l.createElement(o.a,{displayBackBtn:!0}),l.createElement("div",{className:"wrapper"},l.createElement("div",{className:"page-title"},a("account.change_payment_password")),l.createElement("p",{className:"payment-desc-1"},a("account.change_enter_payment")),l.createElement(r.a,{onChange:e=>{m(e),6===e.length&&h(e)},value:p,keyboardInvisible:g}))))}},42768:function(e,t,a){a.d(t,{a:function(){return u}});var r=a(17566),o=a(81163),n=a(97608),i=a(65245),l=a(67294),d=a(42763),s={};(0,n.b)(s,{default:()=>c});var c,p=(0,n.a)(()=>{c="data:image/png;base64,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"}),m=`.particle-keywords-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  max-width: 96%;
  margin: 0 auto;
}
.input-item {
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding-bottom: 30px;
  margin: 0 10px;
  border-bottom: 2px solid var(--text-color);
  line-height: 30px;
  text-align: center;
  color: var(--text-color);
  user-select: none;
}
.particle-keywords-map {
  position: absolute;
  z-index: 555;
  bottom: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 245px;
  padding-bottom: 32px;
  border-top: var(--keyword-border-width) solid var(--keyword-border-color);
  background-color: var(--keyword-item-bg);
}
.particle-keywords-map .footer-box {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 32px;
  margin: 0;
  background-color: var(--keyword-all-bg);
}
.particle-keywords-map.loading {
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100 * var(--vw));
  border-top: none;
  font-size: 16px;
  color: var(--secondary-text-color);
  background: transparent;
}
.particle-keywords-map.loading img {
  width: 38px;
  height: 38px;
  margin: 0 0 22px;
  margin-top: 40px;
}
.particle-keywords-map.loading .loading-icon {
  margin-top: 15px;
  font-size: 20px;
}
.particle-keywords-map [data-value='0'],
.particle-keywords-map [data-value='2'],
.particle-keywords-map [data-value='5'],
.particle-keywords-map [data-value='8'] {
  border-right: var(--keyword-border-width) solid var(--keyword-border-color);
  border-bottom: var(--keyword-border-width) solid var(--keyword-border-color);
  border-left: var(--keyword-border-width) solid var(--keyword-border-color);
}
.particle-keywords-map [data-value='1'],
.particle-keywords-map [data-value='3'],
.particle-keywords-map [data-value='4'],
.particle-keywords-map [data-value='6'],
.particle-keywords-map [data-value='7'],
.particle-keywords-map [data-value='9'] {
  border-bottom: var(--keyword-border-width) solid var(--keyword-border-color);
}
.particle-keywords-map > .span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 53px;
  margin-left: 0.001%;
  font-weight: 500;
  font-size: 22px;
  line-height: 19px;
  color: var(--text-color);
  background-color: var(--keyword-item-bg);
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
}
.particle-keywords-map > .span[data-value=''] {
  background: var(--keyword-all-bg);
}
.particle-keywords-map > .span[data-value='']:active {
  opacity: 1;
}
.particle-keywords-map > .span:active {
  background: var(--keyword-item-active-bg);
}
.particle-keywords-map .del {
  background: var(--keyword-all-bg);
}
.particle-keywords-map .del .img {
  font-size: 20px;
}
`,u=({onChange:e,value:t,keyboardInvisible:a})=>{let{t:c}=(0,d.$G)(),[u,g]=(0,l.useState)(["","","","","",""]),[h,w]=(0,l.useState)(null!=t?t:""),[x,b]=(0,l.useState)([1,2,3,4,5,6,7,8,9,"",0]),y=e=>{h.length<6&&w(h+""+e)};return(0,l.useEffect)(()=>{null==e||e(h)},[h]),(0,l.useEffect)(()=>{w(null!=t?t:"")},[t]),a?l.createElement(l.Fragment,null,l.createElement("style",null,m),l.createElement("div",{className:"particle-keywords-map loading"},l.createElement("img",{src:(p(),(0,n.c)(s)).default,alt:""}),l.createElement("p",null,c("account.payment_checking")),l.createElement(i.Z,{className:"loading-icon"}))):l.createElement(l.Fragment,null,l.createElement("style",null,m),l.createElement("div",{className:"particle-keywords-box"},u.map((e,t)=>l.createElement("span",{key:e+t,className:`input-item ${!e||"active"}`},h[t]?"●":""))),l.createElement("div",{className:"particle-keywords-map"},x.map(e=>l.createElement("span",{className:"span",key:e,"data-value":e,onClick:()=>{""!==e&&y(e+"")}},e)),l.createElement("span",{className:"span del",onClick:()=>{h.length>0&&w(h.slice(0,h.length-1))}},l.createElement(r.b,{className:"img",name:"backspace"})),l.createElement(o.a,null)))}},33472:function(e,t,a){a.d(t,{a:function(){return l}});var r=a(17566),o=a(18763),n=a(67294),i=`.p-auth-header {
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
`,l=e=>{var t,a;let{children:l,leftContent:d,rightContent:s,onBack:c}=e,{displayBackBtn:p=!1}=e,m=(0,o.sa)(),{customRouter:u}=(0,o.ra)();return c&&(p=!0),(d||(null!=(a=null==(t=null==u?void 0:u.history)?void 0:t.length)?a:0)<=1)&&(p=!1),n.createElement("div",{className:"width-100"},n.createElement("style",null,i),n.createElement("div",{className:"p-auth-header"},n.createElement("div",{className:"left"},n.createElement(n.Fragment,null,p&&n.createElement(r.b,{className:"header-back-btn",name:"circle_back",onClick:()=>{c?c():m(-1)}}),d)),n.createElement("div",{className:"middle"},l),n.createElement("div",{className:"right"},s)))}}}]);