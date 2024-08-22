import{a as T,Q as k}from"./QTabs.578fb3f0.js";import{Q as S}from"./QSeparator.77a5632d.js";import{a as q,Q as g}from"./QTabPanels.bc8edca4.js";import{a as y,Q as A}from"./QCard.70d38aba.js";import{Q as B}from"./QPage.3c98e5c2.js";import{aw as h,L as r,b3 as c,ak as _,bz as a,au as e,an as o,a3 as m,am as Q,al as p,b9 as E,bB as I,at as x,a8 as P,aZ as $,cp as L,cr as D,cm as N}from"./index.770ef299.js";import{Q as O}from"./QSpace.606e48c5.js";import{Q as R}from"./QImg.82fa9517.js";import{Q as M,l as U,m as j,C as z}from"./ClosePopup.43a4f2fb.js";import{a as K}from"./QList.5ce42986.js";import{Q as W}from"./QBtnDropdown.247123fc.js";import{Q as F}from"./QInput.92d55f0b.js";import{Q as G}from"./QCardActions.7fabdaa5.js";import{T as Z}from"./constants.528dc5b9.js";import"./touch.3df10340.js";const H={class:"text-h5 q-pt-sm text-left"},J={key:0,class:"text-uppercase text-left q-mt-sm q-mb-xs"},X={key:1,class:"col text-caption text-left text-grey"},Y={class:"row"},ee=o("div",{class:"col"},"Mint:",-1),te={class:"col"},ae={class:"row"},se=o("div",{class:"col"},"Account:",-1),oe={class:"col"},le={class:"row"},ne=o("div",{class:"col"},"AccountOwner:",-1),ce={class:"col"},ue={class:"row"},re=o("div",{class:"col"},"Amount:",-1),de={class:"col"},V=h({__name:"SelectEscrowToken",props:["wallet_accounts","title"],emits:["selected_account","selected_amount"],setup(v,{emit:n}){const d=n,t=r(),u=r();async function w(f){t.value=f,d("selected_account",t.value)}return(f,i)=>(c(),_(A,{class:"my-card",flat:"",bordered:""},{default:a(()=>[e(y,{horizontal:""},{default:a(()=>[e(y,{class:"q-pt-xs"},{default:a(()=>{var l,s,b,C;return[o("div",H,m(v.title),1),t.value?(c(),Q("div",J," Unknown-Token ")):p("",!0),t.value?(c(),Q("div",X,[o("div",Y,[ee,o("div",te,m((l=t.value)==null?void 0:l.account.data.parsed.info.mint),1)]),o("div",ae,[se,o("div",oe,m((s=t.value)==null?void 0:s.pubkey),1)]),o("div",le,[ne,o("div",ce,m((b=t.value)==null?void 0:b.account.data.parsed.info.owner),1)]),o("div",ue,[re,o("div",de,m((C=t.value)==null?void 0:C.account.data.parsed.info.tokenAmount.uiAmount),1)])])):p("",!0)]}),_:1}),e(O),e(y,{class:"col-3 flex flex-center"},{default:a(()=>[t.value?(c(),_(R,{key:0,class:"rounded-borders",src:"https://cdn.quasar.dev/img/parallax2.jpg"})):p("",!0)]),_:1})]),_:1}),e(S),e(G,{class:"q-gutter-x-md"},{default:a(()=>{var l;return[e(W,{color:"primary",label:t.value?(l=t.value)==null?void 0:l.account.data.parsed.info.mint:"select an account"},{default:a(()=>[e(K,null,{default:a(()=>[(c(!0),Q(P,null,E(v.wallet_accounts,s=>I((c(),_(M,{key:s,clickable:"",onClick:b=>w(s)},{default:a(()=>[e(U,null,{default:a(()=>[e(j,null,{default:a(()=>[x(m(s.account.data.parsed.info.mint),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[z]])),128))]),_:1})]),_:1},8,["label"]),e(F,{label:"Amount",modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=s=>u.value=s),dense:"",type:"text",onChange:i[1]||(i[1]=s=>d("selected_amount",u.value))},null,8,["modelValue"])]}),_:1})]),_:1}))}}),ie={class:"q-gutter-y-md"},me=h({__name:"CreateEscrow",setup(v){const n=r(!0),d=r(),t=r(),u=r(),w=r(),f=r();return $(async()=>{const i=await L().connection.getParsedTokenAccountsByOwner(D().publicKey.value,{programId:Z});d.value=i.value,n.value=!1}),(i,l)=>(c(),Q("div",ie,[n.value?p("",!0):(c(),_(V,{key:0,title:"Deposit",wallet_accounts:d.value,onSelected_account:l[0]||(l[0]=s=>t.value=s),onSelected_amount:l[1]||(l[1]=s=>w.value=s)},null,8,["wallet_accounts"])),n.value?p("",!0):(c(),_(V,{key:1,title:"Recieve",wallet_accounts:d.value,onSelected_account:l[2]||(l[2]=s=>u.value=s),onSelected_amount:l[3]||(l[3]=s=>f.value=s)},null,8,["wallet_accounts"])),e(N,{color:"primary"},{default:a(()=>[x("Create Escrow")]),_:1})]))}}),_e=o("div",{class:"text-h3"},"ESCROW",-1),pe=o("div",{class:"text-h6"},"Alarms",-1),ve=o("div",{class:"text-h6"},"Movies",-1),Be=h({__name:"EscrowPage",setup(v){const n=r("create");return(d,t)=>(c(),_(B,{class:"col text-center q-ma-md q-gutter-y-md"},{default:a(()=>[_e,e(A,{dark:""},{default:a(()=>[e(T,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),dense:"",class:"text-white",align:"justify"},{default:a(()=>[e(k,{name:"create",label:"Create"}),e(k,{name:"exchange",label:"Exchange"}),e(k,{name:"cancel",label:"Cancel "})]),_:1},8,["modelValue"]),e(S),e(q,{dark:"",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=u=>n.value=u),animated:""},{default:a(()=>[e(g,{name:"create"},{default:a(()=>[e(me)]),_:1}),e(g,{name:"exchnage"},{default:a(()=>[pe,x(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1}),e(g,{name:"cancel"},{default:a(()=>[ve,x(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}});export{Be as default};
