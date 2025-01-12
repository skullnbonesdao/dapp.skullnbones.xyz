import{au as p,J as m,bs as x,b1 as h,ai as v,bx as s,as as e,co as q,cm as r,V as a,cj as o,al as t,a1 as g,aj as S}from"./index.746aaf4d.js";import{a as d,Q as f}from"./QInput.a9ae8056.js";import{Q as u}from"./QSeparator.34e714e3.js";import{Q as w}from"./QSelect.87e9c2b4.js";import{Q as _}from"./use-key-composition.af6a996d.js";import{Q as b}from"./QPage.10cf6eda.js";import"./rtl.31b4687e.js";const y=t("div",{class:"col text-h6"},"Squads.so Integration",-1),V=t("div",{class:"text-subtitle1"}," Please enter the required information so send instructions to your Squads Account ",-1),Q=t("div",{class:"text-subtitle2 text-accent"}," You will still need to approve the transaction in you squads account! ",-1),A=t("div",{class:"text-h6"},"Select Squad",-1),k=t("div",{class:"text-subtitle2"}," Please choose one of you stored squad accounts ",-1),P={class:"row q-gutter-x-sm items-center"},C={class:"col-2"},D={class:"col items-center"},M={class:"col"},B={class:"row q-gutter-x-md"},I=t("div",{class:"col text-right text-weight-light"}," Multisig Account ",-1),L={class:"col-3"},N={class:"col"},U={class:"row q-gutter-x-md"},j=t("div",{class:"col text-right text-weight-light"}," Squads Account ",-1),T={class:"col-3"},$={class:"row"},z=t("div",{class:"col"},null,-1),F=t("div",{class:"text-h6"},"Add Squad",-1),J=t("div",{class:"text-subtitle2"}," Add a new squad to the local store... ",-1),R={class:"row q-gutter-x-sm items-center"},Y={class:"col"},E=t("div",{class:"col text-weight-light"},null,-1),G={class:"row q-gutter-x-sm items-center"},H={class:"col"},K=t("div",{class:"col text-weight-light"}," Squads.so -> Settings -> Multisig Account ",-1),O={class:"row"},W=t("div",{class:"col"},null,-1),it=p({__name:"SquadsPage",setup(X){const c=m(""),n=m();return x(()=>o().storeSelected,()=>{o().multisigPDA=o().storeSelected.value}),(Z,l)=>(h(),v(b,{class:"bg-black"},{default:s(()=>[e(_,{flat:""},{default:s(()=>[e(d,{class:"row items-center q-gutter-x-md"},{default:s(()=>[e(q,{name:"diversity_3",size:"md"}),y,e(r,{target:"_blank",href:a(o)().getLink,color:"primary",icon:"arrow_forward",label:"To Squads.so"},null,8,["href"])]),_:1}),e(u),e(d,null,{default:s(()=>[V,Q]),_:1}),a(o)().store.length?(h(),v(d,{key:0,class:"q-gutter-y-sm"},{default:s(()=>[e(_,{flat:"",bordered:""},{default:s(()=>[e(d,null,{default:s(()=>[A,k]),_:1}),e(u),e(d,{class:"q-gutter-y-sm"},{default:s(()=>[t("div",P,[t("div",C,[e(w,{dense:"",filled:"",options:a(o)().store,modelValue:a(o)().storeSelected,"onUpdate:modelValue":l[0]||(l[0]=i=>a(o)().storeSelected=i)},null,8,["options","modelValue"])]),t("div",D,[t("div",M,[t("div",B,[I,t("div",L,g(a(o)().multisigPDA),1)])]),t("div",N,[t("div",U,[j,t("div",T,g(a(o)().getVaultPDA),1)])])])]),t("div",$,[z,e(r,{onClick:l[1]||(l[1]=i=>a(o)().removeFromStore()),label:"Remove",color:"primary"})])]),_:1})]),_:1})]),_:1})):S("",!0),e(d,{class:"q-gutter-y-sm"},{default:s(()=>[e(_,{flat:"",bordered:""},{default:s(()=>[e(d,null,{default:s(()=>[F,J]),_:1}),e(u),e(d,{class:"q-gutter-y-sm"},{default:s(()=>[t("div",R,[t("div",Y,[e(f,{type:"text",dense:"",standout:"",modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=i=>c.value=i),label:"Label"},null,8,["modelValue"])]),E]),t("div",G,[t("div",H,[e(f,{type:"text",dense:"",standout:"",modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=i=>n.value=i),label:"Multisig Account"},null,8,["modelValue"])]),K]),t("div",O,[W,e(r,{onClick:l[4]||(l[4]=i=>a(o)().addToStore(c.value,n.value)),label:"Add",color:"primary"})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{it as default};