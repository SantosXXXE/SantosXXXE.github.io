import{i}from"./theme.DYwzqV5u.js";import{d,v as s}from"./framework.CzRZpOiB.js";const u=d({__name:"EscookConfetti",setup(r){s(()=>{window.addEventListener("click",t=>{const e=t.clientX/(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),n=t.clientY/(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight);c(e,n)})});const c=(t,e)=>{var n={spread:360,ticks:50,gravity:0,decay:.94,startVelocity:10,colors:["FFE400","FFBD00","E89400","FFCA6C","FDFFB8"],origin:{x:t,y:e}};function o(){i({...n,particleCount:4,scalar:1.2,shapes:["star"]}),i({...n,particleCount:10,scalar:.75,shapes:["circle"]})}setTimeout(o,0),setTimeout(o,50),setTimeout(o,100)};return(t,e)=>null}});export{u as default};
