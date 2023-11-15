import{de as R,df as ae,d as M,dg as re,dh as w,P as E,di as u,dj as p,dk as B,dl as U,dm as se,cL as oe,dn as ie}from"./index.5f1951d0.js";import{T as f,A as C}from"./constants.19dc63bd.js";const D=e=>{const n=e.decode.bind(e),r=e.encode.bind(e);return{decode:n,encode:r}},ce=e=>n=>{const r=R(e,n),{encode:a,decode:s}=D(r),o=r;return o.decode=(c,l)=>{const I=s(c,l);return ae(M.Buffer.from(I))},o.encode=(c,l,I)=>{const te=re(c,e);return a(te,l,I)},o},A=ce(8),F=e=>{const n=w(e),{encode:r,decode:a}=D(n),s=n;return s.decode=(o,c)=>!!a(o,c),s.encode=(o,c,l)=>{const I=Number(o);return r(I,c,l)},s},i=e=>{const n=R(32,e),{encode:r,decode:a}=D(n),s=n;return s.decode=(o,c)=>{const l=a(o,c);return new E(l)},s.encode=(o,c,l)=>{const I=o.toBuffer();return r(I,c,l)},s};class d extends Error{constructor(n){super(n)}}class k extends d{constructor(){super(...arguments),this.name="TokenAccountNotFoundError"}}class ue extends d{constructor(){super(...arguments),this.name="TokenInvalidAccountError"}}class v extends d{constructor(){super(...arguments),this.name="TokenInvalidAccountOwnerError"}}class h extends d{constructor(){super(...arguments),this.name="TokenInvalidAccountSizeError"}}class le extends d{constructor(){super(...arguments),this.name="TokenInvalidMintError"}}class ve extends d{constructor(){super(...arguments),this.name="TokenInvalidOwnerError"}}class x extends d{constructor(){super(...arguments),this.name="TokenOwnerOffCurveError"}}class Le extends d{constructor(){super(...arguments),this.name="TokenInvalidInstructionProgramError"}}class Be extends d{constructor(){super(...arguments),this.name="TokenInvalidInstructionKeysError"}}class Ue extends d{constructor(){super(...arguments),this.name="TokenInvalidInstructionDataError"}}class ze extends d{constructor(){super(...arguments),this.name="TokenInvalidInstructionTypeError"}}class Re extends d{constructor(){super(...arguments),this.name="TokenUnsupportedInstructionError"}}var b;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Mint=1]="Mint",e[e.Account=2]="Account"})(b||(b={}));const L=1,P=u([w("m"),w("n"),F("isInitialized"),i("signer1"),i("signer2"),i("signer3"),i("signer4"),i("signer5"),i("signer6"),i("signer7"),i("signer8"),i("signer9"),i("signer10"),i("signer11")]),y=P.span;async function xe(e,n,r,a=f){const s=await e.getAccountInfo(n,r);return fe(n,s,a)}function fe(e,n,r=f){if(!n)throw new k;if(!n.owner.equals(r))throw new v;if(n.data.length!=y)throw new h;const a=P.decode(n.data);return{address:e,...a}}async function Pe(e,n){return await e.getMinimumBalanceForRentExemption(y,n)}var O;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initialized=1]="Initialized",e[e.Frozen=2]="Frozen"})(O||(O={}));const G=u([i("mint"),i("owner"),A("amount"),p("delegateOption"),i("delegate"),w("state"),p("isNativeOption"),A("isNative"),A("delegatedAmount"),p("closeAuthorityOption"),i("closeAuthority")]),g=G.span;async function Ge(e,n,r,a=f){const s=await e.getAccountInfo(n,r);return Z(n,s,a)}async function Ze(e,n,r,a=f){const s=await e.getMultipleAccountsInfo(n,r);return n.map((o,c)=>Z(o,s[c],a))}async function We(e,n){return await de(e,[],n)}async function de(e,n,r){const a=ee(n);return await e.getMinimumBalanceForRentExemption(a,r)}function Z(e,n,r=f){if(!n)throw new k;if(!n.owner.equals(r))throw new v;if(n.data.length<g)throw new h;const a=G.decode(n.data.slice(0,g));let s=M.Buffer.alloc(0);if(n.data.length>g){if(n.data.length===y)throw new h;if(n.data[g]!=b.Account)throw new ue;s=n.data.slice(g+L)}return{address:e,mint:a.mint,owner:a.owner,amount:a.amount,delegate:a.delegateOption?a.delegate:null,delegatedAmount:a.delegatedAmount,isInitialized:a.state!==O.Uninitialized,isFrozen:a.state===O.Frozen,isNative:!!a.isNativeOption,rentExemptReserve:a.isNativeOption?a.isNative:null,closeAuthority:a.closeAuthorityOption?a.closeAuthority:null,tlvData:s}}const W=u([p("mintAuthorityOption"),i("mintAuthority"),A("supply"),w("decimals"),F("isInitialized"),p("freezeAuthorityOption"),i("freezeAuthority")]),N=W.span;async function Ke(e,n,r,a=f){const s=await e.getAccountInfo(n,r);return me(n,s,a)}function me(e,n,r=f){if(!n)throw new k;if(!n.owner.equals(r))throw new v;if(n.data.length<N)throw new h;const a=W.decode(n.data.slice(0,N));let s=M.Buffer.alloc(0);if(n.data.length>N){if(n.data.length<=g)throw new h;if(n.data.length===y)throw new h;if(n.data[g]!=b.Mint)throw new le;s=n.data.slice(g+L)}return{address:e,mintAuthority:a.mintAuthorityOption?a.mintAuthority:null,supply:a.supply,decimals:a.decimals,isInitialized:a.isInitialized,freezeAuthority:a.freezeAuthorityOption?a.freezeAuthority:null,tlvData:s}}async function qe(e,n){return await ge(e,[],n)}async function ge(e,n,r){const a=Fe(n);return await e.getMinimumBalanceForRentExemption(a,r)}async function Ye(e,n,r=!1,a=f,s=C){if(!r&&!E.isOnCurve(n.toBuffer()))throw new x;const[o]=await E.findProgramAddress([n.toBuffer(),a.toBuffer(),e.toBuffer()],s);return o}function $e(e,n,r=!1,a=f,s=C){if(!r&&!E.isOnCurve(n.toBuffer()))throw new x;const[o]=E.findProgramAddressSync([n.toBuffer(),a.toBuffer(),e.toBuffer()],s);return o}const K=u([F("lockCpi")]),Ae=K.span;function je(e){const n=m(t.CpiGuard,e.tlvData);return n!==null?K.decode(n):null}const q=u([w("state")]),Ie=q.span;function He(e){const n=m(t.DefaultAccountState,e.tlvData);return n!==null?q.decode(n):null}const Y=u([]),Te=Y.span;function Xe(e){const n=m(t.ImmutableOwner,e.tlvData);return n!==null?Y.decode(n):null}const $=u([i("rateAuthority"),B("initializationTimestamp"),U("preUpdateAverageRate"),B("lastUpdateTimestamp"),U("currentRate")]),he=$.span;function Je(e){const n=m(t.InterestBearingConfig,e.tlvData);return n!==null?$.decode(n):null}const j=u([F("requireIncomingTransferMemos")]),we=j.span;function Qe(e){const n=m(t.MemoTransfer,e.tlvData);return n!==null?j.decode(n):null}const H=u([i("closeAuthority")]),pe=H.span;function Ve(e){const n=m(t.MintCloseAuthority,e.tlvData);return n!==null?H.decode(n):null}const _=u([]),Ee=_.span,Me=_.span;function en(e){const n=m(t.NonTransferable,e.tlvData);return n!==null?_.decode(n):null}function nn(e){const n=m(t.NonTransferableAccount,e.tlvData);return n!==null?_.decode(n):null}const X=u([i("delegate")]),Ce=X.span;function tn(e){const n=m(t.PermanentDelegate,e.tlvData);return n!==null?X.decode(n):null}const ye=1e4,an=ye;function z(e){return u([A("epoch"),A("maximumFee"),se("transferFeeBasisPoints")],e)}const J=u([i("transferFeeConfigAuthority"),i("withdrawWithheldAuthority"),A("withheldAmount"),z("olderTransferFee"),z("newerTransferFee")]),Ne=J.span,Q=u([A("withheldAmount")]),be=Q.span;function rn(e){const n=m(t.TransferFeeConfig,e.tlvData);return n!==null?J.decode(n):null}function sn(e){const n=m(t.TransferFeeAmount,e.tlvData);return n!==null?Q.decode(n):null}var t;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.TransferFeeConfig=1]="TransferFeeConfig",e[e.TransferFeeAmount=2]="TransferFeeAmount",e[e.MintCloseAuthority=3]="MintCloseAuthority",e[e.ConfidentialTransferMint=4]="ConfidentialTransferMint",e[e.ConfidentialTransferAccount=5]="ConfidentialTransferAccount",e[e.DefaultAccountState=6]="DefaultAccountState",e[e.ImmutableOwner=7]="ImmutableOwner",e[e.MemoTransfer=8]="MemoTransfer",e[e.NonTransferable=9]="NonTransferable",e[e.InterestBearingConfig=10]="InterestBearingConfig",e[e.CpiGuard=11]="CpiGuard",e[e.PermanentDelegate=12]="PermanentDelegate",e[e.NonTransferableAccount=13]="NonTransferableAccount"})(t||(t={}));const T=2,S=2;function Oe(e){switch(e){case t.Uninitialized:return 0;case t.TransferFeeConfig:return Ne;case t.TransferFeeAmount:return be;case t.MintCloseAuthority:return pe;case t.ConfidentialTransferMint:return 97;case t.ConfidentialTransferAccount:return 286;case t.CpiGuard:return Ae;case t.DefaultAccountState:return Ie;case t.ImmutableOwner:return Te;case t.MemoTransfer:return we;case t.NonTransferable:return Ee;case t.InterestBearingConfig:return he;case t.PermanentDelegate:return Ce;case t.NonTransferableAccount:return Me;default:throw Error(`Unknown extension type: ${e}`)}}function on(e){switch(e){case t.TransferFeeConfig:case t.MintCloseAuthority:case t.ConfidentialTransferMint:case t.DefaultAccountState:case t.NonTransferable:case t.InterestBearingConfig:case t.PermanentDelegate:return!0;case t.Uninitialized:case t.TransferFeeAmount:case t.ConfidentialTransferAccount:case t.ImmutableOwner:case t.MemoTransfer:case t.CpiGuard:case t.NonTransferableAccount:return!1;default:throw Error(`Unknown extension type: ${e}`)}}function cn(e){switch(e){case t.TransferFeeAmount:case t.ConfidentialTransferAccount:case t.ImmutableOwner:case t.MemoTransfer:case t.CpiGuard:case t.NonTransferableAccount:return!0;case t.Uninitialized:case t.TransferFeeConfig:case t.MintCloseAuthority:case t.ConfidentialTransferMint:case t.DefaultAccountState:case t.NonTransferable:case t.InterestBearingConfig:case t.PermanentDelegate:return!1;default:throw Error(`Unknown extension type: ${e}`)}}function Se(e){switch(e){case t.TransferFeeConfig:return t.TransferFeeAmount;case t.ConfidentialTransferMint:return t.ConfidentialTransferAccount;case t.NonTransferable:return t.NonTransferableAccount;case t.TransferFeeAmount:case t.ConfidentialTransferAccount:case t.CpiGuard:case t.DefaultAccountState:case t.ImmutableOwner:case t.MemoTransfer:case t.MintCloseAuthority:case t.Uninitialized:case t.InterestBearingConfig:case t.PermanentDelegate:case t.NonTransferableAccount:return t.Uninitialized}}function V(e,n){if(e.length===0)return n;{const r=g+L+e.filter((a,s)=>s===e.indexOf(a)).map(a=>Oe(a)+T+S).reduce((a,s)=>a+s);return r===y?r+T:r}}function Fe(e){return V(e,N)}function ee(e){return V(e,g)}function m(e,n){let r=0;for(;r+T+S<=n.length;){const a=n.readUInt16LE(r),s=n.readUInt16LE(r+T),o=r+T+S;if(a==e)return n.slice(o,o+s);r=o+s}return null}function _e(e){const n=[];let r=0;for(;r<e.length;){const a=e.readUInt16LE(r);n.push(a);const s=e.readUInt16LE(r+T);r+=T+S+s}return n}function un(e){const r=_e(e.tlvData).map(Se);return ee(r)}function ln(e,n,r,a,s=f,o=C){return ne(e,n,r,a,M.Buffer.alloc(0),s,o)}function fn(e,n,r,a,s=f,o=C){return ne(e,n,r,a,M.Buffer.from([1]),s,o)}function ne(e,n,r,a,s,o=f,c=C){const l=[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:oe.programId,isSigner:!1,isWritable:!1},{pubkey:o,isSigner:!1,isWritable:!1}];return new ie({keys:l,programId:c,data:s})}export{j as $,g as A,b as B,L as C,K as D,t as E,Ae as F,je as G,q as H,Ie as I,He as J,T as K,S as L,N as M,Oe as N,on as O,cn as P,Se as Q,ee as R,m as S,Le as T,_e as U,Y as V,Te as W,Xe as X,$ as Y,he as Z,Je as _,Ue as a,we as a0,Qe as a1,H as a2,pe as a3,Ve as a4,_ as a5,Ee as a6,Me as a7,en as a8,nn as a9,ye as aa,an as ab,z as ac,J as ad,Ne as ae,Q as af,be as ag,rn as ah,sn as ai,X as aj,Ce as ak,tn as al,O as am,G as an,Ze as ao,de as ap,Z as aq,W as ar,me as as,ge as at,P as au,xe as av,fe as aw,ze as b,ln as c,Be as d,Re as e,$e as f,Ye as g,Ke as h,un as i,fn as j,qe as k,Pe as l,y as m,We as n,Ge as o,i as p,k as q,v as r,le as s,ve as t,A as u,Fe as v,d as w,ue as x,h as y,x as z};
