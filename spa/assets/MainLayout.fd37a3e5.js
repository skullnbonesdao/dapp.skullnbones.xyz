import{t as U,u as s,v as C,w as he,x as Le,y as W,z as me,A as _,C as x,D as be,E as St,F as J,G as at,H as lt,I as zt,J as wt,K as te,L as _t,M as ce,N as _e,O as Qe,Q as qe,R as Me,S as Ce,T as qt,U as Ct,V as xt,X as Tt,Y as ot,Z as G,$ as He,a0 as Ee,a1 as nt,a2 as kt,a3 as $t,a4 as de,a5 as Pt,a6 as it,a7 as X,a8 as Be,a9 as q,aa as fe,ab as Mt,ac as Bt,ad as ae,ae as k,af as le,ag as Lt,ah as De,ai as ve,aj as Ot,ak as Qt,al as Ae,am as Ve,an as Fe,ao as Re,ap as Ht,aq as We}from"./index.4de59bb1.js";import{Q as Et,a as Dt}from"./QSeparator.f0397cfa.js";import{Q as je}from"./QSpace.0aca1934.js";import{Q as ie,g as At,a as Vt,b as Ft,c as Rt,u as rt,d as ut,s as xe,e as Ne,f as Wt,h as jt,i as Nt,j as It,k as Te,l as Ie,m as ke,n as oe,o as Xe,p as Xt,C as Yt}from"./ClosePopup.bafabe87.js";import{g as Ye,s as Ue}from"./touch.3df10340.js";import{b as Y,u as Ut,a as Kt}from"./use-prevent-scroll.43b5c216.js";var Ke=U({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:c}){const u=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:u.value},he(c.default))}}),Gt=U({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:c}){const u=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:u.value,role:"toolbar"},he(c.default))}}),Jt=U({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:c,emit:u}){const{proxy:{$q:d}}=J(),t=Le(me,W);if(t===W)return console.error("QHeader needs to be child of QLayout"),W;const l=_(parseInt(e.heightHint,10)),n=_(!0),a=s(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||d.platform.is.ios&&t.isContainer.value===!0),h=s(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return n.value===!0?l.value:0;const f=l.value-t.scroll.value.position;return f>0?f:0}),v=s(()=>e.modelValue!==!0||a.value===!0&&n.value!==!0),i=s(()=>e.modelValue===!0&&v.value===!0&&e.reveal===!0),T=s(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(v.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=s(()=>{const f=t.rows.value.top,M={};return f[0]==="l"&&t.left.space===!0&&(M[d.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(M[d.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),M});function b(f,M){t.update("header",f,M)}function g(f,M){f.value!==M&&(f.value=M)}function L({height:f}){g(l,f),b("size",f)}function P(f){i.value===!0&&g(n,!0),u("focusin",f)}x(()=>e.modelValue,f=>{b("space",f),g(n,!0),t.animate()}),x(h,f=>{b("offset",f)}),x(()=>e.reveal,f=>{f===!1&&g(n,e.modelValue)}),x(n,f=>{t.animate(),u("reveal",f)}),x(t.scroll,f=>{e.reveal===!0&&g(n,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&b("size",l.value),b("space",e.modelValue),b("offset",h.value),be(()=>{t.instances.header===w&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const f=St(c.default,[]);return e.elevated===!0&&f.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(C(ie,{debounce:0,onResize:L})),C("header",{class:T.value,style:S.value,onFocusin:P},f)}}});const{passive:Ge}=zt,Zt=["both","horizontal","vertical"];var st=U({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Zt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:c}){const u={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let d=null,t,l;x(()=>e.scrollTarget,()=>{h(),a()});function n(){d!==null&&d();const T=Math.max(0,Vt(t)),S=Ft(t),b={top:T-u.position.top,left:S-u.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const g=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";u.position={top:T,left:S},u.directionChanged=u.direction!==g,u.delta=b,u.directionChanged===!0&&(u.direction=g,u.inflectionPoint=u.position),c("scroll",{...u})}function a(){t=At(l,e.scrollTarget),t.addEventListener("scroll",v,Ge),v(!0)}function h(){t!==void 0&&(t.removeEventListener("scroll",v,Ge),t=void 0)}function v(T){if(T===!0||e.debounce===0||e.debounce==="0")n();else if(d===null){const[S,b]=e.debounce?[setTimeout(n,e.debounce),clearTimeout]:[requestAnimationFrame(n),cancelAnimationFrame];d=()=>{b(S),d=null}}}const{proxy:i}=J();return x(()=>i.$q.lang.rtl,n),at(()=>{l=i.$el.parentNode,a()}),be(()=>{d!==null&&d(),h()}),Object.assign(i,{trigger:v,getPosition:()=>u}),lt}});function $e(e,c,u){const d=Me(e);let t,l=d.left-c.event.x,n=d.top-c.event.y,a=Math.abs(l),h=Math.abs(n);const v=c.direction;v.horizontal===!0&&v.vertical!==!0?t=l<0?"left":"right":v.horizontal!==!0&&v.vertical===!0?t=n<0?"up":"down":v.up===!0&&n<0?(t="up",a>h&&(v.left===!0&&l<0?t="left":v.right===!0&&l>0&&(t="right"))):v.down===!0&&n>0?(t="down",a>h&&(v.left===!0&&l<0?t="left":v.right===!0&&l>0&&(t="right"))):v.left===!0&&l<0?(t="left",a<h&&(v.up===!0&&n<0?t="up":v.down===!0&&n>0&&(t="down"))):v.right===!0&&l>0&&(t="right",a<h&&(v.up===!0&&n<0?t="up":v.down===!0&&n>0&&(t="down")));let i=!1;if(t===void 0&&u===!1){if(c.event.isFirst===!0||c.event.lastDir===void 0)return{};t=c.event.lastDir,i=!0,t==="left"||t==="right"?(d.left-=l,a=0,l=0):(d.top-=n,h=0,n=0)}return{synthetic:i,payload:{evt:e,touch:c.event.mouse!==!0,mouse:c.event.mouse===!0,position:d,direction:t,isFirst:c.event.isFirst,isFinal:u===!0,duration:Date.now()-c.event.time,distance:{x:a,y:h},offset:{x:l,y:n},delta:{x:d.left-c.event.lastX,y:d.top-c.event.lastY}}}}let ea=0;var ne=wt({name:"touch-pan",beforeMount(e,{value:c,modifiers:u}){if(u.mouse!==!0&&te.has.touch!==!0)return;function d(l,n){u.mouse===!0&&n===!0?qt(l):(u.stop===!0&&qe(l),u.prevent===!0&&Qe(l))}const t={uid:"qvtp_"+ea++,handler:c,modifiers:u,direction:Ye(u),noop:lt,mouseStart(l){Ue(l,t)&&_t(l)&&(ce(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Ue(l,t)){const n=l.target;ce(t,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,n){if(te.is.firefox===!0&&_e(e,!0),t.lastEvt=l,n===!0||u.stop===!0){if(t.direction.all!==!0&&(n!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const v=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Qe(v),l.cancelBubble===!0&&qe(v),Object.assign(v,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:v}}qe(l)}const{left:a,top:h}=Me(l);t.event={x:a,y:h,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:h}},move(l){if(t.event===void 0)return;const n=Me(l),a=n.left-t.event.x,h=n.top-t.event.y;if(a===0&&h===0)return;t.lastEvt=l;const v=t.event.mouse===!0,i=()=>{d(l,v);let b;u.preserveCursor!==!0&&u.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),v===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Rt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),v===!0){const L=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{L(),g()},50):L()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&d(l,t.event.mouse);const{payload:b,synthetic:g}=$e(l,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=g===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||v===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(l);return}const T=Math.abs(a),S=Math.abs(h);T!==S&&(t.direction.horizontal===!0&&T>S||t.direction.vertical===!0&&T<S||t.direction.up===!0&&T<S&&h<0||t.direction.down===!0&&T<S&&h>0||t.direction.left===!0&&T>S&&a<0||t.direction.right===!0&&T>S&&a>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,n){if(t.event!==void 0){if(Ce(t,"temp"),te.is.firefox===!0&&_e(e,!1),n===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler($e(l===void 0?t.lastEvt:l,t).payload);const{payload:a}=$e(l===void 0?t.lastEvt:l,t,!0),h=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(h):h()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,u.mouse===!0){const l=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";ce(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}te.has.touch===!0&&ce(t,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,c){const u=e.__qtouchpan;u!==void 0&&(c.oldValue!==c.value&&(typeof value!="function"&&u.end(),u.handler=c.value),u.direction=Ye(c.modifiers))},beforeUnmount(e){const c=e.__qtouchpan;c!==void 0&&(c.event!==void 0&&c.end(),Ce(c,"main"),Ce(c,"temp"),te.is.firefox===!0&&_e(e,!1),c.styleCleanup!==void 0&&c.styleCleanup(),delete e.__qtouchpan)}});const Je=["vertical","horizontal"],Pe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ze={prevent:!0,mouse:!0,mouseAllDir:!0},et=e=>e>=250?50:Math.ceil(e/5);var ta=U({name:"QScrollArea",props:{...rt,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:c,emit:u}){const d=_(!1),t=_(!1),l=_(!1),n={vertical:_(0),horizontal:_(0)},a={vertical:{ref:_(null),position:_(0),size:_(0)},horizontal:{ref:_(null),position:_(0),size:_(0)}},{proxy:h}=J(),v=ut(e,h.$q);let i=null,T;const S=_(null),b=s(()=>"q-scrollarea"+(v.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=s(()=>{const r=a.vertical.size.value-n.vertical.value;if(r<=0)return 0;const m=Y(a.vertical.position.value/r,0,1);return Math.round(m*1e4)/1e4}),a.vertical.thumbHidden=s(()=>(e.visible===null?l.value:e.visible)!==!0&&d.value===!1&&t.value===!1||a.vertical.size.value<=n.vertical.value+1),a.vertical.thumbStart=s(()=>a.vertical.percentage.value*(n.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=s(()=>Math.round(Y(n.vertical.value*n.vertical.value/a.vertical.size.value,et(n.vertical.value),n.vertical.value))),a.vertical.style=s(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=s(()=>{const r=a.horizontal.size.value-n.horizontal.value;if(r<=0)return 0;const m=Y(Math.abs(a.horizontal.position.value)/r,0,1);return Math.round(m*1e4)/1e4}),a.horizontal.thumbHidden=s(()=>(e.visible===null?l.value:e.visible)!==!0&&d.value===!1&&t.value===!1||a.horizontal.size.value<=n.horizontal.value+1),a.horizontal.thumbStart=s(()=>a.horizontal.percentage.value*(n.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=s(()=>Math.round(Y(n.horizontal.value*n.horizontal.value/a.horizontal.size.value,et(n.horizontal.value),n.horizontal.value))),a.horizontal.style=s(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[h.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const g=s(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),L=[[ne,r=>{A(r,"vertical")},void 0,{vertical:!0,...Ze}]],P=[[ne,r=>{A(r,"horizontal")},void 0,{horizontal:!0,...Ze}]];function w(){const r={};return Je.forEach(m=>{const z=a[m];r[m+"Position"]=z.position.value,r[m+"Percentage"]=z.percentage.value,r[m+"Size"]=z.size.value,r[m+"ContainerSize"]=n[m].value}),r}const f=Ct(()=>{const r=w();r.ref=h,u("scroll",r)},0);function M(r,m,z){if(Je.includes(r)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(r==="vertical"?Ne:xe)(S.value,m,z)}function y({height:r,width:m}){let z=!1;n.vertical.value!==r&&(n.vertical.value=r,z=!0),n.horizontal.value!==m&&(n.horizontal.value=m,z=!0),z===!0&&D()}function $({position:r}){let m=!1;a.vertical.position.value!==r.top&&(a.vertical.position.value=r.top,m=!0),a.horizontal.position.value!==r.left&&(a.horizontal.position.value=r.left,m=!0),m===!0&&D()}function B({height:r,width:m}){a.horizontal.size.value!==m&&(a.horizontal.size.value=m,D()),a.vertical.size.value!==r&&(a.vertical.size.value=r,D())}function A(r,m){const z=a[m];if(r.isFirst===!0){if(z.thumbHidden.value===!0)return;T=z.position.value,t.value=!0}else if(t.value!==!0)return;r.isFinal===!0&&(t.value=!1);const R=Pe[m],K=n[m].value,ge=(z.size.value-K)/(K-z.thumbSize.value),ue=r.distance[R.dist],ye=T+(r.direction===R.dir?1:-1)*ue*ge;Z(ye,m)}function j(r,m){const z=a[m];if(z.thumbHidden.value!==!0){const R=r[Pe[m].offset];if(R<z.thumbStart.value||R>z.thumbStart.value+z.thumbSize.value){const K=R-z.thumbSize.value/2;Z(K/n[m].value*z.size.value,m)}z.ref.value!==null&&z.ref.value.dispatchEvent(new MouseEvent(r.type,r))}}function V(r){j(r,"vertical")}function E(r){j(r,"horizontal")}function D(){d.value=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,d.value=!1},e.delay),e.onScroll!==void 0&&f()}function Z(r,m){S.value[Pe[m].scroll]=r}let O=null;function ee(){O!==null&&clearTimeout(O),O=setTimeout(()=>{O=null,l.value=!0},h.$q.platform.is.ios?50:0)}function re(){O!==null&&(clearTimeout(O),O=null),l.value=!1}let F=null;return x(()=>h.$q.lang.rtl,r=>{S.value!==null&&xe(S.value,Math.abs(a.horizontal.position.value)*(r===!0?-1:1))}),xt(()=>{F={top:a.vertical.position.value,left:a.horizontal.position.value}}),Tt(()=>{if(F===null)return;const r=S.value;r!==null&&(xe(r,F.left),Ne(r,F.top))}),be(f.cancel),Object.assign(h,{getScrollTarget:()=>S.value,getScroll:w,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:M,setScrollPercentage(r,m,z){M(r,m*(a[r].size.value-n[r].value)*(r==="horizontal"&&h.$q.lang.rtl===!0?-1:1),z)}}),()=>C("div",{class:b.value,onMouseenter:ee,onMouseleave:re},[C("div",{ref:S,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[C("div",{class:"q-scrollarea__content absolute",style:g.value},ot(c.default,[C(ie,{debounce:0,onResize:B})])),C(st,{axis:"both",onScroll:$})]),C(ie,{debounce:0,onResize:y}),C("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:V}),C("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:E}),G(C("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),L),G(C("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),P)])}});const tt=150;var aa=U({name:"QDrawer",inheritAttrs:!1,props:{...Wt,...rt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...jt,"onLayout","miniState"],setup(e,{slots:c,emit:u,attrs:d}){const t=J(),{proxy:{$q:l}}=t,n=ut(e,l),{preventBodyScroll:a}=Kt(),{registerTimeout:h,removeTimeout:v}=Nt(),i=Le(me,W);if(i===W)return console.error("QDrawer needs to be child of QLayout"),W;let T,S=null,b;const g=_(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),L=s(()=>e.mini===!0&&g.value!==!0),P=s(()=>L.value===!0?e.miniWidth:e.width),w=_(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),f=s(()=>e.persistent!==!0&&(g.value===!0||R.value===!0));function M(o,p){if(A(),o!==!1&&i.animate(),H(0),g.value===!0){const Q=i.instances[F.value];Q!==void 0&&Q.belowBreakpoint===!0&&Q.hide(!1),N(1),i.isContainer.value!==!0&&a(!0)}else N(0),o!==!1&&Se(!1);h(()=>{o!==!1&&Se(!0),p!==!0&&u("show",o)},tt)}function y(o,p){j(),o!==!1&&i.animate(),N(0),H(D.value*P.value),ze(),p!==!0?h(()=>{u("hide",o)},tt):v()}const{show:$,hide:B}=It({showing:w,hideOnRouteChange:f,handleShow:M,handleHide:y}),{addToHistory:A,removeFromHistory:j}=Ut(w,B,f),V={belowBreakpoint:g,hide:B},E=s(()=>e.side==="right"),D=s(()=>(l.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),Z=_(0),O=_(!1),ee=_(!1),re=_(P.value*D.value),F=s(()=>E.value===!0?"left":"right"),r=s(()=>w.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:P.value:0),m=s(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(E.value?"R":"L")>-1||l.platform.is.ios===!0&&i.isContainer.value===!0),z=s(()=>e.overlay===!1&&w.value===!0&&g.value===!1),R=s(()=>e.overlay===!0&&w.value===!0&&g.value===!1),K=s(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&O.value===!1?" hidden":"")),ge=s(()=>({backgroundColor:`rgba(0,0,0,${Z.value*.4})`})),ue=s(()=>E.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),ye=s(()=>E.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),ct=s(()=>{const o={};return i.header.space===!0&&ue.value===!1&&(m.value===!0?o.top=`${i.header.offset}px`:i.header.space===!0&&(o.top=`${i.header.size}px`)),i.footer.space===!0&&ye.value===!1&&(m.value===!0?o.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(o.bottom=`${i.footer.size}px`)),o}),dt=s(()=>{const o={width:`${P.value}px`,transform:`translateX(${re.value}px)`};return g.value===!0?o:Object.assign(o,ct.value)}),vt=s(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),ft=s(()=>`q-drawer q-drawer--${e.side}`+(ee.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(O.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${L.value===!0?"mini":"standard"}`+(m.value===!0||z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ue.value===!0?" q-drawer--top-padding":""))),ht=s(()=>{const o=l.lang.rtl===!0?e.side:F.value;return[[ne,yt,void 0,{[o]:!0,mouse:!0}]]}),mt=s(()=>{const o=l.lang.rtl===!0?F.value:e.side;return[[ne,Oe,void 0,{[o]:!0,mouse:!0}]]}),bt=s(()=>{const o=l.lang.rtl===!0?F.value:e.side;return[[ne,Oe,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function pe(){pt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}x(g,o=>{o===!0?(T=w.value,w.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&T!==!1&&(w.value===!0?(H(0),N(0),ze()):$(!1))}),x(()=>e.side,(o,p)=>{i.instances[p]===V&&(i.instances[p]=void 0,i[p].space=!1,i[p].offset=0),i.instances[o]=V,i[o].size=P.value,i[o].space=z.value,i[o].offset=r.value}),x(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&pe()}),x(()=>e.behavior+e.breakpoint,pe),x(i.isContainer,o=>{w.value===!0&&a(o!==!0),o===!0&&pe()}),x(i.scrollbarWidth,()=>{H(w.value===!0?0:void 0)}),x(r,o=>{I("offset",o)}),x(z,o=>{u("onLayout",o),I("space",o)}),x(E,()=>{H()}),x(P,o=>{H(),we(e.miniToOverlay,o)}),x(()=>e.miniToOverlay,o=>{we(o,P.value)}),x(()=>l.lang.rtl,()=>{H()}),x(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(gt(),i.animate())}),x(L,o=>{u("miniState",o)});function H(o){o===void 0?He(()=>{o=w.value===!0?0:P.value,H(D.value*o)}):(i.isContainer.value===!0&&E.value===!0&&(g.value===!0||Math.abs(o)===P.value)&&(o+=D.value*i.scrollbarWidth.value),re.value=o)}function N(o){Z.value=o}function Se(o){const p=o===!0?"remove":i.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function gt(){S!==null&&clearTimeout(S),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ee.value=!0,S=setTimeout(()=>{S=null,ee.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function yt(o){if(w.value!==!1)return;const p=P.value,Q=Y(o.distance.x,0,p);if(o.isFinal===!0){Q>=Math.min(75,p)===!0?$():(i.animate(),N(0),H(D.value*p)),O.value=!1;return}H((l.lang.rtl===!0?E.value!==!0:E.value)?Math.max(p-Q,0):Math.min(0,Q-p)),N(Y(Q/p,0,1)),o.isFirst===!0&&(O.value=!0)}function Oe(o){if(w.value!==!0)return;const p=P.value,Q=o.direction===e.side,se=(l.lang.rtl===!0?Q!==!0:Q)?Y(o.distance.x,0,p):0;if(o.isFinal===!0){Math.abs(se)<Math.min(75,p)===!0?(i.animate(),N(1),H(0)):B(),O.value=!1;return}H(D.value*se),N(Y(1-se/p,0,1)),o.isFirst===!0&&(O.value=!0)}function ze(){a(!1),Se(!0)}function I(o,p){i.update(e.side,o,p)}function pt(o,p){o.value!==p&&(o.value=p)}function we(o,p){I("size",o===!0?e.miniWidth:p)}return i.instances[e.side]=V,we(e.miniToOverlay,P.value),I("space",z.value),I("offset",r.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),at(()=>{u("onLayout",z.value),u("miniState",L.value),T=e.showIfAbove===!0;const o=()=>{(w.value===!0?M:y)(!1,!0)};if(i.totalWidth.value!==0){He(o);return}b=x(i.totalWidth,()=>{b(),b=void 0,w.value===!1&&e.showIfAbove===!0&&g.value===!1?$(!1):o()})}),be(()=>{b!==void 0&&b(),S!==null&&(clearTimeout(S),S=null),w.value===!0&&ze(),i.instances[e.side]===V&&(i.instances[e.side]=void 0,I("size",0),I("offset",0),I("space",!1))}),()=>{const o=[];g.value===!0&&(e.noSwipeOpen===!1&&o.push(G(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ht.value)),o.push(Ee("div",{ref:"backdrop",class:K.value,style:ge.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>bt.value)));const p=L.value===!0&&c.mini!==void 0,Q=[C("div",{...d,key:""+p,class:[vt.value,d.class]},p===!0?c.mini():he(c.default))];return e.elevated===!0&&w.value===!0&&Q.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Ee("aside",{ref:"content",class:ft.value,style:dt.value},Q,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>mt.value)),C("div",{class:"q-drawer-container"},o)}}}),la=U({name:"QPageContainer",setup(e,{slots:c}){const{proxy:{$q:u}}=J(),d=Le(me,W);if(d===W)return console.error("QPageContainer needs to be child of QLayout"),W;nt(kt,!0);const t=s(()=>{const l={};return d.header.space===!0&&(l.paddingTop=`${d.header.size}px`),d.right.space===!0&&(l[`padding${u.lang.rtl===!0?"Left":"Right"}`]=`${d.right.size}px`),d.footer.space===!0&&(l.paddingBottom=`${d.footer.size}px`),d.left.space===!0&&(l[`padding${u.lang.rtl===!0?"Right":"Left"}`]=`${d.left.size}px`),l});return()=>C("div",{class:"q-page-container",style:t.value},he(c.default))}}),oa=U({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:c,emit:u}){const{proxy:{$q:d}}=J(),t=_(null),l=_(d.screen.height),n=_(e.container===!0?0:d.screen.width),a=_({position:0,direction:"down",inflectionPoint:0}),h=_(0),v=_($t.value===!0?0:Te()),i=s(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),T=s(()=>e.container===!1?{minHeight:d.screen.height+"px"}:null),S=s(()=>v.value!==0?{[d.lang.rtl===!0?"left":"right"]:`${v.value}px`}:null),b=s(()=>v.value!==0?{[d.lang.rtl===!0?"right":"left"]:0,[d.lang.rtl===!0?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null);function g(y){if(e.container===!0||document.qScrollPrevented!==!0){const $={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};a.value=$,e.onScroll!==void 0&&u("scroll",$)}}function L(y){const{height:$,width:B}=y;let A=!1;l.value!==$&&(A=!0,l.value=$,e.onScrollHeight!==void 0&&u("scrollHeight",$),w()),n.value!==B&&(A=!0,n.value=B),A===!0&&e.onResize!==void 0&&u("resize",y)}function P({height:y}){h.value!==y&&(h.value=y,w())}function w(){if(e.container===!0){const y=l.value>h.value?Te():0;v.value!==y&&(v.value=y)}}let f=null;const M={instances:{},view:s(()=>e.view),isContainer:s(()=>e.container),rootRef:t,height:l,containerHeight:h,scrollbarWidth:v,totalWidth:s(()=>n.value+v.value),rows:s(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:de({size:0,offset:0,space:!1}),right:de({size:300,offset:0,space:!1}),footer:de({size:0,offset:0,space:!1}),left:de({size:300,offset:0,space:!1}),scroll:a,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,$,B){M[y][$]=B}};if(nt(me,M),Te()>0){let B=function(){y=null,$.classList.remove("hide-scrollbar")},A=function(){if(y===null){if($.scrollHeight>d.screen.height)return;$.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(B,300)},j=function(V){y!==null&&V==="remove"&&(clearTimeout(y),B()),window[`${V}EventListener`]("resize",A)},y=null;const $=document.body;x(()=>e.container!==!0?"add":"remove",j),e.container!==!0&&j("add"),Pt(()=>{j("remove")})}return()=>{const y=ot(c.default,[C(st,{onScroll:g}),C(ie,{onResize:L})]),$=C("div",{class:i.value,style:T.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(ie,{onResize:P}),C("div",{class:"absolute-full",style:S.value},[C("div",{class:"scroll",style:b.value},[$])])]):$}}});const na={class:"q-pb-xs"},ia=it({__name:"WalletButton",setup(e){return _(!0),(c,u)=>(X(),Be("div",na,[q(fe(Mt),{class:"",dark:""})]))}});const ra={class:"q-gutter-sm row items-center no-wrap"},ma=it({__name:"MainLayout",setup(e){const c=_(!1);_("");function u(){c.value=!c.value}x(()=>le().rpc_selected,()=>{le().connection=new Lt(le().rpc_selected.url)});const d=_([{icon:"home",text:"Home",to:"/"},{icon:"contrast",text:"Whitelist",to:"/whitelist"},{icon:"local_activity",text:"Raffle",to:"/raffle"}]);return(t,l)=>{const n=Bt("router-view");return X(),ae(oa,{view:"hHh lpR fFf",class:"bg-black text-white"},{default:k(()=>[q(Jt,{elevated:"",class:"bg-black q-py-xs","height-hint":"58"},{default:k(()=>[q(Gt,null,{default:k(()=>[q(De,{flat:"",dense:"",round:"",onClick:u,"aria-label":"Menu",icon:"menu"}),t.$q.screen.gt.xs?(X(),ae(De,{key:0,flat:"","no-caps":"","no-wrap":"",class:"q-ml-xs"},{default:k(()=>[q(Et,{src:"public/snb_icon.svg",width:"50px"}),q(Ke,{shrink:"",class:"text-weight-bold"},{default:k(()=>[ve(" dAPP S&B ")]),_:1}),q(Ke,{shrink:""},{default:k(()=>[ve("for educational purposes")]),_:1})]),_:1})):Ot("",!0),q(je),q(je),Qt("div",ra,[q(ia)])]),_:1}),q(Dt,{class:"bg-white"})]),_:1}),q(aa,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=a=>c.value=a),"show-if-above":"",bordered:"",width:240,class:"fit bg-black text-white"},{default:k(()=>[q(ta,{class:"fit"},{default:k(()=>[q(Ie,{padding:""},{default:k(()=>[(X(!0),Be(Re,null,Ae(d.value,a=>G((X(),ae(ke,{to:a.to,key:a.text,clickable:"",class:"flex"},{default:k(()=>[q(oe,{avatar:""},{default:k(()=>[q(Ve,{color:"grey",name:a.icon},null,8,["name"])]),_:2},1024),q(oe,null,{default:k(()=>[q(Xe,null,{default:k(()=>[ve(Fe(a.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),[[We]])),128)),G((X(),ae(ke,{clickable:"",class:"flex"},{default:k(()=>[q(oe,{avatar:""},{default:k(()=>[q(Ve,{color:"grey",name:"sensors"})]),_:1}),q(oe,null,{default:k(()=>[q(Xt,{label:fe(le)().rpc_selected.name},{default:k(()=>[q(Ie,null,{default:k(()=>[(X(!0),Be(Re,null,Ae(fe(Ht),a=>G((X(),ae(ke,{clickable:"",key:a,onClick:h=>fe(le)().rpc_selected=a},{default:k(()=>[q(oe,null,{default:k(()=>[q(Xe,null,{default:k(()=>[ve(Fe(a.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[Yt]])),128))]),_:1})]),_:1},8,["label"])]),_:1})]),_:1})),[[We]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),q(la,null,{default:k(()=>[q(n)]),_:1})]),_:1})}}});export{ma as default};
