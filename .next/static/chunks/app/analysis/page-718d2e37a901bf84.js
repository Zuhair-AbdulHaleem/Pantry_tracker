(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{12244:(e,a,s)=>{Promise.resolve().then(s.bind(s,97659))},97659:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>m});var t=s(95155),r=s(12115),l=s(14565),n=s(76046),i=s(83945),c=s(20754),o=s(76472),d=s(35781);d.t1.register(d.Bs,d.E8,d.PP,d.kc,d.m_,d.s$,d.hE);let u=e=>{let{items:a}=e,s=a.reduce((e,a)=>(e[a.category]=(e[a.category]||0)+1,e),{}),r={labels:Object.keys(s),datasets:[{label:"Number of Items by Category",data:Object.values(s),backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},l=[...a].sort((e,a)=>a.quantity-e.quantity).slice(0,5),n={labels:l.map(e=>e.name),datasets:[{label:"Top 5 Items by Quantity",data:l.map(e=>e.quantity),backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1}]},i=[...a].sort((e,a)=>e.quantity-a.quantity).slice(0,5),c={labels:i.map(e=>e.name),datasets:[{label:"Least Stocked Items",data:i.map(e=>e.quantity),backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1}]},d={responsive:!0,plugins:{legend:{position:"top"},tooltip:{callbacks:{label:function(e){return"Quantity: ".concat(e.raw)}}}}};return(0,t.jsxs)("div",{className:"inventory-analysis",children:[(0,t.jsx)("h2",{children:"Inventory Analysis"}),(0,t.jsx)("div",{className:"summary",children:(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Total Number of Items:"})," ",a.length]})}),(0,t.jsxs)("div",{className:"charts-container",children:[(0,t.jsxs)("div",{id:"pie-chart",className:"chart-item",children:[(0,t.jsx)("h3",{children:"Inventory Overview by Category"}),(0,t.jsx)(o.Fq,{data:r,options:d})]}),(0,t.jsxs)("div",{id:"bar-chart",className:"chart-item",children:[(0,t.jsx)("h3",{children:"Top 5 Items by Quantity"}),(0,t.jsx)(o.yP,{data:n,options:d})]}),(0,t.jsxs)("div",{id:"least-stocked-chart",className:"chart-item",children:[(0,t.jsx)("h3",{children:"Least Stocked Items"}),(0,t.jsx)(o.yP,{data:c,options:d})]})]})]})};var h=s(27058);let m=function(){let e=(0,n.useRouter)(),a=(0,l.xI)(i.yA),[s,o]=(0,r.useState)(null),[d,m]=(0,r.useState)([]),g=(0,r.useCallback)(async()=>{try{let e=(0,h.P)((0,h.rJ)(i.kA,"inventory"),(0,h._M)("userId","==",s.uid)),a=(await (0,h.GG)(e)).docs.map(e=>({id:e.id,...e.data()}));m(a)}catch(e){console.error("Failed to fetch items:",e.message)}},[s]);return(0,r.useEffect)(()=>{let s=(0,l.hg)(a,a=>{a?o(a):(o(null),e.push("/"))});return()=>s()},[a,e]),(0,r.useEffect)(()=>{s&&g()},[s,g]),(0,t.jsxs)("div",{className:"dashboard",children:[(0,t.jsx)(c.A,{user:s,items:d}),(0,t.jsx)("div",{className:"flex flex-col items-center justify-center h-screen bg-gray-100",children:(0,t.jsx)("div",{style:{marginTop:"85px",textAlign:"center"},children:(0,t.jsx)(u,{items:d})})})]})}},20754:(e,a,s)=>{"use strict";s.d(a,{A:()=>b});var t=s(95155),r=s(12115),l=s(76046),n=s(14565),i=s(83945),c=s(27058);let o=e=>{let{user:a,onClose:s}=e;return a?(0,t.jsx)("div",{className:"modal-overlay",onClick:s,children:(0,t.jsxs)("div",{className:"modal-content",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("button",{className:"modal-close",onClick:s,children:"\xd7"}),(0,t.jsxs)("div",{className:"profile-container",children:[(0,t.jsx)("img",{src:a.photoURL||"/assets/default-avatar.png",alt:"Profile",className:"profile-image"}),(0,t.jsx)("h1",{className:"profile-name",children:a.displayName||"User"}),(0,t.jsx)("p",{className:"profile-email",children:a.email})]})]})}):null};var d=s(10142),u=s(92340),h=s.n(u),m=s(40078),g=s.n(m);let p=async e=>{let a=new d.default,s=e.map(e=>[e.name,e.category,e.quantity]);for(let e of(h()(a,{head:[["Name","Category","Quantity"]],body:s,startY:20}),["pie-chart","bar-chart","least-stocked-chart"])){let s=document.getElementById(e);if(s){let e=(await g()(s)).toDataURL("image/png");a.addPage(),a.addImage(e,"PNG",10,10,180,100)}}a.save("inventory_report.pdf")},b=e=>{let{user:a}=e,s=(0,l.useRouter)(),d=(0,n.xI)(i.yA),[u,h]=(0,r.useState)(!1),[m,g]=(0,r.useState)(!1),[b,y]=(0,r.useState)([]),x=(0,r.useCallback)(async()=>{try{let e=(0,c.P)((0,c.rJ)(i.kA,"inventory"),(0,c._M)("userId","==",a.uid)),s=(await (0,c.GG)(e)).docs.map(e=>({id:e.id,...e.data()}));y(s)}catch(e){console.error("Failed to fetch items:",e.message)}},[a]);(0,r.useEffect)(()=>{a&&x()},[a,x]);let j=async()=>{let e=new n.HF;try{await (0,n.df)(d,e),s.push("/dashboard")}catch(e){console.error("Error signing in with Google:",e.message)}},v=async()=>{try{await (0,n.CI)(d),s.push("/")}catch(e){console.error("Error signing out:",e.message)}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("nav",{className:"navbar",children:[(0,t.jsx)("img",{src:"/assets/logo.png",alt:"Logo",className:"logo",onClick:()=>s.push("/"),style:{cursor:"pointer"}}),(0,t.jsxs)("div",{className:"hamburger ".concat(m?"active":""),onClick:()=>g(!m),children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]}),(0,t.jsx)("div",{className:"nav-links ".concat(m?"show":""),children:a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("a",{onClick:()=>s.push("/dashboard"),children:"Dashboard"}),(0,t.jsx)("a",{onClick:()=>s.push("/analysis"),children:"Analysis"}),(0,t.jsx)("a",{onClick:()=>s.push("/generate-recipes"),children:"Generate Recipes"}),(0,t.jsx)("button",{onClick:()=>p(b),className:"exportButton mt-4 px-4 py-2 bg-blue-500 text-white rounded",children:"Export to PDF"}),(0,t.jsx)("img",{src:a.photoURL||"/assets/default-avatar.png",alt:"Profile",className:"user-avatar",onClick:()=>h(!0),style:{cursor:"pointer"}}),(0,t.jsx)("a",{onClick:v,className:"signoutButton",children:"Sign Out"})]}):(0,t.jsx)("button",{onClick:j,className:"signinButton",children:"Sign in with Google"})})]}),u&&(0,t.jsx)(o,{user:a,onClose:()=>h(!1)})]})}},83945:(e,a,s)=>{"use strict";s.d(a,{kA:()=>i,yA:()=>n});var t=s(49904),r=s(76553),l=s(27058);let n=(0,t.Wp)({apiKey:"AIzaSyC8Dymk0ybzXTC_TdaCKBEyQ8tchcDUCYU",authDomain:"pantry-tracker-21503.firebaseapp.com",projectId:"pantry-tracker-21503",storageBucket:"pantry-tracker-21503.firebasestorage.app",messagingSenderId:"880269408747",appId:"1:880269408747:web:844a0971fb7736eaccc1ae",measurementId:"G-4571ENLK2C"}),i=(0,l.aU)(n);(0,r.TT)().then(e=>{e&&(0,r.P5)(n)})}},e=>{var a=a=>e(e.s=a);e.O(0,[992,794,316,930,647,107,759,441,517,358],()=>a(12244)),_N_E=e.O()}]);