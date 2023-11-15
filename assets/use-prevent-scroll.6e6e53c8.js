import{bZ as S,ah as m,aF as q,ce as E,aT as x,cH as b,c4 as a,c2 as n,cc as H,cI as P}from"./index.06e74453.js";import{b as C,a as B,t as V}from"./uid.9e9a215a.js";function Y(e,t,r){return r<=t?t:Math.min(r,Math.max(t,e))}function F(e,t,r){if(r<=t)return t;const o=r-t+1;let l=t+(e-t)%o;return l<t&&(l=o+l),l===0?0:l}const M=["top","middle","bottom"];var Q=S({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>M.includes(e)}},setup(e,{slots:t}){const r=m(()=>e.align!==void 0?{verticalAlign:e.align}:null),o=m(()=>{const l=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(l!==void 0?` text-${l}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>q("div",{class:o.value,style:r.value,role:"status","aria-label":e.label},E(t.default,e.label!==void 0?[e.label]:[]))}});function k(e,t,r){let o;function l(){o!==void 0&&(b.remove(o),o=void 0)}return x(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){o={condition:()=>r.value===!0,handler:t},b.add(o)}}}let c=0,v,w,d,g=!1,h,p,y,s=null;function z(e){$(e)&&H(e)}function $(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=P(e),r=e.shiftKey&&!e.deltaX,o=!r&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=r||o?e.deltaY:e.deltaX;for(let f=0;f<t.length;f++){const i=t[f];if(V(i,o))return o?l<0&&i.scrollTop===0?!0:l>0&&i.scrollTop+i.clientHeight===i.scrollHeight:l<0&&i.scrollLeft===0?!0:l>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function L(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function u(e){g!==!0&&(g=!0,requestAnimationFrame(()=>{g=!1;const{height:t}=e.target,{clientHeight:r,scrollTop:o}=document.scrollingElement;(d===void 0||t!==window.innerHeight)&&(d=r-t,document.scrollingElement.scrollTop=o),o>d&&(document.scrollingElement.scrollTop-=Math.ceil((o-d)/8))}))}function T(e){const t=document.body,r=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:l}=window.getComputedStyle(t);v=C(window),w=B(window),h=t.style.left,p=t.style.top,y=window.location.href,t.style.left=`-${v}px`,t.style.top=`-${w}px`,l!=="hidden"&&(l==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,a.is.ios===!0&&(r===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",u,n.passiveCapture),window.visualViewport.addEventListener("scroll",u,n.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",L,n.passiveCapture))}a.is.desktop===!0&&a.is.mac===!0&&window[`${e}EventListener`]("wheel",z,n.notPassive),e==="remove"&&(a.is.ios===!0&&(r===!0?(window.visualViewport.removeEventListener("resize",u,n.passiveCapture),window.visualViewport.removeEventListener("scroll",u,n.passiveCapture)):window.removeEventListener("scroll",L,n.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=h,t.style.top=p,window.location.href===y&&window.scrollTo(v,w),d=void 0)}function A(e){let t="add";if(e===!0){if(c++,s!==null){clearTimeout(s),s=null;return}if(c>1)return}else{if(c===0||(c--,c>0))return;if(t="remove",a.is.ios===!0&&a.is.nativeMobile===!0){s!==null&&clearTimeout(s),s=setTimeout(()=>{T(t),s=null},100);return}}T(t)}function I(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,A(t))}}}export{Q,I as a,Y as b,F as n,k as u};
