import{bZ as j,ah as p,aF as W,b_ as ee,cw as Qe,cx as je,J as H,cy as te,cd as xe,c1 as Ie,aC as A,cz as Ke,cA as ce,cB as Ne,c9 as de,aQ as R,c7 as fe,bs as S,aX as Ee,aT as D,cc as Ge,c3 as X,cC as Ue,cD as O,a$ as Xe,cv as Ye,aa as Je,cE as Ze,cF as et,aV as ke,cG as qe,c5 as ne,cb as tt,bC as nt,cH as ot}from"./index.86d09f09.js";import{u as Te,a as Ce,r as me,b as lt,c as it}from"./use-key-composition.7526a148.js";var Dt=j({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=p(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>W("div",{class:n.value},ee(t.default))}}),zt=j({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=p(()=>parseInt(e.lines,10)),o=p(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),l=p(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>W("div",{style:l.value,class:o.value},ee(t.default))}}),Ot=j({name:"QItem",props:{...Te,...Qe,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=A(),l=Ce(e,o),{hasLink:s,linkAttrs:i,linkClass:u,linkTag:v,navigateOnClick:d}=je(),r=H(null),g=H(null),b=p(()=>e.clickable===!0||s.value===!0||e.tag==="label"),a=p(()=>e.disable!==!0&&b.value===!0),f=p(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?u.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),k=p(()=>{if(e.insetLevel===void 0)return null;const c=o.lang.rtl===!0?"Right":"Left";return{["padding"+c]:16+e.insetLevel*56+"px"}});function E(c){a.value===!0&&(g.value!==null&&(c.qKeyEvent!==!0&&document.activeElement===r.value?g.value.focus():document.activeElement===g.value&&r.value.focus()),d(c))}function q(c){if(a.value===!0&&te(c,13)===!0){xe(c),c.qKeyEvent=!0;const y=new MouseEvent("click",c);y.qKeyEvent=!0,r.value.dispatchEvent(y)}n("keyup",c)}function h(){const c=Ie(t.default,[]);return a.value===!0&&c.unshift(W("div",{class:"q-focus-helper",tabindex:-1,ref:g})),c}return()=>{const c={ref:r,class:f.value,style:k.value,role:"listitem",onClick:E,onKeyup:q};return a.value===!0?(c.tabindex=e.tabindex||"0",Object.assign(c,i.value)):b.value===!0&&(c["aria-disabled"]="true"),W(v.value,c,h())}}});const at=[null,document,document.body,document.scrollingElement,document.documentElement];function ut(e,t){let n=Ke(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return at.includes(n)?window:n}function st(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function rt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function Se(e,t,n=0){const o=arguments[3]===void 0?performance.now():arguments[3],l=st(e);if(n<=0){l!==t&&Y(e,t);return}requestAnimationFrame(s=>{const i=s-o,u=l+(t-l)/Math.max(i,n)*i;Y(e,u),u!==t&&Se(e,t,n-i,s)})}function He(e,t,n=0){const o=arguments[3]===void 0?performance.now():arguments[3],l=rt(e);if(n<=0){l!==t&&J(e,t);return}requestAnimationFrame(s=>{const i=s-o,u=l+(t-l)/Math.max(i,n)*i;J(e,u),u!==t&&He(e,t,n-i,s)})}function Y(e,t){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}e.scrollTop=t}function J(e,t){if(e===window){window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=t}function Rt(e,t,n){if(n){Se(e,t,n);return}Y(e,t)}function Vt(e,t,n){if(n){He(e,t,n);return}J(e,t)}let z;function ct(){if(z!==void 0)return z;const e=document.createElement("p"),t=document.createElement("div");ce(e,{width:"100%",height:"200px"}),ce(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=t.clientWidth),t.remove(),z=n-o,z}function Qt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function dt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ne.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const ft={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function mt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:s}=A(),i=H(null);let u=null;function v(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};n===void 0&&(Object.assign(d,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){te(a,13)===!0&&d.toggle(a)},contextClick(a){l.hide(a),de(a),R(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:de,mobileTouch(a){if(d.mobileCleanup(a),v(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const f=a.target;fe(d,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&a!==void 0&&dt()}}),n=function(a=o.contextMenu){if(o.noParentEvent===!0||i.value===null)return;let f;a===!0?l.$q.platform.is.mobile===!0?f=[[i.value,"touchstart","mobileTouch","passive"]]:f=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:f=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],fe(d,"anchor",f)});function r(){Ge(d,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function b(){if(o.target===!1||o.target===""||l.$el.parentNode===null)i.value=null;else if(o.target===!0)g(l.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return S(()=>o.contextMenu,a=>{i.value!==null&&(r(),n(a))}),S(()=>o.target,()=>{i.value!==null&&r(),b()}),S(()=>o.noParentEvent,a=>{i.value!==null&&(a===!0?r():n())}),Ee(()=>{b(),t!==!0&&o.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),D(()=>{u!==null&&clearTimeout(u),r()}),{anchorEl:i,canShow:v,anchorEvents:d}}function vt(e,t){const n=H(null);let o;function l(u,v){const d=`${v!==void 0?"add":"remove"}EventListener`,r=v!==void 0?v:o;u!==window&&u[d]("scroll",r,X.passive),window[d]("scroll",r,X.passive),o=v}function s(){n.value!==null&&(l(n.value),n.value=null)}const i=S(()=>e.noParentEvent,()=>{n.value!==null&&(s(),t())});return D(i),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:l}}const ht={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},gt=["beforeShow","show","beforeHide","hide"];function bt({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:s}){const i=A(),{props:u,emit:v,proxy:d}=i;let r;function g(h){e.value===!0?f(h):b(h)}function b(h){if(u.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const c=u["onUpdate:modelValue"]!==void 0;c===!0&&(v("update:modelValue",!0),r=h,R(()=>{r===h&&(r=void 0)})),(u.modelValue===null||c===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,v("beforeShow",h),o!==void 0?o(h):v("show",h))}function f(h){if(u.disable===!0)return;const c=u["onUpdate:modelValue"]!==void 0;c===!0&&(v("update:modelValue",!1),r=h,R(()=>{r===h&&(r=void 0)})),(u.modelValue===null||c===!1)&&k(h)}function k(h){e.value!==!1&&(e.value=!1,v("beforeHide",h),l!==void 0?l(h):v("hide",h))}function E(h){u.disable===!0&&h===!0?u["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:k)(r)}S(()=>u.modelValue,E),n!==void 0&&Ue(i)===!0&&S(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&f()}),s===!0&&Ee(()=>{E(u.modelValue)});const q={show:b,hide:f,toggle:g};return Object.assign(d,q),q}const $=[];function jt(e){return $.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Pe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return O(e)}else if(e.__qPortal===!0){const n=O(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=O(e)}while(e!=null)}function It(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Pe(e,t);continue}e.hide(t)}e=O(e)}}function wt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function pt(e,t,n,o){const l=H(!1),s=H(!1);let i=null;const u={},v=o==="dialog"&&wt(e);function d(g){if(g===!0){me(u),s.value=!0;return}s.value=!1,l.value===!1&&(v===!1&&i===null&&(i=Ze(!1,o)),l.value=!0,$.push(e.proxy),lt(u))}function r(g){if(s.value=!1,g!==!0)return;me(u),l.value=!1;const b=$.indexOf(e.proxy);b!==-1&&$.splice(b,1),i!==null&&(et(i),i=null)}return Xe(()=>{r(!0)}),e.proxy.__qPortal=!0,Ye(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:r,portalIsActive:l,portalIsAccessible:s,renderPortal:()=>v===!0?n():l.value===!0?[W(Je,{to:i},n())]:void 0}}const yt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function xt(e,t=()=>{},n=()=>{}){return{transitionProps:p(()=>{const o=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:p(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Et(){let e;const t=A();function n(){e=void 0}return ke(n),D(n),{removeTick:n,registerTick(o){e=o,R(()=>{e===o&&(qe(t)===!1&&e(),e=void 0)})}}}function kt(){let e=null;const t=A();function n(){e!==null&&(clearTimeout(e),e=null)}return ke(n),D(n),{removeTimeout:n,registerTimeout(o,l){n(),qe(t)===!1&&(e=setTimeout(o,l))}}}const P=[];let _;function qt(e){_=e.keyCode===27}function Tt(){_===!0&&(_=!1)}function Ct(e){_===!0&&(_=!1,te(e,27)===!0&&P[P.length-1](e))}function Le(e){window[e]("keydown",qt),window[e]("blur",Tt),window[e]("keyup",Ct),_=!1}function St(e){ne.is.desktop===!0&&(P.push(e),P.length===1&&Le("addEventListener"))}function ve(e){const t=P.indexOf(e);t>-1&&(P.splice(t,1),P.length===0&&Le("removeEventListener"))}const L=[];function Me(e){L[L.length-1](e)}function Ht(e){ne.is.desktop===!0&&(L.push(e),L.length===1&&document.body.addEventListener("focusin",Me))}function Pt(e){const t=L.indexOf(e);t>-1&&(L.splice(t,1),L.length===0&&document.body.removeEventListener("focusin",Me))}const{notPassiveCapture:V}=X,M=[];function Q(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=$.length-1;for(;n>=0;){const o=$[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=M.length-1;o>=0;o--){const l=M[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Lt(e){M.push(e),M.length===1&&(document.addEventListener("mousedown",Q,V),document.addEventListener("touchstart",Q,V))}function he(e){const t=M.findIndex(n=>n===e);t>-1&&(M.splice(t,1),M.length===0&&(document.removeEventListener("mousedown",Q,V),document.removeEventListener("touchstart",Q,V)))}let ge,be;function we(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Mt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Z[`${e}#ltr`]=e,Z[`${e}#rtl`]=e});function pe(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:Z[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Wt(e,t){let{top:n,left:o,right:l,bottom:s,width:i,height:u}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],s+=t[1],l+=t[0],i+=t[0],u+=t[1]),{top:n,bottom:s,height:u,left:o,right:l,width:i,middle:o+(l-o)/2,center:n+(s-n)/2}}function Bt(e,t,n){let{top:o,left:l}=e.getBoundingClientRect();return o+=t.top,l+=t.left,n!==void 0&&(o+=n[1],l+=n[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function $t(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function ye(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function We(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{We(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:l,anchorOrigin:s,selfOrigin:i,absoluteOffset:u,fit:v,cover:d,maxHeight:r,maxWidth:g}=e;if(ne.is.ios===!0&&window.visualViewport!==void 0){const B=document.body.style,{offsetLeft:x,offsetTop:T}=window.visualViewport;x!==ge&&(B.setProperty("--q-pe-left",x+"px"),ge=x),T!==be&&(B.setProperty("--q-pe-top",T+"px"),be=T)}const{scrollLeft:b,scrollTop:a}=n,f=u===void 0?Wt(l,d===!0?[0,0]:o):Bt(l,u,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:r||"100vh",visibility:"visible"});const{offsetWidth:k,offsetHeight:E}=n,{elWidth:q,elHeight:h}=v===!0||d===!0?{elWidth:Math.max(f.width,k),elHeight:d===!0?Math.max(f.height,E):E}:{elWidth:k,elHeight:E};let c={maxWidth:g,maxHeight:r};(v===!0||d===!0)&&(c.minWidth=f.width+"px",d===!0&&(c.minHeight=f.height+"px")),Object.assign(n.style,c);const y=$t(q,h);let w=ye(f,y,s,i);if(u===void 0||o===void 0)U(w,f,y,s,i);else{const{top:B,left:x}=w;U(w,f,y,s,i);let T=!1;if(w.top!==B){T=!0;const C=2*o[1];f.center=f.top-=C,f.bottom-=C+2}if(w.left!==x){T=!0;const C=2*o[0];f.middle=f.left-=C,f.right-=C+2}T===!0&&(w=ye(f,y,s,i),U(w,f,y,s,i))}c={top:w.top+"px",left:w.left+"px"},w.maxHeight!==void 0&&(c.maxHeight=w.maxHeight+"px",f.height>w.maxHeight&&(c.minHeight=c.maxHeight)),w.maxWidth!==void 0&&(c.maxWidth=w.maxWidth+"px",f.width>w.maxWidth&&(c.minWidth=c.maxWidth)),Object.assign(n.style,c),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==b&&(n.scrollLeft=b)}function U(e,t,n,o,l){const s=n.bottom,i=n.right,u=ct(),v=window.innerHeight-u,d=document.body.clientWidth;if(e.top<0||e.top+s>v)if(l.vertical==="center")e.top=t[o.vertical]>v/2?Math.max(0,v-s):0,e.maxHeight=Math.min(s,v);else if(t[o.vertical]>v/2){const r=Math.min(v,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,r),e.top=Math.max(0,r-s)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,v-e.top);if(e.left<0||e.left+i>d)if(e.maxWidth=Math.min(i,d),l.horizontal==="middle")e.left=t[o.horizontal]>d/2?Math.max(0,d-i):0;else if(t[o.horizontal]>d/2){const r=Math.min(d,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,r),e.left=Math.max(0,r-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,d-e.left)}var Kt=j({name:"QMenu",inheritAttrs:!1,props:{...ft,...ht,...Te,...yt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:we},self:{type:String,validator:we},offset:{type:Array,validator:Mt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...gt,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let l=null,s,i,u;const v=A(),{proxy:d}=v,{$q:r}=d,g=H(null),b=H(!1),a=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=Ce(e,r),{registerTick:k,removeTick:E}=Et(),{registerTimeout:q}=kt(),{transitionProps:h,transitionStyle:c}=xt(e),{localScrollTarget:y,changeScrollEvent:w,unconfigureScrollTarget:B}=vt(e,se),{anchorEl:x,canShow:T}=mt({showing:b}),{hide:C}=bt({showing:b,canShow:T,handleShow:Fe,handleHide:De,hideOnRouteChange:a,processOnMount:!0}),{showPortal:oe,hidePortal:le,renderPortal:Be}=pt(v,g,Oe,"menu"),I={anchorEl:x,innerRef:g,onClickOutside(m){if(e.persistent!==!0&&b.value===!0)return C(m),(m.type==="touchstart"||m.target.classList.contains("q-dialog__backdrop"))&&xe(m),!0}},ie=p(()=>pe(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),$e=p(()=>e.cover===!0?ie.value:pe(e.self||"top start",r.lang.rtl)),_e=p(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),Ae=p(()=>e.autoClose===!0?{onClick:ze}:{}),ae=p(()=>b.value===!0&&e.persistent!==!0);S(ae,m=>{m===!0?(St(N),Lt(I)):(ve(N),he(I))});function K(){it(()=>{let m=g.value;m&&m.contains(document.activeElement)!==!0&&(m=m.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||m.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||m.querySelector("[autofocus], [data-autofocus]")||m,m.focus({preventScroll:!0}))})}function Fe(m){if(l=e.noRefocus===!1?document.activeElement:null,Ht(re),oe(),se(),s=void 0,m!==void 0&&(e.touchPosition||e.contextMenu)){const G=tt(m);if(G.left!==void 0){const{top:Re,left:Ve}=x.value.getBoundingClientRect();s={left:G.left-Ve,top:G.top-Re}}}i===void 0&&(i=S(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,F)),e.noFocus!==!0&&document.activeElement.blur(),k(()=>{F(),e.noFocus!==!0&&K()}),q(()=>{r.platform.is.ios===!0&&(u=e.autoClose,g.value.click()),F(),oe(!0),n("show",m)},e.transitionDuration)}function De(m){E(),le(),ue(!0),l!==null&&(m===void 0||m.qClickOutside!==!0)&&(((m&&m.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),q(()=>{le(!0),n("hide",m)},e.transitionDuration)}function ue(m){s=void 0,i!==void 0&&(i(),i=void 0),(m===!0||b.value===!0)&&(Pt(re),B(),he(I),ve(N)),m!==!0&&(l=null)}function se(){(x.value!==null||e.scrollTarget!==void 0)&&(y.value=ut(x.value,e.scrollTarget),w(y.value,F))}function ze(m){u!==!0?(Pe(d,m),n("click",m)):u=!1}function re(m){ae.value===!0&&e.noFocus!==!0&&ot(g.value,m.target)!==!0&&K()}function N(m){n("escapeKey"),C(m)}function F(){We({targetEl:g.value,offset:e.offset,anchorEl:x.value,anchorOrigin:ie.value,selfOrigin:$e.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Oe(){return W(nt,h.value,()=>b.value===!0?W("div",{role:"menu",...o,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+_e.value,o.class],style:[o.style,c.value],...Ae.value},ee(t.default)):null)}return D(ue),Object.assign(d,{focus:K,updatePosition:F}),Be}});let _t=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,_t=e.scrollLeft>=0,e.remove()}export{ft as A,we as B,Mt as C,vt as D,mt as E,he as F,We as G,pe as H,Lt as I,Ot as Q,st as a,rt as b,dt as c,Rt as d,gt as e,kt as f,ut as g,bt as h,ct as i,Dt as j,zt as k,Qt as l,yt as m,Et as n,xt as o,pt as p,ve as q,Pt as r,Vt as s,Ht as t,ht as u,St as v,_t as w,Kt as x,jt as y,It as z};
