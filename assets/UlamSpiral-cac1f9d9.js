import{r as f,j as t}from"./index-2929c3b6.js";const w=()=>{const[n,h]=f.useState("Prime"),[x,u]=f.useState(3),[j,m]=f.useState([[]]);f.useEffect(()=>{const i=[Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)];m(y(i[0]>i[1]?i[1]:i[0]))},[]);function y(e){if(e<=0)throw new Error("Size must be a positive integer.");const i=new Array(e).fill().map(()=>new Array(e).fill(0));let l=e*e,s=0,d=e-1,a=0,c=e-1;for(;s<=d&&a<=c;){for(let r=d;r>=s;r--)i[c][r]=l--;c--;for(let r=c;r>=a;r--)i[r][s]=l--;s++;for(let r=s;r<=d;r++)i[a][r]=l--;a++;for(let r=a;r<=c;r++)i[r][d]=l--;d--}return i}const o=e=>{for(let i=2,l=Math.sqrt(e);i<=l;i++)if(e%i===0)return!1;return e>1},p=e=>{if(n==="Prime")return o(e);if(n==="Twin Prime")return o(e)&&o(e+2)||o(e)&&o(e-2);if(n==="Even")return e%2===0;if(n==="Odd")return e%2!==0;if(n==="Div By")return e%x===0;if(n==="Off")return!1};return t.jsxs("div",{style:{display:"flex"},children:[t.jsx("div",{children:j.map(e=>t.jsx("div",{style:{display:"flex"},children:e.map(i=>t.jsx("div",{style:{height:2,width:2,textAlign:"center",fontSize:"11px",backgroundColor:p(i)?"blue":"#f8f5d7",color:p(i)?"white":"black"}},i))},e))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",padding:"0.5rem"},children:[t.jsx("div",{children:t.jsxs("select",{defaultValue:"Prime",onChange:e=>{h(e.target.value)},children:[t.jsx("option",{children:"Off"}),t.jsx("option",{children:"Even"}),t.jsx("option",{children:"Odd"}),t.jsx("option",{children:"Div By"}),t.jsx("option",{children:"Prime"}),t.jsx("option",{children:"Twin Prime"})]})}),t.jsx("div",{style:{display:n!=="Div By"?"none":"block"},children:t.jsxs("select",{defaultValue:3,onChange:e=>{u(e.target.value),console.log(e.target.value)},children:[t.jsx("option",{children:"3"}),t.jsx("option",{children:"7"}),t.jsx("option",{children:"9"}),t.jsx("option",{children:"13"}),t.jsx("option",{children:"17"}),t.jsx("option",{children:"19"})]})})]})]})};export{w as default};
