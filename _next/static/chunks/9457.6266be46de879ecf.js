"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9457],{41188:function(e,t,n){var a=n(67294),o=n(2714),r=n(23326);t.Z=function(e,t,n){void 0===n&&(n={});var i=(0,o.Z)(e),l=(0,a.useRef)(null),c=(0,a.useCallback)(function(){l.current&&clearInterval(l.current)},[]);return(0,a.useEffect)(function(){if((0,r.hj)(t)&&!(t<0))return n.immediate&&i(),l.current=setInterval(i,t),c},[t,n.immediate]),c}},57741:function(e,t,n){var a=n(97582),o=n(23493),r=n.n(o),i=n(67294),l=n(39200),c=n(84966),s=n(23326),u=n(51046);t.Z=function(e,t){u.Z&&!(0,s.mf)(e)&&console.error("useThrottleFn expected parameter is a function, got ".concat(typeof e));var n,o=(0,l.Z)(e),d=null!==(n=null==t?void 0:t.wait)&&void 0!==n?n:1e3,m=(0,i.useMemo)(function(){return r()(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o.current.apply(o,(0,a.__spreadArray)([],(0,a.__read)(e),!1))},d,t)},[]);return(0,c.Z)(function(){m.cancel()}),{run:m,cancel:m.cancel,flush:m.flush}}},89457:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(52455),o=n(65597),r=n(63728),i=n(17566),l=n(81163),c=n(18763),s=n(68376),u=n(41188),d=n(98373),m=n(54117),p=n(56469),g=n(45772),h=n(23493),v=n(67294),f=n(42763),x=`.set-viery-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  color: var(--text-color);
}
.set-viery-container .footer-box {
  position: absolute;
  bottom: 10px;
  margin: 0;
}
@media only screen and (max-height: 520px) {
  .set-viery-container .footer-box {
    position: unset;
    bottom: 0;
    margin-top: 20px;
    margin-bottom: 10px;
  }
}
.set-viery-container .display-none {
  display: none;
}
.set-viery-container .error-tip {
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
.set-viery-container .error-tip.show {
  height: 30px;
  opacity: 1;
}
.set-viery-container .set-email-title {
  margin-top: 60px;
  font-size: 22px;
  color: var(--text-color);
}
.set-viery-container .patment-tips1 {
  width: 80vw;
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: var(--text-color);
}
@media (min-width: 600px) {
  .set-viery-container .patment-tips1 {
    width: calc(80 * var(--vw));
  }
}
.set-viery-container .set-email-buttons {
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
.set-viery-container .success-icon {
  width: 50px;
  height: 50px;
  margin-top: 60px;
}
.set-viery-container .set-email-desc-1 {
  box-sizing: border-box;
  padding: 0 18px;
  margin: 15px 0 25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: var(--text-color);
}
.set-viery-container .account-submit-btn {
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
.set-viery-container .account-submit-btn:hover {
  border: none;
  color: var(--primary-btn-color) !important;
  background: var(--primary-btn-background-color) !important;
  opacity: var(--hover-opacity);
}
.set-viery-container .account-switch-item {
  margin-top: 40px;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: var(--accent-color);
  cursor: pointer;
}
.set-viery-container .set-email-desc-2 {
  min-width: 116px;
  height: 23px;
  padding: 0 15px;
  margin: 20px 0 28px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 400;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  color: var(--secondary-text-color);
  background: var(--tag-background-color);
  opacity: 1;
}
.set-viery-container .back {
  display: flex;
  align-items: center;
  margin-top: 90px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--accent-color);
  opacity: 1;
  cursor: pointer;
  gap: 8px;
}
.set-viery-container .back svg {
  position: relative;
  top: -1px;
  color: var(--accent-color);
}
.set-viery-container .code-error {
  position: absolute;
  left: calc((100vw - 316px) / 2);
  margin-top: 224px;
  font-weight: 400;
  font-size: 12px;
  color: var(--error-color);
}
@media (min-width: 600px) {
  .set-viery-container .code-error {
    left: calc((var(--vw) * 100 - 316px) / 2);
  }
}
.set-viery-container .send-again {
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
.set-viery-container .send-again:hover {
  color: var(--text-color) !important;
  background-color: transparent !important;
}
.set-viery-container .send-again:disabled {
  opacity: 0.5;
}
`,b=e=>{let t=(0,c.sa)(),{t:n}=(0,f.$G)(),b=(0,r.a)(),{customRouter:y}=(0,c.ra)(),{themeType:_,language:w}=(0,c.H)(),{account:C,pageType:E,authType:k,verifyToken:N,redirectUrl:S,password:M}=e,[z,T]=(0,v.useState)(""),[Z,B]=(0,v.useState)(1e3),[$,L]=(0,v.useState)(60),[A,G]=(0,v.useState)(),{authCoreModal:I}=(0,c.qa)(),{userInfo:q}=(0,c.ta)(),R=(0,v.useRef)(null);(0,u.Z)(()=>{if($>0){let e=$-1;L(e),0===e&&B(void 0)}},Z);let{run:j}=(0,d.Z)(async e=>"bind_login_account"===E?(e={[k]:C,cf_turnstile_response:e.cf_turnstile_response},(0,s.Y7)(e).then(e=>e)):(0,s.V)(e.verifyCodeMethod),{manual:!0,onSuccess:(e,t)=>{Z||(L(60),B(1e3))},onError:e=>{L(0),B(void 0)}}),{loading:O,runAsync:D}=(0,d.Z)(s.v0,{manual:!0,onError:e=>{(null==e?void 0:e.error_code)===s.MS.InvalidCode?G(n("login.invalid_code")):(null==e?void 0:e.error_code)===s.MS.ResendCode?G(n("login.please_send_again")):e.message&&b.error(e.message)}}),{loading:H,runAsync:P}=(0,d.Z)(async e=>(0,s.pW)(e).then(async()=>{await (0,s.pq)()}),{manual:!0,onSuccess:e=>{b.success(n("new.bind_login_account_success"))},onError:e=>{var a;let o=e.message;if((null==e?void 0:e.error_code)===s.MS.InvalidCode){G(n("login.invalid_code"));return}if((null==e?void 0:e.error_code)===s.MS.ResendCode){G(n("login.please_send_again"));return}o=20109===e.error_code?k==s.Gr.email?n("error.server_email_20109"):n("error.server_phone_20109"):(null==(a=null==e?void 0:e.extra)?void 0:a[0])||e.message,m.Z.error({title:o,wrapClassName:"auth-core-modal-error",getContainer:()=>I.rootBody,onOk:()=>{var n;null==(n=R.current)||n.clear(),20109===e.error_code&&t(-1)}})}}),{loading:F,run:V}=(0,d.Z)(s.Bh,{manual:!0,onError:e=>{(null==e?void 0:e.error_code)===s.MS.InvalidCode?G(n("login.invalid_code")):(null==e?void 0:e.error_code)===s.MS.ResendCode&&G(n("login.please_send_again"))},onSuccess:(e,n)=>{(0,s.pq)();let a=["account/security","solana/sign","evm-chain/sign"],o=a.map(e=>{var t;return null==(t=y.history)?void 0:t.findIndex(t=>t.path===e)});t(a[o.indexOf(Math.max(...o))],{replace:!0,back:!0})}}),{loading:U,run:J}=(0,d.Z)(()=>new Promise((e,t)=>{}),{manual:!0,onSuccess:e=>{}}),K=(0,v.useMemo)(()=>null!=C&&C.includes("@")?s.Gr.email:s.Gr.phone,[C]);(0,v.useEffect)(()=>{Q()},[C]);let Q=()=>{G(""),"bind_login_account"===E&&k===s.Gr.phone?(0,s.$V)({theme:_,language:w,getContainer:()=>I.rootBody}).then(e=>{j({verify_code_method:K,cf_turnstile_response:e})}).catch(()=>{b.error(n("error.server_20112")),t(-1)}):j({verifyCodeMethod:K})},W=(0,v.useCallback)(h(e=>{X(e)},1e3,{leading:!0,trailing:!1}),[]),Y=e=>{V({password:M,verifyCodeMethod:K,code:e||z})},X=(e="")=>{if(A)return;let a={code:e};"reset_payment_password"===E?Y(e):"verify_security_account_set_security_account"==E?D({verifyCodeMethod:K,code:e}).then(e=>{t("/account/bind",{replace:!0,state:{accountType:k,verifyToken:e,redirectUrl:S}})}):"verify_security_account_bind_login_account"===E?D({verifyCodeMethod:K,code:e}).then(e=>{let{id:a,value:r}=(0,o.a)({userInfo:q,t:n}).find(e=>e.type===k)||{};if(k===s.Gr.phone||k===s.Gr.email||r||a)t("/login-account/bind",{state:{authType:k,verifyToken:e},replace:!0});else{let t=g.encode(JSON.stringify({verifyToken:e,purpose:"bindLoginAccount"}));(0,s.fl)({authType:k,appState:t,prompt:"select_account"}).catch(e=>{b.error((null==e?void 0:e.message)||e)})}}):"bind_login_account"===E&&P(a={...a,security_account_verify_token:N,[k]:C}).then(e=>{t(-2)})};return(0,v.useEffect)(()=>{var e;let t=document.getElementsByClassName("react-input-code"),n=e=>e.preventDefault();return null==(e=t[0])||e.addEventListener("contextmenu",n),()=>{var e;null==(e=t[0])||e.removeEventListener("contextmenu",n)}},[]),v.createElement("div",{className:"set-viery-container"},v.createElement("style",null,x),v.createElement("div",{className:"account-header"},v.createElement(i.b,{className:"icon-navigation-back",name:"circle_back",onClick:()=>{t(-1)}})),v.createElement("h2",{className:"set-email-title"},n("account.enter_code")),v.createElement("p",{className:"set-email-desc-2"},C.includes("@")?(0,c.Q)(C):(0,c.R)(C)),v.createElement("div",{onClick:()=>{var e;null==(e=document.getElementsByClassName("input-code-item")[Math.min(z.length,5)])||e.focus()}},v.createElement(a.a,{containerClassName:"react-input-code",inputClassName:"input-code-item",allowedCharacters:"numeric",length:6,ref:R,placeholder:" ",onChange:e=>{G(""),T(e),6===e.length&&W(e)}})),A&&v.createElement("div",{className:"code-error"},A),v.createElement(p.Z,{className:"account-submit-btn",loading:F||O||H||U,onClick:()=>{setTimeout(()=>{X(z)})},disabled:6!==z.length},n("common.confirm")),v.createElement(p.Z,{className:"send-again",onClick:Q,disabled:$>0},$>0?`${n("login.send_again")} (${$}s)`:n("login.send_again")),v.createElement("div",{className:"back",onClick:()=>{t(-1)}},v.createElement(i.b,{className:"arrow1-icon",name:"arrow1_icon"}),v.createElement("span",null,n("login.back"))),v.createElement(l.a,null))}},52455:function(e,t,n){n.d(t,{a:function(){return l}});var a=n(18763),o=n(67294),r=["alpha","numeric","alphanumeric"],i={alpha:{type:"text",inputMode:"text",pattern:"[a-zA-Z]{1}"},alphanumeric:{type:"text",inputMode:"text",pattern:"[a-zA-Z0-9]{1}"},numeric:{type:"tel",inputMode:"numeric",pattern:"[0-9]{1}",min:"0",max:"9"}},l=(0,o.forwardRef)(({allowedCharacters:e="alphanumeric",ariaLabel:t,autoFocus:n=!0,containerClassName:l,disabled:c,inputClassName:s,isPassword:u=!1,length:d=6,placeholder:m,onChange:p,code:g=""},h)=>{if(isNaN(d)||d<1)throw Error("Length should be a number and greater than 0");if(!r.some(t=>t===e))throw Error("Invalid value for allowedCharacters. Use alpha, numeric, or alphanumeric");let v=(0,o.useRef)([]),f=i[e];(0,o.useImperativeHandle)(h,()=>({focus:()=>{v.current&&v.current[0].focus()},clear:()=>{if(v.current){for(let e=0;e<v.current.length;e++)v.current[e].value="";v.current[0].focus()}b()}})),(0,o.useEffect)(()=>{n&&(0,a.y)()&&v.current[0].focus()},[]),(0,o.useEffect)(()=>{if(g){for(let e=0;e<v.current.length;e++)v.current[e].value="";for(let e=0;e<g.length;e++)v.current[e].value=g[e];b()}},[g]);let x=v.current.map(e=>e.value).join("")||"",b=()=>{let e=v.current.map(e=>e.value).join("");x!==e&&(p&&p(e),x=e)},y=e=>{var t;let{target:{value:n,nextElementSibling:a}}=e;if(1==n.length)n.match(f.pattern)?null!==a&&a.focus():e.target.value="";else if(n.length>1){let a=Number(e.target.getAttribute("data-index"))||0;for(let e=0;e<n.length;e++){let o=n.charAt(e);o.match(f.pattern)&&(null==(t=v.current)?void 0:t[a])&&(v.current[a].value=o,null!==v.current[a].nextElementSibling&&(v.current[a].nextElementSibling.focus(),a++))}}setTimeout(()=>{b()})},_=e=>{let{key:t}=e,n=e.target;if("Backspace"===t){if(""===n.value){if(null!==n.previousElementSibling){let t=n.previousElementSibling;t.value="",t.focus(),e.preventDefault()}}else n.value="";setTimeout(()=>{b()})}},w=e=>{e.target.select()},C=e=>{var t;let n=null!=(t=e.clipboardData.getData("Text"))?t:"";n=n.replace(/\s/g,"").substring(0,6);let a=0;for(let e=0;e<n.length;e++){let t=n.charAt(e),o=v.current[a].value;t.match(f.pattern)&&(o||(v.current[a].value=t,null!==v.current[a].nextElementSibling&&(v.current[a].nextElementSibling.focus(),a++)))}b(),e.preventDefault()};return o.createElement("div",{className:l},Array(6).fill(0).map((e,n)=>o.createElement("input",{key:n,"data-index":n,onChange:y,onKeyDown:_,onFocus:w,onPaste:C,...f,type:u?"password":f.type,ref:e=>{v.current[n]=e},className:s,autoComplete:0===n?"one-time-code":"off","aria-label":t?`${t}. Character ${n+1}.`:`Character ${n+1}.`,disabled:c,placeholder:m})),o.createElement("div",{className:"input-code-mask",onClick:e=>{e.preventDefault(),e.stopPropagation();for(let e=v.current.length-1;e>=0;e--)if(e>0&&!v.current[e].value&&v.current[e-1].value||0===e&&!v.current[e].value||e==v.current.length-1&&v.current[e].value){v.current[e].focus(),v.current[e].setSelectionRange(v.current[e].value.length,v.current[e].value.length);break}}}))})},63728:function(e,t,n){n.d(t,{a:function(){return r}});var a=n(18763),o=n(67294),r=()=>{let{authCoreModal:e}=(0,a.qa)(),t=(0,o.useMemo)(()=>e.rootModalContainer,[e]),n=(0,o.useCallback)((e,n="")=>{var a;let o=document.createElement("div");o.className="ant-message-notice";let r=document.createElement("div");r.className="ant-message-notice-content";let i=document.createElement("div");i.className="ant-message-custom-content";let l=document.createElement("span");l.setAttribute("role","img"),l.setAttribute("aria-label","check-circle"),l.className="anticon anticon-check-circle";let c=document.createElement("svg");"success"===e?(i.className+=" ant-message-success",c.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>'):"error"===e?(i.className+=" ant-message-error",c.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>'):"info"===e?(i.className+=" ant-message-info",c.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>'):"warning"===e&&(i.className+=" ant-message-warning",c.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>');let s=document.createElement("span");return s.textContent=n,l.appendChild(c),i.appendChild(l),i.appendChild(s),r.appendChild(i),o.appendChild(r),null==(a=null==t?void 0:t.querySelector(".ant-message"))||a.appendChild(o),o},[t]),r=(0,o.useCallback)(e=>{let a=n("error",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]),i=(0,o.useCallback)(e=>{let a=n("info",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]),l=(0,o.useCallback)(e=>{let a=n("success",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]),c=(0,o.useCallback)(e=>{let a=n("warning",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]);return(0,o.useEffect)(()=>{if(t){if(t.querySelector(".ant-message"))return;let e=document.createElement("div");e.className="ant-message",t.appendChild(e)}},[t]),{error:r,info:i,success:l,warning:c}}},65597:function(e,t,n){n.d(t,{a:function(){return h},b:function(){return v},c:function(){return f}});var a,o=n(33472),r=n(63728),i=n(17566),l=n(81163),c=n(18763),s=n(68376),u=n(57741),d=n(73327),m=n(67294),p=n(42763),g=`.login-account-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--text-color);
}
.login-account-box .login-account-title {
  font-weight: 500;
  font-size: 18px;
}
.login-account-box .login-account-description {
  margin: 32px 18px 40px;
  font-weight: 400;
  font-size: 13px;
  color: var(--secondary-text-color);
}
.login-account-box .account-list {
  width: 100%;
  padding: 0 18px;
}
.login-account-box .account-list .login-account-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 12px 0 14px;
  margin-bottom: 10px;
  border-radius: var(--card-border-radius);
  background: var(--card-unclickable-background-color);
  cursor: pointer;
}
.login-account-box .account-list .login-account-item img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
}
.login-account-box .account-list .login-account-item .login-account-name {
  flex-grow: 1;
  margin-left: 8px;
  font-weight: 500;
  font-size: 14px;
}
.login-account-box .account-list .login-account-item .login-account-value {
  flex-grow: 2;
  max-width: 180px;
  margin-right: 8px;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--text-color);
}
.login-account-box .account-list .login-account-item .login-account-value[data-no-linked='true'] {
  color: var(--secondary-text-color);
}
.login-account-box .account-list .login-account-item:hover {
  opacity: var(--hover-opacity);
}
.login-account-box .account-list .arrow-right-icon {
  color: var(--text-color);
}
.login-account-box .account-list .arrow-right-icon svg {
  width: 12px;
  height: 12px;
}
.login-account-box .footer-box {
  position: absolute;
  bottom: 0;
}
`,h=e=>{let{userInfo:t,t:n}=e;return[{type:s.Gr.phone,icon:c.q,name:n("account.mobile"),value:t.phone,id:void 0,isOriginal:!1},{type:s.Gr.email,icon:c.i,name:n("account.email"),value:t.email,id:void 0,isOriginal:!1},{type:s.Gr.google,icon:c.l,name:n("login.google"),value:t.google_email,id:t.google_id,isOriginal:!1},{type:s.Gr.facebook,icon:c.j,name:n("login.facebook"),value:t.facebook_email,id:t.facebook_id,isOriginal:!1},{type:s.Gr.twitter,icon:c.s,name:n("login.twitter"),value:t.twitter_email,id:t.twitter_id,isOriginal:!1}]},v=e=>{var t,n,a,o;let r=null==e?void 0:e.replace(" ","");if(r){if(null!=(t=null==r?void 0:r.includes)&&t.call(r,"@"))r=`${r.split("@")[0].substr(0,3)}****@${r.split("@")[1]}`;else if(null!=(n=null==r?void 0:r.includes)&&n.call(r,"+")){let e=(0,d.h)(r),t=e.nationalNumber.toString();r=`+${e.countryCallingCode} ${null==(a=null==t?void 0:t.substr)?void 0:a.call(t,0,3)}****${null==(o=null==t?void 0:t.substr)?void 0:o.call(t,-4)}`}else r&&(r=`${r.substr(0,3)}****${r.substr(-4)}`)}return r},f=()=>{let{t:e}=(0,p.$G)(),t=(0,c.sa)(),{userInfo:n,showSelectSecurityAccount:s}=(0,c.ta)(),d=(0,r.a)(),{run:f}=(0,u.Z)(e=>{t("/account/verify",{state:{account:e.account,authType:a,pageType:"verify_security_account_bind_login_account"}})},{wait:3e3}),x=(0,m.useMemo)(()=>h({userInfo:n,t:e}),[n]),b=e=>{var o,r,i,l,c,u;e.value||e.id?t("/login-account/bind",{state:{authType:e.type}}):null!=(o=null==n?void 0:n.security_account)&&o.email||null!=(r=null==n?void 0:n.security_account)&&r.phone?(null==(i=null==n?void 0:n.security_account)?void 0:i.email)&&(null==(l=null==n?void 0:n.security_account)?void 0:l.phone)?s(!0,{authType:a,pageType:"verify_security_account_bind_login_account"}):f({account:(null==(c=null==n?void 0:n.security_account)?void 0:c.email)||(null==(u=null==n?void 0:n.security_account)?void 0:u.phone)}):d.error("Please bind security account first.")};return m.createElement("div",{className:"login-account-box"},m.createElement("style",null,g),m.createElement(o.a,{displayBackBtn:!0},e("account.login_account")),m.createElement("div",{className:"scroll-content"},m.createElement("div",{className:"login-account-description"},e("account.login_account_hint")),m.createElement("div",{className:"account-list"},null==x?void 0:x.map((t,n)=>m.createElement("div",{className:"login-account-item",onClick:()=>{a=t.type,b(t)},key:n},m.createElement("img",{src:t.icon}),m.createElement("div",{className:"login-account-name"},t.name),m.createElement("div",{className:"login-account-value","data-no-linked":!(t.value||t.id)},v(t.value||t.id)||e("account.not_linked")),m.createElement(i.b,{className:"arrow-right-icon",name:"arrow_right_icon"}))))),m.createElement(l.a,{className:"footer-box-v2"}))}},33472:function(e,t,n){n.d(t,{a:function(){return l}});var a=n(17566),o=n(18763),r=n(67294),i=`.p-auth-header {
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
`,l=e=>{var t,n;let{children:l,leftContent:c,rightContent:s,onBack:u}=e,{displayBackBtn:d=!1}=e,m=(0,o.sa)(),{customRouter:p}=(0,o.ra)();return u&&(d=!0),(c||(null!=(n=null==(t=null==p?void 0:p.history)?void 0:t.length)?n:0)<=1)&&(d=!1),r.createElement("div",{className:"width-100"},r.createElement("style",null,i),r.createElement("div",{className:"p-auth-header"},r.createElement("div",{className:"left"},r.createElement(r.Fragment,null,d&&r.createElement(a.b,{className:"header-back-btn",name:"circle_back",onClick:()=>{u?u():m(-1)}}),c)),r.createElement("div",{className:"middle"},l),r.createElement("div",{className:"right"},s)))}}}]);