"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1705],{57380:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(1413),r=t(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},o=t(44192),l=r.forwardRef(function(e,a){return r.createElement(o.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:a,icon:i}))})},41188:function(e,a,t){var n=t(67294),r=t(2714),i=t(23326);a.Z=function(e,a,t){void 0===t&&(t={});var o=(0,r.Z)(e),l=(0,n.useRef)(null),c=(0,n.useCallback)(function(){l.current&&clearInterval(l.current)},[]);return(0,n.useEffect)(function(){if((0,i.hj)(a)&&!(a<0))return t.immediate&&o(),l.current=setInterval(o,a),c},[a,t.immediate]),c}},41705:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});var n=t(72355),r=t(52455),i=t(63728),o=t(17566),l=t(81163),c=t(18763),s=t(57380),u=t(68376),m=t(98373),d=t(56469),p=t(21017),g=t(67294),h=t(42763),b=t(41188),v=t(23493),f=t(80129),x=`.set-email-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  color: var(--text-color);
}
.set-email-container .footer-box {
  position: absolute;
  bottom: 10px;
  margin: 0;
}
@media (max-height: 500px) {
  .set-email-container .footer-box {
    display: none;
  }
}
.set-email-container .display-none {
  display: none;
}
.set-email-container .error-tip {
  width: 90%;
  height: 0;
  padding-left: 10px;
  margin-top: 6px;
  margin-bottom: 0;
  text-align: left;
  color: red;
  opacity: 0;
  transition: all 0.3s;
}
.set-email-container .error-tip.show {
  height: 30px;
  opacity: 1;
}
.set-email-container .set-email-title {
  margin-top: 60px;
  font-size: 22px;
  color: var(--text-color);
}
.set-email-container .patment-tips1 {
  width: 80vw;
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: var(--text-color);
}
@media (min-width: 600px) {
  .set-email-container .patment-tips1 {
    width: calc(80 * var(--vw));
  }
}
.set-email-container .set-email-buttons {
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
.set-email-container .success-icon {
  width: 50px;
  height: 50px;
  margin-top: 60px;
}
.set-email-container .set-email-desc-1 {
  box-sizing: border-box;
  padding: 0 18px;
  margin: 15px 0 25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: var(--text-color);
}
.set-email-container .account-input-box {
  position: relative;
  z-index: 3;
  width: 90%;
  height: 47px;
  margin-top: 28px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--primary-btn-border-radius);
  line-height: 47px;
  color: var(--text-color);
  background-color: var(--input-background-color);
  opacity: 1;
}
.set-email-container .account-input-box .account-select-country {
  position: absolute;
  z-index: 2;
  top: 54px;
  left: 2%;
  width: 96%;
  height: 210px;
  border-radius: var(--card-border-radius) !important;
  overflow-y: auto;
  background-color: var(--input-background-color);
}
.set-email-container .account-input-box .account-select-country::-webkit-scrollbar {
  display: none;
  width: 0;
}
.set-email-container .account-input-box .account-select-country .account-select-country-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 47px;
  padding: 5px 0 5px 13px;
  margin: 0;
  border-bottom: 1px solid var(--card-unclickable-background-color);
  font-size: 14px;
  color: var(--text-color);
  cursor: pointer;
}
.set-email-container .account-input-box .account-select-country .account-select-country-item:hover {
  background-color: var(--card-unclickable-background-color);
}
.set-email-container .account-input-box .account-select-country .account-select-country-item div {
  display: flex;
  margin-right: 13px;
}
.set-email-container .account-input-box .account-select-country .account-select-country-item div .country-name {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.set-email-container .account-input-box input[type='number']::-webkit-inner-spin-button,
.set-email-container .account-input-box input[type='number']::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}
.set-email-container .account-input-box.phone {
  display: flex;
  align-items: center;
  border: 1px solid var(--input-background-color);
  border-radius: var(--primary-btn-border-radius);
}
.set-email-container .account-input-box.phone[data-focus='true'] {
  border: 1px solid var(--accent-color) !important;
}
.set-email-container .account-input-box.phone input {
  border: none !important;
}
.set-email-container .account-input-box.phone input:focus {
  border: none !important;
}
.set-email-container .account-input-box .account-select-opt {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;
  padding-left: 8px;
  cursor: pointer;
}
.set-email-container .account-input-box .account-select-opt .account-select-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: 15px;
}
.set-email-container .account-input-box .account-select-opt .down-more {
  margin-left: 8px;
  font-size: 10px;
}
.set-email-container .account-input-box span {
  flex-shrink: 0;
  margin: 0;
  font-size: 15px;
}
.set-email-container .account-input-box input {
  flex-shrink: 1;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  outline: none;
  font-weight: 400;
  font-size: 15px;
  color: var(--text-color);
  background-color: transparent;
}
.set-email-container .send-code-btn {
  margin-bottom: 0 !important;
}
.set-email-container .account-submit-btn {
  width: 90%;
  height: 47px;
  padding: 0;
  margin-top: 38px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  line-height: 47px;
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.set-email-container .account-submit-btn.bottom-margin {
  margin-bottom: 100px;
}
.set-email-container .account-submit-btn:hover {
  border: none;
  color: var(--primary-btn-color) !important;
  background: var(--primary-btn-background-color) !important;
  opacity: var(--hover-opacity);
}
.set-email-container .account-switch-item {
  margin-top: 40px;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: var(--accent-color);
  cursor: pointer;
}
.set-email-container .set-email-desc-2 {
  min-width: 116px;
  height: 23px;
  padding: 0 15px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 400;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  color: var(--secondary-text-color);
  background: var(--tag-background-color);
  opacity: 1;
}
.set-email-container .code-error {
  position: absolute;
  left: calc((100vw - 316px) / 2);
  margin-top: 220px;
  font-weight: 400;
  font-size: 12px;
  color: var(--error-color);
}
@media (min-width: 600px) {
  .set-email-container .code-error {
    left: calc((var(--vw) * 100 - 316px) / 2);
  }
}
.set-email-container .back {
  display: flex;
  align-items: center;
  height: 19px;
  margin-top: 90px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--accent-color);
  opacity: 1;
  cursor: pointer;
  gap: 8px;
}
.set-email-container .back svg {
  position: relative;
  top: 0;
  color: var(--accent-color);
}
.set-email-container .send-again {
  margin-top: 20px;
  border: none !important;
  outline: none !important;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--text-color);
  background-color: transparent;
  box-shadow: none;
}
.set-email-container .send-again:hover {
  color: var(--text-color);
  background-color: transparent !important;
}
.set-email-container .send-again:disabled {
  opacity: 0.5;
}
`,y=e=>{let{bindAccount:a,backToInputAccount:t,redirectUrl:n="",verifyToken:s=""}=e,p=(0,i.a)(),{t:y}=(0,h.$G)(),{themeType:k,language:w}=(0,c.H)(),C=(0,c.sa)(),[E,S]=(0,g.useState)(""),[N,z]=(0,g.useState)(1e3),[M,_]=(0,g.useState)(60),[T,B]=(0,g.useState)(),I=(0,g.useRef)(null),{authCoreModal:A}=(0,c.qa)();(0,b.Z)(()=>{if(M>0){let e=M-1;_(e),0===e&&z(void 0)}},N);let{loading:L,run:G}=(0,m.Z)(u.F8,{manual:!0,onSuccess:e=>{(0,u.pq)(),n?C(n.split("?")[0],{replace:!0,back:!0,state:{...f.parse(n.split("?")[1]),verifyToken:null==e?void 0:e.token,account:a}}):e.has_set_payment_password?C("/account/security",{replace:!0}):C("/account/set-password")},onError:e=>{(null==e?void 0:e.error_code)===u.MS.InvalidCode?B(y("login.invalid_code")):(null==e?void 0:e.error_code)===u.MS.ResendCode&&B(y("login.please_send_again"))}}),{loading:q,run:R}=(0,m.Z)(u.Y7,{manual:!0,onSuccess:(e,a)=>{N||(_(60),z(1e3))},onError:e=>{_(0),z(void 0)}}),j=e=>{let t;t=a.includes("@")?{email:a,code:e||E}:{phone:a,code:e||E},s&&(t.token=s),G(t)},Z=(0,g.useCallback)(v(e=>{j(e)},1e3,{leading:!0,trailing:!1}),[]);return(0,g.useEffect)(()=>{var e;let a=document.getElementsByClassName("react-input-code"),t=e=>e.preventDefault();return null==(e=a[0])||e.addEventListener("contextmenu",t),()=>{var e;null==(e=a[0])||e.removeEventListener("contextmenu",t)}},[]),g.createElement("div",{className:"set-email-container"},g.createElement("style",null,x),g.createElement(o.b,{className:"icon-navigation-back",name:"circle_back",onClick:t}),g.createElement("h2",{className:"set-email-title"},y("account.enter_code")),g.createElement("p",{className:"set-email-desc-2",style:{margin:20}},a),g.createElement("div",{onClick:()=>{var e;null==(e=document.getElementsByClassName("input-code-item")[Math.min(E.length,5)])||e.focus()}},g.createElement(r.a,{containerClassName:"react-input-code",inputClassName:"input-code-item",allowedCharacters:"numeric",length:6,ref:I,placeholder:" ",onChange:e=>{S(e),B(""),6===e.length&&Z(e)}})),T&&g.createElement("div",{className:"code-error"},T),g.createElement(d.Z,{disabled:6!==E.length,className:"account-submit-btn",loading:L,onClick:()=>j()},y("common.confirm")),g.createElement(d.Z,{className:"send-again",onClick:()=>{B(""),a.includes("@")?R({email:a}):(0,u.$V)({theme:k,language:w,getContainer:()=>A.rootBody}).then(e=>{R({phone:a,cf_turnstile_response:e})}).catch(e=>{p.error(y("error.server_20112"))})},disabled:M>0||q},M>0?`${y("login.send_again")} (${M}s)`:y("login.send_again")),g.createElement("div",{className:"back",onClick:t},g.createElement(o.b,{className:"arrow1-icon",name:"arrow1_icon"}),g.createElement("span",null,y("login.back"))),g.createElement(l.a,null))},k=e=>{let a=(0,c.sa)(),{t:t}=(0,h.$G)(),r=null==e?void 0:e.redirectUrl,b=null==e?void 0:e.verifyToken,v=(0,i.a)(),f=(0,g.useRef)(),[k,w]=(0,g.useState)(""),[C,E]=(0,g.useState)(["United States","us","1"]),[S,N]=(0,g.useState)(!1),z=(0,g.useRef)(null),[M,_]=(0,g.useState)(""),{themeType:T,language:B}=(0,c.H)(),{authCoreModal:I}=(0,c.qa)(),[A,L]=(0,g.useState)("email");(0,g.useEffect)(()=>{if("phone"===A||(null==e?void 0:e.showSwitch)){let e=(0,n.b)();e&&E(e)}},[A,null==e?void 0:e.showSwitch]);let[G,q]=(0,g.useState)(!1);(0,g.useEffect)(()=>{if(G)return document.addEventListener("click",R,!0),()=>{document.removeEventListener("click",R,!0)}},[G]);let R=e=>{setTimeout(()=>{var a;null!=(a=f.current)&&a.contains(e.target)||q(!1)})};(0,g.useEffect)(()=>{let a=null==e?void 0:e.accountType;a&&L(a)},[e]);let{loading:j,run:Z}=(0,m.Z)(u.Y7,{manual:!0,onSuccess:(e,a)=>{N(e)},onError:e=>{let a=(null==e?void 0:e.error_code)||0;(50003===a||50004===a)&&(w(""),z.current.value="")}}),P=()=>{let e=z.current.value;if("email"===A){if(!e)return _(t("account.input_vaild_email"));if(!c.u.test(e))return _(t("login.email_format_error"))}else{let a=C[1].toUpperCase();if(!e&&"0"!==e)return _(t("account.input_vaild_mobile"));if(!(0,c.w)(e,a))return _(t("login.phone_format_error"));e=`+${C[2]}${e}`}w(e),e.includes("@")?Z({email:e}):(0,u.$V)({theme:T,language:B,getContainer:()=>I.rootBody}).then(a=>{Z({phone:e,cf_turnstile_response:a})}).catch(e=>{v.error(t("error.server_20112"))})};return(0,g.useEffect)(()=>{setTimeout(()=>{var e;null==(e=z.current)||e.focus()})},[]),S?g.createElement(y,{bindAccount:k,redirectUrl:r||"",verifyToken:b,backToInputAccount:()=>{N(!1)}}):g.createElement("div",{className:"set-email-container"},g.createElement("style",null,x),g.createElement(o.b,{className:"icon-navigation-back",name:"circle_back",onClick:()=>a(-1)}),g.createElement("h2",{className:"set-email-title"},t("email"===A?"account.set_your_email":"account.set_your_mobile")),g.createElement("p",{className:"set-email-desc-1"},t("email"===A?"account.set_your_email_tip":"account.set_your_mobile_tip")),"email"===A?g.createElement(g.Fragment,null,g.createElement("div",{className:"account-input-box"},g.createElement("input",{onInput:()=>_(""),className:"input_email",type:"email",placeholder:t("account.place_email_address"),ref:z,defaultValue:k,onKeyDown:e=>{"Enter"===e.key&&P()}}))):g.createElement(g.Fragment,null,g.createElement("div",{className:"account-input-box phone",ref:f},G&&g.createElement("div",{className:"account-select-country"},n.a.map((e,a)=>g.createElement("p",{key:a,className:"account-select-country-item",onClick:()=>{E(e),q(!1)}},g.createElement("div",{className:"country-box"},g.createElement("div",{className:"country-flag"},(0,p.Z)(`${e[1]}`)),g.createElement("span",{className:"country-name"},e[0])),g.createElement("div",{className:"country-code"},"+"+e[2])))),g.createElement("div",{className:"account-select-opt",onClick:()=>q(!G)},g.createElement("div",{className:"account-select-icon"},(0,p.Z)(`${C[1]}`)),g.createElement(s.Z,{className:"down-more"})),g.createElement("span",null,"+",C[2]),g.createElement("input",{onInput:()=>{var e;_(""),z.current.value=(null==(e=z.current.value.match(/^\d+/))?void 0:e[0])||""},type:"text",className:"no-number dd",placeholder:t("account.mobile"),ref:z,onWheel:e=>e.target.blur(),defaultValue:k.replace(`+${C[2]}`,""),onKeyDown:e=>{"Enter"===e.key&&P()},onFocus:()=>{var e;null==(e=document.querySelector(".account-input-box.phone"))||e.setAttribute("data-focus","true")},onBlur:()=>{var e;null==(e=document.querySelector(".account-input-box.phone"))||e.setAttribute("data-focus","false")}}))),g.createElement("p",{className:`error-tip ${M?"show":""}`},M),g.createElement(d.Z,{className:"send-code-btn account-submit-btn bottom-margin",loading:j,onClick:P},t("login.get_captcha")),(null==e?void 0:e.showSwitch)&&g.createElement("div",{className:"account-switch-item",onClick:()=>{L("email"===A?"phone":"email"),w("")}},t("email"===A?"account.switch_text_mobile":"account.switch_text_email")),g.createElement(l.a,null))}},52455:function(e,a,t){t.d(a,{a:function(){return l}});var n=t(18763),r=t(67294),i=["alpha","numeric","alphanumeric"],o={alpha:{type:"text",inputMode:"text",pattern:"[a-zA-Z]{1}"},alphanumeric:{type:"text",inputMode:"text",pattern:"[a-zA-Z0-9]{1}"},numeric:{type:"tel",inputMode:"numeric",pattern:"[0-9]{1}",min:"0",max:"9"}},l=(0,r.forwardRef)(({allowedCharacters:e="alphanumeric",ariaLabel:a,autoFocus:t=!0,containerClassName:l,disabled:c,inputClassName:s,isPassword:u=!1,length:m=6,placeholder:d,onChange:p,code:g=""},h)=>{if(isNaN(m)||m<1)throw Error("Length should be a number and greater than 0");if(!i.some(a=>a===e))throw Error("Invalid value for allowedCharacters. Use alpha, numeric, or alphanumeric");let b=(0,r.useRef)([]),v=o[e];(0,r.useImperativeHandle)(h,()=>({focus:()=>{b.current&&b.current[0].focus()},clear:()=>{if(b.current){for(let e=0;e<b.current.length;e++)b.current[e].value="";b.current[0].focus()}x()}})),(0,r.useEffect)(()=>{t&&(0,n.y)()&&b.current[0].focus()},[]),(0,r.useEffect)(()=>{if(g){for(let e=0;e<b.current.length;e++)b.current[e].value="";for(let e=0;e<g.length;e++)b.current[e].value=g[e];x()}},[g]);let f=b.current.map(e=>e.value).join("")||"",x=()=>{let e=b.current.map(e=>e.value).join("");f!==e&&(p&&p(e),f=e)},y=e=>{var a;let{target:{value:t,nextElementSibling:n}}=e;if(1==t.length)t.match(v.pattern)?null!==n&&n.focus():e.target.value="";else if(t.length>1){let n=Number(e.target.getAttribute("data-index"))||0;for(let e=0;e<t.length;e++){let r=t.charAt(e);r.match(v.pattern)&&(null==(a=b.current)?void 0:a[n])&&(b.current[n].value=r,null!==b.current[n].nextElementSibling&&(b.current[n].nextElementSibling.focus(),n++))}}setTimeout(()=>{x()})},k=e=>{let{key:a}=e,t=e.target;if("Backspace"===a){if(""===t.value){if(null!==t.previousElementSibling){let a=t.previousElementSibling;a.value="",a.focus(),e.preventDefault()}}else t.value="";setTimeout(()=>{x()})}},w=e=>{e.target.select()},C=e=>{var a;let t=null!=(a=e.clipboardData.getData("Text"))?a:"";t=t.replace(/\s/g,"").substring(0,6);let n=0;for(let e=0;e<t.length;e++){let a=t.charAt(e),r=b.current[n].value;a.match(v.pattern)&&(r||(b.current[n].value=a,null!==b.current[n].nextElementSibling&&(b.current[n].nextElementSibling.focus(),n++)))}x(),e.preventDefault()};return r.createElement("div",{className:l},Array(6).fill(0).map((e,t)=>r.createElement("input",{key:t,"data-index":t,onChange:y,onKeyDown:k,onFocus:w,onPaste:C,...v,type:u?"password":v.type,ref:e=>{b.current[t]=e},className:s,autoComplete:0===t?"one-time-code":"off","aria-label":a?`${a}. Character ${t+1}.`:`Character ${t+1}.`,disabled:c,placeholder:d})),r.createElement("div",{className:"input-code-mask",onClick:e=>{e.preventDefault(),e.stopPropagation();for(let e=b.current.length-1;e>=0;e--)if(e>0&&!b.current[e].value&&b.current[e-1].value||0===e&&!b.current[e].value||e==b.current.length-1&&b.current[e].value){b.current[e].focus(),b.current[e].setSelectionRange(b.current[e].value.length,b.current[e].value.length);break}}}))})},63728:function(e,a,t){t.d(a,{a:function(){return i}});var n=t(18763),r=t(67294),i=()=>{let{authCoreModal:e}=(0,n.qa)(),a=(0,r.useMemo)(()=>e.rootModalContainer,[e]),t=(0,r.useCallback)((e,t="")=>{var n;let r=document.createElement("div");r.className="ant-message-notice";let i=document.createElement("div");i.className="ant-message-notice-content";let o=document.createElement("div");o.className="ant-message-custom-content";let l=document.createElement("span");l.setAttribute("role","img"),l.setAttribute("aria-label","check-circle"),l.className="anticon anticon-check-circle";let c=document.createElement("svg");"success"===e?(o.className+=" ant-message-success",c.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>'):"error"===e?(o.className+=" ant-message-error",c.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>'):"info"===e?(o.className+=" ant-message-info",c.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>'):"warning"===e&&(o.className+=" ant-message-warning",c.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>');let s=document.createElement("span");return s.textContent=t,l.appendChild(c),o.appendChild(l),o.appendChild(s),i.appendChild(o),r.appendChild(i),null==(n=null==a?void 0:a.querySelector(".ant-message"))||n.appendChild(r),r},[a]),i=(0,r.useCallback)(e=>{let n=t("error",e);setTimeout(()=>{var e;null==(e=null==a?void 0:a.querySelector(".ant-message"))||e.removeChild(n)},2e3)},[t]),o=(0,r.useCallback)(e=>{let n=t("info",e);setTimeout(()=>{var e;null==(e=null==a?void 0:a.querySelector(".ant-message"))||e.removeChild(n)},2e3)},[t]),l=(0,r.useCallback)(e=>{let n=t("success",e);setTimeout(()=>{var e;null==(e=null==a?void 0:a.querySelector(".ant-message"))||e.removeChild(n)},2e3)},[t]),c=(0,r.useCallback)(e=>{let n=t("warning",e);setTimeout(()=>{var e;null==(e=null==a?void 0:a.querySelector(".ant-message"))||e.removeChild(n)},2e3)},[t]);return(0,r.useEffect)(()=>{if(a){if(a.querySelector(".ant-message"))return;let e=document.createElement("div");e.className="ant-message",a.appendChild(e)}},[a]),{error:i,info:o,success:l,warning:c}}},72355:function(e,a,t){t.d(a,{a:function(){return n},b:function(){return r}});var n=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqip\xebri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61"],["Austria (\xd6sterreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (Belgi\xeb)","be","32"],["Belize","bz","501"],["Benin (B\xe9nin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1"],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599"],["Cayman Islands","ky","1345"],["Central African Republic","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61"],["Cocos (Keeling) Islands","cc","61"],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC)","cd","243"],["Congo (Republic)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["C\xf4te d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Cura\xe7ao","cw","599"],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česk\xe1 republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic","do","1"],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (F\xf8royar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358"],["France","fr","33"],["French Guiana","gf","594"],["French Polynesia","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590"],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44"],["Guinea (Guin\xe9e)","gn","224"],["Guinea-Bissau (Guin\xe9 Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarorsz\xe1g)","hu","36"],["Iceland (\xcdsland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44"],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39"],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44"],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7"],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262"],["Mexico (M\xe9xico)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212"],["Mozambique (Mo\xe7ambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibi\xeb)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Cal\xe9donie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47"],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panam\xe1)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Per\xfa)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1"],["Qatar (‫قطر‬‎)","qa","974"],["R\xe9union (La R\xe9union)","re","262"],["Romania (Rom\xe2nia)","ro","40"],["Russia (Россия)","ru","7"],["Rwanda","rw","250"],["Saint Barth\xe9lemy (Saint-Barth\xe9lemy)","bl","590"],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin","mf","590"],["Saint Pierre and Miquelon","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["S\xe3o Tom\xe9 and Pr\xedncipe","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (S\xe9n\xe9gal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (Espa\xf1a)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47"],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (T\xfcrkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates","ae","971"],["United Kingdom","gb","44"],["United States","us","1"],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Citt\xe0 del Vaticano)","va","39"],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212"],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["\xc5land Islands","ax","358"]];function r(){let e=(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).split("-"),a=e.length>1?e[1]:e[0],t;return a&&a.length>0&&(t=n.find(e=>e[1].toUpperCase()===a)),t}},21017:function(e,a,t){function n(e){return r(e[0])+r(e[1])}function r(e){return String.fromCodePoint(127397+e.toUpperCase().charCodeAt(0))}t.d(a,{Z:function(){return n}})}}]);