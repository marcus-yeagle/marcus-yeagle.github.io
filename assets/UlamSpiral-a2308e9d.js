import{r as c,j as r}from"./index-c9a425fb.js";const w=()=>{const[n,u]=c.useState("Prime"),[h,x]=c.useState(3),[m,y]=c.useState([[]]);c.useEffect(()=>{const t=[Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)];y(j(t[0]>t[1]?t[1]:t[0]))},[]);function j(e){if(e<=0)throw new Error("Size must be a positive integer.");const t=new Array(e).fill().map(()=>new Array(e).fill(0));let l=e*e,s=0,a=e-1,d=0,f=e-1;for(;s<=a&&d<=f;){for(let i=a;i>=s;i--)t[f][i]=l--;f--;for(let i=f;i>=d;i--)t[i][s]=l--;s++;for(let i=s;i<=a;i++)t[d][i]=l--;d++;for(let i=d;i<=f;i++)t[i][a]=l--;a--}return t}const o=e=>{for(let t=2,l=Math.sqrt(e);t<=l;t++)if(e%t===0)return!1;return e>1},p=e=>{if(n==="Prime")return o(e);if(n==="Twin Prime")return o(e)&&o(e+2)||o(e)&&o(e-2);if(n==="Even")return e%2===0;if(n==="Odd")return e%2!==0;if(n==="Div By")return e%h===0;if(n==="Off")return!1};return r.jsxs("div",{style:{display:"flex",flexDirection:"column-reverse"},children:[r.jsx("div",{children:m.map(e=>r.jsx("div",{style:{display:"flex"},children:e.map(t=>r.jsx("div",{style:{height:2,width:2,textAlign:"center",fontSize:"11px",backgroundColor:p(t)?"blue":"#f8f5d7",color:p(t)?"white":"black"}},t))},e))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",padding:"0.5rem"},children:[r.jsx("div",{children:r.jsxs("select",{defaultValue:"Prime",onChange:e=>{u(e.target.value)},children:[r.jsx("option",{children:"Off"}),r.jsx("option",{children:"Even"}),r.jsx("option",{children:"Odd"}),r.jsx("option",{children:"Div By"}),r.jsx("option",{children:"Prime"}),r.jsx("option",{children:"Twin Prime"})]})}),r.jsx("div",{style:{display:n!=="Div By"?"none":"block"},children:r.jsx("input",{type:"number",id:"divByNum",name:"divByNum",min:"3",max:"999",defaultValue:3,onChange:e=>{x(e.target.value),console.log(e.target.value)}})})]})]})};export{w as default};
