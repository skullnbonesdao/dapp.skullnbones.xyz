import{b as i,a}from"./index.8b39b2d6.js";const s="https://api.jsonbin.io/v3/b/",e=a.create({baseURL:"https://api.example.com"}),t=a.create({baseURL:s});var r=i(({app:o})=>{o.config.globalProperties.$axios=a,o.config.globalProperties.$api=e,o.config.globalProperties.$apiJsonBin=t,console.log("[booted] axios")});export{e as api,t as apiJsonBin,r as default};
