import{au as o,ah as d,b1 as i,ak as l,as as p,Z as _,V as c,c_ as r,al as h}from"./index.142fab28.js";function b(e,a=2,n=3){e||(e=0);const t=e.toFixed(a).split(".");return t[0]=t[0].padStart(n,"0"),t.join(".")}const g=["innerHTML"],x=o({__name:"FormatNumber",props:["number","decimals","padStart"],setup(e){const a=e,n=d(()=>{const t=/^(0+)(.+)/,s=b(a.number,a.decimals,a.padStart).match(t);if(s){const u=s[1],m=s[2];return`
          <div class="row" >
          <span class="text-weight-thin">${u}</span>
          <span class="text-weight-bold">${m}</span>
          </div>
        `}return`<span class="rest">${a.number}</span>`});return(t,s)=>(i(),l("div",{innerHTML:n.value},null,8,g))}}),f={class:"row"},B=h("div",{class:"col text-caption text-weight-light"},"Wallet-Balance:",-1),y=o({__name:"AccountBalance",props:["mint"],setup(e){return(a,n)=>{var t,s;return i(),l("div",f,[B,p(x,{class:_(((t=c(r)().getAccountByMintPublicKey(e.mint))==null?void 0:t.uiAmount)==0?"text-red":""),number:(s=c(r)().getAccountByMintPublicKey(e.mint))==null?void 0:s.uiAmount,decimals:4,"pad-start":10},null,8,["class","number"])])}}});export{y as _,x as a};
