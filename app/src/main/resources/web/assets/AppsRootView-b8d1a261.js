import{d as k,p as w,a as $,v as g,e as p,x as o,y as n,h as t,o as r,f as e,t as i,w as _,z as u,F as z,A as B,n as d}from"./index-71d8bb76.js";import{g as m,M}from"./splitpanes.es-85db08aa.js";const S={class:"page-container"},V={class:"sidebar"},A={class:"nav-title"},F={class:"nav"},N=["onClick"],R=["onClick"],b={class:"main"},T=k({__name:"AppsRootView",setup(x){const l=w(),c=$(),h=l.params.type;function v(s){d(c,`/apps/${s}`)}const f=["user","system"];function y(){d(c,"/apps")}return(s,D)=>{const C=g("router-view");return r(),p("div",S,[o(t(M),null,{default:n(()=>[o(t(m),{size:"20","min-size":"10"},{default:n(()=>[e("div",V,[e("h2",A,i(s.$t("page_title.apps")),1),e("ul",F,[e("li",{onClick:_(y,["prevent"]),class:u({active:t(l).path==="/apps"})},i(s.$t("all")),11,N),(r(),p(z,null,B(f,a=>e("li",{key:a,onClick:_(E=>v(a),["prevent"]),class:u({active:a===t(h)})},i(s.$t(`app_type.${a}`)),11,R)),64))])])]),_:1}),o(t(m),null,{default:n(()=>[e("div",b,[o(C)])]),_:1})]),_:1})])}}});export{T as default};
