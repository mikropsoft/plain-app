import{_ as $}from"./TagFilter.vuevuetypescriptsetuptruelang-db0a1d97.js";import{d as w,n as M,p as S,q as B,o as m,c as _,e as a,v as i,g as e,b as s,f as r,w as d,x as u,F as N,y as b,z as f}from"./index-8742030b.js";import{g,M as z}from"./splitpanes.es-a8d225d7.js";import{p as T}from"./search-2663d701.js";import"./index-069dc314.js";import"./EditValueModal.vuevuetypescriptsetuptruelang-3f3aa0f8.js";import"./VModal.vuevuetypescriptsetuptruelang-fff027ba.js";import"./vee-validate.esm-5b728b5f.js";import"./DeleteConfirm.vuevuetypescriptsetuptruelang-3e1c6dd0.js";import"./baseIndexOf-70b929c6.js";const V={class:"page-container container-fluid"},q={class:"sidebar"},x={class:"nav-title"},F={class:"nav"},R=["onClick"],D=["onClick"],E={class:"main"},X=w({__name:"MessagesRootView",setup(L){const n=M(),c=S(),l=n.params.type,p=l?"":T(n.query);function v(t){f(c,`/messages/${t}`)}const h=["inbox","sent","drafts"];function y(){f(c,"/messages")}return(t,P)=>{const C=$,k=B("router-view");return m(),_("div",V,[a(e(z),null,{default:i(()=>[a(e(g),{size:"20"},{default:i(()=>[s("div",q,[s("h2",x,r(t.$t("page_title.messages")),1),s("ul",F,[s("li",{onClick:d(y,["prevent"]),class:u({active:e(n).path==="/messages"&&!e(p)})},r(t.$t("all")),11,R),(m(),_(N,null,b(h,o=>s("li",{key:o,onClick:d(j=>v(o),["prevent"]),class:u({active:o===e(l)})},r(t.$t(`message_type.${o}`)),11,D)),64))]),a(C,{"tag-type":"SMS",selected:e(p)},null,8,["selected"])])]),_:1}),a(e(g),null,{default:i(()=>[s("div",E,[a(k)])]),_:1})]),_:1})])}}});export{X as default};