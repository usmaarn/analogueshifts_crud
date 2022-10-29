import{r as o,u as c,a as e,j as t,L as l}from"./app.4a29d4e0.js";import{a as u,M as d,b as r,N as h}from"./Navbar.4bc59927.js";import{B as m,a as p}from"./index.esm.68e4cabd.js";function f(){const s=o.exports.useRef(),[a,n]=o.exports.useState(!1),i=c().props.auth.user;return e("nav",{ref:s,className:"navbar "+(a&&"active"),children:t("div",{className:"wrapper",children:[t(l,{href:"/",className:"logo",children:[e("img",{src:"logo.png",className:"w-12 h-12",alt:""}),t("h3",{className:"md:text-xl text-lg font-bold uppercase text-zinc-600 leading-5",children:[e("span",{className:"tracking-widest text-yellow-400",children:"Analogue"}),e("br",{}),e("span",{className:"tracking-[1rem]",children:"Shifts"})]})]}),t("div",{className:"flex gap-3 items-center",children:[i?e(l,{className:"border rounded-full p-3 text-gray-700 hover:text-red-500",href:route("logout"),method:"post",as:"button",children:e(m,{className:"text-xl"})}):e(l,{href:route("login"),className:"border rounded-full p-3 text-gray-700 hover:text-green-500",children:e(p,{className:"text-xl"})}),e("button",{onClick:()=>n(!a),className:"close-btn",children:a?e(u,{}):e(d,{})})]}),t("div",{className:"nav-menu",children:[e(r,{href:route("dashboard"),active:route().current("dashboard"),children:"Admin"}),e(r,{href:route("vetting"),active:route().current("vetting"),children:"talent as a service"}),e(r,{href:route("blog"),active:route().current("blog"),children:"news"}),e(r,{href:route("about"),active:route().current("about"),children:"Stats"}),e(r,{href:route("blog"),active:route().current("blog"),children:"Blog"}),e(r,{href:route("vets"),active:route().current("vets"),children:"vet your talent"}),e(r,{href:route("talents"),active:route().current("talents"),className:"find",children:"hire talent"}),e(r,{href:route("profile"),active:route().current("profile"),children:"profile"})]})]})})}function N({header:s,children:a}){const n=c().props.auth;return t("div",{className:"min-h-screen bg-gray-100 py-20",children:[n.user.role=="admin"?e(f,{}):e(h,{}),s&&e("header",{className:"bg-white shadow",children:e("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:s})}),e("main",{children:a})]})}export{N as A};
