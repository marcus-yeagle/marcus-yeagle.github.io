import{j as e}from"./index-d8d5cf6f.js";const u=()=>{function c(t,i,r){const n=Math.sqrt(2)/2;return r<=20?e.jsx("rect",{x:0,y:0,width:r,height:r,fill:t}):e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:0,y:0,width:r,height:r,fill:t}),e.jsx("g",{transform:`translate(${r/2}) rotate(${1*45})`,children:c(i,t,r*n)})]})}function o(t,i,{color:r,tileIndex:n,label:l=!1}){return[e.jsx("rect",{width:t,height:i,stroke:"black",fill:"orange"}),e.jsx("text",{x:2,y:15,style:"font: bold 12px monospace",children:n}),{color:r,tileIndex:n+1,label:l}]}function s(t,i,r,n,l,h){if(t===0||i===0)return e.jsx(e.Fragment,{});const[x,a]=[t/r,i/n],[j,d]=l(x,a,h);return e.jsxs(e.Fragment,{children:[j,r>1?e.jsx("g",{transform:`translate(${x}, 0)`,children:s(t-x,a,r-1,1,l,d)}):e.jsx(e.Fragment,{}),n>1?e.jsx("g",{transform:`translate(0, ${a})`,children:s(t,i-a,r,n-1,l,{...d,tileIndex:d.tileIndex+r-1})}):e.jsx(e.Fragment,{})]})}function g(t,i,{colors:r,colorIndex:n}){return[e.jsx("rect",{x:0,y:0,width:t,height:i,fill:r[n]}),{colors:r,colorIndex:(n+1)%r.length}]}return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("svg",{id:"art",style:{border:"10px solid black",padding:"15px",backgroundColor:"white"},width:500,height:500,viewBox:"0 0 100 100",children:c("red","blue",100)})}),e.jsx("div",{children:e.jsx("svg",{id:"art",style:{border:"10px solid black",padding:"15px",backgroundColor:"white"},width:500,height:500,viewBox:"0 0 100 100",children:s(100,100,5,5,o,{color:"orange",tileIndex:0,label:!1})})}),e.jsx("div",{children:e.jsx("svg",{id:"art",style:{border:"10px solid black",padding:"30px",backgroundColor:"white"},width:500,height:500,viewBox:"0 0 100 100",children:s(100,100,5,5,g,{colors:["black","white"],colorIndex:0})})})]})})};export{u as default};