import{Q as N}from"./QSpace.4d4df3cc.js";import{Q as M}from"./QBadge.27b8c5db.js";import{Q,a as D}from"./QCard.adf1a7ab.js";import{Q as ae}from"./QSeparator.153223a5.js";import{Q as g,b as oe,a as R}from"./QInput.f788faeb.js";import{p as ne,C as T}from"./ClosePopup.8aa1f40f.js";import{bZ as ue,J as y,ah as E,aF as U,aC as se,cy as re,aQ as de,cN as ie,ck as _,dT as ce,cp as Z,au as K,b1 as m,ak as S,as as t,bx as d,ar as k,al as p,bz as B,V as P,a6 as j,ai as b,aj as h,aX as me,el as pe,b7 as F,bV as X,a1 as C,bU as $}from"./index.2d45f639.js";import{Q as fe}from"./QPage.25c14f12.js";import{apiJsonBin as z}from"./axios.05826bdf.js";import{Q as ve,c as I}from"./QSelect.b73ee245.js";import{Q as A}from"./QCardActions.0c7fa1b6.js";import"./use-key-composition.60be1ec8.js";function q(e,s=new WeakMap){if(Object(e)!==e)return e;if(s.has(e))return s.get(e);const a=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const r=e.valueOf();if(Object(r)!==r){const c=new e.constructor(r);return s.set(e,c),c}}return s.set(e,a),e instanceof Set?e.forEach(r=>{a.add(q(r,s))}):e instanceof Map&&e.forEach((r,c)=>{a.set(c,q(r,s))}),Object.assign(a,...Object.keys(e).map(r=>({[r]:q(e[r],s)})))}var J=ue({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:s,emit:a}){const{proxy:r}=se(),{$q:c}=r,o=y(null),l=y(""),n=y("");let v=!1;const x=E(()=>re({initialValue:l.value,validate:e.validate,set:i,cancel:u,updatePosition:V},"value",()=>n.value,w=>{n.value=w}));function i(){e.validate(n.value)!==!1&&(O()===!0&&(a("save",n.value,l.value),a("update:modelValue",n.value)),H())}function u(){O()===!0&&a("cancel",n.value,l.value),H()}function V(){de(()=>{o.value.updatePosition()})}function O(){return ie(n.value,l.value)===!1}function H(){v=!0,o.value.hide()}function W(){v=!1,l.value=q(e.modelValue),n.value=q(e.modelValue),a("beforeShow")}function Y(){a("show")}function ee(){v===!1&&O()===!0&&(e.autoSave===!0&&e.validate(n.value)===!0?(a("save",n.value,l.value),a("update:modelValue",n.value)):a("cancel",n.value,l.value)),a("beforeHide")}function le(){a("hide")}function te(){const w=s.default!==void 0?[].concat(s.default(x.value)):[];return e.title&&w.unshift(U("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&w.push(U("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[U(_,{flat:!0,color:e.color,label:e.labelCancel||c.lang.label.cancel,onClick:u}),U(_,{flat:!0,color:e.color,label:e.labelSet||c.lang.label.set,onClick:i})])),w}return Object.assign(r,{set:i,cancel:u,show(w){o.value!==null&&o.value.show(w)},hide(w){o.value!==null&&o.value.hide(w)},updatePosition:V}),()=>{if(e.disable!==!0)return U(ne,{ref:o,class:"q-popup-edit",cover:e.cover,onBeforeShow:W,onShow:Y,onBeforeHide:ee,onHide:le,onEscapeKey:u},te)}}});const G="66b6b699e41b4d34e41e3c95",Ve="$2a$10$pZ6Y26zPmmRlGZDWeqJFwuKB9DQq/sG6y3XJHupLKK.eTmS4lXls6",L={headers:{"X-Access-key":Ve,"Content-Type":"application/json"}},f=ce("jsonBin",{state:()=>({data:{}}),actions:{add(e){e.timestamp=Math.floor(Date.now()/1e3),f().data.record.push(e)},remove(e){this.data.record=this.data.record.filter(s=>s.timestamp!=e.timestamp)},read(){z.get(`/${G}/latest`,L).then(e=>{this.data=e.data}).catch(function(e){console.error(e)}),console.log("[jsonBin] get")},async update(){Z().is_admin&&(z.put(`/${G}`,JSON.stringify(this.data.record),L).then(()=>console.log("send update!")).catch(function(e){console.error(e)}),console.log("[jsonBin] put"))}}}),be={class:"row"},ge=p("div",{class:"text-subtitle2 text-weight-thin"},"*required",-1),ye=K({__name:"CreateNewJobDialog",props:["jobTypes"],setup(e){const s=y(!1),a=y({jobType:0}),r=E(()=>!(a.value.name&&a.value.description));return(c,o)=>(m(),S(j,null,[t(_,{round:"",color:"primary",icon:"add",onClick:o[0]||(o[0]=l=>s.value=!0)}),t(I,{modelValue:s.value,"onUpdate:modelValue":o[7]||(o[7]=l=>s.value=l),class:"justify-center","backdrop-filter":"brightness(60%)"},{default:d(()=>[t(Q,null,{default:d(()=>[t(D,{class:"row items-center q-pb-none text-h6"},{default:d(()=>[k(" Create new Job ")]),_:1}),t(D,null,{default:d(()=>[t(ve,{modelValue:a.value.jobType,"onUpdate:modelValue":o[1]||(o[1]=l=>a.value.jobType=l),options:e.jobTypes,"option-value":"id","option-label":"name","option-disable":"inactive",label:"JobType*","emit-value":"","map-options":""},null,8,["modelValue","options"]),t(g,{modelValue:a.value.name,"onUpdate:modelValue":o[2]||(o[2]=l=>a.value.name=l),label:"Label*"},null,8,["modelValue"]),t(g,{modelValue:a.value.description,"onUpdate:modelValue":o[3]||(o[3]=l=>a.value.description=l),label:"Description*",type:"textarea"},null,8,["modelValue"]),p("div",be,[t(g,{modelValue:a.value.assigned,"onUpdate:modelValue":o[4]||(o[4]=l=>a.value.assigned=l),label:"Assigned"},null,8,["modelValue"]),t(g,{modelValue:a.value.reward,"onUpdate:modelValue":o[5]||(o[5]=l=>a.value.reward=l),label:"Reward"},null,8,["modelValue"])])]),_:1}),t(A,null,{default:d(()=>[ge,t(N),B(t(_,{label:"Close",color:"primary"},null,512),[[T]]),B(t(_,{disable:r.value,label:"Add",color:"primary",onClick:o[6]||(o[6]=l=>P(f)().add(a.value))},null,8,["disable"]),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),_e=K({__name:"ConfirmDeleteJob",props:["job"],setup(e){const s=y(!1);return(a,r)=>(m(),S(j,null,[t(_,{icon:"delete",color:"red",flat:"",dense:"",size:"xs",onClick:r[0]||(r[0]=c=>s.value=!0)}),t(I,{modelValue:s.value,"onUpdate:modelValue":r[2]||(r[2]=c=>s.value=c),class:"justify-center","backdrop-filter":"brightness(60%)"},{default:d(()=>[t(Q,null,{default:d(()=>[t(D,{class:"row items-center q-pb-none text-h6"},{default:d(()=>[k(" Are you sure to delete this Job? ")]),_:1}),t(A,{align:"right"},{default:d(()=>[B(t(_,{label:"Cancel",color:"primary"},null,512),[[T]]),B(t(_,{label:"Delete",color:"red",onClick:r[1]||(r[1]=c=>P(f)().remove(e.job))},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),we=K({__name:"ExportJobs",setup(e){const s=y(!1),a=y("csv"),r=E(()=>JSON.stringify(f().data.record,null,2)),c=E(()=>{const o=f().data.record;let l="";const n=Object.keys(o[0]);return l+=n.join(",")+`
`,o.forEach(v=>{l+=n.map(x=>`"${v[x]}"`).join(",")+`
`}),l});return(o,l)=>(m(),S(j,null,[t(_,{icon:"file_download",round:"",color:"primary",onClick:l[0]||(l[0]=n=>s.value=!0)}),t(I,{"full-width":"",modelValue:s.value,"onUpdate:modelValue":l[4]||(l[4]=n=>s.value=n),class:"justify-center","backdrop-filter":"brightness(60%)"},{default:d(()=>[t(Q,null,{default:d(()=>[t(D,{class:"row items-center q-pb-none text-h6"},{default:d(()=>[k(" Export ")]),_:1}),t(D,null,{default:d(()=>[t(oe,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=n=>a.value=n)},{default:d(()=>[t(R,{name:"csv",label:"CSV"}),t(R,{name:"json",label:"JSON"})]),_:1},8,["modelValue"])]),_:1}),a.value=="json"?(m(),b(g,{key:0,modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=n=>r.value=n),filled:"",type:"textarea"},null,8,["modelValue"])):h("",!0),a.value=="csv"?(m(),b(g,{key:1,modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=n=>c.value=n),filled:"",type:"textarea"},null,8,["modelValue"])):h("",!0),t(A,{align:"right"},{default:d(()=>[B(t(_,{label:"Cancel",color:"primary"},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),xe={class:"row q-pb-sm q-gutter-x-sm"},he={class:"row q-gutter-x-sm"},ke=["onDrop"],Ce={class:"row items-center q-gutter-x-sm"},Se={class:"col text-h5"},De={class:"text-subtitle1 text-weight-light"},Ue={class:"row q-mb-md"},qe={class:"text-h6 col"},Qe={class:"row q-gutter-x-sm"},Te={class:"col text-subtitle1 text-weight-light"},Be={class:"row q-mt-sm"},Re=K({__name:"JobsPage",setup(e){me(async()=>{let o=await f().read();console.log(o)});const s=y([{id:0,name:"Todo",description:"This hasn't been completed",color:"purple"},{id:1,name:"In Progress",description:"This is actively worked on",color:"yellow-7"},{id:2,name:"On-hold",description:"This is pushed back",color:"orange-7"},{id:3,name:"Done",description:"This has been completed",color:"green"}]);pe(()=>f().data.record,()=>{f().update()});const a=y(Z().is_admin||!1);function r(o,l){o.dataTransfer.dropEffect="move",o.dataTransfer.effectAllowed="move",o.dataTransfer.setData("itemID",l.timestamp)}function c(o,l){const n=o.dataTransfer.getData("itemID"),v=f().data.record.findIndex(x=>x.timestamp==n);f().data.record[v].jobType=l}return(o,l)=>(m(),b(fe,{class:"col q-pa-sm"},{default:d(()=>[p("div",xe,[t(N),t(we),a.value?(m(),b(ye,{key:0,"job-types":s.value},null,8,["job-types"])):h("",!0)]),p("div",he,[(m(!0),S(j,null,F(s.value,n=>{var v,x;return m(),S("div",{class:"col",key:n,onDrop:i=>c(i,n.id),onDragover:l[0]||(l[0]=X(()=>{},["prevent"])),onDragenter:l[1]||(l[1]=X(()=>{},["prevent"]))},[t(Q,{flat:"",square:"",class:"q-pa-sm"},{default:d(()=>[p("div",Ce,[p("div",Se,C(n.name),1),t(M,{rounded:"",color:n.color,"text-color":"black"},null,8,["color"])]),p("div",De,C(n.description),1)]),_:2},1024),t(ae),(m(!0),S(j,null,F((x=(v=P(f)().data)==null?void 0:v.record)==null?void 0:x.filter(i=>i.jobType==n.id),i=>(m(),b(Q,{flat:"",square:"",class:"q-pa-sm q-mt-sm",key:i.timestamp},{default:d(()=>[t(D,{draggable:a.value,onDragstart:u=>r(u,i)},{default:d(()=>[p("div",Ue,[p("div",qe,[k(C(i.name)+" ",1),a.value?(m(),b(J,{key:0,modelValue:i.name,"onUpdate:modelValue":u=>i.name=u,"auto-save":""},{default:d(u=>[t(g,{modelValue:u.value,"onUpdate:modelValue":V=>u.value=V,dense:"",autofocus:"",counter:"",onKeyup:$(u.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):h("",!0)]),a.value?(m(),b(_e,{key:0,job:i},null,8,["job"])):h("",!0)]),p("div",Qe,[p("div",Te,[k(C(i.description)+" ",1),a.value?(m(),b(J,{key:0,modelValue:i.description,"onUpdate:modelValue":u=>i.description=u,"auto-save":""},{default:d(u=>[t(g,{modelValue:u.value,"onUpdate:modelValue":V=>u.value=V,dense:"",autofocus:"",counter:"",onKeyup:$(u.set,["enter"]),type:"textarea"},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):h("",!0)])]),p("div",Be,[t(M,null,{default:d(()=>[k(C(i.assigned??"-none-")+" ",1),a.value?(m(),b(J,{key:0,modelValue:i.assigned,"onUpdate:modelValue":u=>i.assigned=u,"auto-save":""},{default:d(u=>[t(g,{modelValue:u.value,"onUpdate:modelValue":V=>u.value=V,dense:"",autofocus:"",counter:"",onKeyup:$(u.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):h("",!0)]),_:2},1024),t(N),t(M,{class:"justify-center",color:"grey"},{default:d(()=>[k(C(i.reward??"-none-")+" ",1),a.value?(m(),b(J,{key:0,modelValue:i.reward,"onUpdate:modelValue":u=>i.reward=u,"auto-save":""},{default:d(u=>[t(g,{modelValue:u.value,"onUpdate:modelValue":V=>u.value=V,dense:"",autofocus:"",counter:"",onKeyup:$(u.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):h("",!0)]),_:2},1024)])]),_:2},1032,["draggable","onDragstart"])]),_:2},1024))),128))],40,ke)}),128))])]),_:1}))}});export{Re as default};
