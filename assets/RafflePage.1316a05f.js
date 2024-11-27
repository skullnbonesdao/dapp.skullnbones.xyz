import{a as ce,Q as lt}from"./QTabs.8c8870da.js";import{aF as S,bZ as pe,dr as ot,ds as rt,cN as it,dl as Q,au as x,J as v,b1 as d,ak as D,al as y,as as a,ck as O,da as W,P as w,cn as U,cq as L,d0 as ge,dd as H,ah as z,bs as ae,aT as xe,cc as Se,c7 as Te,bC as ct,aC as Ve,b_ as Me,cd as ut,dt as ft,dh as F,a1 as I,V as P,d9 as de,ar as $,bx as i,aX as se,bz as dt,a6 as ze,du as mt,ai as k,dv as pt,d6 as gt,di as ve,b9 as vt,aj as b,dw as yt,cm as X,db as ue}from"./index.ff53e052.js";import{Q as ne}from"./QSpace.4b5dbe05.js";import{Q as kt}from"./QPage.dd781e33.js";import{Q as ht,a as ye,f as me,b as _t,c as wt}from"./calcAmountToTransfer.4b16a8e7.js";import{Q as Ee}from"./QImg.726162f8.js";import{Q as G,a as q}from"./QInput.8440fc74.js";import{Q as N}from"./QSeparator.5ca0131b.js";import{B as bt,u as xt,n as St,C as Ae,D as Tt,e as At,o as $t,f as Pt,p as Ct,E as Rt,F as qt,h as Qt,q as Ot,G as $e,H as It,c as Pe,g as Vt,I as Ce,J as Mt,j as Z,k as j,l as M}from"./rtl.a4bde386.js";import{Q as zt}from"./QList.1a2d48c4.js";import{Q as ee,u as Et,a as Bt}from"./QCard.03f45a42.js";import{Q as Be}from"./QCardActions.1616f400.js";import{g as A,h as E}from"./handleTransaction.85b6192c.js";import{_ as je}from"./TokenSelectDropdown.b9b23e27.js";import"./SquadsStore.6944ab1b.js";import{c as jt,Q as Dt}from"./QSelect.5093af3f.js";import{C as Lt}from"./ClosePopup.a4203b12.js";import{Q as Re}from"./QBadge.b1a22269.js";import{t as De}from"./token.f5a96346.js";import{g as Le}from"./extensionType.7ac88d96.js";import{c as Ne}from"./associatedTokenAccount.66d8de9b.js";import{_ as Nt}from"./plugin-vue_export-helper.21dcd24c.js";import"./QSlideTransition.fec84dcc.js";import"./use-checkbox.d208c079.js";import"./pda.6957f17c.js";import"./cusper.71c9b2d0.js";import"./errors.ad7d4316.js";const Ut=[S("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none"}),S("g",{transform:"translate(25 25)"},[S("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.9"},[S("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),S("g",{transform:"translate(75 25)"},[S("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.8"},[S("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.1s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),S("g",{transform:"translate(25 75)"},[S("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.7"},[S("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.3s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),S("g",{transform:"translate(75 75)"},[S("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.6"},[S("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.2s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])])];var Wt=pe({name:"QSpinnerCube",props:ot,setup(e){const{cSize:t,classes:r}=rt(e);return()=>S("svg",{class:r.value,width:t.value,height:t.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},Ut)}});const C=it("raffleStore",{state:()=>({raffles:[]}),getters:{getRunningRaffles(e){return e.raffles.filter(t=>Object.keys(t.account.state)[0]=="running"||Object.keys(t.account.state)[0]=="full"||Object.keys(t.account.state)[0]=="claimprize")}},actions:{async updateStore(){if(Q())try{const e=Q().pg_raffle.value;this.raffles=await(e==null?void 0:e.account.raffle.all()),console.log("[Updated] RaffleStore")}catch(e){console.error(e)}}}}),Ht={class:"col q-pa-sm"},Kt=y("p",{class:"text-overline"},"Add a prize:",-1),Ft={class:"col q-gutter-y-sm"},Gt={class:"row"},Yt=x({__name:"RafflePrepare",props:["raffle"],setup(e){const t=v(1),r=v(""),o=v(""),n=e;v([]);async function s(){var l,c,f,h;try{const p=new W,g=(l=Q())==null?void 0:l.pg_raffle.value,u=new w(o.value.mint),m=(await U().connection.getParsedTokenAccountsByOwner(A(),{mint:u})).value[0].pubkey,T=new w(n.raffle.publicKey.toString()),_=await U().connection.getParsedAccountInfo(u);console.log((c=_.value)==null?void 0:c.data.parsed.info.decimals),r.value=((f=L().token_list.find(V=>V.address==u))==null?void 0:f.logoURI)??"",p.add(await(g==null?void 0:g.methods.prepare(new ge(t.value*Math.pow(10,(h=_.value)==null?void 0:h.data.parsed.info.decimals)),r.value).accountsPartial({creator:A(),raffle:T,from:m,prizeMint:u}).instruction())),await E(p,"[Raffle] prepare"),await C().updateStore()}catch(p){H.create({color:"red",message:`${p}`,timeout:5e3})}}return(l,c)=>(d(),D("div",Ht,[Kt,y("div",Ft,[a(je,{label:"","textbox-label":"Select prize",onToken_account_selected:c[0]||(c[0]=f=>o.value=f)}),y("div",Gt,[a(G,{class:"col",filled:"",square:"",modelValue:t.value,"onUpdate:modelValue":c[1]||(c[1]=f=>t.value=f),type:"number",label:"Count"},null,8,["modelValue"]),a(O,{filled:"",square:"",class:"col-2",color:"primary",icon:"send",onClick:c[2]||(c[2]=f=>s())})])])]))}});var Jt=pe({name:"QTooltip",inheritAttrs:!1,props:{...bt,...xt,...St,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Ae},self:{type:String,default:"top middle",validator:Ae},offset:{type:Array,default:()=>[14,14],validator:Tt},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...At],setup(e,{slots:t,emit:r,attrs:o}){let n,s;const l=Ve(),{proxy:{$q:c}}=l,f=v(null),h=v(!1),p=z(()=>Ce(e.anchor,c.lang.rtl)),g=z(()=>Ce(e.self,c.lang.rtl)),u=z(()=>e.persistent!==!0),{registerTick:m,removeTick:T}=$t(),{registerTimeout:_}=Pt(),{transitionProps:V,transitionStyle:oe}=Ct(e),{localScrollTarget:te,changeScrollEvent:Ke,unconfigureScrollTarget:Fe}=Rt(e,we),{anchorEl:B,canShow:Ge,anchorEvents:Y}=qt({showing:h,configureAnchorEl:at}),{show:Ye,hide:re}=Qt({showing:h,canShow:Ge,handleShow:Ze,handleHide:Xe,hideOnRouteChange:u,processOnMount:!0});Object.assign(Y,{delayShow:et,delayHide:tt});const{showPortal:ke,hidePortal:he,renderPortal:Je}=Ot(l,f,st,"tooltip");if(c.platform.is.mobile===!0){const R={anchorEl:B,innerRef:f,onClickOutside(K){return re(K),K.target.classList.contains("q-dialog__backdrop")&&ut(K),!0}},ie=z(()=>e.modelValue===null&&e.persistent!==!0&&h.value===!0);ae(ie,K=>{(K===!0?Mt:$e)(R)}),xe(()=>{$e(R)})}function Ze(R){ke(),m(()=>{s=new MutationObserver(()=>J()),s.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),J(),we()}),n===void 0&&(n=ae(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,J)),_(()=>{ke(!0),r("show",R)},e.transitionDuration)}function Xe(R){T(),he(),_e(),_(()=>{he(!0),r("hide",R)},e.transitionDuration)}function _e(){s!==void 0&&(s.disconnect(),s=void 0),n!==void 0&&(n(),n=void 0),Fe(),Se(Y,"tooltipTemp")}function J(){It({targetEl:f.value,offset:e.offset,anchorEl:B.value,anchorOrigin:p.value,selfOrigin:g.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function et(R){if(c.platform.is.mobile===!0){Pe(),document.body.classList.add("non-selectable");const ie=B.value,K=["touchmove","touchcancel","touchend","click"].map(be=>[ie,be,"delayHide","passiveCapture"]);Te(Y,"tooltipTemp",K)}_(()=>{Ye(R)},e.delay)}function tt(R){c.platform.is.mobile===!0&&(Se(Y,"tooltipTemp"),Pe(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),_(()=>{re(R)},e.hideDelay)}function at(){if(e.noParentEvent===!0||B.value===null)return;const R=c.platform.is.mobile===!0?[[B.value,"touchstart","delayShow","passive"]]:[[B.value,"mouseenter","delayShow","passive"],[B.value,"mouseleave","delayHide","passive"]];Te(Y,"anchor",R)}function we(){if(B.value!==null||e.scrollTarget!==void 0){te.value=Vt(B.value,e.scrollTarget);const R=e.noParentEvent===!0?J:re;Ke(te.value,R)}}function nt(){return h.value===!0?S("div",{...o,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",o.class],style:[o.style,oe.value],role:"tooltip"},Me(t.default)):null}function st(){return S(ct,V.value,nt)}return xe(_e),Object.assign(l.proxy,{updatePosition:J}),Je}});const Zt=new w(ft.address),Xt=new w("adm1rpWxyo8u9y2Q2wxxfqaVDLE2gD1N9PbZbbhokTP"),ea="Crew";function Ue(){return w.findProgramAddressSync([Xt.toBuffer(),F(ea)],Zt)[0]}const ta={class:"col q-pa-sm q-gutter-y-sm"},aa=y("p",{class:"text-overline"},"Buy Ticket(s)",-1),na={class:"row"},sa={class:"row"},la={class:"col row q-gutter-x-xs text-weight-light"},oa=y("p",null,"Available:",-1),ra={class:"text-caption text-right text-weight-thin"},ia=x({__name:"RaffleBuyTicket",props:["raffle","tickets"],setup(e){const t=v(),r=e;async function o(){var g,u,m;const n=new W,s=(g=Q())==null?void 0:g.pg_raffle.value,l=(u=Q())==null?void 0:u.pg_whitelist.value,c=new w(r.raffle.account.ticketMint.toString()),f=(await U().connection.getParsedTokenAccountsByOwner(A(),{mint:c})).value[0].pubkey,h=new w(r.raffle.publicKey.toString());let p=Ue();try{n.add(await(s==null?void 0:s.methods.buyTickets(new ge(t.value)).accountsPartial({signer:A(),raffle:h,entrant:A(),ticketsMint:c,from:f,whitelist:p,whitelistEntry:w.findProgramAddressSync([(m=A())==null?void 0:m.toBytes(),p.toBytes()],l==null?void 0:l.programId)[0],whitelistProgram:l==null?void 0:l.programId}).instruction())),await E(n,"[Raffle] buy ticket"),await C().updateStore()}catch(T){H.create({color:"danger",message:`${T}`,timeout:5e3})}}return(n,s)=>{var l,c,f,h;return d(),D("div",ta,[aa,y("div",na,[a(G,{square:"",filled:"",outlined:"",type:"number",class:"col",label:"Amount",modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=p=>t.value=p)},null,8,["modelValue"]),a(O,{square:"",disable:!t.value,color:"primary",icon:"send",onClick:s[1]||(s[1]=p=>o())},null,8,["disable"])]),y("div",sa,[y("div",la,[oa,y("p",null,I((c=(l=P(de)().accounts)==null?void 0:l.find(p=>p.mint==e.raffle.account.ticketMint.toString()))==null?void 0:c.uiAmount),1),y("p",null,I((h=(f=P(de)().accounts)==null?void 0:f.find(p=>p.mint==e.raffle.account.ticketMint.toString()))==null?void 0:h.info.symbol),1)]),y("p",ra,[$(" 0.001\u25CE fee "),a(Jt,{anchor:"bottom right",self:"top middle"},{default:i(()=>[$(" cover deployment costs ")]),_:1})])])])}}}),ca=y("source",{src:"Burningticket.mp4",type:"video/mp4"},null,-1),ua=x({__name:"BurningTicket",setup(e){const t=v();return se(()=>{t.value.playbackRate=.3,console.log(t.value)}),(r,o)=>(d(),D("video",{ref_key:"ticket_burning",ref:t,autoplay:"",playbackspeed:"0.1"},[ca,$(" Your browser does not support the video tag. ")],512))}}),fa=y("div",{class:"text-h6 text-center"},"Drawing...",-1),da=x({__name:"RaffleRevealWinner",props:["raffle","is_admin"],setup(e){v();const t=e,r=v(!1);ae(()=>r.value,()=>{r.value==!1&&C().updateStore()});async function o(){var n;try{const s=new W,l=(n=Q())==null?void 0:n.pg_raffle.value,c=new w(t.raffle.publicKey.toString());let[f,h]=w.findProgramAddressSync([F("tickets"),c.toBytes()],l==null?void 0:l.programId);s.add(await(l==null?void 0:l.methods.revealWinners().accounts({raffle:c,tickets:f,recentBlockHashes:mt}).instruction())),await E(s,"[Raffle] reveal winner"),r.value=!0}catch(s){H.create({color:"red",message:`${s}`,timeout:5e3})}}return(n,s)=>(d(),D(ze,null,[a(O,{square:"",class:"row",color:"primary",icon:"send",label:"Reveal Winner",onClick:s[0]||(s[0]=l=>o())}),a(jt,{maximized:!0,modelValue:r.value,"onUpdate:modelValue":s[2]||(s[2]=l=>r.value=l)},{default:i(()=>[a(ee,{flat:"",square:"",class:""},{default:i(()=>[a(q,null,{default:i(()=>[fa]),_:1}),a(q,{class:"q-pt-none row"},{default:i(()=>[a(ne),a(ua),a(ne)]),_:1}),a(Be,{align:"right"},{default:i(()=>[dt(a(O,{flat:"",label:"close",color:"primary",onClick:s[1]||(s[1]=l=>P(C)().update_raffles())},null,512),[[Lt]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),ma={class:"absolute-full flex flex-center"};var We=(e=>(e.created="orange",e.ready="orange",e.paused="pink",e.full="purple",e.claimprize="purple",e.claimtickets="purple",e.running="primary",e))(We||{});const pa=x({__name:"RaffleStateBadge",props:["raffle","tickets"],setup(e){const t=e,r=z(()=>{var o,n;return((o=t.tickets)==null?void 0:o.sold)/((n=t.tickets)==null?void 0:n.total)});return(o,n)=>Object.keys(e.raffle.account.state)[0]=="running"?(d(),k(ht,{key:0,size:"25px",value:r.value,color:"primary"},{default:i(()=>{var s,l;return[y("div",ma,[a(Re,{color:"black","text-color":"primary",label:`Tickets: ${(s=e.tickets)==null?void 0:s.sold}/${(l=e.tickets)==null?void 0:l.total}`},null,8,["label"])])]}),_:1},8,["value"])):(d(),k(Re,{key:1,color:We[Object.keys(e.raffle.account.state)[0]],class:"text-h6 justify-center full-width"},{default:i(()=>[$(I(Object.keys(e.raffle.account.state)[0].toUpperCase()),1)]),_:1},8,["color"]))}}),le=new w(pt.address);function ga(e,t){return w.findProgramAddressSync([F("raffle"),F(e),t.toArrayLike(gt.Buffer).reverse()],le)[0]}function va(e){return w.findProgramAddressSync([F("tickets"),e.toBytes()],le)[0]}function He(e){return w.findProgramAddressSync([F("vaultPrize"),e.toBytes()],le)[0]}function ya(e){return w.findProgramAddressSync([F("vaultTickets"),e.toBytes()],le)[0]}const ka=x({__name:"RaffleClaimPrize",props:["raffle","is_admin"],setup(e){const t=e;async function r(){var o;try{let n=new W;const s=(o=Q())==null?void 0:o.pg_raffle.value,l=new w(t.raffle.account.prizeMint.toString()),c=new w(t.raffle.account.winner.toString()),f=await Le(l,c,!0,ve,De.ASSOCIATED_PROGRAM_ID);await U().connection.getAccountInfo(f)===null&&n.add(Ne(A(),f,c,l));const h=new w(t.raffle.publicKey.toString()),p=He(h);n.add(await(s==null?void 0:s.methods.claimPrize().accountsPartial({raffle:h,prizeMint:l,prizeVault:p,to:f}).instruction())),await E(n,"[Raffle] Claim Prize"),await C().updateStore()}catch(n){H.create({color:"red",message:`${n}`,timeout:5e3,position:"bottom-right"})}}return(o,n)=>(d(),k(O,{color:"primary",icon:"send",label:"Claim Prize",onClick:n[0]||(n[0]=s=>r())}))}});async function ha(e){try{return!!await U().connection.getAccountInfo(e)}catch(t){return console.error("Error checking account:",t),!1}}const _a=x({__name:"RaffleClose",props:["raffle"],setup(e){const t=e;async function r(){var o;try{const n=new W,s=(o=Q())==null?void 0:o.pg_raffle.value;let l=t.raffle.publicKey;const c=va(l),f=ya(l);let h=He(l);await ha(h)||(h=null),n.add(await(s==null?void 0:s.methods.close().accountsPartial({creator:A(),raffle:l,tickets:c,ticketsVault:f,prizeVault:h}).instruction())),await E(n,"[Raffle] close"),await C().updateStore()}catch(n){H.create({color:"red",message:`${n}`,timeout:5e3})}}return(o,n)=>(d(),k(O,{square:"",color:"primary",icon:"send",label:"Close Raffle",onClick:n[0]||(n[0]=s=>r())}))}}),wa=x({__name:"RaffleClaimTickets",props:["raffle","is_admin"],setup(e){const t=e;async function r(){var o;try{const n=new W,s=(o=Q())==null?void 0:o.pg_raffle.value,l=new w(t.raffle.account.ticketMint.toString()),c=await Le(l,A(),!0,ve,De.ASSOCIATED_PROGRAM_ID);await U().connection.getAccountInfo(c)===null&&n.add(Ne(A(),c,A(),l)),n.add(await(s==null?void 0:s.methods.claimTickets().accountsPartial({creator:A(),raffle:t.raffle.publicKey,ticketsMint:l,to:c}).instruction())),await E(n,"[Raffle Claim Tickets]"),await C().updateStore()}catch(n){H.create({color:"red",message:`${n}`,timeout:5e3,position:"bottom-right"})}}return(o,n)=>(d(),k(O,{color:"primary",icon:"send",label:"Claim Tickets",onClick:n[0]||(n[0]=s=>r())}))}}),ba=x({__name:"AccountsTable",props:["accounts"],setup(e){const t=v({rowsPerPage:0}),r=v([{name:"mint",required:!0,label:"Mint",align:"left",field:"mint",field:o=>{var n,s;return((n=L().token_list.find(l=>{var c;return l.address==((c=o.mint)==null?void 0:c.toString())}))==null?void 0:n.name)??((s=o.mint)==null?void 0:s.toString())},sortable:!0},{name:"calories",align:"right",label:"Amount",field:o=>o.tokenAmount.uiAmount,sortable:!0}]);return(o,n)=>{var s,l;return d(),k(ye,{square:"",dense:"",class:"col",title:"Accounts",rows:(l=(s=e.accounts)==null?void 0:s.value)==null?void 0:l.map(c=>c.account.data.parsed.info),columns:r.value,"row-key":"mint","hide-bottom":"",flat:"",pagination:t.value,"onUpdate:pagination":n[0]||(n[0]=c=>t.value=c),"rows-per-page-options":[0]},null,8,["rows","columns","pagination"])}}}),qe=9,xa=95,Sa=45,Qe=5;function Ta(e){return e.split("").reduce((t,r)=>(t^r.charCodeAt(0))*-Qe,Qe)>>>2}function Aa(e="",t=xa,r=Sa,o=Ta){const n=o(e),s=n%qe*(360/qe);return[...Array(e?25:0)].reduce((l,c,f)=>n&1<<f%15?l+`<rect x="${f>14?7-~~(f/5):~~(f/5)}" y="${f%5}" width="1" height="1"/>`:l,`<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${s} ${t}% ${r}%)">`)+"</svg>"}const $a=["innerHTML"],Pa=x({__name:"IconFromSeed",props:{seed:{type:String,default:"default"}},setup(e){const r=v(Aa(e.seed));return(o,n)=>(d(),D("div",{innerHTML:r.value},null,8,$a))}}),Ca=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],Ra=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var qa=pe({name:"QSkeleton",props:{...Et,tag:{type:String,default:"div"},type:{type:String,validator:e=>Ca.includes(e),default:"rect"},animation:{type:String,validator:e=>Ra.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:t}){const r=Ve(),o=Bt(e,r.proxy.$q),n=z(()=>{const l=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:l[0],height:l[1]}}),s=z(()=>`q-skeleton q-skeleton--${o.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>S(e.tag,{class:s.value,style:n.value},Me(t.default))}});const Qa=x({__name:"Apex_TicketsChart",props:["data_value","data_label"],setup(e){const t=e,r=z(()=>t.data_value?t.data_value:[44,55,41,17,15]),o=z(()=>t.data_label?{legend:{labels:{colors:"white"},position:"left"},theme:{palette:"palette3"},labels:t.data_label}:{labels:["Apple","Mango","Orange","Watermelon"]});return(n,s)=>{const l=vt("apexchart");return e.data_value&&e.data_label?(d(),k(l,{key:0,height:"200px",type:"donut",options:o.value,series:r.value},null,8,["options","series"])):b("",!0)}}}),Oa=x({__name:"TicketsTable",props:["entrants"],setup(e){const t=e,r=v({rowsPerPage:0});v();const o=v([{name:"wallet",required:!0,label:"Wallet",align:"left",field:f=>me(f.address),sortable:!0},{name:"amount",align:"right",label:"Amount",field:"amount",sortable:!0}]),n=v(),s=v(),l=v(!0);se(async()=>{await c()}),ae(()=>t.entrants,async()=>{await c()});async function c(){var h,p;n.value=(h=t.entrants)==null?void 0:h.map(g=>g.amount);const f=(p=t.entrants)==null?void 0:p.flatMap(g=>me(g.address));s.value=f,l.value=!1}return(f,h)=>(d(),D(ze,null,[a(ye,{square:"",dense:"",class:"col",title:"Tickets",rows:e.entrants,columns:o.value,"row-key":"mint","hide-bottom":"",flat:"",pagination:r.value,"onUpdate:pagination":h[0]||(h[0]=p=>r.value=p),"rows-per-page-options":[0]},null,8,["rows","columns","pagination"]),l.value?(d(),k(qa,{key:0,type:"QInput"})):b("",!0),a(Qa,{data_value:n.value,data_label:s.value},null,8,["data_value","data_label"])],64))}}),Ia={};function Va(e,t){return d(),k(yt,{size:"xs"},{default:i(()=>[a(Ee,{src:"solscan.png"})]),_:1})}var Oe=Nt(Ia,[["render",Va]]);const Ma=y("div",{class:"col q-gutter-y-sm"},[y("div",null,"Raffle account"),y("div",null,"Entrants account"),y("div",null,"Use Whitelist?")],-1),za={class:"col q-gutter-y-sm"},Ea=x({__name:"RaffleLinks",props:["raffle","entrants"],setup(e){const t=e;return v({rowsPerPage:0}),(r,o)=>(d(),k(ee,{flat:"",square:"",class:"row items-center q-pa-md"},{default:i(()=>[Ma,y("div",za,[a(O,{class:"full-width",size:"xs",square:"",color:"primary",href:"https://solscan.io/account/"+t.raffle.publicKey,target:"_blank"},{default:i(()=>[a(Oe)]),_:1},8,["href"]),a(O,{class:"full-width",square:"",size:"xs",color:"primary",href:"https://solscan.io/account/"+t.raffle.account.entrants,target:"_blank"},{default:i(()=>[a(Oe)]),_:1},8,["href"]),e.raffle.account.useWhitelist?(d(),k(X,{key:0,name:"check"})):(d(),k(X,{key:1,name:"clear"}))])]),_:1}))}}),Ba=x({__name:"RaffleToggleMode",props:["raffle"],setup(e){const t=e;async function r(){var o;try{const n=new W,s=(o=Q())==null?void 0:o.pg_raffle.value;let l=await(s==null?void 0:s.account.raffle.fetch(t.raffle.publicKey));console.log(l),console.log(Object.keys(l.state)[0]);let c;switch(Object.keys(l.state)[0]){case"ready":n.add(await(s==null?void 0:s.methods.enable().accountsPartial({creator:A(),raffle:t.raffle.publicKey}).instruction())),await E(n,"[Raffle] enable");break;case"paused":n.add(await(s==null?void 0:s.methods.enable().accountsPartial({creator:A(),raffle:t.raffle.publicKey}).instruction())),await E(n,"[Raffle] enable");break;case"running":n.add(await(s==null?void 0:s.methods.disable().accountsPartial({creator:A(),raffle:t.raffle.publicKey}).instruction())),await E(n,"[Raffle] disable");break}await C().updateStore()}catch(n){H.create({color:"red",message:`${n}`,timeout:5e3})}}return(o,n)=>(d(),k(O,{icon:"send",label:"Start/Pause",square:"",color:"primary",onClick:n[0]||(n[0]=s=>r())}))}});async function fe(e,t=3,r=1e3){let o=0;for(;o<t;)try{return await e()}catch(n){if(o++,o>=t)throw new Error(`Function ${e.name} failed after ${o} attempts: ${n}`);console.log(`Retry ${e.name}() | ${o}/${t} failed. Retrying in ${r}ms...`),await new Promise(s=>setTimeout(s,r))}throw new Error("This line should never be reached.")}const ja={class:"text-h5 q-mt-sm q-mb-xs"},Da={class:"text-caption text-grey"},La=y("p",{class:"text-overline"},"Actions",-1),Na={class:"col row justify-end q-mx-sm"},Ua=x({__name:"RaffleCard",props:["raffle","is_admin"],setup(e){const t=e,r=v(),o=v(),n=v();async function s(){const{pg_raffle:p}=Q();r.value=await p.value.account.tickets.fetch(t.raffle.account.tickets),console.log(r.value)}async function l(){o.value=await U().connection.getParsedTokenAccountsByOwner(t.raffle.publicKey,{programId:ve})}async function c(){const{pg_raffle:p}=Q(),g=await p.value.account.tickets.getAccountInfo(t.raffle.account.tickets);let u=[];for(let _=0;_<r.value.total;_++){let V=f(g.data,_);u.push(V)}const T=u.map(_=>_.toString()).reduce((_,V)=>({..._,[V]:(_[V]||0)+1}),{});n.value=Object.entries(T).flatMap(_=>({address:_[0],amount:_[1]}))}function f(p,g){const u=16+32*g,m=u+32,T=p.slice(u,m);return new w(T)}se(async()=>{await fe(s),await fe(l),await fe(c)});function h(){var p;return t.raffle.account.url?t.raffle.account.url:(console.log(L().token_list.find(g=>g.address===t.raffle.account.prizeMint.toString())),((p=L().token_list.find(g=>g.address===t.raffle.account.prizeMint.toString()))==null?void 0:p.logoURI)??"snb_icon.svg")}return(p,g)=>(d(),k(ee,{square:"",flat:""},{default:i(()=>[a(Ee,{height:"200px",src:h()},null,8,["src"]),a(q,null,{default:i(()=>[a(pa,{raffle:e.raffle,tickets:r.value},null,8,["raffle","tickets"]),y("div",ja,I(e.raffle.account.name),1),y("div",Da,I(e.raffle.account.description),1)]),_:1}),a(N),a(q,null,{default:i(()=>[a(zt,null,{default:i(()=>[a(Z,{clickable:""},{default:i(()=>[a(j,{avatar:""},{default:i(()=>[a(X,{color:"primary",name:"functions"})]),_:1}),a(j,null,{default:i(()=>[a(M,{class:"text-h6"},{default:i(()=>{var u;return[$(I((u=r.value)==null?void 0:u.total)+" Tickets",1)]}),_:1}),a(M,{class:"text-accent",caption:""},{default:i(()=>[$("Total tickets")]),_:1})]),_:1})]),_:1}),a(Z,{clickable:""},{default:i(()=>[a(j,{avatar:""},{default:i(()=>[a(X,{color:"red",name:"paid"})]),_:1}),a(j,null,{default:i(()=>[a(M,{class:"text-h6"},{default:i(()=>{var u;return[$(I((e.raffle.account.ticketPrice.toNumber()*Math.pow(10,-e.raffle.account.ticketDecimals)).toFixed(2))+" "+I((u=P(ue)().tokenList.find(m=>m.address==e.raffle.account.ticketMint.toString()))==null?void 0:u.symbol),1)]}),_:1}),a(M,{class:"text-accent",caption:""},{default:i(()=>[$("Price per ticket")]),_:1})]),_:1})]),_:1}),a(Z,{clickable:""},{default:i(()=>[a(j,{avatar:""},{default:i(()=>[a(X,{color:"amber",name:"local_movies"})]),_:1}),a(j,{class:"q-gutter-y-md"},{default:i(()=>[y("div",null,[a(M,{class:"q-pt-md text-overline"},{default:i(()=>{var u;return[$(I(((u=P(ue)().tokenList.find(m=>m.address==e.raffle.account.prizeMint.toString()))==null?void 0:u.name)??e.raffle.account.ticketMint.toString()),1)]}),_:1}),a(M,{class:"text-accent",caption:""},{default:i(()=>[$("Prize-Mint")]),_:1})]),y("div",null,[a(M,{class:"text-overline"},{default:i(()=>{var u;return[$(I(((u=P(ue)().tokenList.find(m=>m.address==e.raffle.account.ticketMint.toString()))==null?void 0:u.name)??e.raffle.account.ticketMint.toString()),1)]}),_:1}),a(M,{class:"text-accent",caption:""},{default:i(()=>[$("Ticket-Mint")]),_:1})])]),_:1})]),_:1}),e.raffle.account.randomness!=null?(d(),k(Z,{key:0,clickable:""},{default:i(()=>[a(j,{avatar:""},{default:i(()=>{var u,m;return[a(Pa,{style:{width:"100px"},seed:(m=(u=e.raffle.account)==null?void 0:u.winner)==null?void 0:m.toString()},null,8,["seed"])]}),_:1}),a(j,null,{default:i(()=>[a(M,{class:"text-h6",l:""},{default:i(()=>[$("Winner")]),_:1}),a(M,{class:"text-orange-9",caption:""},{default:i(()=>{var u;return[$(I(P(me)((u=e.raffle.account.winner)==null?void 0:u.toString())),1)]}),_:1})]),_:1})]),_:1})):b("",!0)]),_:1})]),_:1}),a(N),a(_t,{icon:"info",label:"Details"},{default:i(()=>[a(ee,{flat:""},{default:i(()=>[a(N),a(q,null,{default:i(()=>[a(ba,{accounts:o.value},null,8,["accounts"])]),_:1}),a(N),a(q,null,{default:i(()=>[a(Oa,{entrants:n.value},null,8,["entrants"])]),_:1}),a(N),a(q,null,{default:i(()=>[a(Ea,{raffle:e.raffle,entrants:n.value,class:"q-pb-md"},null,8,["raffle","entrants"])]),_:1})]),_:1})]),_:1}),a(N),e.is_admin?(d(),k(q,{key:0},{default:i(()=>[Object.keys(e.raffle.account.state)[0]=="created"?(d(),k(Yt,{key:0,raffle:e.raffle},null,8,["raffle"])):b("",!0)]),_:1})):b("",!0),Object.keys(e.raffle.account.state)[0]=="running"&&!e.is_admin?(d(),k(Be,{key:1},{default:i(()=>[a(ia,{raffle:e.raffle,tickets:r.value},null,8,["raffle","tickets"])]),_:1})):b("",!0),e.is_admin?(d(),k(q,{key:2,class:"col"},{default:i(()=>[La,y("div",Na,[Object.keys(e.raffle.account.state)[0]=="full"?(d(),k(da,{key:0,raffle:e.raffle},null,8,["raffle"])):b("",!0),Object.keys(e.raffle.account.state)[0]=="claimprize"||Object.keys(e.raffle.account.state)[0]=="ready"?(d(),k(ka,{key:1,raffle:e.raffle},null,8,["raffle"])):b("",!0),Object.keys(e.raffle.account.state)[0]=="claimtickets"?(d(),k(wa,{key:2,raffle:e.raffle},null,8,["raffle"])):b("",!0),Object.keys(e.raffle.account.state)[0]=="ready"||Object.keys(e.raffle.account.state)[0]=="running"||Object.keys(e.raffle.account.state)[0]=="paused"?(d(),k(Ba,{key:3,raffle:e.raffle},null,8,["raffle"])):b("",!0),Object.keys(e.raffle.account.state)[0]=="created"||Object.keys(e.raffle.account.state)[0]=="done"?(d(),k(_a,{key:4,raffle:e.raffle},null,8,["raffle"])):b("",!0)])]),_:1})):b("",!0)]),_:1}))}}),Wa={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Ie=x({__name:"RaffleGrid",props:{is_admin:{type:Boolean,default:!1},raffles:{type:[],default:[]},count:{type:Number,default:0}},setup(e){const t=e,r=z(()=>[0]),o=v({rowsPerPage:0});return(n,s)=>(d(),k(ye,{grid:"",rows:t.raffles,"row-key":"name","hide-header":"",pagination:o.value,"onUpdate:pagination":s[0]||(s[0]=l=>o.value=l),"rows-per-page-options":r.value},{item:i(l=>[y("div",Wa,[a(Ua,{is_admin:e.is_admin,raffle:l.row},null,8,["is_admin","raffle"])])]),_:1},8,["rows","pagination","rows-per-page-options"]))}}),Ha=y("p",{class:"text-h5"},"Raffle",-1),Ka=y("p",{class:"text-h5"},"Tickets",-1),Fa={class:""},Ga=y("p",{class:"text-h5"},"Whitelist",-1),Ya={class:"col q-gutter-y-sm"},Ja=x({__name:"RaffleCreateRaffle",setup(e){const t=v(),r=v(),o=v(),n=v(),s=v(),l=v(),c=v([]);async function f(){var g,u;try{const m=new W,T=(g=Q())==null?void 0:g.pg_raffle.value,_=new ge(window.crypto.getRandomValues(new Uint8Array(8))),V=ga(t.value,_),oe=Ue(),te=await U().connection.getParsedAccountInfo(new w(s.value.mint));m.add(await(T==null?void 0:T.methods.initialize(t.value,r.value,wt(n.value,(u=te.value)==null?void 0:u.data.parsed.info.decimals),o.value,_).accountsPartial({creator:A(),raffle:V,ticketsMint:new w(s.value.mint),whitelist:oe}).instruction())),await E(m,"[Raffle] Create"),await C().updateStore()}catch(m){H.create({color:"red",message:`${m}`,timeout:5e3})}}const h=v([]);return v(de().accounts.filter(g=>g.account.data.parsed.info.tokenAmount.uiAmount>0).flatMap(g=>g.account.data.parsed.info.mint)).value.forEach(g=>{var m,T;const u=((m=L().token_list.find(_=>_.address==g))==null?void 0:m.name)??g+" ["+((T=L().token_list.find(_=>_.address==g))==null?void 0:T.symbol)??"]";h.value.push({label:u,value:g})}),(g,u)=>(d(),k(ee,{square:"",flat:"",class:"col q-pa-sm",style:{"max-width":"800px"}},{default:i(()=>[a(q,{class:"q-gutter-y-md"},{default:i(()=>[Ha,a(G,{filled:"",square:"",modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=m=>t.value=m),type:"text",label:"Name"},null,8,["modelValue"]),a(G,{filled:"",square:"",modelValue:r.value,"onUpdate:modelValue":u[1]||(u[1]=m=>r.value=m),type:"text",label:"Description"},null,8,["modelValue"])]),_:1}),a(N),a(q,{class:"q-gutter-y-md"},{default:i(()=>[Ka,y("div",Fa,[a(je,{label:"","textbox-label":"Token",onToken_account_selected:u[2]||(u[2]=m=>s.value=m)})]),a(G,{filled:"",square:"",modelValue:o.value,"onUpdate:modelValue":u[3]||(u[3]=m=>o.value=m),type:"number",label:"Tickets Count"},null,8,["modelValue"]),a(G,{filled:"",square:"",type:"number",modelValue:n.value,"onUpdate:modelValue":u[4]||(u[4]=m=>n.value=m),label:"Ticket Price"},null,8,["modelValue"])]),_:1}),a(q,{class:"q-gutter-y-md"},{default:i(()=>[Ga,y("div",Ya,[a(Dt,{class:"full-width",filled:"",square:"",modelValue:l.value,"onUpdate:modelValue":u[5]||(u[5]=m=>l.value=m),clearable:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",behavior:"menu",label:"Whitelist selcted",options:c.value,style:{width:"250px"}},{"no-option":i(()=>[a(Z,null,{default:i(()=>[a(j,{class:"text-grey"},{default:i(()=>[$(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options"])])]),_:1}),a(N),a(q,{class:"row justify-end"},{default:i(()=>[a(O,{icon:"send",square:"",class:"row",color:"primary",onClick:u[6]||(u[6]=m=>f()),label:"Create"})]),_:1})]),_:1}))}}),Za={class:"row shadow-2"},Xa={key:0,class:"row"},en={key:1,class:""},tn={key:1,class:"row justify-center"},Rn=x({__name:"RafflePage",setup(e){const t=v("raffle");return se(async()=>{await C().updateStore()}),(r,o)=>(d(),k(kt,{class:"col bg-black"},{default:i(()=>[y("div",Za,[a(lt,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),"no-caps":"","outside-arrows":"","mobile-arrows":"",class:"col bg-dark"},{default:i(()=>[a(ce,{name:"raffle",label:"Raffle"}),P(L)().is_admin?(d(),k(ce,{key:0,name:"create",label:"Create"})):b("",!0),P(L)().is_admin?(d(),k(ce,{key:1,name:"manage",label:"Manage"})):b("",!0)]),_:1},8,["modelValue"]),a(O,{flat:"",class:"bg-dark",icon:"refresh",onClick:o[1]||(o[1]=n=>P(C)().updateStore())})]),P(C)().raffles.length==0?(d(),D("div",Xa,[a(ne),a(Wt,{class:"row",color:"primary",size:"10rem"}),a(ne)])):b("",!0),P(C)().raffles.length>0?(d(),D("div",en,[t.value==="raffle"?(d(),k(Ie,{key:0,raffles:P(C)().getRunningRaffles,is_admin:!1},null,8,["raffles"])):b("",!0),t.value==="create"?(d(),D("div",tn,[a(Ja,{class:"q-mt-xl"})])):b("",!0),t.value==="manage"?(d(),k(Ie,{key:2,raffles:P(C)().raffles,is_admin:P(L)().is_admin},null,8,["raffles","is_admin"])):b("",!0)])):b("",!0)]),_:1}))}});export{Rn as default};