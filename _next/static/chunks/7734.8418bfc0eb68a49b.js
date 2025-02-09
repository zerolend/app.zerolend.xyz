"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7734],{57380:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(1413),r=t(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},o=t(44192),u=r.forwardRef(function(e,n){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))})},41500:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(1413),r=t(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},o=t(44192),u=r.forwardRef(function(e,n){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))})},57741:function(e,n,t){var a=t(97582),r=t(23493),i=t.n(r),o=t(67294),u=t(39200),c=t(84966),l=t(23326),s=t(51046);n.Z=function(e,n){s.Z&&!(0,l.mf)(e)&&console.error("useThrottleFn expected parameter is a function, got ".concat(typeof e));var t,r=(0,u.Z)(e),d=null!==(t=null==n?void 0:n.wait)&&void 0!==t?t:1e3,p=(0,o.useMemo)(function(){return i()(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r.current.apply(r,(0,a.__spreadArray)([],(0,a.__read)(e),!1))},d,n)},[]);return(0,c.Z)(function(){p.cancel()}),{run:p,cancel:p.cancel,flush:p.flush}}},65597:function(e,n,t){t.d(n,{a:function(){return f},b:function(){return h},c:function(){return b}});var a,r=t(33472),i=t(63728),o=t(17566),u=t(81163),c=t(18763),l=t(68376),s=t(57741),d=t(73327),p=t(67294),m=t(42763),g=`.login-account-box {
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
`,f=e=>{let{userInfo:n,t}=e;return[{type:l.Gr.phone,icon:c.q,name:t("account.mobile"),value:n.phone,id:void 0,isOriginal:!1},{type:l.Gr.email,icon:c.i,name:t("account.email"),value:n.email,id:void 0,isOriginal:!1},{type:l.Gr.google,icon:c.l,name:t("login.google"),value:n.google_email,id:n.google_id,isOriginal:!1},{type:l.Gr.facebook,icon:c.j,name:t("login.facebook"),value:n.facebook_email,id:n.facebook_id,isOriginal:!1},{type:l.Gr.twitter,icon:c.s,name:t("login.twitter"),value:n.twitter_email,id:n.twitter_id,isOriginal:!1}]},h=e=>{var n,t,a,r;let i=null==e?void 0:e.replace(" ","");if(i){if(null!=(n=null==i?void 0:i.includes)&&n.call(i,"@"))i=`${i.split("@")[0].substr(0,3)}****@${i.split("@")[1]}`;else if(null!=(t=null==i?void 0:i.includes)&&t.call(i,"+")){let e=(0,d.h)(i),n=e.nationalNumber.toString();i=`+${e.countryCallingCode} ${null==(a=null==n?void 0:n.substr)?void 0:a.call(n,0,3)}****${null==(r=null==n?void 0:n.substr)?void 0:r.call(n,-4)}`}else i&&(i=`${i.substr(0,3)}****${i.substr(-4)}`)}return i},b=()=>{let{t:e}=(0,m.$G)(),n=(0,c.sa)(),{userInfo:t,showSelectSecurityAccount:l}=(0,c.ta)(),d=(0,i.a)(),{run:b}=(0,s.Z)(e=>{n("/account/verify",{state:{account:e.account,authType:a,pageType:"verify_security_account_bind_login_account"}})},{wait:3e3}),v=(0,p.useMemo)(()=>f({userInfo:t,t:e}),[t]),y=e=>{var r,i,o,u,c,s;e.value||e.id?n("/login-account/bind",{state:{authType:e.type}}):null!=(r=null==t?void 0:t.security_account)&&r.email||null!=(i=null==t?void 0:t.security_account)&&i.phone?(null==(o=null==t?void 0:t.security_account)?void 0:o.email)&&(null==(u=null==t?void 0:t.security_account)?void 0:u.phone)?l(!0,{authType:a,pageType:"verify_security_account_bind_login_account"}):b({account:(null==(c=null==t?void 0:t.security_account)?void 0:c.email)||(null==(s=null==t?void 0:t.security_account)?void 0:s.phone)}):d.error("Please bind security account first.")};return p.createElement("div",{className:"login-account-box"},p.createElement("style",null,g),p.createElement(r.a,{displayBackBtn:!0},e("account.login_account")),p.createElement("div",{className:"scroll-content"},p.createElement("div",{className:"login-account-description"},e("account.login_account_hint")),p.createElement("div",{className:"account-list"},null==v?void 0:v.map((n,t)=>p.createElement("div",{className:"login-account-item",onClick:()=>{a=n.type,y(n)},key:t},p.createElement("img",{src:n.icon}),p.createElement("div",{className:"login-account-name"},n.name),p.createElement("div",{className:"login-account-value","data-no-linked":!(n.value||n.id)},h(n.value||n.id)||e("account.not_linked")),p.createElement(o.b,{className:"arrow-right-icon",name:"arrow_right_icon"}))))),p.createElement(u.a,{className:"footer-box-v2"}))}},33472:function(e,n,t){t.d(n,{a:function(){return u}});var a=t(17566),r=t(18763),i=t(67294),o=`.p-auth-header {
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
`,u=e=>{var n,t;let{children:u,leftContent:c,rightContent:l,onBack:s}=e,{displayBackBtn:d=!1}=e,p=(0,r.sa)(),{customRouter:m}=(0,r.ra)();return s&&(d=!0),(c||(null!=(t=null==(n=null==m?void 0:m.history)?void 0:n.length)?t:0)<=1)&&(d=!1),i.createElement("div",{className:"width-100"},i.createElement("style",null,o),i.createElement("div",{className:"p-auth-header"},i.createElement("div",{className:"left"},i.createElement(i.Fragment,null,d&&i.createElement(a.b,{className:"header-back-btn",name:"circle_back",onClick:()=>{s?s():p(-1)}}),c)),i.createElement("div",{className:"middle"},u),i.createElement("div",{className:"right"},l)))}},72355:function(e,n,t){t.d(n,{a:function(){return a},b:function(){return r}});var a=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqip\xebri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61"],["Austria (\xd6sterreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (Belgi\xeb)","be","32"],["Belize","bz","501"],["Benin (B\xe9nin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1"],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599"],["Cayman Islands","ky","1345"],["Central African Republic","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61"],["Cocos (Keeling) Islands","cc","61"],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC)","cd","243"],["Congo (Republic)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["C\xf4te d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Cura\xe7ao","cw","599"],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česk\xe1 republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic","do","1"],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (F\xf8royar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358"],["France","fr","33"],["French Guiana","gf","594"],["French Polynesia","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590"],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44"],["Guinea (Guin\xe9e)","gn","224"],["Guinea-Bissau (Guin\xe9 Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarorsz\xe1g)","hu","36"],["Iceland (\xcdsland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44"],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39"],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44"],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7"],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262"],["Mexico (M\xe9xico)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212"],["Mozambique (Mo\xe7ambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibi\xeb)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Cal\xe9donie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47"],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panam\xe1)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Per\xfa)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1"],["Qatar (‫قطر‬‎)","qa","974"],["R\xe9union (La R\xe9union)","re","262"],["Romania (Rom\xe2nia)","ro","40"],["Russia (Россия)","ru","7"],["Rwanda","rw","250"],["Saint Barth\xe9lemy (Saint-Barth\xe9lemy)","bl","590"],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin","mf","590"],["Saint Pierre and Miquelon","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["S\xe3o Tom\xe9 and Pr\xedncipe","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (S\xe9n\xe9gal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (Espa\xf1a)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47"],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (T\xfcrkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates","ae","971"],["United Kingdom","gb","44"],["United States","us","1"],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Citt\xe0 del Vaticano)","va","39"],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212"],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["\xc5land Islands","ax","358"]];function r(){let e=(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).split("-"),n=e.length>1?e[1]:e[0],t;return n&&n.length>0&&(t=a.find(e=>e[1].toUpperCase()===n)),t}},97734:function(e,n,t){t.r(n),t.d(n,{default:function(){return eb}});var a=t(72355),r=t(65597),i=t(33472),o=t(63728),u=t(81163),c=t(18763),l=t(68376),s=t(98373),d=t(57741),p=t(47753),m=t(54117),g=t(55126),f=t(56469),h=t(73327),b=t(67294),v=t(42763),y=t(57380),x=t(39200),w=t(71990),N=function(e){if(!e||!document.getRootNode)return document;var n,t=Array.isArray(e)?e:[e];return t.every(function(e){var n=(0,w.n)(e);return!!n&&n.getRootNode() instanceof ShadowRoot})&&(n=(0,w.n)(t[0]))?n.getRootNode():document},k=t(30694),E=t(87462),S=t(4942),Z=t(71002),_=t(97685),C=t(41500),I=t(93967),M=t.n(I),B=t(45987),T=t(15105),z=t(8410),A=t(42550),R=t(15671),F=t(43144);function G(){return"function"==typeof BigInt}function j(e){var n=e.trim(),t=n.startsWith("-");t&&(n=n.slice(1)),(n=n.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,"")).startsWith(".")&&(n="0".concat(n));var a=n||"0",r=a.split("."),i=r[0]||"0",o=r[1]||"0";"0"===i&&"0"===o&&(t=!1);var u=t?"-":"";return{negative:t,negativeStr:u,trimStr:a,integerStr:i,decimalStr:o,fullStr:"".concat(u).concat(a)}}function P(e){var n=String(e);return!Number.isNaN(Number(n))&&n.includes("e")}function L(e){var n=String(e);if(P(e)){var t=Number(n.slice(n.indexOf("e-")+2)),a=n.match(/\.(\d+)/);return(null==a?void 0:a[1])&&(t+=a[1].length),t}return n.includes(".")&&q(n)?n.length-n.indexOf(".")-1:0}function $(e){var n=String(e);if(P(e)){if(e>Number.MAX_SAFE_INTEGER)return String(G()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(G()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);n=e.toFixed(L(n))}return j(n).fullStr}function q(e){return"number"==typeof e?!Number.isNaN(e):!!e&&(/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e))}function O(e){var n="number"==typeof e?$(e):j(e).fullStr;return n.includes(".")?j(n.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var V=function(){function e(n){if((0,R.Z)(this,e),this.origin="",this.number=void 0,this.empty=void 0,!n&&0!==n||!String(n).trim()){this.empty=!0;return}this.origin=String(n),this.number=Number(n)}return(0,F.Z)(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var t=Number(n);if(Number.isNaN(t))return this;var a=this.number+t;if(a>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var r=Math.max(L(this.number),L(t));return new e(a.toFixed(r))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toNumber()===(null==e?void 0:e.toNumber())}},{key:"lessEquals",value:function(e){return 0>=this.add(e.negate().toString()).toNumber()}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return e?this.isInvalidate()?"":$(this.number):this.origin}}]),e}(),D=function(){function e(n){if((0,R.Z)(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,!n&&0!==n||!String(n).trim()){this.empty=!0;return}if(this.origin=String(n),"-"===n){this.nan=!0;return}var t=n;if(P(t)&&(t=Number(t)),q(t="string"==typeof t?t:$(t))){var a=j(t);this.negative=a.negative;var r=a.trimStr.split(".");this.integer=BigInt(r[0]);var i=r[1]||"0";this.decimal=BigInt(i),this.decimalLen=i.length}else this.nan=!0}return(0,F.Z)(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(e){return BigInt("".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e,"0")))}},{key:"negate",value:function(){var n=new e(this.toString());return n.negative=!n.negative,n}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var t=new e(n);if(t.isInvalidate())return this;var a=Math.max(this.getDecimalStr().length,t.getDecimalStr().length),r=j((this.alignDecimal(a)+t.alignDecimal(a)).toString()),i=r.negativeStr,o=r.trimStr,u="".concat(i).concat(o.padStart(a+1,"0"));return new e("".concat(u.slice(0,-a),".").concat(u.slice(-a)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toString()===(null==e?void 0:e.toString())}},{key:"lessEquals",value:function(e){return 0>=this.add(e.negate().toString()).toNumber()}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return e?this.isInvalidate()?"":j("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function U(e){return G()?new D(e):new V(e)}function K(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(""===e)return"";var r=j(e),i=r.negativeStr,o=r.integerStr,u=r.decimalStr,c="".concat(n).concat(u),l="".concat(i).concat(o);if(t>=0){var s=Number(u[t]);return s>=5&&!a?K(U(e).add("".concat(i,"0.").concat("0".repeat(t)).concat(10-s)).toString(),n,t,a):0===t?l:"".concat(l).concat(n).concat(u.padEnd(t,"0").slice(0,t))}return".0"===c?l:"".concat(l).concat(c)}var H=t(31131);function W(e){var n=e.prefixCls,t=e.upNode,a=e.downNode,r=e.upDisabled,i=e.downDisabled,o=e.onStep,u=b.useRef(),c=b.useRef();c.current=o;var l=function(e,n){e.preventDefault(),c.current(n),u.current=setTimeout(function e(){c.current(n),u.current=setTimeout(e,200)},600)},s=function(){clearTimeout(u.current)};if(b.useEffect(function(){return s},[]),(0,H.Z)())return null;var d="".concat(n,"-handler"),p=M()(d,"".concat(d,"-up"),(0,S.Z)({},"".concat(d,"-up-disabled"),r)),m=M()(d,"".concat(d,"-down"),(0,S.Z)({},"".concat(d,"-down-disabled"),i)),g={unselectable:"on",role:"button",onMouseUp:s,onMouseLeave:s};return b.createElement("div",{className:"".concat(d,"-wrap")},b.createElement("span",(0,E.Z)({},g,{onMouseDown:function(e){l(e,!0)},"aria-label":"Increase Value","aria-disabled":r,className:p}),t||b.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-up-inner")})),b.createElement("span",(0,E.Z)({},g,{onMouseDown:function(e){l(e,!1)},"aria-label":"Decrease Value","aria-disabled":i,className:m}),a||b.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-down-inner")})))}var J=t(80334),X=t(75164),Q=function(){var e=(0,b.useRef)(0),n=function(){X.Z.cancel(e.current)};return(0,b.useEffect)(function(){return n},[]),function(t){n(),e.current=(0,X.Z)(function(){t()})}},Y=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],ee=function(e,n){return e||n.isEmpty()?n.toString():n.toNumber()},en=function(e){var n=U(e);return n.isInvalidate()?null:n},et=b.forwardRef(function(e,n){var t,a,r,i=e.prefixCls,o=void 0===i?"rc-input-number":i,u=e.className,c=e.style,l=e.min,s=e.max,d=e.step,p=void 0===d?1:d,m=e.defaultValue,g=e.value,f=e.disabled,h=e.readOnly,v=e.upHandler,y=e.downHandler,x=e.keyboard,w=e.controls,N=e.stringMode,k=e.parser,C=e.formatter,I=e.precision,R=e.decimalSeparator,F=e.onChange,G=e.onInput,j=e.onPressEnter,P=e.onStep,V=(0,B.Z)(e,Y),D="".concat(o,"-input"),H=b.useRef(null),X=b.useState(!1),et=(0,_.Z)(X,2),ea=et[0],er=et[1],ei=b.useRef(!1),eo=b.useRef(!1),eu=b.useRef(!1),ec=b.useState(function(){return U(null!=g?g:m)}),el=(0,_.Z)(ec,2),es=el[0],ed=el[1],ep=b.useCallback(function(e,n){return n?void 0:I>=0?I:Math.max(L(e),L(p))},[I,p]),em=b.useCallback(function(e){var n=String(e);if(k)return k(n);var t=n;return R&&(t=t.replace(R,".")),t.replace(/[^\w.-]+/g,"")},[k,R]),eg=b.useRef(""),ef=b.useCallback(function(e,n){if(C)return C(e,{userTyping:n,input:String(eg.current)});var t="number"==typeof e?$(e):e;if(!n){var a=ep(t,n);q(t)&&(R||a>=0)&&(t=K(t,R||".",a))}return t},[C,ep,R]),eh=b.useState(function(){var e=null!=m?m:g;return es.isInvalidate()&&["string","number"].includes((0,Z.Z)(e))?Number.isNaN(e)?"":e:ef(es.toString(),!1)}),eb=(0,_.Z)(eh,2),ev=eb[0],ey=eb[1];function ex(e,n){ey(ef(e.isInvalidate()?e.toString(!1):e.toString(!n),n))}eg.current=ev;var ew=b.useMemo(function(){return en(s)},[s,I]),eN=b.useMemo(function(){return en(l)},[l,I]),ek=b.useMemo(function(){return!(!ew||!es||es.isInvalidate())&&ew.lessEquals(es)},[ew,es]),eE=b.useMemo(function(){return!(!eN||!es||es.isInvalidate())&&es.lessEquals(eN)},[eN,es]),eS=(t=H.current,a=(0,b.useRef)(null),[function(){try{var e=t.selectionStart,n=t.selectionEnd,r=t.value,i=r.substring(0,e),o=r.substring(n);a.current={start:e,end:n,value:r,beforeTxt:i,afterTxt:o}}catch(e){}},function(){if(t&&a.current&&ea)try{var e=t.value,n=a.current,r=n.beforeTxt,i=n.afterTxt,o=n.start,u=e.length;if(e.endsWith(i))u=e.length-a.current.afterTxt.length;else if(e.startsWith(r))u=r.length;else{var c=r[o-1],l=e.indexOf(c,o-1);-1!==l&&(u=l+1)}t.setSelectionRange(u,u)}catch(e){(0,J.ZP)(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(e.message))}}]),eZ=(0,_.Z)(eS,2),e_=eZ[0],eC=eZ[1],eI=function(e){return ew&&!e.lessEquals(ew)?ew:eN&&!eN.lessEquals(e)?eN:null},eM=function(e){return!eI(e)},eB=function(e,n){var t=e,a=eM(t)||t.isEmpty();if(t.isEmpty()||n||(t=eI(t)||t,a=!0),!h&&!f&&a){var r,i=t.toString(),o=ep(i,n);return o>=0&&!eM(t=U(K(i,".",o)))&&(t=U(K(i,".",o,!0))),t.equals(es)||(r=t,void 0===g&&ed(r),null==F||F(t.isEmpty()?null:ee(N,t)),void 0===g&&ex(t,n)),t}return es},eT=Q(),ez=function e(n){if(e_(),ey(n),!eo.current){var t=U(em(n));t.isNaN()||eB(t,!0)}null==G||G(n),eT(function(){var t=n;k||(t=n.replace(/。/g,".")),t!==n&&e(t)})},eA=function(e){if((!e||!ek)&&(e||!eE)){ei.current=!1;var n,t=U(eu.current?O(p):p);e||(t=t.negate());var a=eB((es||U(0)).add(t.toString()),!1);null==P||P(ee(N,a),{offset:eu.current?O(p):p,type:e?"up":"down"}),null===(n=H.current)||void 0===n||n.focus()}},eR=function(e){var n=U(em(ev)),t=n;t=n.isNaN()?es:eB(n,e),void 0!==g?ex(es,!1):t.isNaN()||ex(t,!1)};return(0,z.o)(function(){es.isInvalidate()||ex(es,!1)},[I]),(0,z.o)(function(){var e=U(g);ed(e);var n=U(em(ev));e.equals(n)&&ei.current&&!C||ex(e,ei.current)},[g]),(0,z.o)(function(){C&&eC()},[ev]),b.createElement("div",{className:M()(o,u,(r={},(0,S.Z)(r,"".concat(o,"-focused"),ea),(0,S.Z)(r,"".concat(o,"-disabled"),f),(0,S.Z)(r,"".concat(o,"-readonly"),h),(0,S.Z)(r,"".concat(o,"-not-a-number"),es.isNaN()),(0,S.Z)(r,"".concat(o,"-out-of-range"),!es.isInvalidate()&&!eM(es)),r)),style:c,onFocus:function(){er(!0)},onBlur:function(){eR(!1),er(!1),ei.current=!1},onKeyDown:function(e){var n=e.which,t=e.shiftKey;ei.current=!0,t?eu.current=!0:eu.current=!1,n===T.Z.ENTER&&(eo.current||(ei.current=!1),eR(!1),null==j||j(e)),!1!==x&&!eo.current&&[T.Z.UP,T.Z.DOWN].includes(n)&&(eA(T.Z.UP===n),e.preventDefault())},onKeyUp:function(){ei.current=!1,eu.current=!1},onCompositionStart:function(){eo.current=!0},onCompositionEnd:function(){eo.current=!1,ez(H.current.value)},onBeforeInput:function(){ei.current=!0}},(void 0===w||w)&&b.createElement(W,{prefixCls:o,upNode:v,downNode:y,upDisabled:ek,downDisabled:eE,onStep:eA}),b.createElement("div",{className:"".concat(D,"-wrap")},b.createElement("input",(0,E.Z)({autoComplete:"off",role:"spinbutton","aria-valuemin":l,"aria-valuemax":s,"aria-valuenow":es.isInvalidate()?null:es.toString(),step:p},V,{ref:(0,A.sQ)(H,n),className:D,value:ev,onChange:function(e){ez(e.target.value)},disabled:f,readOnly:h}))))});et.displayName="InputNumber";var ea=t(17399),er=t(92933),ei=t(23173),eo=t(10475),eu=t(17877),ec=t(84476),el=t(79456),es=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>n.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t},ed=b.forwardRef(function(e,n){var t=b.useContext(ea.E_),a=t.getPrefixCls,r=t.direction,i=b.useContext(ei.Z),o=b.useState(!1),u=(0,_.Z)(o,2),c=u[0],l=u[1],s=b.useRef(null);b.useImperativeHandle(n,function(){return s.current});var d=e.className,p=e.size,m=e.disabled,g=e.prefixCls,f=e.addonBefore,h=e.addonAfter,v=e.prefix,x=e.bordered,w=void 0===x||x,N=e.readOnly,k=e.status,I=e.controls,B=es(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),T=a("input-number",g),z=(0,eu.ri)(T,r),A=z.compactSize,R=z.compactItemClassnames,F=b.createElement(C.Z,{className:"".concat(T,"-handler-up-inner")}),G=b.createElement(y.Z,{className:"".concat(T,"-handler-down-inner")}),j="boolean"==typeof I?I:void 0;"object"===(0,Z.Z)(I)&&(F=void 0===I.upIcon?F:b.createElement("span",{className:"".concat(T,"-handler-up-inner")},I.upIcon),G=void 0===I.downIcon?G:b.createElement("span",{className:"".concat(T,"-handler-down-inner")},I.downIcon));var P=(0,b.useContext)(eo.aM),L=P.hasFeedback,$=P.status,q=P.isFormItemInput,O=P.feedbackIcon,V=(0,el.F)($,k),D=A||p||i,U=b.useContext(er.Z),K=null!=m?m:U,H=M()((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)({},"".concat(T,"-lg"),"large"===D),"".concat(T,"-sm"),"small"===D),"".concat(T,"-rtl"),"rtl"===r),"".concat(T,"-borderless"),!w),"".concat(T,"-in-form-item"),q),(0,el.Z)(T,V),R,d),W=b.createElement(et,(0,E.Z)({ref:s,disabled:K,className:H,upHandler:F,downHandler:G,prefixCls:T,readOnly:N,controls:j},B));if(null!=v||L){var J=M()("".concat(T,"-affix-wrapper"),(0,el.Z)("".concat(T,"-affix-wrapper"),V,L),(0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)({},"".concat(T,"-affix-wrapper-focused"),c),"".concat(T,"-affix-wrapper-disabled"),e.disabled),"".concat(T,"-affix-wrapper-sm"),"small"===i),"".concat(T,"-affix-wrapper-lg"),"large"===i),"".concat(T,"-affix-wrapper-rtl"),"rtl"===r),"".concat(T,"-affix-wrapper-readonly"),N),"".concat(T,"-affix-wrapper-borderless"),!w),"".concat(d),!(f||h)&&d));W=b.createElement("div",{className:J,style:e.style,onMouseUp:function(){return s.current.focus()}},v&&b.createElement("span",{className:"".concat(T,"-prefix")},v),(0,ec.Tm)(W,{style:null,value:e.value,onFocus:function(n){var t;l(!0),null===(t=e.onFocus)||void 0===t||t.call(e,n)},onBlur:function(n){var t;l(!1),null===(t=e.onBlur)||void 0===t||t.call(e,n)}}),L&&b.createElement("span",{className:"".concat(T,"-suffix")},O))}if(null!=f||null!=h){var X="".concat(T,"-group"),Q="".concat(X,"-addon"),Y=f?b.createElement("div",{className:Q},f):null,ee=h?b.createElement("div",{className:Q},h):null,en=M()("".concat(T,"-wrapper"),X,(0,S.Z)({},"".concat(X,"-rtl"),"rtl"===r)),ed=M()("".concat(T,"-group-wrapper"),(0,S.Z)((0,S.Z)((0,S.Z)({},"".concat(T,"-group-wrapper-sm"),"small"===i),"".concat(T,"-group-wrapper-lg"),"large"===i),"".concat(T,"-group-wrapper-rtl"),"rtl"===r),(0,el.Z)("".concat(T,"-group-wrapper"),V,L),d);W=b.createElement("div",{className:ed,style:e.style},b.createElement("div",{className:en},Y&&b.createElement(eu.BR,null,b.createElement(eo.Ux,{status:!0,override:!0},Y)),(0,ec.Tm)(W,{style:null,disabled:K}),ee&&b.createElement(eu.BR,null,b.createElement(eo.Ux,{status:!0,override:!0},ee))))}return W}),ep=t(21017),em=t(27088),eg=`.phone-input-item-container {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  overflow: initial;
}
.phone-input-item-container .ant-input-affix-wrapper,
.phone-input-item-container .ant-input-number-group-wrapper {
  width: 100%;
  padding: 0;
  border: 1px solid var(--input-border-color) !important;
  border-radius: var(--primary-btn-border-radius);
  line-height: 47px;
  background: var(--input-background-color) !important;
  box-shadow: none !important;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-group-addon,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-group-addon {
  position: initial;
  border: none;
  background-color: var(--input-background-color);
  border-end-start-radius: var(--primary-btn-border-radius);
  border-start-start-radius: var(--primary-btn-border-radius);
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-status-error:not(.ant-input-number-disabled, .ant-input-number-borderless).ant-input-number,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-status-error:not(.ant-input-number-disabled, .ant-input-number-borderless).ant-input-number,
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-status-error:not(
                .ant-input-number-disabled,
                .ant-input-number-borderless
            ).ant-input-number:hover,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-status-error:not(
                .ant-input-number-disabled,
                .ant-input-number-borderless
            ).ant-input-number:hover {
  border: none;
  background: none;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number {
  border: none;
  background: none;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-focused,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-focused {
  box-shadow: none !important;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-disabled,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-disabled {
  background: none;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input,
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-input,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-input {
  height: 47px;
  border: none !important;
  border-radius: 0;
  line-height: 47px;
  color: var(--text-color);
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input:hover,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input:hover,
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-input:hover,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-input:hover {
  border: none !important;
}
.phone-input-item-container .ant-input-affix-wrapper[data-focus='true'],
.phone-input-item-container .ant-input-number-group-wrapper[data-focus='true'] {
  border: 1px solid var(--accent-color) !important;
}
.phone-input-item-container .ant-input[disabled] {
  width: 100%;
  height: 47px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--primary-btn-border-radius);
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.phone-input-item-container .country-box {
  position: initial;
  cursor: pointer;
}
.phone-input-item-container .country-box .prefix-wrap {
  display: flex;
  color: var(--text-color);
  gap: 4px;
}
.phone-input-item-container .country-box .account-select-country-list {
  position: absolute;
  z-index: 2;
  top: 54px;
  left: 0%;
  width: 100%;
  height: 350px;
  border-radius: var(--card-border-radius) !important;
  overflow: hidden auto;
  background-color: var(--input-background-color);
}
.phone-input-item-container .country-box .account-select-country-list::-webkit-scrollbar {
  display: none;
  width: 0;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input:focus {
  border: none !important;
  box-shadow: none !important;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap.account-select-country-item {
  padding-right: 13px;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap.account-select-country-item:hover {
  background: var(--input-background-color);
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap.account-select-country-item:hover.search-input-wrap {
  background: none;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input-clear-icon {
  color: var(--text-color);
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input-affix-wrapper {
  border-color: var(--keyword-border-color) !important;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input-suffix {
  position: relative;
  right: 10px;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .search-input {
  width: 100%;
  height: 32px;
  border-radius: var(--primary-btn-border-radius);
  overflow: hidden;
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .search-input .ant-input {
  width: 100%;
  height: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  line-height: initial;
}
.phone-input-item-container .country-box .account-select-country-list .no-data {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  color: var(--text-color);
}
.phone-input-item-container .country-box .account-select-country-list .account-select-country-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 47px;
  padding: 5px 0 5px 13px;
  margin: 0;
  border-bottom: 1px solid var(--keyword-border-color);
  font-size: 14px;
  color: var(--text-color);
  cursor: pointer;
}
.phone-input-item-container .country-box .account-select-country-list .account-select-country-item:hover {
  background-color: var(--keyword-border-color);
}
.phone-input-item-container .country-box .account-select-country-list .account-select-country-item div {
  display: flex;
  max-width: 80%;
  margin-right: 13px;
}
.phone-input-item-container .country-box input[type='number']::-webkit-inner-spin-button,
.phone-input-item-container .country-box input[type='number']::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}
.phone-input-item-container .country-box.phone {
  display: flex;
  align-items: center;
}
.phone-input-item-container .country-box .account-select-opt {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;
  padding-right: 4px;
  padding-left: 4px;
  cursor: pointer;
}
.phone-input-item-container .country-box .account-select-opt .account-select-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: 15px;
}
.phone-input-item-container .country-box .account-select-opt .down-more {
  margin-left: 6px;
  font-size: 10px;
}
.phone-input-item-container .country-box span {
  flex-shrink: 0;
  margin: 0;
  font-size: 15px;
}
.phone-input-item-container .country-box .country-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.phone-input-item-container .country-box input {
  flex-shrink: 1;
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  padding: 0 15px;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 15px;
  line-height: 45px;
  color: var(--text-color);
  background-color: transparent;
}
`,ef=e=>{var n,t,r;let i=e.form,o=p.Z.useWatch(e.name,i),[u,c]=(0,b.useState)(["United States","us","1"]),{t:l}=(0,v.$G)(),[s,d]=(0,b.useState)(!1),m=(0,b.useRef)(),f=(0,b.useRef)(),[E,S]=(0,b.useState)(""),Z=(0,b.useRef)(),_=(0,b.useMemo)(()=>a.a.filter(e=>e.join("+").toLowerCase().includes(E.toLowerCase())),[E]);return n=()=>{d(!1)},void 0===t&&(t="click"),r=(0,x.Z)(n),(0,k.Z)(function(){var e=function(e){(Array.isArray(m)?m:[m]).some(function(n){var t=(0,w.n)(n);return!t||t.contains(e.target)})||r.current(e)},n=N(m),a=Array.isArray(t)?t:[t];return a.forEach(function(t){return n.addEventListener(t,e)}),function(){a.forEach(function(t){return n.removeEventListener(t,e)})}},Array.isArray(t)?t:[t],m),(0,b.useEffect)(()=>{s&&S("")},[s]),(0,b.useEffect)(()=>{if(null!=o&&o.includes("*"))return;let n=`+${u[2]}`,t=(o||"").replace(/^\+\d+/,"").trim();i.setFieldsValue({[e.name]:`${n} ${t}`}),t&&i.validateFields(["_phone"])},[u,o]),(0,b.useEffect)(()=>{var e;try{if(null!=(e=null==o?void 0:o.includes)&&e.call(o,"*"))i.setFieldsValue({_phone:o});else if(o){if((0,em.y)(o)){let e=(0,h.h)(o),n=e.nationalNumber;i.setFieldsValue({_phone:n});let t=e.countryCallingCode.toString(),r=e.country;if(t&&r){let e=a.a.filter(e=>e[2].toString()===t&&e[1].toLowerCase()===r.toLowerCase());e&&e.length>0&&c(e[e.length-1])}}}else{let e=(0,a.b)();e&&c(e)}}catch{}},[o]),b.createElement(b.Fragment,null,b.createElement("style",null,eg),b.createElement("div",{className:"phone-input-item-container"},b.createElement(p.Z.Item,{className:!e.disabled||e.disabled&&"input"!==e.previewMode?"hidden":"",extra:e.extra,name:e.name},b.createElement(g.Z,{disabled:e.disabled})),b.createElement(p.Z.Item,{name:"_phone",className:e.disabled&&"input"==e.previewMode?"hidden":"",extra:e.extra,rules:[{required:!0,validator:(e,n)=>{try{if(!n)return Promise.reject(l("login.input_phone_holder"));try{if(n=`+${u[2]} ${n}`,!(0,em.y)(n))return Promise.reject(l("login.phone_format_error"))}catch{return Promise.reject(l("login.phone_format_error"))}}catch{return Promise.reject(l("login.phone_format_error"))}return Promise.resolve()}}]},b.createElement(ed,{placeholder:l("account.mobile"),disabled:e.disabled,controls:!1,onChange:n=>{i.setFieldsValue({[e.name]:`+${u[2]} ${n}`})},onFocus:()=>{var e;null==(e=document.querySelector(".ant-input-number-group-wrapper"))||e.setAttribute("data-focus","true")},onBlur:()=>{var e;null==(e=document.querySelector(".ant-input-number-group-wrapper"))||e.setAttribute("data-focus","false")},addonBefore:b.createElement("div",{className:"country-box phone",ref:f},b.createElement("div",{className:"prefix-wrap",onClick:()=>{e.disabled||(d(!s),setTimeout(()=>{var e;null==(e=Z.current)||e.focus()}))},ref:m},b.createElement("div",{className:"account-select-opt"},b.createElement("div",{className:"account-select-icon"},(0,ep.Z)(`${u[1]}`)),b.createElement(y.Z,{className:"down-more"})),b.createElement("span",null,"+",u[2])),s&&b.createElement("div",{className:"account-select-country-list "},b.createElement("div",{className:"account-select-country-item search-input-wrap",onClick:e=>{e.stopPropagation()}},b.createElement(g.Z,{ref:Z,className:"search-input",type:"text",placeholder:l("login.search_country_holder"),allowClear:!0,onChange:e=>{var n;S((null==(n=null==e?void 0:e.target)?void 0:n.value)||"")}})),_&&_.length?b.createElement("div",{className:"p-country-list"},_.map((e,n)=>b.createElement("div",{key:`${e[0]}-${e[1]}-${e[2]}`,className:"account-select-country-item",onClick:()=>{c(e),d(!1)}},b.createElement("div",{className:"country-box"},b.createElement("div",{className:"country-flag"},(0,ep.Z)(`${e[1]}`)),b.createElement("span",{className:"country-name"},e[0])),b.createElement("div",{className:"country-code"},"+"+e[2])))):b.createElement("div",{className:"no-data"},"No data")))}))))},eh=`.login-account-bind {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.login-account-bind .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input {
  background-color: var(--input-background-color);
}
.login-account-bind .ant-spin-spinning {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 20vh;
}
.login-account-bind .account-title {
  font-weight: 500;
  font-size: 18px;
}
.login-account-bind .account-bind-form {
  width: 100%;
  padding: 0 18px;
  margin-top: 34px;
}
.login-account-bind .account-bind-form .account-input {
  width: 100%;
  height: 47px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--primary-btn-border-radius);
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.login-account-bind .account-bind-form .link-account-hint {
  align-self: flex-start;
  padding-top: 6px;
  font-size: 12px;
  color: var(--secondary-text-color);
}
.login-account-bind .account-bind-form .link-btn {
  margin-top: 15px;
  margin-bottom: 30px;
}
.login-account-bind .account-bind-form .unlink-btn {
  margin-top: 15px;
  margin-bottom: 30px;
  color: #fff;
  background: #ea4335;
}
.login-account-bind .footer-box {
  position: absolute;
  bottom: 10px;
  margin: 0;
}
@media screen and (max-height: 350px) {
  .login-account-bind .footer-box {
    position: unset;
    bottom: 0;
    margin-bottom: 10px;
  }
}
`,eb=e=>{let n=(null==e?void 0:e.authType)||"",t=(null==e?void 0:e.verifyToken)||"",{t:a}=(0,v.$G)(),[y]=p.Z.useForm(),x=(0,c.sa)(),w=(0,o.a)(),{userInfo:N}=(0,c.ha)(),{showSelectSecurityAccount:k}=(0,c.ta)(),[E,S]=(0,b.useState)(!1),{runAsync:Z}=(0,s.Z)(l.m6,{manual:!0}),{authCoreModal:_}=(0,c.qa)(),C=(0,b.useMemo)(()=>(0,r.a)({userInfo:N,t:a}),[N]),I=(0,b.useMemo)(()=>{var e;return(null==(e=null==C?void 0:C.find)?void 0:e.call(C,e=>e.type===n))||{}},[C,n]),M=(0,b.useMemo)(()=>!I.value&&!I.id,[I]),{run:B}=((0,b.useMemo)(()=>!I.isOriginal&&!M,[I]),(0,d.Z)(e=>{x("/account/verify",{state:{account:e.account,authType:n,unbindAccount:y.getFieldValue("inputValue"),pageType:"unbind_login_account"}})},{wait:3e3}));return(0,b.useEffect)(()=>{if((null==I?void 0:I.value)||(null==I?void 0:I.id)){if(n===l.Gr.phone){let e=(0,h.h)(null==I?void 0:I.value.replace(/\s/g,"")),n=e.countryCallingCode,t=e.nationalNumber;y.setFieldsValue({inputValue:(0,r.b)(`+${n} ${t}`)})}else y.setFieldsValue({inputValue:(0,r.b)((null==I?void 0:I.value)||(null==I?void 0:I.id)||"")})}},[null==I?void 0:I.value,null==I?void 0:I.id,n]),b.createElement("div",{className:"login-account-bind "},b.createElement("style",null,eh),b.createElement(i.a,{displayBackBtn:!0},I.name),b.createElement(p.Z,{className:"account-bind-form",layout:"vertical",form:y,onFinish:()=>{y.validateFields().then(e=>{var r,i,o,u,c,s,d;let p=(null==(u=null==(o=null==(i=null==(r=y.getFieldsValue())?void 0:r.inputValue)?void 0:i.replace(/\s/g,""))?void 0:o.trim)?void 0:u.call(o))||"";if(S(!0),"phone"===n&&(null==(c=null==N?void 0:N.security_account)?void 0:c.phone)===p){m.Z.error({title:a("new.duplicate_phonel_bindings"),wrapClassName:"auth-core-modal-error",getContainer:()=>_.rootBody}),S(!1);return}if("email"===n&&(null==(d=null==(s=null==N?void 0:N.security_account)?void 0:s.email)?void 0:d.toLowerCase())===(null==p?void 0:p.toLowerCase())){m.Z.error({title:a("new.duplicate_email_bindings"),wrapClassName:"auth-core-modal-error",getContainer:()=>_.rootBody}),S(!1);return}let g={};n===l.Gr.phone?g.phone=p:g.email=p,Z(g).then(e=>{x("/account/verify",{state:{account:p,authType:n,verifyToken:t,pageType:"bind_login_account"}}),S(!1)}).catch(e=>{S(!1),20109===e.error_code?m.Z.error({title:n===l.Gr.phone?a("error.server_phone_20109"):a("error.server_email_20109"),wrapClassName:"auth-core-modal-error",getContainer:()=>_.rootBody}):w.error(e.message)})})}},n===l.Gr.phone?b.createElement(ef,{name:"inputValue",form:y,disabled:!M,previewMode:"input",extra:b.createElement("div",{className:"link-account-hint"},a("new.link_account_hint").format(I.name))}):b.createElement(p.Z.Item,{name:"inputValue",validateTrigger:"onBlur",extra:b.createElement("div",{className:"link-account-hint"},a("new.link_account_hint").format(I.name)),rules:[{required:!0,validator:async(e,n)=>n?c.u.test(n)?Promise.resolve():Promise.reject(a("login.email_format_error")):Promise.reject(a("account.input_vaild_email"))}]},b.createElement(g.Z,{className:"account-input",placeholder:I.name,disabled:!M,onChange:e=>y.setFields([{name:"email",value:e.target.value,errors:[]}])})),b.createElement(p.Z.Item,null,M?b.createElement(f.Z,{className:"primary-antd-btn link-btn",loading:E,htmlType:"submit"},a("account.link")):b.createElement(b.Fragment,null))),b.createElement(u.a,null))}},21017:function(e,n,t){function a(e){return r(e[0])+r(e[1])}function r(e){return String.fromCodePoint(127397+e.toUpperCase().charCodeAt(0))}t.d(n,{Z:function(){return a}})}}]);