(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2873],{23493:function(e,t,a){var n=a(23279),o=a(13218);e.exports=function(e,t,a){var i=!0,r=!0;if("function"!=typeof e)throw TypeError("Expected a function");return o(a)&&(i="leading"in a?!!a.leading:i,r="trailing"in a?!!a.trailing:r),n(e,t,{leading:i,maxWait:t,trailing:r})}},52455:function(e,t,a){"use strict";a.d(t,{a:function(){return l}});var n=a(18763),o=a(67294),i=["alpha","numeric","alphanumeric"],r={alpha:{type:"text",inputMode:"text",pattern:"[a-zA-Z]{1}"},alphanumeric:{type:"text",inputMode:"text",pattern:"[a-zA-Z0-9]{1}"},numeric:{type:"tel",inputMode:"numeric",pattern:"[0-9]{1}",min:"0",max:"9"}},l=(0,o.forwardRef)(({allowedCharacters:e="alphanumeric",ariaLabel:t,autoFocus:a=!0,containerClassName:l,disabled:c,inputClassName:s,isPassword:u=!1,length:m=6,placeholder:p,onChange:d,code:g=""},h)=>{if(isNaN(m)||m<1)throw Error("Length should be a number and greater than 0");if(!i.some(t=>t===e))throw Error("Invalid value for allowedCharacters. Use alpha, numeric, or alphanumeric");let f=(0,o.useRef)([]),b=r[e];(0,o.useImperativeHandle)(h,()=>({focus:()=>{f.current&&f.current[0].focus()},clear:()=>{if(f.current){for(let e=0;e<f.current.length;e++)f.current[e].value="";f.current[0].focus()}v()}})),(0,o.useEffect)(()=>{a&&(0,n.y)()&&f.current[0].focus()},[]),(0,o.useEffect)(()=>{if(g){for(let e=0;e<f.current.length;e++)f.current[e].value="";for(let e=0;e<g.length;e++)f.current[e].value=g[e];v()}},[g]);let x=f.current.map(e=>e.value).join("")||"",v=()=>{let e=f.current.map(e=>e.value).join("");x!==e&&(d&&d(e),x=e)},y=e=>{var t;let{target:{value:a,nextElementSibling:n}}=e;if(1==a.length)a.match(b.pattern)?null!==n&&n.focus():e.target.value="";else if(a.length>1){let n=Number(e.target.getAttribute("data-index"))||0;for(let e=0;e<a.length;e++){let o=a.charAt(e);o.match(b.pattern)&&(null==(t=f.current)?void 0:t[n])&&(f.current[n].value=o,null!==f.current[n].nextElementSibling&&(f.current[n].nextElementSibling.focus(),n++))}}setTimeout(()=>{v()})},w=e=>{let{key:t}=e,a=e.target;if("Backspace"===t){if(""===a.value){if(null!==a.previousElementSibling){let t=a.previousElementSibling;t.value="",t.focus(),e.preventDefault()}}else a.value="";setTimeout(()=>{v()})}},A=e=>{e.target.select()},E=e=>{var t;let a=null!=(t=e.clipboardData.getData("Text"))?t:"";a=a.replace(/\s/g,"").substring(0,6);let n=0;for(let e=0;e<a.length;e++){let t=a.charAt(e),o=f.current[n].value;t.match(b.pattern)&&(o||(f.current[n].value=t,null!==f.current[n].nextElementSibling&&(f.current[n].nextElementSibling.focus(),n++)))}v(),e.preventDefault()};return o.createElement("div",{className:l},Array(6).fill(0).map((e,a)=>o.createElement("input",{key:a,"data-index":a,onChange:y,onKeyDown:w,onFocus:A,onPaste:E,...b,type:u?"password":b.type,ref:e=>{f.current[a]=e},className:s,autoComplete:0===a?"one-time-code":"off","aria-label":t?`${t}. Character ${a+1}.`:`Character ${a+1}.`,disabled:c,placeholder:p})),o.createElement("div",{className:"input-code-mask",onClick:e=>{e.preventDefault(),e.stopPropagation();for(let e=f.current.length-1;e>=0;e--)if(e>0&&!f.current[e].value&&f.current[e-1].value||0===e&&!f.current[e].value||e==f.current.length-1&&f.current[e].value){f.current[e].focus(),f.current[e].setSelectionRange(f.current[e].value.length,f.current[e].value.length);break}}}))})},26200:function(e,t,a){"use strict";a.d(t,{a:function(){return n}});var n="data:image/png;base64,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"},72355:function(e,t,a){"use strict";a.d(t,{a:function(){return n},b:function(){return o}});var n=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqip\xebri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61"],["Austria (\xd6sterreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (Belgi\xeb)","be","32"],["Belize","bz","501"],["Benin (B\xe9nin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1"],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599"],["Cayman Islands","ky","1345"],["Central African Republic","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61"],["Cocos (Keeling) Islands","cc","61"],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC)","cd","243"],["Congo (Republic)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["C\xf4te d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Cura\xe7ao","cw","599"],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česk\xe1 republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic","do","1"],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (F\xf8royar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358"],["France","fr","33"],["French Guiana","gf","594"],["French Polynesia","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590"],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44"],["Guinea (Guin\xe9e)","gn","224"],["Guinea-Bissau (Guin\xe9 Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarorsz\xe1g)","hu","36"],["Iceland (\xcdsland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44"],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39"],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44"],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7"],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262"],["Mexico (M\xe9xico)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212"],["Mozambique (Mo\xe7ambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibi\xeb)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Cal\xe9donie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47"],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panam\xe1)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Per\xfa)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1"],["Qatar (‫قطر‬‎)","qa","974"],["R\xe9union (La R\xe9union)","re","262"],["Romania (Rom\xe2nia)","ro","40"],["Russia (Россия)","ru","7"],["Rwanda","rw","250"],["Saint Barth\xe9lemy (Saint-Barth\xe9lemy)","bl","590"],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin","mf","590"],["Saint Pierre and Miquelon","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["S\xe3o Tom\xe9 and Pr\xedncipe","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (S\xe9n\xe9gal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (Espa\xf1a)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47"],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (T\xfcrkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates","ae","971"],["United Kingdom","gb","44"],["United States","us","1"],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Citt\xe0 del Vaticano)","va","39"],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212"],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["\xc5land Islands","ax","358"]];function o(){let e=(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).split("-"),t=e.length>1?e[1]:e[0],a;return t&&t.length>0&&(a=n.find(e=>e[1].toUpperCase()===t)),a}},42873:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var n=a(72355),o=a(52455),i=a(26200),r=a(63728),l=a(17566),c=a(81163),s=a(18763),u=a(65245),m=a(68376),p=a(17532),d=a(67294),g=a(42763),h=a(41188),f=a(56469),b=a(23493),x=a(47753),v=a(55126),y=a(57380),w=a(21017),A=a(27088),E=a(73327),C="data:image/png;base64,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",S=`.captcha-box {
  text-align: center;
}
.captcha-box .error-tip {
  position: absolute;
  left: calc((100% - 316px) / 2);
  text-align: left;
  margin-top: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: var(--error-color);
  width: 100%;
}
.captcha-box .get-btn {
  width: 316px;
  padding: 0;
  margin-top: 14px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--text-color);
  background-color: transparent !important;
  box-shadow: none;
}
.captcha-box .get-btn[disabled] {
  font-weight: 400 !important;
  color: var(--secondary-text-color);
  opacity: 1 !important;
}
@media (max-width: 380px) {
  .captcha-box .get-btn {
    width: 90vw;
  }
}
@media (min-width: 600px) {
  .captcha-box .get-btn {
    width: calc(90 * var(--vw));
  }
}
.captcha-box .submit-btn {
  width: 322px;
  margin-top: 38px;
}
.captcha-box .btn-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.captcha-box .back-box {
  position: relative;
  left: -4px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 19px;
  margin-top: 60px;
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--accent-color);
  cursor: pointer;
  gap: 8px;
}
.captcha-box .back-box img {
  width: 9.42px;
  margin-right: 7px;
}
.captcha-box .back-box svg {
  position: relative;
  top: -1px;
  color: var(--accent-color);
}
.captcha-box .captcha-title {
  position: absolute;
  top: 14px;
  left: 0;
  right: 0;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: var(--text-color);
}
.captcha-box .captcha-form {
  padding-top: 44px;
  max-width: 316px;
  margin: auto;
}
.captcha-box .captcha-form .input-code-content {
  position: relative;
}
`,k=function(e){let{sendCaptcha:t,setShowInputCaptcha:a,account:n,loginWithAccount:i,chain:c}=e,[u,p]=(0,d.useState)(!1),{themeType:x,language:v}=(0,s.H)(),[y,w]=(0,d.useState)(""),{loginHandler:A}=(0,s.C)(),[E,C]=(0,d.useState)(!1),[k,N]=(0,d.useState)(!1),[G,M]=(0,d.useState)(!1),[I,z]=(0,d.useState)(!1),[T,D]=(0,d.useState)(!1),{authCoreModal:K}=(0,s.ta)(),{t:L}=(0,g.$G)(),F=(0,r.a)(),B=(0,d.useRef)(null),j=/^\d{6}$/,[H,R]=(0,d.useState)(1e3),[Z,P]=(0,d.useState)(60);(0,h.Z)(()=>{if(Z>0){let e=Z-1;P(e),0===e&&R(void 0)}},H);let q=()=>{P(60),R(1e3)},Y=e=>{t(e).then(()=>{q(),D(!1),z(!1)}).catch(()=>{P(0),R(void 0)})},Q=e=>{N(!1),0===e.length?(N(!1),C(!0)):/^[0-9]+$/g.test(e)?(C(!1),N(!1)):(C(!1),N(!0))},U=e=>{C(!1),N(!1),M(!1),e=e||y,E||k||(j.test(e)?W(e):((e.length>0&&e.length<6||!j.test(e))&&(N(!0),C(!1)),0===e.length&&(N(!1),C(!0))))},V=async e=>{let t;if(!I){p(!0),t=n.includes("@")?{code:e,email:n,chain:c}:{code:e,phone:n,chain:c};try{await A(t,!1)}catch(e){X(e)}}},X=e=>{if(p(!1),(0,m.k0)(e)){let t=e.error_code;t===m.MS.InvalidCode?M(!0):t===m.MS.ResendCode&&(z(!0),D(!0))}},W=(0,d.useCallback)(b(e=>{V(e)},1e3,{leading:!0,trailing:!1}),[]),J=(0,d.useMemo)(()=>{let e=[E?L("login.enter_captcha"):"",k?L("login.captcha_input_error"):"",G?L("login.invalid_code"):"",I?L("login.please_send_again"):""].map(e=>e.trim()).filter(e=>!!e).join(",");return e.includes(",")?e+".":e},[E,k,G,I]);return(0,d.useEffect)(()=>{var e;let t=document.getElementsByClassName("react-input-code"),a=e=>e.preventDefault();return null==(e=t[0])||e.addEventListener("contextmenu",a),()=>{var e;null==(e=t[0])||e.removeEventListener("contextmenu",a)}},[]),d.createElement("div",{className:"captcha-box"},d.createElement("style",null,S),d.createElement("div",{className:"captcha-form"},d.createElement("div",{className:"input-code-content"},d.createElement("div",{onClick:()=>{var e;null==(e=document.getElementsByClassName("input-code-item")[Math.min(y.length,5)])||e.focus()}},d.createElement(o.a,{containerClassName:"react-input-code",inputClassName:"input-code-item",allowedCharacters:"numeric",length:6,ref:B,placeholder:" ",onChange:e=>{Q(e),w(e),C(!1),N(!1),M(!1),z(!1),j.test(e)&&W(e)}})))),d.createElement("div",{className:"error-tip"},J),d.createElement("div",{className:"btn-box"},d.createElement(f.Z,{type:"primary",htmlType:"submit",className:"primary-antd-btn submit-btn",onClick:()=>U(),disabled:T,loading:u},L("common.confirm")),d.createElement(f.Z,{className:"get-btn",disabled:Z>0,type:"link",onClick:()=>{n.includes("@")?Y({email:n}):(0,m.$V)({theme:x,language:v,getContainer:()=>K.rootBody}).then(e=>{Y({phone:n,cf_turnstile_response:e})}).catch(()=>{F.error(L("error.server_20112"))})}},L("login.send_again")," ",Z>0?`(${Z}s)`:""),!i&&d.createElement("div",{className:"back-box",onClick:()=>{a(!1)}},d.createElement(l.b,{className:"arrow1-icon",name:"arrow1_icon"}),d.createElement("span",null,L("login.back")))))},N=`.login-style .form-item {
  margin-bottom: 0;
}
.login-header0 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 26px;
  margin-top: 26px;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  text-align: center;
  color: var(--text-color);
}
.login-header0 img {
  position: absolute;
  left: 0;
  margin-left: 16px;
}
@media (max-height: 610px) {
  .login-header0 {
    margin-top: 18px;
  }
}
.login-des {
  width: 100%;
  height: 23px;
  margin-top: 7px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: var(--secondary-text-color);
}
.form-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 44px;
}
.form-box .ant-form-item-explain-error {
  position: absolute;
}
.form-box .form-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
}
.form-box .email-box {
  width: 316px;
  max-width: 90vw;
  height: 47px;
  line-height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--input-background-color);
  border-radius: var(--primary-btn-border-radius);
  font-size: 15px;
  border: 1px solid var(--input-background-color);
  overflow: hidden;
}
@media (min-width: 600px) {
  .form-box .email-box {
    max-width: calc(90 * var(--vw));
  }
}
.form-box .email-box[data-focus='true'] {
  border: 1px solid var(--accent-color);
}
.form-box .email-box .email-input {
  width: 316px;
  max-width: 90vw;
  height: 47px;
  padding: 4px 13px;
  border: 1px solid var(--input-background-color);
  border-radius: var(--primary-btn-border-radius);
  font-size: 15px;
  line-height: 47px;
  color: var(--text-color);
  background-color: var(--input-background-color);
}
@media (min-width: 600px) {
  .form-box .email-box .email-input {
    max-width: calc(90 * var(--vw));
  }
}
.form-box .phone-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 316px;
  max-width: 90vw;
  height: 47px;
  border: 1px solid var(--input-background-color);
  border-radius: var(--primary-btn-border-radius);
  overflow: hidden;
  font-size: 15px;
  line-height: 47px;
  background-color: var(--input-background-color);
}
.form-box .phone-box[data-focus='true'] {
  border: 1px solid var(--accent-color);
}
.form-box .phone-box .phone-select {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 47px;
  padding-left: 8px;
  font-weight: 500;
  font-size: 15px;
  color: var(--text-color);
  cursor: pointer;
  border-right: 1px solid var(--input-border-color);
}
.form-box .phone-box .phone-select .down-more {
  margin-left: 8px;
  font-size: 10px;
}
.form-box .phone-box .country-code {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 47px;
  margin: 0 8px;
  line-height: 47px;
  color: var(--text-color);
}
.form-box .phone-box .phone-input {
  flex-shrink: 1;
  width: 100%;
  height: 47px;
  padding: 0;
  border: none !important;
  border-radius: 0;
  outline: none;
  font-size: 15px;
  line-height: 47px;
  color: var(--text-color);
  background-color: transparent;
  box-shadow: none;
}
.form-box .phone-box .phone-input:focus {
  border: none !important;
  box-shadow: none !important;
}
@media (min-width: 600px) {
  .form-box .phone-box {
    max-width: calc(90 * var(--vw));
  }
}
.form-box .phone-input,
.form-box .email-input {
  height: 37px;
  line-height: 37px;
  width: 85%;
  overflow: hidden;
  border-color: var(--input-background-color) !important;
}
.form-box .phone-input:-webkit-autofill,
.form-box .email-input:-webkit-autofill,
.form-box .phone-input:-webkit-autofill:hover,
.form-box .email-input:-webkit-autofill:hover,
.form-box .phone-input:-webkit-autofill:focus,
.form-box .email-input:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--text-color) !important;
  -webkit-box-shadow: 0 0 0 150px var(--input-background-color) inset !important;
}
.form-box .phone-input::-ms-reveal,
.form-box .email-input::-ms-reveal,
.form-box .phone-input::-ms-clear,
.form-box .email-input::-ms-clear {
  display: none;
}
.form-box .phone-input:focus,
.form-box .email-input:focus {
  color: var(--text-color, #000) !important;
  border-color: var(--input-background-color) !important;
}
.form-box .error-tip {
  position: absolute;
  margin-top: 51px;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: var(--error-color);
  width: 316px;
  left: calc((100% - 316px) / 2);
  text-align: left;
}
.form-box .submit-btn {
  width: 316px;
  max-width: 90vw;
  margin-top: 35px;
}
@media (min-width: 600px) {
  .form-box .submit-btn {
    max-width: calc(90 * var(--vw));
  }
}
@media (max-height: 610px) {
  .form-box {
    padding-top: 20px;
  }
}
.login-or {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 13px;
  margin: 35px 0;
  font-weight: 500;
  font-size: 11px;
  line-height: 22px;
  white-space: nowrap;
  color: var(--secondary-text-color);
  gap: 15px;
}
.login-or .or-line {
  width: 143px;
  border-top: 1px solid var(--icon-border-color);
}
@media (max-height: 610px) {
  .login-or {
    margin: 18px 0;
  }
}
.change-login-mode {
  display: flex;
  justify-content: center;
  width: 100%;
}
.change-login-mode .change-social {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 315px;
  height: 106px;
}
.change-login-mode .change-social .first-way {
  margin: 5px 10px;
}
.change-login-mode .change-social img {
  width: 43px;
  height: 43px;
  margin: 5px 10px;
  border: 1px solid var(--icon-border-color);
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
}
.change-login-mode .change-social img:hover {
  opacity: var(--hover-opacity);
}
.change-login-mode .change-social .collapse-login-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 43px;
  margin: 5px 10px;
  border-radius: 50%;
  font-size: 24px;
  color: grey;
  transform: rotate(180deg);
  cursor: pointer;
}
.change-login-mode .change-social .collapse-login-icon[data-is-collapse='false'] {
  transform: rotate(0deg);
}
.change-login-mode .change-social .collapse-login-icon svg {
  width: 43px;
  height: 43px;
  color: #b4b6c6;
}
.change-login-mode .change-social .collapse-login-icon svg circle {
  fill: var(--bg-color-2);
}
.change-login-mode .change-social .collapse-login-icon:hover {
  opacity: var(--hover-opacity);
}
.select-country {
  position: absolute;
  z-index: 1000;
  width: 316px;
  max-width: 90vw;
  height: 291px;
  margin-top: 96px;
  left: 50%;
  transform: translateX(-50%);
  margin-left: 0;
  border: 0;
  border: 1px solid var(--input-background-color);
  border-radius: var(--card-border-radius);
  overflow: auto;
  overflow-x: hidden;
  background-color: var(--input-background-color);
}
.select-country::-webkit-scrollbar {
  display: none;
  width: 0;
}
.select-country .country-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 46px;
  border-bottom: 1px solid var(--card-unclickable-background-color);
  cursor: pointer;
}
.select-country .country-item:hover {
  background-color: var(--card-unclickable-background-color);
}
.select-country .country-item .country-box {
  display: flex;
  align-items: center;
}
.select-country .country-item .country-name {
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.select-country .country-item .country-code {
  margin-right: 15px;
  font-weight: 500;
  font-size: 14px;
  color: var(--secondary-text-color);
}
.select-country .country-item .country-flag {
  margin-right: 10px;
  margin-left: 15px;
}
@media (min-width: 600px) {
  .select-country {
    max-width: calc(90 * var(--vw));
  }
}
`,G=function(e){let{t:t}=(0,g.$G)(),{sendCaptcha:a,setShowInputCaptcha:n,account:o,supportAuthTypes:i,loginWithAccount:r}=e,[l]=x.Z.useForm(),[c,u]=(0,d.useState)(!1),[m,p]=(0,d.useState)(!1),[h,b]=(0,d.useState)(!1),y=(0,d.useRef)(null),w=(0,d.useRef)(null);(0,d.useEffect)(()=>{r&&o&&a&&(l.setFieldsValue({email:o}),A(o))},[]);let A=e=>{w.current.focus(),e?s.u.test(e)?E(e):u(!0):(p(!0),u(!1))},E=e=>{b(!0),a({email:e}).then(e=>{n(e)}).catch(()=>{b(!1)})};return d.createElement(d.Fragment,null,d.createElement("style",null,N),d.createElement("div",{className:"login-style"},d.createElement(x.Z,{name:"login-form",onFinish:e=>A(e.email.trim()),className:"form-box",requiredMark:!1,form:l,labelCol:{style:{textAlign:"left"}}},d.createElement("div",{className:"email-box",ref:y},d.createElement(x.Z.Item,{name:"email",label:"",className:"form-item",initialValue:null!=o&&o.includes("@")?o:""},d.createElement(v.Z,{className:"email-input",placeholder:t("login.email_address")||void 0,ref:w,onChange:()=>{u(!1),p(!1)},readOnly:r,onFocus:()=>{y.current.setAttribute("data-focus","true")},onBlur:()=>{y.current.removeAttribute("data-focus")}}))),d.createElement("div",{className:"error-tip"},c&&t("login.email_format_error")),d.createElement("div",{className:"error-tip"},m&&t("login.input_email_holder")),d.createElement(x.Z.Item,{className:"form-item"},d.createElement(f.Z,{type:"primary",htmlType:"submit",className:"primary-antd-btn submit-btn",loading:h},t("login.get_captcha"))),!r&&i.length>0&&d.createElement("div",{className:"login-or"},d.createElement("div",{className:"or-line"}),t("login.or"),d.createElement("div",{className:"or-line"})))))},M=function(e){let{t:t}=(0,g.$G)(),{sendCaptcha:a,setShowInputCaptcha:o,account:i,supportAuthTypes:l,loginWithAccount:c}=e,[u,p]=(0,d.useState)(!1),{themeType:h,language:b}=(0,s.H)(),[C,S]=(0,d.useState)(["United States","us","1"]),[k]=x.Z.useForm(),G=(0,d.useRef)(),{authCoreModal:M}=(0,s.qa)(),[I,z]=(0,d.useState)(!1),[T,D]=(0,d.useState)(!1),[K,L]=(0,d.useState)(!1),F=(0,r.a)(),B=(0,d.useRef)(null),[j,H]=(0,d.useState)();(0,d.useEffect)(()=>{if(u)return document.addEventListener("click",R,!0),()=>{document.removeEventListener("click",R,!0)}},[u]),(0,d.useEffect)(()=>{let e;if(i&&!i.includes("@")&&(0,A.y)(i)){let t=(0,E.h)(i),a=t.countryCallingCode.toString(),o=t.country;if(k.setFieldsValue({phone:t.nationalNumber}),a&&o){let t=n.a.filter(e=>e[2].toString()===a&&e[1].toLowerCase()===o.toLowerCase());t&&t.length>0&&(e=t[t.length-1])}}if(!e){let t=(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).split("-"),a=t.length>1?t[1]:t[0];a&&a.length>0&&(e=n.a.find(e=>e[1].toUpperCase()===a))}e&&S(e),c&&i&&a&&(0,A.y)(i)&&P(i,e?e[1].toUpperCase():void 0)},[]);let R=e=>{setTimeout(()=>{var t;null!=(t=G.current)&&t.contains(e.target)||p(!1)})},Z=(e,t,a=!0)=>{if(!e&&a){D(!0);return}if((null==e?void 0:e.length)===1){z(!0);return}return(0,s.w)(e,t)?(z(!1),!0):(z(!0),!1)},P=(e,a)=>{if(B.current.focus(),!e){D(!0);return}if(1===e.length){z(!0);return}if(a||(a=C[1].toUpperCase()),(0,s.w)(e,a)){let n=a.toUpperCase(),o=(0,E.h)(e,n).format("E.164");H(o),L(!0),(0,m.$V)({theme:h,language:b,getContainer:()=>M.rootBody}).then(e=>{q(e,o)}).catch(()=>{L(!1),F.error(t("error.server_20112"))})}else z(!0)},q=(e,t)=>{L(!0),a({phone:t,cf_turnstile_response:e}).then(e=>{o(e)}).catch(()=>{L(!1)})};return d.createElement(d.Fragment,null,d.createElement("style",null,N),d.createElement("div",{className:"login-style"},u&&d.createElement("div",{className:"select-country",ref:G},n.a.map((e,t)=>d.createElement("div",{key:t,className:"country-item",onClick:()=>{S(e),p(!1),setTimeout(()=>{let t=k.getFieldsValue().phone;t&&Z(t,e[1].toUpperCase(),!1)})}},d.createElement("div",{className:"country-box"},d.createElement("div",{className:"country-flag"},(0,w.Z)(`${e[1]}`)),d.createElement("span",{className:"country-name"},e[0])),d.createElement("div",{className:"country-code"},"+"+e[2])))),d.createElement(x.Z,{name:"login-form",onFinish:e=>P(e.phone,void 0),className:"form-box",requiredMark:!1,form:k,labelCol:{style:{textAlign:"left"}}},d.createElement("div",{className:"phone-box"},d.createElement("div",{className:"phone-select",defaultValue:`+${C[2]}`,onClick:()=>{K||p(!0)}},(0,w.Z)(`${C[1]}`),d.createElement(y.Z,{className:"down-more"})),d.createElement("div",{className:"country-code"},"+",C[2]),d.createElement(x.Z.Item,{name:"phone",label:"",className:"form-item",getValueFromEvent:e=>e.target.value.replace(/\D+/g,""),initialValue:(()=>{try{if(null!=i&&i.includes("@"))return"";if((null==i?void 0:i.length)>0)return(0,E.h)(i).nationalNumber}catch{}return""})()},d.createElement(v.Z,{type:"text",className:"phone-input",placeholder:t("login.mobile_number")||void 0,ref:B,onChange:()=>{z(!1),D(!1)},readOnly:c,onFocus:()=>{var e;null==(e=document.querySelector(".phone-box"))||e.setAttribute("data-focus","true")},onBlur:()=>{var e;null==(e=document.querySelector(".phone-box"))||e.removeAttribute("data-focus")}}))),d.createElement("div",{className:"error-tip"},I&&t("login.phone_format_error")),d.createElement("div",{className:"error-tip"},T&&t("login.input_phone_holder")),d.createElement(x.Z.Item,{className:"form-item"},d.createElement(f.Z,{type:"primary",htmlType:"submit",className:"primary-antd-btn submit-btn",loading:K},t("login.get_captcha")))),!c&&l.length>0&&d.createElement("div",{className:"login-or"},d.createElement("div",{className:"or-line"}),t("login.or"),d.createElement("div",{className:"or-line"}))))},I=e=>{let{supportAuthTypes:t,preferredAuthType:a,onPreferredAuthTypeChange:n,thirdpartyAuthLogin:o}=e,[r,c]=(0,d.useState)(!0),u=e=>{o(e)},p=e=>{null==n||n(e)},g={email:s.i,phone:s.q,facebook:s.j,google:s.l,apple:s.g,twitter:s.s,discord:s.h,github:s.k,twitch:s.r,microsoft:s.o,linkedin:s.n,jwt:s.m,telegram:i.a,passkeys:s.p},h=(0,d.useMemo)(()=>{let e=t.includes(m.Gr.email)&&t.includes(m.Gr.phone),n=[];e&&(a===m.Gr.phone?n.push(d.createElement("img",{key:"email-login",src:s.i,alt:"",onClick:()=>p(m.Gr.email)})):n.push(d.createElement("img",{key:"phone-login",src:s.q,alt:"",onClick:()=>p(m.Gr.phone)}))),n.push(...t.filter(e=>e!==m.Gr.email&&e!==m.Gr.phone).map(e=>d.createElement("img",{key:`${e}-login`,src:g[e],alt:"",onClick:()=>u(e)})));let o=d.createElement("div",{key:"collapse-login",className:"collapse-login-icon",onClick:()=>c(!r),"data-is-collapse":r},d.createElement(l.b,{className:"collapse-icon",name:"collapse_icon"}));return n.length>5&&n.splice(4,0,o),r&&n.splice(5,n.length-5),n},[r,a,t]);return d.createElement("div",{className:"change-login-mode","data-collapse":!!r},d.createElement("div",{className:"change-social"},h))},z=`.login-container-box {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.login-container-box .wrap {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  overflow-y: auto;
  padding-top: 56px;
  flex: 1;
}
@media (max-width: 600px) {
  .login-container-box .wrap {
    padding-top: 7vh;
  }
}
.login-container-box .wrap .login-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  line-height: 1.5715;
}
.login-container-box .wrap .login-logo .product-logo {
  max-width: 100%;
  height: 64px;
  object-fit: contain;
}
.login-container-box .wrap .placeholder-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.login-container-box .footer-box {
  position: absolute;
  bottom: 10px;
  margin: 0;
  text-align: center;
}
@media only screen and (max-height: 300px) {
  .login-container-box .footer-box {
    position: absolute;
    top: unset;
    bottom: 10px;
    margin-bottom: 0;
  }
}
[data-login-type='facebook'][data-hash='#/login'] .footer-box,
[data-login-type='google'][data-hash='#/login'] .footer-box {
  position: absolute !important;
}
`,T=function(e){var t,a,n,o,i,r,l,h,f,b;let x,v;let{email:y,phone:w,authorization:A,chain:E}=e||{},{modalOptions:S,setLoginAuthorization:T}=(0,s.ta)(),{socialAuthLogin:D}=(0,s.C)(),[K,L]=(0,d.useState)((x=null!=(l=null==(r=S.authTypes)?void 0:r.indexOf(m.Gr.phone))?l:-1,v=null!=(f=null==(h=S.authTypes)?void 0:h.indexOf(m.Gr.email))?f:-1,!(0,m.Rw)(w)&&(x>=0||!(null!=(b=S.authTypes)&&b.length))||!y&&(x>=0&&v<0||x>=0&&v>=0&&x<v)?m.Gr.phone:m.Gr.email)),{t:F}=(0,g.$G)(),[B,j]=(0,d.useState)(""),[H,R]=(0,d.useState)(!1),[Z,P]=(0,d.useState)(!1),[q,Y]=(0,d.useState)(S.authTypes||[]),Q=e=>{R(e)};(0,d.useEffect)(()=>{document.documentElement.setAttribute("data-login-type",K||"")},[K]),(0,d.useEffect)(()=>{if(Z)Y([]);else{let e=Object.values(m.Gr).filter(e=>e!==m.Gr.jwt&&e!==m.Gr.telegram);if(S.authTypes){let t=S.authTypes.filter(t=>t!==m.Gr.jwt&&t!==m.Gr.telegram&&e.includes(t));t.includes(m.Gr.email)||t.includes(m.Gr.phone)||!(t.length>0)||t.unshift(m.Gr.email),1===t.length&&(t[0]===m.Gr.email||t[0]===m.Gr.phone)&&(t.length=0),Y(t)}else Y(e)}},[Z,S.authTypes]),(0,d.useEffect)(()=>{T(A?{authorization:A,chain:(0,m.LG)(E)}:void 0),V()},[]);let U=async e=>(j("email"in e&&e.email?e.email:e.phone),await (0,m.Bx)(e).then(e=>e)),V=()=>{if(y&&K===m.Gr.email)s.u.test(y)&&(P(!0),j(y));else if(w&&K===m.Gr.phone){let e=(0,s.x)(w);e&&(P(!0),j(e))}},X=e=>{L(e)},W=(0,d.useMemo)(()=>{var e;let t=null==(e=S.customStyle)?void 0:e.logo;return t||(t=C),t||""},[null==(t=S.customStyle)?void 0:t.logo]);return d.createElement("div",{className:"login-container-box"},d.createElement("style",null,N),d.createElement("style",null,z),d.createElement("div",{className:"wrap"},d.createElement("div",{className:"login-logo"},d.createElement(p.Z,{className:"product-logo",preview:!1,height:64,src:W,key:W,placeholder:d.createElement("div",{className:"placeholder-wrap"},d.createElement(u.Z,{style:{fontSize:24},spin:!0})),fallback:C,onError:e=>{e.currentTarget.src=C}})),d.createElement("div",{className:"login-header0"},null!=(n=null==(a=S.customStyle)?void 0:a.projectName)?n:F("common.particle_auth")),H?d.createElement("div",{className:"login-des"},B):d.createElement("div",{className:"login-des"},K===m.Gr.email||K===m.Gr.phone?null!=(i=null==(o=S.customStyle)?void 0:o.subtitle)?i:F("login.to_continue").format("App"):d.createElement("div",{className:"third-party-des"},K===m.Gr.jwt||K===m.Gr.telegram?F("login.create_wallet"):F("login.social_login").format(K===m.Gr.jwt?"JWT":K.titleCase()))),H?d.createElement(k,{sendCaptcha:U,setShowInputCaptcha:Q,account:B,loginWithAccount:Z,chain:E}):K===m.Gr.email?d.createElement(G,{sendCaptcha:U,setShowInputCaptcha:Q,setLoginType:X,account:y||B,supportAuthTypes:q,loginWithAccount:!!y||Z}):K===m.Gr.phone?d.createElement(M,{sendCaptcha:U,setShowInputCaptcha:Q,setLoginType:X,account:w||B,supportAuthTypes:q,loginWithAccount:!!w||Z}):void 0,!H&&!Z&&(K===m.Gr.email||K===m.Gr.phone)&&d.createElement(I,{supportAuthTypes:q,preferredAuthType:K,onPreferredAuthTypeChange:L,thirdpartyAuthLogin:e=>{L(e),D({socialType:e,prompt:"select_account",authorization:A,chain:E})}})),d.createElement(c.a,{className:"footer-box-v2"}))}},21017:function(e,t,a){"use strict";function n(e){return o(e[0])+o(e[1])}function o(e){return String.fromCodePoint(127397+e.toUpperCase().charCodeAt(0))}a.d(t,{Z:function(){return n}})}}]);