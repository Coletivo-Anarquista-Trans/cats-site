(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{347:()=>{},643:(e,t,s)=>{"use strict";s.d(t,{default:()=>p});var r=s(5155),n=s(2115),o=s(9300),a=s.n(o),i=s(2624),l=s(9911),c=s(8093),d=s(7049);function x(e){let{children:t,className:s,large:o,slim:i,loading:x,disabled:u,onClick:h,label:f,isParent:m,...b}=e,{theme:p}=(0,d.D)(),j="folderState-".concat(f),[v,g]=(0,n.useState)(()=>JSON.parse(sessionStorage.getItem(j)||"false"));return(0,n.useEffect)(()=>{sessionStorage.setItem(j,JSON.stringify(v))},[v]),(0,r.jsx)("button",{className:a()(p,"px-4 py-2 transition-colors text-left flex items-center justify-start",o?"py-3 px-6 text-lg":i?"py-1 px-3 text-sm":"",s),disabled:x||u,onClick:()=>{h&&h(),g(e=>!e)},...b,children:x?(0,r.jsx)("div",{className:"w-4 h-4 animate-spin"}):(0,r.jsxs)("span",{className:"flex gap-1",children:[m?v?(0,r.jsx)(l.g1V,{className:"w-4 h-4"}):(0,r.jsx)(l.M1W,{className:"w-4 h-4"}):(0,r.jsx)(c.s1v,{className:"w-4 h-4 flex-shrink-0"}),t]})})}function u(e){let{children:t,label:s,onClick:o,id:i}=e,{theme:l}=(0,d.D)(),[c,u]=(0,n.useState)(!1),[h,f]=(0,n.useState)(!1),m="treeNodeState-".concat(i);(0,n.useEffect)(()=>{let e=sessionStorage.getItem(m);null!==e&&f(JSON.parse(e)),u(!0)},[]),(0,n.useEffect)(()=>{c&&sessionStorage.setItem(m,JSON.stringify(h))},[h,c]);let b=n.Children.count(t)>0;return c?(0,r.jsxs)("div",{className:a()(l),children:[(0,r.jsx)(x,{label:s,className:"",onClick:()=>{o?(sessionStorage.setItem(m,JSON.stringify(!0)),o()):b&&f(e=>{let t=!e;return sessionStorage.setItem(m,JSON.stringify(t)),t})},isParent:b,children:s}),h&&b&&(0,r.jsx)("div",{className:"pl-8 flex flex-col",children:t})]}):null}var h=s(6874),f=s.n(h),m=s(6867),b=s(5695);function p(e){let{className:t,unevenBorders:s,normalBorders:o,glowingBorders:l,clearBorders:c,fixed:x=!0,width:h="w-64"}=e,{theme:p}=(0,d.D)(),{cyberSections:j}=(0,m.E)(),v=(0,b.useRouter)(),[g,N]=(0,n.useState)(!1);(0,n.useEffect)(()=>{console.log("\uD83D\uDD0D [CyberSidebar] Sections in Sidebar:",j)},[j]);let y=(e,t)=>{let s="/".concat(t,"#").concat(e);v.push(s),N(!1)},k=j.filter(e=>"manifesto"===e.parent),w=j.filter(e=>"recursos"===e.parent),S=a()("fixed top-0 left-0 h-full z-50 overflow-y-auto",g?"translate-x-0":"-translate-x-full","w-3/4 sm:w-64","lg:translate-x-0 lg:relative lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:z-40",h),C=a()({"rounded-tl-[10px] rounded-br-[10px] rounded-bl-[0px] rounded-tr-[0px] border-accent1":s,"border-accent1":o,"shadow-[0_0_10px_2px] border-1":l,"border-glow-accent1":c});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.A,{children:[(0,r.jsx)("div",{className:"fixed top-4 left-4 z-40 lg:hidden",children:(0,r.jsx)("button",{onClick:()=>N(e=>!e),className:"p-3 rounded-full focus:outline-none text-accent1 hover:text-accent1-hover transition-colors",children:(0,r.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})}),g&&(0,r.jsx)("div",{className:"fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden",onClick:()=>N(!1)}),(0,r.jsxs)(i.A,{className:a()(p,"z-50 bg-background text-accent1 custom-scrollbar transition-transform duration-300 ease-in-out",S,C,t,"border-r-2",x?"fixed lg:sticky":"relative"),children:[(0,r.jsx)("div",{className:"lg:hidden flex justify-end p-4",children:(0,r.jsx)("button",{onClick:()=>N(!1),className:"text-accent1 hover:text-accent1-hover focus:outline-none transition-colors",children:(0,r.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})}),(0,r.jsx)(u,{id:"home-root",label:(0,r.jsx)(f(),{href:"/",passHref:!0,children:"Home"}),onClick:()=>N(!1)}),(0,r.jsx)(u,{id:"manifesto-root",label:(0,r.jsx)(f(),{href:"/manifesto",passHref:!0,children:"Manifesto"}),children:k.length>0?k.map(e=>(0,r.jsx)(u,{id:"".concat(e.id),label:e.label,onClick:()=>y(e.id,"manifesto")},e.id)):(0,r.jsx)("p",{className:"text-accent3 text-center",children:"- x -"})}),(0,r.jsx)(u,{id:"recursos-root",label:(0,r.jsx)(f(),{href:"/recursos",passHref:!0,children:"Recursos"}),children:w.length>0?w.map(e=>(0,r.jsx)(u,{id:"".concat(e.id),label:e.label,onClick:()=>y(e.id,"recursos")},e.id)):(0,r.jsx)("p",{className:"text-accent3 text-center",children:"- x -"})}),(0,r.jsx)(u,{id:"arquivos-root",label:(0,r.jsx)(f(),{href:"/arquivos",passHref:!0,children:"Arquivos"}),onClick:()=>N(!1)}),(0,r.jsx)(u,{id:"sobre-root",label:(0,r.jsx)(f(),{href:"/sobre",passHref:!0,children:"Sobre"}),onClick:()=>N(!1)})]})]})})}},3801:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,347,23)),Promise.resolve().then(s.bind(s,4942)),Promise.resolve().then(s.bind(s,6944)),Promise.resolve().then(s.bind(s,643)),Promise.resolve().then(s.bind(s,5006)),Promise.resolve().then(s.bind(s,6867)),Promise.resolve().then(s.bind(s,4363)),Promise.resolve().then(s.bind(s,7049)),Promise.resolve().then(s.bind(s,9637))},4942:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var r=s(5155),n=s(2115);class o extends n.Component{static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error("Error caught by Error Boundary:",e,t)}render(){return this.state.hasError?this.props.fallback||(0,r.jsx)("div",{children:"Something went wrong."}):this.props.children}constructor(e){super(e),this.state={hasError:!1}}}let a=o},6944:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var r=s(5155),n=s(760),o=s(6183),a=s(5006),i=s(2115),l=s(2624),c=s(2968);function d(){let{enableAudio:e,isAudioEnabled:t,playArpeggio:s}=(0,a.G)(),[d,x]=(0,i.useState)(!1);(0,i.useEffect)(()=>{x(!t)},[t]);let u=async()=>{await e(),setTimeout(()=>{s()},100)};return(0,r.jsx)(n.N,{children:d&&(0,r.jsxs)(o.P.div,{className:"fixed inset-0 z-[100] overflow-y-auto",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15},children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-background backdrop-blur-[2px]","aria-hidden":"true"}),(0,r.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center bg-background",children:(0,r.jsx)(l.A,{children:(0,r.jsx)(o.P.div,{className:"relative w-full max-w-md transform overflow-hidden border-accent1 bg-background text-left align-middle shadow-xl",initial:{opacity:0,y:20,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.98},transition:{duration:.2,ease:[.16,1,.3,1]},children:(0,r.jsx)(c.A,{id:"audio-consent-modal",text:"audio_consent.tsx",nested:(0,r.jsxs)(l.A,{className:"border border-accent1 p-6",children:[(0,r.jsxs)("div",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"border border-accent1 rounded-full p-1",children:(0,r.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent1",children:(0,r.jsx)("svg",{className:"h-6 w-6 text-accent1",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"})})})}),(0,r.jsxs)("div",{className:"ml-4",children:[(0,r.jsx)("h3",{className:"text-lg font-medium leading-6 text-accent1",id:"modal-title",children:"CONSENTIMENTO DE AUDIO"}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsxs)("p",{className:"text-sm text-accent1",children:["esse site utiliza efeitos sonoros experimentais que afetar sua experiência de navegação.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Voc\xea pode ativar/desativar os efeitos sonoros nas configura\xe7\xf5es"]})})]})]}),(0,r.jsxs)("div",{className:"mt-6 flex justify-end space-x-3",children:[(0,r.jsx)("div",{className:"border border-accent1 p-1",children:(0,r.jsx)("button",{type:"button",className:"px-4 py-2 text-sm font-medium border border-accent1 text-accent1 hover:bg-accent1 hover:text-accent5 focus:outline-none transition-colors",onClick:()=>{x(!1)},children:"desativar sons"})}),(0,r.jsx)("div",{className:"border border-accent1 p-1",children:(0,r.jsx)("button",{type:"button",className:"px-4 py-2 text-sm font-medium border border-accent1 text-accent1 hover:bg-accent1 hover:text-accent5 focus:outline-none transition-colors",onClick:u,children:"ativar sons"})})]})]})})})})})]})})}},9637:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var r=s(5155),n=s(2115),o=s(4363);function a(e){let{children:t}=e,{font:s,fontSize:a}=(0,o.L)();return(0,n.useEffect)(()=>{document.body.style.fontFamily=s,document.body.style.fontSize="".concat(a,"px")},[s,a]),(0,r.jsx)(r.Fragment,{children:t})}}},e=>{var t=t=>e(e.s=t);e.O(0,[690,711,760,115,458,433,947,441,684,358],()=>t(3801)),_N_E=e.O()}]);