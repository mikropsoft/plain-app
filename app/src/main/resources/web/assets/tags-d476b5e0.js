import{o as y,c as T,a as s,d as V,r as L,bS as w,i as $,bT as B,bU as D,t as h,p as M,F as Z,J as x,k as l,m as E,aV as G,ao as k,Q as A,a1 as H,a5 as J,_ as N,u as C,x as F,a3 as j,h as R,ah as U,bJ as z,aS as K}from"./index-53a7b7bf.js";import{u as O,a as P}from"./vee-validate.esm-18d571e0.js";const W={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},X=s("path",{fill:"currentColor",d:"M18.45 15.6L17 14.15L18.55 12L15 7H9.85l-2-2H15q.5 0 .925.213t.725.637l3.525 5q.35.525.35 1.15t-.35 1.15L18.45 15.6ZM5 19q-.825 0-1.413-.588T3 17V7q0-.275.063-.5t.187-.45L2.1 4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l17 17q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-3.15-3.15q-.225.125-.45.188T15 19H5Zm4.575-6.6Zm3.85-1.825ZM14.2 17L5 7.8V17h9.2Z"},null,-1),Y=[X];function ee(_,a){return y(),T("svg",W,Y)}const te={name:"material-symbols-label-off-outline-rounded",render:ee},ae={slot:"headline"},se={slot:"content"},oe=["label","selected"],ne=["label","selected"],le=["label","selected","onClick"],de={slot:"actions"},ie=["disabled"],ue=V({__name:"AddToTagsModal",props:{type:{type:String,required:!0},tags:{type:Array,default:()=>[]},query:{type:String,required:!0}},setup(_){const a=_,{handleSubmit:d}=O(),i=L("add_to_tags");function g(e){const{button:r}=e.detail,q=r.dataset.value;i.value=q}const{value:o,errorMessage:n}=P("selectedTags",w().test("required",()=>"valid.required",e=>e.length),{initialValue:[]}),{mutate:m,loading:u,onDone:p}=$({document:B,appApi:!0}),{mutate:f,loading:t,onDone:v}=$({document:D,appApi:!0}),b=()=>{A.emit("items_tags_updated",{type:a.type}),A.emit("refetch_tags",a.type),k()};v(b),p(b);function I(e){o.value.includes(e)?H(o.value,r=>r.id===e.id):o.value.push(e)}const S=d(()=>{i.value==="add_to_tags"?f({type:a.type,tagIds:o.value.map(e=>e.id),query:a.query}):m({type:a.type,tagIds:o.value.map(e=>e.id),query:a.query})});return(e,r)=>{const q=J,Q=te;return y(),T("md-dialog",null,[s("div",ae,h(e.$t("tags")),1),s("div",se,[s("md-outlined-segmented-button-set",{onSegmentedButtonSetSelection:g},[s("md-outlined-segmented-button",{label:e.$t("add_to_tags"),selected:i.value==="add_to_tags"},[M(q,{slot:"icon"})],8,oe),s("md-outlined-segmented-button",{label:e.$t("remove_from_tags"),selected:i.value==="remove_from_tags"},[M(Q,{slot:"icon"})],8,ne)],32),s("md-chip-set",null,[(y(!0),T(Z,null,x(_.tags,c=>(y(),T("md-filter-chip",{key:c.id,label:c.name,selected:l(o).includes(c),onClick:ce=>I(c)},null,8,le))),128))]),E(s("div",{class:"invalid-feedback"},h(l(n)?e.$t(l(n)):""),513),[[G,l(n)]])]),s("div",de,[s("md-outlined-button",{value:"cancel",onClick:r[0]||(r[0]=(...c)=>l(k)&&l(k)(...c))},h(e.$t("cancel")),1),s("md-filled-button",{value:"save",disabled:l(t)||l(u),onClick:r[1]||(r[1]=(...c)=>l(S)&&l(S)(...c)),autofocus:""},h(e.$t("save")),9,ie)])])}}});const re=N(ue,[["__scopeId","data-v-ff1a8e7b"]]),ge=(_,a,d)=>{const{t:i}=C();return{addToTags:(g,o)=>{let n=o;if(!g){const m=a.value.filter(u=>u.checked);if(m.length===0){F(i("select_first"),"error");return}n=`ids:${m.map(u=>u.id).join(",")}`}j(re,{type:_,tags:d.value,query:n})}}},pe=(_,a,d,i)=>{const g=L([]),{t:o}=C();return R({handle:async(n,m)=>{if(m)F(o(m),"error");else if(n){g.value=n.tags;const u=U(a.value);d.tags=[];const p=[];u.forEach(t=>{if(t.name==="text")d.text=t.value;else if(t.name==="tag"){const v=n.tags.find(b=>z(b.name)===t.value);v?(d.tags.push(v),p.push(v.id)):p.push("invalid")}else t.name==="bucket_id"&&(d.bucketId=t.value)});const f=[...u].filter(t=>t.name!=="tag");p.forEach(t=>{f.push({name:"tag_id",op:"",value:t})}),i(f)}},document:K,variables:{type:_},appApi:!0}),{tags:g}};export{ge as a,pe as u};