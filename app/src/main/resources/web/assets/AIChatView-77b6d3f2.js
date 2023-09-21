import{d as W,a as ee,u as te,p as ae,r as d,s as se,c as ne,i as oe,a0 as R,aO as ie,M as B,G as le,H as ce,I as re,e as u,f as n,x as h,y as f,h as l,k as de,aX as ue,aY as pe,aZ as _e,o as c,F as ve,A as me,t as v,a_ as b,j as K,K as he,J as $,R as N,g as G,a$ as Q,P as fe,ak as y,w as m,X as z,b0 as ye,ao as ge,b1 as Ce,at as ke,au as Ae,_ as we}from"./index-71d8bb76.js";import{g as F,M as Ie}from"./splitpanes.es-85db08aa.js";import{u as Me}from"./markdown-3cbce55d.js";const be=g=>(ke("data-v-efe3c819"),g=g(),Ae(),g),$e={class:"page-container"},xe={class:"main"},Te={key:0,class:"date"},De={class:"chat-title"},Le={class:"name"},Ve={class:"time"},Se={class:"menu-items"},He=["onClick","headline","disabled"],Re={key:2,class:"chat-title"},Be={class:"name"},Ke={class:"time"},Ne=["innerHTML"],Ge={key:0,class:"chat-item replying"},Qe={class:"chat-title"},ze={class:"name"},Fe=["innerHTML"],qe=["placeholder","onKeydown"],Pe={class:"btns"},Xe=["onClick"],je=be(()=>n("md-ripple",null,null,-1)),Ee=W({__name:"AIChatView",setup(g){const q=ee(),{t:P}=te(),X=ae(),r=d(X.params.id),i=d(""),p=d([]),C=d(!1),k=d(""),w=d(""),{app:j,urlTokenKey:E}=se(ne()),x=d(),{render:A}=Me(j,E);function I(){return r.value==="create"}function J(e,t){let s=!1;if(t==0)s=!0;else{const o=t>0?p.value[t-1]:null;o!=null&&b(o.createdAt)!==b(e.createdAt)&&(s=!0)}return s}I()||oe({handle:async(e,t)=>{if(t)de(P(t),"error");else{const s=[];s.push({...e.aiChat,md:await A(e.aiChat.content)});for(const o of e.aiChats)s.push({...o,md:await A(o.content)});p.value=s,await B(),L()}},document:ue,variables:()=>({id:r.value,query:`parent_id:${r.value} sort:created_at-asc`}),appApi:!0});const{mutate:T,onDone:O}=R({document:pe,appApi:!0});function D(){!i.value||C.value||T({id:I()?"":r.value,message:i.value,isMe:!0})}O(async e=>{var s;const t=e.data.createAIChat;if(t){for(const _ of t)(s=p.value)==null||s.push({..._,md:await A(_.content)});I()&&(r.value=t[0].id,ie(q,`/aichats/${r.value}`)),i.value="",C.value=!C.value,k.value="",w.value='<span class="blinking-cursor"></span>',await B(),L()}});function L(){const e=x.value;e&&(e.scrollTop=e.scrollHeight)}const M=d(""),{mutate:U,loading:Y}=R({document:_e,options:{update:e=>{var s,o;e.evict({id:e.identify({__typename:"AIChat",id:M.value})});const t=(s=p.value)==null?void 0:s.findIndex(_=>_.id===M.value);t!==null&&((o=p.value)==null||o.splice(t,1))}},appApi:!0});function Z(e){M.value=e,U({query:`ids:${e}`})}const V=async e=>{e.parentId===r.value&&(k.value+=e.content,w.value=await A(k.value+'<span class="blinking-cursor"></span>'),e.finishReason==="stop"&&T({id:r.value,message:k.value,isMe:!1}))};return le(()=>{z.on("ai_chat_replied",V)}),ce(()=>{z.off("ai_chat_replied",V)}),(e,t)=>{const s=ye,o=ge,_=Ce,S=re("tooltip");return c(),u("div",$e,[n("div",xe,[h(l(Ie),{class:"chat-container",horizontal:""},{default:f(()=>[h(l(F),{size:"80"},{default:f(()=>[n("div",{class:"chat-items",ref_key:"scrollContainer",ref:x},[(c(!0),u(ve,null,me(p.value,(a,H)=>(c(),u("div",{key:a.id,class:"chat-item"},[J(a,H)?(c(),u("div",Te,v(l(b)(a.createdAt)),1)):K("",!0),H>0?(c(),he(o,{key:1},{content:f(()=>[n("div",Se,[n("md-menu-item",{onClick:Je=>Z(a.id),headline:e.$t("delete_message"),disabled:l(Y)},null,8,He)])]),default:f(()=>[n("div",De,[n("span",Le,v(e.$t(a.isMe?"me":"ai")),1),$((c(),u("span",Ve,[G(v(l(Q)(a.createdAt)),1)])),[[S,l(N)(a.createdAt)]]),h(s,{class:"bi bi-more"})])]),_:2},1024)):(c(),u("div",Re,[n("span",Be,v(e.$t(a.isMe?"me":"ai")),1),$((c(),u("span",Ke,[G(v(l(Q)(a.createdAt)),1)])),[[S,l(N)(a.createdAt)]])])),n("div",{class:"chat-content md-container",innerHTML:a.md},null,8,Ne)]))),128)),C.value?(c(),u("div",Ge,[n("div",Qe,[n("span",ze,v(e.$t("ai")),1)]),n("div",{class:"chat-content md-container",innerHTML:w.value},null,8,Fe)])):K("",!0)],512)]),_:1}),h(l(F),{class:"chat-input",size:"12",style:{"min-height":"80px"}},{default:f(()=>[$(n("md-outlined-text-field",{class:"textarea",type:"textarea","onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a),autocomplete:"off",placeholder:e.$t("chat_input_hint"),onKeydown:[y(m(D,["exact","prevent"]),["enter"]),t[1]||(t[1]=y(m(a=>i.value+=`
`,["shift","exact","prevent"]),["enter"])),t[2]||(t[2]=y(m(a=>i.value+=`
`,["ctrl","exact","prevent"]),["enter"])),t[3]||(t[3]=y(m(a=>i.value+=`
`,["alt","exact","prevent"]),["enter"])),t[4]||(t[4]=y(m(a=>i.value+=`
`,["meta","exact","prevent"]),["enter"]))]},null,40,qe),[[fe,i.value]]),n("div",Pe,[n("button",{class:"icon-button",onClick:m(D,["stop"])},[je,h(_)],8,Xe)])]),_:1})]),_:1})])])}}});const Ze=we(Ee,[["__scopeId","data-v-efe3c819"]]);export{Ze as default};
