import{ag as r,bY as b,I as d,br as I,aS as x,aE as l,bB as j,bZ as D,cp as E,aB as L}from"./index.8041a8a0.js";import{u as M,a as P}from"./uid.1059bff9.js";const F={ratio:[String,Number]};function H(e,u){return r(()=>{const o=Number(e.ratio||(u!==void 0?u.value:void 0));return isNaN(o)!==!0&&o>0?{paddingBottom:`${100/o}%`}:null})}const O=16/9;var A=b({name:"QImg",props:{...F,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:O},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:u,emit:o}){const v=d(e.initialRatio),m=H(e,v);let i=null,g=!1;const n=[d(null),d(S())],a=d(0),c=d(!1),s=d(!1),C=r(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),B=r(()=>({width:e.width,height:e.height})),k=r(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),w=r(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));I(()=>q(),_);function q(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function S(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function _(t){i!==null&&(clearTimeout(i),i=null),s.value=!1,t===null?(c.value=!1,n[a.value^1].value=S()):c.value=!0,n[a.value].value=t}function T({target:t}){g!==!0&&(i!==null&&(clearTimeout(i),i=null),v.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,$(t,1))}function $(t,f){g===!0||f===1e3||(t.complete===!0?Q(t):i=setTimeout(()=>{i=null,$(t,f+1)},50))}function Q(t){g!==!0&&(a.value=a.value^1,n[a.value].value=null,c.value=!1,s.value=!1,o("load",t.currentSrc||t.src))}function N(t){i!==null&&(clearTimeout(i),i=null),c.value=!1,s.value=!0,n[a.value].value=null,n[a.value^1].value=S(),o("error",t)}function z(t){const f=n[t].value,h={key:"img_"+t,class:k.value,style:w.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...f};return a.value===t?(h.class+=" q-img__image--waiting",Object.assign(h,{onLoad:T,onError:N})):h.class+=" q-img__image--loaded",l("div",{class:"q-img__container absolute-full",key:"img"+t},l("img",h))}function R(){return c.value!==!0?l("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},D(u[s.value===!0?"error":"default"])):l("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},u.loading!==void 0?u.loading():e.noSpinner===!0?void 0:[l(E,{color:e.spinnerColor,size:e.spinnerSize})])}return _(q()),x(()=>{g=!0,i!==null&&(clearTimeout(i),i=null)}),()=>{const t=[];return m.value!==null&&t.push(l("div",{key:"filler",style:m.value})),s.value!==!0&&(n[0].value!==null&&t.push(z(0)),n[1].value!==null&&t.push(z(1))),t.push(l(j,{name:"q-transition--fade"},R)),l("div",{class:C.value,style:B.value,role:"img","aria-label":e.alt},t)}}});const U=l("div",{class:"q-space"});var G=b({name:"QSpace",setup(){return()=>U}});const W={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},y={xs:2,sm:4,md:8,lg:16,xl:24};var J=b({name:"QSeparator",props:{...M,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const u=L(),o=P(e,u.proxy.$q),v=r(()=>e.vertical===!0?"vertical":"horizontal"),m=r(()=>` q-separator--${v.value}`),i=r(()=>e.inset!==!1?`${m.value}-${W[e.inset]}`:""),g=r(()=>`q-separator${m.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(o.value===!0?" q-separator--dark":"")),n=r(()=>{const a={};if(e.size!==void 0&&(a[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const c=e.spaced===!0?`${y.md}px`:e.spaced in y?`${y[e.spaced]}px`:e.spaced,s=e.vertical===!0?["Left","Right"]:["Top","Bottom"];a[`margin${s[0]}`]=a[`margin${s[1]}`]=c}return a});return()=>l("hr",{class:g.value,style:n.value,"aria-orientation":v.value})}});export{A as Q,G as a,J as b};
