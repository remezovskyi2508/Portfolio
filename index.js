import{i as u,a as p,A as f,S as m,N as y,K as b}from"./assets/vendor-rqonQeHA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const i=document.querySelector(".modal-menu-dialog"),h=document.querySelector(".btn-svg-modal-icon"),S=document.querySelector(".footer-send-btn");function g(e){i.show();const o=document.querySelector(".title-modal"),r=document.querySelector(".paragraph-modal");o.textContent=e.title,r.textContent=e.message}const q=()=>{i.close()};i.addEventListener("click",e=>{const o=e.currentTarget;e.target===o&&i.close()});S.addEventListener("click",g);h.addEventListener("click",q);const v=document.querySelector(".work-together-form-js");v.addEventListener("submit",E);async function E(e){e.preventDefault();const{email:o,comment:r}=e.currentTarget.elements;try{const s=await L({email:o.value.trim(),comment:r.value.trim()});g(s),v.reset()}catch(s){console.log(s),u.show({class:"error",messageColor:"#FAFAFA",title:s.message,titleColor:"#FAFAFA",message:s.response.data.message,image:"/img/work-together/Error.png",imageWidth:60,color:"#ED3B44",position:"topCenter"})}}async function L(e){p.defaults.baseURL="https://portfolio-js.b.goit.study/api";const{data:o}=await p.post("/requests",e);return o}const C=document.querySelectorAll(".about-me-btn"),M=document.querySelector(".accordion-container"),O=document.querySelector(".about-me-swiper-container");new f(M,{closeOther:!0,slideSpeed:400,modal:!0,duration:400,showMultiple:!1,collapse:!0,activeIndex:0,openOnInit:[0],onOpen:function(e){e.style.display="grid"},onClose:function(e){e.style.display="none"}});new m(O,{loop:!0,speed:700,simulateTouch:!0,spaceBetween:0,slidesPerView:2,navigation:{nextEl:".about-me-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});C.forEach(e=>{e.addEventListener("click",o=>{e.classList.toggle("is-active-svg");const r=o.target.closest(".about-me-li").querySelector(".ac-panel");r.style.display=r.style.display==="grid"?"none":"grid"})});const x=document.querySelector(".projects-section-swiper-container");new m(x,{navigation:{nextEl:".projects-button.next",prevEl:".projects-button.prev"},keyboard:{enabled:!0,onlyInViewport:!0},effect:"cube",speed:1100});document.addEventListener("DOMContentLoaded",function(){new f(".faq-accordion-js",{duration:400,showMultiple:!0,elementClass:"faq-accordion-item",triggerClass:"question-wrapper",panelClass:"faq-accordion-panel"})});const P=document.querySelector(".section-covers"),w=document.querySelectorAll(".marquee__line"),A={root:null,rootMargin:"0px 0px 0px 0px",threshold:.1},j=e=>{e.forEach(o=>{o.isIntersecting?w.forEach(r=>{r.style.animationPlayState="running"}):w.forEach(r=>{r.style.animationPlayState="paused"})})},N=new IntersectionObserver(j,A);N.observe(P);const c=document.querySelector(".reviews-list"),T=document.querySelector(".reviews-swiper-container"),l=document.querySelector(".reviews-swiper-button-next"),d=document.querySelector(".reviews-swiper-button-prev"),V=async()=>{try{const e=await p.get("https://portfolio-js.b.goit.study/api/reviews");if(e.data.length===0){u.error({message:"No reviews found",position:"topCenter"}),c.innerHTML='<li class="review-item review-item-not-found">Not found</li>',l.disabled=!0,d.disabled=!0;return}const o=t=>`
        <li class="review-item swiper-slide">
          <img src="${t.avatar_url}" alt="" class="review-img">
          <h3 class="review-name">${t.author}</h3>
          <p class="review-desc">${t.review}</p>
        </li>`,r=e.data.map(t=>o(t)).join("");c.innerHTML=r;const s=new m(T,{modules:[y,b],navigation:{nextEl:l,prevEl:d},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},spaceBetween:16,speed:400,slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}})}catch(e){console.log("Error fetching reviews:",e),u.error({message:"Failed to load reviews. Please try again later.",position:"topCenter"}),c.innerHTML='<li class="review-item review-item-not-found">Not found</li>',l.disabled=!0,d.disabled=!0}};V();
//# sourceMappingURL=index.js.map
