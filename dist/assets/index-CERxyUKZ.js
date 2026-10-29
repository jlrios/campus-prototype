(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/campus-map-BrU2q5yw.svg`,t=`/assets/main-bldg-ground-DGciGxS6.svg`,n=`/assets/main-bldg-upper-BUyMyM9n.svg`,r={c1:{title:`Sector C1`,description:`Caseta acceso principal`,icon:`fa-solid fa-tower-observation fa-2x`},h:{title:`Sector H`,description:`Sector principal`,icon:`fa-regular fa-building fa-2x`},d:{title:`Sector D`,description:`Orientación y domo deportivo`,icon:`fa-solid fa-landmark-dome fa-2x`},m:{title:`Sector M`,description:`Aulas móviles`,icon:`fa-solid fa-people-roof fa-2x`},c2:{title:`Sector C2`,description:`Caseta acceso estacionamiento`,icon:`fa-solid fa-tower-observation fa-2x`}},i={},a={C:{id:`mainMap`,urlMap:e},H:{id:`sector-h`,mainBuilding:{groundFloor:{id:`bldgHGrnd`,urlMap:t},upperFloor:{id:`bldgHUpper`,urlMap:n}}}};async function o(e,t){try{let n=await fetch(t);if(!n.ok)throw Error(`Error loading map: ${e}`);i[e]=await n.text()}catch(e){console.error(e)}}function s(e){return i[e]??null}await Promise.all([o(a.C.id,a.C.urlMap),o(a.H.mainBuilding.groundFloor.id,a.H.mainBuilding.groundFloor.urlMap),o(a.H.mainBuilding.upperFloor.id,a.H.mainBuilding.upperFloor.urlMap)]);var c=document.getElementById(`sector-map`),l=document.querySelector(`.sector-toast`),u=document.querySelector(`#sector-toast`);function d(e){console.log(e),c.innerHTML=``,c.innerHTML=s(e);let t=c.querySelector(`svg`);requestAnimationFrame(()=>{t.classList.add(`is-visible`)}),e===`mainMap`?(document.getElementById(`navigation-left`).style.display=`none`,document.getElementById(`navigation-right`).style.display=`none`):(document.getElementById(`navigation-left`).style.display=`flex`,document.getElementById(`navigation-right`).style.display=`flex`)}d(a.C.id);var f=document.querySelector(`svg`),p=u.querySelector(`.sector-text h3`),m=u.querySelector(`.sector-text p`),h=u.querySelector(`.sector-icon i`);f.addEventListener(`pointerover`,e=>{let t=e.target.closest(`.sector`);if(!t)return;let n=r[t.id.replace(`sector-`,``)];n&&(p.textContent=n.title,m.textContent=n.description,h.className=n.icon,l.classList.add(`active`))}),f.addEventListener(`pointerout`,e=>{e.target.closest(`.sector`)&&l.classList.remove(`active`)});var g=document.querySelector(`.panel-container`),_=document.getElementById(`not-implemented`),v={"sector-h":{template:document.getElementById(`panel-h`),title:`Sector H`,icon:`fa-solid fa-building fa-2x`},"sector-d":{template:_,title:`Sector D`,icon:`fa-solid fa-landmark-dome fa-2x`},"sector-m":{template:_,title:`Sector M`,icon:`fa-solid fa-people-roof fa-2x`},"sector-c1":{template:_,title:`Sector C1`,icon:`fa-solid fa-tower-observation fa-2x`},"sector-c2":{template:_,title:`Sector C2`,icon:`fa-solid fa-tower-observation fa-2x`}},y=null;f.addEventListener(`click`,e=>{let t=e.target.closest(`.sector`);if(!t)return;let n=v[t.id];if(!n)return;if(y===t.id){y=null,t.classList.remove(`sector-selected`),t.classList.add(t.id),panel.classList.remove(`open`),g.innerHTML=``;return}if(y){let e=f.querySelector(`#${CSS.escape(y)}`);e&&(e.classList.remove(`sector-selected`),e.classList.add(e.id))}y=t.id,t.classList.remove(t.id),t.classList.add(`sector-selected`);let r=n.template.content.cloneNode(!0);g.innerHTML=``,b(g,r,n.title,n.icon,t.id)});function b(e,t,n,r,i){e.appendChild(t);let a=document.querySelector(`.panel-title-text h2`),o=document.querySelector(`.panel-title i`);a.textContent=n,o.className=r,x(i,e),panel.classList.add(`open`)}function x(e){let t=document.getElementById(`expand-${e}`);t&&t.addEventListener(`click`,()=>{panel.classList.remove(`open`),d(a.H.mainBuilding.groundFloor.id);let e=document.getElementById(`nav-map-left`),t=document.getElementById(`nav-map-right`),n=1;e.addEventListener(`click`,()=>{if(--n,n<0){n=0;return}S(n)}),t.addEventListener(`click`,()=>{if(n+=1,n>2){n=2;return}S(n)})})}function S(e){if(e===0||e===2){let t=document.getElementById(`empty-state-map`),n=document.getElementById(`sector-map`),r=t.content.cloneNode(!0);e===0?r.querySelector(`h2`).textContent=`Campus > Sector H > Cooperativa`:r.querySelector(`h2`).textContent=`Campus > Sector H > Taller de mantenimiento`,n.innerHTML=``,n.appendChild(r)}else d(a.H.mainBuilding.groundFloor.id)}var C=document.getElementById(`ground-floor`),w=document.getElementById(`upper-floor`);console.log(C),console.log(w),C.addEventListener(`click`,()=>{d(a.H.mainBuilding.groundFloor.id)});var T=null;w.addEventListener(`click`,()=>{d(a.H.mainBuilding.upperFloor.id),T=document.querySelector(`g[data-cell-id="shmb-2fch3"] rect`);let e=document.querySelector(`g[data-cell-id="camera-h3"]`);console.log(e),T.addEventListener(`click`,()=>{alert(`OK`)}),e.addEventListener(`click`,()=>{E()})});function E(){let e=document.createElement(`div`);e.className=`camera-viewer`,e.innerHTML=`
    <div class="camera-loader" id="cameraLoader">

      <div class="camera-loader__content">

        <div class="camera-loader__icon" aria-hidden="true">
          <svg viewBox="0 0 64 64">
            <rect x="8" y="18" width="38" height="28" rx="5"></rect>
            <path d="M46 27l10-6v22l-10-6z"></path>
            <circle cx="27" cy="32" r="8"></circle>
          </svg>
        </div>

        <div class="camera-loader__text">
          Conectando con la cámara...
        </div>

        <div class="camera-loader__progress">
          <div
            class="camera-loader__progress-bar"
            id="cameraProgress">
          </div>
        </div>

      </div>

    </div>

    <video
      id="cameraVideo"
      class="camera-video"
      muted
      autoplay
      loop
      playsinline
      preload="auto"
    >
      <source src="/videos/clasroom-h3.mp4" type="video/mp4">
      Tu navegador no soporta video HTML5.
    </video>

    <div class="camera-status">

      <div class="camera-status__left">

        <span>Video cámara:</span>
        <strong>Aula H3</strong>

        <span class="camera-status__separator">|</span>

        <span>Estado:</span>

        <strong class="camera-status__online">
          En línea
        </strong>

      </div>

      <div class="camera-status__right">
        <span id="cameraDateTime"></span>
      </div>

    </div>
  `;let t=new WinBox({class:[`camera-window`],mount:e,title:`Video cámara - Aula H3`,x:`center`,y:`center`,background:`#e25619`,class:[`camera-window`,`camera-window.max`],width:`1210`,height:`760`,border:4,header:45,index:300}),n=e.querySelector(`#cameraVideo`),r=e.querySelector(`#cameraLoader`),i=e.querySelector(`#cameraProgress`),a=e.querySelector(`#cameraDateTime`),o=0,s=!1,c=!1,l=setInterval(()=>{o<90&&(o+=2,i.style.width=`${o}%`)},40);n.addEventListener(`canplay`,()=>{s=!0,u()}),setTimeout(()=>{c=!0,u()},1200);function u(){!s||!c||(clearInterval(l),i.style.width=`100%`,setTimeout(()=>{r.classList.add(`is-hidden`)},250))}function d(){a.textContent=new Date().toLocaleString(`es-MX`,{dateStyle:`short`,timeStyle:`medium`})}d();let f=setInterval(d,1e3);return t.onclose=()=>{clearInterval(f),clearInterval(l)},t}