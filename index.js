import{A as b,S as w,a as p,i as f,N as E,K as k}from"./assets/vendor-BQNjn6rq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const M=document.querySelector(".header-menu-btn"),C=document.querySelector(".modal-close-btn"),v=document.querySelector(".titel-menu"),y=document.querySelector(".modal-overley"),i=document.querySelector(".nav-menu"),P=document.querySelectorAll(".section-menu a"),A=document.querySelectorAll("#mobile-menu a"),B=document.querySelector("#mobile-order-btn");M.addEventListener("click",a);C.addEventListener("click",a);B.addEventListener("click",a);function a(){const e=y.classList.contains("visually-hidden");y.classList.toggle("visually-hidden"),e?document.body.style.overflow="hidden":document.body.style.overflow=""}v.addEventListener("click",()=>{v.classList.toggle("active"),i.classList.toggle("is-open")});P.forEach(function(e){e.addEventListener("click",h)});A.forEach(function(e){e.addEventListener("click",o=>{h(o),a()})});function h(e){e.preventDefault();const o=e.target.getAttribute("href").slice(1),n=document.getElementById(o);if(n){const t=n.getBoundingClientRect().top+window.scrollY+-60;window.scrollTo({top:t,behavior:"smooth"})}}document.addEventListener("click",e=>{!i.contains(e.target)&&!v.contains(e.target)&&i.classList.remove("is-open")});document.addEventListener("keydown",e=>{if(e.key==="Escape"){i.classList.contains("is-open")&&i.classList.remove("is-open");return}});const x=document.querySelector(".about-me-swiper-container"),O=new b(".about-me-accordion-container",{duration:600,showMultiple:!0});O.open(0);new w(x,{loop:!0,speed:700,simulateTouch:!0,spaceBetween:0,slidesPerView:2,navigation:{nextEl:".about-me-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});const T=document.querySelector(".projects-section-swiper-container");new w(T,{navigation:{nextEl:".projects-button.next",prevEl:".projects-button.prev"},keyboard:{enabled:!0,onlyInViewport:!0},effect:"cube",speed:1100});document.addEventListener("DOMContentLoaded",function(){new b(".faq-accordion-js",{duration:400,showMultiple:!0,elementClass:"faq-accordion-item",triggerClass:"faq-arrow-button",panelClass:"faq-accordion-panel"})});const j=document.querySelector(".section-covers"),g=document.querySelectorAll(".marquee__line"),N={root:null,rootMargin:"0px 0px 0px 0px",threshold:.1},V=e=>{e.forEach(o=>{o.isIntersecting?g.forEach(n=>{n.style.animationPlayState="running"}):g.forEach(n=>{n.style.animationPlayState="paused"})})},F=new IntersectionObserver(V,N);F.observe(j);const d=document.querySelector(".reviews-list"),I=document.querySelector(".reviews-swiper-container"),u=document.querySelector(".reviews-swiper-button-next"),m=document.querySelector(".reviews-swiper-button-prev"),D=async()=>{try{const e=await p.get("https://portfolio-js.b.goit.study/api/reviews");if(e.data.length===0){f.error({message:"No reviews found",position:"topCenter"}),d.innerHTML='<li class="review-item review-item-not-found">Not found</li>',u.disabled=!0,m.disabled=!0;return}const o=r=>`
        <li class="review-item swiper-slide">
          <img src="${r.avatar_url}" alt="" class="review-img">
          <h3 class="review-name">${r.author}</h3>
          <p class="review-desc">${r.review}</p>
        </li>`,n=e.data.map(r=>o(r)).join("");d.innerHTML=n,new w(I,{modules:[E,k],navigation:{nextEl:u,prevEl:m},keyboard:{enabled:!0,onlyInViewport:!0},spaceBetween:16,speed:1100,slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}})}catch(e){console.log("Error fetching reviews:",e),f.error({message:"Failed to load reviews. Please try again later.",position:"topCenter"}),d.innerHTML='<li class="review-item review-item-not-found">Not found</li>',u.disabled=!0,m.disabled=!0}};D();const c=document.querySelector(".modal-menu-dialog"),R=document.querySelector(".btn-svg-modal-icon");function H(e){c.show();const o=document.querySelector(".title-modal"),n=document.querySelector(".paragraph-modal");o.textContent=e.title,n.textContent=e.message,addEventListener("keydown",L)}const L=e=>{e.keyCode===27&&S()},S=()=>{document.querySelector(".footer-send-btn").classList.remove("is-active"),c.close(),removeEventListener("keydown",L)};c.addEventListener("click",e=>{const o=e.currentTarget;e.target===o&&c.close()});R.addEventListener("click",S);const q=document.querySelector(".work-together-form-js");q.addEventListener("submit",K);async function K(e){e.preventDefault();const{email:o,comment:n}=e.currentTarget.elements,r=document.querySelector(".footer-send-btn");try{const t=await _({email:o.value.trim(),comment:n.value.trim()});r.classList.add("is-active"),setTimeout(()=>{H(t),q.reset()},700)}catch(t){console.log(t),f.show({class:"error",messageColor:"#FAFAFA",title:t.message,titleColor:"#FAFAFA",message:t.response.data.message,image:"/img/work-together/Error.png",imageWidth:60,color:"#ED3B44",position:"topCenter"})}}async function _(e){p.defaults.baseURL="https://portfolio-js.b.goit.study/api";const{data:o}=await p.post("/requests",e);return o}
//# sourceMappingURL=index.js.map
