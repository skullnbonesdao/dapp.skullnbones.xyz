import{aJ as Le,b_ as ye,cN as Oe,J as O,ah as g,aT as ue,aX as he,bz as nt,cq as at,aF as k,cc as we,cu as ot,cO as De,cl as ie,ce as rt,aC as re,cP as it,bZ as qe,bs as X,b3 as ut,aV as je,aR as ze,cg as ce,cQ as st,cd as ct,cA as Ne,aU as dt,aQ as oe,ci as ft,c8 as se,cr as vt,bC as gt,c4 as ht,c9 as Ae}from"./index.bf271cfd.js";import{q as Ke,v as ke,i as Fe,Q as mt,w as Qe,u as bt,d as yt,x as kt}from"./ClosePopup.78090700.js";let Ct=0;const wt=["click","keydown"],xt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ct++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function pt(e,t,c,u){const s=Le(Oe,ye);if(s===ye)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ye;const{proxy:v}=re(),h=O(null),R=O(null),N=O(null),B=g(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),M=g(()=>s.currentModel.value===e.name),q=g(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(M.value===!0?" q-tab--active"+(s.tabProps.value.activeClass?" "+s.tabProps.value.activeClass:"")+(s.tabProps.value.activeColor?` text-${s.tabProps.value.activeColor}`:"")+(s.tabProps.value.activeBgColor?` bg-${s.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&s.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||s.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(u!==void 0?u.linkClass.value:"")),Y=g(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(s.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),T=g(()=>e.disable===!0||s.hasFocus.value===!0||M.value===!1&&s.hasActiveTab.value===!0?-1:e.tabindex||0);function P(m,$){if($!==!0&&h.value!==null&&h.value.focus(),e.disable===!0){u!==void 0&&u.hasRouterLink.value===!0&&we(m);return}if(u===void 0){s.updateModel({name:e.name}),c("click",m);return}if(u.hasRouterLink.value===!0){const I=(b={})=>{let C;const V=b.to===void 0||it(b.to,e.to)===!0?s.avoidRouteWatcher=Ke():null;return u.navigateToRouterLink(m,{...b,returnRouterError:!0}).catch(a=>{C=a}).then(a=>{if(V===s.avoidRouteWatcher&&(s.avoidRouteWatcher=!1,C===void 0&&(a===void 0||a.message.startsWith("Avoided redundant navigation")===!0)&&s.updateModel({name:e.name})),b.returnRouterError===!0)return C!==void 0?Promise.reject(C):a})};c("click",m,I),m.defaultPrevented!==!0&&I();return}c("click",m)}function H(m){ot(m,[13,32])?P(m,!0):De(m)!==!0&&m.keyCode>=35&&m.keyCode<=40&&m.altKey!==!0&&m.metaKey!==!0&&s.onKbdNavigate(m.keyCode,v.$el)===!0&&we(m),c("keydown",m)}function Z(){const m=s.tabProps.value.narrowIndicator,$=[],I=k("div",{ref:N,class:["q-tab__indicator",s.tabProps.value.indicatorClass]});e.icon!==void 0&&$.push(k(ie,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&$.push(k("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&$.push(e.alertIcon!==void 0?k(ie,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):k("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),m===!0&&$.push(I);const b=[k("div",{class:"q-focus-helper",tabindex:-1,ref:h}),k("div",{class:Y.value},rt(t.default,$))];return m===!1&&b.push(I),b}const K={name:g(()=>e.name),rootRef:R,tabIndicatorRef:N,routeData:u};ue(()=>{s.unregisterTab(K)}),he(()=>{s.registerTab(K)});function D(m,$){const I={ref:R,class:q.value,tabindex:T.value,role:"tab","aria-selected":M.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:P,onKeydown:H,...$};return nt(k(m,I,Z()),[[at,B.value]])}return{renderTab:D,$tabs:s}}var Zt=qe({name:"QTab",props:xt,emits:wt,setup(e,{slots:t,emit:c}){const{renderTab:u}=pt(e,t,c);return()=>u("div")}});let Ue=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,Ue=e.scrollLeft>=0,e.remove()}function qt(e,t,c){const u=c===!0?["left","right"]:["top","bottom"];return`absolute-${t===!0?u[0]:u[1]}${e?` text-${e}`:""}`}const St=["left","center","right","justify"];var Wt=qe({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>St.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:t,emit:c}){const{proxy:u}=re(),{$q:s}=u,{registerTick:v}=ke(),{registerTick:h}=ke(),{registerTick:R}=ke(),{registerTimeout:N,removeTimeout:B}=Fe(),{registerTimeout:M,removeTimeout:q}=Fe(),Y=O(null),T=O(null),P=O(e.modelValue),H=O(!1),Z=O(!0),K=O(!1),D=O(!1),m=[],$=O(0),I=O(!1);let b=null,C=null,V;const a=g(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:qt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),o=g(()=>{const i=$.value,f=P.value;for(let p=0;p<i;p++)if(m[p].name.value===f)return!0;return!1}),d=g(()=>`q-tabs__content--align-${H.value===!0?"left":D.value===!0?"justify":e.align}`),r=g(()=>`q-tabs row no-wrap items-center q-tabs--${H.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),S=g(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+d.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),y=g(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),_=g(()=>e.vertical!==!0&&s.lang.rtl===!0),x=g(()=>Ue===!1&&_.value===!0);X(_,l),X(()=>e.modelValue,i=>{n({name:i,setCurrent:!0,skipEmit:!0})}),X(()=>e.outsideArrows,w);function n({name:i,setCurrent:f,skipEmit:p}){P.value!==i&&(p!==!0&&e["onUpdate:modelValue"]!==void 0&&c("update:modelValue",i),(f===!0||e["onUpdate:modelValue"]===void 0)&&(F(P.value,i),P.value=i))}function w(){v(()=>{G({width:Y.value.offsetWidth,height:Y.value.offsetHeight})})}function G(i){if(y.value===void 0||T.value===null)return;const f=i[y.value.container],p=Math.min(T.value[y.value.scroll],Array.prototype.reduce.call(T.value.children,(U,E)=>U+(E[y.value.content]||0),0)),Q=f>0&&p>f;H.value=Q,Q===!0&&h(l),D.value=f<parseInt(e.breakpoint,10)}function F(i,f){const p=i!=null&&i!==""?m.find(U=>U.name.value===i):null,Q=f!=null&&f!==""?m.find(U=>U.name.value===f):null;if(p&&Q){const U=p.tabIndicatorRef.value,E=Q.tabIndicatorRef.value;b!==null&&(clearTimeout(b),b=null),U.style.transition="none",U.style.transform="none",E.style.transition="none",E.style.transform="none";const A=U.getBoundingClientRect(),J=E.getBoundingClientRect();E.style.transform=e.vertical===!0?`translate3d(0,${A.top-J.top}px,0) scale3d(1,${J.height?A.height/J.height:1},1)`:`translate3d(${A.left-J.left}px,0,0) scale3d(${J.width?A.width/J.width:1},1,1)`,R(()=>{b=setTimeout(()=>{b=null,E.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",E.style.transform="none"},70)})}Q&&H.value===!0&&L(Q.rootRef.value)}function L(i){const{left:f,width:p,top:Q,height:U}=T.value.getBoundingClientRect(),E=i.getBoundingClientRect();let A=e.vertical===!0?E.top-Q:E.left-f;if(A<0){T.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(A),l();return}A+=e.vertical===!0?E.height-U:E.width-p,A>0&&(T.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(A),l())}function l(){const i=T.value;if(i===null)return;const f=i.getBoundingClientRect(),p=e.vertical===!0?i.scrollTop:Math.abs(i.scrollLeft);_.value===!0?(Z.value=Math.ceil(p+f.width)<i.scrollWidth-1,K.value=p>0):(Z.value=p>0,K.value=e.vertical===!0?Math.ceil(p+f.height)<i.scrollHeight:Math.ceil(p+f.width)<i.scrollWidth)}function j(i){C!==null&&clearInterval(C),C=setInterval(()=>{We(i)===!0&&z()},5)}function te(){j(x.value===!0?Number.MAX_SAFE_INTEGER:0)}function ee(){j(x.value===!0?0:Number.MAX_SAFE_INTEGER)}function z(){C!==null&&(clearInterval(C),C=null)}function ne(i,f){const p=Array.prototype.filter.call(T.value.children,J=>J===f||J.matches&&J.matches(".q-tab.q-focusable")===!0),Q=p.length;if(Q===0)return;if(i===36)return L(p[0]),p[0].focus(),!0;if(i===35)return L(p[Q-1]),p[Q-1].focus(),!0;const U=i===(e.vertical===!0?38:37),E=i===(e.vertical===!0?40:39),A=U===!0?-1:E===!0?1:void 0;if(A!==void 0){const J=_.value===!0?-1:1,le=p.indexOf(f)+A*J;return le>=0&&le<Q&&(L(p[le]),p[le].focus({preventScroll:!0})),!0}}const Ze=g(()=>x.value===!0?{get:i=>Math.abs(i.scrollLeft),set:(i,f)=>{i.scrollLeft=-f}}:e.vertical===!0?{get:i=>i.scrollTop,set:(i,f)=>{i.scrollTop=f}}:{get:i=>i.scrollLeft,set:(i,f)=>{i.scrollLeft=f}});function We(i){const f=T.value,{get:p,set:Q}=Ze.value;let U=!1,E=p(f);const A=i<E?-1:1;return E+=A*5,E<0?(U=!0,E=0):(A===-1&&E<=i||A===1&&E>=i)&&(U=!0,E=i),Q(f,E),l(),U}function Se(i,f){for(const p in i)if(i[p]!==f[p])return!1;return!0}function Xe(){let i=null,f={matchedLen:0,queryDiff:9999,hrefLen:0};const p=m.filter(A=>A.routeData!==void 0&&A.routeData.hasRouterLink.value===!0),{hash:Q,query:U}=u.$route,E=Object.keys(U).length;for(const A of p){const J=A.routeData.exact.value===!0;if(A.routeData[J===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:le,query:me,matched:tt,href:lt}=A.routeData.resolvedLink.value,be=Object.keys(me).length;if(J===!0){if(le!==Q||be!==E||Se(U,me)===!1)continue;i=A.name.value;break}if(le!==""&&le!==Q||be!==0&&Se(me,U)===!1)continue;const ae={matchedLen:tt.length,queryDiff:E-be,hrefLen:lt.length-le.length};if(ae.matchedLen>f.matchedLen){i=A.name.value,f=ae;continue}else if(ae.matchedLen!==f.matchedLen)continue;if(ae.queryDiff<f.queryDiff)i=A.name.value,f=ae;else if(ae.queryDiff!==f.queryDiff)continue;ae.hrefLen>f.hrefLen&&(i=A.name.value,f=ae)}i===null&&m.some(A=>A.routeData===void 0&&A.name.value===P.value)===!0||n({name:i,setCurrent:!0})}function Ye(i){if(B(),I.value!==!0&&Y.value!==null&&i.target&&typeof i.target.closest=="function"){const f=i.target.closest(".q-tab");f&&Y.value.contains(f)===!0&&(I.value=!0,H.value===!0&&L(f))}}function Je(){N(()=>{I.value=!1},30)}function de(){Re.avoidRouteWatcher===!1?M(Xe):q()}function Me(){if(V===void 0){const i=X(()=>u.$route.fullPath,de);V=()=>{i(),V=void 0}}}function Ge(i){m.push(i),$.value++,w(),i.routeData===void 0||u.$route===void 0?M(()=>{if(H.value===!0){const f=P.value,p=f!=null&&f!==""?m.find(Q=>Q.name.value===f):null;p&&L(p.rootRef.value)}}):(Me(),i.routeData.hasRouterLink.value===!0&&de())}function et(i){m.splice(m.indexOf(i),1),$.value--,w(),V!==void 0&&i.routeData!==void 0&&(m.every(f=>f.routeData===void 0)===!0&&V(),de())}const Re={currentModel:P,tabProps:a,hasFocus:I,hasActiveTab:o,registerTab:Ge,unregisterTab:et,verifyRouteModel:de,updateModel:n,onKbdNavigate:ne,avoidRouteWatcher:!1};ut(Oe,Re);function Te(){b!==null&&clearTimeout(b),z(),V!==void 0&&V()}let _e;return ue(Te),je(()=>{_e=V!==void 0,Te()}),ze(()=>{_e===!0&&Me(),w()}),()=>k("div",{ref:Y,class:r.value,role:"tablist",onFocusin:Ye,onFocusout:Je},[k(mt,{onResize:G}),k("div",{ref:T,class:S.value,onScroll:l},ce(t.default)),k(ie,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(Z.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||s.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:te,onTouchstartPassive:te,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z}),k(ie,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(K.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||s.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ee,onTouchstartPassive:ee,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z})])}});function Mt({validate:e,resetValidation:t,requiresQForm:c}){const u=Le(st,!1);if(u!==!1){const{props:s,proxy:v}=re();Object.assign(v,{validate:e,resetValidation:t}),X(()=>s.disable,h=>{h===!0?(typeof t=="function"&&t(),u.unbindComponent(v)):u.bindComponent(v)}),he(()=>{s.disable!==!0&&u.bindComponent(v)}),ue(()=>{s.disable!==!0&&u.unbindComponent(v)})}else c===!0&&console.error("Parent QForm not found on useFormChild()!")}const Ve=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Be=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Ee=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,fe=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ve=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Ce={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Ve.test(e),hexaColor:e=>Be.test(e),hexOrHexaColor:e=>Ee.test(e),rgbColor:e=>fe.test(e),rgbaColor:e=>ve.test(e),rgbOrRgbaColor:e=>fe.test(e)||ve.test(e),hexOrRgbColor:e=>Ve.test(e)||fe.test(e),hexaOrRgbaColor:e=>Be.test(e)||ve.test(e),anyColor:e=>Ee.test(e)||fe.test(e)||ve.test(e)},Rt=[!0,!1,"ondemand"],Tt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Rt.includes(e)}};function _t(e,t){const{props:c,proxy:u}=re(),s=O(!1),v=O(null),h=O(null);Mt({validate:P,resetValidation:T});let R=0,N;const B=g(()=>c.rules!==void 0&&c.rules!==null&&c.rules.length!==0),M=g(()=>c.disable!==!0&&B.value===!0),q=g(()=>c.error===!0||s.value===!0),Y=g(()=>typeof c.errorMessage=="string"&&c.errorMessage.length!==0?c.errorMessage:v.value);X(()=>c.modelValue,()=>{H()}),X(()=>c.reactiveRules,K=>{K===!0?N===void 0&&(N=X(()=>c.rules,()=>{H(!0)})):N!==void 0&&(N(),N=void 0)},{immediate:!0}),X(e,K=>{K===!0?h.value===null&&(h.value=!1):h.value===!1&&(h.value=!0,M.value===!0&&c.lazyRules!=="ondemand"&&t.value===!1&&Z())});function T(){R++,t.value=!1,h.value=null,s.value=!1,v.value=null,Z.cancel()}function P(K=c.modelValue){if(M.value!==!0)return!0;const D=++R,m=t.value!==!0?()=>{h.value=!0}:()=>{},$=(b,C)=>{b===!0&&m(),s.value=b,v.value=C||null,t.value=!1},I=[];for(let b=0;b<c.rules.length;b++){const C=c.rules[b];let V;if(typeof C=="function"?V=C(K,Ce):typeof C=="string"&&Ce[C]!==void 0&&(V=Ce[C](K)),V===!1||typeof V=="string")return $(!0,V),!1;V!==!0&&V!==void 0&&I.push(V)}return I.length===0?($(!1),!0):(t.value=!0,Promise.all(I).then(b=>{if(b===void 0||Array.isArray(b)===!1||b.length===0)return D===R&&$(!1),!0;const C=b.find(V=>V===!1||typeof V=="string");return D===R&&$(C!==void 0,C),C===void 0},b=>(D===R&&(console.error(b),$(!0)),!1)))}function H(K){M.value===!0&&c.lazyRules!=="ondemand"&&(h.value===!0||c.lazyRules!==!0&&K!==!0)&&Z()}const Z=ct(P,0);return ue(()=>{N!==void 0&&N(),Z.cancel()}),Object.assign(u,{resetValidation:T,validate:P}),Ne(u,"hasError",()=>q.value),{isDirtyModel:h,hasRules:B,hasError:q,errorMessage:Y,validate:P,resetValidation:T}}const Pe=/^on[A-Z]/;function At(e,t){const c={listeners:O({}),attributes:O({})};function u(){const s={},v={};for(const h in e)h!=="class"&&h!=="style"&&Pe.test(h)===!1&&(s[h]=e[h]);for(const h in t.props)Pe.test(h)===!0&&(v[h]=t.props[h]);c.attributes.value=s,c.listeners.value=v}return dt(u),u(),c}function xe(e){return e===void 0?`f_${Ke()}`:e}function pe(e){return e!=null&&(""+e).length!==0}const Ft={...bt,...Tt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Vt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Bt(){const{props:e,attrs:t,proxy:c,vnode:u}=re();return{isDark:yt(e,c.$q),editable:g(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:O(!1),focused:O(!1),hasPopupOpen:!1,splitAttrs:At(t,u),targetUid:O(xe(e.for)),rootRef:O(null),targetRef:O(null),controlRef:O(null)}}function Et(e){const{props:t,emit:c,slots:u,attrs:s,proxy:v}=re(),{$q:h}=v;let R=null;e.hasValue===void 0&&(e.hasValue=g(()=>pe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{c("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:o}),Object.assign(e,{clearValue:d,onControlFocusin:a,onControlFocusout:o,focus:C}),e.computedCounter===void 0&&(e.computedCounter=g(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,w=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(w!==void 0?" / "+w:"")}}));const{isDirtyModel:N,hasRules:B,hasError:M,errorMessage:q,resetValidation:Y}=_t(e.focused,e.innerLoading),T=e.floatingLabel!==void 0?g(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):g(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),P=g(()=>t.bottomSlots===!0||t.hint!==void 0||B.value===!0||t.counter===!0||t.error!==null),H=g(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),Z=g(()=>`q-field row no-wrap items-start q-field--${H.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(T.value===!0?" q-field--float":"")+(D.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(M.value===!0?" q-field--error":"")+(M.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&P.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),K=g(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(M.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),D=g(()=>t.labelSlot===!0||t.label!==void 0),m=g(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&M.value!==!0?` text-${t.labelColor}`:"")),$=g(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:T.value,modelValue:t.modelValue,emitValue:e.emitValue})),I=g(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});X(()=>t.for,n=>{e.targetUid.value=xe(n)});function b(){const n=document.activeElement;let w=e.targetRef!==void 0&&e.targetRef.value;w&&(n===null||n.id!==e.targetUid.value)&&(w.hasAttribute("tabindex")===!0||(w=w.querySelector("[tabindex]")),w&&w!==n&&w.focus({preventScroll:!0}))}function C(){Qe(b)}function V(){kt(b);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function a(n){R!==null&&(clearTimeout(R),R=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,c("focus",n))}function o(n,w){R!==null&&clearTimeout(R),R=setTimeout(()=>{R=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,c("blur",n)),w!==void 0&&w())})}function d(n){we(n),h.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),c("update:modelValue",null),c("clear",t.modelValue),oe(()=>{Y(),h.platform.is.mobile!==!0&&(N.value=!1)})}function r(){const n=[];return u.prepend!==void 0&&n.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:se},u.prepend())),n.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},S())),M.value===!0&&t.noErrorIcon===!1&&n.push(_("error",[k(ie,{name:h.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(_("inner-loading-append",u.loading!==void 0?u.loading():[k(vt,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(_("inner-clearable-append",[k(ie,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||h.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:d})])),u.append!==void 0&&n.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:se},u.append())),e.getInnerAppend!==void 0&&n.push(_("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function S(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):u.rawControl!==void 0?n.push(u.rawControl()):u.control!==void 0&&n.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control($.value))),D.value===!0&&n.push(k("div",{class:m.value},ce(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(ce(u.default))}function y(){let n,w;M.value===!0?q.value!==null?(n=[k("div",{role:"alert"},q.value)],w=`q--slot-error-${q.value}`):(n=ce(u.error),w="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[k("div",t.hint)],w=`q--slot-hint-${t.hint}`):(n=ce(u.hint),w="q--slot-hint"));const G=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&G===!1&&n===void 0)return;const F=k("div",{key:w,class:"q-field__messages col"},n);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:se},[t.hideBottomSpace===!0?F:k(gt,{name:"q-transition--field-message"},()=>F),G===!0?k("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function _(n,w){return w===null?null:k("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},w)}let x=!1;return je(()=>{x=!0}),ze(()=>{x===!0&&t.autofocus===!0&&v.focus()}),he(()=>{ft.value===!0&&t.for===void 0&&(e.targetUid.value=xe()),t.autofocus===!0&&v.focus()}),ue(()=>{R!==null&&clearTimeout(R)}),Object.assign(v,{focus:C,blur:V}),function(){const w=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...I.value}:I.value;return k("label",{ref:e.rootRef,class:[Z.value,s.class],style:s.style,...w},[u.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:se},u.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:K.value,tabindex:-1,...e.controlEvents},r()),P.value===!0?y():null]),u.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:se},u.after()):null])}}const $e={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ge={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},He=Object.keys(ge);He.forEach(e=>{ge[e].regex=new RegExp(ge[e].pattern)});const Pt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+He.join("")+"])|(.)","g"),Ie=/[.*+?^${}()|[\]\\]/g,W=String.fromCharCode(1),$t={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function It(e,t,c,u){let s,v,h,R,N,B;const M=O(null),q=O(T());function Y(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}X(()=>e.type+e.autogrow,H),X(()=>e.mask,a=>{if(a!==void 0)Z(q.value,!0);else{const o=C(q.value);H(),e.modelValue!==o&&t("update:modelValue",o)}}),X(()=>e.fillMask+e.reverseFillMask,()=>{M.value===!0&&Z(q.value,!0)}),X(()=>e.unmaskedValue,()=>{M.value===!0&&Z(q.value)});function T(){if(H(),M.value===!0){const a=I(C(e.modelValue));return e.fillMask!==!1?V(a):a}return e.modelValue}function P(a){if(a<s.length)return s.slice(-a);let o="",d=s;const r=d.indexOf(W);if(r>-1){for(let S=a-d.length;S>0;S--)o+=W;d=d.slice(0,r)+o+d.slice(r)}return d}function H(){if(M.value=e.mask!==void 0&&e.mask.length!==0&&Y(),M.value===!1){R=void 0,s="",v="";return}const a=$e[e.mask]===void 0?e.mask:$e[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",d=o.replace(Ie,"\\$&"),r=[],S=[],y=[];let _=e.reverseFillMask===!0,x="",n="";a.replace(Pt,(L,l,j,te,ee)=>{if(te!==void 0){const z=ge[te];y.push(z),n=z.negate,_===!0&&(S.push("(?:"+n+"+)?("+z.pattern+"+)?(?:"+n+"+)?("+z.pattern+"+)?"),_=!1),S.push("(?:"+n+"+)?("+z.pattern+")?")}else if(j!==void 0)x="\\"+(j==="\\"?"":j),y.push(j),r.push("([^"+x+"]+)?"+x+"?");else{const z=l!==void 0?l:ee;x=z==="\\"?"\\\\\\\\":z.replace(Ie,"\\\\$&"),y.push(z),r.push("([^"+x+"]+)?"+x+"?")}});const w=new RegExp("^"+r.join("")+"("+(x===""?".":"[^"+x+"]")+"+)?"+(x===""?"":"["+x+"]*")+"$"),G=S.length-1,F=S.map((L,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+d+"*"+L):l===G?new RegExp("^"+L+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":d+"*")):new RegExp("^"+L));h=y,R=L=>{const l=w.exec(e.reverseFillMask===!0?L:L.slice(0,y.length+1));l!==null&&(L=l.slice(1).join(""));const j=[],te=F.length;for(let ee=0,z=L;ee<te;ee++){const ne=F[ee].exec(z);if(ne===null)break;z=z.slice(ne.shift().length),j.push(...ne)}return j.length!==0?j.join(""):L},s=y.map(L=>typeof L=="string"?L:W).join(""),v=s.split(W).join(o)}function Z(a,o,d){const r=u.value,S=r.selectionEnd,y=r.value.length-S,_=C(a);o===!0&&H();const x=I(_),n=e.fillMask!==!1?V(x):x,w=q.value!==n;r.value!==n&&(r.value=n),w===!0&&(q.value=n),document.activeElement===r&&oe(()=>{if(n===v){const F=e.reverseFillMask===!0?v.length:0;r.setSelectionRange(F,F,"forward");return}if(d==="insertFromPaste"&&e.reverseFillMask!==!0){const F=r.selectionEnd;let L=S-1;for(let l=N;l<=L&&l<F;l++)s[l]!==W&&L++;D.right(r,L);return}if(["deleteContentBackward","deleteContentForward"].indexOf(d)>-1){const F=e.reverseFillMask===!0?S===0?n.length>x.length?1:0:Math.max(0,n.length-(n===v?0:Math.min(x.length,y)+1))+1:S;r.setSelectionRange(F,F,"forward");return}if(e.reverseFillMask===!0)if(w===!0){const F=Math.max(0,n.length-(n===v?0:Math.min(x.length,y+1)));F===1&&S===1?r.setSelectionRange(F,F,"forward"):D.rightReverse(r,F)}else{const F=n.length-y;r.setSelectionRange(F,F,"backward")}else if(w===!0){const F=Math.max(0,s.indexOf(W),Math.min(x.length,S)-1);D.right(r,F)}else{const F=S-1;D.right(r,F)}});const G=e.unmaskedValue===!0?C(n):n;String(e.modelValue)!==G&&(e.modelValue!==null||G!=="")&&c(G,!0)}function K(a,o,d){const r=I(C(a.value));o=Math.max(0,s.indexOf(W),Math.min(r.length,o)),N=o,a.setSelectionRange(o,d,"forward")}const D={left(a,o){const d=s.slice(o-1).indexOf(W)===-1;let r=Math.max(0,o-1);for(;r>=0;r--)if(s[r]===W){o=r,d===!0&&o++;break}if(r<0&&s[o]!==void 0&&s[o]!==W)return D.right(a,0);o>=0&&a.setSelectionRange(o,o,"backward")},right(a,o){const d=a.value.length;let r=Math.min(d,o+1);for(;r<=d;r++)if(s[r]===W){o=r;break}else s[r-1]===W&&(o=r);if(r>d&&s[o-1]!==void 0&&s[o-1]!==W)return D.left(a,d);a.setSelectionRange(o,o,"forward")},leftReverse(a,o){const d=P(a.value.length);let r=Math.max(0,o-1);for(;r>=0;r--)if(d[r-1]===W){o=r;break}else if(d[r]===W&&(o=r,r===0))break;if(r<0&&d[o]!==void 0&&d[o]!==W)return D.rightReverse(a,0);o>=0&&a.setSelectionRange(o,o,"backward")},rightReverse(a,o){const d=a.value.length,r=P(d),S=r.slice(0,o+1).indexOf(W)===-1;let y=Math.min(d,o+1);for(;y<=d;y++)if(r[y-1]===W){o=y,o>0&&S===!0&&o--;break}if(y>d&&r[o-1]!==void 0&&r[o-1]!==W)return D.leftReverse(a,d);a.setSelectionRange(o,o,"forward")}};function m(a){t("click",a),B=void 0}function $(a){if(t("keydown",a),De(a)===!0||a.altKey===!0)return;const o=u.value,d=o.selectionStart,r=o.selectionEnd;if(a.shiftKey||(B=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&B===void 0&&(B=o.selectionDirection==="forward"?d:r);const S=D[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),S(o,B===d?r:d),a.shiftKey){const y=o.selectionStart;o.setSelectionRange(Math.min(B,y),Math.max(B,y),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&d===r?(D.left(o,d),o.setSelectionRange(o.selectionStart,r,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&d===r&&(D.rightReverse(o,r),o.setSelectionRange(d,o.selectionEnd,"forward"))}function I(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return b(a);const o=h;let d=0,r="";for(let S=0;S<o.length;S++){const y=a[d],_=o[S];if(typeof _=="string")r+=_,y===_&&d++;else if(y!==void 0&&_.regex.test(y))r+=_.transform!==void 0?_.transform(y):y,d++;else return r}return r}function b(a){const o=h,d=s.indexOf(W);let r=a.length-1,S="";for(let y=o.length-1;y>=0&&r>-1;y--){const _=o[y];let x=a[r];if(typeof _=="string")S=_+S,x===_&&r--;else if(x!==void 0&&_.regex.test(x))do S=(_.transform!==void 0?_.transform(x):x)+S,r--,x=a[r];while(d===y&&x!==void 0&&_.regex.test(x));else return S}return S}function C(a){return typeof a!="string"||R===void 0?typeof a=="number"?R(""+a):a:R(a)}function V(a){return v.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?v.slice(0,-a.length)+a:a+v.slice(a.length)}return{innerValue:q,hasMask:M,moveCursorForPaste:K,updateMaskValue:Z,onMaskedKeydown:$,onMaskedClick:m}}const Lt={name:String};function Xt(e={}){return(t,c,u)=>{t[c](k("input",{class:"hidden"+(u||""),...e.value}))}}function Ot(e){return g(()=>e.name||e.for)}function Dt(e,t){function c(){const u=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(v=>{s.items.add(v)}),{files:s.files}}catch{return{files:void 0}}}return t===!0?g(()=>{if(e.type==="file")return c()}):g(c)}const jt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,zt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Nt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Kt=/[a-z0-9_ -]$/i;function Qt(e){return function(c){if(c.type==="compositionend"||c.type==="change"){if(c.target.qComposing!==!0)return;c.target.qComposing=!1,e(c)}else c.type==="compositionupdate"&&c.target.qComposing!==!0&&typeof c.data=="string"&&(ht.is.firefox===!0?Kt.test(c.data)===!1:jt.test(c.data)===!0||zt.test(c.data)===!0||Nt.test(c.data)===!0)===!0&&(c.target.qComposing=!0)}}var Yt=qe({name:"QInput",inheritAttrs:!1,props:{...Ft,...$t,...Lt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Vt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:c}){const{proxy:u}=re(),{$q:s}=u,v={};let h=NaN,R,N,B=null,M;const q=O(null),Y=Ot(e),{innerValue:T,hasMask:P,moveCursorForPaste:H,updateMaskValue:Z,onMaskedKeydown:K,onMaskedClick:D}=It(e,t,x,q),m=Dt(e,!0),$=g(()=>pe(T.value)),I=Qt(y),b=Bt(),C=g(()=>e.type==="textarea"||e.autogrow===!0),V=g(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),a=g(()=>{const l={...b.splitAttrs.listeners.value,onInput:y,onPaste:S,onChange:w,onBlur:G,onFocus:Ae};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=I,P.value===!0&&(l.onKeydown=K,l.onClick=D),e.autogrow===!0&&(l.onAnimationend=_),l}),o=g(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Y.value,...b.splitAttrs.attributes.value,id:b.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});X(()=>e.type,()=>{q.value&&(q.value.value=e.modelValue)}),X(()=>e.modelValue,l=>{if(P.value===!0){if(N===!0&&(N=!1,String(l)===h))return;Z(l)}else T.value!==l&&(T.value=l,e.type==="number"&&v.hasOwnProperty("value")===!0&&(R===!0?R=!1:delete v.value));e.autogrow===!0&&oe(n)}),X(()=>e.autogrow,l=>{l===!0?oe(n):q.value!==null&&c.rows>0&&(q.value.style.height="auto")}),X(()=>e.dense,()=>{e.autogrow===!0&&oe(n)});function d(){Qe(()=>{const l=document.activeElement;q.value!==null&&q.value!==l&&(l===null||l.id!==b.targetUid.value)&&q.value.focus({preventScroll:!0})})}function r(){q.value!==null&&q.value.select()}function S(l){if(P.value===!0&&e.reverseFillMask!==!0){const j=l.target;H(j,j.selectionStart,j.selectionEnd)}t("paste",l)}function y(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const j=l.target.value;if(l.target.qComposing===!0){v.value=j;return}if(P.value===!0)Z(j,!1,l.inputType);else if(x(j),V.value===!0&&l.target===document.activeElement){const{selectionStart:te,selectionEnd:ee}=l.target;te!==void 0&&ee!==void 0&&oe(()=>{l.target===document.activeElement&&j.indexOf(l.target.value)===0&&l.target.setSelectionRange(te,ee)})}e.autogrow===!0&&n()}function _(l){t("animationend",l),n()}function x(l,j){M=()=>{B=null,e.type!=="number"&&v.hasOwnProperty("value")===!0&&delete v.value,e.modelValue!==l&&h!==l&&(h=l,j===!0&&(N=!0),t("update:modelValue",l),oe(()=>{h===l&&(h=NaN)})),M=void 0},e.type==="number"&&(R=!0,v.value=l),e.debounce!==void 0?(B!==null&&clearTimeout(B),v.value=l,B=setTimeout(M,e.debounce)):M()}function n(){requestAnimationFrame(()=>{const l=q.value;if(l!==null){const j=l.parentNode.style,{scrollTop:te}=l,{overflowY:ee,maxHeight:z}=s.platform.is.firefox===!0?{}:window.getComputedStyle(l),ne=ee!==void 0&&ee!=="scroll";ne===!0&&(l.style.overflowY="hidden"),j.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",ne===!0&&(l.style.overflowY=parseInt(z,10)<l.scrollHeight?"auto":"hidden"),j.marginBottom="",l.scrollTop=te}})}function w(l){I(l),B!==null&&(clearTimeout(B),B=null),M!==void 0&&M(),t("change",l.target.value)}function G(l){l!==void 0&&Ae(l),B!==null&&(clearTimeout(B),B=null),M!==void 0&&M(),R=!1,N=!1,delete v.value,e.type!=="file"&&setTimeout(()=>{q.value!==null&&(q.value.value=T.value!==void 0?T.value:"")})}function F(){return v.hasOwnProperty("value")===!0?v.value:T.value!==void 0?T.value:""}ue(()=>{G()}),he(()=>{e.autogrow===!0&&n()}),Object.assign(b,{innerValue:T,fieldClass:g(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:g(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:q,emitValue:x,hasValue:$,floatingLabel:g(()=>$.value===!0&&(e.type!=="number"||isNaN(T.value)===!1)||pe(e.displayValue)),getControl:()=>k(C.value===!0?"textarea":"input",{ref:q,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...a.value,...e.type!=="file"?{value:F()}:m.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},F()),k("span",e.shadowText)])});const L=Et(b);return Object.assign(u,{focus:d,select:r,getNativeElement:()=>q.value}),Ne(u,"nativeEl",()=>q.value),L}});export{Yt as Q,Zt as a,Wt as b,Xt as c,Ft as d,Vt as e,Et as f,Bt as g,Ot as h,pe as i,Qt as j,Ue as r,Lt as u};
