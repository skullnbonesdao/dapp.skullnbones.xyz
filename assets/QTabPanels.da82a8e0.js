import{c4 as U,c5 as C,c2 as j,c6 as J,c7 as A,c8 as k,cb as Q,cd as D,cc as _,J as I,ah as f,bs as Z,aC as z,aQ as G,aF as P,bC as H,cQ as ee,b_ as E,a7 as te,bZ as K,cg as ne}from"./index.c2a16308.js";import{c as ae,u as ie,a as re}from"./uid.ec2c75de.js";import{g as L,s as F}from"./touch.3df10340.js";function oe(t){const n=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((s,p)=>{const o=parseFloat(s);o&&(n[p]=o)}),n}var se=U({name:"touch-swipe",beforeMount(t,{value:n,arg:s,modifiers:p}){if(p.mouse!==!0&&C.has.touch!==!0)return;const o=p.mouseCapture===!0?"Capture":"",e={handler:n,sensitivity:oe(s),direction:L(p),noop:j,mouseStart(i){F(i,e)&&J(i)&&(A(e,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),e.start(i,!0))},touchStart(i){if(F(i,e)){const u=i.target;A(e,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),e.start(i)}},start(i,u){C.is.firefox===!0&&k(t,!0);const m=Q(i);e.event={x:m.left,y:m.top,time:Date.now(),mouse:u===!0,dir:!1}},move(i){if(e.event===void 0)return;if(e.event.dir!==!1){D(i);return}const u=Date.now()-e.event.time;if(u===0)return;const m=Q(i),h=m.left-e.event.x,c=Math.abs(h),g=m.top-e.event.y,l=Math.abs(g);if(e.event.mouse!==!0){if(c<e.sensitivity[1]&&l<e.sensitivity[1]){e.end(i);return}}else if(window.getSelection().toString()!==""){e.end(i);return}else if(c<e.sensitivity[2]&&l<e.sensitivity[2])return;const v=c/u,b=l/u;e.direction.vertical===!0&&c<l&&c<100&&b>e.sensitivity[0]&&(e.event.dir=g<0?"up":"down"),e.direction.horizontal===!0&&c>l&&l<100&&v>e.sensitivity[0]&&(e.event.dir=h<0?"left":"right"),e.direction.up===!0&&c<l&&g<0&&c<100&&b>e.sensitivity[0]&&(e.event.dir="up"),e.direction.down===!0&&c<l&&g>0&&c<100&&b>e.sensitivity[0]&&(e.event.dir="down"),e.direction.left===!0&&c>l&&h<0&&l<100&&v>e.sensitivity[0]&&(e.event.dir="left"),e.direction.right===!0&&c>l&&h>0&&l<100&&v>e.sensitivity[0]&&(e.event.dir="right"),e.event.dir!==!1?(D(i),e.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ae(),e.styleCleanup=q=>{e.styleCleanup=void 0,document.body.classList.remove("non-selectable");const y=()=>{document.body.classList.remove("no-pointer-events--children")};q===!0?setTimeout(y,50):y()}),e.handler({evt:i,touch:e.event.mouse!==!0,mouse:e.event.mouse,direction:e.event.dir,duration:u,distance:{x:c,y:l}})):e.end(i)},end(i){e.event!==void 0&&(_(e,"temp"),C.is.firefox===!0&&k(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(!0),i!==void 0&&e.event.dir!==!1&&D(i),e.event=void 0)}};if(t.__qtouchswipe=e,p.mouse===!0){const i=p.mouseCapture===!0||p.mousecapture===!0?"Capture":"";A(e,"main",[[t,"mousedown","mouseStart",`passive${i}`]])}C.has.touch===!0&&A(e,"main",[[t,"touchstart","touchStart",`passive${p.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const s=t.__qtouchswipe;s!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&s.end(),s.handler=n.value),s.direction=L(n.modifiers))},beforeUnmount(t){const n=t.__qtouchswipe;n!==void 0&&(_(n,"main"),_(n,"temp"),C.is.firefox===!0&&k(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchswipe)}});function ue(){const t=new Map;return{getCache:function(n,s){return t[n]===void 0?t[n]=s:t[n]},getCacheWithFn:function(n,s){return t[n]===void 0?t[n]=s():t[n]}}}const le={name:{required:!0},disable:Boolean},W={setup(t,{slots:n}){return()=>P("div",{class:"q-panel scroll",role:"tabpanel"},E(n.default))}},ce={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},pe=["update:modelValue","beforeTransition","transition"];function de(){const{props:t,emit:n,proxy:s}=z(),{getCacheWithFn:p}=ue();let o,e;const i=I(null),u=I(null);function m(a){const r=t.vertical===!0?"up":"left";x((s.$q.lang.rtl===!0?-1:1)*(a.direction===r?1:-1))}const h=f(()=>[[se,m,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),c=f(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),g=f(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),l=f(()=>`--q-transition-duration: ${t.transitionDuration}ms`),v=f(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),b=f(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),q=f(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);Z(()=>t.modelValue,(a,r)=>{const d=w(a)===!0?T(a):-1;e!==!0&&$(d===-1?0:d<T(r)?-1:1),i.value!==d&&(i.value=d,n("beforeTransition",a,r),G(()=>{n("transition",a,r)}))});function y(){x(1)}function V(){x(-1)}function N(a){n("update:modelValue",a)}function w(a){return a!=null&&a!==""}function T(a){return o.findIndex(r=>r.props.name===a&&r.props.disable!==""&&r.props.disable!==!0)}function X(){return o.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function $(a){const r=a!==0&&t.animated===!0&&i.value!==-1?"q-transition--"+(a===-1?c.value:g.value):null;u.value!==r&&(u.value=r)}function x(a,r=i.value){let d=r+a;for(;d>-1&&d<o.length;){const S=o[d];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){$(a),e=!0,n("update:modelValue",S.props.name),setTimeout(()=>{e=!1});return}d+=a}t.infinite===!0&&o.length!==0&&r!==-1&&r!==o.length&&x(a,a===-1?o.length:-1)}function B(){const a=T(t.modelValue);return i.value!==a&&(i.value=a),!0}function M(){const a=w(t.modelValue)===!0&&B()&&o[i.value];return t.keepAlive===!0?[P(te,b.value,[P(q.value===!0?p(v.value,()=>({...W,name:v.value})):W,{key:v.value,style:l.value},()=>a)])]:[P("div",{class:"q-panel scroll",style:l.value,key:v.value,role:"tabpanel"},[a])]}function Y(){if(o.length!==0)return t.animated===!0?[P(H,{name:u.value},M)]:M()}function O(a){return o=ee(E(a.default,[])).filter(r=>r.props!==null&&r.props.slot===void 0&&w(r.props.name)===!0),o.length}function R(){return o}return Object.assign(s,{next:y,previous:V,goTo:N}),{panelIndex:i,panelDirectives:h,updatePanelsList:O,updatePanelIndex:B,getPanelContent:Y,getEnabledPanels:X,getPanels:R,isValidPanelName:w,keepAliveProps:b,needsUniqueKeepAliveWrapper:q,goToPanelByOffset:x,goToPanel:N,nextPanel:y,previousPanel:V}}var he=K({name:"QTabPanel",props:le,setup(t,{slots:n}){return()=>P("div",{class:"q-tab-panel",role:"tabpanel"},E(n.default))}}),ge=K({name:"QTabPanels",props:{...ce,...ie},emits:pe,setup(t,{slots:n}){const s=z(),p=re(t,s.proxy.$q),{updatePanelsList:o,getPanelContent:e,panelDirectives:i}=de(),u=f(()=>"q-tab-panels q-panel-parent"+(p.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(n),ne("div",{class:u.value},e(),"pan",t.swipeable,()=>i.value))}});export{he as Q,ge as a};
