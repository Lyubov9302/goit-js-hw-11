import{a as l,S as d,i as c}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="51359701-f6006c27d1fc3647654901390",f="https://pixabay.com/api/";async function m(n){const r={key:u,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await l.get(f,{params:r})).data.hits}let a;function p(n){const r=document.querySelector(".gallery"),s=n.map(o=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o.largeImageURL}">
            <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
          </a>
        <div class="info">
  <div class="info-item"><b>Likes</b><span>${o.likes}</span></div>
  <div class="info-item"><b>Views</b><span>${o.views}</span></div>
  <div class="info-item"><b>Comments</b><span>${o.comments}</span></div>
  <div class="info-item"><b>Downloads</b><span>${o.downloads}</span></div>
</div>
        </li>`).join("");r.insertAdjacentHTML("beforeend",s),a?a.refresh():a=new d(".gallery a")}function y(){document.querySelector(".gallery").innerHTML=""}function g(){document.getElementById("loader-text").classList.remove("hidden")}function h(){document.getElementById("loader-text").classList.add("hidden")}const b=document.querySelector(".form"),v=document.querySelector('input[name="search-text"]');b.addEventListener("submit",async n=>{n.preventDefault();const r=v.value.trim();if(r){y(),g();try{const s=await m(r);s.length===0?c.info({message:"Нічого не знайдено за цим запитом.",position:"topRight"}):p(s)}catch(s){c.error({message:"Помилка при завантаженні зображень!",position:"topRight"}),console.error(s)}finally{h()}}});
//# sourceMappingURL=index.js.map
