(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1843],{23493:function(e,t,n){var a=n(23279),i=n(13218);e.exports=function(e,t,n){var o=!0,l=!0;if("function"!=typeof e)throw TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,l="trailing"in n?!!n.trailing:l),a(e,t,{leading:o,maxWait:t,trailing:l})}},57741:function(e,t,n){"use strict";var a=n(97582),i=n(23493),o=n.n(i),l=n(67294),c=n(39200),r=n(84966),u=n(23326),s=n(51046);t.Z=function(e,t){s.Z&&!(0,u.mf)(e)&&console.error("useThrottleFn expected parameter is a function, got ".concat(typeof e));var n,i=(0,c.Z)(e),d=null!==(n=null==t?void 0:t.wait)&&void 0!==n?n:1e3,m=(0,l.useMemo)(function(){return o()(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.current.apply(i,(0,a.__spreadArray)([],(0,a.__read)(e),!1))},d,t)},[]);return(0,r.Z)(function(){m.cancel()}),{run:m,cancel:m.cancel,flush:m.flush}}},63728:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var a=n(18763),i=n(67294),o=()=>{let{authCoreModal:e}=(0,a.qa)(),t=(0,i.useMemo)(()=>e.rootModalContainer,[e]),n=(0,i.useCallback)((e,n="")=>{var a;let i=document.createElement("div");i.className="ant-message-notice";let o=document.createElement("div");o.className="ant-message-notice-content";let l=document.createElement("div");l.className="ant-message-custom-content";let c=document.createElement("span");c.setAttribute("role","img"),c.setAttribute("aria-label","check-circle"),c.className="anticon anticon-check-circle";let r=document.createElement("svg");"success"===e?(l.className+=" ant-message-success",r.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>'):"error"===e?(l.className+=" ant-message-error",r.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>'):"info"===e?(l.className+=" ant-message-info",r.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>'):"warning"===e&&(l.className+=" ant-message-warning",r.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>');let u=document.createElement("span");return u.textContent=n,c.appendChild(r),l.appendChild(c),l.appendChild(u),o.appendChild(l),i.appendChild(o),null==(a=null==t?void 0:t.querySelector(".ant-message"))||a.appendChild(i),i},[t]),o=(0,i.useCallback)(e=>{let a=n("error",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]),l=(0,i.useCallback)(e=>{let a=n("info",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]),c=(0,i.useCallback)(e=>{let a=n("success",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]),r=(0,i.useCallback)(e=>{let a=n("warning",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]);return(0,i.useEffect)(()=>{if(t){if(t.querySelector(".ant-message"))return;let e=document.createElement("div");e.className="ant-message",t.appendChild(e)}},[t]),{error:o,info:l,success:c,warning:r}}},65597:function(e,t,n){"use strict";n.d(t,{a:function(){return p},b:function(){return v},c:function(){return f}});var a,i=n(33472),o=n(63728),l=n(17566),c=n(81163),r=n(18763),u=n(68376),s=n(57741),d=n(73327),m=n(67294),g=n(42763),h=`.login-account-box {
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
`,p=e=>{let{userInfo:t,t:n}=e;return[{type:u.Gr.phone,icon:r.q,name:n("account.mobile"),value:t.phone,id:void 0,isOriginal:!1},{type:u.Gr.email,icon:r.i,name:n("account.email"),value:t.email,id:void 0,isOriginal:!1},{type:u.Gr.google,icon:r.l,name:n("login.google"),value:t.google_email,id:t.google_id,isOriginal:!1},{type:u.Gr.facebook,icon:r.j,name:n("login.facebook"),value:t.facebook_email,id:t.facebook_id,isOriginal:!1},{type:u.Gr.twitter,icon:r.s,name:n("login.twitter"),value:t.twitter_email,id:t.twitter_id,isOriginal:!1}]},v=e=>{var t,n,a,i;let o=null==e?void 0:e.replace(" ","");if(o){if(null!=(t=null==o?void 0:o.includes)&&t.call(o,"@"))o=`${o.split("@")[0].substr(0,3)}****@${o.split("@")[1]}`;else if(null!=(n=null==o?void 0:o.includes)&&n.call(o,"+")){let e=(0,d.h)(o),t=e.nationalNumber.toString();o=`+${e.countryCallingCode} ${null==(a=null==t?void 0:t.substr)?void 0:a.call(t,0,3)}****${null==(i=null==t?void 0:t.substr)?void 0:i.call(t,-4)}`}else o&&(o=`${o.substr(0,3)}****${o.substr(-4)}`)}return o},f=()=>{let{t:e}=(0,g.$G)(),t=(0,r.sa)(),{userInfo:n,showSelectSecurityAccount:u}=(0,r.ta)(),d=(0,o.a)(),{run:f}=(0,s.Z)(e=>{t("/account/verify",{state:{account:e.account,authType:a,pageType:"verify_security_account_bind_login_account"}})},{wait:3e3}),x=(0,m.useMemo)(()=>p({userInfo:n,t:e}),[n]),b=e=>{var i,o,l,c,r,s;e.value||e.id?t("/login-account/bind",{state:{authType:e.type}}):null!=(i=null==n?void 0:n.security_account)&&i.email||null!=(o=null==n?void 0:n.security_account)&&o.phone?(null==(l=null==n?void 0:n.security_account)?void 0:l.email)&&(null==(c=null==n?void 0:n.security_account)?void 0:c.phone)?u(!0,{authType:a,pageType:"verify_security_account_bind_login_account"}):f({account:(null==(r=null==n?void 0:n.security_account)?void 0:r.email)||(null==(s=null==n?void 0:n.security_account)?void 0:s.phone)}):d.error("Please bind security account first.")};return m.createElement("div",{className:"login-account-box"},m.createElement("style",null,h),m.createElement(i.a,{displayBackBtn:!0},e("account.login_account")),m.createElement("div",{className:"scroll-content"},m.createElement("div",{className:"login-account-description"},e("account.login_account_hint")),m.createElement("div",{className:"account-list"},null==x?void 0:x.map((t,n)=>m.createElement("div",{className:"login-account-item",onClick:()=>{a=t.type,b(t)},key:n},m.createElement("img",{src:t.icon}),m.createElement("div",{className:"login-account-name"},t.name),m.createElement("div",{className:"login-account-value","data-no-linked":!(t.value||t.id)},v(t.value||t.id)||e("account.not_linked")),m.createElement(l.b,{className:"arrow-right-icon",name:"arrow_right_icon"}))))),m.createElement(c.a,{className:"footer-box-v2"}))}},33472:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var a=n(17566),i=n(18763),o=n(67294),l=`.p-auth-header {
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
`,c=e=>{var t,n;let{children:c,leftContent:r,rightContent:u,onBack:s}=e,{displayBackBtn:d=!1}=e,m=(0,i.sa)(),{customRouter:g}=(0,i.ra)();return s&&(d=!0),(r||(null!=(n=null==(t=null==g?void 0:g.history)?void 0:t.length)?n:0)<=1)&&(d=!1),o.createElement("div",{className:"width-100"},o.createElement("style",null,l),o.createElement("div",{className:"p-auth-header"},o.createElement("div",{className:"left"},o.createElement(o.Fragment,null,d&&o.createElement(a.b,{className:"header-back-btn",name:"circle_back",onClick:()=>{s?s():m(-1)}}),r)),o.createElement("div",{className:"middle"},c),o.createElement("div",{className:"right"},u)))}},91843:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a.c},encryptValue:function(){return a.b},getAccountList:function(){return a.a}});var a=n(65597)}}]);