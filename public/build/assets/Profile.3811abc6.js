import{u as o,a as r,j as e}from"./app.4a29d4e0.js";import{A as t}from"./AuthenticatedLayout.43b03bf5.js";import"./Navbar.4bc59927.js";import"./iconBase.9998dff7.js";import"./index.esm.68e4cabd.js";function y(){var d,l;const a=o().props.auth;return r(t,{children:r("div",{className:"min-h-screen py-12",children:e("div",{className:"max-w-7xl mx-auto px-3 md:px-8",children:[r("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:r("div",{className:"p-6 bg-white border-b border-gray-200",children:"Welcome Back, We miss you!"})}),e("div",{className:"grid md:grid-cols-3 gap-5 bg-white p-3 md:p-6 m-2 md:m-3 rounded-lg",children:[e("div",{className:"grid gap-3 md:col-span-1",children:[e("div",{className:"grid w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative",children:[e("div",{className:"flex justify-end px-4 pt-4",children:[e("button",{id:"dropdownButton",className:"inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5",type:"button",children:[r("span",{className:"sr-only",children:"Open dropdown"}),r("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:r("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})]}),r("div",{id:"dropdown",className:"hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-3 right-3",children:e("ul",{className:"py-1",children:[r("li",{children:r("a",{href:"#",className:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Edit"})}),r("li",{children:r("a",{href:"#",className:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Export Data"})}),r("li",{children:r("a",{href:"#",className:"block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Delete"})})]})})]}),e("div",{className:"flex flex-col items-center pb-10",children:[r("img",{className:"mb-3 w-24 h-24 rounded-full shadow-lg",src:"images/ceo.jpeg",alt:"profile image"}),r("h5",{className:"mb-1 text-xl font-medium text-gray-900 dark:text-white",children:(d=a==null?void 0:a.user)==null?void 0:d.name}),e("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Validation: ",(l=a==null?void 0:a.user)==null?void 0:l.role]})]})]}),r("div",{className:"grid md:col-span-1 p-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",children:e("div",{className:"mb-6",children:[r("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Change password"}),e("form",{className:"grid gap-3",children:[r("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Old password"}),r("input",{type:"password",id:"old-password",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light",required:""}),r("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"New password"}),r("input",{type:"password",id:"new-password",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light",required:""}),r("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Confirm password"}),r("input",{type:"password",id:"repeat-password",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light",required:""})]})]})})]}),r("div",{className:"grid md:col-span-2 p-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative",children:e("form",{children:[e("div",{className:"mb-6",children:[r("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Your email"}),r("input",{type:"email",id:"email",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light",placeholder:"name@emailprovider.com",required:""})]}),e("div",{className:"mb-6",children:[r("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Contact"}),r("input",{type:"tel",id:"tel",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light",placeholder:"name@emailprovider.com",required:""})]}),e("div",{className:"mb-6",children:[r("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Stack"}),r("input",{type:"text",id:"stack",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light",placeholder:"name@emailprovider.com",required:""})]}),e("div",{className:"mb-6",children:[r("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Role"}),r("input",{type:"text",id:"role",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light",placeholder:"name@emailprovider.com",required:""})]}),r("div",{className:"mb-6"}),e("div",{className:"mb-6",children:[r("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",children:"About Me"}),r("textarea",{id:"message",rows:"4",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500",placeholder:"Leave a comment..."})]}),r("button",{type:"submit",className:"text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800",children:"Update Profile"})]})})]})]})})})}export{y as default};
