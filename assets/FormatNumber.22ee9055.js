import{d9 as o,au as i,ah as d,b1 as u,ak as _}from"./index.967c20ee.js";var l={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.associatedAddress=e.ASSOCIATED_PROGRAM_ID=e.TOKEN_PROGRAM_ID=void 0;const s=o;e.TOKEN_PROGRAM_ID=new s.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),e.ASSOCIATED_PROGRAM_ID=new s.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");function a({mint:n,owner:t}){return s.PublicKey.findProgramAddressSync([t.toBuffer(),e.TOKEN_PROGRAM_ID.toBuffer(),n.toBuffer()],e.ASSOCIATED_PROGRAM_ID)[0]}e.associatedAddress=a})(l);function f(e,s=2,a=3){e||(e=0);const n=e.toFixed(s).split(".");return n[0]=n[0].padStart(a,"0"),n.join(".")}const A=["innerHTML"],b=i({__name:"FormatNumber",props:["number","decimals","padStart"],setup(e){const s=e,a=d(()=>{const n=/^(0+)(.+)/,t=f(s.number,s.decimals,s.padStart).match(n);if(t){const r=t[1],c=t[2];return`
          <div class="row" >
          <span class="text-weight-thin">${r}</span>
          <span class="text-weight-bold">${c}</span>
          </div>
        `}return`<span class="rest">${s.number}</span>`});return(n,t)=>(u(),_("div",{innerHTML:a.value},null,8,A))}});export{b as _,l as t};
