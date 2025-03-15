import{_ as $,u as f}from"./index-89af1b39.js";import{r as R,m as n,n as c,p as s,x as e,y as o,F as d,t as r,z as _,j as k}from"./vendor-570a9e02.js";import{_ as I}from"./ParticlesBg-fb2dda42.js";const B={class:"roadmap-section",id:"roadmap"},N={class:"container"},z={class:"timeline"},A={class:"year-section"},F={class:"year-marker"},S={class:"year-title"},V={class:"year-content"},j={class:"phase-content"},w={class:"phase-header"},C={class:"phase-date"},D={class:"phase-title"},E={class:"phase-items"},L={class:"year-section"},q={class:"year-marker"},G={class:"year-title"},H={class:"year-content"},J={class:"phase-content"},M={class:"phase-header"},O={class:"phase-date"},Q={class:"phase-title"},T={class:"phase-items"},U={__name:"Roadmap",setup(g){const{t:a,te:x,tm:u}=f({useScope:"global"}),y=R(null),v=l=>{const i=`roadmap.phases.${l}`,t=u(i);return t&&Array.isArray(t.items)?t.items:(console.warn(`No items found for phase: ${l}`),[])},P=[{key:"phase1",status:"completed"},{key:"phase2",status:"completed"}],b=[{key:"phase3",status:"inProgress"},{key:"phase4",status:"upcoming"}];return(l,i)=>(n(),c("section",B,[s("div",N,[s("div",z,[s("div",A,[s("div",F,[i[0]||(i[0]=s("div",{class:"year-dot"},null,-1)),s("h3",S,e(o(a)("roadmap.years.2024")),1)]),s("div",V,[(n(),c(d,null,r(P,(t,p)=>s("div",{key:p,class:_(["timeline-item",{active:y.value===t.key}])},[s("div",j,[s("div",w,[s("span",C,e(o(a)(`roadmap.phases.${t.key}.date`)),1),s("span",{class:_(["phase-status",t.status])},e(o(a)(`roadmap.status.${t.status}`)),3)]),s("h4",D,e(o(a)(`roadmap.phases.${t.key}.title`)),1),s("ul",E,[(n(!0),c(d,null,r(v(t.key),(m,h)=>(n(),c("li",{key:h},e(m),1))),128))])])],2)),64))])]),s("div",L,[s("div",q,[i[1]||(i[1]=s("div",{class:"year-dot"},null,-1)),s("h3",G,e(o(a)("roadmap.years.2025")),1)]),s("div",H,[(n(),c(d,null,r(b,(t,p)=>s("div",{key:p,class:_(["timeline-item",{active:y.value===t.key}])},[s("div",J,[s("div",M,[s("span",O,e(o(a)(`roadmap.phases.${t.key}.date`)),1),s("span",{class:_(["phase-status",t.status])},e(o(a)(`roadmap.status.${t.status}`)),3)]),s("h4",Q,e(o(a)(`roadmap.phases.${t.key}.title`)),1),s("ul",T,[(n(!0),c(d,null,r(v(t.key),(m,h)=>(n(),c("li",{key:h},e(m),1))),128))])])],2)),64))])])])])]))}},W=$(U,[["__scopeId","data-v-b514bc88"]]);const X={class:"roadmap-page"},Y={class:"container"},Z={class:"gradient-text"},K={class:"subtitle"},ss={class:"description"},ts={__name:"RoadmapPage",setup(g){const{t:a}=f();return(x,u)=>(n(),c("div",X,[k(I),s("div",Y,[s("h1",Z,e(o(a)("roadmap.title")),1),s("p",K,e(o(a)("roadmap.subtitle")),1),s("p",ss,e(o(a)("roadmap.description")),1),k(W)])]))}},ns=$(ts,[["__scopeId","data-v-27dae628"]]);export{ns as default};
