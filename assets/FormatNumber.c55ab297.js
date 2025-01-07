import{au as c,ah as i,b1 as p,ak as m}from"./index.cc14c3ac.js";function l(n,t=2,a=3){n||(n=0);const s=n.toFixed(t).split(".");return s[0]=s[0].padStart(a,"0"),s.join(".")}const d=["innerHTML"],_=c({__name:"FormatNumber",props:["number","decimals","padStart"],setup(n){const t=n,a=i(()=>{const s=/^(0+)(.+)/,e=l(t.number,t.decimals,t.padStart).match(s);if(e){const r=e[1],o=e[2];return`
          <div class="row" >
          <span class="text-weight-thin">${r}</span>
          <span class="text-weight-bold">${o}</span>
          </div>
        `}return`<span class="rest">${t.number}</span>`});return(s,e)=>(p(),m("div",{innerHTML:a.value},null,8,d))}});export{_};
