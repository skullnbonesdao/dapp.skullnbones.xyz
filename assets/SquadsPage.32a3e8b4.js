import{au as d,b1 as n,ai as c,bx as s,as as t,cm as m,ck as _,V as o,al as e}from"./index.ff53e052.js";import{a as r,Q as u}from"./QInput.8440fc74.js";import{Q as p}from"./QSeparator.5ca0131b.js";import{Q as g}from"./QCard.03f45a42.js";import{Q as f}from"./QPage.dd781e33.js";import{u as a}from"./SquadsStore.6944ab1b.js";import"./pda.6957f17c.js";import"./cusper.71c9b2d0.js";const h=e("div",{class:"col text-h6"},"Squads.so Integration",-1),q=e("div",{class:"text-subtitle1"}," Please enter the required information so send instructions to your Squads Account ",-1),x=e("div",{class:"text-subtitle2 text-accent"}," You will still need to approve the transaction in you squads account! ",-1),S={class:"row q-gutter-x-sm items-center"},V={class:"col"},b=e("div",{class:"col text-weight-light"}," Squads.so -> Settings -> Multisig Account ",-1),v={class:"row q-gutter-x-sm items-center"},Q={class:"col"},w=e("div",{class:"col text-weight-light"}," Your Squads Account (computed) ",-1),U=d({__name:"SquadsPage",setup(A){return(P,l)=>(n(),c(f,{class:"bg-black"},{default:s(()=>[t(g,{flat:""},{default:s(()=>[t(r,{class:"row items-center q-gutter-x-md"},{default:s(()=>[t(m,{name:"diversity_3",size:"md"}),h,t(_,{target:"_blank",href:o(a)().getLink,color:"primary",icon:"arrow_forward",label:"To Squads.so"},null,8,["href"])]),_:1}),t(p),t(r,null,{default:s(()=>[q,x]),_:1}),t(r,{class:"q-gutter-y-sm"},{default:s(()=>[e("div",S,[e("div",V,[t(u,{dense:"",standout:"",modelValue:o(a)().multisigPDA,"onUpdate:modelValue":l[0]||(l[0]=i=>o(a)().multisigPDA=i),label:"Multisig Account"},null,8,["modelValue"])]),b]),e("div",v,[e("div",Q,[t(u,{disable:"",dense:"",standout:"",modelValue:o(a)().getVaultPDA,"onUpdate:modelValue":l[1]||(l[1]=i=>o(a)().getVaultPDA=i),label:"Squads Vault"},null,8,["modelValue"])]),w])]),_:1})]),_:1})]),_:1}))}});export{U as default};