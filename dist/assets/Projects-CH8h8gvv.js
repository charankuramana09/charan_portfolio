import{d as i,r as o,p as j,j as e,G as N}from"./index-CjKx-l9z.js";import{D as M,C as $,Z as S}from"./zap-B4t5w-vV.js";import{C as Y}from"./code-Bse4o5QP.js";/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=i("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=i("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=i("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=i("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),Z=()=>{const[p,n]=o.useState(null),[u,x]=o.useState({}),[E,g]=o.useState({x:0,y:0});o.useEffect(()=>{const t=r=>{g({x:r.clientX,y:r.clientY})};return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)},[]);const b={0:"from-purple-500 to-indigo-600",1:"from-blue-500 to-cyan-600",2:"from-violet-500 to-purple-600",3:"from-indigo-500 to-blue-600"},f=[M,$,S,Y],l=j.map((t,r)=>({id:r+1,title:t.title,description:t.desc,gradient:b[r%4],icon:f[r%4],tags:t.tech,github:t.github,demo:t.demo,stars:10+r*7})),h=t=>{x(r=>({...r,[t]:!r[t]}))},v=[l.slice(0,2),l.slice(2,4)];return e.jsxs("div",{id:"projects",className:"min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-4 overflow-hidden relative transition-colors duration-300",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[e.jsxs("div",{className:"absolute top-0 left-0 w-full h-full",children:[e.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-float"}),e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"}),e.jsx("div",{className:"absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl animate-float-slow"})]}),e.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"})]}),e.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[e.jsxs("div",{className:"text-center mb-20 relative",children:[e.jsx("div",{className:"absolute left-1/2 top-0 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-pulse"}),e.jsxs("div",{className:"inline-block mb-6 relative group",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 animate-gradient-xy"}),e.jsxs("span",{className:"relative flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-300 tracking-widest uppercase bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30",children:[e.jsx(c,{className:"w-4 h-4 animate-spin-slow"}),"Projects",e.jsx(c,{className:"w-4 h-4 animate-spin-slow-reverse"})]})]}),e.jsx("div",{className:"relative flex flex-col items-center gap-6 mb-6",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 blur-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-20 dark:opacity-30 animate-pulse-slow"}),e.jsx("h2",{className:"relative text-6xl md:text-7xl lg:text-8xl font-black dark:text-white text-slate-900",children:e.jsx("span",{className:"inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 animate-gradient-x",children:"Featured Work"})})]})}),e.jsxs("p",{className:"text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed relative",children:["A curated selection of projects showcasing my expertise in"," ",e.jsx("span",{className:"text-purple-600 dark:text-purple-400 font-semibold animate-text-shine",children:"full-stack development"})," ","and"," ",e.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-semibold animate-text-shine-delayed",children:"modern architecture"})]})]}),e.jsx("div",{className:"grid grid-rows-2 gap-8",children:v.map((t,r)=>e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((a,y)=>{const k=a.icon,s=u[a.id];return e.jsxs("div",{className:"group relative",onMouseEnter:()=>n(a.id),onMouseLeave:()=>n(null),style:{animation:`slideUp 0.6s ease-out ${(r*2+y)*.15}s both`},children:[e.jsx("div",{className:`absolute -inset-0.5 bg-gradient-to-r ${a.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500 animate-gradient-xy`}),e.jsxs("div",{className:"relative bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600/50 transition-all duration-500 h-full flex flex-col shadow-lg dark:shadow-2xl hover:shadow-purple-500/10",children:[e.jsx("div",{className:"absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-tl-2xl transition-all duration-500"}),e.jsx("div",{className:"absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-br-2xl transition-all duration-500"}),e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{className:`relative p-3 rounded-xl bg-gradient-to-r ${a.gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`,children:[e.jsx(k,{className:"w-6 h-6 text-white animate-icon-float"}),e.jsx("div",{className:`absolute inset-0 bg-gradient-to-r ${a.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-500`})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>h(a.id),className:`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 focus-ring ${s?"bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 animate-bounce-subtle":"bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-yellow-500 dark:hover:text-yellow-400"}`,"aria-label":s?"Remove star from project":"Star this project",title:s?"Unstar":"Star this project",children:e.jsx(m,{className:`w-4 h-4 transition-transform duration-300 ${s?"fill-current scale-110":""}`})}),e.jsx("button",{className:"p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90 focus-ring","aria-label":"View project options",children:e.jsx(z,{className:"w-4 h-4"})})]})]}),e.jsx("h3",{className:"text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400 transition-all duration-300",children:a.title}),e.jsx("p",{className:"text-slate-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed group-hover:text-slate-800 dark:group-hover:text-gray-300 transition-colors duration-300",children:a.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:a.tags.map((w,d)=>e.jsx("span",{className:"px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-slate-700/50 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-white dark:hover:bg-slate-700/80 transition-all duration-300 cursor-default transform hover:-translate-y-1",style:{animation:p===a.id?`tagFloat 0.6s ease-out ${d*.1}s both`:"none"},children:w},d))}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700/50",children:[e.jsxs("div",{className:"flex items-center gap-2 text-slate-500 dark:text-gray-400 text-sm group/stars",children:[e.jsx(m,{className:"w-4 h-4 group-hover/stars:text-yellow-500 dark:group-hover/stars:text-yellow-400 group-hover/stars:fill-current transition-all duration-300"}),e.jsx("span",{className:"font-semibold",children:a.stars+(s?1:0)})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("button",{onClick:()=>window.open(a.github,"_blank"),className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group/btn transform hover:scale-105 focus-ring","aria-label":`View ${a.title} source code on GitHub`,title:"View source code",children:[e.jsx(N,{className:"w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300"}),e.jsx("span",{className:"text-sm font-medium",children:"Code"})]}),e.jsxs("button",{onClick:()=>{window.location.href=`/projects/${a.id}`},className:`relative flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${a.gradient} text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group/btn transform hover:scale-105 overflow-hidden focus-ring`,"aria-label":`View ${a.title} project details`,title:"View project details",children:[e.jsx("div",{className:"absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"}),e.jsx(C,{className:"w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300 relative z-10"}),e.jsx("span",{className:"text-sm font-medium relative z-10",children:"View"})]})]})]})]})]},a.id)})},r))})]}),e.jsxs("style",{children:[" ",`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -30px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(-30px, 30px) scale(1.1); }
                    66% { transform: translate(20px, -20px) scale(0.9); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(15px, 15px) scale(1.05); }
                }
                .animate-float {
                    animation: float 20s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 25s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 30s ease-in-out infinite;
                }
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes gradient-xy {
                    0%, 100% { background-position: 0% 0%; }
                    25% { background-position: 100% 0%; }
                    50% { background-position: 100% 100%; }
                    75% { background-position: 0% 100%; }
                }
                @keyframes gradient-shift {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.2; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
                .animate-gradient-xy {
                    background-size: 200% 200%;
                    animation: gradient-xy 6s ease infinite;
                }
                .animate-gradient-shift {
                    animation: gradient-shift 10s ease-in-out infinite;
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s ease-in-out infinite;
                }
                @keyframes particle {
                    0%, 100% { 
                        transform: translate(0, 0) scale(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                        transform: translate(0, 0) scale(1);
                    }
                    90% {
                        opacity: 1;
                    }
                    100% { 
                        transform: translate(var(--tx, 100px), var(--ty, -100px)) scale(0);
                        opacity: 0;
                    }
                }
                .animate-particle {
                    --tx: ${Math.random()*200-100}px;
                    --ty: ${Math.random()*200-100}px;
                    animation: particle 15s ease-in-out infinite;
                }
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(400%); }
                }
                .animate-scan {
                    animation: scan 3s ease-in-out infinite;
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-slow-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                .animate-spin-slow-reverse {
                    animation: spin-slow-reverse 8s linear infinite;
                }
                @keyframes text-shine {
                    0%, 100% { opacity: 1; filter: brightness(1); }
                    50% { opacity: 1; filter: brightness(1.3); }
                }
                .animate-text-shine {
                    animation: text-shine 2s ease-in-out infinite;
                }
                .animate-text-shine-delayed {
                    animation: text-shine 2s ease-in-out 0.5s infinite;
                }
                @keyframes border-glow {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.5; }
                }
                .animate-border-glow {
                    animation: border-glow 3s ease-in-out infinite;
                }
                .animate-border-glow-delayed {
                    animation: border-glow 3s ease-in-out 1s infinite;
                }
                @keyframes icon-float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .animate-icon-float {
                    animation: icon-float 2s ease-in-out infinite;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.5; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-2px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 1s ease-in-out infinite;
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes tagFloat {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-6px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
            `]})]})};export{Z as default};
