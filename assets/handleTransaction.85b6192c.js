import{u as n}from"./SquadsStore.6944ab1b.js";import{P as e,de as s,dd as h,cn as a,df as p,da as m}from"./index.ff53e052.js";import"./pda.6957f17c.js";import"./cusper.71c9b2d0.js";import{v as f}from"./token.f5a96346.js";function S(){return n().useSquads?new e(n().vaultPDA):s().publicKey.value??new e("")}const T=async(i,r="Unlabeled transaction")=>{const{sendTransaction:c}=s(),o=h.create({group:!1,timeout:0,spinner:!0,message:r,caption:"...",position:"bottom-right"});try{o({caption:"Waiting for user to sign..."});let t="";if(!n().useSquads)t=await c(i,a().connection);else{console.log(i.instructions);const u=await a().connection.getRecentBlockhash(),g=new p({payerKey:new e(n().vaultPDA),recentBlockhash:u.blockhash,instructions:i.instructions});await n().loadMultisigInfo();const d=f({multisigPda:new e(n().multisigPDA),transactionIndex:n().getNewTransactionIndex,creator:s().publicKey.value,vaultIndex:0,ephemeralSigners:0,transactionMessage:g,memo:r});t=await c(new m().add(d),a().connection)}o({caption:`Waiting for confirmation: ${t}`});const l=await a().connection.getLatestBlockhash();return await a().connection.confirmTransaction({blockhash:l.blockhash,lastValidBlockHeight:l.lastValidBlockHeight,signature:t}),o({color:"positive",timeout:5e3,icon:"done",spinner:!1,caption:`Confirmed: ${t}`}),0}catch(t){o({progress:!0,spinner:!1,icon:"error",color:"negative",timeout:5e3,caption:`Error handling transaction: ${t.toString()}`})}};export{S as g,T as h};