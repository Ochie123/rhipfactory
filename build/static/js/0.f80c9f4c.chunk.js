"use strict";(self.webpackChunkrhipfactoryke=self.webpackChunkrhipfactoryke||[]).push([[0],{620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});n(9584);var r=n(1720),c=n(584),i=n(3664),a=n(6643),s=n(7884);const o=()=>{const e=(0,r.c)("(max-width:650px)");return(0,s.jsx)(a.c,{title:"Not Found Page",children:(0,s.jsx)(c.c,{height:e?"50vh":"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",style:{backgroundColor:"white"},children:(0,s.jsx)(i.c,{variant:e?"h4":"h1",color:"Black",sx:e=>{let{breakpoints:t,typography:{size:n}}=e;return{[t.down("md")]:{}}},style:{display:"inline",padding:"5px"},children:"404 Page Not Found"})})})}},1720:(e,t,n)=>{var r;n.d(t,{c:()=>d});var c=n(9584),i=n(1564),a=n(232),s=n(8536);function o(e,t,n,r,i){const[a,o]=c.useState((()=>i&&n?n(e).matches:r?r(e).matches:t));return(0,s.c)((()=>{let t=!0;if(!n)return;const r=n(e),c=()=>{t&&o(r.matches)};return c(),r.addListener(c),()=>{t=!1,r.removeListener(c)}}),[e,n]),a}const u=(r||(r=n.t(c,2))).useSyncExternalStore;function l(e,t,n,r,i){const a=c.useCallback((()=>t),[t]),s=c.useMemo((()=>{if(i&&n)return()=>n(e).matches;if(null!==r){const{matches:t}=r(e);return()=>t}return a}),[a,e,r,i,n]),[o,l]=c.useMemo((()=>{if(null===n)return[a,()=>()=>{}];const t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[a,n,e]);return u(l,o,s)}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=(0,i.c)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:c=!1,matchMedia:s=(r?window.matchMedia:null),ssrMatchMedia:d=null,noSsr:h=!1}=(0,a.c)({name:"MuiUseMediaQuery",props:t,theme:n});let f="function"===typeof e?e(n):e;f=f.replace(/^@media( ?)/m,"");return(void 0!==u?l:o)(f,c,s,d,h)}}}]);