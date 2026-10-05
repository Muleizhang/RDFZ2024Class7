// Store only the digest; input is hashed exactly as entered, without normalization.
const ANSWER_DIGEST='bcb77fea02f954a9b4bc41ac79bbc2dd57c93d2ab89d22e5df76ae2c2740d95e';
export async function matchesDigest(answer:string,digest:string):Promise<boolean>{
 const bytes=new TextEncoder().encode(answer);
 const hash=await globalThis.crypto.subtle.digest('SHA-256',bytes);
 const hex=Array.from(new Uint8Array(hash),b=>b.toString(16).padStart(2,'0')).join('');
 return hex===digest;
}
export function validateCheatAnswer(answer:string):Promise<boolean>{return matchesDigest(answer,ANSWER_DIGEST);}
