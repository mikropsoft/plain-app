import{_ as $}from"./TagFilter.vuevuetypescriptsetuptruelang-aefe51a3.js";import{d as w,p as z,a as B,q as N,v as L,e as p,x as a,y as l,h as e,o as m,f as s,t as i,w as d,z as u,F as M,A as S,n as f}from"./index-71d8bb76.js";import{g as h,M as T}from"./splitpanes.es-85db08aa.js";import"./EditValueModal-7e22b6d3.js";import"./vee-validate.esm-49ea0aba.js";const V={class:"page-container"},q={class:"sidebar"},A={class:"nav-title"},F={class:"nav"},R=["onClick"],b=["onClick"],x={class:"main"},K=w({__name:"CallsRootView",setup(D){const n=z(),c=B(),r=n.params.type,_=r?"":N(n.query);function v(t){f(c,`/calls/${t}`)}const g=["incoming","outgoing","missed"];function y(){f(c,"/calls")}return(t,E)=>{const C=$,k=L("router-view");return m(),p("div",V,[a(e(T),null,{default:l(()=>[a(e(h),{size:"20","min-size":"10"},{default:l(()=>[s("div",q,[s("h2",A,i(t.$t("page_title.calls")),1),s("ul",F,[s("li",{onClick:d(y,["prevent"]),class:u({active:e(n).path==="/calls"&&!e(_)})},i(t.$t("all")),11,R),(m(),p(M,null,S(g,o=>s("li",{key:o,onClick:d(P=>v(o),["prevent"]),class:u({active:o===e(r)})},i(t.$t(`call_type.${o}`)),11,b)),64))]),a(C,{type:"CALL",selected:e(_)},null,8,["selected"])])]),_:1}),a(e(h),null,{default:l(()=>[s("div",x,[a(k)])]),_:1})]),_:1})])}}});export{K as default};
