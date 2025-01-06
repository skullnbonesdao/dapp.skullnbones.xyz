import{d as ot,e as Bt,f as Ft,g as It,u as el,a as tl,c as ll,h as nl,i as ol,j as bt,k as ul}from"./use-key-composition.7526a148.js";import{bZ as Ke,cI as il,cJ as al,ah as S,cg as rl,aF as V,co as $e,cK as sl,cs as cl,aC as Ne,cd as ue,aT as je,cL as wt,c5 as qe,c3 as me,cM as dl,J as L,bs as ie,bC as Ct,b_ as fl,cH as vl,c2 as ml,aQ as oe,ce as Sl,aS as hl,aV as gl,aR as yl,aU as bl,b0 as wl,c9 as Ze,cN as _e,cy as Cl,ca as ke,cO as Vl,cf as xl}from"./index.86d09f09.js";import{b as kl,a as ql,l as pl,u as zl,m as Al,e as Tl,f as _l,n as El,o as Ml,p as Bl,h as Fl,r as Vt,q as xt,t as Il,v as Ll,w as nt,x as Ol,j as Hl,k as Pl,Q as Rl}from"./rtl.d7529cc8.js";function an(e,n,o){return o<=n?n:Math.min(o,Math.max(n,e))}function kt(e,n,o){if(o<=n)return n;const s=o-n+1;let g=n+(e-n)%s;return g<n&&(g=s+g),g===0?0:g}var Dl=Ke({name:"QField",inheritAttrs:!1,props:ot,emits:Bt,setup(){return Ft(It())}});const $l={xs:8,sm:10,md:14,lg:20,xl:24};var Kl=Ke({name:"QChip",props:{...el,...il,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:n,emit:o}){const{proxy:{$q:s}}=Ne(),g=tl(e,s),i=al(e,$l),x=S(()=>e.selected===!0||e.icon!==void 0),w=S(()=>e.selected===!0?e.iconSelected||s.iconSet.chip.selected:e.icon),h=S(()=>e.iconRemove||s.iconSet.chip.remove),z=S(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),d=S(()=>{const v=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(v?` text-${v} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(g.value===!0?" q-chip--dark q-dark":"")}),k=S(()=>{const v=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},R={...v,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||s.lang.label.remove};return{chip:v,remove:R}});function q(v){v.keyCode===13&&p(v)}function p(v){e.disable||(o("update:selected",!e.selected),o("click",v))}function E(v){(v.keyCode===void 0||v.keyCode===13)&&(ue(v),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function P(){const v=[];z.value===!0&&v.push(V("div",{class:"q-focus-helper"})),x.value===!0&&v.push(V($e,{class:"q-chip__icon q-chip__icon--left",name:w.value}));const R=e.label!==void 0?[V("div",{class:"ellipsis"},[e.label])]:void 0;return v.push(V("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},sl(n.default,R))),e.iconRight&&v.push(V($e,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&v.push(V($e,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:h.value,...k.value.remove,onClick:E,onKeyup:E})),v}return()=>{if(e.modelValue===!1)return;const v={class:d.value,style:i.value};return z.value===!0&&Object.assign(v,k.value.chip,{onClick:p,onKeyup:q}),rl("div",v,P(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[cl,e.ripple]])}}});function Nl(e,n,o){let s;function g(){s!==void 0&&(wt.remove(s),s=void 0)}return je(()=>{e.value===!0&&g()}),{removeFromHistory:g,addToHistory(){s={condition:()=>o.value===!0,handler:n},wt.add(s)}}}let Ee=0,Ge,et,Be,tt=!1,qt,pt,zt,Se=null;function jl(e){Ql(e)&&ue(e)}function Ql(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=dl(e),o=e.shiftKey&&!e.deltaX,s=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),g=o||s?e.deltaY:e.deltaX;for(let i=0;i<n.length;i++){const x=n[i];if(pl(x,s))return s?g<0&&x.scrollTop===0?!0:g>0&&x.scrollTop+x.clientHeight===x.scrollHeight:g<0&&x.scrollLeft===0?!0:g>0&&x.scrollLeft+x.clientWidth===x.scrollWidth}return!0}function At(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Re(e){tt!==!0&&(tt=!0,requestAnimationFrame(()=>{tt=!1;const{height:n}=e.target,{clientHeight:o,scrollTop:s}=document.scrollingElement;(Be===void 0||n!==window.innerHeight)&&(Be=o-n,document.scrollingElement.scrollTop=s),s>Be&&(document.scrollingElement.scrollTop-=Math.ceil((s-Be)/8))}))}function Tt(e){const n=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:s,overflowX:g}=window.getComputedStyle(n);Ge=kl(window),et=ql(window),qt=n.style.left,pt=n.style.top,zt=window.location.href,n.style.left=`-${Ge}px`,n.style.top=`-${et}px`,g!=="hidden"&&(g==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),s!=="hidden"&&(s==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,qe.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Re,me.passiveCapture),window.visualViewport.addEventListener("scroll",Re,me.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",At,me.passiveCapture))}qe.is.desktop===!0&&qe.is.mac===!0&&window[`${e}EventListener`]("wheel",jl,me.notPassive),e==="remove"&&(qe.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",Re,me.passiveCapture),window.visualViewport.removeEventListener("scroll",Re,me.passiveCapture)):window.removeEventListener("scroll",At,me.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=qt,n.style.top=pt,window.location.href===zt&&window.scrollTo(Ge,et),Be=void 0)}function Wl(e){let n="add";if(e===!0){if(Ee++,Se!==null){clearTimeout(Se),Se=null;return}if(Ee>1)return}else{if(Ee===0||(Ee--,Ee>0))return;if(n="remove",qe.is.ios===!0&&qe.is.nativeMobile===!0){Se!==null&&clearTimeout(Se),Se=setTimeout(()=>{Tt(n),Se=null},100);return}}Tt(n)}function Ul(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,Wl(n))}}}let De=0;const Xl={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},_t={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Yl=Ke({name:"QDialog",inheritAttrs:!1,props:{...zl,...Al,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Tl,"shake","click","escapeKey"],setup(e,{slots:n,emit:o,attrs:s}){const g=Ne(),i=L(null),x=L(!1),w=L(!1);let h=null,z=null,d,k;const q=S(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:p}=Ul(),{registerTimeout:E}=_l(),{registerTick:P,removeTick:v}=El(),{transitionProps:R,transitionStyle:Q}=Ml(e,()=>_t[e.position][0],()=>_t[e.position][1]),{showPortal:O,hidePortal:M,portalIsAccessible:he,renderPortal:B}=Bl(g,i,T,"dialog"),{hide:K}=Fl({showing:x,hideOnRouteChange:q,handleShow:ge,handleHide:le,processOnMount:!0}),{addToHistory:Y,removeFromHistory:ae}=Nl(x,K,q),J=S(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Xl[e.position]}`+(w.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),Z=S(()=>x.value===!0&&e.seamless!==!0),D=S(()=>e.autoClose===!0?{onClick:l}:{}),re=S(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${Z.value===!0?"modal":"seamless"}`,s.class]);ie(()=>e.maximized,c=>{x.value===!0&&te(c)}),ie(Z,c=>{p(c),c===!0?(Il(y),Ll(G)):(Vt(y),xt(G))});function ge(c){Y(),z=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,te(e.maximized),O(),w.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),P(H)):v(),E(()=>{if(g.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:f,bottom:C}=document.activeElement.getBoundingClientRect(),{innerHeight:F}=window,b=window.visualViewport!==void 0?window.visualViewport.height:F;f>0&&C>b/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-b,C>=F?1/0:Math.ceil(document.scrollingElement.scrollTop+C-b/2))),document.activeElement.scrollIntoView()}k=!0,i.value.click(),k=!1}O(!0),w.value=!1,o("show",c)},e.transitionDuration)}function le(c){v(),ae(),ee(!0),w.value=!0,M(),z!==null&&(((c&&c.type.indexOf("key")===0?z.closest('[tabindex]:not([tabindex^="-"])'):void 0)||z).focus(),z=null),E(()=>{M(!0),w.value=!1,o("hide",c)},e.transitionDuration)}function H(c){ll(()=>{let f=i.value;f===null||f.contains(document.activeElement)===!0||(f=(c!==""?f.querySelector(c):null)||f.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.querySelector("[autofocus], [data-autofocus]")||f,f.focus({preventScroll:!0}))})}function se(c){c&&typeof c.focus=="function"?c.focus({preventScroll:!0}):H(),o("shake");const f=i.value;f!==null&&(f.classList.remove("q-animate--scale"),f.classList.add("q-animate--scale"),h!==null&&clearTimeout(h),h=setTimeout(()=>{h=null,i.value!==null&&(f.classList.remove("q-animate--scale"),H())},170))}function G(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&se():(o("escapeKey"),K()))}function ee(c){h!==null&&(clearTimeout(h),h=null),(c===!0||x.value===!0)&&(te(!1),e.seamless!==!0&&(p(!1),Vt(y),xt(G))),c!==!0&&(z=null)}function te(c){c===!0?d!==!0&&(De<1&&document.body.classList.add("q-body--dialog"),De++,d=!0):d===!0&&(De<2&&document.body.classList.remove("q-body--dialog"),De--,d=!1)}function l(c){k!==!0&&(K(c),o("click",c))}function r(c){e.persistent!==!0&&e.noBackdropDismiss!==!0?K(c):e.noShake!==!0&&se()}function y(c){e.allowFocusOutside!==!0&&he.value===!0&&vl(i.value,c.target)!==!0&&H('[tabindex]:not([tabindex="-1"])')}Object.assign(g.proxy,{focus:H,shake:se,__updateRefocusTarget(c){z=c||null}}),je(ee);function T(){return V("div",{role:"dialog","aria-modal":Z.value===!0?"true":"false",...s,class:re.value},[V(Ct,{name:"q-transition--fade",appear:!0},()=>Z.value===!0?V("div",{class:"q-dialog__backdrop fixed-full",style:Q.value,"aria-hidden":"true",tabindex:-1,onClick:r}):null),V(Ct,R.value,()=>x.value===!0?V("div",{ref:i,class:J.value,style:Q.value,tabindex:-1,...D.value},fl(n.default)):null)])}return B}});const W=1e3,Jl=["start","center","end","start-force","center-force","end-force"],Lt=Array.prototype.filter,Zl=window.getComputedStyle(document.body).overflowAnchor===void 0?ml:function(e,n){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const o=e.children||[];Lt.call(o,g=>g.dataset&&g.dataset.qVsAnchor!==void 0).forEach(g=>{delete g.dataset.qVsAnchor});const s=o[n];s&&s.dataset&&(s.dataset.qVsAnchor="")}))};function pe(e,n){return e+n}function lt(e,n,o,s,g,i,x,w){const h=e===window?document.scrollingElement||document.documentElement:e,z=g===!0?"offsetWidth":"offsetHeight",d={scrollStart:0,scrollViewSize:-x-w,scrollMaxSize:0,offsetStart:-x,offsetEnd:-w};if(g===!0?(e===window?(d.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,d.scrollViewSize+=document.documentElement.clientWidth):(d.scrollStart=h.scrollLeft,d.scrollViewSize+=h.clientWidth),d.scrollMaxSize=h.scrollWidth,i===!0&&(d.scrollStart=(nt===!0?d.scrollMaxSize-d.scrollViewSize:0)-d.scrollStart)):(e===window?(d.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,d.scrollViewSize+=document.documentElement.clientHeight):(d.scrollStart=h.scrollTop,d.scrollViewSize+=h.clientHeight),d.scrollMaxSize=h.scrollHeight),o!==null)for(let k=o.previousElementSibling;k!==null;k=k.previousElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetStart+=k[z]);if(s!==null)for(let k=s.nextElementSibling;k!==null;k=k.nextElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetEnd+=k[z]);if(n!==e){const k=h.getBoundingClientRect(),q=n.getBoundingClientRect();g===!0?(d.offsetStart+=q.left-k.left,d.offsetEnd-=q.width):(d.offsetStart+=q.top-k.top,d.offsetEnd-=q.height),e!==window&&(d.offsetStart+=d.scrollStart),d.offsetEnd+=d.scrollMaxSize-d.offsetStart}return d}function Et(e,n,o,s){n==="end"&&(n=(e===window?document.body:e)[o===!0?"scrollWidth":"scrollHeight"]),e===window?o===!0?(s===!0&&(n=(nt===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-n),window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n):o===!0?(s===!0&&(n=(nt===!0?e.scrollWidth-e.offsetWidth:0)-n),e.scrollLeft=n):e.scrollTop=n}function Me(e,n,o,s){if(o>=s)return 0;const g=n.length,i=Math.floor(o/W),x=Math.floor((s-1)/W)+1;let w=e.slice(i,x).reduce(pe,0);return o%W!==0&&(w-=n.slice(i*W,o).reduce(pe,0)),s%W!==0&&s!==g&&(w-=n.slice(s,x*W).reduce(pe,0)),w}const Ot={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},rn=Object.keys(Ot),Gl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Ot};function en({virtualScrollLength:e,getVirtualScrollTarget:n,getVirtualScrollEl:o,virtualScrollItemSizeComputed:s}){const g=Ne(),{props:i,emit:x,proxy:w}=g,{$q:h}=w;let z,d,k,q=[],p;const E=L(0),P=L(0),v=L({}),R=L(null),Q=L(null),O=L(null),M=L({from:0,to:0}),he=S(()=>i.tableColspan!==void 0?i.tableColspan:100);s===void 0&&(s=S(()=>i.virtualScrollItemSize));const B=S(()=>s.value+";"+i.virtualScrollHorizontal),K=S(()=>B.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);ie(K,()=>{H()}),ie(B,Y);function Y(){le(d,!0)}function ae(l){le(l===void 0?d:l)}function J(l,r){const y=n();if(y==null||y.nodeType===8)return;const T=lt(y,o(),R.value,Q.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);k!==T.scrollViewSize&&H(T.scrollViewSize),D(y,T,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,Jl.indexOf(r)>-1?r:d>-1&&l>d?"end":"start")}function Z(){const l=n();if(l==null||l.nodeType===8)return;const r=lt(l,o(),R.value,Q.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),y=e.value-1,T=r.scrollMaxSize-r.offsetStart-r.offsetEnd-P.value;if(z===r.scrollStart)return;if(r.scrollMaxSize<=0){D(l,r,0,0);return}k!==r.scrollViewSize&&H(r.scrollViewSize),re(M.value.from);const c=Math.floor(r.scrollMaxSize-Math.max(r.scrollViewSize,r.offsetEnd)-Math.min(p[y],r.scrollViewSize/2));if(c>0&&Math.ceil(r.scrollStart)>=c){D(l,r,y,r.scrollMaxSize-r.offsetEnd-q.reduce(pe,0));return}let f=0,C=r.scrollStart-r.offsetStart,F=C;if(C<=T&&C+r.scrollViewSize>=E.value)C-=E.value,f=M.value.from,F=C;else for(let b=0;C>=q[b]&&f<y;b++)C-=q[b],f+=W;for(;C>0&&f<y;)C-=p[f],C>-r.scrollViewSize?(f++,F=C):F=p[f]+C;D(l,r,f,F)}function D(l,r,y,T,c){const f=typeof c=="string"&&c.indexOf("-force")>-1,C=f===!0?c.replace("-force",""):c,F=C!==void 0?C:"start";let b=Math.max(0,y-v.value[F]),N=b+v.value.total;N>e.value&&(N=e.value,b=Math.max(0,N-v.value.total)),z=r.scrollStart;const ne=b!==M.value.from||N!==M.value.to;if(ne===!1&&C===void 0){G(y);return}const{activeElement:Fe}=document,U=O.value;ne===!0&&U!==null&&U!==Fe&&U.contains(Fe)===!0&&(U.addEventListener("focusout",ge),setTimeout(()=>{U!==null&&U.removeEventListener("focusout",ge)})),Zl(U,y-b);const Ie=C!==void 0?p.slice(b,y).reduce(pe,0):0;if(ne===!0){const ce=N>=M.value.from&&b<=M.value.to?M.value.to:N;M.value={from:b,to:ce},E.value=Me(q,p,0,b),P.value=Me(q,p,N,e.value),requestAnimationFrame(()=>{M.value.to!==N&&z===r.scrollStart&&(M.value={from:M.value.from,to:N},P.value=Me(q,p,N,e.value))})}requestAnimationFrame(()=>{if(z!==r.scrollStart)return;ne===!0&&re(b);const ce=p.slice(b,y).reduce(pe,0),de=ce+r.offsetStart+E.value,Le=de+p[y];let ze=de+T;if(C!==void 0){const Qe=ce-Ie,Ae=r.scrollStart+Qe;ze=f!==!0&&Ae<de&&Le<Ae+r.scrollViewSize?Ae:C==="end"?Le-r.scrollViewSize:de-(C==="start"?0:Math.round((r.scrollViewSize-p[y])/2))}z=ze,Et(l,ze,i.virtualScrollHorizontal,h.lang.rtl),G(y)})}function re(l){const r=O.value;if(r){const y=Lt.call(r.children,b=>b.classList&&b.classList.contains("q-virtual-scroll--skip")===!1),T=y.length,c=i.virtualScrollHorizontal===!0?b=>b.getBoundingClientRect().width:b=>b.offsetHeight;let f=l,C,F;for(let b=0;b<T;){for(C=c(y[b]),b++;b<T&&y[b].classList.contains("q-virtual-scroll--with-prev")===!0;)C+=c(y[b]),b++;F=C-p[f],F!==0&&(p[f]+=F,q[Math.floor(f/W)]+=F),f++}}}function ge(){O.value!==null&&O.value!==void 0&&O.value.focus()}function le(l,r){const y=1*s.value;(r===!0||Array.isArray(p)===!1)&&(p=[]);const T=p.length;p.length=e.value;for(let f=e.value-1;f>=T;f--)p[f]=y;const c=Math.floor((e.value-1)/W);q=[];for(let f=0;f<=c;f++){let C=0;const F=Math.min((f+1)*W,e.value);for(let b=f*W;b<F;b++)C+=p[b];q.push(C)}d=-1,z=void 0,E.value=Me(q,p,0,M.value.from),P.value=Me(q,p,M.value.to,e.value),l>=0?(re(M.value.from),oe(()=>{J(l)})):ee()}function H(l){if(l===void 0&&typeof window<"u"){const C=n();C!=null&&C.nodeType!==8&&(l=lt(C,o(),R.value,Q.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}k=l;const r=parseFloat(i.virtualScrollSliceRatioBefore)||0,y=parseFloat(i.virtualScrollSliceRatioAfter)||0,T=1+r+y,c=l===void 0||l<=0?1:Math.ceil(l/s.value),f=Math.max(1,c,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/T));v.value={total:Math.ceil(f*T),start:Math.ceil(f*r),center:Math.ceil(f*(.5+r)),end:Math.ceil(f*(1+r)),view:c}}function se(l,r){const y=i.virtualScrollHorizontal===!0?"width":"height",T={["--q-virtual-scroll-item-"+y]:s.value+"px"};return[l==="tbody"?V(l,{class:"q-virtual-scroll__padding",key:"before",ref:R},[V("tr",[V("td",{style:{[y]:`${E.value}px`,...T},colspan:he.value})])]):V(l,{class:"q-virtual-scroll__padding",key:"before",ref:R,style:{[y]:`${E.value}px`,...T}}),V(l,{class:"q-virtual-scroll__content",key:"content",ref:O,tabindex:-1},r.flat()),l==="tbody"?V(l,{class:"q-virtual-scroll__padding",key:"after",ref:Q},[V("tr",[V("td",{style:{[y]:`${P.value}px`,...T},colspan:he.value})])]):V(l,{class:"q-virtual-scroll__padding",key:"after",ref:Q,style:{[y]:`${P.value}px`,...T}})]}function G(l){d!==l&&(i.onVirtualScroll!==void 0&&x("virtualScroll",{index:l,from:M.value.from,to:M.value.to-1,direction:l<d?"decrease":"increase",ref:w}),d=l)}H();const ee=Sl(Z,h.platform.is.ios===!0?120:35);hl(()=>{H()});let te=!1;return gl(()=>{te=!0}),yl(()=>{if(te!==!0)return;const l=n();z!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?Et(l,z,i.virtualScrollHorizontal,h.lang.rtl):J(d)}),je(()=>{ee.cancel()}),Object.assign(w,{scrollTo:J,reset:Y,refresh:ae}),{virtualScrollSliceRange:M,virtualScrollSliceSizeComputed:v,setVirtualScrollSize:H,onVirtualScrollEvt:ee,localResetVirtualScroll:le,padVirtualScroll:se,scrollTo:J,reset:Y,refresh:ae}}const Mt=e=>["add","add-unique","toggle"].includes(e),tn=".*+?^${}()|[]\\",ln=Object.keys(ot);var sn=Ke({name:"QSelect",inheritAttrs:!1,props:{...Gl,...nl,...ot,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Mt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...Bt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:n,emit:o}){const{proxy:s}=Ne(),{$q:g}=s,i=L(!1),x=L(!1),w=L(-1),h=L(""),z=L(!1),d=L(!1);let k=null,q=null,p,E,P,v=null,R,Q,O,M;const he=L(null),B=L(null),K=L(null),Y=L(null),ae=L(null),J=ol(e),Z=ul(mt),D=S(()=>Array.isArray(e.options)?e.options.length:0),re=S(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ge,virtualScrollSliceSizeComputed:le,localResetVirtualScroll:H,padVirtualScroll:se,onVirtualScrollEvt:G,scrollTo:ee,setVirtualScrollSize:te}=en({virtualScrollLength:D,getVirtualScrollTarget:Dt,getVirtualScrollEl:ft,virtualScrollItemSizeComputed:re}),l=It(),r=S(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,a=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&p!==void 0?p:[],m=a.map(_=>Rt(_,u));return e.modelValue===null&&t===!0?m.filter(_=>_!==null):m}return a}),y=S(()=>{const t={};return ln.forEach(a=>{const u=e[a];u!==void 0&&(t[a]=u)}),t}),T=S(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),c=S(()=>bt(r.value)),f=S(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||r.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),C=S(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),F=S(()=>D.value===0),b=S(()=>r.value.map(t=>j.value(t)).join(", ")),N=S(()=>e.displayValue!==void 0?e.displayValue:b.value),ne=S(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Fe=S(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||r.value.some(ne.value))),U=S(()=>l.focused.value===!0?e.tabindex:-1),Ie=S(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return w.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${w.value}`),t}),ce=S(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),de=S(()=>r.value.map((t,a)=>({index:a,opt:t,html:ne.value(t),selected:!0,removeAtIndex:Pt,toggleOption:fe,tabindex:U.value}))),Le=S(()=>{if(D.value===0)return[];const{from:t,to:a}=ge.value;return e.options.slice(t,a).map((u,m)=>{const _=ye.value(u)===!0,A=t+m,I={clickable:!0,active:!1,activeClass:Ae.value,manualFocus:!0,focused:!1,disable:_,tabindex:-1,dense:e.optionsDense,dark:T.value,role:"option",id:`${l.targetUid.value}_${A}`,onClick:()=>{fe(u)}};return _!==!0&&(Xe(u)===!0&&(I.active=!0),w.value===A&&(I.focused=!0),I["aria-selected"]=I.active===!0?"true":"false",g.platform.is.desktop===!0&&(I.onMousemove=()=>{i.value===!0&&be(A)})),{index:A,opt:u,html:ne.value(u),label:j.value(u),selected:I.active,focused:I.focused,toggleOption:fe,setOptionIndex:be,itemProps:I}})}),ze=S(()=>e.dropdownIcon!==void 0?e.dropdownIcon:g.iconSet.arrow.dropdown),Qe=S(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ae=S(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),X=S(()=>Ue(e.optionValue,"value")),j=S(()=>Ue(e.optionLabel,"label")),ye=S(()=>Ue(e.optionDisable,"disable")),Oe=S(()=>r.value.map(t=>X.value(t))),Ht=S(()=>{const t={onInput:mt,onChange:Z,onKeydown:dt,onKeyup:st,onKeypress:ct,onFocus:at,onClick(a){E===!0&&ke(a)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Z,t});ie(r,t=>{p=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(x.value!==!0&&i.value!==!0||c.value!==!0)&&(P!==!0&&xe(),(x.value===!0||i.value===!0)&&we(""))},{immediate:!0}),ie(()=>e.fillInput,xe),ie(i,Ye),ie(D,Gt);function ut(t){return e.emitValue===!0?X.value(t):t}function We(t){if(t>-1&&t<r.value.length)if(e.multiple===!0){const a=e.modelValue.slice();o("remove",{index:t,value:a.splice(t,1)[0]}),o("update:modelValue",a)}else o("update:modelValue",null)}function Pt(t){We(t),l.focus()}function it(t,a){const u=ut(t);if(e.multiple!==!0){e.fillInput===!0&&Te(j.value(t),!0,!0),o("update:modelValue",u);return}if(r.value.length===0){o("add",{index:0,value:u}),o("update:modelValue",e.multiple===!0?[u]:u);return}if(a===!0&&Xe(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const m=e.modelValue.slice();o("add",{index:m.length,value:u}),m.push(u),o("update:modelValue",m)}function fe(t,a){if(l.editable.value!==!0||t===void 0||ye.value(t)===!0)return;const u=X.value(t);if(e.multiple!==!0){a!==!0&&(Te(e.fillInput===!0?j.value(t):"",!0,!0),ve()),B.value!==null&&B.value.focus(),(r.value.length===0||_e(X.value(r.value[0]),u)!==!0)&&o("update:modelValue",e.emitValue===!0?u:t);return}if((E!==!0||z.value===!0)&&l.focus(),at(),r.value.length===0){const A=e.emitValue===!0?u:t;o("add",{index:0,value:A}),o("update:modelValue",e.multiple===!0?[A]:A);return}const m=e.modelValue.slice(),_=Oe.value.findIndex(A=>_e(A,u));if(_>-1)o("remove",{index:_,value:m.splice(_,1)[0]});else{if(e.maxValues!==void 0&&m.length>=e.maxValues)return;const A=e.emitValue===!0?u:t;o("add",{index:m.length,value:A}),m.push(A)}o("update:modelValue",m)}function be(t){if(g.platform.is.desktop!==!0)return;const a=t>-1&&t<D.value?t:-1;w.value!==a&&(w.value=a)}function He(t=1,a){if(i.value===!0){let u=w.value;do u=kt(u+t,-1,D.value-1);while(u!==-1&&u!==w.value&&ye.value(e.options[u])===!0);w.value!==u&&(be(u),ee(u),a!==!0&&e.useInput===!0&&e.fillInput===!0&&Pe(u>=0?j.value(e.options[u]):R,!0))}}function Rt(t,a){const u=m=>_e(X.value(m),t);return e.options.find(u)||a.find(u)||t}function Ue(t,a){const u=t!==void 0?t:a;return typeof u=="function"?u:m=>m!==null&&typeof m=="object"&&u in m?m[u]:m}function Xe(t){const a=X.value(t);return Oe.value.find(u=>_e(u,a))!==void 0}function at(t){e.useInput===!0&&B.value!==null&&(t===void 0||B.value===t.target&&t.target.value===b.value)&&B.value.select()}function rt(t){Cl(t,27)===!0&&i.value===!0&&(ke(t),ve(),xe()),o("keyup",t)}function st(t){const{value:a}=t.target;if(t.keyCode!==void 0){rt(t);return}if(t.target.value="",k!==null&&(clearTimeout(k),k=null),q!==null&&(clearTimeout(q),q=null),xe(),typeof a=="string"&&a.length!==0){const u=a.toLocaleLowerCase(),m=A=>{const I=e.options.find($=>A.value($).toLocaleLowerCase()===u);return I===void 0?!1:(r.value.indexOf(I)===-1?fe(I):ve(),!0)},_=A=>{m(X)!==!0&&(m(j)===!0||A===!0||we(a,!0,()=>_(!0)))};_()}else l.clearValue(t)}function ct(t){o("keypress",t)}function dt(t){if(o("keydown",t),Vl(t)===!0)return;const a=h.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(w.value>-1||a===!0);if(t.keyCode===27){Ze(t);return}if(t.keyCode===9&&u===!1){Ce();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){ue(t),Ve();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?We(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&o("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(ue(t),w.value=-1,He(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&le.value!==void 0&&(ue(t),w.value=Math.max(-1,Math.min(D.value,w.value+(t.keyCode===33?-1:1)*le.value.view)),He(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ue(t),He(t.keyCode===38?-1:1,e.multiple));const m=D.value;if((O===void 0||M<Date.now())&&(O=""),m>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||O.length!==0)){i.value!==!0&&Ve(t);const _=t.key.toLocaleLowerCase(),A=O.length===1&&O[0]===_;M=Date.now()+1500,A===!1&&(ue(t),O+=_);const I=new RegExp("^"+O.split("").map(Je=>tn.indexOf(Je)>-1?"\\"+Je:Je).join(".*"),"i");let $=w.value;if(A===!0||$<0||I.test(j.value(e.options[$]))!==!0)do $=kt($+1,-1,m-1);while($!==w.value&&(ye.value(e.options[$])===!0||I.test(j.value(e.options[$]))!==!0));w.value!==$&&oe(()=>{be($),ee($),$>=0&&e.useInput===!0&&e.fillInput===!0&&Pe(j.value(e.options[$]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||O!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ue(t),w.value>-1&&w.value<m){fe(e.options[w.value]);return}if(a===!0){const _=(A,I)=>{if(I){if(Mt(I)!==!0)return}else I=e.newValueMode;if(Te("",e.multiple!==!0,!0),A==null)return;(I==="toggle"?fe:it)(A,I==="add-unique"),e.multiple!==!0&&(B.value!==null&&B.value.focus(),ve())};if(e.onNewValue!==void 0?o("newValue",h.value,_):_(h.value),e.multiple!==!0)return}i.value===!0?Ce():l.innerLoading.value!==!0&&Ve()}}function ft(){return E===!0?ae.value:K.value!==null&&K.value.contentEl!==null?K.value.contentEl:void 0}function Dt(){return ft()}function $t(){return e.hideSelected===!0?[]:n["selected-item"]!==void 0?de.value.map(t=>n["selected-item"](t)).slice():n.selected!==void 0?[].concat(n.selected()):e.useChips===!0?de.value.map((t,a)=>V(Kl,{key:"option-"+a,removable:l.editable.value===!0&&ye.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:U.value,onRemove(){t.removeAtIndex(a)}},()=>V("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:j.value(t.opt)}))):[V("span",{[Fe.value===!0?"innerHTML":"textContent"]:N.value})]}function vt(){if(F.value===!0)return n["no-option"]!==void 0?n["no-option"]({inputValue:h.value}):void 0;const t=n.option!==void 0?n.option:u=>V(Rl,{key:u.index,...u.itemProps},()=>V(Hl,()=>V(Pl,()=>V("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let a=se("div",Le.value.map(t));return n["before-options"]!==void 0&&(a=n["before-options"]().concat(a)),xl(n["after-options"],a)}function Kt(t,a){const u=a===!0?{...Ie.value,...l.splitAttrs.attributes.value}:void 0,m={ref:a===!0?B:void 0,key:"i_t",class:f.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...u,id:a===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Ht.value};return t!==!0&&E===!0&&(Array.isArray(m.class)===!0?m.class=[...m.class,"no-pointer-events"]:m.class+=" no-pointer-events"),V("input",m)}function mt(t){k!==null&&(clearTimeout(k),k=null),q!==null&&(clearTimeout(q),q=null),!(t&&t.target&&t.target.qComposing===!0)&&(Pe(t.target.value||""),P=!0,R=h.value,l.focused.value!==!0&&(E!==!0||z.value===!0)&&l.focus(),e.onFilter!==void 0&&(k=setTimeout(()=>{k=null,we(h.value)},e.inputDebounce)))}function Pe(t,a){h.value!==t&&(h.value=t,a===!0||e.inputDebounce===0||e.inputDebounce==="0"?o("inputValue",t):q=setTimeout(()=>{q=null,o("inputValue",t)},e.inputDebounce))}function Te(t,a,u){P=u!==!0,e.useInput===!0&&(Pe(t,!0),(a===!0||u!==!0)&&(R=t),a!==!0&&we(t))}function we(t,a,u){if(e.onFilter===void 0||a!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?o("filterAbort"):(l.innerLoading.value=!0,d.value=!0),t!==""&&e.multiple!==!0&&r.value.length!==0&&P!==!0&&t===j.value(r.value[0])&&(t="");const m=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);v!==null&&clearTimeout(v),v=m,o("filter",t,(_,A)=>{(a===!0||l.focused.value===!0)&&v===m&&(clearTimeout(v),typeof _=="function"&&_(),d.value=!1,oe(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(a===!0?i.value===!0&&ve():i.value===!0?Ye(!0):i.value=!0),typeof A=="function"&&oe(()=>{A(s)}),typeof u=="function"&&oe(()=>{u(s)})}))},()=>{l.focused.value===!0&&v===m&&(clearTimeout(v),l.innerLoading.value=!1,d.value=!1),i.value===!0&&(i.value=!1)})}function Nt(){return V(Ol,{ref:K,class:C.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&F.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:T.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Qe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ce.value,onScrollPassive:G,onBeforeShow:ht,onBeforeHide:jt,onShow:Qt},vt)}function jt(t){gt(t),Ce()}function Qt(){te()}function Wt(t){ke(t),B.value!==null&&B.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Ut(t){ke(t),oe(()=>{z.value=!1})}function Xt(){const t=[V(Dl,{class:`col-auto ${l.fieldClass.value}`,...y.value,for:l.targetUid.value,dark:T.value,square:!0,loading:d.value,itemAligned:!1,filled:!0,stackLabel:h.value.length!==0,...l.splitAttrs.listeners.value,onFocus:Wt,onBlur:Ut},{...n,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(V("div",{ref:ae,class:C.value+" scroll",style:e.popupContentStyle,...ce.value,onClick:Ze,onScrollPassive:G},vt())),V(Yl,{ref:Y,modelValue:x.value,position:e.useInput===!0?"top":void 0,transitionShow:Q,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:ht,onBeforeHide:Yt,onHide:Jt,onShow:Zt},()=>V("div",{class:"q-select__dialog"+(T.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function Yt(t){gt(t),Y.value!==null&&Y.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Jt(t){ve(),l.focused.value===!1&&o("blur",t),xe()}function Zt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&B.value!==null&&B.value!==t&&B.value.focus(),te()}function Ce(){x.value!==!0&&(w.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(v!==null&&(clearTimeout(v),v=null),l.innerLoading.value===!0&&(o("filterAbort"),l.innerLoading.value=!1,d.value=!1)))}function Ve(t){l.editable.value===!0&&(E===!0?(l.onControlFocusin(t),x.value=!0,oe(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?we(h.value):(F.value!==!0||n["no-option"]!==void 0)&&(i.value=!0))}function ve(){x.value=!1,Ce()}function xe(){e.useInput===!0&&Te(e.multiple!==!0&&e.fillInput===!0&&r.value.length!==0&&j.value(r.value[0])||"",!0,!0)}function Ye(t){let a=-1;if(t===!0){if(r.value.length!==0){const u=X.value(r.value[0]);a=e.options.findIndex(m=>_e(X.value(m),u))}H(a)}be(a)}function Gt(t,a){i.value===!0&&l.innerLoading.value===!1&&(H(-1,!0),oe(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>a?H():Ye(!0))}))}function St(){x.value===!1&&K.value!==null&&K.value.updatePosition()}function ht(t){t!==void 0&&ke(t),o("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function gt(t){t!==void 0&&ke(t),o("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function yt(){E=g.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?n["no-option"]!==void 0||e.onFilter!==void 0||F.value===!1:!0),Q=g.platform.is.ios===!0&&E===!0&&e.useInput===!0?"fade":e.transitionShow}return bl(yt),wl(St),yt(),je(()=>{k!==null&&clearTimeout(k),q!==null&&clearTimeout(q)}),Object.assign(s,{showPopup:Ve,hidePopup:ve,removeAtIndex:We,add:it,toggleOption:fe,getOptionIndex:()=>w.value,setOptionIndex:be,moveOptionSelection:He,filter:we,updateMenuPosition:St,updateInputValue:Te,isOptionSelected:Xe,getEmittingOptionValue:ut,isOptionDisabled:(...t)=>ye.value.apply(null,t)===!0,getOptionValue:(...t)=>X.value.apply(null,t),getOptionLabel:(...t)=>j.value.apply(null,t)}),Object.assign(l,{innerValue:r,fieldClass:S(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:he,targetRef:B,hasValue:c,showPopup:Ve,floatingLabel:S(()=>e.hideSelected!==!0&&c.value===!0||typeof h.value=="number"||h.value.length!==0||bt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(x.value===!0||F.value!==!0||n["no-option"]!==void 0))return E===!0?Xt():Nt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{xe(),Ce()})},onClick(t){if(Ze(t),E!==!0&&i.value===!0){Ce(),B.value!==null&&B.value.focus();return}Ve(t)}},getControl:t=>{const a=$t(),u=t===!0||x.value!==!0||E!==!0;if(e.useInput===!0)a.push(Kt(t,u));else if(l.editable.value===!0){const _=u===!0?Ie.value:void 0;a.push(V("input",{ref:u===!0?B:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:N.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,..._,onKeydown:dt,onKeyup:rt,onKeypress:ct})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&a.push(V("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:st}))}if(J.value!==void 0&&e.disable!==!0&&Oe.value.length!==0){const _=Oe.value.map(A=>V("option",{value:A,selected:!0}));a.push(V("select",{class:"hidden",name:J.value,multiple:e.multiple},_))}const m=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return V("div",{class:"q-field__native row items-center",...m,...l.splitAttrs.listeners.value},a)},getInnerAppend:()=>e.loading!==!0&&d.value!==!0&&e.hideDropdownIcon!==!0?[V($e,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:ze.value})]:null}),Ft(l)}});export{sn as Q,Ul as a,an as b,Yl as c,Gl as d,en as e,rn as f,Nl as u};
