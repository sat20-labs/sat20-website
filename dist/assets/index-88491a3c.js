import{d as yn,h as Ki,g as ln,e as So,i as Io,o as Gn,a as Kr,s as qr,r as Ee,c as X,b as Po,w as cn,F as de,f as Oo,j as te,T as Co,u as xo,k as Qr,l as qi,m as F,n as $,p,q as fe,t as On,v as R,x as K,y as _e,z as he,A as ue,B as ks,C as ki,D as Ts,E as We,G as Lo,H as Jr,I as No,J as un,K as Zr,L as Mo,M as Zt,N as Do,O as Ro,P as Fo,Q as zo}from"./vendor-aeaa5906.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/*!
  * shared v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Dn=typeof window<"u",ot=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Uo=(t,e,n)=>Bo({l:t,k:e,s:n}),Bo=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),ce=t=>typeof t=="number"&&isFinite(t),$o=t=>ta(t)==="[object Date]",it=t=>ta(t)==="[object RegExp]",Wn=t=>V(t)&&Object.keys(t).length===0,ge=Object.assign,Go=Object.create,Z=(t=null)=>Go(t);let Es;const Ye=()=>Es||(Es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Z());function ws(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Wo=Object.prototype.hasOwnProperty;function Me(t,e){return Wo.call(t,e)}const se=Array.isArray,ne=t=>typeof t=="function",L=t=>typeof t=="string",j=t=>typeof t=="boolean",Q=t=>t!==null&&typeof t=="object",Vo=t=>Q(t)&&ne(t.then)&&ne(t.catch),ea=Object.prototype.toString,ta=t=>ea.call(t),V=t=>{if(!Q(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},Ho=t=>t==null?"":se(t)||V(t)&&t.toString===ea?JSON.stringify(t,null,2):String(t);function jo(t,e=""){return t.reduce((n,i,s)=>s===0?n+i:n+e+i,"")}function Vn(t){let e=t;return()=>++e}function Yo(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const An=t=>!Q(t)||se(t);function Cn(t,e){if(An(t)||An(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:s}=n.pop();Object.keys(i).forEach(r=>{r!=="__proto__"&&(Q(i[r])&&!Q(s[r])&&(s[r]=Array.isArray(i[r])?[]:Z()),An(s[r])||An(i[r])?s[r]=i[r]:n.push({src:i[r],des:s[r]}))})}}/*!
  * message-compiler v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function Xo(t,e,n){return{line:t,column:e,offset:n}}function Rn(t,e,n){const i={start:t,end:e};return n!=null&&(i.source=n),i}const Ko=/\{([0-9a-zA-Z]+)\}/g;function na(t,...e){return e.length===1&&qo(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(Ko,(n,i)=>e.hasOwnProperty(i)?e[i]:"")}const ia=Object.assign,As=t=>typeof t=="string",qo=t=>t!==null&&typeof t=="object";function sa(t,e=""){return t.reduce((n,i,s)=>s===0?n+i:n+e+i,"")}const Qi={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},Qo={[Qi.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function Jo(t,e,...n){const i=na(Qo[t]||"",...n||[]),s={message:String(i),code:t};return e&&(s.location=e),s}const G={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},Zo={[G.EXPECTED_TOKEN]:"Expected token: '{0}'",[G.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[G.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[G.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[G.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[G.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[G.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[G.EMPTY_PLACEHOLDER]:"Empty placeholder",[G.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[G.INVALID_LINKED_FORMAT]:"Invalid linked format",[G.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[G.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[G.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[G.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[G.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[G.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Ft(t,e,n={}){const{domain:i,messages:s,args:r}=n,a=na((s||Zo)[t]||"",...r||[]),o=new SyntaxError(String(a));return o.code=t,e&&(o.location=e),o.domain=i,o}function el(t){throw t}const He=" ",tl="\r",be=`
`,nl=String.fromCharCode(8232),il=String.fromCharCode(8233);function sl(t){const e=t;let n=0,i=1,s=1,r=0;const a=C=>e[C]===tl&&e[C+1]===be,o=C=>e[C]===be,l=C=>e[C]===il,c=C=>e[C]===nl,f=C=>a(C)||o(C)||l(C)||c(C),h=()=>n,u=()=>i,_=()=>s,T=()=>r,k=C=>a(C)||l(C)||c(C)?be:e[C],A=()=>k(n),y=()=>k(n+r);function E(){return r=0,f(n)&&(i++,s=0),a(n)&&n++,n++,s++,e[n]}function g(){return a(n+r)&&r++,r++,e[n+r]}function v(){n=0,i=1,s=1,r=0}function I(C=0){r=C}function w(){const C=n+r;for(;C!==n;)E();r=0}return{index:h,line:u,column:_,peekOffset:T,charAt:k,currentChar:A,currentPeek:y,next:E,peek:g,reset:v,resetPeek:I,skipToPeek:w}}const et=void 0,rl=".",Ss="'",al="tokenizer";function ol(t,e={}){const n=e.location!==!1,i=sl(t),s=()=>i.index(),r=()=>Xo(i.line(),i.column(),i.index()),a=r(),o=s(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:f}=e;function h(d,m,S,...U){const ae=c();if(m.column+=S,m.offset+=S,f){const H=n?Rn(ae.startLoc,m):null,b=Ft(d,H,{domain:al,args:U});f(b)}}function u(d,m,S){d.endLoc=r(),d.currentType=m;const U={type:m};return n&&(U.loc=Rn(d.startLoc,d.endLoc)),S!=null&&(U.value=S),U}const _=d=>u(d,14);function T(d,m){return d.currentChar()===m?(d.next(),m):(h(G.EXPECTED_TOKEN,r(),0,m),"")}function k(d){let m="";for(;d.currentPeek()===He||d.currentPeek()===be;)m+=d.currentPeek(),d.peek();return m}function A(d){const m=k(d);return d.skipToPeek(),m}function y(d){if(d===et)return!1;const m=d.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m===95}function E(d){if(d===et)return!1;const m=d.charCodeAt(0);return m>=48&&m<=57}function g(d,m){const{currentType:S}=m;if(S!==2)return!1;k(d);const U=y(d.currentPeek());return d.resetPeek(),U}function v(d,m){const{currentType:S}=m;if(S!==2)return!1;k(d);const U=d.currentPeek()==="-"?d.peek():d.currentPeek(),ae=E(U);return d.resetPeek(),ae}function I(d,m){const{currentType:S}=m;if(S!==2)return!1;k(d);const U=d.currentPeek()===Ss;return d.resetPeek(),U}function w(d,m){const{currentType:S}=m;if(S!==8)return!1;k(d);const U=d.currentPeek()===".";return d.resetPeek(),U}function C(d,m){const{currentType:S}=m;if(S!==9)return!1;k(d);const U=y(d.currentPeek());return d.resetPeek(),U}function M(d,m){const{currentType:S}=m;if(!(S===8||S===12))return!1;k(d);const U=d.currentPeek()===":";return d.resetPeek(),U}function N(d,m){const{currentType:S}=m;if(S!==10)return!1;const U=()=>{const H=d.currentPeek();return H==="{"?y(d.peek()):H==="@"||H==="%"||H==="|"||H===":"||H==="."||H===He||!H?!1:H===be?(d.peek(),U()):B(d,!1)},ae=U();return d.resetPeek(),ae}function W(d){k(d);const m=d.currentPeek()==="|";return d.resetPeek(),m}function Y(d){const m=k(d),S=d.currentPeek()==="%"&&d.peek()==="{";return d.resetPeek(),{isModulo:S,hasSpace:m.length>0}}function B(d,m=!0){const S=(ae=!1,H="",b=!1)=>{const P=d.currentPeek();return P==="{"?H==="%"?!1:ae:P==="@"||!P?H==="%"?!0:ae:P==="%"?(d.peek(),S(ae,"%",!0)):P==="|"?H==="%"||b?!0:!(H===He||H===be):P===He?(d.peek(),S(!0,He,b)):P===be?(d.peek(),S(!0,be,b)):!0},U=S();return m&&d.resetPeek(),U}function D(d,m){const S=d.currentChar();return S===et?et:m(S)?(d.next(),S):null}function xe(d){const m=d.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36}function Ut(d){return D(d,xe)}function Fe(d){const m=d.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36||m===45}function Bt(d){return D(d,Fe)}function $t(d){const m=d.charCodeAt(0);return m>=48&&m<=57}function Gt(d){return D(d,$t)}function Wt(d){const m=d.charCodeAt(0);return m>=48&&m<=57||m>=65&&m<=70||m>=97&&m<=102}function Le(d){return D(d,Wt)}function ut(d){let m="",S="";for(;m=Gt(d);)S+=m;return S}function Vt(d){A(d);const m=d.currentChar();return m!=="%"&&h(G.EXPECTED_TOKEN,r(),0,m),d.next(),"%"}function yt(d){let m="";for(;;){const S=d.currentChar();if(S==="{"||S==="}"||S==="@"||S==="|"||!S)break;if(S==="%")if(B(d))m+=S,d.next();else break;else if(S===He||S===be)if(B(d))m+=S,d.next();else{if(W(d))break;m+=S,d.next()}else m+=S,d.next()}return m}function Ht(d){A(d);let m="",S="";for(;m=Bt(d);)S+=m;return d.currentChar()===et&&h(G.UNTERMINATED_CLOSING_BRACE,r(),0),S}function jt(d){A(d);let m="";return d.currentChar()==="-"?(d.next(),m+=`-${ut(d)}`):m+=ut(d),d.currentChar()===et&&h(G.UNTERMINATED_CLOSING_BRACE,r(),0),m}function En(d){return d!==Ss&&d!==be}function Yt(d){A(d),T(d,"'");let m="",S="";for(;m=D(d,En);)m==="\\"?S+=Xt(d):S+=m;const U=d.currentChar();return U===be||U===et?(h(G.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,r(),0),U===be&&(d.next(),T(d,"'")),S):(T(d,"'"),S)}function Xt(d){const m=d.currentChar();switch(m){case"\\":case"'":return d.next(),`\\${m}`;case"u":return vt(d,m,4);case"U":return vt(d,m,6);default:return h(G.UNKNOWN_ESCAPE_SEQUENCE,r(),0,m),""}}function vt(d,m,S){T(d,m);let U="";for(let ae=0;ae<S;ae++){const H=Le(d);if(!H){h(G.INVALID_UNICODE_ESCAPE_SEQUENCE,r(),0,`\\${m}${U}${d.currentChar()}`);break}U+=H}return`\\${m}${U}`}function Kt(d){return d!=="{"&&d!=="}"&&d!==He&&d!==be}function qt(d){A(d);let m="",S="";for(;m=D(d,Kt);)S+=m;return S}function Qt(d){let m="",S="";for(;m=Ut(d);)S+=m;return S}function x(d){const m=S=>{const U=d.currentChar();return U==="{"||U==="%"||U==="@"||U==="|"||U==="("||U===")"||!U||U===He?S:(S+=U,d.next(),m(S))};return m("")}function J(d){A(d);const m=T(d,"|");return A(d),m}function bt(d,m){let S=null;switch(d.currentChar()){case"{":return m.braceNest>=1&&h(G.NOT_ALLOW_NEST_PLACEHOLDER,r(),0),d.next(),S=u(m,2,"{"),A(d),m.braceNest++,S;case"}":return m.braceNest>0&&m.currentType===2&&h(G.EMPTY_PLACEHOLDER,r(),0),d.next(),S=u(m,3,"}"),m.braceNest--,m.braceNest>0&&A(d),m.inLinked&&m.braceNest===0&&(m.inLinked=!1),S;case"@":return m.braceNest>0&&h(G.UNTERMINATED_CLOSING_BRACE,r(),0),S=kt(d,m)||_(m),m.braceNest=0,S;default:{let ae=!0,H=!0,b=!0;if(W(d))return m.braceNest>0&&h(G.UNTERMINATED_CLOSING_BRACE,r(),0),S=u(m,1,J(d)),m.braceNest=0,m.inLinked=!1,S;if(m.braceNest>0&&(m.currentType===5||m.currentType===6||m.currentType===7))return h(G.UNTERMINATED_CLOSING_BRACE,r(),0),m.braceNest=0,Jt(d,m);if(ae=g(d,m))return S=u(m,5,Ht(d)),A(d),S;if(H=v(d,m))return S=u(m,6,jt(d)),A(d),S;if(b=I(d,m))return S=u(m,7,Yt(d)),A(d),S;if(!ae&&!H&&!b)return S=u(m,13,qt(d)),h(G.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,S.value),A(d),S;break}}return S}function kt(d,m){const{currentType:S}=m;let U=null;const ae=d.currentChar();switch((S===8||S===9||S===12||S===10)&&(ae===be||ae===He)&&h(G.INVALID_LINKED_FORMAT,r(),0),ae){case"@":return d.next(),U=u(m,8,"@"),m.inLinked=!0,U;case".":return A(d),d.next(),u(m,9,".");case":":return A(d),d.next(),u(m,10,":");default:return W(d)?(U=u(m,1,J(d)),m.braceNest=0,m.inLinked=!1,U):w(d,m)||M(d,m)?(A(d),kt(d,m)):C(d,m)?(A(d),u(m,12,Qt(d))):N(d,m)?(A(d),ae==="{"?bt(d,m)||U:u(m,11,x(d))):(S===8&&h(G.INVALID_LINKED_FORMAT,r(),0),m.braceNest=0,m.inLinked=!1,Jt(d,m))}}function Jt(d,m){let S={type:14};if(m.braceNest>0)return bt(d,m)||_(m);if(m.inLinked)return kt(d,m)||_(m);switch(d.currentChar()){case"{":return bt(d,m)||_(m);case"}":return h(G.UNBALANCED_CLOSING_BRACE,r(),0),d.next(),u(m,3,"}");case"@":return kt(d,m)||_(m);default:{if(W(d))return S=u(m,1,J(d)),m.braceNest=0,m.inLinked=!1,S;const{isModulo:ae,hasSpace:H}=Y(d);if(ae)return H?u(m,0,yt(d)):u(m,4,Vt(d));if(B(d))return u(m,0,yt(d));break}}return S}function ti(){const{currentType:d,offset:m,startLoc:S,endLoc:U}=l;return l.lastType=d,l.lastOffset=m,l.lastStartLoc=S,l.lastEndLoc=U,l.offset=s(),l.startLoc=r(),i.currentChar()===et?u(l,14):Jt(i,l)}return{nextToken:ti,currentOffset:s,currentPosition:r,context:c}}const ll="parser",cl=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function ul(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function fl(t={}){const e=t.location!==!1,{onError:n,onWarn:i}=t;function s(g,v,I,w,...C){const M=g.currentPosition();if(M.offset+=w,M.column+=w,n){const N=e?Rn(I,M):null,W=Ft(v,N,{domain:ll,args:C});n(W)}}function r(g,v,I,w,...C){const M=g.currentPosition();if(M.offset+=w,M.column+=w,i){const N=e?Rn(I,M):null;i(Jo(v,N,C))}}function a(g,v,I){const w={type:g};return e&&(w.start=v,w.end=v,w.loc={start:I,end:I}),w}function o(g,v,I,w){w&&(g.type=w),e&&(g.end=v,g.loc&&(g.loc.end=I))}function l(g,v){const I=g.context(),w=a(3,I.offset,I.startLoc);return w.value=v,o(w,g.currentOffset(),g.currentPosition()),w}function c(g,v){const I=g.context(),{lastOffset:w,lastStartLoc:C}=I,M=a(5,w,C);return M.index=parseInt(v,10),g.nextToken(),o(M,g.currentOffset(),g.currentPosition()),M}function f(g,v,I){const w=g.context(),{lastOffset:C,lastStartLoc:M}=w,N=a(4,C,M);return N.key=v,I===!0&&(N.modulo=!0),g.nextToken(),o(N,g.currentOffset(),g.currentPosition()),N}function h(g,v){const I=g.context(),{lastOffset:w,lastStartLoc:C}=I,M=a(9,w,C);return M.value=v.replace(cl,ul),g.nextToken(),o(M,g.currentOffset(),g.currentPosition()),M}function u(g){const v=g.nextToken(),I=g.context(),{lastOffset:w,lastStartLoc:C}=I,M=a(8,w,C);return v.type!==12?(s(g,G.UNEXPECTED_EMPTY_LINKED_MODIFIER,I.lastStartLoc,0),M.value="",o(M,w,C),{nextConsumeToken:v,node:M}):(v.value==null&&s(g,G.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,Ne(v)),M.value=v.value||"",o(M,g.currentOffset(),g.currentPosition()),{node:M})}function _(g,v){const I=g.context(),w=a(7,I.offset,I.startLoc);return w.value=v,o(w,g.currentOffset(),g.currentPosition()),w}function T(g){const v=g.context(),I=a(6,v.offset,v.startLoc);let w=g.nextToken();if(w.type===9){const C=u(g);I.modifier=C.node,w=C.nextConsumeToken||g.nextToken()}switch(w.type!==10&&s(g,G.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Ne(w)),w=g.nextToken(),w.type===2&&(w=g.nextToken()),w.type){case 11:w.value==null&&s(g,G.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Ne(w)),I.key=_(g,w.value||"");break;case 5:w.value==null&&s(g,G.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Ne(w)),I.key=f(g,w.value||"");break;case 6:w.value==null&&s(g,G.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Ne(w)),I.key=c(g,w.value||"");break;case 7:w.value==null&&s(g,G.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Ne(w)),I.key=h(g,w.value||"");break;default:{s(g,G.UNEXPECTED_EMPTY_LINKED_KEY,v.lastStartLoc,0);const C=g.context(),M=a(7,C.offset,C.startLoc);return M.value="",o(M,C.offset,C.startLoc),I.key=M,o(I,C.offset,C.startLoc),{nextConsumeToken:w,node:I}}}return o(I,g.currentOffset(),g.currentPosition()),{node:I}}function k(g){const v=g.context(),I=v.currentType===1?g.currentOffset():v.offset,w=v.currentType===1?v.endLoc:v.startLoc,C=a(2,I,w);C.items=[];let M=null,N=null;do{const B=M||g.nextToken();switch(M=null,B.type){case 0:B.value==null&&s(g,G.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Ne(B)),C.items.push(l(g,B.value||""));break;case 6:B.value==null&&s(g,G.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Ne(B)),C.items.push(c(g,B.value||""));break;case 4:N=!0;break;case 5:B.value==null&&s(g,G.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Ne(B)),C.items.push(f(g,B.value||"",!!N)),N&&(r(g,Qi.USE_MODULO_SYNTAX,v.lastStartLoc,0,Ne(B)),N=null);break;case 7:B.value==null&&s(g,G.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Ne(B)),C.items.push(h(g,B.value||""));break;case 8:{const D=T(g);C.items.push(D.node),M=D.nextConsumeToken||null;break}}}while(v.currentType!==14&&v.currentType!==1);const W=v.currentType===1?v.lastOffset:g.currentOffset(),Y=v.currentType===1?v.lastEndLoc:g.currentPosition();return o(C,W,Y),C}function A(g,v,I,w){const C=g.context();let M=w.items.length===0;const N=a(1,v,I);N.cases=[],N.cases.push(w);do{const W=k(g);M||(M=W.items.length===0),N.cases.push(W)}while(C.currentType!==14);return M&&s(g,G.MUST_HAVE_MESSAGES_IN_PLURAL,I,0),o(N,g.currentOffset(),g.currentPosition()),N}function y(g){const v=g.context(),{offset:I,startLoc:w}=v,C=k(g);return v.currentType===14?C:A(g,I,w,C)}function E(g){const v=ol(g,ia({},t)),I=v.context(),w=a(0,I.offset,I.startLoc);return e&&w.loc&&(w.loc.source=g),w.body=y(v),t.onCacheKey&&(w.cacheKey=t.onCacheKey(g)),I.currentType!==14&&s(v,G.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,g[I.offset]||""),o(w,v.currentOffset(),v.currentPosition()),w}return{parse:E}}function Ne(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function dl(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:r=>(n.helpers.add(r),r)}}function Is(t,e){for(let n=0;n<t.length;n++)Ji(t[n],e)}function Ji(t,e){switch(t.type){case 1:Is(t.cases,e),e.helper("plural");break;case 2:Is(t.items,e);break;case 6:{Ji(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function hl(t,e={}){const n=dl(t);n.helper("normalize"),t.body&&Ji(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function ml(t){const e=t.body;return e.type===2?Ps(e):e.cases.forEach(n=>Ps(n)),t}function Ps(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=sa(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}const pl="minifier";function At(t){switch(t.t=t.type,t.type){case 0:{const e=t;At(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)At(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)At(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;At(e.key),e.k=e.key,delete e.key,e.modifier&&(At(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw Ft(G.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:pl,args:[t.type]})}delete t.type}const gl="parser";function _l(t,e){const{sourceMap:n,filename:i,breakLineCode:s,needIndent:r}=e,a=e.location!==!1,o={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:s,needIndent:r,indentLevel:0};a&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(A,y){o.code+=A}function f(A,y=!0){const E=y?s:"";c(r?E+"  ".repeat(A):E)}function h(A=!0){const y=++o.indentLevel;A&&f(y)}function u(A=!0){const y=--o.indentLevel;A&&f(y)}function _(){f(o.indentLevel)}return{context:l,push:c,indent:h,deindent:u,newline:_,helper:A=>`_${A}`,needIndent:()=>o.needIndent}}function yl(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Lt(t,e.key),e.modifier?(t.push(", "),Lt(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function vl(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const s=e.items.length;for(let r=0;r<s&&(Lt(t,e.items[r]),r!==s-1);r++)t.push(", ");t.deindent(i()),t.push("])")}function bl(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const s=e.cases.length;for(let r=0;r<s&&(Lt(t,e.cases[r]),r!==s-1);r++)t.push(", ");t.deindent(i()),t.push("])")}}function kl(t,e){e.body?Lt(t,e.body):t.push("null")}function Lt(t,e){const{helper:n}=t;switch(e.type){case 0:kl(t,e);break;case 1:bl(t,e);break;case 2:vl(t,e);break;case 6:yl(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Ft(G.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:gl,args:[e.type]})}}const Tl=(t,e={})=>{const n=As(e.mode)?e.mode:"normal",i=As(e.filename)?e.filename:"message.intl",s=!!e.sourceMap,r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,a=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=_l(t,{mode:n,filename:i,sourceMap:s,breakLineCode:r,needIndent:a});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),o.length>0&&(l.push(`const { ${sa(o.map(h=>`${h}: _${h}`),", ")} } = ctx`),l.newline()),l.push("return "),Lt(l,t),l.deindent(a),l.push("}"),delete t.helpers;const{code:c,map:f}=l.context();return{ast:t,code:c,map:f?f.toJSON():void 0}};function El(t,e={}){const n=ia({},e),i=!!n.jit,s=!!n.minify,r=n.optimize==null?!0:n.optimize,o=fl(n).parse(t);return i?(r&&ml(o),s&&At(o),{ast:o,code:""}):(hl(o,n),Tl(o,n))}/*!
  * core-base v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function wl(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ye().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Ye().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Ye().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const lt=[];lt[0]={w:[0],i:[3,0],"[":[4],o:[7]};lt[1]={w:[1],".":[2],"[":[4],o:[7]};lt[2]={w:[2],i:[3,0],0:[3,0]};lt[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};lt[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};lt[5]={"'":[4,0],o:8,l:[5,0]};lt[6]={'"':[4,0],o:8,l:[6,0]};const Al=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Sl(t){return Al.test(t)}function Il(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Pl(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Ol(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Sl(e)?Il(e):"*"+e}function Cl(t){const e=[];let n=-1,i=0,s=0,r,a,o,l,c,f,h;const u=[];u[0]=()=>{a===void 0?a=o:a+=o},u[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},u[2]=()=>{u[0](),s++},u[3]=()=>{if(s>0)s--,i=4,u[0]();else{if(s=0,a===void 0||(a=Ol(a),a===!1))return!1;u[1]()}};function _(){const T=t[n+1];if(i===5&&T==="'"||i===6&&T==='"')return n++,o="\\"+T,u[0](),!0}for(;i!==null;)if(n++,r=t[n],!(r==="\\"&&_())){if(l=Pl(r),h=lt[i],c=h[l]||h.l||8,c===8||(i=c[0],c[1]!==void 0&&(f=u[c[1]],f&&(o=r,f()===!1))))return;if(i===7)return e}}const Os=new Map;function xl(t,e){return Q(t)?t[e]:null}function Ll(t,e){if(!Q(t))return null;let n=Os.get(e);if(n||(n=Cl(e),n&&Os.set(e,n)),!n)return null;const i=n.length;let s=t,r=0;for(;r<i;){const a=s[n[r]];if(a===void 0||ne(s))return null;s=a,r++}return s}const Nl=t=>t,Ml=t=>"",Dl="text",Rl=t=>t.length===0?"":jo(t),Fl=Ho;function Cs(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function zl(t){const e=ce(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(ce(t.named.count)||ce(t.named.n))?ce(t.named.count)?t.named.count:ce(t.named.n)?t.named.n:e:e}function Ul(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Bl(t={}){const e=t.locale,n=zl(t),i=Q(t.pluralRules)&&L(e)&&ne(t.pluralRules[e])?t.pluralRules[e]:Cs,s=Q(t.pluralRules)&&L(e)&&ne(t.pluralRules[e])?Cs:void 0,r=y=>y[i(n,y.length,s)],a=t.list||[],o=y=>a[y],l=t.named||Z();ce(t.pluralIndex)&&Ul(n,l);const c=y=>l[y];function f(y){const E=ne(t.messages)?t.messages(y):Q(t.messages)?t.messages[y]:!1;return E||(t.parent?t.parent.message(y):Ml)}const h=y=>t.modifiers?t.modifiers[y]:Nl,u=V(t.processor)&&ne(t.processor.normalize)?t.processor.normalize:Rl,_=V(t.processor)&&ne(t.processor.interpolate)?t.processor.interpolate:Fl,T=V(t.processor)&&L(t.processor.type)?t.processor.type:Dl,A={list:o,named:c,plural:r,linked:(y,...E)=>{const[g,v]=E;let I="text",w="";E.length===1?Q(g)?(w=g.modifier||w,I=g.type||I):L(g)&&(w=g||w):E.length===2&&(L(g)&&(w=g||w),L(v)&&(I=v||I));const C=f(y)(A),M=I==="vnode"&&se(C)&&w?C[0]:C;return w?h(w)(M,I):M},message:f,type:T,interpolate:_,normalize:u,values:ge(Z(),a,l)};return A}let fn=null;function $l(t){fn=t}function Gl(t,e,n){fn&&fn.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const Wl=Vl("function:translate");function Vl(t){return e=>fn&&fn.emit(t,e)}const ra=Qi.__EXTEND_POINT__,ft=Vn(ra),Hl={NOT_FOUND_KEY:ra,FALLBACK_TO_TRANSLATE:ft(),CANNOT_FORMAT_NUMBER:ft(),FALLBACK_TO_NUMBER_FORMAT:ft(),CANNOT_FORMAT_DATE:ft(),FALLBACK_TO_DATE_FORMAT:ft(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:ft(),__EXTEND_POINT__:ft()},aa=G.__EXTEND_POINT__,dt=Vn(aa),De={INVALID_ARGUMENT:aa,INVALID_DATE_ARGUMENT:dt(),INVALID_ISO_DATE_ARGUMENT:dt(),NOT_SUPPORT_NON_STRING_MESSAGE:dt(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:dt(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:dt(),NOT_SUPPORT_LOCALE_TYPE:dt(),__EXTEND_POINT__:dt()};function ze(t){return Ft(t,null,void 0)}function Zi(t,e){return e.locale!=null?xs(e.locale):xs(t.locale)}let ni;function xs(t){if(L(t))return t;if(ne(t)){if(t.resolvedOnce&&ni!=null)return ni;if(t.constructor.name==="Function"){const e=t();if(Vo(e))throw ze(De.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return ni=e}else throw ze(De.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw ze(De.NOT_SUPPORT_LOCALE_TYPE)}function jl(t,e,n){return[...new Set([n,...se(e)?e:Q(e)?Object.keys(e):L(e)?[e]:[n]])]}function oa(t,e,n){const i=L(n)?n:Nt,s=t;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(i);if(!r){r=[];let a=[n];for(;se(a);)a=Ls(r,a,e);const o=se(e)||!V(e)?e:e.default?e.default:null;a=L(o)?[o]:o,se(a)&&Ls(r,a,!1),s.__localeChainCache.set(i,r)}return r}function Ls(t,e,n){let i=!0;for(let s=0;s<e.length&&j(i);s++){const r=e[s];L(r)&&(i=Yl(t,e[s],n))}return i}function Yl(t,e,n){let i;const s=e.split("-");do{const r=s.join("-");i=Xl(t,r,n),s.splice(-1,1)}while(s.length&&i===!0);return i}function Xl(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(se(n)||V(n))&&n[s]&&(i=n[s])}return i}const Kl="9.14.2",Hn=-1,Nt="en-US",Ns="",Ms=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function ql(){return{upper:(t,e)=>e==="text"&&L(t)?t.toUpperCase():e==="vnode"&&Q(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&L(t)?t.toLowerCase():e==="vnode"&&Q(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&L(t)?Ms(t):e==="vnode"&&Q(t)&&"__v_isVNode"in t?Ms(t.children):t}}let la;function Ds(t){la=t}let ca;function Ql(t){ca=t}let ua;function Jl(t){ua=t}let fa=null;const Zl=t=>{fa=t},ec=()=>fa;let da=null;const Rs=t=>{da=t},tc=()=>da;let Fs=0;function nc(t={}){const e=ne(t.onWarn)?t.onWarn:Yo,n=L(t.version)?t.version:Kl,i=L(t.locale)||ne(t.locale)?t.locale:Nt,s=ne(i)?Nt:i,r=se(t.fallbackLocale)||V(t.fallbackLocale)||L(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,a=V(t.messages)?t.messages:ii(s),o=V(t.datetimeFormats)?t.datetimeFormats:ii(s),l=V(t.numberFormats)?t.numberFormats:ii(s),c=ge(Z(),t.modifiers,ql()),f=t.pluralRules||Z(),h=ne(t.missing)?t.missing:null,u=j(t.missingWarn)||it(t.missingWarn)?t.missingWarn:!0,_=j(t.fallbackWarn)||it(t.fallbackWarn)?t.fallbackWarn:!0,T=!!t.fallbackFormat,k=!!t.unresolving,A=ne(t.postTranslation)?t.postTranslation:null,y=V(t.processor)?t.processor:null,E=j(t.warnHtmlMessage)?t.warnHtmlMessage:!0,g=!!t.escapeParameter,v=ne(t.messageCompiler)?t.messageCompiler:la,I=ne(t.messageResolver)?t.messageResolver:ca||xl,w=ne(t.localeFallbacker)?t.localeFallbacker:ua||jl,C=Q(t.fallbackContext)?t.fallbackContext:void 0,M=t,N=Q(M.__datetimeFormatters)?M.__datetimeFormatters:new Map,W=Q(M.__numberFormatters)?M.__numberFormatters:new Map,Y=Q(M.__meta)?M.__meta:{};Fs++;const B={version:n,cid:Fs,locale:i,fallbackLocale:r,messages:a,modifiers:c,pluralRules:f,missing:h,missingWarn:u,fallbackWarn:_,fallbackFormat:T,unresolving:k,postTranslation:A,processor:y,warnHtmlMessage:E,escapeParameter:g,messageCompiler:v,messageResolver:I,localeFallbacker:w,fallbackContext:C,onWarn:e,__meta:Y};return B.datetimeFormats=o,B.numberFormats=l,B.__datetimeFormatters=N,B.__numberFormatters=W,__INTLIFY_PROD_DEVTOOLS__&&Gl(B,n,Y),B}const ii=t=>({[t]:Z()});function es(t,e,n,i,s){const{missing:r,onWarn:a}=t;if(r!==null){const o=r(t,n,e,s);return L(o)?o:e}else return e}function en(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function ic(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function sc(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(ic(t,e[i]))return!0;return!1}function si(t){return n=>rc(n,t)}function rc(t,e){const n=oc(e);if(n==null)throw dn(0);if(ts(n)===1){const r=cc(n);return t.plural(r.reduce((a,o)=>[...a,zs(t,o)],[]))}else return zs(t,n)}const ac=["b","body"];function oc(t){return ct(t,ac)}const lc=["c","cases"];function cc(t){return ct(t,lc,[])}function zs(t,e){const n=fc(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=hc(e).reduce((s,r)=>[...s,Ti(t,r)],[]);return t.normalize(i)}}const uc=["s","static"];function fc(t){return ct(t,uc)}const dc=["i","items"];function hc(t){return ct(t,dc,[])}function Ti(t,e){const n=ts(e);switch(n){case 3:return Sn(e,n);case 9:return Sn(e,n);case 4:{const i=e;if(Me(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Me(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw dn(n)}case 5:{const i=e;if(Me(i,"i")&&ce(i.i))return t.interpolate(t.list(i.i));if(Me(i,"index")&&ce(i.index))return t.interpolate(t.list(i.index));throw dn(n)}case 6:{const i=e,s=_c(i),r=vc(i);return t.linked(Ti(t,r),s?Ti(t,s):void 0,t.type)}case 7:return Sn(e,n);case 8:return Sn(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const mc=["t","type"];function ts(t){return ct(t,mc)}const pc=["v","value"];function Sn(t,e){const n=ct(t,pc);if(n)return n;throw dn(e)}const gc=["m","modifier"];function _c(t){return ct(t,gc)}const yc=["k","key"];function vc(t){const e=ct(t,yc);if(e)return e;throw dn(6)}function ct(t,e,n){for(let i=0;i<e.length;i++){const s=e[i];if(Me(t,s)&&t[s]!=null)return t[s]}return n}function dn(t){return new Error(`unhandled node type: ${t}`)}const ha=t=>t;let St=Z();function Mt(t){return Q(t)&&ts(t)===0&&(Me(t,"b")||Me(t,"body"))}function ma(t,e={}){let n=!1;const i=e.onError||el;return e.onError=s=>{n=!0,i(s)},{...El(t,e),detectError:n}}const bc=(t,e)=>{if(!L(t))throw ze(De.NOT_SUPPORT_NON_STRING_MESSAGE);{j(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||ha)(t),s=St[i];if(s)return s;const{code:r,detectError:a}=ma(t,e),o=new Function(`return ${r}`)();return a?o:St[i]=o}};function kc(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&L(t)){j(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||ha)(t),s=St[i];if(s)return s;const{ast:r,detectError:a}=ma(t,{...e,location:!1,jit:!0}),o=si(r);return a?o:St[i]=o}else{const n=t.cacheKey;if(n){const i=St[n];return i||(St[n]=si(t))}else return si(t)}}const Us=()=>"",Oe=t=>ne(t);function Bs(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:s,messageCompiler:r,fallbackLocale:a,messages:o}=t,[l,c]=Ei(...e),f=j(c.missingWarn)?c.missingWarn:t.missingWarn,h=j(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,u=j(c.escapeParameter)?c.escapeParameter:t.escapeParameter,_=!!c.resolvedMessage,T=L(c.default)||j(c.default)?j(c.default)?r?l:()=>l:c.default:n?r?l:()=>l:"",k=n||T!=="",A=Zi(t,c);u&&Tc(c);let[y,E,g]=_?[l,A,o[A]||Z()]:pa(t,l,A,a,h,f),v=y,I=l;if(!_&&!(L(v)||Mt(v)||Oe(v))&&k&&(v=T,I=v),!_&&(!(L(v)||Mt(v)||Oe(v))||!L(E)))return s?Hn:l;let w=!1;const C=()=>{w=!0},M=Oe(v)?v:ga(t,l,E,v,I,C);if(w)return v;const N=Ac(t,E,g,c),W=Bl(N),Y=Ec(t,M,W),B=i?i(Y,l):Y;if(__INTLIFY_PROD_DEVTOOLS__){const D={timestamp:Date.now(),key:L(l)?l:Oe(v)?v.key:"",locale:E||(Oe(v)?v.locale:""),format:L(v)?v:Oe(v)?v.source:"",message:B};D.meta=ge({},t.__meta,ec()||{}),Wl(D)}return B}function Tc(t){se(t.list)?t.list=t.list.map(e=>L(e)?ws(e):e):Q(t.named)&&Object.keys(t.named).forEach(e=>{L(t.named[e])&&(t.named[e]=ws(t.named[e]))})}function pa(t,e,n,i,s,r){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=t,f=c(t,i,n);let h=Z(),u,_=null;const T="translate";for(let k=0;k<f.length&&(u=f[k],h=a[u]||Z(),(_=l(h,e))===null&&(_=h[e]),!(L(_)||Mt(_)||Oe(_)));k++)if(!sc(u,f)){const A=es(t,e,u,r,T);A!==e&&(_=A)}return[_,u,h]}function ga(t,e,n,i,s,r){const{messageCompiler:a,warnHtmlMessage:o}=t;if(Oe(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(a==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=a(i,wc(t,n,s,i,o,r));return l.locale=n,l.key=e,l.source=i,l}function Ec(t,e,n){return e(n)}function Ei(...t){const[e,n,i]=t,s=Z();if(!L(e)&&!ce(e)&&!Oe(e)&&!Mt(e))throw ze(De.INVALID_ARGUMENT);const r=ce(e)?String(e):(Oe(e),e);return ce(n)?s.plural=n:L(n)?s.default=n:V(n)&&!Wn(n)?s.named=n:se(n)&&(s.list=n),ce(i)?s.plural=i:L(i)?s.default=i:V(i)&&ge(s,i),[r,s]}function wc(t,e,n,i,s,r){return{locale:e,key:n,warnHtmlMessage:s,onError:a=>{throw r&&r(a),a},onCacheKey:a=>Uo(e,n,a)}}function Ac(t,e,n,i){const{modifiers:s,pluralRules:r,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:f}=t,u={locale:e,modifiers:s,pluralRules:r,messages:_=>{let T=a(n,_);if(T==null&&f){const[,,k]=pa(f,_,e,o,l,c);T=a(k,_)}if(L(T)||Mt(T)){let k=!1;const y=ga(t,_,e,T,_,()=>{k=!0});return k?Us:y}else return Oe(T)?T:Us}};return t.processor&&(u.processor=t.processor),i.list&&(u.list=i.list),i.named&&(u.named=i.named),ce(i.plural)&&(u.pluralIndex=i.plural),u}function $s(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:a}=t,{__datetimeFormatters:o}=t,[l,c,f,h]=wi(...e),u=j(f.missingWarn)?f.missingWarn:t.missingWarn;j(f.fallbackWarn)?f.fallbackWarn:t.fallbackWarn;const _=!!f.part,T=Zi(t,f),k=a(t,s,T);if(!L(l)||l==="")return new Intl.DateTimeFormat(T,h).format(c);let A={},y,E=null;const g="datetime format";for(let w=0;w<k.length&&(y=k[w],A=n[y]||{},E=A[l],!V(E));w++)es(t,l,y,u,g);if(!V(E)||!L(y))return i?Hn:l;let v=`${y}__${l}`;Wn(h)||(v=`${v}__${JSON.stringify(h)}`);let I=o.get(v);return I||(I=new Intl.DateTimeFormat(y,ge({},E,h)),o.set(v,I)),_?I.formatToParts(c):I.format(c)}const _a=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function wi(...t){const[e,n,i,s]=t,r=Z();let a=Z(),o;if(L(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw ze(De.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw ze(De.INVALID_ISO_DATE_ARGUMENT)}}else if($o(e)){if(isNaN(e.getTime()))throw ze(De.INVALID_DATE_ARGUMENT);o=e}else if(ce(e))o=e;else throw ze(De.INVALID_ARGUMENT);return L(n)?r.key=n:V(n)&&Object.keys(n).forEach(l=>{_a.includes(l)?a[l]=n[l]:r[l]=n[l]}),L(i)?r.locale=i:V(i)&&(a=i),V(s)&&(a=s),[r.key||"",o,r,a]}function Gs(t,e,n){const i=t;for(const s in n){const r=`${e}__${s}`;i.__datetimeFormatters.has(r)&&i.__datetimeFormatters.delete(r)}}function Ws(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:a}=t,{__numberFormatters:o}=t,[l,c,f,h]=Ai(...e),u=j(f.missingWarn)?f.missingWarn:t.missingWarn;j(f.fallbackWarn)?f.fallbackWarn:t.fallbackWarn;const _=!!f.part,T=Zi(t,f),k=a(t,s,T);if(!L(l)||l==="")return new Intl.NumberFormat(T,h).format(c);let A={},y,E=null;const g="number format";for(let w=0;w<k.length&&(y=k[w],A=n[y]||{},E=A[l],!V(E));w++)es(t,l,y,u,g);if(!V(E)||!L(y))return i?Hn:l;let v=`${y}__${l}`;Wn(h)||(v=`${v}__${JSON.stringify(h)}`);let I=o.get(v);return I||(I=new Intl.NumberFormat(y,ge({},E,h)),o.set(v,I)),_?I.formatToParts(c):I.format(c)}const ya=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ai(...t){const[e,n,i,s]=t,r=Z();let a=Z();if(!ce(e))throw ze(De.INVALID_ARGUMENT);const o=e;return L(n)?r.key=n:V(n)&&Object.keys(n).forEach(l=>{ya.includes(l)?a[l]=n[l]:r[l]=n[l]}),L(i)?r.locale=i:V(i)&&(a=i),V(s)&&(a=s),[r.key||"",o,r,a]}function Vs(t,e,n){const i=t;for(const s in n){const r=`${e}__${s}`;i.__numberFormatters.has(r)&&i.__numberFormatters.delete(r)}}wl();/*!
  * vue-i18n v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Sc="9.14.2";function Ic(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Ye().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Ye().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Ye().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Ye().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ye().__INTLIFY_PROD_DEVTOOLS__=!1)}const va=Hl.__EXTEND_POINT__,je=Vn(va);je(),je(),je(),je(),je(),je(),je(),je(),je();const ba=De.__EXTEND_POINT__,ke=Vn(ba),me={UNEXPECTED_RETURN_TYPE:ba,INVALID_ARGUMENT:ke(),MUST_BE_CALL_SETUP_TOP:ke(),NOT_INSTALLED:ke(),NOT_AVAILABLE_IN_LEGACY_MODE:ke(),REQUIRED_VALUE:ke(),INVALID_VALUE:ke(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:ke(),NOT_INSTALLED_WITH_PROVIDE:ke(),UNEXPECTED_ERROR:ke(),NOT_COMPATIBLE_LEGACY_VUE_I18N:ke(),BRIDGE_SUPPORT_VUE_2_ONLY:ke(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:ke(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:ke(),__EXTEND_POINT__:ke()};function pe(t,...e){return Ft(t,null,void 0)}const Si=ot("__translateVNode"),Ii=ot("__datetimeParts"),Pi=ot("__numberParts"),ka=ot("__setPluralRules"),Ta=ot("__injectWithOption"),Oi=ot("__dispose");function hn(t){if(!Q(t))return t;for(const e in t)if(Me(t,e))if(!e.includes("."))Q(t[e])&&hn(t[e]);else{const n=e.split("."),i=n.length-1;let s=t,r=!1;for(let a=0;a<i;a++){if(n[a]in s||(s[n[a]]=Z()),!Q(s[n[a]])){r=!0;break}s=s[n[a]]}r||(s[n[i]]=t[e],delete t[e]),Q(s[n[i]])&&hn(s[n[i]])}return t}function jn(t,e){const{messages:n,__i18n:i,messageResolver:s,flatJson:r}=e,a=V(n)?n:se(i)?Z():{[t]:Z()};if(se(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||Z(),Cn(c,a[l])):Cn(c,a)}else L(o)&&Cn(JSON.parse(o),a)}),s==null&&r)for(const o in a)Me(a,o)&&hn(a[o]);return a}function Ea(t){return t.type}function wa(t,e,n){let i=Q(e.messages)?e.messages:Z();"__i18nGlobal"in n&&(i=jn(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const s=Object.keys(i);s.length&&s.forEach(r=>{t.mergeLocaleMessage(r,i[r])});{if(Q(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(a=>{t.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(Q(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(a=>{t.mergeNumberFormat(a,e.numberFormats[a])})}}}function Hs(t){return te(Co,null,t,0)}const js="__INTLIFY_META__",Ys=()=>[],Pc=()=>!1;let Xs=0;function Ks(t){return(e,n,i,s)=>t(n,i,ln()||void 0,s)}const Oc=()=>{const t=ln();let e=null;return t&&(e=Ea(t)[js])?{[js]:e}:null};function ns(t={},e){const{__root:n,__injectWithOption:i}=t,s=n===void 0,r=t.flatJson,a=Dn?Ee:qr,o=!!t.translateExistCompatible;let l=j(t.inheritLocale)?t.inheritLocale:!0;const c=a(n&&l?n.locale.value:L(t.locale)?t.locale:Nt),f=a(n&&l?n.fallbackLocale.value:L(t.fallbackLocale)||se(t.fallbackLocale)||V(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:c.value),h=a(jn(c.value,t)),u=a(V(t.datetimeFormats)?t.datetimeFormats:{[c.value]:{}}),_=a(V(t.numberFormats)?t.numberFormats:{[c.value]:{}});let T=n?n.missingWarn:j(t.missingWarn)||it(t.missingWarn)?t.missingWarn:!0,k=n?n.fallbackWarn:j(t.fallbackWarn)||it(t.fallbackWarn)?t.fallbackWarn:!0,A=n?n.fallbackRoot:j(t.fallbackRoot)?t.fallbackRoot:!0,y=!!t.fallbackFormat,E=ne(t.missing)?t.missing:null,g=ne(t.missing)?Ks(t.missing):null,v=ne(t.postTranslation)?t.postTranslation:null,I=n?n.warnHtmlMessage:j(t.warnHtmlMessage)?t.warnHtmlMessage:!0,w=!!t.escapeParameter;const C=n?n.modifiers:V(t.modifiers)?t.modifiers:{};let M=t.pluralRules||n&&n.pluralRules,N;N=(()=>{s&&Rs(null);const b={version:Sc,locale:c.value,fallbackLocale:f.value,messages:h.value,modifiers:C,pluralRules:M,missing:g===null?void 0:g,missingWarn:T,fallbackWarn:k,fallbackFormat:y,unresolving:!0,postTranslation:v===null?void 0:v,warnHtmlMessage:I,escapeParameter:w,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};b.datetimeFormats=u.value,b.numberFormats=_.value,b.__datetimeFormatters=V(N)?N.__datetimeFormatters:void 0,b.__numberFormatters=V(N)?N.__numberFormatters:void 0;const P=nc(b);return s&&Rs(P),P})(),en(N,c.value,f.value);function Y(){return[c.value,f.value,h.value,u.value,_.value]}const B=X({get:()=>c.value,set:b=>{c.value=b,N.locale=c.value}}),D=X({get:()=>f.value,set:b=>{f.value=b,N.fallbackLocale=f.value,en(N,c.value,b)}}),xe=X(()=>h.value),Ut=X(()=>u.value),Fe=X(()=>_.value);function Bt(){return ne(v)?v:null}function $t(b){v=b,N.postTranslation=b}function Gt(){return E}function Wt(b){b!==null&&(g=Ks(b)),E=b,N.missing=g}const Le=(b,P,ee,le,Ze,wn)=>{Y();let Tt;try{__INTLIFY_PROD_DEVTOOLS__,s||(N.fallbackContext=n?tc():void 0),Tt=b(N)}finally{__INTLIFY_PROD_DEVTOOLS__,s||(N.fallbackContext=void 0)}if(ee!=="translate exists"&&ce(Tt)&&Tt===Hn||ee==="translate exists"&&!Tt){const[Ao,b_]=P();return n&&A?le(n):Ze(Ao)}else{if(wn(Tt))return Tt;throw pe(me.UNEXPECTED_RETURN_TYPE)}};function ut(...b){return Le(P=>Reflect.apply(Bs,null,[P,...b]),()=>Ei(...b),"translate",P=>Reflect.apply(P.t,P,[...b]),P=>P,P=>L(P))}function Vt(...b){const[P,ee,le]=b;if(le&&!Q(le))throw pe(me.INVALID_ARGUMENT);return ut(P,ee,ge({resolvedMessage:!0},le||{}))}function yt(...b){return Le(P=>Reflect.apply($s,null,[P,...b]),()=>wi(...b),"datetime format",P=>Reflect.apply(P.d,P,[...b]),()=>Ns,P=>L(P))}function Ht(...b){return Le(P=>Reflect.apply(Ws,null,[P,...b]),()=>Ai(...b),"number format",P=>Reflect.apply(P.n,P,[...b]),()=>Ns,P=>L(P))}function jt(b){return b.map(P=>L(P)||ce(P)||j(P)?Hs(String(P)):P)}const Yt={normalize:jt,interpolate:b=>b,type:"vnode"};function Xt(...b){return Le(P=>{let ee;const le=P;try{le.processor=Yt,ee=Reflect.apply(Bs,null,[le,...b])}finally{le.processor=null}return ee},()=>Ei(...b),"translate",P=>P[Si](...b),P=>[Hs(P)],P=>se(P))}function vt(...b){return Le(P=>Reflect.apply(Ws,null,[P,...b]),()=>Ai(...b),"number format",P=>P[Pi](...b),Ys,P=>L(P)||se(P))}function Kt(...b){return Le(P=>Reflect.apply($s,null,[P,...b]),()=>wi(...b),"datetime format",P=>P[Ii](...b),Ys,P=>L(P)||se(P))}function qt(b){M=b,N.pluralRules=M}function Qt(b,P){return Le(()=>{if(!b)return!1;const ee=L(P)?P:c.value,le=bt(ee),Ze=N.messageResolver(le,b);return o?Ze!=null:Mt(Ze)||Oe(Ze)||L(Ze)},()=>[b],"translate exists",ee=>Reflect.apply(ee.te,ee,[b,P]),Pc,ee=>j(ee))}function x(b){let P=null;const ee=oa(N,f.value,c.value);for(let le=0;le<ee.length;le++){const Ze=h.value[ee[le]]||{},wn=N.messageResolver(Ze,b);if(wn!=null){P=wn;break}}return P}function J(b){const P=x(b);return P??(n?n.tm(b)||{}:{})}function bt(b){return h.value[b]||{}}function kt(b,P){if(r){const ee={[b]:P};for(const le in ee)Me(ee,le)&&hn(ee[le]);P=ee[b]}h.value[b]=P,N.messages=h.value}function Jt(b,P){h.value[b]=h.value[b]||{};const ee={[b]:P};if(r)for(const le in ee)Me(ee,le)&&hn(ee[le]);P=ee[b],Cn(P,h.value[b]),N.messages=h.value}function ti(b){return u.value[b]||{}}function d(b,P){u.value[b]=P,N.datetimeFormats=u.value,Gs(N,b,P)}function m(b,P){u.value[b]=ge(u.value[b]||{},P),N.datetimeFormats=u.value,Gs(N,b,P)}function S(b){return _.value[b]||{}}function U(b,P){_.value[b]=P,N.numberFormats=_.value,Vs(N,b,P)}function ae(b,P){_.value[b]=ge(_.value[b]||{},P),N.numberFormats=_.value,Vs(N,b,P)}Xs++,n&&Dn&&(cn(n.locale,b=>{l&&(c.value=b,N.locale=b,en(N,c.value,f.value))}),cn(n.fallbackLocale,b=>{l&&(f.value=b,N.fallbackLocale=b,en(N,c.value,f.value))}));const H={id:Xs,locale:B,fallbackLocale:D,get inheritLocale(){return l},set inheritLocale(b){l=b,b&&n&&(c.value=n.locale.value,f.value=n.fallbackLocale.value,en(N,c.value,f.value))},get availableLocales(){return Object.keys(h.value).sort()},messages:xe,get modifiers(){return C},get pluralRules(){return M||{}},get isGlobal(){return s},get missingWarn(){return T},set missingWarn(b){T=b,N.missingWarn=T},get fallbackWarn(){return k},set fallbackWarn(b){k=b,N.fallbackWarn=k},get fallbackRoot(){return A},set fallbackRoot(b){A=b},get fallbackFormat(){return y},set fallbackFormat(b){y=b,N.fallbackFormat=y},get warnHtmlMessage(){return I},set warnHtmlMessage(b){I=b,N.warnHtmlMessage=b},get escapeParameter(){return w},set escapeParameter(b){w=b,N.escapeParameter=b},t:ut,getLocaleMessage:bt,setLocaleMessage:kt,mergeLocaleMessage:Jt,getPostTranslationHandler:Bt,setPostTranslationHandler:$t,getMissingHandler:Gt,setMissingHandler:Wt,[ka]:qt};return H.datetimeFormats=Ut,H.numberFormats=Fe,H.rt=Vt,H.te=Qt,H.tm=J,H.d=yt,H.n=Ht,H.getDateTimeFormat=ti,H.setDateTimeFormat=d,H.mergeDateTimeFormat=m,H.getNumberFormat=S,H.setNumberFormat=U,H.mergeNumberFormat=ae,H[Ta]=i,H[Si]=Xt,H[Ii]=Kt,H[Pi]=vt,H}function Cc(t){const e=L(t.locale)?t.locale:Nt,n=L(t.fallbackLocale)||se(t.fallbackLocale)||V(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=ne(t.missing)?t.missing:void 0,s=j(t.silentTranslationWarn)||it(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,r=j(t.silentFallbackWarn)||it(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,a=j(t.fallbackRoot)?t.fallbackRoot:!0,o=!!t.formatFallbackMessages,l=V(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,f=ne(t.postTranslation)?t.postTranslation:void 0,h=L(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,u=!!t.escapeParameterHtml,_=j(t.sync)?t.sync:!0;let T=t.messages;if(V(t.sharedMessages)){const w=t.sharedMessages;T=Object.keys(w).reduce((M,N)=>{const W=M[N]||(M[N]={});return ge(W,w[N]),M},T||{})}const{__i18n:k,__root:A,__injectWithOption:y}=t,E=t.datetimeFormats,g=t.numberFormats,v=t.flatJson,I=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:T,flatJson:v,datetimeFormats:E,numberFormats:g,missing:i,missingWarn:s,fallbackWarn:r,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:f,warnHtmlMessage:h,escapeParameter:u,messageResolver:t.messageResolver,inheritLocale:_,translateExistCompatible:I,__i18n:k,__root:A,__injectWithOption:y}}function Ci(t={},e){{const n=ns(Cc(t)),{__extender:i}=t,s={id:n.id,get locale(){return n.locale.value},set locale(r){n.locale.value=r},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(r){n.fallbackLocale.value=r},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(r){},get missing(){return n.getMissingHandler()},set missing(r){n.setMissingHandler(r)},get silentTranslationWarn(){return j(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(r){n.missingWarn=j(r)?!r:r},get silentFallbackWarn(){return j(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(r){n.fallbackWarn=j(r)?!r:r},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(r){n.fallbackFormat=r},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(r){n.setPostTranslationHandler(r)},get sync(){return n.inheritLocale},set sync(r){n.inheritLocale=r},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){n.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(r){n.escapeParameter=r},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(r){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...r){const[a,o,l]=r,c={};let f=null,h=null;if(!L(a))throw pe(me.INVALID_ARGUMENT);const u=a;return L(o)?c.locale=o:se(o)?f=o:V(o)&&(h=o),se(l)?f=l:V(l)&&(h=l),Reflect.apply(n.t,n,[u,f||h||{},c])},rt(...r){return Reflect.apply(n.rt,n,[...r])},tc(...r){const[a,o,l]=r,c={plural:1};let f=null,h=null;if(!L(a))throw pe(me.INVALID_ARGUMENT);const u=a;return L(o)?c.locale=o:ce(o)?c.plural=o:se(o)?f=o:V(o)&&(h=o),L(l)?c.locale=l:se(l)?f=l:V(l)&&(h=l),Reflect.apply(n.t,n,[u,f||h||{},c])},te(r,a){return n.te(r,a)},tm(r){return n.tm(r)},getLocaleMessage(r){return n.getLocaleMessage(r)},setLocaleMessage(r,a){n.setLocaleMessage(r,a)},mergeLocaleMessage(r,a){n.mergeLocaleMessage(r,a)},d(...r){return Reflect.apply(n.d,n,[...r])},getDateTimeFormat(r){return n.getDateTimeFormat(r)},setDateTimeFormat(r,a){n.setDateTimeFormat(r,a)},mergeDateTimeFormat(r,a){n.mergeDateTimeFormat(r,a)},n(...r){return Reflect.apply(n.n,n,[...r])},getNumberFormat(r){return n.getNumberFormat(r)},setNumberFormat(r,a){n.setNumberFormat(r,a)},mergeNumberFormat(r,a){n.mergeNumberFormat(r,a)},getChoiceIndex(r,a){return-1}};return s.__extender=i,s}}const is={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function xc({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,s)=>[...i,...s.type===de?s.children:[s]],[]):e.reduce((n,i)=>{const s=t[i];return s&&(n[i]=s()),n},Z())}function Aa(t){return de}const Lc=yn({name:"i18n-t",props:ge({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>ce(t)||!isNaN(t)}},is),setup(t,e){const{slots:n,attrs:i}=e,s=t.i18n||Ce({useScope:t.scope,__useComponent:!0});return()=>{const r=Object.keys(n).filter(h=>h!=="_"),a=Z();t.locale&&(a.locale=t.locale),t.plural!==void 0&&(a.plural=L(t.plural)?+t.plural:t.plural);const o=xc(e,r),l=s[Si](t.keypath,o,a),c=ge(Z(),i),f=L(t.tag)||Q(t.tag)?t.tag:Aa();return Ki(f,c,l)}}}),qs=Lc;function Nc(t){return se(t)&&!L(t[0])}function Sa(t,e,n,i){const{slots:s,attrs:r}=e;return()=>{const a={part:!0};let o=Z();t.locale&&(a.locale=t.locale),L(t.format)?a.key=t.format:Q(t.format)&&(L(t.format.key)&&(a.key=t.format.key),o=Object.keys(t.format).reduce((u,_)=>n.includes(_)?ge(Z(),u,{[_]:t.format[_]}):u,Z()));const l=i(t.value,a,o);let c=[a.key];se(l)?c=l.map((u,_)=>{const T=s[u.type],k=T?T({[u.type]:u.value,index:_,parts:l}):[u.value];return Nc(k)&&(k[0].key=`${u.type}-${_}`),k}):L(l)&&(c=[l]);const f=ge(Z(),r),h=L(t.tag)||Q(t.tag)?t.tag:Aa();return Ki(h,f,c)}}const Mc=yn({name:"i18n-n",props:ge({value:{type:Number,required:!0},format:{type:[String,Object]}},is),setup(t,e){const n=t.i18n||Ce({useScope:t.scope,__useComponent:!0});return Sa(t,e,ya,(...i)=>n[Pi](...i))}}),Qs=Mc,Dc=yn({name:"i18n-d",props:ge({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},is),setup(t,e){const n=t.i18n||Ce({useScope:t.scope,__useComponent:!0});return Sa(t,e,_a,(...i)=>n[Ii](...i))}}),Js=Dc;function Rc(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function Fc(t){const e=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw pe(me.UNEXPECTED_ERROR);const f=Rc(t,o.$),h=Zs(c);return[Reflect.apply(f.t,f,[...er(h)]),f]};return{created:(a,o)=>{const[l,c]=e(o);Dn&&t.global===c&&(a.__i18nWatcher=cn(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{Dn&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=Zs(o);a.textContent=Reflect.apply(l.t,l,[...er(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function Zs(t){if(L(t))return{path:t};if(V(t)){if(!("path"in t))throw pe(me.REQUIRED_VALUE,"path");return t}else throw pe(me.INVALID_VALUE)}function er(t){const{path:e,locale:n,args:i,choice:s,plural:r}=t,a={},o=i||{};return L(n)&&(a.locale=n),ce(s)&&(a.plural=s),ce(r)&&(a.plural=r),[e,o,a]}function zc(t,e,...n){const i=V(n[0])?n[0]:{},s=!!i.useI18nComponentName;(j(i.globalInstall)?i.globalInstall:!0)&&([s?"i18n":qs.name,"I18nT"].forEach(a=>t.component(a,qs)),[Qs.name,"I18nN"].forEach(a=>t.component(a,Qs)),[Js.name,"I18nD"].forEach(a=>t.component(a,Js))),t.directive("t",Fc(e))}function Uc(t,e,n){return{beforeCreate(){const i=ln();if(!i)throw pe(me.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const r=s.i18n;if(s.__i18n&&(r.__i18n=s.__i18n),r.__root=e,this===this.$root)this.$i18n=tr(t,r);else{r.__injectWithOption=!0,r.__extender=n.__vueI18nExtend,this.$i18n=Ci(r);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=tr(t,s);else{this.$i18n=Ci({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&wa(e,s,s),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$tc=(...r)=>this.$i18n.tc(...r),this.$te=(r,a)=>this.$i18n.te(r,a),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=ln();if(!i)throw pe(me.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(i),delete this.$i18n}}}function tr(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[ka](e.pluralizationRules||t.pluralizationRules);const n=jn(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const Bc=ot("global-vue-i18n");function $c(t={},e){const n=__VUE_I18N_LEGACY_API__&&j(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=j(t.globalInjection)?t.globalInjection:!0,s=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,r=new Map,[a,o]=Gc(t,n),l=ot("");function c(u){return r.get(u)||null}function f(u,_){r.set(u,_)}function h(u){r.delete(u)}{const u={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return s},async install(_,...T){if(_.__VUE_I18N_SYMBOL__=l,_.provide(_.__VUE_I18N_SYMBOL__,u),V(T[0])){const y=T[0];u.__composerExtend=y.__composerExtend,u.__vueI18nExtend=y.__vueI18nExtend}let k=null;!n&&i&&(k=Qc(_,u.global)),__VUE_I18N_FULL_INSTALL__&&zc(_,u,...T),__VUE_I18N_LEGACY_API__&&n&&_.mixin(Uc(o,o.__composer,u));const A=_.unmount;_.unmount=()=>{k&&k(),u.dispose(),A()}},get global(){return o},dispose(){a.stop()},__instances:r,__getInstance:c,__setInstance:f,__deleteInstance:h};return u}}function Ce(t={}){const e=ln();if(e==null)throw pe(me.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw pe(me.NOT_INSTALLED);const n=Wc(e),i=Hc(n),s=Ea(e),r=Vc(t,s);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw pe(me.NOT_AVAILABLE_IN_LEGACY_MODE);return Kc(e,r,i,t)}if(r==="global")return wa(i,t,s),i;if(r==="parent"){let l=jc(n,e,t.__useComponent);return l==null&&(l=i),l}const a=n;let o=a.__getInstance(e);if(o==null){const l=ge({},t);"__i18n"in s&&(l.__i18n=s.__i18n),i&&(l.__root=i),o=ns(l),a.__composerExtend&&(o[Oi]=a.__composerExtend(o)),Xc(a,e,o),a.__setInstance(e,o)}return o}function Gc(t,e,n){const i=So();{const s=__VUE_I18N_LEGACY_API__&&e?i.run(()=>Ci(t)):i.run(()=>ns(t));if(s==null)throw pe(me.UNEXPECTED_ERROR);return[i,s]}}function Wc(t){{const e=Io(t.isCE?Bc:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw pe(t.isCE?me.NOT_INSTALLED_WITH_PROVIDE:me.UNEXPECTED_ERROR);return e}}function Vc(t,e){return Wn(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function Hc(t){return t.mode==="composition"?t.global:t.global.__composer}function jc(t,e,n=!1){let i=null;const s=e.root;let r=Yc(e,n);for(;r!=null;){const a=t;if(t.mode==="composition")i=a.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(r);o!=null&&(i=o.__composer,n&&i&&!i[Ta]&&(i=null))}if(i!=null||s===r)break;r=r.parent}return i}function Yc(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function Xc(t,e,n){Gn(()=>{},e),Kr(()=>{const i=n;t.__deleteInstance(e);const s=i[Oi];s&&(s(),delete i[Oi])},e)}function Kc(t,e,n,i={}){const s=e==="local",r=qr(null);if(s&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw pe(me.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=j(i.inheritLocale)?i.inheritLocale:!L(i.locale),o=Ee(!s||a?n.locale.value:L(i.locale)?i.locale:Nt),l=Ee(!s||a?n.fallbackLocale.value:L(i.fallbackLocale)||se(i.fallbackLocale)||V(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:o.value),c=Ee(jn(o.value,i)),f=Ee(V(i.datetimeFormats)?i.datetimeFormats:{[o.value]:{}}),h=Ee(V(i.numberFormats)?i.numberFormats:{[o.value]:{}}),u=s?n.missingWarn:j(i.missingWarn)||it(i.missingWarn)?i.missingWarn:!0,_=s?n.fallbackWarn:j(i.fallbackWarn)||it(i.fallbackWarn)?i.fallbackWarn:!0,T=s?n.fallbackRoot:j(i.fallbackRoot)?i.fallbackRoot:!0,k=!!i.fallbackFormat,A=ne(i.missing)?i.missing:null,y=ne(i.postTranslation)?i.postTranslation:null,E=s?n.warnHtmlMessage:j(i.warnHtmlMessage)?i.warnHtmlMessage:!0,g=!!i.escapeParameter,v=s?n.modifiers:V(i.modifiers)?i.modifiers:{},I=i.pluralRules||s&&n.pluralRules;function w(){return[o.value,l.value,c.value,f.value,h.value]}const C=X({get:()=>r.value?r.value.locale.value:o.value,set:x=>{r.value&&(r.value.locale.value=x),o.value=x}}),M=X({get:()=>r.value?r.value.fallbackLocale.value:l.value,set:x=>{r.value&&(r.value.fallbackLocale.value=x),l.value=x}}),N=X(()=>r.value?r.value.messages.value:c.value),W=X(()=>f.value),Y=X(()=>h.value);function B(){return r.value?r.value.getPostTranslationHandler():y}function D(x){r.value&&r.value.setPostTranslationHandler(x)}function xe(){return r.value?r.value.getMissingHandler():A}function Ut(x){r.value&&r.value.setMissingHandler(x)}function Fe(x){return w(),x()}function Bt(...x){return r.value?Fe(()=>Reflect.apply(r.value.t,null,[...x])):Fe(()=>"")}function $t(...x){return r.value?Reflect.apply(r.value.rt,null,[...x]):""}function Gt(...x){return r.value?Fe(()=>Reflect.apply(r.value.d,null,[...x])):Fe(()=>"")}function Wt(...x){return r.value?Fe(()=>Reflect.apply(r.value.n,null,[...x])):Fe(()=>"")}function Le(x){return r.value?r.value.tm(x):{}}function ut(x,J){return r.value?r.value.te(x,J):!1}function Vt(x){return r.value?r.value.getLocaleMessage(x):{}}function yt(x,J){r.value&&(r.value.setLocaleMessage(x,J),c.value[x]=J)}function Ht(x,J){r.value&&r.value.mergeLocaleMessage(x,J)}function jt(x){return r.value?r.value.getDateTimeFormat(x):{}}function En(x,J){r.value&&(r.value.setDateTimeFormat(x,J),f.value[x]=J)}function Yt(x,J){r.value&&r.value.mergeDateTimeFormat(x,J)}function Xt(x){return r.value?r.value.getNumberFormat(x):{}}function vt(x,J){r.value&&(r.value.setNumberFormat(x,J),h.value[x]=J)}function Kt(x,J){r.value&&r.value.mergeNumberFormat(x,J)}const qt={get id(){return r.value?r.value.id:-1},locale:C,fallbackLocale:M,messages:N,datetimeFormats:W,numberFormats:Y,get inheritLocale(){return r.value?r.value.inheritLocale:a},set inheritLocale(x){r.value&&(r.value.inheritLocale=x)},get availableLocales(){return r.value?r.value.availableLocales:Object.keys(c.value)},get modifiers(){return r.value?r.value.modifiers:v},get pluralRules(){return r.value?r.value.pluralRules:I},get isGlobal(){return r.value?r.value.isGlobal:!1},get missingWarn(){return r.value?r.value.missingWarn:u},set missingWarn(x){r.value&&(r.value.missingWarn=x)},get fallbackWarn(){return r.value?r.value.fallbackWarn:_},set fallbackWarn(x){r.value&&(r.value.missingWarn=x)},get fallbackRoot(){return r.value?r.value.fallbackRoot:T},set fallbackRoot(x){r.value&&(r.value.fallbackRoot=x)},get fallbackFormat(){return r.value?r.value.fallbackFormat:k},set fallbackFormat(x){r.value&&(r.value.fallbackFormat=x)},get warnHtmlMessage(){return r.value?r.value.warnHtmlMessage:E},set warnHtmlMessage(x){r.value&&(r.value.warnHtmlMessage=x)},get escapeParameter(){return r.value?r.value.escapeParameter:g},set escapeParameter(x){r.value&&(r.value.escapeParameter=x)},t:Bt,getPostTranslationHandler:B,setPostTranslationHandler:D,getMissingHandler:xe,setMissingHandler:Ut,rt:$t,d:Gt,n:Wt,tm:Le,te:ut,getLocaleMessage:Vt,setLocaleMessage:yt,mergeLocaleMessage:Ht,getDateTimeFormat:jt,setDateTimeFormat:En,mergeDateTimeFormat:Yt,getNumberFormat:Xt,setNumberFormat:vt,mergeNumberFormat:Kt};function Qt(x){x.locale.value=o.value,x.fallbackLocale.value=l.value,Object.keys(c.value).forEach(J=>{x.mergeLocaleMessage(J,c.value[J])}),Object.keys(f.value).forEach(J=>{x.mergeDateTimeFormat(J,f.value[J])}),Object.keys(h.value).forEach(J=>{x.mergeNumberFormat(J,h.value[J])}),x.escapeParameter=g,x.fallbackFormat=k,x.fallbackRoot=T,x.fallbackWarn=_,x.missingWarn=u,x.warnHtmlMessage=E}return Po(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw pe(me.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const x=r.value=t.proxy.$i18n.__composer;e==="global"?(o.value=x.locale.value,l.value=x.fallbackLocale.value,c.value=x.messages.value,f.value=x.datetimeFormats.value,h.value=x.numberFormats.value):s&&Qt(x)}),qt}const qc=["locale","fallbackLocale","availableLocales"],nr=["t","rt","d","n","tm","te"];function Qc(t,e){const n=Object.create(null);return qc.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r)throw pe(me.UNEXPECTED_ERROR);const a=Oo(r.value)?{get(){return r.value.value},set(o){r.value.value=o}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,s,a)}),t.config.globalProperties.$i18n=n,nr.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r||!r.value)throw pe(me.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,r)}),()=>{delete t.config.globalProperties.$i18n,nr.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}Ic();__INTLIFY_JIT_COMPILATION__?Ds(kc):Ds(bc);Ql(Ll);Jl(oa);if(__INTLIFY_PROD_DEVTOOLS__){const t=Ye();t.__INTLIFY__=!0,$l(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const Jc="preferred-theme",ir=Ee("dark");function Zc(){const t=n=>{ir.value=n,document.documentElement.setAttribute("data-theme",n),localStorage.setItem(Jc,n)},e=()=>{t("dark")};return Gn(()=>{e()}),{theme:ir,setTheme:t}}const Ia="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LjE0NjI4OTk3NzcsIDIwMjMvMDYvMjUtMjM6NTc6MTQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS4xIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RTU2NEE4OTE2MDQxMUVGODczMEU5MkNFRjdBOUNCQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RTU2NEE4QTE2MDQxMUVGODczMEU5MkNFRjdBOUNCQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRFNTY0QTg3MTYwNDExRUY4NzMwRTkyQ0VGN0E5Q0JCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRFNTY0QTg4MTYwNDExRUY4NzMwRTkyQ0VGN0E5Q0JCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4LrnOAAACzdJREFUeNrcWgt0VcUVPTe/l7yQAgYQlE9FQVBUWuzHKtoqCqhYDAhIfgKJCSkiyKLVCihWrC0CiviLSLMgISiFgqSyCquFKlYCtUBBPo0oEApUFzYISV6+033m3nfv3PvufcnjJV1dfayT+d6Z2XPOnDnnDJoQgv5ffnHOijmzRQIJGqoR/RjpdUi/oQmKRVOjJsRJlHeg/O68F2P+0V6LWpZVn4w57sJcd5MQVyPfARQDCmBNJ7CO93kNue8knlC/01TOPDlbdEOnfAySjY/6arKD2ZG4jPoGpH9B/RJQ2ZylMU1tCiS7vhfGnYl5JmDOHjy/XIORynUIqkV5O9KFOb9N3Bb8NkYB0hWNc5F9PAjEQmxkeDCieJRvQ2kJaHQbA+mJORaApmOOHkEQJhCraxLyI5EufmtM4A4bGADhBeYim6vpHYMgGpBUYLQ9qDtlcCbYdgXKTy14pOnGtgDycnZ9sgHiQV2s9YkwRwB0CNk9ELmzDk4NBqfmrLi/doDKmSGgh/CRT1ksQNDT6Mz1majPQ3kl8jUWpwSfqSm/nNbUIVowGOdmULp+joUhUgyAngBlYh0ZKBcg/64UdYtrtyGfbioAFIYj6UdBVgo6hr8/nb9Y26Aw95NfPNr8EdIq0FR8E2/0vQN0LXLlUYhXEsYYCbpM2fm9oFn5pb5tSteDyx8I7EL6NWiiRiJG3wcaAZob5Mw1GpnLbkK6Rgdi/819KYbZXIj2vXJbdPCXg66Nii2CuukiI7nNNSxaKx1A5C9nbeIx9HsVnKqwlAL1McUMHyYr4vUVkp1hpj6GCf+mWVxkVd79VwVNWhQi1glJqhQvfQ1nkPXmtBAH0f53RdT81plhHW4d7mZ0avScWIhm9G1QtFusfheJuCg448ecicrimsKvQUpPg8IZTeVMrZEy8Q5dF2bqbhjEFEs5kKDOxMrjYjkjKAWb4Q+eWVBXCi+6fdB3oCUKIqBqs6OKhopDp/HzZzR/zzkC1HCcxpcZ0Y1B/a9vguiH+i5RHBrevFTzkhaS0xlvjgsMdPaEGgZwypJKx1IW/7TMGUF/xN8MeVHp5cFIX4D2WorSLjYjMHhX1I1BOV9OZnJGKoIbkP2+PE8R/l7NqOPL8U4WM/WCRPpD0MLlYwOva7pmgzoWvQwgWUgTDIUhkH5gqWaiD0Hr0FKgnJ9b8Lc/Oh4CfY26nlK8BPmUHQwe4Et4kkUPN340qzDueIQidj/GuUkRczIUAa/jHhS+BToE7tcg7Qti8Yohq99+ZEpsttnTM5sHoOHXGHyUKbuqXabWCYsrSrke+ddAzzz2ZtxXreTKSMPGu9q61YXDFjO5T047DVw5jfRxUEnme/4mm6GJc8IHmxvT8EGyphiYdhDKBKROCquWRCHSZTOXx1d4gXglk61iMRr9fg66puWFhwIEkANIF6GuOOs9f2OI1cw/nBPWJKPQ8T7Q9WBvZxLSuOQbP8ECJVQQKgdZhrejeR3SHfjmJOoDbMKz1kM6iLmPujTjslQ2Szh3n92ORuSbNV1d1yBfiTp2Q97OKvPv9HQBbJprOkDpvgQffPYnLsFAA6QNJcRAlOMsECEiR7rSoArU45Klc0Z/Puz90amH5r77Z5Fn0fkUdBx1Z4xvAwYQzh/Huo5ml/nrXe7A1nuauOX9DASDjtHYMDXMdHNX7SJn7TSFioyy+1WoYyWzE+Wd+gbQKeSrpqxPrItMmVyE27wwv5Fv63Gg+Zj0m6rIWb6HS539TLCd9z6AbgLoD5GvhOdYG5XlHU0MAKp4MgZ4XoqiTeRCD7LeLgGy1vsTaBWKW/PW+L5stxhAhHdEMejbyBZwURWvUO9QAjnJ6ps1UF6p70Rbxw60aKMzS3IahmKBRaC+FF68+Ew8x3EDmPaek65Iq40ParJJG5LEf40zBncOSEeKOG5gaTQFSDM49Xt2h6au9u1zfg9nK5XYBZckeiHP1gRz+VzRfbUciWG78TOo4bPtDga/85puqArSLWhLg+nitRHpE1NLfEfUj2BEdkffYezlsmMGwGyNsxHpMzaDXePzSL8A7Vl1d81WPmOZm/2n2pMz2Hm4sbqfE2uC0Be0Be1zVCCF4+ti0fd21OeBOO3sZqrooIRPWuO6lXAPK47i4TXLwa0t6VuSQ0JcMW3AGRiEIlkahnYR24tJ5wHIwWDHNybUwSMU09D3dcMC72y4EKrXSYoRqdZ1QlUaxmQFMnP1sGp/m4NhxwqDX+kQsdNYzAIAKVeAsD32GNqfoqCycGg+hwtgywdVu3TMiOZxfK/09uoObcsZNm2IblACInBnxVscPlWAsG03haMthn3mYjiGWg6ugIS5gTNQyiv9UXVCm4BZOqmBvdJRQbVsTPQx3z/gSr0iOrcY4tXJFiltSbxsgIQboJ+gfmibgMFA92LADDKMTo4+YqY16oEHV2Cgihy09yNHzNjdR1HFynLWSFEsip13BdIpb996octFazNwBJsqWLs8yx6oZokcu9gbHGfqZo7oOxfufjZEi3VqSIesICTHvtdFBOalyQ0cI+sDJGkA8LBGNvGqA20EV0y3uVDXXnci26XV4hVOAbilHC0iGhYWDIzIVLCxNz66FB91xEcpoKtAbL4MIeNyU4zIT/Hnzw7lcDnavhOReFGrxMsJbLCrmL2Q19gJjSNAfB6uR1VH+TKgB+lSSHWX7UbkbnaqHCLWA02Xtla8vHY/RLzUep0uCwEDIH0xwGw0PoAeqaqzRcISBeWGD7bz48/u/NW+c86AIXupqnhpTvFyngnv3XdRDGba0QYGQHojeRb0oNPyJbJ7iw7x4j9foP2wy4WabGo6IVzPgROcpux+KBDhxbkEEww8R35gKkDjeM3O1rOoP6L736I33/T8EOQQL6ZKZE+6xJAbdANUeIpX6OKE9VJnAxk6hsJFob7P3MQvVhwAVCLx7I+/guIu1NWirhdoHOnvnZ0c54CDEP92ie5XGc8TtkPcyls+9GyQC0h9QwJqeJbfBXsr4rUf2dmProjfoXxfuSyr/hNDBT+CxSQpUUj2NWpcOPMlJjvv1FTkdnYo3DnxEi8TYZX6CtBfiX9xRKR4hh2I/E1bmXAOfYswyn7HGarGhA0udttpfoVrlRHp8HgtToYTLzM9pr7PJJs6XdC/NClanm8plexdKgNxgK6OA3UuCoDFb4fx3hK5eLlb6TaQPDaHqBTOyEh6sCPXxYaxxzgyGauICECIauRDnKXJv0viuq1o+8xTvESE4hVqQXyO5A8WGEEXlEYOmX433EMP+gxSJuQzdCb3nUThwcl9oPWGR+rlo3juvKsisL7nf5tAH6tW8xGFM7C/xMSXH6q/1bmu19Lr2BeZjD6DlIk4+njIC/mkjUkcWi0iPT7csnhRKEA3bhlUDloxdndKtaqat0pTnuR/VCBj5xdDe73B50e+z+j3zAT5KEX6G40hNtuNNxLPX/ampMMr7615HtnuMtbcmlvebky6iddRJM8ByAGnP1OOxhL9MJvIhzAgfsJGYRVqfoN8Pv+nHLIO8mHki3LWJl5oyeLOKvNvRv8npRREYER6iBc/m88FlbkGAeGj9MQCF6DjREwQFybQHaxjtfuz3LWJqyJxI4pH1AzHPLM0/Zkv3vX2b/ZUBvzCzP+jadHYXSmbw0Y0cU76oON0fJCumdauI2ZMMqi3B/kXQWvAlcZInbuSu6rZ65yI78cgvQppUgtajVV/hfHmUzq2POVIq8KzOCcdjQfT0fwKrOmmS6xxl5zCBx8gvx7a66/RuNyrh1WzozdI/g8pQT/AuFca0cw4AwhzoQr0uRHa3Ya6fQBS326x5v+l338EGACjVkptuvmgywAAAABJRU5ErkJggg==",eu={common:{learnMore:"Learn More",viewAll:"View All",back:"Back",close:"Close",confirm:"Confirm",cancel:"Cancel",loading:"Loading...",error:"Error",success:"Success",retry:"Retry"},theme:{light:"Light Mode",dark:"Dark Mode"},nav:{home:"Home",tech:"Tech",satnet:"SatsNet",eco:"Eco",roadmap:"Roadmap",docs:"Docs"},roles:{explorer:"Explorer",developer:"Developer",user:"User"},menu:{navigation:"Navigation",roles:"Roles",settings:"Settings",theme:"Theme",language:"Language",documentation:"Docs"},footer:{info:"Welcome to SAT20Labs, building a decentralized future together",product:"Product",developers:"Developers",services:"Services",home:"Home",tech:"Technology",satnet:"SatoshiNet",community:"Community",whitepaper:"Whitepaper",docs:"Documentation",api:"API",github:"GitHub",market:"Market",explorer:"Explorer",eco:"Ecosystem",links:[{link1:""},{link2:""},{link3:""}]},home:{hero:{mainTitle:"One Satoshi, One World",subTitle:"BTC Native Asset Issuance and Circulation",features:[{text:"No splitting, ",accent:"100% Non-custodial!"},{text:"Our ",accent:'"Partial Order Book"',suffix:" allows users to place orders of any amount freely."},{text:"No more complex splitting, just ",accent:"trade anytime."}],description:`SAT20Labs provides asset issuance and circulation infrastructure for the Bitcoin ecosystem. The core technology consists of the SAT20 protocol and innovative SatoshiNet. SatoshiNet is based on Lightning channels and Bitcoin parallel networks, supporting multiple protocol assets such as Ordinals, Runes, OrdX, and BRC20, offering ultra-low fees and second-level confirmation through the network.

Through the SAT20 protocol, users can easily issue and circulate BTC native assets, enjoying seamless compatibility and instant trading experience.`,downloadWhitepaper:"Download Whitepaper",tryTestnet:"Try Testnet"},features:{title:"Core Features",items:[{title:"Satoshi-based Assets",description:"Assets bound to satoshis, non-destructible and freely flowing"},{title:"Native Layer 2 Network",description:"Based on Lightning channels + BTC parallel network SatoshiNet"},{title:"Full Asset Compatibility",description:"Support for Ordinals, OrdX, Runes, BRC20 and other protocols"},{title:"Smart Contract Support",description:"Templated contracts and Turing-complete scripts (OP_CAT)"},{title:"Ultra-low Fees",description:"10 sats/transaction, second-level confirmation"}]},satoshinet:{title:"SatoshiNet",subtitle:"Next Generation Blockchain Infrastructure",description:"The underlying network infrastructure of SAT20",architecture:{title:"Technical Architecture",description:"SatoshiNet adopts an innovative multi-layer architecture design",feature1:"Native Bitcoin Network Integration",feature2:"Lightning Network Layer 2 Extension",feature3:"Secure Multi-Asset Support",feature4:"Decentralized Infrastructure",layers:{title:"Network Layers",items:[{name:"Consensus Layer",description:"Based on Bitcoin network, inheriting its security"},{name:"Network Layer",description:"P2P network communication and data synchronization"},{name:"Protocol Layer",description:"Asset issuance and transaction rules"},{name:"Application Layer",description:"DApp development interfaces and tools"}]}},compatibility:{title:"Supported Protocols",protocols:["Ordinals","BRC20","Runes","OrdX"]},assetTypes:{title:"Supported Asset Types",types:{ft:{title:"Fungible Token",description:"Interchangeable assets",imgurl:"/images/assetstype/ft.png"},nft:{title:"Non-Fungible Token",description:"Unique digital assets",imgurl:"/images/assetstype/nft.png"},sft:{title:"Semi-Fungible Token",description:"Batch assets",imgurl:"/images/assetstype/sft.png"},did:{title:"Decentralized Identity",description:"Decentralized identity system",imgurl:"/images/assetstype/did.png"}}}},ecosystem:{title:"Ecosystem",applications:{title:"Applications",items:[{title:"DeFi Applications",description:"Decentralized financial services including lending, trading, and staking"},{title:"NFT Marketplace",description:"Platform for issuing and trading digital art and collectibles"},{title:"Dapps & GameFi",description:"Blockchain-based applications, games, and metaverse"}]},partners:{title:"Partners",items:[{title:"Application Developers",description:"Developer grants program and hackathons"},{title:"Infrastructure",description:"Indexer and node service providers"},{title:"Strategic Partners",description:"Ecosystem app integration and wallet integration"}]}},developers:{title:"Developer Center",subtitle:"Build Next-gen Blockchain Applications",description:"Use SAT20 protocol to develop innovative applications",buttons:{startDev:"Start Development",viewDocs:"View Documentation"}},partners:{title:"Partners",description:"Building the Bitcoin ecosystem together with industry-leading enterprises and organizations",items:[],sat20market:"Leading Bitcoin native asset trading platform",btcname:"Decentralized Bitcoin domain name service",morego:"Innovative SocialFi and GameFi applications",unisat:"Popular Bitcoin wallet and inscription platform",okx:"Global leading digital asset exchange",magiceden:"Leading NFT marketplace and ecosystem"}},technology:{title:"Technical Architecture",subtitle:"Explore SAT20's Innovative Blockchain Technology",description:"The SAT20 protocol uses the most advanced blockchain technology to build an efficient, secure, cost-effective, and intelligent management system for the issuance and circulation of Bitcoin-native assets, providing revolutionary opportunities for the innovative development of the Bitcoin ecosystem.",hero:{title:"Innovative Technical Architecture",subtitle:"Explore SAT20's Technical Innovations"},architecture:{title:"Technical Architecture",base:{title:"BTC Mainnet",desc:"Asset issuance base layer, compatible with mainstream protocols, such as Ordinals、Runes、Brc20、OrdX..."},protocol:{title:"Lightning Channel",desc:"Dynamic Lightning Channel technology, compatible with various BTC Layer 1 assets on the main and Satoshi networks"},application:{title:"SatoshiNet",desc:"Dynamic Lightning Channel technology, compatible with various BTC Layer 1 assets on the main and Satoshi networks"}},comparison:{title:"Technical Advancement Features",headings:["Dimension","Traditional","SAT20 Innovation","Effect"],dimensions:{asset:"Asset Granularity",contract:"Contract Capability",speed:"Transaction Speed",cost:"Cross-chain Cost",dev:"Development Barrier"},traditional:{asset:"UTXO Unit",contract:"Non-Turing Complete",speed:"10-minute Confirmation",cost:"Bridge Fee 0.5%+",dev:"Custom Sidechain Required"},innovation:{asset:"Satoshi-level Precision",contract:"OP_CAT Enhanced Turing Complete",speed:"Lightning Channel Second-level",cost:"Zero Fee Atomic Swap",dev:"Native Mainnet Compatible"},improvement:{asset:"100M Times More Granular than BTC",contract:"Support Complex Financial Contracts",speed:"600x Acceleration",cost:"Zero Cost",dev:"90% Development Cost Reduction"}},innovation:{title:"Core Innovation Value",items:[{title:"Satoshi-based System",features:["Each satoshi independently programmable","Assets permanently bound to satoshis","UTXO native extension"]},{title:"Enhanced Lightning Network",features:["Dynamic channel capacity adjustment","Compatible with Layer 1 native assets","Secure bridge-less cross-chain transfers"]},{title:"SatoshiNet Smart Evolution",features:["Templated smart contracts","OP_CAT instruction set extension","SVM (Satoshi Virtual Machine) support"]}]},pillars:{title:"Four Technical Pillars",items:[{title:"Satoshi Asset Management Engine (OrdX)",innovation:"Innovation: Satoshi-level precision asset issuance and management, multiple asset types for different scenarios",features:["Ordinals-based numbering system with precise satoshi positioning and tracking technology",'Flexible support for "one-sat-one-token" and "one-sat-multi-token" asset issuance',"Professional rare satoshi mining and management, enhancing asset scarcity and value"]},{title:"Satoshi Transfer Protocol (STP)",innovation:"Innovation: Avoiding security risks of traditional cross-chain bridges, improving transaction reliability and transparency",features:["Dynamic Channels: Implementing dynamic channel capacity adjustment through Splicing technology","Bridge-less Cross-chain: Native Lightning Channel technology, avoiding security risks of cross-chain bridges","Secure Contracts: Automated asset locking and release based on RSMC contracts, reducing risks"]},{title:"Super UTXO - Multi-protocol Asset Compatibility",innovation:"Innovation: Unified framework integrating assets from different protocols, seamless cross-protocol asset exchange",features:["Support for multiple protocol assets including Ordinals, BRC20, Runes, OrdX","SatoshiNet Super UTXO architecture enhances asset compatibility and management efficiency, reducing transaction costs","Support for cross-protocol interoperability, reducing asset exchange and circulation difficulties"]},{title:"Asset Exchange Engine - SATSWAP",innovation:"Innovation: Enabling real-time asset exchange, reducing transaction delays and fees",features:["SATSWAP provides decentralized, low-cost asset exchange and circulation","Trading engine supports high-frequency trading and liquidity pools, solving liquidity challenges","DeFi capabilities enable asset lending, liquidity provision, and yield optimization"]}]},roadmap:{title:"Technical Development Roadmap",phases:[{time:"2024 Q1",desc:"Complete OrdX issuance protocol development and mainnet deployment"},{time:"2024 Q3",desc:"Complete STP core development and testnet deployment"},{time:"2024 Q4",desc:"Complete SatoshiNet node setup, deployment, and assets cross and transfer between Bitcoin Mainnet and SatoshiNet"},{time:"2025 Q1",desc:"Complete lightning channel pool management function, wallet, Dex major development work"},{time:"2025 Q2",desc:"SatoshiNet mainnet launch, full Dex online"}]}},satoshinet:{title:"SatoshiNet",subtitle:"SatoshiNet is an evolved version of the Lightning Network, based on extended Lightning channel technology and Bitcoin's core code, building a native second-layer network. It enables bridge-less cross-chain, instant confirmations, and low-cost transactions. It has revolutionized the scalability and application scenarios of the Bitcoin ecosystem, driving innovation and development across the entire ecosystem.",architecture:{title:"Technical Architecture",feature1:"Based on Bitcoin Network",feature2:"Lightning Network Extension",feature3:"Secure Encryption Mechanism",feature4:"Privacy Protection Solution"},compatibility:{title:"Compatible Protocols"},assetTypes:{title:"Asset Types",description:"SatoshiNet supports multiple types of assets to meet different scenario requirements",types:{ft:{title:"Fungible Token",description:"Fungible tokens, interchangeable assets"},nft:{title:"Non-Fungible Token",description:"Non-fungible tokens, unique assets"},sft:{title:"Semi-Fungible Token",description:"Semi-fungible tokens, batch assets"},did:{title:"Decentralized Identity",description:"Decentralized identity system"}}},advantages:{title:"Core Advantages",items:[{title:"High Performance Scaling",desc:"Support high-concurrency transactions based on state channel technology"},{title:"Asset Compatibility",desc:"Fully compatible with various Bitcoin Layer 1 asset protocols"},{title:"Security and Reliability",desc:"Inherits Bitcoin network's security and decentralization features"}]},economy:{title:"Economic Model",models:[{percent:"70%",label:"Ecosystem Incentives",desc:"For ecosystem development and developer incentives"},{percent:"20%",label:"Node Operations",desc:"For maintaining network infrastructure"},{percent:"10%",label:"Community Governance",desc:"For community development and governance"}]},ecosystem:{title:"Ecosystem Development",phases:[{title:"Infrastructure",items:["Mainnet Launch","Core Protocol Enhancement","Basic Tool Development"]},{title:"Ecosystem Expansion",items:["DApp Ecosystem Building","Multi-protocol and Multi-asset Interoperability","Developer Community Building"]},{title:"Application Implementation",items:["Large-scale Commercial Applications","Ecosystem Refinement","Global Expansion"]}]}},tokenomics:{title:"SAT20 Ecosystem",description:`SAT20 ecosystem consists of multiple collaborative components that together create a complete decentralized financial ecosystem:

1. ORDX Protocol: Core trading protocol supporting satoshi-level asset issuance and trading.

2. STP Protocol: Liquidity protocol enabling seamless cross-chain asset transfer.

3. Developer Tools: Complete SDK and API support to help developers quickly integrate.

4. Community Governance: Community-driven decision making through DAO mechanisms.`,hero:{title:"Join the SatoshiNet ecosystem and build the blockchain future together",subtitle:"SatoshiNet life consists of multiple collaborative components that together create a complete decentralized financial system. We invite you to join the life and explore the unlimited possibilities of blockchain technology."},assetIssuance:{title:"Asset Issuance",description:"Create and issue your SFT assets through the SAT20 protocol, ushering in a new era of blockchain assets.",features:['SAT20 Protocol: "Satoshi-based" asset issuance standard',"Diverse issuance models: Project-led, partial control, fair launch","Complete issuance process: from deployment to issuance","Secure and reliable: Multiple security mechanisms to ensure asset security"]},trading:{title:"Trading",description:"Use the STP (Satoshi Throughput Protocol) to seamlessly transfer assets to the SatoshiNet ecosystem, experience seamless trading.",features:["STP Protocol: High-efficiency asset circulation solution","Simple operation: Easy wallet connection and transaction confirmation","Full asset circulation: Implementing various asset circulation protocols","Real-time market: Accurate market data and transaction information"]},community:{title:"Community Participation",description:"Join the SatoshiNet community and participate in governance, together building a sustainable ecosystem.",features:["Governance voting: Participate in important decision-making through community voting","Community activities: Rich online and offline community engagement","Contribution incentives: Comprehensive community contribution rewards system","Resource sharing: Access to latest project news and research findings"]},developer:{title:"Developer Support",description:"Provide comprehensive tools and resources for developers, supporting innovative application development.",features:["Technology Documentation: Detailed API documentation and development guides","Development Tools: Powerful SDK and development kits","Example Projects: Rich reference examples and best practices","Technical Support: Professional support services for developers"]},sidebar:{announcements:"Announcements",announcementList:[{title:"SAT20 Protocol V2.0 Release",link:"/news/sat20-v2"},{title:"Eco Fund Launch",link:"/news/eco-fund"},{title:"Bridge and DEX Launch",link:"/news/bridge-launch"}],resources:"Resources",resourceList:[{title:"SAT20 Whitepaper",link:"/#/docs/whitepaper"},{title:"Developer Kit",link:"/#/docs/devkit"},{title:"Roadmap",link:"/#/docs/roadmap"}]},newsletter:{title:"Subscribe to Updates",description:"Subscribe to our newsletter to stay updated with the latest news and important updates.",placeholder:"Enter your email address",subscribe:"Subscribe"},ecosystem:{title:"Ecosystem",applications:{title:"Application Scenarios",items:[{title:"DeFi Application",description:"Decentralized Finance, including lending and borrowing, trading, staking, and other financial services"},{title:"NFT Market",description:"Digital art, collectibles, and non-fungible tokens (NFTs) market"},{title:"Blockchain Game",description:"Games based on blockchain technology"}]}}},roadmap:{title:"Technology Roadmap",subtitle:"SAT20 Technology Roadmap",status:{completed:"Completed",inProgress:"In Progress",upcoming:"Upcoming"},years:{2024:"2024",2025:"2025",future:"Future"},phases:{phase1:{date:"2024 Q2",title:"ORDX Protocol Development Completed",items:["ORDX Protocol Standard Draft","Core Function Development","Test Net Deployment Verification","ORDX Protocol Online Main Net"]},phase2:{date:"2024 Q4",title:"Step-by-Step Open Source",items:["Index Module Open Source","Wallet Module Open Source","Developer Documentation Release","Community Contribution Guide"]},phase3:{date:"2025 Q1",title:"STP Protocol Launch",items:["STP Protocol Launch","Dynamic Channel Capacity Adjustment","Flow Pool Protocol Integration","Multi-chain Interoperability"]},phase4:{date:"2025 Q2",title:"SatoshiNet MainNet Launch",items:["SatoshiNet Main Net Launch","SatSwap/DEX Launch","Ecosystem Deployment","Community Governance Start"]},future:{date:"Future",title:"Vision",items:["Support more protocols and asset types","Build DeIP (Decentralized Knowledge Property Network)","Expand SatoshiNet ecosystem","Build a global developer community"]}}},investor:{title:"Investor Center",subtitle:"Understand SAT20's Investment Value and Mechanisms",tokenUsage:{title:"Token Usage Scenarios",pearl:"Pearl is the native token of the SAT20 ecosystem, used for transaction fees, ecosystem governance, and revenue sharing."},transactionFee:{title:"Transaction Fees",current:"Currently each transaction only requires 10 satoshis, and will be further reduced to 1 satoshi in the future."},revenue:{title:"Revenue Distribution",mining:{title:"Mining Revenue",description:"Earn mining rewards by participating in network maintenance",phase1:"Phase 1: Daily output of 1 million tokens",phase2:"Phase 2: Daily output of 500,000 tokens",phase3:"Phase 3: Daily output of 250,000 tokens"},staking:{title:"Staking Revenue",description:"Earn network fee share by staking Pearl",apy:"Target APY: 15-30%",lockPeriod:"Lock Period: 7-90 days"},liquidity:{title:"Liquidity Revenue",description:"Earn revenue by providing liquidity for trading pairs",share:"Fee Share: 70%",bonus:"Additional Pearl Rewards"},foundation:{title:"Foundation Distribution",description:"The foundation will invest $10 million in ecosystem development",early:"Early Stage",growth:"Growth Stage"}},adjustment:{title:"Dynamic Adjustment Mechanism",network:{title:"Network Parameter Adjustment",description:"Dynamically adjust fees and block parameters based on network load"},staking:{title:"Staking Mechanism Adjustment",description:"Dynamically adjust yield rates and lock periods based on total staking amount"}},foundation:{title:"Foundation Plan",description:"The foundation will invest $10 million in ecosystem development",allocation:[{title:"Developer Incentives",percent:"40%",description:"Support developers in building DApps"},{title:"Marketing",percent:"30%",description:"Brand building and market expansion"},{title:"Community Building",percent:"20%",description:"Community activities and operations"},{title:"Security Reserve",percent:"10%",description:"For handling emergencies"}]}},developers:{title:"Developer Center",subtitle:"Build Next-gen Blockchain Applications",description:"Use SAT20 protocol to develop innovative applications",quickLinks:{title:"Quick Links",items:[{title:"Developer Documentation",description:"Detailed API documentation and development guides",url:"/#/docs/api_reference",icon:"book",submenu:[{title:"Basic Information",url:"/#/docs/api_reference#basic-info"},{title:"Authentication and Security",url:"/#/docs/api_reference#authentication"},{title:"Address API",url:"/#/docs/api_reference#address-api",submenu:[{title:"Get UTXO Asset Details",url:"/#/docs/api_reference#endpoint-assets"},{title:"Get Address Minting History",url:"/#/docs/api_reference#endpoint-history"},{title:"Get Address Balance Summary",url:"/#/docs/api_reference#endpoint-summary"},{title:"Get Address UTXO List",url:"/#/docs/api_reference#endpoint-utxolist"}]},{title:"Blockchain API",url:"/#/docs/api_reference#blockchain-api",submenu:[{title:"Get Current Block Height",url:"/#/docs/api_reference#endpoint-bestheight"},{title:"Get Block Hash",url:"/#/docs/api_reference#endpoint-blockhash"},{title:"Get Raw Block Data",url:"/#/docs/api_reference#endpoint-block"},{title:"Send Raw Transaction",url:"/#/docs/api_reference#endpoint-sendtx"},{title:"Get Transaction Details",url:"/#/docs/api_reference#endpoint-tx"}]},{title:"Error Handling",url:"/#/docs/api_reference#error-handling"},{title:"Best Practices",url:"/#/docs/api_reference#best-practices"}]},{title:"GitHub",description:"View the source code",url:"https://github.com/sat20labs",icon:"github"},{title:"Developer Community",description:"Join discussion and get support",url:"#",icon:"users"}]},documentation:{title:"Technical Documentation",categories:[{title:"Getting Started",description:"Quick start guide for SAT20 development",icon:"rocket",url:"/#/docs/gettingstarted"},{title:"API Reference",description:"Detailed API documentation",icon:"code",url:"/#/docs/api_reference"},{title:"Best Practices",description:"Development guidelines and examples",icon:"star",url:"/#/docs/best-practices"},{title:"Tutorials",description:"Deep dive tutorials",icon:"graduation-cap",url:"/#/docs/tutorials"}]},tools:{title:"Tools",description:"Provide developers with necessary tools and resources",items:[{title:"SAT20 Indexer",description:"High-performance blockchain data indexing and querying tool",icon:"indexer",url:"/#/docs/indexer"},{title:"SDK",description:"Full-featured development tools",icon:"code",url:"/#/docs/sdk"},{title:"CLI Tools",description:"Command-line development tools",icon:"terminal",url:"/#/docs/cli"},{title:"Contract Templates",description:"Smart contract development templates",icon:"contract",url:"/#/docs/contract-templates"}]},updates:{title:"Latest Updates",items:[{title:"SDK v1.2.0 Release",description:"Added smart contract support, improved performance and stability",date:"2024-02-20",icon:"code"},{title:"Developer Documentation Update",description:"Added API references and best practice guides",date:"2024-02-15",icon:"book"},{title:"Testnet Upgrade",description:"Support for new transaction types and smart contract features",date:"2024-02-10",icon:"server"}]},community:{title:"Community",channels:[{title:"Discord",description:"Join our developer chat",icon:"discord",url:"#"},{title:"GitHub",description:"Contribute to our open source code",icon:"github",url:"https://github.com/sat20labs"},{title:"Forum",description:"Discuss technical topics",icon:"forum",url:"#"}]}},user:{title:"User Center",subtitle:"Manage Your Assets and Account",description:"Use SAT20 for asset issuance, trading, and management, experience the next generation blockchain asset ecosystem.",sections:{minting:{title:"Asset Issuance",description:"Learn how to issue and manage your assets on SAT20",tutorials:[{title:"Create Wallet",description:"Set up your SAT20 wallet",icon:"wallet",items:["Download and install wallet","Create or import account","Secure your mnemonic phrase"]},{title:"Issue Asset",description:"Issue your first asset",icon:"token",items:["Choose asset type","Set asset parameters","Confirm and issue"]},{title:"Manage Assets",description:"Manage your assets",icon:"manage",items:["View asset details","Transfer and receive","View transaction history"]}]},trading:{title:"Trading Features",description:"SATSWAP DEX coming soon",features:[{title:"Order Book Trading",description:"Place and manage orders",icon:"trade"},{title:"Liquidity Pools",description:"Provide liquidity and earn fees",icon:"pool"},{title:"Asset Transcending",description:"Assets transcending between the mainnet and SatoshiNet via lightning channels",icon:"transcending"}]},testing:{title:"Testnet Experience",description:"Try features on testnet",link:"https://demo.ordx.market",features:[{title:"Get Test Coins",description:"Get test coins from faucet",icon:"faucet"},{title:"Issue Test Assets",description:"Try asset issuance process",icon:"test"},{title:"Simulate Trading",description:"Experience trading features",icon:"tradeing"}]}},wallet:{title:"Wallet",balance:"Balance",send:"Send",receive:"Receive",history:"Transaction History",features:[{title:"Asset Management",description:"Manage all your digital assets"},{title:"Transaction History",description:"View all your transactions"},{title:"Security Settings",description:"Manage your security preferences"}]},assets:{title:"Assets",tokens:"Tokens",nfts:"NFTs",activity:"Activity",management:{title:"Asset Management",features:[{title:"Portfolio Overview",description:"View your asset portfolio"},{title:"Transaction Management",description:"Manage your transactions"},{title:"Asset Analytics",description:"Track your asset performance"}]}},settings:{title:"Settings",account:"Account",security:"Security",preferences:"Preferences",options:[{title:"Profile Settings",description:"Manage your profile information"},{title:"Security Settings",description:"Configure security options"},{title:"Notification Settings",description:"Manage your notifications"}]}},docs:{toc:"Table of Contents",lastUpdated:"Last Updated",categories:{whitepaper:"Whitepaper",getting_started:"Getting Started",api_reference:"API Reference",contributing:"Contributing Guide"},whitepaper:{title:"SAT20 Whitepaper",content:`
# SAT20 Whitepaper
<a id="whitepaper-intro"></a>
## Introduction

SAT20 is a Bitcoin-native asset issuance and circulation protocol designed to provide a secure, scalable, and efficient asset management solution for the Bitcoin ecosystem.

<a id="whitepaper-features"></a>
## Core Features

*   Satoshi-based Assets: SAT20 supports satoshi-level asset issuance and management, enabling efficient circulation of Bitcoin native assets.
*   Native Layer 2 Network: SAT20 is built on Lightning Network and BTC parallel network, achieving high-performance and low-latency transaction processing.
*   Full Asset Compatibility: SAT20 supports various asset protocols, including Ordinals, OrdX, Runes, and BRC20.
*   Smart Contract Support: SAT20 supports templated smart contracts and Turing-complete scripts, enabling flexible asset management.

<a id="whitepaper-architecture"></a>
## Technical Architecture

SAT20's technical architecture includes the following layers:

*   Base Layer: Bitcoin network as the underlying infrastructure.
*   Protocol Layer: SAT20 core protocol and smart contracts.
*   Application Layer: Decentralized application ecosystem.

<a id="whitepaper-scenarios"></a>
## Application Scenarios

SAT20's application scenarios include:

*   DeFi Applications: Decentralized financial services, including lending, trading, and staking.
*   NFT Market: Digital art and collectibles issuance and trading platform.
*   Blockchain Games: Blockchain-based game assets and virtual worlds.

<a id="whitepaper-summary"></a>
## Summary

SAT20 is a Bitcoin-native asset issuance and circulation protocol that is secure, scalable, and efficient. It supports satoshi-level asset issuance and management, enabling efficient circulation of Bitcoin native assets. SAT20's technical architecture includes base layer, protocol layer, and application layer, supporting various asset protocols and smart contracts. Its application scenarios include DeFi applications, NFT markets, and blockchain games.
`},getting_started:{title:"Getting Started Guide",content:`
# Getting Started Guide

<a id="guide-install"></a>
## Installation

Install SAT20 development kit using npm:

\`\`\`bash
npm install @sat20/sdk
\`\`\`


<a id="guide-init"></a>
## Initialization

Create SAT20 client instance:

\`\`\`javascript
import { SAT20Client } from '@sat20/sdk';

const client = new SAT20Client({
  network: 'mainnet',  // or 'testnet'
  apiKey: 'YOUR_API_KEY'
});
\`\`\`

<a id="guide-basic"></a>
## Basic Usage

<a id="guide-issue"></a>
### Issue Asset

\`\`\`javascript
const result = await client.issueAsset({
  name: 'MyToken',
  symbol: 'MTK',
  totalSupply: '1000000'
});
\`\`\`

<a id="guide-transfer"></a>
### Transfer Asset


\`\`\`javascript
await client.transfer({
  to: 'recipient_address',
  amount: '100',
  asset: 'MTK'
});
\`\`\`

`},api_reference:{title:"API Reference",content:`
# SAT20 API Documentation

<a id="basic-info"></a>
## Basic Information

- **Base URL**: https://apiprd.sat20.org/mainnet
- **API Version**: v0.1.0
- **Protocol**: HTTPS
- **Data Format**: JSON
- **Character Encoding**: UTF-8

<a id="authentication"></a>
## Authentication and Security

All API requests require Bearer Token authentication in the Header:

\`\`\`http
Authorization: Bearer YOUR_API_KEY
\`\`\`


How to get API key:
1. Login to SAT20 Developer Platform
2. Visit API Key Management page
3. Create new API key
4. Keep your API key safe and do not share with others

Security recommendations:
- Rotate API keys regularly
- Store API keys in environment variables
- Prevent key exposure

<a id="address-api"></a>
## Address Related APIs
<a id="endpoint-assets"></a>
### Get UTXO Asset Details
- **Endpoint**: GET /address/assets/{utxo}
- **Description**: Get asset details in specified UTXO, including token amount, type, etc.
- **Parameters**: 
  - utxo: UTXO identifier (path parameter, required)
- **Response Example**:

\`\`\`json
{
  "utxo": "txid:vout",
  "assets": [
    {
      "ticker": "SAT20",
      "amount": "100",
      "decimals": 8,
      "confirmed": true
    }
  ]
}
\`\`\`

<a id="endpoint-history"></a>
### Get Address Minting History
- **Endpoint**: GET /address/history/{address}/{ticker}
- **Description**: Get minting history records for specified address, supports pagination
- **Parameters**:
  - address: Bitcoin address (path parameter, required)
  - ticker: Token symbol (path parameter, required)
  - page: Page number (query parameter, optional, default 1)
  - limit: Records per page (query parameter, optional, default 20)
- **Response Example**:

\`\`\`json
{
  "total": 100,
  "page": 1,
  "limit": 20,
  "history": [
    {
      "txid": "...",
      "timestamp": "2024-02-22T14:30:00Z",
      "amount": "1000",
      "confirmations": 6
    }
  ]
}
\`\`\`

<a id="endpoint-summary"></a>
### Get Address Balance Summary
- **Endpoint**: GET /address/summary/{address}
- **Description**: Get all token balance summary for specified address
- **Parameters**:
  - address: Bitcoin address (path parameter, required)
- **Response Example**:

\`\`\`json
{
  "address": "bc1...",
  "balances": [
    {
      "ticker": "SAT20",
      "total_amount": "5000",
      "confirmed_amount": "4500",
      "pending_amount": "500"
    }
  ]
}
\`\`\`

<a id="endpoint-utxolist"></a>
### Get Address UTXO List
- **Endpoint**: GET /address/utxolist/{address}/{ticker}
- **Description**: Get UTXO list for specified address and token, supports pagination and sorting
- **Parameters**:
  - address: Bitcoin address (path parameter, required)
  - ticker: Token symbol (path parameter, required)
  - sort: Sort method (query parameter, optional, values: amount_asc/amount_desc/time_asc/time_desc)
  - confirmed_only: Whether to return only confirmed UTXOs (query parameter, optional, default false)
- **Response Example**:

\`\`\`json
{
  "utxos": [
    {
      "txid": "...",
      "vout": 0,
      "amount": "100",
      "confirmations": 6,
      "height": 800000
    }
  ]
}
\`\`\`

<a id="blockchain-api"></a>
## Blockchain Related APIs

<a id="endpoint-bestheight"></a>
### Get Current Block Height
- **Endpoint**: GET /bestheight
- **Description**: Get current Bitcoin block height
- **Cache**: 10 seconds
- **Response Example**:

\`\`\`json
{
  "height": 800000,
  "timestamp": "2024-02-22T14:30:00Z"
}
\`\`\`

<a id="endpoint-blockhash"></a>
### Get Block Hash
- **Endpoint**: GET /btc/block/blockhash/{height}
- **Description**: Get block hash by block height
- **Parameters**:
  - height: Block height (path parameter, required)
- **Response Example**:

\`\`\`json
{
  "height": 800000,
  "hash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
}
\`\`\`

<a id="endpoint-block"></a>
### Get Raw Block Data
- **Endpoint**: GET /btc/block/{blockhash}
- **Description**: Get complete block data by block hash
- **Parameters**:
  - blockhash: Block hash (path parameter, required)
- **Response Field Description**:
  - hash: Block hash
  - confirmations: Number of confirmations
  - size: Block size (bytes)
  - weight: Block weight
  - height: Block height
  - version: Block version
  - merkleroot: Merkle root
  - time: Block timestamp
  - nonce: Nonce value
  - bits: Difficulty target
  - previousblockhash: Previous block hash
  - nextblockhash: Next block hash
  - tx: Transaction list

<a id="endpoint-sendtx"></a>
### Send Raw Transaction
- **Endpoint**: POST /btc/tx
- **Description**: Send signed raw transaction to Bitcoin network
- **Parameters**:
  - signedTxHex: Signed transaction hex data (request body, required)
  - maxfeerate: Maximum fee rate, unit BTC/kB (request body, optional)
- **Notes**:
  - Transaction must be fully signed
  - Recommend testing on testnet first
  - Set reasonable fee rate to avoid transaction delay
- **Response Example**:

\`\`\`json
{
  "txid": "...",
  "fee": "0.0001",
  "size": 225
}
\`\`\`

<a id="endpoint-tx"></a>
### Get Transaction Details
- **Endpoint**: GET /btc/tx/{txid}
- **Description**: Get detailed information for specified transaction ID
- **Parameters**:
  - txid: Transaction ID (path parameter, required)
- **Response Field Description**:
  - txid: Transaction ID
  - hash: Transaction hash
  - version: Transaction version
  - size: Transaction size
  - vsize: Virtual size
  - weight: Transaction weight
  - locktime: Lock time
  - vin: Input list
  - vout: Output list
  - confirmations: Number of confirmations
  - time: Transaction time
  - blocktime: Block time

<a id="error-handling"></a>
## Error Handling
<a id="http-status-codes"></a>
### HTTP Status Codes

- 200: Request successful
- 400: Request parameter error
- 401: Authentication failed
- 403: Permission denied
- 404: Resource not found
- 429: Request rate limit exceeded
- 500: Server internal error

<a id="error-response-format"></a>
### Error Response Format

\`\`\`json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description",
    "details": {
      "field": "Specific error field",
      "reason": "Specific error reason"
    }
  }
}
\`\`\`


<a id="common-error-codes"></a>
### Common Error Codes

- INVALID_PARAMETER: Invalid parameter
- INSUFFICIENT_FUNDS: Insufficient balance
- RATE_LIMIT_EXCEEDED: Request limit exceeded
- INVALID_SIGNATURE: Invalid signature
- NETWORK_ERROR: Network error

<a id="best-practices"></a>
## Best Practices
<a id="request-limit"></a>
### Request Limits
- Basic API key: 60 requests/minute
- Professional API key: 600 requests/minute
- Enterprise API key: 6000 requests/minute
<a id="optimization"></a>
### Optimization Suggestions

1. **Use Batch APIs**
   - Use batch query APIs when possible
   - Set reasonable batch sizes

2. **Caching Strategy**
   - Cache infrequently changing data
   - Use appropriate cache expiration times
   - Implement incremental update mechanism

3. **Error Handling**
   - Implement exponential backoff retry
   - Handle all possible error cases
   - Log detailed error information

4. **Performance Optimization**
   - Use compression
   - Reduce request frequency
   - Implement local cache
<a id="security"></a>
### Security Recommendations

1. **API Key Management**
   - Rotate keys regularly
   - Use environment variables
   - Prevent key exposure

2. **Request Validation**
   - Validate all input data
   - Implement request signing
   - Use HTTPS transport

3. **Monitoring and Alerts**
   - Monitor API usage
   - Set up anomaly alerts
   - Record audit logs
`},contributing:{title:"Contributing Guide",content:`
# Contributing Guide

<a id="contributing-process"></a>
## Development Process

1. Fork project repository
2. Create feature branch
3. Submit changes
4. Create Pull Request

<a id="code-standards"></a>
## Code Standards

We use ESLint for code standard checking, please ensure your code meets the standards:

\`\`\`bash
npm run lint
\`\`\`


<a id="commit-message-format"></a>
## Commit Message Format

Use Angular commit convention:

- feat: New feature
- fix: Bug fix
- docs: Documentation updates
- style: Code formatting
- refactor: Code refactoring
- test: Testing related
- chore: Build process or auxiliary tool changes
`}}},tu={common:{learnMore:"更多详情",viewAll:"查看全部",back:"返回",close:"关闭",confirm:"确认",cancel:"取消",loading:"加载中...",error:"出错了",success:"成功",retry:"重试"},theme:{light:"浅色模式",dark:"深色模式"},nav:{home:"首页",tech:"技术",satnet:"聪网",eco:"生态",roadmap:"路线",docs:"文档"},roles:{explorer:"浏览器",developer:"开发者",user:"用户"},menu:{navigation:"导航",roles:"角色",settings:"设置",theme:"主题",language:"语言",documentation:"文档"},footer:{info:"欢迎来到SAT20Labs，共建去中心化的未来",product:"产品",developers:"开发者",services:"服务",home:"首页",tech:"技术",satnet:"聪网",community:"社区",whitepaper:"白皮书",docs:"文档",api:"API",github:"GitHub",market:"市场",explorer:"浏览器",eco:"生态",links:[{link1:"链接1"},{link2:"链接2"},{link3:"链接3"}]},home:{hero:{mainTitle:"一聪一世界",subTitle:"BTC原生资产发行与流通",features:[{text:"无需分割，",accent:"100%非托管！"},{text:"我们的",accent:'"部分订单簿"',suffix:"允许用户自由挂单任意数量。"},{text:"不再有复杂的分割，只需",accent:"随时交易。"}],description:`SAT20Labs为比特币生态提供资产发行和流通基础设施。核心技术是SAT20协议和创新的SatoshiNet。SatoshiNet基于闪电通道和比特币平行网络，支持Ordinals、Runes、OrdX、BRC20等多种协议资产，通过网络提供超低手续费和秒级确认。

通过SAT20协议，用户可以轻松发行和流通BTC原生资产，享受无缝兼容和即时交易体验。`,downloadWhitepaper:"下载白皮书",tryTestnet:"体验测试网"},features:{title:"核心特性",items:[{title:"聪本位资产",description:"资产绑定聪，不可销毁、自由流动"},{title:"原生二层网络",description:"基于闪电通道+BTC平行网络SatoshiNet"},{title:"全资产兼容",description:"支持Ordinals、OrdX、Runes、BRC20等协议"},{title:"智能合约支持",description:"模板化合约及图灵完备脚本（OP_CAT）"},{title:"超低费用",description:"10聪/交易，秒级确认"}]},satoshinet:{title:"聪网",subtitle:"新一代区块链基础设施",description:"SAT20的底层网络基础设施",architecture:{title:"技术架构",description:"聪网采用创新的多层架构设计",feature1:"原生比特币网络集成",feature2:"闪电网络二层扩展",feature3:"安全多资产支持",feature4:"去中心化基础设施",layers:{title:"网络层次",items:[{name:"共识层",description:"基于比特币网络，继承其安全性"},{name:"网络层",description:"P2P网络通信和数据同步"},{name:"协议层",description:"资产发行和交易规则"},{name:"应用层",description:"DApp开发接口和工具"}]}},compatibility:{title:"兼容协议",protocols:["Ordinals","BRC20","Runes","OrdX"]},assetTypes:{title:"支持的资产类型",types:{ft:{title:"Fungible Token",description:"同质化通证，可互换资产",imgurl:"/images/assetstype/ft.png"},nft:{title:"Non-Fungible Token",description:"非同质化通证，独特资产",imgurl:"/images/assetstype/nft.png"},sft:{title:"Semi-Fungible Token",description:"半同质化通证，批量资产",imgurl:"/images/assetstype/sft.png"},did:{title:"Decentralized Identity",description:"去中心化身份标识",imgurl:"/images/assetstype/did.png"}}}},ecosystem:{title:"生态系统",applications:{title:"应用场景",items:[{title:"DeFi应用",description:"去中心化金融服务，包括借贷、交易、质押等"},{title:"NFT市场",description:"数字艺术品、收藏品的发行和交易平台"},{title:"Dapps与GameFi",description:"基于区块链的应用、游戏和元宇宙"}]},partners:{title:"合作伙伴",items:[{title:"应用开发者",description:"提供开发者资助计划和黑客松活动"},{title:"基础设施",description:"索引器和节点服务提供商"},{title:"战略合作伙伴",description:"生态应用集成和钱包集成"}]}},developers:{title:"开发者中心",subtitle:"构建下一代区块链应用",description:"使用SAT20协议开发创新应用和服务",buttons:{startDev:"开始开发",viewDocs:"查看文档"}},partners:{title:"合作伙伴",description:"与行业领先的企业和组织携手共建比特币生态",items:[],sat20market:"领先的比特币原生资产交易平台",btcname:"去中心化比特币域名服务",morego:"创新的SocialFi,GameFi应用",unisat:"流行的比特币钱包和铭文平台",okx:"全球领先的数字资产交易所",magiceden:"领先的NFT市场和生态系统"}},technology:{title:"技术架构",subtitle:"探索SAT20的创新区块链技术",description:"SAT20协议采用最先进的区块链技术，构建了一个高效、安全、经济且智能化的比特币原生资产发行和流通的管理体系，为比特币生态的创新发展提供了革命性的机会。",hero:{title:"创新技术架构",subtitle:"探索SAT20的技术创新"},architecture:{title:"分层架构",base:{title:"BTC Mainnet",desc:"资产发行基础层，兼容主流协议，如Ordinals、Runes、Brc20、OrdX..."},protocol:{title:"Lightning Channel",desc:"动态闪电通道技术，兼容各种BTC生态资产在主网和聪网之间安全的自由穿越"},application:{title:"SatoshiNet",desc:"创新的闪电网络架构：DEX/SWAP、DeFi、GameFi、SocialFi、Metaverse..."}},comparison:{title:"技术先进性特点",headings:["维度","传统方案","SAT20创新","提升效果"],dimensions:{asset:"资产粒度",contract:"合约能力",speed:"交易速度",cost:"跨链成本",dev:"开发门槛"},traditional:{asset:"UTXO为单位",contract:"非图灵完备",speed:"10分钟确认",cost:"手续费0.5%+",dev:"需定制侧链"},innovation:{asset:"聪级精准度",contract:"OP_CAT增强型图灵完备",speed:"秒级闪电通道",cost:"原子交换，低手续费",dev:"主网原生兼容"},improvement:{asset:"BTC的1亿倍精细化",contract:"支持复杂智能合约",speed:"600倍加速",cost:"超低成本",dev:"省90%开发成本"}},innovation:{title:"核心创新价值",items:[{title:"聪本位体系",features:["每个聪独立可编程","资产与聪永久绑定","UTXO原生扩展"]},{title:"进化版闪电网络",features:["可动态调整通道容量","兼容一层发行的原生资产","实现资产安全的无桥跨链"]},{title:"聪网的智能进化",features:["模版化智能合约","OP_CAT指令集扩展","SVM聪虚拟机支持"]}]},pillars:{title:"四大技术支柱",items:[{title:"聪资产发行管理引擎（OrdX）",innovation:"创新点：聪级精度的资产发行与管理，多资产类型满足不同场景",features:["基于Ordinals序数编号，精准的聪定位与追踪技术",'支持灵活的"一聪一币"和"一聪多币"资产发行',"专业化稀有聪资产的挖掘与管理，提升资产稀缺性和价值"]},{title:"聪穿越技术（STP协议）",innovation:"创新点：避免传统跨链桥的安全隐患，提升交易的可靠性和透明度",features:["动态通道：通过Splicing技术实现动态通道容量调整","无桥跨链：原生闪电通道技术，避免跨链桥的安全隐患","安全合约：基于RSMC合约自动执行资产锁定与释放，降低风险"]},{title:"超级UTXO - 多协议资产兼容",innovation:"创新点：统一框架整合不同协议资产，无缝跨协议资产交换",features:["支持Ordinals、BRC20、Runes、OrdX等多协议资产","聪网超级UTXO架构提升资产兼容性与管理效率，降低交易成本","支持跨协议互操作，降低了资产交换和流通难度"]},{title:"资产交换引擎 - SATSWAP",innovation:"创新点：实现资产的实时交换，减少交易延迟和手续费",features:["SATSWAP提供去中心化、低成本的资产交换与流通","交易引擎支持高频交易与流动性池，解决流动性难题","金融（DeFi）可实现资产的借贷、流动性提供与收益优化"]}]},roadmap:{title:"技术演进路线",phases:[{time:"2024 Q1",desc:"完成资产发行协议OrdX的开发与主网部署"},{time:"2024 Q3",desc:"完成流通协议STP的核心开发工作与测试网部署"},{time:"2024 Q4",desc:"完成SatoshiNet的节点搭建、部署以及OrdX,Runes资产的穿越、转移"},{time:"2025 Q1",desc:"完成闪电通道池子管理、钱包，Dex的大部分开发工作"},{time:"2025 Q2",desc:"SatoshiNet主网启动，Dex的完整上线"}]}},satoshinet:{title:"聪网",subtitle:"聪网是基于扩展闪电通道技术和比特币核心代码的进化版闪电网络，构建了一个原生二层网络，实现了无桥跨链、秒级确认和低成本交易。它革命性地提升了比特币生态的可扩展性和应用场景，推动了整个生态的创新与发展",architecture:{title:"技术架构",feature1:"基于比特币网络",feature2:"闪电网络扩展",feature3:"安全加密机制",feature4:"隐私保护方案"},compatibility:{title:"兼容协议"},assetTypes:{title:"资产类型",description:"聪网支持多种类型的资产，满足不同场景需求",types:{ft:{title:"Fungible Token",description:"同质化代币，可互换资产"},nft:{title:"Non-Fungible Token",description:"非同质化代币，独特资产"},sft:{title:"Semi-Fungible Token",description:"半同质化代币，兼具共性与独特性"},did:{title:"Decentralized Identity",description:"去中心化身份标识"}}},advantages:{title:"核心优势",items:[{title:"高性能扩展",desc:"基于状态通道技术，支持高并发交易"},{title:"资产兼容",desc:"完全兼容比特币一层各类资产协议"},{title:"安全可靠",desc:"继承比特币网络的安全性和去中心化特性"}]},economy:{title:"经济模型",models:[{percent:"70%",label:"生态激励",desc:"用于生态建设和开发者激励"},{percent:"20%",label:"节点运营",desc:"用于维护网络基础设施"},{percent:"10%",label:"社区治理",desc:"用于社区发展和治理"}]},ecosystem:{title:"生态发展",phases:[{title:"基础设施",items:["主网上线","核心协议完善","基础工具开发"]},{title:"生态扩展",items:["DApp生态建设","多协议、多资产互操作","开发者社区建设"]},{title:"应用落地",items:["大规模商业应用","生态系统完善","全球化布局"]}]}},tokenomics:{title:"SAT20生态系统",description:`SAT20生态系统由多个相互协作的组件构成，共同打造一个完整的去中心化金融生态：

1. ORDX协议：核心交易协议，支持聪级别资产的发行和交易。

2. STP协议：流通性协议，实现跨链资产的无缝转移。

3. 开发者工具：完整的SDK和API支持，助力开发者快速接入。

4. 社区治理：通过DAO机制实现社区驱动的决策。`,hero:{title:"加入聪网生态，共建区块链未来",subtitle:"聪网生态致力于构建一个开放、创新、共赢的区块链生态系统。我们邀请您参与生态建设，共同探索区块链技术的无限可能。"},assetIssuance:{title:"资产发行",description:"通过SAT20协议创建和发布您的SFT资产，开启区块链资产新纪元。",features:['SAT20协议：基于"聪本位"的资产发行标准',"多样化发行模式：项目方主导、部分控盘、公平发射","完整发行流程：从部署到发行的全程指导","安全可靠：多重安全机制保障资产安全"]},trading:{title:"参与交易",description:"使用STP（聪穿越协议）进行资产穿越到聪网流通，体验流畅的交易体验。",features:["STP协议：高效的资产流通解决方案","简单操作：便捷的钱包连接和交易确认","全资产流通：实现主流协议的各种资产流通","实时行情：准确的市场数据和交易信息"]},community:{title:"社区参与",description:"加入SatoshiNet社区，参与生态治理，共同推动项目发展。",features:["治理投票：参与重要决策的社区投票","社区活动：丰富的线上线下交流活动","贡献激励：完善的社区贡献奖励机制","资源共享：获取最新项目资讯和研究成果"]},developer:{title:"开发者支持",description:"为开发者提供完善的工具和资源支持，助力创新应用开发。",features:["技术文档：详尽的API文档和开发指南","开发工具：功能强大的SDK和开发套件","示例项目：丰富的参考示例和最佳实践","技术支持：专业的技术团队支持服务"]},sidebar:{announcements:"最新公告",announcementList:[{title:"SAT20协议V2.0版本发布",link:"/#/news/sat20-v2"},{title:"生态发展基金启动",link:"/#/news/eco-fund"},{title:"聪网及Dex将上线",link:"/#/news/bridge-launch"}],resources:"资源下载",resourceList:[{title:"SAT20技术白皮书",link:"/#/docs/whitepaper"},{title:"开发者工具包",link:"/#/docs/devkit"},{title:"生态路线图",link:"/#/docs/roadmap"}]},newsletter:{title:"订阅更新",description:"订阅我们的新闻简报，及时获取最新动态和重要更新。",placeholder:"请输入您的邮箱地址",subscribe:"订阅"},ecosystem:{title:"生态系统",applications:{title:"应用场景",items:[{title:"DeFi应用",description:"去中心化金融服务，包括借贷、交易、质押等"},{title:"NFT市场",description:"数字艺术品、收藏品的发行和交易平台"},{title:"区块链游戏",description:"基于区块链的游戏资产和虚拟世界"}]}}},roadmap:{title:"技术路线图",subtitle:"SAT20技术路线图",status:{completed:"已完成",inProgress:"进行中",upcoming:"即将开始"},years:{2024:"2024年",2025:"2025年",future:"未来愿景"},phases:{phase1:{date:"2024 Q2",title:"ORDX协议开发完成",items:["ORDX协议规范定稿","完成核心功能开发","测试网部署验证","ORDX协议上线主网"]},phase2:{date:"2024 Q4",title:"逐步开源",items:["索引器模块开源","钱包模块开源","开发者文档发布","社区贡献指南"]},phase3:{date:"2025 Q1",title:"STP流通协议上线",items:["STP协议正式发布","动态通道容量调整功能","流动性池协议集成","多链互操作支持"]},phase4:{date:"2025 Q2",title:"SatoshiNet主网启动",items:["SatoshiNet主网上线","SatSwap/DEX启动","生态应用部署","社区治理开启"]},future:{date:"未来",title:"愿景目标",items:["支持更多协议及资产类型的流通","构建DeIP（去中心化知识产权网络）","扩展聪网生态系统","建立全球开发者社区"]}}},investor:{title:"投资者中心",subtitle:"了解SAT20的投资价值与机制",tokenUsage:{title:"代币使用场景",pearl:"Pearl是SAT20生态的原生代币，用于支付交易手续费、参与生态治理、获取收益分成等。"},transactionFee:{title:"交易手续费",current:"当前每笔交易仅需10聪，未来将进一步降至1聪。"},revenue:{title:"收益分配",mining:{title:"挖矿收益",description:"参与网络维护获得挖矿奖励",phase1:"第一阶段：日产出100万枚",phase2:"第二阶段：日产出50万枚",phase3:"第三阶段：日产出25万枚"},staking:{title:"质押收益",description:"质押Pearl获得网络手续费分成",apy:"目标年化：15-30%",lockPeriod:"锁定期：7-90天"},liquidity:{title:"流动性收益",description:"为交易对提供流动性获得收益",share:"手续费分成：70%",bonus:"额外Pearl奖励"},foundation:{title:"基金会分配",description:"基金会将投入1000万美元用于生态建设",early:"早期阶段",growth:"成长阶段"}},adjustment:{title:"动态调节机制",network:{title:"网络参数调节",description:"根据网络负载动态调整手续费和区块参数"},staking:{title:"质押机制调节",description:"根据质押总量动态调整收益率和锁定期"}},foundation:{title:"基金会计划",description:"基金会将投入1000万美元用于生态建设",allocation:[{title:"开发者激励",percent:"40%",description:"支持开发者构建DApp"},{title:"市场推广",percent:"30%",description:"品牌建设与市场拓展"},{title:"社区建设",percent:"20%",description:"社区活动与运营"},{title:"安全储备",percent:"10%",description:"用于应对突发情况"}]}},developers:{title:"开发者中心",subtitle:"构建去中心化的比特币原生资产生态",description:"加入SAT20开发者社区，使用我们的开发工具和SDK，构建下一代比特币原生资产应用。",quickLinks:{title:"快速入口",items:[{title:"开发者文档",description:"详尽的API文档和开发指南",url:"/#/docs/api_reference",icon:"book",submenu:[{title:"基础信息",url:"/#/docs/api_reference#basic-info"},{title:"认证与安全",url:"/#/docs/api_reference#authentication"},{title:"地址接口",url:"/#/docs/api_reference#address-api",submenu:[{title:"获取UTXO资产详情",url:"/#/docs/api_reference#endpoint-assets"},{title:"获取地址铸造历史",url:"/#/docs/api_reference#endpoint-history"},{title:"获取地址余额摘要",url:"/#/docs/api_reference#endpoint-summary"},{title:"获取地址UTXO列表",url:"/#/docs/api_reference#endpoint-utxolist"}]},{title:"区块链接口",url:"/#/docs/api_reference#blockchain-api",submenu:[{title:"获取当前区块高度",url:"/#/docs/api_reference#endpoint-bestheight"},{title:"获取区块哈希",url:"/#/docs/api_reference#endpoint-blockhash"},{title:"获取原始区块数据",url:"/#/docs/api_reference#endpoint-block"},{title:"发送原始交易",url:"/#/docs/api_reference#endpoint-sendtx"},{title:"获取交易详情",url:"/#/docs/api_reference#endpoint-tx"}]},{title:"错误处理",url:"/#/docs/api_reference#error-handling"},{title:"最佳实践",url:"/#/docs/api_reference#best-practices"}]},{title:"GitHub",description:"查看源代码和示例项目",url:"https://github.com/sat20labs",icon:"github"},{title:"开发者社区",description:"加入讨论，获取支持",url:"#",icon:"users"}]},documentation:{title:"技术文档",categories:[{title:"入门指南",description:"快速上手SAT20开发",icon:"rocket",url:"/#/docs/getting_started"},{title:"API参考",description:"详细的API文档",icon:"api",url:"/#/docs/api_reference"},{title:"最佳实践",description:"开发建议和示例",icon:"star",url:"/#/docs/best-practices"},{title:"教程",description:"深入的开发教程",icon:"graduation-cap",url:"/#/docs/tutorials"}]},tools:{title:"开发工具",description:"提供开发者必备的工具和资源",items:[{title:"SAT20 索引器",description:"高性能区块链数据索引和查询工具",icon:"indexer",url:"/#/docs/indexer"},{title:"SDK",description:"全功能开发工具包",icon:"sdk",url:"/#/docs/sdk"},{title:"CLI工具",description:"命令行开发工具",icon:"terminal",url:"/#/docs/cli"},{title:"合约模板",description:"智能合约开发模板",icon:"contract",url:"/#/docs/contract-templates"}]},updates:{title:"最新动态",items:[{title:"SDK v1.2.0 发布",description:"新增智能合约支持，优化性能和稳定性",date:"2024-02-20",icon:"code"},{title:"开发者文档更新",description:"新增API参考和最佳实践指南",date:"2024-02-15",icon:"book"},{title:"测试网升级",description:"支持新的交易类型和智能合约功能",date:"2024-02-10",icon:"server"}]},community:{title:"开发者社区",channels:[{title:"Discord",description:"加入开发者讨论",icon:"discord",url:"#"},{title:"GitHub",description:"贡献代码",icon:"github",url:"https://github.com/sat20labs"},{title:"论坛",description:"技术交流与支持",icon:"forum",url:"#"}]}},user:{title:"用户中心",subtitle:"探索SAT20的功能与服务",description:"使用SAT20进行资产发行、交易和管理，体验下一代区块链资产生态",sections:{minting:{title:"资产发行",description:"了解如何在SAT20上发行和管理您的资产",tutorials:[{title:"创建钱包",description:"设置您的SAT20钱包 ",icon:"wallet",items:["下载并安装钱包","创建或导入账户","保管好您的助记词"]},{title:"发行资产",description:"发行您的第一个资产",icon:"token",items:["选择资产类型","设置资产参数","确认并发行"]},{title:"管理资产",description:"管理您的资产",icon:"manage",items:["查看资产详情","转账和接收","查看交易历史"]}]},trading:{title:"交易功能",description:"SATSWAP即将上线，敬请期待",features:[{title:"订单本交易",description:"创建和管理订单",icon:"trade"},{title:"流动性池",description:"提供流动性和赚取费用",icon:"pool"},{title:"资产穿越",description:"资产通过闪电通道穿越主网与聪网",icon:"transcending"}]},testing:{title:"测试网体验",description:"在测试网上尝试新功能",link:"https://demo.ordx.market",features:[{title:"获取测试币",description:"从水龙头获取测试币",icon:"faucet"},{title:"发行测试资产",description:"尝试资产发行流程",icon:"test"},{title:"模拟交易",description:"体验交易功能",icon:"tradeing"}]}}},docs:{toc:"目录导航",lastUpdated:"最后更新",categories:{whitepaper:"白皮书",getting_started:"快速开始",api_reference:"API 文档",contributing:"贡献指南"},whitepaper:{title:"SAT20白皮书",content:`
# SAT20白皮书
<a id="whitepaper-overview"></a>
## 简介

SAT20是一种基于比特币的原生资产发行和流通协议，旨在为比特币生态提供一个安全、可扩展和高效的资产管理解决方案。

<a id="whitepaper-core-features"></a>
## 核心特性

*   聪本位资产：SAT20支持聪级别的资产发行和管理，实现了比特币原生资产的高效流通。
*   原生二层网络：SAT20基于闪电网络和BTC平行网络构建，实现了高性能和低延迟的交易处理。
*   全资产兼容：SAT20支持多种资产协议，包括Ordinals、OrdX、Runes和BRC20等。
*   智能合约支持：SAT20支持模板化智能合约和图灵完备脚本，实现了高灵活性的资产管理。

<a id="whitepaper-architecture"></a>
## 技术架构

SAT20的技术架构包括以下几个层次：

*   基础层：比特币网络作为底层基础设施。
*   协议层：SAT20核心协议和智能合约。
*   应用层：去中心化应用生态系统。

<a id="whitepaper-applications"></a>
## 应用场景

SAT20的应用场景包括：

*   DeFi应用：去中心化金融服务，包括借贷、交易和质押等。
*   NFT市场：数字艺术品和收藏品的发行和交易平台。
*   区块链游戏：基于区块链的游戏资产和虚拟世界。

<a id="whitepaper-conclusion"></a>
## 总结

SAT20是一种基于比特币的原生资产发行和流通协议，具有安全、可扩展和高效的特点。它支持聪级别的资产发行和管理，实现了比特币原生资产的高效流通。SAT20的技术架构包括基础层、协议层和应用层，支持多种资产协议和智能合约。其应用场景包括DeFi应用、NFT市场和区块链游戏等。
`},getting_started:{title:"快速开始指南",content:`
# 快速开始指南
<a id="guide-install"></a>
## 安装

使用npm安装SAT20开发套件：

\`\`\`bash
npm install @sat20sdk
\`\`\`


<a id="guide-init"></a>
## 初始化

创建SAT20客户端实例：

\`\`\`javascript
import { SAT20Client } from '@sat20/sdk';

const client = new SAT20Client({
  network: 'mainnet',  // 或 'testnet'
  apiKey: 'YOUR_API_KEY'
});
\`\`\`

<a id="guide-basic"></a>
## 基本用法

### 发行资产

\`\`\`javascript
const result = await client.issueAsset({
  name: 'MyToken',
  symbol: 'MTK',
  totalSupply: '1000000'
});
\`\`\`

<a id="guide-transfer"></a>
### 转账资产

\`\`\`javascript
await client.transfer({
  to: 'recipient_address',
  amount: '100',
  asset: 'MTK'
});
\`\`\`

`},api_reference:{title:"API Reference",content:`
# SAT20 API Documentation

<a id="basic-info"></a>
## 基础信息

- **基础URL**: https://apiprd.sat20.org/mainnet
- **API版本**: v0.1.0
- **协议**: HTTPS
- **数据格式**: JSON
- **字符编码**: UTF-8

<a id="authentication"></a>
## 认证与安全

所有API请求都需要在Header中包含Bearer Token进行认证：

\`\`\`http
Authorization: Bearer YOUR_API_KEY
\`\`\`

如何获取API密钥：
1. 登录SAT20开发者平台
2. 访问API密钥管理页面
3. 创建新的API密钥
4. 妥善保管您的API密钥，不要泄露给他人

安全建议：
- 定期轮换API密钥
- 使用环境变量存储API密钥
- 避免密钥泄露

<a id="address-api"></a>
## 地址相关接口

<a id="endpoint-assets"></a>
### 获取UTXO中的资产详情
- **端点**: GET /address/assets/{utxo}
- **描述**: 获取指定UTXO中的资产详情，包括代币数量、类型等信息
- **参数**: 
  - utxo: UTXO标识符（路径参数，必需）
- **响应示例**:

\`\`\`json
{
  "utxo": "txid:vout",
  "assets": [
    {
      "ticker": "SAT20",
      "amount": "100",
      "decimals": 8,
      "confirmed": true
    }
  ]
}
\`\`\`

<a id="endpoint-history"></a>
### 获取地址铸造历史
- **端点**: GET /address/history/{address}/{ticker}
- **描述**: 获取指定地址的铸造历史记录，支持分页查询
- **参数**:
  - address: 比特币地址（路径参数，必需）
  - ticker: 代币符号（路径参数，必需）
  - page: 页码（查询参数，可选，默认1）
  - limit: 每页记录数（查询参数，可选，默认20）
- **响应示例**:

\`\`\`json
{
  "total": 100,
  "page": 1,
  "limit": 20,
  "history": [
    {
      "txid": "...",
      "timestamp": "2024-02-22T14:30:00Z",
      "amount": "1000",
      "confirmations": 6
    }
  ]
}
\`\`\`

<a id="endpoint-summary"></a>
### 获取地址余额摘要
- **端点**: GET /address/summary/{address}
- **描述**: 获取指定地址的所有代币余额摘要
- **参数**:
  - address: 比特币地址（路径参数，必需）
- **响应示例**:

\`\`\`json
{
  "address": "bc1...",
  "balances": [
    {
      "ticker": "SAT20",
      "total_amount": "5000",
      "confirmed_amount": "4500",
      "pending_amount": "500"
    }
  ]
}
\`\`\`

<a id="endpoint-utxolist"></a>
### 获取地址UTXO列表
- **端点**: GET /address/utxolist/{address}/{ticker}
- **描述**: 获取指定地址和代币的UTXO列表，支持分页和排序
- **参数**:
  - address: 比特币地址（路径参数，必需）
  - ticker: 代币符号（路径参数，必需）
  - sort: 排序方式（查询参数，可选，值：amount_asc/amount_desc/time_asc/time_desc）
  - confirmed_only: 是否只返回已确认的UTXO（查询参数，可选，默认false）
- **响应示例**:

\`\`\`json
{
  "utxos": [
    {
      "txid": "...",
      "vout": 0,
      "amount": "100",
      "confirmations": 6,
      "height": 800000
    }
  ]
}
\`\`\`

<a id="blockchain-api"></a>
## 区块链相关接口

<a id="endpoint-bestheight"></a>
### 获取当前区块高度
- **端点**: GET /bestheight
- **描述**: 获取当前比特币区块高度
- **缓存**: 10秒
- **响应示例**:

\`\`\`json
{
  "height": 800000,
  "timestamp": "2024-02-22T14:30:00Z"
}
\`\`\`

<a id="endpoint-blockhash"></a>
### 获取区块哈希
- **端点**: GET /btc/block/blockhash/{height}
- **描述**: 根据区块高度获取区块哈希
- **参数**:
  - height: 区块高度（路径参数，必需）
- **响应示例**:

\`\`\`json
{
  "height": 800000,
  "hash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
}
\`\`\`

<a id="endpoint-block"></a>
### 获取原始区块数据
- **端点**: GET /btc/block/{blockhash}
- **描述**: 根据区块哈希获取完整的区块数据
- **参数**:
  - blockhash: 区块哈希（路径参数，必需）
- **响应字段说明**:
  - hash: 区块哈希
  - confirmations: 确认数
  - size: 区块大小（字节）
  - weight: 区块权重
  - height: 区块高度
  - version: 区块版本
  - merkleroot: Merkle根
  - time: 区块时间戳
  - nonce: Nonce值
  - bits: 难度目标
  - difficulty: 难度值
  - previousblockhash: 前一区块哈希
  - nextblockhash: 下一区块哈希
  - tx: 交易列表

<a id="endpoint-sendtx"></a>
### 发送原始交易
- **端点**: POST /btc/tx
- **描述**: 发送已签名的原始交易到比特币网络
- **参数**:
  - signedTxHex: 已签名的交易十六进制数据（请求体，必需）
  - maxfeerate: 最大费率，单位BTC/kB（请求体，可选）
- **注意事项**:
  - 交易必须完整签名
  - 建议先在测试网络验证
  - 设置合理的费率以避免交易延迟
- **响应示例**:

\`\`\`json
{
  "txid": "...",
  "fee": "0.0001",
  "size": 225
}
\`\`\`

<a id="endpoint-tx"></a>
### 获取交易详情
- **端点**: GET /btc/tx/{txid}
- **描述**: 获取指定交易ID的详细信息
- **参数**:
  - txid: 交易ID（路径参数，必需）
- **响应字段说明**:
  - txid: 交易ID
  - hash: 交易哈希
  - version: 交易版本
  - size: 交易大小
  - vsize: 虚拟大小
  - weight: 交易权重
  - locktime: 锁定时间
  - vin: 输入列表
  - vout: 输出列表
  - confirmations: 确认数
  - time: 交易时间
  - blocktime: 区块时间

<a id="error-handling"></a>
## 错误处理
<a id="http-status-codes"></a>
### HTTP状态码

- 200: 请求成功
- 400: 请求参数错误
- 401: 认证失败
- 403: 权限不足
- 404: 资源不存在
- 429: 请求频率超限
- 500: 服务器内部错误

<a id="error-response-format"></a>
### 错误响应格式

\`\`\`json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "错误描述信息",
    "details": {
      "field": "具体错误字段",
      "reason": "具体错误原因"
    }
  }
}
\`\`\`

<a id="error-codes"></a>
### 常见错误码

- INVALID_PARAMETER: 参数无效
- INSUFFICIENT_FUNDS: 余额不足
- RATE_LIMIT_EXCEEDED: 超出请求限制
- INVALID_SIGNATURE: 签名无效
- NETWORK_ERROR: 网络错误

<a id="best-practices"></a>
## 最佳实践
<a id="request-limit"></a>
### 请求限制
- 基础版API密钥: 60次/分钟
- 专业版API密钥: 600次/分钟
- 企业版API密钥: 6000次/分钟

<a id="optimization"></a>
### 优化建议

1. **使用批量接口**
   - 尽可能使用批量查询接口
   - 合理设置批量大小

2. **缓存策略**
   - 缓存不经常变化的数据
   - 使用合适的缓存过期时间
   - 实现增量更新机制

3. **错误处理**
   - 实现指数退避重试
   - 处理所有可能的错误情况
   - 记录详细的错误日志

4. **性能优化**
   - 使用压缩传输
   - 减少请求频率
   - 实现本地缓存
<a id="security"></a>
### 安全建议

1. **API密钥管理**
   - 定期轮换密钥
   - 使用环境变量
   - 避免密钥泄露

2. **请求验证**
   - 验证所有输入数据
   - 实现请求签名
   - 使用HTTPS传输

3. **监控告警**
   - 监控API使用情况
   - 设置异常告警
   - 记录审计日志
`},contributing:{title:"贡献指南",content:`
# 贡献指南

<a id="contributing-process"></a>
## 开发流程

1. Fork 项目仓库
2. 创建特性分支
3. 提交变更
4. 发起Pull Request

<a id="code-standards"></a>
## 代码规范

我们使用ESLint进行代码规范检查，请确保你的代码符合规范：

\`\`\`bash
npm run lint
\`\`\`

<a id="commit-message-format"></a>
## 提交消息格式

使用Angular提交规范：

- feat: 新特性
- fix: 修复bug
- docs: 文档更新
- style: 代码格式
- refactor: 重构
- test: 测试相关
- chore: 构建过程或辅助工具的变动
`}}},nu=localStorage.getItem("language")||"en",Pa=$c({legacy:!1,locale:nu,globalInjection:!0,messages:{en:eu,zh:tu}});const we=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},iu={class:"sticky-header"},su={class:"container"},ru={class:"dropdown-content"},au={class:"dropdown-section"},ou={class:"section-title"},lu={class:"dropdown-section"},cu={class:"section-title"},uu=["onClick"],fu={class:"dropdown-section settings"},du={class:"setting-item"},hu={class:"setting-label"},mu={class:"language-switcher"},pu=["onClick"],gu={class:"dropdown-section"},_u={class:"section-title"},yu={key:0,class:"dropdown-menu"},vu={key:0,class:"submenu"},bu=["href","onClick"],ku={class:"desktop-nav"},Tu={class:"main-nav"},Eu={class:"role-switch"},wu=["onClick"],Au={class:"language-switcher"},Su=["onClick"],Iu={class:"docs-dropdown"},Pu={class:"docs-menu"},Ou=["href"],Cu={__name:"Header",setup(t){const{t:e,locale:n}=Ce(),i=xo(),s=Qr(),r=Ee(!1),a=Ee(null),o=Ee(!1),l=Ee(!1),c=Ee(null),f=[{key:"zh",label:"中"},{key:"en",label:"EN"}],h=[{key:"home",to:"/"},{key:"tech",to:"/tech"},{key:"satnet",to:"/satnet"},{key:"eco",to:"/eco"},{key:"roadmap",to:"/roadmap"}],u=[{key:"whitepaper",to:"/docs/whitepaper"},{key:"getting_started",to:"/docs/getting_started"},{key:"api_reference",to:"/docs/api_reference"},{key:"contributing",to:"/docs/contributing"}],T=[{key:"explorer",to:X(()=>n.value==="zh"?"https://app.sat20.org/#/explorer":"https://app.sat20.org/#/explorer?language=en")},{key:"developer",to:"/developers"},{key:"user",to:"/user"}],k=X(()=>h.some(W=>i.path===W.to)),A=W=>{a.value=W;const Y=T.find(B=>B.key===W);if(Y&&Y.to){const B=Y.to.value||Y.to;B.startsWith("http")?window.open(B,"_blank","noopener,noreferrer"):s.push(B)}y()},y=()=>{r.value=!1},E=()=>{r.value=!r.value},g=async W=>{localStorage.setItem("language",W),Pa.global.locale.value=W,await Jr(),y()},v=()=>{console.log(o.value),o.value=!o.value},I=()=>{o.value=!1},w=W=>{if(c.value=W,l.value=!1,W.to){const[Y,B]=W.to.split("#");s.push(Y).then(()=>{B&&M(B)})}y()},C=W=>{l.value=!1;const[Y,B]=W.url.split("#");s.currentRoute.value.path===Y?M(B):s.push(Y).then(()=>{setTimeout(()=>M(B),100)})},M=W=>{if(!W)return;const Y=document.getElementById(W);Y&&Y.scrollIntoView({behavior:"smooth",block:"start"})},N={mounted(W,Y){W.clickOutsideEvent=B=>{W===B.target||W.contains(B.target)||Y.value(B)},document.addEventListener("click",W.clickOutsideEvent)},unmounted(W){document.removeEventListener("click",W.clickOutsideEvent)}};return(W,Y)=>{const B=qi("router-link");return F(),$("header",iu,[p("nav",su,[Y[3]||(Y[3]=p("a",{href:"/",class:"logo"},[p("img",{src:Ia,alt:"SAT20Labs"}),p("span",{class:"logo-text"},"SAT20Labs")],-1)),p("button",{class:fe(["menu-toggle",{active:r.value}]),onClick:E,"aria-label":"Toggle menu"},Y[0]||(Y[0]=[p("svg",{class:"menu-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[p("line",{class:"menu-line top",x1:"3",y1:"6",x2:"21",y2:"6"}),p("line",{class:"menu-line middle",x1:"3",y1:"12",x2:"21",y2:"12"}),p("line",{class:"menu-line bottom",x1:"3",y1:"18",x2:"21",y2:"18"})],-1)]),2),p("div",{class:fe(["dropdown-menu",{active:r.value}]),style:On({background:W.theme==="dark"?"rgba(13, 13, 13, 0.95)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"})},[p("div",ru,[p("div",au,[p("div",ou,R(K(e)("menu.navigation")),1),(F(),$(de,null,_e(h,D=>te(B,{key:D.key,to:D.to,class:fe(["dropdown-item",{active:K(i).path===D.to}]),onClick:y},{default:he(()=>[ue(R(K(e)(`nav.${D.key}`)),1)]),_:2},1032,["to","class"])),64))]),p("div",lu,[p("div",cu,R(K(e)("menu.roles")),1),(F(),$(de,null,_e(T,D=>p("button",{key:D.key,class:fe(["role-btn",{active:a.value===D.key}]),onClick:xe=>A(D.key)},R(K(e)(`roles.${D.key}`)),11,uu)),64))]),p("div",fu,[p("div",du,[p("span",hu,R(K(e)("menu.language")),1),p("div",mu,[(F(),$(de,null,_e(f,D=>p("button",{key:D.key,class:fe(["lang-btn",{active:K(n)===D.key}]),onClick:xe=>g(D.key)},R(D.label),11,pu)),64))])])]),p("div",gu,[p("div",_u,R(K(e)("menu.documentation")),1),p("div",{class:fe(["docs-dropdown",{show:l.value}]),onClick:ks(v,["stop"])},[p("button",{class:fe(["docs-button",{active:l.value}]),onClick:v},[ue(R(W.$t("menu.documentation"))+" ",1),Y[1]||(Y[1]=p("i",{class:"fas fa-chevron-down"},null,-1))],2),l.value?(F(),$("div",yu,[(F(),$(de,null,_e(u,D=>te(B,{key:D.key,to:D.to,class:"menu-item",onClick:xe=>w(D)},{default:he(()=>[ue(R(K(e)(`docs.categories.${D.key}`)),1)]),_:2},1032,["to","onClick"])),64)),c.value&&c.value.submenu?(F(),$("div",vu,[(F(!0),$(de,null,_e(c.value.submenu,D=>(F(),$("a",{key:D.url,href:D.url,class:"submenu-item",onClick:ks(xe=>C(D),["prevent"])},R(D.title),9,bu))),128))])):ki("",!0)])):ki("",!0)],2)])])],6),p("div",ku,[p("div",Tu,[(F(),$(de,null,_e(h,D=>te(B,{key:D.key,to:D.to,class:fe(["main-nav-link",{active:k.value&&K(i).path===D.to}])},{default:he(()=>[ue(R(K(e)(`nav.${D.key}`)),1)]),_:2},1032,["to","class"])),64))]),p("div",Eu,[(F(),$(de,null,_e(T,D=>p("button",{key:D.key,class:fe(["role-btn",{active:!k.value&&a.value===D.key,dimmed:k.value}]),onClick:xe=>A(D.key)},R(K(e)(`roles.${D.key}`)),11,wu)),64))]),p("div",Au,[(F(),$(de,null,_e(f,D=>p("button",{key:D.key,class:fe(["lang-btn",{active:K(n)===D.key}]),onClick:xe=>g(D.key)},R(D.label),11,Su)),64))]),Ts((F(),$("div",Iu,[p("button",{class:"docs-btn",onClick:v},[ue(R(K(e)("menu.documentation"))+" ",1),p("span",{class:fe(["arrow-down",{rotated:o.value}])},"▼",2)]),Ts(p("div",Pu,[(F(),$(de,null,_e(u,D=>(F(),$(de,{key:D.key},[D.external?(F(),$("a",{key:0,href:D.to,target:"_blank",rel:"noopener noreferrer",class:"docs-link",onClick:I},[ue(R(K(e)(`docs.categories.${D.key}`))+" ",1),Y[2]||(Y[2]=p("span",{class:"external-icon"},"↗",-1))],8,Ou)):(F(),We(B,{key:1,to:D.to,class:fe(["docs-link",{active:K(i).path===D.to}]),onClick:I},{default:he(()=>[ue(R(K(e)(`docs.categories.${D.key}`)),1)]),_:2},1032,["to","class"]))],64))),64))],512),[[Lo,o.value]])])),[[N,I]])])])])}}},xu=we(Cu,[["__scopeId","data-v-e79ff69c"]]),Lu={},Nu={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"};function Mu(t,e){return F(),$("svg",Nu,e[0]||(e[0]=[p("path",{d:"M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246z"},null,-1)]))}const Du=we(Lu,[["render",Mu]]),Ru={},Fu={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"};function zu(t,e){return F(),$("svg",Fu,e[0]||(e[0]=[p("path",{d:"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"},null,-1)]))}const Uu=we(Ru,[["render",zu]]);const Bu={class:"footer"},$u={class:"container"},Gu={class:"footer-content"},Wu={class:"footer-brand"},Vu={class:"footer-description"},Hu={class:"footer-social"},ju={href:"https://x.com/SAT20Labs",target:"_blank",rel:"noopener noreferrer"},Yu={href:"https://t.me/ordxnals",target:"_blank",rel:"noopener noreferrer"},Xu={class:"footer-nav"},Ku={class:"footer-section"},qu={class:"footer-section"},Qu={href:"https://github.com/sat20-labs/",target:"_blank",rel:"noopener noreferrer"},Ju={class:"footer-section"},Zu={href:"https://ordx.market",target:"_blank",rel:"noopener noreferrer"},ef={href:"https://app.sat20.org/#/explorer",target:"_blank",rel:"noopener noreferrer"},tf={class:"footer-bottom"},nf={class:"copyright"},sf={__name:"Footer",setup(t){return Ce(),(e,n)=>{const i=qi("router-link");return F(),$("footer",Bu,[p("div",$u,[p("div",Gu,[p("div",Wu,[n[2]||(n[2]=p("img",{src:Ia,alt:"SAT20Labs",class:"footer-logo"},null,-1)),p("p",Vu,R(e.$t("footer.info")),1),p("div",Hu,[p("a",ju,[te(Du),n[0]||(n[0]=ue(" Twitter "))]),p("a",Yu,[te(Uu),n[1]||(n[1]=ue(" Telegram "))])])]),p("div",Xu,[p("div",Ku,[p("h3",null,R(e.$t("footer.product")),1),p("ul",null,[p("li",null,[te(i,{to:"/"},{default:he(()=>[ue(R(e.$t("nav.home")),1)]),_:1})]),p("li",null,[te(i,{to:"/tech"},{default:he(()=>[ue(R(e.$t("nav.tech")),1)]),_:1})]),p("li",null,[te(i,{to:"/satnet"},{default:he(()=>[ue(R(e.$t("nav.satnet")),1)]),_:1})])])]),p("div",qu,[p("h3",null,R(e.$t("footer.developers")),1),p("ul",null,[p("li",null,[te(i,{to:"https://docs.sat20.org/"},{default:he(()=>[ue(R(e.$t("footer.whitepaper")),1)]),_:1})]),p("li",null,[te(i,{to:"/docs/api_reference"},{default:he(()=>[ue(R(e.$t("footer.api")),1)]),_:1})]),p("li",null,[p("a",Qu,R(e.$t("footer.github")),1)])])]),p("div",Ju,[p("h3",null,R(e.$t("footer.community")),1),p("ul",null,[p("li",null,[te(i,{to:"/eco"},{default:he(()=>[ue(R(e.$t("nav.eco")),1)]),_:1})]),p("li",null,[p("a",Zu,R(e.$t("footer.market")),1)]),p("li",null,[p("a",ef,R(e.$t("footer.explorer")),1)])])])])]),p("div",tf,[p("p",nf,"© "+R(new Date().getFullYear())+" SAT20.org. All rights reserved.",1),n[3]||(n[3]=p("div",{class:"footer-links"},null,-1))])])])}}},rf=we(sf,[["__scopeId","data-v-af2486a5"]]);const af=50,of={__name:"ParticlesBg",setup(t){const e=Ee(null);let n=null;const i=[],s={color:"rgba(42, 111, 255, 0.2)",radius:2,speed:.5,connectionDistance:150,connectionWidth:1};function r(){return{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*s.speed,vy:(Math.random()-.5)*s.speed}}function a(){for(let u=0;u<af;u++)i.push(r())}function o(u,_){u.beginPath(),u.arc(_.x,_.y,s.radius,0,Math.PI*2),u.fillStyle=s.color,u.fill()}function l(u){u.strokeStyle=s.color,u.lineWidth=s.connectionWidth;for(let _=0;_<i.length;_++)for(let T=_+1;T<i.length;T++){const k=i[_].x-i[T].x,A=i[_].y-i[T].y,y=Math.sqrt(k*k+A*A);if(y<s.connectionDistance){const E=(1-y/s.connectionDistance)*.5;u.strokeStyle=`rgba(42, 111, 255, ${E})`,u.beginPath(),u.moveTo(i[_].x,i[_].y),u.lineTo(i[T].x,i[T].y),u.stroke()}}}function c(){for(const u of i)u.x+=u.vx,u.y+=u.vy,(u.x<0||u.x>window.innerWidth)&&(u.vx*=-1),(u.y<0||u.y>window.innerHeight)&&(u.vy*=-1)}function f(){if(!e.value)return;const u=e.value.getContext("2d");u.clearRect(0,0,e.value.width,e.value.height),c(),l(u);for(const _ of i)o(u,_);n=requestAnimationFrame(f)}function h(){e.value&&(e.value.width=window.innerWidth,e.value.height=window.innerHeight)}return Gn(()=>{h(),a(),f(),window.addEventListener("resize",h)}),Kr(()=>{n&&cancelAnimationFrame(n),window.removeEventListener("resize",h)}),(u,_)=>(F(),$("canvas",{ref_key:"canvas",ref:e,class:"particles-bg"},null,512))}},lf=we(of,[["__scopeId","data-v-0d46e96f"]]);const cf=["data-theme"],uf={__name:"App",setup(t){const{theme:e}=Zc(),{locale:n}=Ce();return cn(n,()=>{document.body.setAttribute("data-i18n-transition","fade"),setTimeout(()=>{document.body.removeAttribute("data-i18n-transition")},200)}),(i,s)=>{const r=qi("router-view");return F(),$("div",{id:"app","data-theme":K(e)},[i.$route.name==="home"?(F(),We(lf,{key:0})):ki("",!0),te(xu),p("main",null,[te(r,null,{default:he(({Component:a})=>[te(No,{name:"page-fade",mode:"out-in"},{default:he(()=>[(F(),We(un(a)))]),_:2},1024)]),_:1})]),te(rf)],8,cf)}}},ff="modulepreload",df=function(t,e){return new URL(t,e).href},sr={},Se=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=df(r,i),r in sr)return;sr[r]=!0;const a=r.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===r&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":ff,a||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),a)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};const hf={__name:"BaseButton",props:{primary:Boolean,secondary:Boolean},setup(t){return(e,n)=>(F(),$("button",Mo({class:["base-button",{primary:t.primary,secondary:t.secondary}]},e.$attrs),[Zr(e.$slots,"default",{},void 0,!0)],16))}},Fn=we(hf,[["__scopeId","data-v-bc42e13e"]]);const mf={class:"hero-section"},pf={class:"hero-content"},gf={class:"main-title"},_f={class:"subtitle"},yf={class:"feature-box"},vf={class:"description"},bf={class:"cta-buttons"},kf={__name:"HeroSection",setup(t){const{t:e,locale:n}=Ce(),i=()=>{const r=n.value==="zh"?"sat20_whitepaper_zh.pdf":"sat20_whitepaper_en.pdf",a=`/documents/whitepaper/${r}`,o=document.createElement("a");o.href=a,o.setAttribute("download",r),o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),document.body.removeChild(o)},s=()=>{window.open("https://demo.ordx.market","_blank","noopener,noreferrer")};return(r,a)=>(F(),$("section",mf,[p("div",pf,[p("h1",gf,[ue(R(K(e)("home.hero.mainTitle"))+" ",1),a[0]||(a[0]=p("div",{class:"title-underline"},null,-1))]),p("h2",_f,R(K(e)("home.hero.subTitle")),1),p("div",yf,[p("p",vf,R(K(e)("home.hero.description")),1)]),p("div",bf,[te(Fn,{primary:"",onClick:i},{default:he(()=>[ue(R(K(e)("home.hero.downloadWhitepaper")),1)]),_:1}),te(Fn,{secondary:"",onClick:s},{default:he(()=>[ue(R(K(e)("home.hero.tryTestnet")),1)]),_:1})])])]))}},Tf=we(kf,[["__scopeId","data-v-2649260b"]]);const Ef={class:"core-features",id:"tech"},wf={class:"container"},Af={class:"section-title gradient-text"},Sf={class:"features-grid"},If=["onMouseover"],Pf={class:"feature-icon"},Of={class:"feature-title"},Cf={class:"feature-description"},xf=36,Lf={__name:"CoreFeatures",setup(t){const{t:e,tm:n}=Ce(),i=Zt(()=>Se(()=>import("./IconSat-05e7f400.js"),["./IconSat-05e7f400.js","./vendor-aeaa5906.js"],import.meta.url)),s=Zt(()=>Se(()=>import("./IconNetwork-3f665f12.js"),["./IconNetwork-3f665f12.js","./vendor-aeaa5906.js"],import.meta.url)),r=Zt(()=>Se(()=>import("./IconCompatibility-a9b6e7c3.js"),["./IconCompatibility-a9b6e7c3.js","./vendor-aeaa5906.js"],import.meta.url)),a=Zt(()=>Se(()=>import("./IconSmartContract-8569ceb3.js"),["./IconSmartContract-8569ceb3.js","./vendor-aeaa5906.js"],import.meta.url)),o=Zt(()=>Se(()=>import("./IconFee-6379fcf0.js"),["./IconFee-6379fcf0.js","./vendor-aeaa5906.js"],import.meta.url)),l=Ee(null),c=X(()=>e("home.features.title")),f=X(()=>n("home.features.items")),h=[i,s,r,a,o];return Gn(()=>{document.querySelectorAll(".feature-card").forEach(_=>{_.addEventListener("mousemove",T=>{const k=_.getBoundingClientRect(),A=(T.clientX-k.left)/k.width*100,y=(T.clientY-k.top)/k.height*100;_.style.setProperty("--mouse-x",`${A}%`),_.style.setProperty("--mouse-y",`${y}%`)})})}),(u,_)=>(F(),$("section",Ef,[p("div",wf,[p("h2",Af,R(c.value),1),p("div",Sf,[(F(!0),$(de,null,_e(f.value,(T,k)=>(F(),$("div",{key:k,class:fe(["feature-card",{highlight:T.highlight}]),onMouseover:A=>l.value=k,onMouseleave:_[0]||(_[0]=A=>l.value=null)},[p("div",Pf,[(F(),We(un(h[k]),{size:xf}))]),p("h3",Of,R(T.title),1),p("p",Cf,R(T.description),1)],42,If))),128))])])]))}},Nf=we(Lf,[["__scopeId","data-v-a9a948ba"]]),Mf=["width","height"],Df={id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},ss={__name:"BaseIcon",props:{size:{type:[Number,String],default:24},startColor:{type:String,default:"#2A6FFF"},endColor:{type:String,default:"#00FFC4"}},setup(t){const e=t,n=X(()=>({width:typeof e.size=="number"?`${e.size}px`:e.size,height:typeof e.size=="number"?`${e.size}px`:e.size}));return(i,s)=>(F(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:On(n.value)},[p("defs",null,[p("linearGradient",Df,[p("stop",{offset:"0%",style:On({"stop-color":t.startColor})},null,4),p("stop",{offset:"100%",style:On({"stop-color":t.endColor})},null,4)])]),Zr(i.$slots,"default")],12,Mf))}},Rf=["width","height"],Ff={__name:"IconBitcoin",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(F(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z",fill:"url(#iconGradient)"},null,-1)]),8,Rf))}},zf={__name:"IconLightning",props:{size:{type:[Number,String],default:24}},setup(t){return(e,n)=>(F(),We(ss,{size:t.size},{default:he(()=>n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%","stop-color":"#FFD700"}),p("stop",{offset:"100%","stop-color":"#FF8C00"})])],-1),p("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z",stroke:"url(#iconGradient)",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),p("path",{d:"M12 2v20",stroke:"url(#iconGradient)","stroke-width":"0.5","stroke-dasharray":"1 3"},null,-1)])),_:1},8,["size"]))}},Uf={__name:"IconLock",props:{size:{type:[Number,String],default:24}},setup(t){return(e,n)=>(F(),We(ss,{size:t.size},{default:he(()=>n[0]||(n[0]=[p("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2",stroke:"url(#iconGradient)",fill:"none","stroke-width":"2"},null,-1),p("path",{d:"M7 11V7a5 5 0 0 1 10 0v4",stroke:"url(#iconGradient)",fill:"none","stroke-width":"2","stroke-linecap":"round"},null,-1),p("circle",{cx:"12",cy:"16",r:"1",fill:"url(#iconGradient)"},null,-1)])),_:1},8,["size"]))}},Bf={__name:"IconShield",props:{size:{type:[Number,String],default:24}},setup(t){return(e,n)=>(F(),We(ss,{size:t.size},{default:he(()=>n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",gradientUnits:"userSpaceOnUse"},[p("stop",{offset:"0%","stop-color":"#ff9800"}),p("stop",{offset:"100%","stop-color":"#ff6100"})])],-1),p("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",stroke:"url(#iconGradient)",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),p("path",{d:"M9 12l2 2 4-4",stroke:"url(#iconGradient)",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])),_:1},8,["size"]))}};const $f={class:"satonet-section"},Gf={class:"container"},Wf={class:"architecture"},Vf={class:"gradient-title"},Hf={class:"subtitle"},jf={class:"tech-grid"},Yf={class:"compatibility"},Xf={class:"protocol-grid"},Kf={class:"protocol-name"},qf={class:"assets"},Qf={class:"asset-grid"},Jf=["src","alt"],Zf={class:"asset-info"},ed=36,td={__name:"SatoshiNet",setup(t){const{t:e,tm:n}=Ce(),i=[Ff,zf,Uf,Bf],s=X(()=>[e("home.satoshinet.architecture.feature1"),e("home.satoshinet.architecture.feature2"),e("home.satoshinet.architecture.feature3"),e("home.satoshinet.architecture.feature4")]),r=X(()=>e("home.satoshinet.title")),a=X(()=>e("home.satoshinet.subtitle"));X(()=>e("home.satoshinet.description")),X(()=>n("home.satoshinet.architecture.layers.items"));const o=X(()=>n("home.satoshinet.compatibility.protocols")),l=X(()=>n("home.satoshinet.assetTypes.types"));return X(()=>n("home.satoshinet.assetTypes.imgurl")),(c,f)=>(F(),$("section",$f,[p("div",Gf,[p("div",Wf,[p("h2",Vf,R(r.value),1),p("p",Hf,R(a.value),1),p("div",jf,[(F(!0),$(de,null,_e(s.value,(h,u)=>(F(),$("div",{key:u,class:"tech-item"},[p("div",{class:fe(["tech-icon",`icon-${u+1}`])},[(F(),We(un(i[u]),{size:ed}))],2),p("p",null,R(h),1)]))),128))])]),p("div",Yf,[p("h3",null,R(K(e)("home.satoshinet.compatibility.title")),1),p("div",Xf,[(F(!0),$(de,null,_e(o.value,(h,u)=>(F(),$("div",{key:u,class:"protocol-card"},[p("span",Kf,R(h),1)]))),128))])]),p("div",qf,[p("h3",null,R(K(e)("home.satoshinet.assetTypes.title")),1),p("div",Qf,[(F(!0),$(de,null,_e(l.value,(h,u)=>(F(),$("div",{key:u,class:"asset-card"},[p("div",{class:fe(["asset-type-icon",u])},[p("img",{src:K(e)(`home.satoshinet.assetTypes.types.${u}.imgurl`),alt:h.title,class:fe(c.asset-h-c.icon)},null,10,Jf)],2),p("div",Zf,[p("h4",null,R(K(e)(`home.satoshinet.assetTypes.types.${u}.title`)),1),p("p",null,R(K(e)(`home.satoshinet.assetTypes.types.${u}.description`)),1)])]))),128))])])])]))}},nd=we(td,[["__scopeId","data-v-29c08b6a"]]),id=["width","height"],sd={__name:"IconDefi",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(F(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9zm-52.5 185.4L256 407.2 102.2 248.1c-37.2-38.4-35.2-99 4.7-135.4 35.6-32.7 89.7-29.7 122.1 4.3l26.6 27.5 26.6-27.5c32.4-33.9 86.5-37 122.1-4.3 39.8 36.4 41.8 97 4.5 135.3z",fill:"url(#iconGradient)"},null,-1)]),8,id))}},rd=["width","height"],ad={__name:"IconNft",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(F(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zm-50.75 330.25L322.75 437.75c-4.25 4.25-10 6.25-15.75 6.25H160c-17.75 0-32-14.25-32-32V224c0-17.75 14.25-32 32-32h146.75c5.75 0 11.5 2 15.75 6.25l74.5 74.5c8.5 8.5 8.5 22.25 0 30.75l-74.5 74.5c-8.5 8.5-8.5 22.25 0 30.75zM224 256c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32-14.25-32-32-32z",fill:"url(#iconGradient)"},null,-1)]),8,rd))}},od=["width","height"],ld={__name:"IconGaming",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(F(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M483.13 245.38C461.92 149.49 430 98.31 382.65 98.31c-35.82 0-65.21 27.77-85.75 50.88-18.68 21.04-44.15 21.04-62.82 0-20.54-23.11-49.93-50.88-85.75-50.88-47.35 0-79.27 51.18-100.48 147.07-17.24 77.82-13.19 153.13 11.21 153.13 22.59 0 27.14-36.48 40.04-72.95 14.06-39.71 30.01-84.75 72.05-84.75 27.69 0 42.04 16.18 61.15 38.62 18.68 21.95 44.15 21.95 62.82 0 19.11-22.44 33.46-38.62 61.15-38.62 42.04 0 57.99 45.04 72.05 84.75 12.9 36.47 17.45 72.95 40.04 72.95 24.4 0 28.45-75.31 11.21-153.13z",fill:"url(#iconGradient)"},null,-1)]),8,od))}},cd=["width","height"],ud={__name:"IconDecentralized",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(F(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z",fill:"url(#iconGradient)"},null,-1)]),8,cd))}},fd=["width","height"],dd={__name:"IconPerformance",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(F(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z",fill:"url(#iconGradient)"},null,-1)]),8,fd))}},hd=["width","height"],md={__name:"IconCost",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(F(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",fill:"url(#iconGradient)"},null,-1)]),8,hd))}};const pd={class:"ecosystem",id:"eco"},gd={class:"container"},_d={class:"section-title gradient-text"},yd={class:"eco-section"},vd={class:"section-subtitle"},bd={class:"card-grid"},kd=["onMouseenter"],Td={class:"card-icon"},Ed={class:"eco-section"},wd={class:"section-subtitle"},Ad={class:"card-grid"},Sd=["onMouseenter"],Id={class:"card-icon"},Pd={__name:"Ecosystem",setup(t){const{t:e,tm:n}=Ce(),i=[{icon:sd},{icon:ad},{icon:ld}],s=[{icon:ud},{icon:dd},{icon:md}];return(r,a)=>(F(),$("section",pd,[p("div",gd,[p("h2",_d,R(K(e)("home.ecosystem.title")),1),p("div",yd,[p("h3",vd,R(K(e)("home.ecosystem.applications.title")),1),p("div",bd,[(F(),$(de,null,_e(i,(o,l)=>p("div",{key:l,class:fe(["eco-card",{active:r.activeCard===`app-${l}`}]),onMouseenter:c=>r.activeCard=`app-${l}`,onMouseleave:a[0]||(a[0]=c=>r.activeCard=null)},[p("div",Td,[(F(),We(un(o.icon),{size:36}))]),p("h4",null,R(K(n)(`home.ecosystem.applications.items.${l}.title`)),1),p("p",null,R(K(n)(`home.ecosystem.applications.items.${l}.description`)),1)],42,kd)),64))])]),p("div",Ed,[p("h3",wd,R(K(e)("home.ecosystem.partners.title")),1),p("div",Ad,[(F(),$(de,null,_e(s,(o,l)=>p("div",{key:l,class:fe(["eco-card",{active:r.activeCard===`partner-${l}`}]),onMouseenter:c=>r.activeCard=`partner-${l}`,onMouseleave:a[1]||(a[1]=c=>r.activeCard=null)},[p("div",Id,[(F(),We(un(o.icon),{size:32}))]),p("h4",null,R(K(n)(`home.ecosystem.partners.items.${l}.title`)),1),p("p",null,R(K(n)(`home.ecosystem.partners.items.${l}.description`)),1)],42,Sd)),64))])])])]))}},Od=we(Pd,[["__scopeId","data-v-15b9ee8b"]]);const Cd={},xd={class:"stats-section"};function Ld(t,e){return F(),$("section",xd)}const Nd=we(Cd,[["render",Ld],["__scopeId","data-v-e5c19949"]]);const Md={class:"partners-section"},Dd={class:"section-title"},Rd={class:"section-description"},Fd={class:"partners-grid"},zd={class:"partner-logo"},Ud=["src","alt"],Bd={class:"partner-info"},$d=["href"],Gd={__name:"Partners",setup(t){const{t:e}=Ce(),n=X(()=>e("home.partners.title")),i=X(()=>e("home.partners.description")),s=X(()=>({sat20market:{name:"SAT20Market",description:e("home.partners.sat20market"),logo:"/images/partners/sat20market.png",url:"https://ordx.market",highlight:!0},btcname:{name:"BTCName",description:e("home.partners.btcname"),logo:"/images/partners/btcname.png",url:"https://x.com/btcname_did"},morego:{name:"Morego",description:e("home.partners.morego"),logo:"/images/partners/morego.png",url:"http://official.morego.io/"},unisat:{name:"Unisat",description:e("home.partners.unisat"),logo:"/images/partners/unisat.png",url:"https://unisat.io"},okx:{name:"OKX",description:e("home.partners.okx"),logo:"/images/partners/okx.png",url:"https://www.okx.com"},magiceden:{name:"Magic Eden",description:e("home.partners.magiceden"),logo:"/images/partners/magiceden.png",url:"https://magiceden.io"}}));return(r,a)=>(F(),$("section",Md,[p("h2",Dd,R(n.value),1),p("p",Rd,R(i.value),1),p("div",Fd,[(F(!0),$(de,null,_e(s.value,(o,l)=>(F(),$("div",{key:l,class:fe(["partner-card",{highlight:o.highlight}])},[p("div",zd,[p("img",{src:o.logo,alt:o.name},null,8,Ud)]),p("div",Bd,[p("h3",null,R(o.name),1),p("p",null,R(o.description),1)]),p("a",{href:o.url,target:"_blank",class:"partner-link"},a[0]||(a[0]=[p("span",{class:"link-text"},"访问",-1),p("span",{class:"link-icon"},"→",-1)]),8,$d)],2))),128))])]))}},Wd=we(Gd,[["__scopeId","data-v-9df86051"]]);const Vd={class:"developer-section"},Hd={class:"container"},jd={class:"content"},Yd={class:"title gradient-text"},Xd={class:"description"},Kd={class:"description"},qd={class:"cta-buttons"},Qd={__name:"Developers",setup(t){const e=Qr(),{t:n}=Ce(),i=X(()=>n("home.developers.title")),s=X(()=>n("home.developers.subtitle")),r=X(()=>n("home.developers.description")),a=X(()=>n("home.developers.buttons.startDev")),o=X(()=>n("home.developers.buttons.viewDocs")),l=()=>{e.push("/developers")},c=()=>{e.push("/docs/api_reference")};return(f,h)=>(F(),$("section",Vd,[p("div",Hd,[p("div",jd,[p("h2",Yd,R(i.value),1),p("p",Xd,R(s.value),1),p("p",Kd,R(r.value),1),p("div",qd,[te(Fn,{primary:"",onClick:l},{default:he(()=>[ue(R(a.value)+" ",1),h[0]||(h[0]=p("svg",{class:"arrow-icon",width:"16",height:"16",viewBox:"0 0 16 16"},[p("path",{d:"M3 8h8M8 4l4 4-4 4",stroke:"currentColor",fill:"none","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1))]),_:1}),te(Fn,{secondary:"",onClick:c},{default:he(()=>[ue(R(o.value),1)]),_:1})])]),h[1]||(h[1]=Do(`<div class="visual" data-v-29bd8792><div class="code-window" data-v-29bd8792><div class="window-header" data-v-29bd8792><div class="dots" data-v-29bd8792><span data-v-29bd8792></span><span data-v-29bd8792></span><span data-v-29bd8792></span></div><span class="filename" data-v-29bd8792>example.js</span></div><pre class="code-content" data-v-29bd8792><code data-v-29bd8792>import { ORDX } from &#39;@sat20/ordx&#39;;

// Initialize ORDX client
const ordx = new ORDX({
  network: &#39;testnet&#39;,
  apiKey: ({}).API_KEY
});

// Create a new order
const order = await ordx.createOrder({
  tokenId: &#39;sat20_1234&#39;,
  amount: 1000,
  price: 0.01
});

console.log(&#39;Order created:&#39;, order.id);</code>
          </pre></div></div>`,1))])]))}},Jd=we(Qd,[["__scopeId","data-v-29bd8792"]]);const Zd={class:"home-page"},eh={__name:"HomePage",setup(t){return(e,n)=>(F(),$("div",Zd,[te(Tf),te(Nf),te(nd),te(Od),te(Nd),te(Jd),te(Wd)]))}},th=we(eh,[["__scopeId","data-v-1bf0732e"]]),nh=[{path:"/",name:"home",component:th,meta:{title:"SAT20 - BTC原生资产发行与流动协议"}},{path:"/tech",name:"tech",component:()=>Se(()=>import("./TechnologyPage-28253a3b.js"),["./TechnologyPage-28253a3b.js","./vendor-aeaa5906.js","./TechnologyPage-a7648a01.css"],import.meta.url),meta:{title:"技术 - SAT20"}},{path:"/satnet",name:"satnet",component:()=>Se(()=>import("./SatoshiNetPage-a6b49c6f.js"),["./SatoshiNetPage-a6b49c6f.js","./vendor-aeaa5906.js","./SatoshiNetPage-97071054.css"],import.meta.url),meta:{title:"聪网 - SAT20"}},{path:"/eco",name:"eco",component:()=>Se(()=>import("./TokenomicsPage-413ddfc7.js"),["./TokenomicsPage-413ddfc7.js","./vendor-aeaa5906.js","./TokenomicsPage-03194c2b.css"],import.meta.url),meta:{title:"生态 - SAT20"}},{path:"/roadmap",name:"roadmap",component:()=>Se(()=>import("./RoadmapPage-64039227.js"),["./RoadmapPage-64039227.js","./vendor-aeaa5906.js","./ParticlesBg-ac2b9da2.js","./RoadmapPage-f0927513.css"],import.meta.url),meta:{title:"路线图 - SAT20"}},{path:"/developers",name:"developers",component:()=>Se(()=>import("./DevelopersPage-59d0ae06.js"),["./DevelopersPage-59d0ae06.js","./vendor-aeaa5906.js","./DevelopersPage-8709d495.css"],import.meta.url),meta:{title:"开发者 - SAT20"}},{path:"/investor",name:"investor",component:()=>Se(()=>import("./InvestorPage-d27efc95.js"),["./InvestorPage-d27efc95.js","./ParticlesBg-ac2b9da2.js","./vendor-aeaa5906.js","./InvestorPage-8780a7eb.css"],import.meta.url),meta:{title:"投资者 - SAT20"}},{path:"/user",name:"user",component:()=>Se(()=>import("./UserPage-41965512.js"),["./UserPage-41965512.js","./ParticlesBg-ac2b9da2.js","./vendor-aeaa5906.js","./UserPage-3a25bf52.css"],import.meta.url),meta:{title:"用户指南 - SAT20"}},{path:"/docs/:category",name:"documentation",component:()=>Se(()=>import("./Documentation-9910ee64.js"),["./Documentation-9910ee64.js","./vendor-aeaa5906.js","./Documentation-e45ea710.css"],import.meta.url),props:!0,meta:{title:"文档 - SAT20"}}],Oa=Ro({history:Fo(),routes:nh,scrollBehavior(t,e,n){return n||{top:0}}});Oa.beforeEach((t,e,n)=>{document.title=t.meta.title||"SAT20",n()});const sn="generated",ih="pointerdown",sh="pointerup",rr="pointerleave",rh="pointerout",ar="pointermove",ah="touchstart",or="touchend",oh="touchmove",lh="touchcancel",ch="resize",uh="visibilitychange",mt="tsParticles - Error";class Ae{constructor(e,n,i){if(this._updateFromAngle=(s,r)=>{this.x=Math.cos(s)*r,this.y=Math.sin(s)*r},!Re(e)&&e){this.x=e.x,this.y=e.y;const s=e;this.z=s.z?s.z:0}else if(e!==void 0&&n!==void 0)this.x=e,this.y=n,this.z=i??0;else throw new Error(`${mt} Vector3d not initialized correctly`)}static get origin(){return Ae.create(0,0,0)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return Ae.create(e.x,e.y,e.z)}static create(e,n,i){return new Ae(e,n,i)}add(e){return Ae.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return Ae.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return Ae.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**2+this.y**2}mult(e){return Ae.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){const e=this.length;e!=0&&this.multTo(1/e)}rotate(e){return Ae.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),0)}setTo(e){this.x=e.x,this.y=e.y;const n=e;this.z=n.z?n.z:0}sub(e){return Ae.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}}class Pt extends Ae{constructor(e,n){super(e,n,0)}static get origin(){return Pt.create(0,0)}static clone(e){return Pt.create(e.x,e.y)}static create(e,n){return new Pt(e,n)}}let fh=Math.random;function Ke(){return Ca(fh(),0,1-1e-16)}function Ca(t,e,n){return Math.min(Math.max(t,e),n)}function Ot(t){const e=as(t);let n=rs(t);return e===n&&(n=0),Ke()*(e-n)+n}function ie(t){return Re(t)?t:Ot(t)}function rs(t){return Re(t)?t:t.min}function as(t){return Re(t)?t:t.max}function q(t,e){if(t===e||e===void 0&&Re(t))return t;const n=rs(t),i=as(t);return e!==void 0?{min:Math.min(n,e),max:Math.max(i,e)}:q(n,i)}function dh(t){const e=t.random,{enable:n,minimumValue:i}=nt(e)?{enable:e,minimumValue:0}:e;return ie(n?q(t.value,i):t.value)}function hh(t,e){const n=t.x-e.x,i=t.y-e.y;return{dx:n,dy:i,distance:Math.sqrt(n**2+i**2)}}function os(t,e){return hh(t,e).distance}function mh(t,e,n){if(Re(t))return t*Math.PI/180;switch(t){case"top":return-Math.PI/2;case"top-right":return-Math.PI/4;case"right":return 0;case"bottom-right":return Math.PI/4;case"bottom":return Math.PI/2;case"bottom-left":return 3*Math.PI/4;case"left":return Math.PI;case"top-left":return-3*Math.PI/4;case"inside":return Math.atan2(n.y-e.y,n.x-e.x);case"outside":return Math.atan2(e.y-n.y,e.x-n.x);default:return Ke()*Math.PI*2}}function ph(t){const e=Pt.origin;return e.length=1,e.angle=t,e}function gh(t){var e,n;return{x:((e=t.position)==null?void 0:e.x)??Ke()*t.size.width,y:((n=t.position)==null?void 0:n.y)??Ke()*t.size.height}}function xa(t){return t?t.endsWith("%")?parseFloat(t)/100:parseFloat(t):1}const _h={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function mn(){return _h}function Yn(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function yh(){return!Yn()&&typeof matchMedia<"u"}function La(t){if(yh())return matchMedia(t)}function vh(t){if(!(Yn()||typeof MutationObserver>"u"))return new MutationObserver(t)}function bh(t,e){return t===e||Ge(e)&&e.indexOf(t)>-1}function kh(t){return Math.floor(Ke()*t.length)}function ls(t,e,n=!0){return t[e!==void 0&&n?e%t.length:kh(t)]}function ye(t,...e){for(const n of e){if(n==null)continue;if(!tn(n)){t=n;continue}const i=Array.isArray(n);i&&(tn(t)||!t||!Array.isArray(t))?t=[]:!i&&(tn(t)||!t||Array.isArray(t))&&(t={});for(const s in n){if(s==="__proto__")continue;const r=n,a=r[s],o=t;o[s]=tn(a)&&Array.isArray(a)?a.map(l=>ye(o[s],l)):ye(o[s],a)}}return t}function pt(t,e){return Ge(t)?t.map((n,i)=>e(n,i)):e(t,0)}function rn(t,e,n){return Ge(t)?ls(t,e,n):t}function Th(t,e){const n=t.value,i=t.animation,s={delayTime:ie(i.delay)*1e3,enable:i.enable,value:ie(t.value)*e,max:as(n)*e,min:rs(n)*e,loops:0,maxLoops:ie(i.count),time:0};if(i.enable){switch(s.decay=1-ie(i.decay),i.mode){case"increase":s.status="increasing";break;case"decrease":s.status="decreasing";break;case"random":s.status=Ke()>=.5?"increasing":"decreasing";break}const r=i.mode==="auto";switch(i.startValue){case"min":s.value=s.min,r&&(s.status="increasing");break;case"max":s.value=s.max,r&&(s.status="decreasing");break;case"random":default:s.value=Ot(s),r&&(s.status=Ke()>=.5?"increasing":"decreasing");break}}return s.initialValue=s.value,s}function Eh(t,e){if(!(t.mode==="percent")){const{mode:s,...r}=t;return r}return"x"in t?{x:t.x/100*e.width,y:t.y/100*e.height}:{width:t.width/100*e.width,height:t.height/100*e.height}}function Na(t,e){return Eh(t,e)}function nt(t){return typeof t=="boolean"}function $e(t){return typeof t=="string"}function Re(t){return typeof t=="number"}function Ma(t){return typeof t=="function"}function tn(t){return typeof t=="object"&&t!==null}function Ge(t){return Array.isArray(t)}const wh="random",Xn=new Map;function lr(t){Xn.set(t.key,t)}function ri(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Ah(t){for(const[,r]of Xn)if(t.startsWith(r.stringPrefix))return r.parseString(t);const e=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,n=t.replace(e,(r,a,o,l,c)=>a+a+o+o+l+l+(c!==void 0?c+c:"")),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,s=i.exec(n);return s?{a:s[4]!==void 0?parseInt(s[4],16)/255:1,b:parseInt(s[3],16),g:parseInt(s[2],16),r:parseInt(s[1],16)}:void 0}function Ct(t,e,n=!0){if(!t)return;const i=$e(t)?{value:t}:t;if($e(i.value))return Da(i.value,e,n);if(Ge(i.value))return Ct({value:ls(i.value,e,n)});for(const[,s]of Xn){const r=s.handleRangeColor(i);if(r)return r}}function Da(t,e,n=!0){if(!t)return;const i=$e(t)?{value:t}:t;if($e(i.value))return i.value===wh?Oh():Ih(i.value);if(Ge(i.value))return Da({value:ls(i.value,e,n)});for(const[,s]of Xn){const r=s.handleColor(i);if(r)return r}}function cr(t,e,n=!0){const i=Ct(t,e,n);return i?Sh(i):void 0}function Sh(t){const e=t.r/255,n=t.g/255,i=t.b/255,s=Math.max(e,n,i),r=Math.min(e,n,i),a={h:0,l:(s+r)/2,s:0};return s!==r&&(a.s=a.l<.5?(s-r)/(s+r):(s-r)/(2-s-r),a.h=e===s?(n-i)/(s-r):a.h=n===s?2+(i-e)/(s-r):4+(e-n)/(s-r)),a.l*=100,a.s*=100,a.h*=60,a.h<0&&(a.h+=360),a.h>=360&&(a.h-=360),a}function Ih(t){return Ah(t)}function xi(t){const e={b:0,g:0,r:0},n={h:t.h/360,l:t.l/100,s:t.s/100};if(!n.s)e.r=e.g=e.b=n.l;else{const i=n.l<.5?n.l*(1+n.s):n.l+n.s-n.l*n.s,s=2*n.l-i;e.r=ri(s,i,n.h+1/3),e.g=ri(s,i,n.h),e.b=ri(s,i,n.h-1/3)}return e.r=Math.floor(e.r*255),e.g=Math.floor(e.g*255),e.b=Math.floor(e.b*255),e}function Ph(t){const e=xi(t);return{a:t.a,b:e.b,g:e.g,r:e.r}}function Oh(t){const e=t??0;return{b:Math.floor(Ot(q(e,256))),g:Math.floor(Ot(q(e,256))),r:Math.floor(Ot(q(e,256)))}}function xn(t,e){return`rgba(${t.r}, ${t.g}, ${t.b}, ${e??1})`}function ur(t,e){return`hsla(${t.h}, ${t.s}%, ${t.l}%, ${e??1})`}function fr(t){return t!==void 0?{h:t.h.value,s:t.s.value,l:t.l.value}:void 0}function Ch(t,e,n){t.fillStyle=n??"rgba(0,0,0,0)",t.fillRect(0,0,e.width,e.height)}function xh(t,e,n,i){n&&(t.globalAlpha=i,t.drawImage(n,0,0,e.width,e.height),t.globalAlpha=1)}function ai(t,e){t.clearRect(0,0,e.width,e.height)}function Lh(t){const{container:e,context:n,particle:i,delta:s,colorStyles:r,backgroundMask:a,composite:o,radius:l,opacity:c,shadow:f,transform:h}=t,u=i.getPosition(),_=i.rotation+(i.pathRotation?i.velocity.angle:0),T={sin:Math.sin(_),cos:Math.cos(_)},k={a:T.cos*(h.a??1),b:T.sin*(h.b??1),c:-T.sin*(h.c??1),d:T.cos*(h.d??1)};n.setTransform(k.a,k.b,k.c,k.d,u.x,u.y),n.beginPath(),a&&(n.globalCompositeOperation=o);const A=i.shadowColor;f.enable&&A&&(n.shadowBlur=f.blur,n.shadowColor=xn(A),n.shadowOffsetX=f.offset.x,n.shadowOffsetY=f.offset.y),r.fill&&(n.fillStyle=r.fill);const y=i.strokeWidth??0;n.lineWidth=y,r.stroke&&(n.strokeStyle=r.stroke),Nh(e,n,i,l,c,s),y>0&&n.stroke(),i.close&&n.closePath(),i.fill&&n.fill(),Mh(e,n,i,l,c,s),n.globalCompositeOperation="source-over",n.setTransform(1,0,0,1,0,0)}function Nh(t,e,n,i,s,r){if(!n.shape)return;const a=t.drawers.get(n.shape);a&&a.draw(e,n,i,s,r,t.retina.pixelRatio)}function Mh(t,e,n,i,s,r){if(!n.shape)return;const a=t.drawers.get(n.shape);!a||!a.afterEffect||a.afterEffect(e,n,i,s,r,t.retina.pixelRatio)}function Dh(t,e,n){e.draw&&e.draw(t,n)}function Rh(t,e,n,i){e.drawParticle&&e.drawParticle(t,n,i)}function Fh(t,e,n){return{h:t.h,s:t.s,l:t.l+(e==="darken"?-1:1)*n}}function zh(t,e,n){const i=e[n];i!==void 0&&(t[n]=(t[n]??1)*i)}class Uh{constructor(e){this.container=e,this._applyPostDrawUpdaters=n=>{for(const i of this._postDrawUpdaters)i.afterDraw&&i.afterDraw(n)},this._applyPreDrawUpdaters=(n,i,s,r,a,o)=>{for(const l of this._preDrawUpdaters){if(l.getColorStyles){const{fill:c,stroke:f}=l.getColorStyles(i,n,s,r);c&&(a.fill=c),f&&(a.stroke=f)}if(l.getTransformValues){const c=l.getTransformValues(i);for(const f in c)zh(o,c,f)}l.beforeDraw&&l.beforeDraw(i)}},this._applyResizePlugins=()=>{for(const n of this._resizePlugins)n.resize&&n.resize()},this._getPluginParticleColors=n=>{let i,s;for(const r of this._colorPlugins)if(!i&&r.particleFillColor&&(i=cr(r.particleFillColor(n))),!s&&r.particleStrokeColor&&(s=cr(r.particleStrokeColor(n))),i&&s)break;return[i,s]},this._initCover=()=>{const n=this.container.actualOptions,i=n.backgroundMask.cover,s=i.color,r=Ct(s);if(r){const a={...r,a:i.opacity};this._coverColorStyle=xn(a,a.a)}},this._initStyle=()=>{const n=this.element,i=this.container.actualOptions;if(n){this._fullScreen?(this._originalStyle=ye({},n.style),this._setFullScreenStyle()):this._resetOriginalStyle();for(const s in i.style){if(!s||!i.style)continue;const r=i.style[s];r&&n.style.setProperty(s,r,"important")}}},this._initTrail=async()=>{const n=this.container.actualOptions,i=n.particles.move.trail,s=i.fill;if(i.enable)if(s.color){const r=Ct(s.color);if(!r)return;const a=n.particles.move.trail;this._trailFill={color:{...r},opacity:1/a.length}}else await new Promise((r,a)=>{if(!s.image)return;const o=document.createElement("img");o.addEventListener("load",()=>{this._trailFill={image:o,opacity:1/i.length},r()}),o.addEventListener("error",l=>{a(l.error)}),o.src=s.image})},this._paintBase=n=>{this.draw(i=>Ch(i,this.size,n))},this._paintImage=(n,i)=>{this.draw(s=>xh(s,this.size,n,i))},this._repairStyle=()=>{const n=this.element;n&&(this._safeMutationObserver(i=>i.disconnect()),this._initStyle(),this.initBackground(),this._safeMutationObserver(i=>i.observe(n,{attributes:!0})))},this._resetOriginalStyle=()=>{const n=this.element,i=this._originalStyle;if(!(n&&i))return;const s=n.style;s.position=i.position,s.zIndex=i.zIndex,s.top=i.top,s.left=i.left,s.width=i.width,s.height=i.height},this._safeMutationObserver=n=>{this._mutationObserver&&n(this._mutationObserver)},this._setFullScreenStyle=()=>{const n=this.element;if(!n)return;const i="important",s=n.style;s.setProperty("position","fixed",i),s.setProperty("z-index",this.container.actualOptions.fullScreen.zIndex.toString(10),i),s.setProperty("top","0",i),s.setProperty("left","0",i),s.setProperty("width","100%",i),s.setProperty("height","100%",i)},this.size={height:0,width:0},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const e=this.container.actualOptions,n=e.particles.move.trail,i=this._trailFill;e.backgroundMask.enable?this.paint():n.enable&&n.length>0&&i?i.color?this._paintBase(xn(i.color,i.opacity)):i.image&&this._paintImage(i.image,i.opacity):this.draw(s=>{ai(s,this.size)})}destroy(){if(this.stop(),this._generated){const e=this.element;e&&e.remove()}else this._resetOriginalStyle();this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(e){const n=this._context;if(n)return e(n)}drawParticle(e,n){if(e.spawning||e.destroyed)return;const i=e.getRadius();if(i<=0)return;const s=e.getFillColor(),r=e.getStrokeColor()??s;let[a,o]=this._getPluginParticleColors(e);a||(a=s),o||(o=r),!(!a&&!o)&&this.draw(l=>{var g;const c=this.container,f=c.actualOptions,h=e.options.zIndex,u=(1-e.zIndexFactor)**h.opacityRate,_=e.bubble.opacity??((g=e.opacity)==null?void 0:g.value)??1,T=e.strokeOpacity??_,k=_*u,A=T*u,y={},E={fill:a?ur(a,k):void 0};E.stroke=o?ur(o,A):E.fill,this._applyPreDrawUpdaters(l,e,i,k,E,y),Lh({container:c,context:l,particle:e,delta:n,colorStyles:E,backgroundMask:f.backgroundMask.enable,composite:f.backgroundMask.composite,radius:i*(1-e.zIndexFactor)**h.sizeRate,opacity:k,shadow:e.options.shadow,transform:y}),this._applyPostDrawUpdaters(e)})}drawParticlePlugin(e,n,i){this.draw(s=>Rh(s,e,n,i))}drawPlugin(e,n){this.draw(i=>Dh(i,e,n))}async init(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=vh(e=>{for(const n of e)n.type==="attributes"&&n.attributeName==="style"&&this._repairStyle()}),this.resize(),this._initStyle(),this._initCover();try{await this._initTrail()}catch(e){mn().error(e)}this.initBackground(),this._safeMutationObserver(e=>{this.element&&e.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){const e=this.container.actualOptions,n=e.background,i=this.element;if(!i)return;const s=i.style;if(s){if(n.color){const r=Ct(n.color);s.backgroundColor=r?xn(r,n.opacity):""}else s.backgroundColor="";s.backgroundImage=n.image||"",s.backgroundPosition=n.position||"",s.backgroundRepeat=n.repeat||"",s.backgroundSize=n.size||""}}initPlugins(){this._resizePlugins=[];for(const[,e]of this.container.plugins)e.resize&&this._resizePlugins.push(e),(e.particleFillColor||e.particleStrokeColor)&&this._colorPlugins.push(e)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const e of this.container.particles.updaters)e.afterDraw&&this._postDrawUpdaters.push(e),(e.getColorStyles||e.getTransformValues||e.beforeDraw)&&this._preDrawUpdaters.push(e)}loadCanvas(e){this._generated&&this.element&&this.element.remove(),this._generated=e.dataset&&sn in e.dataset?e.dataset[sn]==="true":this._generated,this.element=e,this.element.ariaHidden="true",this._originalStyle=ye({},this.element.style),this.size.height=e.offsetHeight,this.size.width=e.offsetWidth,this._context=this.element.getContext("2d"),this._safeMutationObserver(n=>{this.element&&n.observe(this.element,{attributes:!0})}),this.container.retina.init(),this.initBackground()}paint(){const e=this.container.actualOptions;this.draw(n=>{e.backgroundMask.enable&&e.backgroundMask.cover?(ai(n,this.size),this._paintBase(this._coverColorStyle)):this._paintBase()})}resize(){if(!this.element)return!1;const e=this.container,n=e.retina.pixelRatio,i=e.canvas.size,s={width:this.element.offsetWidth*n,height:this.element.offsetHeight*n};if(s.height===i.height&&s.width===i.width&&s.height===this.element.height&&s.width===this.element.width)return!1;const r={...i};return this.element.width=i.width=this.element.offsetWidth*n,this.element.height=i.height=this.element.offsetHeight*n,this.container.started&&(this.resizeFactor={width:i.width/r.width,height:i.height/r.height}),!0}stop(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=void 0,this.draw(e=>ai(e,this.size))}async windowResize(){if(!this.element||!this.resize())return;const e=this.container,n=e.updateActualOptions();e.particles.setDensity(),this._applyResizePlugins(),n&&await e.refresh()}}function Pe(t,e,n,i,s){if(i){let r={passive:!0};nt(s)?r.capture=s:s!==void 0&&(r=s),t.addEventListener(e,n,r)}else{const r=s;t.removeEventListener(e,n,r)}}class Bh{constructor(e){this.container=e,this._doMouseTouchClick=n=>{const i=this.container,s=i.actualOptions;if(this._canPush){const r=i.interactivity.mouse,a=r.position;if(!a)return;r.clickPosition={...a},r.clickTime=new Date().getTime();const o=s.interactivity.events.onClick;pt(o.mode,l=>this.container.handleClickMode(l))}n.type==="touchend"&&setTimeout(()=>this._mouseTouchFinish(),500)},this._handleThemeChange=n=>{const i=n,s=this.container,r=s.options,a=r.defaultThemes,o=i.matches?a.dark:a.light,l=r.themes.find(c=>c.name===o);l&&l.default.auto&&s.loadTheme(o)},this._handleVisibilityChange=()=>{const n=this.container,i=n.actualOptions;this._mouseTouchFinish(),i.pauseOnBlur&&(document&&document.hidden?(n.pageHidden=!0,n.pause()):(n.pageHidden=!1,n.getAnimationStatus()?n.play(!0):n.draw(!0)))},this._handleWindowResize=async()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout),this._resizeTimeout=setTimeout(async()=>{const n=this.container.canvas;n&&await n.windowResize()},this.container.actualOptions.interactivity.events.resize.delay*1e3)},this._manageInteractivityListeners=(n,i)=>{const s=this._handlers,r=this.container,a=r.actualOptions,o=r.interactivity.element;if(!o)return;const l=o,c=r.canvas.element;c&&(c.style.pointerEvents=l===c?"initial":"none"),(a.interactivity.events.onHover.enable||a.interactivity.events.onClick.enable)&&(Pe(o,ar,s.mouseMove,i),Pe(o,ah,s.touchStart,i),Pe(o,oh,s.touchMove,i),a.interactivity.events.onClick.enable?(Pe(o,or,s.touchEndClick,i),Pe(o,sh,s.mouseUp,i),Pe(o,ih,s.mouseDown,i)):Pe(o,or,s.touchEnd,i),Pe(o,n,s.mouseLeave,i),Pe(o,lh,s.touchCancel,i))},this._manageListeners=n=>{const i=this._handlers,s=this.container,r=s.actualOptions,a=r.interactivity.detectsOn,o=s.canvas.element;let l=rr;a==="window"?(s.interactivity.element=window,l=rh):a==="parent"&&o?s.interactivity.element=o.parentElement??o.parentNode:s.interactivity.element=o,this._manageMediaMatch(n),this._manageResize(n),this._manageInteractivityListeners(l,n),document&&Pe(document,uh,i.visibilityChange,n,!1)},this._manageMediaMatch=n=>{const i=this._handlers,s=La("(prefers-color-scheme: dark)");if(s){if(s.addEventListener!==void 0){Pe(s,"change",i.themeChange,n);return}s.addListener!==void 0&&(n?s.addListener(i.oldThemeChange):s.removeListener(i.oldThemeChange))}},this._manageResize=n=>{const i=this._handlers,s=this.container;if(!s.actualOptions.interactivity.events.resize)return;if(typeof ResizeObserver>"u"){Pe(window,ch,i.resize,n);return}const a=s.canvas.element;this._resizeObserver&&!n?(a&&this._resizeObserver.unobserve(a),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&n&&a&&(this._resizeObserver=new ResizeObserver(async o=>{o.find(c=>c.target===a)&&await this._handleWindowResize()}),this._resizeObserver.observe(a))},this._mouseDown=()=>{const{interactivity:n}=this.container;if(!n)return;const{mouse:i}=n;i.clicking=!0,i.downPosition=i.position},this._mouseTouchClick=n=>{const i=this.container,s=i.actualOptions,{mouse:r}=i.interactivity;r.inside=!0;let a=!1;const o=r.position;if(!(!o||!s.interactivity.events.onClick.enable)){for(const[,l]of i.plugins)if(l.clickPositionValid&&(a=l.clickPositionValid(o),a))break;a||this._doMouseTouchClick(n),r.clicking=!1}},this._mouseTouchFinish=()=>{const n=this.container.interactivity;if(!n)return;const i=n.mouse;delete i.position,delete i.clickPosition,delete i.downPosition,n.status=rr,i.inside=!1,i.clicking=!1},this._mouseTouchMove=n=>{const i=this.container,s=i.actualOptions,r=i.interactivity,a=i.canvas.element;if(!r||!r.element)return;r.mouse.inside=!0;let o;if(n.type.startsWith("pointer")){this._canPush=!0;const c=n;if(r.element===window){if(a){const f=a.getBoundingClientRect();o={x:c.clientX-f.left,y:c.clientY-f.top}}}else if(s.interactivity.detectsOn==="parent"){const f=c.target,h=c.currentTarget;if(f&&h&&a){const u=f.getBoundingClientRect(),_=h.getBoundingClientRect(),T=a.getBoundingClientRect();o={x:c.offsetX+2*u.left-(_.left+T.left),y:c.offsetY+2*u.top-(_.top+T.top)}}else o={x:c.offsetX??c.clientX,y:c.offsetY??c.clientY}}else c.target===a&&(o={x:c.offsetX??c.clientX,y:c.offsetY??c.clientY})}else if(this._canPush=n.type!=="touchmove",a){const c=n,f=c.touches[c.touches.length-1],h=a.getBoundingClientRect();o={x:f.clientX-(h.left??0),y:f.clientY-(h.top??0)}}const l=i.retina.pixelRatio;o&&(o.x*=l,o.y*=l),r.mouse.position=o,r.status=ar},this._touchEnd=n=>{const i=n,s=Array.from(i.changedTouches);for(const r of s)this._touches.delete(r.identifier);this._mouseTouchFinish()},this._touchEndClick=n=>{const i=n,s=Array.from(i.changedTouches);for(const r of s)this._touches.delete(r.identifier);this._mouseTouchClick(n)},this._touchStart=n=>{const i=n,s=Array.from(i.changedTouches);for(const r of s)this._touches.set(r.identifier,performance.now());this._mouseTouchMove(n)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:n=>this._mouseTouchMove(n),mouseUp:n=>this._mouseTouchClick(n),touchStart:n=>this._touchStart(n),touchMove:n=>this._mouseTouchMove(n),touchEnd:n=>this._touchEnd(n),touchCancel:n=>this._touchEnd(n),touchEndClick:n=>this._touchEndClick(n),visibilityChange:()=>this._handleVisibilityChange(),themeChange:n=>this._handleThemeChange(n),oldThemeChange:n=>this._handleThemeChange(n),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}class Ve{constructor(){this.value=""}static create(e,n){const i=new Ve;return i.load(e),n!==void 0&&($e(n)||Ge(n)?i.load({value:n}):i.load(n)),i}load(e){(e==null?void 0:e.value)!==void 0&&(this.value=e.value)}}class $h{constructor(){this.color=new Ve,this.color.value="",this.image="",this.position="",this.repeat="",this.size="",this.opacity=1}load(e){e&&(e.color!==void 0&&(this.color=Ve.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.position!==void 0&&(this.position=e.position),e.repeat!==void 0&&(this.repeat=e.repeat),e.size!==void 0&&(this.size=e.size),e.opacity!==void 0&&(this.opacity=e.opacity))}}class Gh{constructor(){this.color=new Ve,this.color.value="#fff",this.opacity=1}load(e){e&&(e.color!==void 0&&(this.color=Ve.create(this.color,e.color)),e.opacity!==void 0&&(this.opacity=e.opacity))}}class Wh{constructor(){this.composite="destination-out",this.cover=new Gh,this.enable=!1}load(e){if(e){if(e.composite!==void 0&&(this.composite=e.composite),e.cover!==void 0){const n=e.cover,i=$e(e.cover)?{color:e.cover}:e.cover;this.cover.load(n.color!==void 0?n:{color:i})}e.enable!==void 0&&(this.enable=e.enable)}}}class Vh{constructor(){this.enable=!0,this.zIndex=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.zIndex!==void 0&&(this.zIndex=e.zIndex))}}class Hh{constructor(){this.enable=!1,this.mode=[]}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode))}}class dr{constructor(){this.selectors=[],this.enable=!1,this.mode=[],this.type="circle"}get el(){return this.elementId}set el(e){this.elementId=e}get elementId(){return this.ids}set elementId(e){this.ids=e}get ids(){return pt(this.selectors,e=>e.replace("#",""))}set ids(e){this.selectors=pt(e,n=>`#${n}`)}load(e){if(!e)return;const n=e.ids??e.elementId??e.el;n!==void 0&&(this.ids=n),e.selectors!==void 0&&(this.selectors=e.selectors),e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),e.type!==void 0&&(this.type=e.type)}}class jh{constructor(){this.enable=!1,this.force=2,this.smooth=10}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.force!==void 0&&(this.force=e.force),e.smooth!==void 0&&(this.smooth=e.smooth))}}class Yh{constructor(){this.enable=!1,this.mode=[],this.parallax=new jh}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),this.parallax.load(e.parallax))}}class Xh{constructor(){this.delay=.5,this.enable=!0}load(e){e!==void 0&&(e.delay!==void 0&&(this.delay=e.delay),e.enable!==void 0&&(this.enable=e.enable))}}class Kh{constructor(){this.onClick=new Hh,this.onDiv=new dr,this.onHover=new Yh,this.resize=new Xh}get onclick(){return this.onClick}set onclick(e){this.onClick=e}get ondiv(){return this.onDiv}set ondiv(e){this.onDiv=e}get onhover(){return this.onHover}set onhover(e){this.onHover=e}load(e){if(!e)return;this.onClick.load(e.onClick??e.onclick);const n=e.onDiv??e.ondiv;n!==void 0&&(this.onDiv=pt(n,i=>{const s=new dr;return s.load(i),s})),this.onHover.load(e.onHover??e.onhover),nt(e.resize)?this.resize.enable=e.resize:this.resize.load(e.resize)}}class qh{constructor(e,n){this._engine=e,this._container=n}load(e){if(!e||!this._container)return;const n=this._engine.plugins.interactors.get(this._container);if(n)for(const i of n)i.loadModeOptions&&i.loadModeOptions(this,e)}}class Ra{constructor(e,n){this.detectsOn="window",this.events=new Kh,this.modes=new qh(e,n)}get detect_on(){return this.detectsOn}set detect_on(e){this.detectsOn=e}load(e){if(!e)return;const n=e.detectsOn??e.detect_on;n!==void 0&&(this.detectsOn=n),this.events.load(e.events),this.modes.load(e.modes)}}class Qh{load(e){e&&(e.position&&(this.position={x:e.position.x??50,y:e.position.y??50,mode:e.position.mode??"percent"}),e.options&&(this.options=ye({},e.options)))}}class Jh{constructor(){this.maxWidth=1/0,this.options={},this.mode="canvas"}load(e){e&&(e.maxWidth!==void 0&&(this.maxWidth=e.maxWidth),e.mode!==void 0&&(e.mode==="screen"?this.mode="screen":this.mode="canvas"),e.options!==void 0&&(this.options=ye({},e.options)))}}class Zh{constructor(){this.auto=!1,this.mode="any",this.value=!1}load(e){e&&(e.auto!==void 0&&(this.auto=e.auto),e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}}class em{constructor(){this.name="",this.default=new Zh}load(e){e&&(e.name!==void 0&&(this.name=e.name),this.default.load(e.default),e.options!==void 0&&(this.options=ye({},e.options)))}}class oi{constructor(){this.count=0,this.enable=!1,this.offset=0,this.speed=1,this.delay=0,this.decay=0,this.sync=!0}load(e){e&&(e.count!==void 0&&(this.count=q(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(this.offset=q(e.offset)),e.speed!==void 0&&(this.speed=q(e.speed)),e.decay!==void 0&&(this.decay=q(e.decay)),e.delay!==void 0&&(this.delay=q(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}}class tm{constructor(){this.h=new oi,this.s=new oi,this.l=new oi}load(e){e&&(this.h.load(e.h),this.s.load(e.s),this.l.load(e.l))}}class pn extends Ve{constructor(){super(),this.animation=new tm}static create(e,n){const i=new pn;return i.load(e),n!==void 0&&($e(n)||Ge(n)?i.load({value:n}):i.load(n)),i}load(e){if(super.load(e),!e)return;const n=e.animation;n!==void 0&&(n.enable!==void 0?this.animation.h.load(n):this.animation.load(e.animation))}}class nm{constructor(){this.speed=2}load(e){e&&e.speed!==void 0&&(this.speed=e.speed)}}class im{constructor(){this.enable=!0,this.retries=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.retries!==void 0&&(this.retries=e.retries))}}class sm{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(e){e&&(e.count!==void 0&&(this.count=q(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=q(e.speed)),e.decay!==void 0&&(this.decay=q(e.decay)),e.delay!==void 0&&(this.delay=q(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}}class Fa extends sm{constructor(){super(),this.mode="auto",this.startValue="random"}load(e){super.load(e),e&&(e.minimumValue!==void 0&&(this.minimumValue=e.minimumValue),e.mode!==void 0&&(this.mode=e.mode),e.startValue!==void 0&&(this.startValue=e.startValue))}}class rm{constructor(){this.enable=!1,this.minimumValue=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.minimumValue!==void 0&&(this.minimumValue=e.minimumValue))}}class vn{constructor(){this.random=new rm,this.value=0}load(e){e&&(nt(e.random)?this.random.enable=e.random:this.random.load(e.random),e.value!==void 0&&(this.value=q(e.value,this.random.enable?this.random.minimumValue:void 0)))}}class hr extends vn{constructor(){super(),this.random.minimumValue=.1,this.value=1}}class za{constructor(){this.horizontal=new hr,this.vertical=new hr}load(e){e&&(this.horizontal.load(e.horizontal),this.vertical.load(e.vertical))}}class am{constructor(){this.absorb=new nm,this.bounce=new za,this.enable=!1,this.maxSpeed=50,this.mode="bounce",this.overlap=new im}load(e){e&&(this.absorb.load(e.absorb),this.bounce.load(e.bounce),e.enable!==void 0&&(this.enable=e.enable),e.maxSpeed!==void 0&&(this.maxSpeed=q(e.maxSpeed)),e.mode!==void 0&&(this.mode=e.mode),this.overlap.load(e.overlap))}}class om{constructor(){this.offset=0,this.value=90}load(e){e&&(e.offset!==void 0&&(this.offset=q(e.offset)),e.value!==void 0&&(this.value=q(e.value)))}}class lm{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}get rotateX(){return this.rotate.x}set rotateX(e){this.rotate.x=e}get rotateY(){return this.rotate.y}set rotateY(e){this.rotate.y=e}load(e){var s,r;if(!e)return;e.distance!==void 0&&(this.distance=q(e.distance)),e.enable!==void 0&&(this.enable=e.enable);const n=((s=e.rotate)==null?void 0:s.x)??e.rotateX;n!==void 0&&(this.rotate.x=n);const i=((r=e.rotate)==null?void 0:r.y)??e.rotateY;i!==void 0&&(this.rotate.y=i)}}class cm{constructor(){this.x=50,this.y=50,this.mode="percent",this.radius=0}load(e){e&&(e.x!==void 0&&(this.x=e.x),e.y!==void 0&&(this.y=e.y),e.mode!==void 0&&(this.mode=e.mode),e.radius!==void 0&&(this.radius=e.radius))}}class um{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(e){e&&(e.acceleration!==void 0&&(this.acceleration=q(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.inverse!==void 0&&(this.inverse=e.inverse),e.maxSpeed!==void 0&&(this.maxSpeed=q(e.maxSpeed)))}}class fm{constructor(){this.clamp=!0,this.delay=new vn,this.enable=!1,this.options={}}load(e){e&&(e.clamp!==void 0&&(this.clamp=e.clamp),this.delay.load(e.delay),e.enable!==void 0&&(this.enable=e.enable),this.generator=e.generator,e.options&&(this.options=ye(this.options,e.options)))}}class dm{load(e){e&&(e.color!==void 0&&(this.color=Ve.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image))}}class hm{constructor(){this.enable=!1,this.length=10,this.fill=new dm}get fillColor(){return this.fill.color}set fillColor(e){this.fill.load({color:e})}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),(e.fill!==void 0||e.fillColor!==void 0)&&this.fill.load(e.fill||{color:e.fillColor}),e.length!==void 0&&(this.length=e.length))}}class mm{constructor(){this.default="out"}load(e){e&&(e.default!==void 0&&(this.default=e.default),this.bottom=e.bottom??e.default,this.left=e.left??e.default,this.right=e.right??e.default,this.top=e.top??e.default)}}class pm{constructor(){this.acceleration=0,this.enable=!1}load(e){e&&(e.acceleration!==void 0&&(this.acceleration=q(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.position&&(this.position=ye({},e.position)))}}class gm{constructor(){this.angle=new om,this.attract=new lm,this.center=new cm,this.decay=0,this.distance={},this.direction="none",this.drift=0,this.enable=!1,this.gravity=new um,this.path=new fm,this.outModes=new mm,this.random=!1,this.size=!1,this.speed=2,this.spin=new pm,this.straight=!1,this.trail=new hm,this.vibrate=!1,this.warp=!1}get bounce(){return this.collisions}set bounce(e){this.collisions=e}get collisions(){return!1}set collisions(e){}get noise(){return this.path}set noise(e){this.path=e}get outMode(){return this.outModes.default}set outMode(e){this.outModes.default=e}get out_mode(){return this.outMode}set out_mode(e){this.outMode=e}load(e){if(!e)return;this.angle.load(Re(e.angle)?{value:e.angle}:e.angle),this.attract.load(e.attract),this.center.load(e.center),e.decay!==void 0&&(this.decay=q(e.decay)),e.direction!==void 0&&(this.direction=e.direction),e.distance!==void 0&&(this.distance=Re(e.distance)?{horizontal:e.distance,vertical:e.distance}:{...e.distance}),e.drift!==void 0&&(this.drift=q(e.drift)),e.enable!==void 0&&(this.enable=e.enable),this.gravity.load(e.gravity);const n=e.outModes??e.outMode??e.out_mode;n!==void 0&&(tn(n)?this.outModes.load(n):this.outModes.load({default:n})),this.path.load(e.path??e.noise),e.random!==void 0&&(this.random=e.random),e.size!==void 0&&(this.size=e.size),e.speed!==void 0&&(this.speed=q(e.speed)),this.spin.load(e.spin),e.straight!==void 0&&(this.straight=e.straight),this.trail.load(e.trail),e.vibrate!==void 0&&(this.vibrate=e.vibrate),e.warp!==void 0&&(this.warp=e.warp)}}class _m extends Fa{constructor(){super(),this.destroy="none",this.speed=2}get opacity_min(){return this.minimumValue}set opacity_min(e){this.minimumValue=e}load(e){(e==null?void 0:e.opacity_min)!==void 0&&e.minimumValue===void 0&&(e.minimumValue=e.opacity_min),super.load(e),e&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class ym extends vn{constructor(){super(),this.animation=new _m,this.random.minimumValue=.1,this.value=1}get anim(){return this.animation}set anim(e){this.animation=e}load(e){if(!e)return;super.load(e);const n=e.animation??e.anim;n!==void 0&&(this.animation.load(n),this.value=q(this.value,this.animation.enable?this.animation.minimumValue:void 0))}}class vm{constructor(){this.enable=!1,this.width=1920,this.height=1080}get area(){return this.width}set area(e){this.width=e}get factor(){return this.height}set factor(e){this.height=e}get value_area(){return this.area}set value_area(e){this.area=e}load(e){if(!e)return;e.enable!==void 0&&(this.enable=e.enable);const n=e.width??e.area??e.value_area;n!==void 0&&(this.width=n);const i=e.height??e.factor;i!==void 0&&(this.height=i)}}class bm{constructor(){this.density=new vm,this.limit=0,this.value=0}get max(){return this.limit}set max(e){this.limit=e}load(e){if(!e)return;this.density.load(e.density);const n=e.limit??e.max;n!==void 0&&(this.limit=n),e.value!==void 0&&(this.value=e.value)}}class km{constructor(){this.blur=0,this.color=new Ve,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(e){e&&(e.blur!==void 0&&(this.blur=e.blur),this.color=Ve.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(e.offset.x!==void 0&&(this.offset.x=e.offset.x),e.offset.y!==void 0&&(this.offset.y=e.offset.y)))}}const li="character",ci="char",ui="image",fi="images",di="polygon",hi="star";class Tm{constructor(){this.loadShape=(e,n,i,s)=>{if(!e)return;const r=Ge(e),a=r?[]:{},o=r!==Ge(this.options[n]),l=r!==Ge(this.options[i]);o&&(this.options[n]=a),l&&s&&(this.options[i]=a),this.options[n]=ye(this.options[n]??a,e),(!this.options[i]||s)&&(this.options[i]=ye(this.options[i]??a,e))},this.close=!0,this.fill=!0,this.options={},this.type="circle"}get character(){return this.options[li]??this.options[ci]}set character(e){this.options[ci]=this.options[li]=e}get custom(){return this.options}set custom(e){this.options=e}get image(){return this.options[ui]??this.options[fi]}set image(e){this.options[fi]=this.options[ui]=e}get images(){return this.image}set images(e){this.image=e}get polygon(){return this.options[di]??this.options[hi]}set polygon(e){this.options[hi]=this.options[di]=e}get stroke(){return[]}set stroke(e){}load(e){if(!e)return;const n=e.options??e.custom;if(n!==void 0)for(const i in n){const s=n[i];s&&(this.options[i]=ye(this.options[i]??{},s))}this.loadShape(e.character,li,ci,!0),this.loadShape(e.polygon,di,hi,!1),this.loadShape(e.image??e.images,ui,fi,!0),e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}}class Em extends Fa{constructor(){super(),this.destroy="none",this.speed=5}get size_min(){return this.minimumValue}set size_min(e){this.minimumValue=e}load(e){(e==null?void 0:e.size_min)!==void 0&&e.minimumValue===void 0&&(e.minimumValue=e.size_min),super.load(e),e&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class wm extends vn{constructor(){super(),this.animation=new Em,this.random.minimumValue=1,this.value=3}get anim(){return this.animation}set anim(e){this.animation=e}load(e){if(super.load(e),!e)return;const n=e.animation??e.anim;n!==void 0&&(this.animation.load(n),this.value=q(this.value,this.animation.enable?this.animation.minimumValue:void 0))}}class mr{constructor(){this.width=0}load(e){e&&(e.color!==void 0&&(this.color=pn.create(this.color,e.color)),e.width!==void 0&&(this.width=q(e.width)),e.opacity!==void 0&&(this.opacity=q(e.opacity)))}}class Am extends vn{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(e){super.load(e),e&&(e.opacityRate!==void 0&&(this.opacityRate=e.opacityRate),e.sizeRate!==void 0&&(this.sizeRate=e.sizeRate),e.velocityRate!==void 0&&(this.velocityRate=e.velocityRate))}}class Sm{constructor(e,n){this._engine=e,this._container=n,this.bounce=new za,this.collisions=new am,this.color=new pn,this.color.value="#fff",this.groups={},this.move=new gm,this.number=new bm,this.opacity=new ym,this.reduceDuplicates=!1,this.shadow=new km,this.shape=new Tm,this.size=new wm,this.stroke=new mr,this.zIndex=new Am}load(e){var s,r,a;if(!e)return;if(this.bounce.load(e.bounce),this.color.load(pn.create(this.color,e.color)),e.groups!==void 0)for(const o in e.groups){const l=e.groups[o];l!==void 0&&(this.groups[o]=ye(this.groups[o]??{},l))}this.move.load(e.move),this.number.load(e.number),this.opacity.load(e.opacity),e.reduceDuplicates!==void 0&&(this.reduceDuplicates=e.reduceDuplicates),this.shape.load(e.shape),this.size.load(e.size),this.shadow.load(e.shadow),this.zIndex.load(e.zIndex);const n=((s=e.move)==null?void 0:s.collisions)??((r=e.move)==null?void 0:r.bounce);n!==void 0&&(this.collisions.enable=n),this.collisions.load(e.collisions),e.interactivity!==void 0&&(this.interactivity=ye({},e.interactivity));const i=e.stroke??((a=e.shape)==null?void 0:a.stroke);if(i&&(this.stroke=pt(i,o=>{const l=new mr;return l.load(o),l})),this._container){const o=this._engine.plugins.updaters.get(this._container);if(o)for(const c of o)c.loadOptions&&c.loadOptions(this,e);const l=this._engine.plugins.interactors.get(this._container);if(l)for(const c of l)c.loadParticlesOptions&&c.loadParticlesOptions(this,e)}}}function Ua(t,...e){for(const n of e)t.load(n)}function Ba(t,e,...n){const i=new Sm(t,e);return Ua(i,...n),i}class Im{constructor(e,n){this._findDefaultTheme=i=>this.themes.find(s=>s.default.value&&s.default.mode===i)??this.themes.find(s=>s.default.value&&s.default.mode==="any"),this._importPreset=i=>{this.load(this._engine.plugins.getPreset(i))},this._engine=e,this._container=n,this.autoPlay=!0,this.background=new $h,this.backgroundMask=new Wh,this.defaultThemes={},this.delay=0,this.fullScreen=new Vh,this.detectRetina=!0,this.duration=0,this.fpsLimit=120,this.interactivity=new Ra(e,n),this.manualParticles=[],this.particles=Ba(this._engine,this._container),this.pauseOnBlur=!0,this.pauseOnOutsideViewport=!0,this.responsive=[],this.smooth=!1,this.style={},this.themes=[],this.zLayers=100}get backgroundMode(){return this.fullScreen}set backgroundMode(e){this.fullScreen.load(e)}get fps_limit(){return this.fpsLimit}set fps_limit(e){this.fpsLimit=e}get retina_detect(){return this.detectRetina}set retina_detect(e){this.detectRetina=e}load(e){var a,o;if(!e)return;e.preset!==void 0&&pt(e.preset,l=>this._importPreset(l)),e.autoPlay!==void 0&&(this.autoPlay=e.autoPlay),e.delay!==void 0&&(this.delay=q(e.delay));const n=e.detectRetina??e.retina_detect;n!==void 0&&(this.detectRetina=n),e.duration!==void 0&&(this.duration=q(e.duration));const i=e.fpsLimit??e.fps_limit;i!==void 0&&(this.fpsLimit=i),e.pauseOnBlur!==void 0&&(this.pauseOnBlur=e.pauseOnBlur),e.pauseOnOutsideViewport!==void 0&&(this.pauseOnOutsideViewport=e.pauseOnOutsideViewport),e.zLayers!==void 0&&(this.zLayers=e.zLayers),this.background.load(e.background);const s=e.fullScreen??e.backgroundMode;nt(s)?this.fullScreen.enable=s:this.fullScreen.load(s),this.backgroundMask.load(e.backgroundMask),this.interactivity.load(e.interactivity),e.manualParticles&&(this.manualParticles=e.manualParticles.map(l=>{const c=new Qh;return c.load(l),c})),this.particles.load(e.particles),this.style=ye(this.style,e.style),this._engine.plugins.loadOptions(this,e),e.smooth!==void 0&&(this.smooth=e.smooth);const r=this._engine.plugins.interactors.get(this._container);if(r)for(const l of r)l.loadOptions&&l.loadOptions(this,e);if(e.responsive!==void 0)for(const l of e.responsive){const c=new Jh;c.load(l),this.responsive.push(c)}if(this.responsive.sort((l,c)=>l.maxWidth-c.maxWidth),e.themes!==void 0)for(const l of e.themes){const c=this.themes.find(f=>f.name===l.name);if(c)c.load(l);else{const f=new em;f.load(l),this.themes.push(f)}}this.defaultThemes.dark=(a=this._findDefaultTheme("dark"))==null?void 0:a.name,this.defaultThemes.light=(o=this._findDefaultTheme("light"))==null?void 0:o.name}setResponsive(e,n,i){this.load(i);const s=this.responsive.find(r=>r.mode==="screen"&&screen?r.maxWidth>screen.availWidth:r.maxWidth*n>e);return this.load(s==null?void 0:s.options),s==null?void 0:s.maxWidth}setTheme(e){if(e){const n=this.themes.find(i=>i.name===e);n&&this.load(n.options)}else{const n=La("(prefers-color-scheme: dark)"),i=n&&n.matches,s=this._findDefaultTheme(i?"dark":"light");s&&this.load(s.options)}}}class Pm{constructor(e,n){this.container=n,this._engine=e,this._interactors=e.plugins.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[]}async externalInteract(e){for(const n of this._externalInteractors)n.isEnabled()&&await n.interact(e)}handleClickMode(e){for(const n of this._externalInteractors)n.handleClickMode&&n.handleClickMode(e)}init(){this._externalInteractors=[],this._particleInteractors=[];for(const e of this._interactors){switch(e.type){case"external":this._externalInteractors.push(e);break;case"particles":this._particleInteractors.push(e);break}e.init()}}async particlesInteract(e,n){for(const i of this._externalInteractors)i.clear(e,n);for(const i of this._particleInteractors)i.isEnabled(e)&&await i.interact(e,n)}async reset(e){for(const n of this._externalInteractors)n.isEnabled()&&n.reset(e);for(const n of this._particleInteractors)n.isEnabled(e)&&n.reset(e)}}const pr=t=>{if(!bh(t.outMode,t.checkModes))return;const e=t.radius*2;t.coord>t.maxCoord-e?t.setCb(-t.radius):t.coord<e&&t.setCb(t.radius)};class Om{constructor(e,n,i,s,r,a){this.container=i,this._calcPosition=(o,l,c,f=0)=>{for(const[,E]of o.plugins){const g=E.particlePosition!==void 0?E.particlePosition(l,this):void 0;if(g)return Ae.create(g.x,g.y,c)}const h=o.canvas.size,u=gh({size:h,position:l}),_=Ae.create(u.x,u.y,c),T=this.getRadius(),k=this.options.move.outModes,A=E=>{pr({outMode:E,checkModes:["bounce","bounce-horizontal"],coord:_.x,maxCoord:o.canvas.size.width,setCb:g=>_.x+=g,radius:T})},y=E=>{pr({outMode:E,checkModes:["bounce","bounce-vertical"],coord:_.y,maxCoord:o.canvas.size.height,setCb:g=>_.y+=g,radius:T})};return A(k.left??k.default),A(k.right??k.default),y(k.top??k.default),y(k.bottom??k.default),this._checkOverlap(_,f)?this._calcPosition(o,void 0,c,f+1):_},this._calculateVelocity=()=>{const o=ph(this.direction),l=o.copy(),c=this.options.move;if(c.direction==="inside"||c.direction==="outside")return l;const f=Math.PI/180*ie(c.angle.value),h=Math.PI/180*ie(c.angle.offset),u={left:h-f/2,right:h+f/2};return c.straight||(l.angle+=Ot(q(u.left,u.right))),c.random&&typeof c.speed=="number"&&(l.length*=Ke()),l},this._checkOverlap=(o,l=0)=>{const c=this.options.collisions,f=this.getRadius();if(!c.enable)return!1;const h=c.overlap;if(h.enable)return!1;const u=h.retries;if(u>=0&&l>u)throw new Error(`${mt} particle is overlapping and can't be placed`);return!!this.container.particles.find(_=>os(o,_.position)<f+_.getRadius())},this._getRollColor=o=>{if(!o||!this.roll||!this.backColor&&!this.roll.alter)return o;const l=this.roll.horizontal&&this.roll.vertical?2:1,c=this.roll.horizontal?Math.PI/2:0;return Math.floor(((this.roll.angle??0)+c)/(Math.PI/l))%2?this.backColor?this.backColor:this.roll.alter?Fh(o,this.roll.alter.type,this.roll.alter.value):o:o},this._initPosition=o=>{const l=this.container,c=ie(this.options.zIndex.value);this.position=this._calcPosition(l,o,Ca(c,0,l.zLayers)),this.initialPosition=this.position.copy();const f=l.canvas.size;switch(this.moveCenter={...Na(this.options.move.center,f),radius:this.options.move.center.radius??0,mode:this.options.move.center.mode??"percent"},this.direction=mh(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case"inside":this.outType="inside";break;case"outside":this.outType="outside";break}this.offset=Pt.origin},this._loadShapeData=(o,l)=>{const c=o.options[this.shape];if(c)return ye({close:o.close,fill:o.fill},rn(c,this.id,l))},this._engine=e,this.init(n,s,r,a)}destroy(e){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const n=this.container,i=this.pathGenerator;for(const[,s]of n.plugins)s.particleDestroyed&&s.particleDestroyed(this,e);for(const s of n.particles.updaters)s.particleDestroyed&&s.particleDestroyed(this,e);i&&i.reset(this)}draw(e){const n=this.container;for(const[,i]of n.plugins)n.canvas.drawParticlePlugin(i,this,e);n.canvas.drawParticle(this,e)}getFillColor(){return this._getRollColor(this.bubble.color??fr(this.color))}getMass(){return this.getRadius()**2*Math.PI/2}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??fr(this.strokeColor))}init(e,n,i,s){const r=this.container,a=this._engine;this.id=e,this.group=s,this.fill=!0,this.pathRotation=!1,this.close=!0,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0;const o=r.retina.pixelRatio,l=r.actualOptions,c=Ba(this._engine,r,l.particles),f=c.shape.type,{reduceDuplicates:h}=c;this.shape=rn(f,this.id,h);const u=c.shape;if(i&&i.shape&&i.shape.type){const g=i.shape.type,v=rn(g,this.id,h);v&&(this.shape=v,u.load(i.shape))}this.shapeData=this._loadShapeData(u,h),c.load(i);const _=this.shapeData;_&&c.load(_.particles);const T=new Ra(a,r);T.load(r.actualOptions.interactivity),T.load(c.interactivity),this.interactivity=T,this.fill=(_==null?void 0:_.fill)??c.shape.fill,this.close=(_==null?void 0:_.close)??c.shape.close,this.options=c;const k=this.options.move.path;this.pathDelay=dh(k.delay)*1e3,k.generator&&(this.pathGenerator=this._engine.plugins.getPathGenerator(k.generator),this.pathGenerator&&r.addPath(k.generator,this.pathGenerator)&&this.pathGenerator.init(r)),r.retina.initParticle(this),this.size=Th(this.options.size,o),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(n),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=1-ie(this.options.move.decay);const A=r.particles;A.needsSort=A.needsSort||A.lastZIndex<this.position.z,A.lastZIndex=this.position.z,this.zIndexFactor=this.position.z/r.zLayers,this.sides=24;let y=r.drawers.get(this.shape);y||(y=this._engine.plugins.getShapeDrawer(this.shape),y&&r.drawers.set(this.shape,y)),y&&y.loadShape&&y.loadShape(this);const E=y==null?void 0:y.getSidesCount;E&&(this.sides=E(this)),this.spawning=!1,this.shadowColor=Ct(this.options.shadow.color);for(const g of r.particles.updaters)g.init(this);for(const g of r.particles.movers)g.init&&g.init(this);y&&y.particleInit&&y.particleInit(r,this);for(const[,g]of r.plugins)g.particleCreated&&g.particleCreated(this)}isInsideCanvas(){const e=this.getRadius(),n=this.container.canvas.size,i=this.position;return i.x>=-e&&i.y>=-e&&i.y<=n.height+e&&i.x<=n.width+e}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const e of this.container.particles.updaters)e.reset&&e.reset(this)}}class Cm{constructor(e,n){this.position=e,this.particle=n}}class $a{constructor(e,n){this.position={x:e,y:n}}}class Dt extends $a{constructor(e,n,i,s){super(e,n),this.size={height:s,width:i}}contains(e){const n=this.size.width,i=this.size.height,s=this.position;return e.x>=s.x&&e.x<=s.x+n&&e.y>=s.y&&e.y<=s.y+i}intersects(e){e instanceof Kn&&e.intersects(this);const n=this.size.width,i=this.size.height,s=this.position,r=e.position,a=e instanceof Dt?e.size:{width:0,height:0},o=a.width,l=a.height;return r.x<s.x+n&&r.x+o>s.x&&r.y<s.y+i&&r.y+l>s.y}}class Kn extends $a{constructor(e,n,i){super(e,n),this.radius=i}contains(e){return os(e,this.position)<=this.radius}intersects(e){const n=this.position,i=e.position,s={x:Math.abs(i.x-n.x),y:Math.abs(i.y-n.y)},r=this.radius;if(e instanceof Kn){const a=r+e.radius,o=Math.sqrt(s.x**2+s.y**2);return a>o}else if(e instanceof Dt){const{width:a,height:o}=e.size;return Math.pow(s.x-a,2)+Math.pow(s.y-o,2)<=r**2||s.x<=r+a&&s.y<=r+o||s.x<=a||s.y<=o}return!1}}class zn{constructor(e,n){this.rectangle=e,this.capacity=n,this._subdivide=()=>{const{x:i,y:s}=this.rectangle.position,{width:r,height:a}=this.rectangle.size,{capacity:o}=this;for(let l=0;l<4;l++)this._subs.push(new zn(new Dt(i+r/2*(l%2),s+a/2*(Math.round(l/2)-l%2),r/2,a/2),o));this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(e){return this.rectangle.contains(e.position)?this._points.length<this.capacity?(this._points.push(e),!0):(this._divided||this._subdivide(),this._subs.some(n=>n.insert(e))):!1}query(e,n,i){const s=i||[];if(!e.intersects(this.rectangle))return[];for(const r of this._points)!e.contains(r.position)&&os(e.position,r.position)>r.particle.getRadius()&&(!n||n(r.particle))||s.push(r.particle);if(this._divided)for(const r of this._subs)r.query(e,n,s);return s}queryCircle(e,n,i){return this.query(new Kn(e.x,e.y,n),i)}queryRectangle(e,n,i){return this.query(new Dt(e.x,e.y,n.width,n.height),i)}}const gr=4,_r=t=>new Dt(-t.width/4,-t.height/4,t.width*3/2,t.height*3/2);class xm{constructor(e,n){this._applyDensity=(s,r,a)=>{var _;if(!((_=s.number.density)!=null&&_.enable))return;const o=s.number,l=this._initDensityFactor(o.density),c=o.value,f=o.limit>0?o.limit:c,h=Math.min(c,f)*l+r,u=Math.min(this.count,this.filter(T=>T.group===a).length);this.limit=o.limit*l,u<h?this.push(Math.abs(h-u),void 0,s,a):u>h&&this.removeQuantity(u-h,a)},this._initDensityFactor=s=>{const r=this._container;if(!r.canvas.element||!s.enable)return 1;const a=r.canvas.element,o=r.retina.pixelRatio;return a.width*a.height/(s.factor*o**2*s.area)},this._pushParticle=(s,r,a,o)=>{try{let l=this.pool.pop();l?l.init(this._nextId,s,r,a):l=new Om(this._engine,this._nextId,this._container,s,r,a);let c=!0;return o&&(c=o(l)),c?(this._array.push(l),this._zArray.push(l),this._nextId++,this._engine.dispatchEvent("particleAdded",{container:this._container,data:{particle:l}}),l):void 0}catch(l){mn().warning(`${mt} adding particle: ${l}`);return}},this._removeParticle=(s,r,a)=>{const o=this._array[s];if(!o||o.group!==r)return!1;o.destroy(a);const l=this._zArray.indexOf(o);return this._array.splice(s,1),this._zArray.splice(l,1),this.pool.push(o),this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:o}}),!0},this._engine=e,this._container=n,this._nextId=0,this._array=[],this._zArray=[],this.pool=[],this.limit=0,this.needsSort=!1,this.lastZIndex=0,this._interactionManager=new Pm(e,n);const i=n.canvas.size;this.quadTree=new zn(_r(i),gr),this.movers=this._engine.plugins.getMovers(n,!0),this.updaters=this._engine.plugins.getUpdaters(n,!0)}get count(){return this._array.length}addManualParticles(){const e=this._container,n=e.actualOptions;for(const i of n.manualParticles)this.addParticle(i.position?Na(i.position,e.canvas.size):void 0,i.options)}addParticle(e,n,i,s){const r=this._container,a=r.actualOptions,o=a.particles.number.limit;if(o>0){const l=this.count+1-o;l>0&&this.removeQuantity(l)}return this._pushParticle(e,n,i,s)}clear(){this._array=[],this._zArray=[]}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}async draw(e){const n=this._container;n.canvas.clear(),await this.update(e);for(const[,i]of n.plugins)n.canvas.drawPlugin(i,e);for(const i of this._zArray)i.draw(e)}filter(e){return this._array.filter(e)}find(e){return this._array.find(e)}handleClickMode(e){this._interactionManager.handleClickMode(e)}init(){var s;const e=this._container,n=e.actualOptions;this.lastZIndex=0,this.needsSort=!1;let i=!1;this.updaters=this._engine.plugins.getUpdaters(e,!0),this._interactionManager.init();for(const[,r]of e.plugins)if(r.particlesInitialization!==void 0&&(i=r.particlesInitialization()),i)break;this._interactionManager.init();for(const[,r]of e.pathGenerators)r.init(e);if(this.addManualParticles(),!i){for(const r in n.particles.groups){const a=n.particles.groups[r];for(let o=this.count,l=0;l<((s=a.number)==null?void 0:s.value)&&o<n.particles.number.value;o++,l++)this.addParticle(void 0,a,r)}for(let r=this.count;r<n.particles.number.value;r++)this.addParticle()}}push(e,n,i,s){this.pushing=!0;for(let r=0;r<e;r++)this.addParticle(n==null?void 0:n.position,i,s);this.pushing=!1}async redraw(){this.clear(),this.init(),await this.draw({value:0,factor:0})}remove(e,n,i){this.removeAt(this._array.indexOf(e),void 0,n,i)}removeAt(e,n=1,i,s){if(e<0||e>this.count)return;let r=0;for(let a=e;r<n&&a<this.count;a++)this._removeParticle(a--,i,s)&&r++}removeQuantity(e,n){this.removeAt(0,e,n)}setDensity(){const e=this._container.actualOptions,n=e.particles.groups;for(const i in n)this._applyDensity(n[i],0,i);this._applyDensity(e.particles,e.manualParticles.length)}async update(e){const n=this._container,i=new Set;this.quadTree=new zn(_r(n.canvas.size),gr);for(const[,s]of n.pathGenerators)s.update();for(const[,s]of n.plugins)s.update&&s.update(e);for(const s of this._array){const r=n.canvas.resizeFactor;r&&!s.ignoresResizeRatio&&(s.position.x*=r.width,s.position.y*=r.height,s.initialPosition.x*=r.width,s.initialPosition.y*=r.height),s.ignoresResizeRatio=!1,await this._interactionManager.reset(s);for(const[,a]of this._container.plugins){if(s.destroyed)break;a.particleUpdate&&a.particleUpdate(s,e)}for(const a of this.movers)a.isEnabled(s)&&a.move(s,e);if(s.destroyed){i.add(s);continue}this.quadTree.insert(new Cm(s.getPosition(),s))}if(i.size){const s=r=>!i.has(r);this._array=this.filter(s),this._zArray=this._zArray.filter(s),this.pool.push(...i)}await this._interactionManager.externalInteract(e);for(const s of this._array){for(const r of this.updaters)r.update(s,e);!s.destroyed&&!s.spawning&&await this._interactionManager.particlesInteract(s,e)}if(delete n.canvas.resizeFactor,this.needsSort){const s=this._zArray;s.sort((r,a)=>a.position.z-r.position.z||r.id-a.id),this.lastZIndex=s[s.length-1].position.z,this.needsSort=!1}}}class Lm{constructor(e){this.container=e,this.pixelRatio=1,this.reduceFactor=1}init(){const e=this.container,n=e.actualOptions;this.pixelRatio=!n.detectRetina||Yn()?1:window.devicePixelRatio,this.reduceFactor=1;const i=this.pixelRatio;if(e.canvas.element){const a=e.canvas.element;e.canvas.size.width=a.offsetWidth*i,e.canvas.size.height=a.offsetHeight*i}const s=n.particles,r=s.move;this.attractDistance=ie(r.attract.distance)*i,this.maxSpeed=ie(r.gravity.maxSpeed)*i,this.sizeAnimationSpeed=ie(s.size.animation.speed)*i}initParticle(e){const n=e.options,i=this.pixelRatio,s=n.move,r=s.distance,a=e.retina;a.attractDistance=ie(s.attract.distance)*i,a.moveDrift=ie(s.drift)*i,a.moveSpeed=ie(s.speed)*i,a.sizeAnimationSpeed=ie(n.size.animation.speed)*i;const o=a.maxDistance;o.horizontal=r.horizontal!==void 0?r.horizontal*i:void 0,o.vertical=r.vertical!==void 0?r.vertical*i:void 0,a.maxSpeed=ie(s.gravity.maxSpeed)*i}}function oe(t){return t&&!t.destroyed}function Nm(t,e=60,n=!1){return{value:t,factor:n?60/e:60*t/1e3}}function Et(t,e,...n){const i=new Im(t,e);return Ua(i,...n),i}const Mm="default",yr={generate:t=>t.velocity,init:()=>{},update:()=>{},reset:()=>{}};class Dm{constructor(e,n,i){this.id=n,this._intersectionManager=s=>{if(!(!oe(this)||!this.actualOptions.pauseOnOutsideViewport))for(const r of s)r.target===this.interactivity.element&&(r.isIntersecting?this.play:this.pause)()},this._nextFrame=async s=>{try{if(!this.smooth&&this.lastFrameTime!==void 0&&s<this.lastFrameTime+1e3/this.fpsLimit){this.draw(!1);return}this.lastFrameTime??(this.lastFrameTime=s);const r=Nm(s-this.lastFrameTime,this.fpsLimit,this.smooth);if(this.addLifeTime(r.value),this.lastFrameTime=s,r.value>1e3){this.draw(!1);return}if(await this.particles.draw(r),!this.alive()){this.destroy();return}this.getAnimationStatus()&&this.draw(!1)}catch(r){mn().error(`${mt} in animation loop`,r)}},this._engine=e,this.fpsLimit=120,this.smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this.lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._sourceOptions=i,this._initialSourceOptions=i,this.retina=new Lm(this),this.canvas=new Uh(this),this.particles=new xm(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.drawers=new Map,this._options=Et(this._engine,this),this.actualOptions=Et(this._engine,this),this._eventListeners=new Bh(this),typeof IntersectionObserver<"u"&&IntersectionObserver&&(this._intersectionObserver=new IntersectionObserver(s=>this._intersectionManager(s))),this._engine.dispatchEvent("containerBuilt",{container:this})}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(e){if(!oe(this))return;const n=this.interactivity.element;if(!n)return;const i=(h,u,_)=>{if(!oe(this))return;const T=this.retina.pixelRatio,k={x:u.x*T,y:u.y*T},A=this.particles.quadTree.queryCircle(k,_*T);e(h,A)},s=h=>{if(!oe(this))return;const u=h,_={x:u.offsetX||u.clientX,y:u.offsetY||u.clientY};i(h,_,1)},r=()=>{oe(this)&&(c=!0,f=!1)},a=()=>{oe(this)&&(f=!0)},o=h=>{if(oe(this)){if(c&&!f){const u=h;let _=u.touches[u.touches.length-1];if(!_&&(_=u.changedTouches[u.changedTouches.length-1],!_))return;const T=this.canvas.element,k=T?T.getBoundingClientRect():void 0,A={x:_.clientX-(k?k.left:0),y:_.clientY-(k?k.top:0)};i(h,A,Math.max(_.radiusX,_.radiusY))}c=!1,f=!1}},l=()=>{oe(this)&&(c=!1,f=!1)};let c=!1,f=!1;n.addEventListener("click",s),n.addEventListener("touchstart",r),n.addEventListener("touchmove",a),n.addEventListener("touchend",o),n.addEventListener("touchcancel",l)}addLifeTime(e){this._lifeTime+=e}addPath(e,n,i=!1){return!oe(this)||!i&&this.pathGenerators.has(e)?!1:(this.pathGenerators.set(e,n??yr),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}destroy(){if(!oe(this))return;this.stop(),this.particles.destroy(),this.canvas.destroy();for(const[,i]of this.drawers)i.destroy&&i.destroy(this);for(const i of this.drawers.keys())this.drawers.delete(i);this._engine.plugins.destroy(this),this.destroyed=!0;const e=this._engine.dom(),n=e.findIndex(i=>i===this);n>=0&&e.splice(n,1),this._engine.dispatchEvent("containerDestroyed",{container:this})}draw(e){if(!oe(this))return;let n=e;this._drawAnimationFrame=requestAnimationFrame(async i=>{n&&(this.lastFrameTime=void 0,n=!1),await this._nextFrame(i)})}async export(e,n={}){for(const[,i]of this.plugins){if(!i.export)continue;const s=await i.export(e,n);if(s.supported)return s.blob}mn().error(`${mt} - Export plugin with type ${e} not found`)}getAnimationStatus(){return!this._paused&&!this.pageHidden&&oe(this)}handleClickMode(e){if(oe(this)){this.particles.handleClickMode(e);for(const[,n]of this.plugins)n.handleClickMode&&n.handleClickMode(e)}}async init(){if(!oe(this))return;const e=this._engine.plugins.getSupportedShapes();for(const i of e){const s=this._engine.plugins.getShapeDrawer(i);s&&this.drawers.set(i,s)}this._options=Et(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Et(this._engine,this,this._options);const n=this._engine.plugins.getAvailablePlugins(this);for(const[i,s]of n)this.plugins.set(i,s);this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize(),this.zLayers=this.actualOptions.zLayers,this._duration=ie(this.actualOptions.duration)*1e3,this._delay=ie(this.actualOptions.delay)*1e3,this._lifeTime=0,this.fpsLimit=this.actualOptions.fpsLimit>0?this.actualOptions.fpsLimit:120,this.smooth=this.actualOptions.smooth;for(const[,i]of this.drawers)i.init&&await i.init(this);for(const[,i]of this.plugins)i.init&&await i.init();this._engine.dispatchEvent("containerInit",{container:this}),this.particles.init(),this.particles.setDensity();for(const[,i]of this.plugins)i.particlesSetup&&i.particlesSetup();this._engine.dispatchEvent("particlesSetup",{container:this})}async loadTheme(e){oe(this)&&(this._currentTheme=e,await this.refresh())}pause(){if(oe(this)&&(this._drawAnimationFrame!==void 0&&(cancelAnimationFrame(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(const[,e]of this.plugins)e.pause&&e.pause();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent("containerPaused",{container:this})}}play(e){if(!oe(this))return;const n=this._paused||e;if(this._firstStart&&!this.actualOptions.autoPlay){this._firstStart=!1;return}if(this._paused&&(this._paused=!1),n)for(const[,i]of this.plugins)i.play&&i.play();this._engine.dispatchEvent("containerPlay",{container:this}),this.draw(n||!1)}async refresh(){if(oe(this))return this.stop(),this.start()}async reset(){if(oe(this))return this._initialSourceOptions=void 0,this._options=Et(this._engine,this),this.actualOptions=Et(this._engine,this,this._options),this.refresh()}setNoise(e,n,i){oe(this)&&this.setPath(e,n,i)}setPath(e,n,i){if(!e||!oe(this))return;const s={...yr};if(Ma(e))s.generate=e,n&&(s.init=n),i&&(s.update=i);else{const r=s;s.generate=e.generate||r.generate,s.init=e.init||r.init,s.update=e.update||r.update}this.addPath(Mm,s,!0)}async start(){!oe(this)||this.started||(await this.init(),this.started=!0,await new Promise(e=>{this._delayTimeout=setTimeout(async()=>{this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(const[,n]of this.plugins)n.start&&await n.start();this._engine.dispatchEvent("containerStarted",{container:this}),this.play(),e()},this._delay)}))}stop(){if(!(!oe(this)||!this.started)){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const[,e]of this.plugins)e.stop&&e.stop();for(const e of this.plugins.keys())this.plugins.delete(e);this._sourceOptions=this._options,this._engine.dispatchEvent("containerStopped",{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const e=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this.responsiveMaxWidth===e?!1:(this.responsiveMaxWidth=e,!0)}}class Rm{constructor(){this._listeners=new Map}addEventListener(e,n){this.removeEventListener(e,n);let i=this._listeners.get(e);i||(i=[],this._listeners.set(e,i)),i.push(n)}dispatchEvent(e,n){const i=this._listeners.get(e);i&&i.forEach(s=>s(n))}hasEventListener(e){return!!this._listeners.get(e)}removeAllEventListeners(e){e?this._listeners.delete(e):this._listeners=new Map}removeEventListener(e,n){const i=this._listeners.get(e);if(!i)return;const s=i.length,r=i.indexOf(n);r<0||(s===1?this._listeners.delete(e):i.splice(r,1))}}function mi(t,e,n,i=!1){let s=e.get(t);return(!s||i)&&(s=[...n.values()].map(r=>r(t)),e.set(t,s)),s}class Fm{constructor(e){this._engine=e,this.plugins=[],this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.drawers=new Map,this.pathGenerators=new Map}addInteractor(e,n){this._initializers.interactors.set(e,n)}addParticleMover(e,n){this._initializers.movers.set(e,n)}addParticleUpdater(e,n){this._initializers.updaters.set(e,n)}addPathGenerator(e,n){!this.getPathGenerator(e)&&this.pathGenerators.set(e,n)}addPlugin(e){!this.getPlugin(e.id)&&this.plugins.push(e)}addPreset(e,n,i=!1){(i||!this.getPreset(e))&&this.presets.set(e,n)}addShapeDrawer(e,n){pt(e,i=>{!this.getShapeDrawer(i)&&this.drawers.set(i,n)})}destroy(e){this.updaters.delete(e),this.movers.delete(e),this.interactors.delete(e)}getAvailablePlugins(e){const n=new Map;for(const i of this.plugins)i.needsPlugin(e.actualOptions)&&n.set(i.id,i.getPlugin(e));return n}getInteractors(e,n=!1){return mi(e,this.interactors,this._initializers.interactors,n)}getMovers(e,n=!1){return mi(e,this.movers,this._initializers.movers,n)}getPathGenerator(e){return this.pathGenerators.get(e)}getPlugin(e){return this.plugins.find(n=>n.id===e)}getPreset(e){return this.presets.get(e)}getShapeDrawer(e){return this.drawers.get(e)}getSupportedShapes(){return this.drawers.keys()}getUpdaters(e,n=!1){return mi(e,this.updaters,this._initializers.updaters,n)}loadOptions(e,n){for(const i of this.plugins)i.loadOptions(e,n)}loadParticlesOptions(e,n,...i){const s=this.updaters.get(e);if(s)for(const r of s)r.loadOptions&&r.loadOptions(n,...i)}}async function zm(t){const e=rn(t.url,t.index);if(!e)return t.fallback;const n=await fetch(e);return n.ok?n.json():(mn().error(`${mt} ${n.status} while retrieving config file`),t.fallback)}function Um(t){return!t.id&&!t.element&&!t.url&&!t.options}function Bm(t){return!Um(t)}class $m{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new Rm,this._initialized=!1,this.plugins=new Fm(this)}get configs(){const e={};for(const[n,i]of this._configs)e[n]=i;return e}get version(){return"2.12.0"}addConfig(e,n){$e(e)?n&&(n.name=e,this._configs.set(e,n)):this._configs.set(e.name??"default",e)}addEventListener(e,n){this._eventDispatcher.addEventListener(e,n)}async addInteractor(e,n,i=!0){this.plugins.addInteractor(e,n),await this.refresh(i)}async addMover(e,n,i=!0){this.plugins.addParticleMover(e,n),await this.refresh(i)}async addParticleUpdater(e,n,i=!0){this.plugins.addParticleUpdater(e,n),await this.refresh(i)}async addPathGenerator(e,n,i=!0){this.plugins.addPathGenerator(e,n),await this.refresh(i)}async addPlugin(e,n=!0){this.plugins.addPlugin(e),await this.refresh(n)}async addPreset(e,n,i=!1,s=!0){this.plugins.addPreset(e,n,i),await this.refresh(s)}async addShape(e,n,i,s,r,a=!0){let o,l=a,c,f,h;nt(i)?(l=i,c=void 0):c=i,nt(s)?(l=s,f=void 0):f=s,nt(r)?(l=r,h=void 0):h=r,Ma(n)?o={afterEffect:f,destroy:h,draw:n,init:c}:o=n,this.plugins.addShapeDrawer(e,o),await this.refresh(l)}dispatchEvent(e,n){this._eventDispatcher.dispatchEvent(e,n)}dom(){return this._domArray}domItem(e){const n=this.dom(),i=n[e];if(!i||i.destroyed){n.splice(e,1);return}return i}init(){this._initialized||(this._initialized=!0)}async load(e,n){return this.loadFromArray(e,n)}async loadFromArray(e,n,i){let s;return Bm(e)?s=e:(s={},$e(e)?s.id=e:s.options=e,Re(n)?s.index=n:s.options=n??s.options,s.index=i??s.index),this._loadParams(s)}async loadJSON(e,n,i){let s,r;return Re(n)||n===void 0?s=e:(r=e,s=n),this._loadParams({id:r,url:s,index:i})}async refresh(e=!0){e&&this.dom().forEach(n=>n.refresh())}removeEventListener(e,n){this._eventDispatcher.removeEventListener(e,n)}async set(e,n,i,s){const r={index:s};return $e(e)?r.id=e:r.element=e,n instanceof HTMLElement?r.element=n:r.options=n,Re(i)?r.index=i:r.options=i??r.options,this._loadParams(r)}async setJSON(e,n,i,s){const r={};return e instanceof HTMLElement?(r.element=e,r.url=n,r.index=i):(r.id=e,r.element=n,r.url=i,r.index=s),this._loadParams(r)}setOnClickHandler(e){const n=this.dom();if(!n.length)throw new Error(`${mt} can only set click handlers after calling tsParticles.load()`);for(const i of n)i.addClickHandler(e)}async _loadParams(e){const n=e.id??`tsparticles${Math.floor(Ke()*1e4)}`,{index:i,url:s}=e,r=s?await zm({fallback:e.options,url:s,index:i}):e.options;let a=e.element??document.getElementById(n);a||(a=document.createElement("div"),a.id=n,document.body.append(a));const o=rn(r,i),l=this.dom(),c=l.findIndex(u=>u.id===n);if(c>=0){const u=this.domItem(c);u&&!u.destroyed&&(u.destroy(),l.splice(c,1))}let f;if(a.tagName.toLowerCase()==="canvas")f=a,f.dataset[sn]="false";else{const u=a.getElementsByTagName("canvas");u.length?(f=u[0],f.dataset[sn]="false"):(f=document.createElement("canvas"),f.dataset[sn]="true",a.appendChild(f))}f.style.width||(f.style.width="100%"),f.style.height||(f.style.height="100%");const h=new Dm(this,n,o);return c>=0?l.splice(c,0,h):l.push(h),h.canvas.loadCanvas(f),await h.start(),h}}class Gm{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.s!==void 0&&i.l!==void 0)return xi(i)}handleRangeColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.l!==void 0)return xi({h:ie(i.h),l:ie(i.l),s:ie(i.s)})}parseString(e){if(!e.startsWith("hsl"))return;const n=/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(e);return i?Ph({a:i.length>4?xa(i[5]):1,h:parseInt(i[1],10),l:parseInt(i[3],10),s:parseInt(i[2],10)}):void 0}}class Wm{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return i}handleRangeColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return{r:ie(i.r),g:ie(i.g),b:ie(i.b)}}parseString(e){if(!e.startsWith(this.stringPrefix))return;const n=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(e);return i?{a:i.length>4?xa(i[5]):1,b:parseInt(i[3],10),g:parseInt(i[2],10),r:parseInt(i[1],10)}:void 0}}function Vm(){const t=new Wm,e=new Gm;lr(t),lr(e);const n=new $m;return n.init(),n}const Ln=Vm();Yn()||(window.tsParticles=Ln);let wt;const Hm=yn({props:{id:{type:String,required:!0},options:{type:Object},url:{type:String},particlesLoaded:{type:Function},particlesInit:{type:Function}},mounted(){Jr(async()=>{if(!this.id)throw new Error("Prop 'id' is required!");Ln.init(),this.particlesInit&&await this.particlesInit(Ln),wt=await Ln.load({id:this.id,url:this.url,options:this.options}),this.particlesLoaded&&wt&&this.particlesLoaded(wt)})},unmounted(){wt&&(wt.destroy(),wt=void 0)}}),jm=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Ym=["id"];function Xm(t,e,n,i,s,r){return F(),$("div",{id:t.id},null,8,Ym)}const vr=jm(Hm,[["render",Xm]]),Km=t=>{t.component("vue-particles",vr),t.component("Particles",vr)};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function qm(t,e,n){return(e=Jm(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function br(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?br(Object(n),!0).forEach(function(i){qm(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):br(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Qm(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Jm(t){var e=Qm(t,"string");return typeof e=="symbol"?e:e+""}const kr=()=>{};let cs={},Ga={},Wa=null,Va={mark:kr,measure:kr};try{typeof window<"u"&&(cs=window),typeof document<"u"&&(Ga=document),typeof MutationObserver<"u"&&(Wa=MutationObserver),typeof performance<"u"&&(Va=performance)}catch{}const{userAgent:Tr=""}=cs.navigator||{},st=cs,re=Ga,Er=Wa,In=Va;st.document;const Je=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Ha=~Tr.indexOf("MSIE")||~Tr.indexOf("Trident/");var Zm=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ep=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ja={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},tp={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ya=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ve="classic",qn="duotone",np="sharp",ip="sharp-duotone",Xa=[ve,qn,np,ip],sp={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},rp={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ap=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),op={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},lp=["fak","fa-kit","fakd","fa-kit-duotone"],wr={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},cp=["kit"],up={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},fp=["fak","fakd"],dp={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ar={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Pn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hp=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],mp=["fak","fa-kit","fakd","fa-kit-duotone"],pp={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},gp={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},_p={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Li={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},yp=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ni=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...hp,...yp],vp=["solid","regular","light","thin","duotone","brands"],Ka=[1,2,3,4,5,6,7,8,9,10],bp=Ka.concat([11,12,13,14,15,16,17,18,19,20]),kp=[...Object.keys(_p),...vp,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pn.GROUP,Pn.SWAP_OPACITY,Pn.PRIMARY,Pn.SECONDARY].concat(Ka.map(t=>"".concat(t,"x"))).concat(bp.map(t=>"w-".concat(t))),Tp={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const qe="___FONT_AWESOME___",Mi=16,qa="fa",Qa="svg-inline--fa",gt="data-fa-i2svg",Di="data-fa-pseudo-element",Ep="data-fa-pseudo-element-pending",us="data-prefix",fs="data-icon",Sr="fontawesome-i2svg",wp="async",Ap=["HTML","HEAD","STYLE","SCRIPT"],Ja=(()=>{try{return!0}catch{return!1}})();function bn(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[ve]}})}const Za=O({},ja);Za[ve]=O(O(O(O({},{"fa-duotone":"duotone"}),ja[ve]),wr.kit),wr["kit-duotone"]);const Sp=bn(Za),Ri=O({},op);Ri[ve]=O(O(O(O({},{duotone:"fad"}),Ri[ve]),Ar.kit),Ar["kit-duotone"]);const Ir=bn(Ri),Fi=O({},Li);Fi[ve]=O(O({},Fi[ve]),dp.kit);const ds=bn(Fi),zi=O({},gp);zi[ve]=O(O({},zi[ve]),up.kit);bn(zi);const Ip=Zm,eo="fa-layers-text",Pp=ep,Op=O({},sp);bn(Op);const Cp=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pi=tp,xp=[...cp,...kp],an=st.FontAwesomeConfig||{};function Lp(t){var e=re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Np(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}re&&typeof re.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const s=Np(Lp(n));s!=null&&(an[i]=s)});const to={styleDefault:"solid",familyDefault:ve,cssPrefix:qa,replacementClass:Qa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};an.familyPrefix&&(an.cssPrefix=an.familyPrefix);const Rt=O(O({},to),an);Rt.autoReplaceSvg||(Rt.observeMutations=!1);const z={};Object.keys(to).forEach(t=>{Object.defineProperty(z,t,{enumerable:!0,set:function(e){Rt[t]=e,on.forEach(n=>n(z))},get:function(){return Rt[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(t){Rt.cssPrefix=t,on.forEach(e=>e(z))},get:function(){return Rt.cssPrefix}});st.FontAwesomeConfig=z;const on=[];function Mp(t){return on.push(t),()=>{on.splice(on.indexOf(t),1)}}const tt=Mi,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dp(t){if(!t||!Je)return;const e=re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=re.head.childNodes;let i=null;for(let s=n.length-1;s>-1;s--){const r=n[s],a=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=r)}return re.head.insertBefore(e,i),t}const Rp="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gn(){let t=12,e="";for(;t-- >0;)e+=Rp[Math.random()*62|0];return e}function zt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function hs(t){return t.classList?zt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function no(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fp(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(no(t[n]),'" '),"").trim()}function Qn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ms(t){return t.size!==Ue.size||t.x!==Ue.x||t.y!==Ue.y||t.rotate!==Ue.rotate||t.flipX||t.flipY}function zp(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:c}}function Up(t){let{transform:e,width:n=Mi,height:i=Mi,startCentered:s=!1}=t,r="";return s&&Ha?r+="translate(".concat(e.x/tt-n/2,"em, ").concat(e.y/tt-i/2,"em) "):s?r+="translate(calc(-50% + ".concat(e.x/tt,"em), calc(-50% + ").concat(e.y/tt,"em)) "):r+="translate(".concat(e.x/tt,"em, ").concat(e.y/tt,"em) "),r+="scale(".concat(e.size/tt*(e.flipX?-1:1),", ").concat(e.size/tt*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var Bp=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function io(){const t=qa,e=Qa,n=z.cssPrefix,i=z.replacementClass;let s=Bp;if(n!==t||i!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(i))}return s}let Pr=!1;function gi(){z.autoAddCss&&!Pr&&(Dp(io()),Pr=!0)}var $p={mixout(){return{dom:{css:io,insertCss:gi}}},hooks(){return{beforeDOMElementCreation(){gi()},beforeI2svg(){gi()}}}};const Qe=st||{};Qe[qe]||(Qe[qe]={});Qe[qe].styles||(Qe[qe].styles={});Qe[qe].hooks||(Qe[qe].hooks={});Qe[qe].shims||(Qe[qe].shims=[]);var Be=Qe[qe];const so=[],ro=function(){re.removeEventListener("DOMContentLoaded",ro),Un=1,so.map(t=>t())};let Un=!1;Je&&(Un=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),Un||re.addEventListener("DOMContentLoaded",ro));function Gp(t){Je&&(Un?setTimeout(t,0):so.push(t))}function kn(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?no(t):"<".concat(e," ").concat(Fp(n),">").concat(i.map(kn).join(""),"</").concat(e,">")}function Or(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Wp=function(e,n){return function(i,s,r,a){return e.call(n,i,s,r,a)}},_i=function(e,n,i,s){var r=Object.keys(e),a=r.length,o=s!==void 0?Wp(n,s):n,l,c,f;for(i===void 0?(l=1,f=e[r[0]]):(l=0,f=i);l<a;l++)c=r[l],f=o(f,e[c],c,e);return f};function Vp(t){const e=[];let n=0;const i=t.length;for(;n<i;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Ui(t){const e=Vp(t);return e.length===1?e[0].toString(16):null}function Hp(t,e){const n=t.length;let i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function Cr(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function Bi(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,s=Cr(e);typeof Be.hooks.addPack=="function"&&!i?Be.hooks.addPack(t,Cr(e)):Be.styles[t]=O(O({},Be.styles[t]||{}),s),t==="fas"&&Bi("fa",e)}const{styles:_n,shims:jp}=Be,ao=Object.keys(ds),Yp=ao.reduce((t,e)=>(t[e]=Object.keys(ds[e]),t),{});let ps=null,oo={},lo={},co={},uo={},fo={};function Xp(t){return~xp.indexOf(t)}function Kp(t,e){const n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!Xp(s)?s:null}const ho=()=>{const t=i=>_i(_n,(s,r,a)=>(s[a]=_i(r,i,{}),s),{});oo=t((i,s,r)=>(s[3]&&(i[s[3]]=r),s[2]&&s[2].filter(o=>typeof o=="number").forEach(o=>{i[o.toString(16)]=r}),i)),lo=t((i,s,r)=>(i[r]=r,s[2]&&s[2].filter(o=>typeof o=="string").forEach(o=>{i[o]=r}),i)),fo=t((i,s,r)=>{const a=s[2];return i[r]=r,a.forEach(o=>{i[o]=r}),i});const e="far"in _n||z.autoFetchSvg,n=_i(jp,(i,s)=>{const r=s[0];let a=s[1];const o=s[2];return a==="far"&&!e&&(a="fas"),typeof r=="string"&&(i.names[r]={prefix:a,iconName:o}),typeof r=="number"&&(i.unicodes[r.toString(16)]={prefix:a,iconName:o}),i},{names:{},unicodes:{}});co=n.names,uo=n.unicodes,ps=Jn(z.styleDefault,{family:z.familyDefault})};Mp(t=>{ps=Jn(t.styleDefault,{family:z.familyDefault})});ho();function gs(t,e){return(oo[t]||{})[e]}function qp(t,e){return(lo[t]||{})[e]}function ht(t,e){return(fo[t]||{})[e]}function mo(t){return co[t]||{prefix:null,iconName:null}}function Qp(t){const e=uo[t],n=gs("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rt(){return ps}const po=()=>({prefix:null,iconName:null,rest:[]});function Jp(t){let e=ve;const n=ao.reduce((i,s)=>(i[s]="".concat(z.cssPrefix,"-").concat(s),i),{});return Xa.forEach(i=>{(t.includes(n[i])||t.some(s=>Yp[i].includes(s)))&&(e=i)}),e}function Jn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ve}=e,i=Sp[n][t];if(n===qn&&!t)return"fad";const s=Ir[n][t]||Ir[n][i],r=t in Be.styles?t:null;return s||r||null}function Zp(t){let e=[],n=null;return t.forEach(i=>{const s=Kp(z.cssPrefix,i);s?n=s:i&&e.push(i)}),{iconName:n,rest:e}}function xr(t){return t.sort().filter((e,n,i)=>i.indexOf(e)===n)}function Zn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let i=null;const s=Ni.concat(mp),r=xr(t.filter(h=>s.includes(h))),a=xr(t.filter(h=>!Ni.includes(h))),o=r.filter(h=>(i=h,!Ya.includes(h))),[l=null]=o,c=Jp(r),f=O(O({},Zp(a)),{},{prefix:Jn(l,{family:c})});return O(O(O({},f),ig({values:t,family:c,styles:_n,config:z,canonical:f,givenPrefix:i})),eg(n,i,f))}function eg(t,e,n){let{prefix:i,iconName:s}=n;if(t||!i||!s)return{prefix:i,iconName:s};const r=e==="fa"?mo(s):{},a=ht(i,s);return s=r.iconName||a||s,i=r.prefix||i,i==="far"&&!_n.far&&_n.fas&&!z.autoFetchSvg&&(i="fas"),{prefix:i,iconName:s}}const tg=Xa.filter(t=>t!==ve||t!==qn),ng=Object.keys(Li).filter(t=>t!==ve).map(t=>Object.keys(Li[t])).flat();function ig(t){const{values:e,family:n,canonical:i,givenPrefix:s="",styles:r={},config:a={}}=t,o=n===qn,l=e.includes("fa-duotone")||e.includes("fad"),c=a.familyDefault==="duotone",f=i.prefix==="fad"||i.prefix==="fa-duotone";if(!o&&(l||c||f)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&tg.includes(n)&&(Object.keys(r).find(u=>ng.includes(u))||a.autoFetchSvg)){const u=ap.get(n).defaultShortPrefixId;i.prefix=u,i.iconName=ht(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||s==="fa")&&(i.prefix=rt()||"fas"),i}class sg{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(r=>{this.definitions[r]=O(O({},this.definitions[r]||{}),s[r]),Bi(r,s[r]);const a=ds[ve][r];a&&Bi(a,s[r]),ho()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(s=>{const{prefix:r,iconName:a,icon:o}=i[s],l=o[2];e[r]||(e[r]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[r][c]=o)}),e[r][a]=o}),e}}let Lr=[],It={};const xt={},rg=Object.keys(xt);function ag(t,e){let{mixoutsTo:n}=e;return Lr=t,It={},Object.keys(xt).forEach(i=>{rg.indexOf(i)===-1&&delete xt[i]}),Lr.forEach(i=>{const s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(r=>{typeof s[r]=="function"&&(n[r]=s[r]),typeof s[r]=="object"&&Object.keys(s[r]).forEach(a=>{n[r]||(n[r]={}),n[r][a]=s[r][a]})}),i.hooks){const r=i.hooks();Object.keys(r).forEach(a=>{It[a]||(It[a]=[]),It[a].push(r[a])})}i.provides&&i.provides(xt)}),n}function $i(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];return(It[t]||[]).forEach(a=>{e=a.apply(null,[e,...i])}),e}function _t(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(It[t]||[]).forEach(r=>{r.apply(null,n)})}function at(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return xt[t]?xt[t].apply(null,e):void 0}function Gi(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||rt();if(e)return e=ht(n,e)||e,Or(go.definitions,n,e)||Or(Be.styles,n,e)}const go=new sg,og=()=>{z.autoReplaceSvg=!1,z.observeMutations=!1,_t("noAuto")},lg={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Je?(_t("beforeI2svg",t),at("pseudoElements2svg",t),at("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,Gp(()=>{ug({autoReplaceSvgRoot:e}),_t("watch",t)})}},cg={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ht(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Jn(t[0]);return{prefix:n,iconName:ht(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(z.cssPrefix,"-"))>-1||t.match(Ip))){const e=Zn(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||rt(),iconName:ht(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=rt();return{prefix:e,iconName:ht(e,t)||t}}}},Ie={noAuto:og,config:z,dom:lg,parse:cg,library:go,findIconDefinition:Gi,toHtml:kn},ug=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=re}=t;(Object.keys(Be.styles).length>0||z.autoFetchSvg)&&Je&&z.autoReplaceSvg&&Ie.dom.i2svg({node:e})};function ei(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>kn(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Je)return;const n=re.createElement("div");return n.innerHTML=t.html,n.children}}),t}function fg(t){let{children:e,main:n,mask:i,attributes:s,styles:r,transform:a}=t;if(ms(a)&&n.found&&!i.found){const{width:o,height:l}=n,c={x:o/l/2,y:.5};s.style=Qn(O(O({},r),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function dg(t){let{prefix:e,iconName:n,children:i,attributes:s,symbol:r}=t;const a=r===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},s),{},{id:a}),children:i}]}]}function _s(t){const{icons:{main:e,mask:n},prefix:i,iconName:s,transform:r,symbol:a,title:o,maskId:l,titleId:c,extra:f,watchable:h=!1}=t,{width:u,height:_}=n.found?n:e,T=fp.includes(i),k=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(I=>f.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(f.classes).join(" ");let A={children:[],attributes:O(O({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(_)})};const y=T&&!~f.classes.indexOf("fa-fw")?{width:"".concat(u/_*16*.0625,"em")}:{};h&&(A.attributes[gt]=""),o&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||gn())},children:[o]}),delete A.attributes.title);const E=O(O({},A),{},{prefix:i,iconName:s,main:e,mask:n,maskId:l,transform:r,symbol:a,styles:O(O({},y),f.styles)}),{children:g,attributes:v}=n.found&&e.found?at("generateAbstractMask",E)||{children:[],attributes:{}}:at("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=g,E.attributes=v,a?dg(E):fg(E)}function Nr(t){const{content:e,width:n,height:i,transform:s,title:r,extra:a,watchable:o=!1}=t,l=O(O(O({},a.attributes),r?{title:r}:{}),{},{class:a.classes.join(" ")});o&&(l[gt]="");const c=O({},a.styles);ms(s)&&(c.transform=Up({transform:s,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);const f=Qn(c);f.length>0&&(l.style=f);const h=[];return h.push({tag:"span",attributes:l,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function hg(t){const{content:e,title:n,extra:i}=t,s=O(O(O({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=Qn(i.styles);r.length>0&&(s.style=r);const a=[];return a.push({tag:"span",attributes:s,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:yi}=Be;function Wi(t){const e=t[0],n=t[1],[i]=t.slice(4);let s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(pi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(pi.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(pi.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}const mg={found:!1,width:512,height:512};function pg(t,e){!Ja&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Vi(t,e){let n=e;return e==="fa"&&z.styleDefault!==null&&(e=rt()),new Promise((i,s)=>{if(n==="fa"){const r=mo(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&yi[e]&&yi[e][t]){const r=yi[e][t];return i(Wi(r))}pg(t,e),i(O(O({},mg),{},{icon:z.showMissingIcons&&t?at("missingIconAbstract")||{}:{}}))})}const Mr=()=>{},Hi=z.measurePerformance&&In&&In.mark&&In.measure?In:{mark:Mr,measure:Mr},nn='FA "6.7.2"',gg=t=>(Hi.mark("".concat(nn," ").concat(t," begins")),()=>_o(t)),_o=t=>{Hi.mark("".concat(nn," ").concat(t," ends")),Hi.measure("".concat(nn," ").concat(t),"".concat(nn," ").concat(t," begins"),"".concat(nn," ").concat(t," ends"))};var ys={begin:gg,end:_o};const Nn=()=>{};function Dr(t){return typeof(t.getAttribute?t.getAttribute(gt):null)=="string"}function _g(t){const e=t.getAttribute?t.getAttribute(us):null,n=t.getAttribute?t.getAttribute(fs):null;return e&&n}function yg(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function vg(){return z.autoReplaceSvg===!0?Mn.replace:Mn[z.autoReplaceSvg]||Mn.replace}function bg(t){return re.createElementNS("http://www.w3.org/2000/svg",t)}function kg(t){return re.createElement(t)}function yo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?bg:kg}=e;if(typeof t=="string")return re.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){i.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){i.appendChild(yo(r,{ceFn:n}))}),i}function Tg(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Mn={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(yo(n),e)}),e.getAttribute(gt)===null&&z.keepOriginalSource){let n=re.createComment(Tg(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~hs(e).indexOf(z.replacementClass))return Mn.replace(t);const i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((a,o)=>(o===z.replacementClass||o.match(i)?a.toSvg.push(o):a.toNode.push(o),a),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const s=n.map(r=>kn(r)).join(`
`);e.setAttribute(gt,""),e.innerHTML=s}};function Rr(t){t()}function vo(t,e){const n=typeof e=="function"?e:Nn;if(t.length===0)n();else{let i=Rr;z.mutateApproach===wp&&(i=st.requestAnimationFrame||Rr),i(()=>{const s=vg(),r=ys.begin("mutate");t.map(s),r(),n()})}}let vs=!1;function bo(){vs=!0}function ji(){vs=!1}let Bn=null;function Fr(t){if(!Er||!z.observeMutations)return;const{treeCallback:e=Nn,nodeCallback:n=Nn,pseudoElementsCallback:i=Nn,observeMutationsRoot:s=re}=t;Bn=new Er(r=>{if(vs)return;const a=rt();zt(r).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Dr(o.addedNodes[0])&&(z.searchPseudoElements&&i(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&z.searchPseudoElements&&i(o.target.parentNode),o.type==="attributes"&&Dr(o.target)&&~Cp.indexOf(o.attributeName))if(o.attributeName==="class"&&_g(o.target)){const{prefix:l,iconName:c}=Zn(hs(o.target));o.target.setAttribute(us,l||a),c&&o.target.setAttribute(fs,c)}else yg(o.target)&&n(o.target)})}),Je&&Bn.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Eg(){Bn&&Bn.disconnect()}function wg(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,s)=>{const r=s.split(":"),a=r[0],o=r.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),n}function Ag(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let s=Zn(hs(t));return s.prefix||(s.prefix=rt()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=qp(s.prefix,t.innerText)||gs(s.prefix,Ui(t.innerText))),!s.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function Sg(t){const e=zt(t.attributes).reduce((s,r)=>(s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(i||gn()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ig(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:s}=Ag(t),r=Sg(t),a=$i("parseNodeAttributes",{},t);let o=e.styleParser?wg(t):[];return O({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:r}},a)}const{styles:Pg}=Be;function ko(t){const e=z.autoReplaceSvg==="nest"?zr(t,{styleParser:!1}):zr(t);return~e.extra.classes.indexOf(eo)?at("generateLayersText",t,e):at("generateSvgReplacementMutation",t,e)}function Og(){return[...lp,...Ni]}function Ur(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Je)return Promise.resolve();const n=re.documentElement.classList,i=f=>n.add("".concat(Sr,"-").concat(f)),s=f=>n.remove("".concat(Sr,"-").concat(f)),r=z.autoFetchSvg?Og():Ya.concat(Object.keys(Pg));r.includes("fa")||r.push("fa");const a=[".".concat(eo,":not([").concat(gt,"])")].concat(r.map(f=>".".concat(f,":not([").concat(gt,"])"))).join(", ");if(a.length===0)return Promise.resolve();let o=[];try{o=zt(t.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),s("complete");else return Promise.resolve();const l=ys.begin("onTree"),c=o.reduce((f,h)=>{try{const u=ko(h);u&&f.push(u)}catch(u){Ja||u.name==="MissingIcon"&&console.error(u)}return f},[]);return new Promise((f,h)=>{Promise.all(c).then(u=>{vo(u,()=>{i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),l(),f()})}).catch(u=>{l(),h(u)})})}function Cg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ko(t).then(n=>{n&&vo([n],e)})}function xg(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Gi(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Gi(s||{})),t(i,O(O({},n),{},{mask:s}))}}const Lg=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ue,symbol:i=!1,mask:s=null,maskId:r=null,title:a=null,titleId:o=null,classes:l=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:h,iconName:u,icon:_}=t;return ei(O({type:"icon"},t),()=>(_t("beforeDOMElementCreation",{iconDefinition:t,params:e}),z.autoA11y&&(a?c["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(o||gn()):(c["aria-hidden"]="true",c.focusable="false")),_s({icons:{main:Wi(_),mask:s?Wi(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:u,transform:O(O({},Ue),n),symbol:i,title:a,maskId:r,titleId:o,extra:{attributes:c,styles:f,classes:l}})))};var Ng={mixout(){return{icon:xg(Lg)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ur,t.nodeCallback=Cg,t}}},provides(t){t.i2svg=function(e){const{node:n=re,callback:i=()=>{}}=e;return Ur(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:s,titleId:r,prefix:a,transform:o,symbol:l,mask:c,maskId:f,extra:h}=n;return new Promise((u,_)=>{Promise.all([Vi(i,a),c.iconName?Vi(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(T=>{let[k,A]=T;u([e,_s({icons:{main:k,mask:A},prefix:a,iconName:i,transform:o,symbol:l,maskId:f,title:s,titleId:r,extra:h,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:s,transform:r,styles:a}=e;const o=Qn(a);o.length>0&&(i.style=o);let l;return ms(r)&&(l=at("generateAbstractTransformGrouping",{main:s,transform:r,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:i}}}},Mg={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ei({type:"layer"},()=>{_t("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(s=>{Array.isArray(s)?s.map(r=>{i=i.concat(r.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},Dg={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:s={},styles:r={}}=e;return ei({type:"counter",content:t},()=>(_t("beforeDOMElementCreation",{content:t,params:e}),hg({content:t.toString(),title:n,extra:{attributes:s,styles:r,classes:["".concat(z.cssPrefix,"-layers-counter"),...i]}})))}}}},Rg={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ue,title:i=null,classes:s=[],attributes:r={},styles:a={}}=e;return ei({type:"text",content:t},()=>(_t("beforeDOMElementCreation",{content:t,params:e}),Nr({content:t,transform:O(O({},Ue),n),title:i,extra:{attributes:r,styles:a,classes:["".concat(z.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:s,extra:r}=n;let a=null,o=null;if(Ha){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();a=c.width/l,o=c.height/l}return z.autoA11y&&!i&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Nr({content:e.innerHTML,width:a,height:o,transform:s,title:i,extra:r,watchable:!0})])}}};const Fg=new RegExp('"',"ug"),Br=[1105920,1112319],$r=O(O(O(O({},{FontAwesome:{normal:"fas",400:"fas"}}),rp),Tp),pp),Yi=Object.keys($r).reduce((t,e)=>(t[e.toLowerCase()]=$r[e],t),{}),zg=Object.keys(Yi).reduce((t,e)=>{const n=Yi[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ug(t){const e=t.replace(Fg,""),n=Hp(e,0),i=n>=Br[0]&&n<=Br[1],s=e.length===2?e[0]===e[1]:!1;return{value:Ui(s?e[0]:e),isSecondary:i||s}}function Bg(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),s=isNaN(i)?"normal":i;return(Yi[n]||{})[s]||zg[n]}function Gr(t,e){const n="".concat(Ep).concat(e.replace(":","-"));return new Promise((i,s)=>{if(t.getAttribute(n)!==null)return i();const a=zt(t.children).filter(u=>u.getAttribute(Di)===e)[0],o=st.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),c=l.match(Pp),f=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(a&&!c)return t.removeChild(a),i();if(c&&h!=="none"&&h!==""){const u=o.getPropertyValue("content");let _=Bg(l,f);const{value:T,isSecondary:k}=Ug(u),A=c[0].startsWith("FontAwesome");let y=gs(_,T),E=y;if(A){const g=Qp(T);g.iconName&&g.prefix&&(y=g.iconName,_=g.prefix)}if(y&&!k&&(!a||a.getAttribute(us)!==_||a.getAttribute(fs)!==E)){t.setAttribute(n,E),a&&t.removeChild(a);const g=Ig(),{extra:v}=g;v.attributes[Di]=e,Vi(y,_).then(I=>{const w=_s(O(O({},g),{},{icons:{main:I,mask:po()},prefix:_,iconName:E,extra:v,watchable:!0})),C=re.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(C,t.firstChild):t.appendChild(C),C.outerHTML=w.map(M=>kn(M)).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function $g(t){return Promise.all([Gr(t,"::before"),Gr(t,"::after")])}function Gg(t){return t.parentNode!==document.head&&!~Ap.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Di)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Wr(t){if(Je)return new Promise((e,n)=>{const i=zt(t.querySelectorAll("*")).filter(Gg).map($g),s=ys.begin("searchPseudoElements");bo(),Promise.all(i).then(()=>{s(),ji(),e()}).catch(()=>{s(),ji(),n()})})}var Wg={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Wr,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=re}=e;z.searchPseudoElements&&Wr(n)}}};let Vr=!1;var Vg={mixout(){return{dom:{unwatch(){bo(),Vr=!0}}}},hooks(){return{bootstrap(){Fr($i("mutationObserverCallbacks",{}))},noAuto(){Eg()},watch(t){const{observeMutationsRoot:e}=t;Vr?ji():Fr($i("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Hr=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const s=i.toLowerCase().split("-"),r=s[0];let a=s.slice(1).join("-");if(r&&a==="h")return n.flipX=!0,n;if(r&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(r){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},e)};var Hg={mixout(){return{parse:{transform:t=>Hr(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Hr(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:s,iconWidth:r}=e;const a={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(o," ").concat(l," ").concat(c)},h={transform:"translate(".concat(r/2*-1," -256)")},u={outer:a,inner:f,path:h};return{tag:"g",attributes:O({},u.outer),children:[{tag:"g",attributes:O({},u.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:O(O({},n.icon.attributes),u.path)}]}]}}}};const vi={x:0,y:0,width:"100%",height:"100%"};function jr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jg(t){return t.tag==="g"?t.children:[t]}var Yg={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?Zn(n.split(" ").map(s=>s.trim())):po();return i.prefix||(i.prefix=rt()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:s,mask:r,maskId:a,transform:o}=e;const{width:l,icon:c}=s,{width:f,icon:h}=r,u=zp({transform:o,containerWidth:f,iconWidth:l}),_={tag:"rect",attributes:O(O({},vi),{},{fill:"white"})},T=c.children?{children:c.children.map(jr)}:{},k={tag:"g",attributes:O({},u.inner),children:[jr(O({tag:c.tag,attributes:O(O({},c.attributes),u.path)},T))]},A={tag:"g",attributes:O({},u.outer),children:[k]},y="mask-".concat(a||gn()),E="clip-".concat(a||gn()),g={tag:"mask",attributes:O(O({},vi),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,A]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:jg(h)},g]};return n.push(v,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(y,")")},vi)}),{children:n,attributes:i}}}},Xg={provides(t){let e=!1;st.matchMedia&&(e=st.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=O(O({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||a.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(a),n.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:O(O({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Kg={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},qg=[$p,Ng,Mg,Dg,Rg,Wg,Vg,Hg,Yg,Xg,Kg];ag(qg,{mixoutsTo:Ie});Ie.noAuto;Ie.config;const Qg=Ie.library;Ie.dom;const Xi=Ie.parse;Ie.findIconDefinition;Ie.toHtml;const Jg=Ie.icon;Ie.layer;Ie.text;Ie.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Zg={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},e_=Zg,t_={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},n_=t_,i_={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},s_={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},r_={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},a_={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},o_=a_;function Yr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Xe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yr(Object(n),!0).forEach(function(i){Te(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yr(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function l_(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function c_(t){var e=l_(t,"string");return typeof e=="symbol"?e:e+""}function $n(t){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$n(t)}function Te(t,e,n){return e=c_(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u_(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function f_(t,e){if(t==null)return{};var n=u_(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var d_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},To={exports:{}};(function(t){(function(e){var n=function(y,E,g){if(!c(E)||h(E)||u(E)||_(E)||l(E))return E;var v,I=0,w=0;if(f(E))for(v=[],w=E.length;I<w;I++)v.push(n(y,E[I],g));else{v={};for(var C in E)Object.prototype.hasOwnProperty.call(E,C)&&(v[y(C,g)]=n(y,E[C],g))}return v},i=function(y,E){E=E||{};var g=E.separator||"_",v=E.split||/(?=[A-Z])/;return y.split(v).join(g)},s=function(y){return T(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,g){return g?g.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},r=function(y){var E=s(y);return E.substr(0,1).toUpperCase()+E.substr(1)},a=function(y,E){return i(y,E).toLowerCase()},o=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},f=function(y){return o.call(y)=="[object Array]"},h=function(y){return o.call(y)=="[object Date]"},u=function(y){return o.call(y)=="[object RegExp]"},_=function(y){return o.call(y)=="[object Boolean]"},T=function(y){return y=y-0,y===y},k=function(y,E){var g=E&&"process"in E?E.process:E;return typeof g!="function"?y:function(v,I){return g(v,y,I)}},A={camelize:s,decamelize:a,pascalize:r,depascalize:a,camelizeKeys:function(y,E){return n(k(s,E),y)},decamelizeKeys:function(y,E){return n(k(a,E),y,E)},pascalizeKeys:function(y,E){return n(k(r,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=A:e.humps=A})(d_)})(To);var h_=To.exports,m_=["class","style"];function p_(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=h_.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function g_(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Eo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return Eo(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.class=g_(f);break;case"style":l.style=p_(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,a=r===void 0?{}:r,o=f_(n,m_);return Ki(t.tag,Xe(Xe(Xe({},e),{},{class:s.class,style:Xe(Xe({},s.style),a)},s.attrs),o),i)}var wo=!1;try{wo=!0}catch{}function __(){if(!wo&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function bi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Te({},t,e):{}}function y_(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Te(Te(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Xr(t){if(t&&$n(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xi.icon)return Xi.icon(t);if(t===null)return null;if($n(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var v_=yn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=X(function(){return Xr(e.icon)}),r=X(function(){return bi("classes",y_(e))}),a=X(function(){return bi("transform",typeof e.transform=="string"?Xi.transform(e.transform):e.transform)}),o=X(function(){return bi("mask",Xr(e.mask))}),l=X(function(){return Jg(s.value,Xe(Xe(Xe(Xe({},r.value),a.value),o.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});cn(l,function(f){if(!f)return __("Could not find one or more icon(s)",s.value,o.value)},{immediate:!0});var c=X(function(){return l.value?Eo(l.value.abstract[0],{},i):null});return function(){return c.value}}});const bs=document.createElement("meta");bs.name="color-scheme";bs.content="dark";document.head.appendChild(bs);const Tn=zo(uf);Qg.add(i_,n_,r_,o_,e_,s_);Tn.component("font-awesome-icon",v_);Tn.use(Km,{init:async t=>{console.log(" 开始加载粒子引擎...");try{console.time("粒子加载耗时"),await loadFull(t),console.log(" 插件加载完成:",t.plugins.map(e=>e.name)),await t.init(),console.log(" 引擎初始化完成"),t.start(),console.timeEnd("粒子加载耗时"),console.log(" 粒子系统运行状态:",t.dom().length>0?"活跃":"未激活")}catch(e){throw console.error(" 初始化错误:",e),e}}});Tn.use(Oa);Tn.use(Pa);Tn.mount("#app");window.addEventListener("storage",t=>{t.key});export{lf as P,we as _,ss as a,Ce as u};
