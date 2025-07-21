import{a as d,S as f,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="51359701-f6006c27d1fc3647654901390",m="https://pixabay.com/api/";async function p(n){const s={key:u,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:s})).data.hits}let l;function y(n){const s=document.querySelector(".gallery"),o=n.map(r=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
          </a>
        <div class="info">
  <div class="info-item"><b>Likes</b><span>${r.likes}</span></div>
  <div class="info-item"><b>Views</b><span>${r.views}</span></div>
  <div class="info-item"><b>Comments</b><span>${r.comments}</span></div>
  <div class="info-item"><b>Downloads</b><span>${r.downloads}</span></div>
</div>
        </li>`).join("");s.insertAdjacentHTML("beforeend",o),l?l.refresh():l=new f(".gallery a")}function g(){document.querySelector(".gallery").innerHTML=""}function h(){document.getElementById("loader-text").classList.remove("hidden")}function b(){document.getElementById("loader-text").classList.add("hidden")}const c=document.querySelector(".form"),v=c.elements["search-text"];c.addEventListener("submit",async n=>{n.preventDefault();const s=v.value.trim();if(!s){a.warning({message:"Введи ключове слово для пошуку!",position:"topRight"});return}g(),h();try{const o=await p(s);o.length===0?a.info({message:"Нічого не знайдено за цим запитом.",position:"topRight"}):y(o)}catch(o){a.error({message:"Помилка при завантаженні зображень!",position:"topRight"}),console.error(o)}finally{b()}});
//# sourceMappingURL=index.js.map
