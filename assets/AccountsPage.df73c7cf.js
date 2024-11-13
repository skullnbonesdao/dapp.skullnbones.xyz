import{Q as $,a as Q,b as G}from"./QInput.89fc3d94.js";import{Q as K}from"./QSpace.59909746.js";import{f as fe,u as A,a as J,b as be}from"./format_address.e7e0a30a.js";import{Q as H,a as we}from"./QTabPanels.ff6a9e7f.js";import{Q as ve}from"./QPage.05a07e8e.js";import{au as k,J as w,bs as R,b1 as v,ak as h,a1 as f,d1 as q,d4 as ye,d5 as ge,P as i,e0 as V,aX as W,cp as b,al as c,as as a,ck as g,bx as t,a6 as D,bZ as ee,ah as ae,aF as I,cg as F,aC as ke,ai as p,cm as j,V as x,d6 as U,bz as te,d2 as M,cn as P,d3 as pe,cS as N,cP as O,ar as y,e1 as z,e2 as Ae,cR as Z,e3 as X,aj as S,Z as ne}from"./index.bd8d814a.js";import{Q as he}from"./QTree.f3d08d35.js";import{c as le,Q as oe}from"./QSelect.d8b3c0f6.js";import{Q as se,a as ue}from"./QToolbar.ce69ce43.js";import{Q as ie,a as ce}from"./QCard.72e5d565.js";import{C as re}from"./ClosePopup.01ad4826.js";import{c as Se,a as Te,b as Y}from"./transfer.fcc73226.js";import"./use-key-composition.56cb0ac5.js";import"./QList.ca4890b1.js";import"./QSlideTransition.aab921f6.js";import"./index.4a863233.js";import"./touch.3df10340.js";const qe={class:"text-overline"},C="ATLocKpzDbTokxgvnLew3d7drZkEzLzDpzwgrgWKDbmc",B="ATLkZsBofSKG845dNFpNoUyMciGpeH29BCbMqYFUoxzU",E="poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk",xe=k({__name:"AccountTemplate",props:["count","function_name","publicKey","mint","program"],setup(u){const l=u,o=w("[empty]");async function d(){switch(l.function_name){case"getRegisteredStake":{const[r]=await V.getRegisteredStake(new i(C),new i(B),new i(l.mint),new i(E));o.value=r}break;case"getStakingAccount":{const[r]=await V.getRegisteredStake(new i(C),new i(B),new i(l.mint),new i(E)),[s]=await V.getStakingAccount(new i(C),new i(l.publicKey),r);o.value=s}break;case"getTokenEscrow":{const[r]=await V.getRegisteredStake(new i(C),new i(B),new i(l.mint),new i(E)),[s]=await V.getStakingAccount(new i(C),new i(l.publicKey),r);o.value=await q(new i(l.mint),s,!0)}break;case"getAssociatedTokenAddress(mint)":o.value=await q(new i(l.mint),new i(l.publicKey),!0,ge,ye.ASSOCIATED_PROGRAM_ID);break;default:o.value="No function called";break}}return R(()=>l.count,async()=>{await d()}),(r,s)=>(v(),h("div",qe,f(o.value),1))}}),Ve={class:"row shadow-3 q-pa-md"},Ce={class:"col"},Qe={class:"row items-center text-h6"},$e={class:"text-primary"},Ke={class:"row items-center"},Pe={class:"text-weight-bold"},Re=k({__name:"AccountSolana",setup(u){const l=w(0),o=w("none"),d=w("ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx"),r=w([{label:"Solana",header:"root",children:[{label:"Tokens",header:"generic",children:[{label:"getAssociatedTokenAddress() by mint",function_name:"getAssociatedTokenAddress(mint)",header:"generic",body:"story"}]}]},{label:"StarAtlas-Factory",header:"root",children:[{label:"Staking (Atlas/Polis)",icon:"restaurant_menu",header:"generic",children:[{label:"getRegisteredStake()",function_name:"getRegisteredStake",header:"generic",body:"story"},{label:"getStakingAccount()",function_name:"getStakingAccount",body:"story"},{label:"getTokenEscrow()",function_name:"getTokenEscrow",body:"story"}]}]}]);W(()=>{var e;o.value=((e=b().publicKey.value)==null?void 0:e.toString())??"none"});const s=()=>{l.value++};return R(()=>b().publicKey.value,()=>{var e;o.value=((e=b().publicKey.value)==null?void 0:e.toString())??"none"}),(e,n)=>(v(),h(D,null,[c("div",Ve,[c("div",Ce,[a($,{class:"col",modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=m=>o.value=m),label:"Wallet Address"},null,8,["modelValue"]),a($,{class:"col",modelValue:d.value,"onUpdate:modelValue":n[1]||(n[1]=m=>d.value=m),label:"Token Mint"},null,8,["modelValue"])]),a(g,{color:"primary",icon:"send",class:"q-ml-xl",onClick:s})]),a(he,{color:"primary",dark:"",nodes:r.value,"node-key":"label",class:"q-pt-md"},{"header-root":t(m=>[c("div",Qe,[c("div",$e,f(m.node.label),1)])]),"default-header":t(m=>[c("div",Ke,[c("div",Pe,f(m.node.label),1)])]),"body-story":t(m=>[a(xe,{count:l.value,function_name:m.node.function_name,"public-key":o.value,mint:d.value},null,8,["count","function_name","public-key","mint"])]),_:1},8,["nodes"])],64))}});var _=ee({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(u,{slots:l}){const o=ke(),d=ae(()=>"q-td"+(u.autoWidth===!0?" q-table--col-auto-width":"")+(u.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(u.props===void 0)return I("td",{class:d.value},F(l.default));const r=o.vnode.key,s=(u.props.colsMap!==void 0?u.props.colsMap[r]:null)||u.props.col;if(s===void 0)return;const{row:e}=u.props;return I("td",{class:d.value+s.__tdClass(e),style:s.__tdStyle(e)},F(l.default))}}}),de=ee({name:"QTr",props:{props:Object,noHover:Boolean},setup(u,{slots:l}){const o=ae(()=>"q-tr"+(u.props===void 0||u.props.header===!0?"":" "+u.props.__trClass)+(u.noHover===!0?" q-tr--no-hover":""));return()=>I("tr",{class:o.value},F(l.default))}});const T=k({__name:"SolscanLink",props:["address"],setup(u){return(l,o)=>(v(),p(g,{square:"",flat:"",color:"secondary",size:"sm",icon:"link",target:"_blank",href:"https://solscan.io/account/"+u.address},{default:t(()=>[a(j),c("div",null,f(x(fe)(u.address)),1)]),_:1},8,["href"]))}}),Ue=c("span",{class:"text-weight-bold"},"Send Token",-1),Le={class:"text-overline"},ze={class:"row"},me=k({__name:"SendTokenButton",props:["mint","decimals"],setup(u){const l=w(!1),o=u,d=w("6AzZCoxBrJnfWejYZmqcdKUvzdG6yTbRLyuqVYizHWy4"),r=w(0);async function s(){const e=new M,n=await q(new i(o.mint),new i(d.value));console.log(n);const m=await q(new i(o.mint),b().publicKey.value);await P().connection.getAccountInfo(n)===null&&e.add(pe(b().publicKey.value,n,new i(d.value),new i(o.mint))),e.add(Se(m,n,b().publicKey.value,r.value*Math.pow(10,o.decimals)));try{const L=await b().sendTransaction(e,P().connection);await N(L)}catch(L){O.create({color:"red",message:`${L}`,timeout:5e3})}}return(e,n)=>(v(),h(D,null,[a(g,{square:"",color:"primary",size:"sm",icon:"send",onClick:n[0]||(n[0]=m=>l.value=!0)}),a(le,{modelValue:l.value,"onUpdate:modelValue":n[4]||(n[4]=m=>l.value=m)},{default:t(()=>[a(ie,null,{default:t(()=>[a(se,{class:"q-mt-md"},{default:t(()=>[a(U,null,{default:t(()=>[a(j,{name:"send"})]),_:1}),a(ue,null,{default:t(()=>[Ue,c("div",Le,f(u.mint),1)]),_:1}),te(a(g,{flat:"",round:"",dense:"",icon:"close"},null,512),[[re]])]),_:1}),a(ce,{class:"q-gutter-y-sm"},{default:t(()=>[c("div",null,[a($,{filled:"",square:"",label:"Receiver",modelValue:d.value,"onUpdate:modelValue":n[1]||(n[1]=m=>d.value=m)},null,8,["modelValue"])]),c("div",ze,[a($,{filled:"",square:"",class:"col",label:"Amount",modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=m=>r.value=m)},null,8,["modelValue"]),a(g,{square:"",color:"primary",icon:"send",onClick:n[3]||(n[3]=m=>s())})])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),Be=c("span",{class:"text-weight-bold"},"Close/Burn Account",-1),Ee={class:"text-overline"},Ie=c("div",{class:"row q-gutter-x-sm"},[c("div",{class:""},"Closing Token-Accounts will recover the fee!")],-1),Fe={class:"row q-gutter-x-sm"},Me=c("div",{class:""},"Amount left:",-1),Ne={class:""},Oe={class:"q-ma-md text-right text-weight-light"},_e=k({__name:"EditTokenButton",props:["mint","decimals","amount"],setup(u){const l=w(!1),o=u;w(""),w(0);async function d(){const s=new M,e=await q(new i(o.mint),b().publicKey.value);s.add(Te(e,new i(o.mint),b().publicKey.value,o.amount*Math.pow(10,o.decimals))),s.add(Y(e,b().publicKey.value,b().publicKey.value)),s.add(Z.transfer({fromPubkey:b().publicKey.value,toPubkey:new i(X),lamports:z}));try{const n=await b().sendTransaction(s,P().connection);await N(n)}catch(n){O.create({color:"red",message:`${n}`,timeout:5e3})}}async function r(){const s=new M,e=await q(new i(o.mint),b().publicKey.value);s.add(Y(e,b().publicKey.value,b().publicKey.value)),s.add(Z.transfer({fromPubkey:b().publicKey.value,toPubkey:new i(X),lamports:z}));try{const n=await b().sendTransaction(s,P().connection);await N(n)}catch(n){O.create({color:"red",message:`${n}`,timeout:5e3})}}return(s,e)=>(v(),h(D,null,[a(g,{flat:"",square:"",color:"primary",size:"sm",icon:"edit",onClick:e[0]||(e[0]=n=>l.value=!0)}),a(le,{modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=n=>l.value=n)},{default:t(()=>[a(ie,null,{default:t(()=>[a(se,{class:"q-mt-md"},{default:t(()=>[a(U,null,{default:t(()=>[a(j,{name:"edit"})]),_:1}),a(ue,null,{default:t(()=>[Be,c("div",Ee,f(u.mint),1)]),_:1}),te(a(g,{flat:"",round:"",dense:"",icon:"close"},null,512),[[re]])]),_:1}),a(ce,{class:"q-gutter-y-md col justify-around"},{default:t(()=>[Ie,c("div",Fe,[Me,c("div",Ne,f(u.amount),1)]),a(g,{square:"",disabled:u.amount==0,class:"full-width",color:"red",onClick:e[1]||(e[1]=n=>d())},{default:t(()=>[y(" Burn and close Account ")]),_:1},8,["disabled"]),a(g,{square:"",flat:"",disabled:u.amount>0,class:"full-width",color:"orange",onClick:e[2]||(e[2]=n=>r())},{default:t(()=>[y(" Close Account")]),_:1},8,["disabled"])]),_:1}),c("div",Oe," service-fee: "+f(x(z)/x(Ae))+"sol ",1)]),_:1})]),_:1},8,["modelValue"])],64))}}),We=c("div",{class:"col-2 q-table__title"},"Accounts",-1),De=["src"],je=k({__name:"AccountWalletAccountsToken",setup(u){w();const l=w(["account","amount","mint","action"]),o=[{name:"image",label:"Image",align:"left",required:!0},{name:"name",label:"Name",align:"left",sortable:!0,required:!0},{name:"account",label:"Account",align:"left",sortable:!0},{name:"mint",label:"Mint",align:"left",sortable:!0},{name:"owner",align:"left",label:"Owner",sortable:!0},{name:"state",align:"center",label:"State",sortable:!0},{name:"space",label:"Space",sortable:!0},{name:"lamports",label:"Lamports",sortable:!0},{name:"decimals",label:"Decimals",sortable:!0},{name:"amount",label:"Amount",align:"right",sortable:!0},{label:"",align:"right",name:"action"}];W(async()=>{await A().update_accounts()}),R(()=>b().publicKey.value,async()=>{await A().update_accounts()});const d=w({rowsPerPage:0});return(r,s)=>(v(),h("div",null,[a(J,{color:"primary",dark:"",flat:"",square:"","virtual-scroll":"",pagination:d.value,"onUpdate:pagination":s[1]||(s[1]=e=>d.value=e),"rows-per-page-options":[0],"visible-columns":l.value,title:"Accounts",rows:x(A)().get_account_map,columns:o,"row-key":"name"},{top:t(e=>[We,a(K),a(oe,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=n=>l.value=n),multiple:"",borderless:"",dense:"","options-dense":"","display-value":r.$q.lang.table.columns,"emit-value":"","map-options":"",options:o,"option-value":"name",style:{"min-width":"150px"}},null,8,["modelValue","display-value"]),a(g,{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),body:t(e=>[a(de,{props:e},{default:t(()=>[a(_,{key:"image",props:e},{default:t(()=>{var n;return[(n=e.row.meta)!=null&&n.logoURI?(v(),p(U,{key:0,color:"",size:"sm"},{default:t(()=>{var m;return[c("img",{src:(m=e.row.meta)==null?void 0:m.logoURI},null,8,De)]}),_:2},1024)):S("",!0)]}),_:2},1032,["props"]),a(_,{key:"name",props:e},{default:t(()=>{var n;return[y(f(((n=e.row.meta)==null?void 0:n.name)??"-"),1)]}),_:2},1032,["props"]),a(_,{key:"account",props:e},{default:t(()=>[a(T,{address:e.row.pubkey},null,8,["address"])]),_:2},1032,["props"]),a(_,{key:"mint",props:e,class:""},{default:t(()=>[a(T,{address:e.row.info.mint},null,8,["address"])]),_:2},1032,["props"]),a(_,{key:"owner",props:e},{default:t(()=>[a(T,{address:e.row.info.owner},null,8,["address"])]),_:2},1032,["props"]),a(_,{key:"state",props:e},{default:t(()=>[y(f(e.row.account.account.data.parsed.info.state),1)]),_:2},1032,["props"]),a(_,{key:"space",props:e},{default:t(()=>[y(f(e.row.account.account.space),1)]),_:2},1032,["props"]),a(_,{key:"lamports",props:e},{default:t(()=>[y(f(e.row.account.account.lamports),1)]),_:2},1032,["props"]),a(_,{key:"decimals",props:e},{default:t(()=>[y(f(e.row.info.tokenAmount.decimals),1)]),_:2},1032,["props"]),a(_,{key:"amount",class:"text-overline",props:e},{default:t(()=>[c("div",{class:ne(e.row.info.tokenAmount.uiAmount>0?"text-white":"text-secondary")},f(e.row.info.tokenAmount.uiAmount.toFixed(2)),3)]),_:2},1032,["props"]),a(_,{key:"action",props:e,class:"q-gutter-x-sm"},{default:t(()=>[a(_e,{amount:e.row.info.tokenAmount.uiAmount,mint:e.row.info.mint,decimals:e.row.info.tokenAmount.decimals},null,8,["amount","mint","decimals"]),a(me,{mint:e.row.info.mint,decimals:e.row.info.tokenAmount.decimals},null,8,["mint","decimals"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["pagination","visible-columns","rows"])]))}}),Ge=c("div",{class:"col-2 q-table__title"},"Accounts",-1),He=["src"],Ze=k({__name:"AccountWalletAccountsNft",setup(u){w();const l=w(["account","amount","mint","action"]),o=[{name:"name",label:"Name",align:"left",sortable:!0,required:!0},{name:"symbol",label:"Symbol",align:"left",sortable:!0,required:!0},{name:"account",label:"Account",align:"left",sortable:!0},{name:"mint",label:"Mint",align:"left",sortable:!0},{name:"owner",align:"left",label:"Owner",sortable:!0},{name:"state",align:"center",label:"State",sortable:!0},{name:"space",label:"Space",sortable:!0},{name:"lamports",label:"Lamports",sortable:!0},{name:"decimals",label:"Decimals",sortable:!0},{name:"amount",label:"Amount",sortable:!0},{label:"",align:"right",name:"action"}];W(async()=>{await A().update_accounts_nft()}),R(()=>b().publicKey.value,async()=>{await A().update_accounts_nft()});const d=w({rowsPerPage:0});return(r,s)=>(v(),h("div",null,[a(J,{color:"primary",dark:"",flat:"",square:"","virtual-scroll":"",pagination:d.value,"onUpdate:pagination":s[1]||(s[1]=e=>d.value=e),"rows-per-page-options":[0],"visible-columns":l.value,title:"Accounts",rows:x(A)().nft_map,columns:o,"row-key":"name"},{top:t(e=>[Ge,a(K),a(oe,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=n=>l.value=n),multiple:"",borderless:"",dense:"","options-dense":"","display-value":r.$q.lang.table.columns,"emit-value":"","map-options":"",options:o,"option-value":"name",style:{"min-width":"150px"}},null,8,["modelValue","display-value"]),a(g,{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),body:t(e=>[a(de,{props:e},{default:t(()=>[a(_,{key:"name",props:e,class:"row items-center"},{default:t(()=>{var n;return[e.row.meta.data.uri&&e.row.data?(v(),p(U,{key:0,color:"",size:"sm",class:"q-mr-sm"},{default:t(()=>[c("img",{src:e.row.data.image??"none"},null,8,He)]),_:2},1024)):S("",!0),c("div",null,f(((n=e.row.meta.data)==null?void 0:n.name)||e.row.data.name),1)]}),_:2},1032,["props"]),a(_,{key:"symbol",props:e},{default:t(()=>[y(f(e.row.meta.data.symbol||e.row.data.symbol),1)]),_:2},1032,["props"]),a(_,{key:"account",props:e},{default:t(()=>[a(T,{address:e.row.pubkey},null,8,["address"])]),_:2},1032,["props"]),a(_,{key:"mint",props:e,class:""},{default:t(()=>[a(T,{address:e.row.meta.mint},null,8,["address"])]),_:2},1032,["props"]),a(_,{key:"owner",props:e},{default:t(()=>[a(T,{address:e.row.info.owner},null,8,["address"])]),_:2},1032,["props"]),a(_,{key:"state",props:e},{default:t(()=>[y(f(e.row.account.account.data.parsed.info.state),1)]),_:2},1032,["props"]),a(_,{key:"space",props:e},{default:t(()=>[y(f(e.row.account.account.space),1)]),_:2},1032,["props"]),a(_,{key:"lamports",props:e},{default:t(()=>[y(f(e.row.account.account.lamports),1)]),_:2},1032,["props"]),a(_,{key:"decimals",props:e},{default:t(()=>[y(f(e.row.info.tokenAmount.decimals),1)]),_:2},1032,["props"]),a(_,{key:"amount",class:"text-overline",props:e},{default:t(()=>[c("div",{class:ne(e.row.info.tokenAmount.uiAmount>0?"text-white":"text-yellow")},f(e.row.info.tokenAmount.uiAmount.toFixed(2)),3)]),_:2},1032,["props"]),a(_,{key:"action",props:e,class:"q-gutter-x-sm"},{default:t(()=>[a(_e,{amount:e.row.info.tokenAmount.uiAmount,mint:e.row.info.mint,decimals:e.row.info.tokenAmount.decimals},null,8,["amount","mint","decimals"]),a(me,{mint:e.row.info.mint,decimals:e.row.info.tokenAmount.decimals},null,8,["mint","decimals"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["pagination","visible-columns","rows"])]))}}),Xe={class:"col shadow-1 bg-dark"},Ye={class:"row"},Je=c("div",{class:"col"},null,-1),ea={key:0,class:"row"},ga=k({__name:"AccountsPage",setup(u){w();const l=w("wallet"),o=w("token");return(d,r)=>(v(),p(ve,{class:"col items-center justify-evenly"},{default:t(()=>[c("div",Xe,[a(G,{"no-caps":"","outside-arrows":"","mobile-arrows":"",modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=s=>l.value=s),align:"justify"},{default:t(()=>[a(Q,{name:"wallet",label:"Wallet"}),a(Q,{name:"solana",label:"Solana"})]),_:1},8,["modelValue"]),c("div",Ye,[l.value=="wallet"?(v(),p(G,{key:0,class:"col","mobile-arrows":"",modelValue:o.value,"onUpdate:modelValue":r[1]||(r[1]=s=>o.value=s),align:"justify"},{default:t(()=>[a(Q,{name:"token",label:"Token"}),a(Q,{name:"nft",label:"NFT"})]),_:1},8,["modelValue"])):S("",!0),Je])]),a(we,{dark:"",modelValue:l.value,"onUpdate:modelValue":r[2]||(r[2]=s=>l.value=s),animated:"",class:"q-ma-md"},{default:t(()=>[a(H,{name:"wallet"},{default:t(()=>[x(A)().is_loading?(v(),h("div",ea,[a(K),a(be,{class:"row",color:"primary",size:"3rem"}),a(K)])):S("",!0),o.value=="token"?(v(),p(je,{key:1})):S("",!0),o.value=="nft"?(v(),p(Ze,{key:2})):S("",!0)]),_:1}),a(H,{name:"solana",class:"q-gutter-md"},{default:t(()=>[a(Re)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{ga as default};
