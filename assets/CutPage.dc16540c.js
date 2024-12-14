import{au as x,J as P,b1 as i,ak as b,al as e,as as t,cm as w,a6 as B,cP as C,P as f,cQ as T,cR as _,cS as p,cT as A,cU as S,ai as l,bx as o,co as V,a1 as E,V as d,cV as N,cn as q}from"./index.efa60c71.js";import{Q as u}from"./QCardSection.bf6bcf0b.js";import{Q as I}from"./QSeparator.976f9aad.js";import{Q as y}from"./use-form.f5bcce7a.js";import{Q as U}from"./QPage.b9f1425f.js";import{Q as $}from"./QInput.ab94e026.js";import{h as H}from"./handleTransaction.5f71f71c.js";import{_ as K,f as L}from"./format_address.8cf39e6e.js";import{c as M}from"./transferChecked.6c1681c3.js";import"./use-key-composition.1356da64.js";import"./FormatNumber.4808bf24.js";const R={class:"row"},W=x({__name:"CutPayment",props:["tokenAddress","recipientAddress"],setup(m){const n=P(),c=m;async function Q(){try{const r=new C,a=new f(c.recipientAddress),s=T().tokenList.find(v=>v.address==c.tokenAddress),g=_(p().toString(),s.address),h=_(a.toString(),s.address);r.add(M(g,new f(s.address),h,p(),A(n.value,s.decimals),s.decimals)),await H(r,"[Cut] Transfer")}catch(r){S.create({color:"danger",message:`${r}`,timeout:5e3})}}return(r,a)=>(i(),b(B,null,[e("div",R,[t($,{class:"col",type:"number",filled:"",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=s=>n.value=s)},null,8,["modelValue"]),t(w,{disable:!n.value,color:"primary",square:"",label:"Pay",onClick:a[1]||(a[1]=s=>Q())},null,8,["disable"])]),t(K,{mint:c.tokenAddress},null,8,["mint"])],64))}}),z=e("div",{class:"col text-h6"},"Cut",-1),F={class:"row justify-center q-ma-md"},X=e("div",{class:"text-subtitle1"},"Pay your cut: 3.3%",-1),Y=e("div",{class:"text-subtitle2 text-accent"}," Easily pay your cut to Skull&Bones for the current month ",-1),j={class:"row"},D=e("div",{class:"col"},"Sending to:",-1),J={class:""},k="756pfnvP3HHRx1BPwBPQwe1xBMfMWef5N9oN61Ews7np",O="ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx",lt=x({__name:"CutPage",setup(m){return(n,c)=>(i(),l(U,{class:"bg-black"},{default:o(()=>[t(y,{flat:""},{default:o(()=>[t(u,{class:"row items-center q-gutter-x-md"},{default:o(()=>[t(V,{name:"content_cut",size:"md"}),z]),_:1}),t(I)]),_:1}),e("div",F,[t(y,{class:"",flat:"",style:{"min-width":"500px"}},{default:o(()=>[t(u,null,{default:o(()=>[X,Y,e("div",j,[D,e("div",J,E(d(L)(k)),1)])]),_:1}),t(u,{class:"q-gutter-y-sm"},{default:o(()=>[d(N)().publicKey.value?(i(),l(W,{key:1,"token-address":O,"recipient-address":k})):(i(),l(d(q),{key:0,dark:""}))]),_:1})]),_:1})])]),_:1}))}});export{lt as default};
