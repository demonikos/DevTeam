(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const v of l.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&i(v)}).observe(document,{childList:!0,subtree:!0});function a(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerpolicy&&(l.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?l.credentials="include":c.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(c){if(c.ep)return;c.ep=!0;const l=a(c);fetch(c.href,l)}})();let b=window.location.href;const w=document.getElementById("soc-med-icon-inst"),M=document.getElementById("soc-med-icon-fb"),W=document.getElementById("soc-med-icon-twitter"),A=document.getElementById("header-logo"),N=document.getElementById("header-nav-list"),R=document.getElementById("header"),O=document.getElementById("menu-icon"),P=document.getElementById("popup-menu"),F=document.querySelectorAll(".ps");b.includes("index")&&document.getElementById("home").classList.add("active");b.includes("restaurant")&&(document.getElementById("restaurant").classList.add("active","secondary"),w.classList.add("secondary"),M.classList.add("secondary"),W.classList.add("secondary"),A.classList.add("secondary"),N.classList.add("secondary"),R.classList.add("secondary"),O.classList.add("secondary"),P.classList.add("secondary"),F.forEach(n=>{n.classList.add("secondary")}));b.includes("hotel")&&(document.getElementById("hotel").classList.add("active","secondary"),w.classList.add("secondary"),M.classList.add("secondary"),W.classList.add("secondary"),A.classList.add("secondary"),N.classList.add("secondary"),R.classList.add("secondary"),O.classList.add("secondary"),P.classList.add("secondary"),F.forEach(n=>{n.classList.add("secondary")}));b.includes("room")&&(w.classList.add("secondary"),M.classList.add("secondary"),W.classList.add("secondary"),A.classList.add("secondary"),N.classList.add("secondary"),R.classList.add("secondary"),O.classList.add("secondary"),P.classList.add("secondary"),F.forEach(n=>{n.classList.add("secondary")}));const J=document.querySelector(".menu-btn"),K=document.querySelector(".popup-menu"),T=document.getElementById("burger-icon"),j=document.getElementById("cross-icon");J.addEventListener("click",()=>{K.classList.toggle("open"),K.classList.contains("open")?(T.style.display="none",j.style.display="block",document.body.style.overflow="hidden"):(T.style.display="block",j.style.display="none",document.body.style.overflow="visible")});let e=0;const u=document.querySelector(".photo-slider");let z=document.body.clientWidth;const E=document.querySelector(".button-right"),S=document.querySelector(".button-left");z>=1440?(E.addEventListener("click",function(){e=e+298,e>1490&&(e=0),u.style.right=e+"px"}),S.addEventListener("click",function(){e=e-298,e<0&&(e=0),u.style.right=e+"px"})):z>=768?(E.addEventListener("click",function(){e=e+368,e>368*5&&(e=0),u.style.right=e+"px"}),S.addEventListener("click",function(){e=e-368,e<0&&(e=0),u.style.right=e+"px"})):(E.addEventListener("click",function(){e=e+177,e>177*5&&(e=0),u.style.right=e+"px"}),S.addEventListener("click",function(){e=e-177,e<0&&(e=0),u.style.right=e+"px"}));let d=0;const H=document.querySelector(".main-hotel .photo-slider");document.body.clientWidth;const Q=document.querySelector(".main-hotel .button-right"),U=document.querySelector(".main-hotel .button-left");Q.addEventListener("click",function(){d=d+177,d>177*2&&(d=0),H.style.right=d+"px"});U.addEventListener("click",function(){d=d-177,d<0&&(d=0),H.style.right=d+"px"});(()=>{const n={openModalBtns:document.querySelectorAll("[data-modal-br-open]"),closeModalBtn:document.querySelector("[data-modal-br-close]"),modal:document.querySelector("[data-modal-br]")},r=()=>{document.body.style.overflow="hidden"},a=()=>{document.body.style.overflow="visible"};n.openModalBtns.forEach(c=>{c.addEventListener("click",i)}),n.closeModalBtn.addEventListener("click",i);function i(){n.modal.classList.toggle("is-hidden"),n.modal.classList.contains("is-hidden")?a():r()}})();(()=>{const n={openModalBtns:document.querySelectorAll("[data-modal-bt-open]"),closeModalBtn:document.querySelector("[data-modal-bt-close]"),modal:document.querySelector("[data-modal-bt]")},r=()=>{document.body.style.overflow="hidden"},a=()=>{document.body.style.overflow="visible"};n.openModalBtns.forEach(c=>{c.addEventListener("click",i)}),n.closeModalBtn.addEventListener("click",i);function i(){n.modal.classList.toggle("is-hidden"),n.modal.classList.contains("is-hidden")?a():r()}})();(()=>{const n={openModalBtns:document.querySelectorAll("[data-modal-ppr-open]"),closeModalBtn:document.querySelector("[data-modal-ppr-close]"),modal:document.querySelector("[data-modal-ppr]")},r=()=>{document.body.style.overflow="hidden"},a=()=>{document.body.style.overflow="visible"};n.openModalBtns.forEach(c=>{c.addEventListener("click",i)}),n.closeModalBtn.addEventListener("click",i);function i(){n.modal.classList.toggle("is-hidden"),n.modal.classList.contains("is-hidden")?a():r()}})();let t=0;const y=document.querySelector(".hotel-photo-slider"),C=document.body.clientWidth,k=document.querySelector(".hotel-btn-left"),q=document.querySelector(".hotel-btn-right");C>=1440?(q.addEventListener("click",function(){t=t+468,t>936&&(t=936),y.style.right=t+"px"}),k.addEventListener("click",function(){t=t-468,t<0&&(t=0),y.style.right=t+"px"})):C>=768?(q.addEventListener("click",function(){t=t+468,t>936&&(t=936),y.style.right=t+"px"}),k.addEventListener("click",function(){t=t-468,t<0&&(t=0),y.style.right=t+"px"})):(q.addEventListener("click",function(){t=t+270,t>540&&(t=540),y.style.right=t+"px"}),k.addEventListener("click",function(){t=t-270,t<0&&(t=0),y.style.right=t+"px"}));let o=0;const f=document.querySelector(".restaurant-hero-photo-slider"),D=document.body.clientWidth,B=document.querySelector(".restaurant-hero-button-right"),x=document.querySelector(".restaurant-hero-button-left");D>=1440?(B.addEventListener("click",function(){o=o+452,o>2398&&(o=0),f.style.right=o+"px"}),x.addEventListener("click",function(){o=o-452,o<0&&(o=0),f.style.right=o+"px"})):D>=768?(B.addEventListener("click",function(){o=o+452,o>2398&&(o=0),f.style.right=o+"px"}),x.addEventListener("click",function(){o=o-452,o<0&&(o=0),f.style.right=o+"px"})):(B.addEventListener("click",function(){o=o+270,o>1485&&(o=0),f.style.right=o+"px"}),x.addEventListener("click",function(){o=o-270,o<0&&(o=0),f.style.right=o+"px"}));let g=document.querySelector("#ci1"),L=document.querySelector("#ci2"),p=document.querySelector("#ci3"),h=document.querySelector("#ci4");const V=document.querySelector(".next-btn"),X=document.querySelector(".previous-btn");V.addEventListener("click",function(){g.classList.contains("isopen")?(L.classList.toggle("isopen"),g.classList.toggle("isopen")):L.classList.contains("isopen")?(p.classList.toggle("isopen"),L.classList.toggle("isopen")):p.classList.contains("isopen")?(h.classList.toggle("isopen"),p.classList.toggle("isopen")):(h.classList.toggle("isopen"),g.classList.toggle("isopen"))});X.addEventListener("click",function(){g.classList.contains("isopen")?(h.classList.toggle("isopen"),g.classList.toggle("isopen")):L.classList.contains("isopen")?(g.classList.toggle("isopen"),L.classList.toggle("isopen")):p.classList.contains("isopen")?(L.classList.toggle("isopen"),p.classList.toggle("isopen")):(h.classList.toggle("isopen"),p.classList.toggle("isopen"))});let s=0;const m=document.querySelector(".photo-slider");let G=document.body.clientWidth;const I=document.querySelector(".button-right"),$=document.querySelector(".button-left");G>=1440?(I.addEventListener("click",function(){s=s+436+32,s>2340&&(s=0),m.style.right=s+"px"}),$.addEventListener("click",function(){s=s-436-32,s<0&&(s=0),m.style.right=s+"px"})):G>=768?(I.addEventListener("click",function(){s=s+436+32,s>2340&&(s=0),m.style.right=s+"px"}),$.addEventListener("click",function(){s=s-436-32,s<0&&(s=0),m.style.right=s+"px"})):(I.addEventListener("click",function(){s=s+250+20,s>1350&&(s=0),m.style.right=s+"px"}),$.addEventListener("click",function(){s=s-250-20,s<0&&(s=0),m.style.right=s+"px"}));
