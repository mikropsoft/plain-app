import{o as i,e as c,f as l,d as ut,u as dt,r as $,p as _t,C as pt,ac as mt,a as ht,s as be,c as ft,b8 as vt,b9 as bt,ba as kt,bb as yt,bc as gt,bd as Tt,aa as ke,a1 as Ct,aA as qt,G as Dt,H as wt,I as $t,J as St,x as f,F as k,K as S,w as I,j as p,g,t as m,h as n,y as V,ag as It,be as Vt,ap as Mt,A as j,z as ye,L as J,bf as ge,bg as Te,at as Et,T as xt,m as y,au as Ft,av as At,bh as Bt,W as B,bi as Ce,aE as qe,Y as Z,a9 as Zt,ah as Ht,bj as Lt,bk as Pt,bl as zt,bm as Nt,_ as Wt}from"./index-642041e3.js";import{_ as Rt}from"./Breadcrumb-ace66a87.js";import{g as De,M as Ut}from"./splitpanes.es-1305d147.js";import{n as Gt}from"./list-6498ebd9.js";import{E as we}from"./EditValueModal-943d0742.js";import"./vee-validate.esm-805f179c.js";const Kt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ot=l("path",{fill:"currentColor",d:"M8 18H4q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h4q.425 0 .713.288T9 17q0 .425-.288.713T8 18ZM20 8H4q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8Zm-6 5H4q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h10q.425 0 .713.288T15 12q0 .425-.288.713T14 13Z"},null,-1),jt=[Ot];function Jt(v,o){return i(),c("svg",Kt,jt)}const Qt={name:"material-symbols-sort-rounded",render:Jt},Xt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Yt=l("path",{fill:"currentColor",d:"M19.6 21.6L12 14l-2.35 2.35q.2.375.275.8T10 18q0 1.65-1.175 2.825T6 22q-1.65 0-2.825-1.175T2 18q0-1.65 1.175-2.825T6 14q.425 0 .85.075t.8.275L10 12L7.65 9.65q-.375.2-.8.275T6 10q-1.65 0-2.825-1.175T2 6q0-1.65 1.175-2.825T6 2q1.65 0 2.825 1.175T10 6q0 .425-.075.85t-.275.8L21.6 19.6q.425.425.425 1t-.425 1q-.425.425-1 .425t-1-.425ZM15 11l-2-2l6.6-6.6q.425-.425 1-.425t1 .425q.425.425.425 1t-.425 1L15 11ZM6 8q.825 0 1.413-.588T8 6q0-.825-.588-1.413T6 4q-.825 0-1.413.588T4 6q0 .825.588 1.413T6 8Zm6 4.5q.225 0 .363-.138T12.5 12q0-.225-.138-.363T12 11.5q-.225 0-.363.138T11.5 12q0 .225.138.363T12 12.5ZM6 20q.825 0 1.413-.588T8 18q0-.825-.588-1.413T6 16q-.825 0-1.413.588T4 18q0 .825.588 1.413T6 20Z"},null,-1),es=[Yt];function ts(v,o){return i(),c("svg",Xt,es)}const ss={name:"material-symbols-content-cut-rounded",render:ts},os={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ns=l("path",{fill:"currentColor",d:"M9 18q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.588T3 20V7q0-.425.288-.713T4 6q.425 0 .713.288T5 7v13h10q.425 0 .713.288T16 21q0 .425-.288.713T15 22H5ZM9 4v12V4Z"},null,-1),as=[ns];function ls(v,o){return i(),c("svg",os,as)}const is={name:"material-symbols-content-copy-outline-rounded",render:ls},M=v=>(Ft("data-v-23ac04f4"),v=v(),At(),v),cs={class:"v-toolbar"},rs={class:"right-actions"},us=M(()=>l("md-ripple",null,null,-1)),ds=M(()=>l("md-ripple",null,null,-1)),_s=["onClick"],ps=M(()=>l("md-ripple",null,null,-1)),ms=["onClick"],hs=M(()=>l("md-ripple",null,null,-1)),fs={class:"form-check"},vs={class:"form-check-label"},bs=["checked"],ks={class:"form-check"},ys={class:"form-check-label"},gs=["checked"],Ts={class:"icon-button btn-sort"},Cs=M(()=>l("md-ripple",null,null,-1)),qs={class:"menu-items"},Ds=["onClick","headline"],ws={class:"file-items"},$s=["onClick","onDblclick","onContextmenu"],Ss=["checked"],Is=["src"],Vs={class:"title"},Ms={style:{"font-size":"0.75rem"}},Es=["onContextmenu"],xs={key:0,class:"no-files"},Fs={key:0,class:"file-item-info"},As=ut({__name:"FilesView",setup(v){var me,he,fe,ve;const{t:o}=dt(),$e=$([]),Q=_t(),Se=Q.query,d=Q.params.type,X=$(pt(((me=Se.q)==null?void 0:me.toString())??"")),H=mt(X.value),b=$(((he=H.find(e=>e.name==="path"))==null?void 0:he.value)??"");let E=((fe=H.find(e=>e.name==="dir"))==null?void 0:fe.value)??"";E||(((ve=H.find(t=>t.name==="isDir"))==null?void 0:ve.value)==="1"?E=b.value:E=b.value.substring(0,b.value.lastIndexOf("/")));const Ie=$(E),Ve=[{label:"sort_by.date_asc",value:"DATE_ASC"},{label:"sort_by.date_desc",value:"DATE_DESC"},{label:"sort_by.size_asc",value:"SIZE_ASC"},{label:"sort_by.size_desc",value:"SIZE_DESC"},{label:"sort_by.name_asc",value:"NAME_ASC"},{label:"sort_by.name_desc",value:"NAME_DESC"}],T=$(!1),Y=ht(),{fileShowHidden:C,fileSortBy:L}=be(Y),ee=ft(),{app:q,urlTokenKey:P,selectedFiles:Me}=be(ee);let x=q.value.internalStoragePath;d&&(d==="sdcard"?x=q.value.sdcardPath:d.startsWith("usb")?x=q.value.usbDiskPaths[parseInt(d.substring(3))-1]:d==="app"&&(x=q.value.externalFilesDir));const{loading:Ee,panels:_,currentDir:z,refetch:te}=vt(P,x,Ie.value,L),{createPath:xe,createVariables:Fe,createMutation:Ae}=bt(P,_),{renameValue:Be,renamePath:Ze,renameDone:He,renameMutation:Le,renameVariables:Pe}=kt(_),{internal:se,sdcard:oe,usb:ze,refetch:N}=yt(),{onDeleted:W}=Pt(_,z,N),{downloadFile:ne,downloadDir:Ne,downloadFiles:We}=It(P),{view:R}=zt($e,(e,t)=>{ee.lightbox={sources:e,index:t,visible:!0}}),{selectedItem:F,select:Re}=gt(z,d,X,Y),{canPaste:ae,copy:U,cut:le,paste:G}=Tt(Me,te,N),{input:Ue,upload:ie,uploadChanged:ce}=ke(),{input:Ge,upload:re,uploadChanged:ue}=ke(),{mutate:Ke,onDone:Oe}=Ct({document:Vt,appApi:!0});Oe(e=>{We(e.data.setTempValue.key),_.value.forEach(t=>{t.items.forEach(s=>{s.checked=!1})})});const D=()=>{const e=[];return _.value.forEach(t=>{t.items.forEach(s=>{s.checked&&(s.panel=t,e.push(s))})}),e};function je(e){T.value=e.target.checked}function Je(e){C.value=e.target.checked}const Qe=()=>{Ke({key:Bt(),value:JSON.stringify(D().map(e=>({path:e.path})))})},Xe=qt(()=>D().length>0),Ye=()=>{B(Ce,{files:D(),onDone:W})};b.value&&Dt(()=>_.value.length,()=>{if(_.value.length>0&&b.value){const t=_.value[_.value.length-1].items.find(s=>s.path===b.value);t&&(F.value=t,b.value="")}});function et(){var e,t,s,r;if(d){if(d==="sdcard")return`${o("sdcard")} (${o("storage_free_total",{free:y(((e=oe.value)==null?void 0:e.freeBytes)??0),total:y(((t=oe.value)==null?void 0:t.totalBytes)??0)})})`;if(d==="app")return o("app_name");if(d.startsWith("usb")){const A=parseInt(d.substring(3)),h=ze.value[A-1];return`${o("usb_storage")} ${A} (${o("storage_free_total",{free:y((h==null?void 0:h.freeBytes)??0),total:y((h==null?void 0:h.totalBytes)??0)})})`}}return`${o("page_title.files")} (${o("storage_free_total",{free:y(((s=se.value)==null?void 0:s.freeBytes)??0),total:y(((r=se.value)==null?void 0:r.totalBytes)??0)})})`}function tt(e,t){if(T.value){t.checked=!t.checked;return}Re(e,t)}function de(e){return ge(e.name)||Te(e.name)||Nt(e.name)}function st(e,t){L.value=t,e.close()}function ot(e,t){t.isDir||(de(t)?R(C?e.items:e.items.filter(s=>!s.name.startsWith(".")),t):ne(t.path))}function nt(e,t){e.preventDefault();const s=[{label:o("create_folder"),onClick:()=>{xe.value=t,B(we,{title:o("name"),placeholder:o("name"),mutation:Ae,getVariables:Fe})}},{label:o("upload_files"),onClick:()=>{ie(t)}},{label:o("upload_folder"),onClick:()=>{re(t)}}];ae()&&s.push({label:o("paste"),onClick:()=>{G(t)}}),qe({x:e.x,y:e.y,items:s})}function at(e,t,s){e.preventDefault();let r;s.isDir?r=[{label:o("upload_files"),onClick:()=>{ie(s.path)}},{label:o("upload_folder"),onClick:()=>{re(s.path)}},{label:o("download"),onClick:()=>{Ne(s.path)}}]:(r=[],de(s)&&r.push({label:o("open"),onClick:()=>{R(t.items,s)}}),r.push({label:o("download"),onClick:()=>{ne(s.path)}})),r.push({label:o("duplicate"),onClick:()=>{U([s]),G(t.dir)}}),r.push({label:o("cut"),onClick:()=>{s.panel=t,le([s])}}),r.push({label:o("copy"),onClick:()=>{U([s])}}),s.isDir&&ae()&&r.push({label:o("paste"),onClick:()=>{G(s.path)}}),r=[...r,{label:o("rename"),onClick:()=>{Be.value=s.name,Ze.value=s.path,B(we,{title:o("rename"),placeholder:o("name"),value:s.name,mutation:Le,getVariables:Pe,done:He})}},{label:o("delete"),onClick:()=>{B(Ce,{files:[s],onDone:W})}}],qe({x:e.x,y:e.y,items:r})}const _e=e=>{e.status==="done"&&setTimeout(()=>{te(e.dir),N()},1e3)},pe=e=>{W([e.item])};return wt(()=>{Z.on("upload_task_done",_e),Z.on("file_deleted",pe)}),$t(()=>{Z.off("upload_task_done",_e),Z.off("file_deleted",pe)}),(e,t)=>{const s=Rt,r=is,A=ss,h=Zt,lt=Ht,it=Qt,ct=Mt,rt=Lt,w=St("tooltip");return i(),c(k,null,[l("div",cs,[f(s,{current:et}),l("div",rs,[T.value&&Xe.value?(i(),c(k,{key:0},[S((i(),c("button",{class:"icon-button",onClick:t[0]||(t[0]=I(()=>n(U)(D()),["stop"]))},[us,f(r)])),[[w,e.$t("copy")]]),S((i(),c("button",{class:"icon-button",onClick:t[1]||(t[1]=I(()=>n(le)(D()),["stop"]))},[ds,f(A)])),[[w,e.$t("cut")]]),S((i(),c("button",{class:"icon-button",onClick:I(Ye,["stop"])},[ps,f(h)],8,_s)),[[w,e.$t("delete")]]),S((i(),c("button",{class:"icon-button",onClick:I(Qe,["stop"])},[hs,f(lt)],8,ms)),[[w,e.$t("download")]])],64)):p("",!0),l("div",fs,[l("label",vs,[l("md-checkbox",{"touch-target":"wrapper",onChange:je,checked:T.value},null,40,bs),g(" "+m(e.$t("select_mode")),1)])]),l("div",ks,[l("label",ys,[l("md-checkbox",{"touch-target":"wrapper",onChange:Je,checked:n(C)},null,40,gs),g(m(e.$t("show_hidden")),1)])]),f(ct,null,{content:V(u=>[l("div",qs,[(i(),c(k,null,j(Ve,a=>l("md-menu-item",{onClick:K=>st(u,a.value),headline:e.$t(a.label),class:ye({selected:a.value===n(L)})},null,10,Ds)),64))])]),default:V(()=>[S((i(),c("button",Ts,[Cs,f(it)])),[[w,e.$t("sort")]])]),_:1})])]),f(n(Ut),{class:"panel-container"},{default:V(()=>[(i(!0),c(k,null,j(n(_),u=>(i(),J(n(De),{key:u.dir},{default:V(()=>[l("div",ws,[(i(!0),c(k,null,j(u.items,a=>{var K;return i(),c(k,{key:a.path},[!a.name.startsWith(".")||n(C)?(i(),c("div",{key:0,class:ye(["file-item",{active:(n(z)+"/").startsWith(a.path+"/")||((K=n(F))==null?void 0:K.path)===a.path}]),onClick:O=>tt(u,a),onDblclick:I(O=>ot(u,a),["prevent"]),onContextmenu:O=>at(O,u,a)},[T.value?(i(),c("md-checkbox",{key:0,"touch-target":"wrapper",checked:a.checked},null,8,Ss)):p("",!0),a.isDir?(i(),J(rt,{key:1})):p("",!0),n(ge)(a.name)||n(Te)(a.name)?(i(),c("img",{key:2,src:n(Et)(a.fileId)+"&w=50&h=50",width:"50",height:"50"},null,8,Is)):p("",!0),l("div",Vs,[g(m(a.name)+" ",1),l("div",Ms,[g(m(n(xt)(a.updatedAt)),1),a.isDir?p("",!0):(i(),c(k,{key:0},[g(", "+m(n(y)(a.size)),1)],64))])])],42,$s)):p("",!0)],64)}),128)),l("div",{class:"empty",onContextmenu:a=>nt(a,u.dir)},[u.items.filter(a=>!a.name.startsWith(".")||n(C)).length===0?(i(),c("div",xs,m(e.$t("no_files")),1)):p("",!0)],40,Es)])]),_:2},1024))),128)),n(_).length===0?(i(),J(n(De),{key:0,class:"no-data-placeholder"},{default:V(()=>[g(m(e.$t(n(Gt)(n(Ee),n(q).permissions,"WRITE_EXTERNAL_STORAGE"))),1)]),_:1})):p("",!0)]),_:1}),n(F)?(i(),c("div",Fs,m(e.$t("path"))+": "+m(n(F).path),1)):p("",!0),l("input",{ref_key:"fileInput",ref:Ue,style:{display:"none"},type:"file",multiple:"",onChange:t[2]||(t[2]=(...u)=>n(ce)&&n(ce)(...u))},null,544),l("input",{ref_key:"dirFileInput",ref:Ge,style:{display:"none"},type:"file",multiple:"",webkitdirectory:"",mozdirectory:"",directory:"",onChange:t[3]||(t[3]=(...u)=>n(ue)&&n(ue)(...u))},null,544)],64)}}});const Ns=Wt(As,[["__scopeId","data-v-23ac04f4"]]);export{Ns as default};
