import{c3 as s,cw as d}from"./index.d6c7e0f7.js";import{t as a,v as c}from"./uid.22d65aff.js";const i={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},l=Object.keys(i);i.all=!0;function g(t){const e={};for(const r of l)t[r]===!0&&(e[r]=!0);return Object.keys(e).length===0?i:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const p=["INPUT","TEXTAREA"];function y(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&p.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function u(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const e=parseInt(t,10);return isNaN(e)?0:e}var m=s({name:"close-popup",beforeMount(t,{value:e}){const r={depth:u(e),handler(o){r.depth!==0&&setTimeout(()=>{const n=a(t);n!==void 0&&c(n,o,r.depth)})},handlerKey(o){d(o,13)===!0&&r.handler(o)}};t.__qclosepopup=r,t.addEventListener("click",r.handler),t.addEventListener("keyup",r.handlerKey)},updated(t,{value:e,oldValue:r}){e!==r&&(t.__qclosepopup.depth=u(e))},beforeUnmount(t){const e=t.__qclosepopup;t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup}});export{m as C,g,y as s};