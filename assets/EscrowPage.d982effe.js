import{Q as q,b as T,a as k}from"./QInput.04c63c6c.js";import{a as E,Q as I,b as S}from"./QSeparator.e9a8d90d.js";import{a as $,Q as g}from"./QTabPanels.08648bf0.js";import{Q as h,a as B,b as A}from"./QCard.8390c462.js";import{Q as P}from"./QPage.f2f82596.js";import{au as y,J as d,b1 as c,ai as _,bx as a,as as e,al as o,a1 as m,ak as x,aj as v,b7 as j,bz as D,ar as b,a6 as L,aX as N,cm as O,cJ as M,da as R,cj as U}from"./index.26aae334.js";import{k as z,Q as G,h as J,i as K,j as W,C as F}from"./ClosePopup.516bac37.js";import"./uid.c7983941.js";import"./touch.3df10340.js";const X={class:"text-h5 q-pt-sm text-left"},H={key:0,class:"text-uppercase text-left q-mt-sm q-mb-xs"},Y={key:1,class:"col text-caption text-left text-grey"},Z={class:"row"},ee=o("div",{class:"col"},"Mint:",-1),te={class:"col"},ae={class:"row"},se=o("div",{class:"col"},"Account:",-1),oe={class:"col"},le={class:"row"},ne=o("div",{class:"col"},"AccountOwner:",-1),ce={class:"col"},ue={class:"row"},de=o("div",{class:"col"},"Amount:",-1),ie={class:"col"},V=y({__name:"SelectEscrowToken",props:["wallet_accounts","title"],emits:["selected_account","selected_amount"],setup(p,{emit:n}){const i=n,t=d(),u=d();async function w(f){t.value=f,i("selected_account",t.value)}return(f,r)=>(c(),_(A,{class:"my-card",flat:"",bordered:""},{default:a(()=>[e(h,{horizontal:""},{default:a(()=>[e(h,{class:"q-pt-xs"},{default:a(()=>{var l,s,Q,C;return[o("div",X,m(p.title),1),t.value?(c(),x("div",H," Unknown-Token ")):v("",!0),t.value?(c(),x("div",Y,[o("div",Z,[ee,o("div",te,m((l=t.value)==null?void 0:l.account.data.parsed.info.mint),1)]),o("div",ae,[se,o("div",oe,m((s=t.value)==null?void 0:s.pubkey),1)]),o("div",le,[ne,o("div",ce,m((Q=t.value)==null?void 0:Q.account.data.parsed.info.owner),1)]),o("div",ue,[de,o("div",ie,m((C=t.value)==null?void 0:C.account.data.parsed.info.tokenAmount.uiAmount),1)])])):v("",!0)]}),_:1}),e(E),e(h,{class:"col-3 flex flex-center"},{default:a(()=>[t.value?(c(),_(I,{key:0,class:"rounded-borders",src:"https://cdn.quasar.dev/img/parallax2.jpg"})):v("",!0)]),_:1})]),_:1}),e(S),e(B,{class:"q-gutter-x-md"},{default:a(()=>{var l;return[e(z,{color:"primary",label:t.value?(l=t.value)==null?void 0:l.account.data.parsed.info.mint:"select an account"},{default:a(()=>[e(G,null,{default:a(()=>[(c(!0),x(L,null,j(p.wallet_accounts,s=>D((c(),_(J,{key:s,clickable:"",onClick:Q=>w(s)},{default:a(()=>[e(K,null,{default:a(()=>[e(W,null,{default:a(()=>[b(m(s.account.data.parsed.info.mint),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[F]])),128))]),_:1})]),_:1},8,["label"]),e(q,{label:"Amount",modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=s=>u.value=s),dense:"",type:"text",onChange:r[1]||(r[1]=s=>i("selected_amount",u.value))},null,8,["modelValue"])]}),_:1})]),_:1}))}}),re={class:"q-gutter-y-md"},me=y({__name:"CreateEscrow",setup(p){const n=d(!0),i=d(),t=d(),u=d(),w=d(),f=d();return N(async()=>{const r=await O().connection.getParsedTokenAccountsByOwner(M().publicKey.value,{programId:R});i.value=r.value,n.value=!1}),(r,l)=>(c(),x("div",re,[n.value?v("",!0):(c(),_(V,{key:0,title:"Deposit",wallet_accounts:i.value,onSelected_account:l[0]||(l[0]=s=>t.value=s),onSelected_amount:l[1]||(l[1]=s=>w.value=s)},null,8,["wallet_accounts"])),n.value?v("",!0):(c(),_(V,{key:1,title:"Recieve",wallet_accounts:i.value,onSelected_account:l[2]||(l[2]=s=>u.value=s),onSelected_amount:l[3]||(l[3]=s=>f.value=s)},null,8,["wallet_accounts"])),e(U,{color:"primary"},{default:a(()=>[b("Create Escrow")]),_:1})]))}}),_e=o("div",{class:"text-h3"},"ESCROW",-1),ve=o("div",{class:"text-h6"},"Alarms",-1),pe=o("div",{class:"text-h6"},"Movies",-1),Ce=y({__name:"EscrowPage",setup(p){const n=d("create");return(i,t)=>(c(),_(P,{class:"col text-center q-ma-md q-gutter-y-md"},{default:a(()=>[_e,e(A,{dark:""},{default:a(()=>[e(T,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),dense:"",class:"text-white",align:"justify"},{default:a(()=>[e(k,{name:"create",label:"Create"}),e(k,{name:"exchange",label:"Exchange"}),e(k,{name:"cancel",label:"Cancel "})]),_:1},8,["modelValue"]),e(S),e($,{dark:"",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=u=>n.value=u),animated:""},{default:a(()=>[e(g,{name:"create"},{default:a(()=>[e(me)]),_:1}),e(g,{name:"exchnage"},{default:a(()=>[ve,b(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1}),e(g,{name:"cancel"},{default:a(()=>[pe,b(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}});export{Ce as default};
