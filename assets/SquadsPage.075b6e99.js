import{au as d,b1 as u,ai as c,bx as s,as as t,cn as m,cl as _,V as o,cj as a,al as e}from"./index.dfac9ee0.js";import{Q as n}from"./QCardSection.97261a07.js";import{Q as p}from"./QSeparator.46eacbf8.js";import{Q as r}from"./QInput.440ef0a5.js";import{Q as g}from"./QCard.f392f138.js";import{Q as f}from"./QPage.322a4056.js";import"./use-key-composition.52d37a72.js";import"./uid.42677368.js";const h=e("div",{class:"col text-h6"},"Squads.so Integration",-1),q=e("div",{class:"text-subtitle1"}," Please enter the required information so send instructions to your Squads Account ",-1),x=e("div",{class:"text-subtitle2 text-accent"}," You will still need to approve the transaction in you squads account! ",-1),Q={class:"row q-gutter-x-sm items-center"},S={class:"col"},V=e("div",{class:"col text-weight-light"}," Squads.so -> Settings -> Multisig Account ",-1),b={class:"row q-gutter-x-sm items-center"},v={class:"col"},w=e("div",{class:"col text-weight-light"}," Your Squads Account (computed) ",-1),U=d({__name:"SquadsPage",setup(A){return(P,l)=>(u(),c(f,{class:"bg-black"},{default:s(()=>[t(g,{flat:""},{default:s(()=>[t(n,{class:"row items-center q-gutter-x-md"},{default:s(()=>[t(m,{name:"diversity_3",size:"md"}),h,t(_,{target:"_blank",href:o(a)().getLink,color:"primary",icon:"arrow_forward",label:"To Squads.so"},null,8,["href"])]),_:1}),t(p),t(n,null,{default:s(()=>[q,x]),_:1}),t(n,{class:"q-gutter-y-sm"},{default:s(()=>[e("div",Q,[e("div",S,[t(r,{dense:"",standout:"",modelValue:o(a)().multisigPDA,"onUpdate:modelValue":l[0]||(l[0]=i=>o(a)().multisigPDA=i),label:"Multisig Account"},null,8,["modelValue"])]),V]),e("div",b,[e("div",v,[t(r,{disable:"",dense:"",standout:"",modelValue:o(a)().getVaultPDA,"onUpdate:modelValue":l[1]||(l[1]=i=>o(a)().getVaultPDA=i),label:"Squads Vault"},null,8,["modelValue"])]),w])]),_:1})]),_:1})]),_:1}))}});export{U as default};
