import{cV as F,cU as N,au as B,J as p,b1 as C,ak as $,as as n,bx as v,ar as A,cl as D,P as S,cY as Ie,db as pe,dc as W,aX as R,a6 as ee,b7 as te,bz as j,ai as z,a1 as le,bZ as Le,aU as Me,ah as T,bs as ge,aF as w,aC as Ue,aQ as De,cM as Re,ct as je,cn as G,cd as ke,bT as Oe,cC as we,aj as He,al as Je}from"./index.dfac9ee0.js";import{Q as Xe}from"./QCardSection.97261a07.js";import{Q as xe}from"./QSeparator.46eacbf8.js";import{Q as Ye,a as P}from"./QTabs.ccf75117.js";import{Q as Ze,a as E}from"./QTabPanels.4f16911c.js";import{u as Ge,a as et,Q as tt}from"./QCard.f392f138.js";import{Q as lt}from"./QPage.322a4056.js";import{Q as ae}from"./QInput.440ef0a5.js";import{h as O}from"./handle_confirmation.43d49164.js";import{i as re,j as ne,Q as ie}from"./QMenu.8ef1e29a.js";import{Q as oe}from"./QList.1f98462d.js";import{Q as ce}from"./QBtnDropdown.7bb0b394.js";import{C as se}from"./ClosePopup.7ba7c2e3.js";import{Q as at,a as rt}from"./QSlideTransition.9462ad37.js";import"./uid.42677368.js";import"./rtl.18aac551.js";import"./touch.3df10340.js";import"./use-key-composition.52d37a72.js";import"./use-checkbox.cf35c19c.js";function H(){F().publicKey.value||N.create({color:"yellow",message:"Wallet not connected!",timeout:5e3})}const nt={class:"row"},it=B({__name:"CreateWhitelist",setup(l){const c=p("");async function f(){H();const{pg_whitelist:y}=W();let[s,k]=S.findProgramAddressSync([F().publicKey.value.toBytes(),Ie(c.value)],y.value.programId);try{const _=await y.value.methods.initialize(c.value).accounts({whitelist:s,systemProgram:pe.programId}).rpc();console.log(_),await O(_)}catch(_){N.create({color:"red",message:`${_}`,timeout:5e3})}}return(y,s)=>(C(),$("div",nt,[n(ae,{label:"New whitelist name",filled:"",class:"col",modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=k=>c.value=k)},null,8,["modelValue"]),n(D,{disable:c.value.length==0,square:"",color:"primary",onClick:s[1]||(s[1]=k=>f())},{default:v(()=>[A("Create")]),_:1},8,["disable"])]))}}),ot={class:"row"},ct=B({__name:"AddAddressToWhitelist",setup(l){const{pg_whitelist:c}=W(),f=p(""),y=p(),s=p();R(async()=>{y.value=await c.value.account.whitelist.all()});async function k(){H();const _=new S(s.value.publicKey.toString()),[u,h]=S.findProgramAddressSync([new S(f.value).toBytes(),_.toBytes()],c.value.programId);try{const o=new S(f.value),q=await c.value.methods.addToWhitelist(o).accounts({entry:u,whitelist:_,authority:F().publicKey.value,systemProgram:pe.programId}).rpc();console.log(q),await O(q)}catch(o){N.create({color:"red",message:`${o}`,timeout:5e3})}}return(_,u)=>{var h;return C(),$("div",ot,[n(ce,{color:"primary",square:"",label:((h=s.value)==null?void 0:h.account.name)??"please select a whitelist"},{default:v(()=>[n(oe,null,{default:v(()=>[(C(!0),$(ee,null,te(y.value,o=>j((C(),z(ie,{clickable:"",key:o,onClick:q=>s.value=o},{default:v(()=>[n(re,null,{default:v(()=>[n(ne,null,{default:v(()=>[A(le(o==null?void 0:o.account.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[se]])),128))]),_:1})]),_:1},8,["label"]),n(ae,{class:"col",filled:"",modelValue:f.value,"onUpdate:modelValue":u[0]||(u[0]=o=>f.value=o),label:"Address to be added"},null,8,["modelValue"]),n(D,{disable:f.value.length==0,square:"",color:"primary",onClick:u[1]||(u[1]=o=>k())},{default:v(()=>[A("Add")]),_:1},8,["disable"])])}}}),st=["none","strict","leaf","leaf-filtered"];var ut=Le({name:"QTree",props:{...Ge,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:l=>st.includes(l)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(l,{slots:c,emit:f}){const{proxy:y}=Ue(),{$q:s}=y,k=et(l,s),_=p({}),u=p(l.ticked||[]),h=p(l.expanded||[]);let o={};Me(()=>{o={}});const q=T(()=>`q-tree q-tree--${l.dense===!0?"dense":"standard"}`+(l.noConnectors===!0?" q-tree--no-connectors":"")+(k.value===!0?" q-tree--dark":"")+(l.color!==void 0?` text-${l.color}`:"")),ue=T(()=>l.selected!==void 0),Ce=T(()=>l.icon||s.iconSet.tree.icon),de=T(()=>l.controlColor||l.color),I=T(()=>l.textColor!==void 0?` text-${l.textColor}`:""),Se=T(()=>{const t=l.selectedColor||l.color;return t?` text-${t}`:""}),Ke=T(()=>l.filterMethod!==void 0?l.filterMethod:(t,a)=>{const e=a.toLowerCase();return t[l.labelKey]&&t[l.labelKey].toLowerCase().indexOf(e)>-1}),K=T(()=>{const t={},a=(e,i)=>{const r=e.tickStrategy||(i?i.tickStrategy:l.tickStrategy),m=e[l.nodeKey],b=e[l.childrenKey]&&Array.isArray(e[l.childrenKey])&&e[l.childrenKey].length!==0,Q=e.disabled!==!0&&ue.value===!0&&e.selectable!==!1,x=e.disabled!==!0&&e.expandable!==!1,We=r!=="none",U=r==="strict",he=r==="leaf-filtered",Y=r==="leaf"||r==="leaf-filtered";let Z=e.disabled!==!0&&e.tickable!==!1;Y===!0&&Z===!0&&i&&i.tickable!==!0&&(Z=!1);let V=e.lazy;V===!0&&_.value[m]!==void 0&&Array.isArray(e[l.childrenKey])===!0&&(V=_.value[m]);const d={key:m,parent:i,isParent:b,lazy:V,disabled:e.disabled,link:e.disabled!==!0&&(Q===!0||x===!0&&(b===!0||V===!0)),children:[],matchesFilter:l.filter?Ke.value(e,l.filter):!0,selected:m===l.selected&&Q===!0,selectable:Q,expanded:b===!0?h.value.includes(m):!1,expandable:x,noTick:e.noTick===!0||U!==!0&&V&&V!=="loaded",tickable:Z,tickStrategy:r,hasTicking:We,strictTicking:U,leafFilteredTicking:he,leafTicking:Y,ticked:U===!0?u.value.includes(m):b===!0?!1:u.value.includes(m)};if(t[m]=d,b===!0&&(d.children=e[l.childrenKey].map(g=>a(g,d)),l.filter&&(d.matchesFilter!==!0?d.matchesFilter=d.children.some(g=>g.matchesFilter):d.noTick!==!0&&d.disabled!==!0&&d.tickable===!0&&he===!0&&d.children.every(g=>g.matchesFilter!==!0||g.noTick===!0||g.tickable!==!0)===!0&&(d.tickable=!1)),d.matchesFilter===!0&&(d.noTick!==!0&&U!==!0&&d.children.every(g=>g.noTick)===!0&&(d.noTick=!0),Y))){if(d.ticked=!1,d.indeterminate=d.children.some(g=>g.indeterminate===!0),d.tickable=d.tickable===!0&&d.children.some(g=>g.tickable),d.indeterminate!==!0){const g=d.children.reduce((be,ze)=>ze.ticked===!0?be+1:be,0);g===d.children.length?d.ticked=!0:g>0&&(d.indeterminate=!0)}d.indeterminate===!0&&(d.indeterminateNextState=d.children.every(g=>g.tickable!==!0||g.ticked!==!0))}return d};return l.nodes.forEach(e=>a(e,null)),t});ge(()=>l.ticked,t=>{u.value=t}),ge(()=>l.expanded,t=>{h.value=t});function L(t){const a=[].reduce,e=(i,r)=>{if(i||!r)return i;if(Array.isArray(r)===!0)return a.call(Object(r),e,i);if(r[l.nodeKey]===t)return r;if(r[l.childrenKey])return e(null,r[l.childrenKey])};return e(null,l.nodes)}function qe(){return u.value.map(t=>L(t))}function Te(){return h.value.map(t=>L(t))}function $e(t){return t&&K.value[t]?K.value[t].expanded:!1}function Ae(){l.expanded!==void 0?f("update:expanded",[]):h.value=[]}function fe(){const t=[],a=e=>{e[l.childrenKey]&&e[l.childrenKey].length!==0&&e.expandable!==!1&&e.disabled!==!0&&(t.push(e[l.nodeKey]),e[l.childrenKey].forEach(a))};l.nodes.forEach(a),l.expanded!==void 0?f("update:expanded",t):h.value=t}function J(t,a,e=L(t),i=K.value[t]){if(i.lazy&&i.lazy!=="loaded"){if(i.lazy==="loading")return;_.value[t]="loading",Array.isArray(e[l.childrenKey])!==!0&&(e[l.childrenKey]=[]),f("lazyLoad",{node:e,key:t,done:r=>{_.value[t]="loaded",e[l.childrenKey]=Array.isArray(r)===!0?r:[],De(()=>{const m=K.value[t];m&&m.isParent===!0&&ve(t,!0)})},fail:()=>{delete _.value[t],e[l.childrenKey].length===0&&delete e[l.childrenKey]}})}else i.isParent===!0&&i.expandable===!0&&ve(t,a)}function ve(t,a){let e=h.value;const i=l.expanded!==void 0;if(i===!0&&(e=e.slice()),a){if(l.accordion&&K.value[t]){const r=[];K.value[t].parent?K.value[t].parent.children.forEach(m=>{m.key!==t&&m.expandable===!0&&r.push(m.key)}):l.nodes.forEach(m=>{const b=m[l.nodeKey];b!==t&&r.push(b)}),r.length!==0&&(e=e.filter(m=>r.includes(m)===!1))}e=e.concat([t]).filter((r,m,b)=>b.indexOf(r)===m)}else e=e.filter(r=>r!==t);i===!0?f("update:expanded",e):h.value=e}function Qe(t){return t&&K.value[t]?K.value[t].ticked:!1}function M(t,a){let e=u.value;const i=l.ticked!==void 0;i===!0&&(e=e.slice()),a?e=e.concat(t).filter((r,m,b)=>b.indexOf(r)===m):e=e.filter(r=>t.includes(r)===!1),i===!0&&f("update:ticked",e)}function Ve(t,a,e){const i={tree:y,node:t,key:e,color:l.color,dark:k.value};return we(i,"expanded",()=>a.expanded,r=>{r!==a.expanded&&J(e,r)}),we(i,"ticked",()=>a.ticked,r=>{r!==a.ticked&&M([e],r)}),i}function me(t){return(l.filter?t.filter(a=>K.value[a[l.nodeKey]].matchesFilter):t).map(a=>Fe(a))}function Be(t){if(t.icon!==void 0)return w(G,{class:"q-tree__icon q-mr-sm",name:t.icon,color:t.iconColor});const a=t.img||t.avatar;if(a)return w("img",{class:`q-tree__${t.img?"img":"avatar"} q-mr-sm`,src:a})}function Pe(){f("afterShow")}function Ee(){f("afterHide")}function Fe(t){const a=t[l.nodeKey],e=K.value[a],i=t.header&&c[`header-${t.header}`]||c["default-header"],r=e.isParent===!0?me(t[l.childrenKey]):[],m=r.length!==0||e.lazy&&e.lazy!=="loaded";let b=t.body&&c[`body-${t.body}`]||c["default-body"];const Q=i!==void 0||b!==void 0?Ve(t,e,a):null;return b!==void 0&&(b=w("div",{class:"q-tree__node-body relative-position"},[w("div",{class:I.value},[b(Q)])])),w("div",{key:a,class:`q-tree__node relative-position q-tree__node--${m===!0?"parent":"child"}`},[w("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(e.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(e.selected===!0?" q-tree__node--selected":"")+(e.disabled===!0?" q-tree__node--disabled":""),tabindex:e.link===!0?0:-1,ariaExpanded:r.length>0?e.expanded:null,role:"treeitem",onClick:x=>{ye(t,e,x)},onKeypress(x){Re(x)!==!0&&(x.keyCode===13?ye(t,e,x,!0):x.keyCode===32&&X(t,e,x,!0))}},[w("div",{class:"q-focus-helper",tabindex:-1,ref:x=>{o[e.key]=x}}),e.lazy==="loading"?w(je,{class:"q-tree__spinner",color:de.value}):m===!0?w(G,{class:"q-tree__arrow"+(e.expanded===!0?" q-tree__arrow--rotate":""),name:Ce.value,onClick(x){X(t,e,x)}}):null,e.hasTicking===!0&&e.noTick!==!0?w(at,{class:"q-tree__tickbox",modelValue:e.indeterminate===!0?null:e.ticked,color:de.value,dark:k.value,dense:!0,keepColor:!0,disable:e.tickable!==!0,onKeydown:ke,"onUpdate:modelValue":x=>{Ne(e,x)}}):null,w("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(e.selected===!0?Se.value:I.value)},[i?i(Q):[Be(t),w("div",t[l.labelKey])]])]),m===!0?l.noTransition===!0?e.expanded===!0?w("div",{class:"q-tree__node-collapsible"+I.value,key:`${a}__q`},[b,w("div",{class:"q-tree__children"+(e.disabled===!0?" q-tree__node--disabled":""),role:"group"},r)]):null:w(rt,{duration:l.duration,onShow:Pe,onHide:Ee},()=>j(w("div",{class:"q-tree__node-collapsible"+I.value,key:`${a}__q`},[b,w("div",{class:"q-tree__children"+(e.disabled===!0?" q-tree__node--disabled":""),role:"group"},r)]),[[Oe,e.expanded]])):b])}function _e(t){const a=o[t];a&&a.focus()}function ye(t,a,e,i){i!==!0&&a.selectable!==!1&&_e(a.key),ue.value&&a.selectable?l.noSelectionUnset===!1?f("update:selected",a.key!==l.selected?a.key:null):a.key!==l.selected&&f("update:selected",a.key===void 0?null:a.key):X(t,a,e,i),typeof t.handler=="function"&&t.handler(t)}function X(t,a,e,i){e!==void 0&&ke(e),i!==!0&&a.selectable!==!1&&_e(a.key),J(a.key,!a.expanded,t,a)}function Ne(t,a){if(t.indeterminate===!0&&(a=t.indeterminateNextState),t.strictTicking)M([t.key],a);else if(t.leafTicking){const e=[],i=r=>{r.isParent?(a!==!0&&r.noTick!==!0&&r.tickable===!0&&e.push(r.key),r.leafTicking===!0&&r.children.forEach(i)):r.noTick!==!0&&r.tickable===!0&&(r.leafFilteredTicking!==!0||r.matchesFilter===!0)&&e.push(r.key)};i(t),M(e,a)}}return l.defaultExpandAll===!0&&fe(),Object.assign(y,{getNodeByKey:L,getTickedNodes:qe,getExpandedNodes:Te,isExpanded:$e,collapseAll:Ae,expandAll:fe,setExpanded:J,isTicked:Qe,setTicked:M}),()=>{const t=me(l.nodes);return w("div",{class:q.value,role:"tree"},t.length===0?l.filter?l.noResultsLabel||s.lang.tree.noResults:l.noNodesLabel||s.lang.tree.noNodes:t)}}});const dt={class:"row q-gutter-x-md"},ft=B({__name:"ViewWhitelist",setup(l){const c=p(),f=p();R(async()=>{const{pg_whitelist:s}=W();c.value=await s.value.account.whitelist.all(),f.value=await s.value.account.whitelistEntry.all()});const y=T(()=>{var s;return(s=c==null?void 0:c.value)==null?void 0:s.map(k=>{var _,u;return{label:`${k.account.name} | ${k.publicKey.toString()}`,children:(u=(_=f.value)==null?void 0:_.filter(h=>h.account.parent.toString()===k.publicKey.toString()))==null?void 0:u.flatMap(h=>({label:`Member: ${h.account.whitelisted.toString()}  |  Account: ${h.publicKey.toString()} `}))}})});return(s,k)=>(C(),$("div",dt,[y.value?(C(),z(ut,{key:0,nodes:y.value,"node-key":"label","selected-color":"primary","default-expand-all":""},null,8,["nodes"])):He("",!0)]))}}),vt={class:"row"},mt=B({__name:"RemoveAddressFromWhitelist",setup(l){const{pg_whitelist:c}=W(),f=p(""),y=p(),s=p();R(async()=>{y.value=await c.value.account.whitelist.all()});async function k(){H();const _=new S(s.value.publicKey),[u,h]=S.findProgramAddressSync([new S(f.value).toBytes(),_.toBytes()],c.value.programId);try{console.log(c.value.methods);const o=new S(f.value),q=await c.value.methods.removeFromWhitelist(o).accounts({entry:u,whitelist:_,authority:F().publicKey.value}).rpc();console.log(q),await O(q)}catch(o){N.create({color:"red",message:`${o}`,timeout:5e3})}}return(_,u)=>{var h;return C(),$("div",vt,[n(ce,{color:"primary",square:"",label:((h=s.value)==null?void 0:h.account.name)??"please select a whitelist"},{default:v(()=>[n(oe,null,{default:v(()=>[(C(!0),$(ee,null,te(y.value,o=>j((C(),z(ie,{clickable:"",key:o,onClick:q=>s.value=o},{default:v(()=>[n(re,null,{default:v(()=>[n(ne,null,{default:v(()=>[A(le(o==null?void 0:o.account.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[se]])),128))]),_:1})]),_:1},8,["label"]),n(ae,{class:"col",filled:"",modelValue:f.value,"onUpdate:modelValue":u[0]||(u[0]=o=>f.value=o),label:"Address to be removed"},null,8,["modelValue"]),n(D,{disable:f.value.length==0,square:"",color:"primary",onClick:u[1]||(u[1]=o=>k())},{default:v(()=>[A("Remove")]),_:1},8,["disable"])])}}}),_t={class:"row"},yt=B({__name:"DeleteWhitelist",setup(l){const{pg_whitelist:c}=W(),f=p("3x5vrFFTspsicxrYHMA8SNVW71RMhVkALemXrJFfeQo1"),y=p(),s=p();R(async()=>{y.value=await c.value.account.whitelist.all()});async function k(){H();const _=new S(s.value.publicKey);S.findProgramAddressSync([new S(f.value).toBytes(),_.toBytes()],c.value.programId);try{const u=await c.value.methods.deleteWhitelist(s.value.account.name).accounts({whitelist:_,authority:F().publicKey.value}).rpc();console.log(u),await O(u)}catch(u){N.create({color:"red",message:`${u}`,timeout:5e3})}}return(_,u)=>{var h;return C(),$("div",_t,[n(ce,{square:"",color:"primary",label:((h=s.value)==null?void 0:h.account.name)??"please select a whitelist"},{default:v(()=>[n(oe,null,{default:v(()=>[(C(!0),$(ee,null,te(y.value,o=>j((C(),z(ie,{clickable:"",key:o,onClick:q=>s.value=o},{default:v(()=>[n(re,null,{default:v(()=>[n(ne,null,{default:v(()=>[A(le(o==null?void 0:o.account.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[se]])),128))]),_:1})]),_:1},8,["label"]),n(D,{square:"",color:"primary",onClick:u[0]||(u[0]=o=>k())},{default:v(()=>[A("Delete")]),_:1})])}}}),ht=Je("div",{class:"col text-h6"},"Whitelists Manager",-1),Nt=B({__name:"WhitelistPage",setup(l){const c=p("view");return(f,y)=>(C(),z(lt,{class:"bg-black"},{default:v(()=>[n(tt,{flat:""},{default:v(()=>[n(Xe,{class:"row items-center q-gutter-x-md"},{default:v(()=>[n(G,{name:"contrast",size:"md"}),ht]),_:1}),n(xe),n(Ye,{"no-caps":"","outside-arrows":"","mobile-arrows":"",modelValue:c.value,"onUpdate:modelValue":y[0]||(y[0]=s=>c.value=s),class:"shadow-2 bg-dark",align:"justify"},{default:v(()=>[n(P,{name:"create",label:"Create Whitelist"}),n(P,{name:"add",label:"Add Address to Whitelist"}),n(P,{name:"remove",label:"Remove address from Whitelist"}),n(P,{name:"delete",label:"Delete Whitelist"}),n(P,{name:"view",label:"View "})]),_:1},8,["modelValue"]),n(xe),n(Ze,{dark:"",modelValue:c.value,"onUpdate:modelValue":y[1]||(y[1]=s=>c.value=s),animated:""},{default:v(()=>[n(E,{name:"create"},{default:v(()=>[n(it)]),_:1}),n(E,{name:"add"},{default:v(()=>[n(ct)]),_:1}),n(E,{name:"remove"},{default:v(()=>[n(mt)]),_:1}),n(E,{name:"delete"},{default:v(()=>[n(yt)]),_:1}),n(E,{name:"view"},{default:v(()=>[n(ft)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}});export{Nt as default};