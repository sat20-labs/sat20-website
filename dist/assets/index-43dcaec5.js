import{d as yn,h as Ki,g as ln,e as So,i as Io,o as vn,a as qi,s as Kr,r as Ee,c as H,b as Po,w as cn,F as fe,f as Oo,j as Q,T as Co,u as xo,k as qr,l as Qi,m as z,n as $,p,q as ce,t as be,v as le,x as F,y as q,z as me,A as ti,B as Ge,C as Ts,D as Qr,E as Lo,G as No,H as un,I as Jr,J as Mo,K as Zt,L as ni,M as Do,N as Ro,O as Fo,P as zo}from"./vendor-570a9e02.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/*!
  * shared v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Dn=typeof window<"u",at=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Uo=(t,e,n)=>Bo({l:t,k:e,s:n}),Bo=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),oe=t=>typeof t=="number"&&isFinite(t),$o=t=>ea(t)==="[object Date]",nt=t=>ea(t)==="[object RegExp]",Gn=t=>G(t)&&Object.keys(t).length===0,pe=Object.assign,Go=Object.create,J=(t=null)=>Go(t);let Es;const je=()=>Es||(Es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:J());function ws(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Wo=Object.prototype.hasOwnProperty;function Ne(t,e){return Wo.call(t,e)}const ne=Array.isArray,ee=t=>typeof t=="function",M=t=>typeof t=="string",V=t=>typeof t=="boolean",X=t=>t!==null&&typeof t=="object",Vo=t=>X(t)&&ee(t.then)&&ee(t.catch),Zr=Object.prototype.toString,ea=t=>Zr.call(t),G=t=>{if(!X(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},Ho=t=>t==null?"":ne(t)||G(t)&&t.toString===Zr?JSON.stringify(t,null,2):String(t);function jo(t,e=""){return t.reduce((n,i,s)=>s===0?n+i:n+e+i,"")}function Wn(t){let e=t;return()=>++e}function Yo(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Sn=t=>!X(t)||ne(t);function Cn(t,e){if(Sn(t)||Sn(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:s}=n.pop();Object.keys(i).forEach(r=>{r!=="__proto__"&&(X(i[r])&&!X(s[r])&&(s[r]=Array.isArray(i[r])?[]:J()),Sn(s[r])||Sn(i[r])?s[r]=i[r]:n.push({src:i[r],des:s[r]}))})}}/*!
  * message-compiler v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function Xo(t,e,n){return{line:t,column:e,offset:n}}function Rn(t,e,n){const i={start:t,end:e};return n!=null&&(i.source=n),i}const Ko=/\{([0-9a-zA-Z]+)\}/g;function ta(t,...e){return e.length===1&&qo(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(Ko,(n,i)=>e.hasOwnProperty(i)?e[i]:"")}const na=Object.assign,As=t=>typeof t=="string",qo=t=>t!==null&&typeof t=="object";function ia(t,e=""){return t.reduce((n,i,s)=>s===0?n+i:n+e+i,"")}const Ji={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},Qo={[Ji.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function Jo(t,e,...n){const i=ta(Qo[t]||"",...n||[]),s={message:String(i),code:t};return e&&(s.location=e),s}const B={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},Zo={[B.EXPECTED_TOKEN]:"Expected token: '{0}'",[B.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[B.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[B.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[B.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[B.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[B.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[B.EMPTY_PLACEHOLDER]:"Empty placeholder",[B.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[B.INVALID_LINKED_FORMAT]:"Invalid linked format",[B.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[B.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[B.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[B.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[B.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[B.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Rt(t,e,n={}){const{domain:i,messages:s,args:r}=n,a=ta((s||Zo)[t]||"",...r||[]),o=new SyntaxError(String(a));return o.code=t,e&&(o.location=e),o.domain=i,o}function el(t){throw t}const Ve=" ",tl="\r",ve=`
`,nl=String.fromCharCode(8232),il=String.fromCharCode(8233);function sl(t){const e=t;let n=0,i=1,s=1,r=0;const a=I=>e[I]===tl&&e[I+1]===ve,o=I=>e[I]===ve,l=I=>e[I]===il,c=I=>e[I]===nl,f=I=>a(I)||o(I)||l(I)||c(I),h=()=>n,u=()=>i,_=()=>s,k=()=>r,T=I=>a(I)||l(I)||c(I)?ve:e[I],A=()=>T(n),y=()=>T(n+r);function E(){return r=0,f(n)&&(i++,s=0),a(n)&&n++,n++,s++,e[n]}function g(){return a(n+r)&&r++,r++,e[n+r]}function v(){n=0,i=1,s=1,r=0}function P(I=0){r=I}function w(){const I=n+r;for(;I!==n;)E();r=0}return{index:h,line:u,column:_,peekOffset:k,charAt:T,currentChar:A,currentPeek:y,next:E,peek:g,reset:v,resetPeek:P,skipToPeek:w}}const Ze=void 0,rl=".",Ss="'",al="tokenizer";function ol(t,e={}){const n=e.location!==!1,i=sl(t),s=()=>i.index(),r=()=>Xo(i.line(),i.column(),i.index()),a=r(),o=s(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:f}=e;function h(d,m,S,...U){const se=c();if(m.column+=S,m.offset+=S,f){const W=n?Rn(se.startLoc,m):null,b=Rt(d,W,{domain:al,args:U});f(b)}}function u(d,m,S){d.endLoc=r(),d.currentType=m;const U={type:m};return n&&(U.loc=Rn(d.startLoc,d.endLoc)),S!=null&&(U.value=S),U}const _=d=>u(d,14);function k(d,m){return d.currentChar()===m?(d.next(),m):(h(B.EXPECTED_TOKEN,r(),0,m),"")}function T(d){let m="";for(;d.currentPeek()===Ve||d.currentPeek()===ve;)m+=d.currentPeek(),d.peek();return m}function A(d){const m=T(d);return d.skipToPeek(),m}function y(d){if(d===Ze)return!1;const m=d.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m===95}function E(d){if(d===Ze)return!1;const m=d.charCodeAt(0);return m>=48&&m<=57}function g(d,m){const{currentType:S}=m;if(S!==2)return!1;T(d);const U=y(d.currentPeek());return d.resetPeek(),U}function v(d,m){const{currentType:S}=m;if(S!==2)return!1;T(d);const U=d.currentPeek()==="-"?d.peek():d.currentPeek(),se=E(U);return d.resetPeek(),se}function P(d,m){const{currentType:S}=m;if(S!==2)return!1;T(d);const U=d.currentPeek()===Ss;return d.resetPeek(),U}function w(d,m){const{currentType:S}=m;if(S!==8)return!1;T(d);const U=d.currentPeek()===".";return d.resetPeek(),U}function I(d,m){const{currentType:S}=m;if(S!==9)return!1;T(d);const U=y(d.currentPeek());return d.resetPeek(),U}function L(d,m){const{currentType:S}=m;if(!(S===8||S===12))return!1;T(d);const U=d.currentPeek()===":";return d.resetPeek(),U}function x(d,m){const{currentType:S}=m;if(S!==10)return!1;const U=()=>{const W=d.currentPeek();return W==="{"?y(d.peek()):W==="@"||W==="%"||W==="|"||W===":"||W==="."||W===Ve||!W?!1:W===ve?(d.peek(),U()):j(d,!1)},se=U();return d.resetPeek(),se}function D(d){T(d);const m=d.currentPeek()==="|";return d.resetPeek(),m}function he(d){const m=T(d),S=d.currentPeek()==="%"&&d.peek()==="{";return d.resetPeek(),{isModulo:S,hasSpace:m.length>0}}function j(d,m=!0){const S=(se=!1,W="",b=!1)=>{const O=d.currentPeek();return O==="{"?W==="%"?!1:se:O==="@"||!O?W==="%"?!0:se:O==="%"?(d.peek(),S(se,"%",!0)):O==="|"?W==="%"||b?!0:!(W===Ve||W===ve):O===Ve?(d.peek(),S(!0,Ve,b)):O===ve?(d.peek(),S(!0,ve,b)):!0},U=S();return m&&d.resetPeek(),U}function ge(d,m){const S=d.currentChar();return S===Ze?Ze:m(S)?(d.next(),S):null}function zt(d){const m=d.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36}function Ut(d){return ge(d,zt)}function Re(d){const m=d.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36||m===45}function Bt(d){return ge(d,Re)}function $t(d){const m=d.charCodeAt(0);return m>=48&&m<=57}function Gt(d){return ge(d,$t)}function Wt(d){const m=d.charCodeAt(0);return m>=48&&m<=57||m>=65&&m<=70||m>=97&&m<=102}function xe(d){return ge(d,Wt)}function ct(d){let m="",S="";for(;m=Gt(d);)S+=m;return S}function Vt(d){A(d);const m=d.currentChar();return m!=="%"&&h(B.EXPECTED_TOKEN,r(),0,m),d.next(),"%"}function _t(d){let m="";for(;;){const S=d.currentChar();if(S==="{"||S==="}"||S==="@"||S==="|"||!S)break;if(S==="%")if(j(d))m+=S,d.next();else break;else if(S===Ve||S===ve)if(j(d))m+=S,d.next();else{if(D(d))break;m+=S,d.next()}else m+=S,d.next()}return m}function Ht(d){A(d);let m="",S="";for(;m=Bt(d);)S+=m;return d.currentChar()===Ze&&h(B.UNTERMINATED_CLOSING_BRACE,r(),0),S}function jt(d){A(d);let m="";return d.currentChar()==="-"?(d.next(),m+=`-${ct(d)}`):m+=ct(d),d.currentChar()===Ze&&h(B.UNTERMINATED_CLOSING_BRACE,r(),0),m}function wn(d){return d!==Ss&&d!==ve}function Yt(d){A(d),k(d,"'");let m="",S="";for(;m=ge(d,wn);)m==="\\"?S+=Xt(d):S+=m;const U=d.currentChar();return U===ve||U===Ze?(h(B.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,r(),0),U===ve&&(d.next(),k(d,"'")),S):(k(d,"'"),S)}function Xt(d){const m=d.currentChar();switch(m){case"\\":case"'":return d.next(),`\\${m}`;case"u":return yt(d,m,4);case"U":return yt(d,m,6);default:return h(B.UNKNOWN_ESCAPE_SEQUENCE,r(),0,m),""}}function yt(d,m,S){k(d,m);let U="";for(let se=0;se<S;se++){const W=xe(d);if(!W){h(B.INVALID_UNICODE_ESCAPE_SEQUENCE,r(),0,`\\${m}${U}${d.currentChar()}`);break}U+=W}return`\\${m}${U}`}function Kt(d){return d!=="{"&&d!=="}"&&d!==Ve&&d!==ve}function qt(d){A(d);let m="",S="";for(;m=ge(d,Kt);)S+=m;return S}function Qt(d){let m="",S="";for(;m=Ut(d);)S+=m;return S}function N(d){const m=S=>{const U=d.currentChar();return U==="{"||U==="%"||U==="@"||U==="|"||U==="("||U===")"||!U||U===Ve?S:(S+=U,d.next(),m(S))};return m("")}function K(d){A(d);const m=k(d,"|");return A(d),m}function vt(d,m){let S=null;switch(d.currentChar()){case"{":return m.braceNest>=1&&h(B.NOT_ALLOW_NEST_PLACEHOLDER,r(),0),d.next(),S=u(m,2,"{"),A(d),m.braceNest++,S;case"}":return m.braceNest>0&&m.currentType===2&&h(B.EMPTY_PLACEHOLDER,r(),0),d.next(),S=u(m,3,"}"),m.braceNest--,m.braceNest>0&&A(d),m.inLinked&&m.braceNest===0&&(m.inLinked=!1),S;case"@":return m.braceNest>0&&h(B.UNTERMINATED_CLOSING_BRACE,r(),0),S=bt(d,m)||_(m),m.braceNest=0,S;default:{let se=!0,W=!0,b=!0;if(D(d))return m.braceNest>0&&h(B.UNTERMINATED_CLOSING_BRACE,r(),0),S=u(m,1,K(d)),m.braceNest=0,m.inLinked=!1,S;if(m.braceNest>0&&(m.currentType===5||m.currentType===6||m.currentType===7))return h(B.UNTERMINATED_CLOSING_BRACE,r(),0),m.braceNest=0,Jt(d,m);if(se=g(d,m))return S=u(m,5,Ht(d)),A(d),S;if(W=v(d,m))return S=u(m,6,jt(d)),A(d),S;if(b=P(d,m))return S=u(m,7,Yt(d)),A(d),S;if(!se&&!W&&!b)return S=u(m,13,qt(d)),h(B.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,S.value),A(d),S;break}}return S}function bt(d,m){const{currentType:S}=m;let U=null;const se=d.currentChar();switch((S===8||S===9||S===12||S===10)&&(se===ve||se===Ve)&&h(B.INVALID_LINKED_FORMAT,r(),0),se){case"@":return d.next(),U=u(m,8,"@"),m.inLinked=!0,U;case".":return A(d),d.next(),u(m,9,".");case":":return A(d),d.next(),u(m,10,":");default:return D(d)?(U=u(m,1,K(d)),m.braceNest=0,m.inLinked=!1,U):w(d,m)||L(d,m)?(A(d),bt(d,m)):I(d,m)?(A(d),u(m,12,Qt(d))):x(d,m)?(A(d),se==="{"?vt(d,m)||U:u(m,11,N(d))):(S===8&&h(B.INVALID_LINKED_FORMAT,r(),0),m.braceNest=0,m.inLinked=!1,Jt(d,m))}}function Jt(d,m){let S={type:14};if(m.braceNest>0)return vt(d,m)||_(m);if(m.inLinked)return bt(d,m)||_(m);switch(d.currentChar()){case"{":return vt(d,m)||_(m);case"}":return h(B.UNBALANCED_CLOSING_BRACE,r(),0),d.next(),u(m,3,"}");case"@":return bt(d,m)||_(m);default:{if(D(d))return S=u(m,1,K(d)),m.braceNest=0,m.inLinked=!1,S;const{isModulo:se,hasSpace:W}=he(d);if(se)return W?u(m,0,_t(d)):u(m,4,Vt(d));if(j(d))return u(m,0,_t(d));break}}return S}function ei(){const{currentType:d,offset:m,startLoc:S,endLoc:U}=l;return l.lastType=d,l.lastOffset=m,l.lastStartLoc=S,l.lastEndLoc=U,l.offset=s(),l.startLoc=r(),i.currentChar()===Ze?u(l,14):Jt(i,l)}return{nextToken:ei,currentOffset:s,currentPosition:r,context:c}}const ll="parser",cl=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function ul(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function fl(t={}){const e=t.location!==!1,{onError:n,onWarn:i}=t;function s(g,v,P,w,...I){const L=g.currentPosition();if(L.offset+=w,L.column+=w,n){const x=e?Rn(P,L):null,D=Rt(v,x,{domain:ll,args:I});n(D)}}function r(g,v,P,w,...I){const L=g.currentPosition();if(L.offset+=w,L.column+=w,i){const x=e?Rn(P,L):null;i(Jo(v,x,I))}}function a(g,v,P){const w={type:g};return e&&(w.start=v,w.end=v,w.loc={start:P,end:P}),w}function o(g,v,P,w){w&&(g.type=w),e&&(g.end=v,g.loc&&(g.loc.end=P))}function l(g,v){const P=g.context(),w=a(3,P.offset,P.startLoc);return w.value=v,o(w,g.currentOffset(),g.currentPosition()),w}function c(g,v){const P=g.context(),{lastOffset:w,lastStartLoc:I}=P,L=a(5,w,I);return L.index=parseInt(v,10),g.nextToken(),o(L,g.currentOffset(),g.currentPosition()),L}function f(g,v,P){const w=g.context(),{lastOffset:I,lastStartLoc:L}=w,x=a(4,I,L);return x.key=v,P===!0&&(x.modulo=!0),g.nextToken(),o(x,g.currentOffset(),g.currentPosition()),x}function h(g,v){const P=g.context(),{lastOffset:w,lastStartLoc:I}=P,L=a(9,w,I);return L.value=v.replace(cl,ul),g.nextToken(),o(L,g.currentOffset(),g.currentPosition()),L}function u(g){const v=g.nextToken(),P=g.context(),{lastOffset:w,lastStartLoc:I}=P,L=a(8,w,I);return v.type!==12?(s(g,B.UNEXPECTED_EMPTY_LINKED_MODIFIER,P.lastStartLoc,0),L.value="",o(L,w,I),{nextConsumeToken:v,node:L}):(v.value==null&&s(g,B.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,Le(v)),L.value=v.value||"",o(L,g.currentOffset(),g.currentPosition()),{node:L})}function _(g,v){const P=g.context(),w=a(7,P.offset,P.startLoc);return w.value=v,o(w,g.currentOffset(),g.currentPosition()),w}function k(g){const v=g.context(),P=a(6,v.offset,v.startLoc);let w=g.nextToken();if(w.type===9){const I=u(g);P.modifier=I.node,w=I.nextConsumeToken||g.nextToken()}switch(w.type!==10&&s(g,B.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Le(w)),w=g.nextToken(),w.type===2&&(w=g.nextToken()),w.type){case 11:w.value==null&&s(g,B.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Le(w)),P.key=_(g,w.value||"");break;case 5:w.value==null&&s(g,B.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Le(w)),P.key=f(g,w.value||"");break;case 6:w.value==null&&s(g,B.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Le(w)),P.key=c(g,w.value||"");break;case 7:w.value==null&&s(g,B.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Le(w)),P.key=h(g,w.value||"");break;default:{s(g,B.UNEXPECTED_EMPTY_LINKED_KEY,v.lastStartLoc,0);const I=g.context(),L=a(7,I.offset,I.startLoc);return L.value="",o(L,I.offset,I.startLoc),P.key=L,o(P,I.offset,I.startLoc),{nextConsumeToken:w,node:P}}}return o(P,g.currentOffset(),g.currentPosition()),{node:P}}function T(g){const v=g.context(),P=v.currentType===1?g.currentOffset():v.offset,w=v.currentType===1?v.endLoc:v.startLoc,I=a(2,P,w);I.items=[];let L=null,x=null;do{const j=L||g.nextToken();switch(L=null,j.type){case 0:j.value==null&&s(g,B.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Le(j)),I.items.push(l(g,j.value||""));break;case 6:j.value==null&&s(g,B.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Le(j)),I.items.push(c(g,j.value||""));break;case 4:x=!0;break;case 5:j.value==null&&s(g,B.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Le(j)),I.items.push(f(g,j.value||"",!!x)),x&&(r(g,Ji.USE_MODULO_SYNTAX,v.lastStartLoc,0,Le(j)),x=null);break;case 7:j.value==null&&s(g,B.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Le(j)),I.items.push(h(g,j.value||""));break;case 8:{const ge=k(g);I.items.push(ge.node),L=ge.nextConsumeToken||null;break}}}while(v.currentType!==14&&v.currentType!==1);const D=v.currentType===1?v.lastOffset:g.currentOffset(),he=v.currentType===1?v.lastEndLoc:g.currentPosition();return o(I,D,he),I}function A(g,v,P,w){const I=g.context();let L=w.items.length===0;const x=a(1,v,P);x.cases=[],x.cases.push(w);do{const D=T(g);L||(L=D.items.length===0),x.cases.push(D)}while(I.currentType!==14);return L&&s(g,B.MUST_HAVE_MESSAGES_IN_PLURAL,P,0),o(x,g.currentOffset(),g.currentPosition()),x}function y(g){const v=g.context(),{offset:P,startLoc:w}=v,I=T(g);return v.currentType===14?I:A(g,P,w,I)}function E(g){const v=ol(g,na({},t)),P=v.context(),w=a(0,P.offset,P.startLoc);return e&&w.loc&&(w.loc.source=g),w.body=y(v),t.onCacheKey&&(w.cacheKey=t.onCacheKey(g)),P.currentType!==14&&s(v,B.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,g[P.offset]||""),o(w,v.currentOffset(),v.currentPosition()),w}return{parse:E}}function Le(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function dl(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:r=>(n.helpers.add(r),r)}}function Is(t,e){for(let n=0;n<t.length;n++)Zi(t[n],e)}function Zi(t,e){switch(t.type){case 1:Is(t.cases,e),e.helper("plural");break;case 2:Is(t.items,e);break;case 6:{Zi(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function hl(t,e={}){const n=dl(t);n.helper("normalize"),t.body&&Zi(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function ml(t){const e=t.body;return e.type===2?Ps(e):e.cases.forEach(n=>Ps(n)),t}function Ps(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=ia(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}const pl="minifier";function wt(t){switch(t.t=t.type,t.type){case 0:{const e=t;wt(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)wt(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)wt(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;wt(e.key),e.k=e.key,delete e.key,e.modifier&&(wt(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw Rt(B.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:pl,args:[t.type]})}delete t.type}const gl="parser";function _l(t,e){const{sourceMap:n,filename:i,breakLineCode:s,needIndent:r}=e,a=e.location!==!1,o={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:s,needIndent:r,indentLevel:0};a&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(A,y){o.code+=A}function f(A,y=!0){const E=y?s:"";c(r?E+"  ".repeat(A):E)}function h(A=!0){const y=++o.indentLevel;A&&f(y)}function u(A=!0){const y=--o.indentLevel;A&&f(y)}function _(){f(o.indentLevel)}return{context:l,push:c,indent:h,deindent:u,newline:_,helper:A=>`_${A}`,needIndent:()=>o.needIndent}}function yl(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),xt(t,e.key),e.modifier?(t.push(", "),xt(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function vl(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const s=e.items.length;for(let r=0;r<s&&(xt(t,e.items[r]),r!==s-1);r++)t.push(", ");t.deindent(i()),t.push("])")}function bl(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const s=e.cases.length;for(let r=0;r<s&&(xt(t,e.cases[r]),r!==s-1);r++)t.push(", ");t.deindent(i()),t.push("])")}}function kl(t,e){e.body?xt(t,e.body):t.push("null")}function xt(t,e){const{helper:n}=t;switch(e.type){case 0:kl(t,e);break;case 1:bl(t,e);break;case 2:vl(t,e);break;case 6:yl(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Rt(B.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:gl,args:[e.type]})}}const Tl=(t,e={})=>{const n=As(e.mode)?e.mode:"normal",i=As(e.filename)?e.filename:"message.intl",s=!!e.sourceMap,r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,a=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=_l(t,{mode:n,filename:i,sourceMap:s,breakLineCode:r,needIndent:a});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),o.length>0&&(l.push(`const { ${ia(o.map(h=>`${h}: _${h}`),", ")} } = ctx`),l.newline()),l.push("return "),xt(l,t),l.deindent(a),l.push("}"),delete t.helpers;const{code:c,map:f}=l.context();return{ast:t,code:c,map:f?f.toJSON():void 0}};function El(t,e={}){const n=na({},e),i=!!n.jit,s=!!n.minify,r=n.optimize==null?!0:n.optimize,o=fl(n).parse(t);return i?(r&&ml(o),s&&wt(o),{ast:o,code:""}):(hl(o,n),Tl(o,n))}/*!
  * core-base v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function wl(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(je().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(je().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(je().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const ot=[];ot[0]={w:[0],i:[3,0],"[":[4],o:[7]};ot[1]={w:[1],".":[2],"[":[4],o:[7]};ot[2]={w:[2],i:[3,0],0:[3,0]};ot[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ot[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ot[5]={"'":[4,0],o:8,l:[5,0]};ot[6]={'"':[4,0],o:8,l:[6,0]};const Al=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Sl(t){return Al.test(t)}function Il(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Pl(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Ol(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Sl(e)?Il(e):"*"+e}function Cl(t){const e=[];let n=-1,i=0,s=0,r,a,o,l,c,f,h;const u=[];u[0]=()=>{a===void 0?a=o:a+=o},u[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},u[2]=()=>{u[0](),s++},u[3]=()=>{if(s>0)s--,i=4,u[0]();else{if(s=0,a===void 0||(a=Ol(a),a===!1))return!1;u[1]()}};function _(){const k=t[n+1];if(i===5&&k==="'"||i===6&&k==='"')return n++,o="\\"+k,u[0](),!0}for(;i!==null;)if(n++,r=t[n],!(r==="\\"&&_())){if(l=Pl(r),h=ot[i],c=h[l]||h.l||8,c===8||(i=c[0],c[1]!==void 0&&(f=u[c[1]],f&&(o=r,f()===!1))))return;if(i===7)return e}}const Os=new Map;function xl(t,e){return X(t)?t[e]:null}function Ll(t,e){if(!X(t))return null;let n=Os.get(e);if(n||(n=Cl(e),n&&Os.set(e,n)),!n)return null;const i=n.length;let s=t,r=0;for(;r<i;){const a=s[n[r]];if(a===void 0||ee(s))return null;s=a,r++}return s}const Nl=t=>t,Ml=t=>"",Dl="text",Rl=t=>t.length===0?"":jo(t),Fl=Ho;function Cs(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function zl(t){const e=oe(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(oe(t.named.count)||oe(t.named.n))?oe(t.named.count)?t.named.count:oe(t.named.n)?t.named.n:e:e}function Ul(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Bl(t={}){const e=t.locale,n=zl(t),i=X(t.pluralRules)&&M(e)&&ee(t.pluralRules[e])?t.pluralRules[e]:Cs,s=X(t.pluralRules)&&M(e)&&ee(t.pluralRules[e])?Cs:void 0,r=y=>y[i(n,y.length,s)],a=t.list||[],o=y=>a[y],l=t.named||J();oe(t.pluralIndex)&&Ul(n,l);const c=y=>l[y];function f(y){const E=ee(t.messages)?t.messages(y):X(t.messages)?t.messages[y]:!1;return E||(t.parent?t.parent.message(y):Ml)}const h=y=>t.modifiers?t.modifiers[y]:Nl,u=G(t.processor)&&ee(t.processor.normalize)?t.processor.normalize:Rl,_=G(t.processor)&&ee(t.processor.interpolate)?t.processor.interpolate:Fl,k=G(t.processor)&&M(t.processor.type)?t.processor.type:Dl,A={list:o,named:c,plural:r,linked:(y,...E)=>{const[g,v]=E;let P="text",w="";E.length===1?X(g)?(w=g.modifier||w,P=g.type||P):M(g)&&(w=g||w):E.length===2&&(M(g)&&(w=g||w),M(v)&&(P=v||P));const I=f(y)(A),L=P==="vnode"&&ne(I)&&w?I[0]:I;return w?h(w)(L,P):L},message:f,type:k,interpolate:_,normalize:u,values:pe(J(),a,l)};return A}let fn=null;function $l(t){fn=t}function Gl(t,e,n){fn&&fn.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const Wl=Vl("function:translate");function Vl(t){return e=>fn&&fn.emit(t,e)}const sa=Ji.__EXTEND_POINT__,ut=Wn(sa),Hl={NOT_FOUND_KEY:sa,FALLBACK_TO_TRANSLATE:ut(),CANNOT_FORMAT_NUMBER:ut(),FALLBACK_TO_NUMBER_FORMAT:ut(),CANNOT_FORMAT_DATE:ut(),FALLBACK_TO_DATE_FORMAT:ut(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:ut(),__EXTEND_POINT__:ut()},ra=B.__EXTEND_POINT__,ft=Wn(ra),Me={INVALID_ARGUMENT:ra,INVALID_DATE_ARGUMENT:ft(),INVALID_ISO_DATE_ARGUMENT:ft(),NOT_SUPPORT_NON_STRING_MESSAGE:ft(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:ft(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:ft(),NOT_SUPPORT_LOCALE_TYPE:ft(),__EXTEND_POINT__:ft()};function Fe(t){return Rt(t,null,void 0)}function es(t,e){return e.locale!=null?xs(e.locale):xs(t.locale)}let ii;function xs(t){if(M(t))return t;if(ee(t)){if(t.resolvedOnce&&ii!=null)return ii;if(t.constructor.name==="Function"){const e=t();if(Vo(e))throw Fe(Me.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return ii=e}else throw Fe(Me.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Fe(Me.NOT_SUPPORT_LOCALE_TYPE)}function jl(t,e,n){return[...new Set([n,...ne(e)?e:X(e)?Object.keys(e):M(e)?[e]:[n]])]}function aa(t,e,n){const i=M(n)?n:Lt,s=t;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(i);if(!r){r=[];let a=[n];for(;ne(a);)a=Ls(r,a,e);const o=ne(e)||!G(e)?e:e.default?e.default:null;a=M(o)?[o]:o,ne(a)&&Ls(r,a,!1),s.__localeChainCache.set(i,r)}return r}function Ls(t,e,n){let i=!0;for(let s=0;s<e.length&&V(i);s++){const r=e[s];M(r)&&(i=Yl(t,e[s],n))}return i}function Yl(t,e,n){let i;const s=e.split("-");do{const r=s.join("-");i=Xl(t,r,n),s.splice(-1,1)}while(s.length&&i===!0);return i}function Xl(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(ne(n)||G(n))&&n[s]&&(i=n[s])}return i}const Kl="9.14.2",Vn=-1,Lt="en-US",Ns="",Ms=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function ql(){return{upper:(t,e)=>e==="text"&&M(t)?t.toUpperCase():e==="vnode"&&X(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&M(t)?t.toLowerCase():e==="vnode"&&X(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&M(t)?Ms(t):e==="vnode"&&X(t)&&"__v_isVNode"in t?Ms(t.children):t}}let oa;function Ds(t){oa=t}let la;function Ql(t){la=t}let ca;function Jl(t){ca=t}let ua=null;const Zl=t=>{ua=t},ec=()=>ua;let fa=null;const Rs=t=>{fa=t},tc=()=>fa;let Fs=0;function nc(t={}){const e=ee(t.onWarn)?t.onWarn:Yo,n=M(t.version)?t.version:Kl,i=M(t.locale)||ee(t.locale)?t.locale:Lt,s=ee(i)?Lt:i,r=ne(t.fallbackLocale)||G(t.fallbackLocale)||M(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,a=G(t.messages)?t.messages:si(s),o=G(t.datetimeFormats)?t.datetimeFormats:si(s),l=G(t.numberFormats)?t.numberFormats:si(s),c=pe(J(),t.modifiers,ql()),f=t.pluralRules||J(),h=ee(t.missing)?t.missing:null,u=V(t.missingWarn)||nt(t.missingWarn)?t.missingWarn:!0,_=V(t.fallbackWarn)||nt(t.fallbackWarn)?t.fallbackWarn:!0,k=!!t.fallbackFormat,T=!!t.unresolving,A=ee(t.postTranslation)?t.postTranslation:null,y=G(t.processor)?t.processor:null,E=V(t.warnHtmlMessage)?t.warnHtmlMessage:!0,g=!!t.escapeParameter,v=ee(t.messageCompiler)?t.messageCompiler:oa,P=ee(t.messageResolver)?t.messageResolver:la||xl,w=ee(t.localeFallbacker)?t.localeFallbacker:ca||jl,I=X(t.fallbackContext)?t.fallbackContext:void 0,L=t,x=X(L.__datetimeFormatters)?L.__datetimeFormatters:new Map,D=X(L.__numberFormatters)?L.__numberFormatters:new Map,he=X(L.__meta)?L.__meta:{};Fs++;const j={version:n,cid:Fs,locale:i,fallbackLocale:r,messages:a,modifiers:c,pluralRules:f,missing:h,missingWarn:u,fallbackWarn:_,fallbackFormat:k,unresolving:T,postTranslation:A,processor:y,warnHtmlMessage:E,escapeParameter:g,messageCompiler:v,messageResolver:P,localeFallbacker:w,fallbackContext:I,onWarn:e,__meta:he};return j.datetimeFormats=o,j.numberFormats=l,j.__datetimeFormatters=x,j.__numberFormatters=D,__INTLIFY_PROD_DEVTOOLS__&&Gl(j,n,he),j}const si=t=>({[t]:J()});function ts(t,e,n,i,s){const{missing:r,onWarn:a}=t;if(r!==null){const o=r(t,n,e,s);return M(o)?o:e}else return e}function en(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function ic(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function sc(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(ic(t,e[i]))return!0;return!1}function ri(t){return n=>rc(n,t)}function rc(t,e){const n=oc(e);if(n==null)throw dn(0);if(ns(n)===1){const r=cc(n);return t.plural(r.reduce((a,o)=>[...a,zs(t,o)],[]))}else return zs(t,n)}const ac=["b","body"];function oc(t){return lt(t,ac)}const lc=["c","cases"];function cc(t){return lt(t,lc,[])}function zs(t,e){const n=fc(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=hc(e).reduce((s,r)=>[...s,Ti(t,r)],[]);return t.normalize(i)}}const uc=["s","static"];function fc(t){return lt(t,uc)}const dc=["i","items"];function hc(t){return lt(t,dc,[])}function Ti(t,e){const n=ns(e);switch(n){case 3:return In(e,n);case 9:return In(e,n);case 4:{const i=e;if(Ne(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Ne(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw dn(n)}case 5:{const i=e;if(Ne(i,"i")&&oe(i.i))return t.interpolate(t.list(i.i));if(Ne(i,"index")&&oe(i.index))return t.interpolate(t.list(i.index));throw dn(n)}case 6:{const i=e,s=_c(i),r=vc(i);return t.linked(Ti(t,r),s?Ti(t,s):void 0,t.type)}case 7:return In(e,n);case 8:return In(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const mc=["t","type"];function ns(t){return lt(t,mc)}const pc=["v","value"];function In(t,e){const n=lt(t,pc);if(n)return n;throw dn(e)}const gc=["m","modifier"];function _c(t){return lt(t,gc)}const yc=["k","key"];function vc(t){const e=lt(t,yc);if(e)return e;throw dn(6)}function lt(t,e,n){for(let i=0;i<e.length;i++){const s=e[i];if(Ne(t,s)&&t[s]!=null)return t[s]}return n}function dn(t){return new Error(`unhandled node type: ${t}`)}const da=t=>t;let At=J();function Nt(t){return X(t)&&ns(t)===0&&(Ne(t,"b")||Ne(t,"body"))}function ha(t,e={}){let n=!1;const i=e.onError||el;return e.onError=s=>{n=!0,i(s)},{...El(t,e),detectError:n}}const bc=(t,e)=>{if(!M(t))throw Fe(Me.NOT_SUPPORT_NON_STRING_MESSAGE);{V(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||da)(t),s=At[i];if(s)return s;const{code:r,detectError:a}=ha(t,e),o=new Function(`return ${r}`)();return a?o:At[i]=o}};function kc(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&M(t)){V(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||da)(t),s=At[i];if(s)return s;const{ast:r,detectError:a}=ha(t,{...e,location:!1,jit:!0}),o=ri(r);return a?o:At[i]=o}else{const n=t.cacheKey;if(n){const i=At[n];return i||(At[n]=ri(t))}else return ri(t)}}const Us=()=>"",Oe=t=>ee(t);function Bs(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:s,messageCompiler:r,fallbackLocale:a,messages:o}=t,[l,c]=Ei(...e),f=V(c.missingWarn)?c.missingWarn:t.missingWarn,h=V(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,u=V(c.escapeParameter)?c.escapeParameter:t.escapeParameter,_=!!c.resolvedMessage,k=M(c.default)||V(c.default)?V(c.default)?r?l:()=>l:c.default:n?r?l:()=>l:"",T=n||k!=="",A=es(t,c);u&&Tc(c);let[y,E,g]=_?[l,A,o[A]||J()]:ma(t,l,A,a,h,f),v=y,P=l;if(!_&&!(M(v)||Nt(v)||Oe(v))&&T&&(v=k,P=v),!_&&(!(M(v)||Nt(v)||Oe(v))||!M(E)))return s?Vn:l;let w=!1;const I=()=>{w=!0},L=Oe(v)?v:pa(t,l,E,v,P,I);if(w)return v;const x=Ac(t,E,g,c),D=Bl(x),he=Ec(t,L,D),j=i?i(he,l):he;if(__INTLIFY_PROD_DEVTOOLS__){const ge={timestamp:Date.now(),key:M(l)?l:Oe(v)?v.key:"",locale:E||(Oe(v)?v.locale:""),format:M(v)?v:Oe(v)?v.source:"",message:j};ge.meta=pe({},t.__meta,ec()||{}),Wl(ge)}return j}function Tc(t){ne(t.list)?t.list=t.list.map(e=>M(e)?ws(e):e):X(t.named)&&Object.keys(t.named).forEach(e=>{M(t.named[e])&&(t.named[e]=ws(t.named[e]))})}function ma(t,e,n,i,s,r){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=t,f=c(t,i,n);let h=J(),u,_=null;const k="translate";for(let T=0;T<f.length&&(u=f[T],h=a[u]||J(),(_=l(h,e))===null&&(_=h[e]),!(M(_)||Nt(_)||Oe(_)));T++)if(!sc(u,f)){const A=ts(t,e,u,r,k);A!==e&&(_=A)}return[_,u,h]}function pa(t,e,n,i,s,r){const{messageCompiler:a,warnHtmlMessage:o}=t;if(Oe(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(a==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=a(i,wc(t,n,s,i,o,r));return l.locale=n,l.key=e,l.source=i,l}function Ec(t,e,n){return e(n)}function Ei(...t){const[e,n,i]=t,s=J();if(!M(e)&&!oe(e)&&!Oe(e)&&!Nt(e))throw Fe(Me.INVALID_ARGUMENT);const r=oe(e)?String(e):(Oe(e),e);return oe(n)?s.plural=n:M(n)?s.default=n:G(n)&&!Gn(n)?s.named=n:ne(n)&&(s.list=n),oe(i)?s.plural=i:M(i)?s.default=i:G(i)&&pe(s,i),[r,s]}function wc(t,e,n,i,s,r){return{locale:e,key:n,warnHtmlMessage:s,onError:a=>{throw r&&r(a),a},onCacheKey:a=>Uo(e,n,a)}}function Ac(t,e,n,i){const{modifiers:s,pluralRules:r,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:f}=t,u={locale:e,modifiers:s,pluralRules:r,messages:_=>{let k=a(n,_);if(k==null&&f){const[,,T]=ma(f,_,e,o,l,c);k=a(T,_)}if(M(k)||Nt(k)){let T=!1;const y=pa(t,_,e,k,_,()=>{T=!0});return T?Us:y}else return Oe(k)?k:Us}};return t.processor&&(u.processor=t.processor),i.list&&(u.list=i.list),i.named&&(u.named=i.named),oe(i.plural)&&(u.pluralIndex=i.plural),u}function $s(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:a}=t,{__datetimeFormatters:o}=t,[l,c,f,h]=wi(...e),u=V(f.missingWarn)?f.missingWarn:t.missingWarn;V(f.fallbackWarn)?f.fallbackWarn:t.fallbackWarn;const _=!!f.part,k=es(t,f),T=a(t,s,k);if(!M(l)||l==="")return new Intl.DateTimeFormat(k,h).format(c);let A={},y,E=null;const g="datetime format";for(let w=0;w<T.length&&(y=T[w],A=n[y]||{},E=A[l],!G(E));w++)ts(t,l,y,u,g);if(!G(E)||!M(y))return i?Vn:l;let v=`${y}__${l}`;Gn(h)||(v=`${v}__${JSON.stringify(h)}`);let P=o.get(v);return P||(P=new Intl.DateTimeFormat(y,pe({},E,h)),o.set(v,P)),_?P.formatToParts(c):P.format(c)}const ga=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function wi(...t){const[e,n,i,s]=t,r=J();let a=J(),o;if(M(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Fe(Me.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw Fe(Me.INVALID_ISO_DATE_ARGUMENT)}}else if($o(e)){if(isNaN(e.getTime()))throw Fe(Me.INVALID_DATE_ARGUMENT);o=e}else if(oe(e))o=e;else throw Fe(Me.INVALID_ARGUMENT);return M(n)?r.key=n:G(n)&&Object.keys(n).forEach(l=>{ga.includes(l)?a[l]=n[l]:r[l]=n[l]}),M(i)?r.locale=i:G(i)&&(a=i),G(s)&&(a=s),[r.key||"",o,r,a]}function Gs(t,e,n){const i=t;for(const s in n){const r=`${e}__${s}`;i.__datetimeFormatters.has(r)&&i.__datetimeFormatters.delete(r)}}function Ws(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:a}=t,{__numberFormatters:o}=t,[l,c,f,h]=Ai(...e),u=V(f.missingWarn)?f.missingWarn:t.missingWarn;V(f.fallbackWarn)?f.fallbackWarn:t.fallbackWarn;const _=!!f.part,k=es(t,f),T=a(t,s,k);if(!M(l)||l==="")return new Intl.NumberFormat(k,h).format(c);let A={},y,E=null;const g="number format";for(let w=0;w<T.length&&(y=T[w],A=n[y]||{},E=A[l],!G(E));w++)ts(t,l,y,u,g);if(!G(E)||!M(y))return i?Vn:l;let v=`${y}__${l}`;Gn(h)||(v=`${v}__${JSON.stringify(h)}`);let P=o.get(v);return P||(P=new Intl.NumberFormat(y,pe({},E,h)),o.set(v,P)),_?P.formatToParts(c):P.format(c)}const _a=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ai(...t){const[e,n,i,s]=t,r=J();let a=J();if(!oe(e))throw Fe(Me.INVALID_ARGUMENT);const o=e;return M(n)?r.key=n:G(n)&&Object.keys(n).forEach(l=>{_a.includes(l)?a[l]=n[l]:r[l]=n[l]}),M(i)?r.locale=i:G(i)&&(a=i),G(s)&&(a=s),[r.key||"",o,r,a]}function Vs(t,e,n){const i=t;for(const s in n){const r=`${e}__${s}`;i.__numberFormatters.has(r)&&i.__numberFormatters.delete(r)}}wl();/*!
  * vue-i18n v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Sc="9.14.2";function Ic(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(je().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(je().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(je().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(je().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(je().__INTLIFY_PROD_DEVTOOLS__=!1)}const ya=Hl.__EXTEND_POINT__,He=Wn(ya);He(),He(),He(),He(),He(),He(),He(),He(),He();const va=Me.__EXTEND_POINT__,ke=Wn(va),ue={UNEXPECTED_RETURN_TYPE:va,INVALID_ARGUMENT:ke(),MUST_BE_CALL_SETUP_TOP:ke(),NOT_INSTALLED:ke(),NOT_AVAILABLE_IN_LEGACY_MODE:ke(),REQUIRED_VALUE:ke(),INVALID_VALUE:ke(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:ke(),NOT_INSTALLED_WITH_PROVIDE:ke(),UNEXPECTED_ERROR:ke(),NOT_COMPATIBLE_LEGACY_VUE_I18N:ke(),BRIDGE_SUPPORT_VUE_2_ONLY:ke(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:ke(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:ke(),__EXTEND_POINT__:ke()};function de(t,...e){return Rt(t,null,void 0)}const Si=at("__translateVNode"),Ii=at("__datetimeParts"),Pi=at("__numberParts"),ba=at("__setPluralRules"),ka=at("__injectWithOption"),Oi=at("__dispose");function hn(t){if(!X(t))return t;for(const e in t)if(Ne(t,e))if(!e.includes("."))X(t[e])&&hn(t[e]);else{const n=e.split("."),i=n.length-1;let s=t,r=!1;for(let a=0;a<i;a++){if(n[a]in s||(s[n[a]]=J()),!X(s[n[a]])){r=!0;break}s=s[n[a]]}r||(s[n[i]]=t[e],delete t[e]),X(s[n[i]])&&hn(s[n[i]])}return t}function Hn(t,e){const{messages:n,__i18n:i,messageResolver:s,flatJson:r}=e,a=G(n)?n:ne(i)?J():{[t]:J()};if(ne(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||J(),Cn(c,a[l])):Cn(c,a)}else M(o)&&Cn(JSON.parse(o),a)}),s==null&&r)for(const o in a)Ne(a,o)&&hn(a[o]);return a}function Ta(t){return t.type}function Ea(t,e,n){let i=X(e.messages)?e.messages:J();"__i18nGlobal"in n&&(i=Hn(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const s=Object.keys(i);s.length&&s.forEach(r=>{t.mergeLocaleMessage(r,i[r])});{if(X(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(a=>{t.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(X(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(a=>{t.mergeNumberFormat(a,e.numberFormats[a])})}}}function Hs(t){return Q(Co,null,t,0)}const js="__INTLIFY_META__",Ys=()=>[],Pc=()=>!1;let Xs=0;function Ks(t){return(e,n,i,s)=>t(n,i,ln()||void 0,s)}const Oc=()=>{const t=ln();let e=null;return t&&(e=Ta(t)[js])?{[js]:e}:null};function is(t={},e){const{__root:n,__injectWithOption:i}=t,s=n===void 0,r=t.flatJson,a=Dn?Ee:Kr,o=!!t.translateExistCompatible;let l=V(t.inheritLocale)?t.inheritLocale:!0;const c=a(n&&l?n.locale.value:M(t.locale)?t.locale:Lt),f=a(n&&l?n.fallbackLocale.value:M(t.fallbackLocale)||ne(t.fallbackLocale)||G(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:c.value),h=a(Hn(c.value,t)),u=a(G(t.datetimeFormats)?t.datetimeFormats:{[c.value]:{}}),_=a(G(t.numberFormats)?t.numberFormats:{[c.value]:{}});let k=n?n.missingWarn:V(t.missingWarn)||nt(t.missingWarn)?t.missingWarn:!0,T=n?n.fallbackWarn:V(t.fallbackWarn)||nt(t.fallbackWarn)?t.fallbackWarn:!0,A=n?n.fallbackRoot:V(t.fallbackRoot)?t.fallbackRoot:!0,y=!!t.fallbackFormat,E=ee(t.missing)?t.missing:null,g=ee(t.missing)?Ks(t.missing):null,v=ee(t.postTranslation)?t.postTranslation:null,P=n?n.warnHtmlMessage:V(t.warnHtmlMessage)?t.warnHtmlMessage:!0,w=!!t.escapeParameter;const I=n?n.modifiers:G(t.modifiers)?t.modifiers:{};let L=t.pluralRules||n&&n.pluralRules,x;x=(()=>{s&&Rs(null);const b={version:Sc,locale:c.value,fallbackLocale:f.value,messages:h.value,modifiers:I,pluralRules:L,missing:g===null?void 0:g,missingWarn:k,fallbackWarn:T,fallbackFormat:y,unresolving:!0,postTranslation:v===null?void 0:v,warnHtmlMessage:P,escapeParameter:w,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};b.datetimeFormats=u.value,b.numberFormats=_.value,b.__datetimeFormatters=G(x)?x.__datetimeFormatters:void 0,b.__numberFormatters=G(x)?x.__numberFormatters:void 0;const O=nc(b);return s&&Rs(O),O})(),en(x,c.value,f.value);function he(){return[c.value,f.value,h.value,u.value,_.value]}const j=H({get:()=>c.value,set:b=>{c.value=b,x.locale=c.value}}),ge=H({get:()=>f.value,set:b=>{f.value=b,x.fallbackLocale=f.value,en(x,c.value,b)}}),zt=H(()=>h.value),Ut=H(()=>u.value),Re=H(()=>_.value);function Bt(){return ee(v)?v:null}function $t(b){v=b,x.postTranslation=b}function Gt(){return E}function Wt(b){b!==null&&(g=Ks(b)),E=b,x.missing=g}const xe=(b,O,Z,ae,Je,An)=>{he();let kt;try{__INTLIFY_PROD_DEVTOOLS__,s||(x.fallbackContext=n?tc():void 0),kt=b(x)}finally{__INTLIFY_PROD_DEVTOOLS__,s||(x.fallbackContext=void 0)}if(Z!=="translate exists"&&oe(kt)&&kt===Vn||Z==="translate exists"&&!kt){const[Ao,m_]=O();return n&&A?ae(n):Je(Ao)}else{if(An(kt))return kt;throw de(ue.UNEXPECTED_RETURN_TYPE)}};function ct(...b){return xe(O=>Reflect.apply(Bs,null,[O,...b]),()=>Ei(...b),"translate",O=>Reflect.apply(O.t,O,[...b]),O=>O,O=>M(O))}function Vt(...b){const[O,Z,ae]=b;if(ae&&!X(ae))throw de(ue.INVALID_ARGUMENT);return ct(O,Z,pe({resolvedMessage:!0},ae||{}))}function _t(...b){return xe(O=>Reflect.apply($s,null,[O,...b]),()=>wi(...b),"datetime format",O=>Reflect.apply(O.d,O,[...b]),()=>Ns,O=>M(O))}function Ht(...b){return xe(O=>Reflect.apply(Ws,null,[O,...b]),()=>Ai(...b),"number format",O=>Reflect.apply(O.n,O,[...b]),()=>Ns,O=>M(O))}function jt(b){return b.map(O=>M(O)||oe(O)||V(O)?Hs(String(O)):O)}const Yt={normalize:jt,interpolate:b=>b,type:"vnode"};function Xt(...b){return xe(O=>{let Z;const ae=O;try{ae.processor=Yt,Z=Reflect.apply(Bs,null,[ae,...b])}finally{ae.processor=null}return Z},()=>Ei(...b),"translate",O=>O[Si](...b),O=>[Hs(O)],O=>ne(O))}function yt(...b){return xe(O=>Reflect.apply(Ws,null,[O,...b]),()=>Ai(...b),"number format",O=>O[Pi](...b),Ys,O=>M(O)||ne(O))}function Kt(...b){return xe(O=>Reflect.apply($s,null,[O,...b]),()=>wi(...b),"datetime format",O=>O[Ii](...b),Ys,O=>M(O)||ne(O))}function qt(b){L=b,x.pluralRules=L}function Qt(b,O){return xe(()=>{if(!b)return!1;const Z=M(O)?O:c.value,ae=vt(Z),Je=x.messageResolver(ae,b);return o?Je!=null:Nt(Je)||Oe(Je)||M(Je)},()=>[b],"translate exists",Z=>Reflect.apply(Z.te,Z,[b,O]),Pc,Z=>V(Z))}function N(b){let O=null;const Z=aa(x,f.value,c.value);for(let ae=0;ae<Z.length;ae++){const Je=h.value[Z[ae]]||{},An=x.messageResolver(Je,b);if(An!=null){O=An;break}}return O}function K(b){const O=N(b);return O??(n?n.tm(b)||{}:{})}function vt(b){return h.value[b]||{}}function bt(b,O){if(r){const Z={[b]:O};for(const ae in Z)Ne(Z,ae)&&hn(Z[ae]);O=Z[b]}h.value[b]=O,x.messages=h.value}function Jt(b,O){h.value[b]=h.value[b]||{};const Z={[b]:O};if(r)for(const ae in Z)Ne(Z,ae)&&hn(Z[ae]);O=Z[b],Cn(O,h.value[b]),x.messages=h.value}function ei(b){return u.value[b]||{}}function d(b,O){u.value[b]=O,x.datetimeFormats=u.value,Gs(x,b,O)}function m(b,O){u.value[b]=pe(u.value[b]||{},O),x.datetimeFormats=u.value,Gs(x,b,O)}function S(b){return _.value[b]||{}}function U(b,O){_.value[b]=O,x.numberFormats=_.value,Vs(x,b,O)}function se(b,O){_.value[b]=pe(_.value[b]||{},O),x.numberFormats=_.value,Vs(x,b,O)}Xs++,n&&Dn&&(cn(n.locale,b=>{l&&(c.value=b,x.locale=b,en(x,c.value,f.value))}),cn(n.fallbackLocale,b=>{l&&(f.value=b,x.fallbackLocale=b,en(x,c.value,f.value))}));const W={id:Xs,locale:j,fallbackLocale:ge,get inheritLocale(){return l},set inheritLocale(b){l=b,b&&n&&(c.value=n.locale.value,f.value=n.fallbackLocale.value,en(x,c.value,f.value))},get availableLocales(){return Object.keys(h.value).sort()},messages:zt,get modifiers(){return I},get pluralRules(){return L||{}},get isGlobal(){return s},get missingWarn(){return k},set missingWarn(b){k=b,x.missingWarn=k},get fallbackWarn(){return T},set fallbackWarn(b){T=b,x.fallbackWarn=T},get fallbackRoot(){return A},set fallbackRoot(b){A=b},get fallbackFormat(){return y},set fallbackFormat(b){y=b,x.fallbackFormat=y},get warnHtmlMessage(){return P},set warnHtmlMessage(b){P=b,x.warnHtmlMessage=b},get escapeParameter(){return w},set escapeParameter(b){w=b,x.escapeParameter=b},t:ct,getLocaleMessage:vt,setLocaleMessage:bt,mergeLocaleMessage:Jt,getPostTranslationHandler:Bt,setPostTranslationHandler:$t,getMissingHandler:Gt,setMissingHandler:Wt,[ba]:qt};return W.datetimeFormats=Ut,W.numberFormats=Re,W.rt=Vt,W.te=Qt,W.tm=K,W.d=_t,W.n=Ht,W.getDateTimeFormat=ei,W.setDateTimeFormat=d,W.mergeDateTimeFormat=m,W.getNumberFormat=S,W.setNumberFormat=U,W.mergeNumberFormat=se,W[ka]=i,W[Si]=Xt,W[Ii]=Kt,W[Pi]=yt,W}function Cc(t){const e=M(t.locale)?t.locale:Lt,n=M(t.fallbackLocale)||ne(t.fallbackLocale)||G(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=ee(t.missing)?t.missing:void 0,s=V(t.silentTranslationWarn)||nt(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,r=V(t.silentFallbackWarn)||nt(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,a=V(t.fallbackRoot)?t.fallbackRoot:!0,o=!!t.formatFallbackMessages,l=G(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,f=ee(t.postTranslation)?t.postTranslation:void 0,h=M(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,u=!!t.escapeParameterHtml,_=V(t.sync)?t.sync:!0;let k=t.messages;if(G(t.sharedMessages)){const w=t.sharedMessages;k=Object.keys(w).reduce((L,x)=>{const D=L[x]||(L[x]={});return pe(D,w[x]),L},k||{})}const{__i18n:T,__root:A,__injectWithOption:y}=t,E=t.datetimeFormats,g=t.numberFormats,v=t.flatJson,P=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:k,flatJson:v,datetimeFormats:E,numberFormats:g,missing:i,missingWarn:s,fallbackWarn:r,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:f,warnHtmlMessage:h,escapeParameter:u,messageResolver:t.messageResolver,inheritLocale:_,translateExistCompatible:P,__i18n:T,__root:A,__injectWithOption:y}}function Ci(t={},e){{const n=is(Cc(t)),{__extender:i}=t,s={id:n.id,get locale(){return n.locale.value},set locale(r){n.locale.value=r},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(r){n.fallbackLocale.value=r},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(r){},get missing(){return n.getMissingHandler()},set missing(r){n.setMissingHandler(r)},get silentTranslationWarn(){return V(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(r){n.missingWarn=V(r)?!r:r},get silentFallbackWarn(){return V(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(r){n.fallbackWarn=V(r)?!r:r},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(r){n.fallbackFormat=r},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(r){n.setPostTranslationHandler(r)},get sync(){return n.inheritLocale},set sync(r){n.inheritLocale=r},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){n.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(r){n.escapeParameter=r},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(r){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...r){const[a,o,l]=r,c={};let f=null,h=null;if(!M(a))throw de(ue.INVALID_ARGUMENT);const u=a;return M(o)?c.locale=o:ne(o)?f=o:G(o)&&(h=o),ne(l)?f=l:G(l)&&(h=l),Reflect.apply(n.t,n,[u,f||h||{},c])},rt(...r){return Reflect.apply(n.rt,n,[...r])},tc(...r){const[a,o,l]=r,c={plural:1};let f=null,h=null;if(!M(a))throw de(ue.INVALID_ARGUMENT);const u=a;return M(o)?c.locale=o:oe(o)?c.plural=o:ne(o)?f=o:G(o)&&(h=o),M(l)?c.locale=l:ne(l)?f=l:G(l)&&(h=l),Reflect.apply(n.t,n,[u,f||h||{},c])},te(r,a){return n.te(r,a)},tm(r){return n.tm(r)},getLocaleMessage(r){return n.getLocaleMessage(r)},setLocaleMessage(r,a){n.setLocaleMessage(r,a)},mergeLocaleMessage(r,a){n.mergeLocaleMessage(r,a)},d(...r){return Reflect.apply(n.d,n,[...r])},getDateTimeFormat(r){return n.getDateTimeFormat(r)},setDateTimeFormat(r,a){n.setDateTimeFormat(r,a)},mergeDateTimeFormat(r,a){n.mergeDateTimeFormat(r,a)},n(...r){return Reflect.apply(n.n,n,[...r])},getNumberFormat(r){return n.getNumberFormat(r)},setNumberFormat(r,a){n.setNumberFormat(r,a)},mergeNumberFormat(r,a){n.mergeNumberFormat(r,a)},getChoiceIndex(r,a){return-1}};return s.__extender=i,s}}const ss={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function xc({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,s)=>[...i,...s.type===fe?s.children:[s]],[]):e.reduce((n,i)=>{const s=t[i];return s&&(n[i]=s()),n},J())}function wa(t){return fe}const Lc=yn({name:"i18n-t",props:pe({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>oe(t)||!isNaN(t)}},ss),setup(t,e){const{slots:n,attrs:i}=e,s=t.i18n||Ce({useScope:t.scope,__useComponent:!0});return()=>{const r=Object.keys(n).filter(h=>h!=="_"),a=J();t.locale&&(a.locale=t.locale),t.plural!==void 0&&(a.plural=M(t.plural)?+t.plural:t.plural);const o=xc(e,r),l=s[Si](t.keypath,o,a),c=pe(J(),i),f=M(t.tag)||X(t.tag)?t.tag:wa();return Ki(f,c,l)}}}),qs=Lc;function Nc(t){return ne(t)&&!M(t[0])}function Aa(t,e,n,i){const{slots:s,attrs:r}=e;return()=>{const a={part:!0};let o=J();t.locale&&(a.locale=t.locale),M(t.format)?a.key=t.format:X(t.format)&&(M(t.format.key)&&(a.key=t.format.key),o=Object.keys(t.format).reduce((u,_)=>n.includes(_)?pe(J(),u,{[_]:t.format[_]}):u,J()));const l=i(t.value,a,o);let c=[a.key];ne(l)?c=l.map((u,_)=>{const k=s[u.type],T=k?k({[u.type]:u.value,index:_,parts:l}):[u.value];return Nc(T)&&(T[0].key=`${u.type}-${_}`),T}):M(l)&&(c=[l]);const f=pe(J(),r),h=M(t.tag)||X(t.tag)?t.tag:wa();return Ki(h,f,c)}}const Mc=yn({name:"i18n-n",props:pe({value:{type:Number,required:!0},format:{type:[String,Object]}},ss),setup(t,e){const n=t.i18n||Ce({useScope:t.scope,__useComponent:!0});return Aa(t,e,_a,(...i)=>n[Pi](...i))}}),Qs=Mc,Dc=yn({name:"i18n-d",props:pe({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},ss),setup(t,e){const n=t.i18n||Ce({useScope:t.scope,__useComponent:!0});return Aa(t,e,ga,(...i)=>n[Ii](...i))}}),Js=Dc;function Rc(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function Fc(t){const e=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw de(ue.UNEXPECTED_ERROR);const f=Rc(t,o.$),h=Zs(c);return[Reflect.apply(f.t,f,[...er(h)]),f]};return{created:(a,o)=>{const[l,c]=e(o);Dn&&t.global===c&&(a.__i18nWatcher=cn(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{Dn&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=Zs(o);a.textContent=Reflect.apply(l.t,l,[...er(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function Zs(t){if(M(t))return{path:t};if(G(t)){if(!("path"in t))throw de(ue.REQUIRED_VALUE,"path");return t}else throw de(ue.INVALID_VALUE)}function er(t){const{path:e,locale:n,args:i,choice:s,plural:r}=t,a={},o=i||{};return M(n)&&(a.locale=n),oe(s)&&(a.plural=s),oe(r)&&(a.plural=r),[e,o,a]}function zc(t,e,...n){const i=G(n[0])?n[0]:{},s=!!i.useI18nComponentName;(V(i.globalInstall)?i.globalInstall:!0)&&([s?"i18n":qs.name,"I18nT"].forEach(a=>t.component(a,qs)),[Qs.name,"I18nN"].forEach(a=>t.component(a,Qs)),[Js.name,"I18nD"].forEach(a=>t.component(a,Js))),t.directive("t",Fc(e))}function Uc(t,e,n){return{beforeCreate(){const i=ln();if(!i)throw de(ue.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const r=s.i18n;if(s.__i18n&&(r.__i18n=s.__i18n),r.__root=e,this===this.$root)this.$i18n=tr(t,r);else{r.__injectWithOption=!0,r.__extender=n.__vueI18nExtend,this.$i18n=Ci(r);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=tr(t,s);else{this.$i18n=Ci({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&Ea(e,s,s),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$tc=(...r)=>this.$i18n.tc(...r),this.$te=(r,a)=>this.$i18n.te(r,a),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=ln();if(!i)throw de(ue.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(i),delete this.$i18n}}}function tr(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[ba](e.pluralizationRules||t.pluralizationRules);const n=Hn(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const Bc=at("global-vue-i18n");function $c(t={},e){const n=__VUE_I18N_LEGACY_API__&&V(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=V(t.globalInjection)?t.globalInjection:!0,s=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,r=new Map,[a,o]=Gc(t,n),l=at("");function c(u){return r.get(u)||null}function f(u,_){r.set(u,_)}function h(u){r.delete(u)}{const u={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return s},async install(_,...k){if(_.__VUE_I18N_SYMBOL__=l,_.provide(_.__VUE_I18N_SYMBOL__,u),G(k[0])){const y=k[0];u.__composerExtend=y.__composerExtend,u.__vueI18nExtend=y.__vueI18nExtend}let T=null;!n&&i&&(T=Qc(_,u.global)),__VUE_I18N_FULL_INSTALL__&&zc(_,u,...k),__VUE_I18N_LEGACY_API__&&n&&_.mixin(Uc(o,o.__composer,u));const A=_.unmount;_.unmount=()=>{T&&T(),u.dispose(),A()}},get global(){return o},dispose(){a.stop()},__instances:r,__getInstance:c,__setInstance:f,__deleteInstance:h};return u}}function Ce(t={}){const e=ln();if(e==null)throw de(ue.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw de(ue.NOT_INSTALLED);const n=Wc(e),i=Hc(n),s=Ta(e),r=Vc(t,s);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw de(ue.NOT_AVAILABLE_IN_LEGACY_MODE);return Kc(e,r,i,t)}if(r==="global")return Ea(i,t,s),i;if(r==="parent"){let l=jc(n,e,t.__useComponent);return l==null&&(l=i),l}const a=n;let o=a.__getInstance(e);if(o==null){const l=pe({},t);"__i18n"in s&&(l.__i18n=s.__i18n),i&&(l.__root=i),o=is(l),a.__composerExtend&&(o[Oi]=a.__composerExtend(o)),Xc(a,e,o),a.__setInstance(e,o)}return o}function Gc(t,e,n){const i=So();{const s=__VUE_I18N_LEGACY_API__&&e?i.run(()=>Ci(t)):i.run(()=>is(t));if(s==null)throw de(ue.UNEXPECTED_ERROR);return[i,s]}}function Wc(t){{const e=Io(t.isCE?Bc:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw de(t.isCE?ue.NOT_INSTALLED_WITH_PROVIDE:ue.UNEXPECTED_ERROR);return e}}function Vc(t,e){return Gn(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function Hc(t){return t.mode==="composition"?t.global:t.global.__composer}function jc(t,e,n=!1){let i=null;const s=e.root;let r=Yc(e,n);for(;r!=null;){const a=t;if(t.mode==="composition")i=a.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(r);o!=null&&(i=o.__composer,n&&i&&!i[ka]&&(i=null))}if(i!=null||s===r)break;r=r.parent}return i}function Yc(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function Xc(t,e,n){vn(()=>{},e),qi(()=>{const i=n;t.__deleteInstance(e);const s=i[Oi];s&&(s(),delete i[Oi])},e)}function Kc(t,e,n,i={}){const s=e==="local",r=Kr(null);if(s&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw de(ue.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=V(i.inheritLocale)?i.inheritLocale:!M(i.locale),o=Ee(!s||a?n.locale.value:M(i.locale)?i.locale:Lt),l=Ee(!s||a?n.fallbackLocale.value:M(i.fallbackLocale)||ne(i.fallbackLocale)||G(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:o.value),c=Ee(Hn(o.value,i)),f=Ee(G(i.datetimeFormats)?i.datetimeFormats:{[o.value]:{}}),h=Ee(G(i.numberFormats)?i.numberFormats:{[o.value]:{}}),u=s?n.missingWarn:V(i.missingWarn)||nt(i.missingWarn)?i.missingWarn:!0,_=s?n.fallbackWarn:V(i.fallbackWarn)||nt(i.fallbackWarn)?i.fallbackWarn:!0,k=s?n.fallbackRoot:V(i.fallbackRoot)?i.fallbackRoot:!0,T=!!i.fallbackFormat,A=ee(i.missing)?i.missing:null,y=ee(i.postTranslation)?i.postTranslation:null,E=s?n.warnHtmlMessage:V(i.warnHtmlMessage)?i.warnHtmlMessage:!0,g=!!i.escapeParameter,v=s?n.modifiers:G(i.modifiers)?i.modifiers:{},P=i.pluralRules||s&&n.pluralRules;function w(){return[o.value,l.value,c.value,f.value,h.value]}const I=H({get:()=>r.value?r.value.locale.value:o.value,set:N=>{r.value&&(r.value.locale.value=N),o.value=N}}),L=H({get:()=>r.value?r.value.fallbackLocale.value:l.value,set:N=>{r.value&&(r.value.fallbackLocale.value=N),l.value=N}}),x=H(()=>r.value?r.value.messages.value:c.value),D=H(()=>f.value),he=H(()=>h.value);function j(){return r.value?r.value.getPostTranslationHandler():y}function ge(N){r.value&&r.value.setPostTranslationHandler(N)}function zt(){return r.value?r.value.getMissingHandler():A}function Ut(N){r.value&&r.value.setMissingHandler(N)}function Re(N){return w(),N()}function Bt(...N){return r.value?Re(()=>Reflect.apply(r.value.t,null,[...N])):Re(()=>"")}function $t(...N){return r.value?Reflect.apply(r.value.rt,null,[...N]):""}function Gt(...N){return r.value?Re(()=>Reflect.apply(r.value.d,null,[...N])):Re(()=>"")}function Wt(...N){return r.value?Re(()=>Reflect.apply(r.value.n,null,[...N])):Re(()=>"")}function xe(N){return r.value?r.value.tm(N):{}}function ct(N,K){return r.value?r.value.te(N,K):!1}function Vt(N){return r.value?r.value.getLocaleMessage(N):{}}function _t(N,K){r.value&&(r.value.setLocaleMessage(N,K),c.value[N]=K)}function Ht(N,K){r.value&&r.value.mergeLocaleMessage(N,K)}function jt(N){return r.value?r.value.getDateTimeFormat(N):{}}function wn(N,K){r.value&&(r.value.setDateTimeFormat(N,K),f.value[N]=K)}function Yt(N,K){r.value&&r.value.mergeDateTimeFormat(N,K)}function Xt(N){return r.value?r.value.getNumberFormat(N):{}}function yt(N,K){r.value&&(r.value.setNumberFormat(N,K),h.value[N]=K)}function Kt(N,K){r.value&&r.value.mergeNumberFormat(N,K)}const qt={get id(){return r.value?r.value.id:-1},locale:I,fallbackLocale:L,messages:x,datetimeFormats:D,numberFormats:he,get inheritLocale(){return r.value?r.value.inheritLocale:a},set inheritLocale(N){r.value&&(r.value.inheritLocale=N)},get availableLocales(){return r.value?r.value.availableLocales:Object.keys(c.value)},get modifiers(){return r.value?r.value.modifiers:v},get pluralRules(){return r.value?r.value.pluralRules:P},get isGlobal(){return r.value?r.value.isGlobal:!1},get missingWarn(){return r.value?r.value.missingWarn:u},set missingWarn(N){r.value&&(r.value.missingWarn=N)},get fallbackWarn(){return r.value?r.value.fallbackWarn:_},set fallbackWarn(N){r.value&&(r.value.missingWarn=N)},get fallbackRoot(){return r.value?r.value.fallbackRoot:k},set fallbackRoot(N){r.value&&(r.value.fallbackRoot=N)},get fallbackFormat(){return r.value?r.value.fallbackFormat:T},set fallbackFormat(N){r.value&&(r.value.fallbackFormat=N)},get warnHtmlMessage(){return r.value?r.value.warnHtmlMessage:E},set warnHtmlMessage(N){r.value&&(r.value.warnHtmlMessage=N)},get escapeParameter(){return r.value?r.value.escapeParameter:g},set escapeParameter(N){r.value&&(r.value.escapeParameter=N)},t:Bt,getPostTranslationHandler:j,setPostTranslationHandler:ge,getMissingHandler:zt,setMissingHandler:Ut,rt:$t,d:Gt,n:Wt,tm:xe,te:ct,getLocaleMessage:Vt,setLocaleMessage:_t,mergeLocaleMessage:Ht,getDateTimeFormat:jt,setDateTimeFormat:wn,mergeDateTimeFormat:Yt,getNumberFormat:Xt,setNumberFormat:yt,mergeNumberFormat:Kt};function Qt(N){N.locale.value=o.value,N.fallbackLocale.value=l.value,Object.keys(c.value).forEach(K=>{N.mergeLocaleMessage(K,c.value[K])}),Object.keys(f.value).forEach(K=>{N.mergeDateTimeFormat(K,f.value[K])}),Object.keys(h.value).forEach(K=>{N.mergeNumberFormat(K,h.value[K])}),N.escapeParameter=g,N.fallbackFormat=T,N.fallbackRoot=k,N.fallbackWarn=_,N.missingWarn=u,N.warnHtmlMessage=E}return Po(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw de(ue.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const N=r.value=t.proxy.$i18n.__composer;e==="global"?(o.value=N.locale.value,l.value=N.fallbackLocale.value,c.value=N.messages.value,f.value=N.datetimeFormats.value,h.value=N.numberFormats.value):s&&Qt(N)}),qt}const qc=["locale","fallbackLocale","availableLocales"],nr=["t","rt","d","n","tm","te"];function Qc(t,e){const n=Object.create(null);return qc.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r)throw de(ue.UNEXPECTED_ERROR);const a=Oo(r.value)?{get(){return r.value.value},set(o){r.value.value=o}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,s,a)}),t.config.globalProperties.$i18n=n,nr.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r||!r.value)throw de(ue.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,r)}),()=>{delete t.config.globalProperties.$i18n,nr.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}Ic();__INTLIFY_JIT_COMPILATION__?Ds(kc):Ds(bc);Ql(Ll);Jl(aa);if(__INTLIFY_PROD_DEVTOOLS__){const t=je();t.__INTLIFY__=!0,$l(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const Jc="preferred-theme",ir=Ee("dark");function Sa(){const t=n=>{ir.value=n,document.documentElement.setAttribute("data-theme",n),localStorage.setItem(Jc,n)},e=()=>{t("dark")};return vn(()=>{e()}),{theme:ir,setTheme:t}}const Ia="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LjE0NjI4OTk3NzcsIDIwMjMvMDYvMjUtMjM6NTc6MTQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS4xIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RTU2NEE4OTE2MDQxMUVGODczMEU5MkNFRjdBOUNCQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RTU2NEE4QTE2MDQxMUVGODczMEU5MkNFRjdBOUNCQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRFNTY0QTg3MTYwNDExRUY4NzMwRTkyQ0VGN0E5Q0JCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRFNTY0QTg4MTYwNDExRUY4NzMwRTkyQ0VGN0E5Q0JCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4LrnOAAACzdJREFUeNrcWgt0VcUVPTe/l7yQAgYQlE9FQVBUWuzHKtoqCqhYDAhIfgKJCSkiyKLVCihWrC0CiviLSLMgISiFgqSyCquFKlYCtUBBPo0oEApUFzYISV6+033m3nfv3PvufcnjJV1dfayT+d6Z2XPOnDnnDJoQgv5ffnHOijmzRQIJGqoR/RjpdUi/oQmKRVOjJsRJlHeg/O68F2P+0V6LWpZVn4w57sJcd5MQVyPfARQDCmBNJ7CO93kNue8knlC/01TOPDlbdEOnfAySjY/6arKD2ZG4jPoGpH9B/RJQ2ZylMU1tCiS7vhfGnYl5JmDOHjy/XIORynUIqkV5O9KFOb9N3Bb8NkYB0hWNc5F9PAjEQmxkeDCieJRvQ2kJaHQbA+mJORaApmOOHkEQJhCraxLyI5EufmtM4A4bGADhBeYim6vpHYMgGpBUYLQ9qDtlcCbYdgXKTy14pOnGtgDycnZ9sgHiQV2s9YkwRwB0CNk9ELmzDk4NBqfmrLi/doDKmSGgh/CRT1ksQNDT6Mz1majPQ3kl8jUWpwSfqSm/nNbUIVowGOdmULp+joUhUgyAngBlYh0ZKBcg/64UdYtrtyGfbioAFIYj6UdBVgo6hr8/nb9Y26Aw95NfPNr8EdIq0FR8E2/0vQN0LXLlUYhXEsYYCbpM2fm9oFn5pb5tSteDyx8I7EL6NWiiRiJG3wcaAZob5Mw1GpnLbkK6Rgdi/819KYbZXIj2vXJbdPCXg66Nii2CuukiI7nNNSxaKx1A5C9nbeIx9HsVnKqwlAL1McUMHyYr4vUVkp1hpj6GCf+mWVxkVd79VwVNWhQi1glJqhQvfQ1nkPXmtBAH0f53RdT81plhHW4d7mZ0avScWIhm9G1QtFusfheJuCg448ecicrimsKvQUpPg8IZTeVMrZEy8Q5dF2bqbhjEFEs5kKDOxMrjYjkjKAWb4Q+eWVBXCi+6fdB3oCUKIqBqs6OKhopDp/HzZzR/zzkC1HCcxpcZ0Y1B/a9vguiH+i5RHBrevFTzkhaS0xlvjgsMdPaEGgZwypJKx1IW/7TMGUF/xN8MeVHp5cFIX4D2WorSLjYjMHhX1I1BOV9OZnJGKoIbkP2+PE8R/l7NqOPL8U4WM/WCRPpD0MLlYwOva7pmgzoWvQwgWUgTDIUhkH5gqWaiD0Hr0FKgnJ9b8Lc/Oh4CfY26nlK8BPmUHQwe4Et4kkUPN340qzDueIQidj/GuUkRczIUAa/jHhS+BToE7tcg7Qti8Yohq99+ZEpsttnTM5sHoOHXGHyUKbuqXabWCYsrSrke+ddAzzz2ZtxXreTKSMPGu9q61YXDFjO5T047DVw5jfRxUEnme/4mm6GJc8IHmxvT8EGyphiYdhDKBKROCquWRCHSZTOXx1d4gXglk61iMRr9fg66puWFhwIEkANIF6GuOOs9f2OI1cw/nBPWJKPQ8T7Q9WBvZxLSuOQbP8ECJVQQKgdZhrejeR3SHfjmJOoDbMKz1kM6iLmPujTjslQ2Szh3n92ORuSbNV1d1yBfiTp2Q97OKvPv9HQBbJprOkDpvgQffPYnLsFAA6QNJcRAlOMsECEiR7rSoArU45Klc0Z/Puz90amH5r77Z5Fn0fkUdBx1Z4xvAwYQzh/Huo5ml/nrXe7A1nuauOX9DASDjtHYMDXMdHNX7SJn7TSFioyy+1WoYyWzE+Wd+gbQKeSrpqxPrItMmVyE27wwv5Fv63Gg+Zj0m6rIWb6HS539TLCd9z6AbgLoD5GvhOdYG5XlHU0MAKp4MgZ4XoqiTeRCD7LeLgGy1vsTaBWKW/PW+L5stxhAhHdEMejbyBZwURWvUO9QAjnJ6ps1UF6p70Rbxw60aKMzS3IahmKBRaC+FF68+Ew8x3EDmPaek65Iq40ParJJG5LEf40zBncOSEeKOG5gaTQFSDM49Xt2h6au9u1zfg9nK5XYBZckeiHP1gRz+VzRfbUciWG78TOo4bPtDga/85puqArSLWhLg+nitRHpE1NLfEfUj2BEdkffYezlsmMGwGyNsxHpMzaDXePzSL8A7Vl1d81WPmOZm/2n2pMz2Hm4sbqfE2uC0Be0Be1zVCCF4+ti0fd21OeBOO3sZqrooIRPWuO6lXAPK47i4TXLwa0t6VuSQ0JcMW3AGRiEIlkahnYR24tJ5wHIwWDHNybUwSMU09D3dcMC72y4EKrXSYoRqdZ1QlUaxmQFMnP1sGp/m4NhxwqDX+kQsdNYzAIAKVeAsD32GNqfoqCycGg+hwtgywdVu3TMiOZxfK/09uoObcsZNm2IblACInBnxVscPlWAsG03haMthn3mYjiGWg6ugIS5gTNQyiv9UXVCm4BZOqmBvdJRQbVsTPQx3z/gSr0iOrcY4tXJFiltSbxsgIQboJ+gfmibgMFA92LADDKMTo4+YqY16oEHV2Cgihy09yNHzNjdR1HFynLWSFEsip13BdIpb996octFazNwBJsqWLs8yx6oZokcu9gbHGfqZo7oOxfufjZEi3VqSIesICTHvtdFBOalyQ0cI+sDJGkA8LBGNvGqA20EV0y3uVDXXnci26XV4hVOAbilHC0iGhYWDIzIVLCxNz66FB91xEcpoKtAbL4MIeNyU4zIT/Hnzw7lcDnavhOReFGrxMsJbLCrmL2Q19gJjSNAfB6uR1VH+TKgB+lSSHWX7UbkbnaqHCLWA02Xtla8vHY/RLzUep0uCwEDIH0xwGw0PoAeqaqzRcISBeWGD7bz48/u/NW+c86AIXupqnhpTvFyngnv3XdRDGba0QYGQHojeRb0oNPyJbJ7iw7x4j9foP2wy4WabGo6IVzPgROcpux+KBDhxbkEEww8R35gKkDjeM3O1rOoP6L736I33/T8EOQQL6ZKZE+6xJAbdANUeIpX6OKE9VJnAxk6hsJFob7P3MQvVhwAVCLx7I+/guIu1NWirhdoHOnvnZ0c54CDEP92ie5XGc8TtkPcyls+9GyQC0h9QwJqeJbfBXsr4rUf2dmProjfoXxfuSyr/hNDBT+CxSQpUUj2NWpcOPMlJjvv1FTkdnYo3DnxEi8TYZX6CtBfiX9xRKR4hh2I/E1bmXAOfYswyn7HGarGhA0udttpfoVrlRHp8HgtToYTLzM9pr7PJJs6XdC/NClanm8plexdKgNxgK6OA3UuCoDFb4fx3hK5eLlb6TaQPDaHqBTOyEh6sCPXxYaxxzgyGauICECIauRDnKXJv0viuq1o+8xTvESE4hVqQXyO5A8WGEEXlEYOmX433EMP+gxSJuQzdCb3nUThwcl9oPWGR+rlo3juvKsisL7nf5tAH6tW8xGFM7C/xMSXH6q/1bmu19Lr2BeZjD6DlIk4+njIC/mkjUkcWi0iPT7csnhRKEA3bhlUDloxdndKtaqat0pTnuR/VCBj5xdDe73B50e+z+j3zAT5KEX6G40hNtuNNxLPX/ampMMr7615HtnuMtbcmlvebky6iddRJM8ByAGnP1OOxhL9MJvIhzAgfsJGYRVqfoN8Pv+nHLIO8mHki3LWJl5oyeLOKvNvRv8npRREYER6iBc/m88FlbkGAeGj9MQCF6DjREwQFybQHaxjtfuz3LWJqyJxI4pH1AzHPLM0/Zkv3vX2b/ZUBvzCzP+jadHYXSmbw0Y0cU76oON0fJCumdauI2ZMMqi3B/kXQWvAlcZInbuSu6rZ65yI78cgvQppUgtajVV/hfHmUzq2POVIq8KzOCcdjQfT0fwKrOmmS6xxl5zCBx8gvx7a66/RuNyrh1WzozdI/g8pQT/AuFca0cw4AwhzoQr0uRHa3Ya6fQBS326x5v+l338EGACjVkptuvmgywAAAABJRU5ErkJggg==",Zc={common:{learnMore:"Learn More",viewAll:"View All",back:"Back",close:"Close",confirm:"Confirm",cancel:"Cancel",loading:"Loading...",error:"Error",success:"Success",retry:"Retry"},theme:{light:"Light Mode",dark:"Dark Mode"},nav:{home:"Home",tech:"Tech",satnet:"SatsNet",eco:"Eco",roadmap:"Roadmap",docs:"Docs"},roles:{explorer:"Explorer",developer:"Developer",user:"User"},menu:{navigation:"Navigation",roles:"Roles",settings:"Settings",theme:"Theme",language:"Language",documentation:"Docs"},footer:{info:"Welcome to SAT20Labs, building a decentralized future together",product:"Product",developers:"Developers",services:"Services",home:"Home",tech:"Technology",satnet:"SatoshiNet",community:"Community",whitepaper:"Whitepaper",docs:"Documentation",api:"API",github:"GitHub",market:"Market",explorer:"Explorer",eco:"Ecosystem",links:[{link1:""},{link2:""},{link3:""}]},home:{hero:{mainTitle:"One Satoshi, One World",subTitle:"BTC Native Asset Issuance and Circulation",features:[{text:"No splitting, ",accent:"100% Non-custodial!"},{text:"Our ",accent:'"Partial Order Book"',suffix:" allows users to place orders of any amount freely."},{text:"No more complex splitting, just ",accent:"trade anytime."}],description:`SAT20Labs provides asset issuance and circulation infrastructure for the Bitcoin ecosystem. The core technology consists of the SAT20 protocol and innovative SatoshiNet. SatoshiNet is based on Lightning channels and Bitcoin parallel networks, supporting multiple protocol assets such as Ordinals, Runes, OrdX, and BRC20, offering ultra-low fees and second-level confirmation through the network.

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
`}}},eu={common:{learnMore:"更多详情",viewAll:"查看全部",back:"返回",close:"关闭",confirm:"确认",cancel:"取消",loading:"加载中...",error:"出错了",success:"成功",retry:"重试"},theme:{light:"浅色模式",dark:"深色模式"},nav:{home:"首 页",tech:"技 术",satnet:"聪 网",eco:"生 态",roadmap:"路 线",docs:"文档"},roles:{explorer:"浏览器",developer:"开发者",user:"用户"},menu:{navigation:"导航",roles:"角色",settings:"设置",theme:"主题",language:"语言",documentation:"文档"},footer:{info:"欢迎来到SAT20Labs，共建去中心化的未来",product:"产品",developers:"开发者",services:"服务",home:"首页",tech:"技术",satnet:"聪网",community:"社区",whitepaper:"白皮书",docs:"文档",api:"API",github:"GitHub",market:"市场",explorer:"浏览器",eco:"生态",links:[{link1:"链接1"},{link2:"链接2"},{link3:"链接3"}]},home:{hero:{mainTitle:"一聪一世界",subTitle:"BTC原生资产发行与流通",features:[{text:"无需分割，",accent:"100%非托管！"},{text:"我们的",accent:'"部分订单簿"',suffix:"允许用户自由挂单任意数量。"},{text:"不再有复杂的分割，只需",accent:"随时交易。"}],description:`SAT20Labs为比特币生态提供资产发行和流通基础设施。核心技术是SAT20协议和创新的SatoshiNet。SatoshiNet基于闪电通道和比特币平行网络，支持Ordinals、Runes、OrdX、BRC20等多种协议资产，通过网络提供超低手续费和秒级确认。

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
`}}},tu=localStorage.getItem("language")||"en",Pa=$c({legacy:!1,locale:tu,globalInjection:!0,messages:{en:Zc,zh:eu}});const we=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},nu={class:"header"},iu={class:"container"},su={class:"nav"},ru={class:"desktop-nav"},au={class:"main-nav"},ou={class:"role-switch"},lu=["onClick"],cu={class:"language-switcher"},uu=["onClick"],fu={class:"desktop-docs-container"},du={class:"docs-dropdown"},hu={class:"docs-menu"},mu=["href"],pu={class:"dropdown-content"},gu={class:"dropdown-section"},_u={class:"dropdown-section"},yu={class:"submenu"},vu={class:"dropdown-section"},bu={class:"setting-item"},ku=["onClick"],Tu={class:"setting-item"},Eu=["onClick"],wu={__name:"Header",setup(t){const{t:e,locale:n}=Ce();Sa();const i=xo(),s=qr(),r=Ee(!1),a=Ee(null),o=Ee(!1),l=Ee(!1);Ee(null);const c=[{key:"zh",label:"中"},{key:"en",label:"EN"}],f=[{key:"home",to:"/"},{key:"tech",to:"/tech"},{key:"satnet",to:"/satnet"},{key:"eco",to:"/eco"},{key:"roadmap",to:"/roadmap"}],h=[{key:"whitepaper",to:"/docs/whitepaper"},{key:"getting_started",to:"/docs/getting_started"},{key:"api_reference",to:"/docs/api_reference"},{key:"contributing",to:"/docs/contributing"}],_=[{key:"explorer",to:H(()=>n.value==="zh"?"https://app.sat20.org/#/explorer":"https://app.sat20.org/#/explorer?language=en")},{key:"developer",to:"/developers"},{key:"user",to:"/user"}],k=H(()=>f.some(I=>i.path===I.to)),T=I=>{a.value=I;const L=_.find(x=>x.key===I);if(L&&L.to){const x=L.to.value||L.to;x.startsWith("http")?window.open(x,"_blank","noopener,noreferrer"):s.push(x)}A()},A=()=>{r.value=!1,l.value=!1},y=()=>{r.value=!r.value},E=async I=>{localStorage.setItem("language",I),Pa.global.locale.value=I,await Qr(),A()},g=()=>{window.innerWidth<768?l.value=!l.value:o.value=!o.value},v=()=>{o.value=!1},P=I=>{const L=document.querySelector(".dropdown-menu"),x=document.querySelector(".menu-toggle");r.value&&L&&x&&!L.contains(I.target)&&!x.contains(I.target)&&A()};vn(()=>{document.addEventListener("click",P)}),qi(()=>{document.removeEventListener("click",P)});const w={mounted(I,L){I.clickOutsideEvent=x=>{I===x.target||I.contains(x.target)||L.value(x)},document.addEventListener("click",I.clickOutsideEvent)},unmounted(I){document.removeEventListener("click",I.clickOutsideEvent)}};return(I,L)=>{const x=Qi("router-link");return z(),$("header",nu,[p("div",iu,[p("nav",su,[Q(x,{to:"/",class:"logo"},{default:ce(()=>L[1]||(L[1]=[p("img",{src:Ia,alt:"SAT20Labs"},null,-1),p("span",{class:"logo-text"},"SAT20Labs",-1)])),_:1}),p("div",ru,[p("div",au,[(z(),$(fe,null,be(f,D=>Q(x,{key:D.key,to:D.to,class:me(["main-nav-link",{active:k.value&&q(i).path===D.to}])},{default:ce(()=>[le(F(q(e)(`nav.${D.key}`)),1)]),_:2},1032,["to","class"])),64))]),p("div",ou,[(z(),$(fe,null,be(_,D=>p("button",{key:D.key,class:me(["role-btn",{active:!k.value&&a.value===D.key,dimmed:k.value}]),onClick:he=>T(D.key)},F(q(e)(`roles.${D.key}`)),11,lu)),64))]),p("div",cu,[(z(),$(fe,null,be(c,D=>p("button",{key:D.key,class:me(["lang-btn",{active:q(n)===D.key}]),onClick:he=>E(D.key)},F(D.label),11,uu)),64))]),p("div",fu,[ti((z(),$("div",du,[p("button",{class:"docs-btn",onClick:g},[le(F(q(e)("menu.documentation"))+" ",1),p("span",{class:me(["arrow-down",{rotated:o.value}])},"▼",2)]),ti(p("div",hu,[(z(),$(fe,null,be(h,D=>(z(),$(fe,{key:D.key},[D.external?(z(),$("a",{key:0,href:D.to,target:"_blank",rel:"noopener noreferrer",class:"docs-link",onClick:v},[le(F(q(e)(`docs.categories.${D.key}`))+" ",1),L[2]||(L[2]=p("span",{class:"external-icon"},"↗",-1))],8,mu)):(z(),Ge(x,{key:1,to:D.to,class:me(["docs-link",{active:q(i).path===D.to}]),onClick:v},{default:ce(()=>[le(F(q(e)(`docs.categories.${D.key}`)),1)]),_:2},1032,["to","class"]))],64))),64))],512),[[Ts,o.value]])])),[[w,v]])])]),p("button",{class:me(["menu-toggle",{active:r.value}]),onClick:y},L[3]||(L[3]=[p("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[p("line",{x1:"4",y1:"6",x2:"20",y2:"6",class:"menu-line top"}),p("line",{x1:"4",y1:"12",x2:"20",y2:"12",class:"menu-line middle"}),p("line",{x1:"4",y1:"18",x2:"20",y2:"18",class:"menu-line bottom"})],-1)]),2),p("div",{class:me(["dropdown-menu",{active:r.value}])},[p("div",pu,[p("div",gu,[(z(),$(fe,null,be(f,D=>Q(x,{key:D.key,to:D.to,class:"menu-item",onClick:A},{default:ce(()=>[le(F(q(e)(`nav.${D.key}`)),1)]),_:2},1032,["to"])),64))]),p("div",_u,[p("button",{class:"menu-item",onClick:L[0]||(L[0]=D=>l.value=!l.value)},[le(F(q(e)("menu.documentation"))+" ",1),p("span",{class:me(["icon",{"is-active":l.value}])},"▼",2)]),ti(p("div",yu,[(z(),$(fe,null,be(h,D=>Q(x,{key:D.key,to:D.to,class:"submenu-item",onClick:A},{default:ce(()=>[le(F(q(e)(`docs.categories.${D.key}`)),1)]),_:2},1032,["to"])),64))],512),[[Ts,l.value]])]),p("div",vu,[p("div",bu,[(z(),$(fe,null,be(_,D=>p("button",{key:D.key,class:me(["role-btn",{active:a.value===D.key&&!k.value}]),onClick:he=>T(D.key)},F(q(e)(`roles.${D.key}`)),11,ku)),64))]),p("div",Tu,[(z(),$(fe,null,be(c,D=>p("button",{key:D.key,class:me(["lang-btn",{active:q(n)===D.key}]),onClick:he=>E(D.key)},F(D.label),11,Eu)),64))])])])],2)])])])}}},Au=we(wu,[["__scopeId","data-v-0fa218fa"]]),Su={},Iu={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"};function Pu(t,e){return z(),$("svg",Iu,e[0]||(e[0]=[p("path",{d:"M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246z"},null,-1)]))}const Ou=we(Su,[["render",Pu]]),Cu={},xu={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"};function Lu(t,e){return z(),$("svg",xu,e[0]||(e[0]=[p("path",{d:"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"},null,-1)]))}const Nu=we(Cu,[["render",Lu]]);const Mu={class:"footer"},Du={class:"container"},Ru={class:"footer-content"},Fu={class:"footer-brand"},zu={class:"footer-description"},Uu={class:"footer-social"},Bu={href:"https://x.com/SAT20Labs",target:"_blank",rel:"noopener noreferrer"},$u={href:"https://t.me/ordxnals",target:"_blank",rel:"noopener noreferrer"},Gu={class:"footer-nav"},Wu={class:"footer-section"},Vu={class:"footer-section"},Hu={href:"https://github.com/sat20-labs/",target:"_blank",rel:"noopener noreferrer"},ju={class:"footer-section"},Yu={href:"https://ordx.market",target:"_blank",rel:"noopener noreferrer"},Xu={href:"https://app.sat20.org/#/explorer",target:"_blank",rel:"noopener noreferrer"},Ku={class:"footer-bottom"},qu={class:"copyright"},Qu={__name:"Footer",setup(t){return Ce(),(e,n)=>{const i=Qi("router-link");return z(),$("footer",Mu,[p("div",Du,[p("div",Ru,[p("div",Fu,[n[2]||(n[2]=p("img",{src:Ia,alt:"SAT20Labs",class:"footer-logo"},null,-1)),p("p",zu,F(e.$t("footer.info")),1),p("div",Uu,[p("a",Bu,[Q(Ou),n[0]||(n[0]=le(" Twitter "))]),p("a",$u,[Q(Nu),n[1]||(n[1]=le(" Telegram "))])])]),p("div",Gu,[p("div",Wu,[p("h3",null,F(e.$t("footer.product")),1),p("ul",null,[p("li",null,[Q(i,{to:"/"},{default:ce(()=>[le(F(e.$t("nav.home")),1)]),_:1})]),p("li",null,[Q(i,{to:"/tech"},{default:ce(()=>[le(F(e.$t("nav.tech")),1)]),_:1})]),p("li",null,[Q(i,{to:"/satnet"},{default:ce(()=>[le(F(e.$t("nav.satnet")),1)]),_:1})])])]),p("div",Vu,[p("h3",null,F(e.$t("footer.developers")),1),p("ul",null,[p("li",null,[Q(i,{to:"https://docs.sat20.org/"},{default:ce(()=>[le(F(e.$t("footer.whitepaper")),1)]),_:1})]),p("li",null,[Q(i,{to:"/docs/api_reference"},{default:ce(()=>[le(F(e.$t("footer.api")),1)]),_:1})]),p("li",null,[p("a",Hu,F(e.$t("footer.github")),1)])])]),p("div",ju,[p("h3",null,F(e.$t("footer.community")),1),p("ul",null,[p("li",null,[Q(i,{to:"/eco"},{default:ce(()=>[le(F(e.$t("nav.eco")),1)]),_:1})]),p("li",null,[p("a",Yu,F(e.$t("footer.market")),1)]),p("li",null,[p("a",Xu,F(e.$t("footer.explorer")),1)])])])])]),p("div",Ku,[p("p",qu,"© "+F(new Date().getFullYear())+" SAT20.org. All rights reserved.",1),n[3]||(n[3]=p("div",{class:"footer-links"},null,-1))])])])}}},Ju=we(Qu,[["__scopeId","data-v-af2486a5"]]);const Zu=50,ef={__name:"ParticlesBg",setup(t){const e=Ee(null);let n=null;const i=[],s={color:"rgba(42, 111, 255, 0.2)",radius:2,speed:.5,connectionDistance:150,connectionWidth:1};function r(){return{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*s.speed,vy:(Math.random()-.5)*s.speed}}function a(){for(let u=0;u<Zu;u++)i.push(r())}function o(u,_){u.beginPath(),u.arc(_.x,_.y,s.radius,0,Math.PI*2),u.fillStyle=s.color,u.fill()}function l(u){u.strokeStyle=s.color,u.lineWidth=s.connectionWidth;for(let _=0;_<i.length;_++)for(let k=_+1;k<i.length;k++){const T=i[_].x-i[k].x,A=i[_].y-i[k].y,y=Math.sqrt(T*T+A*A);if(y<s.connectionDistance){const E=(1-y/s.connectionDistance)*.5;u.strokeStyle=`rgba(42, 111, 255, ${E})`,u.beginPath(),u.moveTo(i[_].x,i[_].y),u.lineTo(i[k].x,i[k].y),u.stroke()}}}function c(){for(const u of i)u.x+=u.vx,u.y+=u.vy,(u.x<0||u.x>window.innerWidth)&&(u.vx*=-1),(u.y<0||u.y>window.innerHeight)&&(u.vy*=-1)}function f(){if(!e.value)return;const u=e.value.getContext("2d");u.clearRect(0,0,e.value.width,e.value.height),c(),l(u);for(const _ of i)o(u,_);n=requestAnimationFrame(f)}function h(){e.value&&(e.value.width=window.innerWidth,e.value.height=window.innerHeight)}return vn(()=>{h(),a(),f(),window.addEventListener("resize",h)}),qi(()=>{n&&cancelAnimationFrame(n),window.removeEventListener("resize",h)}),(u,_)=>(z(),$("canvas",{ref_key:"canvas",ref:e,class:"particles-bg"},null,512))}},tf=we(ef,[["__scopeId","data-v-0d46e96f"]]);const nf=["data-theme"],sf={__name:"App",setup(t){const{theme:e}=Sa(),{locale:n}=Ce();return cn(n,()=>{document.body.setAttribute("data-i18n-transition","fade"),setTimeout(()=>{document.body.removeAttribute("data-i18n-transition")},200)}),(i,s)=>{const r=Qi("router-view");return z(),$("div",{id:"app","data-theme":q(e)},[i.$route.name==="home"?(z(),Ge(tf,{key:0})):Lo("",!0),Q(Au),p("main",null,[Q(r,null,{default:ce(({Component:a})=>[Q(No,{name:"page-fade",mode:"out-in"},{default:ce(()=>[(z(),Ge(un(a)))]),_:2},1024)]),_:1})]),Q(Ju)],8,nf)}}},rf="modulepreload",af=function(t,e){return new URL(t,e).href},sr={},Se=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=af(r,i),r in sr)return;sr[r]=!0;const a=r.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===r&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":rf,a||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),a)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};const of={__name:"BaseButton",props:{primary:Boolean,secondary:Boolean},setup(t){return(e,n)=>(z(),$("button",Mo({class:["base-button",{primary:t.primary,secondary:t.secondary}]},e.$attrs),[Jr(e.$slots,"default",{},void 0,!0)],16))}},Fn=we(of,[["__scopeId","data-v-bc42e13e"]]);const lf={class:"hero-section"},cf={class:"hero-content"},uf={class:"main-title"},ff={class:"subtitle"},df={class:"feature-box"},hf={class:"description"},mf={class:"cta-buttons"},pf={__name:"HeroSection",setup(t){const{t:e,locale:n}=Ce(),i=()=>{const r=n.value==="zh"?"sat20_whitepaper_zh.pdf":"sat20_whitepaper_en.pdf",a=`/documents/whitepaper/${r}`,o=document.createElement("a");o.href=a,o.setAttribute("download",r),o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),document.body.removeChild(o)},s=()=>{window.open("https://demo.ordx.market","_blank","noopener,noreferrer")};return(r,a)=>(z(),$("section",lf,[p("div",cf,[p("h1",uf,[le(F(q(e)("home.hero.mainTitle"))+" ",1),a[0]||(a[0]=p("div",{class:"title-underline"},null,-1))]),p("h2",ff,F(q(e)("home.hero.subTitle")),1),p("div",df,[p("p",hf,F(q(e)("home.hero.description")),1)]),p("div",mf,[Q(Fn,{primary:"",onClick:i},{default:ce(()=>[le(F(q(e)("home.hero.downloadWhitepaper")),1)]),_:1}),Q(Fn,{secondary:"",onClick:s},{default:ce(()=>[le(F(q(e)("home.hero.tryTestnet")),1)]),_:1})])])]))}},gf=we(pf,[["__scopeId","data-v-2649260b"]]);const _f={class:"core-features",id:"tech"},yf={class:"container"},vf={class:"section-title gradient-text"},bf={class:"features-grid"},kf=["onMouseover"],Tf={class:"feature-icon"},Ef={class:"feature-title"},wf={class:"feature-description"},Af=36,Sf={__name:"CoreFeatures",setup(t){const{t:e,tm:n}=Ce(),i=Zt(()=>Se(()=>import("./IconSat-36a43a93.js"),["./IconSat-36a43a93.js","./vendor-570a9e02.js"],import.meta.url)),s=Zt(()=>Se(()=>import("./IconNetwork-75ef41ca.js"),["./IconNetwork-75ef41ca.js","./vendor-570a9e02.js"],import.meta.url)),r=Zt(()=>Se(()=>import("./IconCompatibility-9c007aee.js"),["./IconCompatibility-9c007aee.js","./vendor-570a9e02.js"],import.meta.url)),a=Zt(()=>Se(()=>import("./IconSmartContract-88ec0663.js"),["./IconSmartContract-88ec0663.js","./vendor-570a9e02.js"],import.meta.url)),o=Zt(()=>Se(()=>import("./IconFee-80b6a526.js"),["./IconFee-80b6a526.js","./vendor-570a9e02.js"],import.meta.url)),l=Ee(null),c=H(()=>e("home.features.title")),f=H(()=>n("home.features.items")),h=[i,s,r,a,o];return vn(()=>{document.querySelectorAll(".feature-card").forEach(_=>{_.addEventListener("mousemove",k=>{const T=_.getBoundingClientRect(),A=(k.clientX-T.left)/T.width*100,y=(k.clientY-T.top)/T.height*100;_.style.setProperty("--mouse-x",`${A}%`),_.style.setProperty("--mouse-y",`${y}%`)})})}),(u,_)=>(z(),$("section",_f,[p("div",yf,[p("h2",vf,F(c.value),1),p("div",bf,[(z(!0),$(fe,null,be(f.value,(k,T)=>(z(),$("div",{key:T,class:me(["feature-card",{highlight:k.highlight}]),onMouseover:A=>l.value=T,onMouseleave:_[0]||(_[0]=A=>l.value=null)},[p("div",Tf,[(z(),Ge(un(h[T]),{size:Af}))]),p("h3",Ef,F(k.title),1),p("p",wf,F(k.description),1)],42,kf))),128))])])]))}},If=we(Sf,[["__scopeId","data-v-a9a948ba"]]),Pf=["width","height"],Of={id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},rs={__name:"BaseIcon",props:{size:{type:[Number,String],default:24},startColor:{type:String,default:"#fe53f9"},endColor:{type:String,default:"#2A6FFF"}},setup(t){const e=t,n=H(()=>({width:typeof e.size=="number"?`${e.size}px`:e.size,height:typeof e.size=="number"?`${e.size}px`:e.size}));return(i,s)=>(z(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:ni(n.value)},[p("defs",null,[p("linearGradient",Of,[p("stop",{offset:"0%",style:ni({"stop-color":t.startColor})},null,4),p("stop",{offset:"100%",style:ni({"stop-color":t.endColor})},null,4)])]),Jr(i.$slots,"default")],12,Pf))}},Cf=["width","height"],xf={__name:"IconBitcoin",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(z(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z",fill:"url(#iconGradient)"},null,-1)]),8,Cf))}},Lf={__name:"IconLightning",props:{size:{type:[Number,String],default:24}},setup(t){return(e,n)=>(z(),Ge(rs,{size:t.size},{default:ce(()=>n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%","stop-color":"#FFD700"}),p("stop",{offset:"100%","stop-color":"#FF8C00"})])],-1),p("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z",stroke:"url(#iconGradient)",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),p("path",{d:"M12 2v20",stroke:"url(#iconGradient)","stroke-width":"0.5","stroke-dasharray":"1 3"},null,-1)])),_:1},8,["size"]))}},Nf={__name:"IconLock",props:{size:{type:[Number,String],default:24}},setup(t){return(e,n)=>(z(),Ge(rs,{size:t.size},{default:ce(()=>n[0]||(n[0]=[p("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2",stroke:"url(#iconGradient)",fill:"none","stroke-width":"2"},null,-1),p("path",{d:"M7 11V7a5 5 0 0 1 10 0v4",stroke:"url(#iconGradient)",fill:"none","stroke-width":"2","stroke-linecap":"round"},null,-1),p("circle",{cx:"12",cy:"16",r:"1",fill:"url(#iconGradient)"},null,-1)])),_:1},8,["size"]))}},Mf={__name:"IconShield",props:{size:{type:[Number,String],default:24}},setup(t){return(e,n)=>(z(),Ge(rs,{size:t.size},{default:ce(()=>n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",gradientUnits:"userSpaceOnUse"},[p("stop",{offset:"0%","stop-color":"#ff9800"}),p("stop",{offset:"100%","stop-color":"#ff6100"})])],-1),p("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",stroke:"url(#iconGradient)",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),p("path",{d:"M9 12l2 2 4-4",stroke:"url(#iconGradient)",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])),_:1},8,["size"]))}};const Df={class:"satonet-section"},Rf={class:"container"},Ff={class:"architecture"},zf={class:"gradient-title"},Uf={class:"subtitle"},Bf={class:"tech-grid"},$f={class:"compatibility"},Gf={class:"protocol-grid"},Wf={class:"protocol-name"},Vf={class:"assets"},Hf={class:"asset-grid"},jf=["src","alt"],Yf={class:"asset-info"},Xf=36,Kf={__name:"SatoshiNet",setup(t){const{t:e,tm:n}=Ce(),i=[xf,Lf,Nf,Mf],s=H(()=>[e("home.satoshinet.architecture.feature1"),e("home.satoshinet.architecture.feature2"),e("home.satoshinet.architecture.feature3"),e("home.satoshinet.architecture.feature4")]),r=H(()=>e("home.satoshinet.title")),a=H(()=>e("home.satoshinet.subtitle"));H(()=>e("home.satoshinet.description")),H(()=>n("home.satoshinet.architecture.layers.items"));const o=H(()=>n("home.satoshinet.compatibility.protocols")),l=H(()=>n("home.satoshinet.assetTypes.types"));return H(()=>n("home.satoshinet.assetTypes.imgurl")),(c,f)=>(z(),$("section",Df,[p("div",Rf,[p("div",Ff,[p("h2",zf,F(r.value),1),p("p",Uf,F(a.value),1),p("div",Bf,[(z(!0),$(fe,null,be(s.value,(h,u)=>(z(),$("div",{key:u,class:"tech-item"},[p("div",{class:me(["tech-icon",`icon-${u+1}`])},[(z(),Ge(un(i[u]),{size:Xf}))],2),p("p",null,F(h),1)]))),128))])]),p("div",$f,[p("h3",null,F(q(e)("home.satoshinet.compatibility.title")),1),p("div",Gf,[(z(!0),$(fe,null,be(o.value,(h,u)=>(z(),$("div",{key:u,class:"protocol-card"},[p("span",Wf,F(h),1)]))),128))])]),p("div",Vf,[p("h3",null,F(q(e)("home.satoshinet.assetTypes.title")),1),p("div",Hf,[(z(!0),$(fe,null,be(l.value,(h,u)=>(z(),$("div",{key:u,class:"asset-card"},[p("div",{class:me(["asset-type-icon",u])},[p("img",{src:q(e)(`home.satoshinet.assetTypes.types.${u}.imgurl`),alt:h.title,class:me(c.asset-h-c.icon)},null,10,jf)],2),p("div",Yf,[p("h4",null,F(q(e)(`home.satoshinet.assetTypes.types.${u}.title`)),1),p("p",null,F(q(e)(`home.satoshinet.assetTypes.types.${u}.description`)),1)])]))),128))])])])]))}},qf=we(Kf,[["__scopeId","data-v-29c08b6a"]]),Qf=["width","height"],Jf={__name:"IconDefi",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(z(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9zm-52.5 185.4L256 407.2 102.2 248.1c-37.2-38.4-35.2-99 4.7-135.4 35.6-32.7 89.7-29.7 122.1 4.3l26.6 27.5 26.6-27.5c32.4-33.9 86.5-37 122.1-4.3 39.8 36.4 41.8 97 4.5 135.3z",fill:"url(#iconGradient)"},null,-1)]),8,Qf))}},Zf=["width","height"],ed={__name:"IconNft",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(z(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zm-50.75 330.25L322.75 437.75c-4.25 4.25-10 6.25-15.75 6.25H160c-17.75 0-32-14.25-32-32V224c0-17.75 14.25-32 32-32h146.75c5.75 0 11.5 2 15.75 6.25l74.5 74.5c8.5 8.5 8.5 22.25 0 30.75l-74.5 74.5c-8.5 8.5-8.5 22.25 0 30.75zM224 256c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32-14.25-32-32-32z",fill:"url(#iconGradient)"},null,-1)]),8,Zf))}},td=["width","height"],nd={__name:"IconGaming",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(z(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M483.13 245.38C461.92 149.49 430 98.31 382.65 98.31c-35.82 0-65.21 27.77-85.75 50.88-18.68 21.04-44.15 21.04-62.82 0-20.54-23.11-49.93-50.88-85.75-50.88-47.35 0-79.27 51.18-100.48 147.07-17.24 77.82-13.19 153.13 11.21 153.13 22.59 0 27.14-36.48 40.04-72.95 14.06-39.71 30.01-84.75 72.05-84.75 27.69 0 42.04 16.18 61.15 38.62 18.68 21.95 44.15 21.95 62.82 0 19.11-22.44 33.46-38.62 61.15-38.62 42.04 0 57.99 45.04 72.05 84.75 12.9 36.47 17.45 72.95 40.04 72.95 24.4 0 28.45-75.31 11.21-153.13z",fill:"url(#iconGradient)"},null,-1)]),8,td))}},id=["width","height"],sd={__name:"IconDecentralized",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(z(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z",fill:"url(#iconGradient)"},null,-1)]),8,id))}},rd=["width","height"],ad={__name:"IconPerformance",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(z(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z",fill:"url(#iconGradient)"},null,-1)]),8,rd))}},od=["width","height"],ld={__name:"IconCost",props:{size:{type:[Number,String],default:32}},setup(t){return(e,n)=>(z(),$("svg",{width:t.size,height:t.size,viewBox:"0 0 512 512"},n[0]||(n[0]=[p("defs",null,[p("linearGradient",{id:"iconGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[p("stop",{offset:"0%",style:{"stop-color":"var(--primary)"}}),p("stop",{offset:"100%",style:{"stop-color":"var(--neon)"}})])],-1),p("path",{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",fill:"url(#iconGradient)"},null,-1)]),8,od))}};const cd={class:"ecosystem",id:"eco"},ud={class:"container"},fd={class:"section-title gradient-text"},dd={class:"eco-section"},hd={class:"section-subtitle"},md={class:"card-grid"},pd=["onMouseenter"],gd={class:"card-icon"},_d={class:"eco-section"},yd={class:"section-subtitle"},vd={class:"card-grid"},bd=["onMouseenter"],kd={class:"card-icon"},Td={__name:"Ecosystem",setup(t){const{t:e,tm:n}=Ce(),i=[{icon:Jf},{icon:ed},{icon:nd}],s=[{icon:sd},{icon:ad},{icon:ld}];return(r,a)=>(z(),$("section",cd,[p("div",ud,[p("h2",fd,F(q(e)("home.ecosystem.title")),1),p("div",dd,[p("h3",hd,F(q(e)("home.ecosystem.applications.title")),1),p("div",md,[(z(),$(fe,null,be(i,(o,l)=>p("div",{key:l,class:me(["eco-card",{active:r.activeCard===`app-${l}`}]),onMouseenter:c=>r.activeCard=`app-${l}`,onMouseleave:a[0]||(a[0]=c=>r.activeCard=null)},[p("div",gd,[(z(),Ge(un(o.icon),{size:36}))]),p("h4",null,F(q(n)(`home.ecosystem.applications.items.${l}.title`)),1),p("p",null,F(q(n)(`home.ecosystem.applications.items.${l}.description`)),1)],42,pd)),64))])]),p("div",_d,[p("h3",yd,F(q(e)("home.ecosystem.partners.title")),1),p("div",vd,[(z(),$(fe,null,be(s,(o,l)=>p("div",{key:l,class:me(["eco-card",{active:r.activeCard===`partner-${l}`}]),onMouseenter:c=>r.activeCard=`partner-${l}`,onMouseleave:a[1]||(a[1]=c=>r.activeCard=null)},[p("div",kd,[(z(),Ge(un(o.icon),{size:32}))]),p("h4",null,F(q(n)(`home.ecosystem.partners.items.${l}.title`)),1),p("p",null,F(q(n)(`home.ecosystem.partners.items.${l}.description`)),1)],42,bd)),64))])])])]))}},Ed=we(Td,[["__scopeId","data-v-15b9ee8b"]]);const wd={},Ad={class:"stats-section"};function Sd(t,e){return z(),$("section",Ad)}const Id=we(wd,[["render",Sd],["__scopeId","data-v-e5c19949"]]);const Pd={class:"partners-section"},Od={class:"section-title"},Cd={class:"section-description"},xd={class:"partners-grid"},Ld={class:"partner-logo"},Nd=["src","alt"],Md={class:"partner-info"},Dd=["href"],Rd={__name:"Partners",setup(t){const{t:e}=Ce(),n=H(()=>e("home.partners.title")),i=H(()=>e("home.partners.description")),s=H(()=>({sat20market:{name:"SAT20Market",description:e("home.partners.sat20market"),logo:"/images/partners/sat20market.png",url:"https://ordx.market",highlight:!0},btcname:{name:"BTCName",description:e("home.partners.btcname"),logo:"/images/partners/btcname.png",url:"https://x.com/btcname_did"},morego:{name:"Morego",description:e("home.partners.morego"),logo:"/images/partners/morego.png",url:"http://official.morego.io/"},unisat:{name:"Unisat",description:e("home.partners.unisat"),logo:"/images/partners/unisat.png",url:"https://unisat.io"},okx:{name:"OKX",description:e("home.partners.okx"),logo:"/images/partners/okx.png",url:"https://www.okx.com"},magiceden:{name:"Magic Eden",description:e("home.partners.magiceden"),logo:"/images/partners/magiceden.png",url:"https://magiceden.io"}}));return(r,a)=>(z(),$("section",Pd,[p("h2",Od,F(n.value),1),p("p",Cd,F(i.value),1),p("div",xd,[(z(!0),$(fe,null,be(s.value,(o,l)=>(z(),$("div",{key:l,class:me(["partner-card",{highlight:o.highlight}])},[p("div",Ld,[p("img",{src:o.logo,alt:o.name},null,8,Nd)]),p("div",Md,[p("h3",null,F(o.name),1),p("p",null,F(o.description),1)]),p("a",{href:o.url,target:"_blank",class:"partner-link"},a[0]||(a[0]=[p("span",{class:"link-text"},"访问",-1),p("span",{class:"link-icon"},"→",-1)]),8,Dd)],2))),128))])]))}},Fd=we(Rd,[["__scopeId","data-v-1bedcb47"]]);const zd={class:"developer-section"},Ud={class:"container"},Bd={class:"content"},$d={class:"title gradient-text"},Gd={class:"description"},Wd={class:"description"},Vd={class:"cta-buttons"},Hd={__name:"Developers",setup(t){const e=qr(),{t:n}=Ce(),i=H(()=>n("home.developers.title")),s=H(()=>n("home.developers.subtitle")),r=H(()=>n("home.developers.description")),a=H(()=>n("home.developers.buttons.startDev")),o=H(()=>n("home.developers.buttons.viewDocs")),l=()=>{e.push("/developers")},c=()=>{e.push("/docs/api_reference")};return(f,h)=>(z(),$("section",zd,[p("div",Ud,[p("div",Bd,[p("h2",$d,F(i.value),1),p("p",Gd,F(s.value),1),p("p",Wd,F(r.value),1),p("div",Vd,[Q(Fn,{primary:"",onClick:l},{default:ce(()=>[le(F(a.value)+" ",1),h[0]||(h[0]=p("svg",{class:"arrow-icon",width:"16",height:"16",viewBox:"0 0 16 16"},[p("path",{d:"M3 8h8M8 4l4 4-4 4",stroke:"currentColor",fill:"none","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1))]),_:1}),Q(Fn,{secondary:"",onClick:c},{default:ce(()=>[le(F(o.value),1)]),_:1})])]),h[1]||(h[1]=Do(`<div class="visual" data-v-29bd8792><div class="code-window" data-v-29bd8792><div class="window-header" data-v-29bd8792><div class="dots" data-v-29bd8792><span data-v-29bd8792></span><span data-v-29bd8792></span><span data-v-29bd8792></span></div><span class="filename" data-v-29bd8792>example.js</span></div><pre class="code-content" data-v-29bd8792><code data-v-29bd8792>import { ORDX } from &#39;@sat20/ordx&#39;;

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
          </pre></div></div>`,1))])]))}},jd=we(Hd,[["__scopeId","data-v-29bd8792"]]);const Yd={class:"home-page"},Xd={__name:"HomePage",setup(t){return(e,n)=>(z(),$("div",Yd,[Q(gf),Q(If),Q(qf),Q(Ed),Q(Id),Q(jd),Q(Fd)]))}},Kd=we(Xd,[["__scopeId","data-v-1bf0732e"]]),qd=[{path:"/",name:"home",component:Kd,meta:{title:"SAT20 - BTC原生资产发行与流动协议"}},{path:"/tech",name:"tech",component:()=>Se(()=>import("./TechnologyPage-9e65d4a3.js"),["./TechnologyPage-9e65d4a3.js","./vendor-570a9e02.js","./TechnologyPage-fc2451b5.css"],import.meta.url),meta:{title:"技术 - SAT20"}},{path:"/satnet",name:"satnet",component:()=>Se(()=>import("./SatoshiNetPage-3272deed.js"),["./SatoshiNetPage-3272deed.js","./vendor-570a9e02.js","./SatoshiNetPage-e32b870b.css"],import.meta.url),meta:{title:"聪网 - SAT20"}},{path:"/eco",name:"eco",component:()=>Se(()=>import("./TokenomicsPage-75e94d13.js"),["./TokenomicsPage-75e94d13.js","./vendor-570a9e02.js","./TokenomicsPage-90234845.css"],import.meta.url),meta:{title:"生态 - SAT20"}},{path:"/roadmap",name:"roadmap",component:()=>Se(()=>import("./RoadmapPage-cffe59a3.js"),["./RoadmapPage-cffe59a3.js","./vendor-570a9e02.js","./ParticlesBg-fb2dda42.js","./RoadmapPage-4e98fdd2.css"],import.meta.url),meta:{title:"路线图 - SAT20"}},{path:"/developers",name:"developers",component:()=>Se(()=>import("./DevelopersPage-77fd1c82.js"),["./DevelopersPage-77fd1c82.js","./vendor-570a9e02.js","./DevelopersPage-2ccdfe8c.css"],import.meta.url),meta:{title:"开发者 - SAT20"}},{path:"/investor",name:"investor",component:()=>Se(()=>import("./InvestorPage-9aa0441b.js"),["./InvestorPage-9aa0441b.js","./ParticlesBg-fb2dda42.js","./vendor-570a9e02.js","./InvestorPage-0b11a379.css"],import.meta.url),meta:{title:"投资者 - SAT20"}},{path:"/user",name:"user",component:()=>Se(()=>import("./UserPage-dfde4d42.js"),["./UserPage-dfde4d42.js","./ParticlesBg-fb2dda42.js","./vendor-570a9e02.js","./UserPage-9ac53a2f.css"],import.meta.url),meta:{title:"用户指南 - SAT20"}},{path:"/docs/:category",name:"documentation",component:()=>Se(()=>import("./Documentation-2e34c0a2.js"),["./Documentation-2e34c0a2.js","./vendor-570a9e02.js","./Documentation-4dc4a283.css"],import.meta.url),props:!0,meta:{title:"文档 - SAT20"}}],Oa=Ro({history:Fo(),routes:qd,scrollBehavior(t,e,n){return n||{top:0}}});Oa.beforeEach((t,e,n)=>{document.title=t.meta.title||"SAT20",n()});const sn="generated",Qd="pointerdown",Jd="pointerup",rr="pointerleave",Zd="pointerout",ar="pointermove",eh="touchstart",or="touchend",th="touchmove",nh="touchcancel",ih="resize",sh="visibilitychange",ht="tsParticles - Error";class Ae{constructor(e,n,i){if(this._updateFromAngle=(s,r)=>{this.x=Math.cos(s)*r,this.y=Math.sin(s)*r},!De(e)&&e){this.x=e.x,this.y=e.y;const s=e;this.z=s.z?s.z:0}else if(e!==void 0&&n!==void 0)this.x=e,this.y=n,this.z=i??0;else throw new Error(`${ht} Vector3d not initialized correctly`)}static get origin(){return Ae.create(0,0,0)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return Ae.create(e.x,e.y,e.z)}static create(e,n,i){return new Ae(e,n,i)}add(e){return Ae.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return Ae.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return Ae.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**2+this.y**2}mult(e){return Ae.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){const e=this.length;e!=0&&this.multTo(1/e)}rotate(e){return Ae.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),0)}setTo(e){this.x=e.x,this.y=e.y;const n=e;this.z=n.z?n.z:0}sub(e){return Ae.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}}class It extends Ae{constructor(e,n){super(e,n,0)}static get origin(){return It.create(0,0)}static clone(e){return It.create(e.x,e.y)}static create(e,n){return new It(e,n)}}let rh=Math.random;function Xe(){return Ca(rh(),0,1-1e-16)}function Ca(t,e,n){return Math.min(Math.max(t,e),n)}function Pt(t){const e=os(t);let n=as(t);return e===n&&(n=0),Xe()*(e-n)+n}function te(t){return De(t)?t:Pt(t)}function as(t){return De(t)?t:t.min}function os(t){return De(t)?t:t.max}function Y(t,e){if(t===e||e===void 0&&De(t))return t;const n=as(t),i=os(t);return e!==void 0?{min:Math.min(n,e),max:Math.max(i,e)}:Y(n,i)}function ah(t){const e=t.random,{enable:n,minimumValue:i}=tt(e)?{enable:e,minimumValue:0}:e;return te(n?Y(t.value,i):t.value)}function oh(t,e){const n=t.x-e.x,i=t.y-e.y;return{dx:n,dy:i,distance:Math.sqrt(n**2+i**2)}}function ls(t,e){return oh(t,e).distance}function lh(t,e,n){if(De(t))return t*Math.PI/180;switch(t){case"top":return-Math.PI/2;case"top-right":return-Math.PI/4;case"right":return 0;case"bottom-right":return Math.PI/4;case"bottom":return Math.PI/2;case"bottom-left":return 3*Math.PI/4;case"left":return Math.PI;case"top-left":return-3*Math.PI/4;case"inside":return Math.atan2(n.y-e.y,n.x-e.x);case"outside":return Math.atan2(e.y-n.y,e.x-n.x);default:return Xe()*Math.PI*2}}function ch(t){const e=It.origin;return e.length=1,e.angle=t,e}function uh(t){var e,n;return{x:((e=t.position)==null?void 0:e.x)??Xe()*t.size.width,y:((n=t.position)==null?void 0:n.y)??Xe()*t.size.height}}function xa(t){return t?t.endsWith("%")?parseFloat(t)/100:parseFloat(t):1}const fh={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function mn(){return fh}function jn(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function dh(){return!jn()&&typeof matchMedia<"u"}function La(t){if(dh())return matchMedia(t)}function hh(t){if(!(jn()||typeof MutationObserver>"u"))return new MutationObserver(t)}function mh(t,e){return t===e||$e(e)&&e.indexOf(t)>-1}function ph(t){return Math.floor(Xe()*t.length)}function cs(t,e,n=!0){return t[e!==void 0&&n?e%t.length:ph(t)]}function _e(t,...e){for(const n of e){if(n==null)continue;if(!tn(n)){t=n;continue}const i=Array.isArray(n);i&&(tn(t)||!t||!Array.isArray(t))?t=[]:!i&&(tn(t)||!t||Array.isArray(t))&&(t={});for(const s in n){if(s==="__proto__")continue;const r=n,a=r[s],o=t;o[s]=tn(a)&&Array.isArray(a)?a.map(l=>_e(o[s],l)):_e(o[s],a)}}return t}function mt(t,e){return $e(t)?t.map((n,i)=>e(n,i)):e(t,0)}function rn(t,e,n){return $e(t)?cs(t,e,n):t}function gh(t,e){const n=t.value,i=t.animation,s={delayTime:te(i.delay)*1e3,enable:i.enable,value:te(t.value)*e,max:os(n)*e,min:as(n)*e,loops:0,maxLoops:te(i.count),time:0};if(i.enable){switch(s.decay=1-te(i.decay),i.mode){case"increase":s.status="increasing";break;case"decrease":s.status="decreasing";break;case"random":s.status=Xe()>=.5?"increasing":"decreasing";break}const r=i.mode==="auto";switch(i.startValue){case"min":s.value=s.min,r&&(s.status="increasing");break;case"max":s.value=s.max,r&&(s.status="decreasing");break;case"random":default:s.value=Pt(s),r&&(s.status=Xe()>=.5?"increasing":"decreasing");break}}return s.initialValue=s.value,s}function _h(t,e){if(!(t.mode==="percent")){const{mode:s,...r}=t;return r}return"x"in t?{x:t.x/100*e.width,y:t.y/100*e.height}:{width:t.width/100*e.width,height:t.height/100*e.height}}function Na(t,e){return _h(t,e)}function tt(t){return typeof t=="boolean"}function Be(t){return typeof t=="string"}function De(t){return typeof t=="number"}function Ma(t){return typeof t=="function"}function tn(t){return typeof t=="object"&&t!==null}function $e(t){return Array.isArray(t)}const yh="random",Yn=new Map;function lr(t){Yn.set(t.key,t)}function ai(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function vh(t){for(const[,r]of Yn)if(t.startsWith(r.stringPrefix))return r.parseString(t);const e=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,n=t.replace(e,(r,a,o,l,c)=>a+a+o+o+l+l+(c!==void 0?c+c:"")),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,s=i.exec(n);return s?{a:s[4]!==void 0?parseInt(s[4],16)/255:1,b:parseInt(s[3],16),g:parseInt(s[2],16),r:parseInt(s[1],16)}:void 0}function Ot(t,e,n=!0){if(!t)return;const i=Be(t)?{value:t}:t;if(Be(i.value))return Da(i.value,e,n);if($e(i.value))return Ot({value:cs(i.value,e,n)});for(const[,s]of Yn){const r=s.handleRangeColor(i);if(r)return r}}function Da(t,e,n=!0){if(!t)return;const i=Be(t)?{value:t}:t;if(Be(i.value))return i.value===yh?Eh():kh(i.value);if($e(i.value))return Da({value:cs(i.value,e,n)});for(const[,s]of Yn){const r=s.handleColor(i);if(r)return r}}function cr(t,e,n=!0){const i=Ot(t,e,n);return i?bh(i):void 0}function bh(t){const e=t.r/255,n=t.g/255,i=t.b/255,s=Math.max(e,n,i),r=Math.min(e,n,i),a={h:0,l:(s+r)/2,s:0};return s!==r&&(a.s=a.l<.5?(s-r)/(s+r):(s-r)/(2-s-r),a.h=e===s?(n-i)/(s-r):a.h=n===s?2+(i-e)/(s-r):4+(e-n)/(s-r)),a.l*=100,a.s*=100,a.h*=60,a.h<0&&(a.h+=360),a.h>=360&&(a.h-=360),a}function kh(t){return vh(t)}function xi(t){const e={b:0,g:0,r:0},n={h:t.h/360,l:t.l/100,s:t.s/100};if(!n.s)e.r=e.g=e.b=n.l;else{const i=n.l<.5?n.l*(1+n.s):n.l+n.s-n.l*n.s,s=2*n.l-i;e.r=ai(s,i,n.h+1/3),e.g=ai(s,i,n.h),e.b=ai(s,i,n.h-1/3)}return e.r=Math.floor(e.r*255),e.g=Math.floor(e.g*255),e.b=Math.floor(e.b*255),e}function Th(t){const e=xi(t);return{a:t.a,b:e.b,g:e.g,r:e.r}}function Eh(t){const e=t??0;return{b:Math.floor(Pt(Y(e,256))),g:Math.floor(Pt(Y(e,256))),r:Math.floor(Pt(Y(e,256)))}}function xn(t,e){return`rgba(${t.r}, ${t.g}, ${t.b}, ${e??1})`}function ur(t,e){return`hsla(${t.h}, ${t.s}%, ${t.l}%, ${e??1})`}function fr(t){return t!==void 0?{h:t.h.value,s:t.s.value,l:t.l.value}:void 0}function wh(t,e,n){t.fillStyle=n??"rgba(0,0,0,0)",t.fillRect(0,0,e.width,e.height)}function Ah(t,e,n,i){n&&(t.globalAlpha=i,t.drawImage(n,0,0,e.width,e.height),t.globalAlpha=1)}function oi(t,e){t.clearRect(0,0,e.width,e.height)}function Sh(t){const{container:e,context:n,particle:i,delta:s,colorStyles:r,backgroundMask:a,composite:o,radius:l,opacity:c,shadow:f,transform:h}=t,u=i.getPosition(),_=i.rotation+(i.pathRotation?i.velocity.angle:0),k={sin:Math.sin(_),cos:Math.cos(_)},T={a:k.cos*(h.a??1),b:k.sin*(h.b??1),c:-k.sin*(h.c??1),d:k.cos*(h.d??1)};n.setTransform(T.a,T.b,T.c,T.d,u.x,u.y),n.beginPath(),a&&(n.globalCompositeOperation=o);const A=i.shadowColor;f.enable&&A&&(n.shadowBlur=f.blur,n.shadowColor=xn(A),n.shadowOffsetX=f.offset.x,n.shadowOffsetY=f.offset.y),r.fill&&(n.fillStyle=r.fill);const y=i.strokeWidth??0;n.lineWidth=y,r.stroke&&(n.strokeStyle=r.stroke),Ih(e,n,i,l,c,s),y>0&&n.stroke(),i.close&&n.closePath(),i.fill&&n.fill(),Ph(e,n,i,l,c,s),n.globalCompositeOperation="source-over",n.setTransform(1,0,0,1,0,0)}function Ih(t,e,n,i,s,r){if(!n.shape)return;const a=t.drawers.get(n.shape);a&&a.draw(e,n,i,s,r,t.retina.pixelRatio)}function Ph(t,e,n,i,s,r){if(!n.shape)return;const a=t.drawers.get(n.shape);!a||!a.afterEffect||a.afterEffect(e,n,i,s,r,t.retina.pixelRatio)}function Oh(t,e,n){e.draw&&e.draw(t,n)}function Ch(t,e,n,i){e.drawParticle&&e.drawParticle(t,n,i)}function xh(t,e,n){return{h:t.h,s:t.s,l:t.l+(e==="darken"?-1:1)*n}}function Lh(t,e,n){const i=e[n];i!==void 0&&(t[n]=(t[n]??1)*i)}class Nh{constructor(e){this.container=e,this._applyPostDrawUpdaters=n=>{for(const i of this._postDrawUpdaters)i.afterDraw&&i.afterDraw(n)},this._applyPreDrawUpdaters=(n,i,s,r,a,o)=>{for(const l of this._preDrawUpdaters){if(l.getColorStyles){const{fill:c,stroke:f}=l.getColorStyles(i,n,s,r);c&&(a.fill=c),f&&(a.stroke=f)}if(l.getTransformValues){const c=l.getTransformValues(i);for(const f in c)Lh(o,c,f)}l.beforeDraw&&l.beforeDraw(i)}},this._applyResizePlugins=()=>{for(const n of this._resizePlugins)n.resize&&n.resize()},this._getPluginParticleColors=n=>{let i,s;for(const r of this._colorPlugins)if(!i&&r.particleFillColor&&(i=cr(r.particleFillColor(n))),!s&&r.particleStrokeColor&&(s=cr(r.particleStrokeColor(n))),i&&s)break;return[i,s]},this._initCover=()=>{const n=this.container.actualOptions,i=n.backgroundMask.cover,s=i.color,r=Ot(s);if(r){const a={...r,a:i.opacity};this._coverColorStyle=xn(a,a.a)}},this._initStyle=()=>{const n=this.element,i=this.container.actualOptions;if(n){this._fullScreen?(this._originalStyle=_e({},n.style),this._setFullScreenStyle()):this._resetOriginalStyle();for(const s in i.style){if(!s||!i.style)continue;const r=i.style[s];r&&n.style.setProperty(s,r,"important")}}},this._initTrail=async()=>{const n=this.container.actualOptions,i=n.particles.move.trail,s=i.fill;if(i.enable)if(s.color){const r=Ot(s.color);if(!r)return;const a=n.particles.move.trail;this._trailFill={color:{...r},opacity:1/a.length}}else await new Promise((r,a)=>{if(!s.image)return;const o=document.createElement("img");o.addEventListener("load",()=>{this._trailFill={image:o,opacity:1/i.length},r()}),o.addEventListener("error",l=>{a(l.error)}),o.src=s.image})},this._paintBase=n=>{this.draw(i=>wh(i,this.size,n))},this._paintImage=(n,i)=>{this.draw(s=>Ah(s,this.size,n,i))},this._repairStyle=()=>{const n=this.element;n&&(this._safeMutationObserver(i=>i.disconnect()),this._initStyle(),this.initBackground(),this._safeMutationObserver(i=>i.observe(n,{attributes:!0})))},this._resetOriginalStyle=()=>{const n=this.element,i=this._originalStyle;if(!(n&&i))return;const s=n.style;s.position=i.position,s.zIndex=i.zIndex,s.top=i.top,s.left=i.left,s.width=i.width,s.height=i.height},this._safeMutationObserver=n=>{this._mutationObserver&&n(this._mutationObserver)},this._setFullScreenStyle=()=>{const n=this.element;if(!n)return;const i="important",s=n.style;s.setProperty("position","fixed",i),s.setProperty("z-index",this.container.actualOptions.fullScreen.zIndex.toString(10),i),s.setProperty("top","0",i),s.setProperty("left","0",i),s.setProperty("width","100%",i),s.setProperty("height","100%",i)},this.size={height:0,width:0},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const e=this.container.actualOptions,n=e.particles.move.trail,i=this._trailFill;e.backgroundMask.enable?this.paint():n.enable&&n.length>0&&i?i.color?this._paintBase(xn(i.color,i.opacity)):i.image&&this._paintImage(i.image,i.opacity):this.draw(s=>{oi(s,this.size)})}destroy(){if(this.stop(),this._generated){const e=this.element;e&&e.remove()}else this._resetOriginalStyle();this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(e){const n=this._context;if(n)return e(n)}drawParticle(e,n){if(e.spawning||e.destroyed)return;const i=e.getRadius();if(i<=0)return;const s=e.getFillColor(),r=e.getStrokeColor()??s;let[a,o]=this._getPluginParticleColors(e);a||(a=s),o||(o=r),!(!a&&!o)&&this.draw(l=>{var g;const c=this.container,f=c.actualOptions,h=e.options.zIndex,u=(1-e.zIndexFactor)**h.opacityRate,_=e.bubble.opacity??((g=e.opacity)==null?void 0:g.value)??1,k=e.strokeOpacity??_,T=_*u,A=k*u,y={},E={fill:a?ur(a,T):void 0};E.stroke=o?ur(o,A):E.fill,this._applyPreDrawUpdaters(l,e,i,T,E,y),Sh({container:c,context:l,particle:e,delta:n,colorStyles:E,backgroundMask:f.backgroundMask.enable,composite:f.backgroundMask.composite,radius:i*(1-e.zIndexFactor)**h.sizeRate,opacity:T,shadow:e.options.shadow,transform:y}),this._applyPostDrawUpdaters(e)})}drawParticlePlugin(e,n,i){this.draw(s=>Ch(s,e,n,i))}drawPlugin(e,n){this.draw(i=>Oh(i,e,n))}async init(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=hh(e=>{for(const n of e)n.type==="attributes"&&n.attributeName==="style"&&this._repairStyle()}),this.resize(),this._initStyle(),this._initCover();try{await this._initTrail()}catch(e){mn().error(e)}this.initBackground(),this._safeMutationObserver(e=>{this.element&&e.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){const e=this.container.actualOptions,n=e.background,i=this.element;if(!i)return;const s=i.style;if(s){if(n.color){const r=Ot(n.color);s.backgroundColor=r?xn(r,n.opacity):""}else s.backgroundColor="";s.backgroundImage=n.image||"",s.backgroundPosition=n.position||"",s.backgroundRepeat=n.repeat||"",s.backgroundSize=n.size||""}}initPlugins(){this._resizePlugins=[];for(const[,e]of this.container.plugins)e.resize&&this._resizePlugins.push(e),(e.particleFillColor||e.particleStrokeColor)&&this._colorPlugins.push(e)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const e of this.container.particles.updaters)e.afterDraw&&this._postDrawUpdaters.push(e),(e.getColorStyles||e.getTransformValues||e.beforeDraw)&&this._preDrawUpdaters.push(e)}loadCanvas(e){this._generated&&this.element&&this.element.remove(),this._generated=e.dataset&&sn in e.dataset?e.dataset[sn]==="true":this._generated,this.element=e,this.element.ariaHidden="true",this._originalStyle=_e({},this.element.style),this.size.height=e.offsetHeight,this.size.width=e.offsetWidth,this._context=this.element.getContext("2d"),this._safeMutationObserver(n=>{this.element&&n.observe(this.element,{attributes:!0})}),this.container.retina.init(),this.initBackground()}paint(){const e=this.container.actualOptions;this.draw(n=>{e.backgroundMask.enable&&e.backgroundMask.cover?(oi(n,this.size),this._paintBase(this._coverColorStyle)):this._paintBase()})}resize(){if(!this.element)return!1;const e=this.container,n=e.retina.pixelRatio,i=e.canvas.size,s={width:this.element.offsetWidth*n,height:this.element.offsetHeight*n};if(s.height===i.height&&s.width===i.width&&s.height===this.element.height&&s.width===this.element.width)return!1;const r={...i};return this.element.width=i.width=this.element.offsetWidth*n,this.element.height=i.height=this.element.offsetHeight*n,this.container.started&&(this.resizeFactor={width:i.width/r.width,height:i.height/r.height}),!0}stop(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=void 0,this.draw(e=>oi(e,this.size))}async windowResize(){if(!this.element||!this.resize())return;const e=this.container,n=e.updateActualOptions();e.particles.setDensity(),this._applyResizePlugins(),n&&await e.refresh()}}function Pe(t,e,n,i,s){if(i){let r={passive:!0};tt(s)?r.capture=s:s!==void 0&&(r=s),t.addEventListener(e,n,r)}else{const r=s;t.removeEventListener(e,n,r)}}class Mh{constructor(e){this.container=e,this._doMouseTouchClick=n=>{const i=this.container,s=i.actualOptions;if(this._canPush){const r=i.interactivity.mouse,a=r.position;if(!a)return;r.clickPosition={...a},r.clickTime=new Date().getTime();const o=s.interactivity.events.onClick;mt(o.mode,l=>this.container.handleClickMode(l))}n.type==="touchend"&&setTimeout(()=>this._mouseTouchFinish(),500)},this._handleThemeChange=n=>{const i=n,s=this.container,r=s.options,a=r.defaultThemes,o=i.matches?a.dark:a.light,l=r.themes.find(c=>c.name===o);l&&l.default.auto&&s.loadTheme(o)},this._handleVisibilityChange=()=>{const n=this.container,i=n.actualOptions;this._mouseTouchFinish(),i.pauseOnBlur&&(document&&document.hidden?(n.pageHidden=!0,n.pause()):(n.pageHidden=!1,n.getAnimationStatus()?n.play(!0):n.draw(!0)))},this._handleWindowResize=async()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout),this._resizeTimeout=setTimeout(async()=>{const n=this.container.canvas;n&&await n.windowResize()},this.container.actualOptions.interactivity.events.resize.delay*1e3)},this._manageInteractivityListeners=(n,i)=>{const s=this._handlers,r=this.container,a=r.actualOptions,o=r.interactivity.element;if(!o)return;const l=o,c=r.canvas.element;c&&(c.style.pointerEvents=l===c?"initial":"none"),(a.interactivity.events.onHover.enable||a.interactivity.events.onClick.enable)&&(Pe(o,ar,s.mouseMove,i),Pe(o,eh,s.touchStart,i),Pe(o,th,s.touchMove,i),a.interactivity.events.onClick.enable?(Pe(o,or,s.touchEndClick,i),Pe(o,Jd,s.mouseUp,i),Pe(o,Qd,s.mouseDown,i)):Pe(o,or,s.touchEnd,i),Pe(o,n,s.mouseLeave,i),Pe(o,nh,s.touchCancel,i))},this._manageListeners=n=>{const i=this._handlers,s=this.container,r=s.actualOptions,a=r.interactivity.detectsOn,o=s.canvas.element;let l=rr;a==="window"?(s.interactivity.element=window,l=Zd):a==="parent"&&o?s.interactivity.element=o.parentElement??o.parentNode:s.interactivity.element=o,this._manageMediaMatch(n),this._manageResize(n),this._manageInteractivityListeners(l,n),document&&Pe(document,sh,i.visibilityChange,n,!1)},this._manageMediaMatch=n=>{const i=this._handlers,s=La("(prefers-color-scheme: dark)");if(s){if(s.addEventListener!==void 0){Pe(s,"change",i.themeChange,n);return}s.addListener!==void 0&&(n?s.addListener(i.oldThemeChange):s.removeListener(i.oldThemeChange))}},this._manageResize=n=>{const i=this._handlers,s=this.container;if(!s.actualOptions.interactivity.events.resize)return;if(typeof ResizeObserver>"u"){Pe(window,ih,i.resize,n);return}const a=s.canvas.element;this._resizeObserver&&!n?(a&&this._resizeObserver.unobserve(a),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&n&&a&&(this._resizeObserver=new ResizeObserver(async o=>{o.find(c=>c.target===a)&&await this._handleWindowResize()}),this._resizeObserver.observe(a))},this._mouseDown=()=>{const{interactivity:n}=this.container;if(!n)return;const{mouse:i}=n;i.clicking=!0,i.downPosition=i.position},this._mouseTouchClick=n=>{const i=this.container,s=i.actualOptions,{mouse:r}=i.interactivity;r.inside=!0;let a=!1;const o=r.position;if(!(!o||!s.interactivity.events.onClick.enable)){for(const[,l]of i.plugins)if(l.clickPositionValid&&(a=l.clickPositionValid(o),a))break;a||this._doMouseTouchClick(n),r.clicking=!1}},this._mouseTouchFinish=()=>{const n=this.container.interactivity;if(!n)return;const i=n.mouse;delete i.position,delete i.clickPosition,delete i.downPosition,n.status=rr,i.inside=!1,i.clicking=!1},this._mouseTouchMove=n=>{const i=this.container,s=i.actualOptions,r=i.interactivity,a=i.canvas.element;if(!r||!r.element)return;r.mouse.inside=!0;let o;if(n.type.startsWith("pointer")){this._canPush=!0;const c=n;if(r.element===window){if(a){const f=a.getBoundingClientRect();o={x:c.clientX-f.left,y:c.clientY-f.top}}}else if(s.interactivity.detectsOn==="parent"){const f=c.target,h=c.currentTarget;if(f&&h&&a){const u=f.getBoundingClientRect(),_=h.getBoundingClientRect(),k=a.getBoundingClientRect();o={x:c.offsetX+2*u.left-(_.left+k.left),y:c.offsetY+2*u.top-(_.top+k.top)}}else o={x:c.offsetX??c.clientX,y:c.offsetY??c.clientY}}else c.target===a&&(o={x:c.offsetX??c.clientX,y:c.offsetY??c.clientY})}else if(this._canPush=n.type!=="touchmove",a){const c=n,f=c.touches[c.touches.length-1],h=a.getBoundingClientRect();o={x:f.clientX-(h.left??0),y:f.clientY-(h.top??0)}}const l=i.retina.pixelRatio;o&&(o.x*=l,o.y*=l),r.mouse.position=o,r.status=ar},this._touchEnd=n=>{const i=n,s=Array.from(i.changedTouches);for(const r of s)this._touches.delete(r.identifier);this._mouseTouchFinish()},this._touchEndClick=n=>{const i=n,s=Array.from(i.changedTouches);for(const r of s)this._touches.delete(r.identifier);this._mouseTouchClick(n)},this._touchStart=n=>{const i=n,s=Array.from(i.changedTouches);for(const r of s)this._touches.set(r.identifier,performance.now());this._mouseTouchMove(n)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:n=>this._mouseTouchMove(n),mouseUp:n=>this._mouseTouchClick(n),touchStart:n=>this._touchStart(n),touchMove:n=>this._mouseTouchMove(n),touchEnd:n=>this._touchEnd(n),touchCancel:n=>this._touchEnd(n),touchEndClick:n=>this._touchEndClick(n),visibilityChange:()=>this._handleVisibilityChange(),themeChange:n=>this._handleThemeChange(n),oldThemeChange:n=>this._handleThemeChange(n),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}class We{constructor(){this.value=""}static create(e,n){const i=new We;return i.load(e),n!==void 0&&(Be(n)||$e(n)?i.load({value:n}):i.load(n)),i}load(e){(e==null?void 0:e.value)!==void 0&&(this.value=e.value)}}class Dh{constructor(){this.color=new We,this.color.value="",this.image="",this.position="",this.repeat="",this.size="",this.opacity=1}load(e){e&&(e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.position!==void 0&&(this.position=e.position),e.repeat!==void 0&&(this.repeat=e.repeat),e.size!==void 0&&(this.size=e.size),e.opacity!==void 0&&(this.opacity=e.opacity))}}class Rh{constructor(){this.color=new We,this.color.value="#fff",this.opacity=1}load(e){e&&(e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.opacity!==void 0&&(this.opacity=e.opacity))}}class Fh{constructor(){this.composite="destination-out",this.cover=new Rh,this.enable=!1}load(e){if(e){if(e.composite!==void 0&&(this.composite=e.composite),e.cover!==void 0){const n=e.cover,i=Be(e.cover)?{color:e.cover}:e.cover;this.cover.load(n.color!==void 0?n:{color:i})}e.enable!==void 0&&(this.enable=e.enable)}}}class zh{constructor(){this.enable=!0,this.zIndex=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.zIndex!==void 0&&(this.zIndex=e.zIndex))}}class Uh{constructor(){this.enable=!1,this.mode=[]}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode))}}class dr{constructor(){this.selectors=[],this.enable=!1,this.mode=[],this.type="circle"}get el(){return this.elementId}set el(e){this.elementId=e}get elementId(){return this.ids}set elementId(e){this.ids=e}get ids(){return mt(this.selectors,e=>e.replace("#",""))}set ids(e){this.selectors=mt(e,n=>`#${n}`)}load(e){if(!e)return;const n=e.ids??e.elementId??e.el;n!==void 0&&(this.ids=n),e.selectors!==void 0&&(this.selectors=e.selectors),e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),e.type!==void 0&&(this.type=e.type)}}class Bh{constructor(){this.enable=!1,this.force=2,this.smooth=10}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.force!==void 0&&(this.force=e.force),e.smooth!==void 0&&(this.smooth=e.smooth))}}class $h{constructor(){this.enable=!1,this.mode=[],this.parallax=new Bh}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),this.parallax.load(e.parallax))}}class Gh{constructor(){this.delay=.5,this.enable=!0}load(e){e!==void 0&&(e.delay!==void 0&&(this.delay=e.delay),e.enable!==void 0&&(this.enable=e.enable))}}class Wh{constructor(){this.onClick=new Uh,this.onDiv=new dr,this.onHover=new $h,this.resize=new Gh}get onclick(){return this.onClick}set onclick(e){this.onClick=e}get ondiv(){return this.onDiv}set ondiv(e){this.onDiv=e}get onhover(){return this.onHover}set onhover(e){this.onHover=e}load(e){if(!e)return;this.onClick.load(e.onClick??e.onclick);const n=e.onDiv??e.ondiv;n!==void 0&&(this.onDiv=mt(n,i=>{const s=new dr;return s.load(i),s})),this.onHover.load(e.onHover??e.onhover),tt(e.resize)?this.resize.enable=e.resize:this.resize.load(e.resize)}}class Vh{constructor(e,n){this._engine=e,this._container=n}load(e){if(!e||!this._container)return;const n=this._engine.plugins.interactors.get(this._container);if(n)for(const i of n)i.loadModeOptions&&i.loadModeOptions(this,e)}}class Ra{constructor(e,n){this.detectsOn="window",this.events=new Wh,this.modes=new Vh(e,n)}get detect_on(){return this.detectsOn}set detect_on(e){this.detectsOn=e}load(e){if(!e)return;const n=e.detectsOn??e.detect_on;n!==void 0&&(this.detectsOn=n),this.events.load(e.events),this.modes.load(e.modes)}}class Hh{load(e){e&&(e.position&&(this.position={x:e.position.x??50,y:e.position.y??50,mode:e.position.mode??"percent"}),e.options&&(this.options=_e({},e.options)))}}class jh{constructor(){this.maxWidth=1/0,this.options={},this.mode="canvas"}load(e){e&&(e.maxWidth!==void 0&&(this.maxWidth=e.maxWidth),e.mode!==void 0&&(e.mode==="screen"?this.mode="screen":this.mode="canvas"),e.options!==void 0&&(this.options=_e({},e.options)))}}class Yh{constructor(){this.auto=!1,this.mode="any",this.value=!1}load(e){e&&(e.auto!==void 0&&(this.auto=e.auto),e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}}class Xh{constructor(){this.name="",this.default=new Yh}load(e){e&&(e.name!==void 0&&(this.name=e.name),this.default.load(e.default),e.options!==void 0&&(this.options=_e({},e.options)))}}class li{constructor(){this.count=0,this.enable=!1,this.offset=0,this.speed=1,this.delay=0,this.decay=0,this.sync=!0}load(e){e&&(e.count!==void 0&&(this.count=Y(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(this.offset=Y(e.offset)),e.speed!==void 0&&(this.speed=Y(e.speed)),e.decay!==void 0&&(this.decay=Y(e.decay)),e.delay!==void 0&&(this.delay=Y(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}}class Kh{constructor(){this.h=new li,this.s=new li,this.l=new li}load(e){e&&(this.h.load(e.h),this.s.load(e.s),this.l.load(e.l))}}class pn extends We{constructor(){super(),this.animation=new Kh}static create(e,n){const i=new pn;return i.load(e),n!==void 0&&(Be(n)||$e(n)?i.load({value:n}):i.load(n)),i}load(e){if(super.load(e),!e)return;const n=e.animation;n!==void 0&&(n.enable!==void 0?this.animation.h.load(n):this.animation.load(e.animation))}}class qh{constructor(){this.speed=2}load(e){e&&e.speed!==void 0&&(this.speed=e.speed)}}class Qh{constructor(){this.enable=!0,this.retries=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.retries!==void 0&&(this.retries=e.retries))}}class Jh{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(e){e&&(e.count!==void 0&&(this.count=Y(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=Y(e.speed)),e.decay!==void 0&&(this.decay=Y(e.decay)),e.delay!==void 0&&(this.delay=Y(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}}class Fa extends Jh{constructor(){super(),this.mode="auto",this.startValue="random"}load(e){super.load(e),e&&(e.minimumValue!==void 0&&(this.minimumValue=e.minimumValue),e.mode!==void 0&&(this.mode=e.mode),e.startValue!==void 0&&(this.startValue=e.startValue))}}class Zh{constructor(){this.enable=!1,this.minimumValue=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.minimumValue!==void 0&&(this.minimumValue=e.minimumValue))}}class bn{constructor(){this.random=new Zh,this.value=0}load(e){e&&(tt(e.random)?this.random.enable=e.random:this.random.load(e.random),e.value!==void 0&&(this.value=Y(e.value,this.random.enable?this.random.minimumValue:void 0)))}}class hr extends bn{constructor(){super(),this.random.minimumValue=.1,this.value=1}}class za{constructor(){this.horizontal=new hr,this.vertical=new hr}load(e){e&&(this.horizontal.load(e.horizontal),this.vertical.load(e.vertical))}}class em{constructor(){this.absorb=new qh,this.bounce=new za,this.enable=!1,this.maxSpeed=50,this.mode="bounce",this.overlap=new Qh}load(e){e&&(this.absorb.load(e.absorb),this.bounce.load(e.bounce),e.enable!==void 0&&(this.enable=e.enable),e.maxSpeed!==void 0&&(this.maxSpeed=Y(e.maxSpeed)),e.mode!==void 0&&(this.mode=e.mode),this.overlap.load(e.overlap))}}class tm{constructor(){this.offset=0,this.value=90}load(e){e&&(e.offset!==void 0&&(this.offset=Y(e.offset)),e.value!==void 0&&(this.value=Y(e.value)))}}class nm{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}get rotateX(){return this.rotate.x}set rotateX(e){this.rotate.x=e}get rotateY(){return this.rotate.y}set rotateY(e){this.rotate.y=e}load(e){var s,r;if(!e)return;e.distance!==void 0&&(this.distance=Y(e.distance)),e.enable!==void 0&&(this.enable=e.enable);const n=((s=e.rotate)==null?void 0:s.x)??e.rotateX;n!==void 0&&(this.rotate.x=n);const i=((r=e.rotate)==null?void 0:r.y)??e.rotateY;i!==void 0&&(this.rotate.y=i)}}class im{constructor(){this.x=50,this.y=50,this.mode="percent",this.radius=0}load(e){e&&(e.x!==void 0&&(this.x=e.x),e.y!==void 0&&(this.y=e.y),e.mode!==void 0&&(this.mode=e.mode),e.radius!==void 0&&(this.radius=e.radius))}}class sm{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(e){e&&(e.acceleration!==void 0&&(this.acceleration=Y(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.inverse!==void 0&&(this.inverse=e.inverse),e.maxSpeed!==void 0&&(this.maxSpeed=Y(e.maxSpeed)))}}class rm{constructor(){this.clamp=!0,this.delay=new bn,this.enable=!1,this.options={}}load(e){e&&(e.clamp!==void 0&&(this.clamp=e.clamp),this.delay.load(e.delay),e.enable!==void 0&&(this.enable=e.enable),this.generator=e.generator,e.options&&(this.options=_e(this.options,e.options)))}}class am{load(e){e&&(e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image))}}class om{constructor(){this.enable=!1,this.length=10,this.fill=new am}get fillColor(){return this.fill.color}set fillColor(e){this.fill.load({color:e})}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),(e.fill!==void 0||e.fillColor!==void 0)&&this.fill.load(e.fill||{color:e.fillColor}),e.length!==void 0&&(this.length=e.length))}}class lm{constructor(){this.default="out"}load(e){e&&(e.default!==void 0&&(this.default=e.default),this.bottom=e.bottom??e.default,this.left=e.left??e.default,this.right=e.right??e.default,this.top=e.top??e.default)}}class cm{constructor(){this.acceleration=0,this.enable=!1}load(e){e&&(e.acceleration!==void 0&&(this.acceleration=Y(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.position&&(this.position=_e({},e.position)))}}class um{constructor(){this.angle=new tm,this.attract=new nm,this.center=new im,this.decay=0,this.distance={},this.direction="none",this.drift=0,this.enable=!1,this.gravity=new sm,this.path=new rm,this.outModes=new lm,this.random=!1,this.size=!1,this.speed=2,this.spin=new cm,this.straight=!1,this.trail=new om,this.vibrate=!1,this.warp=!1}get bounce(){return this.collisions}set bounce(e){this.collisions=e}get collisions(){return!1}set collisions(e){}get noise(){return this.path}set noise(e){this.path=e}get outMode(){return this.outModes.default}set outMode(e){this.outModes.default=e}get out_mode(){return this.outMode}set out_mode(e){this.outMode=e}load(e){if(!e)return;this.angle.load(De(e.angle)?{value:e.angle}:e.angle),this.attract.load(e.attract),this.center.load(e.center),e.decay!==void 0&&(this.decay=Y(e.decay)),e.direction!==void 0&&(this.direction=e.direction),e.distance!==void 0&&(this.distance=De(e.distance)?{horizontal:e.distance,vertical:e.distance}:{...e.distance}),e.drift!==void 0&&(this.drift=Y(e.drift)),e.enable!==void 0&&(this.enable=e.enable),this.gravity.load(e.gravity);const n=e.outModes??e.outMode??e.out_mode;n!==void 0&&(tn(n)?this.outModes.load(n):this.outModes.load({default:n})),this.path.load(e.path??e.noise),e.random!==void 0&&(this.random=e.random),e.size!==void 0&&(this.size=e.size),e.speed!==void 0&&(this.speed=Y(e.speed)),this.spin.load(e.spin),e.straight!==void 0&&(this.straight=e.straight),this.trail.load(e.trail),e.vibrate!==void 0&&(this.vibrate=e.vibrate),e.warp!==void 0&&(this.warp=e.warp)}}class fm extends Fa{constructor(){super(),this.destroy="none",this.speed=2}get opacity_min(){return this.minimumValue}set opacity_min(e){this.minimumValue=e}load(e){(e==null?void 0:e.opacity_min)!==void 0&&e.minimumValue===void 0&&(e.minimumValue=e.opacity_min),super.load(e),e&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class dm extends bn{constructor(){super(),this.animation=new fm,this.random.minimumValue=.1,this.value=1}get anim(){return this.animation}set anim(e){this.animation=e}load(e){if(!e)return;super.load(e);const n=e.animation??e.anim;n!==void 0&&(this.animation.load(n),this.value=Y(this.value,this.animation.enable?this.animation.minimumValue:void 0))}}class hm{constructor(){this.enable=!1,this.width=1920,this.height=1080}get area(){return this.width}set area(e){this.width=e}get factor(){return this.height}set factor(e){this.height=e}get value_area(){return this.area}set value_area(e){this.area=e}load(e){if(!e)return;e.enable!==void 0&&(this.enable=e.enable);const n=e.width??e.area??e.value_area;n!==void 0&&(this.width=n);const i=e.height??e.factor;i!==void 0&&(this.height=i)}}class mm{constructor(){this.density=new hm,this.limit=0,this.value=0}get max(){return this.limit}set max(e){this.limit=e}load(e){if(!e)return;this.density.load(e.density);const n=e.limit??e.max;n!==void 0&&(this.limit=n),e.value!==void 0&&(this.value=e.value)}}class pm{constructor(){this.blur=0,this.color=new We,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(e){e&&(e.blur!==void 0&&(this.blur=e.blur),this.color=We.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(e.offset.x!==void 0&&(this.offset.x=e.offset.x),e.offset.y!==void 0&&(this.offset.y=e.offset.y)))}}const ci="character",ui="char",fi="image",di="images",hi="polygon",mi="star";class gm{constructor(){this.loadShape=(e,n,i,s)=>{if(!e)return;const r=$e(e),a=r?[]:{},o=r!==$e(this.options[n]),l=r!==$e(this.options[i]);o&&(this.options[n]=a),l&&s&&(this.options[i]=a),this.options[n]=_e(this.options[n]??a,e),(!this.options[i]||s)&&(this.options[i]=_e(this.options[i]??a,e))},this.close=!0,this.fill=!0,this.options={},this.type="circle"}get character(){return this.options[ci]??this.options[ui]}set character(e){this.options[ui]=this.options[ci]=e}get custom(){return this.options}set custom(e){this.options=e}get image(){return this.options[fi]??this.options[di]}set image(e){this.options[di]=this.options[fi]=e}get images(){return this.image}set images(e){this.image=e}get polygon(){return this.options[hi]??this.options[mi]}set polygon(e){this.options[mi]=this.options[hi]=e}get stroke(){return[]}set stroke(e){}load(e){if(!e)return;const n=e.options??e.custom;if(n!==void 0)for(const i in n){const s=n[i];s&&(this.options[i]=_e(this.options[i]??{},s))}this.loadShape(e.character,ci,ui,!0),this.loadShape(e.polygon,hi,mi,!1),this.loadShape(e.image??e.images,fi,di,!0),e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}}class _m extends Fa{constructor(){super(),this.destroy="none",this.speed=5}get size_min(){return this.minimumValue}set size_min(e){this.minimumValue=e}load(e){(e==null?void 0:e.size_min)!==void 0&&e.minimumValue===void 0&&(e.minimumValue=e.size_min),super.load(e),e&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class ym extends bn{constructor(){super(),this.animation=new _m,this.random.minimumValue=1,this.value=3}get anim(){return this.animation}set anim(e){this.animation=e}load(e){if(super.load(e),!e)return;const n=e.animation??e.anim;n!==void 0&&(this.animation.load(n),this.value=Y(this.value,this.animation.enable?this.animation.minimumValue:void 0))}}class mr{constructor(){this.width=0}load(e){e&&(e.color!==void 0&&(this.color=pn.create(this.color,e.color)),e.width!==void 0&&(this.width=Y(e.width)),e.opacity!==void 0&&(this.opacity=Y(e.opacity)))}}class vm extends bn{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(e){super.load(e),e&&(e.opacityRate!==void 0&&(this.opacityRate=e.opacityRate),e.sizeRate!==void 0&&(this.sizeRate=e.sizeRate),e.velocityRate!==void 0&&(this.velocityRate=e.velocityRate))}}class bm{constructor(e,n){this._engine=e,this._container=n,this.bounce=new za,this.collisions=new em,this.color=new pn,this.color.value="#fff",this.groups={},this.move=new um,this.number=new mm,this.opacity=new dm,this.reduceDuplicates=!1,this.shadow=new pm,this.shape=new gm,this.size=new ym,this.stroke=new mr,this.zIndex=new vm}load(e){var s,r,a;if(!e)return;if(this.bounce.load(e.bounce),this.color.load(pn.create(this.color,e.color)),e.groups!==void 0)for(const o in e.groups){const l=e.groups[o];l!==void 0&&(this.groups[o]=_e(this.groups[o]??{},l))}this.move.load(e.move),this.number.load(e.number),this.opacity.load(e.opacity),e.reduceDuplicates!==void 0&&(this.reduceDuplicates=e.reduceDuplicates),this.shape.load(e.shape),this.size.load(e.size),this.shadow.load(e.shadow),this.zIndex.load(e.zIndex);const n=((s=e.move)==null?void 0:s.collisions)??((r=e.move)==null?void 0:r.bounce);n!==void 0&&(this.collisions.enable=n),this.collisions.load(e.collisions),e.interactivity!==void 0&&(this.interactivity=_e({},e.interactivity));const i=e.stroke??((a=e.shape)==null?void 0:a.stroke);if(i&&(this.stroke=mt(i,o=>{const l=new mr;return l.load(o),l})),this._container){const o=this._engine.plugins.updaters.get(this._container);if(o)for(const c of o)c.loadOptions&&c.loadOptions(this,e);const l=this._engine.plugins.interactors.get(this._container);if(l)for(const c of l)c.loadParticlesOptions&&c.loadParticlesOptions(this,e)}}}function Ua(t,...e){for(const n of e)t.load(n)}function Ba(t,e,...n){const i=new bm(t,e);return Ua(i,...n),i}class km{constructor(e,n){this._findDefaultTheme=i=>this.themes.find(s=>s.default.value&&s.default.mode===i)??this.themes.find(s=>s.default.value&&s.default.mode==="any"),this._importPreset=i=>{this.load(this._engine.plugins.getPreset(i))},this._engine=e,this._container=n,this.autoPlay=!0,this.background=new Dh,this.backgroundMask=new Fh,this.defaultThemes={},this.delay=0,this.fullScreen=new zh,this.detectRetina=!0,this.duration=0,this.fpsLimit=120,this.interactivity=new Ra(e,n),this.manualParticles=[],this.particles=Ba(this._engine,this._container),this.pauseOnBlur=!0,this.pauseOnOutsideViewport=!0,this.responsive=[],this.smooth=!1,this.style={},this.themes=[],this.zLayers=100}get backgroundMode(){return this.fullScreen}set backgroundMode(e){this.fullScreen.load(e)}get fps_limit(){return this.fpsLimit}set fps_limit(e){this.fpsLimit=e}get retina_detect(){return this.detectRetina}set retina_detect(e){this.detectRetina=e}load(e){var a,o;if(!e)return;e.preset!==void 0&&mt(e.preset,l=>this._importPreset(l)),e.autoPlay!==void 0&&(this.autoPlay=e.autoPlay),e.delay!==void 0&&(this.delay=Y(e.delay));const n=e.detectRetina??e.retina_detect;n!==void 0&&(this.detectRetina=n),e.duration!==void 0&&(this.duration=Y(e.duration));const i=e.fpsLimit??e.fps_limit;i!==void 0&&(this.fpsLimit=i),e.pauseOnBlur!==void 0&&(this.pauseOnBlur=e.pauseOnBlur),e.pauseOnOutsideViewport!==void 0&&(this.pauseOnOutsideViewport=e.pauseOnOutsideViewport),e.zLayers!==void 0&&(this.zLayers=e.zLayers),this.background.load(e.background);const s=e.fullScreen??e.backgroundMode;tt(s)?this.fullScreen.enable=s:this.fullScreen.load(s),this.backgroundMask.load(e.backgroundMask),this.interactivity.load(e.interactivity),e.manualParticles&&(this.manualParticles=e.manualParticles.map(l=>{const c=new Hh;return c.load(l),c})),this.particles.load(e.particles),this.style=_e(this.style,e.style),this._engine.plugins.loadOptions(this,e),e.smooth!==void 0&&(this.smooth=e.smooth);const r=this._engine.plugins.interactors.get(this._container);if(r)for(const l of r)l.loadOptions&&l.loadOptions(this,e);if(e.responsive!==void 0)for(const l of e.responsive){const c=new jh;c.load(l),this.responsive.push(c)}if(this.responsive.sort((l,c)=>l.maxWidth-c.maxWidth),e.themes!==void 0)for(const l of e.themes){const c=this.themes.find(f=>f.name===l.name);if(c)c.load(l);else{const f=new Xh;f.load(l),this.themes.push(f)}}this.defaultThemes.dark=(a=this._findDefaultTheme("dark"))==null?void 0:a.name,this.defaultThemes.light=(o=this._findDefaultTheme("light"))==null?void 0:o.name}setResponsive(e,n,i){this.load(i);const s=this.responsive.find(r=>r.mode==="screen"&&screen?r.maxWidth>screen.availWidth:r.maxWidth*n>e);return this.load(s==null?void 0:s.options),s==null?void 0:s.maxWidth}setTheme(e){if(e){const n=this.themes.find(i=>i.name===e);n&&this.load(n.options)}else{const n=La("(prefers-color-scheme: dark)"),i=n&&n.matches,s=this._findDefaultTheme(i?"dark":"light");s&&this.load(s.options)}}}class Tm{constructor(e,n){this.container=n,this._engine=e,this._interactors=e.plugins.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[]}async externalInteract(e){for(const n of this._externalInteractors)n.isEnabled()&&await n.interact(e)}handleClickMode(e){for(const n of this._externalInteractors)n.handleClickMode&&n.handleClickMode(e)}init(){this._externalInteractors=[],this._particleInteractors=[];for(const e of this._interactors){switch(e.type){case"external":this._externalInteractors.push(e);break;case"particles":this._particleInteractors.push(e);break}e.init()}}async particlesInteract(e,n){for(const i of this._externalInteractors)i.clear(e,n);for(const i of this._particleInteractors)i.isEnabled(e)&&await i.interact(e,n)}async reset(e){for(const n of this._externalInteractors)n.isEnabled()&&n.reset(e);for(const n of this._particleInteractors)n.isEnabled(e)&&n.reset(e)}}const pr=t=>{if(!mh(t.outMode,t.checkModes))return;const e=t.radius*2;t.coord>t.maxCoord-e?t.setCb(-t.radius):t.coord<e&&t.setCb(t.radius)};class Em{constructor(e,n,i,s,r,a){this.container=i,this._calcPosition=(o,l,c,f=0)=>{for(const[,E]of o.plugins){const g=E.particlePosition!==void 0?E.particlePosition(l,this):void 0;if(g)return Ae.create(g.x,g.y,c)}const h=o.canvas.size,u=uh({size:h,position:l}),_=Ae.create(u.x,u.y,c),k=this.getRadius(),T=this.options.move.outModes,A=E=>{pr({outMode:E,checkModes:["bounce","bounce-horizontal"],coord:_.x,maxCoord:o.canvas.size.width,setCb:g=>_.x+=g,radius:k})},y=E=>{pr({outMode:E,checkModes:["bounce","bounce-vertical"],coord:_.y,maxCoord:o.canvas.size.height,setCb:g=>_.y+=g,radius:k})};return A(T.left??T.default),A(T.right??T.default),y(T.top??T.default),y(T.bottom??T.default),this._checkOverlap(_,f)?this._calcPosition(o,void 0,c,f+1):_},this._calculateVelocity=()=>{const o=ch(this.direction),l=o.copy(),c=this.options.move;if(c.direction==="inside"||c.direction==="outside")return l;const f=Math.PI/180*te(c.angle.value),h=Math.PI/180*te(c.angle.offset),u={left:h-f/2,right:h+f/2};return c.straight||(l.angle+=Pt(Y(u.left,u.right))),c.random&&typeof c.speed=="number"&&(l.length*=Xe()),l},this._checkOverlap=(o,l=0)=>{const c=this.options.collisions,f=this.getRadius();if(!c.enable)return!1;const h=c.overlap;if(h.enable)return!1;const u=h.retries;if(u>=0&&l>u)throw new Error(`${ht} particle is overlapping and can't be placed`);return!!this.container.particles.find(_=>ls(o,_.position)<f+_.getRadius())},this._getRollColor=o=>{if(!o||!this.roll||!this.backColor&&!this.roll.alter)return o;const l=this.roll.horizontal&&this.roll.vertical?2:1,c=this.roll.horizontal?Math.PI/2:0;return Math.floor(((this.roll.angle??0)+c)/(Math.PI/l))%2?this.backColor?this.backColor:this.roll.alter?xh(o,this.roll.alter.type,this.roll.alter.value):o:o},this._initPosition=o=>{const l=this.container,c=te(this.options.zIndex.value);this.position=this._calcPosition(l,o,Ca(c,0,l.zLayers)),this.initialPosition=this.position.copy();const f=l.canvas.size;switch(this.moveCenter={...Na(this.options.move.center,f),radius:this.options.move.center.radius??0,mode:this.options.move.center.mode??"percent"},this.direction=lh(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case"inside":this.outType="inside";break;case"outside":this.outType="outside";break}this.offset=It.origin},this._loadShapeData=(o,l)=>{const c=o.options[this.shape];if(c)return _e({close:o.close,fill:o.fill},rn(c,this.id,l))},this._engine=e,this.init(n,s,r,a)}destroy(e){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const n=this.container,i=this.pathGenerator;for(const[,s]of n.plugins)s.particleDestroyed&&s.particleDestroyed(this,e);for(const s of n.particles.updaters)s.particleDestroyed&&s.particleDestroyed(this,e);i&&i.reset(this)}draw(e){const n=this.container;for(const[,i]of n.plugins)n.canvas.drawParticlePlugin(i,this,e);n.canvas.drawParticle(this,e)}getFillColor(){return this._getRollColor(this.bubble.color??fr(this.color))}getMass(){return this.getRadius()**2*Math.PI/2}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??fr(this.strokeColor))}init(e,n,i,s){const r=this.container,a=this._engine;this.id=e,this.group=s,this.fill=!0,this.pathRotation=!1,this.close=!0,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0;const o=r.retina.pixelRatio,l=r.actualOptions,c=Ba(this._engine,r,l.particles),f=c.shape.type,{reduceDuplicates:h}=c;this.shape=rn(f,this.id,h);const u=c.shape;if(i&&i.shape&&i.shape.type){const g=i.shape.type,v=rn(g,this.id,h);v&&(this.shape=v,u.load(i.shape))}this.shapeData=this._loadShapeData(u,h),c.load(i);const _=this.shapeData;_&&c.load(_.particles);const k=new Ra(a,r);k.load(r.actualOptions.interactivity),k.load(c.interactivity),this.interactivity=k,this.fill=(_==null?void 0:_.fill)??c.shape.fill,this.close=(_==null?void 0:_.close)??c.shape.close,this.options=c;const T=this.options.move.path;this.pathDelay=ah(T.delay)*1e3,T.generator&&(this.pathGenerator=this._engine.plugins.getPathGenerator(T.generator),this.pathGenerator&&r.addPath(T.generator,this.pathGenerator)&&this.pathGenerator.init(r)),r.retina.initParticle(this),this.size=gh(this.options.size,o),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(n),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=1-te(this.options.move.decay);const A=r.particles;A.needsSort=A.needsSort||A.lastZIndex<this.position.z,A.lastZIndex=this.position.z,this.zIndexFactor=this.position.z/r.zLayers,this.sides=24;let y=r.drawers.get(this.shape);y||(y=this._engine.plugins.getShapeDrawer(this.shape),y&&r.drawers.set(this.shape,y)),y&&y.loadShape&&y.loadShape(this);const E=y==null?void 0:y.getSidesCount;E&&(this.sides=E(this)),this.spawning=!1,this.shadowColor=Ot(this.options.shadow.color);for(const g of r.particles.updaters)g.init(this);for(const g of r.particles.movers)g.init&&g.init(this);y&&y.particleInit&&y.particleInit(r,this);for(const[,g]of r.plugins)g.particleCreated&&g.particleCreated(this)}isInsideCanvas(){const e=this.getRadius(),n=this.container.canvas.size,i=this.position;return i.x>=-e&&i.y>=-e&&i.y<=n.height+e&&i.x<=n.width+e}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const e of this.container.particles.updaters)e.reset&&e.reset(this)}}class wm{constructor(e,n){this.position=e,this.particle=n}}class $a{constructor(e,n){this.position={x:e,y:n}}}class Mt extends $a{constructor(e,n,i,s){super(e,n),this.size={height:s,width:i}}contains(e){const n=this.size.width,i=this.size.height,s=this.position;return e.x>=s.x&&e.x<=s.x+n&&e.y>=s.y&&e.y<=s.y+i}intersects(e){e instanceof Xn&&e.intersects(this);const n=this.size.width,i=this.size.height,s=this.position,r=e.position,a=e instanceof Mt?e.size:{width:0,height:0},o=a.width,l=a.height;return r.x<s.x+n&&r.x+o>s.x&&r.y<s.y+i&&r.y+l>s.y}}class Xn extends $a{constructor(e,n,i){super(e,n),this.radius=i}contains(e){return ls(e,this.position)<=this.radius}intersects(e){const n=this.position,i=e.position,s={x:Math.abs(i.x-n.x),y:Math.abs(i.y-n.y)},r=this.radius;if(e instanceof Xn){const a=r+e.radius,o=Math.sqrt(s.x**2+s.y**2);return a>o}else if(e instanceof Mt){const{width:a,height:o}=e.size;return Math.pow(s.x-a,2)+Math.pow(s.y-o,2)<=r**2||s.x<=r+a&&s.y<=r+o||s.x<=a||s.y<=o}return!1}}class zn{constructor(e,n){this.rectangle=e,this.capacity=n,this._subdivide=()=>{const{x:i,y:s}=this.rectangle.position,{width:r,height:a}=this.rectangle.size,{capacity:o}=this;for(let l=0;l<4;l++)this._subs.push(new zn(new Mt(i+r/2*(l%2),s+a/2*(Math.round(l/2)-l%2),r/2,a/2),o));this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(e){return this.rectangle.contains(e.position)?this._points.length<this.capacity?(this._points.push(e),!0):(this._divided||this._subdivide(),this._subs.some(n=>n.insert(e))):!1}query(e,n,i){const s=i||[];if(!e.intersects(this.rectangle))return[];for(const r of this._points)!e.contains(r.position)&&ls(e.position,r.position)>r.particle.getRadius()&&(!n||n(r.particle))||s.push(r.particle);if(this._divided)for(const r of this._subs)r.query(e,n,s);return s}queryCircle(e,n,i){return this.query(new Xn(e.x,e.y,n),i)}queryRectangle(e,n,i){return this.query(new Mt(e.x,e.y,n.width,n.height),i)}}const gr=4,_r=t=>new Mt(-t.width/4,-t.height/4,t.width*3/2,t.height*3/2);class Am{constructor(e,n){this._applyDensity=(s,r,a)=>{var _;if(!((_=s.number.density)!=null&&_.enable))return;const o=s.number,l=this._initDensityFactor(o.density),c=o.value,f=o.limit>0?o.limit:c,h=Math.min(c,f)*l+r,u=Math.min(this.count,this.filter(k=>k.group===a).length);this.limit=o.limit*l,u<h?this.push(Math.abs(h-u),void 0,s,a):u>h&&this.removeQuantity(u-h,a)},this._initDensityFactor=s=>{const r=this._container;if(!r.canvas.element||!s.enable)return 1;const a=r.canvas.element,o=r.retina.pixelRatio;return a.width*a.height/(s.factor*o**2*s.area)},this._pushParticle=(s,r,a,o)=>{try{let l=this.pool.pop();l?l.init(this._nextId,s,r,a):l=new Em(this._engine,this._nextId,this._container,s,r,a);let c=!0;return o&&(c=o(l)),c?(this._array.push(l),this._zArray.push(l),this._nextId++,this._engine.dispatchEvent("particleAdded",{container:this._container,data:{particle:l}}),l):void 0}catch(l){mn().warning(`${ht} adding particle: ${l}`);return}},this._removeParticle=(s,r,a)=>{const o=this._array[s];if(!o||o.group!==r)return!1;o.destroy(a);const l=this._zArray.indexOf(o);return this._array.splice(s,1),this._zArray.splice(l,1),this.pool.push(o),this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:o}}),!0},this._engine=e,this._container=n,this._nextId=0,this._array=[],this._zArray=[],this.pool=[],this.limit=0,this.needsSort=!1,this.lastZIndex=0,this._interactionManager=new Tm(e,n);const i=n.canvas.size;this.quadTree=new zn(_r(i),gr),this.movers=this._engine.plugins.getMovers(n,!0),this.updaters=this._engine.plugins.getUpdaters(n,!0)}get count(){return this._array.length}addManualParticles(){const e=this._container,n=e.actualOptions;for(const i of n.manualParticles)this.addParticle(i.position?Na(i.position,e.canvas.size):void 0,i.options)}addParticle(e,n,i,s){const r=this._container,a=r.actualOptions,o=a.particles.number.limit;if(o>0){const l=this.count+1-o;l>0&&this.removeQuantity(l)}return this._pushParticle(e,n,i,s)}clear(){this._array=[],this._zArray=[]}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}async draw(e){const n=this._container;n.canvas.clear(),await this.update(e);for(const[,i]of n.plugins)n.canvas.drawPlugin(i,e);for(const i of this._zArray)i.draw(e)}filter(e){return this._array.filter(e)}find(e){return this._array.find(e)}handleClickMode(e){this._interactionManager.handleClickMode(e)}init(){var s;const e=this._container,n=e.actualOptions;this.lastZIndex=0,this.needsSort=!1;let i=!1;this.updaters=this._engine.plugins.getUpdaters(e,!0),this._interactionManager.init();for(const[,r]of e.plugins)if(r.particlesInitialization!==void 0&&(i=r.particlesInitialization()),i)break;this._interactionManager.init();for(const[,r]of e.pathGenerators)r.init(e);if(this.addManualParticles(),!i){for(const r in n.particles.groups){const a=n.particles.groups[r];for(let o=this.count,l=0;l<((s=a.number)==null?void 0:s.value)&&o<n.particles.number.value;o++,l++)this.addParticle(void 0,a,r)}for(let r=this.count;r<n.particles.number.value;r++)this.addParticle()}}push(e,n,i,s){this.pushing=!0;for(let r=0;r<e;r++)this.addParticle(n==null?void 0:n.position,i,s);this.pushing=!1}async redraw(){this.clear(),this.init(),await this.draw({value:0,factor:0})}remove(e,n,i){this.removeAt(this._array.indexOf(e),void 0,n,i)}removeAt(e,n=1,i,s){if(e<0||e>this.count)return;let r=0;for(let a=e;r<n&&a<this.count;a++)this._removeParticle(a--,i,s)&&r++}removeQuantity(e,n){this.removeAt(0,e,n)}setDensity(){const e=this._container.actualOptions,n=e.particles.groups;for(const i in n)this._applyDensity(n[i],0,i);this._applyDensity(e.particles,e.manualParticles.length)}async update(e){const n=this._container,i=new Set;this.quadTree=new zn(_r(n.canvas.size),gr);for(const[,s]of n.pathGenerators)s.update();for(const[,s]of n.plugins)s.update&&s.update(e);for(const s of this._array){const r=n.canvas.resizeFactor;r&&!s.ignoresResizeRatio&&(s.position.x*=r.width,s.position.y*=r.height,s.initialPosition.x*=r.width,s.initialPosition.y*=r.height),s.ignoresResizeRatio=!1,await this._interactionManager.reset(s);for(const[,a]of this._container.plugins){if(s.destroyed)break;a.particleUpdate&&a.particleUpdate(s,e)}for(const a of this.movers)a.isEnabled(s)&&a.move(s,e);if(s.destroyed){i.add(s);continue}this.quadTree.insert(new wm(s.getPosition(),s))}if(i.size){const s=r=>!i.has(r);this._array=this.filter(s),this._zArray=this._zArray.filter(s),this.pool.push(...i)}await this._interactionManager.externalInteract(e);for(const s of this._array){for(const r of this.updaters)r.update(s,e);!s.destroyed&&!s.spawning&&await this._interactionManager.particlesInteract(s,e)}if(delete n.canvas.resizeFactor,this.needsSort){const s=this._zArray;s.sort((r,a)=>a.position.z-r.position.z||r.id-a.id),this.lastZIndex=s[s.length-1].position.z,this.needsSort=!1}}}class Sm{constructor(e){this.container=e,this.pixelRatio=1,this.reduceFactor=1}init(){const e=this.container,n=e.actualOptions;this.pixelRatio=!n.detectRetina||jn()?1:window.devicePixelRatio,this.reduceFactor=1;const i=this.pixelRatio;if(e.canvas.element){const a=e.canvas.element;e.canvas.size.width=a.offsetWidth*i,e.canvas.size.height=a.offsetHeight*i}const s=n.particles,r=s.move;this.attractDistance=te(r.attract.distance)*i,this.maxSpeed=te(r.gravity.maxSpeed)*i,this.sizeAnimationSpeed=te(s.size.animation.speed)*i}initParticle(e){const n=e.options,i=this.pixelRatio,s=n.move,r=s.distance,a=e.retina;a.attractDistance=te(s.attract.distance)*i,a.moveDrift=te(s.drift)*i,a.moveSpeed=te(s.speed)*i,a.sizeAnimationSpeed=te(n.size.animation.speed)*i;const o=a.maxDistance;o.horizontal=r.horizontal!==void 0?r.horizontal*i:void 0,o.vertical=r.vertical!==void 0?r.vertical*i:void 0,a.maxSpeed=te(s.gravity.maxSpeed)*i}}function re(t){return t&&!t.destroyed}function Im(t,e=60,n=!1){return{value:t,factor:n?60/e:60*t/1e3}}function Tt(t,e,...n){const i=new km(t,e);return Ua(i,...n),i}const Pm="default",yr={generate:t=>t.velocity,init:()=>{},update:()=>{},reset:()=>{}};class Om{constructor(e,n,i){this.id=n,this._intersectionManager=s=>{if(!(!re(this)||!this.actualOptions.pauseOnOutsideViewport))for(const r of s)r.target===this.interactivity.element&&(r.isIntersecting?this.play:this.pause)()},this._nextFrame=async s=>{try{if(!this.smooth&&this.lastFrameTime!==void 0&&s<this.lastFrameTime+1e3/this.fpsLimit){this.draw(!1);return}this.lastFrameTime??(this.lastFrameTime=s);const r=Im(s-this.lastFrameTime,this.fpsLimit,this.smooth);if(this.addLifeTime(r.value),this.lastFrameTime=s,r.value>1e3){this.draw(!1);return}if(await this.particles.draw(r),!this.alive()){this.destroy();return}this.getAnimationStatus()&&this.draw(!1)}catch(r){mn().error(`${ht} in animation loop`,r)}},this._engine=e,this.fpsLimit=120,this.smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this.lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._sourceOptions=i,this._initialSourceOptions=i,this.retina=new Sm(this),this.canvas=new Nh(this),this.particles=new Am(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.drawers=new Map,this._options=Tt(this._engine,this),this.actualOptions=Tt(this._engine,this),this._eventListeners=new Mh(this),typeof IntersectionObserver<"u"&&IntersectionObserver&&(this._intersectionObserver=new IntersectionObserver(s=>this._intersectionManager(s))),this._engine.dispatchEvent("containerBuilt",{container:this})}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(e){if(!re(this))return;const n=this.interactivity.element;if(!n)return;const i=(h,u,_)=>{if(!re(this))return;const k=this.retina.pixelRatio,T={x:u.x*k,y:u.y*k},A=this.particles.quadTree.queryCircle(T,_*k);e(h,A)},s=h=>{if(!re(this))return;const u=h,_={x:u.offsetX||u.clientX,y:u.offsetY||u.clientY};i(h,_,1)},r=()=>{re(this)&&(c=!0,f=!1)},a=()=>{re(this)&&(f=!0)},o=h=>{if(re(this)){if(c&&!f){const u=h;let _=u.touches[u.touches.length-1];if(!_&&(_=u.changedTouches[u.changedTouches.length-1],!_))return;const k=this.canvas.element,T=k?k.getBoundingClientRect():void 0,A={x:_.clientX-(T?T.left:0),y:_.clientY-(T?T.top:0)};i(h,A,Math.max(_.radiusX,_.radiusY))}c=!1,f=!1}},l=()=>{re(this)&&(c=!1,f=!1)};let c=!1,f=!1;n.addEventListener("click",s),n.addEventListener("touchstart",r),n.addEventListener("touchmove",a),n.addEventListener("touchend",o),n.addEventListener("touchcancel",l)}addLifeTime(e){this._lifeTime+=e}addPath(e,n,i=!1){return!re(this)||!i&&this.pathGenerators.has(e)?!1:(this.pathGenerators.set(e,n??yr),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}destroy(){if(!re(this))return;this.stop(),this.particles.destroy(),this.canvas.destroy();for(const[,i]of this.drawers)i.destroy&&i.destroy(this);for(const i of this.drawers.keys())this.drawers.delete(i);this._engine.plugins.destroy(this),this.destroyed=!0;const e=this._engine.dom(),n=e.findIndex(i=>i===this);n>=0&&e.splice(n,1),this._engine.dispatchEvent("containerDestroyed",{container:this})}draw(e){if(!re(this))return;let n=e;this._drawAnimationFrame=requestAnimationFrame(async i=>{n&&(this.lastFrameTime=void 0,n=!1),await this._nextFrame(i)})}async export(e,n={}){for(const[,i]of this.plugins){if(!i.export)continue;const s=await i.export(e,n);if(s.supported)return s.blob}mn().error(`${ht} - Export plugin with type ${e} not found`)}getAnimationStatus(){return!this._paused&&!this.pageHidden&&re(this)}handleClickMode(e){if(re(this)){this.particles.handleClickMode(e);for(const[,n]of this.plugins)n.handleClickMode&&n.handleClickMode(e)}}async init(){if(!re(this))return;const e=this._engine.plugins.getSupportedShapes();for(const i of e){const s=this._engine.plugins.getShapeDrawer(i);s&&this.drawers.set(i,s)}this._options=Tt(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Tt(this._engine,this,this._options);const n=this._engine.plugins.getAvailablePlugins(this);for(const[i,s]of n)this.plugins.set(i,s);this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize(),this.zLayers=this.actualOptions.zLayers,this._duration=te(this.actualOptions.duration)*1e3,this._delay=te(this.actualOptions.delay)*1e3,this._lifeTime=0,this.fpsLimit=this.actualOptions.fpsLimit>0?this.actualOptions.fpsLimit:120,this.smooth=this.actualOptions.smooth;for(const[,i]of this.drawers)i.init&&await i.init(this);for(const[,i]of this.plugins)i.init&&await i.init();this._engine.dispatchEvent("containerInit",{container:this}),this.particles.init(),this.particles.setDensity();for(const[,i]of this.plugins)i.particlesSetup&&i.particlesSetup();this._engine.dispatchEvent("particlesSetup",{container:this})}async loadTheme(e){re(this)&&(this._currentTheme=e,await this.refresh())}pause(){if(re(this)&&(this._drawAnimationFrame!==void 0&&(cancelAnimationFrame(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(const[,e]of this.plugins)e.pause&&e.pause();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent("containerPaused",{container:this})}}play(e){if(!re(this))return;const n=this._paused||e;if(this._firstStart&&!this.actualOptions.autoPlay){this._firstStart=!1;return}if(this._paused&&(this._paused=!1),n)for(const[,i]of this.plugins)i.play&&i.play();this._engine.dispatchEvent("containerPlay",{container:this}),this.draw(n||!1)}async refresh(){if(re(this))return this.stop(),this.start()}async reset(){if(re(this))return this._initialSourceOptions=void 0,this._options=Tt(this._engine,this),this.actualOptions=Tt(this._engine,this,this._options),this.refresh()}setNoise(e,n,i){re(this)&&this.setPath(e,n,i)}setPath(e,n,i){if(!e||!re(this))return;const s={...yr};if(Ma(e))s.generate=e,n&&(s.init=n),i&&(s.update=i);else{const r=s;s.generate=e.generate||r.generate,s.init=e.init||r.init,s.update=e.update||r.update}this.addPath(Pm,s,!0)}async start(){!re(this)||this.started||(await this.init(),this.started=!0,await new Promise(e=>{this._delayTimeout=setTimeout(async()=>{this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(const[,n]of this.plugins)n.start&&await n.start();this._engine.dispatchEvent("containerStarted",{container:this}),this.play(),e()},this._delay)}))}stop(){if(!(!re(this)||!this.started)){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const[,e]of this.plugins)e.stop&&e.stop();for(const e of this.plugins.keys())this.plugins.delete(e);this._sourceOptions=this._options,this._engine.dispatchEvent("containerStopped",{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const e=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this.responsiveMaxWidth===e?!1:(this.responsiveMaxWidth=e,!0)}}class Cm{constructor(){this._listeners=new Map}addEventListener(e,n){this.removeEventListener(e,n);let i=this._listeners.get(e);i||(i=[],this._listeners.set(e,i)),i.push(n)}dispatchEvent(e,n){const i=this._listeners.get(e);i&&i.forEach(s=>s(n))}hasEventListener(e){return!!this._listeners.get(e)}removeAllEventListeners(e){e?this._listeners.delete(e):this._listeners=new Map}removeEventListener(e,n){const i=this._listeners.get(e);if(!i)return;const s=i.length,r=i.indexOf(n);r<0||(s===1?this._listeners.delete(e):i.splice(r,1))}}function pi(t,e,n,i=!1){let s=e.get(t);return(!s||i)&&(s=[...n.values()].map(r=>r(t)),e.set(t,s)),s}class xm{constructor(e){this._engine=e,this.plugins=[],this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.drawers=new Map,this.pathGenerators=new Map}addInteractor(e,n){this._initializers.interactors.set(e,n)}addParticleMover(e,n){this._initializers.movers.set(e,n)}addParticleUpdater(e,n){this._initializers.updaters.set(e,n)}addPathGenerator(e,n){!this.getPathGenerator(e)&&this.pathGenerators.set(e,n)}addPlugin(e){!this.getPlugin(e.id)&&this.plugins.push(e)}addPreset(e,n,i=!1){(i||!this.getPreset(e))&&this.presets.set(e,n)}addShapeDrawer(e,n){mt(e,i=>{!this.getShapeDrawer(i)&&this.drawers.set(i,n)})}destroy(e){this.updaters.delete(e),this.movers.delete(e),this.interactors.delete(e)}getAvailablePlugins(e){const n=new Map;for(const i of this.plugins)i.needsPlugin(e.actualOptions)&&n.set(i.id,i.getPlugin(e));return n}getInteractors(e,n=!1){return pi(e,this.interactors,this._initializers.interactors,n)}getMovers(e,n=!1){return pi(e,this.movers,this._initializers.movers,n)}getPathGenerator(e){return this.pathGenerators.get(e)}getPlugin(e){return this.plugins.find(n=>n.id===e)}getPreset(e){return this.presets.get(e)}getShapeDrawer(e){return this.drawers.get(e)}getSupportedShapes(){return this.drawers.keys()}getUpdaters(e,n=!1){return pi(e,this.updaters,this._initializers.updaters,n)}loadOptions(e,n){for(const i of this.plugins)i.loadOptions(e,n)}loadParticlesOptions(e,n,...i){const s=this.updaters.get(e);if(s)for(const r of s)r.loadOptions&&r.loadOptions(n,...i)}}async function Lm(t){const e=rn(t.url,t.index);if(!e)return t.fallback;const n=await fetch(e);return n.ok?n.json():(mn().error(`${ht} ${n.status} while retrieving config file`),t.fallback)}function Nm(t){return!t.id&&!t.element&&!t.url&&!t.options}function Mm(t){return!Nm(t)}class Dm{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new Cm,this._initialized=!1,this.plugins=new xm(this)}get configs(){const e={};for(const[n,i]of this._configs)e[n]=i;return e}get version(){return"2.12.0"}addConfig(e,n){Be(e)?n&&(n.name=e,this._configs.set(e,n)):this._configs.set(e.name??"default",e)}addEventListener(e,n){this._eventDispatcher.addEventListener(e,n)}async addInteractor(e,n,i=!0){this.plugins.addInteractor(e,n),await this.refresh(i)}async addMover(e,n,i=!0){this.plugins.addParticleMover(e,n),await this.refresh(i)}async addParticleUpdater(e,n,i=!0){this.plugins.addParticleUpdater(e,n),await this.refresh(i)}async addPathGenerator(e,n,i=!0){this.plugins.addPathGenerator(e,n),await this.refresh(i)}async addPlugin(e,n=!0){this.plugins.addPlugin(e),await this.refresh(n)}async addPreset(e,n,i=!1,s=!0){this.plugins.addPreset(e,n,i),await this.refresh(s)}async addShape(e,n,i,s,r,a=!0){let o,l=a,c,f,h;tt(i)?(l=i,c=void 0):c=i,tt(s)?(l=s,f=void 0):f=s,tt(r)?(l=r,h=void 0):h=r,Ma(n)?o={afterEffect:f,destroy:h,draw:n,init:c}:o=n,this.plugins.addShapeDrawer(e,o),await this.refresh(l)}dispatchEvent(e,n){this._eventDispatcher.dispatchEvent(e,n)}dom(){return this._domArray}domItem(e){const n=this.dom(),i=n[e];if(!i||i.destroyed){n.splice(e,1);return}return i}init(){this._initialized||(this._initialized=!0)}async load(e,n){return this.loadFromArray(e,n)}async loadFromArray(e,n,i){let s;return Mm(e)?s=e:(s={},Be(e)?s.id=e:s.options=e,De(n)?s.index=n:s.options=n??s.options,s.index=i??s.index),this._loadParams(s)}async loadJSON(e,n,i){let s,r;return De(n)||n===void 0?s=e:(r=e,s=n),this._loadParams({id:r,url:s,index:i})}async refresh(e=!0){e&&this.dom().forEach(n=>n.refresh())}removeEventListener(e,n){this._eventDispatcher.removeEventListener(e,n)}async set(e,n,i,s){const r={index:s};return Be(e)?r.id=e:r.element=e,n instanceof HTMLElement?r.element=n:r.options=n,De(i)?r.index=i:r.options=i??r.options,this._loadParams(r)}async setJSON(e,n,i,s){const r={};return e instanceof HTMLElement?(r.element=e,r.url=n,r.index=i):(r.id=e,r.element=n,r.url=i,r.index=s),this._loadParams(r)}setOnClickHandler(e){const n=this.dom();if(!n.length)throw new Error(`${ht} can only set click handlers after calling tsParticles.load()`);for(const i of n)i.addClickHandler(e)}async _loadParams(e){const n=e.id??`tsparticles${Math.floor(Xe()*1e4)}`,{index:i,url:s}=e,r=s?await Lm({fallback:e.options,url:s,index:i}):e.options;let a=e.element??document.getElementById(n);a||(a=document.createElement("div"),a.id=n,document.body.append(a));const o=rn(r,i),l=this.dom(),c=l.findIndex(u=>u.id===n);if(c>=0){const u=this.domItem(c);u&&!u.destroyed&&(u.destroy(),l.splice(c,1))}let f;if(a.tagName.toLowerCase()==="canvas")f=a,f.dataset[sn]="false";else{const u=a.getElementsByTagName("canvas");u.length?(f=u[0],f.dataset[sn]="false"):(f=document.createElement("canvas"),f.dataset[sn]="true",a.appendChild(f))}f.style.width||(f.style.width="100%"),f.style.height||(f.style.height="100%");const h=new Om(this,n,o);return c>=0?l.splice(c,0,h):l.push(h),h.canvas.loadCanvas(f),await h.start(),h}}class Rm{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.s!==void 0&&i.l!==void 0)return xi(i)}handleRangeColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.l!==void 0)return xi({h:te(i.h),l:te(i.l),s:te(i.s)})}parseString(e){if(!e.startsWith("hsl"))return;const n=/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(e);return i?Th({a:i.length>4?xa(i[5]):1,h:parseInt(i[1],10),l:parseInt(i[3],10),s:parseInt(i[2],10)}):void 0}}class Fm{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return i}handleRangeColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return{r:te(i.r),g:te(i.g),b:te(i.b)}}parseString(e){if(!e.startsWith(this.stringPrefix))return;const n=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(e);return i?{a:i.length>4?xa(i[5]):1,b:parseInt(i[3],10),g:parseInt(i[2],10),r:parseInt(i[1],10)}:void 0}}function zm(){const t=new Fm,e=new Rm;lr(t),lr(e);const n=new Dm;return n.init(),n}const Ln=zm();jn()||(window.tsParticles=Ln);let Et;const Um=yn({props:{id:{type:String,required:!0},options:{type:Object},url:{type:String},particlesLoaded:{type:Function},particlesInit:{type:Function}},mounted(){Qr(async()=>{if(!this.id)throw new Error("Prop 'id' is required!");Ln.init(),this.particlesInit&&await this.particlesInit(Ln),Et=await Ln.load({id:this.id,url:this.url,options:this.options}),this.particlesLoaded&&Et&&this.particlesLoaded(Et)})},unmounted(){Et&&(Et.destroy(),Et=void 0)}}),Bm=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},$m=["id"];function Gm(t,e,n,i,s,r){return z(),$("div",{id:t.id},null,8,$m)}const vr=Bm(Um,[["render",Gm]]),Wm=t=>{t.component("vue-particles",vr),t.component("Particles",vr)};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Vm(t,e,n){return(e=jm(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function br(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?br(Object(n),!0).forEach(function(i){Vm(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):br(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Hm(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jm(t){var e=Hm(t,"string");return typeof e=="symbol"?e:e+""}const kr=()=>{};let us={},Ga={},Wa=null,Va={mark:kr,measure:kr};try{typeof window<"u"&&(us=window),typeof document<"u"&&(Ga=document),typeof MutationObserver<"u"&&(Wa=MutationObserver),typeof performance<"u"&&(Va=performance)}catch{}const{userAgent:Tr=""}=us.navigator||{},it=us,ie=Ga,Er=Wa,Pn=Va;it.document;const Qe=!!ie.documentElement&&!!ie.head&&typeof ie.addEventListener=="function"&&typeof ie.createElement=="function",Ha=~Tr.indexOf("MSIE")||~Tr.indexOf("Trident/");var Ym=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Xm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ja={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Km={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ya=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ye="classic",Kn="duotone",qm="sharp",Qm="sharp-duotone",Xa=[ye,Kn,qm,Qm],Jm={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Zm={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ep=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),tp={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},np=["fak","fa-kit","fakd","fa-kit-duotone"],wr={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ip=["kit"],sp={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},rp=["fak","fakd"],ap={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ar={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},On={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},op=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],lp=["fak","fa-kit","fakd","fa-kit-duotone"],cp={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},up={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},fp={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Li={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},dp=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ni=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...op,...dp],hp=["solid","regular","light","thin","duotone","brands"],Ka=[1,2,3,4,5,6,7,8,9,10],mp=Ka.concat([11,12,13,14,15,16,17,18,19,20]),pp=[...Object.keys(fp),...hp,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",On.GROUP,On.SWAP_OPACITY,On.PRIMARY,On.SECONDARY].concat(Ka.map(t=>"".concat(t,"x"))).concat(mp.map(t=>"w-".concat(t))),gp={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ke="___FONT_AWESOME___",Mi=16,qa="fa",Qa="svg-inline--fa",pt="data-fa-i2svg",Di="data-fa-pseudo-element",_p="data-fa-pseudo-element-pending",fs="data-prefix",ds="data-icon",Sr="fontawesome-i2svg",yp="async",vp=["HTML","HEAD","STYLE","SCRIPT"],Ja=(()=>{try{return!0}catch{return!1}})();function kn(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[ye]}})}const Za=C({},ja);Za[ye]=C(C(C(C({},{"fa-duotone":"duotone"}),ja[ye]),wr.kit),wr["kit-duotone"]);const bp=kn(Za),Ri=C({},tp);Ri[ye]=C(C(C(C({},{duotone:"fad"}),Ri[ye]),Ar.kit),Ar["kit-duotone"]);const Ir=kn(Ri),Fi=C({},Li);Fi[ye]=C(C({},Fi[ye]),ap.kit);const hs=kn(Fi),zi=C({},up);zi[ye]=C(C({},zi[ye]),sp.kit);kn(zi);const kp=Ym,eo="fa-layers-text",Tp=Xm,Ep=C({},Jm);kn(Ep);const wp=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gi=Km,Ap=[...ip,...pp],an=it.FontAwesomeConfig||{};function Sp(t){var e=ie.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ip(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ie&&typeof ie.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const s=Ip(Sp(n));s!=null&&(an[i]=s)});const to={styleDefault:"solid",familyDefault:ye,cssPrefix:qa,replacementClass:Qa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};an.familyPrefix&&(an.cssPrefix=an.familyPrefix);const Dt=C(C({},to),an);Dt.autoReplaceSvg||(Dt.observeMutations=!1);const R={};Object.keys(to).forEach(t=>{Object.defineProperty(R,t,{enumerable:!0,set:function(e){Dt[t]=e,on.forEach(n=>n(R))},get:function(){return Dt[t]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,on.forEach(e=>e(R))},get:function(){return Dt.cssPrefix}});it.FontAwesomeConfig=R;const on=[];function Pp(t){return on.push(t),()=>{on.splice(on.indexOf(t),1)}}const et=Mi,ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Op(t){if(!t||!Qe)return;const e=ie.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ie.head.childNodes;let i=null;for(let s=n.length-1;s>-1;s--){const r=n[s],a=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=r)}return ie.head.insertBefore(e,i),t}const Cp="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gn(){let t=12,e="";for(;t-- >0;)e+=Cp[Math.random()*62|0];return e}function Ft(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ms(t){return t.classList?Ft(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function no(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xp(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(no(t[n]),'" '),"").trim()}function qn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ps(t){return t.size!==ze.size||t.x!==ze.x||t.y!==ze.y||t.rotate!==ze.rotate||t.flipX||t.flipY}function Lp(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:c}}function Np(t){let{transform:e,width:n=Mi,height:i=Mi,startCentered:s=!1}=t,r="";return s&&Ha?r+="translate(".concat(e.x/et-n/2,"em, ").concat(e.y/et-i/2,"em) "):s?r+="translate(calc(-50% + ".concat(e.x/et,"em), calc(-50% + ").concat(e.y/et,"em)) "):r+="translate(".concat(e.x/et,"em, ").concat(e.y/et,"em) "),r+="scale(".concat(e.size/et*(e.flipX?-1:1),", ").concat(e.size/et*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var Mp=`:root, :host {
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
}`;function io(){const t=qa,e=Qa,n=R.cssPrefix,i=R.replacementClass;let s=Mp;if(n!==t||i!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(i))}return s}let Pr=!1;function _i(){R.autoAddCss&&!Pr&&(Op(io()),Pr=!0)}var Dp={mixout(){return{dom:{css:io,insertCss:_i}}},hooks(){return{beforeDOMElementCreation(){_i()},beforeI2svg(){_i()}}}};const qe=it||{};qe[Ke]||(qe[Ke]={});qe[Ke].styles||(qe[Ke].styles={});qe[Ke].hooks||(qe[Ke].hooks={});qe[Ke].shims||(qe[Ke].shims=[]);var Ue=qe[Ke];const so=[],ro=function(){ie.removeEventListener("DOMContentLoaded",ro),Un=1,so.map(t=>t())};let Un=!1;Qe&&(Un=(ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ie.readyState),Un||ie.addEventListener("DOMContentLoaded",ro));function Rp(t){Qe&&(Un?setTimeout(t,0):so.push(t))}function Tn(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?no(t):"<".concat(e," ").concat(xp(n),">").concat(i.map(Tn).join(""),"</").concat(e,">")}function Or(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Fp=function(e,n){return function(i,s,r,a){return e.call(n,i,s,r,a)}},yi=function(e,n,i,s){var r=Object.keys(e),a=r.length,o=s!==void 0?Fp(n,s):n,l,c,f;for(i===void 0?(l=1,f=e[r[0]]):(l=0,f=i);l<a;l++)c=r[l],f=o(f,e[c],c,e);return f};function zp(t){const e=[];let n=0;const i=t.length;for(;n<i;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Ui(t){const e=zp(t);return e.length===1?e[0].toString(16):null}function Up(t,e){const n=t.length;let i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function Cr(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function Bi(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,s=Cr(e);typeof Ue.hooks.addPack=="function"&&!i?Ue.hooks.addPack(t,Cr(e)):Ue.styles[t]=C(C({},Ue.styles[t]||{}),s),t==="fas"&&Bi("fa",e)}const{styles:_n,shims:Bp}=Ue,ao=Object.keys(hs),$p=ao.reduce((t,e)=>(t[e]=Object.keys(hs[e]),t),{});let gs=null,oo={},lo={},co={},uo={},fo={};function Gp(t){return~Ap.indexOf(t)}function Wp(t,e){const n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!Gp(s)?s:null}const ho=()=>{const t=i=>yi(_n,(s,r,a)=>(s[a]=yi(r,i,{}),s),{});oo=t((i,s,r)=>(s[3]&&(i[s[3]]=r),s[2]&&s[2].filter(o=>typeof o=="number").forEach(o=>{i[o.toString(16)]=r}),i)),lo=t((i,s,r)=>(i[r]=r,s[2]&&s[2].filter(o=>typeof o=="string").forEach(o=>{i[o]=r}),i)),fo=t((i,s,r)=>{const a=s[2];return i[r]=r,a.forEach(o=>{i[o]=r}),i});const e="far"in _n||R.autoFetchSvg,n=yi(Bp,(i,s)=>{const r=s[0];let a=s[1];const o=s[2];return a==="far"&&!e&&(a="fas"),typeof r=="string"&&(i.names[r]={prefix:a,iconName:o}),typeof r=="number"&&(i.unicodes[r.toString(16)]={prefix:a,iconName:o}),i},{names:{},unicodes:{}});co=n.names,uo=n.unicodes,gs=Qn(R.styleDefault,{family:R.familyDefault})};Pp(t=>{gs=Qn(t.styleDefault,{family:R.familyDefault})});ho();function _s(t,e){return(oo[t]||{})[e]}function Vp(t,e){return(lo[t]||{})[e]}function dt(t,e){return(fo[t]||{})[e]}function mo(t){return co[t]||{prefix:null,iconName:null}}function Hp(t){const e=uo[t],n=_s("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function st(){return gs}const po=()=>({prefix:null,iconName:null,rest:[]});function jp(t){let e=ye;const n=ao.reduce((i,s)=>(i[s]="".concat(R.cssPrefix,"-").concat(s),i),{});return Xa.forEach(i=>{(t.includes(n[i])||t.some(s=>$p[i].includes(s)))&&(e=i)}),e}function Qn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ye}=e,i=bp[n][t];if(n===Kn&&!t)return"fad";const s=Ir[n][t]||Ir[n][i],r=t in Ue.styles?t:null;return s||r||null}function Yp(t){let e=[],n=null;return t.forEach(i=>{const s=Wp(R.cssPrefix,i);s?n=s:i&&e.push(i)}),{iconName:n,rest:e}}function xr(t){return t.sort().filter((e,n,i)=>i.indexOf(e)===n)}function Jn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let i=null;const s=Ni.concat(lp),r=xr(t.filter(h=>s.includes(h))),a=xr(t.filter(h=>!Ni.includes(h))),o=r.filter(h=>(i=h,!Ya.includes(h))),[l=null]=o,c=jp(r),f=C(C({},Yp(a)),{},{prefix:Qn(l,{family:c})});return C(C(C({},f),Qp({values:t,family:c,styles:_n,config:R,canonical:f,givenPrefix:i})),Xp(n,i,f))}function Xp(t,e,n){let{prefix:i,iconName:s}=n;if(t||!i||!s)return{prefix:i,iconName:s};const r=e==="fa"?mo(s):{},a=dt(i,s);return s=r.iconName||a||s,i=r.prefix||i,i==="far"&&!_n.far&&_n.fas&&!R.autoFetchSvg&&(i="fas"),{prefix:i,iconName:s}}const Kp=Xa.filter(t=>t!==ye||t!==Kn),qp=Object.keys(Li).filter(t=>t!==ye).map(t=>Object.keys(Li[t])).flat();function Qp(t){const{values:e,family:n,canonical:i,givenPrefix:s="",styles:r={},config:a={}}=t,o=n===Kn,l=e.includes("fa-duotone")||e.includes("fad"),c=a.familyDefault==="duotone",f=i.prefix==="fad"||i.prefix==="fa-duotone";if(!o&&(l||c||f)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&Kp.includes(n)&&(Object.keys(r).find(u=>qp.includes(u))||a.autoFetchSvg)){const u=ep.get(n).defaultShortPrefixId;i.prefix=u,i.iconName=dt(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||s==="fa")&&(i.prefix=st()||"fas"),i}class Jp{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(r=>{this.definitions[r]=C(C({},this.definitions[r]||{}),s[r]),Bi(r,s[r]);const a=hs[ye][r];a&&Bi(a,s[r]),ho()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(s=>{const{prefix:r,iconName:a,icon:o}=i[s],l=o[2];e[r]||(e[r]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[r][c]=o)}),e[r][a]=o}),e}}let Lr=[],St={};const Ct={},Zp=Object.keys(Ct);function eg(t,e){let{mixoutsTo:n}=e;return Lr=t,St={},Object.keys(Ct).forEach(i=>{Zp.indexOf(i)===-1&&delete Ct[i]}),Lr.forEach(i=>{const s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(r=>{typeof s[r]=="function"&&(n[r]=s[r]),typeof s[r]=="object"&&Object.keys(s[r]).forEach(a=>{n[r]||(n[r]={}),n[r][a]=s[r][a]})}),i.hooks){const r=i.hooks();Object.keys(r).forEach(a=>{St[a]||(St[a]=[]),St[a].push(r[a])})}i.provides&&i.provides(Ct)}),n}function $i(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];return(St[t]||[]).forEach(a=>{e=a.apply(null,[e,...i])}),e}function gt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(St[t]||[]).forEach(r=>{r.apply(null,n)})}function rt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ct[t]?Ct[t].apply(null,e):void 0}function Gi(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||st();if(e)return e=dt(n,e)||e,Or(go.definitions,n,e)||Or(Ue.styles,n,e)}const go=new Jp,tg=()=>{R.autoReplaceSvg=!1,R.observeMutations=!1,gt("noAuto")},ng={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(gt("beforeI2svg",t),rt("pseudoElements2svg",t),rt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Rp(()=>{sg({autoReplaceSvgRoot:e}),gt("watch",t)})}},ig={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Qn(t[0]);return{prefix:n,iconName:dt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match(kp))){const e=Jn(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||st(),iconName:dt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=st();return{prefix:e,iconName:dt(e,t)||t}}}},Ie={noAuto:tg,config:R,dom:ng,parse:ig,library:go,findIconDefinition:Gi,toHtml:Tn},sg=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ie}=t;(Object.keys(Ue.styles).length>0||R.autoFetchSvg)&&Qe&&R.autoReplaceSvg&&Ie.dom.i2svg({node:e})};function Zn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Tn(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Qe)return;const n=ie.createElement("div");return n.innerHTML=t.html,n.children}}),t}function rg(t){let{children:e,main:n,mask:i,attributes:s,styles:r,transform:a}=t;if(ps(a)&&n.found&&!i.found){const{width:o,height:l}=n,c={x:o/l/2,y:.5};s.style=qn(C(C({},r),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function ag(t){let{prefix:e,iconName:n,children:i,attributes:s,symbol:r}=t;const a=r===!0?"".concat(e,"-").concat(R.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},s),{},{id:a}),children:i}]}]}function ys(t){const{icons:{main:e,mask:n},prefix:i,iconName:s,transform:r,symbol:a,title:o,maskId:l,titleId:c,extra:f,watchable:h=!1}=t,{width:u,height:_}=n.found?n:e,k=rp.includes(i),T=[R.replacementClass,s?"".concat(R.cssPrefix,"-").concat(s):""].filter(P=>f.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(f.classes).join(" ");let A={children:[],attributes:C(C({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:T,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(_)})};const y=k&&!~f.classes.indexOf("fa-fw")?{width:"".concat(u/_*16*.0625,"em")}:{};h&&(A.attributes[pt]=""),o&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||gn())},children:[o]}),delete A.attributes.title);const E=C(C({},A),{},{prefix:i,iconName:s,main:e,mask:n,maskId:l,transform:r,symbol:a,styles:C(C({},y),f.styles)}),{children:g,attributes:v}=n.found&&e.found?rt("generateAbstractMask",E)||{children:[],attributes:{}}:rt("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=g,E.attributes=v,a?ag(E):rg(E)}function Nr(t){const{content:e,width:n,height:i,transform:s,title:r,extra:a,watchable:o=!1}=t,l=C(C(C({},a.attributes),r?{title:r}:{}),{},{class:a.classes.join(" ")});o&&(l[pt]="");const c=C({},a.styles);ps(s)&&(c.transform=Np({transform:s,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);const f=qn(c);f.length>0&&(l.style=f);const h=[];return h.push({tag:"span",attributes:l,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function og(t){const{content:e,title:n,extra:i}=t,s=C(C(C({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=qn(i.styles);r.length>0&&(s.style=r);const a=[];return a.push({tag:"span",attributes:s,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:vi}=Ue;function Wi(t){const e=t[0],n=t[1],[i]=t.slice(4);let s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(gi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(gi.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(gi.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}const lg={found:!1,width:512,height:512};function cg(t,e){!Ja&&!R.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Vi(t,e){let n=e;return e==="fa"&&R.styleDefault!==null&&(e=st()),new Promise((i,s)=>{if(n==="fa"){const r=mo(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&vi[e]&&vi[e][t]){const r=vi[e][t];return i(Wi(r))}cg(t,e),i(C(C({},lg),{},{icon:R.showMissingIcons&&t?rt("missingIconAbstract")||{}:{}}))})}const Mr=()=>{},Hi=R.measurePerformance&&Pn&&Pn.mark&&Pn.measure?Pn:{mark:Mr,measure:Mr},nn='FA "6.7.2"',ug=t=>(Hi.mark("".concat(nn," ").concat(t," begins")),()=>_o(t)),_o=t=>{Hi.mark("".concat(nn," ").concat(t," ends")),Hi.measure("".concat(nn," ").concat(t),"".concat(nn," ").concat(t," begins"),"".concat(nn," ").concat(t," ends"))};var vs={begin:ug,end:_o};const Nn=()=>{};function Dr(t){return typeof(t.getAttribute?t.getAttribute(pt):null)=="string"}function fg(t){const e=t.getAttribute?t.getAttribute(fs):null,n=t.getAttribute?t.getAttribute(ds):null;return e&&n}function dg(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(R.replacementClass)}function hg(){return R.autoReplaceSvg===!0?Mn.replace:Mn[R.autoReplaceSvg]||Mn.replace}function mg(t){return ie.createElementNS("http://www.w3.org/2000/svg",t)}function pg(t){return ie.createElement(t)}function yo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?mg:pg}=e;if(typeof t=="string")return ie.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){i.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){i.appendChild(yo(r,{ceFn:n}))}),i}function gg(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Mn={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(yo(n),e)}),e.getAttribute(pt)===null&&R.keepOriginalSource){let n=ie.createComment(gg(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~ms(e).indexOf(R.replacementClass))return Mn.replace(t);const i=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((a,o)=>(o===R.replacementClass||o.match(i)?a.toSvg.push(o):a.toNode.push(o),a),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const s=n.map(r=>Tn(r)).join(`
`);e.setAttribute(pt,""),e.innerHTML=s}};function Rr(t){t()}function vo(t,e){const n=typeof e=="function"?e:Nn;if(t.length===0)n();else{let i=Rr;R.mutateApproach===yp&&(i=it.requestAnimationFrame||Rr),i(()=>{const s=hg(),r=vs.begin("mutate");t.map(s),r(),n()})}}let bs=!1;function bo(){bs=!0}function ji(){bs=!1}let Bn=null;function Fr(t){if(!Er||!R.observeMutations)return;const{treeCallback:e=Nn,nodeCallback:n=Nn,pseudoElementsCallback:i=Nn,observeMutationsRoot:s=ie}=t;Bn=new Er(r=>{if(bs)return;const a=st();Ft(r).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Dr(o.addedNodes[0])&&(R.searchPseudoElements&&i(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&R.searchPseudoElements&&i(o.target.parentNode),o.type==="attributes"&&Dr(o.target)&&~wp.indexOf(o.attributeName))if(o.attributeName==="class"&&fg(o.target)){const{prefix:l,iconName:c}=Jn(ms(o.target));o.target.setAttribute(fs,l||a),c&&o.target.setAttribute(ds,c)}else dg(o.target)&&n(o.target)})}),Qe&&Bn.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function _g(){Bn&&Bn.disconnect()}function yg(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,s)=>{const r=s.split(":"),a=r[0],o=r.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),n}function vg(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let s=Jn(ms(t));return s.prefix||(s.prefix=st()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=Vp(s.prefix,t.innerText)||_s(s.prefix,Ui(t.innerText))),!s.iconName&&R.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function bg(t){const e=Ft(t.attributes).reduce((s,r)=>(s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return R.autoA11y&&(n?e["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(i||gn()):(e["aria-hidden"]="true",e.focusable="false")),e}function kg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:s}=vg(t),r=bg(t),a=$i("parseNodeAttributes",{},t);let o=e.styleParser?yg(t):[];return C({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:r}},a)}const{styles:Tg}=Ue;function ko(t){const e=R.autoReplaceSvg==="nest"?zr(t,{styleParser:!1}):zr(t);return~e.extra.classes.indexOf(eo)?rt("generateLayersText",t,e):rt("generateSvgReplacementMutation",t,e)}function Eg(){return[...np,...Ni]}function Ur(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();const n=ie.documentElement.classList,i=f=>n.add("".concat(Sr,"-").concat(f)),s=f=>n.remove("".concat(Sr,"-").concat(f)),r=R.autoFetchSvg?Eg():Ya.concat(Object.keys(Tg));r.includes("fa")||r.push("fa");const a=[".".concat(eo,":not([").concat(pt,"])")].concat(r.map(f=>".".concat(f,":not([").concat(pt,"])"))).join(", ");if(a.length===0)return Promise.resolve();let o=[];try{o=Ft(t.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),s("complete");else return Promise.resolve();const l=vs.begin("onTree"),c=o.reduce((f,h)=>{try{const u=ko(h);u&&f.push(u)}catch(u){Ja||u.name==="MissingIcon"&&console.error(u)}return f},[]);return new Promise((f,h)=>{Promise.all(c).then(u=>{vo(u,()=>{i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),l(),f()})}).catch(u=>{l(),h(u)})})}function wg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ko(t).then(n=>{n&&vo([n],e)})}function Ag(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Gi(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Gi(s||{})),t(i,C(C({},n),{},{mask:s}))}}const Sg=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ze,symbol:i=!1,mask:s=null,maskId:r=null,title:a=null,titleId:o=null,classes:l=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:h,iconName:u,icon:_}=t;return Zn(C({type:"icon"},t),()=>(gt("beforeDOMElementCreation",{iconDefinition:t,params:e}),R.autoA11y&&(a?c["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(o||gn()):(c["aria-hidden"]="true",c.focusable="false")),ys({icons:{main:Wi(_),mask:s?Wi(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:u,transform:C(C({},ze),n),symbol:i,title:a,maskId:r,titleId:o,extra:{attributes:c,styles:f,classes:l}})))};var Ig={mixout(){return{icon:Ag(Sg)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ur,t.nodeCallback=wg,t}}},provides(t){t.i2svg=function(e){const{node:n=ie,callback:i=()=>{}}=e;return Ur(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:s,titleId:r,prefix:a,transform:o,symbol:l,mask:c,maskId:f,extra:h}=n;return new Promise((u,_)=>{Promise.all([Vi(i,a),c.iconName?Vi(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[T,A]=k;u([e,ys({icons:{main:T,mask:A},prefix:a,iconName:i,transform:o,symbol:l,maskId:f,title:s,titleId:r,extra:h,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:s,transform:r,styles:a}=e;const o=qn(a);o.length>0&&(i.style=o);let l;return ps(r)&&(l=rt("generateAbstractTransformGrouping",{main:s,transform:r,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:i}}}},Pg={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Zn({type:"layer"},()=>{gt("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(s=>{Array.isArray(s)?s.map(r=>{i=i.concat(r.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},Og={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:s={},styles:r={}}=e;return Zn({type:"counter",content:t},()=>(gt("beforeDOMElementCreation",{content:t,params:e}),og({content:t.toString(),title:n,extra:{attributes:s,styles:r,classes:["".concat(R.cssPrefix,"-layers-counter"),...i]}})))}}}},Cg={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ze,title:i=null,classes:s=[],attributes:r={},styles:a={}}=e;return Zn({type:"text",content:t},()=>(gt("beforeDOMElementCreation",{content:t,params:e}),Nr({content:t,transform:C(C({},ze),n),title:i,extra:{attributes:r,styles:a,classes:["".concat(R.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:s,extra:r}=n;let a=null,o=null;if(Ha){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();a=c.width/l,o=c.height/l}return R.autoA11y&&!i&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Nr({content:e.innerHTML,width:a,height:o,transform:s,title:i,extra:r,watchable:!0})])}}};const xg=new RegExp('"',"ug"),Br=[1105920,1112319],$r=C(C(C(C({},{FontAwesome:{normal:"fas",400:"fas"}}),Zm),gp),cp),Yi=Object.keys($r).reduce((t,e)=>(t[e.toLowerCase()]=$r[e],t),{}),Lg=Object.keys(Yi).reduce((t,e)=>{const n=Yi[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ng(t){const e=t.replace(xg,""),n=Up(e,0),i=n>=Br[0]&&n<=Br[1],s=e.length===2?e[0]===e[1]:!1;return{value:Ui(s?e[0]:e),isSecondary:i||s}}function Mg(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),s=isNaN(i)?"normal":i;return(Yi[n]||{})[s]||Lg[n]}function Gr(t,e){const n="".concat(_p).concat(e.replace(":","-"));return new Promise((i,s)=>{if(t.getAttribute(n)!==null)return i();const a=Ft(t.children).filter(u=>u.getAttribute(Di)===e)[0],o=it.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),c=l.match(Tp),f=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(a&&!c)return t.removeChild(a),i();if(c&&h!=="none"&&h!==""){const u=o.getPropertyValue("content");let _=Mg(l,f);const{value:k,isSecondary:T}=Ng(u),A=c[0].startsWith("FontAwesome");let y=_s(_,k),E=y;if(A){const g=Hp(k);g.iconName&&g.prefix&&(y=g.iconName,_=g.prefix)}if(y&&!T&&(!a||a.getAttribute(fs)!==_||a.getAttribute(ds)!==E)){t.setAttribute(n,E),a&&t.removeChild(a);const g=kg(),{extra:v}=g;v.attributes[Di]=e,Vi(y,_).then(P=>{const w=ys(C(C({},g),{},{icons:{main:P,mask:po()},prefix:_,iconName:E,extra:v,watchable:!0})),I=ie.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=w.map(L=>Tn(L)).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function Dg(t){return Promise.all([Gr(t,"::before"),Gr(t,"::after")])}function Rg(t){return t.parentNode!==document.head&&!~vp.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Di)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Wr(t){if(Qe)return new Promise((e,n)=>{const i=Ft(t.querySelectorAll("*")).filter(Rg).map(Dg),s=vs.begin("searchPseudoElements");bo(),Promise.all(i).then(()=>{s(),ji(),e()}).catch(()=>{s(),ji(),n()})})}var Fg={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Wr,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ie}=e;R.searchPseudoElements&&Wr(n)}}};let Vr=!1;var zg={mixout(){return{dom:{unwatch(){bo(),Vr=!0}}}},hooks(){return{bootstrap(){Fr($i("mutationObserverCallbacks",{}))},noAuto(){_g()},watch(t){const{observeMutationsRoot:e}=t;Vr?ji():Fr($i("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Hr=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const s=i.toLowerCase().split("-"),r=s[0];let a=s.slice(1).join("-");if(r&&a==="h")return n.flipX=!0,n;if(r&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(r){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},e)};var Ug={mixout(){return{parse:{transform:t=>Hr(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Hr(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:s,iconWidth:r}=e;const a={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(o," ").concat(l," ").concat(c)},h={transform:"translate(".concat(r/2*-1," -256)")},u={outer:a,inner:f,path:h};return{tag:"g",attributes:C({},u.outer),children:[{tag:"g",attributes:C({},u.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:C(C({},n.icon.attributes),u.path)}]}]}}}};const bi={x:0,y:0,width:"100%",height:"100%"};function jr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Bg(t){return t.tag==="g"?t.children:[t]}var $g={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?Jn(n.split(" ").map(s=>s.trim())):po();return i.prefix||(i.prefix=st()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:s,mask:r,maskId:a,transform:o}=e;const{width:l,icon:c}=s,{width:f,icon:h}=r,u=Lp({transform:o,containerWidth:f,iconWidth:l}),_={tag:"rect",attributes:C(C({},bi),{},{fill:"white"})},k=c.children?{children:c.children.map(jr)}:{},T={tag:"g",attributes:C({},u.inner),children:[jr(C({tag:c.tag,attributes:C(C({},c.attributes),u.path)},k))]},A={tag:"g",attributes:C({},u.outer),children:[T]},y="mask-".concat(a||gn()),E="clip-".concat(a||gn()),g={tag:"mask",attributes:C(C({},bi),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,A]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Bg(h)},g]};return n.push(v,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(y,")")},bi)}),{children:n,attributes:i}}}},Gg={provides(t){let e=!1;it.matchMedia&&(e=it.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=C(C({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||a.children.push({tag:"animate",attributes:C(C({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(a),n.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:C(C({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Wg={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},Vg=[Dp,Ig,Pg,Og,Cg,Fg,zg,Ug,$g,Gg,Wg];eg(Vg,{mixoutsTo:Ie});Ie.noAuto;Ie.config;const Hg=Ie.library;Ie.dom;const Xi=Ie.parse;Ie.findIconDefinition;Ie.toHtml;const jg=Ie.icon;Ie.layer;Ie.text;Ie.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Yg={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Xg=Yg,Kg={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},qg=Kg,Qg={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},Jg={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Zg={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},e_={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},t_=e_;function Yr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Ye(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yr(Object(n),!0).forEach(function(i){Te(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yr(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function n_(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function i_(t){var e=n_(t,"string");return typeof e=="symbol"?e:e+""}function $n(t){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$n(t)}function Te(t,e,n){return e=i_(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s_(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function r_(t,e){if(t==null)return{};var n=s_(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var a_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},To={exports:{}};(function(t){(function(e){var n=function(y,E,g){if(!c(E)||h(E)||u(E)||_(E)||l(E))return E;var v,P=0,w=0;if(f(E))for(v=[],w=E.length;P<w;P++)v.push(n(y,E[P],g));else{v={};for(var I in E)Object.prototype.hasOwnProperty.call(E,I)&&(v[y(I,g)]=n(y,E[I],g))}return v},i=function(y,E){E=E||{};var g=E.separator||"_",v=E.split||/(?=[A-Z])/;return y.split(v).join(g)},s=function(y){return k(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,g){return g?g.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},r=function(y){var E=s(y);return E.substr(0,1).toUpperCase()+E.substr(1)},a=function(y,E){return i(y,E).toLowerCase()},o=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},f=function(y){return o.call(y)=="[object Array]"},h=function(y){return o.call(y)=="[object Date]"},u=function(y){return o.call(y)=="[object RegExp]"},_=function(y){return o.call(y)=="[object Boolean]"},k=function(y){return y=y-0,y===y},T=function(y,E){var g=E&&"process"in E?E.process:E;return typeof g!="function"?y:function(v,P){return g(v,y,P)}},A={camelize:s,decamelize:a,pascalize:r,depascalize:a,camelizeKeys:function(y,E){return n(T(s,E),y)},decamelizeKeys:function(y,E){return n(T(a,E),y,E)},pascalizeKeys:function(y,E){return n(T(r,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=A:e.humps=A})(a_)})(To);var o_=To.exports,l_=["class","style"];function c_(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=o_.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function u_(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Eo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return Eo(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.class=u_(f);break;case"style":l.style=c_(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,a=r===void 0?{}:r,o=r_(n,l_);return Ki(t.tag,Ye(Ye(Ye({},e),{},{class:s.class,style:Ye(Ye({},s.style),a)},s.attrs),o),i)}var wo=!1;try{wo=!0}catch{}function f_(){if(!wo&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ki(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Te({},t,e):{}}function d_(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Te(Te(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Xr(t){if(t&&$n(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xi.icon)return Xi.icon(t);if(t===null)return null;if($n(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var h_=yn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=H(function(){return Xr(e.icon)}),r=H(function(){return ki("classes",d_(e))}),a=H(function(){return ki("transform",typeof e.transform=="string"?Xi.transform(e.transform):e.transform)}),o=H(function(){return ki("mask",Xr(e.mask))}),l=H(function(){return jg(s.value,Ye(Ye(Ye(Ye({},r.value),a.value),o.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});cn(l,function(f){if(!f)return f_("Could not find one or more icon(s)",s.value,o.value)},{immediate:!0});var c=H(function(){return l.value?Eo(l.value.abstract[0],{},i):null});return function(){return c.value}}});const ks=document.createElement("meta");ks.name="color-scheme";ks.content="dark";document.head.appendChild(ks);const En=zo(sf);Hg.add(Qg,qg,Zg,t_,Xg,Jg);En.component("font-awesome-icon",h_);En.use(Wm,{init:async t=>{console.log(" 开始加载粒子引擎...");try{console.time("粒子加载耗时"),await loadFull(t),console.log(" 插件加载完成:",t.plugins.map(e=>e.name)),await t.init(),console.log(" 引擎初始化完成"),t.start(),console.timeEnd("粒子加载耗时"),console.log(" 粒子系统运行状态:",t.dom().length>0?"活跃":"未激活")}catch(e){throw console.error(" 初始化错误:",e),e}}});En.use(Oa);En.use(Pa);En.mount("#app");window.addEventListener("storage",t=>{t.key});export{tf as P,we as _,rs as a,Ce as u};
