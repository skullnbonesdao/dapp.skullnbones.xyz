import{d2 as _,d3 as f,d4 as O,d5 as R,d6 as T,d7 as M}from"./index.dfac9ee0.js";function l({multisigPda:e,transactionIndex:a,creator:s,rentPayer:t,vaultIndex:n,ephemeralSigners:c,transactionMessage:r,addressLookupTableAccounts:o,memo:d,programId:i=T}){const[u]=_({multisigPda:e,index:n,programId:i}),[A]=f({multisigPda:e,index:a,programId:i}),P=O({message:r,addressLookupTableAccounts:o,vaultPda:u});return R({multisig:e,transaction:A,creator:s,rentPayer:t??s},{args:{vaultIndex:n,ephemeralSigners:c,transactionMessage:P,memo:d??null}},i)}var D={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.associatedAddress=e.ASSOCIATED_PROGRAM_ID=e.TOKEN_PROGRAM_ID=void 0;const a=M;e.TOKEN_PROGRAM_ID=new a.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),e.ASSOCIATED_PROGRAM_ID=new a.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");function s({mint:t,owner:n}){return a.PublicKey.findProgramAddressSync([n.toBuffer(),e.TOKEN_PROGRAM_ID.toBuffer(),t.toBuffer()],e.ASSOCIATED_PROGRAM_ID)[0]}e.associatedAddress=s})(D);export{D as t,l as v};