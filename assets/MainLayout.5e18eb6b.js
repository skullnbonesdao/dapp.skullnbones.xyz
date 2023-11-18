import{bZ as Z,aJ as Qe,b_ as W,b$ as me,J as q,ah as s,bs as C,aT as be,c0 as zt,aF as x,aC as ee,aX as lt,c1 as ot,c2 as wt,c3 as _t,c4 as le,c5 as qt,c6 as ce,c7 as _e,c8 as He,c9 as qe,ca as Le,cb as Ce,cc as Ct,cd as xt,aV as Tt,aR as kt,ce as it,bz as G,aQ as Ee,cf as Ae,cg as nt,b3 as rt,ch as $t,ci as Pt,H as de,a$ as Mt,au as Bt,b9 as Lt,b1 as U,ai as ve,bx as $,as as _,cj as De,ar as oe,aj as Qt,al as fe,V as he,ck as Ot,ak as Ve,b7 as Fe,cl as Ht,a1 as xe,a6 as Re,cm as J,cn as Et,co as We,cp as je,cq as At}from"./index.f207226b.js";import{Q as Dt}from"./QImg.5da924ab.js";import{Q as Vt,a as Ne}from"./QToolbar.9f1ed02e.js";import{Q as Y}from"./QSpace.fae06217.js";import{Q as Ft}from"./QSeparator.75cac365.js";import{Q as ne,g as Rt,a as Wt,b as jt,c as Nt,u as ut,d as st,s as Te,e as Ie,f as It,h as Xt,i as Yt,j as Kt,k as ke,l as Xe,m as $e,n as Pe,o as Ye}from"./uid.dc40310b.js";import{g as Ke,s as Ue,C as Je}from"./ClosePopup.3435cf11.js";import{b as X,u as Ut,a as Jt}from"./use-prevent-scroll.879e117c.js";import{Q as Gt}from"./QBtnDropdown.ef5e841b.js";import{Q as Zt}from"./QBadge.1d08ef57.js";var ea=Z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:u}){const{proxy:{$q:c}}=ee(),t=Qe(me,W);if(t===W)return console.error("QHeader needs to be child of QLayout"),W;const a=q(parseInt(e.heightHint,10)),i=q(!0),l=s(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||c.platform.is.ios&&t.isContainer.value===!0),d=s(()=>{if(e.modelValue!==!0)return 0;if(l.value===!0)return i.value===!0?a.value:0;const h=a.value-t.scroll.value.position;return h>0?h:0}),v=s(()=>e.modelValue!==!0||l.value===!0&&i.value!==!0),n=s(()=>e.modelValue===!0&&v.value===!0&&e.reveal===!0),T=s(()=>"q-header q-layout__section--marginal "+(l.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(v.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=s(()=>{const h=t.rows.value.top,M={};return h[0]==="l"&&t.left.space===!0&&(M[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&(M[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),M});function b(h,M){t.update("header",h,M)}function y(h,M){h.value!==M&&(h.value=M)}function L({height:h}){y(a,h),b("size",h)}function P(h){n.value===!0&&y(i,!0),u("focusin",h)}C(()=>e.modelValue,h=>{b("space",h),y(i,!0),t.animate()}),C(d,h=>{b("offset",h)}),C(()=>e.reveal,h=>{h===!1&&y(i,e.modelValue)}),C(i,h=>{t.animate(),u("reveal",h)}),C(t.scroll,h=>{e.reveal===!0&&y(i,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&b("size",a.value),b("space",e.modelValue),b("offset",d.value),be(()=>{t.instances.header===w&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const h=zt(f.default,[]);return e.elevated===!0&&h.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(x(ne,{debounce:0,onResize:L})),x("header",{class:T.value,style:S.value,onFocusin:P},h)}}});const{passive:Ge}=wt,ta=["both","horizontal","vertical"];var ct=Z({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ta.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:f}){const u={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,t,a;C(()=>e.scrollTarget,()=>{d(),l()});function i(){c!==null&&c();const T=Math.max(0,Wt(t)),S=jt(t),b={top:T-u.position.top,left:S-u.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const y=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";u.position={top:T,left:S},u.directionChanged=u.direction!==y,u.delta=b,u.directionChanged===!0&&(u.direction=y,u.inflectionPoint=u.position),f("scroll",{...u})}function l(){t=Rt(a,e.scrollTarget),t.addEventListener("scroll",v,Ge),v(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",v,Ge),t=void 0)}function v(T){if(T===!0||e.debounce===0||e.debounce==="0")i();else if(c===null){const[S,b]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];c=()=>{b(S),c=null}}}const{proxy:n}=ee();return C(()=>n.$q.lang.rtl,i),lt(()=>{a=n.$el.parentNode,l()}),be(()=>{c!==null&&c(),d()}),Object.assign(n,{trigger:v,getPosition:()=>u}),ot}});function Me(e,f,u){const c=Le(e);let t,a=c.left-f.event.x,i=c.top-f.event.y,l=Math.abs(a),d=Math.abs(i);const v=f.direction;v.horizontal===!0&&v.vertical!==!0?t=a<0?"left":"right":v.horizontal!==!0&&v.vertical===!0?t=i<0?"up":"down":v.up===!0&&i<0?(t="up",l>d&&(v.left===!0&&a<0?t="left":v.right===!0&&a>0&&(t="right"))):v.down===!0&&i>0?(t="down",l>d&&(v.left===!0&&a<0?t="left":v.right===!0&&a>0&&(t="right"))):v.left===!0&&a<0?(t="left",l<d&&(v.up===!0&&i<0?t="up":v.down===!0&&i>0&&(t="down"))):v.right===!0&&a>0&&(t="right",l<d&&(v.up===!0&&i<0?t="up":v.down===!0&&i>0&&(t="down")));let n=!1;if(t===void 0&&u===!1){if(f.event.isFirst===!0||f.event.lastDir===void 0)return{};t=f.event.lastDir,n=!0,t==="left"||t==="right"?(c.left-=a,l=0,a=0):(c.top-=i,d=0,i=0)}return{synthetic:n,payload:{evt:e,touch:f.event.mouse!==!0,mouse:f.event.mouse===!0,position:c,direction:t,isFirst:f.event.isFirst,isFinal:u===!0,duration:Date.now()-f.event.time,distance:{x:l,y:d},offset:{x:a,y:i},delta:{x:c.left-f.event.lastX,y:c.top-f.event.lastY}}}}let aa=0;var ie=_t({name:"touch-pan",beforeMount(e,{value:f,modifiers:u}){if(u.mouse!==!0&&le.has.touch!==!0)return;function c(a,i){u.mouse===!0&&i===!0?Ct(a):(u.stop===!0&&qe(a),u.prevent===!0&&He(a))}const t={uid:"qvtp_"+aa++,handler:f,modifiers:u,direction:Ke(u),noop:ot,mouseStart(a){Ue(a,t)&&qt(a)&&(ce(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Ue(a,t)){const i=a.target;ce(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,i){if(le.is.firefox===!0&&_e(e,!0),t.lastEvt=a,i===!0||u.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const v=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&He(v),a.cancelBubble===!0&&qe(v),Object.assign(v,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:v}}qe(a)}const{left:l,top:d}=Le(a);t.event={x:l,y:d,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:d}},move(a){if(t.event===void 0)return;const i=Le(a),l=i.left-t.event.x,d=i.top-t.event.y;if(l===0&&d===0)return;t.lastEvt=a;const v=t.event.mouse===!0,n=()=>{c(a,v);let b;u.preserveCursor!==!0&&u.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),v===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Nt(),t.styleCleanup=y=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),v===!0){const L=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{L(),y()},50):L()}else y!==void 0&&y()}};if(t.event.detected===!0){t.event.isFirst!==!0&&c(a,t.event.mouse);const{payload:b,synthetic:y}=Me(a,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&n(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=y===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||v===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){n(),t.event.detected=!0,t.move(a);return}const T=Math.abs(l),S=Math.abs(d);T!==S&&(t.direction.horizontal===!0&&T>S||t.direction.vertical===!0&&T<S||t.direction.up===!0&&T<S&&d<0||t.direction.down===!0&&T<S&&d>0||t.direction.left===!0&&T>S&&l<0||t.direction.right===!0&&T>S&&l>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,i){if(t.event!==void 0){if(Ce(t,"temp"),le.is.firefox===!0&&_e(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Me(a===void 0?t.lastEvt:a,t).payload);const{payload:l}=Me(a===void 0?t.lastEvt:a,t,!0),d=()=>{t.handler(l)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,u.mouse===!0){const a=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";ce(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}le.has.touch===!0&&ce(t,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,f){const u=e.__qtouchpan;u!==void 0&&(f.oldValue!==f.value&&(typeof value!="function"&&u.end(),u.handler=f.value),u.direction=Ke(f.modifiers))},beforeUnmount(e){const f=e.__qtouchpan;f!==void 0&&(f.event!==void 0&&f.end(),Ce(f,"main"),Ce(f,"temp"),le.is.firefox===!0&&_e(e,!1),f.styleCleanup!==void 0&&f.styleCleanup(),delete e.__qtouchpan)}});const Ze=["vertical","horizontal"],Be={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},et={prevent:!0,mouse:!0,mouseAllDir:!0},tt=e=>e>=250?50:Math.ceil(e/5);var la=Z({name:"QScrollArea",props:{...ut,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:f,emit:u}){const c=q(!1),t=q(!1),a=q(!1),i={vertical:q(0),horizontal:q(0)},l={vertical:{ref:q(null),position:q(0),size:q(0)},horizontal:{ref:q(null),position:q(0),size:q(0)}},{proxy:d}=ee(),v=st(e,d.$q);let n=null,T;const S=q(null),b=s(()=>"q-scrollarea"+(v.value===!0?" q-scrollarea--dark":""));l.vertical.percentage=s(()=>{const r=l.vertical.size.value-i.vertical.value;if(r<=0)return 0;const m=X(l.vertical.position.value/r,0,1);return Math.round(m*1e4)/1e4}),l.vertical.thumbHidden=s(()=>(e.visible===null?a.value:e.visible)!==!0&&c.value===!1&&t.value===!1||l.vertical.size.value<=i.vertical.value+1),l.vertical.thumbStart=s(()=>l.vertical.percentage.value*(i.vertical.value-l.vertical.thumbSize.value)),l.vertical.thumbSize=s(()=>Math.round(X(i.vertical.value*i.vertical.value/l.vertical.size.value,tt(i.vertical.value),i.vertical.value))),l.vertical.style=s(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${l.vertical.thumbStart.value}px`,height:`${l.vertical.thumbSize.value}px`})),l.vertical.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.vertical.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),l.horizontal.percentage=s(()=>{const r=l.horizontal.size.value-i.horizontal.value;if(r<=0)return 0;const m=X(Math.abs(l.horizontal.position.value)/r,0,1);return Math.round(m*1e4)/1e4}),l.horizontal.thumbHidden=s(()=>(e.visible===null?a.value:e.visible)!==!0&&c.value===!1&&t.value===!1||l.horizontal.size.value<=i.horizontal.value+1),l.horizontal.thumbStart=s(()=>l.horizontal.percentage.value*(i.horizontal.value-l.horizontal.thumbSize.value)),l.horizontal.thumbSize=s(()=>Math.round(X(i.horizontal.value*i.horizontal.value/l.horizontal.size.value,tt(i.horizontal.value),i.horizontal.value))),l.horizontal.style=s(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[d.$q.lang.rtl===!0?"right":"left"]:`${l.horizontal.thumbStart.value}px`,width:`${l.horizontal.thumbSize.value}px`})),l.horizontal.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.horizontal.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const y=s(()=>l.vertical.thumbHidden.value===!0&&l.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),L=[[ie,r=>{D(r,"vertical")},void 0,{vertical:!0,...et}]],P=[[ie,r=>{D(r,"horizontal")},void 0,{horizontal:!0,...et}]];function w(){const r={};return Ze.forEach(m=>{const z=l[m];r[m+"Position"]=z.position.value,r[m+"Percentage"]=z.percentage.value,r[m+"Size"]=z.size.value,r[m+"ContainerSize"]=i[m].value}),r}const h=xt(()=>{const r=w();r.ref=d,u("scroll",r)},0);function M(r,m,z){if(Ze.includes(r)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(r==="vertical"?Ie:Te)(S.value,m,z)}function g({height:r,width:m}){let z=!1;i.vertical.value!==r&&(i.vertical.value=r,z=!0),i.horizontal.value!==m&&(i.horizontal.value=m,z=!0),z===!0&&A()}function k({position:r}){let m=!1;l.vertical.position.value!==r.top&&(l.vertical.position.value=r.top,m=!0),l.horizontal.position.value!==r.left&&(l.horizontal.position.value=r.left,m=!0),m===!0&&A()}function B({height:r,width:m}){l.horizontal.size.value!==m&&(l.horizontal.size.value=m,A()),l.vertical.size.value!==r&&(l.vertical.size.value=r,A())}function D(r,m){const z=l[m];if(r.isFirst===!0){if(z.thumbHidden.value===!0)return;T=z.position.value,t.value=!0}else if(t.value!==!0)return;r.isFinal===!0&&(t.value=!1);const R=Be[m],K=i[m].value,ye=(z.size.value-K)/(K-z.thumbSize.value),ue=r.distance[R.dist],ge=T+(r.direction===R.dir?1:-1)*ue*ye;te(ge,m)}function j(r,m){const z=l[m];if(z.thumbHidden.value!==!0){const R=r[Be[m].offset];if(R<z.thumbStart.value||R>z.thumbStart.value+z.thumbSize.value){const K=R-z.thumbSize.value/2;te(K/i[m].value*z.size.value,m)}z.ref.value!==null&&z.ref.value.dispatchEvent(new MouseEvent(r.type,r))}}function V(r){j(r,"vertical")}function E(r){j(r,"horizontal")}function A(){c.value=!0,n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,c.value=!1},e.delay),e.onScroll!==void 0&&h()}function te(r,m){S.value[Be[m].scroll]=r}let Q=null;function ae(){Q!==null&&clearTimeout(Q),Q=setTimeout(()=>{Q=null,a.value=!0},d.$q.platform.is.ios?50:0)}function re(){Q!==null&&(clearTimeout(Q),Q=null),a.value=!1}let F=null;return C(()=>d.$q.lang.rtl,r=>{S.value!==null&&Te(S.value,Math.abs(l.horizontal.position.value)*(r===!0?-1:1))}),Tt(()=>{F={top:l.vertical.position.value,left:l.horizontal.position.value}}),kt(()=>{if(F===null)return;const r=S.value;r!==null&&(Te(r,F.left),Ie(r,F.top))}),be(h.cancel),Object.assign(d,{getScrollTarget:()=>S.value,getScroll:w,getScrollPosition:()=>({top:l.vertical.position.value,left:l.horizontal.position.value}),getScrollPercentage:()=>({top:l.vertical.percentage.value,left:l.horizontal.percentage.value}),setScrollPosition:M,setScrollPercentage(r,m,z){M(r,m*(l[r].size.value-i[r].value)*(r==="horizontal"&&d.$q.lang.rtl===!0?-1:1),z)}}),()=>x("div",{class:b.value,onMouseenter:ae,onMouseleave:re},[x("div",{ref:S,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[x("div",{class:"q-scrollarea__content absolute",style:y.value},it(f.default,[x(ne,{debounce:0,onResize:B})])),x(ct,{axis:"both",onScroll:k})]),x(ne,{debounce:0,onResize:g}),x("div",{class:l.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:V}),x("div",{class:l.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:E}),G(x("div",{ref:l.vertical.ref,class:l.vertical.thumbClass.value,style:l.vertical.style.value,"aria-hidden":"true"}),L),G(x("div",{ref:l.horizontal.ref,class:l.horizontal.thumbClass.value,style:l.horizontal.style.value,"aria-hidden":"true"}),P)])}});const at=150;var oa=Z({name:"QDrawer",inheritAttrs:!1,props:{...It,...ut,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Xt,"onLayout","miniState"],setup(e,{slots:f,emit:u,attrs:c}){const t=ee(),{proxy:{$q:a}}=t,i=st(e,a),{preventBodyScroll:l}=Jt(),{registerTimeout:d,removeTimeout:v}=Yt(),n=Qe(me,W);if(n===W)return console.error("QDrawer needs to be child of QLayout"),W;let T,S=null,b;const y=q(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),L=s(()=>e.mini===!0&&y.value!==!0),P=s(()=>L.value===!0?e.miniWidth:e.width),w=q(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),h=s(()=>e.persistent!==!0&&(y.value===!0||R.value===!0));function M(o,p){if(D(),o!==!1&&n.animate(),H(0),y.value===!0){const O=n.instances[F.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),N(1),n.isContainer.value!==!0&&l(!0)}else N(0),o!==!1&&Se(!1);d(()=>{o!==!1&&Se(!0),p!==!0&&u("show",o)},at)}function g(o,p){j(),o!==!1&&n.animate(),N(0),H(A.value*P.value),ze(),p!==!0?d(()=>{u("hide",o)},at):v()}const{show:k,hide:B}=Kt({showing:w,hideOnRouteChange:h,handleShow:M,handleHide:g}),{addToHistory:D,removeFromHistory:j}=Ut(w,B,h),V={belowBreakpoint:y,hide:B},E=s(()=>e.side==="right"),A=s(()=>(a.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),te=q(0),Q=q(!1),ae=q(!1),re=q(P.value*A.value),F=s(()=>E.value===!0?"left":"right"),r=s(()=>w.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:P.value:0),m=s(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(E.value?"R":"L")>-1||a.platform.is.ios===!0&&n.isContainer.value===!0),z=s(()=>e.overlay===!1&&w.value===!0&&y.value===!1),R=s(()=>e.overlay===!0&&w.value===!0&&y.value===!1),K=s(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&Q.value===!1?" hidden":"")),ye=s(()=>({backgroundColor:`rgba(0,0,0,${te.value*.4})`})),ue=s(()=>E.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),ge=s(()=>E.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),dt=s(()=>{const o={};return n.header.space===!0&&ue.value===!1&&(m.value===!0?o.top=`${n.header.offset}px`:n.header.space===!0&&(o.top=`${n.header.size}px`)),n.footer.space===!0&&ge.value===!1&&(m.value===!0?o.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(o.bottom=`${n.footer.size}px`)),o}),vt=s(()=>{const o={width:`${P.value}px`,transform:`translateX(${re.value}px)`};return y.value===!0?o:Object.assign(o,dt.value)}),ft=s(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),ht=s(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(Q.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${L.value===!0?"mini":"standard"}`+(m.value===!0||z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ue.value===!0?" q-drawer--top-padding":""))),mt=s(()=>{const o=a.lang.rtl===!0?e.side:F.value;return[[ie,pt,void 0,{[o]:!0,mouse:!0}]]}),bt=s(()=>{const o=a.lang.rtl===!0?F.value:e.side;return[[ie,Oe,void 0,{[o]:!0,mouse:!0}]]}),yt=s(()=>{const o=a.lang.rtl===!0?F.value:e.side;return[[ie,Oe,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function pe(){St(y,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}C(y,o=>{o===!0?(T=w.value,w.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&T!==!1&&(w.value===!0?(H(0),N(0),ze()):k(!1))}),C(()=>e.side,(o,p)=>{n.instances[p]===V&&(n.instances[p]=void 0,n[p].space=!1,n[p].offset=0),n.instances[o]=V,n[o].size=P.value,n[o].space=z.value,n[o].offset=r.value}),C(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&pe()}),C(()=>e.behavior+e.breakpoint,pe),C(n.isContainer,o=>{w.value===!0&&l(o!==!0),o===!0&&pe()}),C(n.scrollbarWidth,()=>{H(w.value===!0?0:void 0)}),C(r,o=>{I("offset",o)}),C(z,o=>{u("onLayout",o),I("space",o)}),C(E,()=>{H()}),C(P,o=>{H(),we(e.miniToOverlay,o)}),C(()=>e.miniToOverlay,o=>{we(o,P.value)}),C(()=>a.lang.rtl,()=>{H()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(gt(),n.animate())}),C(L,o=>{u("miniState",o)});function H(o){o===void 0?Ee(()=>{o=w.value===!0?0:P.value,H(A.value*o)}):(n.isContainer.value===!0&&E.value===!0&&(y.value===!0||Math.abs(o)===P.value)&&(o+=A.value*n.scrollbarWidth.value),re.value=o)}function N(o){te.value=o}function Se(o){const p=o===!0?"remove":n.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function gt(){S!==null&&clearTimeout(S),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,S=setTimeout(()=>{S=null,ae.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function pt(o){if(w.value!==!1)return;const p=P.value,O=X(o.distance.x,0,p);if(o.isFinal===!0){O>=Math.min(75,p)===!0?k():(n.animate(),N(0),H(A.value*p)),Q.value=!1;return}H((a.lang.rtl===!0?E.value!==!0:E.value)?Math.max(p-O,0):Math.min(0,O-p)),N(X(O/p,0,1)),o.isFirst===!0&&(Q.value=!0)}function Oe(o){if(w.value!==!0)return;const p=P.value,O=o.direction===e.side,se=(a.lang.rtl===!0?O!==!0:O)?X(o.distance.x,0,p):0;if(o.isFinal===!0){Math.abs(se)<Math.min(75,p)===!0?(n.animate(),N(1),H(0)):B(),Q.value=!1;return}H(A.value*se),N(X(1-se/p,0,1)),o.isFirst===!0&&(Q.value=!0)}function ze(){l(!1),Se(!0)}function I(o,p){n.update(e.side,o,p)}function St(o,p){o.value!==p&&(o.value=p)}function we(o,p){I("size",o===!0?e.miniWidth:p)}return n.instances[e.side]=V,we(e.miniToOverlay,P.value),I("space",z.value),I("offset",r.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),lt(()=>{u("onLayout",z.value),u("miniState",L.value),T=e.showIfAbove===!0;const o=()=>{(w.value===!0?M:g)(!1,!0)};if(n.totalWidth.value!==0){Ee(o);return}b=C(n.totalWidth,()=>{b(),b=void 0,w.value===!1&&e.showIfAbove===!0&&y.value===!1?k(!1):o()})}),be(()=>{b!==void 0&&b(),S!==null&&(clearTimeout(S),S=null),w.value===!0&&ze(),n.instances[e.side]===V&&(n.instances[e.side]=void 0,I("size",0),I("offset",0),I("space",!1))}),()=>{const o=[];y.value===!0&&(e.noSwipeOpen===!1&&o.push(G(x("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),mt.value)),o.push(Ae("div",{ref:"backdrop",class:K.value,style:ye.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>yt.value)));const p=L.value===!0&&f.mini!==void 0,O=[x("div",{...c,key:""+p,class:[ft.value,c.class]},p===!0?f.mini():nt(f.default))];return e.elevated===!0&&w.value===!0&&O.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Ae("aside",{ref:"content",class:ht.value,style:vt.value},O,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>bt.value)),x("div",{class:"q-drawer-container"},o)}}}),ia=Z({name:"QPageContainer",setup(e,{slots:f}){const{proxy:{$q:u}}=ee(),c=Qe(me,W);if(c===W)return console.error("QPageContainer needs to be child of QLayout"),W;rt($t,!0);const t=s(()=>{const a={};return c.header.space===!0&&(a.paddingTop=`${c.header.size}px`),c.right.space===!0&&(a[`padding${u.lang.rtl===!0?"Left":"Right"}`]=`${c.right.size}px`),c.footer.space===!0&&(a.paddingBottom=`${c.footer.size}px`),c.left.space===!0&&(a[`padding${u.lang.rtl===!0?"Right":"Left"}`]=`${c.left.size}px`),a});return()=>x("div",{class:"q-page-container",style:t.value},nt(f.default))}}),na=Z({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:f,emit:u}){const{proxy:{$q:c}}=ee(),t=q(null),a=q(c.screen.height),i=q(e.container===!0?0:c.screen.width),l=q({position:0,direction:"down",inflectionPoint:0}),d=q(0),v=q(Pt.value===!0?0:ke()),n=s(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),T=s(()=>e.container===!1?{minHeight:c.screen.height+"px"}:null),S=s(()=>v.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${v.value}px`}:null),b=s(()=>v.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null);function y(g){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};l.value=k,e.onScroll!==void 0&&u("scroll",k)}}function L(g){const{height:k,width:B}=g;let D=!1;a.value!==k&&(D=!0,a.value=k,e.onScrollHeight!==void 0&&u("scrollHeight",k),w()),i.value!==B&&(D=!0,i.value=B),D===!0&&e.onResize!==void 0&&u("resize",g)}function P({height:g}){d.value!==g&&(d.value=g,w())}function w(){if(e.container===!0){const g=a.value>d.value?ke():0;v.value!==g&&(v.value=g)}}let h=null;const M={instances:{},view:s(()=>e.view),isContainer:s(()=>e.container),rootRef:t,height:a,containerHeight:d,scrollbarWidth:v,totalWidth:s(()=>i.value+v.value),rows:s(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:de({size:0,offset:0,space:!1}),right:de({size:300,offset:0,space:!1}),footer:de({size:0,offset:0,space:!1}),left:de({size:300,offset:0,space:!1}),scroll:l,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,k,B){M[g][k]=B}};if(rt(me,M),ke()>0){let B=function(){g=null,k.classList.remove("hide-scrollbar")},D=function(){if(g===null){if(k.scrollHeight>c.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(B,300)},j=function(V){g!==null&&V==="remove"&&(clearTimeout(g),B()),window[`${V}EventListener`]("resize",D)},g=null;const k=document.body;C(()=>e.container!==!0?"add":"remove",j),e.container!==!0&&j("add"),Mt(()=>{j("remove")})}return()=>{const g=it(f.default,[x(ct,{onScroll:y}),x(ne,{onResize:L})]),k=x("div",{class:n.value,style:T.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?x("div",{class:"q-layout-container overflow-hidden",ref:t},[x(ne,{onResize:P}),x("div",{class:"absolute-full",style:S.value},[x("div",{class:"scroll",style:b.value},[k])])]):k}}});const ra="0.2.9";const ua={class:"row q-mt-md"},sa={class:"col absolute-bottom q-ma-md q-gutter-y-md"},ca={class:"row"},da={class:"row"},_a=Bt({__name:"MainLayout",setup(e){const f=q(!1);q("");const u=q(ra);function c(){f.value=!f.value}C(()=>J().rpc_selected,()=>{J().update_connection()}),C(()=>We().publicKey.value,async()=>{We().publicKey.value&&await je().update_whitelist()});const t=s(()=>{let a=[{icon:"home",text:"Home",to:"/"},{icon:"contact_mail",text:"Accounts",to:"/accounts"}];return J().is_admin&&a.push({icon:"contrast",text:"Whitelist",to:"/whitelist"}),(je().check_wallet_whitelisted||J().is_admin)&&a.push({icon:"local_activity",text:"Raffle",to:"/raffle"}),a});return(a,i)=>{const l=Lt("router-view");return U(),ve(na,{view:"hHh Lpr lff"},{default:$(()=>[_(ea,{class:"bg-black"},{default:$(()=>[_(Vt,null,{default:$(()=>[G(_(De,{flat:"",dense:"",round:"",onClick:c,"aria-label":"Menu",icon:"menu"},null,512),[[Je]]),a.$q.screen.gt.xs?(U(),ve(De,{key:0,flat:"","no-caps":"","no-wrap":"",class:"q-ml-xs"},{default:$(()=>[_(Dt,{src:"snb_icon.svg",width:"50px"}),_(Ne,{shrink:"",class:"text-weight-bold"},{default:$(()=>[oe(" dAPP S&B ")]),_:1}),_(Ne,{shrink:""},{default:$(()=>[oe("for educational purposes")]),_:1})]),_:1})):Qt("",!0),_(Y)]),_:1}),_(Ft,{class:"bg-white"})]),_:1}),_(oa,{bordered:"",modelValue:f.value,"onUpdate:modelValue":i[0]||(i[0]=d=>f.value=d),"show-if-above":"",width:230,breakpoint:300},{default:$(()=>[fe("div",ua,[_(Y),_(he(Ot),{dark:"",class:"items-center"}),_(Y)]),_(la,{style:{height:"calc(100% - 150px)","margin-top":"0px"}},{default:$(()=>[_(Xe,{padding:"",class:""},{default:$(()=>[(U(!0),Ve(Re,null,Fe(t.value,d=>G((U(),ve($e,{to:d.to,key:d.text,clickable:"",class:"col bg-black q-ma-md"},{default:$(()=>[_(Pe,{avatar:""},{default:$(()=>[_(Ht,{color:"grey",name:d.icon},null,8,["name"])]),_:2},1024),_(Pe,null,{default:$(()=>[_(Ye,{class:"text-bold"},{default:$(()=>[oe(xe(d.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),[[At]])),128)),_($e)]),_:1})]),_:1}),fe("div",sa,[fe("div",ca,[_(Y),_(Gt,{square:"",color:"primary",label:he(J)().rpc_selected.name},{default:$(()=>[_(Xe,null,{default:$(()=>[(U(!0),Ve(Re,null,Fe(he(Et),d=>G((U(),ve($e,{clickable:"",key:d,onClick:v=>he(J)().rpc_selected=d},{default:$(()=>[_(Pe,null,{default:$(()=>[_(Ye,null,{default:$(()=>[oe(xe(d.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[Je]])),128))]),_:1})]),_:1},8,["label"]),_(Y)]),fe("div",da,[_(Y),_(Zt,{class:"items-center"},{default:$(()=>[oe("v"+xe(u.value),1)]),_:1}),_(Y)])])]),_:1},8,["modelValue"]),_(ia,null,{default:$(()=>[_(l)]),_:1})]),_:1})}}});export{_a as default};
