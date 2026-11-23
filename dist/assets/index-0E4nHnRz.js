(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ii=document.querySelector("#menu-icon"),ai=document.querySelector(".sidebar"),si=document.getElementById("link-about");ii.addEventListener("click",()=>{ai.classList.toggle("active")});si.addEventListener("click",()=>{const e=document.createElement("div");e.innerHTML=`
      <div style="padding:20px;">
        <div style="display: flex; gap: 8px; align-items:center;">
          <i class="fa-solid fa-circle-info fa-2x"></i>
          <h2 style="color: #343D3A">Atención</h2>
        </div>
        <p style="margin-top: 20px; color: #343D3A;">
          El Campus Interactivo es una aplicación parcial desarrollada con fines demostrativos. No se pretende que esta aplicación sea un sistema de control escolar completo, sino más bien se trata de una aplicación complementaria de solo consulta.
        </p>
        <p style="margin-top: 20px; color: #343D3A;">
          Su funcionalidad se limita a presentar, de manera representativa, las características y el tipo de funcionalidades que integrará la aplicación de producción.
        </p> 
        <div style="
          display:flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;">
          <button id="close-about" type="button" class="button-panel">
          <i class="fa-solid fa-rectangle-xmark"></i>   
          <strong>Cerrar</strong>
          </button>
        </div>
      </div>
    `;const n=new WinBox({class:["map-preview-window"],title:"Acerca de",x:"center",y:"center",background:"#e25619",modal:!0,mount:e,index:1e3,width:"30%",height:"40%"});document.getElementById("close-about").addEventListener("click",()=>{n.close()})});const oi=`<!-- Empty state -->
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
`,an=document.getElementById("imageViewer"),st=document.getElementById("viewerImage"),ri=document.getElementById("viewerCaption"),ci=document.querySelector(".image-viewer__close");function li(e,n,t=""){st.src=e,st.alt=t,ri.textContent=n,an.showModal()}function di(){an.close()}ci.addEventListener("click",di);an.addEventListener("click",e=>{const n=an.getBoundingClientRect();e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom||an.close()});const pi=document.getElementById("month-year"),kn=document.getElementById("calendar-days"),Mt=document.getElementById("previous-month"),ui=document.getElementById("next-month");console.log(Mt);let je=new Date;function $n(){const e=je.getFullYear(),n=je.getMonth(),t=new Date(e,n,1).getDay(),a=new Date(e,n+1,0).getDate();kn.innerHTML="",pi.innerText=`${je.toLocaleDateString("default",{month:"long"})} ${e}`;for(let s=0;s<t;s++)kn.innerHTML+='<div class="empty"></div>';for(let s=1;s<=a;s++){const r=new Date,l=s===r.getDate()&&e===r.getFullYear()&&n===r.getMonth();kn.innerHTML+=`<div class="${l?"today":""}">${s}</div>`}}Mt.addEventListener("click",()=>{je.setMonth(je.getMonth()-1),$n()});ui.addEventListener("click",()=>{je.setMonth(je.getMonth()+1),$n()});$n();const Nt=document.querySelector(".info-panel"),fi=document.querySelector(".panel-close-button"),mi=document.querySelector(".info-panel-button");mi.addEventListener("click",()=>{const e=document.querySelector(".panel-container"),n=oi;e.textContent.trim()===""&&(e.innerHTML=n),Nt.classList.add("open")});fi.addEventListener("click",()=>{Nt.classList.remove("open")});const vi=document.getElementById("nav-expand"),hi=document.getElementById("nav-expand-list");document.getElementById("nav-expand-icon");vi.addEventListener("click",()=>{hi.classList.toggle("show-list")});window.openImage=li;const gi="/campus-prototype/assets/main-map-Dd2UW5zk.svg",bi="/campus-prototype/assets/main-bldg-ground-B91OwHog.svg",yi="/campus-prototype/assets/main-bldg-upper-DjCqcDEs.svg";function wi(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function xi(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Ei(e,n,t){return n&&xi(e.prototype,n),e}var Ai=Object.defineProperty,Oe=function(e,n){return Ai(e,"name",{value:n,configurable:!0})},Ii=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="m8.94 8 4.2-4.193a.67.67 0 0 0-.947-.947L8 7.06l-4.193-4.2a.67.67 0 1 0-.947.947L7.06 8l-4.2 4.193a.667.667 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L8 8.94l4.193 4.2a.666.666 0 0 0 1.094-.217.665.665 0 0 0-.147-.73L8.94 8Z" fill="currentColor"/>\r
</svg>\r
`,Ci=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24A10.667 10.667 0 0 1 5.333 16a10.56 10.56 0 0 1 2.254-6.533l14.946 14.946A10.56 10.56 0 0 1 16 26.667Zm8.413-4.134L9.467 7.587A10.56 10.56 0 0 1 16 5.333 10.667 10.667 0 0 1 26.667 16a10.56 10.56 0 0 1-2.254 6.533Z" fill="currentColor"/>\r
</svg>\r
`,Si=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M16 14.667A1.333 1.333 0 0 0 14.667 16v5.333a1.333 1.333 0 0 0 2.666 0V16A1.333 1.333 0 0 0 16 14.667Zm.507-5.227a1.333 1.333 0 0 0-1.014 0 1.334 1.334 0 0 0-.44.28 1.56 1.56 0 0 0-.28.44c-.075.158-.11.332-.106.507a1.332 1.332 0 0 0 .386.946c.13.118.279.213.44.28a1.334 1.334 0 0 0 1.84-1.226 1.4 1.4 0 0 0-.386-.947 1.334 1.334 0 0 0-.44-.28ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>\r
</svg>\r
`,Ti=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="m19.627 11.72-5.72 5.733-2.2-2.2a1.334 1.334 0 1 0-1.88 1.881l3.133 3.146a1.333 1.333 0 0 0 1.88 0l6.667-6.667a1.333 1.333 0 1 0-1.88-1.893ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>\r
</svg>\r
`,Oi=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M16.334 17.667a1.334 1.334 0 0 0 1.334-1.333v-5.333a1.333 1.333 0 0 0-2.665 0v5.333a1.333 1.333 0 0 0 1.33 1.333Zm-.508 5.227c.325.134.69.134 1.014 0 .165-.064.314-.159.44-.28a1.56 1.56 0 0 0 .28-.44c.076-.158.112-.332.107-.507a1.332 1.332 0 0 0-.387-.946 1.532 1.532 0 0 0-.44-.28 1.334 1.334 0 0 0-1.838 1.226 1.4 1.4 0 0 0 .385.947c.127.121.277.216.44.28Zm.508 6.773a13.333 13.333 0 1 0 0-26.667 13.333 13.333 0 0 0 0 26.667Zm0-24A10.667 10.667 0 1 1 16.54 27a10.667 10.667 0 0 1-.206-21.333Z" fill="currentColor"/>\r
</svg>\r
`,Li=Oe(function(e){return new DOMParser().parseFromString(e,"text/html").body.childNodes[0]},"stringToHTML"),Ze=Oe(function(e){var n=new DOMParser().parseFromString(e,"application/xml");return document.importNode(n.documentElement,!0).outerHTML},"getSvgNode"),H={CONTAINER:"sn-notifications-container",NOTIFY:"sn-notify",NOTIFY_CONTENT:"sn-notify-content",NOTIFY_ICON:"sn-notify-icon",NOTIFY_CLOSE:"sn-notify-close",NOTIFY_TITLE:"sn-notify-title",NOTIFY_TEXT:"sn-notify-text",IS_X_CENTER:"sn-is-x-center",IS_Y_CENTER:"sn-is-y-center",IS_CENTER:"sn-is-center",IS_LEFT:"sn-is-left",IS_RIGHT:"sn-is-right",IS_TOP:"sn-is-top",IS_BOTTOM:"sn-is-bottom",NOTIFY_OUTLINE:"sn-notify-outline",NOTIFY_FILLED:"sn-notify-filled",NOTIFY_ERROR:"sn-notify-error",NOTIFY_WARNING:"sn-notify-warning",NOTIFY_SUCCESS:"sn-notify-success",NOTIFY_INFO:"sn-notify-info",NOTIFY_FADE:"sn-notify-fade",NOTIFY_FADE_IN:"sn-notify-fade-in",NOTIFY_SLIDE:"sn-notify-slide",NOTIFY_SLIDE_IN:"sn-notify-slide-in",NOTIFY_AUTOCLOSE:"sn-notify-autoclose"},De={ERROR:"error",WARNING:"warning",SUCCESS:"success",INFO:"info"},ot={OUTLINE:"outline",FILLED:"filled"},Rn={FADE:"fade",SLIDE:"slide"},Xe={CLOSE:Ze(Ii),SUCCESS:Ze(Ti),ERROR:Ze(Ci),WARNING:Ze(Oi),INFO:Ze(Si)},rt=Oe(function(e){e.wrapper.classList.add(H.NOTIFY_FADE),setTimeout(function(){e.wrapper.classList.add(H.NOTIFY_FADE_IN)},100)},"fadeIn"),ct=Oe(function(e){e.wrapper.classList.remove(H.NOTIFY_FADE_IN),setTimeout(function(){e.wrapper.remove()},e.speed)},"fadeOut"),Mi=Oe(function(e){e.wrapper.classList.add(H.NOTIFY_SLIDE),setTimeout(function(){e.wrapper.classList.add(H.NOTIFY_SLIDE_IN)},100)},"slideIn"),Ni=Oe(function(e){e.wrapper.classList.remove(H.NOTIFY_SLIDE_IN),setTimeout(function(){e.wrapper.remove()},e.speed)},"slideOut"),Dt=(function(){function e(n){var t=this;wi(this,e),this.notifyOut=Oe(function(h){h(t)},"notifyOut");var a=n.notificationsGap,s=a===void 0?20:a,r=n.notificationsPadding,l=r===void 0?20:r,p=n.status,c=p===void 0?"success":p,m=n.effect,f=m===void 0?Rn.FADE:m,A=n.type,w=A===void 0?"outline":A,y=n.title,E=n.text,b=n.showIcon,x=b===void 0?!0:b,L=n.customIcon,C=L===void 0?"":L,O=n.customClass,o=O===void 0?"":O,I=n.speed,v=I===void 0?500:I,D=n.showCloseButton,q=D===void 0?!0:D,j=n.autoclose,z=j===void 0?!0:j,k=n.autotimeout,F=k===void 0?3e3:k,B=n.position,G=B===void 0?"right top":B,i=n.customWrapper,u=i===void 0?"":i;if(this.customWrapper=u,this.status=c,this.title=y,this.text=E,this.showIcon=x,this.customIcon=C,this.customClass=o,this.speed=v,this.effect=f,this.showCloseButton=q,this.autoclose=z,this.autotimeout=F,this.notificationsGap=s,this.notificationsPadding=l,this.type=w,this.position=G,!this.checkRequirements()){console.error("You must specify 'title' or 'text' at least.");return}this.setContainer(),this.setWrapper(),this.setPosition(),this.showIcon&&this.setIcon(),this.showCloseButton&&this.setCloseButton(),this.setContent(),this.container.prepend(this.wrapper),this.setEffect(),this.notifyIn(this.selectedNotifyInEffect),this.autoclose&&this.autoClose(),this.setObserver()}return Ei(e,[{key:"checkRequirements",value:function(){return!!(this.title||this.text)}},{key:"setContainer",value:function(){var t=document.querySelector(".".concat(H.CONTAINER));t?this.container=t:(this.container=document.createElement("div"),this.container.classList.add(H.CONTAINER),document.body.appendChild(this.container)),this.notificationsPadding&&this.container.style.setProperty("--sn-notifications-padding","".concat(this.notificationsPadding,"px")),this.notificationsGap&&this.container.style.setProperty("--sn-notifications-gap","".concat(this.notificationsGap,"px"))}},{key:"setPosition",value:function(){this.container.classList[this.position==="center"?"add":"remove"](H.IS_CENTER),this.container.classList[this.position.includes("left")?"add":"remove"](H.IS_LEFT),this.container.classList[this.position.includes("right")?"add":"remove"](H.IS_RIGHT),this.container.classList[this.position.includes("top")?"add":"remove"](H.IS_TOP),this.container.classList[this.position.includes("bottom")?"add":"remove"](H.IS_BOTTOM),this.container.classList[this.position.includes("x-center")?"add":"remove"](H.IS_X_CENTER),this.container.classList[this.position.includes("y-center")?"add":"remove"](H.IS_Y_CENTER)}},{key:"setCloseButton",value:function(){var t=this,a=document.createElement("div");a.classList.add(H.NOTIFY_CLOSE),a.innerHTML=Xe.CLOSE,this.wrapper.appendChild(a),a.addEventListener("click",function(){t.close()})}},{key:"setWrapper",value:function(){var t=this;switch(this.customWrapper?this.wrapper=Li(this.customWrapper):this.wrapper=document.createElement("div"),this.wrapper.style.setProperty("--sn-notify-transition-duration","".concat(this.speed,"ms")),this.wrapper.classList.add(H.NOTIFY),this.type){case ot.OUTLINE:this.wrapper.classList.add(H.NOTIFY_OUTLINE);break;case ot.FILLED:this.wrapper.classList.add(H.NOTIFY_FILLED);break;default:this.wrapper.classList.add(H.NOTIFY_OUTLINE)}switch(this.status){case De.SUCCESS:this.wrapper.classList.add(H.NOTIFY_SUCCESS);break;case De.ERROR:this.wrapper.classList.add(H.NOTIFY_ERROR);break;case De.WARNING:this.wrapper.classList.add(H.NOTIFY_WARNING);break;case De.INFO:this.wrapper.classList.add(H.NOTIFY_INFO);break}this.autoclose&&(this.wrapper.classList.add(H.NOTIFY_AUTOCLOSE),this.wrapper.style.setProperty("--sn-notify-autoclose-timeout","".concat(this.autotimeout+this.speed,"ms"))),this.customClass&&this.customClass.split(" ").forEach(function(a){t.wrapper.classList.add(a)})}},{key:"setContent",value:function(){var t=document.createElement("div");t.classList.add(H.NOTIFY_CONTENT);var a,s;this.title&&(a=document.createElement("div"),a.classList.add(H.NOTIFY_TITLE),a.textContent=this.title.trim(),this.showCloseButton||(a.style.paddingRight="0")),this.text&&(s=document.createElement("div"),s.classList.add(H.NOTIFY_TEXT),s.innerHTML=this.text.trim(),this.title||(s.style.marginTop="0")),this.wrapper.appendChild(t),this.title&&t.appendChild(a),this.text&&t.appendChild(s)}},{key:"setIcon",value:function(){var t=Oe(function(s){switch(s){case De.SUCCESS:return Xe.SUCCESS;case De.ERROR:return Xe.ERROR;case De.WARNING:return Xe.WARNING;case De.INFO:return Xe.INFO}},"computedIcon"),a=document.createElement("div");a.classList.add(H.NOTIFY_ICON),a.innerHTML=this.customIcon||t(this.status),(this.status||this.customIcon)&&this.wrapper.appendChild(a)}},{key:"setObserver",value:function(){var t=this,a=new IntersectionObserver(function(s){if(s[0].intersectionRatio<=0)t.close();else return},{threshold:0});setTimeout(function(){a.observe(t.wrapper)},this.speed)}},{key:"notifyIn",value:function(n){n(this)}},{key:"autoClose",value:function(){var t=this;setTimeout(function(){t.close()},this.autotimeout+this.speed)}},{key:"close",value:function(){this.notifyOut(this.selectedNotifyOutEffect)}},{key:"setEffect",value:function(){switch(this.effect){case Rn.FADE:this.selectedNotifyInEffect=rt,this.selectedNotifyOutEffect=ct;break;case Rn.SLIDE:this.selectedNotifyInEffect=Mi,this.selectedNotifyOutEffect=Ni;break;default:this.selectedNotifyInEffect=rt,this.selectedNotifyOutEffect=ct}}}]),e})();Oe(Dt,"Notify");var kt=Dt;globalThis.Notify=kt;var se="top",fe="bottom",me="right",oe="left",Gn="auto",dn=[se,fe,me,oe],We="start",cn="end",Di="clippingParents",Rt="viewport",Qe="popper",ki="reference",lt=dn.reduce(function(e,n){return e.concat([n+"-"+We,n+"-"+cn])},[]),Pt=[].concat(dn,[Gn]).reduce(function(e,n){return e.concat([n,n+"-"+We,n+"-"+cn])},[]),Ri="beforeRead",Pi="read",Bi="afterRead",Hi="beforeMain",ji="main",zi="afterMain",Fi="beforeWrite",qi="write",_i="afterWrite",Ui=[Ri,Pi,Bi,Hi,ji,zi,Fi,qi,_i];function Ee(e){return e?(e.nodeName||"").toLowerCase():null}function le(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var n=e.ownerDocument;return n&&n.defaultView||window}return e}function Fe(e){var n=le(e).Element;return e instanceof n||e instanceof Element}function ue(e){var n=le(e).HTMLElement;return e instanceof n||e instanceof HTMLElement}function Zn(e){if(typeof ShadowRoot>"u")return!1;var n=le(e).ShadowRoot;return e instanceof n||e instanceof ShadowRoot}function Yi(e){var n=e.state;Object.keys(n.elements).forEach(function(t){var a=n.styles[t]||{},s=n.attributes[t]||{},r=n.elements[t];!ue(r)||!Ee(r)||(Object.assign(r.style,a),Object.keys(s).forEach(function(l){var p=s[l];p===!1?r.removeAttribute(l):r.setAttribute(l,p===!0?"":p)}))})}function Wi(e){var n=e.state,t={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,t.popper),n.styles=t,n.elements.arrow&&Object.assign(n.elements.arrow.style,t.arrow),function(){Object.keys(n.elements).forEach(function(a){var s=n.elements[a],r=n.attributes[a]||{},l=Object.keys(n.styles.hasOwnProperty(a)?n.styles[a]:t[a]),p=l.reduce(function(c,m){return c[m]="",c},{});!ue(s)||!Ee(s)||(Object.assign(s.style,p),Object.keys(r).forEach(function(c){s.removeAttribute(c)}))})}}const Bt={name:"applyStyles",enabled:!0,phase:"write",fn:Yi,effect:Wi,requires:["computeStyles"]};function xe(e){return e.split("-")[0]}var ze=Math.max,En=Math.min,Ve=Math.round;function qn(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(n){return n.brand+"/"+n.version}).join(" "):navigator.userAgent}function Ht(){return!/^((?!chrome|android).)*safari/i.test(qn())}function $e(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!1);var a=e.getBoundingClientRect(),s=1,r=1;n&&ue(e)&&(s=e.offsetWidth>0&&Ve(a.width)/e.offsetWidth||1,r=e.offsetHeight>0&&Ve(a.height)/e.offsetHeight||1);var l=Fe(e)?le(e):window,p=l.visualViewport,c=!Ht()&&t,m=(a.left+(c&&p?p.offsetLeft:0))/s,f=(a.top+(c&&p?p.offsetTop:0))/r,A=a.width/s,w=a.height/r;return{width:A,height:w,top:f,right:m+A,bottom:f+w,left:m,x:m,y:f}}function Xn(e){var n=$e(e),t=e.offsetWidth,a=e.offsetHeight;return Math.abs(n.width-t)<=1&&(t=n.width),Math.abs(n.height-a)<=1&&(a=n.height),{x:e.offsetLeft,y:e.offsetTop,width:t,height:a}}function jt(e,n){var t=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(t&&Zn(t)){var a=n;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function Le(e){return le(e).getComputedStyle(e)}function Vi(e){return["table","td","th"].indexOf(Ee(e))>=0}function ke(e){return((Fe(e)?e.ownerDocument:e.document)||window.document).documentElement}function In(e){return Ee(e)==="html"?e:e.assignedSlot||e.parentNode||(Zn(e)?e.host:null)||ke(e)}function dt(e){return!ue(e)||Le(e).position==="fixed"?null:e.offsetParent}function $i(e){var n=/firefox/i.test(qn()),t=/Trident/i.test(qn());if(t&&ue(e)){var a=Le(e);if(a.position==="fixed")return null}var s=In(e);for(Zn(s)&&(s=s.host);ue(s)&&["html","body"].indexOf(Ee(s))<0;){var r=Le(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||n&&r.willChange==="filter"||n&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function pn(e){for(var n=le(e),t=dt(e);t&&Vi(t)&&Le(t).position==="static";)t=dt(t);return t&&(Ee(t)==="html"||Ee(t)==="body"&&Le(t).position==="static")?n:t||$i(e)||n}function Qn(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function sn(e,n,t){return ze(e,En(n,t))}function Gi(e,n,t){var a=sn(e,n,t);return a>t?t:a}function zt(){return{top:0,right:0,bottom:0,left:0}}function Ft(e){return Object.assign({},zt(),e)}function qt(e,n){return n.reduce(function(t,a){return t[a]=e,t},{})}var Zi=function(n,t){return n=typeof n=="function"?n(Object.assign({},t.rects,{placement:t.placement})):n,Ft(typeof n!="number"?n:qt(n,dn))};function Xi(e){var n,t=e.state,a=e.name,s=e.options,r=t.elements.arrow,l=t.modifiersData.popperOffsets,p=xe(t.placement),c=Qn(p),m=[oe,me].indexOf(p)>=0,f=m?"height":"width";if(!(!r||!l)){var A=Zi(s.padding,t),w=Xn(r),y=c==="y"?se:oe,E=c==="y"?fe:me,b=t.rects.reference[f]+t.rects.reference[c]-l[c]-t.rects.popper[f],x=l[c]-t.rects.reference[c],L=pn(r),C=L?c==="y"?L.clientHeight||0:L.clientWidth||0:0,O=b/2-x/2,o=A[y],I=C-w[f]-A[E],v=C/2-w[f]/2+O,D=sn(o,v,I),q=c;t.modifiersData[a]=(n={},n[q]=D,n.centerOffset=D-v,n)}}function Qi(e){var n=e.state,t=e.options,a=t.element,s=a===void 0?"[data-popper-arrow]":a;s!=null&&(typeof s=="string"&&(s=n.elements.popper.querySelector(s),!s)||jt(n.elements.popper,s)&&(n.elements.arrow=s))}const Ji={name:"arrow",enabled:!0,phase:"main",fn:Xi,effect:Qi,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ge(e){return e.split("-")[1]}var Ki={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ea(e,n){var t=e.x,a=e.y,s=n.devicePixelRatio||1;return{x:Ve(t*s)/s||0,y:Ve(a*s)/s||0}}function pt(e){var n,t=e.popper,a=e.popperRect,s=e.placement,r=e.variation,l=e.offsets,p=e.position,c=e.gpuAcceleration,m=e.adaptive,f=e.roundOffsets,A=e.isFixed,w=l.x,y=w===void 0?0:w,E=l.y,b=E===void 0?0:E,x=typeof f=="function"?f({x:y,y:b}):{x:y,y:b};y=x.x,b=x.y;var L=l.hasOwnProperty("x"),C=l.hasOwnProperty("y"),O=oe,o=se,I=window;if(m){var v=pn(t),D="clientHeight",q="clientWidth";if(v===le(t)&&(v=ke(t),Le(v).position!=="static"&&p==="absolute"&&(D="scrollHeight",q="scrollWidth")),v=v,s===se||(s===oe||s===me)&&r===cn){o=fe;var j=A&&v===I&&I.visualViewport?I.visualViewport.height:v[D];b-=j-a.height,b*=c?1:-1}if(s===oe||(s===se||s===fe)&&r===cn){O=me;var z=A&&v===I&&I.visualViewport?I.visualViewport.width:v[q];y-=z-a.width,y*=c?1:-1}}var k=Object.assign({position:p},m&&Ki),F=f===!0?ea({x:y,y:b},le(t)):{x:y,y:b};if(y=F.x,b=F.y,c){var B;return Object.assign({},k,(B={},B[o]=C?"0":"",B[O]=L?"0":"",B.transform=(I.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",B))}return Object.assign({},k,(n={},n[o]=C?b+"px":"",n[O]=L?y+"px":"",n.transform="",n))}function na(e){var n=e.state,t=e.options,a=t.gpuAcceleration,s=a===void 0?!0:a,r=t.adaptive,l=r===void 0?!0:r,p=t.roundOffsets,c=p===void 0?!0:p,m={placement:xe(n.placement),variation:Ge(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:s,isFixed:n.options.strategy==="fixed"};n.modifiersData.popperOffsets!=null&&(n.styles.popper=Object.assign({},n.styles.popper,pt(Object.assign({},m,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:l,roundOffsets:c})))),n.modifiersData.arrow!=null&&(n.styles.arrow=Object.assign({},n.styles.arrow,pt(Object.assign({},m,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})}const ta={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:na,data:{}};var vn={passive:!0};function ia(e){var n=e.state,t=e.instance,a=e.options,s=a.scroll,r=s===void 0?!0:s,l=a.resize,p=l===void 0?!0:l,c=le(n.elements.popper),m=[].concat(n.scrollParents.reference,n.scrollParents.popper);return r&&m.forEach(function(f){f.addEventListener("scroll",t.update,vn)}),p&&c.addEventListener("resize",t.update,vn),function(){r&&m.forEach(function(f){f.removeEventListener("scroll",t.update,vn)}),p&&c.removeEventListener("resize",t.update,vn)}}const aa={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ia,data:{}};var sa={left:"right",right:"left",bottom:"top",top:"bottom"};function yn(e){return e.replace(/left|right|bottom|top/g,function(n){return sa[n]})}var oa={start:"end",end:"start"};function ut(e){return e.replace(/start|end/g,function(n){return oa[n]})}function Jn(e){var n=le(e),t=n.pageXOffset,a=n.pageYOffset;return{scrollLeft:t,scrollTop:a}}function Kn(e){return $e(ke(e)).left+Jn(e).scrollLeft}function ra(e,n){var t=le(e),a=ke(e),s=t.visualViewport,r=a.clientWidth,l=a.clientHeight,p=0,c=0;if(s){r=s.width,l=s.height;var m=Ht();(m||!m&&n==="fixed")&&(p=s.offsetLeft,c=s.offsetTop)}return{width:r,height:l,x:p+Kn(e),y:c}}function ca(e){var n,t=ke(e),a=Jn(e),s=(n=e.ownerDocument)==null?void 0:n.body,r=ze(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),l=ze(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),p=-a.scrollLeft+Kn(e),c=-a.scrollTop;return Le(s||t).direction==="rtl"&&(p+=ze(t.clientWidth,s?s.clientWidth:0)-r),{width:r,height:l,x:p,y:c}}function et(e){var n=Le(e),t=n.overflow,a=n.overflowX,s=n.overflowY;return/auto|scroll|overlay|hidden/.test(t+s+a)}function _t(e){return["html","body","#document"].indexOf(Ee(e))>=0?e.ownerDocument.body:ue(e)&&et(e)?e:_t(In(e))}function on(e,n){var t;n===void 0&&(n=[]);var a=_t(e),s=a===((t=e.ownerDocument)==null?void 0:t.body),r=le(a),l=s?[r].concat(r.visualViewport||[],et(a)?a:[]):a,p=n.concat(l);return s?p:p.concat(on(In(l)))}function _n(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function la(e,n){var t=$e(e,!1,n==="fixed");return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function ft(e,n,t){return n===Rt?_n(ra(e,t)):Fe(n)?la(n,t):_n(ca(ke(e)))}function da(e){var n=on(In(e)),t=["absolute","fixed"].indexOf(Le(e).position)>=0,a=t&&ue(e)?pn(e):e;return Fe(a)?n.filter(function(s){return Fe(s)&&jt(s,a)&&Ee(s)!=="body"}):[]}function pa(e,n,t,a){var s=n==="clippingParents"?da(e):[].concat(n),r=[].concat(s,[t]),l=r[0],p=r.reduce(function(c,m){var f=ft(e,m,a);return c.top=ze(f.top,c.top),c.right=En(f.right,c.right),c.bottom=En(f.bottom,c.bottom),c.left=ze(f.left,c.left),c},ft(e,l,a));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function Ut(e){var n=e.reference,t=e.element,a=e.placement,s=a?xe(a):null,r=a?Ge(a):null,l=n.x+n.width/2-t.width/2,p=n.y+n.height/2-t.height/2,c;switch(s){case se:c={x:l,y:n.y-t.height};break;case fe:c={x:l,y:n.y+n.height};break;case me:c={x:n.x+n.width,y:p};break;case oe:c={x:n.x-t.width,y:p};break;default:c={x:n.x,y:n.y}}var m=s?Qn(s):null;if(m!=null){var f=m==="y"?"height":"width";switch(r){case We:c[m]=c[m]-(n[f]/2-t[f]/2);break;case cn:c[m]=c[m]+(n[f]/2-t[f]/2);break}}return c}function ln(e,n){n===void 0&&(n={});var t=n,a=t.placement,s=a===void 0?e.placement:a,r=t.strategy,l=r===void 0?e.strategy:r,p=t.boundary,c=p===void 0?Di:p,m=t.rootBoundary,f=m===void 0?Rt:m,A=t.elementContext,w=A===void 0?Qe:A,y=t.altBoundary,E=y===void 0?!1:y,b=t.padding,x=b===void 0?0:b,L=Ft(typeof x!="number"?x:qt(x,dn)),C=w===Qe?ki:Qe,O=e.rects.popper,o=e.elements[E?C:w],I=pa(Fe(o)?o:o.contextElement||ke(e.elements.popper),c,f,l),v=$e(e.elements.reference),D=Ut({reference:v,element:O,placement:s}),q=_n(Object.assign({},O,D)),j=w===Qe?q:v,z={top:I.top-j.top+L.top,bottom:j.bottom-I.bottom+L.bottom,left:I.left-j.left+L.left,right:j.right-I.right+L.right},k=e.modifiersData.offset;if(w===Qe&&k){var F=k[s];Object.keys(z).forEach(function(B){var G=[me,fe].indexOf(B)>=0?1:-1,i=[se,fe].indexOf(B)>=0?"y":"x";z[B]+=F[i]*G})}return z}function ua(e,n){n===void 0&&(n={});var t=n,a=t.placement,s=t.boundary,r=t.rootBoundary,l=t.padding,p=t.flipVariations,c=t.allowedAutoPlacements,m=c===void 0?Pt:c,f=Ge(a),A=f?p?lt:lt.filter(function(E){return Ge(E)===f}):dn,w=A.filter(function(E){return m.indexOf(E)>=0});w.length===0&&(w=A);var y=w.reduce(function(E,b){return E[b]=ln(e,{placement:b,boundary:s,rootBoundary:r,padding:l})[xe(b)],E},{});return Object.keys(y).sort(function(E,b){return y[E]-y[b]})}function fa(e){if(xe(e)===Gn)return[];var n=yn(e);return[ut(e),n,ut(n)]}function ma(e){var n=e.state,t=e.options,a=e.name;if(!n.modifiersData[a]._skip){for(var s=t.mainAxis,r=s===void 0?!0:s,l=t.altAxis,p=l===void 0?!0:l,c=t.fallbackPlacements,m=t.padding,f=t.boundary,A=t.rootBoundary,w=t.altBoundary,y=t.flipVariations,E=y===void 0?!0:y,b=t.allowedAutoPlacements,x=n.options.placement,L=xe(x),C=L===x,O=c||(C||!E?[yn(x)]:fa(x)),o=[x].concat(O).reduce(function(K,R){return K.concat(xe(R)===Gn?ua(n,{placement:R,boundary:f,rootBoundary:A,padding:m,flipVariations:E,allowedAutoPlacements:b}):R)},[]),I=n.rects.reference,v=n.rects.popper,D=new Map,q=!0,j=o[0],z=0;z<o.length;z++){var k=o[z],F=xe(k),B=Ge(k)===We,G=[se,fe].indexOf(F)>=0,i=G?"width":"height",u=ln(n,{placement:k,boundary:f,rootBoundary:A,altBoundary:w,padding:m}),h=G?B?me:oe:B?fe:se;I[i]>v[i]&&(h=yn(h));var M=yn(h),T=[];if(r&&T.push(u[F]<=0),p&&T.push(u[h]<=0,u[M]<=0),T.every(function(K){return K})){j=k,q=!1;break}D.set(k,T)}if(q)for(var _=E?3:1,W=function(R){var U=o.find(function($){var V=D.get($);if(V)return V.slice(0,R).every(function(ee){return ee})});if(U)return j=U,"break"},Y=_;Y>0;Y--){var te=W(Y);if(te==="break")break}n.placement!==j&&(n.modifiersData[a]._skip=!0,n.placement=j,n.reset=!0)}}const va={name:"flip",enabled:!0,phase:"main",fn:ma,requiresIfExists:["offset"],data:{_skip:!1}};function mt(e,n,t){return t===void 0&&(t={x:0,y:0}),{top:e.top-n.height-t.y,right:e.right-n.width+t.x,bottom:e.bottom-n.height+t.y,left:e.left-n.width-t.x}}function vt(e){return[se,me,fe,oe].some(function(n){return e[n]>=0})}function ha(e){var n=e.state,t=e.name,a=n.rects.reference,s=n.rects.popper,r=n.modifiersData.preventOverflow,l=ln(n,{elementContext:"reference"}),p=ln(n,{altBoundary:!0}),c=mt(l,a),m=mt(p,s,r),f=vt(c),A=vt(m);n.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:m,isReferenceHidden:f,hasPopperEscaped:A},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":A})}const ga={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ha};function ba(e,n,t){var a=xe(e),s=[oe,se].indexOf(a)>=0?-1:1,r=typeof t=="function"?t(Object.assign({},n,{placement:e})):t,l=r[0],p=r[1];return l=l||0,p=(p||0)*s,[oe,me].indexOf(a)>=0?{x:p,y:l}:{x:l,y:p}}function ya(e){var n=e.state,t=e.options,a=e.name,s=t.offset,r=s===void 0?[0,0]:s,l=Pt.reduce(function(f,A){return f[A]=ba(A,n.rects,r),f},{}),p=l[n.placement],c=p.x,m=p.y;n.modifiersData.popperOffsets!=null&&(n.modifiersData.popperOffsets.x+=c,n.modifiersData.popperOffsets.y+=m),n.modifiersData[a]=l}const wa={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ya};function xa(e){var n=e.state,t=e.name;n.modifiersData[t]=Ut({reference:n.rects.reference,element:n.rects.popper,placement:n.placement})}const Ea={name:"popperOffsets",enabled:!0,phase:"read",fn:xa,data:{}};function Aa(e){return e==="x"?"y":"x"}function Ia(e){var n=e.state,t=e.options,a=e.name,s=t.mainAxis,r=s===void 0?!0:s,l=t.altAxis,p=l===void 0?!1:l,c=t.boundary,m=t.rootBoundary,f=t.altBoundary,A=t.padding,w=t.tether,y=w===void 0?!0:w,E=t.tetherOffset,b=E===void 0?0:E,x=ln(n,{boundary:c,rootBoundary:m,padding:A,altBoundary:f}),L=xe(n.placement),C=Ge(n.placement),O=!C,o=Qn(L),I=Aa(o),v=n.modifiersData.popperOffsets,D=n.rects.reference,q=n.rects.popper,j=typeof b=="function"?b(Object.assign({},n.rects,{placement:n.placement})):b,z=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),k=n.modifiersData.offset?n.modifiersData.offset[n.placement]:null,F={x:0,y:0};if(v){if(r){var B,G=o==="y"?se:oe,i=o==="y"?fe:me,u=o==="y"?"height":"width",h=v[o],M=h+x[G],T=h-x[i],_=y?-q[u]/2:0,W=C===We?D[u]:q[u],Y=C===We?-q[u]:-D[u],te=n.elements.arrow,K=y&&te?Xn(te):{width:0,height:0},R=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:zt(),U=R[G],$=R[i],V=sn(0,D[u],K[u]),ee=O?D[u]/2-_-V-U-z.mainAxis:W-V-U-z.mainAxis,Z=O?-D[u]/2+_+V+$+z.mainAxis:Y+V+$+z.mainAxis,X=n.elements.arrow&&pn(n.elements.arrow),Me=X?o==="y"?X.clientTop||0:X.clientLeft||0:0,ie=(B=k==null?void 0:k[o])!=null?B:0,de=h+ee-ie-Me,pe=h+Z-ie,re=sn(y?En(M,de):M,h,y?ze(T,pe):T);v[o]=re,F[o]=re-h}if(p){var Ae,Ie=o==="x"?se:oe,Ce=o==="x"?fe:me,J=v[I],ne=I==="y"?"height":"width",ve=J+x[Ie],ce=J-x[Ce],Ne=[se,oe].indexOf(L)!==-1,he=(Ae=k==null?void 0:k[I])!=null?Ae:0,be=Ne?ve:J-D[ne]-q[ne]-he+z.altAxis,Se=Ne?J+D[ne]+q[ne]-he-z.altAxis:ce,Re=y&&Ne?Gi(be,J,Se):sn(y?be:ve,J,y?Se:ce);v[I]=Re,F[I]=Re-J}n.modifiersData[a]=F}}const Ca={name:"preventOverflow",enabled:!0,phase:"main",fn:Ia,requiresIfExists:["offset"]};function Sa(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ta(e){return e===le(e)||!ue(e)?Jn(e):Sa(e)}function Oa(e){var n=e.getBoundingClientRect(),t=Ve(n.width)/e.offsetWidth||1,a=Ve(n.height)/e.offsetHeight||1;return t!==1||a!==1}function La(e,n,t){t===void 0&&(t=!1);var a=ue(n),s=ue(n)&&Oa(n),r=ke(n),l=$e(e,s,t),p={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!t)&&((Ee(n)!=="body"||et(r))&&(p=Ta(n)),ue(n)?(c=$e(n,!0),c.x+=n.clientLeft,c.y+=n.clientTop):r&&(c.x=Kn(r))),{x:l.left+p.scrollLeft-c.x,y:l.top+p.scrollTop-c.y,width:l.width,height:l.height}}function Ma(e){var n=new Map,t=new Set,a=[];e.forEach(function(r){n.set(r.name,r)});function s(r){t.add(r.name);var l=[].concat(r.requires||[],r.requiresIfExists||[]);l.forEach(function(p){if(!t.has(p)){var c=n.get(p);c&&s(c)}}),a.push(r)}return e.forEach(function(r){t.has(r.name)||s(r)}),a}function Na(e){var n=Ma(e);return Ui.reduce(function(t,a){return t.concat(n.filter(function(s){return s.phase===a}))},[])}function Da(e){var n;return function(){return n||(n=new Promise(function(t){Promise.resolve().then(function(){n=void 0,t(e())})})),n}}function ka(e){var n=e.reduce(function(t,a){var s=t[a.name];return t[a.name]=s?Object.assign({},s,a,{options:Object.assign({},s.options,a.options),data:Object.assign({},s.data,a.data)}):a,t},{});return Object.keys(n).map(function(t){return n[t]})}var ht={placement:"bottom",modifiers:[],strategy:"absolute"};function gt(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return!n.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function Ra(e){e===void 0&&(e={});var n=e,t=n.defaultModifiers,a=t===void 0?[]:t,s=n.defaultOptions,r=s===void 0?ht:s;return function(p,c,m){m===void 0&&(m=r);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},ht,r),modifiersData:{},elements:{reference:p,popper:c},attributes:{},styles:{}},A=[],w=!1,y={state:f,setOptions:function(L){var C=typeof L=="function"?L(f.options):L;b(),f.options=Object.assign({},r,f.options,C),f.scrollParents={reference:Fe(p)?on(p):p.contextElement?on(p.contextElement):[],popper:on(c)};var O=Na(ka([].concat(a,f.options.modifiers)));return f.orderedModifiers=O.filter(function(o){return o.enabled}),E(),y.update()},forceUpdate:function(){if(!w){var L=f.elements,C=L.reference,O=L.popper;if(gt(C,O)){f.rects={reference:La(C,pn(O),f.options.strategy==="fixed"),popper:Xn(O)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(z){return f.modifiersData[z.name]=Object.assign({},z.data)});for(var o=0;o<f.orderedModifiers.length;o++){if(f.reset===!0){f.reset=!1,o=-1;continue}var I=f.orderedModifiers[o],v=I.fn,D=I.options,q=D===void 0?{}:D,j=I.name;typeof v=="function"&&(f=v({state:f,options:q,name:j,instance:y})||f)}}}},update:Da(function(){return new Promise(function(x){y.forceUpdate(),x(f)})}),destroy:function(){b(),w=!0}};if(!gt(p,c))return y;y.setOptions(m).then(function(x){!w&&m.onFirstUpdate&&m.onFirstUpdate(x)});function E(){f.orderedModifiers.forEach(function(x){var L=x.name,C=x.options,O=C===void 0?{}:C,o=x.effect;if(typeof o=="function"){var I=o({state:f,name:L,instance:y,options:O}),v=function(){};A.push(I||v)}})}function b(){A.forEach(function(x){return x()}),A=[]}return y}}var Pa=[aa,Ea,ta,Bt,wa,va,Ca,Ji,ga],Ba=Ra({defaultModifiers:Pa}),Ha="tippy-box",Yt="tippy-content",ja="tippy-backdrop",Wt="tippy-arrow",Vt="tippy-svg-arrow",Be={passive:!0,capture:!0},$t=function(){return document.body};function Pn(e,n,t){if(Array.isArray(e)){var a=e[n];return a??(Array.isArray(t)?t[n]:t)}return e}function nt(e,n){var t={}.toString.call(e);return t.indexOf("[object")===0&&t.indexOf(n+"]")>-1}function Gt(e,n){return typeof e=="function"?e.apply(void 0,n):e}function bt(e,n){if(n===0)return e;var t;return function(a){clearTimeout(t),t=setTimeout(function(){e(a)},n)}}function za(e){return e.split(/\s+/).filter(Boolean)}function Ue(e){return[].concat(e)}function yt(e,n){e.indexOf(n)===-1&&e.push(n)}function Fa(e){return e.filter(function(n,t){return e.indexOf(n)===t})}function qa(e){return e.split("-")[0]}function An(e){return[].slice.call(e)}function wt(e){return Object.keys(e).reduce(function(n,t){return e[t]!==void 0&&(n[t]=e[t]),n},{})}function rn(){return document.createElement("div")}function Cn(e){return["Element","Fragment"].some(function(n){return nt(e,n)})}function _a(e){return nt(e,"NodeList")}function Ua(e){return nt(e,"MouseEvent")}function Ya(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function Wa(e){return Cn(e)?[e]:_a(e)?An(e):Array.isArray(e)?e:An(document.querySelectorAll(e))}function Bn(e,n){e.forEach(function(t){t&&(t.style.transitionDuration=n+"ms")})}function xt(e,n){e.forEach(function(t){t&&t.setAttribute("data-state",n)})}function Va(e){var n,t=Ue(e),a=t[0];return a!=null&&(n=a.ownerDocument)!=null&&n.body?a.ownerDocument:document}function $a(e,n){var t=n.clientX,a=n.clientY;return e.every(function(s){var r=s.popperRect,l=s.popperState,p=s.props,c=p.interactiveBorder,m=qa(l.placement),f=l.modifiersData.offset;if(!f)return!0;var A=m==="bottom"?f.top.y:0,w=m==="top"?f.bottom.y:0,y=m==="right"?f.left.x:0,E=m==="left"?f.right.x:0,b=r.top-a+A>c,x=a-r.bottom-w>c,L=r.left-t+y>c,C=t-r.right-E>c;return b||x||L||C})}function Hn(e,n,t){var a=n+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(s){e[a](s,t)})}function Et(e,n){for(var t=n;t;){var a;if(e.contains(t))return!0;t=t.getRootNode==null||(a=t.getRootNode())==null?void 0:a.host}return!1}var ye={isTouch:!1},At=0;function Ga(){ye.isTouch||(ye.isTouch=!0,window.performance&&document.addEventListener("mousemove",Zt))}function Zt(){var e=performance.now();e-At<20&&(ye.isTouch=!1,document.removeEventListener("mousemove",Zt)),At=e}function Za(){var e=document.activeElement;if(Ya(e)){var n=e._tippy;e.blur&&!n.state.isVisible&&e.blur()}}function Xa(){document.addEventListener("touchstart",Ga,Be),window.addEventListener("blur",Za)}var Qa=typeof window<"u"&&typeof document<"u",Ja=Qa?!!window.msCrypto:!1,Ka={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},es={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},ge=Object.assign({appendTo:$t,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Ka,es),ns=Object.keys(ge),ts=function(n){var t=Object.keys(n);t.forEach(function(a){ge[a]=n[a]})};function Xt(e){var n=e.plugins||[],t=n.reduce(function(a,s){var r=s.name,l=s.defaultValue;if(r){var p;a[r]=e[r]!==void 0?e[r]:(p=ge[r])!=null?p:l}return a},{});return Object.assign({},e,t)}function is(e,n){var t=n?Object.keys(Xt(Object.assign({},ge,{plugins:n}))):ns,a=t.reduce(function(s,r){var l=(e.getAttribute("data-tippy-"+r)||"").trim();if(!l)return s;if(r==="content")s[r]=l;else try{s[r]=JSON.parse(l)}catch{s[r]=l}return s},{});return a}function It(e,n){var t=Object.assign({},n,{content:Gt(n.content,[e])},n.ignoreAttributes?{}:is(e,n.plugins));return t.aria=Object.assign({},ge.aria,t.aria),t.aria={expanded:t.aria.expanded==="auto"?n.interactive:t.aria.expanded,content:t.aria.content==="auto"?n.interactive?null:"describedby":t.aria.content},t}var as=function(){return"innerHTML"};function Un(e,n){e[as()]=n}function Ct(e){var n=rn();return e===!0?n.className=Wt:(n.className=Vt,Cn(e)?n.appendChild(e):Un(n,e)),n}function St(e,n){Cn(n.content)?(Un(e,""),e.appendChild(n.content)):typeof n.content!="function"&&(n.allowHTML?Un(e,n.content):e.textContent=n.content)}function Yn(e){var n=e.firstElementChild,t=An(n.children);return{box:n,content:t.find(function(a){return a.classList.contains(Yt)}),arrow:t.find(function(a){return a.classList.contains(Wt)||a.classList.contains(Vt)}),backdrop:t.find(function(a){return a.classList.contains(ja)})}}function Qt(e){var n=rn(),t=rn();t.className=Ha,t.setAttribute("data-state","hidden"),t.setAttribute("tabindex","-1");var a=rn();a.className=Yt,a.setAttribute("data-state","hidden"),St(a,e.props),n.appendChild(t),t.appendChild(a),s(e.props,e.props);function s(r,l){var p=Yn(n),c=p.box,m=p.content,f=p.arrow;l.theme?c.setAttribute("data-theme",l.theme):c.removeAttribute("data-theme"),typeof l.animation=="string"?c.setAttribute("data-animation",l.animation):c.removeAttribute("data-animation"),l.inertia?c.setAttribute("data-inertia",""):c.removeAttribute("data-inertia"),c.style.maxWidth=typeof l.maxWidth=="number"?l.maxWidth+"px":l.maxWidth,l.role?c.setAttribute("role",l.role):c.removeAttribute("role"),(r.content!==l.content||r.allowHTML!==l.allowHTML)&&St(m,e.props),l.arrow?f?r.arrow!==l.arrow&&(c.removeChild(f),c.appendChild(Ct(l.arrow))):c.appendChild(Ct(l.arrow)):f&&c.removeChild(f)}return{popper:n,onUpdate:s}}Qt.$$tippy=!0;var ss=1,hn=[],jn=[];function os(e,n){var t=It(e,Object.assign({},ge,Xt(wt(n)))),a,s,r,l=!1,p=!1,c=!1,m=!1,f,A,w,y=[],E=bt(de,t.interactiveDebounce),b,x=ss++,L=null,C=Fa(t.plugins),O={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},o={id:x,reference:e,popper:rn(),popperInstance:L,props:t,state:O,plugins:C,clearDelayTimeouts:be,setProps:Se,setContent:Re,show:Sn,hide:Tn,hideWithInteractivity:On,enable:Ne,disable:he,unmount:Ln,destroy:Mn};if(!t.render)return o;var I=t.render(o),v=I.popper,D=I.onUpdate;v.setAttribute("data-tippy-root",""),v.id="tippy-"+o.id,o.popper=v,e._tippy=o,v._tippy=o;var q=C.map(function(d){return d.fn(o)}),j=e.hasAttribute("aria-expanded");return X(),_(),h(),M("onCreate",[o]),t.showOnCreate&&ve(),v.addEventListener("mouseenter",function(){o.props.interactive&&o.state.isVisible&&o.clearDelayTimeouts()}),v.addEventListener("mouseleave",function(){o.props.interactive&&o.props.trigger.indexOf("mouseenter")>=0&&G().addEventListener("mousemove",E)}),o;function z(){var d=o.props.touch;return Array.isArray(d)?d:[d,0]}function k(){return z()[0]==="hold"}function F(){var d;return!!((d=o.props.render)!=null&&d.$$tippy)}function B(){return b||e}function G(){var d=B().parentNode;return d?Va(d):document}function i(){return Yn(v)}function u(d){return o.state.isMounted&&!o.state.isVisible||ye.isTouch||f&&f.type==="focus"?0:Pn(o.props.delay,d?0:1,ge.delay)}function h(d){d===void 0&&(d=!1),v.style.pointerEvents=o.props.interactive&&!d?"":"none",v.style.zIndex=""+o.props.zIndex}function M(d,g,S){if(S===void 0&&(S=!0),q.forEach(function(N){N[d]&&N[d].apply(N,g)}),S){var P;(P=o.props)[d].apply(P,g)}}function T(){var d=o.props.aria;if(d.content){var g="aria-"+d.content,S=v.id,P=Ue(o.props.triggerTarget||e);P.forEach(function(N){var Q=N.getAttribute(g);if(o.state.isVisible)N.setAttribute(g,Q?Q+" "+S:S);else{var ae=Q&&Q.replace(S,"").trim();ae?N.setAttribute(g,ae):N.removeAttribute(g)}})}}function _(){if(!(j||!o.props.aria.expanded)){var d=Ue(o.props.triggerTarget||e);d.forEach(function(g){o.props.interactive?g.setAttribute("aria-expanded",o.state.isVisible&&g===B()?"true":"false"):g.removeAttribute("aria-expanded")})}}function W(){G().removeEventListener("mousemove",E),hn=hn.filter(function(d){return d!==E})}function Y(d){if(!(ye.isTouch&&(c||d.type==="mousedown"))){var g=d.composedPath&&d.composedPath()[0]||d.target;if(!(o.props.interactive&&Et(v,g))){if(Ue(o.props.triggerTarget||e).some(function(S){return Et(S,g)})){if(ye.isTouch||o.state.isVisible&&o.props.trigger.indexOf("click")>=0)return}else M("onClickOutside",[o,d]);o.props.hideOnClick===!0&&(o.clearDelayTimeouts(),o.hide(),p=!0,setTimeout(function(){p=!1}),o.state.isMounted||U())}}}function te(){c=!0}function K(){c=!1}function R(){var d=G();d.addEventListener("mousedown",Y,!0),d.addEventListener("touchend",Y,Be),d.addEventListener("touchstart",K,Be),d.addEventListener("touchmove",te,Be)}function U(){var d=G();d.removeEventListener("mousedown",Y,!0),d.removeEventListener("touchend",Y,Be),d.removeEventListener("touchstart",K,Be),d.removeEventListener("touchmove",te,Be)}function $(d,g){ee(d,function(){!o.state.isVisible&&v.parentNode&&v.parentNode.contains(v)&&g()})}function V(d,g){ee(d,g)}function ee(d,g){var S=i().box;function P(N){N.target===S&&(Hn(S,"remove",P),g())}if(d===0)return g();Hn(S,"remove",A),Hn(S,"add",P),A=P}function Z(d,g,S){S===void 0&&(S=!1);var P=Ue(o.props.triggerTarget||e);P.forEach(function(N){N.addEventListener(d,g,S),y.push({node:N,eventType:d,handler:g,options:S})})}function X(){k()&&(Z("touchstart",ie,{passive:!0}),Z("touchend",pe,{passive:!0})),za(o.props.trigger).forEach(function(d){if(d!=="manual")switch(Z(d,ie),d){case"mouseenter":Z("mouseleave",pe);break;case"focus":Z(Ja?"focusout":"blur",re);break;case"focusin":Z("focusout",re);break}})}function Me(){y.forEach(function(d){var g=d.node,S=d.eventType,P=d.handler,N=d.options;g.removeEventListener(S,P,N)}),y=[]}function ie(d){var g,S=!1;if(!(!o.state.isEnabled||Ae(d)||p)){var P=((g=f)==null?void 0:g.type)==="focus";f=d,b=d.currentTarget,_(),!o.state.isVisible&&Ua(d)&&hn.forEach(function(N){return N(d)}),d.type==="click"&&(o.props.trigger.indexOf("mouseenter")<0||l)&&o.props.hideOnClick!==!1&&o.state.isVisible?S=!0:ve(d),d.type==="click"&&(l=!S),S&&!P&&ce(d)}}function de(d){var g=d.target,S=B().contains(g)||v.contains(g);if(!(d.type==="mousemove"&&S)){var P=ne().concat(v).map(function(N){var Q,ae=N._tippy,qe=(Q=ae.popperInstance)==null?void 0:Q.state;return qe?{popperRect:N.getBoundingClientRect(),popperState:qe,props:t}:null}).filter(Boolean);$a(P,d)&&(W(),ce(d))}}function pe(d){var g=Ae(d)||o.props.trigger.indexOf("click")>=0&&l;if(!g){if(o.props.interactive){o.hideWithInteractivity(d);return}ce(d)}}function re(d){o.props.trigger.indexOf("focusin")<0&&d.target!==B()||o.props.interactive&&d.relatedTarget&&v.contains(d.relatedTarget)||ce(d)}function Ae(d){return ye.isTouch?k()!==d.type.indexOf("touch")>=0:!1}function Ie(){Ce();var d=o.props,g=d.popperOptions,S=d.placement,P=d.offset,N=d.getReferenceClientRect,Q=d.moveTransition,ae=F()?Yn(v).arrow:null,qe=N?{getBoundingClientRect:N,contextElement:N.contextElement||B()}:e,at={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(fn){var _e=fn.state;if(F()){var ti=i(),Dn=ti.box;["placement","reference-hidden","escaped"].forEach(function(mn){mn==="placement"?Dn.setAttribute("data-placement",_e.placement):_e.attributes.popper["data-popper-"+mn]?Dn.setAttribute("data-"+mn,""):Dn.removeAttribute("data-"+mn)}),_e.attributes.popper={}}}},Pe=[{name:"offset",options:{offset:P}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!Q}},at];F()&&ae&&Pe.push({name:"arrow",options:{element:ae,padding:3}}),Pe.push.apply(Pe,(g==null?void 0:g.modifiers)||[]),o.popperInstance=Ba(qe,v,Object.assign({},g,{placement:S,onFirstUpdate:w,modifiers:Pe}))}function Ce(){o.popperInstance&&(o.popperInstance.destroy(),o.popperInstance=null)}function J(){var d=o.props.appendTo,g,S=B();o.props.interactive&&d===$t||d==="parent"?g=S.parentNode:g=Gt(d,[S]),g.contains(v)||g.appendChild(v),o.state.isMounted=!0,Ie()}function ne(){return An(v.querySelectorAll("[data-tippy-root]"))}function ve(d){o.clearDelayTimeouts(),d&&M("onTrigger",[o,d]),R();var g=u(!0),S=z(),P=S[0],N=S[1];ye.isTouch&&P==="hold"&&N&&(g=N),g?a=setTimeout(function(){o.show()},g):o.show()}function ce(d){if(o.clearDelayTimeouts(),M("onUntrigger",[o,d]),!o.state.isVisible){U();return}if(!(o.props.trigger.indexOf("mouseenter")>=0&&o.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(d.type)>=0&&l)){var g=u(!1);g?s=setTimeout(function(){o.state.isVisible&&o.hide()},g):r=requestAnimationFrame(function(){o.hide()})}}function Ne(){o.state.isEnabled=!0}function he(){o.hide(),o.state.isEnabled=!1}function be(){clearTimeout(a),clearTimeout(s),cancelAnimationFrame(r)}function Se(d){if(!o.state.isDestroyed){M("onBeforeUpdate",[o,d]),Me();var g=o.props,S=It(e,Object.assign({},g,wt(d),{ignoreAttributes:!0}));o.props=S,X(),g.interactiveDebounce!==S.interactiveDebounce&&(W(),E=bt(de,S.interactiveDebounce)),g.triggerTarget&&!S.triggerTarget?Ue(g.triggerTarget).forEach(function(P){P.removeAttribute("aria-expanded")}):S.triggerTarget&&e.removeAttribute("aria-expanded"),_(),h(),D&&D(g,S),o.popperInstance&&(Ie(),ne().forEach(function(P){requestAnimationFrame(P._tippy.popperInstance.forceUpdate)})),M("onAfterUpdate",[o,d])}}function Re(d){o.setProps({content:d})}function Sn(){var d=o.state.isVisible,g=o.state.isDestroyed,S=!o.state.isEnabled,P=ye.isTouch&&!o.props.touch,N=Pn(o.props.duration,0,ge.duration);if(!(d||g||S||P)&&!B().hasAttribute("disabled")&&(M("onShow",[o],!1),o.props.onShow(o)!==!1)){if(o.state.isVisible=!0,F()&&(v.style.visibility="visible"),h(),R(),o.state.isMounted||(v.style.transition="none"),F()){var Q=i(),ae=Q.box,qe=Q.content;Bn([ae,qe],0)}w=function(){var Pe;if(!(!o.state.isVisible||m)){if(m=!0,v.offsetHeight,v.style.transition=o.props.moveTransition,F()&&o.props.animation){var Nn=i(),fn=Nn.box,_e=Nn.content;Bn([fn,_e],N),xt([fn,_e],"visible")}T(),_(),yt(jn,o),(Pe=o.popperInstance)==null||Pe.forceUpdate(),M("onMount",[o]),o.props.animation&&F()&&V(N,function(){o.state.isShown=!0,M("onShown",[o])})}},J()}}function Tn(){var d=!o.state.isVisible,g=o.state.isDestroyed,S=!o.state.isEnabled,P=Pn(o.props.duration,1,ge.duration);if(!(d||g||S)&&(M("onHide",[o],!1),o.props.onHide(o)!==!1)){if(o.state.isVisible=!1,o.state.isShown=!1,m=!1,l=!1,F()&&(v.style.visibility="hidden"),W(),U(),h(!0),F()){var N=i(),Q=N.box,ae=N.content;o.props.animation&&(Bn([Q,ae],P),xt([Q,ae],"hidden"))}T(),_(),o.props.animation?F()&&$(P,o.unmount):o.unmount()}}function On(d){G().addEventListener("mousemove",E),yt(hn,E),E(d)}function Ln(){o.state.isVisible&&o.hide(),o.state.isMounted&&(Ce(),ne().forEach(function(d){d._tippy.unmount()}),v.parentNode&&v.parentNode.removeChild(v),jn=jn.filter(function(d){return d!==o}),o.state.isMounted=!1,M("onHidden",[o]))}function Mn(){o.state.isDestroyed||(o.clearDelayTimeouts(),o.unmount(),Me(),delete e._tippy,o.state.isDestroyed=!0,M("onDestroy",[o]))}}function un(e,n){n===void 0&&(n={});var t=ge.plugins.concat(n.plugins||[]);Xa();var a=Object.assign({},n,{plugins:t}),s=Wa(e),r=s.reduce(function(l,p){var c=p&&os(p,a);return c&&l.push(c),l},[]);return Cn(e)?r[0]:r}un.defaultProps=ge;un.setDefaultProps=ts;un.currentInput=ye;Object.assign({},Bt,{effect:function(n){var t=n.state,a={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,a.popper),t.styles=a,t.elements.arrow&&Object.assign(t.elements.arrow.style,a.arrow)}});un.setDefaultProps({render:Qt});const en=document.getElementById("fe-signage"),nn=document.getElementById("no-signage"),tn=document.getElementById("ee-signage"),He=document.getElementById("mp-signage"),rs=document.getElementById("print-map"),Wn=[en,nn,tn,He];let wn=!1,Je=null,Vn=!1;function cs(e){const n=localStorage.getItem(e.id);e.checked=n==="true",Ye()}function gn(e){localStorage.setItem(e.id,e.checked)}function ls(){return Wn.some(e=>e.checked)}function Ye(){if(!ls()){Je==null||Je.close(),Je=null,wn=!1,ps();return}Vn||wn||(Je=new kt({status:"success",title:"Modo señalética activo",text:"<strong>La selección de sectores ha sido deshabilitada, desactive toda la señalética visible para volver al modo normal.</strong>",effect:"slide",speed:300,customClass:"",customIcon:"",showIcon:!0,showCloseButton:!0,autoclose:!1,autotimeout:3e3,notificationsGap:null,notificationsPadding:null,type:"outline",position:"right bottom",customWrapper:""}),wn=!0,ds())}function ds(){document.querySelectorAll('[data-cell-id^="sector-"]').forEach(n=>{n.style.display="none"})}function ps(){document.querySelectorAll('[data-cell-id^="sector-"]').forEach(n=>{n.style.display="block"})}function bn(e,n){e.forEach(t=>{t.classList.toggle("is-visible",n)})}function us(){const e=document.querySelectorAll('[data-cell-id^="er-"]'),n=document.querySelectorAll('[data-cell-id^="mp-"]'),t=document.querySelectorAll('[data-cell-id^="ee-"]'),a=document.querySelectorAll('[data-cell-id^="fe-"]'),s=document.querySelector('[data-cell-id="no-01"]'),r=document.querySelector('[data-cell-id="signage-title"]'),l=document.querySelector('[data-cell-id="signage-note"]'),p=document.querySelectorAll('[data-cell-id^="signage-text-"]'),c=document.querySelectorAll('[data-cell-id^="signage-icon-"]');r&&(r.style.display="none"),l&&(l.style.display="none"),p.forEach(m=>{m.style.display="none"}),c.forEach(m=>{m.style.display="none"}),Vn=!0,Wn.forEach(cs),He.onchange=()=>{gn(He),bn(e,He.checked),bn(n,He.checked),Ye()},en.onchange=()=>{gn(en),bn(a,en.checked),Ye()},tn.onchange=()=>{gn(tn),bn(t,tn.checked),Ye()},nn.onchange=()=>{gn(nn),s&&s.classList.toggle("is-visible",nn.checked),Ye()},Wn.forEach(m=>m.dispatchEvent(new Event("change"))),Vn=!1,wn=!1,Ye(),un('[data-cell-id="fe-01"]',{content:`
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
  `,allowHTML:!0,placement:"right",animation:"fade",theme:"campus"}),rs.onclick=()=>{const m=document.createElement("div");m.innerHTML=`
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
    `;const f=new WinBox({class:["map-preview-window"],title:"Imprimir mapa",x:"center",y:"center",background:"#e25619",modal:!0,mount:m,index:1e3,width:"25%",height:"28%"});m.querySelector("#print-map2").addEventListener("click",()=>{f.close();const w=document.getElementById("map-container"),y=w==null?void 0:w.querySelector("svg"),E=document.getElementById("print-map-content");if(!y){console.error("The source map SVG was not found.");return}if(!E){console.error("The print map container was not found.");return}E.replaceChildren();const b=y.cloneNode(!0);b.querySelectorAll('[data-cell-id^="text-"]').forEach(I=>I.remove());const x=b.querySelector('[data-cell-id="explore-campus-text-box"]'),L=b.querySelector('[data-cell-id="explore-campus-icon"]');x&&(x.style.display="none"),L&&(L.style.display="none");const C=b.querySelector('[data-cell-id="signage-title"]'),O=b.querySelector('[data-cell-id="signage-note"]');C&&(C.style.display="block"),O&&(O.style.display="block");const o={fe:en,ee:tn,er:He,mp:He,no:nn};b.querySelectorAll('[data-cell-id^="signage-icon-"], [data-cell-id^="signage-text-"]').forEach(I=>{I.style.display="block";const D=I.getAttribute("data-cell-id").replace(/^signage-(icon|text)-/,""),q=o[D];q&&I.classList.toggle("is-disabled",!q.checked)}),E.replaceChildren(b),window.print()})}}const fs={title:"Sector C1",description:"Caseta acceso principal",icon:"fa-solid fa-tower-observation fa-2x"},ms={title:"Sector H",description:"Sector principal",icon:"fa-regular fa-building fa-2x"},vs={title:"Sector D",description:"Orientación y domo deportivo",icon:"fa-solid fa-landmark-dome fa-2x"},hs={title:"Sector M",description:"Aulas móviles",icon:"fa-solid fa-people-roof fa-2x"},gs={title:"Sector C2",description:"Caseta acceso estacionamiento",icon:"fa-solid fa-tower-observation fa-2x"},bs={c1:fs,h:ms,d:vs,m:hs,c2:gs};function Tt(){document.getElementById("map-container");const e=document.querySelector("[data-cell-id='h-library']"),n=document.querySelector("[data-cell-id='h-computer-center']"),t=document.querySelector(".panel-container"),a=document.querySelector(".info-panel");e.addEventListener("click",()=>{const r=document.getElementById("h-library").content.cloneNode(!0);t.innerHTML="",t.appendChild(r),a.classList.add("open")}),n.addEventListener("click",()=>{const r=document.getElementById("h-computer-center").content.cloneNode(!0);t.innerHTML="",t.appendChild(r),a.classList.add("open")})}const ys=`<!-- Sector H information panel -->
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
        
<section class="resources-container">

  <!-- Header -->
  <header class="resources-header">
    <div>
      <span class="resources-eyebrow">INFRAESTRUCTURA Y EQUIPAMIENTO</span>
      <h2>Recursos del aula</h2>
      <p>Equipamiento y servicios disponibles en el espacio académico</p>
    </div>

    <div class="resources-room-info">
      <div>
        <span>GRUPO</span>
        <strong>101C</strong>
      </div>

      <div>
        <span>AULA</span>
        <strong>H3</strong>
      </div>
    </div>
  </header>

  <!-- Summary -->
  <div class="resources-summary">
    <div class="resource-summary-icon">
      <i class="fa-solid fa-boxes-stacked"></i>
    </div>

    <div class="resource-summary-text">
      <span>Equipamiento registrado</span>
      <strong>05 recursos disponibles</strong>
    </div>

    <span class="resource-status">
      <i class="fa-solid fa-circle-check"></i>
      Aula equipada
    </span>
  </div>

  <!-- Resources list -->
  <article class="resources-card">

    <div class="resources-card-heading">
      <div>
        <span class="resources-section-label">INVENTARIO DEL AULA</span>
        <h3>Equipamiento disponible</h3>
      </div>

      <span class="resources-counter">05 elementos</span>
    </div>

    <div class="resources-list">

      <!-- Projector -->
      <div class="resource-item">
        <div class="resource-icon">
          <i class="fa-solid fa-video"></i>
        </div>

        <div class="resource-information">
          <h4>Proyector</h4>
          <p>Equipo de proyección audiovisual</p>
        </div>

        <span class="resource-availability">
          <i class="fa-solid fa-check"></i>
          Disponible
        </span>
      </div>

      <!-- Whiteboard -->
      <div class="resource-item">
        <div class="resource-icon">
          <i class="fa-solid fa-chalkboard"></i>
        </div>

        <div class="resource-information">
          <h4>Pizarrón</h4>
          <p>Superficie para escritura y explicación</p>
        </div>

        <span class="resource-availability">
          <i class="fa-solid fa-check"></i>
          Disponible
        </span>
      </div>

      <!-- Retractable screen -->
      <div class="resource-item">
        <div class="resource-icon">
          <i class="fa-solid fa-display"></i>
        </div>

        <div class="resource-information">
          <h4>Pantalla retráctil</h4>
          <p>Pantalla para proyección de contenido</p>
        </div>

        <span class="resource-availability">
          <i class="fa-solid fa-check"></i>
          Disponible
        </span>
      </div>

      <!-- Air conditioning -->
      <div class="resource-item">
        <div class="resource-icon">
          <i class="fa-solid fa-snowflake"></i>
        </div>

        <div class="resource-information">
          <h4>Aire acondicionado</h4>
          <p>Climatización del espacio académico</p>
        </div>

        <span class="resource-availability">
          <i class="fa-solid fa-check"></i>
          Disponible
        </span>
      </div>

      <!-- CCTV -->
      <div class="resource-item">
        <div class="resource-icon">
          <i class="fa-solid fa-camera"></i>
        </div>

        <div class="resource-information">
          <h4>Cámara de videovigilancia</h4>
          <p>Equipo de monitoreo y seguridad</p>
        </div>

        <span class="resource-availability">
          <i class="fa-solid fa-check"></i>
          Disponible
        </span>
      </div>

    </div>

    <footer class="resources-card-footer">
      <i class="fa-regular fa-circle-info"></i>
      La disponibilidad de los recursos está sujeta a su estado físico y funcionamiento.
    </footer>

  </article>

  <!-- General footer -->
  <footer class="resources-footer">
    <span>CECyT · PLANTEL 20 ORIENTE</span>
    <span>Inventario de recursos académicos</span>
  </footer>

</section>

      </div>
    </nav>
  </section>
</section>
`;function ws(){const e=document.querySelector("[data-cell-id='classroom-h3']"),n=document.querySelector(".panel-container"),t=document.querySelector(".info-panel");e.addEventListener("click",()=>{const a=ys;n.innerHTML="",n.innerHTML=a,t.classList.add("open")})}let Ke=null;function xs(){const e=document.getElementById("sector-h-map"),n=document.querySelector(".info-panel"),t=document.querySelector(".simbology-bar"),a=document.querySelector(".bottom-nav-container");document.getElementById("home-map");const s=document.getElementById("main-bldg-down"),r=document.getElementById("main-bldg-up"),l=document.getElementById("map-container");e.addEventListener("click",()=>{n.classList.remove("open"),t.classList.add("is-not-visible"),a.classList.add("is-visible"),xn(we.H1.id),Ke=1,Tt()}),s.addEventListener("click",()=>{Ke!==1&&(xn(we.H1.id),Ke=1,Tt())}),r.addEventListener("click",()=>{Ke!==2&&(xn(we.H2.id),Ke=2,ws())}),l.addEventListener("click",c=>{c.target.closest('[data-cell-id="camera-h3"]')&&p()});function p(){const c=document.createElement("div");c.className="camera-viewer",c.innerHTML=`
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
  `;const m=new WinBox({class:["camera-window"],mount:c,title:"Video cámara - Aula H3",x:"center",y:"center",background:"#e25619",class:["camera-window","camera-window.max"],width:"1210",height:"760",border:4,header:45,index:300}),f=c.querySelector("#cameraVideo"),A=c.querySelector("#cameraLoader"),w=c.querySelector("#cameraProgress"),y=c.querySelector("#cameraDateTime");let E=0,b=!1,x=!1;const L=setInterval(()=>{E<90&&(E+=2,w.style.width=`${E}%`)},40);f.addEventListener("canplay",()=>{b=!0,C()}),setTimeout(()=>{x=!0,C()},1200);function C(){!b||!x||(clearInterval(L),w.style.width="100%",setTimeout(()=>{A.classList.add("is-hidden")},250))}function O(){const I=new Date;y.textContent=I.toLocaleString("es-MX",{dateStyle:"short",timeStyle:"medium"})}O();const o=setInterval(O,1e3);return m.onclose=()=>{clearInterval(o),clearInterval(L)},m}}const Es=`<!-- Sector H information panel -->
<section id="panel-h-main" class="information-panel">
  <header class="information-header">
    <div class="information-heading">
      <span class="information-mark" aria-hidden="true">
        <i class="fa-solid fa-building-circle-check fa-2x"></i>
      </span>
      <div>
        <p class="information-eyebrow">CAMPUS 20 ORIENTE</p>
        <h2 id="information-title">Sector H</h2>
        <p class="information-subtitle">
          Mapa principal <span>•</span> Sector H
        </p>
      </div>
    </div>
  </header>
  <section class="panel-wrapper-tabs">
    <!--<h3>Servicios e instalaciones</h3>-->
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
          El <strong>Sector H</strong> es el área principal del plantel, integra
          el Edificio H, el Edificio N y un espacio de cafetería al aire libre. Este
          sector abarca laboratorios, sanitarios, aulas, oficinas administrativas, talleres,
          biblioteca 
        </div>
        <div class="sector-services">
          <h3>Instalaciones</h3>
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
        </div>
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
`,As=`<!-- Sector H information panel -->
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
    <!--<h3>Servicios e instalaciones</h3>-->
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
          En el <strong>Sector C1</strong> se encuentra ubicada la caseta de
          acceso principal del plantel. El personal de Prefectura se encarga de
          brindar el acceso a las instalaciones, registrar las entradas y
          salidas de los alumnos, padres de familia y público en general, además
          de ayudar a mantener la seguridad en el plantel.
        </div>
        <div class="sector-services">
          <h3>Instalaciones</h3>
          <section class="services-grid">
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-tower-observation"></i>
              </div>
              <span>Caseta de acceso principal</span>
            </div>
          </section>
        </div>
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
</section>
`,zn=`<section id="not-implemented" class="information-panel">

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
</section>`,Is=`<!-- Sector H information panel -->
<section id="panel-default" class="information-panel">
  <header class="information-header">
    <div class="information-heading">
      <span class="information-mark" aria-hidden="true">
        <i class="fa-solid fa-building-circle-check fa-2x"></i>
      </span>
      <div>
        <p class="information-eyebrow">CAMPUS 20 ORIENTE</p>
        <h2 id="information-title">Sector H</h2>
        <p class="information-subtitle">
          Mapa principal <span>•</span> Sector H
        </p>
      </div>
    </div>
  </header>
  <section class="panel-wrapper-tabs">
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
          <!-- Sector description -->
        </div>
        <div class="sector-services">
          <h3>Instalaciones</h3>
          <section class="services-grid">
          </section>
        </div>
        <div class="panel-button__container">
          <button class="button-panel" id="sector-h-map">
            <i class="fa-solid fa-magnifying-glass-location fa-2x"></i>
            <!-- Explore sector -->
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
`,Ot={"sector-c1":{id:"sector-c1",title:"Sector C1",description:"En el Sector C1 se encuentra la caseta de acceso principal del plantel, en donde el personal de prefectura se encarga de brindar el acceso a las instalaciones, registrar las entradas y salidas de los alumnos, padres de familia y público en general, además de ayudar a mantener la seguridad en el plantel.",icon:"fa-tower-observation",buildings:[{id:"sector-c1-1",description:"Caseta C1"}],spaces:[{id:"sector-c1-s1",description:"Caseta de acceso principal","icon-solid":"fa-solid","icon-item":"fa-tower-observation"}]},"sector-h":{id:"sector-h",title:"Sector H",description:"El Sector H es el área principal del plantel, integra el Edificio H, el Edificio N y un espacio de cafetería al aire libre. Este sector abarca laboratorios, sanitarios, aulas, oficinas administrativas, talleres, biblioteca",icon:"fa-solid fa-building-circle-check fa-2x",buildings:[{id:"sector-h-1",description:"Área cafetería"},{id:"sector-h-2",description:"Edificio H"},{id:"sector-h-3",description:"Edificio N"}],spaces:[{id:"sector-h-s1",description:"Área cafetería","icon-solid":"fa-solid","icon-item":"fa-utensils"},{id:"sector-h-s2",description:"Laboratorio de cómputo","icon-solid":"fa-solid","icon-item":"fa-desktop"},{id:"sector-h-s3",description:"Laboratorio de ciencias","icon-solid":"fa-solid","icon-item":"fa-flask"},{id:"sector-h-s4",description:"Sanitarios","icon-solid":"fa-solid","icon-item":"fa-restroom"},{id:"sector-h-s5",description:"Finanzas","icon-solid":"fa-solid","icon-item":"fa-money-check-dollar"},{id:"sector-h-s6",description:"Subdirección","icon-item":"fa-solid","icon-solid":"fa-users"},{id:"sector-h-s7",description:"Bodega","icon-item":"fa-solid","icon-solid":"fa-box-archive"},{id:"sector-h-s8",description:"Intendencia","icon-solid":"fa-solid","icon-item":"fa-broom"},{id:"sector-h-s9",description:"Aula mantenimiento","icon-solid":"fa-solid","icon-item":"fa-screwdriver-wrench"},{id:"sector-h-s10",description:"Dirección","icon-solid":"fa-solid","icon-item":"fa-building-columns"},{id:"sector-h-s11",description:"Servicios escolares","icon-solid":"fa-solid","icon-item":"fa-address-card"},{id:"sector-h-s12",description:"Control académico","icon-solid":"fa-regular","icon-item":"fa-clipboard"},{id:"sector-h-s13",description:"Biblioteca","icon-solid":"fa-solid","icon-item":"fa-book-open"},{id:"sector-h-s14",description:"Prefectura","icon-solid":"fa-solid","icon-item":"fa-shield-halved"},{id:"sector-h-s15",description:"Aulas H1-H8","icon-solid":"fa-solid","icon-item":"fa-chalkboard"},{id:"sector-h-s16",description:"Sala de maestros","icon-solid":"fa-solid","icon-item":"fa-person-chalkboard"}]},"sector-d":{id:"sector-d",title:"Sector D",description:"En el Sector D se encuentran las oficinas de Orientación y el área de Enfermería, espacios destinados a brindar atención, orientación y apoyo a los estudiantes. También cuenta con un domo utilizado para la realización de eventos cívicos, actividades deportivas y diversas actividades escolares, que funciona como un espacio de convivencia y participación para la comunidad educativa.",icon:"",buildings:[{id:"sector-d-1",description:"Oficinas orientación"},{id:"sector-d-2",description:"Domo para eventos cívicos y deportivos"}],spaces:[{id:"sector-d-s1",description:"Ofinas de orientación y enfermería","icon-solid":"fa-solid","icon-item":"fa-people-arrows"},{id:"sector-d-s2",description:"Domo para eventos cívicos y deportivos","icon-solid":"fa-solid","icon-item":"fa-basketball"}]},"sector-m":{title:"Sector M",description:"El Sector M cuenta con aulas móviles destinadas al desarrollo de actividades académicas, un comedor para la comunidad estudiantil y personal del plantel, así como un edificio de mantenimiento donde se realizan actividades relacionadas con el cuidado y conservación de las instalaciones.",icon:"fa-people-roof",spaces:[{description:"Aula M1","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M2","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M3","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Mantenimiento","icon-solid":"fa-solid","icon-item":"fa-warehouse"},{description:"Aula M4","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M5","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M6","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M7","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M8","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M9","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M10","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Comedor","icon-solid":"fa-solid","icon-item":"fa-utensils"}]},"sector-c2":{title:"Sector C2",icon:"",description:"En el Sector C2 se encuentra la caseta de acceso al plantel desde el estacionamiento, utilizada principalmente para el ingreso del personal docente y administrativo, así como de proveedores y visitantes.",spaces:[{description:"Caseta de acceso estacionamiento","icon-solid":"fa-solid","icon-item":"fa-tower-observation"},{description:"Estacionamiento","icon-solid":"fa-solid","icon-item":"fa-car"}]}},Jt=document.getElementById("map-area"),Kt=document.querySelector(".info-panel"),ei=document.querySelector(".sector-toast"),tt=document.querySelector("#sector-toast"),Lt=document.querySelector(".panel-container");document.getElementById("not-implemented");document.getElementById("panel-h");const ni={},we={C:{id:"mainMap",urlMap:gi},H1:{id:"sector-h-ground",mainBuilding:{groundFloor:{urlMap:bi}}},H2:{id:"sector-h-upper",mainBuilding:{upperFloor:{urlMap:yi}}}};async function Fn(e,n){try{const t=await fetch(n);if(!t.ok)throw new Error(`Error loading map: ${e}`);ni[e]=await t.text()}catch(t){console.error(t)}}function Cs(e){return ni[e]??null}function xn(e){Jt.innerHTML=Cs(e)}async function Ss(){await Promise.all([Fn(we.C.id,we.C.urlMap),Fn(we.H1.id,we.H1.mainBuilding.groundFloor.urlMap),Fn(we.H2.id,we.H2.mainBuilding.upperFloor.urlMap)])}Ss();xn(we.C.id);us();const it=Jt.querySelector("svg"),Ts=tt.querySelector(".sector-text h3"),Os=tt.querySelector(".sector-text p"),Ls=tt.querySelector(".sector-icon i");it.addEventListener("pointerover",e=>{var r,l;const n=e.target.closest('[data-cell-id^="sector-"]');if(!n||((l=(r=e.relatedTarget)==null?void 0:r.closest)==null?void 0:l.call(r,'[data-cell-id^="sector-"]'))===n)return;const a=n.dataset.cellId.replace("sector-",""),s=bs[a];s&&(Ts.textContent=s.title,Os.textContent=s.description,Ls.className=s.icon,ei.classList.add("active"))});it.addEventListener("pointerout",e=>{var a,s;const n=e.target.closest('[data-cell-id^="sector-"]');!n||((s=(a=e.relatedTarget)==null?void 0:a.closest)==null?void 0:s.call(a,'[data-cell-id^="sector-"]'))===n||ei.classList.remove("active")});const Ms={"sector-h":{template:Es,title:"Sector H",icon:"fa-solid fa-building-circle-check fa-2x"},"sector-d":{template:zn,title:"Sector D",icon:"fa-solid fa-landmark-dome fa-2x"},"sector-m":{template:zn,title:"Sector M",icon:"fa-solid fa-people-roof fa-2x"},"sector-c1":{template:As,title:"Sector C1",icon:"fa-solid fa-tower-observation fa-2x"},"sector-c2":{template:zn,title:"Sector C2",icon:"fa-solid fa-tower-observation fa-2x"}};let Te=null;it.addEventListener("click",e=>{const n=e.target.closest('[data-cell-id^="sector-"]');if(!n)return;if((Te==null?void 0:Te.dataset.cellId)===n.dataset.cellId){Te.classList.remove("selected"),Te=null,Lt.innerHTML="",Kt.classList.remove("open");return}Te==null||Te.classList.remove("selected"),n.classList.add("selected"),Te=n;const t=Ms[n.dataset.cellId],a=n.dataset.cellId;console.log(a),t&&(Ns(Lt,Is,t.title,t.icon,a),t.title==="Sector H"&&xs())});function Ns(e,n,t,a,s){let r=Ot[s].spaces,l=Ot[s].description;e.innerHTML="",e.innerHTML=n;const p=document.getElementById("information-title"),c=document.querySelector(".information-mark i"),m=document.querySelector(".information-description");p.textContent=t,c.className=a,m.textContent=l;let f=document.querySelector(".services-grid");r.forEach(A=>{let w=document.createElement("div"),y=document.createElement("div"),E=document.createElement("i"),b=document.createElement("span");E.classList.add(A["icon-solid"],A["icon-item"]),b.textContent=A.description,w.classList.add("service-item"),y.classList.add("service-icon"),y.append(E),w.append(y,b),f.append(w)}),Kt.classList.add("open")}(function(){var e,n=document.createElement("style");n.innerHTML="@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}";var t=document.getElementsByTagName("head")[0];t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n);var a=document.createElement("div");a.innerHTML="<div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";function s(i,u,h,M){i&&i.addEventListener(u,h,M||!1)}function r(i,u){var h=window,M=A;h&&h.removeEventListener(i,u,M||!1)}function l(i,u){i.stopPropagation(),u&&i.preventDefault()}function p(i,u,h){h=""+h,i["_s_"+u]!==h&&(i.style.setProperty(u,h),i["_s_"+u]=h)}var c=[],m=[],f={capture:!0,passive:!1},A={capture:!0,passive:!0},w,y=0,E=10,b,x,L,C,O,o;function I(i,u){if(!(this instanceof I))return new I(i);if(w||D(),i){if(u){var h=i;i=u}if(typeof i=="string")h=i;else{var M=i.id,T=i.index,_=i.root,W=i.template;h=h||i.title;var Y=i.icon,te=i.mount,K=i.html,R=i.url,U=i.width,$=i.height,V=i.minwidth,ee=i.minheight,Z=i.maxwidth,X=i.maxheight,Me=i.autosize,ie=i.overflow,de=i.min,pe=i.max,re=i.hidden,Ae=i.modal,Ie=i.x||(Ae?"center":0),Ce=i.y||(Ae?"center":0),J=i.top,ne=i.left,ve=i.bottom,ce=i.right,Ne=i.background,he=i.border,be=i.header,Se=i.class,Re=i.oncreate,Sn=i.onclose,Tn=i.onfocus,On=i.onblur,Ln=i.onmove,Mn=i.onresize,d=i.onfullscreen,g=i.onmaximize,S=i.onminimize,P=i.onrestore,N=i.onhide,Q=i.onshow,ae=i.onload}}this.g=(W||a).cloneNode(!0),this.g.id=this.id=M||"winbox-"+ ++y,this.g.className="winbox"+(Se?" "+(typeof Se=="string"?Se:Se.join(" ")):"")+(Ae?" modal":""),this.g.winbox=this,this.window=this.g,this.body=this.g.getElementsByClassName("wb-body")[0],this.h=be||35,m.push(this),Ne&&this.setBackground(Ne),he?p(this.body,"margin",he+(isNaN(he)?"":"px")):he=0,be&&(u=this.g.getElementsByClassName("wb-header")[0],p(u,"height",be+"px"),p(u,"line-height",be+"px"),p(this.body,"top",be+"px")),h&&this.setTitle(h),Y&&this.setIcon(Y),te?this.mount(te):K?this.body.innerHTML=K:R&&this.setUrl(R,ae),J=J?v(J,O):0,ve=ve?v(ve,O):0,ne=ne?v(ne,C):0,ce=ce?v(ce,C):0,h=C-ne-ce,Y=O-J-ve,Z=Z?v(Z,h):h,X=X?v(X,Y):Y,V=V?v(V,Z):150,ee=ee?v(ee,X):this.h,Me?((_||w).appendChild(this.body),U=Math.max(Math.min(this.body.clientWidth+2*he+1,Z),V),$=Math.max(Math.min(this.body.clientHeight+this.h+he+1,X),ee),this.g.appendChild(this.body)):(U=U?v(U,Z):Math.max(Z/2,V)|0,$=$?v($,X):Math.max(X/2,ee)|0),Ie=Ie?v(Ie,h,U):ne,Ce=Ce?v(Ce,Y,$):J,this.x=Ie,this.y=Ce,this.width=U,this.height=$,this.s=V,this.o=ee,this.m=Z,this.l=X,this.top=J,this.right=ce,this.bottom=ve,this.left=ne,this.index=T,this.j=ie,this.focused=this.hidden=this.full=this.max=this.min=!1,this.onclose=Sn,this.onfocus=Tn,this.onblur=On,this.onmove=Ln,this.onresize=Mn,this.onfullscreen=d,this.onmaximize=g,this.onminimize=S,this.onrestore=P,this.onhide=N,this.onshow=Q,re?this.hide():this.focus(),(T||T===0)&&(this.index=T,p(this.g,"z-index",T),T>E&&(E=T)),pe?this.maximize():de?this.minimize():this.resize().move(),q(this),(_||w).appendChild(this.g),Re&&Re.call(this,i)}I.new=function(i){return new I(i)},I.stack=function(){return m};function v(i,u,h){return typeof i=="string"&&(i==="center"?i=(u-h)/2+.5|0:i==="right"||i==="bottom"?i=u-h:(h=parseFloat(i),i=(""+h!==i&&i.substring((""+h).length))==="%"?u/100*h+.5|0:h)),i}function D(){w=document.body,w[x="requestFullscreen"]||w[x="msRequestFullscreen"]||w[x="webkitRequestFullscreen"]||w[x="mozRequestFullscreen"]||(x=""),L=x&&x.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),s(window,"resize",function(){F(),z()}),s(w,"mousedown",function(){o=!1},!0),s(w,"mousedown",function(){if(!o){var i=m.length;if(i)for(--i;0<=i;i--){var u=m[i];if(u.focused){u.blur();break}}}}),F()}function q(i){k(i,"drag"),k(i,"n"),k(i,"s"),k(i,"w"),k(i,"e"),k(i,"nw"),k(i,"ne"),k(i,"se"),k(i,"sw"),s(i.g.getElementsByClassName("wb-min")[0],"click",function(u){l(u),i.min?i.restore().focus():i.minimize()}),s(i.g.getElementsByClassName("wb-max")[0],"click",function(u){l(u),i.max?i.restore().focus():i.maximize().focus()}),x?s(i.g.getElementsByClassName("wb-full")[0],"click",function(u){l(u),i.fullscreen().focus()}):i.addClass("no-full"),s(i.g.getElementsByClassName("wb-close")[0],"click",function(u){l(u),i.close()||(i=null)}),s(i.g,"mousedown",function(){o=!0},!0),s(i.body,"mousedown",function(){i.focus()},!0)}function j(i){c.splice(c.indexOf(i),1),z(),i.removeClass("min"),i.min=!1,i.g.title=""}function z(){for(var i=c.length,u={},h={},M=0,T;M<i;M++)T=c[M],T=T.left+":"+T.top,h[T]?h[T]++:(u[T]=0,h[T]=1);M=0;for(var _,W;M<i;M++)T=c[M],_=T.left+":"+T.top,W=Math.min((C-T.left-T.right)/h[_],250),T.resize(W+1|0,T.h,!0).move(T.left+u[_]*W|0,O-T.bottom-T.h,!0),u[_]++}function k(i,u){function h(R){if(l(R,!0),i.focus(),u==="drag"){if(i.min){i.restore();return}if(!i.g.classList.contains("no-max")){var U=Date.now(),$=U-K;if(K=U,300>$){i.max?i.restore():i.maximize();return}}}i.min||(w.classList.add("wb-lock"),(W=R.touches)&&(W=W[0])?(R=W,s(window,"touchmove",M,A),s(window,"touchend",T,A)):(s(window,"mousemove",M,A),s(window,"mouseup",T,A)),Y=R.pageX,te=R.pageY)}function M(R){l(R),W&&(R=R.touches[0]);var U=R.pageX;R=R.pageY;var $=U-Y,V=R-te,ee=i.width,Z=i.height,X=i.x,Me=i.y,ie;if(u==="drag"){if(i.g.classList.contains("no-move"))return;i.x+=$,i.y+=V;var de=ie=1}else{if(u==="e"||u==="se"||u==="ne"){i.width+=$;var pe=1}else(u==="w"||u==="sw"||u==="nw")&&(i.x+=$,i.width-=$,de=pe=1);if(u==="s"||u==="se"||u==="sw"){i.height+=V;var re=1}else(u==="n"||u==="ne"||u==="nw")&&(i.y+=V,i.height-=V,ie=re=1)}pe&&(i.width=Math.max(Math.min(i.width,i.m,C-i.x-i.right),i.s),pe=i.width!==ee),re&&(i.height=Math.max(Math.min(i.height,i.l,O-i.y-i.bottom),i.o),re=i.height!==Z),(pe||re)&&i.resize(),de&&(i.max&&(i.x=(U<C/3?i.left:U>C/3*2?C-i.width-i.right:C/2-i.width/2)+$),i.x=Math.max(Math.min(i.x,i.j?C-30:C-i.width-i.right),i.j?30-i.width:i.left),de=i.x!==X),ie&&(i.max&&(i.y=i.top+V),i.y=Math.max(Math.min(i.y,i.j?O-i.h:O-i.height-i.bottom),i.top),ie=i.y!==Me),(de||ie)&&(i.max&&i.restore(),i.move()),(pe||de)&&(Y=U),(re||ie)&&(te=R)}function T(R){l(R),w.classList.remove("wb-lock"),W?(r("touchmove",M),r("touchend",T)):(r("mousemove",M),r("mouseup",T))}var _=i.g.getElementsByClassName("wb-"+u)[0];if(_){var W,Y,te,K=0;s(_,"mousedown",h,f),s(_,"touchstart",h,f)}}function F(){var i=document.documentElement;C=i.clientWidth,O=i.clientHeight}e=I.prototype,e.mount=function(i){return this.unmount(),i.i||(i.i=i.parentNode),this.body.textContent="",this.body.appendChild(i),this},e.unmount=function(i){var u=this.body.firstChild;if(u){var h=i||u.i;h&&h.appendChild(u),u.i=i}return this},e.setTitle=function(i){var u=this.g.getElementsByClassName("wb-title")[0];i=this.title=i;var h=u.firstChild;return h?h.nodeValue=i:u.textContent=i,this},e.setIcon=function(i){var u=this.g.getElementsByClassName("wb-icon")[0];return p(u,"background-image","url("+i+")"),p(u,"display","inline-block"),this},e.setBackground=function(i){return p(this.g,"background",i),this},e.setUrl=function(i,u){var h=this.body.firstChild;return h&&h.tagName.toLowerCase()==="iframe"?h.src=i:(this.body.innerHTML='<iframe src="'+i+'"></iframe>',u&&(this.body.firstChild.onload=u)),this},e.focus=function(i){if(i===!1)return this.blur();if(!this.focused){if(i=m.length,1<i)for(var u=1;u<=i;u++){var h=m[i-u];if(h.focused){h.blur(),m.push(m.splice(m.indexOf(this),1)[0]);break}}p(this.g,"z-index",++E),this.index=E,this.addClass("focus"),this.focused=!0,this.onfocus&&this.onfocus()}return this},e.blur=function(i){return i===!1?this.focus():(this.focused&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur()),this)},e.hide=function(i){if(i===!1)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")},e.show=function(i){if(i===!1)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")},e.minimize=function(i){return i===!1?this.restore():(b&&G(),this.max&&(this.removeClass("max"),this.max=!1),this.min||(c.push(this),z(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.focused&&(this.blur(),B()),this.onminimize&&this.onminimize()),this)};function B(){var i=m.length;if(i)for(--i;0<=i;i--){var u=m[i];if(!u.min){u.focus();break}}}e.restore=function(){return b&&G(),this.min&&(j(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this},e.maximize=function(i){return i===!1?this.restore():(b&&G(),this.min&&j(this),this.max||(this.addClass("max").resize(C-this.left-this.right,O-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)},e.fullscreen=function(i){if(this.min&&(j(this),this.resize().move()),!b||!G())this.body[x](),b=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(i===!1)return this.restore();return this};function G(){if(b.full=!1,document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[L](),!0}e.close=function(i){if(this.onclose&&this.onclose(i))return!0;this.min&&j(this),m.splice(m.indexOf(this),1),this.unmount(),this.g.remove(),this.g.textContent="",this.g=this.body=this.g.winbox=null,this.focused&&B()},e.move=function(i,u,h){return i||i===0?h||(this.x=i?i=v(i,C-this.left-this.right,this.width):0,this.y=u?u=v(u,O-this.top-this.bottom,this.height):0):(i=this.x,u=this.y),p(this.g,"left",i+"px"),p(this.g,"top",u+"px"),this.onmove&&this.onmove(i,u),this},e.resize=function(i,u,h){return i||i===0?h||(this.width=i?i=v(i,this.m):0,this.height=u?u=v(u,this.l):0,i=Math.max(i,this.s),u=Math.max(u,this.o)):(i=this.width,u=this.height),p(this.g,"width",i+"px"),p(this.g,"height",u+"px"),this.onresize&&this.onresize(i,u),this},e.addControl=function(i){var u=i.class,h=i.image,M=i.click;i=i.index;var T=document.createElement("span"),_=this.g.getElementsByClassName("wb-control")[0],W=this;return u&&(T.className=u),h&&p(T,"background-image","url("+h+")"),M&&(T.onclick=function(Y){M.call(this,Y,W)}),_.insertBefore(T,_.childNodes[i||0]),this},e.removeControl=function(i){return(i=this.g.getElementsByClassName(i)[0])&&i.remove(),this},e.addClass=function(i){return this.g.classList.add(i),this},e.removeClass=function(i){return this.g.classList.remove(i),this},e.toggleClass=function(i){return this.g.classList.contains(i)?this.removeClass(i):this.addClass(i)},window.WinBox=I}).call(void 0);
