import{bZ as Z,ah as d,aF as C,b_ as ge,aJ as Ae,b$ as N,c0 as ye,J as q,bs as x,aT as _e,c1 as zt,aC as te,aX as ot,c2 as it,c3 as wt,c4 as qt,c5 as oe,c6 as Ct,c7 as he,c8 as Te,c9 as Re,ca as $e,cb as He,cc as Pe,cd as xt,ce as kt,aV as Tt,aR as $t,cf as rt,bz as se,aQ as Fe,cg as We,b3 as nt,ch as Pt,ci as Bt,H as me,a$ as Qt,au as Se,b1 as K,ai as ne,bx as $,al as R,a1 as be,V as H,cj as ee,ak as Ve,as as g,ar as re,ck as pe,cl as Mt,b9 as Lt,cm as je,aj as Ie,Z as Ot,cn as Ht,b7 as Vt,co as At,a6 as Et,cp as ie,cq as Dt,cr as Be,cs as Rt}from"./index.746aaf4d.js";import{Q as Ft}from"./QImg.26e5b13c.js";import{Q as I}from"./QSpace.54493202.js";import{Q as Ne}from"./QSeparator.34e714e3.js";import{Q as ce}from"./QResizeObserver.4f8c7bdd.js";import{u as ut,a as st,Q as ct}from"./use-key-composition.af6a996d.js";import{g as Wt,a as jt,b as It,c as Nt,s as Qe,d as Xe,u as Xt,e as Ut,f as Yt,h as Kt,i as Me,Q as Ue,j as Ye,k as Jt}from"./rtl.31b4687e.js";import{Q as Zt}from"./QList.b6ffa8f2.js";import{g as Ke,s as Je}from"./touch.3df10340.js";import{b as J,u as Gt,a as ea,Q as ta}from"./QSelect.87e9c2b4.js";import{Q as Ee}from"./QBadge.1f9c4539.js";import{C as aa}from"./ClosePopup.5db8e51b.js";import{Q as la}from"./QToggle.9d043f2f.js";import"./use-checkbox.9665ac38.js";var Ze=Z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:v}){const r=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:r.value},ge(v.default))}}),oa=Z({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:v}){const r=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:r.value,role:"toolbar"},ge(v.default))}}),ia=Z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:v,emit:r}){const{proxy:{$q:c}}=te(),t=Ae(ye,N);if(t===N)return console.error("QHeader needs to be child of QLayout"),N;const l=q(parseInt(e.heightHint,10)),o=q(!0),a=d(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||c.platform.is.ios&&t.isContainer.value===!0),h=d(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return o.value===!0?l.value:0;const f=l.value-t.scroll.value.position;return f>0?f:0}),s=d(()=>e.modelValue!==!0||a.value===!0&&o.value!==!0),n=d(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),k=d(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=d(()=>{const f=t.rows.value.top,B={};return f[0]==="l"&&t.left.space===!0&&(B[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(B[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),B});function b(f,B){t.update("header",f,B)}function p(f,B){f.value!==B&&(f.value=B)}function M({height:f}){p(l,f),b("size",f)}function P(f){n.value===!0&&p(o,!0),r("focusin",f)}x(()=>e.modelValue,f=>{b("space",f),p(o,!0),t.animate()}),x(h,f=>{b("offset",f)}),x(()=>e.reveal,f=>{f===!1&&p(o,e.modelValue)}),x(o,f=>{t.animate(),r("reveal",f)}),x(t.scroll,f=>{e.reveal===!0&&p(o,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&b("size",l.value),b("space",e.modelValue),b("offset",h.value),_e(()=>{t.instances.header===w&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const f=zt(v.default,[]);return e.elevated===!0&&f.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(C(ce,{debounce:0,onResize:M})),C("header",{class:k.value,style:S.value,onFocusin:P},f)}}});const{passive:Ge}=wt,ra=["both","horizontal","vertical"];var dt=Z({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ra.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:v}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,t,l;x(()=>e.scrollTarget,()=>{h(),a()});function o(){c!==null&&c();const k=Math.max(0,jt(t)),S=It(t),b={top:k-r.position.top,left:S-r.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const p=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";r.position={top:k,left:S},r.directionChanged=r.direction!==p,r.delta=b,r.directionChanged===!0&&(r.direction=p,r.inflectionPoint=r.position),v("scroll",{...r})}function a(){t=Wt(l,e.scrollTarget),t.addEventListener("scroll",s,Ge),s(!0)}function h(){t!==void 0&&(t.removeEventListener("scroll",s,Ge),t=void 0)}function s(k){if(k===!0||e.debounce===0||e.debounce==="0")o();else if(c===null){const[S,b]=e.debounce?[setTimeout(o,e.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];c=()=>{b(S),c=null}}}const{proxy:n}=te();return x(()=>n.$q.lang.rtl,o),ot(()=>{l=n.$el.parentNode,a()}),_e(()=>{c!==null&&c(),h()}),Object.assign(n,{trigger:s,getPosition:()=>r}),it}});function Le(e,v,r){const c=He(e);let t,l=c.left-v.event.x,o=c.top-v.event.y,a=Math.abs(l),h=Math.abs(o);const s=v.direction;s.horizontal===!0&&s.vertical!==!0?t=l<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=o<0?"up":"down":s.up===!0&&o<0?(t="up",a>h&&(s.left===!0&&l<0?t="left":s.right===!0&&l>0&&(t="right"))):s.down===!0&&o>0?(t="down",a>h&&(s.left===!0&&l<0?t="left":s.right===!0&&l>0&&(t="right"))):s.left===!0&&l<0?(t="left",a<h&&(s.up===!0&&o<0?t="up":s.down===!0&&o>0&&(t="down"))):s.right===!0&&l>0&&(t="right",a<h&&(s.up===!0&&o<0?t="up":s.down===!0&&o>0&&(t="down")));let n=!1;if(t===void 0&&r===!1){if(v.event.isFirst===!0||v.event.lastDir===void 0)return{};t=v.event.lastDir,n=!0,t==="left"||t==="right"?(c.left-=l,a=0,l=0):(c.top-=o,h=0,o=0)}return{synthetic:n,payload:{evt:e,touch:v.event.mouse!==!0,mouse:v.event.mouse===!0,position:c,direction:t,isFirst:v.event.isFirst,isFinal:r===!0,duration:Date.now()-v.event.time,distance:{x:a,y:h},offset:{x:l,y:o},delta:{x:c.left-v.event.lastX,y:c.top-v.event.lastY}}}}let na=0;var ue=qt({name:"touch-pan",beforeMount(e,{value:v,modifiers:r}){if(r.mouse!==!0&&oe.has.touch!==!0)return;function c(l,o){r.mouse===!0&&o===!0?xt(l):(r.stop===!0&&$e(l),r.prevent===!0&&Re(l))}const t={uid:"qvtp_"+na++,handler:v,modifiers:r,direction:Ke(r),noop:it,mouseStart(l){Je(l,t)&&Ct(l)&&(he(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Je(l,t)){const o=l.target;he(t,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,o){if(oe.is.firefox===!0&&Te(e,!0),t.lastEvt=l,o===!0||r.stop===!0){if(t.direction.all!==!0&&(o!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Re(s),l.cancelBubble===!0&&$e(s),Object.assign(s,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:s}}$e(l)}const{left:a,top:h}=He(l);t.event={x:a,y:h,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:h}},move(l){if(t.event===void 0)return;const o=He(l),a=o.left-t.event.x,h=o.top-t.event.y;if(a===0&&h===0)return;t.lastEvt=l;const s=t.event.mouse===!0,n=()=>{c(l,s);let b;r.preserveCursor!==!0&&r.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Nt(),t.styleCleanup=p=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),s===!0){const M=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{M(),p()},50):M()}else p!==void 0&&p()}};if(t.event.detected===!0){t.event.isFirst!==!0&&c(l,t.event.mouse);const{payload:b,synthetic:p}=Le(l,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&n(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=p===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){n(),t.event.detected=!0,t.move(l);return}const k=Math.abs(a),S=Math.abs(h);k!==S&&(t.direction.horizontal===!0&&k>S||t.direction.vertical===!0&&k<S||t.direction.up===!0&&k<S&&h<0||t.direction.down===!0&&k<S&&h>0||t.direction.left===!0&&k>S&&a<0||t.direction.right===!0&&k>S&&a>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,o){if(t.event!==void 0){if(Pe(t,"temp"),oe.is.firefox===!0&&Te(e,!1),o===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(l===void 0?t.lastEvt:l,t).payload);const{payload:a}=Le(l===void 0?t.lastEvt:l,t,!0),h=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(h):h()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,r.mouse===!0){const l=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";he(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}oe.has.touch===!0&&he(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,v){const r=e.__qtouchpan;r!==void 0&&(v.oldValue!==v.value&&(typeof value!="function"&&r.end(),r.handler=v.value),r.direction=Ke(v.modifiers))},beforeUnmount(e){const v=e.__qtouchpan;v!==void 0&&(v.event!==void 0&&v.end(),Pe(v,"main"),Pe(v,"temp"),oe.is.firefox===!0&&Te(e,!1),v.styleCleanup!==void 0&&v.styleCleanup(),delete e.__qtouchpan)}});const et=["vertical","horizontal"],Oe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},tt={prevent:!0,mouse:!0,mouseAllDir:!0},at=e=>e>=250?50:Math.ceil(e/5);var ua=Z({name:"QScrollArea",props:{...ut,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:v,emit:r}){const c=q(!1),t=q(!1),l=q(!1),o={vertical:q(0),horizontal:q(0)},a={vertical:{ref:q(null),position:q(0),size:q(0)},horizontal:{ref:q(null),position:q(0),size:q(0)}},{proxy:h}=te(),s=st(e,h.$q);let n=null,k;const S=q(null),b=d(()=>"q-scrollarea"+(s.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=d(()=>{const u=a.vertical.size.value-o.vertical.value;if(u<=0)return 0;const m=J(a.vertical.position.value/u,0,1);return Math.round(m*1e4)/1e4}),a.vertical.thumbHidden=d(()=>(e.visible===null?l.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.vertical.size.value<=o.vertical.value+1),a.vertical.thumbStart=d(()=>a.vertical.percentage.value*(o.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=d(()=>Math.round(J(o.vertical.value*o.vertical.value/a.vertical.size.value,at(o.vertical.value),o.vertical.value))),a.vertical.style=d(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=d(()=>{const u=a.horizontal.size.value-o.horizontal.value;if(u<=0)return 0;const m=J(Math.abs(a.horizontal.position.value)/u,0,1);return Math.round(m*1e4)/1e4}),a.horizontal.thumbHidden=d(()=>(e.visible===null?l.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.horizontal.size.value<=o.horizontal.value+1),a.horizontal.thumbStart=d(()=>a.horizontal.percentage.value*(o.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=d(()=>Math.round(J(o.horizontal.value*o.horizontal.value/a.horizontal.size.value,at(o.horizontal.value),o.horizontal.value))),a.horizontal.style=d(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[h.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const p=d(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),M=[[ue,u=>{D(u,"vertical")},void 0,{vertical:!0,...tt}]],P=[[ue,u=>{D(u,"horizontal")},void 0,{horizontal:!0,...tt}]];function w(){const u={};return et.forEach(m=>{const z=a[m];u[m+"Position"]=z.position.value,u[m+"Percentage"]=z.percentage.value,u[m+"Size"]=z.size.value,u[m+"ContainerSize"]=o[m].value}),u}const f=kt(()=>{const u=w();u.ref=h,r("scroll",u)},0);function B(u,m,z){if(et.includes(u)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(u==="vertical"?Xe:Qe)(S.value,m,z)}function y({height:u,width:m}){let z=!1;o.vertical.value!==u&&(o.vertical.value=u,z=!0),o.horizontal.value!==m&&(o.horizontal.value=m,z=!0),z===!0&&E()}function T({position:u}){let m=!1;a.vertical.position.value!==u.top&&(a.vertical.position.value=u.top,m=!0),a.horizontal.position.value!==u.left&&(a.horizontal.position.value=u.left,m=!0),m===!0&&E()}function Q({height:u,width:m}){a.horizontal.size.value!==m&&(a.horizontal.size.value=m,E()),a.vertical.size.value!==u&&(a.vertical.size.value=u,E())}function D(u,m){const z=a[m];if(u.isFirst===!0){if(z.thumbHidden.value===!0)return;k=z.position.value,t.value=!0}else if(t.value!==!0)return;u.isFinal===!0&&(t.value=!1);const j=Oe[m],G=o[m].value,ze=(z.size.value-G)/(G-z.thumbSize.value),ve=u.distance[j.dist],we=k+(u.direction===j.dir?1:-1)*ve*ze;ae(we,m)}function X(u,m){const z=a[m];if(z.thumbHidden.value!==!0){const j=u[Oe[m].offset];if(j<z.thumbStart.value||j>z.thumbStart.value+z.thumbSize.value){const G=j-z.thumbSize.value/2;ae(G/o[m].value*z.size.value,m)}z.ref.value!==null&&z.ref.value.dispatchEvent(new MouseEvent(u.type,u))}}function F(u){X(u,"vertical")}function A(u){X(u,"horizontal")}function E(){c.value=!0,n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,c.value=!1},e.delay),e.onScroll!==void 0&&f()}function ae(u,m){S.value[Oe[m].scroll]=u}let L=null;function le(){L!==null&&clearTimeout(L),L=setTimeout(()=>{L=null,l.value=!0},h.$q.platform.is.ios?50:0)}function de(){L!==null&&(clearTimeout(L),L=null),l.value=!1}let W=null;return x(()=>h.$q.lang.rtl,u=>{S.value!==null&&Qe(S.value,Math.abs(a.horizontal.position.value)*(u===!0?-1:1))}),Tt(()=>{W={top:a.vertical.position.value,left:a.horizontal.position.value}}),$t(()=>{if(W===null)return;const u=S.value;u!==null&&(Qe(u,W.left),Xe(u,W.top))}),_e(f.cancel),Object.assign(h,{getScrollTarget:()=>S.value,getScroll:w,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:B,setScrollPercentage(u,m,z){B(u,m*(a[u].size.value-o[u].value)*(u==="horizontal"&&h.$q.lang.rtl===!0?-1:1),z)}}),()=>C("div",{class:b.value,onMouseenter:le,onMouseleave:de},[C("div",{ref:S,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[C("div",{class:"q-scrollarea__content absolute",style:p.value},rt(v.default,[C(ce,{debounce:0,onResize:Q})])),C(dt,{axis:"both",onScroll:T})]),C(ce,{debounce:0,onResize:y}),C("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:F}),C("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:A}),se(C("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),M),se(C("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),P)])}});const lt=150;var sa=Z({name:"QDrawer",inheritAttrs:!1,props:{...Xt,...ut,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ut,"onLayout","miniState"],setup(e,{slots:v,emit:r,attrs:c}){const t=te(),{proxy:{$q:l}}=t,o=st(e,l),{preventBodyScroll:a}=ea(),{registerTimeout:h,removeTimeout:s}=Yt(),n=Ae(ye,N);if(n===N)return console.error("QDrawer needs to be child of QLayout"),N;let k,S=null,b;const p=q(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),M=d(()=>e.mini===!0&&p.value!==!0),P=d(()=>M.value===!0?e.miniWidth:e.width),w=q(e.showIfAbove===!0&&p.value===!1?!0:e.modelValue===!0),f=d(()=>e.persistent!==!0&&(p.value===!0||j.value===!0));function B(i,_){if(D(),i!==!1&&n.animate(),V(0),p.value===!0){const O=n.instances[W.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),U(1),n.isContainer.value!==!0&&a(!0)}else U(0),i!==!1&&Ce(!1);h(()=>{i!==!1&&Ce(!0),_!==!0&&r("show",i)},lt)}function y(i,_){X(),i!==!1&&n.animate(),U(0),V(E.value*P.value),xe(),_!==!0?h(()=>{r("hide",i)},lt):s()}const{show:T,hide:Q}=Kt({showing:w,hideOnRouteChange:f,handleShow:B,handleHide:y}),{addToHistory:D,removeFromHistory:X}=Gt(w,Q,f),F={belowBreakpoint:p,hide:Q},A=d(()=>e.side==="right"),E=d(()=>(l.lang.rtl===!0?-1:1)*(A.value===!0?1:-1)),ae=q(0),L=q(!1),le=q(!1),de=q(P.value*E.value),W=d(()=>A.value===!0?"left":"right"),u=d(()=>w.value===!0&&p.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:P.value:0),m=d(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(A.value?"R":"L")>-1||l.platform.is.ios===!0&&n.isContainer.value===!0),z=d(()=>e.overlay===!1&&w.value===!0&&p.value===!1),j=d(()=>e.overlay===!0&&w.value===!0&&p.value===!1),G=d(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&L.value===!1?" hidden":"")),ze=d(()=>({backgroundColor:`rgba(0,0,0,${ae.value*.4})`})),ve=d(()=>A.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),we=d(()=>A.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),vt=d(()=>{const i={};return n.header.space===!0&&ve.value===!1&&(m.value===!0?i.top=`${n.header.offset}px`:n.header.space===!0&&(i.top=`${n.header.size}px`)),n.footer.space===!0&&we.value===!1&&(m.value===!0?i.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(i.bottom=`${n.footer.size}px`)),i}),ft=d(()=>{const i={width:`${P.value}px`,transform:`translateX(${de.value}px)`};return p.value===!0?i:Object.assign(i,vt.value)}),ht=d(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),mt=d(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(o.value===!0?" q-drawer--dark q-dark":"")+(L.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(p.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${M.value===!0?"mini":"standard"}`+(m.value===!0||z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ve.value===!0?" q-drawer--top-padding":""))),bt=d(()=>{const i=l.lang.rtl===!0?e.side:W.value;return[[ue,_t,void 0,{[i]:!0,mouse:!0}]]}),pt=d(()=>{const i=l.lang.rtl===!0?W.value:e.side;return[[ue,De,void 0,{[i]:!0,mouse:!0}]]}),gt=d(()=>{const i=l.lang.rtl===!0?W.value:e.side;return[[ue,De,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function qe(){St(p,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}x(p,i=>{i===!0?(k=w.value,w.value===!0&&Q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&k!==!1&&(w.value===!0?(V(0),U(0),xe()):T(!1))}),x(()=>e.side,(i,_)=>{n.instances[_]===F&&(n.instances[_]=void 0,n[_].space=!1,n[_].offset=0),n.instances[i]=F,n[i].size=P.value,n[i].space=z.value,n[i].offset=u.value}),x(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&qe()}),x(()=>e.behavior+e.breakpoint,qe),x(n.isContainer,i=>{w.value===!0&&a(i!==!0),i===!0&&qe()}),x(n.scrollbarWidth,()=>{V(w.value===!0?0:void 0)}),x(u,i=>{Y("offset",i)}),x(z,i=>{r("onLayout",i),Y("space",i)}),x(A,()=>{V()}),x(P,i=>{V(),ke(e.miniToOverlay,i)}),x(()=>e.miniToOverlay,i=>{ke(i,P.value)}),x(()=>l.lang.rtl,()=>{V()}),x(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(yt(),n.animate())}),x(M,i=>{r("miniState",i)});function V(i){i===void 0?Fe(()=>{i=w.value===!0?0:P.value,V(E.value*i)}):(n.isContainer.value===!0&&A.value===!0&&(p.value===!0||Math.abs(i)===P.value)&&(i+=E.value*n.scrollbarWidth.value),de.value=i)}function U(i){ae.value=i}function Ce(i){const _=i===!0?"remove":n.isContainer.value!==!0?"add":"";_!==""&&document.body.classList[_]("q-body--drawer-toggle")}function yt(){S!==null&&clearTimeout(S),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,S=setTimeout(()=>{S=null,le.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function _t(i){if(w.value!==!1)return;const _=P.value,O=J(i.distance.x,0,_);if(i.isFinal===!0){O>=Math.min(75,_)===!0?T():(n.animate(),U(0),V(E.value*_)),L.value=!1;return}V((l.lang.rtl===!0?A.value!==!0:A.value)?Math.max(_-O,0):Math.min(0,O-_)),U(J(O/_,0,1)),i.isFirst===!0&&(L.value=!0)}function De(i){if(w.value!==!0)return;const _=P.value,O=i.direction===e.side,fe=(l.lang.rtl===!0?O!==!0:O)?J(i.distance.x,0,_):0;if(i.isFinal===!0){Math.abs(fe)<Math.min(75,_)===!0?(n.animate(),U(1),V(0)):Q(),L.value=!1;return}V(E.value*fe),U(J(1-fe/_,0,1)),i.isFirst===!0&&(L.value=!0)}function xe(){a(!1),Ce(!0)}function Y(i,_){n.update(e.side,i,_)}function St(i,_){i.value!==_&&(i.value=_)}function ke(i,_){Y("size",i===!0?e.miniWidth:_)}return n.instances[e.side]=F,ke(e.miniToOverlay,P.value),Y("space",z.value),Y("offset",u.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),ot(()=>{r("onLayout",z.value),r("miniState",M.value),k=e.showIfAbove===!0;const i=()=>{(w.value===!0?B:y)(!1,!0)};if(n.totalWidth.value!==0){Fe(i);return}b=x(n.totalWidth,()=>{b(),b=void 0,w.value===!1&&e.showIfAbove===!0&&p.value===!1?T(!1):i()})}),_e(()=>{b!==void 0&&b(),S!==null&&(clearTimeout(S),S=null),w.value===!0&&xe(),n.instances[e.side]===F&&(n.instances[e.side]=void 0,Y("size",0),Y("offset",0),Y("space",!1))}),()=>{const i=[];p.value===!0&&(e.noSwipeOpen===!1&&i.push(se(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),bt.value)),i.push(We("div",{ref:"backdrop",class:G.value,style:ze.value,"aria-hidden":"true",onClick:Q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>gt.value)));const _=M.value===!0&&v.mini!==void 0,O=[C("div",{...c,key:""+_,class:[ht.value,c.class]},_===!0?v.mini():ge(v.default))];return e.elevated===!0&&w.value===!0&&O.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(We("aside",{ref:"content",class:mt.value,style:ft.value},O,"contentclose",e.noSwipeClose!==!0&&p.value===!0,()=>pt.value)),C("div",{class:"q-drawer-container"},i)}}}),ca=Z({name:"QPageContainer",setup(e,{slots:v}){const{proxy:{$q:r}}=te(),c=Ae(ye,N);if(c===N)return console.error("QPageContainer needs to be child of QLayout"),N;nt(Pt,!0);const t=d(()=>{const l={};return c.header.space===!0&&(l.paddingTop=`${c.header.size}px`),c.right.space===!0&&(l[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${c.right.size}px`),c.footer.space===!0&&(l.paddingBottom=`${c.footer.size}px`),c.left.space===!0&&(l[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${c.left.size}px`),l});return()=>C("div",{class:"q-page-container",style:t.value},ge(v.default))}}),da=Z({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:v,emit:r}){const{proxy:{$q:c}}=te(),t=q(null),l=q(c.screen.height),o=q(e.container===!0?0:c.screen.width),a=q({position:0,direction:"down",inflectionPoint:0}),h=q(0),s=q(Bt.value===!0?0:Me()),n=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=d(()=>e.container===!1?{minHeight:c.screen.height+"px"}:null),S=d(()=>s.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),b=d(()=>s.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function p(y){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};a.value=T,e.onScroll!==void 0&&r("scroll",T)}}function M(y){const{height:T,width:Q}=y;let D=!1;l.value!==T&&(D=!0,l.value=T,e.onScrollHeight!==void 0&&r("scrollHeight",T),w()),o.value!==Q&&(D=!0,o.value=Q),D===!0&&e.onResize!==void 0&&r("resize",y)}function P({height:y}){h.value!==y&&(h.value=y,w())}function w(){if(e.container===!0){const y=l.value>h.value?Me():0;s.value!==y&&(s.value=y)}}let f=null;const B={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:t,height:l,containerHeight:h,scrollbarWidth:s,totalWidth:d(()=>o.value+s.value),rows:d(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:me({size:0,offset:0,space:!1}),right:me({size:300,offset:0,space:!1}),footer:me({size:0,offset:0,space:!1}),left:me({size:300,offset:0,space:!1}),scroll:a,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,T,Q){B[y][T]=Q}};if(nt(ye,B),Me()>0){let Q=function(){y=null,T.classList.remove("hide-scrollbar")},D=function(){if(y===null){if(T.scrollHeight>c.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(Q,300)},X=function(F){y!==null&&F==="remove"&&(clearTimeout(y),Q()),window[`${F}EventListener`]("resize",D)},y=null;const T=document.body;x(()=>e.container!==!0?"add":"remove",X),e.container!==!0&&X("add"),Qt(()=>{X("remove")})}return()=>{const y=rt(v.default,[C(dt,{onScroll:p}),C(ce,{onResize:M})]),T=C("div",{class:n.value,style:k.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(ce,{onResize:P}),C("div",{class:"absolute-full",style:S.value},[C("div",{class:"scroll",style:b.value},[T])])]):T}}});const va="0.6.6",fa={style:{"font-size":"12px"}},ha=Se({__name:"SquadsBadge",setup(e){return(v,r)=>(K(),ne(Ee,{color:"","text-color":"black"},{default:$(()=>{var c;return[R("div",fa,be((c=H(ee)().store.find(t=>t.value==H(ee)().multisigPDA))==null?void 0:c.label),1)]}),_:1}))}}),ma={class:"row"},ba={class:"col items-center"},pa=R("div",{class:"col text-center"},"Sign As:",-1),ga=Se({__name:"SquadsButton",setup(e){return(v,r)=>(K(),Ve("div",ma,[g(la,{dense:"",label:"",modelValue:H(ee)().useSquads,"onUpdate:modelValue":r[0]||(r[0]=c=>H(ee)().useSquads=c),"checked-icon":"check","unchecked-icon":"clear"},null,8,["modelValue"]),R("div",ba,[pa,g(ha)])]))}}),ya={class:"row items-center q-gutter-x-md"},_a=R("div",{class:"text-subtitle2"},"Whitelisted",-1),Sa={class:"col"},za=Se({__name:"WhitelistInicator",setup(e){return(v,r)=>(K(),ne(ct,{square:"",flat:"",class:"q-pa-sm bg-transparent"},{default:$(()=>[R("div",ya,[_a,R("div",Sa,[g(Ee,{class:"",color:H(pe)().check_wallet_whitelisted?"green":"red"},{default:$(()=>[re(be(H(pe)().check_wallet_whitelisted),1)]),_:1},8,["color"])])])]),_:1}))}});const wa={class:"row"},qa={key:0,class:"row"},Ca={class:"row"},xa={class:"col absolute-bottom q-ma-md q-gutter-y-md"},ka={class:"row"},Wa=Se({__name:"MainLayout",setup(e){const v=q(!1);q("");const r=Mt(),c=q(va);function t(){v.value=!v.value}x(()=>ie().rpc_stored_name,()=>{ie().update_connection(),r.notify({timeout:5e3,message:`Using RPC: ${ie().rpc_selected.name}`,position:"bottom-right",color:"orange"})});const l=d(()=>{let o=[];return o.push({icon:"home",text:"Home",to:"/"}),o.push({icon:"content_cut",text:"Cut",to:"/cut"}),(pe().check_wallet_whitelisted||Be().is_admin)&&o.push({icon:"work",text:"Jobs",to:"/jobs"}),(pe().check_wallet_whitelisted||Be().is_admin)&&o.push({icon:"local_activity",text:"Raffle",to:"/raffle"}),o.push({icon:"generating_tokens",text:"TokenFactory",to:"/token"}),o.push({icon:"inventory_2",text:"Wrapper",to:"/wrapper"}),o.push({icon:"lock_clock",text:"StarAtlasLocker",to:"/locker"}),o.push({icon:"diversity_3",text:"Squads.so",to:"/squads"}),Be().is_admin&&o.push({icon:"contrast",text:"Whitelist",to:"/whitelist"}),o});return(o,a)=>{const h=Lt("router-view");return K(),ne(da,{view:"hHh Lpr lff",class:"bg-image-dark"},{default:$(()=>[g(ia,{class:Ot(H(ee)().useSquads?"":"bg-dark")},{default:$(()=>[g(oa,null,{default:$(()=>[se(g(je,{flat:"",dense:"",round:"",onClick:t,"aria-label":"Menu",icon:"menu"},null,512),[[aa]]),H(r).screen.gt.xs?(K(),ne(je,{key:0,flat:"","no-caps":"","no-wrap":"",class:"q-ml-xs"},{default:$(()=>[g(Ft,{src:"snb_icon.svg",width:"50px"}),g(Ze,{shrink:"",class:"text-weight-bold"},{default:$(()=>[re(" dAPP S&B ")]),_:1}),g(Ze,{shrink:""},{default:$(()=>[re("for educational purposes")]),_:1})]),_:1})):Ie("",!0),g(I)]),_:1}),g(Ne,{class:"bg-white"})]),_:1},8,["class"]),g(sa,{bordered:"",modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=s=>v.value=s),"show-if-above":"",width:230,breakpoint:300},{default:$(()=>[g(ct,{flat:"",square:"",bordered:"",class:"col q-ma-sm",style:{"background-color":"#2d2d2d"}},{default:$(()=>[R("div",wa,[g(I),g(H(Ht),{dark:""}),g(I)]),g(Ne),H(ee)().store.length?(K(),Ve("div",qa,[g(I),g(ga),g(I)])):Ie("",!0),R("div",Ca,[g(I),g(za),g(I)])]),_:1}),g(ua,{style:{height:"calc(100% - 150px)","margin-top":"0px"}},{default:$(()=>[g(Zt,{padding:"",class:""},{default:$(()=>[(K(!0),Ve(Et,null,Vt(l.value,s=>se((K(),ne(Ue,{to:s.to,key:s.text,clickable:"","active-class":"bg-primary",class:"col q-ma-sm"},{default:$(()=>[g(Ye,{avatar:""},{default:$(()=>[g(At,{name:s.icon},null,8,["name"])]),_:2},1024),g(Ye,null,{default:$(()=>[g(Jt,{class:"text-bold text-subtitle1"},{default:$(()=>[re(be(s.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),[[Rt]])),128)),g(Ue)]),_:1})]),_:1}),R("div",xa,[g(ta,{class:"col",square:"",modelValue:H(ie)().rpc_stored_name,"onUpdate:modelValue":a[0]||(a[0]=s=>H(ie)().rpc_stored_name=s),options:H(Dt).map(s=>s.name),label:"RPC"},null,8,["modelValue","options"]),R("div",ka,[g(I),g(Ee,{class:"items-center"},{default:$(()=>[re("v"+be(c.value),1)]),_:1}),g(I)])])]),_:1},8,["modelValue"]),g(ca,null,{default:$(()=>[g(h)]),_:1})]),_:1})}}});export{Wa as default};