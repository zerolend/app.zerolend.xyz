(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[428],{23493:function(e,t,n){var a=n(23279),i=n(13218);e.exports=function(e,t,n){var c=!0,o=!0;if("function"!=typeof e)throw TypeError("Expected a function");return i(n)&&(c="leading"in n?!!n.leading:c,o="trailing"in n?!!n.trailing:o),a(e,t,{leading:c,maxWait:t,trailing:o})}},57741:function(e,t,n){"use strict";var a=n(97582),i=n(23493),c=n.n(i),o=n(67294),l=n(39200),r=n(84966),u=n(23326),s=n(51046);t.Z=function(e,t){s.Z&&!(0,u.mf)(e)&&console.error("useThrottleFn expected parameter is a function, got ".concat(typeof e));var n,i=(0,l.Z)(e),d=null!==(n=null==t?void 0:t.wait)&&void 0!==n?n:1e3,m=(0,o.useMemo)(function(){return c()(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.current.apply(i,(0,a.__spreadArray)([],(0,a.__read)(e),!1))},d,t)},[]);return(0,r.Z)(function(){m.cancel()}),{run:m,cancel:m.cancel,flush:m.flush}}},63728:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var a=n(18763),i=n(67294),c=()=>{let{authCoreModal:e}=(0,a.qa)(),t=(0,i.useMemo)(()=>e.rootModalContainer,[e]),n=(0,i.useCallback)((e,n="")=>{var a;let i=document.createElement("div");i.className="ant-message-notice";let c=document.createElement("div");c.className="ant-message-notice-content";let o=document.createElement("div");o.className="ant-message-custom-content";let l=document.createElement("span");l.setAttribute("role","img"),l.setAttribute("aria-label","check-circle"),l.className="anticon anticon-check-circle";let r=document.createElement("svg");"success"===e?(o.className+=" ant-message-success",r.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>'):"error"===e?(o.className+=" ant-message-error",r.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>'):"info"===e?(o.className+=" ant-message-info",r.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>'):"warning"===e&&(o.className+=" ant-message-warning",r.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>');let u=document.createElement("span");return u.textContent=n,l.appendChild(r),o.appendChild(l),o.appendChild(u),c.appendChild(o),i.appendChild(c),null==(a=null==t?void 0:t.querySelector(".ant-message"))||a.appendChild(i),i},[t]),c=(0,i.useCallback)(e=>{let a=n("error",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]),o=(0,i.useCallback)(e=>{let a=n("info",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]),l=(0,i.useCallback)(e=>{let a=n("success",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]),r=(0,i.useCallback)(e=>{let a=n("warning",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(a)},2e3)},[n]);return(0,i.useEffect)(()=>{if(t){if(t.querySelector(".ant-message"))return;let e=document.createElement("div");e.className="ant-message",t.appendChild(e)}},[t]),{error:c,info:o,success:l,warning:r}}},65597:function(e,t,n){"use strict";n.d(t,{a:function(){return h},b:function(){return v},c:function(){return f}});var a,i=n(33472),c=n(63728),o=n(17566),l=n(81163),r=n(18763),u=n(68376),s=n(57741),d=n(73327),m=n(67294),g=n(42763),p=`.login-account-box {
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
`,h=e=>{let{userInfo:t,t:n}=e;return[{type:u.Gr.phone,icon:r.q,name:n("account.mobile"),value:t.phone,id:void 0,isOriginal:!1},{type:u.Gr.email,icon:r.i,name:n("account.email"),value:t.email,id:void 0,isOriginal:!1},{type:u.Gr.google,icon:r.l,name:n("login.google"),value:t.google_email,id:t.google_id,isOriginal:!1},{type:u.Gr.facebook,icon:r.j,name:n("login.facebook"),value:t.facebook_email,id:t.facebook_id,isOriginal:!1},{type:u.Gr.twitter,icon:r.s,name:n("login.twitter"),value:t.twitter_email,id:t.twitter_id,isOriginal:!1}]},v=e=>{var t,n,a,i;let c=null==e?void 0:e.replace(" ","");if(c){if(null!=(t=null==c?void 0:c.includes)&&t.call(c,"@"))c=`${c.split("@")[0].substr(0,3)}****@${c.split("@")[1]}`;else if(null!=(n=null==c?void 0:c.includes)&&n.call(c,"+")){let e=(0,d.h)(c),t=e.nationalNumber.toString();c=`+${e.countryCallingCode} ${null==(a=null==t?void 0:t.substr)?void 0:a.call(t,0,3)}****${null==(i=null==t?void 0:t.substr)?void 0:i.call(t,-4)}`}else c&&(c=`${c.substr(0,3)}****${c.substr(-4)}`)}return c},f=()=>{let{t:e}=(0,g.$G)(),t=(0,r.sa)(),{userInfo:n,showSelectSecurityAccount:u}=(0,r.ta)(),d=(0,c.a)(),{run:f}=(0,s.Z)(e=>{t("/account/verify",{state:{account:e.account,authType:a,pageType:"verify_security_account_bind_login_account"}})},{wait:3e3}),x=(0,m.useMemo)(()=>h({userInfo:n,t:e}),[n]),b=e=>{var i,c,o,l,r,s;e.value||e.id?t("/login-account/bind",{state:{authType:e.type}}):null!=(i=null==n?void 0:n.security_account)&&i.email||null!=(c=null==n?void 0:n.security_account)&&c.phone?(null==(o=null==n?void 0:n.security_account)?void 0:o.email)&&(null==(l=null==n?void 0:n.security_account)?void 0:l.phone)?u(!0,{authType:a,pageType:"verify_security_account_bind_login_account"}):f({account:(null==(r=null==n?void 0:n.security_account)?void 0:r.email)||(null==(s=null==n?void 0:n.security_account)?void 0:s.phone)}):d.error("Please bind security account first.")};return m.createElement("div",{className:"login-account-box"},m.createElement("style",null,p),m.createElement(i.a,{displayBackBtn:!0},e("account.login_account")),m.createElement("div",{className:"scroll-content"},m.createElement("div",{className:"login-account-description"},e("account.login_account_hint")),m.createElement("div",{className:"account-list"},null==x?void 0:x.map((t,n)=>m.createElement("div",{className:"login-account-item",onClick:()=>{a=t.type,b(t)},key:n},m.createElement("img",{src:t.icon}),m.createElement("div",{className:"login-account-name"},t.name),m.createElement("div",{className:"login-account-value","data-no-linked":!(t.value||t.id)},v(t.value||t.id)||e("account.not_linked")),m.createElement(o.b,{className:"arrow-right-icon",name:"arrow_right_icon"}))))),m.createElement(l.a,{className:"footer-box-v2"}))}},33472:function(e,t,n){"use strict";n.d(t,{a:function(){return l}});var a=n(17566),i=n(18763),c=n(67294),o=`.p-auth-header {
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
`,l=e=>{var t,n;let{children:l,leftContent:r,rightContent:u,onBack:s}=e,{displayBackBtn:d=!1}=e,m=(0,i.sa)(),{customRouter:g}=(0,i.ra)();return s&&(d=!0),(r||(null!=(n=null==(t=null==g?void 0:g.history)?void 0:t.length)?n:0)<=1)&&(d=!1),c.createElement("div",{className:"width-100"},c.createElement("style",null,o),c.createElement("div",{className:"p-auth-header"},c.createElement("div",{className:"left"},c.createElement(c.Fragment,null,d&&c.createElement(a.b,{className:"header-back-btn",name:"circle_back",onClick:()=>{s?s():m(-1)}}),r)),c.createElement("div",{className:"middle"},l),c.createElement("div",{className:"right"},u)))}},30428:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(65597),i=n(33472),c=n(63728),o=n(17566),l=n(18763),r=n(97608),u=n(68376),s=n(56469),d=n(67294),m=n(42763),g={};(0,r.b)(g,{default:()=>p});var p,h=(0,r.a)(()=>{p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABZFJREFUaEPtmk1oHVUUx8+5b6QW3cVuNBFdKCQz944P06R1YRW0FRH8SuJCF1pqu0gV/CjiRhN3gl9IFZpYFayCSaQKiqYIpgqmaaPvzb0zRslCQbux6krTIPPmyIQX8ePN3Dtv5j3SNAOPLO45/3N+9/sjCOfZh+cZL2wAr/cW32jhjRZeZzXQti7teV4nAKz8ELErrkci+hEAfop/ruvGf1v+tQy4UqlcZVnW9UR0GyDeDqBdEQiIPkDED8Mw/LxcLi+2gr5wYCnlA4D4IABsz5nwLBCNCyHeyKnzL/fCgH3fvzsi2g8ANxSZIADMMMSDjuO8V4RubuB4bCJjLwPAnUUklKJxlKLo4bxjPRewlPImQHwTAC5rMeyq/Gkgul8I8Wmz8ZoGllIOA+LBZgPn8iPaL4R4pRmNpoC9IBjAKJpsJmBRPsTYoGvbU1n1MgN7nucgYypjoOOAOFlCPBWG4RnLss7E/mEYbrEsa0uNaCsQDQLAjiy6FEXcdV0/i08m4Lm5uY4LN28+joi2URCi8ahUeu0a2z5pYl8Ngj5Wq+2pL2taFyIKls+e3dHf3/+r1rhukAlY+v4kEA3oxIloiiE+yzmf19k2KldK9UZETyCiNhYgTgnHiXuH0WcMXF9ntWMmhnWFME4gLUtPykkTaIY4YLpOGwNLpT7TbiqInhFCPG1U1YZGUspRQHxKYz4jOL/RRNIIuL5dfD1NEAFGOecjJkGz2iilRgggvSKJdptsQ42APSlPIGJ/YqJEbwsh7ssKksVeSnkEEO9N8iGiOVeIbTpNLXAQBD21KApShSyrV3R3f6ULlqdcLixcC2GYOgmWGLNt2/5G0xPT05C+/wgQvZBohTgmHGdfHhhTX+n7h4Bob0oujwrHeTEXsKfUJwiwK7ErRdE213XnTJPOY+d5Xj8ydiIxF4Bpl/NbcgFLpSglwEmX8+SxnYcuwddTag4B+pKkBeepwzS1sH70i69hGn4I8Djn/PkWcCVKKqUeI4DnUnpcV9oRMhVYSrkdEL9MEmeIfY7jnGonsO/7WyOi5K0q0XVCiNmURkpOV0o5CIgTSRa1MLyyXC7/0E7gSqVyRcmyvk+MSTQkhEg8yaW3sGaGpii62HXdP9oJ7HneRcjY783O1OcccAwqfT+++bi0ITTRPiHE2Lrp0ivASn0EALcmAN+cdgV0zk1aMWQQBHYtihod/I8JzhP3DLFv+rK0uNiJy8uJyxIhDruO82o7x/BqrIWFhY4/w/DJlcsIol8QYJpzfkSXi3YvnbbxiO+MTY9lukTaVa4HlvL9+lNJw5xqiH3lNq/FeSpHC+x53h5kbDxl3RsTQrTl8JAHdNVXC1ytVq9mpdJ3qcGIeoUQLT0eFgGrnbRWg0il4q1a2uF6QnB+T1FJtVJH28Jx8KpSuxnAYU0rTwohhlqZbBHaRsD1xX5Gd1GOACOc89EiEmuVhjGw6fMKAYy4axjaGLjeykcB4A5d7SPAW1Gp9JLb0/O1zrbd5ZmAgyC4PKzVZhGx8cb9v9kTjUWl0mHTp5Z2wGcCrk9gOxnAdJbk4itUBJhgjH3BGPt5aWnpTG9v71IWjaJsMwPHgZVSDxFA/Oqf5zsdLwAIcIBzvpBHKItvU8B16CECeDdLsCTbEmMdtm3/VoSWTqNp4JVJTEoOiDF0ty5QWnl8KedyfiCPhqlvLuA4yPz8/CUXbNp0CAHuMg36PzvEj4XjND7QNy3a2DE38Kps/cJvWLc5aZhGG18vCgNeBVnZhiLuBSLzC/oc/6SStQMUDvw3eLVqM8vaiUS7KO2phugdV4jEV8GsQDr7lgH/MzARoe/7nSFAlwXQSYidSBQCwLec82O6JIssbwtwkQnn1doAzluDa91/o4XXegvlzW+jhfPW4Fr3/ws0MgpbOUdCfQAAAABJRU5ErkJggg=="}),v=`.account-bind-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.account-bind-container .particle-connect-form-contaier {
  flex: 1;
}
.account-bind-container .particle-loading,
.account-bind-container .result-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
  font-size: 18px;
  color: var(--text-color);
}
.account-bind-container .particle-loading .logo-img,
.account-bind-container .result-content .logo-img {
  width: 68px;
  height: 68px;
  margin-bottom: 10px;
  font-size: 68px;
}
.account-bind-container .particle-loading .particle-loading-img,
.account-bind-container .result-content .particle-loading-img {
  width: 30px;
  height: 30px;
  margin-top: 20px;
  animation: loading-inner 1.5s linear infinite;
}
.account-bind-container .particle-loading h3,
.account-bind-container .result-content h3 {
  color: var(--text-color);
}
.account-bind-container .particle-loading p,
.account-bind-container .result-content p {
  font-size: 14px;
  color: var(--secondary-text-color);
}
.account-bind-container .link_btn {
  width: auto;
  height: 32px;
  font-size: 14px;
}
.account-bind-container .result-content .back {
  margin-top: 40px;
}
.account-bind-container .result-content .back button {
  display: flex;
  align-items: center;
}
@keyframes loading-inner {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`,f=e=>{let{authType:t="google",verifyToken:n,code:p}=e,f=(0,l.sa)(),{t:x}=(0,m.$G)(),[b,y]=(0,d.useState)(!0),{userInfo:w}=(0,l.ha)(),E=(0,c.a)(),C=(0,d.useMemo)(()=>(0,a.a)({userInfo:w,t:x}),[w]),k=(0,d.useMemo)(()=>({...C.find(e=>e.type.replace(/v1$/,"")==t)||{}}),[C,e]);return(0,d.useEffect)(()=>{t&&n&&(0,u.pW)({provider:t,thirdparty_code:p,security_account_verify_token:n,version:"v2"}).then(e=>{y(!1)}).catch(e=>{let n=e.message;if((null==e?void 0:e.error_code)===20109){let e=`error.server_${t}_20109`,a=x(e);a&&a!=e&&(n=a)}E.error(n),setTimeout(()=>{f("/account/security",{replace:!0})})})},[t,n]),d.createElement("div",{className:"account-bind-container"},d.createElement("style",null,v),d.createElement(i.a,{displayBackBtn:!0}),d.createElement("div",{className:"particle-connect-form-contaier center-center flex-column"},b?d.createElement("div",{className:"particle-loading"},d.createElement(o.b,{name:k.type+"_icon",className:"logo-img logo-img-2"}),d.createElement("p",null,d.createElement("img",{className:"particle-loading-img",width:30,height:30,src:(h(),(0,r.c)(g)).default,alt:""}))):d.createElement("div",{className:"result-content resultsuccess"},d.createElement("img",{src:null==k?void 0:k.icon,alt:""}),d.createElement("div",{className:"info"},"Binding succeeded！"),d.createElement("div",{className:"back"},d.createElement(s.Z,{type:"primary",onClick:()=>{f("/account/security",{replace:!0})}},"Back")))))}}}]);