"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8085],{63728:function(e,t,a){a.d(t,{a:function(){return i}});var l=a(18763),n=a(67294),i=()=>{let{authCoreModal:e}=(0,l.qa)(),t=(0,n.useMemo)(()=>e.rootModalContainer,[e]),a=(0,n.useCallback)((e,a="")=>{var l;let n=document.createElement("div");n.className="ant-message-notice";let i=document.createElement("div");i.className="ant-message-notice-content";let c=document.createElement("div");c.className="ant-message-custom-content";let r=document.createElement("span");r.setAttribute("role","img"),r.setAttribute("aria-label","check-circle"),r.className="anticon anticon-check-circle";let o=document.createElement("svg");"success"===e?(c.className+=" ant-message-success",o.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>'):"error"===e?(c.className+=" ant-message-error",o.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>'):"info"===e?(c.className+=" ant-message-info",o.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>'):"warning"===e&&(c.className+=" ant-message-warning",o.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>');let s=document.createElement("span");return s.textContent=a,r.appendChild(o),c.appendChild(r),c.appendChild(s),i.appendChild(c),n.appendChild(i),null==(l=null==t?void 0:t.querySelector(".ant-message"))||l.appendChild(n),n},[t]),i=(0,n.useCallback)(e=>{let l=a("error",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(l)},2e3)},[a]),c=(0,n.useCallback)(e=>{let l=a("info",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(l)},2e3)},[a]),r=(0,n.useCallback)(e=>{let l=a("success",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(l)},2e3)},[a]),o=(0,n.useCallback)(e=>{let l=a("warning",e);setTimeout(()=>{var e;null==(e=null==t?void 0:t.querySelector(".ant-message"))||e.removeChild(l)},2e3)},[a]);return(0,n.useEffect)(()=>{if(t){if(t.querySelector(".ant-message"))return;let e=document.createElement("div");e.className="ant-message",t.appendChild(e)}},[t]),{error:i,info:c,success:r,warning:o}}},33472:function(e,t,a){a.d(t,{a:function(){return r}});var l=a(17566),n=a(18763),i=a(67294),c=`.p-auth-header {
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
`,r=e=>{var t,a;let{children:r,leftContent:o,rightContent:s,onBack:d}=e,{displayBackBtn:m=!1}=e,u=(0,n.sa)(),{customRouter:p}=(0,n.ra)();return d&&(m=!0),(o||(null!=(a=null==(t=null==p?void 0:p.history)?void 0:t.length)?a:0)<=1)&&(m=!1),i.createElement("div",{className:"width-100"},i.createElement("style",null,c),i.createElement("div",{className:"p-auth-header"},i.createElement("div",{className:"left"},i.createElement(i.Fragment,null,m&&i.createElement(l.b,{className:"header-back-btn",name:"circle_back",onClick:()=>{d?d():u(-1)}}),o)),i.createElement("div",{className:"middle"},r),i.createElement("div",{className:"right"},s)))}},38085:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(33472),n=a(63728),i=a(17566),c=a(81163),r=a(18763),o=a(68376),s=a(56469),d=a(54117),m=a(67294),u=a(42763),p=`.device-details-wrapper {
  -webkit-overflow-scrolling: touch;
  height: 100%;
}
.device-details-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--text-color);
}
.device-details-container .scroll-wrapper {
  flex: 1;
  overflow: auto;
}
.device-details-container .details-list {
  padding: 0 18px;
  padding-bottom: 50px;
  margin-top: 20px;
}
.device-details-container .details-list .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  padding: 0 12px 0 14px;
  margin-bottom: 10px;
  border-radius: var(--card-border-radius);
  background: var(--card-unclickable-background-color);
}
.device-details-container .details-list .item .right {
  font-weight: 400;
  font-size: 12px;
}
.device-details-container .btns {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 18px;
  background: var(--theme-background-color);
}
.device-details-container .btns .confirm-delete-btn {
  width: 100%;
  max-width: 360px;
  height: 46px;
  padding: 0;
  line-height: 46px;
}
.delete-confirm-modal .ant-modal-confirm-btns,
.delete-confirm-modal .anticon-exclamation-circle {
  display: none;
}
.delete-confirm-modal .ant-modal-confirm-content {
  margin: 0 !important;
}
.delete-confirm-modal .ant-modal-body {
  position: relative;
  padding: 26px 18px;
}
.delete-confirm-modal .content-text {
  margin-top: 40px;
  margin-bottom: 34px;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: var(--text-color);
}
.delete-confirm-modal .close-btn {
  position: absolute;
  top: 10px;
  right: 16px;
  font-size: 30px;
}
.delete-confirm-modal .btns {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.delete-confirm-modal .btns button {
  flex: 1;
  height: 46px;
}
.delete-confirm-modal .btns button.cancel-btn {
  color: var(--text-color);
  background: var(--secondary-btn-background-color);
}
@media (max-width: 767px) {
  .delete-confirm-modal .ant-modal {
    max-width: calc(100vw - 36px);
    margin: 8px auto;
  }
}
`,h=e=>{var t,a,h,v;let{loginDeviceInfo:g}=e,{t:f}=(0,u.$G)(),x=(0,r.sa)(),{authCoreModal:b}=(0,r.qa)(),[w,E]=(0,m.useState)(!1),[N,C]=(0,m.useState)(!1),k=()=>{E(!0)},y=(0,n.a)(),_=()=>{E(!1)};return m.createElement("div",{className:"device-details-wrapper"},m.createElement("style",null,p),m.createElement("div",{className:"device-details-container"},m.createElement(l.a,{displayBackBtn:!0},f("new.details")),m.createElement("div",{className:"scroll-wrapper"},m.createElement("div",{className:"details-list"},m.createElement("div",{className:"item"},m.createElement("div",{className:"left"},f("new.app")),m.createElement("div",{className:"right"},g.project_app_name||"-")),m.createElement("div",{className:"item"},m.createElement("div",{className:"left"},f("new.device")),m.createElement("div",{className:"right"},g.device||"-")),m.createElement("div",{className:"item"},m.createElement("div",{className:"left"},f("new.authorized_time")),m.createElement("div",{className:"right"},g.updated_at||"-")),m.createElement("div",{className:"item"},m.createElement("div",{className:"left"},f("new.login_method")),m.createElement("div",{className:"right"},(g.login_channel||"-").replace("Twitterv1","Twitter"))),m.createElement("div",{className:"item"},m.createElement("div",{className:"left"},f("new.ip")),m.createElement("div",{className:"right"},(null==(t=null==g?void 0:g.location)?void 0:t.ip)||"-")),m.createElement("div",{className:"item"},m.createElement("div",{className:"left"},f("new.country")),m.createElement("div",{className:"right"},(null==(a=null==g?void 0:g.location)?void 0:a.country_name)||(null==(h=null==g?void 0:g.location)?void 0:h.country_code)||"-")),m.createElement("div",{className:"item"},m.createElement("div",{className:"left"},f("new.city")),m.createElement("div",{className:"right"},(null==(v=null==g?void 0:g.location)?void 0:v.city)||"-")))),m.createElement("div",{className:"btns"},m.createElement(s.Z,{className:"still-confirm confirm-delete-btn",disabled:g.isCurrent,onClick:()=>{k()}},f("new.delete_access"))),m.createElement(d.Z,{className:"delete-confirm-modal",open:w,closable:!1,footer:null,centered:!0,getContainer:()=>b.rootBody},m.createElement("div",{className:"content-wrap"},m.createElement("div",{className:"close-btn",onClick:()=>{_()}},m.createElement(i.b,{className:"circle_close",name:"circle_close"})),m.createElement("div",{className:"content-text"},f("new.delete_access_to_n").format(null==g?void 0:g.project_app_name,null==g?void 0:g.device)),m.createElement("div",{className:"btns"},m.createElement(s.Z,{className:"cancel-btn",onClick:()=>{_()}},f("common.cancel")),m.createElement(s.Z,{className:"still-confirm delete-btn",loading:N,onClick:()=>{C(!0),setTimeout(()=>{(0,o.S6)(null==g?void 0:g.project_app_uuid).finally(()=>{C(!1)}).then(e=>{e&&(_(),setTimeout(()=>{x(-1)},500))}).catch(e=>{y.error(e.message)})},500)}},f("new.delete"))))),m.createElement(c.a,{className:"footer-box-v2"})))}}}]);