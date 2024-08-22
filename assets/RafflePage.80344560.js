import{Q as Ie}from"./QPage.3c98e5c2.js";import{Q as fe,a as st}from"./QTabs.578fb3f0.js";import{aw as A,L as p,u as V,b3 as g,am as L,an as k,au as t,bz as s,at as h,cm as E,al as $,P as _,cp as U,cr as P,cR as x,cY as te,cS as be,cZ as Ke,cQ as D,cT as z,b$ as ot,aj as F,bu as ae,aV as ve,cd as Ce,c8 as Re,aH as Ee,bE as rt,aE as it,ci as ct,ce as ut,c_ as I,c$ as ie,d0 as _e,d1 as Ne,aZ as he,ak as b,bB as re,d2 as dt,Y as T,d3 as ft,d4 as De,d5 as mt,d6 as pt,a3 as N,co as me,bV as pe,cl as se,d7 as gt,cn as vt}from"./index.770ef299.js";import{Q as ce}from"./QSpace.606e48c5.js";import{u as Z,Q as _t,t as He,a as ke,f as We,b as yt}from"./format_address.ae6d1906.js";import{Q as ye}from"./QImg.82fa9517.js";import{Q as xe,a as G}from"./QCard.70d38aba.js";import{Q as J,l as Q,M as wt,f as bt,t as ht,N as qe,O as kt,h as xt,v as St,i as Tt,w as Pt,P as At,R as $t,j as It,x as Ct,S as Ve,T as Rt,c as Be,g as Et,U as Me,V as qt,C as Vt,m as M}from"./ClosePopup.43a4f2fb.js";import{a as Bt}from"./QList.5ce42986.js";import{h as H,a as ge}from"./QSlideTransition.c48ae9fa.js";import{Q as we}from"./QCardActions.7fabdaa5.js";import{Q as Fe,c as Mt}from"./QSelect.b3e77253.js";import{Q as j}from"./QInput.92d55f0b.js";import{T as K}from"./constants.528dc5b9.js";import{Q as oe}from"./QBadge.c6eeec79.js";import{g as je,c as Ge}from"./index.0391b5f0.js";import{_ as Qt}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as Qe}from"./QSeparator.77a5632d.js";const zt={key:0,class:"col q-pa-sm"},Ot=k("p",{class:"text-overline"},"Add a prize:",-1),Lt={class:"col q-gutter-y-sm"},Ut={class:"row"},Kt=A({__name:"RaffleAddPrize",props:["raffle","is_admin"],setup(e){const n=p(1),i=p(""),o=p(""),a=e,l=p([]);p(Z().token_accounts.filter(f=>f.account.data.parsed.info.tokenAmount.uiAmount>0).flatMap(f=>f.account.data.parsed.info.mint)).value.forEach(f=>{var u,c;return l.value.push({label:((u=V().token_list.find(m=>m.address==f))==null?void 0:u.name)+" ["+((c=V().token_list.find(m=>m.address==f))==null?void 0:c.symbol)+"]",value:f})});async function d(){var y,B,O;const{pg_raffle:f}=z(),u=new _(o.value.value),c=(await U().connection.getParsedTokenAccountsByOwner(P().publicKey.value,{mint:u})).value[0].pubkey,m=new _(a.raffle.publicKey.toString());let[v,w]=_.findProgramAddressSync([x("vault"),m.toBytes()],f.value.programId);const S=await U().connection.getParsedAccountInfo(u);console.log((y=S.value)==null?void 0:y.data.parsed.info.decimals);try{const R=await f.value.methods.addPrize(new te(n.value*Math.pow(10,(B=S.value)==null?void 0:B.data.parsed.info.decimals)),new te((O=S.value)==null?void 0:O.data.parsed.info.decimals),i.value).accounts({raffle:m,creator:P().publicKey.value,from:c,prizeVault:v,prizeMint:u,systemProgram:be.programId,tokenProgram:K,rent:Ke}).rpc();console.log(R),await H(R)}catch(R){D.create({color:"red",message:`${R}`,timeout:5e3})}}return(f,u)=>e.is_admin&&e.raffle.account.prizeTokenMint.toString()=="11111111111111111111111111111111"?(g(),L("div",zt,[Ot,k("div",Lt,[t(Fe,{class:"full-width",filled:"",square:"",modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=c=>o.value=c),clearable:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",behavior:"menu",label:"Select Ticket by mint",options:l.value,onFilter:f.filterFn,style:{width:"250px"}},{"no-option":s(()=>[t(J,null,{default:s(()=>[t(Q,{class:"text-grey"},{default:s(()=>[h(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter"]),k("div",Ut,[t(j,{class:"col",filled:"",square:"",modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=c=>n.value=c),type:"number",label:"Count"},null,8,["modelValue"]),t(E,{filled:"",square:"",class:"col-2",color:"primary",icon:"send",onClick:u[2]||(u[2]=c=>d())})])])])):$("",!0)}});var Nt=ot({name:"QTooltip",inheritAttrs:!1,props:{...wt,...bt,...ht,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:qe},self:{type:String,default:"top middle",validator:qe},offset:{type:Array,default:()=>[14,14],validator:kt},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...xt],setup(e,{slots:n,emit:i,attrs:o}){let a,l;const r=it(),{proxy:{$q:d}}=r,f=p(null),u=p(!1),c=F(()=>Me(e.anchor,d.lang.rtl)),m=F(()=>Me(e.self,d.lang.rtl)),v=F(()=>e.persistent!==!0),{registerTick:w,removeTick:S}=St(),{registerTimeout:y}=Tt(),{transitionProps:B,transitionStyle:O}=Pt(e),{localScrollTarget:R,changeScrollEvent:ne,unconfigureScrollTarget:le}=At(e,Ae),{anchorEl:q,canShow:Y,anchorEvents:X}=$t({showing:u,configureAnchorEl:at}),{show:Ye,hide:ue}=It({showing:u,canShow:Y,handleShow:Ze,handleHide:Xe,hideOnRouteChange:v,processOnMount:!0});Object.assign(X,{delayShow:et,delayHide:tt});const{showPortal:Se,hidePortal:Te,renderPortal:Je}=Ct(r,f,lt,"tooltip");if(d.platform.is.mobile===!0){const C={anchorEl:q,innerRef:f,onClickOutside(W){return ue(W),W.target.classList.contains("q-dialog__backdrop")&&ut(W),!0}},de=F(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);ae(de,W=>{(W===!0?qt:Ve)(C)}),ve(()=>{Ve(C)})}function Ze(C){Se(),w(()=>{l=new MutationObserver(()=>ee()),l.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),ee(),Ae()}),a===void 0&&(a=ae(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,ee)),y(()=>{Se(!0),i("show",C)},e.transitionDuration)}function Xe(C){S(),Te(),Pe(),y(()=>{Te(!0),i("hide",C)},e.transitionDuration)}function Pe(){l!==void 0&&(l.disconnect(),l=void 0),a!==void 0&&(a(),a=void 0),le(),Ce(X,"tooltipTemp")}function ee(){Rt({targetEl:f.value,offset:e.offset,anchorEl:q.value,anchorOrigin:c.value,selfOrigin:m.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function et(C){if(d.platform.is.mobile===!0){Be(),document.body.classList.add("non-selectable");const de=q.value,W=["touchmove","touchcancel","touchend","click"].map($e=>[de,$e,"delayHide","passiveCapture"]);Re(X,"tooltipTemp",W)}y(()=>{Ye(C)},e.delay)}function tt(C){d.platform.is.mobile===!0&&(Ce(X,"tooltipTemp"),Be(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),y(()=>{ue(C)},e.hideDelay)}function at(){if(e.noParentEvent===!0||q.value===null)return;const C=d.platform.is.mobile===!0?[[q.value,"touchstart","delayShow","passive"]]:[[q.value,"mouseenter","delayShow","passive"],[q.value,"mouseleave","delayHide","passive"]];Re(X,"anchor",C)}function Ae(){if(q.value!==null||e.scrollTarget!==void 0){R.value=Et(q.value,e.scrollTarget);const C=e.noParentEvent===!0?ee:ue;ne(R.value,C)}}function nt(){return u.value===!0?Ee("div",{...o,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",o.class],style:[o.style,O.value],role:"tooltip"},ct(n.default)):null}function lt(){return Ee(rt,B.value,nt)}return ve(Pe),Object.assign(r.proxy,{updatePosition:ee}),Je}});const Dt={key:0,class:"col q-pa-sm q-gutter-y-sm"},Ht=k("p",{class:"text-overline"},"Buy Ticket(s)",-1),Wt={class:"row"},Ft={class:"text-caption text-right text-weight-thin"},jt=A({__name:"RaffleBuyTicket",props:["raffle","is_admin","entrants"],setup(e){const n=p(),i=e;async function o(){var O;await I().update_raffles(),await Z().update_accounts();const{pg_raffle:a,pg_whitelist:l}=z(),r=new _(i.raffle.account.ticketTokenMint.toString()),d=(await U().connection.getParsedTokenAccountsByOwner(P().publicKey.value,{mint:r})).value[0].pubkey,f=new _(i.raffle.publicKey.toString());let[u,c]=_.findProgramAddressSync([x("entrants"),f.toBytes()],a.value.programId),[m,v]=_.findProgramAddressSync([x("proceeds"),f.toBytes()],a.value.programId),[w,S]=_.findProgramAddressSync([ie.toBuffer(),x(_e)],l.value.programId);const[y,B]=_.findProgramAddressSync([P().publicKey.value.toBytes(),w.toBytes()],l.value.programId);try{const R=await a.value.methods.buyTickets(new te(n.value),_e,ie).accounts({raffle:f,entrants:u,proceeds:m,proceedsMint:r,from:d,transferAuth:P().publicKey.value,tokenProgram:K,whitelist:w,entry:y,whitelistProgram:l.value.programId,feeAccount:Ne,systemProgram:be.programId}).rpc();console.log(R),await H(R)&&(await I().send_buy_message_discord(i.raffle.account.name.toString(),`${parseInt(i.entrants.total.toString())+parseInt(n.value.toString())}/${(O=i.entrants)==null?void 0:O.max}`,n.value),await I().update_raffles(),await Z().update_accounts())}catch(R){D.create({color:"red",message:`${R}`,timeout:5e3})}}return(a,l)=>{var r,d,f;return!e.is_admin&&!((r=e.raffle)!=null&&r.account.randomness)&&((d=e.entrants)==null?void 0:d.total)!=((f=e.entrants)==null?void 0:f.max)?(g(),L("div",Dt,[Ht,k("div",Wt,[t(j,{square:"",filled:"",outlined:"",type:"number",class:"col",label:"Amount",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u)},null,8,["modelValue"]),t(E,{square:"",color:"primary",icon:"send",onClick:l[1]||(l[1]=u=>{o().then(()=>{console.log("done sending!")})})})]),k("p",Ft,[h(" 0.001\u25CE fee "),t(Nt,{anchor:"bottom right",self:"top middle"},{default:s(()=>[h(" cover deployment costs ")]),_:1})])])):$("",!0)}}}),Gt=k("source",{src:"Burningticket.mp4",type:"video/mp4"},null,-1),Yt=A({__name:"BurningTicket",setup(e){const n=p();return he(()=>{n.value.playbackRate=.3,console.log(n.value)}),(i,o)=>(g(),L("video",{ref_key:"ticket_burning",ref:n,autoplay:"",playbackspeed:"0.1"},[Gt,h(" Your browser does not support the video tag. ")],512))}}),Jt={class:"row"},Zt=k("div",{class:"text-h6 text-center"},"Drawing...",-1),Xt=A({__name:"RaffleRevealWinner",props:["raffle","is_admin"],setup(e){p();const n=e,i=p(!1);async function o(){const{pg_raffle:a,pg_whitelist:l}=z(),r=new _(n.raffle.publicKey.toString());let[d,f]=_.findProgramAddressSync([x("entrants"),r.toBytes()],a.value.programId);try{const u=await a.value.methods.revealWinners().accounts({raffle:r,entrants:d,recentBlockHashes:dt}).rpc();i.value=!0,console.log(u),await H(u)}catch(u){D.create({color:"red",message:`${u}`,timeout:5e3})}}return(a,l)=>{var r;return g(),L("div",Jt,[e.is_admin&&e.raffle.account.isRunning&&((r=e.raffle.account)==null?void 0:r.randomness)===null?(g(),b(E,{key:0,square:"",class:"row",color:"primary",label:"Reveal Winner",onClick:l[0]||(l[0]=d=>o())})):$("",!0),t(Mt,{maximized:!0,modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=d=>i.value=d)},{default:s(()=>[t(xe,{flat:"",square:"",class:""},{default:s(()=>[t(G,null,{default:s(()=>[Zt]),_:1}),t(G,{class:"q-pt-none row"},{default:s(()=>[t(ce),t(Yt),t(ce)]),_:1}),t(we,{align:"right"},{default:s(()=>[re(t(E,{flat:"",label:"close",color:"primary"},null,512),[[Vt]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}}),ea={class:"absolute-full flex flex-center"},ta=A({__name:"RaffleStateBadge",props:["raffle","entrants"],setup(e){const n=e,i=F(()=>{var o,a;return((o=n.entrants)==null?void 0:o.total)/((a=n.entrants)==null?void 0:a.max)});return(o,a)=>{var l,r;return e.raffle.account.isClaimed?(g(),b(oe,{key:0,color:"cyan",class:"text-caption text-md"},{default:s(()=>[h(" ready-to-close ")]),_:1})):e.raffle.account.isRunning&&e.raffle.account.randomness?(g(),b(oe,{key:1,color:"yellow",class:"text-caption text-md text-black"},{default:s(()=>[h(" claimable ")]),_:1})):e.raffle.account.isRunning&&((l=e.entrants)==null?void 0:l.total)==((r=e.entrants)==null?void 0:r.max)?(g(),b(oe,{key:2,color:"orange",class:"text-caption text-md text-black"},{default:s(()=>[h("waiting for draw")]),_:1})):e.raffle.account.isRunning?(g(),b(_t,{key:3,size:"25px",value:i.value,color:"primary"},{default:s(()=>{var d,f;return[k("div",ea,[t(oe,{color:"black","text-color":"primary",label:`Tickets: ${(d=e.entrants)==null?void 0:d.total}/${(f=e.entrants)==null?void 0:f.max}`},null,8,["label"])])]}),_:1},8,["value"])):$("",!0)}}}),aa=A({__name:"RaffleClaimPrize",props:["raffle","is_admin"],setup(e){const n=e;async function i(){const{pg_raffle:o}=z(),a=new _(n.raffle.account.prizeTokenMint.toString()),l=new _(n.raffle.account.winner.toString()),r=await je(a,l,!0,K,He.ASSOCIATED_PROGRAM_ID);if(await U().connection.getAccountInfo(r)===null){let v=new De;v.add(Ge(P().publicKey.value,r,l,a)),await P().sendTransaction(v,U().connection)}const d=new _(n.raffle.publicKey.toString());let[f,u]=_.findProgramAddressSync([x("entrants"),d.toBytes()],o.value.programId),[c,m]=_.findProgramAddressSync([x("vault"),d.toBytes()],o.value.programId);console.log(n.raffle.account.name);try{const v=await o.value.methods.claimPrize(n.raffle.account.name).accounts({creator:ie,raffle:d,entrants:f,prizeVault:c,prizeMint:a,to:r,tokenProgram:K}).rpc();console.log(v),await H(v)}catch(v){D.create({color:"red",message:`${v}`,timeout:5e3})}}return(o,a)=>e.raffle.account.winner!=T(ft)&&e.is_admin?(g(),b(E,{key:0,color:"primary",label:"Claim Prize",onClick:a[0]||(a[0]=l=>i())})):$("",!0)}}),na=A({__name:"RaffleClose",props:["raffle","is_admin"],setup(e){const n=e;async function i(){const{pg_raffle:o}=z();let[a,l]=_.findProgramAddressSync([x("raffle"),x(n.raffle.account.name)],o.value.programId),[r,d]=_.findProgramAddressSync([x("entrants"),a.toBytes()],o.value.programId),[f,u]=_.findProgramAddressSync([x("proceeds"),a.toBytes()],o.value.programId),[c,m]=_.findProgramAddressSync([x("vault"),a.toBytes()],o.value.programId);try{const v=await o.value.methods.closeRaffle(n.raffle.account.name).accounts({creator:P().publicKey.value,entrants:r,raffle:a,proceeds:f,prizeVault:c,tokenProgram:K}).rpc();console.log(v),await H(v)}catch(v){D.create({color:"red",message:`${v}`,timeout:5e3})}}return(o,a)=>e.is_admin&&(!e.raffle.account.isRunning||e.raffle.account.isClaimed)?(g(),b(E,{key:0,square:"",color:"primary",onClick:a[0]||(a[0]=l=>i())},{default:s(()=>[h("Close Raffle")]),_:1})):$("",!0)}}),la=A({__name:"RaffleCollectProceeds",props:["raffle","is_admin"],setup(e){p(),p();const n=e;async function i(){const{pg_raffle:o}=z(),a=new _(n.raffle.account.ticketTokenMint.toString()),l=await je(a,P().publicKey.value,!0,K,He.ASSOCIATED_PROGRAM_ID);if(await U().connection.getAccountInfo(l)===null){let c=new De;c.add(Ge(P().publicKey.value,l,P().publicKey.value,a)),await P().sendTransaction(c,U().connection)}let[r,d]=_.findProgramAddressSync([x("raffle"),x(n.raffle.account.name)],o.value.programId),[f,u]=_.findProgramAddressSync([x("proceeds"),r.toBytes()],o.value.programId);try{const c=await o.value.methods.collectProceeds(n.raffle.account.name).accounts({creator:P().publicKey.value,raffle:r,proceeds:f,proceedsMint:a,to:l,tokenProgram:K}).rpc();console.log(c),await H(c)}catch(c){D.create({color:"red",message:`${c}`,timeout:5e3})}}return(o,a)=>n.is_admin&&e.raffle.account.isClaimed?(g(),b(E,{key:0,color:"primary",onClick:a[0]||(a[0]=l=>i())},{default:s(()=>[h("Collect Proceeds")]),_:1})):$("",!0)}}),sa=A({__name:"AccountsTable",props:["accounts"],setup(e){const n=p({rowsPerPage:0}),i=p([{name:"mint",required:!0,label:"Mint",align:"left",field:"mint",field:o=>{var a;return((a=V().token_list.find(l=>{var r;return l.address==((r=o.mint)==null?void 0:r.toString())}))==null?void 0:a.name)??""},sortable:!0},{name:"calories",align:"right",label:"Amount",field:o=>o.tokenAmount.uiAmount,sortable:!0}]);return(o,a)=>{var l,r;return g(),b(ke,{dense:"",class:"col",title:"Accounts",rows:(r=(l=e.accounts)==null?void 0:l.value)==null?void 0:r.map(d=>d.account.data.parsed.info),columns:i.value,"row-key":"mint","hide-bottom":"",flat:"",pagination:n.value,"onUpdate:pagination":a[0]||(a[0]=d=>n.value=d),"rows-per-page-options":[0]},null,8,["rows","columns","pagination"])}}}),ze=9,oa=95,ra=45,Oe=5;function ia(e){return e.split("").reduce((n,i)=>(n^i.charCodeAt(0))*-Oe,Oe)>>>2}function ca(e="",n=oa,i=ra,o=ia){const a=o(e),l=a%ze*(360/ze);return[...Array(e?25:0)].reduce((r,d,f)=>a&1<<f%15?r+`<rect x="${f>14?7-~~(f/5):~~(f/5)}" y="${f%5}" width="1" height="1"/>`:r,`<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${l} ${n}% ${i}%)">`)+"</svg>"}const ua=["innerHTML"],da=A({__name:"IconFromSeed",props:{seed:{type:String,default:"default"}},setup(e){const i=p(ca(e.seed));return(o,a)=>(g(),L("div",{innerHTML:i.value},null,8,ua))}}),fa={key:0,class:"q-pa-sm"},ma={class:"row"},pa=A({__name:"RaffleEditImageUrl",props:["raffle","is_admin"],setup(e){p(1);const n=p("");p();const i=e;async function o(){const{pg_raffle:a}=z(),l=new _(i.raffle.publicKey.toString());try{const r=await a.value.methods.editUrl(n.value).accounts({raffle:l,creator:P().publicKey.value}).rpc();console.log(r),await H(r)}catch(r){D.create({color:"red",message:`${r}`,timeout:5e3})}}return(a,l)=>e.is_admin&&e.raffle.account.prizeTokenMint.toString()!="11111111111111111111111111111111"?(g(),L("div",fa,[k("div",ma,[t(j,{square:"",filled:"",class:"col",outlined:"",maxlength:"100",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value=r),type:"text",label:"Image-URL"},null,8,["modelValue"]),t(E,{square:"",icon:"send",color:"primary",onClick:l[1]||(l[1]=r=>o())})])])):$("",!0)}}),ga=A({__name:"TicketsTable",props:["entrants"],setup(e){const n=p({rowsPerPage:0});p();const i=p([{name:"wallet",required:!0,label:"Wallet",align:"left",field:o=>We(o.address),sortable:!0},{name:"amount",align:"right",label:"Amount",field:"amount",sortable:!0}]);return(o,a)=>(g(),b(ke,{dense:"",class:"col",title:"Tickets",rows:e.entrants,columns:i.value,"row-key":"mint","hide-bottom":"",flat:"",pagination:n.value,"onUpdate:pagination":a[0]||(a[0]=l=>n.value=l),"rows-per-page-options":[0]},null,8,["rows","columns","pagination"]))}}),va={};function _a(e,n){return g(),b(mt,{size:"xs"},{default:s(()=>[t(ye,{src:"solscan.png"})]),_:1})}var Le=Qt(va,[["render",_a]]);const ya={class:"row items-center q-ma-md"},wa=k("div",{class:"col q-gutter-y-sm"},[k("div",null,"Raffle account"),k("div",null,"Entrants account")],-1),ba={class:"col q-gutter-y-sm"},ha=A({__name:"RaffleLinks",props:["raffle","entrants"],setup(e){const n=e;return p({rowsPerPage:0}),(i,o)=>(g(),L("div",ya,[wa,k("div",ba,[t(E,{class:"full-width",size:"xs",square:"",color:"primary",href:"https://solscan.io/account/"+n.raffle.publicKey,target:"_blank"},{default:s(()=>[t(Le)]),_:1},8,["href"]),t(E,{class:"full-width",square:"",size:"xs",color:"primary",href:"https://solscan.io/account/"+n.raffle.account.entrants,target:"_blank"},{default:s(()=>[t(Le)]),_:1},8,["href"])])]))}}),ka={class:"text-h5 q-mt-sm q-mb-xs"},xa={class:"text-caption text-grey"},Sa=A({__name:"RaffleCard",props:["raffle","is_admin"],setup(e){const n=e,i=p(),o=p(),a=p(!1);async function l(){const{pg_raffle:c}=z();i.value=await c.value.account.entrants.fetch(n.raffle.account.entrants),o.value=await U().connection.getParsedTokenAccountsByOwner(n.raffle.publicKey,{programId:K})}const r=p();async function d(){const{pg_raffle:c}=z(),m=await c.value.account.entrants.getAccountInfo(n.raffle.account.entrants);let v=[];for(let y=0;y<i.value.total;y++){let B=f(m.data,y);v.push(B)}const S=v.map(y=>y.toString()).reduce((y,B)=>({...y,[B]:(y[B]||0)+1}),{});r.value=Object.entries(S).flatMap(y=>({address:y[0],amount:y[1]}))}function f(c,m){const v=16+32*m,w=v+32,S=c.slice(v,w);return new _(S)}he(async()=>{await l(),await d()});const{_updateCount:u}=pt(I());return ae(u,async()=>{await l()}),(c,m)=>(g(),b(xe,{square:"",flat:""},{default:s(()=>{var v;return[e.raffle.account.url?(g(),b(ye,{key:0,height:"200px",src:e.raffle.account.url},null,8,["src"])):(g(),b(ye,{key:1,height:"200px",src:(v=T(V)().token_list.find(w=>w.address==e.raffle.account.prizeTokenMint))==null?void 0:v.logoURI},null,8,["src"])),t(G,null,{default:s(()=>[t(ta,{raffle:e.raffle,entrants:i.value},null,8,["raffle","entrants"]),k("div",ka,N(e.raffle.account.name),1),k("div",xa,N(e.raffle.account.description),1)]),_:1}),t(G,null,{default:s(()=>[t(Bt,null,{default:s(()=>[t(J,{clickable:""},{default:s(()=>[t(Q,{avatar:""},{default:s(()=>[t(me,{color:"primary",name:"functions"})]),_:1}),t(Q,null,{default:s(()=>[t(M,{class:"text-h6"},{default:s(()=>{var w;return[h(N((w=i.value)==null?void 0:w.max),1)]}),_:1}),t(M,{class:"text-orange-9",caption:""},{default:s(()=>[h("Total tickets")]),_:1})]),_:1})]),_:1}),t(J,{clickable:""},{default:s(()=>[t(Q,{avatar:""},{default:s(()=>[t(me,{color:"red",name:"paid"})]),_:1}),t(Q,null,{default:s(()=>[t(M,{class:"text-h6"},{default:s(()=>[h(N((e.raffle.account.ticketPrice.toNumber()*Math.pow(10,-e.raffle.account.ticketDecimals)).toFixed(2)),1)]),_:1}),t(M,{class:"text-orange-9",caption:""},{default:s(()=>[h("Price per ticket")]),_:1})]),_:1})]),_:1}),t(J,{clickable:""},{default:s(()=>[t(Q,{avatar:""},{default:s(()=>[t(me,{color:"amber",name:"local_movies"})]),_:1}),t(Q,null,{default:s(()=>[t(M,{class:"text-overline"},{default:s(()=>{var w;return[h(N((w=T(V)().token_list.find(S=>S.address==e.raffle.account.ticketTokenMint))==null?void 0:w.symbol),1)]}),_:1}),t(M,{class:"text-orange-9",caption:""},{default:s(()=>[h("Ticket-Mint")]),_:1}),t(M,{class:"q-pt-md text-overline"},{default:s(()=>{var w,S;return[h(N((w=T(V)().token_list.find(y=>y.address==e.raffle.account.prizeTokenMint))==null?void 0:w.name)+" ["+N((S=T(V)().token_list.find(y=>y.address==e.raffle.account.prizeTokenMint))==null?void 0:S.symbol)+"] ",1)]}),_:1}),t(M,{class:"text-orange-9",caption:""},{default:s(()=>[h("Prize-Mint")]),_:1})]),_:1})]),_:1}),e.raffle.account.randomness!=null?(g(),b(J,{key:0,clickable:""},{default:s(()=>[t(Q,{avatar:""},{default:s(()=>{var w,S;return[t(da,{style:{width:"100px"},seed:(S=(w=e.raffle.account)==null?void 0:w.winner)==null?void 0:S.toString()},null,8,["seed"])]}),_:1}),t(Q,null,{default:s(()=>[t(M,{class:"text-h6",l:""},{default:s(()=>[h("Winner")]),_:1}),t(M,{class:"text-orange-9",caption:""},{default:s(()=>[h(N(T(We)(e.raffle.account.winner.toString())),1)]),_:1})]),_:1})]),_:1})):$("",!0)]),_:1})]),_:1}),t(E,{class:"full-width",icon:a.value?"expand_less":" expand_more",onClick:m[0]||(m[0]=w=>a.value=!a.value)},null,8,["icon"]),t(ge,null,{default:s(()=>[re(t(sa,{accounts:o.value},null,8,["accounts"]),[[pe,a.value]])]),_:1}),t(ge,null,{default:s(()=>[re(t(ga,{entrants:r.value},null,8,["entrants"]),[[pe,a.value]])]),_:1}),t(ge,null,{default:s(()=>[re(t(ha,{raffle:e.raffle,entrants:r.value},null,8,["raffle","entrants"]),[[pe,a.value]])]),_:1}),t(Kt,{raffle:e.raffle,is_admin:e.is_admin},null,8,["raffle","is_admin"]),t(pa,{class:"q-mx-sm",raffle:e.raffle,is_admin:e.is_admin},null,8,["raffle","is_admin"]),t(we,{class:"row q-gutter-y-sm justify-center q-mx-sm"},{default:s(()=>[t(Xt,{raffle:e.raffle,is_admin:e.is_admin},null,8,["raffle","is_admin"]),t(aa,{raffle:e.raffle,is_admin:e.is_admin},null,8,["raffle","is_admin"]),t(la,{raffle:e.raffle,is_admin:e.is_admin},null,8,["raffle","is_admin"]),t(na,{raffle:e.raffle,is_admin:e.is_admin},null,8,["raffle","is_admin"])]),_:1}),t(we,null,{default:s(()=>[t(jt,{raffle:e.raffle,is_admin:e.is_admin,entrants:i.value},null,8,["raffle","is_admin","entrants"])]),_:1})]}),_:1}))}}),Ta={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Ue=A({__name:"RaffleGrid",props:{is_admin:{type:Boolean,default:!1},raffles:{type:[],default:[]},count:{type:Number,default:0}},setup(e){const n=e,i=F(()=>se().screen.gt.xs?"example-masonry-table-grid example-masonry-table-grid--"+(se().screen.gt.sm?"3":"2"):null),o=F(()=>se().screen.gt.xs?se().screen.gt.sm?[3,6,9]:[3,6]:[3]),a=p();return(l,r)=>(g(),b(ke,{grid:"","card-container-class":i.value,rows:n.raffles,"row-key":"name",filter:l.filter,"hide-header":"",pagination:a.value,"onUpdate:pagination":r[0]||(r[0]=d=>a.value=d),"rows-per-page-options":o.value},{item:s(d=>[k("div",Ta,[t(Sa,{is_admin:e.is_admin,raffle:d.row},null,8,["is_admin","raffle"])])]),_:1},8,["card-container-class","rows","filter","pagination","rows-per-page-options"]))}}),Pa=k("p",{class:"text-h5"},"Raffle",-1),Aa=k("p",{class:"text-h5"},"Tickets",-1),$a={class:"row justify-center"},Ia=A({__name:"RaffleCreateRaffle",setup(e){const n=p(),i=p(),o=p(),a=p(),l=p();async function r(){var le,q;const{pg_raffle:u,pg_whitelist:c}=z();let[m,v]=_.findProgramAddressSync([x("raffle"),x(n.value)],u.value.programId),[w,S]=_.findProgramAddressSync([x("entrants"),m.toBytes()],u.value.programId),[y,B]=_.findProgramAddressSync([x("proceeds"),m.toBytes()],u.value.programId),[O,R]=_.findProgramAddressSync([ie.toBuffer(),x(_e)],c.value.programId);const ne=await U().connection.getParsedAccountInfo(new _(l.value.value));try{const Y=await u.value.methods.createRaffle(n.value,i.value,new te(a.value*Math.pow(10,(le=ne.value)==null?void 0:le.data.parsed.info.decimals)),new te((q=ne.value)==null?void 0:q.data.parsed.info.decimals),o.value).accounts({raffle:m,entrants:w,creator:P().publicKey.value,proceeds:y,proceedsMint:new _(l.value.value),tokenProgram:K,rent:Ke,whitelist:O,feeAccount:Ne,systemProgram:be.programId}).rpc();console.log(Y),await H(Y)&&await I().send_discord_webhook(gt.RAFFLE_CREATE,n.value,i.value,o.value,a.value)}catch(Y){D.create({color:"red",message:`${Y}`,timeout:5e3})}}const d=p([]);return p(Z().token_accounts.filter(u=>u.account.data.parsed.info.tokenAmount.uiAmount>0).flatMap(u=>u.account.data.parsed.info.mint)).value.forEach(u=>{var c,m;return d.value.push({label:((c=V().token_list.find(v=>v.address==u))==null?void 0:c.name)+" ["+((m=V().token_list.find(v=>v.address==u))==null?void 0:m.symbol)+"]",value:u})}),(u,c)=>(g(),b(xe,{square:"",flat:"",class:"col q-pa-sm"},{default:s(()=>[t(G,{class:"q-gutter-y-md"},{default:s(()=>[Pa,t(j,{filled:"",square:"",modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=m=>n.value=m),type:"text",label:"Name"},null,8,["modelValue"]),t(j,{filled:"",square:"",modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=m=>i.value=m),type:"text",label:"Description"},null,8,["modelValue"])]),_:1}),t(Qe),t(G,{class:"q-gutter-y-md"},{default:s(()=>[Aa,k("div",$a,[t(Fe,{class:"col",filled:"",square:"",modelValue:l.value,"onUpdate:modelValue":c[2]||(c[2]=m=>l.value=m),clearable:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",behavior:"menu",label:"Select Ticket by mint",options:d.value,onFilter:u.filterFn,style:{width:"250px"}},{"no-option":s(()=>[t(J,null,{default:s(()=>[t(Q,{class:"text-grey"},{default:s(()=>[h(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter"])]),t(j,{filled:"",square:"",modelValue:o.value,"onUpdate:modelValue":c[3]||(c[3]=m=>o.value=m),type:"number",label:"Tickets"},null,8,["modelValue"]),t(j,{filled:"",square:"",type:"number",modelValue:a.value,"onUpdate:modelValue":c[4]||(c[4]=m=>a.value=m),label:"Ticket Price"},null,8,["modelValue"])]),_:1}),t(Qe),t(G,null,{default:s(()=>[t(E,{class:"row",color:"primary",onClick:c[5]||(c[5]=m=>r())},{default:s(()=>[h("Create")]),_:1})]),_:1})]),_:1}))}}),Ca={class:"row shadow-2"},Ra={key:0,class:"row"},Ea={key:1,class:"q-mx-md"},Ja=A({__name:"RafflePage",setup(e){const n=p("raffle");he(async()=>{await Z().update_accounts(),I().raffles.length||await I().update_raffles()}),ve(()=>{clearInterval(i.value)}),ae(()=>P().publicKey.value,async()=>{await Z().update_accounts(),await I().update_raffles()});const i=p();async function o(){await I().update_raffles(),console.log("Raffles updated!")}function a(l){i.value=setInterval(async()=>{await o()},l)}return a(6e4),ae(()=>n.value,()=>{n.value=="raffle"?a(6e4):clearInterval(i.value)}),(l,r)=>T(P)().publicKey.value?(g(),b(Ie,{key:1,class:"col"},{default:s(()=>[k("div",Ca,[t(st,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=d=>n.value=d),"no-caps":"","outside-arrows":"","mobile-arrows":"",class:"col"},{default:s(()=>[t(fe,{name:"raffle",label:"Raffle"}),T(V)().is_admin?(g(),b(fe,{key:0,name:"create",label:"Create"})):$("",!0),T(V)().is_admin?(g(),b(fe,{key:1,name:"manage",label:"Manage"})):$("",!0)]),_:1},8,["modelValue"]),t(E,{flat:"",icon:"refresh",onClick:r[1]||(r[1]=d=>T(I)().update_raffles().then(()=>{}))})]),T(I)().is_loading?(g(),L("div",Ra,[t(ce),t(yt,{class:"row",color:"primary",size:"10rem"}),t(ce)])):$("",!0),T(I)().raffles&&!T(I)().is_loading?(g(),L("div",Ea,[n.value==="raffle"?(g(),b(Ue,{key:0,raffles:T(I)().get_running_raffles,is_admin:!1},null,8,["raffles"])):$("",!0),n.value==="create"?(g(),b(Ia,{key:1})):$("",!0),n.value==="manage"?(g(),b(Ue,{key:2,raffles:T(I)().raffles,is_admin:T(V)().is_admin},null,8,["raffles","is_admin"])):$("",!0)])):$("",!0)]),_:1})):(g(),b(Ie,{key:0,class:"row items-center justify-center bg-image"},{default:s(()=>[t(T(vt),{dark:""})]),_:1}))}});export{Ja as default};
