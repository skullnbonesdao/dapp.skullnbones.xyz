import{L as k,ck as w,aZ as c,b$ as p,aV as v,c3 as L,aS as b,aH as g,aE as y,c4 as m,aj as R,ci as q}from"./index.770ef299.js";import{u as x,d as O}from"./ClosePopup.43a4f2fb.js";function D(){const e=k(!w.value);return e.value===!1&&c(()=>{e.value=!0}),e}const z=typeof ResizeObserver<"u",h=z===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Q=p({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let i=null,t,s={width:-1,height:-1};function o(n){n===!0||e.debounce===0||e.debounce==="0"?a():i===null&&(i=setTimeout(a,e.debounce))}function a(){if(i!==null&&(clearTimeout(i),i=null),t){const{offsetWidth:n,offsetHeight:r}=t;(n!==s.width||r!==s.height)&&(s={width:n,height:r},l("resize",s))}}const{proxy:d}=y();if(z===!0){let n;const r=u=>{t=d.$el.parentNode,t?(n=new ResizeObserver(o),n.observe(t),a()):u!==!0&&b(()=>{r(!0)})};return c(()=>{r()}),v(()=>{i!==null&&clearTimeout(i),n!==void 0&&(n.disconnect!==void 0?n.disconnect():t&&n.unobserve(t))}),L}else{let u=function(){i!==null&&(clearTimeout(i),i=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",o,m.passive),r=void 0)},f=function(){u(),t&&t.contentDocument&&(r=t.contentDocument.defaultView,r.addEventListener("resize",o,m.passive),a())};const n=D();let r;return c(()=>{b(()=>{t=d.$el,t&&f()})}),v(u),d.trigger=o,()=>{if(n.value===!0)return g("object",{style:h.style,tabindex:-1,type:"text/html",data:h.url,"aria-hidden":"true",onLoad:f})}}}}),S=p({name:"QList",props:{...x,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const i=y(),t=O(e,i.proxy.$q),s=R(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>g(e.tag,{class:s.value},q(l.default))}});export{Q,S as a};
