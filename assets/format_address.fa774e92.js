import{au as l,ah as m,b1 as _,ak as f,as as r,bx as g,al as u,cW as p,Z as b,V as s,cX as o}from"./index.746aaf4d.js";import{_ as h}from"./FormatNumber.22d6da92.js";const x={class:"row q-gutter-x-xs"},y=u("div",{class:"col text-caption text-weight-light"},"Wallet-Balance:",-1),A=["src"],w=l({__name:"AccountBalance",props:["mint"],setup(t){const n=t,e=m(()=>{var c;return o().getAccountByMintPublicKey(n.mint)?(c=o().getAccountByMintPublicKey(n.mint))==null?void 0:c.info.logoURI:"unknown.svg"});return(c,B)=>{var a,i;return _(),f("div",x,[y,r(p,{size:"xs"},{default:g(()=>[u("img",{src:e.value},null,8,A)]),_:1}),r(h,{class:b(((a=s(o)().getAccountByMintPublicKey(t.mint))==null?void 0:a.uiAmount)==0?"text-red":""),number:(i=s(o)().getAccountByMintPublicKey(t.mint))==null?void 0:i.uiAmount,decimals:4,"pad-start":10},null,8,["class","number"])])}}});function K(t,n=6){if(t)try{const e=t==null?void 0:t.substring(0,n),c=t==null?void 0:t.substring(t.length-n);return`${e}[...]${c}`}catch{return"error"}return"error"}export{w as _,K as f};