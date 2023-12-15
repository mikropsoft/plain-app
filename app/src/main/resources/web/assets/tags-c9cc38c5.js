import{o as y,e as T,f as a,d as V,r as M,bS as w,a2 as S,bT as D,bU as Q,t as h,x as A,F as Z,A as x,h as l,L as E,aV as G,al as k,I as L,W as H,$ as N,_ as j,u as C,k as I,Y as R,i as U,ad as W,bB as Y,aS as z}from"./index-00b69167.js";import{u as J,a as K}from"./vee-validate.esm-da197860.js";const O={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},P=a("path",{fill:"currentColor",d:"M18.45 15.6L17 14.15L18.55 12L15 7H9.85l-2-2H15q.5 0 .925.213t.725.637l3.525 5q.35.525.35 1.15t-.35 1.15L18.45 15.6ZM5 19q-.825 0-1.413-.588T3 17V7q0-.275.063-.5t.187-.45L2.1 4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l17 17q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-3.15-3.15q-.225.125-.45.188T15 19H5Zm4.575-6.6Zm3.85-1.825ZM14.2 17L5 7.8V17h9.2Z"},null,-1),X=[P];function ee(_,s){return y(),T("svg",O,X)}const te={name:"material-symbols-label-off-outline-rounded",render:ee},se={slot:"headline"},ae={slot:"content"},oe=["label","selected"],ne=["label","selected"],le=["label","selected","onClick"],de={slot:"actions"},ie=["disabled"],ue=V({__name:"AddToTagsModal",props:{type:{type:String,required:!0},tags:{type:Array,default:()=>[]},query:{type:String,required:!0}},setup(_){const s=_,{handleSubmit:d}=J(),i=M("add_to_tags");function g(e){const{button:r}=e.detail,q=r.dataset.value;i.value=q}const{value:o,errorMessage:n}=K("selectedTags",w().test("required",()=>"valid.required",e=>e.length),{initialValue:[]}),{mutate:m,loading:u,onDone:p}=S({document:D,appApi:!0}),{mutate:f,loading:t,onDone:v}=S({document:Q,appApi:!0}),b=()=>{L.emit("items_tags_updated",{type:s.type}),L.emit("refetch_tags",s.type),k()};v(b),p(b);function F(e){o.value.includes(e)?H(o.value,r=>r.id===e.id):o.value.push(e)}const $=d(()=>{i.value==="add_to_tags"?f({type:s.type,tagIds:o.value.map(e=>e.id),query:s.query}):m({type:s.type,tagIds:o.value.map(e=>e.id),query:s.query})});return(e,r)=>{const q=N,B=te;return y(),T("md-dialog",null,[a("div",se,h(e.$t("tags")),1),a("div",ae,[a("md-outlined-segmented-button-set",{onSegmentedButtonSetSelection:g},[a("md-outlined-segmented-button",{label:e.$t("add_to_tags"),selected:i.value==="add_to_tags"},[A(q,{slot:"icon"})],8,oe),a("md-outlined-segmented-button",{label:e.$t("remove_from_tags"),selected:i.value==="remove_from_tags"},[A(B,{slot:"icon"})],8,ne)],32),a("md-chip-set",null,[(y(!0),T(Z,null,x(_.tags,c=>(y(),T("md-filter-chip",{key:c.id,label:c.name,selected:l(o).includes(c),onClick:ce=>F(c)},null,8,le))),128))]),E(a("div",{class:"invalid-feedback"},h(l(n)?e.$t(l(n)):""),513),[[G,l(n)]])]),a("div",de,[a("md-outlined-button",{value:"cancel",onClick:r[0]||(r[0]=(...c)=>l(k)&&l(k)(...c))},h(e.$t("cancel")),1),a("md-filled-button",{value:"save",disabled:l(t)||l(u),onClick:r[1]||(r[1]=(...c)=>l($)&&l($)(...c)),autofocus:""},h(e.$t("save")),9,ie)])])}}});const re=j(ue,[["__scopeId","data-v-ff1a8e7b"]]),ge=(_,s,d)=>{const{t:i}=C();return{addToTags:(g,o)=>{let n=o;if(!g){const m=s.value.filter(u=>u.checked);if(m.length===0){I(i("select_first"),"error");return}n=`ids:${m.map(u=>u.id).join(",")}`}R(re,{type:_,tags:d.value,query:n})}}},pe=(_,s,d,i)=>{const g=M([]),{t:o}=C();return U({handle:async(n,m)=>{if(m)I(o(m),"error");else if(n){g.value=n.tags;const u=W(s.value);d.tags=[];const p=[];u.forEach(t=>{if(t.name==="text")d.text=t.value;else if(t.name==="tag"){const v=n.tags.find(b=>Y(b.name)===t.value);v?(d.tags.push(v),p.push(v.id)):p.push("invalid")}else t.name==="bucket_id"&&(d.bucketId=t.value)});const f=[...u].filter(t=>t.name!=="tag");p.forEach(t=>{f.push({name:"tag_id",op:"",value:t})}),i(f)}},document:z,variables:{type:_},appApi:!0}),{tags:g}};export{ge as a,pe as u};