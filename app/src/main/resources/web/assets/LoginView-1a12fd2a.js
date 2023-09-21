import{d as z,r as h,u as G,ah as Q,cn as X,co as Y,cp as Z,cq as ee,cr as se,cs as ne,ct as te,aU as N,e as S,f as p,x as oe,t as g,J as A,bA as x,w as re,h as c,aj as ie,ak as ae,P as ue,j as P,g as le,F as de,cu as ce,cv as me,o as E,cw as we,_ as fe}from"./index-71d8bb76.js";import{u as ve,a as be}from"./vee-validate.esm-49ea0aba.js";function M(n){let t=n;if(typeof t>"u"){if(typeof navigator>"u"||!navigator)return"";t=navigator.userAgent||""}return t.toLowerCase()}function j(n,t){try{return new RegExp(n,"g").exec(t)}catch{return null}}function U(){if(typeof navigator>"u"||!navigator||!navigator.userAgentData)return!1;const t=navigator.userAgentData.brands;return!!(t&&t.length)}function pe(n,t){const o=j(`(${n})((?:\\/|\\s|:)([0-9|\\.|_]+))`,t);return o?o[3]:""}function I(n){return n.replace(/_/g,".")}function V(n,t){let o=null,e="-1";return n.some(r=>{const a=j(`(${r.test})((?:\\/|\\s|:)([0-9|\\.|_]+))?`,t);return!a||r.brand?!1:(o=r,e=a[3]||"-1",r.versionAlias?e=r.versionAlias:r.versionTest&&(e=pe(r.versionTest.toLowerCase(),t)||e),e=I(e),!0)}),{preset:o,version:e}}function _(n,t){const o={brand:"",version:"-1"};return n.some(e=>{const r=W(t,e);return r?(o.brand=e.id,o.version=e.versionAlias||r.version,o.version!=="-1"):!1}),o}function W(n,t){return n.find(o=>j(`${t.test}`,o.brand.toLowerCase()))}const R=[{test:"phantomjs",id:"phantomjs"},{test:"whale",id:"whale"},{test:"edgios|edge|edg",id:"edge"},{test:"msie|trident|windows phone",id:"ie",versionTest:"iemobile|msie|rv"},{test:"miuibrowser",id:"miui browser"},{test:"samsungbrowser",id:"samsung internet"},{test:"samsung",id:"samsung internet",versionTest:"version"},{test:"chrome|crios",id:"chrome"},{test:"firefox|fxios",id:"firefox"},{test:"android",id:"android browser",versionTest:"version"},{test:"safari|iphone|ipad|ipod",id:"safari",versionTest:"version"}],D=[{test:"(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",id:"chrome",versionTest:"chrome"},{test:"chromium",id:"chrome"},{test:"whale",id:"chrome",versionAlias:"-1",brand:!0}],$=[{test:"applewebkit",id:"webkit",versionTest:"applewebkit|safari"}],F=[{test:"(?=(iphone|ipad))(?!(.*version))",id:"webview"},{test:"(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",id:"webview"},{test:"webview",id:"webview"}],O=[{test:"windows phone",id:"windows phone"},{test:"windows 2000",id:"window",versionAlias:"5.0"},{test:"windows nt",id:"window"},{test:"win32|windows",id:"window"},{test:"iphone|ipad|ipod",id:"ios",versionTest:"iphone os|cpu os"},{test:"macos|macintel|mac os x",id:"mac"},{test:"android|linux armv81",id:"android"},{test:"tizen",id:"tizen"},{test:"webos|web0s",id:"webos"}];function H(n){return!!V(F,n).preset}function ge(n){const t=M(n),o=!!/mobi/g.exec(t),e={name:"unknown",version:"-1",majorVersion:-1,webview:H(t),chromium:!1,chromiumVersion:"-1",webkit:!1,webkitVersion:"-1"},r={name:"unknown",version:"-1",majorVersion:-1},{preset:a,version:f}=V(R,t),{preset:s,version:u}=V(O,t),b=V(D,t);if(e.chromium=!!b.preset,e.chromiumVersion=b.version,!e.chromium){const m=V($,t);e.webkit=!!m.preset,e.webkitVersion=m.version}return s&&(r.name=s.id,r.version=u,r.majorVersion=parseInt(u,10)),a&&(e.name=a.id,e.version=f,e.webview&&r.name==="ios"&&e.name!=="safari"&&(e.webview=!1)),e.majorVersion=parseInt(e.version,10),{browser:e,os:r,isMobile:o,isHints:!1}}function K(n){const t=navigator.userAgentData,o=[...t.brands],e=n&&n.fullVersionList,r=t.mobile||!1,a=o[0],f=(n&&n.platform||t.platform||navigator.platform).toLowerCase(),s={name:a.brand,version:a.version,majorVersion:-1,webkit:!1,webkitVersion:"-1",chromium:!1,chromiumVersion:"-1",webview:!!_(F,o).brand||H(M())},u={name:"unknown",version:"-1",majorVersion:-1};s.webkit=!s.chromium&&$.some(i=>W(o,i));const b=_(D,o);if(s.chromium=!!b.brand,s.chromiumVersion=b.version,!s.chromium){const i=_($,o);s.webkit=!!i.brand,s.webkitVersion=i.version}const m=O.find(i=>new RegExp(`${i.test}`,"g").exec(f));if(u.name=m?m.id:"",n&&(u.version=n.platformVersion),e&&e.length){const i=_(R,e);s.name=i.brand||s.name,s.version=i.version||s.version}else{const i=_(R,o);s.name=i.brand||s.name,s.version=i.brand&&n?n.uaFullVersion:i.version}return s.webkit&&(u.name=r?"ios":"mac"),u.name==="ios"&&s.webview&&(s.version="-1"),u.version=I(u.version),s.version=I(s.version),u.majorVersion=parseInt(u.version,10),s.majorVersion=parseInt(s.version,10),{browser:s,os:u,isMobile:r,isHints:!0}}async function he(){if(U()){const n=await navigator.userAgentData.getHighEntropyValues(["architecture","model","platform","platformVersion","uaFullVersion","fullVersionList"]);return K(n)}return _e()}function _e(n){return typeof n>"u"&&U()?K():ge(n)}const Ve={class:"header"},ye={class:"login-block"},ke=["label","error","error-text"],Se=["disabled"],Ae={key:0,class:"tips"},Ee=z({__name:"LoginView",setup(n){const{handleSubmit:t,isSubmitting:o}=ve(),e=h(!1),r=h(!0),a=h(!1),f=h("");let s;const u=window.location.protocol==="http:"?!1:!window.navigator.userAgentData,{t:b}=G(),{value:m,errorMessage:i}=be("password",Q().required()),T=h(!1);async function q(){const l=await fetch(`${ce()}/init`,{method:"POST",headers:me()});if(l.status===403){e.value=!0,r.value=!0,f.value="web_access_disabled";return}r.value=!1;const w=await l.text();w?(m.value=w,T.value=!1):T.value=!0}q();const y=t(async()=>{const l=localStorage.getItem("client_id");s=new WebSocket(`${X()}?cid=${l}&auth=1`);const w=m.value??"",k=Y(w),v=Z(k);f.value="",e.value=!1,s.onopen=async()=>{o.value=!0;const d=await he(),B=ee(v,JSON.stringify({password:k,browserName:d.browser.name,browserVersion:d.browser.version,osName:d.os.name,osVersion:d.os.version,isMobile:d.isMobile}));s.send(se(B))},s.onmessage=async d=>{var C;const B=ne(v,te(await d.data.arrayBuffer())),L=JSON.parse(B);L.status==="PENDING"?a.value=!0:(localStorage.setItem("auth_token",L.token),s.close(),N.push({path:((C=N.currentRoute.value.query.redirect)==null?void 0:C.toString())??"/",replace:!0}))},s.onclose=d=>{d.reason==="abort"||d.reason==="OK"||(o.value=!1,e.value=!0,a.value=!1,f.value=`login.${d.reason?d.reason:"failed"}`)},window.setTimeout(function(){s.readyState!==1&&s.close(3001,"timeout")},2e3)});function J(){a.value=!1,e.value=!1,o.value=!1,s.close(3001,"abort")}return(l,w)=>{const k=we;return E(),S(de,null,[p("header",Ve,[oe(k,{"logged-in":!1})]),p("h1",null,g(l.$t("app_name")),1),p("div",ye,[A(p("form",{onSubmit:w[2]||(w[2]=re((...v)=>c(y)&&c(y)(...v),["prevent"]))},[A(p("div",{class:"alert alert-danger",role:"alert"},g(f.value?l.$t(f.value):""),513),[[x,e.value]]),T.value?A((E(),S("md-outlined-text-field",{key:0,label:c(b)("password"),"onUpdate:modelValue":w[0]||(w[0]=v=>ie(m)?m.value=v:null),onKeydown:w[1]||(w[1]=ae((...v)=>c(y)&&c(y)(...v),["enter"])),type:"password",class:"form-control",error:c(i),"error-text":c(i)?l.$t(c(i)):""},null,40,ke)),[[ue,c(m)]]):P("",!0),r.value?P("",!0):(E(),S("md-filled-button",{key:1,disabled:c(o)},g(l.$t(c(o)?"logging_in":"log_in")),9,Se))],544),[[x,!a.value]]),A(p("div",null,[le(g(l.$t("login.to_continue"))+" ",1),p("md-outlined-button",{onClick:J},g(l.$t("cancel")),1)],512),[[x,a.value]])]),c(u)?(E(),S("div",Ae,g(l.$t("browser_warning")),1)):P("",!0)],64)}}});const xe=fe(Ee,[["__scopeId","data-v-063799bd"]]);export{xe as default};