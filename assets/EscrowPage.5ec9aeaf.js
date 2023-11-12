import{a as A,Q as k}from"./QTabs.f0eeee22.js";import{a as I,Q as T,b as S}from"./QSeparator.0189d97e.js";import{a as E,Q as g}from"./QTabPanels.8ccf9c5d.js";import{Q as q}from"./QCard.15c855af.js";import{Q as $}from"./QPage.cd69325b.js";import{at as h,I as d,b0 as c,ah as _,bw as a,ar as e,ak as o,a0 as m,aj as x,ai as p,b6 as B,by as P,aq as w,a5 as D,aW as L,cl as N,cI as O,d7 as j,ci as M}from"./index.8041a8a0.js";import{Q as y,a as R}from"./QCardActions.ac886eb5.js";import{n as U,j as W,k as G,l as K,m as z,C as F}from"./ClosePopup.e80a251e.js";import{Q as H}from"./QInput.d65ccb6e.js";import"./uid.1059bff9.js";import"./touch.3df10340.js";const J={class:"text-h5 q-pt-sm text-left"},X={key:0,class:"text-uppercase text-left q-mt-sm q-mb-xs"},Y={key:1,class:"col text-caption text-left text-grey"},Z={class:"row"},ee=o("div",{class:"col"},"Mint:",-1),te={class:"col"},ae={class:"row"},se=o("div",{class:"col"},"Account:",-1),oe={class:"col"},le={class:"row"},ne=o("div",{class:"col"},"AccountOwner:",-1),ce={class:"col"},ue={class:"row"},de=o("div",{class:"col"},"Amount:",-1),ie={class:"col"},V=h({__name:"SelectEscrowToken",props:["wallet_accounts","title"],emits:["selected_account","selected_amount"],setup(v,{emit:n}){const i=n,t=d(),u=d();async function Q(f){t.value=f,i("selected_account",t.value)}return(f,r)=>(c(),_(q,{class:"my-card",flat:"",bordered:""},{default:a(()=>[e(y,{horizontal:""},{default:a(()=>[e(y,{class:"q-pt-xs"},{default:a(()=>{var l,s,b,C;return[o("div",J,m(v.title),1),t.value?(c(),x("div",X," Unknown-Token ")):p("",!0),t.value?(c(),x("div",Y,[o("div",Z,[ee,o("div",te,m((l=t.value)==null?void 0:l.account.data.parsed.info.mint),1)]),o("div",ae,[se,o("div",oe,m((s=t.value)==null?void 0:s.pubkey),1)]),o("div",le,[ne,o("div",ce,m((b=t.value)==null?void 0:b.account.data.parsed.info.owner),1)]),o("div",ue,[de,o("div",ie,m((C=t.value)==null?void 0:C.account.data.parsed.info.tokenAmount.uiAmount),1)])])):p("",!0)]}),_:1}),e(I),e(y,{class:"col-3 flex flex-center"},{default:a(()=>[t.value?(c(),_(T,{key:0,class:"rounded-borders",src:"https://cdn.quasar.dev/img/parallax2.jpg"})):p("",!0)]),_:1})]),_:1}),e(S),e(R,{class:"q-gutter-x-md"},{default:a(()=>{var l;return[e(U,{color:"primary",label:t.value?(l=t.value)==null?void 0:l.account.data.parsed.info.mint:"select an account"},{default:a(()=>[e(W,null,{default:a(()=>[(c(!0),x(D,null,B(v.wallet_accounts,s=>P((c(),_(G,{key:s,clickable:"",onClick:b=>Q(s)},{default:a(()=>[e(K,null,{default:a(()=>[e(z,null,{default:a(()=>[w(m(s.account.data.parsed.info.mint),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[F]])),128))]),_:1})]),_:1},8,["label"]),e(H,{label:"Amount",modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=s=>u.value=s),dense:"",type:"text",onChange:r[1]||(r[1]=s=>i("selected_amount",u.value))},null,8,["modelValue"])]}),_:1})]),_:1}))}}),re={class:"q-gutter-y-md"},me=h({__name:"CreateEscrow",setup(v){const n=d(!0),i=d(),t=d(),u=d(),Q=d(),f=d();return L(async()=>{const r=await N().connection.getParsedTokenAccountsByOwner(O().publicKey.value,{programId:j});i.value=r.value,n.value=!1}),(r,l)=>(c(),x("div",re,[n.value?p("",!0):(c(),_(V,{key:0,title:"Deposit",wallet_accounts:i.value,onSelected_account:l[0]||(l[0]=s=>t.value=s),onSelected_amount:l[1]||(l[1]=s=>Q.value=s)},null,8,["wallet_accounts"])),n.value?p("",!0):(c(),_(V,{key:1,title:"Recieve",wallet_accounts:i.value,onSelected_account:l[2]||(l[2]=s=>u.value=s),onSelected_amount:l[3]||(l[3]=s=>f.value=s)},null,8,["wallet_accounts"])),e(M,{color:"primary"},{default:a(()=>[w("Create Escrow")]),_:1})]))}}),_e=o("div",{class:"text-h3"},"ESCROW",-1),pe=o("div",{class:"text-h6"},"Alarms",-1),ve=o("div",{class:"text-h6"},"Movies",-1),Se=h({__name:"EscrowPage",setup(v){const n=d("create");return(i,t)=>(c(),_($,{class:"col text-center q-ma-md q-gutter-y-md"},{default:a(()=>[_e,e(q,{dark:""},{default:a(()=>[e(A,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),dense:"",class:"text-white",align:"justify"},{default:a(()=>[e(k,{name:"create",label:"Create"}),e(k,{name:"exchange",label:"Exchange"}),e(k,{name:"cancel",label:"Cancel "})]),_:1},8,["modelValue"]),e(S),e(E,{dark:"",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=u=>n.value=u),animated:""},{default:a(()=>[e(g,{name:"create"},{default:a(()=>[e(me)]),_:1}),e(g,{name:"exchnage"},{default:a(()=>[pe,w(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1}),e(g,{name:"cancel"},{default:a(()=>[ve,w(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}});export{Se as default};
