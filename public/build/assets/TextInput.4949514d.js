import{a as t,r as n}from"./app.4a29d4e0.js";function p({message:r,className:e=""}){return r?t("p",{className:"text-sm text-red-600 "+e,children:r}):null}function x({type:r="text",name:e,value:o,className:c,autoComplete:i,required:u,isFocused:a,handleChange:f}){const s=n.exports.useRef();return n.exports.useEffect(()=>{a&&s.current.focus()},[]),t("div",{className:"flex flex-col items-start",children:t("input",{type:r,name:e,value:o,className:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm "+c,ref:s,autoComplete:i,required:u,onChange:d=>f(d)})})}export{p as I,x as T};
