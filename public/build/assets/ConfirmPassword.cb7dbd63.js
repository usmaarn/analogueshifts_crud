import{b as l,r as c,j as r,a as s,H as u}from"./app.4a29d4e0.js";import{G as p}from"./GuestLayout.e28e965b.js";import{T as f,I as w}from"./TextInput.4949514d.js";import{I as h}from"./InputLabel.883d7867.js";import{P as b}from"./PrimaryButton.a38160a1.js";function y(){const{data:e,setData:t,post:o,processing:m,errors:n,reset:i}=l({password:""});c.exports.useEffect(()=>()=>{i("password")},[]);const d=a=>{t(a.target.name,a.target.value)};return r(p,{children:[s(u,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),r("form",{onSubmit:a=>{a.preventDefault(),o(route("password.confirm"))},children:[r("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(f,{type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(w,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(b,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{y as default};
