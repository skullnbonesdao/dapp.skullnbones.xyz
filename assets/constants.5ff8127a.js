import{bZ as s,ah as n,aF as o,cg as d,aC as l,P as e}from"./index.bf271cfd.js";import{u as i,d as b}from"./ClosePopup.78090700.js";var N=s({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:r}){const t=n(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>o(a.tag,{class:t.value},d(r.default))}}),A=s({name:"QCard",props:{...i,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:t}}=l(),u=b(a,t),c=n(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>o(a.tag,{class:c.value},d(r.default))}});const f=new e("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),P=new e("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"),T=new e("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),g=new e("So11111111111111111111111111111111111111112"),p=new e("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");function C(a){return a!==f}export{T as A,p as N,A as Q,f as T,N as a,P as b,g as c,C as p};
