import{K as J,bZ as Z,cw as Q,J as q,ah as i,bs as m,aT as W,aF as n,aC as X,bz as Y,bT as p,b_ as ee,co as w,cd as te}from"./index.746aaf4d.js";import{u as ne,e as ae,h as oe,Q as ie,k as L,j as x}from"./rtl.31b4687e.js";import{Q as le}from"./QSlideTransition.9f4fa218.js";import{Q as C}from"./QSeparator.34e714e3.js";import{u as ue,a as ce,m as y}from"./use-key-composition.af6a996d.js";const u=J({}),re=Object.keys(Q);var he=Z({name:"QExpansionItem",props:{...Q,...ne,...ue,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ae,"click","afterShow","afterHide"],setup(e,{slots:g,emit:v}){const{proxy:{$q:r}}=X(),f=ce(e,r),a=q(e.modelValue!==null?e.modelValue:e.defaultOpened),h=q(null),S=y(),{show:A,hide:I,toggle:b}=oe({showing:a});let l,c;const B=i(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),O=i(()=>{if(e.contentInsetLevel===void 0)return null;const t=r.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),d=i(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),j=i(()=>{const t={};return re.forEach(o=>{t[o]=e[o]}),t}),P=i(()=>d.value===!0||e.expandIconToggle!==!0),E=i(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||r.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),H=i(()=>e.disable!==!0&&(d.value===!0||e.expandIconToggle===!0)),N=i(()=>({expanded:a.value===!0,detailsId:e.targetUid,toggle:b,show:A,hide:I})),T=i(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:r.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":S,"aria-label":t}});m(()=>e.group,t=>{c!==void 0&&c(),t!==void 0&&k()});function R(t){d.value!==!0&&b(t),v("click",t)}function D(t){t.keyCode===13&&_(t,!0)}function _(t,o){o!==!0&&h.value!==null&&h.value.focus(),b(t),te(t)}function K(){v("afterShow")}function $(){v("afterHide")}function k(){l===void 0&&(l=y()),a.value===!0&&(u[e.group]=l);const t=m(a,s=>{s===!0?u[e.group]=l:u[e.group]===l&&delete u[e.group]}),o=m(()=>u[e.group],(s,F)=>{F===l&&s!==void 0&&s!==l&&I()});c=()=>{t(),o(),u[e.group]===l&&delete u[e.group],c=void 0}}function G(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},o=[n(w,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:E.value})];return H.value===!0&&(Object.assign(t,{tabindex:0,...T.value,onClick:_,onKeyup:D}),o.unshift(n("div",{ref:h,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),n(x,t,()=>o)}function M(){let t;return g.header!==void 0?t=[].concat(g.header(N.value)):(t=[n(x,()=>[n(L,{lines:e.labelLines},()=>e.label||""),e.caption?n(L,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](n(x,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>n(w,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](G()),t}function U(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:f.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return P.value===!0&&(t.clickable=!0,t.onClick=R,Object.assign(t,d.value===!0?j.value:T.value)),n(ie,t,M)}function V(){return Y(n("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:O.value,id:S},ee(g.default)),[[p,a.value]])}function z(){const t=[U(),n(le,{duration:e.duration,onShow:K,onHide:$},V)];return e.expandSeparator===!0&&t.push(n(C,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:f.value}),n(C,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:f.value})),t}return e.group!==void 0&&k(),W(()=>{c!==void 0&&c()}),()=>n("div",{class:B.value},[n("div",{class:"q-expansion-item__container relative-position"},z())])}});export{he as Q};