(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const x of d.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&l(x)}).observe(document,{childList:!0,subtree:!0});function a(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerpolicy&&(d.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?d.credentials="include":i.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(i){if(i.ep)return;i.ep=!0;const d=a(i);fetch(i.href,d)}})();let q=window.location.href;const P=document.getElementById("soc-med-icon-inst"),R=document.getElementById("soc-med-icon-fb"),O=document.getElementById("soc-med-icon-twitter"),F=document.getElementById("header-logo"),K=document.getElementById("header-nav-list"),T=document.getElementById("header"),j=document.getElementById("menu-icon"),z=document.getElementById("popup-menu"),C=document.querySelectorAll(".ps");q.includes("index")&&document.getElementById("home").classList.add("active");q.includes("restaurant")&&(document.getElementById("restaurant").classList.add("active","secondary"),P.classList.add("secondary"),R.classList.add("secondary"),O.classList.add("secondary"),F.classList.add("secondary"),K.classList.add("secondary"),T.classList.add("secondary"),j.classList.add("secondary"),z.classList.add("secondary"),C.forEach(n=>{n.classList.add("secondary")}));q.includes("hotel")&&(document.getElementById("hotel").classList.add("active","secondary"),P.classList.add("secondary"),R.classList.add("secondary"),O.classList.add("secondary"),F.classList.add("secondary"),K.classList.add("secondary"),T.classList.add("secondary"),j.classList.add("secondary"),z.classList.add("secondary"),C.forEach(n=>{n.classList.add("secondary")}));q.includes("room")&&(P.classList.add("secondary"),R.classList.add("secondary"),O.classList.add("secondary"),F.classList.add("secondary"),K.classList.add("secondary"),T.classList.add("secondary"),j.classList.add("secondary"),z.classList.add("secondary"),C.forEach(n=>{n.classList.add("secondary")}));const Z=document.querySelector(".menu-btn"),D=document.querySelector(".popup-menu"),G=document.getElementById("burger-icon"),H=document.getElementById("cross-icon");Z.addEventListener("click",()=>{D.classList.toggle("open"),D.classList.contains("open")?(G.style.display="none",H.style.display="block",document.body.style.overflow="hidden"):(G.style.display="block",H.style.display="none",document.body.style.overflow="visible")});let e=0;const u=document.querySelector(".photo-slider");let J=document.body.clientWidth;const B=document.querySelector(".button-right"),I=document.querySelector(".button-left");J>=1440?(B.addEventListener("click",function(){e=e+298,e>1490&&(e=0),u.style.right=e+"px"}),I.addEventListener("click",function(){e=e-298,e<0&&(e=0),u.style.right=e+"px"})):J>=768?(B.addEventListener("click",function(){e=e+368,e>368*5&&(e=0),u.style.right=e+"px"}),I.addEventListener("click",function(){e=e-368,e<0&&(e=0),u.style.right=e+"px"})):(B.addEventListener("click",function(){e=e+177,e>177*5&&(e=0),u.style.right=e+"px"}),I.addEventListener("click",function(){e=e-177,e<0&&(e=0),u.style.right=e+"px"}));let L=document.querySelector("#slide1"),p=document.querySelector("#slide2"),m=document.querySelector("#slide3"),S=document.querySelector("#slide4");const _=document.querySelector(".next-btn"),ee=document.querySelector(".previous-btn");_.addEventListener("click",function(){L.classList.contains("isopen")?(p.classList.toggle("isopen"),L.classList.toggle("isopen")):p.classList.contains("isopen")?(m.classList.toggle("isopen"),p.classList.toggle("isopen")):m.classList.contains("isopen")?(S.classList.toggle("isopen"),m.classList.toggle("isopen")):(S.classList.toggle("isopen"),L.classList.toggle("isopen"))});ee.addEventListener("click",function(){L.classList.contains("isopen")?(S.classList.toggle("isopen"),L.classList.toggle("isopen")):p.classList.contains("isopen")?(L.classList.toggle("isopen"),p.classList.toggle("isopen")):m.classList.contains("isopen")?(p.classList.toggle("isopen"),m.classList.toggle("isopen")):(S.classList.toggle("isopen"),m.classList.toggle("isopen"))});(()=>{const n={openModalBtns:document.querySelectorAll("[data-modal-br-open]"),closeModalBtn:document.querySelector("[data-modal-br-close]"),modal:document.querySelector("[data-modal-br]")},r=()=>{document.body.style.overflow="hidden"},a=()=>{document.body.style.overflow="visible"};n.openModalBtns.forEach(i=>{i.addEventListener("click",l)}),n.closeModalBtn.addEventListener("click",l);function l(){n.modal.classList.toggle("is-hidden"),n.modal.classList.contains("is-hidden")?a():r()}})();(()=>{const n={openModalBtns:document.querySelectorAll("[data-modal-bt-open]"),closeModalBtn:document.querySelector("[data-modal-bt-close]"),modal:document.querySelector("[data-modal-bt]")},r=()=>{document.body.style.overflow="hidden"},a=()=>{document.body.style.overflow="visible"};n.openModalBtns.forEach(i=>{i.addEventListener("click",l)}),n.closeModalBtn.addEventListener("click",l);function l(){n.modal.classList.toggle("is-hidden"),n.modal.classList.contains("is-hidden")?a():r()}})();(()=>{const n={openModalBtns:document.querySelectorAll("[data-modal-ppr-open]"),closeModalBtn:document.querySelector("[data-modal-ppr-close]"),modal:document.querySelector("[data-modal-ppr]")},r=()=>{document.body.style.overflow="hidden"},a=()=>{document.body.style.overflow="visible"};n.openModalBtns.forEach(i=>{i.addEventListener("click",l)}),n.closeModalBtn.addEventListener("click",l);function l(){n.modal.classList.toggle("is-hidden"),n.modal.classList.contains("is-hidden")?a():r()}})();let c=0;const E=document.querySelector(".slider-restaurant"),te=document.body.clientWidth,Q=document.querySelector(".restaurant-gallery .button-right"),U=document.querySelector(".restaurant-gallery .button-left");te>=768?(Q.addEventListener("click",function(){c=c+468,c>1372&&(c=0),E.style.right=c+"px"}),U.addEventListener("click",function(){c=c-468,c<0&&(c=0),E.style.right=c+"px"})):(Q.addEventListener("click",function(){c=c+270,c>540&&(c=0),E.style.right=c+"px"}),U.addEventListener("click",function(){c=c-270,c<0&&(c=0),E.style.right=c+"px"}));let t=0;const y=document.querySelector(".hotel-photo-slider"),V=document.body.clientWidth,$=document.querySelector(".hotel-btn-left"),w=document.querySelector(".hotel-btn-right");V>=1440?(w.addEventListener("click",function(){t=t+468,t>936&&(t=936),y.style.right=t+"px"}),$.addEventListener("click",function(){t=t-468,t<0&&(t=0),y.style.right=t+"px"})):V>=768?(w.addEventListener("click",function(){t=t+468,t>936&&(t=936),y.style.right=t+"px"}),$.addEventListener("click",function(){t=t-468,t<0&&(t=0),y.style.right=t+"px"})):(w.addEventListener("click",function(){t=t+270,t>540&&(t=540),y.style.right=t+"px"}),$.addEventListener("click",function(){t=t-270,t<0&&(t=0),y.style.right=t+"px"}));let s=0;const f=document.querySelector(".restaurant-hero-photo-slider"),X=document.body.clientWidth,M=document.querySelector(".restaurant-hero-button-right"),W=document.querySelector(".restaurant-hero-button-left");X>=1440?(M.addEventListener("click",function(){s=s+452,s>2398&&(s=0),f.style.right=s+"px"}),W.addEventListener("click",function(){s=s-452,s<0&&(s=0),f.style.right=s+"px"})):X>=768?(M.addEventListener("click",function(){s=s+452,s>2398&&(s=0),f.style.right=s+"px"}),W.addEventListener("click",function(){s=s-452,s<0&&(s=0),f.style.right=s+"px"})):(M.addEventListener("click",function(){s=s+270,s>1485&&(s=0),f.style.right=s+"px"}),W.addEventListener("click",function(){s=s-270,s<0&&(s=0),f.style.right=s+"px"}));let h=document.querySelector("#ci1"),v=document.querySelector("#ci2"),b=document.querySelector("#ci3"),k=document.querySelector("#ci4");const se=document.querySelector(".next-btn"),oe=document.querySelector(".previous-btn");se.addEventListener("click",function(){h.classList.contains("isopen")?(v.classList.toggle("isopen"),h.classList.toggle("isopen")):v.classList.contains("isopen")?(b.classList.toggle("isopen"),v.classList.toggle("isopen")):b.classList.contains("isopen")?(k.classList.toggle("isopen"),b.classList.toggle("isopen")):(k.classList.toggle("isopen"),h.classList.toggle("isopen"))});oe.addEventListener("click",function(){h.classList.contains("isopen")?(k.classList.toggle("isopen"),h.classList.toggle("isopen")):v.classList.contains("isopen")?(h.classList.toggle("isopen"),v.classList.toggle("isopen")):b.classList.contains("isopen")?(v.classList.toggle("isopen"),b.classList.toggle("isopen")):(k.classList.toggle("isopen"),b.classList.toggle("isopen"))});let o=0;const g=document.querySelector(".photo-slider");let Y=document.body.clientWidth;const N=document.querySelector(".button-right"),A=document.querySelector(".button-left");Y>=1440?(N.addEventListener("click",function(){o=o+436+32,o>2340&&(o=0),g.style.right=o+"px"}),A.addEventListener("click",function(){o=o-436-32,o<0&&(o=0),g.style.right=o+"px"})):Y>=768?(N.addEventListener("click",function(){o=o+436+32,o>2340&&(o=0),g.style.right=o+"px"}),A.addEventListener("click",function(){o=o-436-32,o<0&&(o=0),g.style.right=o+"px"})):(N.addEventListener("click",function(){o=o+250+20,o>1350&&(o=0),g.style.right=o+"px"}),A.addEventListener("click",function(){o=o-250-20,o<0&&(o=0),g.style.right=o+"px"}));
