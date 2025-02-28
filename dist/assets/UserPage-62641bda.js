import{_ as i,u as C}from"./index-1de5d4df.js";import{_ as $}from"./ParticlesBg-09d01c04.js";import{k as e,l as o,n as t,c as M,j as y,y as n,x as r,F as p,z as g,C as d,K as _,t as B,E as I}from"./vendor-3cbc955d.js";const j={},H={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};function V(c,s){return e(),o("svg",H,s[0]||(s[0]=[t("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},null,-1),t("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},null,-1)]))}const b=i(j,[["render",V]]),z={},N={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};function P(c,s){return e(),o("svg",N,s[0]||(s[0]=[t("circle",{cx:"12",cy:"12",r:"10"},null,-1),t("path",{d:"M12 6v12"},null,-1),t("path",{d:"M8 12h8"},null,-1)]))}const T=i(z,[["render",P]]),U={},D={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};function E(c,s){return e(),o("svg",D,s[0]||(s[0]=[t("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},null,-1)]))}const F=i(U,[["render",E]]),S={},G={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};function K(c,s){return e(),o("svg",G,s[0]||(s[0]=[t("path",{d:"M16 3l4 4-4 4"},null,-1),t("path",{d:"M20 7H4"},null,-1),t("path",{d:"M8 21l-4-4 4-4"},null,-1),t("path",{d:"M4 17h16"},null,-1)]))}const L=i(S,[["render",K]]),R={},W={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"};function Z(c,s){return e(),o("svg",W,s[0]||(s[0]=[t("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"},null,-1),t("path",{d:"M13 2v7h7"},null,-1),t("circle",{cx:"12",cy:"16",r:"1"},null,-1),t("path",{d:"M12 13v2"},null,-1)]))}const q=i(R,[["render",Z]]),A={},J={width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function O(c,s){return e(),o("svg",J,s[0]||(s[0]=[t("path",{d:"M36 16H12C9.79086 16 8 17.7909 8 20V34C8 36.2091 9.79086 38 12 38H36C38.2091 38 40 36.2091 40 34V20C40 17.7909 38.2091 16 36 16Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),t("path",{d:"M12 16V12C12 9.79086 13.7909 8 16 8H32C34.2091 8 36 9.79086 36 12V16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),t("path",{d:"M40 26H34C32.8954 26 32 26.8954 32 28C32 29.1046 32.8954 30 34 30H40",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),t("circle",{cx:"34",cy:"28",r:"2",fill:"currentColor"},null,-1)]))}const Q=i(A,[["render",O]]);const X={class:"user-page"},Y={class:"hero-section"},tt={class:"gradient-text"},st={class:"hero-subtitle"},et={class:"hero-description"},nt={class:"section minting-section"},ot={class:"section-title"},rt={class:"section-description"},it={class:"tutorials-grid"},ct={class:"card-header"},lt={class:"card-description"},at={key:0,class:"tutorial-items"},dt={class:"section trading-section"},_t={class:"section-title"},ut={class:"feature-card development"},ht={class:"card-content"},pt={class:"section testing-section"},gt={class:"section-title"},mt={class:"feature-card"},kt={class:"card-content"},vt=["href"],ft={__name:"UserPage",setup(c){const{t:s,tm:m}=C(),k={guide:b,token:T,rare:F,swap:L,test:q,wallet:Q},a=u=>k[u]||"div",v=M(()=>m("user.sections.minting.tutorials")||[]);return(u,h)=>(e(),o("div",X,[y($,{class:"particles-container"}),t("section",Y,[t("h1",tt,n(r(s)("user.title")),1),t("p",st,n(r(s)("user.subtitle")),1),t("p",et,n(r(s)("user.description")),1)]),t("section",nt,[t("h2",ot,n(r(s)("user.sections.minting.title")),1),t("p",rt,n(r(s)("user.sections.minting.description")),1),t("div",it,[(e(!0),o(p,null,g(v.value,(l,f)=>(e(),o("div",{key:f,class:B(["tutorial-card",{active:l.status==="active"}])},[t("div",ct,[(e(),d(_(a(l.icon)),{class:"card-icon"})),t("h3",null,n(l.title),1)]),t("p",lt,n(l.description),1),l.items?(e(),o("ul",at,[(e(!0),o(p,null,g(l.items,(w,x)=>(e(),o("li",{key:x},n(w),1))),128))])):I("",!0)],2))),128))])]),t("section",dt,[t("h2",_t,n(r(s)("user.sections.trading.title")),1),t("div",ut,[(e(),d(_(a("swap")),{class:"card-icon"})),t("div",ht,[t("h3",null,n(r(s)("user.sections.trading.description")),1),h[0]||(h[0]=t("span",{class:"development-badge"},"开发中...",-1))])])]),t("section",pt,[t("h2",gt,n(r(s)("user.sections.testing.title")),1),t("div",mt,[(e(),d(_(a("test")),{class:"card-icon"})),t("div",kt,[t("h3",null,n(r(s)("user.sections.testing.description")),1),t("a",{href:r(s)("user.sections.testing.link"),target:"_blank",rel:"noopener noreferrer",class:"demo-link"}," 访问测试网 → ",8,vt)])])])]))}},$t=i(ft,[["__scopeId","data-v-e2b50f7e"]]);export{$t as default};
