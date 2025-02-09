"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4948],{33472:function(e,t,a){a.d(t,{a:function(){return i}});var n=a(17566),c=a(18763),r=a(67294),o=`.p-auth-header {
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
`,i=e=>{var t,a;let{children:i,leftContent:l,rightContent:s,onBack:p}=e,{displayBackBtn:d=!1}=e,m=(0,c.sa)(),{customRouter:u}=(0,c.ra)();return p&&(d=!0),(l||(null!=(a=null==(t=null==u?void 0:u.history)?void 0:t.length)?a:0)<=1)&&(d=!1),r.createElement("div",{className:"width-100"},r.createElement("style",null,o),r.createElement("div",{className:"p-auth-header"},r.createElement("div",{className:"left"},r.createElement(r.Fragment,null,d&&r.createElement(n.b,{className:"header-back-btn",name:"circle_back",onClick:()=>{p?p():m(-1)}}),l)),r.createElement("div",{className:"middle"},i),r.createElement("div",{className:"right"},s)))}},4948:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(33472),c=a(17566),r=a(81163),o=a(18763),i=a(24371),l=a(4116),s=a(67294),p=a(42763),d=`.master-password-description-container {
  display: flex;
  flex-direction: column;
}
.about-mp-container {
  padding: 0 18px;
}
.about-mp-container .space-container {
  width: 100%;
  padding: 20px 0;
}
.about-mp-container .space-container .master-title {
  text-align: center;
}
.about-mp-container .space-container .ant-typography {
  color: var(--text-color) !important;
}
.about-mp-container .space-container .content {
  font-size: 14px;
  color: var(--secondary-text-color) !important;
}
`,m=()=>{let{Title:e,Paragraph:t}=i.default,a=(0,o.sa)(),{t:m}=(0,p.$G)();return s.createElement("div",{className:"master-password-description-container height-100"},s.createElement(n.a,null,m("account.about_master_password")),s.createElement("div",{className:"scroll-content"},s.createElement("style",null,d),s.createElement("div",{className:"about-mp-container"},s.createElement(c.b,{className:"icon-navigation-back",name:"circle_back",onClick:()=>a(-1)}),s.createElement(l.Z,{direction:"vertical",className:"space-container"},s.createElement(e,{level:5,className:"title"},m("account.about_master_password_t1")),s.createElement(t,{className:"content"},m("account.about_master_password_p1")),s.createElement(e,{level:5,className:"title"},m("account.about_master_password_t2")),s.createElement(t,{className:"content"},m("account.about_master_password_p2")),s.createElement(e,{level:5,className:"title"},m("account.about_master_password_t3")),s.createElement(t,{className:"content"},m("account.about_master_password_p3"))))),s.createElement(r.a,{className:"footer-box-v2"}))}}}]);