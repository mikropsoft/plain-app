import{d as Z,e as ee,u as te,D as ae,r,s as se,f as ne,g as oe,i as B,aQ as ie,U as Q,O as le,P as R,Q as ce,R as de,c as u,a as s,p as h,H as f,j as l,x as re,a$ as ue,b0 as pe,b1 as _e,o as c,F as ve,J as me,t as p,b2 as I,k as N,S as he,m as $,Y as K,h as z,b3 as F,v as fe,ap as y,l as m,b4 as ye,at as ge,b5 as Ce,A as be,B as ke,_ as Ae}from"./index-a6844ed7.js";import{g as G,M as we}from"./splitpanes.es-6b0ce2ad.js";import{u as Me}from"./markdown-88e3bd1f.js";const Ie=g=>(be("data-v-511dc1cd"),g=g(),ke(),g),$e={class:"page-container"},xe={class:"main"},Te={key:0,class:"date"},De={class:"chat-title"},Le={class:"name"},Se={class:"time"},Ve={class:"menu-items"},He=["onClick","disabled"],Be={slot:"headline"},Qe={key:2,class:"chat-title"},Re={class:"name"},Ne={class:"time"},Ke=["innerHTML"],ze={key:0,class:"chat-item replying"},Fe={class:"chat-title"},Ge={class:"name"},Ue=["innerHTML"],qe=["placeholder","onKeydown"],Pe={class:"btns"},je=["onClick"],Ee=Ie(()=>s("md-ripple",null,null,-1)),Je=Z({__name:"AIChatView",setup(g){const U=ee(),{t:q}=te(),P=ae(),d=r(P.params.id),i=r(""),_=r([]),C=r(!1),b=r(""),A=r(""),{app:j,urlTokenKey:E}=se(ne()),x=r(),{render:k}=Me(j,E);function w(){return d.value==="create"}function J(e,t){let n=!1;if(t==0)n=!0;else{const o=t>0?_.value[t-1]:null;o!=null&&I(o.createdAt)!==I(e.createdAt)&&(n=!0)}return n}w()||oe({handle:async(e,t)=>{if(t)re(q(t),"error");else{const n=[];n.push({...e.aiChat,md:await k(e.aiChat.content)});for(const o of e.aiChats)n.push({...o,md:await k(o.content)});_.value=n,await Q(),L()}},document:ue,variables:()=>({id:d.value,query:`parent_id:${d.value} sort:created_at-asc`}),appApi:!0});const{mutate:T,onDone:O}=B({document:pe,appApi:!0});function D(){!i.value||C.value||T({id:w()?"":d.value,message:i.value,isMe:!0})}O(async e=>{var n;const t=e.data.createAIChat;if(t){for(const v of t)(n=_.value)==null||n.push({...v,md:await k(v.content)});w()&&(d.value=t[0].id,ie(U,`/aichats/${d.value}`)),i.value="",C.value=!C.value,b.value="",A.value='<span class="blinking-cursor"></span>',await Q(),L()}});function L(){const e=x.value;e&&(e.scrollTop=e.scrollHeight)}const M=r(""),{mutate:Y,loading:W}=B({document:_e,options:{update:e=>{var n,o;e.evict({id:e.identify({__typename:"AIChat",id:M.value})});const t=(n=_.value)==null?void 0:n.findIndex(v=>v.id===M.value);t!==null&&((o=_.value)==null||o.splice(t,1))}},appApi:!0});function X(e){M.value=e,Y({query:`ids:${e}`})}const S=async e=>{e.parentId===d.value&&(b.value+=e.content,A.value=await k(b.value+'<span class="blinking-cursor"></span>'),e.finishReason==="stop"&&T({id:d.value,message:b.value,isMe:!1}))};return le(()=>{R.on("ai_chat_replied",S)}),ce(()=>{R.off("ai_chat_replied",S)}),(e,t)=>{const n=ye,o=ge,v=Ce,V=de("tooltip");return c(),u("div",$e,[s("div",xe,[h(l(we),{class:"chat-container",horizontal:""},{default:f(()=>[h(l(G),{size:"80"},{default:f(()=>[s("div",{class:"chat-items",ref_key:"scrollContainer",ref:x},[(c(!0),u(ve,null,me(_.value,(a,H)=>(c(),u("div",{key:a.id,class:"chat-item"},[J(a,H)?(c(),u("div",Te,p(l(I)(a.createdAt)),1)):N("",!0),H>0?(c(),he(o,{key:1},{content:f(()=>[s("div",Ve,[s("md-menu-item",{onClick:Oe=>X(a.id),disabled:l(W)},[s("div",Be,p(e.$t("delete_message")),1)],8,He)])]),default:f(()=>[s("div",De,[s("span",Le,p(e.$t(a.isMe?"me":"ai")),1),$((c(),u("span",Se,[z(p(l(F)(a.createdAt)),1)])),[[V,l(K)(a.createdAt)]]),h(n,{class:"bi bi-more"})])]),_:2},1024)):(c(),u("div",Qe,[s("span",Re,p(e.$t(a.isMe?"me":"ai")),1),$((c(),u("span",Ne,[z(p(l(F)(a.createdAt)),1)])),[[V,l(K)(a.createdAt)]])])),s("div",{class:"chat-content md-container",innerHTML:a.md},null,8,Ke)]))),128)),C.value?(c(),u("div",ze,[s("div",Fe,[s("span",Ge,p(e.$t("ai")),1)]),s("div",{class:"chat-content md-container",innerHTML:A.value},null,8,Ue)])):N("",!0)],512)]),_:1}),h(l(G),{class:"chat-input",size:"12",style:{"min-height":"80px"}},{default:f(()=>[$(s("md-outlined-text-field",{class:"textarea",type:"textarea","onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a),autocomplete:"off",placeholder:e.$t("chat_input_hint"),onKeydown:[y(m(D,["exact","prevent"]),["enter"]),t[1]||(t[1]=y(m(a=>i.value+=`
`,["shift","exact","prevent"]),["enter"])),t[2]||(t[2]=y(m(a=>i.value+=`
`,["ctrl","exact","prevent"]),["enter"])),t[3]||(t[3]=y(m(a=>i.value+=`
`,["alt","exact","prevent"]),["enter"])),t[4]||(t[4]=y(m(a=>i.value+=`
`,["meta","exact","prevent"]),["enter"]))]},null,40,qe),[[fe,i.value]]),s("div",Pe,[s("button",{class:"icon-button",onClick:m(D,["stop"])},[Ee,h(v)],8,je)])]),_:1})]),_:1})])])}}});const Ze=Ae(Je,[["__scopeId","data-v-511dc1cd"]]);export{Ze as default};
