import{aI as Ae,b_ as J,cM as ve,I as T,ag as f,aS as de,aW as Be,by as Me,co as $e,aE as h,cc as se,cs as Ee,cL as Qe,ck as N,ce as De,aB as fe,cN as We,bY as be,br as V,b2 as je,aU as Fe,aQ as Oe,bZ as Ke}from"./index.8041a8a0.js";import{d as Ve}from"./uid.1059bff9.js";import{p,f as ce,Q as Ne}from"./ClosePopup.e80a251e.js";let ze=0;const He=["click","keydown"],Ue={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${ze++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ge(e,y,C,c){const r=Ae(ve,J);if(r===J)return console.error("QTab/QRouteTab component needs to be child of QTabs"),J;const{proxy:z}=fe(),$=T(null),Q=T(null),D=T(null),H=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),x=f(()=>r.currentModel.value===e.name),U=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(x.value===!0?" q-tab--active"+(r.tabProps.value.activeClass?" "+r.tabProps.value.activeClass:"")+(r.tabProps.value.activeColor?` text-${r.tabProps.value.activeColor}`:"")+(r.tabProps.value.activeBgColor?` bg-${r.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&r.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||r.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),I=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(r.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=f(()=>e.disable===!0||r.hasFocus.value===!0||x.value===!1&&r.hasActiveTab.value===!0?-1:e.tabindex||0);function q(l,b){if(b!==!0&&$.value!==null&&$.value.focus(),e.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&se(l);return}if(c===void 0){r.updateModel({name:e.name}),C("click",l);return}if(c.hasRouterLink.value===!0){const m=(v={})=>{let w;const _=v.to===void 0||We(v.to,e.to)===!0?r.avoidRouteWatcher=Ve():null;return c.navigateToRouterLink(l,{...v,returnRouterError:!0}).catch(P=>{w=P}).then(P=>{if(_===r.avoidRouteWatcher&&(r.avoidRouteWatcher=!1,w===void 0&&(P===void 0||P.message.startsWith("Avoided redundant navigation")===!0)&&r.updateModel({name:e.name})),v.returnRouterError===!0)return w!==void 0?Promise.reject(w):P})};C("click",l,m),l.defaultPrevented!==!0&&m();return}C("click",l)}function L(l){Ee(l,[13,32])?q(l,!0):Qe(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&r.onKbdNavigate(l.keyCode,z.$el)===!0&&se(l),C("keydown",l)}function E(){const l=r.tabProps.value.narrowIndicator,b=[],m=h("div",{ref:D,class:["q-tab__indicator",r.tabProps.value.indicatorClass]});e.icon!==void 0&&b.push(h(N,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&b.push(h("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&b.push(e.alertIcon!==void 0?h(N,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):h("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&b.push(m);const v=[h("div",{class:"q-focus-helper",tabindex:-1,ref:$}),h("div",{class:I.value},De(y.default,b))];return l===!1&&v.push(m),v}const A={name:f(()=>e.name),rootRef:Q,tabIndicatorRef:D,routeData:c};de(()=>{r.unregisterTab(A)}),Be(()=>{r.registerTab(A)});function W(l,b){const m={ref:Q,class:U.value,tabindex:g.value,role:"tab","aria-selected":x.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:L,...b};return Me(h(l,m,E()),[[$e,H.value]])}return{renderTab:W,$tabs:r}}var et=be({name:"QTab",props:Ue,emits:He,setup(e,{slots:y,emit:C}){const{renderTab:c}=Ge(e,y,C);return()=>c("div")}});let he=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const y=document.createElement("div");Object.assign(y.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(y),e.scrollLeft=-1e3,he=e.scrollLeft>=0,e.remove()}function Xe(e,y,C){const c=C===!0?["left","right"]:["top","bottom"];return`absolute-${y===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const Ye=["left","center","right","justify"];var tt=be({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ye.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:y,emit:C}){const{proxy:c}=fe(),{$q:r}=c,{registerTick:z}=p(),{registerTick:$}=p(),{registerTick:Q}=p(),{registerTimeout:D,removeTimeout:H}=ce(),{registerTimeout:x,removeTimeout:U}=ce(),I=T(null),g=T(null),q=T(e.modelValue),L=T(!1),E=T(!0),A=T(!1),W=T(!1),l=[],b=T(0),m=T(!1);let v=null,w=null,_;const P=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Xe(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ge=f(()=>{const t=b.value,a=q.value;for(let n=0;n<t;n++)if(l[n].name.value===a)return!0;return!1}),me=f(()=>`q-tabs__content--align-${L.value===!0?"left":W.value===!0?"justify":e.align}`),Te=f(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),we=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+me.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),j=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),F=f(()=>e.vertical!==!0&&r.lang.rtl===!0),G=f(()=>he===!1&&F.value===!0);V(F,M),V(()=>e.modelValue,t=>{X({name:t,setCurrent:!0,skipEmit:!0})}),V(()=>e.outsideArrows,O);function X({name:t,setCurrent:a,skipEmit:n}){q.value!==t&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&C("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(ye(q.value,t),q.value=t))}function O(){z(()=>{ee({width:I.value.offsetWidth,height:I.value.offsetHeight})})}function ee(t){if(j.value===void 0||g.value===null)return;const a=t[j.value.container],n=Math.min(g.value[j.value.scroll],Array.prototype.reduce.call(g.value.children,(s,i)=>s+(i[j.value.content]||0),0)),u=a>0&&n>a;L.value=u,u===!0&&$(M),W.value=a<parseInt(e.breakpoint,10)}function ye(t,a){const n=t!=null&&t!==""?l.find(s=>s.name.value===t):null,u=a!=null&&a!==""?l.find(s=>s.name.value===a):null;if(n&&u){const s=n.tabIndicatorRef.value,i=u.tabIndicatorRef.value;v!==null&&(clearTimeout(v),v=null),s.style.transition="none",s.style.transform="none",i.style.transition="none",i.style.transform="none";const o=s.getBoundingClientRect(),d=i.getBoundingClientRect();i.style.transform=e.vertical===!0?`translate3d(0,${o.top-d.top}px,0) scale3d(1,${d.height?o.height/d.height:1},1)`:`translate3d(${o.left-d.left}px,0,0) scale3d(${d.width?o.width/d.width:1},1,1)`,Q(()=>{v=setTimeout(()=>{v=null,i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}u&&L.value===!0&&B(u.rootRef.value)}function B(t){const{left:a,width:n,top:u,height:s}=g.value.getBoundingClientRect(),i=t.getBoundingClientRect();let o=e.vertical===!0?i.top-u:i.left-a;if(o<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(o),M();return}o+=e.vertical===!0?i.height-s:i.width-n,o>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(o),M())}function M(){const t=g.value;if(t===null)return;const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);F.value===!0?(E.value=Math.ceil(n+a.width)<t.scrollWidth-1,A.value=n>0):(E.value=n>0,A.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}function te(t){w!==null&&clearInterval(w),w=setInterval(()=>{_e(t)===!0&&S()},5)}function ae(){te(G.value===!0?Number.MAX_SAFE_INTEGER:0)}function ne(){te(G.value===!0?0:Number.MAX_SAFE_INTEGER)}function S(){w!==null&&(clearInterval(w),w=null)}function Ce(t,a){const n=Array.prototype.filter.call(g.value.children,d=>d===a||d.matches&&d.matches(".q-tab.q-focusable")===!0),u=n.length;if(u===0)return;if(t===36)return B(n[0]),n[0].focus(),!0;if(t===35)return B(n[u-1]),n[u-1].focus(),!0;const s=t===(e.vertical===!0?38:37),i=t===(e.vertical===!0?40:39),o=s===!0?-1:i===!0?1:void 0;if(o!==void 0){const d=F.value===!0?-1:1,R=n.indexOf(a)+o*d;return R>=0&&R<u&&(B(n[R]),n[R].focus({preventScroll:!0})),!0}}const qe=f(()=>G.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function _e(t){const a=g.value,{get:n,set:u}=qe.value;let s=!1,i=n(a);const o=t<i?-1:1;return i+=o*5,i<0?(s=!0,i=0):(o===-1&&i<=t||o===1&&i>=t)&&(s=!0,i=t),u(a,i),M(),s}function le(t,a){for(const n in t)if(t[n]!==a[n])return!1;return!0}function Re(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=l.filter(o=>o.routeData!==void 0&&o.routeData.hasRouterLink.value===!0),{hash:u,query:s}=c.$route,i=Object.keys(s).length;for(const o of n){const d=o.routeData.exact.value===!0;if(o.routeData[d===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:R,query:Y,matched:Pe,href:xe}=o.routeData.resolvedLink.value,Z=Object.keys(Y).length;if(d===!0){if(R!==u||Z!==i||le(s,Y)===!1)continue;t=o.name.value;break}if(R!==""&&R!==u||Z!==0&&le(Y,s)===!1)continue;const k={matchedLen:Pe.length,queryDiff:i-Z,hrefLen:xe.length-R.length};if(k.matchedLen>a.matchedLen){t=o.name.value,a=k;continue}else if(k.matchedLen!==a.matchedLen)continue;if(k.queryDiff<a.queryDiff)t=o.name.value,a=k;else if(k.queryDiff!==a.queryDiff)continue;k.hrefLen>a.hrefLen&&(t=o.name.value,a=k)}t===null&&l.some(o=>o.routeData===void 0&&o.name.value===q.value)===!0||X({name:t,setCurrent:!0})}function Le(t){if(H(),m.value!==!0&&I.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&I.value.contains(a)===!0&&(m.value=!0,L.value===!0&&B(a))}}function Se(){D(()=>{m.value=!1},30)}function K(){re.avoidRouteWatcher===!1?x(Re):U()}function oe(){if(_===void 0){const t=V(()=>c.$route.fullPath,K);_=()=>{t(),_=void 0}}}function ke(t){l.push(t),b.value++,O(),t.routeData===void 0||c.$route===void 0?x(()=>{if(L.value===!0){const a=q.value,n=a!=null&&a!==""?l.find(u=>u.name.value===a):null;n&&B(n.rootRef.value)}}):(oe(),t.routeData.hasRouterLink.value===!0&&K())}function Ie(t){l.splice(l.indexOf(t),1),b.value--,O(),_!==void 0&&t.routeData!==void 0&&(l.every(a=>a.routeData===void 0)===!0&&_(),K())}const re={currentModel:q,tabProps:P,hasFocus:m,hasActiveTab:ge,registerTab:ke,unregisterTab:Ie,verifyRouteModel:K,updateModel:X,onKbdNavigate:Ce,avoidRouteWatcher:!1};je(ve,re);function ie(){v!==null&&clearTimeout(v),S(),_!==void 0&&_()}let ue;return de(ie),Fe(()=>{ue=_!==void 0,ie()}),Oe(()=>{ue===!0&&oe(),O()}),()=>h("div",{ref:I,class:Te.value,role:"tablist",onFocusin:Le,onFocusout:Se},[h(Ne,{onResize:ee}),h("div",{ref:g,class:we.value,onScroll:M},Ke(y.default)),h(N,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||r.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ae,onTouchstartPassive:ae,onMouseupPassive:S,onMouseleavePassive:S,onTouchendPassive:S}),h(N,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(A.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||r.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ne,onTouchstartPassive:ne,onMouseupPassive:S,onMouseleavePassive:S,onTouchendPassive:S})])}});export{et as Q,tt as a,he as r};
