"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7016],{47016:function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var a=o(17566),n=o(81163),i=o(18763),l=o(68376),c=o(63448),r=o(45772),s=o(80129),g=o(67294),A=o(42763),d=`.social-loading-content {
  text-align: center;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0;
}
.social-loading-content .wrap {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.social-loading-content .wrap .social-logo-content {
  width: 105px;
  height: 105px;
  border-radius: 100%;
  position: relative;
}
.social-loading-content .wrap .social-logo-content.failed {
  cursor: pointer;
}
.social-loading-content .wrap .social-logo-content .logo {
  width: 100%;
  height: 100%;
}
.social-loading-content .wrap .social-logo-content .logo img {
  width: 100%;
  height: auto;
}
.social-loading-content .wrap .social-logo-content .spin {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: social-loading-spin 1.4s linear infinite;
}
.social-loading-content .wrap .social-logo-content .spin img {
  width: 100%;
  height: 100%;
}
.social-loading-content .wrap .social-logo-content .refresh-btn {
  font-size: 19px;
  position: absolute;
  bottom: 10px;
  right: 27px;
}
.social-loading-content .wrap .title {
  margin-top: 10px;
  margin-bottom: 10px;
}
.social-loading-content .wrap .desc {
  width: 70%;
  line-height: 1.2;
  color: var(--secondary-text-color);
}
@keyframes social-loading-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`,p=({authType:e,isFailed:t=!0})=>{let{t:o}=(0,A.$G)(),[l,c]=g.useState(!t),{socialAuthLogin:r}=(0,i.C)();return g.createElement("div",{className:"social-loading-content"},g.createElement("style",null,d),g.createElement("div",{className:"wrap"},g.createElement("div",{className:`social-logo-content ${t?"failed":""}`,onClick:()=>{!t||l||(c(!0),r({socialType:e}))}},g.createElement("div",{className:"logo"},g.createElement("img",{src:(0,i.A)()[e]||"",alt:"logo"})),l&&g.createElement("div",{className:"spin"},g.createElement("img",{src:"data:image/png;base64,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",alt:"loading"})),t&&!l&&g.createElement("div",{className:"refresh-btn"},g.createElement(a.b,{className:"refresh-icon",name:"refresh_icon"}))),g.createElement("div",{className:"title"},o(t?"login.request_failed":"login.logging_you_in")),t&&g.createElement("div",{className:"desc"},o("login.something_wrong"))),g.createElement(n.a,{className:"footer-box-v2"}))},w=`.index-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--text-color);
}
`,u=()=>{let{connect:e}=(0,i.G)(),t=(0,i.sa)(),{setConnectionStatus:o,socialConnectCallback:a,setAuthCoreModal:n}=(0,i.ta)(),[A,d]=g.useState(!1),[u,m]=(0,g.useState)(""),[f,h]=(0,g.useState)(!1),y=async()=>{var g;try{let A=s.parse((0,i.z)()?"":window.location.search,{ignoreQueryPrefix:!0}),p=null==A?void 0:A.particleThirdpartyParams;if(!p){(0,l.Mb)()||o("disconnected");return}delete A.particleThirdpartyParams;let w=(window.location.origin+window.location.pathname+"?"+s.stringify(A)).replace(/\?$/,"");window.history.replaceState({},document.title,w),document.title=document.title||w;let{code:u,nonce:f,appState:y,error:C}=JSON.parse(r.decode(p)),{authorization:E,chain:P,purpose:G,verifyToken:N}=y?JSON.parse(r.decode(y)):{};if(C){(0,l.Mb)()||o("disconnected"),G?c.ZP.error(C):null==(g=null==a?void 0:a.onError)||g.call(a,Error(C)),"bindLoginAccount"!==G&&h(!0);return}let v=f.split("@")[0];m(v),"bindLoginAccount"===G?t("/login-account/bind-loading",{state:{authType:v,verifyToken:N,code:u,nonce:f},replace:!0}):(await new Promise(e=>{setTimeout(()=>{e(!0)},20)}),(0,l.M3)(v)&&(d(!0),n({particleModalVisible:!0})),await e({socialType:v,code:u,nonce:f,authorization:E,chain:P}))}catch{(0,l.Mb)()||o("disconnected")}d(!1)};return(0,g.useEffect)(()=>{y()},[]),g.createElement("div",{className:"index-container"},g.createElement("style",null,w),A&&g.createElement(p,{authType:u,isFailed:f}))}}}]);