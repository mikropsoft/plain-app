import{u as wt,_ as $t,a as Ct}from"./list-ecca0f33.js";import{_ as It}from"./FieldId-7a42c5ae.js";import{_ as Tt}from"./Multiselect-6a97b930.js";import{_ as Vt,a as St}from"./grid-view-outline-rounded-4254504d.js";import{_ as Rt,a as Et}from"./label-outline-rounded-f959da46.js";import{_ as zt}from"./download-rounded-2da2fb73.js";import{_ as At}from"./delete-outline-rounded-fee50069.js";import{_ as Ut}from"./Breadcrumb-d5bdebe4.js";import{d as qt,aq as Ft,q as Dt,r as b,u as Mt,a as Bt,s as Nt,C as Lt,p as Qt,D as Gt,E as Kt,G as Ot,a4 as Wt,H as Y,an as Z,ar as tt,I as xt,t as Pt,as as Xt,at as jt,K as et,L as Ht,M as Jt,o as l,c as u,e as t,f as r,j as s,F as f,w as d,l as _,U as A,g as a,y as Yt,N as U,O as Zt,P as te,A as q,m as ot,Q as st,R as ee,z as oe,W as se,B as nt,V as lt,ai as ne,aa as le,ab as ae,_ as ie}from"./index-5f5c60b6.js";import{n as at}from"./list-6498ebd9.js";import{u as ue,a as ce,b as de}from"./tags-d534ff65.js";import{u as re,_ as _e}from"./ConfirmModal.vuevuetypescriptsetuptruelang-27a0159b.js";import"./VModal.vuevuetypescriptsetuptruelang-61cd4dae.js";import"./vee-validate.esm-e0a551fe.js";const it=y=>(le("data-v-c5746ed9"),y=y(),ae(),y),pe={class:"v-toolbar"},me={class:"right-actions"},ge=["title"],be=["title"],he=["title"],ve=["title"],fe=["onClick"],ye=["onClick"],ke={class:"row mb-3"},we={class:"col-md-3 col-form-label"},$e={class:"col-md-9"},Ce=["onKeyup"],Ie={class:"row mb-3"},Te={class:"col-md-3 col-form-label"},Ve={class:"col-md-9"},Se={class:"actions"},Re=["onClick"],Ee={key:0,class:"row row-cols-6 g-1",style:{"margin-bottom":"24px"}},ze=["onClick"],Ae=["src"],Ue={class:"duration"},qe={key:1,class:"table"},Fe=it(()=>t("th",null,"ID",-1)),De=it(()=>t("th",null,null,-1)),Me=["onClick"],Be=["onUpdate:modelValue"],Ne=["src","onClick"],Le={class:"badge"},Qe={key:0},Ge={colspan:"6"},Ke={class:"no-data-placeholder"},Oe={key:2,class:"no-data-placeholder"},We=qt({__name:"ImagesView",setup(y){var j,H,J;const ut=Ft(),F=Dt(),c=b([]),{t:D}=Mt(),M=Bt(),{app:I}=Nt(M),p=Lt({text:"",tags:[]}),h="IMAGE",T=Qt().query,v=b(parseInt(((j=T.page)==null?void 0:j.toString())??"1")),k=54,w=b(0),m=b(Gt(((H=T.q)==null?void 0:H.toString())??"")),B=b(""),{tags:V}=ue(h,m,p,async o=>{B.value=Kt(o),await Ot(),dt()}),i=b(((J=T.view)==null?void 0:J.toString())??"grid"),{addToTags:N}=ce(h,c,V),{removeFromTags:L}=de(h,c,V),{deleteItems:Q}=re(h,c),{downloadItems:G}=Wt(c,"images.zip"),S=Y(()=>c.value.map(o=>({src:Z(o.fileId),name:tt(o.path),duration:0,size:o.size,path:""})));function K(o){M.lightbox={sources:S.value,index:o,visible:!0}}const ct=Y(()=>c.value.some(o=>o.checked)),{selectAll:R,toggleSelect:O}=wt(c),{loading:W,load:dt,refetch:rt}=xt({handle:async(o,n)=>{if(n)Pt(D(n),"error");else if(o){const{fileIdToken:E}=I.value,$=[];for(const C of o.images)$.push({...C,checked:!1,fileId:await Xt(E,C.path)});c.value=$,w.value=o.imageCount}},document:jt,variables:()=>({offset:(v.value-1)*k,limit:k,query:B.value}),appApi:!0});function x(){nt(F,`/images?page=${v.value}&q=${lt(m.value)}&view=${i.value}`)}et(v,()=>{x()}),et(i,()=>{x()});function P(){m.value=se(p),X()}function X(){nt(F,`/images?q=${lt(m.value)}&view=${i.value}`)}function _t(){i.value==="grid"?i.value="list":i.value="grid"}function pt(){ut.push("/files"),ne(_e,{message:D("upload_images")})}return Ht(()=>{Jt.on("refetch_by_tag_type",o=>{o===h&&rt()})}),(o,n)=>{const E=Ut,$=At,C=zt,mt=Rt,gt=Et,bt=Vt,ht=St,vt=Tt,ft=$t,yt=It,kt=Ct;return l(),u(f,null,[t("div",pe,[r(E,{current:()=>`${o.$t("page_title.images")} (${w.value})`},null,8,["current"]),t("div",me,[s(ct)&&i.value==="list"?(l(),u(f,{key:0},[t("button",{type:"button",class:"btn btn-action",onClick:n[0]||(n[0]=d((...e)=>s(Q)&&s(Q)(...e),["stop"])),title:o.$t("delete")},[r($,{class:"bi"})],8,ge),t("button",{type:"button",class:"btn btn-action",onClick:n[1]||(n[1]=d((...e)=>s(G)&&s(G)(...e),["stop"])),title:o.$t("download")},[r(C,{class:"bi"})],8,be),t("button",{type:"button",class:"btn btn-action",onClick:n[2]||(n[2]=d((...e)=>s(N)&&s(N)(...e),["stop"])),title:o.$t("add_to_tags")},[r(mt,{class:"bi"})],8,he),t("button",{type:"button",class:"btn btn-action",onClick:n[3]||(n[3]=d((...e)=>s(L)&&s(L)(...e),["stop"])),title:o.$t("remove_from_tags")},[r(gt,{class:"bi"})],8,ve)],64)):_("",!0),t("button",{type:"button",class:"btn btn-action",onClick:d(_t,["stop"])},[i.value==="list"?(l(),A(bt,{key:0,class:"bi"})):_("",!0),i.value==="grid"?(l(),A(ht,{key:1,class:"bi"})):_("",!0)],8,fe),t("button",{type:"button",class:"btn btn-action",onClick:d(pt,["stop"])},a(o.$t("upload")),9,ye),r(ft,{modelValue:m.value,"onUpdate:modelValue":n[6]||(n[6]=e=>m.value=e),search:X},{filters:Yt(()=>[t("div",ke,[t("label",we,a(o.$t("keywords")),1),t("div",$e,[U(t("input",{type:"text","onUpdate:modelValue":n[4]||(n[4]=e=>p.text=e),class:"form-control",onKeyup:te(P,["enter"])},null,40,Ce),[[Zt,p.text]])])]),t("div",Ie,[t("label",Te,a(o.$t("tags")),1),t("div",Ve,[r(vt,{modelValue:p.tags,"onUpdate:modelValue":n[5]||(n[5]=e=>p.tags=e),label:"name","track-by":"id",options:s(V)},null,8,["modelValue","options"])])]),t("div",Se,[t("button",{type:"button",class:"btn",onClick:d(P,["stop"])},a(o.$t("search")),9,Re)])]),_:1},8,["modelValue"])])]),i.value==="grid"?(l(),u("div",Ee,[(l(!0),u(f,null,q(s(S),(e,z)=>(l(),u("div",{class:"col",onClick:g=>K(z)},[t("img",{class:"image",src:e.src+"&w=200&h=200"},null,8,Ae),t("span",Ue,a(s(ot)(e.size)),1)],8,ze))),256))])):_("",!0),i.value==="list"?(l(),u("table",qe,[t("thead",null,[t("tr",null,[t("th",null,[U(t("input",{class:"form-check-input",type:"checkbox",onChange:n[7]||(n[7]=(...e)=>s(O)&&s(O)(...e)),"onUpdate:modelValue":n[8]||(n[8]=e=>ee(R)?R.value=e:null)},null,544),[[st,s(R)]])]),Fe,De,t("th",null,a(o.$t("name")),1),t("th",null,a(o.$t("tags")),1),t("th",null,a(o.$t("file_size")),1)])]),t("tbody",null,[(l(!0),u(f,null,q(c.value,(e,z)=>(l(),u("tr",{key:e.id,class:oe({checked:e.checked}),onClick:d(g=>e.checked=!e.checked,["stop"])},[t("td",null,[U(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":g=>e.checked=g},null,8,Be),[[st,e.checked]])]),t("td",null,[r(yt,{id:e.id,raw:e},null,8,["id","raw"])]),t("td",null,[t("img",{src:s(Z)(e.fileId)+"&w=200&h=200",width:"50",height:"50",onClick:d(g=>K(z),["stop"])},null,8,Ne)]),t("td",null,a(s(tt)(e.path)),1),t("td",null,[(l(!0),u(f,null,q(e.tags,g=>(l(),u("span",Le,a(g.name),1))),256))]),t("td",null,a(s(ot)(e.size)),1)],10,Me))),128))]),c.value.length?_("",!0):(l(),u("tfoot",Qe,[t("tr",null,[t("td",Ge,[t("div",Ke,a(o.$t(s(at)(s(W),s(I).permissions,"WRITE_EXTERNAL_STORAGE"))),1)])])]))])):_("",!0),i.value==="grid"&&s(S).length===0?(l(),u("div",Oe,a(o.$t(s(at)(s(W),s(I).permissions,"WRITE_EXTERNAL_STORAGE"))),1)):_("",!0),w.value>k?(l(),A(kt,{key:3,modelValue:v.value,"onUpdate:modelValue":n[9]||(n[9]=e=>v.value=e),total:w.value,limit:k},null,8,["modelValue","total"])):_("",!0)],64)}}});const io=ie(We,[["__scopeId","data-v-c5746ed9"]]);export{io as default};