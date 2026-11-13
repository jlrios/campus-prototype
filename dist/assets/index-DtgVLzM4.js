(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#menu-icon`),t=document.querySelector(`.sidebar`);e.addEventListener(`click`,()=>{console.log(t),t.classList.toggle(`active`)});var n=`<!-- Empty state -->
<section id="empty-state">
  <div style="display: grid; margin-top: 50px">
    <div style="align-self: center; justify-self: center; text-align: center">
      <img
        src="./src/assets/images/select-sector.svg"
        alt=""
        style="width: 280px; height: auto"
      />
      <h3 style="margin-top: 50px">Seleccione un sector</h3>
      <div style="text-align: left; padding: 15px">
        <p>
          Pase el puntero sobre el mapa para explorar los sectores. Haga clic en
          un sector para visualizar su información.
        </p>
        <p>
          Para seleccionar alguno de los sectores, asegurese que el modo
          señalética no se encuentra activo.
        </p>
      </div>
    </div>
  </div>
</section>
`,r=document.getElementById(`imageViewer`),i=document.getElementById(`viewerImage`),a=document.getElementById(`viewerCaption`),o=document.querySelector(`.image-viewer__close`);function s(e,t,n=``){i.src=e,i.alt=n,a.textContent=t,r.showModal()}function c(){r.close()}o.addEventListener(`click`,c),r.addEventListener(`click`,e=>{let t=r.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||r.close()});var l=document.getElementById(`month-year`),u=document.getElementById(`calendar-days`),d=document.getElementById(`previous-month`),f=document.getElementById(`next-month`);console.log(d);var p=new Date;function m(){let e=p.getFullYear(),t=p.getMonth(),n=new Date(e,t,1).getDay(),r=new Date(e,t+1,0).getDate();u.innerHTML=``,l.innerText=`${p.toLocaleDateString(`default`,{month:`long`})} ${e}`;for(let e=0;e<n;e++)u.innerHTML+=`<div class="empty"></div>`;for(let n=1;n<=r;n++){let r=new Date,i=n===r.getDate()&&e===r.getFullYear()&&t===r.getMonth();u.innerHTML+=`<div class="${i?`today`:``}">${n}</div>`}}d.addEventListener(`click`,()=>{p.setMonth(p.getMonth()-1),m()}),f.addEventListener(`click`,()=>{p.setMonth(p.getMonth()+1),m()}),m();var h=document.querySelector(`.info-panel`),g=document.querySelector(`.panel-close-button`);document.querySelector(`.info-panel-button`).addEventListener(`click`,()=>{let e=document.querySelector(`.panel-container`),t=n;e.textContent.trim()===``&&(e.innerHTML=t),h.classList.add(`open`)}),g.addEventListener(`click`,()=>{h.classList.remove(`open`)});var _=document.getElementById(`nav-expand`),v=document.getElementById(`nav-expand-list`);document.getElementById(`nav-expand-icon`),_.addEventListener(`click`,()=>{v.classList.toggle(`show-list`)}),window.openImage=s;var y=`/campus-prototype/assets/main-map-Dd2UW5zk.svg`,b=`/campus-prototype/assets/main-bldg-ground-B91OwHog.svg`,x=`/campus-prototype/assets/main-bldg-upper-DjCqcDEs.svg`;function S(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t&&C(e.prototype,t),n&&C(e,n),e}var T=Object.defineProperty,E=function(e,t){return T(e,`name`,{value:t,configurable:!0})},D=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="m8.94 8 4.2-4.193a.67.67 0 0 0-.947-.947L8 7.06l-4.193-4.2a.67.67 0 1 0-.947.947L7.06 8l-4.2 4.193a.667.667 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L8 8.94l4.193 4.2a.666.666 0 0 0 1.094-.217.665.665 0 0 0-.147-.73L8.94 8Z" fill="currentColor"/>\r
</svg>\r
`,O=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24A10.667 10.667 0 0 1 5.333 16a10.56 10.56 0 0 1 2.254-6.533l14.946 14.946A10.56 10.56 0 0 1 16 26.667Zm8.413-4.134L9.467 7.587A10.56 10.56 0 0 1 16 5.333 10.667 10.667 0 0 1 26.667 16a10.56 10.56 0 0 1-2.254 6.533Z" fill="currentColor"/>\r
</svg>\r
`,k=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M16 14.667A1.333 1.333 0 0 0 14.667 16v5.333a1.333 1.333 0 0 0 2.666 0V16A1.333 1.333 0 0 0 16 14.667Zm.507-5.227a1.333 1.333 0 0 0-1.014 0 1.334 1.334 0 0 0-.44.28 1.56 1.56 0 0 0-.28.44c-.075.158-.11.332-.106.507a1.332 1.332 0 0 0 .386.946c.13.118.279.213.44.28a1.334 1.334 0 0 0 1.84-1.226 1.4 1.4 0 0 0-.386-.947 1.334 1.334 0 0 0-.44-.28ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>\r
</svg>\r
`,A=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="m19.627 11.72-5.72 5.733-2.2-2.2a1.334 1.334 0 1 0-1.88 1.881l3.133 3.146a1.333 1.333 0 0 0 1.88 0l6.667-6.667a1.333 1.333 0 1 0-1.88-1.893ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>\r
</svg>\r
`,j=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M16.334 17.667a1.334 1.334 0 0 0 1.334-1.333v-5.333a1.333 1.333 0 0 0-2.665 0v5.333a1.333 1.333 0 0 0 1.33 1.333Zm-.508 5.227c.325.134.69.134 1.014 0 .165-.064.314-.159.44-.28a1.56 1.56 0 0 0 .28-.44c.076-.158.112-.332.107-.507a1.332 1.332 0 0 0-.387-.946 1.532 1.532 0 0 0-.44-.28 1.334 1.334 0 0 0-1.838 1.226 1.4 1.4 0 0 0 .385.947c.127.121.277.216.44.28Zm.508 6.773a13.333 13.333 0 1 0 0-26.667 13.333 13.333 0 0 0 0 26.667Zm0-24A10.667 10.667 0 1 1 16.54 27a10.667 10.667 0 0 1-.206-21.333Z" fill="currentColor"/>\r
</svg>\r
`,M=E(function(e){return new DOMParser().parseFromString(e,`text/html`).body.childNodes[0]},`stringToHTML`),N=E(function(e){var t=new DOMParser().parseFromString(e,`application/xml`);return document.importNode(t.documentElement,!0).outerHTML},`getSvgNode`),P={CONTAINER:`sn-notifications-container`,NOTIFY:`sn-notify`,NOTIFY_CONTENT:`sn-notify-content`,NOTIFY_ICON:`sn-notify-icon`,NOTIFY_CLOSE:`sn-notify-close`,NOTIFY_TITLE:`sn-notify-title`,NOTIFY_TEXT:`sn-notify-text`,IS_X_CENTER:`sn-is-x-center`,IS_Y_CENTER:`sn-is-y-center`,IS_CENTER:`sn-is-center`,IS_LEFT:`sn-is-left`,IS_RIGHT:`sn-is-right`,IS_TOP:`sn-is-top`,IS_BOTTOM:`sn-is-bottom`,NOTIFY_OUTLINE:`sn-notify-outline`,NOTIFY_FILLED:`sn-notify-filled`,NOTIFY_ERROR:`sn-notify-error`,NOTIFY_WARNING:`sn-notify-warning`,NOTIFY_SUCCESS:`sn-notify-success`,NOTIFY_INFO:`sn-notify-info`,NOTIFY_FADE:`sn-notify-fade`,NOTIFY_FADE_IN:`sn-notify-fade-in`,NOTIFY_SLIDE:`sn-notify-slide`,NOTIFY_SLIDE_IN:`sn-notify-slide-in`,NOTIFY_AUTOCLOSE:`sn-notify-autoclose`},F={ERROR:`error`,WARNING:`warning`,SUCCESS:`success`,INFO:`info`},I={OUTLINE:`outline`,FILLED:`filled`},L={FADE:`fade`,SLIDE:`slide`},R={CLOSE:N(D),SUCCESS:N(A),ERROR:N(O),WARNING:N(j),INFO:N(k)},z=E(function(e){e.wrapper.classList.add(P.NOTIFY_FADE),setTimeout(function(){e.wrapper.classList.add(P.NOTIFY_FADE_IN)},100)},`fadeIn`),B=E(function(e){e.wrapper.classList.remove(P.NOTIFY_FADE_IN),setTimeout(function(){e.wrapper.remove()},e.speed)},`fadeOut`),ee=E(function(e){e.wrapper.classList.add(P.NOTIFY_SLIDE),setTimeout(function(){e.wrapper.classList.add(P.NOTIFY_SLIDE_IN)},100)},`slideIn`),te=E(function(e){e.wrapper.classList.remove(P.NOTIFY_SLIDE_IN),setTimeout(function(){e.wrapper.remove()},e.speed)},`slideOut`),V=function(){function e(t){var n=this;S(this,e),this.notifyOut=E(function(e){e(n)},`notifyOut`);var r=t.notificationsGap,i=r===void 0?20:r,a=t.notificationsPadding,o=a===void 0?20:a,s=t.status,c=s===void 0?`success`:s,l=t.effect,u=l===void 0?L.FADE:l,d=t.type,f=d===void 0?`outline`:d,p=t.title,m=t.text,h=t.showIcon,g=h===void 0||h,_=t.customIcon,v=_===void 0?``:_,y=t.customClass,b=y===void 0?``:y,x=t.speed,C=x===void 0?500:x,w=t.showCloseButton,T=w===void 0||w,D=t.autoclose,O=D===void 0||D,k=t.autotimeout,A=k===void 0?3e3:k,j=t.position,M=j===void 0?`right top`:j,N=t.customWrapper,P=N===void 0?``:N;this.customWrapper=P,this.status=c,this.title=p,this.text=m,this.showIcon=g,this.customIcon=v,this.customClass=b,this.speed=C,this.effect=u,this.showCloseButton=T,this.autoclose=O,this.autotimeout=A,this.notificationsGap=i,this.notificationsPadding=o,this.type=f,this.position=M,this.checkRequirements()?(this.setContainer(),this.setWrapper(),this.setPosition(),this.showIcon&&this.setIcon(),this.showCloseButton&&this.setCloseButton(),this.setContent(),this.container.prepend(this.wrapper),this.setEffect(),this.notifyIn(this.selectedNotifyInEffect),this.autoclose&&this.autoClose(),this.setObserver()):console.error(`You must specify 'title' or 'text' at least.`)}return w(e,[{key:`checkRequirements`,value:function(){return!!(this.title||this.text)}},{key:`setContainer`,value:function(){var e=document.querySelector(`.${P.CONTAINER}`);e?this.container=e:(this.container=document.createElement(`div`),this.container.classList.add(P.CONTAINER),document.body.appendChild(this.container)),this.notificationsPadding&&this.container.style.setProperty(`--sn-notifications-padding`,`${this.notificationsPadding}px`),this.notificationsGap&&this.container.style.setProperty(`--sn-notifications-gap`,`${this.notificationsGap}px`)}},{key:`setPosition`,value:function(){this.container.classList[this.position===`center`?`add`:`remove`](P.IS_CENTER),this.container.classList[this.position.includes(`left`)?`add`:`remove`](P.IS_LEFT),this.container.classList[this.position.includes(`right`)?`add`:`remove`](P.IS_RIGHT),this.container.classList[this.position.includes(`top`)?`add`:`remove`](P.IS_TOP),this.container.classList[this.position.includes(`bottom`)?`add`:`remove`](P.IS_BOTTOM),this.container.classList[this.position.includes(`x-center`)?`add`:`remove`](P.IS_X_CENTER),this.container.classList[this.position.includes(`y-center`)?`add`:`remove`](P.IS_Y_CENTER)}},{key:`setCloseButton`,value:function(){var e=this,t=document.createElement(`div`);t.classList.add(P.NOTIFY_CLOSE),t.innerHTML=R.CLOSE,this.wrapper.appendChild(t),t.addEventListener(`click`,function(){e.close()})}},{key:`setWrapper`,value:function(){var e=this;switch(this.wrapper=this.customWrapper?M(this.customWrapper):document.createElement(`div`),this.wrapper.style.setProperty(`--sn-notify-transition-duration`,`${this.speed}ms`),this.wrapper.classList.add(P.NOTIFY),this.type){case I.OUTLINE:this.wrapper.classList.add(P.NOTIFY_OUTLINE);break;case I.FILLED:this.wrapper.classList.add(P.NOTIFY_FILLED);break;default:this.wrapper.classList.add(P.NOTIFY_OUTLINE)}switch(this.status){case F.SUCCESS:this.wrapper.classList.add(P.NOTIFY_SUCCESS);break;case F.ERROR:this.wrapper.classList.add(P.NOTIFY_ERROR);break;case F.WARNING:this.wrapper.classList.add(P.NOTIFY_WARNING);break;case F.INFO:this.wrapper.classList.add(P.NOTIFY_INFO)}this.autoclose&&(this.wrapper.classList.add(P.NOTIFY_AUTOCLOSE),this.wrapper.style.setProperty(`--sn-notify-autoclose-timeout`,`${this.autotimeout+this.speed}ms`)),this.customClass&&this.customClass.split(` `).forEach(function(t){e.wrapper.classList.add(t)})}},{key:`setContent`,value:function(){var e=document.createElement(`div`);e.classList.add(P.NOTIFY_CONTENT);var t,n;this.title&&(t=document.createElement(`div`),t.classList.add(P.NOTIFY_TITLE),t.textContent=this.title.trim(),this.showCloseButton||(t.style.paddingRight=`0`)),this.text&&(n=document.createElement(`div`),n.classList.add(P.NOTIFY_TEXT),n.innerHTML=this.text.trim(),this.title||(n.style.marginTop=`0`)),this.wrapper.appendChild(e),this.title&&e.appendChild(t),this.text&&e.appendChild(n)}},{key:`setIcon`,value:function(){var e=E(function(e){switch(e){case F.SUCCESS:return R.SUCCESS;case F.ERROR:return R.ERROR;case F.WARNING:return R.WARNING;case F.INFO:return R.INFO}},`computedIcon`),t=document.createElement(`div`);t.classList.add(P.NOTIFY_ICON),t.innerHTML=this.customIcon||e(this.status),(this.status||this.customIcon)&&this.wrapper.appendChild(t)}},{key:`setObserver`,value:function(){var e=this,t=new IntersectionObserver(function(t){if(t[0].intersectionRatio<=0)e.close();else return},{threshold:0});setTimeout(function(){t.observe(e.wrapper)},this.speed)}},{key:`notifyIn`,value:function(e){e(this)}},{key:`autoClose`,value:function(){var e=this;setTimeout(function(){e.close()},this.autotimeout+this.speed)}},{key:`close`,value:function(){this.notifyOut(this.selectedNotifyOutEffect)}},{key:`setEffect`,value:function(){switch(this.effect){case L.FADE:this.selectedNotifyInEffect=z,this.selectedNotifyOutEffect=B;break;case L.SLIDE:this.selectedNotifyInEffect=ee,this.selectedNotifyOutEffect=te;break;default:this.selectedNotifyInEffect=z,this.selectedNotifyOutEffect=B}}}]),e}();E(V,`Notify`);var ne=V;globalThis.Notify=ne;var H=`bottom`,U=`right`,W=`left`,re=`auto`,G=[`top`,H,U,W],ie=`start`,ae=`clippingParents`,oe=`viewport`,se=`popper`,ce=`reference`,le=G.reduce(function(e,t){return e.concat([t+`-`+ie,t+`-end`])},[]),ue=[].concat(G,[re]).reduce(function(e,t){return e.concat([t,t+`-`+ie,t+`-end`])},[]),K=[`beforeRead`,`read`,`afterRead`,`beforeMain`,`main`,`afterMain`,`beforeWrite`,`write`,`afterWrite`];function q(e){return e?(e.nodeName||``).toLowerCase():null}function J(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Y(e){return e instanceof J(e).Element||e instanceof Element}function X(e){return e instanceof J(e).HTMLElement||e instanceof HTMLElement}function de(e){return typeof ShadowRoot>`u`?!1:e instanceof J(e).ShadowRoot||e instanceof ShadowRoot}function fe(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];X(i)&&q(i)&&(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];t===!1?i.removeAttribute(e):i.setAttribute(e,t===!0?``:t)}))})}function pe(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});X(r)&&q(r)&&(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}}var me={name:`applyStyles`,enabled:!0,phase:`write`,fn:fe,effect:pe,requires:[`computeStyles`]};function Z(e){return e.split(`-`)[0]}var he=Math.max,ge=Math.min,_e=Math.round;function ve(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function ye(){return!/^((?!chrome|android).)*safari/i.test(ve())}function be(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&X(e)&&(i=e.offsetWidth>0&&_e(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&_e(r.height)/e.offsetHeight||1);var o=(Y(e)?J(e):window).visualViewport,s=!ye()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function xe(e){var t=be(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Se(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&de(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ce(e){return J(e).getComputedStyle(e)}function we(e){return[`table`,`td`,`th`].indexOf(q(e))>=0}function Te(e){return((Y(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ee(e){return q(e)===`html`?e:e.assignedSlot||e.parentNode||(de(e)?e.host:null)||Te(e)}function De(e){return!X(e)||Ce(e).position===`fixed`?null:e.offsetParent}function Oe(e){var t=/firefox/i.test(ve());if(/Trident/i.test(ve())&&X(e)&&Ce(e).position===`fixed`)return null;var n=Ee(e);for(de(n)&&(n=n.host);X(n)&&[`html`,`body`].indexOf(q(n))<0;){var r=Ce(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}function ke(e){for(var t=J(e),n=De(e);n&&we(n)&&Ce(n).position===`static`;)n=De(n);return n&&(q(n)===`html`||q(n)===`body`&&Ce(n).position===`static`)?t:n||Oe(e)||t}function Ae(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function je(e,t,n){return he(e,ge(t,n))}function Me(e,t,n){var r=je(e,t,n);return r>n?n:r}function Ne(){return{top:0,right:0,bottom:0,left:0}}function Pe(e){return Object.assign({},Ne(),e)}function Fe(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var Ie=function(e,t){return e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e,Pe(typeof e==`number`?Fe(e,G):e)};function Le(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=Z(n.placement),c=Ae(s),l=[`left`,`right`].indexOf(s)>=0?`height`:`width`;if(a&&o){var u=Ie(i.padding,n),d=xe(a),f=c===`y`?`top`:W,p=c===`y`?H:U,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=ke(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[f],b=_-d[l]-u[p],x=_/2-d[l]/2+v,S=je(y,x,b),C=c;n.modifiersData[r]=(t={},t[C]=S,t.centerOffset=S-x,t)}}function Re(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r==`string`&&(r=t.elements.popper.querySelector(r),!r)||Se(t.elements.popper,r)&&(t.elements.arrow=r))}var ze={name:`arrow`,enabled:!0,phase:`main`,fn:Le,effect:Re,requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function Be(e){return e.split(`-`)[1]}var Ve={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function He(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:_e(n*i)/i||0,y:_e(r*i)/i||0}}function Ue(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),v=o.hasOwnProperty(`y`),y=W,b=`top`,x=window;if(l){var S=ke(n),C=`clientHeight`,w=`clientWidth`;if(S===J(n)&&(S=Te(n),Ce(S).position!==`static`&&s===`absolute`&&(C=`scrollHeight`,w=`scrollWidth`)),S=S,i===`top`||(i===`left`||i===`right`)&&a===`end`){b=H;var T=d&&S===x&&x.visualViewport?x.visualViewport.height:S[C];h-=T-r.height,h*=c?1:-1}if(i===`left`||(i===`top`||i===`bottom`)&&a===`end`){y=U;var E=d&&S===x&&x.visualViewport?x.visualViewport.width:S[w];p-=E-r.width,p*=c?1:-1}}var D=Object.assign({position:s},l&&Ve),O=u===!0?He({x:p,y:h},J(n)):{x:p,y:h};if(p=O.x,h=O.y,c){var k;return Object.assign({},D,(k={},k[b]=v?`0`:``,k[y]=_?`0`:``,k.transform=(x.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,k))}return Object.assign({},D,(t={},t[b]=v?h+`px`:``,t[y]=_?p+`px`:``,t.transform=``,t))}function We(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0||r,a=n.adaptive,o=a===void 0||a,s=n.roundOffsets,c=s===void 0||s,l={placement:Z(t.placement),variation:Be(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ue(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ue(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Ge={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:We,data:{}},Ke={passive:!0};function qe(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0||i,o=r.resize,s=o===void 0||o,c=J(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,Ke)}),s&&c.addEventListener(`resize`,n.update,Ke),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,Ke)}),s&&c.removeEventListener(`resize`,n.update,Ke)}}var Je={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:qe,data:{}},Ye={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Xe(e){return e.replace(/left|right|bottom|top/g,function(e){return Ye[e]})}var Ze={start:`end`,end:`start`};function Qe(e){return e.replace(/start|end/g,function(e){return Ze[e]})}function $e(e){var t=J(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function et(e){return be(Te(e)).left+$e(e).scrollLeft}function tt(e,t){var n=J(e),r=Te(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=ye();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+et(e),y:c}}function nt(e){var t=Te(e),n=$e(e),r=e.ownerDocument?.body,i=he(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=he(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+et(e),s=-n.scrollTop;return Ce(r||t).direction===`rtl`&&(o+=he(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}function rt(e){var t=Ce(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function it(e){return[`html`,`body`,`#document`].indexOf(q(e))>=0?e.ownerDocument.body:X(e)&&rt(e)?e:it(Ee(e))}function at(e,t){t===void 0&&(t=[]);var n=it(e),r=n===e.ownerDocument?.body,i=J(n),a=r?[i].concat(i.visualViewport||[],rt(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(at(Ee(a)))}function ot(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function st(e,t){var n=be(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function ct(e,t,n){return t===`viewport`?ot(tt(e,n)):Y(t)?st(t,n):ot(nt(Te(e)))}function lt(e){var t=at(Ee(e)),n=[`absolute`,`fixed`].indexOf(Ce(e).position)>=0&&X(e)?ke(e):e;return Y(n)?t.filter(function(e){return Y(e)&&Se(e,n)&&q(e)!==`body`}):[]}function ut(e,t,n,r){var i=t===`clippingParents`?lt(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=ct(e,n,r);return t.top=he(i.top,t.top),t.right=ge(i.right,t.right),t.bottom=ge(i.bottom,t.bottom),t.left=he(i.left,t.left),t},ct(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function dt(e){var t=e.reference,n=e.element,r=e.placement,i=r?Z(r):null,a=r?Be(r):null,o=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(i){case`top`:c={x:o,y:t.y-n.height};break;case H:c={x:o,y:t.y+t.height};break;case U:c={x:t.x+t.width,y:s};break;case W:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var l=i?Ae(i):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(a){case ie:c[l]=c[l]-(t[u]/2-n[u]/2);break;case`end`:c[l]=c[l]+(t[u]/2-n[u]/2)}}return c}function ft(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?ae:s,l=n.rootBoundary,u=l===void 0?oe:l,d=n.elementContext,f=d===void 0?se:d,p=n.altBoundary,m=p!==void 0&&p,h=n.padding,g=h===void 0?0:h,_=Pe(typeof g==`number`?Fe(g,G):g),v=f===`popper`?ce:se,y=e.rects.popper,b=e.elements[m?v:f],x=ut(Y(b)?b:b.contextElement||Te(e.elements.popper),c,u,o),S=be(e.elements.reference),C=dt({reference:S,element:y,strategy:`absolute`,placement:i}),w=ot(Object.assign({},y,C)),T=f===`popper`?w:S,E={top:x.top-T.top+_.top,bottom:T.bottom-x.bottom+_.bottom,left:x.left-T.left+_.left,right:T.right-x.right+_.right},D=e.modifiersData.offset;if(f===`popper`&&D){var O=D[i];Object.keys(E).forEach(function(e){var t=[`right`,`bottom`].indexOf(e)>=0?1:-1,n=[`top`,`bottom`].indexOf(e)>=0?`y`:`x`;E[e]+=O[n]*t})}return E}function pt(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?ue:c,u=Be(r),d=u?s?le:le.filter(function(e){return Be(e)===u}):G,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=ft(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[Z(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}function mt(e){if(Z(e)===`auto`)return[];var t=Xe(e);return[Qe(e),t,Qe(t)]}function ht(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o===void 0||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0||p,h=n.allowedAutoPlacements,g=t.options.placement,_=Z(g)===g,v=c||(_||!m?[Xe(g)]:mt(g)),y=[g].concat(v).reduce(function(e,n){return e.concat(Z(n)===`auto`?pt(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),b=t.rects.reference,x=t.rects.popper,S=new Map,C=!0,w=y[0],T=0;T<y.length;T++){var E=y[T],D=Z(E),O=Be(E)===ie,k=[`top`,H].indexOf(D)>=0,A=k?`width`:`height`,j=ft(t,{placement:E,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),M=k?O?U:W:O?H:`top`;b[A]>x[A]&&(M=Xe(M));var N=Xe(M),P=[];if(a&&P.push(j[D]<=0),s&&P.push(j[M]<=0,j[N]<=0),P.every(function(e){return e})){w=E,C=!1;break}S.set(E,P)}if(C)for(var F=m?3:1,I=function(e){var t=y.find(function(t){var n=S.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return w=t,`break`},L=F;L>0&&I(L)!==`break`;L--);t.placement!==w&&(t.modifiersData[r]._skip=!0,t.placement=w,t.reset=!0)}}var gt={name:`flip`,enabled:!0,phase:`main`,fn:ht,requiresIfExists:[`offset`],data:{_skip:!1}};function _t(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function vt(e){return[`top`,U,H,W].some(function(t){return e[t]>=0})}function yt(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=ft(t,{elementContext:`reference`}),s=ft(t,{altBoundary:!0}),c=_t(o,r),l=_t(s,i,a),u=vt(c),d=vt(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var bt={name:`hide`,enabled:!0,phase:`main`,requiresIfExists:[`preventOverflow`],fn:yt};function xt(e,t,n){var r=Z(e),i=[`left`,`top`].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[`left`,`right`].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function St(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=ue.reduce(function(e,n){return e[n]=xt(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}var Ct={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:St};function wt(e){var t=e.state,n=e.name;t.modifiersData[n]=dt({reference:t.rects.reference,element:t.rects.popper,strategy:`absolute`,placement:t.placement})}var Tt={name:`popperOffsets`,enabled:!0,phase:`read`,fn:wt,data:{}};function Et(e){return e===`x`?`y`:`x`}function Dt(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o!==void 0&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0||f,m=n.tetherOffset,h=m===void 0?0:m,g=ft(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=Z(t.placement),v=Be(t.placement),y=!v,b=Ae(_),x=Et(b),S=t.modifiersData.popperOffsets,C=t.rects.reference,w=t.rects.popper,T=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,E=typeof T==`number`?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,O={x:0,y:0};if(S){if(a){var k=b===`y`?`top`:W,A=b===`y`?H:U,j=b===`y`?`height`:`width`,M=S[b],N=M+g[k],P=M-g[A],F=p?-w[j]/2:0,I=v===`start`?C[j]:w[j],L=v===`start`?-w[j]:-C[j],R=t.elements.arrow,z=p&&R?xe(R):{width:0,height:0},B=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:Ne(),ee=B[k],te=B[A],V=je(0,C[j],z[j]),ne=y?C[j]/2-F-V-ee-E.mainAxis:I-V-ee-E.mainAxis,re=y?-C[j]/2+F+V+te+E.mainAxis:L+V+te+E.mainAxis,G=t.elements.arrow&&ke(t.elements.arrow),ie=G?b===`y`?G.clientTop||0:G.clientLeft||0:0,ae=D?.[b]??0,oe=M+ne-ae-ie,se=M+re-ae,ce=je(p?ge(N,oe):N,M,p?he(P,se):P);S[b]=ce,O[b]=ce-M}if(s){var le=b===`x`?`top`:W,ue=b===`x`?H:U,K=S[x],q=x===`y`?`height`:`width`,J=K+g[le],Y=K-g[ue],X=[`top`,W].indexOf(_)!==-1,de=D?.[x]??0,fe=X?J:K-C[q]-w[q]-de+E.altAxis,pe=X?K+C[q]+w[q]-de-E.altAxis:Y,me=p&&X?Me(fe,K,pe):je(p?fe:J,K,p?pe:Y);S[x]=me,O[x]=me-K}t.modifiersData[r]=O}}var Ot={name:`preventOverflow`,enabled:!0,phase:`main`,fn:Dt,requiresIfExists:[`offset`]};function kt(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function At(e){return e===J(e)||!X(e)?$e(e):kt(e)}function jt(e){var t=e.getBoundingClientRect(),n=_e(t.width)/e.offsetWidth||1,r=_e(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Mt(e,t,n){n===void 0&&(n=!1);var r=X(t),i=X(t)&&jt(t),a=Te(t),o=be(e,i,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((q(t)!==`body`||rt(a))&&(s=At(t)),X(t)?(c=be(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=et(a))),{x:o.left+s.scrollLeft-c.x,y:o.top+s.scrollTop-c.y,width:o.width,height:o.height}}function Nt(e){var t=new Map,n=new Set,r=[];e.forEach(function(e){t.set(e.name,e)});function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){n.has(e.name)||i(e)}),r}function Pt(e){var t=Nt(e);return K.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}function Ft(e){var t;return function(){return t||=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})}),t}}function It(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}var Lt={placement:`bottom`,modifiers:[],strategy:`absolute`};function Rt(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function zt(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?Lt:i;return function(e,t,n){n===void 0&&(n=a);var i={placement:`bottom`,orderedModifiers:[],options:Object.assign({},Lt,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],s=!1,c={state:i,setOptions:function(n){var o=typeof n==`function`?n(i.options):n;u(),i.options=Object.assign({},a,i.options,o),i.scrollParents={reference:Y(e)?at(e):e.contextElement?at(e.contextElement):[],popper:at(t)};var s=Pt(It([].concat(r,i.options.modifiers)));return i.orderedModifiers=s.filter(function(e){return e.enabled}),l(),c.update()},forceUpdate:function(){if(!s){var e=i.elements,t=e.reference,n=e.popper;if(Rt(t,n)){i.rects={reference:Mt(t,ke(n),i.options.strategy===`fixed`),popper:xe(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(e){return i.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<i.orderedModifiers.length;r++)if(i.reset===!0)i.reset=!1,r=-1;else{var a=i.orderedModifiers[r],o=a.fn,l=a.options,u=l===void 0?{}:l,d=a.name;typeof o==`function`&&(i=o({state:i,options:u,name:d,instance:c})||i)}}}},update:Ft(function(){return new Promise(function(e){c.forceUpdate(),e(i)})}),destroy:function(){u(),s=!0}};if(!Rt(e,t))return c;c.setOptions(n).then(function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)});function l(){i.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,a=e.effect;if(typeof a==`function`){var s=a({state:i,name:t,instance:c,options:r});o.push(s||function(){})}})}function u(){o.forEach(function(e){return e()}),o=[]}return c}}var Bt=zt({defaultModifiers:[Je,Tt,Ge,me,Ct,gt,Ot,ze,bt]}),Vt=`tippy-box`,Ht=`tippy-content`,Ut=`tippy-backdrop`,Wt=`tippy-arrow`,Gt=`tippy-svg-arrow`,Kt={passive:!0,capture:!0},qt=function(){return document.body};function Jt(e,t,n){return Array.isArray(e)?e[t]??(Array.isArray(n)?n[t]:n):e}function Yt(e,t){var n={}.toString.call(e);return n.indexOf(`[object`)===0&&n.indexOf(t+`]`)>-1}function Xt(e,t){return typeof e==`function`?e.apply(void 0,t):e}function Zt(e,t){if(t===0)return e;var n;return function(r){clearTimeout(n),n=setTimeout(function(){e(r)},t)}}function Qt(e){return e.split(/\s+/).filter(Boolean)}function $t(e){return[].concat(e)}function en(e,t){e.indexOf(t)===-1&&e.push(t)}function tn(e){return e.filter(function(t,n){return e.indexOf(t)===n})}function nn(e){return e.split(`-`)[0]}function rn(e){return[].slice.call(e)}function an(e){return Object.keys(e).reduce(function(t,n){return e[n]!==void 0&&(t[n]=e[n]),t},{})}function on(){return document.createElement(`div`)}function sn(e){return[`Element`,`Fragment`].some(function(t){return Yt(e,t)})}function cn(e){return Yt(e,`NodeList`)}function ln(e){return Yt(e,`MouseEvent`)}function un(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function dn(e){return sn(e)?[e]:cn(e)?rn(e):Array.isArray(e)?e:rn(document.querySelectorAll(e))}function fn(e,t){e.forEach(function(e){e&&(e.style.transitionDuration=t+`ms`)})}function pn(e,t){e.forEach(function(e){e&&e.setAttribute(`data-state`,t)})}function mn(e){var t,n=$t(e)[0];return n!=null&&(t=n.ownerDocument)!=null&&t.body?n.ownerDocument:document}function hn(e,t){var n=t.clientX,r=t.clientY;return e.every(function(e){var t=e.popperRect,i=e.popperState,a=e.props.interactiveBorder,o=nn(i.placement),s=i.modifiersData.offset;if(!s)return!0;var c=o===`bottom`?s.top.y:0,l=o===`top`?s.bottom.y:0,u=o===`right`?s.left.x:0,d=o===`left`?s.right.x:0,f=t.top-r+c>a,p=r-t.bottom-l>a,m=t.left-n+u>a,h=n-t.right-d>a;return f||p||m||h})}function gn(e,t,n){var r=t+`EventListener`;[`transitionend`,`webkitTransitionEnd`].forEach(function(t){e[r](t,n)})}function _n(e,t){for(var n=t;n;){if(e.contains(n))return!0;n=n.getRootNode==null?void 0:n.getRootNode()?.host}return!1}var Q={isTouch:!1},vn=0;function yn(){Q.isTouch||(Q.isTouch=!0,window.performance&&document.addEventListener(`mousemove`,bn))}function bn(){var e=performance.now();e-vn<20&&(Q.isTouch=!1,document.removeEventListener(`mousemove`,bn)),vn=e}function xn(){var e=document.activeElement;if(un(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function Sn(){document.addEventListener(`touchstart`,yn,Kt),window.addEventListener(`blur`,xn)}var Cn=typeof window<`u`&&typeof document<`u`&&!!window.msCrypto,$=Object.assign({appendTo:qt,aria:{content:`auto`,expanded:`auto`},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:``,offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:`top`,plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:`mouseenter focus`,triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:`fade`,arrow:!0,content:``,inertia:!1,maxWidth:350,role:`tooltip`,theme:``,zIndex:9999}),wn=Object.keys($),Tn=function(e){Object.keys(e).forEach(function(t){$[t]=e[t]})};function En(e){var t=(e.plugins||[]).reduce(function(t,n){var r=n.name,i=n.defaultValue;return r&&(t[r]=e[r]===void 0?$[r]??i:e[r]),t},{});return Object.assign({},e,t)}function Dn(e,t){return(t?Object.keys(En(Object.assign({},$,{plugins:t}))):wn).reduce(function(t,n){var r=(e.getAttribute(`data-tippy-`+n)||``).trim();if(!r)return t;if(n===`content`)t[n]=r;else try{t[n]=JSON.parse(r)}catch{t[n]=r}return t},{})}function On(e,t){var n=Object.assign({},t,{content:Xt(t.content,[e])},t.ignoreAttributes?{}:Dn(e,t.plugins));return n.aria=Object.assign({},$.aria,n.aria),n.aria={expanded:n.aria.expanded===`auto`?t.interactive:n.aria.expanded,content:n.aria.content===`auto`?t.interactive?null:`describedby`:n.aria.content},n}var kn=function(){return`innerHTML`};function An(e,t){e[kn()]=t}function jn(e){var t=on();return e===!0?t.className=Wt:(t.className=Gt,sn(e)?t.appendChild(e):An(t,e)),t}function Mn(e,t){sn(t.content)?(An(e,``),e.appendChild(t.content)):typeof t.content!=`function`&&(t.allowHTML?An(e,t.content):e.textContent=t.content)}function Nn(e){var t=e.firstElementChild,n=rn(t.children);return{box:t,content:n.find(function(e){return e.classList.contains(Ht)}),arrow:n.find(function(e){return e.classList.contains(Wt)||e.classList.contains(Gt)}),backdrop:n.find(function(e){return e.classList.contains(Ut)})}}function Pn(e){var t=on(),n=on();n.className=Vt,n.setAttribute(`data-state`,`hidden`),n.setAttribute(`tabindex`,`-1`);var r=on();r.className=Ht,r.setAttribute(`data-state`,`hidden`),Mn(r,e.props),t.appendChild(n),n.appendChild(r),i(e.props,e.props);function i(n,r){var i=Nn(t),a=i.box,o=i.content,s=i.arrow;r.theme?a.setAttribute(`data-theme`,r.theme):a.removeAttribute(`data-theme`),typeof r.animation==`string`?a.setAttribute(`data-animation`,r.animation):a.removeAttribute(`data-animation`),r.inertia?a.setAttribute(`data-inertia`,``):a.removeAttribute(`data-inertia`),a.style.maxWidth=typeof r.maxWidth==`number`?r.maxWidth+`px`:r.maxWidth,r.role?a.setAttribute(`role`,r.role):a.removeAttribute(`role`),(n.content!==r.content||n.allowHTML!==r.allowHTML)&&Mn(o,e.props),r.arrow?s?n.arrow!==r.arrow&&(a.removeChild(s),a.appendChild(jn(r.arrow))):a.appendChild(jn(r.arrow)):s&&a.removeChild(s)}return{popper:t,onUpdate:i}}Pn.$$tippy=!0;var Fn=1,In=[],Ln=[];function Rn(e,t){var n=On(e,Object.assign({},$,En(an(t)))),r,i,a,o=!1,s=!1,c=!1,l=!1,u,d,f,p=[],m=Zt(G,n.interactiveDebounce),h,g=Fn++,_=null,v=tn(n.plugins),y={id:g,reference:e,popper:on(),popperInstance:_,props:n,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:v,clearDelayTimeouts:X,setProps:de,setContent:fe,show:pe,hide:me,hideWithInteractivity:Z,enable:J,disable:Y,unmount:he,destroy:ge};if(!n.render)return y;var b=n.render(y),x=b.popper,S=b.onUpdate;x.setAttribute(`data-tippy-root`,``),x.id=`tippy-`+y.id,y.popper=x,e._tippy=y,x._tippy=y;var C=v.map(function(e){return e.fn(y)}),w=e.hasAttribute(`aria-expanded`);return U(),F(),M(),N(`onCreate`,[y]),n.showOnCreate&&K(),x.addEventListener(`mouseenter`,function(){y.props.interactive&&y.state.isVisible&&y.clearDelayTimeouts()}),x.addEventListener(`mouseleave`,function(){y.props.interactive&&y.props.trigger.indexOf(`mouseenter`)>=0&&k().addEventListener(`mousemove`,m)}),y;function T(){var e=y.props.touch;return Array.isArray(e)?e:[e,0]}function E(){return T()[0]===`hold`}function D(){var e;return!!((e=y.props.render)!=null&&e.$$tippy)}function O(){return h||e}function k(){var e=O().parentNode;return e?mn(e):document}function A(){return Nn(x)}function j(e){return y.state.isMounted&&!y.state.isVisible||Q.isTouch||u&&u.type===`focus`?0:Jt(y.props.delay,+!e,$.delay)}function M(e){e===void 0&&(e=!1),x.style.pointerEvents=y.props.interactive&&!e?``:`none`,x.style.zIndex=``+y.props.zIndex}function N(e,t,n){if(n===void 0&&(n=!0),C.forEach(function(n){n[e]&&n[e].apply(n,t)}),n){var r;(r=y.props)[e].apply(r,t)}}function P(){var t=y.props.aria;if(t.content){var n=`aria-`+t.content,r=x.id;$t(y.props.triggerTarget||e).forEach(function(e){var t=e.getAttribute(n);if(y.state.isVisible)e.setAttribute(n,t?t+` `+r:r);else{var i=t&&t.replace(r,``).trim();i?e.setAttribute(n,i):e.removeAttribute(n)}})}}function F(){!w&&y.props.aria.expanded&&$t(y.props.triggerTarget||e).forEach(function(e){y.props.interactive?e.setAttribute(`aria-expanded`,y.state.isVisible&&e===O()?`true`:`false`):e.removeAttribute(`aria-expanded`)})}function I(){k().removeEventListener(`mousemove`,m),In=In.filter(function(e){return e!==m})}function L(t){if(!Q.isTouch||!c&&t.type!==`mousedown`){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!(y.props.interactive&&_n(x,n))){if($t(y.props.triggerTarget||e).some(function(e){return _n(e,n)})){if(Q.isTouch||y.state.isVisible&&y.props.trigger.indexOf(`click`)>=0)return}else N(`onClickOutside`,[y,t]);y.props.hideOnClick===!0&&(y.clearDelayTimeouts(),y.hide(),s=!0,setTimeout(function(){s=!1}),y.state.isMounted||ee())}}}function R(){c=!0}function z(){c=!1}function B(){var e=k();e.addEventListener(`mousedown`,L,!0),e.addEventListener(`touchend`,L,Kt),e.addEventListener(`touchstart`,z,Kt),e.addEventListener(`touchmove`,R,Kt)}function ee(){var e=k();e.removeEventListener(`mousedown`,L,!0),e.removeEventListener(`touchend`,L,Kt),e.removeEventListener(`touchstart`,z,Kt),e.removeEventListener(`touchmove`,R,Kt)}function te(e,t){ne(e,function(){!y.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&t()})}function V(e,t){ne(e,t)}function ne(e,t){var n=A().box;function r(e){e.target===n&&(gn(n,`remove`,r),t())}if(e===0)return t();gn(n,`remove`,d),gn(n,`add`,r),d=r}function H(t,n,r){r===void 0&&(r=!1),$t(y.props.triggerTarget||e).forEach(function(e){e.addEventListener(t,n,r),p.push({node:e,eventType:t,handler:n,options:r})})}function U(){E()&&(H(`touchstart`,re,{passive:!0}),H(`touchend`,ie,{passive:!0})),Qt(y.props.trigger).forEach(function(e){if(e!==`manual`)switch(H(e,re),e){case`mouseenter`:H(`mouseleave`,ie);break;case`focus`:H(Cn?`focusout`:`blur`,ae);break;case`focusin`:H(`focusout`,ae)}})}function W(){p.forEach(function(e){var t=e.node,n=e.eventType,r=e.handler,i=e.options;t.removeEventListener(n,r,i)}),p=[]}function re(e){var t=!1;if(!(!y.state.isEnabled||oe(e)||s)){var n=u?.type===`focus`;u=e,h=e.currentTarget,F(),!y.state.isVisible&&ln(e)&&In.forEach(function(t){return t(e)}),e.type===`click`&&(y.props.trigger.indexOf(`mouseenter`)<0||o)&&y.props.hideOnClick!==!1&&y.state.isVisible?t=!0:K(e),e.type===`click`&&(o=!t),t&&!n&&q(e)}}function G(e){var t=e.target,r=O().contains(t)||x.contains(t);e.type===`mousemove`&&r||hn(ue().concat(x).map(function(e){var t=e._tippy.popperInstance?.state;return t?{popperRect:e.getBoundingClientRect(),popperState:t,props:n}:null}).filter(Boolean),e)&&(I(),q(e))}function ie(e){oe(e)||y.props.trigger.indexOf(`click`)>=0&&o||(y.props.interactive?y.hideWithInteractivity(e):q(e))}function ae(e){y.props.trigger.indexOf(`focusin`)<0&&e.target!==O()||y.props.interactive&&e.relatedTarget&&x.contains(e.relatedTarget)||q(e)}function oe(e){return Q.isTouch?E()!==e.type.indexOf(`touch`)>=0:!1}function se(){ce();var t=y.props,n=t.popperOptions,r=t.placement,i=t.offset,a=t.getReferenceClientRect,o=t.moveTransition,s=D()?Nn(x).arrow:null,c=a?{getBoundingClientRect:a,contextElement:a.contextElement||O()}:e,l=[{name:`offset`,options:{offset:i}},{name:`preventOverflow`,options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:`flip`,options:{padding:5}},{name:`computeStyles`,options:{adaptive:!o}},{name:`$$tippy`,enabled:!0,phase:`beforeWrite`,requires:[`computeStyles`],fn:function(e){var t=e.state;if(D()){var n=A().box;[`placement`,`reference-hidden`,`escaped`].forEach(function(e){e===`placement`?n.setAttribute(`data-placement`,t.placement):t.attributes.popper[`data-popper-`+e]?n.setAttribute(`data-`+e,``):n.removeAttribute(`data-`+e)}),t.attributes.popper={}}}}];D()&&s&&l.push({name:`arrow`,options:{element:s,padding:3}}),l.push.apply(l,n?.modifiers||[]),y.popperInstance=Bt(c,x,Object.assign({},n,{placement:r,onFirstUpdate:f,modifiers:l}))}function ce(){y.popperInstance&&=(y.popperInstance.destroy(),null)}function le(){var e=y.props.appendTo,t,n=O();t=y.props.interactive&&e===qt||e===`parent`?n.parentNode:Xt(e,[n]),t.contains(x)||t.appendChild(x),y.state.isMounted=!0,se()}function ue(){return rn(x.querySelectorAll(`[data-tippy-root]`))}function K(e){y.clearDelayTimeouts(),e&&N(`onTrigger`,[y,e]),B();var t=j(!0),n=T(),i=n[0],a=n[1];Q.isTouch&&i===`hold`&&a&&(t=a),t?r=setTimeout(function(){y.show()},t):y.show()}function q(e){if(y.clearDelayTimeouts(),N(`onUntrigger`,[y,e]),!y.state.isVisible)ee();else if(!(y.props.trigger.indexOf(`mouseenter`)>=0&&y.props.trigger.indexOf(`click`)>=0&&[`mouseleave`,`mousemove`].indexOf(e.type)>=0&&o)){var t=j(!1);t?i=setTimeout(function(){y.state.isVisible&&y.hide()},t):a=requestAnimationFrame(function(){y.hide()})}}function J(){y.state.isEnabled=!0}function Y(){y.hide(),y.state.isEnabled=!1}function X(){clearTimeout(r),clearTimeout(i),cancelAnimationFrame(a)}function de(t){if(!y.state.isDestroyed){N(`onBeforeUpdate`,[y,t]),W();var n=y.props,r=On(e,Object.assign({},n,an(t),{ignoreAttributes:!0}));y.props=r,U(),n.interactiveDebounce!==r.interactiveDebounce&&(I(),m=Zt(G,r.interactiveDebounce)),n.triggerTarget&&!r.triggerTarget?$t(n.triggerTarget).forEach(function(e){e.removeAttribute(`aria-expanded`)}):r.triggerTarget&&e.removeAttribute(`aria-expanded`),F(),M(),S&&S(n,r),y.popperInstance&&(se(),ue().forEach(function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})),N(`onAfterUpdate`,[y,t])}}function fe(e){y.setProps({content:e})}function pe(){var e=y.state.isVisible,t=y.state.isDestroyed,n=!y.state.isEnabled,r=Q.isTouch&&!y.props.touch,i=Jt(y.props.duration,0,$.duration);if(!(e||t||n||r)&&!O().hasAttribute(`disabled`)&&(N(`onShow`,[y],!1),y.props.onShow(y)!==!1)){if(y.state.isVisible=!0,D()&&(x.style.visibility=`visible`),M(),B(),y.state.isMounted||(x.style.transition=`none`),D()){var a=A(),o=a.box,s=a.content;fn([o,s],0)}f=function(){var e;if(y.state.isVisible&&!l){if(l=!0,x.offsetHeight,x.style.transition=y.props.moveTransition,D()&&y.props.animation){var t=A(),n=t.box,r=t.content;fn([n,r],i),pn([n,r],`visible`)}P(),F(),en(Ln,y),(e=y.popperInstance)==null||e.forceUpdate(),N(`onMount`,[y]),y.props.animation&&D()&&V(i,function(){y.state.isShown=!0,N(`onShown`,[y])})}},le()}}function me(){var e=!y.state.isVisible,t=y.state.isDestroyed,n=!y.state.isEnabled,r=Jt(y.props.duration,1,$.duration);if(!(e||t||n)&&(N(`onHide`,[y],!1),y.props.onHide(y)!==!1)){if(y.state.isVisible=!1,y.state.isShown=!1,l=!1,o=!1,D()&&(x.style.visibility=`hidden`),I(),ee(),M(!0),D()){var i=A(),a=i.box,s=i.content;y.props.animation&&(fn([a,s],r),pn([a,s],`hidden`))}P(),F(),y.props.animation?D()&&te(r,y.unmount):y.unmount()}}function Z(e){k().addEventListener(`mousemove`,m),en(In,m),m(e)}function he(){y.state.isVisible&&y.hide(),y.state.isMounted&&(ce(),ue().forEach(function(e){e._tippy.unmount()}),x.parentNode&&x.parentNode.removeChild(x),Ln=Ln.filter(function(e){return e!==y}),y.state.isMounted=!1,N(`onHidden`,[y]))}function ge(){y.state.isDestroyed||(y.clearDelayTimeouts(),y.unmount(),W(),delete e._tippy,y.state.isDestroyed=!0,N(`onDestroy`,[y]))}}function zn(e,t){t===void 0&&(t={});var n=$.plugins.concat(t.plugins||[]);Sn();var r=Object.assign({},t,{plugins:n}),i=dn(e).reduce(function(e,t){var n=t&&Rn(t,r);return n&&e.push(n),e},[]);return sn(e)?i[0]:i}zn.defaultProps=$,zn.setDefaultProps=Tn,zn.currentInput=Q,Object.assign({},me,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}}),zn.setDefaultProps({render:Pn});var Bn=document.getElementById(`fe-signage`),Vn=document.getElementById(`no-signage`),Hn=document.getElementById(`ee-signage`),Un=document.getElementById(`mp-signage`),Wn=document.getElementById(`print-map`),Gn=[Bn,Vn,Hn,Un],Kn=!1,qn=null,Jn=!1;function Yn(e){e.checked=localStorage.getItem(e.id)===`true`,Qn()}function Xn(e){localStorage.setItem(e.id,e.checked)}function Zn(){return Gn.some(e=>e.checked)}function Qn(){Zn()?Jn||Kn||(qn=new ne({status:`success`,title:`Modo señalética activo`,text:`<strong>La selección de sectores ha sido deshabilitada, desactive toda la señalética visible para volver al modo normal.</strong>`,effect:`slide`,speed:300,customClass:``,customIcon:``,showIcon:!0,showCloseButton:!0,autoclose:!1,autotimeout:3e3,notificationsGap:null,notificationsPadding:null,type:`outline`,position:`right bottom`,customWrapper:``}),Kn=!0,$n()):(qn?.close(),qn=null,Kn=!1,er())}function $n(){document.querySelectorAll(`[data-cell-id^="sector-"]`).forEach(e=>{e.style.display=`none`})}function er(){document.querySelectorAll(`[data-cell-id^="sector-"]`).forEach(e=>{e.style.display=`block`})}function tr(e,t){e.forEach(e=>{e.classList.toggle(`is-visible`,t)})}function nr(){let e=document.querySelectorAll(`[data-cell-id^="er-"]`),t=document.querySelectorAll(`[data-cell-id^="mp-"]`),n=document.querySelectorAll(`[data-cell-id^="ee-"]`),r=document.querySelectorAll(`[data-cell-id^="fe-"]`),i=document.querySelector(`[data-cell-id="no-01"]`),a=document.querySelector(`[data-cell-id="signage-title"]`),o=document.querySelector(`[data-cell-id="signage-note"]`),s=document.querySelectorAll(`[data-cell-id^="signage-text-"]`),c=document.querySelectorAll(`[data-cell-id^="signage-icon-"]`);a&&(a.style.display=`none`),o&&(o.style.display=`none`),s.forEach(e=>{e.style.display=`none`}),c.forEach(e=>{e.style.display=`none`}),Jn=!0,Gn.forEach(Yn),Un.onchange=()=>{Xn(Un),tr(e,Un.checked),tr(t,Un.checked),Qn()},Bn.onchange=()=>{Xn(Bn),tr(r,Bn.checked),Qn()},Hn.onchange=()=>{Xn(Hn),tr(n,Hn.checked),Qn()},Vn.onchange=()=>{Xn(Vn),i&&i.classList.toggle(`is-visible`,Vn.checked),Qn()},Gn.forEach(e=>e.dispatchEvent(new Event(`change`))),Jn=!1,Kn=!1,Qn(),zn(`[data-cell-id="fe-01"]`,{content:`
    <div class="signage-tooltip">
      <img
        src="/campus-prototype/images/fe-01.png"
        alt="Extintor"
      >
      <div>
        <strong>No. Extintor</strong>: 1
      </div>
      <div>
        <strong>Ubicación</strong>: edificio H
      </div>
      <div>
        <strong>Estado</strong>: operativo
      </div>
      <div>
        <strong>Descripción</strong>: equipo de protección contra incendios
      </div>
      <div>
        <strong>Último mantenimiento</strong>: 10/10/26
      </div>
    </div>
  `,allowHTML:!0,placement:`right`,animation:`fade`,theme:`campus`}),Wn.onclick=()=>{let e=document.createElement(`div`);e.innerHTML=`
      <div style="padding:20px;">
        <div style="display: flex; gap: 8px; align-items:center;">
          <i class="fa-solid fa-circle-info fa-2x"></i>
          <h2 style="color: #343D3A">Atención</h2>
        </div>
        <p style="margin-top: 20px; color: #343D3A;">
          La señalética que haya sido habilitada en la vista del mapa principal, es
          la misma que será visible en el mapa impreso.
        </p>
        <div style="
          display:flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;">
          <button id="print-map2" type="button" class="button-panel">
            Continuar<i class="fa-solid fa-angle-right fa-2x"></i>
          </button>
        </div>
      </div>
    `;let t=new WinBox({class:[`map-preview-window`],title:`Imprimir mapa`,x:`center`,y:`center`,background:`#e25619`,modal:!0,mount:e,index:1e3,width:`25%`,height:`28%`});e.querySelector(`#print-map2`).addEventListener(`click`,()=>{t.close();let e=document.getElementById(`map-container`)?.querySelector(`svg`),n=document.getElementById(`print-map-content`);if(!e){console.error(`The source map SVG was not found.`);return}if(!n){console.error(`The print map container was not found.`);return}n.replaceChildren();let r=e.cloneNode(!0);r.querySelectorAll(`[data-cell-id^="text-"]`).forEach(e=>e.remove());let i=r.querySelector(`[data-cell-id="explore-campus-text-box"]`),a=r.querySelector(`[data-cell-id="explore-campus-icon"]`);i&&(i.style.display=`none`),a&&(a.style.display=`none`);let o=r.querySelector(`[data-cell-id="signage-title"]`),s=r.querySelector(`[data-cell-id="signage-note"]`);o&&(o.style.display=`block`),s&&(s.style.display=`block`);let c={fe:Bn,ee:Hn,er:Un,mp:Un,no:Vn};r.querySelectorAll(`[data-cell-id^="signage-icon-"], [data-cell-id^="signage-text-"]`).forEach(e=>{e.style.display=`block`;let t=e.getAttribute(`data-cell-id`).replace(/^signage-(icon|text)-/,``),n=c[t];n&&e.classList.toggle(`is-disabled`,!n.checked)}),n.replaceChildren(r),window.print()})}}var rr={c1:{title:`Sector C1`,description:`Caseta acceso principal`,icon:`fa-solid fa-tower-observation fa-2x`},h:{title:`Sector H`,description:`Sector principal`,icon:`fa-regular fa-building fa-2x`},d:{title:`Sector D`,description:`Orientación y domo deportivo`,icon:`fa-solid fa-landmark-dome fa-2x`},m:{title:`Sector M`,description:`Aulas móviles`,icon:`fa-solid fa-people-roof fa-2x`},c2:{title:`Sector C2`,description:`Caseta acceso estacionamiento`,icon:`fa-solid fa-tower-observation fa-2x`}};function ir(){document.getElementById(`map-container`);let e=document.querySelector(`[data-cell-id='h-library']`),t=document.querySelector(`[data-cell-id='h-computer-center']`),n=document.querySelector(`.panel-container`),r=document.querySelector(`.info-panel`);e.addEventListener(`click`,()=>{let e=document.getElementById(`h-library`).content.cloneNode(!0);n.innerHTML=``,n.appendChild(e),r.classList.add(`open`)}),t.addEventListener(`click`,()=>{let e=document.getElementById(`h-computer-center`).content.cloneNode(!0);n.innerHTML=``,n.appendChild(e),r.classList.add(`open`)})}var ar=`<!-- Sector H information panel -->
<section id="panel-h-classroom" class="information-panel">
  <header class="information-header">
    <div class="information-heading">
      <span class="information-mark" aria-hidden="true">
        <i class="fa-solid fa-school-circle-check fa-2x"></i>
      </span>
      <div>
        <p class="information-eyebrow">PLANTEL 20 ORIENTE</p>
        <h2 id="information-title">Aula H3</h2>
        <p class="information-subtitle">
          Mapa principal <span>•</span> Sector H <span>•</span> Edificio H
          <span>•</span> Aula H3
        </p>
      </div>
    </div>
  </header>

  <div class="information-stats" aria-label="Datos generales">
    <article class="information-stat">
      <span class="stat-icon" aria-hidden="true">
        <i class="fa-solid fa-user-graduate"></i>
      </span>
      <div>
        <p>Capacidad</p>
        <strong>45</strong><small>máxima de alumnos</small>
      </div>
    </article>
    <article class="information-stat">
      <span class="stat-icon" aria-hidden="true">
        <i class="fa-solid fa-users"></i>
      </span>
      <div>
        <p>Alumnos</p>
        <strong>39</strong><small>en activo</small>
      </div>
    </article>
    <article class="information-stat">
      <span class="stat-icon" aria-hidden="true">
        <i class="fa-solid fa-person-chalkboard"></i>
      </span>
      <div>
        <p>Docentes</p>
        <strong>5</strong><small>que imparten clases</small>
      </div>
    </article>
    <article class="information-stat">
      <span class="stat-icon" aria-hidden="true">
        <i class="fa-solid fa-book"></i>
      </span>
      <div>
        <p>Asignaturas</p>
        <strong>9</strong><small>que se imparten</small>
      </div>
    </article>
  </div>
<div class="information-description">
          Aula destinada a actividades académicas teóricas y prácticas. Cuenta
          con recursos didácticos y tecnológicos para apoyar las actividades de
          enseñanza y aprendizaje.
        </div>
  <section class="panel-wrapper-tabs">
    <nav class="panel-tabs">
      <input
        type="radio"
        class="panel-tabs-radio"
        name="tabs-sector-h"
        checked
        id="statics"
      />
      <label for="statics" class="tabs-label">
        <i class="fa-regular fa-circle-question"></i>
        Estadísticas
      </label>
      <div class="tabs-content">

<section class="statistics-container">

  <header class="statistics-header">
    <div>
      <span class="statistics-eyebrow">ANÁLISIS ACADÉMICO</span>
      <h2>Estadísticas del grupo</h2>
      <p>Indicadores generales de desempeño y asistencia</p>
    </div>

    <div class="statistics-group">
      <span>GRUPO</span>
      <strong>101C</strong>
    </div>
  </header>

  <div class="statistics-grid">

    <!-- CARD 1: Gender distribution -->
    <article class="statistics-card">

      <div class="card-heading">
        <div>
          <span class="card-eyebrow">COMPOSICIÓN DEL GRUPO</span>
          <h3>Distribución por género</h3>
        </div>

        <span class="card-icon">
          <i class="fa-solid fa-users"></i>
        </span>
      </div>

      <div class="chart-content">

        <div class="donut-chart gender-chart">
          <div class="donut-center">
            <strong>25</strong>
            <span>Alumnos</span>
          </div>
        </div>

        <div class="chart-legend">

          <div class="legend-item">
            <span class="legend-color male"></span>
            <div class="legend-description">
              <span>Hombres</span>
              <strong>10 alumnos · 40%</strong>
            </div>
          </div>

          <div class="legend-item">
            <span class="legend-color female"></span>
            <div class="legend-description">
              <span>Mujeres</span>
              <strong>13 alumnas · 52%</strong>
            </div>
          </div>

          <div class="legend-item">
            <span class="legend-color other"></span>
            <div class="legend-description">
              <span>Otro</span>
              <strong>2 alumnos · 8%</strong>
            </div>
          </div>

        </div>
      </div>

      <footer class="card-footer">
        Distribución de alumnos inscritos en el grupo.
      </footer>

    </article>

    <!-- CARD 2: Attendance -->
    <article class="statistics-card">

      <div class="card-heading">
        <div>
          <span class="card-eyebrow">CONTROL DE ASISTENCIA</span>
          <h3>Promedio de asistencia</h3>
        </div>

        <span class="card-icon">
          <i class="fa-solid fa-calendar-check"></i>
        </span>
      </div>

      <div class="chart-content">

        <div class="donut-chart attendance-chart">
          <div class="donut-center">
            <strong>94.8%</strong>
            <span>Asistencia</span>
          </div>
        </div>

        <div class="chart-legend">

          <div class="legend-item">
            <span class="legend-color present"></span>
            <div class="legend-description">
              <span>Hombres · Asistencia</span>
              <strong>96%</strong>
            </div>
          </div>

          <div class="legend-item">
            <span class="legend-color female"></span>
            <div class="legend-description">
              <span>Mujeres · Asistencia</span>
              <strong>94%</strong>
            </div>
          </div>

          <div class="legend-item">
            <span class="legend-color absent"></span>
            <div class="legend-description">
              <span>Otro · Asistencia</span>
              <strong>93%</strong>
            </div>
          </div>

          <div class="legend-divider"></div>

          <div class="legend-item">
            <span class="legend-color absence"></span>
            <div class="legend-description">
              <span>Faltas generales</span>
              <strong>5.2%</strong>
            </div>
          </div>

        </div>
      </div>

      <footer class="card-footer">
        Porcentaje calculado sobre los registros de asistencia.
      </footer>

    </article>

    <!-- CARD 3: Academic achievement -->
    <article class="statistics-card achievement-card">

      <div class="card-heading">
        <div>
          <span class="card-eyebrow">RENDIMIENTO ESCOLAR</span>
          <h3>Aprovechamiento académico</h3>
        </div>

        <span class="card-icon">
          <i class="fa-solid fa-graduation-cap"></i>
        </span>
      </div>

      <div class="achievement-content">

        <div class="donut-chart achievement-chart">
          <div class="donut-center">
            <strong>86%</strong>
            <span>Aprovechamiento</span>
          </div>
        </div>

        <div class="achievement-details">

          <div class="achievement-summary">
            <span>Promedio de aprovechamiento del grupo</span>
            <strong>86 / 100</strong>
          </div>

          <div class="achievement-legend">

            <div class="legend-item">
              <span class="legend-color approved"></span>
              <div class="legend-description">
                <span>Alumnos aprobados</span>
                <strong>22 alumnos · 88%</strong>
              </div>
            </div>

            <div class="legend-item">
              <span class="legend-color failed"></span>
              <div class="legend-description">
                <span>Alumnos reprobados</span>
                <strong>3 alumnos · 12%</strong>
              </div>
            </div>

          </div>

        </div>
      </div>

      <footer class="card-footer">
        Basado en los periodos de evaluación presentados hasta la fecha.
      </footer>

    </article>

  </div>

  <footer class="statistics-footer">
    <span>CECyT · PLANTEL 20 ORIENTE</span>
    <span>Estadísticas académicas · Grupo 101C</span>
  </footer>

</section>


      </div>

      <input
        type="radio"
        class="panel-tabs-radio"
        name="tabs-sector-h"
        id="schedule-subjects"
      />
      <label for="schedule-subjects" class="tabs-label">
        <i class="fa-regular fa-rectangle-list"></i>
        Horarios
      </label>
      <!-- Panl tab gallery-->
      <div class="tabs-content">


<div class="schedule-container">

  <header class="schedule-header">
    <div>
      <span class="schedule-label">HORARIO ESCOLAR</span>
      <h2>Plan de clases</h2>
      <p>Periodo académico 2026–2027</p>
    </div>

    <div class="group-info">
      <div>
        <span>GRUPO</span>
        <strong>101C</strong>
      </div>
      <div>
        <span>TURNO</span>
        <strong>Matutino</strong>
      </div>
    </div>
  </header>

  <div class="schedule-table-wrapper">
    <table class="schedule-table">
      <thead>
        <tr>
          <th>HORARIO</th>
          <th>LUNES</th>
          <th>MARTES</th>
          <th>MIÉRCOLES</th>
          <th>JUEVES</th>
          <th>VIERNES</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="time">07:00 – 07:50</td>
          <td>Matemáticas aplicadas</td>
          <td>Comunicación oral</td>
          <td>Fundamentos de programación</td>
          <td>Matemáticas aplicadas</td>
          <td>Inglés técnico</td>
        </tr>

        <tr>
          <td class="time">07:50 – 08:40</td>
          <td>Inglés técnico</td>
          <td>Química básica</td>
          <td>Matemáticas aplicadas</td>
          <td>Comunicación oral</td>
          <td>Fundamentos de programación</td>
        </tr>

        <tr>
          <td class="time">08:40 – 09:30</td>
          <td>Fundamentos de programación</td>
          <td>Matemáticas aplicadas</td>
          <td>Inglés técnico</td>
          <td>Química básica</td>
          <td>Laboratorio digital</td>
        </tr>

        <tr class="break-row">
          <td class="time">09:30 – 09:50</td>
          <td colspan="5">
            <span class="break-icon">☕</span>
            RECESO · 20 MINUTOS
          </td>
        </tr>

        <tr>
          <td class="time">09:50 – 10:40</td>
          <td>Química básica</td>
          <td>Laboratorio digital</td>
          <td>Comunicación oral</td>
          <td>Fundamentos de programación</td>
          <td>Matemáticas aplicadas</td>
        </tr>

        <tr>
          <td class="time">10:40 – 11:30</td>
          <td>Historia contemporánea</td>
          <td>Inglés técnico</td>
          <td>Laboratorio digital</td>
          <td>Historia contemporánea</td>
          <td>Química básica</td>
        </tr>

        <tr>
          <td class="time">11:30 – 12:20</td>
          <td>Laboratorio digital</td>
          <td>Historia contemporánea</td>
          <td>Química básica</td>
          <td>Inglés técnico</td>
          <td>Comunicación oral</td>
        </tr>

        <tr>
          <td class="time">12:20 – 13:10</td>
          <td>Educación física</td>
          <td>Educación física</td>
          <td>Educación física</td>
          <td>Educación física</td>
          <td>Historia contemporánea</td>
        </tr>
      </tbody>
    </table>
  </div>

  <section class="subjects-section">
    <div class="subjects-heading">
      <div>
        <span class="schedule-label">PROGRAMA ACADÉMICO</span>
        <h3>Asignaturas del grupo</h3>
      </div>
      <span class="subject-count">07 materias</span>
    </div>

    <div class="subjects-list">
      <div class="subject-item">
        <span class="subject-number">01</span>
        <span>Matemáticas aplicadas</span>
      </div>

      <div class="subject-item">
        <span class="subject-number">02</span>
        <span>Comunicación oral</span>
      </div>

      <div class="subject-item">
        <span class="subject-number">03</span>
        <span>Fundamentos de programación</span>
      </div>

      <div class="subject-item">
        <span class="subject-number">04</span>
        <span>Inglés técnico</span>
      </div>

      <div class="subject-item">
        <span class="subject-number">05</span>
        <span>Química básica</span>
      </div>

      <div class="subject-item">
        <span class="subject-number">06</span>
        <span>Laboratorio digital</span>
      </div>

      <div class="subject-item">
        <span class="subject-number">07</span>
        <span>Historia contemporánea</span>
      </div>

      <div class="subject-item">
        <span class="subject-number">08</span>
        <span>Educación física</span>
      </div>
    </div>
  </section>

  <footer class="schedule-footer">
    <span>CECyT · PLANTEL 20 ORIENTE</span>
    <span>Organización académica</span>
  </footer>

</div>


      </div>

      <input
        type="radio"
        class="panel-tabs-radio"
        name="tabs-sector-h"
        id="teachers"
      />
      <label for="teachers" class="tabs-label">
        <i class="fa-solid fa-person-chalkboard"></i>
        Docentes
      </label>
      <!-- Panl tab gallery-->
      <div class="tabs-content">



<section class="teachers-container">

  <header class="teachers-header">
    <div>
      <span class="teachers-eyebrow">PERSONAL ACADÉMICO</span>
      <h2>Directorio de docentes</h2>
      <p>Consulta del personal y sus horarios de clase</p>
    </div>

    <div class="teachers-total">
      <i class="fa-solid fa-chalkboard-user"></i>
      <span><strong>06</strong> docentes</span>
    </div>
  </header>

  <div class="teachers-grid">

    <!-- Teacher 1 -->
    <article class="teacher-card">
      <div class="teacher-profile">
        <img src="/assets/docentes/docente-01.jpg"
             alt="Fotografía de José Luis Ríos">

        <div class="teacher-info">
          <span class="teacher-label">DOCENTE</span>
          <h3>Ing. José Luis Ríos</h3>
          <p>Fundamentos de programación</p>
        </div>
      </div>

      <div class="teacher-schedule">
        <span class="schedule-title">HORARIO EN AULA</span>

        <div class="schedule-pills">
          <span class="time-pill start">
            <i class="fa-regular fa-clock"></i>
            07:00 AM
          </span>

          <span class="time-pill end">
            <i class="fa-solid fa-clock"></i>
            09:30 AM
          </span>
        </div>
      </div>
    </article>

    <!-- Teacher 2 -->
    <article class="teacher-card">
      <div class="teacher-profile">
        <img src="/assets/docentes/docente-02.jpg"
             alt="Fotografía de Laura Méndez">

        <div class="teacher-info">
          <span class="teacher-label">DOCENTE</span>
          <h3>Lic. Laura Méndez</h3>
          <p>Comunicación oral</p>
        </div>
      </div>

      <div class="teacher-schedule">
        <span class="schedule-title">HORARIO EN AULA</span>

        <div class="schedule-pills">
          <span class="time-pill start">
            <i class="fa-regular fa-clock"></i>
            08:00 AM
          </span>

          <span class="time-pill end">
            <i class="fa-solid fa-clock"></i>
            11:30 AM
          </span>
        </div>
      </div>
    </article>

    <!-- Teacher 3 -->
    <article class="teacher-card">
      <div class="teacher-profile">
        <img src="/assets/docentes/docente-03.jpg"
             alt="Fotografía de Ricardo Salgado">

        <div class="teacher-info">
          <span class="teacher-label">DOCENTE</span>
          <h3>Mtro. Ricardo Salgado</h3>
          <p>Matemáticas aplicadas</p>
        </div>
      </div>

      <div class="teacher-schedule">
        <span class="schedule-title">HORARIO EN AULA</span>

        <div class="schedule-pills">
          <span class="time-pill start">
            <i class="fa-regular fa-clock"></i>
            07:50 AM
          </span>

          <span class="time-pill end">
            <i class="fa-solid fa-clock"></i>
            10:40 AM
          </span>
        </div>
      </div>
    </article>

    <!-- Teacher 4 -->
    <article class="teacher-card">
      <div class="teacher-profile">
        <img src="/assets/docentes/docente-04.jpg"
             alt="Fotografía de Mariana Torres">

        <div class="teacher-info">
          <span class="teacher-label">DOCENTE</span>
          <h3>Ing. Mariana Torres</h3>
          <p>Laboratorio digital</p>
        </div>
      </div>

      <div class="teacher-schedule">
        <span class="schedule-title">HORARIO EN AULA</span>

        <div class="schedule-pills">
          <span class="time-pill start">
            <i class="fa-regular fa-clock"></i>
            09:50 AM
          </span>

          <span class="time-pill end">
            <i class="fa-solid fa-clock"></i>
            12:20 PM
          </span>
        </div>
      </div>
    </article>

    <!-- Teacher 5 -->
    <article class="teacher-card">
      <div class="teacher-profile">
        <img src="/assets/docentes/docente-05.jpg"
             alt="Fotografía de Fernando Castillo">

        <div class="teacher-info">
          <span class="teacher-label">DOCENTE</span>
          <h3>Q.B.P. Fernando Castillo</h3>
          <p>Química básica</p>
        </div>
      </div>

      <div class="teacher-schedule">
        <span class="schedule-title">HORARIO EN AULA</span>

        <div class="schedule-pills">
          <span class="time-pill start">
            <i class="fa-regular fa-clock"></i>
            08:40 AM
          </span>

          <span class="time-pill end">
            <i class="fa-solid fa-clock"></i>
            11:30 AM
          </span>
        </div>
      </div>
    </article>

    <!-- Teacher 6 -->
    <article class="teacher-card">
      <div class="teacher-profile">
        <img src="/assets/docentes/docente-06.jpg"
             alt="Fotografía de Gabriela Navarro">

        <div class="teacher-info">
          <span class="teacher-label">DOCENTE</span>
          <h3>Lic. Gabriela Navarro</h3>
          <p>Inglés técnico</p>
        </div>
      </div>

      <div class="teacher-schedule">
        <span class="schedule-title">HORARIO EN AULA</span>

        <div class="schedule-pills">
          <span class="time-pill start">
            <i class="fa-regular fa-clock"></i>
            07:00 AM
          </span>

          <span class="time-pill end">
            <i class="fa-solid fa-clock"></i>
            10:40 AM
          </span>
        </div>
      </div>
    </article>

  </div>

  <footer class="teachers-footer">
    <span>CECyT · PLANTEL 20 ORIENTE</span>
    <span>Directorio académico</span>
  </footer>

</section>



      </div>

      <input
        type="radio"
        class="panel-tabs-radio"
        name="tabs-sector-h"
        id="students"
      />
      <label for="students" class="tabs-label">
        <i class="fa-solid fa-user-graduate"></i>
        Alumnos
      </label>
      <!-- Panl tab gallery-->
      <div class="tabs-content">


<section class="students-container">

  <!-- Header -->
  <header class="students-header">
    <div>
      <span class="students-eyebrow">GESTIÓN ACADÉMICA</span>
      <h2>Alumnos</h2>
      <p>Consulta y seguimiento de asistencia del grupo</p>
    </div>

    <div class="students-group-info">
      <div class="info-box">
        <span>GRUPO</span>
        <strong>101C</strong>
      </div>

      <div class="info-box">
        <span>TURNO</span>
        <strong>Matutino</strong>
      </div>
    </div>
  </header>

  <!-- Summary -->
  <div class="students-summary">
    <div class="summary-card">
      <div class="summary-icon">
        <i class="fa-solid fa-users"></i>
      </div>
      <div>
        <span>Total de alumnos</span>
        <strong>25</strong>
      </div>
    </div>

    <div class="summary-card">
      <div class="summary-icon attendance-icon">
        <i class="fa-solid fa-calendar-check"></i>
      </div>
      <div>
        <span>Asistencia promedio</span>
        <strong>94.8%</strong>
      </div>
    </div>

    <div class="summary-card">
      <div class="summary-icon absence-icon">
        <i class="fa-solid fa-calendar-xmark"></i>
      </div>
      <div>
        <span>Faltas acumuladas</span>
        <strong>38</strong>
      </div>
    </div>
  </div>

  <!-- Search -->
  <div class="students-toolbar">
    <div class="student-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input
        type="search"
        placeholder="Buscar por matrícula o nombre del alumno..."
        aria-label="Buscar alumno"
      >
    </div>

    <span class="students-total">
      <strong>25</strong> alumnos registrados
    </span>
  </div>

  <!-- Students table -->
  <div class="students-table-wrapper">
    <table class="students-table">
      <thead>
        <tr>
          <th>MATRÍCULA</th>
          <th>PRIMER APELLIDO</th>
          <th>SEGUNDO APELLIDO</th>
          <th>NOMBRE(S)</th>
          <th>FALTAS</th>
          <th>ASISTENCIA</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="student-id">20261001</td>
          <td>Aguilar</td>
          <td>Domínguez</td>
          <td>Andrea Sofía</td>
          <td><span class="absence-count low">1</span></td>
          <td><span class="attendance-value">98%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261002</td>
          <td>Alvarado</td>
          <td>Ríos</td>
          <td>Diego Alejandro</td>
          <td><span class="absence-count low">2</span></td>
          <td><span class="attendance-value">96%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261003</td>
          <td>Benítez</td>
          <td>Salas</td>
          <td>Camila Fernanda</td>
          <td><span class="absence-count medium">5</span></td>
          <td><span class="attendance-value">90%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261004</td>
          <td>Calderón</td>
          <td>Vega</td>
          <td>Emiliano</td>
          <td><span class="absence-count low">0</span></td>
          <td><span class="attendance-value">100%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261005</td>
          <td>Castillo</td>
          <td>Morales</td>
          <td>Valentina Isabel</td>
          <td><span class="absence-count low">1</span></td>
          <td><span class="attendance-value">98%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261006</td>
          <td>Cervantes</td>
          <td>Flores</td>
          <td>Mateo</td>
          <td><span class="absence-count medium">4</span></td>
          <td><span class="attendance-value">92%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261007</td>
          <td>Contreras</td>
          <td>Reyes</td>
          <td>Mariana Guadalupe</td>
          <td><span class="absence-count low">2</span></td>
          <td><span class="attendance-value">96%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261008</td>
          <td>Delgado</td>
          <td>Ortiz</td>
          <td>Santiago</td>
          <td><span class="absence-count high">8</span></td>
          <td><span class="attendance-value warning">84%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261009</td>
          <td>Escobar</td>
          <td>Jiménez</td>
          <td>Regina Alejandra</td>
          <td><span class="absence-count low">0</span></td>
          <td><span class="attendance-value">100%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261010</td>
          <td>Fernández</td>
          <td>Acosta</td>
          <td>Leonardo</td>
          <td><span class="absence-count medium">3</span></td>
          <td><span class="attendance-value">94%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261011</td>
          <td>García</td>
          <td>Medina</td>
          <td>Luciana</td>
          <td><span class="absence-count low">1</span></td>
          <td><span class="attendance-value">98%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261012</td>
          <td>González</td>
          <td>Herrera</td>
          <td>Samuel Eduardo</td>
          <td><span class="absence-count medium">5</span></td>
          <td><span class="attendance-value">90%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261013</td>
          <td>Hernández</td>
          <td>Vargas</td>
          <td>Daniela</td>
          <td><span class="absence-count low">0</span></td>
          <td><span class="attendance-value">100%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261014</td>
          <td>Jiménez</td>
          <td>Navarro</td>
          <td>Gael Antonio</td>
          <td><span class="absence-count high">7</span></td>
          <td><span class="attendance-value warning">86%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261015</td>
          <td>Lara</td>
          <td>Espinoza</td>
          <td>Renata</td>
          <td><span class="absence-count low">2</span></td>
          <td><span class="attendance-value">96%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261016</td>
          <td>López</td>
          <td>Sandoval</td>
          <td>Ángel Gabriel</td>
          <td><span class="absence-count low">1</span></td>
          <td><span class="attendance-value">98%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261017</td>
          <td>Martínez</td>
          <td>Fuentes</td>
          <td>Victoria</td>
          <td><span class="absence-count medium">4</span></td>
          <td><span class="attendance-value">92%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261018</td>
          <td>Mendoza</td>
          <td>Silva</td>
          <td>Joaquín</td>
          <td><span class="absence-count low">0</span></td>
          <td><span class="attendance-value">100%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261019</td>
          <td>Miranda</td>
          <td>Campos</td>
          <td>Paola Andrea</td>
          <td><span class="absence-count medium">3</span></td>
          <td><span class="attendance-value">94%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261020</td>
          <td>Moreno</td>
          <td>Gutiérrez</td>
          <td>Iván Mauricio</td>
          <td><span class="absence-count low">1</span></td>
          <td><span class="attendance-value">98%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261021</td>
          <td>Navarrete</td>
          <td>León</td>
          <td>Elena Sofía</td>
          <td><span class="absence-count high">6</span></td>
          <td><span class="attendance-value warning">88%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261022</td>
          <td>Ortega</td>
          <td>Del Río</td>
          <td>Adrián</td>
          <td><span class="absence-count low">2</span></td>
          <td><span class="attendance-value">96%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261023</td>
          <td>Paredes</td>
          <td>Rangel</td>
          <td>Montserrat</td>
          <td><span class="absence-count low">0</span></td>
          <td><span class="attendance-value">100%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261024</td>
          <td>Ramírez</td>
          <td>Chávez</td>
          <td>Maximiliano</td>
          <td><span class="absence-count medium">3</span></td>
          <td><span class="attendance-value">94%</span></td>
        </tr>

        <tr>
          <td class="student-id">20261025</td>
          <td>Salazar</td>
          <td>Treviño</td>
          <td>Isabella Fernanda</td>
          <td><span class="absence-count low">1</span></td>
          <td><span class="attendance-value">98%</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <footer class="students-pagination">
    <span class="pagination-info">
      Mostrando <strong>1–5</strong> de <strong>25</strong> alumnos
    </span>

    <div class="pagination-controls">
      <button class="page-button" disabled aria-label="Página anterior">
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <button class="page-button active">1</button>
      <button class="page-button">2</button>
      <button class="page-button">3</button>
      <button class="page-button">4</button>
      <button class="page-button">5</button>

      <button class="page-button" aria-label="Página siguiente">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </footer>

</section>


      </div>



       <input
        type="radio"
        class="panel-tabs-radio"
        name="tabs-sector-h"
        id="resources"
      />
      <label for="resources" class="tabs-label">
        <i class="fa-regular fa-star"></i>
        Recursos
      </label>
      <!-- Panl tab gallery-->
      <div class="tabs-content">
        
      </div>
    </nav>
  </section>
</section>
`;function or(){let e=document.querySelector(`[data-cell-id='classroom-h3']`),t=document.querySelector(`.panel-container`),n=document.querySelector(`.info-panel`);e.addEventListener(`click`,()=>{let e=ar;t.innerHTML=``,t.innerHTML=e,n.classList.add(`open`)})}var sr=null;function cr(){let e=document.getElementById(`sector-h-map`),t=document.querySelector(`.info-panel`),n=document.querySelector(`.simbology-bar`),r=document.querySelector(`.bottom-nav-container`);document.getElementById(`home-map`);let i=document.getElementById(`main-bldg-down`),a=document.getElementById(`main-bldg-up`),o=document.getElementById(`map-container`);e.addEventListener(`click`,()=>{t.classList.remove(`open`),n.classList.add(`is-not-visible`),r.classList.add(`is-visible`),xr(vr.H1.id),sr=1,ir()}),i.addEventListener(`click`,()=>{sr!==1&&(xr(vr.H1.id),sr=1,ir())}),a.addEventListener(`click`,()=>{sr!==2&&(xr(vr.H2.id),sr=2,or())}),o.addEventListener(`click`,e=>{e.target.closest(`[data-cell-id="camera-h3"]`)&&s()});function s(){let e=document.createElement(`div`);e.className=`camera-viewer`,e.innerHTML=`
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
      <source src="./videos/clasroom-h3.mp4" type="video/mp4">
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
  `;let t=new WinBox({class:[`camera-window`],mount:e,title:`Video cámara - Aula H3`,x:`center`,y:`center`,background:`#e25619`,class:[`camera-window`,`camera-window.max`],width:`1210`,height:`760`,border:4,header:45,index:300}),n=e.querySelector(`#cameraVideo`),r=e.querySelector(`#cameraLoader`),i=e.querySelector(`#cameraProgress`),a=e.querySelector(`#cameraDateTime`),o=0,s=!1,c=!1,l=setInterval(()=>{o<90&&(o+=2,i.style.width=`${o}%`)},40);n.addEventListener(`canplay`,()=>{s=!0,u()}),setTimeout(()=>{c=!0,u()},1200);function u(){s&&c&&(clearInterval(l),i.style.width=`100%`,setTimeout(()=>{r.classList.add(`is-hidden`)},250))}function d(){a.textContent=new Date().toLocaleString(`es-MX`,{dateStyle:`short`,timeStyle:`medium`})}d();let f=setInterval(d,1e3);return t.onclose=()=>{clearInterval(f),clearInterval(l)},t}}var lr=`<!-- Sector H information panel -->
<section id="panel-h-main" class="information-panel">
  <header class="information-header">
    <div class="information-heading">
      <span class="information-mark" aria-hidden="true">
        <i class="fa-solid fa-building-circle-check fa-2x"></i>
      </span>
      <div>
        <p class="information-eyebrow">CAMPUS 20 ORIENTE</p>
        <h2 id="information-title">Sector H</h2>
        <p class="information-subtitle">Mapa principal <span>•</span> Sector H</p>
      </div>
    </div>
  </header>
  <section class="panel-wrapper-tabs">
    <h3>Servicios e instalaciones</h3>
    <nav class="panel-tabs">
      <input
        type="radio"
        class="panel-tabs-radio"
        name="tabs-sector-h"
        checked
        id="information"
      />
      <label for="information" class="tabs-label"
        ><i class="fa-regular fa-circle-question fa-2x"></i>Información</label
      >
      <div class="tabs-content">
        <div class="information-description">
          El <strong>Sector H</strong> es el área principal del plantel, integra el Edificio  H, el
          Edificio N y un espacio de cafetería al aire libre. 
        </div>
        <div class="information-subtitle-bar">
          <h3>Instalaciones y servicios</h3>
        </div>
        <section class="services-grid">
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-utensils"></i>
            </div>
            <span>Espacio de cafetería</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-desktop"></i>
            </div>
            <span>Laboratorio de cómputo</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-flask"></i>
            </div>
            <span>Laboratorio de ciencias</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-restroom"></i>
            </div>
            <span>Sanitarios</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-money-check-dollar"></i>
            </div>
            <span>Finanzas</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-users"></i>
            </div>
            <span>Subdirección</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-box-archive"></i>
            </div>
            <span>Bodega</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-box-archive"></i>
            </div>
            <span>Intendencia</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-broom"></i>
            </div>
            <span>Aula de matenimiento</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-building-columns"></i>
            </div>
            <span>Dirección</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-address-card"></i>
            </div>
            <span>Servicios escolares</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-regular fa-clipboard"></i>
            </div>
            <span>Control académico</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-book-open"></i>
            </div>
            <span>Biblioteca</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <span>Prefectura</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-chalkboard"></i>
            </div>
            <span>Aulas de la H1 a la H8</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-person-chalkboard"></i>
            </div>
            <span>Sala de maestros</span>
          </div>          
        </section>
        <div class="panel-button__container">
          <button class="button-panel" id="sector-h-map">
            <i class="fa-solid fa-magnifying-glass-location fa-2x"></i>
            Ir al Sector H
          </button>
        </div>
      </div>
      <input
        type="radio"
        class="panel-tabs-radio"
        name="tabs-sector-h"
        id="gallery"
      />
      <label for="gallery" class="tabs-label">
        <i class="fa-regular fa-image fa-2x"></i>Galería
      </label>
      <!-- Panl tab gallery-->
      <div class="tabs-content">
        <section>
          <div class="panel-gallery">
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-01-m.png"
              alt=""
              onclick="
                openImage(
                  '/campus-prototype/images/plantel-20-01.png',
                  'Fachada principal del edificio H. Cuenta con laboratorios, aulas, sanitarios, biblioteca y oficinas administrativas.',
                  'Edificio H',
                )
              "
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-02-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-04-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-05-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-03-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-08-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-07-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-09-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-10-m.png"
              alt=""
            />
          </div>
        </section>
      </div>
    </nav>
  </section>
</section>
`,ur=`<!-- Sector H information panel -->
<section id="panel-c1-main" class="information-panel">
  <header class="information-header">
    <div class="information-heading">
      <span class="information-mark" aria-hidden="true">
        <i class="fa-solid fa-building-circle-check fa-2x"></i>
      </span>
      <div>
        <p class="information-eyebrow">CAMPUS 20 ORIENTE</p>
        <h2 id="information-title">Sector C1</h2>
        <p class="information-subtitle">
          Mapa principal <span>•</span> Sector C1
        </p>
      </div>
    </div>
  </header>
  <section class="panel-wrapper-tabs">
    <h3>Servicios e instalaciones</h3>
    <nav class="panel-tabs">
      <input
        type="radio"
        class="panel-tabs-radio"
        name="tabs-sector-h"
        checked
        id="information"
      />
      <label for="information" class="tabs-label">
        <i class="fa-regular fa-circle-question"></i>
        Información
      </label>
      <div class="tabs-content">
        <div class="information-description">
          En el <strong>Sector C1</strong> se encuentra ubicada la caseta de vigilancia
          de la entrada principal. El personal de Prefectura se encarga de 
          brindar el acceso a las instalaciones del plantel, registrar las entradas y
          salidas de los alumnos, padres de familia y público en general, además de ayudar a 
          mantener la seguridad en el plantel.
        </div>
        <div class="information-subtitle-bar">
          <h3>Funciones</h3>
        </div>
        <section class="services-grid">
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-right-to-bracket"></i>
            </div>
            <span>Control de acceso al plantel</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-table-list"></i>
            </div>
            <span>Registro de entradas y salidas</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-info"></i>
            </div>
            <span>Proporcionar orientación e informes</span>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <span>Apoyo en situaciones de seguridad</span>
          </div>
        </section>
        <div class="panel-button__container">
          <button class="button-panel disabled" id="sector-c1-map">
            <i class="fa-solid fa-magnifying-glass-location fa-2x"></i>
            Ir al Sector C1
          </button>
        </div>
      </div>
      <input
        type="radio"
        class="panel-tabs-radio"
        name="tabs-sector-h"
        id="gallery"
      />
      <label for="gallery" class="tabs-label">
        <i class="fa-regular fa-image"></i>
        Galería
      </label>
      <!-- Panl tab gallery-->
      <div class="tabs-content">
        <section>
          <div class="panel-gallery">
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-01-m.png"
              alt=""
              onclick="
                openImage(
                  '/campus-prototype/images/plantel-20-01.png',
                  'Fachada principal del edificio H. Cuenta con laboratorios, aulas, sanitarios, biblioteca y oficinas administrativas.',
                  'Edificio H',
                )
              "
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-02-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-04-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-05-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-03-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-08-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-07-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-09-m.png"
              alt=""
            />
            <img
              src="./src/assets/images/gallery/thumbnails/plantel-20-10-m.png"
              alt=""
            />
          </div>
        </section>
      </div>
      <input
        type="radio"
        class="panel-tabs-radio"
        name="tabs-sector-h"
        id="gallery"
      />
    </nav>
  </section>
</section>`,dr=`<section id="not-implemented" class="information-panel">

  <header class="information-header">
    <div class="information-heading">
      <span class="information-mark" aria-hidden="true">
        <i class="fa-solid fa-school-circle-check fa-2x"></i>
      </span>
      <div>
        <p class="information-eyebrow">CAMPUS PRINCIPAL</p>
        <h2 id="information-title">Sector D</h2>
        <p class="information-subtitle">Mapa principal <span>•</span> Sector D</p>
      </div>
    </div>
    <!--<span class="information-status"><i></i> Servicio disponible</span>-->
  </header>

  <!--<div class="panel-header">
    <div class="panel-title">
      <i class="fa-regular fa-building fa-2x"></i>
      <div class="panel-title-text">
        <h2></h2>
        <span>Información general</span>
      </div>
    </div>
  </div>-->
  <div style="display: grid; margin-top: 50px">
    <div style="align-self: center; justify-self: center; text-align: center">
      <h2>No hay información para mostrar</h2>
      <h3>Funcionalidad no implementada</h3>
      <img
        src="./src/assets/images/no-information.svg"
        alt=""
        style="width: 240px; height: auto; margin-top: 50px"
      />
      <div style="text-align: left; padding: 30px">
        <p>
          El Campus Interactivo es una aplicación parcial desarrollada con fines
          demostrativos. Su funcionalidad se limita a presentar, de manera
          representativa, las características y el tipo de funcionalidades que
          integrará la aplicación de producción.
        </p>
        <br />
        <p>
          Seleccione el <strong>Sector H</strong> si desea probar las
          funcionalidad disponible.
        </p>
        <div
          style="
            margin-top: 20px;
            width: 100%;
            justify-content: center;
            display: flex;
          "
        >
          <!--<button class="button-panel">
                  <i class="fa-regular fa-map fa-2x"></i>Ir al sector H
                </button>-->
        </div>
      </div>
    </div>
  </div>
</section>`,fr=document.getElementById(`map-area`),pr=document.querySelector(`.info-panel`),mr=document.querySelector(`.sector-toast`),hr=document.querySelector(`#sector-toast`),gr=document.querySelector(`.panel-container`);document.getElementById(`not-implemented`),document.getElementById(`panel-h`);var _r={},vr={C:{id:`mainMap`,urlMap:y},H1:{id:`sector-h-ground`,mainBuilding:{groundFloor:{id:`bldgHGrnd`,urlMap:b}}},H2:{id:`sector-h-upper`,mainBuilding:{upperFloor:{id:`bldgHUpper`,urlMap:x}}}};async function yr(e,t){try{let n=await fetch(t);if(!n.ok)throw Error(`Error loading map: ${e}`);_r[e]=await n.text()}catch(e){console.error(e)}}function br(e){return _r[e]??null}function xr(e){fr.innerHTML=br(e)}await Promise.all([yr(vr.C.id,vr.C.urlMap)]),await Promise.all([yr(vr.H1.id,vr.H1.mainBuilding.groundFloor.urlMap)]),await Promise.all([yr(vr.H2.id,vr.H2.mainBuilding.upperFloor.urlMap)]),console.log(_r),xr(vr.C.id),nr();var Sr=fr.querySelector(`svg`),Cr=hr.querySelector(`.sector-text h3`),wr=hr.querySelector(`.sector-text p`),Tr=hr.querySelector(`.sector-icon i`);Sr.addEventListener(`pointerover`,e=>{let t=e.target.closest(`[data-cell-id^="sector-"]`);if(!t||e.relatedTarget?.closest?.(`[data-cell-id^="sector-"]`)===t)return;let n=rr[t.dataset.cellId.replace(`sector-`,``)];n&&(Cr.textContent=n.title,wr.textContent=n.description,Tr.className=n.icon,mr.classList.add(`active`))}),Sr.addEventListener(`pointerout`,e=>{let t=e.target.closest(`[data-cell-id^="sector-"]`);t&&e.relatedTarget?.closest?.(`[data-cell-id^="sector-"]`)!==t&&mr.classList.remove(`active`)});var Er={"sector-h":{template:lr,title:`Sector H`,icon:`fa-solid fa-building-circle-check fa-2x`},"sector-d":{template:dr,title:`Sector D`,icon:`fa-solid fa-landmark-dome fa-2x`},"sector-m":{template:dr,title:`Sector M`,icon:`fa-solid fa-people-roof fa-2x`},"sector-c1":{template:ur,title:`Sector C1`,icon:`fa-solid fa-tower-observation fa-2x`},"sector-c2":{template:dr,title:`Sector C2`,icon:`fa-solid fa-tower-observation fa-2x`}},Dr=null;Sr.addEventListener(`click`,e=>{let t=e.target.closest(`[data-cell-id^="sector-"]`);if(!t)return;if(Dr?.dataset.cellId===t.dataset.cellId){Dr.classList.remove(`selected`),Dr=null,gr.innerHTML=``,pr.classList.remove(`open`);return}Dr?.classList.remove(`selected`),t.classList.add(`selected`),Dr=t;let n=Er[t.dataset.cellId];if(!n)return;let r=n.template;Or(gr,r,n.title,n.icon),n.title===`Sector H`&&cr()});function Or(e,t,n,r){e.innerHTML=``,e.innerHTML=t;let i=document.getElementById(`information-title`),a=document.querySelector(`.information-mark i`);i.textContent=n,a.className=r,pr.classList.add(`open`)}(function(){var e,t=document.createElement(`style`);t.innerHTML=`@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}`;var n=document.getElementsByTagName(`head`)[0];n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t);var r=document.createElement(`div`);r.innerHTML=`<div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>`;function i(e,t,n,r){e&&e.addEventListener(t,n,r||!1)}function a(e,t){var n=window,r=d;n&&n.removeEventListener(e,t,r||!1)}function o(e,t){e.stopPropagation(),t&&e.preventDefault()}function s(e,t,n){n=``+n,e[`_s_`+t]!==n&&(e.style.setProperty(t,n),e[`_s_`+t]=n)}var c=[],l=[],u={capture:!0,passive:!1},d={capture:!0,passive:!0},f,p=0,m=10,h,g,_,v,y,b;function x(e,t){if(!(this instanceof x))return new x(e);if(f||C(),e){if(t){var n=e;e=t}if(typeof e==`string`)n=e;else{var i=e.id,a=e.index,o=e.root,c=e.template;n||=e.title;var u=e.icon,d=e.mount,h=e.html,g=e.url,_=e.width,b=e.height,T=e.minwidth,E=e.minheight,D=e.maxwidth,O=e.maxheight,k=e.autosize,A=e.overflow,j=e.min,M=e.max,N=e.hidden,P=e.modal,F=e.x||(P?`center`:0),I=e.y||(P?`center`:0),L=e.top,R=e.left,z=e.bottom,B=e.right,ee=e.background,te=e.border,V=e.header,ne=e.class,H=e.oncreate,U=e.onclose,W=e.onfocus,re=e.onblur,G=e.onmove,ie=e.onresize,ae=e.onfullscreen,oe=e.onmaximize,se=e.onminimize,ce=e.onrestore,le=e.onhide,ue=e.onshow,K=e.onload}}this.g=(c||r).cloneNode(!0),this.g.id=this.id=i||`winbox-`+ ++p,this.g.className=`winbox`+(ne?` `+(typeof ne==`string`?ne:ne.join(` `)):``)+(P?` modal`:``),this.g.winbox=this,this.window=this.g,this.body=this.g.getElementsByClassName(`wb-body`)[0],this.h=V||35,l.push(this),ee&&this.setBackground(ee),te?s(this.body,`margin`,te+(isNaN(te)?``:`px`)):te=0,V&&(t=this.g.getElementsByClassName(`wb-header`)[0],s(t,`height`,V+`px`),s(t,`line-height`,V+`px`),s(this.body,`top`,V+`px`)),n&&this.setTitle(n),u&&this.setIcon(u),d?this.mount(d):h?this.body.innerHTML=h:g&&this.setUrl(g,K),L=L?S(L,y):0,z=z?S(z,y):0,R=R?S(R,v):0,B=B?S(B,v):0,n=v-R-B,u=y-L-z,D=D?S(D,n):n,O=O?S(O,u):u,T=T?S(T,D):150,E=E?S(E,O):this.h,k?((o||f).appendChild(this.body),_=Math.max(Math.min(this.body.clientWidth+2*te+1,D),T),b=Math.max(Math.min(this.body.clientHeight+this.h+te+1,O),E),this.g.appendChild(this.body)):(_=_?S(_,D):Math.max(D/2,T)|0,b=b?S(b,O):Math.max(O/2,E)|0),F=F?S(F,n,_):R,I=I?S(I,u,b):L,this.x=F,this.y=I,this.width=_,this.height=b,this.s=T,this.o=E,this.m=D,this.l=O,this.top=L,this.right=B,this.bottom=z,this.left=R,this.index=a,this.j=A,this.focused=this.hidden=this.full=this.max=this.min=!1,this.onclose=U,this.onfocus=W,this.onblur=re,this.onmove=G,this.onresize=ie,this.onfullscreen=ae,this.onmaximize=oe,this.onminimize=se,this.onrestore=ce,this.onhide=le,this.onshow=ue,N?this.hide():this.focus(),(a||a===0)&&(this.index=a,s(this.g,`z-index`,a),a>m&&(m=a)),M?this.maximize():j?this.minimize():this.resize().move(),w(this),(o||f).appendChild(this.g),H&&H.call(this,e)}x.new=function(e){return new x(e)},x.stack=function(){return l};function S(e,t,n){return typeof e==`string`&&(e===`center`?e=(t-n)/2+.5|0:e===`right`||e===`bottom`?e=t-n:(n=parseFloat(e),e=(``+n!==e&&e.substring((``+n).length))===`%`?t/100*n+.5|0:n)),e}function C(){f=document.body,f[g=`requestFullscreen`]||f[g=`msRequestFullscreen`]||f[g=`webkitRequestFullscreen`]||f[g=`mozRequestFullscreen`]||(g=``),_=g&&g.replace(`request`,`exit`).replace(`mozRequest`,`mozCancel`).replace(`Request`,`Exit`),i(window,`resize`,function(){O(),E()}),i(f,`mousedown`,function(){b=!1},!0),i(f,`mousedown`,function(){if(!b){var e=l.length;if(e)for(--e;0<=e;e--){var t=l[e];if(t.focused){t.blur();break}}}}),O()}function w(e){D(e,`drag`),D(e,`n`),D(e,`s`),D(e,`w`),D(e,`e`),D(e,`nw`),D(e,`ne`),D(e,`se`),D(e,`sw`),i(e.g.getElementsByClassName(`wb-min`)[0],`click`,function(t){o(t),e.min?e.restore().focus():e.minimize()}),i(e.g.getElementsByClassName(`wb-max`)[0],`click`,function(t){o(t),e.max?e.restore().focus():e.maximize().focus()}),g?i(e.g.getElementsByClassName(`wb-full`)[0],`click`,function(t){o(t),e.fullscreen().focus()}):e.addClass(`no-full`),i(e.g.getElementsByClassName(`wb-close`)[0],`click`,function(t){o(t),e.close()||(e=null)}),i(e.g,`mousedown`,function(){b=!0},!0),i(e.body,`mousedown`,function(){e.focus()},!0)}function T(e){c.splice(c.indexOf(e),1),E(),e.removeClass(`min`),e.min=!1,e.g.title=``}function E(){for(var e=c.length,t={},n={},r=0,i;r<e;r++)i=c[r],i=i.left+`:`+i.top,n[i]?n[i]++:(t[i]=0,n[i]=1);r=0;for(var a,o;r<e;r++)i=c[r],a=i.left+`:`+i.top,o=Math.min((v-i.left-i.right)/n[a],250),i.resize(o+1|0,i.h,!0).move(i.left+t[a]*o|0,y-i.bottom-i.h,!0),t[a]++}function D(e,t){function n(n){if(o(n,!0),e.focus(),t===`drag`){if(e.min){e.restore();return}if(!e.g.classList.contains(`no-max`)){var a=Date.now(),c=a-h;if(h=a,300>c){e.max?e.restore():e.maximize();return}}}e.min||(f.classList.add(`wb-lock`),(l=n.touches)&&(l=l[0])?(n=l,i(window,`touchmove`,r,d),i(window,`touchend`,s,d)):(i(window,`mousemove`,r,d),i(window,`mouseup`,s,d)),p=n.pageX,m=n.pageY)}function r(n){o(n),l&&(n=n.touches[0]);var r=n.pageX;n=n.pageY;var i=r-p,a=n-m,s=e.width,c=e.height,u=e.x,d=e.y,f;if(t===`drag`){if(e.g.classList.contains(`no-move`))return;e.x+=i,e.y+=a;var h=f=1}else{if(t===`e`||t===`se`||t===`ne`){e.width+=i;var g=1}else(t===`w`||t===`sw`||t===`nw`)&&(e.x+=i,e.width-=i,h=g=1);if(t===`s`||t===`se`||t===`sw`){e.height+=a;var _=1}else(t===`n`||t===`ne`||t===`nw`)&&(e.y+=a,e.height-=a,f=_=1)}g&&=(e.width=Math.max(Math.min(e.width,e.m,v-e.x-e.right),e.s),e.width!==s),_&&=(e.height=Math.max(Math.min(e.height,e.l,y-e.y-e.bottom),e.o),e.height!==c),(g||_)&&e.resize(),h&&=(e.max&&(e.x=(r<v/3?e.left:r>v/3*2?v-e.width-e.right:v/2-e.width/2)+i),e.x=Math.max(Math.min(e.x,e.j?v-30:v-e.width-e.right),e.j?30-e.width:e.left),e.x!==u),f&&=(e.max&&(e.y=e.top+a),e.y=Math.max(Math.min(e.y,e.j?y-e.h:y-e.height-e.bottom),e.top),e.y!==d),(h||f)&&(e.max&&e.restore(),e.move()),(g||h)&&(p=r),(_||f)&&(m=n)}function s(e){o(e),f.classList.remove(`wb-lock`),l?(a(`touchmove`,r),a(`touchend`,s)):(a(`mousemove`,r),a(`mouseup`,s))}var c=e.g.getElementsByClassName(`wb-`+t)[0];if(c){var l,p,m,h=0;i(c,`mousedown`,n,u),i(c,`touchstart`,n,u)}}function O(){var e=document.documentElement;v=e.clientWidth,y=e.clientHeight}e=x.prototype,e.mount=function(e){return this.unmount(),e.i||=e.parentNode,this.body.textContent=``,this.body.appendChild(e),this},e.unmount=function(e){var t=this.body.firstChild;if(t){var n=e||t.i;n&&n.appendChild(t),t.i=e}return this},e.setTitle=function(e){var t=this.g.getElementsByClassName(`wb-title`)[0];e=this.title=e;var n=t.firstChild;return n?n.nodeValue=e:t.textContent=e,this},e.setIcon=function(e){var t=this.g.getElementsByClassName(`wb-icon`)[0];return s(t,`background-image`,`url(`+e+`)`),s(t,`display`,`inline-block`),this},e.setBackground=function(e){return s(this.g,`background`,e),this},e.setUrl=function(e,t){var n=this.body.firstChild;return n&&n.tagName.toLowerCase()===`iframe`?n.src=e:(this.body.innerHTML=`<iframe src="`+e+`"></iframe>`,t&&(this.body.firstChild.onload=t)),this},e.focus=function(e){if(!1===e)return this.blur();if(!this.focused){if(e=l.length,1<e)for(var t=1;t<=e;t++){var n=l[e-t];if(n.focused){n.blur(),l.push(l.splice(l.indexOf(this),1)[0]);break}}s(this.g,`z-index`,++m),this.index=m,this.addClass(`focus`),this.focused=!0,this.onfocus&&this.onfocus()}return this},e.blur=function(e){return!1===e?this.focus():(this.focused&&(this.removeClass(`focus`),this.focused=!1,this.onblur&&this.onblur()),this)},e.hide=function(e){if(!1===e)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass(`hide`)},e.show=function(e){if(!1===e)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass(`hide`)},e.minimize=function(e){return!1===e?this.restore():(h&&A(),this.max&&=(this.removeClass(`max`),!1),this.min||(c.push(this),E(),this.g.title=this.title,this.addClass(`min`),this.min=!0,this.focused&&(this.blur(),k()),this.onminimize&&this.onminimize()),this)};function k(){var e=l.length;if(e)for(--e;0<=e;e--){var t=l[e];if(!t.min){t.focus();break}}}e.restore=function(){return h&&A(),this.min&&(T(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass(`max`).resize().move(),this.onrestore&&this.onrestore()),this},e.maximize=function(e){return!1===e?this.restore():(h&&A(),this.min&&T(this),this.max||(this.addClass(`max`).resize(v-this.left-this.right,y-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)},e.fullscreen=function(e){if(this.min&&(T(this),this.resize().move()),!h||!A())this.body[g](),h=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(!1===e)return this.restore();return this};function A(){if(h.full=!1,document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[_](),!0}e.close=function(e){if(this.onclose&&this.onclose(e))return!0;this.min&&T(this),l.splice(l.indexOf(this),1),this.unmount(),this.g.remove(),this.g.textContent=``,this.g=this.body=this.g.winbox=null,this.focused&&k()},e.move=function(e,t,n){return e||e===0?n||(this.x=e?e=S(e,v-this.left-this.right,this.width):0,this.y=t?t=S(t,y-this.top-this.bottom,this.height):0):(e=this.x,t=this.y),s(this.g,`left`,e+`px`),s(this.g,`top`,t+`px`),this.onmove&&this.onmove(e,t),this},e.resize=function(e,t,n){return e||e===0?n||(this.width=e?e=S(e,this.m):0,this.height=t?t=S(t,this.l):0,e=Math.max(e,this.s),t=Math.max(t,this.o)):(e=this.width,t=this.height),s(this.g,`width`,e+`px`),s(this.g,`height`,t+`px`),this.onresize&&this.onresize(e,t),this},e.addControl=function(e){var t=e.class,n=e.image,r=e.click;e=e.index;var i=document.createElement(`span`),a=this.g.getElementsByClassName(`wb-control`)[0],o=this;return t&&(i.className=t),n&&s(i,`background-image`,`url(`+n+`)`),r&&(i.onclick=function(e){r.call(this,e,o)}),a.insertBefore(i,a.childNodes[e||0]),this},e.removeControl=function(e){return(e=this.g.getElementsByClassName(e)[0])&&e.remove(),this},e.addClass=function(e){return this.g.classList.add(e),this},e.removeClass=function(e){return this.g.classList.remove(e),this},e.toggleClass=function(e){return this.g.classList.contains(e)?this.removeClass(e):this.addClass(e)},window.WinBox=x}).call(void 0);