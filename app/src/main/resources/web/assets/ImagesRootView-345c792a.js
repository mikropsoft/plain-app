import{_ as g}from"./TagFilter.vuevuetypescriptsetuptruelang-1e2870e7.js";import{_ as k}from"./BucketFilter.vuevuetypescriptsetuptruelang-c23d24c6.js";import{d as w,p as y,a as C,az as z,v as M,e as B,x as s,y as o,h as e,o as I,f as a,t as m,w as $,z as b,n as E}from"./index-00b69167.js";import{g as d,M as N}from"./splitpanes.es-00f01d1b.js";import"./EditValueModal-b7c304b9.js";import"./vee-validate.esm-da197860.js";const S={class:"page-container"},V={class:"sidebar"},x={class:"nav-title"},A={class:"nav"},G=["onClick"],R={class:"main"},H=w({__name:"ImagesRootView",setup(q){var r,_;const n=y(),u=C(),i=z(n.query),c=((r=i.find(t=>t.name==="tag"))==null?void 0:r.value)??"",l=((_=i.find(t=>t.name==="bucket_id"))==null?void 0:_.value)??"";function p(){E(u,"/images")}return(t,D)=>{const f=k,h=g,v=M("router-view");return I(),B("div",S,[s(e(N),null,{default:o(()=>[s(e(d),{size:"20","min-size":"10"},{default:o(()=>[a("div",V,[a("h2",x,m(t.$t("page_title.images")),1),a("ul",A,[a("li",{onClick:$(p,["prevent"]),class:b({active:e(n).path==="/images"&&!e(c)&&!e(l)})},m(t.$t("all")),11,G),s(f,{type:"IMAGE",selected:e(l)},null,8,["selected"])]),s(h,{type:"IMAGE",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(d),null,{default:o(()=>[a("div",R,[s(v)])]),_:1})]),_:1})])}}});export{H as default};