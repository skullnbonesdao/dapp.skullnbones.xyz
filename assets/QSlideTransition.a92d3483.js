import{I as T,ag as o,aE as m,c$ as O,ce as P,bZ as F,d0 as R,aB as j,N as x,cc as C,bY as q,ck as A,aS as H,bB as N}from"./index.8041a8a0.js";import{a as z,u as Q}from"./uid.1059bff9.js";import{u as Y,a as D}from"./QInput.d65ccb6e.js";const Z="0.1.0",U="dapp_whitelist",G=[{name:"initialize",accounts:[{name:"whitelist",isMut:!0,isSigner:!1},{name:"signer",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"name",type:"string"}]},{name:"addToWhitelist",accounts:[{name:"entry",isMut:!0,isSigner:!1},{name:"whitelist",isMut:!0,isSigner:!1},{name:"authority",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"accountToAdd",type:"publicKey"}]},{name:"removeFromWhitelist",accounts:[{name:"entry",isMut:!0,isSigner:!1},{name:"whitelist",isMut:!0,isSigner:!1},{name:"authority",isMut:!0,isSigner:!0}],args:[{name:"accountToDelete",type:"publicKey"}]},{name:"deleteWhitelist",accounts:[{name:"whitelist",isMut:!0,isSigner:!1},{name:"authority",isMut:!0,isSigner:!0}],args:[{name:"name",type:"string"}]},{name:"checkWhitelist",accounts:[{name:"whitelist",isMut:!1,isSigner:!1}],args:[{name:"owner",type:"publicKey"},{name:"name",type:"string"}]},{name:"checkWhitelisted",accounts:[{name:"entry",isMut:!1,isSigner:!1},{name:"whitelist",isMut:!1,isSigner:!1}],args:[{name:"accountToCheck",type:"publicKey"}]}],J=[{name:"Whitelist",type:{kind:"struct",fields:[{name:"authority",type:"publicKey"},{name:"name",type:"string"},{name:"hasChilds",type:"bool"},{name:"accessCount",type:"u32"}]}},{name:"WhitelistEntry",type:{kind:"struct",fields:[{name:"parent",type:"publicKey"},{name:"whitelisted",type:"publicKey"}]}}],X=[{code:6e3,name:"WhitelistStillHasChilds",msg:"The whitelist still has childs"},{code:6001,name:"AccountsNoRemovable",msg:"Can not remove the specified account"}],ee={address:"6CY4PELBNPvqLymWWpWSEMR84kwmTZERFj6VoRLvL5Vn"};var ce={version:Z,name:U,instructions:G,accounts:J,errors:X,metadata:ee};function te(a,b){const e=T(null),i=o(()=>a.disable===!0?null:m("span",{ref:e,class:"no-outline",tabindex:-1}));function u(l){const s=b.value;l!==void 0&&l.type.indexOf("key")===0?s!==null&&document.activeElement!==s&&s.contains(document.activeElement)===!0&&s.focus():e.value!==null&&(l===void 0||s!==null&&s.contains(l.target)===!0)&&e.value.focus()}return{refocusTargetEl:i,refocusTarget:u}}var ne={xs:30,sm:35,md:40,lg:50,xl:60};const ae={...Q,...R,...Y,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},se=["update:modelValue"];function ie(a,b){const{props:e,slots:i,emit:u,proxy:l}=j(),{$q:s}=l,f=z(e,s),c=T(null),{refocusTargetEl:y,refocusTarget:k}=te(e,c),w=O(e,ne),v=o(()=>e.val!==void 0&&Array.isArray(e.modelValue)),S=o(()=>{const n=x(e.val);return v.value===!0?e.modelValue.findIndex(p=>x(p)===n):-1}),d=o(()=>v.value===!0?S.value>-1:x(e.modelValue)===x(e.trueValue)),t=o(()=>v.value===!0?S.value===-1:x(e.modelValue)===x(e.falseValue)),r=o(()=>d.value===!1&&t.value===!1),g=o(()=>e.disable===!0?-1:e.tabindex||0),h=o(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(f.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),I=o(()=>{const n=d.value===!0?"truthy":t.value===!0?"falsy":"indet",p=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?d.value===!0:t.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${n}${p}`}),M=o(()=>{const n={type:"checkbox"};return e.name!==void 0&&Object.assign(n,{".checked":d.value,"^checked":d.value===!0?"checked":void 0,name:e.name,value:v.value===!0?e.val:e.trueValue}),n}),E=D(M),$=o(()=>{const n={tabindex:g.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":r.value===!0?"mixed":d.value===!0?"true":"false"};return e.disable===!0&&(n["aria-disabled"]="true"),n});function V(n){n!==void 0&&(C(n),k(n)),e.disable!==!0&&u("update:modelValue",B(),n)}function B(){if(v.value===!0){if(d.value===!0){const n=e.modelValue.slice();return n.splice(S.value,1),n}return e.modelValue.concat([e.val])}if(d.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(t.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function L(n){(n.keyCode===13||n.keyCode===32)&&C(n)}function W(n){(n.keyCode===13||n.keyCode===32)&&V(n)}const K=b(d,r);return Object.assign(l,{toggle:V}),()=>{const n=K();e.disable!==!0&&E(n,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const p=[m("div",{class:I.value,style:w.value,"aria-hidden":"true"},n)];y.value!==null&&p.push(y.value);const _=e.label!==void 0?P(i.default,[e.label]):F(i.default);return _!==void 0&&p.push(m("div",{class:`q-${a}__label q-anchor--skip`},_)),m("div",{ref:c,class:h.value,...$.value,onClick:V,onKeydown:L,onKeyup:W},p)}}const le=m("div",{key:"svg",class:"q-checkbox__bg absolute"},[m("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[m("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),m("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var de=q({name:"QCheckbox",props:ae,emits:se,setup(a){function b(e,i){const u=o(()=>(e.value===!0?a.checkedIcon:i.value===!0?a.indeterminateIcon:a.uncheckedIcon)||null);return()=>u.value!==null?[m("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[m(A,{class:"q-checkbox__icon",name:u.value})])]:[le]}return ie("checkbox",b)}}),me=q({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(a,{slots:b,emit:e}){let i=!1,u,l,s=null,f=null,c,y;function k(){u&&u(),u=null,i=!1,s!==null&&(clearTimeout(s),s=null),f!==null&&(clearTimeout(f),f=null),l!==void 0&&l.removeEventListener("transitionend",c),c=null}function w(t,r,g){r!==void 0&&(t.style.height=`${r}px`),t.style.transition=`height ${a.duration}ms cubic-bezier(.25, .8, .50, 1)`,i=!0,u=g}function v(t,r){t.style.overflowY=null,t.style.height=null,t.style.transition=null,k(),r!==y&&e(r)}function S(t,r){let g=0;l=t,i===!0?(k(),g=t.offsetHeight===t.scrollHeight?0:void 0):(y="hide",t.style.overflowY="hidden"),w(t,g,r),s=setTimeout(()=>{s=null,t.style.height=`${t.scrollHeight}px`,c=h=>{f=null,(Object(h)!==h||h.target===t)&&v(t,"show")},t.addEventListener("transitionend",c),f=setTimeout(c,a.duration*1.1)},100)}function d(t,r){let g;l=t,i===!0?k():(y="show",t.style.overflowY="hidden",g=t.scrollHeight),w(t,g,r),s=setTimeout(()=>{s=null,t.style.height=0,c=h=>{f=null,(Object(h)!==h||h.target===t)&&v(t,"hide")},t.addEventListener("transitionend",c),f=setTimeout(c,a.duration*1.1)},100)}return H(()=>{i===!0&&k()}),()=>m(N,{css:!1,appear:a.appear,onEnter:S,onLeave:d},b.default)}});export{de as Q,me as a,ce as d};
