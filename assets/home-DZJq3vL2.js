import{r as L,_ as M}from"./YunFooter.vue_vue_type_script_setup_true_lang-On-ufO1B.js";import{a as B,q as p,d as f,o as t,e as a,g as i,r as S,S as Y,i as b,L as V,t as g,v as _,_ as z,ah as A,x as w,F as N,l as D,n as C,f as m,c as $,m as k,Y as E,s as F,a7 as R}from"./app-0mx5szZe.js";function P(h){const e=B();return p(()=>e.meta.layout===h)}const G={class:"yun-notice m-auto"},I=["innerHTML"],j=f({__name:"YunNotice",props:{content:{}},setup(h){return(e,o)=>(t(),a("div",G,[i("span",{innerHTML:e.content},null,8,I),S(e.$slots,"default")]))}}),q={class:"say"},O={key:0,class:"say-content animate-fade-in animate-iteration-1"},W={key:1,class:"say-author"},J={key:2,class:"say-from"},K=f({__name:"YunSay",setup(h){const e=Y(),o=b(""),s=b(""),u=b("");function v(){const r=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;r&&fetch(r).then(n=>{if(n.ok)n.json().then(c=>{if(e.value.say.hitokoto.enable)o.value=c.hitokoto,s.value=c.from_who,u.value=c.from;else{const l=c[Math.floor(Math.random()*c.length)];l.content?(o.value=l.content,s.value=l.author,u.value=l.from):o.value=l}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${n.status}`)}).catch(n=>{console.error(n.message)})}return V(()=>{v()}),(r,n)=>(t(),a("div",q,[o.value?(t(),a("span",O,g(o.value),1)):_("v-if",!0),s.value?(t(),a("span",W,g(s.value),1)):_("v-if",!0),u.value?(t(),a("span",J,g(u.value),1)):_("v-if",!0)]))}}),Q=i("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),U=[Q],X=f({__name:"YunGoDown",setup(h){function e(){const o=document.getElementById("yun-banner");o&&window.scrollTo({top:o.clientHeight,behavior:"smooth"})}return(o,s)=>(t(),a("button",{class:"go-down","aria-label":"go-down",onClick:e},U))}}),Z={},ee={class:"yun-cloud"},ne=A('<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--yun-c-cloud)"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0"></use><use xlink:href="#gentle-wave" x="48" y="3"></use><use xlink:href="#gentle-wave" x="48" y="5"></use><use xlink:href="#gentle-wave" x="48" y="7"></use></g></svg>',1),te=[ne];function oe(h,e){return t(),a("div",ee,te)}const se=z(Z,[["render",oe]]),ae={class:"banner-line-container"},re={class:"banner-char-container"},ce={class:"char"},le={class:"banner-line-container bottom"},ie=f({__name:"YunBanner",setup(h){const e=Y(),o=p(()=>{const r=[];for(let n=0;n<e.value.banner.title.length;n++){const c=L(1.5,3.5);r.push(c)}return r}),s=p(()=>o.value.reduce((r,n)=>r+n,0)/2),u=p(()=>({"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${s.value}rem)`})),v=b(!0);return(r,n)=>{var y;const c=se,l=X;return t(),a("div",{id:"yun-banner",style:C(u.value)},[i("div",ae,[i("div",{class:w(["banner-line vertical-line-top",{active:v.value}])},null,2)]),i("div",re,[(t(!0),a(N,null,D(m(e).banner.title,(x,d)=>(t(),a("div",{key:d,class:"char-box"},[i("span",{class:w([d%2!==0?"char-right":"char-left"]),style:C({"--banner-char-size":`${o.value[d]}rem`})},[i("span",ce,g(x),1)],6)]))),128))]),i("div",le,[i("div",{class:w(["banner-line vertical-line-bottom",{active:v.value}])},null,2)]),(y=m(e).banner.cloud)!=null&&y.enable?(t(),$(c,{key:0})):_("v-if",!0),k(l)],4)}}}),he=f({__name:"home",setup(h){const e=E(),o=P("home"),s=Y(),u=B(),v=p(()=>u.path.startsWith("/page")),r=p(()=>{const n=s.value.notice;return n.enable&&(v.value?!n.hideInPages:!0)});return(n,c)=>{const l=R,y=ie,x=K,d=j,T=F("RouterView"),H=M;return t(),a("main",{class:w(["yun-main flex-center",m(o)&&!m(e).isSidebarOpen?"pl-0":"md:pl-$va-sidebar-width"]),flex:"~ col",w:"full"},[k(l,{"show-hamburger":!0}),v.value?_("v-if",!0):(t(),a(N,{key:0},[m(s).banner.enable?(t(),$(y,{key:0})):_("v-if",!0),m(s).say.enable?(t(),$(x,{key:1,w:"full"})):_("v-if",!0)],64)),r.value?(t(),$(d,{key:1,content:m(s).notice.content,mt:"4"},null,8,["content"])):_("v-if",!0),S(n.$slots,"board"),S(n.$slots,"default",{},()=>[k(T)]),k(H)],2)}}});export{he as default};
