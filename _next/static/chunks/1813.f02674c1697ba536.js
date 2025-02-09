"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1813],{33472:function(e,t,a){a.d(t,{a:function(){return l}});var i=a(17566),n=a(18763),c=a(67294),r=`.p-auth-header {
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
`,l=e=>{var t,a;let{children:l,leftContent:o,rightContent:s,onBack:d}=e,{displayBackBtn:m=!1}=e,p=(0,n.sa)(),{customRouter:v}=(0,n.ra)();return d&&(m=!0),(o||(null!=(a=null==(t=null==v?void 0:v.history)?void 0:t.length)?a:0)<=1)&&(m=!1),c.createElement("div",{className:"width-100"},c.createElement("style",null,r),c.createElement("div",{className:"p-auth-header"},c.createElement("div",{className:"left"},c.createElement(c.Fragment,null,m&&c.createElement(i.b,{className:"header-back-btn",name:"circle_back",onClick:()=>{d?d():p(-1)}}),o)),c.createElement("div",{className:"middle"},l),c.createElement("div",{className:"right"},s)))}},31813:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var i=a(33472),n=a(17566),c=a(81163),r=a(18763),l=a(68376),o=a(98373),s=a(4942),d=a(87462),m=a(71002),p=a(93967),v=a.n(p),u=a(67294),h=a(17399),f=a(98423),g=function(e){var t=e.prefixCls,a=e.className,i=e.style,n=e.size,c=e.shape,r=v()((0,s.Z)((0,s.Z)({},"".concat(t,"-lg"),"large"===n),"".concat(t,"-sm"),"small"===n)),l=v()((0,s.Z)((0,s.Z)((0,s.Z)({},"".concat(t,"-circle"),"circle"===c),"".concat(t,"-square"),"square"===c),"".concat(t,"-round"),"round"===c)),o=u.useMemo(function(){return"number"==typeof n?{width:n,height:n,lineHeight:"".concat(n,"px")}:{}},[n]);return u.createElement("span",{className:v()(t,r,l,a),style:(0,d.Z)((0,d.Z)({},o),i)})},x=a(1413),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},E=a(44192),N=u.forwardRef(function(e,t){return u.createElement(E.Z,(0,x.Z)((0,x.Z)({},e),{},{ref:t,icon:w}))}),y=a(74902),Z=function(e){var t=function(t){var a=e.width,i=e.rows;return Array.isArray(a)?a[t]:(void 0===i?2:i)-1===t?a:void 0},a=e.prefixCls,i=e.className,n=e.style,c=e.rows,r=(0,y.Z)(Array(c)).map(function(e,a){return u.createElement("li",{key:a,style:{width:t(a)}})});return u.createElement("ul",{className:v()(a,i),style:n},r)},C=function(e){var t=e.prefixCls,a=e.className,i=e.width,n=e.style;return u.createElement("h3",{className:v()(t,a),style:(0,d.Z)({width:i},n)})};function b(e){return e&&"object"===(0,m.Z)(e)?e:{}}var k=function(e){var t=e.prefixCls,a=e.loading,i=e.className,n=e.style,c=e.children,r=e.avatar,l=void 0!==r&&r,o=e.title,m=void 0===o||o,p=e.paragraph,f=void 0===p||p,x=e.active,w=e.round,E=u.useContext(h.E_),N=E.getPrefixCls,y=E.direction,k=N("skeleton",t);if(a||!("loading"in e)){var z=!!l,_=!!m,q=!!f;if(z){var M=(0,d.Z)((0,d.Z)({prefixCls:"".concat(k,"-avatar")},_&&!q?{size:"large",shape:"square"}:{size:"large",shape:"circle"}),b(l));j=u.createElement("div",{className:"".concat(k,"-header")},u.createElement(g,(0,d.Z)({},M)))}if(_||q){if(_){var j,B,D,P,A=(0,d.Z)((0,d.Z)({prefixCls:"".concat(k,"-title")},!z&&q?{width:"38%"}:z&&q?{width:"50%"}:{}),b(m));D=u.createElement(C,(0,d.Z)({},A))}if(q){var H,I=(0,d.Z)((0,d.Z)({prefixCls:"".concat(k,"-paragraph")},(H={},z&&_||(H.width="61%"),!z&&_?H.rows=3:H.rows=2,H)),b(f));P=u.createElement(Z,(0,d.Z)({},I))}B=u.createElement("div",{className:"".concat(k,"-content")},D,P)}var Y=v()(k,(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},"".concat(k,"-with-avatar"),z),"".concat(k,"-active"),x),"".concat(k,"-rtl"),"rtl"===y),"".concat(k,"-round"),w),i);return u.createElement("div",{className:Y,style:n},j,B)}return void 0!==c?c:null};k.Button=function(e){var t=e.prefixCls,a=e.className,i=e.active,n=e.block,c=e.size,r=(0,u.useContext(h.E_).getPrefixCls)("skeleton",t),l=(0,f.Z)(e,["prefixCls"]),o=v()(r,"".concat(r,"-element"),(0,s.Z)((0,s.Z)({},"".concat(r,"-active"),i),"".concat(r,"-block"),void 0!==n&&n),a);return u.createElement("div",{className:o},u.createElement(g,(0,d.Z)({prefixCls:"".concat(r,"-button"),size:void 0===c?"default":c},l)))},k.Avatar=function(e){var t=e.prefixCls,a=e.className,i=e.active,n=e.shape,c=e.size,r=(0,u.useContext(h.E_).getPrefixCls)("skeleton",t),l=(0,f.Z)(e,["prefixCls","className"]),o=v()(r,"".concat(r,"-element"),(0,s.Z)({},"".concat(r,"-active"),i),a);return u.createElement("div",{className:o},u.createElement(g,(0,d.Z)({prefixCls:"".concat(r,"-avatar"),shape:void 0===n?"circle":n,size:void 0===c?"default":c},l)))},k.Input=function(e){var t=e.prefixCls,a=e.className,i=e.active,n=e.block,c=e.size,r=(0,u.useContext(h.E_).getPrefixCls)("skeleton",t),l=(0,f.Z)(e,["prefixCls"]),o=v()(r,"".concat(r,"-element"),(0,s.Z)((0,s.Z)({},"".concat(r,"-active"),i),"".concat(r,"-block"),n),a);return u.createElement("div",{className:o},u.createElement(g,(0,d.Z)({prefixCls:"".concat(r,"-input"),size:void 0===c?"default":c},l)))},k.Image=function(e){var t=e.prefixCls,a=e.className,i=e.style,n=e.active,c=(0,u.useContext(h.E_).getPrefixCls)("skeleton",t),r=v()(c,"".concat(c,"-element"),(0,s.Z)({},"".concat(c,"-active"),n),a);return u.createElement("div",{className:r},u.createElement("div",{className:v()("".concat(c,"-image"),a),style:i},u.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(c,"-image-svg")},u.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(c,"-image-path")}))))},k.Node=function(e){var t=e.prefixCls,a=e.className,i=e.style,n=e.active,c=e.children,r=(0,u.useContext(h.E_).getPrefixCls)("skeleton",t),l=v()(r,"".concat(r,"-element"),(0,s.Z)({},"".concat(r,"-active"),n),a),o=null!=c?c:u.createElement(N,null);return u.createElement("div",{className:l},u.createElement("div",{className:v()("".concat(r,"-image"),a),style:i},o))};var z=a(27484),_=a(42763),q=`.device-list-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: var(--text-color);
}
.device-list-container .scroll-wrapper {
  flex: 1;
  overflow: auto;
}
.device-list-container .devices-description {
  margin: 32px 18px 40px;
  font-weight: 400;
  font-size: 13px;
  color: var(--secondary-text-color);
}
.device-list-container .ant-spin-nested-loading > div > .ant-spin {
  top: 10vh;
}
.device-list-container .device-list {
  width: 100%;
  padding: 0 18px;
}
.device-list-container .device-list .ant-skeleton-content .ant-skeleton-title {
  display: none;
}
.device-list-container .device-list .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 12px 0 14px;
  margin-bottom: 10px;
  border-radius: var(--card-border-radius);
  background: var(--card-unclickable-background-color);
  cursor: pointer;
}
.device-list-container .device-list .item .device {
  font-weight: 500;
  font-size: 14px;
}
.device-list-container .device-list .item .created_at {
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  color: var(--secondary-text-color);
}
.device-list-container .device-list .item .right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}
.device-list-container .device-list .item .right .arrow-right-icon {
  color: var(--text-color);
}
.device-list-container .device-list .item .right .arrow-right-icon svg {
  width: 12px;
  height: 12px;
}
.device-list-container .device-list .item .right .current-icon {
  position: relative;
  height: 20px;
  padding: 0 10px;
  border-radius: 30px;
  overflow: hidden;
  font-size: 13px;
  line-height: 20px;
  white-space: nowrap;
  color: var(--accent-color);
}
.device-list-container .device-list .item .right .current-icon::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--accent-color);
  opacity: 0.15;
  content: '';
}
`,M=()=>{let{t:e}=(0,_.$G)(),t=(0,r.sa)(),{modalOptions:a}=(0,r.ua)(),{language:s}=(0,r.H)(),{loading:d,data:m=[],run:p}=(0,o.Z)(()=>(0,l.Ot)().then(e=>e.map(e=>{var t,i;if(e.updated_at&&(e.updated_at=z(new Date(e.updated_at)).format("YYYY/MM/DD HH:mm")),a.projectId===e.project_app_uuid&&(e.isCurrent=!0),e.login_channel&&(e.login_channel=e.login_channel.replace(/( |^)[a-z]/g,e=>e.toUpperCase())),null!=(t=null==e?void 0:e.location)&&t.country_code)try{e.location.country_name=new Intl.DisplayNames([s||"en"],{type:"region"}).of(null==(i=null==e?void 0:e.location)?void 0:i.country_code)}catch{}return e})),{cacheKey:"getAuthorizations",manual:!0});return(0,u.useEffect)(()=>{p()},[]),u.createElement("div",{className:"device-list-container"},u.createElement("style",null,q),u.createElement(i.a,{displayBackBtn:!0},e("new.authorization")),u.createElement("div",{className:"scroll-wrapper"},u.createElement("div",{className:"devices-description"},e("new.authorization_tips")),d?u.createElement("div",{className:"device-list"},u.createElement(k,null)):u.createElement("div",{className:"device-list"},null==m?void 0:m.map((a,i)=>u.createElement("div",{className:"item",key:i,onClick:()=>{t("/manageDevices/deviceDetails",{state:{loginDeviceInfo:a}})}},u.createElement("div",{className:"left"},u.createElement("div",{className:"wrap"},u.createElement("div",{className:"s-row device"},a.project_app_name),u.createElement("div",{className:"s-row created_at"},a.updated_at))),u.createElement("div",{className:"right"},a.isCurrent&&u.createElement("div",{className:"current-icon"},e("new.current")),u.createElement(n.b,{className:"arrow-right-icon",name:"arrow_right_icon"})))))),u.createElement(c.a,{className:"footer-box-v2"}))}}}]);