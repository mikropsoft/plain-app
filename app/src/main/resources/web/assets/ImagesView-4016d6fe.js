import{d as ye,ad as we,p as $e,r as g,u as Ie,s as Te,a as Ve,A as Ce,n as Se,B as xe,C as Re,ae as Ae,af as Ee,D as ze,t as Fe,ag as Me,ah as Ue,G as W,H as De,I as qe,o as n,c,b as e,e as f,w as b,Q as T,k as d,f as l,v as Be,J as F,K as Ne,L as Le,g as o,F as V,y as M,l as X,M as j,N as Qe,x as Ge,ab as J,ai as P,z as Y,R as Z,a6 as Ke,aj as He,ak as Oe,al as We,_ as Xe}from"./index-400f4a7b.js";import{u as je,_ as Je,a as Pe}from"./list-347696d3.js";import{_ as Ye}from"./FieldId-439f3700.js";import{_ as Ze}from"./Multiselect-63456c80.js";import{_ as et}from"./Dropdown.vuevuetypescriptsetuptruelang-24c50f04.js";import{_ as tt,a as st}from"./grid-view-outline-rounded-f695eedf.js";import{_ as ot}from"./Breadcrumb-7c24ea6b.js";import{n as ee}from"./list-6498ebd9.js";import{b as at,a as nt}from"./search-e9047456.js";import{u as lt,a as it,b as ct}from"./tags-f1a271ba.js";import{u as ut,a as dt,_ as rt}from"./ConfirmModal.vuevuetypescriptsetuptruelang-a3aed113.js";import"./VModal.vuevuetypescriptsetuptruelang-610de861.js";import"./baseIndexOf-70b929c6.js";import"./vee-validate.esm-5d9cc34a.js";const te=k=>(Oe("data-v-2f5e998a"),k=k(),We(),k),_t={class:"v-toolbar"},pt={class:"right-actions"},mt=["onClick"],gt=["onClick"],ht={class:"row mb-3"},vt={class:"col-md-3 col-form-label"},ft={class:"col-md-9"},bt=["onKeyup"],kt={class:"row mb-3"},yt={class:"col-md-3 col-form-label"},wt={class:"col-md-9"},$t={class:"actions"},It=["onClick"],Tt={key:0,class:"row row-cols-6 g-1",style:{"margin-bottom":"24px"}},Vt=["onClick"],Ct=["src"],St={class:"duration"},xt={key:1,class:"table"},Rt=te(()=>e("th",null,"ID",-1)),At=te(()=>e("th",null,null,-1)),Et=["onClick"],zt=["onUpdate:modelValue"],Ft=["src","onClick"],Mt={class:"badge"},Ut={key:0},Dt={colspan:"6"},qt={class:"no-data-placeholder"},Bt={key:2,class:"no-data-placeholder"},Nt=ye({__name:"ImagesView",setup(k){var K,H,O;const se=we(),U=$e(),u=g([]),{t:r}=Ie(),{app:C}=Te(Ve()),_=Ce({text:"",tags:[]}),h="IMAGE",S=Se().query,v=g(parseInt(((K=S.page)==null?void 0:K.toString())??"1")),y=54,w=g(0),p=g(xe(((H=S.q)==null?void 0:H.toString())??"")),D=g(""),{tags:x}=lt(h,p,_,async s=>{D.value=at(s),await Re(),re()}),i=g(((O=S.view)==null?void 0:O.toString())??"grid"),{visible:oe,index:ae,view:q,hide:ne}=Ae(),{addToTags:le}=it(h,u,x),{removeFromTags:ie}=ct(h,u,x),{deleteItems:ce}=ut(h,u),{downloadItems:ue}=dt(u),R=Ee(()=>u.value.map(s=>({src:J(s.fileId),name:P(s.path),duration:0,size:s.size}))),de=[{text:r("add_to_tags"),click:le},{text:r("remove_from_tags"),click:ie},{text:r("download"),click:ue},{text:r("delete"),click:ce}],{selectAll:A,toggleSelect:B}=je(u),{loading:N,load:re,refetch:_e}=ze({handle:async(s,a)=>{if(a)Fe(r(a),"error");else if(s){const{fileIdToken:E}=C.value,$=[];for(const I of s.images)$.push({...I,checked:!1,fileId:await Me(E,I.path)});u.value=$,w.value=s.imageCount}},document:Ue,variables:()=>({offset:(v.value-1)*y,limit:y,query:D.value}),appApi:!0});function L(){Y(U,`/images?page=${v.value}&q=${Z(p.value)}&view=${i.value}`)}W(v,()=>{L()}),W(i,()=>{L()});function Q(){p.value=nt(_),G()}function G(){Y(U,`/images?q=${Z(p.value)}&view=${i.value}`)}function pe(){i.value==="grid"?i.value="list":i.value="grid"}function me(){se.push("/files"),Ke(rt,{message:r("upload_images")})}return De(()=>{qe.on("refetch_by_tag_type",s=>{s===h&&_e()})}),(s,a)=>{const E=ot,$=tt,I=st,ge=et,he=Ze,ve=Je,fe=Ye,be=Pe,ke=He;return n(),c(V,null,[e("div",_t,[f(E,{current:()=>`${s.$t("page_title.images")} (${w.value})`},null,8,["current"]),e("div",pt,[e("button",{type:"button",class:"btn btn-action",onClick:b(pe,["stop"])},[i.value==="list"?(n(),T($,{key:0,class:"bi"})):d("",!0),i.value==="grid"?(n(),T(I,{key:1,class:"bi"})):d("",!0)],8,mt),e("button",{type:"button",class:"btn btn-action",onClick:b(me,["stop"])},l(s.$t("upload")),9,gt),i.value==="list"?(n(),T(ge,{key:0,title:s.$t("actions"),items:de},null,8,["title"])):d("",!0),f(ve,{modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=t=>p.value=t),search:G},{filters:Be(()=>[e("div",ht,[e("label",vt,l(s.$t("keywords")),1),e("div",ft,[F(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=t=>_.text=t),class:"form-control",onKeyup:Le(Q,["enter"])},null,40,bt),[[Ne,_.text]])])]),e("div",kt,[e("label",yt,l(s.$t("tags")),1),e("div",wt,[f(he,{modelValue:_.tags,"onUpdate:modelValue":a[1]||(a[1]=t=>_.tags=t),label:"name","track-by":"id",options:o(x)},null,8,["modelValue","options"])])]),e("div",$t,[e("button",{type:"button",class:"btn",onClick:b(Q,["stop"])},l(s.$t("search")),9,It)])]),_:1},8,["modelValue"])])]),i.value==="grid"?(n(),c("div",Tt,[(n(!0),c(V,null,M(o(R),(t,z)=>(n(),c("div",{class:"col",onClick:m=>o(q)(z)},[e("img",{class:"image",src:t.src+"&w=200&h=200"},null,8,Ct),e("span",St,l(o(X)(t.size)),1)],8,Vt))),256))])):d("",!0),i.value==="list"?(n(),c("table",xt,[e("thead",null,[e("tr",null,[e("th",null,[F(e("input",{class:"form-check-input",type:"checkbox",onChange:a[3]||(a[3]=(...t)=>o(B)&&o(B)(...t)),"onUpdate:modelValue":a[4]||(a[4]=t=>Qe(A)?A.value=t:null)},null,544),[[j,o(A)]])]),Rt,At,e("th",null,l(s.$t("name")),1),e("th",null,l(s.$t("tags")),1),e("th",null,l(s.$t("file_size")),1)])]),e("tbody",null,[(n(!0),c(V,null,M(u.value,(t,z)=>(n(),c("tr",{key:t.id,class:Ge({checked:t.checked}),onClick:b(m=>t.checked=!t.checked,["stop"])},[e("td",null,[F(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":m=>t.checked=m},null,8,zt),[[j,t.checked]])]),e("td",null,[f(fe,{id:t.id,raw:t},null,8,["id","raw"])]),e("td",null,[e("img",{src:o(J)(t.fileId)+"&w=200&h=200",width:"50",height:"50",onClick:b(m=>o(q)(z),["stop"])},null,8,Ft)]),e("td",null,l(o(P)(t.path)),1),e("td",null,[(n(!0),c(V,null,M(t.tags,m=>(n(),c("span",Mt,l(m.name),1))),256))]),e("td",null,l(o(X)(t.size)),1)],10,Et))),128))]),u.value.length?d("",!0):(n(),c("tfoot",Ut,[e("tr",null,[e("td",Dt,[e("div",qt,l(s.$t(o(ee)(o(N),o(C).permissions,"WRITE_EXTERNAL_STORAGE"))),1)])])]))])):d("",!0),i.value==="grid"&&o(R).length===0?(n(),c("div",Bt,l(s.$t(o(ee)(o(N),o(C).permissions,"WRITE_EXTERNAL_STORAGE"))),1)):d("",!0),w.value>y?(n(),T(be,{key:3,modelValue:v.value,"onUpdate:modelValue":a[5]||(a[5]=t=>v.value=t),total:w.value,limit:y},null,8,["modelValue","total"])):d("",!0),f(ke,{visible:o(oe),index:o(ae),sources:o(R),onHide:o(ne)},null,8,["visible","index","sources","onHide"])],64)}}});const ss=Xe(Nt,[["__scopeId","data-v-2f5e998a"]]);export{ss as default};
