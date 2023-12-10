import{Q as T,b as q,a as k}from"./QInput.a58b01bd.js";import{Q as S}from"./QSeparator.e68ac80e.js";import{a as E,Q as g}from"./QTabPanels.fe20519a.js";import{a as y,Q as A,T as I}from"./constants.5ff8127a.js";import{Q as $}from"./QPage.1a216c55.js";import{au as h,J as d,b1 as c,ai as _,bx as a,as as e,al as o,a1 as m,ak as x,aj as p,b7 as B,bz as P,ar as Q,a6 as D,aX as L,cm as N,co as O,cj as j}from"./index.bf271cfd.js";import{Q as M}from"./QSpace.79b281b5.js";import{Q as R}from"./QImg.ac002646.js";import{l as U,m as z,n as G,o as K,C as W}from"./ClosePopup.78090700.js";import{Q as F}from"./QBtnDropdown.4b85bb99.js";import{Q as J}from"./QCardActions.d437dd02.js";import"./touch.3df10340.js";const X={class:"text-h5 q-pt-sm text-left"},H={key:0,class:"text-uppercase text-left q-mt-sm q-mb-xs"},Y={key:1,class:"col text-caption text-left text-grey"},Z={class:"row"},ee=o("div",{class:"col"},"Mint:",-1),te={class:"col"},ae={class:"row"},se=o("div",{class:"col"},"Account:",-1),oe={class:"col"},le={class:"row"},ne=o("div",{class:"col"},"AccountOwner:",-1),ce={class:"col"},ue={class:"row"},de=o("div",{class:"col"},"Amount:",-1),re={class:"col"},V=h({__name:"SelectEscrowToken",props:["wallet_accounts","title"],emits:["selected_account","selected_amount"],setup(v,{emit:n}){const r=n,t=d(),u=d();async function b(f){t.value=f,r("selected_account",t.value)}return(f,i)=>(c(),_(A,{class:"my-card",flat:"",bordered:""},{default:a(()=>[e(y,{horizontal:""},{default:a(()=>[e(y,{class:"q-pt-xs"},{default:a(()=>{var l,s,w,C;return[o("div",X,m(v.title),1),t.value?(c(),x("div",H," Unknown-Token ")):p("",!0),t.value?(c(),x("div",Y,[o("div",Z,[ee,o("div",te,m((l=t.value)==null?void 0:l.account.data.parsed.info.mint),1)]),o("div",ae,[se,o("div",oe,m((s=t.value)==null?void 0:s.pubkey),1)]),o("div",le,[ne,o("div",ce,m((w=t.value)==null?void 0:w.account.data.parsed.info.owner),1)]),o("div",ue,[de,o("div",re,m((C=t.value)==null?void 0:C.account.data.parsed.info.tokenAmount.uiAmount),1)])])):p("",!0)]}),_:1}),e(M),e(y,{class:"col-3 flex flex-center"},{default:a(()=>[t.value?(c(),_(R,{key:0,class:"rounded-borders",src:"https://cdn.quasar.dev/img/parallax2.jpg"})):p("",!0)]),_:1})]),_:1}),e(S),e(J,{class:"q-gutter-x-md"},{default:a(()=>{var l;return[e(F,{color:"primary",label:t.value?(l=t.value)==null?void 0:l.account.data.parsed.info.mint:"select an account"},{default:a(()=>[e(U,null,{default:a(()=>[(c(!0),x(D,null,B(v.wallet_accounts,s=>P((c(),_(z,{key:s,clickable:"",onClick:w=>b(s)},{default:a(()=>[e(G,null,{default:a(()=>[e(K,null,{default:a(()=>[Q(m(s.account.data.parsed.info.mint),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[W]])),128))]),_:1})]),_:1},8,["label"]),e(T,{label:"Amount",modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=s=>u.value=s),dense:"",type:"text",onChange:i[1]||(i[1]=s=>r("selected_amount",u.value))},null,8,["modelValue"])]}),_:1})]),_:1}))}}),ie={class:"q-gutter-y-md"},me=h({__name:"CreateEscrow",setup(v){const n=d(!0),r=d(),t=d(),u=d(),b=d(),f=d();return L(async()=>{const i=await N().connection.getParsedTokenAccountsByOwner(O().publicKey.value,{programId:I});r.value=i.value,n.value=!1}),(i,l)=>(c(),x("div",ie,[n.value?p("",!0):(c(),_(V,{key:0,title:"Deposit",wallet_accounts:r.value,onSelected_account:l[0]||(l[0]=s=>t.value=s),onSelected_amount:l[1]||(l[1]=s=>b.value=s)},null,8,["wallet_accounts"])),n.value?p("",!0):(c(),_(V,{key:1,title:"Recieve",wallet_accounts:r.value,onSelected_account:l[2]||(l[2]=s=>u.value=s),onSelected_amount:l[3]||(l[3]=s=>f.value=s)},null,8,["wallet_accounts"])),e(j,{color:"primary"},{default:a(()=>[Q("Create Escrow")]),_:1})]))}}),_e=o("div",{class:"text-h3"},"ESCROW",-1),pe=o("div",{class:"text-h6"},"Alarms",-1),ve=o("div",{class:"text-h6"},"Movies",-1),Ae=h({__name:"EscrowPage",setup(v){const n=d("create");return(r,t)=>(c(),_($,{class:"col text-center q-ma-md q-gutter-y-md"},{default:a(()=>[_e,e(A,{dark:""},{default:a(()=>[e(q,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),dense:"",class:"text-white",align:"justify"},{default:a(()=>[e(k,{name:"create",label:"Create"}),e(k,{name:"exchange",label:"Exchange"}),e(k,{name:"cancel",label:"Cancel "})]),_:1},8,["modelValue"]),e(S),e(E,{dark:"",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=u=>n.value=u),animated:""},{default:a(()=>[e(g,{name:"create"},{default:a(()=>[e(me)]),_:1}),e(g,{name:"exchnage"},{default:a(()=>[pe,Q(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1}),e(g,{name:"cancel"},{default:a(()=>[ve,Q(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}});export{Ae as default};
