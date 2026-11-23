(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ni=document.querySelector("#menu-icon"),ti=document.querySelector(".sidebar"),ii=document.getElementById("link-about");ni.addEventListener("click",()=>{ti.classList.toggle("active")});ii.addEventListener("click",()=>{const e=document.createElement("div");e.innerHTML=`
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
    `;const n=new WinBox({class:["map-preview-window"],title:"Acerca de",x:"center",y:"center",background:"#e25619",modal:!0,mount:e,index:1e3,width:"30%",height:"40%"});document.getElementById("close-about").addEventListener("click",()=>{n.close()})});const ai=`<!-- Empty state -->
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
`,tn=document.getElementById("imageViewer"),at=document.getElementById("viewerImage"),si=document.getElementById("viewerCaption"),oi=document.querySelector(".image-viewer__close");function ri(e,n,t=""){at.src=e,at.alt=t,si.textContent=n,tn.showModal()}function ci(){tn.close()}oi.addEventListener("click",ci);tn.addEventListener("click",e=>{const n=tn.getBoundingClientRect();e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom||tn.close()});const li=document.getElementById("month-year"),Dn=document.getElementById("calendar-days"),Lt=document.getElementById("previous-month"),di=document.getElementById("next-month");console.log(Lt);let He=new Date;function $n(){const e=He.getFullYear(),n=He.getMonth(),t=new Date(e,n,1).getDay(),a=new Date(e,n+1,0).getDate();Dn.innerHTML="",li.innerText=`${He.toLocaleDateString("default",{month:"long"})} ${e}`;for(let s=0;s<t;s++)Dn.innerHTML+='<div class="empty"></div>';for(let s=1;s<=a;s++){const r=new Date,l=s===r.getDate()&&e===r.getFullYear()&&n===r.getMonth();Dn.innerHTML+=`<div class="${l?"today":""}">${s}</div>`}}Lt.addEventListener("click",()=>{He.setMonth(He.getMonth()-1),$n()});di.addEventListener("click",()=>{He.setMonth(He.getMonth()+1),$n()});$n();const Nt=document.querySelector(".info-panel"),pi=document.querySelector(".panel-close-button"),ui=document.querySelector(".info-panel-button");ui.addEventListener("click",()=>{const e=document.querySelector(".panel-container"),n=ai;e.textContent.trim()===""&&(e.innerHTML=n),Nt.classList.add("open")});pi.addEventListener("click",()=>{Nt.classList.remove("open")});const fi=document.getElementById("nav-expand"),mi=document.getElementById("nav-expand-list");document.getElementById("nav-expand-icon");fi.addEventListener("click",()=>{mi.classList.toggle("show-list")});window.openImage=ri;const vi="/campus-prototype/assets/main-map-Dd2UW5zk.svg",hi="/campus-prototype/assets/main-bldg-ground-B91OwHog.svg",gi="/campus-prototype/assets/main-bldg-upper-DjCqcDEs.svg";function bi(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function yi(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function wi(e,n,t){return n&&yi(e.prototype,n),e}var xi=Object.defineProperty,Se=function(e,n){return xi(e,"name",{value:n,configurable:!0})},Ei=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="m8.94 8 4.2-4.193a.67.67 0 0 0-.947-.947L8 7.06l-4.193-4.2a.67.67 0 1 0-.947.947L7.06 8l-4.2 4.193a.667.667 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L8 8.94l4.193 4.2a.666.666 0 0 0 1.094-.217.665.665 0 0 0-.147-.73L8.94 8Z" fill="currentColor"/>\r
</svg>\r
`,Ai=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24A10.667 10.667 0 0 1 5.333 16a10.56 10.56 0 0 1 2.254-6.533l14.946 14.946A10.56 10.56 0 0 1 16 26.667Zm8.413-4.134L9.467 7.587A10.56 10.56 0 0 1 16 5.333 10.667 10.667 0 0 1 26.667 16a10.56 10.56 0 0 1-2.254 6.533Z" fill="currentColor"/>\r
</svg>\r
`,Ii=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M16 14.667A1.333 1.333 0 0 0 14.667 16v5.333a1.333 1.333 0 0 0 2.666 0V16A1.333 1.333 0 0 0 16 14.667Zm.507-5.227a1.333 1.333 0 0 0-1.014 0 1.334 1.334 0 0 0-.44.28 1.56 1.56 0 0 0-.28.44c-.075.158-.11.332-.106.507a1.332 1.332 0 0 0 .386.946c.13.118.279.213.44.28a1.334 1.334 0 0 0 1.84-1.226 1.4 1.4 0 0 0-.386-.947 1.334 1.334 0 0 0-.44-.28ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>\r
</svg>\r
`,Ci=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="m19.627 11.72-5.72 5.733-2.2-2.2a1.334 1.334 0 1 0-1.88 1.881l3.133 3.146a1.333 1.333 0 0 0 1.88 0l6.667-6.667a1.333 1.333 0 1 0-1.88-1.893ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>\r
</svg>\r
`,Ti=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M16.334 17.667a1.334 1.334 0 0 0 1.334-1.333v-5.333a1.333 1.333 0 0 0-2.665 0v5.333a1.333 1.333 0 0 0 1.33 1.333Zm-.508 5.227c.325.134.69.134 1.014 0 .165-.064.314-.159.44-.28a1.56 1.56 0 0 0 .28-.44c.076-.158.112-.332.107-.507a1.332 1.332 0 0 0-.387-.946 1.532 1.532 0 0 0-.44-.28 1.334 1.334 0 0 0-1.838 1.226 1.4 1.4 0 0 0 .385.947c.127.121.277.216.44.28Zm.508 6.773a13.333 13.333 0 1 0 0-26.667 13.333 13.333 0 0 0 0 26.667Zm0-24A10.667 10.667 0 1 1 16.54 27a10.667 10.667 0 0 1-.206-21.333Z" fill="currentColor"/>\r
</svg>\r
`,Si=Se(function(e){return new DOMParser().parseFromString(e,"text/html").body.childNodes[0]},"stringToHTML"),Ge=Se(function(e){var n=new DOMParser().parseFromString(e,"application/xml");return document.importNode(n.documentElement,!0).outerHTML},"getSvgNode"),H={CONTAINER:"sn-notifications-container",NOTIFY:"sn-notify",NOTIFY_CONTENT:"sn-notify-content",NOTIFY_ICON:"sn-notify-icon",NOTIFY_CLOSE:"sn-notify-close",NOTIFY_TITLE:"sn-notify-title",NOTIFY_TEXT:"sn-notify-text",IS_X_CENTER:"sn-is-x-center",IS_Y_CENTER:"sn-is-y-center",IS_CENTER:"sn-is-center",IS_LEFT:"sn-is-left",IS_RIGHT:"sn-is-right",IS_TOP:"sn-is-top",IS_BOTTOM:"sn-is-bottom",NOTIFY_OUTLINE:"sn-notify-outline",NOTIFY_FILLED:"sn-notify-filled",NOTIFY_ERROR:"sn-notify-error",NOTIFY_WARNING:"sn-notify-warning",NOTIFY_SUCCESS:"sn-notify-success",NOTIFY_INFO:"sn-notify-info",NOTIFY_FADE:"sn-notify-fade",NOTIFY_FADE_IN:"sn-notify-fade-in",NOTIFY_SLIDE:"sn-notify-slide",NOTIFY_SLIDE_IN:"sn-notify-slide-in",NOTIFY_AUTOCLOSE:"sn-notify-autoclose"},Ne={ERROR:"error",WARNING:"warning",SUCCESS:"success",INFO:"info"},st={OUTLINE:"outline",FILLED:"filled"},kn={FADE:"fade",SLIDE:"slide"},Ze={CLOSE:Ge(Ei),SUCCESS:Ge(Ci),ERROR:Ge(Ai),WARNING:Ge(Ti),INFO:Ge(Ii)},ot=Se(function(e){e.wrapper.classList.add(H.NOTIFY_FADE),setTimeout(function(){e.wrapper.classList.add(H.NOTIFY_FADE_IN)},100)},"fadeIn"),rt=Se(function(e){e.wrapper.classList.remove(H.NOTIFY_FADE_IN),setTimeout(function(){e.wrapper.remove()},e.speed)},"fadeOut"),Oi=Se(function(e){e.wrapper.classList.add(H.NOTIFY_SLIDE),setTimeout(function(){e.wrapper.classList.add(H.NOTIFY_SLIDE_IN)},100)},"slideIn"),Mi=Se(function(e){e.wrapper.classList.remove(H.NOTIFY_SLIDE_IN),setTimeout(function(){e.wrapper.remove()},e.speed)},"slideOut"),Dt=(function(){function e(n){var t=this;bi(this,e),this.notifyOut=Se(function(h){h(t)},"notifyOut");var a=n.notificationsGap,s=a===void 0?20:a,r=n.notificationsPadding,l=r===void 0?20:r,d=n.status,c=d===void 0?"success":d,f=n.effect,m=f===void 0?kn.FADE:f,E=n.type,w=E===void 0?"outline":E,y=n.title,A=n.text,b=n.showIcon,x=b===void 0?!0:b,M=n.customIcon,C=M===void 0?"":M,O=n.customClass,o=O===void 0?"":O,I=n.speed,v=I===void 0?500:I,D=n.showCloseButton,q=D===void 0?!0:D,j=n.autoclose,z=j===void 0?!0:j,k=n.autotimeout,F=k===void 0?3e3:k,B=n.position,G=B===void 0?"right top":B,i=n.customWrapper,u=i===void 0?"":i;if(this.customWrapper=u,this.status=c,this.title=y,this.text=A,this.showIcon=x,this.customIcon=C,this.customClass=o,this.speed=v,this.effect=m,this.showCloseButton=q,this.autoclose=z,this.autotimeout=F,this.notificationsGap=s,this.notificationsPadding=l,this.type=w,this.position=G,!this.checkRequirements()){console.error("You must specify 'title' or 'text' at least.");return}this.setContainer(),this.setWrapper(),this.setPosition(),this.showIcon&&this.setIcon(),this.showCloseButton&&this.setCloseButton(),this.setContent(),this.container.prepend(this.wrapper),this.setEffect(),this.notifyIn(this.selectedNotifyInEffect),this.autoclose&&this.autoClose(),this.setObserver()}return wi(e,[{key:"checkRequirements",value:function(){return!!(this.title||this.text)}},{key:"setContainer",value:function(){var t=document.querySelector(".".concat(H.CONTAINER));t?this.container=t:(this.container=document.createElement("div"),this.container.classList.add(H.CONTAINER),document.body.appendChild(this.container)),this.notificationsPadding&&this.container.style.setProperty("--sn-notifications-padding","".concat(this.notificationsPadding,"px")),this.notificationsGap&&this.container.style.setProperty("--sn-notifications-gap","".concat(this.notificationsGap,"px"))}},{key:"setPosition",value:function(){this.container.classList[this.position==="center"?"add":"remove"](H.IS_CENTER),this.container.classList[this.position.includes("left")?"add":"remove"](H.IS_LEFT),this.container.classList[this.position.includes("right")?"add":"remove"](H.IS_RIGHT),this.container.classList[this.position.includes("top")?"add":"remove"](H.IS_TOP),this.container.classList[this.position.includes("bottom")?"add":"remove"](H.IS_BOTTOM),this.container.classList[this.position.includes("x-center")?"add":"remove"](H.IS_X_CENTER),this.container.classList[this.position.includes("y-center")?"add":"remove"](H.IS_Y_CENTER)}},{key:"setCloseButton",value:function(){var t=this,a=document.createElement("div");a.classList.add(H.NOTIFY_CLOSE),a.innerHTML=Ze.CLOSE,this.wrapper.appendChild(a),a.addEventListener("click",function(){t.close()})}},{key:"setWrapper",value:function(){var t=this;switch(this.customWrapper?this.wrapper=Si(this.customWrapper):this.wrapper=document.createElement("div"),this.wrapper.style.setProperty("--sn-notify-transition-duration","".concat(this.speed,"ms")),this.wrapper.classList.add(H.NOTIFY),this.type){case st.OUTLINE:this.wrapper.classList.add(H.NOTIFY_OUTLINE);break;case st.FILLED:this.wrapper.classList.add(H.NOTIFY_FILLED);break;default:this.wrapper.classList.add(H.NOTIFY_OUTLINE)}switch(this.status){case Ne.SUCCESS:this.wrapper.classList.add(H.NOTIFY_SUCCESS);break;case Ne.ERROR:this.wrapper.classList.add(H.NOTIFY_ERROR);break;case Ne.WARNING:this.wrapper.classList.add(H.NOTIFY_WARNING);break;case Ne.INFO:this.wrapper.classList.add(H.NOTIFY_INFO);break}this.autoclose&&(this.wrapper.classList.add(H.NOTIFY_AUTOCLOSE),this.wrapper.style.setProperty("--sn-notify-autoclose-timeout","".concat(this.autotimeout+this.speed,"ms"))),this.customClass&&this.customClass.split(" ").forEach(function(a){t.wrapper.classList.add(a)})}},{key:"setContent",value:function(){var t=document.createElement("div");t.classList.add(H.NOTIFY_CONTENT);var a,s;this.title&&(a=document.createElement("div"),a.classList.add(H.NOTIFY_TITLE),a.textContent=this.title.trim(),this.showCloseButton||(a.style.paddingRight="0")),this.text&&(s=document.createElement("div"),s.classList.add(H.NOTIFY_TEXT),s.innerHTML=this.text.trim(),this.title||(s.style.marginTop="0")),this.wrapper.appendChild(t),this.title&&t.appendChild(a),this.text&&t.appendChild(s)}},{key:"setIcon",value:function(){var t=Se(function(s){switch(s){case Ne.SUCCESS:return Ze.SUCCESS;case Ne.ERROR:return Ze.ERROR;case Ne.WARNING:return Ze.WARNING;case Ne.INFO:return Ze.INFO}},"computedIcon"),a=document.createElement("div");a.classList.add(H.NOTIFY_ICON),a.innerHTML=this.customIcon||t(this.status),(this.status||this.customIcon)&&this.wrapper.appendChild(a)}},{key:"setObserver",value:function(){var t=this,a=new IntersectionObserver(function(s){if(s[0].intersectionRatio<=0)t.close();else return},{threshold:0});setTimeout(function(){a.observe(t.wrapper)},this.speed)}},{key:"notifyIn",value:function(n){n(this)}},{key:"autoClose",value:function(){var t=this;setTimeout(function(){t.close()},this.autotimeout+this.speed)}},{key:"close",value:function(){this.notifyOut(this.selectedNotifyOutEffect)}},{key:"setEffect",value:function(){switch(this.effect){case kn.FADE:this.selectedNotifyInEffect=ot,this.selectedNotifyOutEffect=rt;break;case kn.SLIDE:this.selectedNotifyInEffect=Oi,this.selectedNotifyOutEffect=Mi;break;default:this.selectedNotifyInEffect=ot,this.selectedNotifyOutEffect=rt}}}]),e})();Se(Dt,"Notify");var kt=Dt;globalThis.Notify=kt;var se="top",fe="bottom",me="right",oe="left",Gn="auto",ln=[se,fe,me,oe],Ye="start",rn="end",Li="clippingParents",Rt="viewport",Xe="popper",Ni="reference",ct=ln.reduce(function(e,n){return e.concat([n+"-"+Ye,n+"-"+rn])},[]),Pt=[].concat(ln,[Gn]).reduce(function(e,n){return e.concat([n,n+"-"+Ye,n+"-"+rn])},[]),Di="beforeRead",ki="read",Ri="afterRead",Pi="beforeMain",Bi="main",Hi="afterMain",ji="beforeWrite",zi="write",Fi="afterWrite",qi=[Di,ki,Ri,Pi,Bi,Hi,ji,zi,Fi];function Ee(e){return e?(e.nodeName||"").toLowerCase():null}function le(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var n=e.ownerDocument;return n&&n.defaultView||window}return e}function ze(e){var n=le(e).Element;return e instanceof n||e instanceof Element}function ue(e){var n=le(e).HTMLElement;return e instanceof n||e instanceof HTMLElement}function Zn(e){if(typeof ShadowRoot>"u")return!1;var n=le(e).ShadowRoot;return e instanceof n||e instanceof ShadowRoot}function _i(e){var n=e.state;Object.keys(n.elements).forEach(function(t){var a=n.styles[t]||{},s=n.attributes[t]||{},r=n.elements[t];!ue(r)||!Ee(r)||(Object.assign(r.style,a),Object.keys(s).forEach(function(l){var d=s[l];d===!1?r.removeAttribute(l):r.setAttribute(l,d===!0?"":d)}))})}function Ui(e){var n=e.state,t={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,t.popper),n.styles=t,n.elements.arrow&&Object.assign(n.elements.arrow.style,t.arrow),function(){Object.keys(n.elements).forEach(function(a){var s=n.elements[a],r=n.attributes[a]||{},l=Object.keys(n.styles.hasOwnProperty(a)?n.styles[a]:t[a]),d=l.reduce(function(c,f){return c[f]="",c},{});!ue(s)||!Ee(s)||(Object.assign(s.style,d),Object.keys(r).forEach(function(c){s.removeAttribute(c)}))})}}const Bt={name:"applyStyles",enabled:!0,phase:"write",fn:_i,effect:Ui,requires:["computeStyles"]};function xe(e){return e.split("-")[0]}var je=Math.max,xn=Math.min,We=Math.round;function qn(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(n){return n.brand+"/"+n.version}).join(" "):navigator.userAgent}function Ht(){return!/^((?!chrome|android).)*safari/i.test(qn())}function Ve(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!1);var a=e.getBoundingClientRect(),s=1,r=1;n&&ue(e)&&(s=e.offsetWidth>0&&We(a.width)/e.offsetWidth||1,r=e.offsetHeight>0&&We(a.height)/e.offsetHeight||1);var l=ze(e)?le(e):window,d=l.visualViewport,c=!Ht()&&t,f=(a.left+(c&&d?d.offsetLeft:0))/s,m=(a.top+(c&&d?d.offsetTop:0))/r,E=a.width/s,w=a.height/r;return{width:E,height:w,top:m,right:f+E,bottom:m+w,left:f,x:f,y:m}}function Xn(e){var n=Ve(e),t=e.offsetWidth,a=e.offsetHeight;return Math.abs(n.width-t)<=1&&(t=n.width),Math.abs(n.height-a)<=1&&(a=n.height),{x:e.offsetLeft,y:e.offsetTop,width:t,height:a}}function jt(e,n){var t=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(t&&Zn(t)){var a=n;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function Oe(e){return le(e).getComputedStyle(e)}function Yi(e){return["table","td","th"].indexOf(Ee(e))>=0}function De(e){return((ze(e)?e.ownerDocument:e.document)||window.document).documentElement}function An(e){return Ee(e)==="html"?e:e.assignedSlot||e.parentNode||(Zn(e)?e.host:null)||De(e)}function lt(e){return!ue(e)||Oe(e).position==="fixed"?null:e.offsetParent}function Wi(e){var n=/firefox/i.test(qn()),t=/Trident/i.test(qn());if(t&&ue(e)){var a=Oe(e);if(a.position==="fixed")return null}var s=An(e);for(Zn(s)&&(s=s.host);ue(s)&&["html","body"].indexOf(Ee(s))<0;){var r=Oe(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||n&&r.willChange==="filter"||n&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function dn(e){for(var n=le(e),t=lt(e);t&&Yi(t)&&Oe(t).position==="static";)t=lt(t);return t&&(Ee(t)==="html"||Ee(t)==="body"&&Oe(t).position==="static")?n:t||Wi(e)||n}function Qn(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function an(e,n,t){return je(e,xn(n,t))}function Vi(e,n,t){var a=an(e,n,t);return a>t?t:a}function zt(){return{top:0,right:0,bottom:0,left:0}}function Ft(e){return Object.assign({},zt(),e)}function qt(e,n){return n.reduce(function(t,a){return t[a]=e,t},{})}var $i=function(n,t){return n=typeof n=="function"?n(Object.assign({},t.rects,{placement:t.placement})):n,Ft(typeof n!="number"?n:qt(n,ln))};function Gi(e){var n,t=e.state,a=e.name,s=e.options,r=t.elements.arrow,l=t.modifiersData.popperOffsets,d=xe(t.placement),c=Qn(d),f=[oe,me].indexOf(d)>=0,m=f?"height":"width";if(!(!r||!l)){var E=$i(s.padding,t),w=Xn(r),y=c==="y"?se:oe,A=c==="y"?fe:me,b=t.rects.reference[m]+t.rects.reference[c]-l[c]-t.rects.popper[m],x=l[c]-t.rects.reference[c],M=dn(r),C=M?c==="y"?M.clientHeight||0:M.clientWidth||0:0,O=b/2-x/2,o=E[y],I=C-w[m]-E[A],v=C/2-w[m]/2+O,D=an(o,v,I),q=c;t.modifiersData[a]=(n={},n[q]=D,n.centerOffset=D-v,n)}}function Zi(e){var n=e.state,t=e.options,a=t.element,s=a===void 0?"[data-popper-arrow]":a;s!=null&&(typeof s=="string"&&(s=n.elements.popper.querySelector(s),!s)||jt(n.elements.popper,s)&&(n.elements.arrow=s))}const Xi={name:"arrow",enabled:!0,phase:"main",fn:Gi,effect:Zi,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function $e(e){return e.split("-")[1]}var Qi={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ji(e,n){var t=e.x,a=e.y,s=n.devicePixelRatio||1;return{x:We(t*s)/s||0,y:We(a*s)/s||0}}function dt(e){var n,t=e.popper,a=e.popperRect,s=e.placement,r=e.variation,l=e.offsets,d=e.position,c=e.gpuAcceleration,f=e.adaptive,m=e.roundOffsets,E=e.isFixed,w=l.x,y=w===void 0?0:w,A=l.y,b=A===void 0?0:A,x=typeof m=="function"?m({x:y,y:b}):{x:y,y:b};y=x.x,b=x.y;var M=l.hasOwnProperty("x"),C=l.hasOwnProperty("y"),O=oe,o=se,I=window;if(f){var v=dn(t),D="clientHeight",q="clientWidth";if(v===le(t)&&(v=De(t),Oe(v).position!=="static"&&d==="absolute"&&(D="scrollHeight",q="scrollWidth")),v=v,s===se||(s===oe||s===me)&&r===rn){o=fe;var j=E&&v===I&&I.visualViewport?I.visualViewport.height:v[D];b-=j-a.height,b*=c?1:-1}if(s===oe||(s===se||s===fe)&&r===rn){O=me;var z=E&&v===I&&I.visualViewport?I.visualViewport.width:v[q];y-=z-a.width,y*=c?1:-1}}var k=Object.assign({position:d},f&&Qi),F=m===!0?Ji({x:y,y:b},le(t)):{x:y,y:b};if(y=F.x,b=F.y,c){var B;return Object.assign({},k,(B={},B[o]=C?"0":"",B[O]=M?"0":"",B.transform=(I.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",B))}return Object.assign({},k,(n={},n[o]=C?b+"px":"",n[O]=M?y+"px":"",n.transform="",n))}function Ki(e){var n=e.state,t=e.options,a=t.gpuAcceleration,s=a===void 0?!0:a,r=t.adaptive,l=r===void 0?!0:r,d=t.roundOffsets,c=d===void 0?!0:d,f={placement:xe(n.placement),variation:$e(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:s,isFixed:n.options.strategy==="fixed"};n.modifiersData.popperOffsets!=null&&(n.styles.popper=Object.assign({},n.styles.popper,dt(Object.assign({},f,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:l,roundOffsets:c})))),n.modifiersData.arrow!=null&&(n.styles.arrow=Object.assign({},n.styles.arrow,dt(Object.assign({},f,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})}const ea={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ki,data:{}};var mn={passive:!0};function na(e){var n=e.state,t=e.instance,a=e.options,s=a.scroll,r=s===void 0?!0:s,l=a.resize,d=l===void 0?!0:l,c=le(n.elements.popper),f=[].concat(n.scrollParents.reference,n.scrollParents.popper);return r&&f.forEach(function(m){m.addEventListener("scroll",t.update,mn)}),d&&c.addEventListener("resize",t.update,mn),function(){r&&f.forEach(function(m){m.removeEventListener("scroll",t.update,mn)}),d&&c.removeEventListener("resize",t.update,mn)}}const ta={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:na,data:{}};var ia={left:"right",right:"left",bottom:"top",top:"bottom"};function bn(e){return e.replace(/left|right|bottom|top/g,function(n){return ia[n]})}var aa={start:"end",end:"start"};function pt(e){return e.replace(/start|end/g,function(n){return aa[n]})}function Jn(e){var n=le(e),t=n.pageXOffset,a=n.pageYOffset;return{scrollLeft:t,scrollTop:a}}function Kn(e){return Ve(De(e)).left+Jn(e).scrollLeft}function sa(e,n){var t=le(e),a=De(e),s=t.visualViewport,r=a.clientWidth,l=a.clientHeight,d=0,c=0;if(s){r=s.width,l=s.height;var f=Ht();(f||!f&&n==="fixed")&&(d=s.offsetLeft,c=s.offsetTop)}return{width:r,height:l,x:d+Kn(e),y:c}}function oa(e){var n,t=De(e),a=Jn(e),s=(n=e.ownerDocument)==null?void 0:n.body,r=je(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),l=je(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),d=-a.scrollLeft+Kn(e),c=-a.scrollTop;return Oe(s||t).direction==="rtl"&&(d+=je(t.clientWidth,s?s.clientWidth:0)-r),{width:r,height:l,x:d,y:c}}function et(e){var n=Oe(e),t=n.overflow,a=n.overflowX,s=n.overflowY;return/auto|scroll|overlay|hidden/.test(t+s+a)}function _t(e){return["html","body","#document"].indexOf(Ee(e))>=0?e.ownerDocument.body:ue(e)&&et(e)?e:_t(An(e))}function sn(e,n){var t;n===void 0&&(n=[]);var a=_t(e),s=a===((t=e.ownerDocument)==null?void 0:t.body),r=le(a),l=s?[r].concat(r.visualViewport||[],et(a)?a:[]):a,d=n.concat(l);return s?d:d.concat(sn(An(l)))}function _n(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ra(e,n){var t=Ve(e,!1,n==="fixed");return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function ut(e,n,t){return n===Rt?_n(sa(e,t)):ze(n)?ra(n,t):_n(oa(De(e)))}function ca(e){var n=sn(An(e)),t=["absolute","fixed"].indexOf(Oe(e).position)>=0,a=t&&ue(e)?dn(e):e;return ze(a)?n.filter(function(s){return ze(s)&&jt(s,a)&&Ee(s)!=="body"}):[]}function la(e,n,t,a){var s=n==="clippingParents"?ca(e):[].concat(n),r=[].concat(s,[t]),l=r[0],d=r.reduce(function(c,f){var m=ut(e,f,a);return c.top=je(m.top,c.top),c.right=xn(m.right,c.right),c.bottom=xn(m.bottom,c.bottom),c.left=je(m.left,c.left),c},ut(e,l,a));return d.width=d.right-d.left,d.height=d.bottom-d.top,d.x=d.left,d.y=d.top,d}function Ut(e){var n=e.reference,t=e.element,a=e.placement,s=a?xe(a):null,r=a?$e(a):null,l=n.x+n.width/2-t.width/2,d=n.y+n.height/2-t.height/2,c;switch(s){case se:c={x:l,y:n.y-t.height};break;case fe:c={x:l,y:n.y+n.height};break;case me:c={x:n.x+n.width,y:d};break;case oe:c={x:n.x-t.width,y:d};break;default:c={x:n.x,y:n.y}}var f=s?Qn(s):null;if(f!=null){var m=f==="y"?"height":"width";switch(r){case Ye:c[f]=c[f]-(n[m]/2-t[m]/2);break;case rn:c[f]=c[f]+(n[m]/2-t[m]/2);break}}return c}function cn(e,n){n===void 0&&(n={});var t=n,a=t.placement,s=a===void 0?e.placement:a,r=t.strategy,l=r===void 0?e.strategy:r,d=t.boundary,c=d===void 0?Li:d,f=t.rootBoundary,m=f===void 0?Rt:f,E=t.elementContext,w=E===void 0?Xe:E,y=t.altBoundary,A=y===void 0?!1:y,b=t.padding,x=b===void 0?0:b,M=Ft(typeof x!="number"?x:qt(x,ln)),C=w===Xe?Ni:Xe,O=e.rects.popper,o=e.elements[A?C:w],I=la(ze(o)?o:o.contextElement||De(e.elements.popper),c,m,l),v=Ve(e.elements.reference),D=Ut({reference:v,element:O,placement:s}),q=_n(Object.assign({},O,D)),j=w===Xe?q:v,z={top:I.top-j.top+M.top,bottom:j.bottom-I.bottom+M.bottom,left:I.left-j.left+M.left,right:j.right-I.right+M.right},k=e.modifiersData.offset;if(w===Xe&&k){var F=k[s];Object.keys(z).forEach(function(B){var G=[me,fe].indexOf(B)>=0?1:-1,i=[se,fe].indexOf(B)>=0?"y":"x";z[B]+=F[i]*G})}return z}function da(e,n){n===void 0&&(n={});var t=n,a=t.placement,s=t.boundary,r=t.rootBoundary,l=t.padding,d=t.flipVariations,c=t.allowedAutoPlacements,f=c===void 0?Pt:c,m=$e(a),E=m?d?ct:ct.filter(function(A){return $e(A)===m}):ln,w=E.filter(function(A){return f.indexOf(A)>=0});w.length===0&&(w=E);var y=w.reduce(function(A,b){return A[b]=cn(e,{placement:b,boundary:s,rootBoundary:r,padding:l})[xe(b)],A},{});return Object.keys(y).sort(function(A,b){return y[A]-y[b]})}function pa(e){if(xe(e)===Gn)return[];var n=bn(e);return[pt(e),n,pt(n)]}function ua(e){var n=e.state,t=e.options,a=e.name;if(!n.modifiersData[a]._skip){for(var s=t.mainAxis,r=s===void 0?!0:s,l=t.altAxis,d=l===void 0?!0:l,c=t.fallbackPlacements,f=t.padding,m=t.boundary,E=t.rootBoundary,w=t.altBoundary,y=t.flipVariations,A=y===void 0?!0:y,b=t.allowedAutoPlacements,x=n.options.placement,M=xe(x),C=M===x,O=c||(C||!A?[bn(x)]:pa(x)),o=[x].concat(O).reduce(function(K,R){return K.concat(xe(R)===Gn?da(n,{placement:R,boundary:m,rootBoundary:E,padding:f,flipVariations:A,allowedAutoPlacements:b}):R)},[]),I=n.rects.reference,v=n.rects.popper,D=new Map,q=!0,j=o[0],z=0;z<o.length;z++){var k=o[z],F=xe(k),B=$e(k)===Ye,G=[se,fe].indexOf(F)>=0,i=G?"width":"height",u=cn(n,{placement:k,boundary:m,rootBoundary:E,altBoundary:w,padding:f}),h=G?B?me:oe:B?fe:se;I[i]>v[i]&&(h=bn(h));var L=bn(h),S=[];if(r&&S.push(u[F]<=0),d&&S.push(u[h]<=0,u[L]<=0),S.every(function(K){return K})){j=k,q=!1;break}D.set(k,S)}if(q)for(var _=A?3:1,W=function(R){var U=o.find(function($){var V=D.get($);if(V)return V.slice(0,R).every(function(ee){return ee})});if(U)return j=U,"break"},Y=_;Y>0;Y--){var te=W(Y);if(te==="break")break}n.placement!==j&&(n.modifiersData[a]._skip=!0,n.placement=j,n.reset=!0)}}const fa={name:"flip",enabled:!0,phase:"main",fn:ua,requiresIfExists:["offset"],data:{_skip:!1}};function ft(e,n,t){return t===void 0&&(t={x:0,y:0}),{top:e.top-n.height-t.y,right:e.right-n.width+t.x,bottom:e.bottom-n.height+t.y,left:e.left-n.width-t.x}}function mt(e){return[se,me,fe,oe].some(function(n){return e[n]>=0})}function ma(e){var n=e.state,t=e.name,a=n.rects.reference,s=n.rects.popper,r=n.modifiersData.preventOverflow,l=cn(n,{elementContext:"reference"}),d=cn(n,{altBoundary:!0}),c=ft(l,a),f=ft(d,s,r),m=mt(c),E=mt(f);n.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:m,hasPopperEscaped:E},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":m,"data-popper-escaped":E})}const va={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ma};function ha(e,n,t){var a=xe(e),s=[oe,se].indexOf(a)>=0?-1:1,r=typeof t=="function"?t(Object.assign({},n,{placement:e})):t,l=r[0],d=r[1];return l=l||0,d=(d||0)*s,[oe,me].indexOf(a)>=0?{x:d,y:l}:{x:l,y:d}}function ga(e){var n=e.state,t=e.options,a=e.name,s=t.offset,r=s===void 0?[0,0]:s,l=Pt.reduce(function(m,E){return m[E]=ha(E,n.rects,r),m},{}),d=l[n.placement],c=d.x,f=d.y;n.modifiersData.popperOffsets!=null&&(n.modifiersData.popperOffsets.x+=c,n.modifiersData.popperOffsets.y+=f),n.modifiersData[a]=l}const ba={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ga};function ya(e){var n=e.state,t=e.name;n.modifiersData[t]=Ut({reference:n.rects.reference,element:n.rects.popper,placement:n.placement})}const wa={name:"popperOffsets",enabled:!0,phase:"read",fn:ya,data:{}};function xa(e){return e==="x"?"y":"x"}function Ea(e){var n=e.state,t=e.options,a=e.name,s=t.mainAxis,r=s===void 0?!0:s,l=t.altAxis,d=l===void 0?!1:l,c=t.boundary,f=t.rootBoundary,m=t.altBoundary,E=t.padding,w=t.tether,y=w===void 0?!0:w,A=t.tetherOffset,b=A===void 0?0:A,x=cn(n,{boundary:c,rootBoundary:f,padding:E,altBoundary:m}),M=xe(n.placement),C=$e(n.placement),O=!C,o=Qn(M),I=xa(o),v=n.modifiersData.popperOffsets,D=n.rects.reference,q=n.rects.popper,j=typeof b=="function"?b(Object.assign({},n.rects,{placement:n.placement})):b,z=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),k=n.modifiersData.offset?n.modifiersData.offset[n.placement]:null,F={x:0,y:0};if(v){if(r){var B,G=o==="y"?se:oe,i=o==="y"?fe:me,u=o==="y"?"height":"width",h=v[o],L=h+x[G],S=h-x[i],_=y?-q[u]/2:0,W=C===Ye?D[u]:q[u],Y=C===Ye?-q[u]:-D[u],te=n.elements.arrow,K=y&&te?Xn(te):{width:0,height:0},R=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:zt(),U=R[G],$=R[i],V=an(0,D[u],K[u]),ee=O?D[u]/2-_-V-U-z.mainAxis:W-V-U-z.mainAxis,Z=O?-D[u]/2+_+V+$+z.mainAxis:Y+V+$+z.mainAxis,X=n.elements.arrow&&dn(n.elements.arrow),Me=X?o==="y"?X.clientTop||0:X.clientLeft||0:0,ie=(B=k==null?void 0:k[o])!=null?B:0,de=h+ee-ie-Me,pe=h+Z-ie,re=an(y?xn(L,de):L,h,y?je(S,pe):S);v[o]=re,F[o]=re-h}if(d){var Ae,Ie=o==="x"?se:oe,Ce=o==="x"?fe:me,J=v[I],ne=I==="y"?"height":"width",ve=J+x[Ie],ce=J-x[Ce],Le=[se,oe].indexOf(M)!==-1,he=(Ae=k==null?void 0:k[I])!=null?Ae:0,be=Le?ve:J-D[ne]-q[ne]-he+z.altAxis,Te=Le?J+D[ne]+q[ne]-he-z.altAxis:ce,ke=y&&Le?Vi(be,J,Te):an(y?be:ve,J,y?Te:ce);v[I]=ke,F[I]=ke-J}n.modifiersData[a]=F}}const Aa={name:"preventOverflow",enabled:!0,phase:"main",fn:Ea,requiresIfExists:["offset"]};function Ia(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ca(e){return e===le(e)||!ue(e)?Jn(e):Ia(e)}function Ta(e){var n=e.getBoundingClientRect(),t=We(n.width)/e.offsetWidth||1,a=We(n.height)/e.offsetHeight||1;return t!==1||a!==1}function Sa(e,n,t){t===void 0&&(t=!1);var a=ue(n),s=ue(n)&&Ta(n),r=De(n),l=Ve(e,s,t),d={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!t)&&((Ee(n)!=="body"||et(r))&&(d=Ca(n)),ue(n)?(c=Ve(n,!0),c.x+=n.clientLeft,c.y+=n.clientTop):r&&(c.x=Kn(r))),{x:l.left+d.scrollLeft-c.x,y:l.top+d.scrollTop-c.y,width:l.width,height:l.height}}function Oa(e){var n=new Map,t=new Set,a=[];e.forEach(function(r){n.set(r.name,r)});function s(r){t.add(r.name);var l=[].concat(r.requires||[],r.requiresIfExists||[]);l.forEach(function(d){if(!t.has(d)){var c=n.get(d);c&&s(c)}}),a.push(r)}return e.forEach(function(r){t.has(r.name)||s(r)}),a}function Ma(e){var n=Oa(e);return qi.reduce(function(t,a){return t.concat(n.filter(function(s){return s.phase===a}))},[])}function La(e){var n;return function(){return n||(n=new Promise(function(t){Promise.resolve().then(function(){n=void 0,t(e())})})),n}}function Na(e){var n=e.reduce(function(t,a){var s=t[a.name];return t[a.name]=s?Object.assign({},s,a,{options:Object.assign({},s.options,a.options),data:Object.assign({},s.data,a.data)}):a,t},{});return Object.keys(n).map(function(t){return n[t]})}var vt={placement:"bottom",modifiers:[],strategy:"absolute"};function ht(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return!n.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function Da(e){e===void 0&&(e={});var n=e,t=n.defaultModifiers,a=t===void 0?[]:t,s=n.defaultOptions,r=s===void 0?vt:s;return function(d,c,f){f===void 0&&(f=r);var m={placement:"bottom",orderedModifiers:[],options:Object.assign({},vt,r),modifiersData:{},elements:{reference:d,popper:c},attributes:{},styles:{}},E=[],w=!1,y={state:m,setOptions:function(M){var C=typeof M=="function"?M(m.options):M;b(),m.options=Object.assign({},r,m.options,C),m.scrollParents={reference:ze(d)?sn(d):d.contextElement?sn(d.contextElement):[],popper:sn(c)};var O=Ma(Na([].concat(a,m.options.modifiers)));return m.orderedModifiers=O.filter(function(o){return o.enabled}),A(),y.update()},forceUpdate:function(){if(!w){var M=m.elements,C=M.reference,O=M.popper;if(ht(C,O)){m.rects={reference:Sa(C,dn(O),m.options.strategy==="fixed"),popper:Xn(O)},m.reset=!1,m.placement=m.options.placement,m.orderedModifiers.forEach(function(z){return m.modifiersData[z.name]=Object.assign({},z.data)});for(var o=0;o<m.orderedModifiers.length;o++){if(m.reset===!0){m.reset=!1,o=-1;continue}var I=m.orderedModifiers[o],v=I.fn,D=I.options,q=D===void 0?{}:D,j=I.name;typeof v=="function"&&(m=v({state:m,options:q,name:j,instance:y})||m)}}}},update:La(function(){return new Promise(function(x){y.forceUpdate(),x(m)})}),destroy:function(){b(),w=!0}};if(!ht(d,c))return y;y.setOptions(f).then(function(x){!w&&f.onFirstUpdate&&f.onFirstUpdate(x)});function A(){m.orderedModifiers.forEach(function(x){var M=x.name,C=x.options,O=C===void 0?{}:C,o=x.effect;if(typeof o=="function"){var I=o({state:m,name:M,instance:y,options:O}),v=function(){};E.push(I||v)}})}function b(){E.forEach(function(x){return x()}),E=[]}return y}}var ka=[ta,wa,ea,Bt,ba,fa,Aa,Xi,va],Ra=Da({defaultModifiers:ka}),Pa="tippy-box",Yt="tippy-content",Ba="tippy-backdrop",Wt="tippy-arrow",Vt="tippy-svg-arrow",Pe={passive:!0,capture:!0},$t=function(){return document.body};function Rn(e,n,t){if(Array.isArray(e)){var a=e[n];return a??(Array.isArray(t)?t[n]:t)}return e}function nt(e,n){var t={}.toString.call(e);return t.indexOf("[object")===0&&t.indexOf(n+"]")>-1}function Gt(e,n){return typeof e=="function"?e.apply(void 0,n):e}function gt(e,n){if(n===0)return e;var t;return function(a){clearTimeout(t),t=setTimeout(function(){e(a)},n)}}function Ha(e){return e.split(/\s+/).filter(Boolean)}function _e(e){return[].concat(e)}function bt(e,n){e.indexOf(n)===-1&&e.push(n)}function ja(e){return e.filter(function(n,t){return e.indexOf(n)===t})}function za(e){return e.split("-")[0]}function En(e){return[].slice.call(e)}function yt(e){return Object.keys(e).reduce(function(n,t){return e[t]!==void 0&&(n[t]=e[t]),n},{})}function on(){return document.createElement("div")}function In(e){return["Element","Fragment"].some(function(n){return nt(e,n)})}function Fa(e){return nt(e,"NodeList")}function qa(e){return nt(e,"MouseEvent")}function _a(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function Ua(e){return In(e)?[e]:Fa(e)?En(e):Array.isArray(e)?e:En(document.querySelectorAll(e))}function Pn(e,n){e.forEach(function(t){t&&(t.style.transitionDuration=n+"ms")})}function wt(e,n){e.forEach(function(t){t&&t.setAttribute("data-state",n)})}function Ya(e){var n,t=_e(e),a=t[0];return a!=null&&(n=a.ownerDocument)!=null&&n.body?a.ownerDocument:document}function Wa(e,n){var t=n.clientX,a=n.clientY;return e.every(function(s){var r=s.popperRect,l=s.popperState,d=s.props,c=d.interactiveBorder,f=za(l.placement),m=l.modifiersData.offset;if(!m)return!0;var E=f==="bottom"?m.top.y:0,w=f==="top"?m.bottom.y:0,y=f==="right"?m.left.x:0,A=f==="left"?m.right.x:0,b=r.top-a+E>c,x=a-r.bottom-w>c,M=r.left-t+y>c,C=t-r.right-A>c;return b||x||M||C})}function Bn(e,n,t){var a=n+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(s){e[a](s,t)})}function xt(e,n){for(var t=n;t;){var a;if(e.contains(t))return!0;t=t.getRootNode==null||(a=t.getRootNode())==null?void 0:a.host}return!1}var we={isTouch:!1},Et=0;function Va(){we.isTouch||(we.isTouch=!0,window.performance&&document.addEventListener("mousemove",Zt))}function Zt(){var e=performance.now();e-Et<20&&(we.isTouch=!1,document.removeEventListener("mousemove",Zt)),Et=e}function $a(){var e=document.activeElement;if(_a(e)){var n=e._tippy;e.blur&&!n.state.isVisible&&e.blur()}}function Ga(){document.addEventListener("touchstart",Va,Pe),window.addEventListener("blur",$a)}var Za=typeof window<"u"&&typeof document<"u",Xa=Za?!!window.msCrypto:!1,Qa={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Ja={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},ge=Object.assign({appendTo:$t,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Qa,Ja),Ka=Object.keys(ge),es=function(n){var t=Object.keys(n);t.forEach(function(a){ge[a]=n[a]})};function Xt(e){var n=e.plugins||[],t=n.reduce(function(a,s){var r=s.name,l=s.defaultValue;if(r){var d;a[r]=e[r]!==void 0?e[r]:(d=ge[r])!=null?d:l}return a},{});return Object.assign({},e,t)}function ns(e,n){var t=n?Object.keys(Xt(Object.assign({},ge,{plugins:n}))):Ka,a=t.reduce(function(s,r){var l=(e.getAttribute("data-tippy-"+r)||"").trim();if(!l)return s;if(r==="content")s[r]=l;else try{s[r]=JSON.parse(l)}catch{s[r]=l}return s},{});return a}function At(e,n){var t=Object.assign({},n,{content:Gt(n.content,[e])},n.ignoreAttributes?{}:ns(e,n.plugins));return t.aria=Object.assign({},ge.aria,t.aria),t.aria={expanded:t.aria.expanded==="auto"?n.interactive:t.aria.expanded,content:t.aria.content==="auto"?n.interactive?null:"describedby":t.aria.content},t}var ts=function(){return"innerHTML"};function Un(e,n){e[ts()]=n}function It(e){var n=on();return e===!0?n.className=Wt:(n.className=Vt,In(e)?n.appendChild(e):Un(n,e)),n}function Ct(e,n){In(n.content)?(Un(e,""),e.appendChild(n.content)):typeof n.content!="function"&&(n.allowHTML?Un(e,n.content):e.textContent=n.content)}function Yn(e){var n=e.firstElementChild,t=En(n.children);return{box:n,content:t.find(function(a){return a.classList.contains(Yt)}),arrow:t.find(function(a){return a.classList.contains(Wt)||a.classList.contains(Vt)}),backdrop:t.find(function(a){return a.classList.contains(Ba)})}}function Qt(e){var n=on(),t=on();t.className=Pa,t.setAttribute("data-state","hidden"),t.setAttribute("tabindex","-1");var a=on();a.className=Yt,a.setAttribute("data-state","hidden"),Ct(a,e.props),n.appendChild(t),t.appendChild(a),s(e.props,e.props);function s(r,l){var d=Yn(n),c=d.box,f=d.content,m=d.arrow;l.theme?c.setAttribute("data-theme",l.theme):c.removeAttribute("data-theme"),typeof l.animation=="string"?c.setAttribute("data-animation",l.animation):c.removeAttribute("data-animation"),l.inertia?c.setAttribute("data-inertia",""):c.removeAttribute("data-inertia"),c.style.maxWidth=typeof l.maxWidth=="number"?l.maxWidth+"px":l.maxWidth,l.role?c.setAttribute("role",l.role):c.removeAttribute("role"),(r.content!==l.content||r.allowHTML!==l.allowHTML)&&Ct(f,e.props),l.arrow?m?r.arrow!==l.arrow&&(c.removeChild(m),c.appendChild(It(l.arrow))):c.appendChild(It(l.arrow)):m&&c.removeChild(m)}return{popper:n,onUpdate:s}}Qt.$$tippy=!0;var is=1,vn=[],Hn=[];function as(e,n){var t=At(e,Object.assign({},ge,Xt(yt(n)))),a,s,r,l=!1,d=!1,c=!1,f=!1,m,E,w,y=[],A=gt(de,t.interactiveDebounce),b,x=is++,M=null,C=ja(t.plugins),O={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},o={id:x,reference:e,popper:on(),popperInstance:M,props:t,state:O,plugins:C,clearDelayTimeouts:be,setProps:Te,setContent:ke,show:Cn,hide:Tn,hideWithInteractivity:Sn,enable:Le,disable:he,unmount:On,destroy:Mn};if(!t.render)return o;var I=t.render(o),v=I.popper,D=I.onUpdate;v.setAttribute("data-tippy-root",""),v.id="tippy-"+o.id,o.popper=v,e._tippy=o,v._tippy=o;var q=C.map(function(p){return p.fn(o)}),j=e.hasAttribute("aria-expanded");return X(),_(),h(),L("onCreate",[o]),t.showOnCreate&&ve(),v.addEventListener("mouseenter",function(){o.props.interactive&&o.state.isVisible&&o.clearDelayTimeouts()}),v.addEventListener("mouseleave",function(){o.props.interactive&&o.props.trigger.indexOf("mouseenter")>=0&&G().addEventListener("mousemove",A)}),o;function z(){var p=o.props.touch;return Array.isArray(p)?p:[p,0]}function k(){return z()[0]==="hold"}function F(){var p;return!!((p=o.props.render)!=null&&p.$$tippy)}function B(){return b||e}function G(){var p=B().parentNode;return p?Ya(p):document}function i(){return Yn(v)}function u(p){return o.state.isMounted&&!o.state.isVisible||we.isTouch||m&&m.type==="focus"?0:Rn(o.props.delay,p?0:1,ge.delay)}function h(p){p===void 0&&(p=!1),v.style.pointerEvents=o.props.interactive&&!p?"":"none",v.style.zIndex=""+o.props.zIndex}function L(p,g,T){if(T===void 0&&(T=!0),q.forEach(function(N){N[p]&&N[p].apply(N,g)}),T){var P;(P=o.props)[p].apply(P,g)}}function S(){var p=o.props.aria;if(p.content){var g="aria-"+p.content,T=v.id,P=_e(o.props.triggerTarget||e);P.forEach(function(N){var Q=N.getAttribute(g);if(o.state.isVisible)N.setAttribute(g,Q?Q+" "+T:T);else{var ae=Q&&Q.replace(T,"").trim();ae?N.setAttribute(g,ae):N.removeAttribute(g)}})}}function _(){if(!(j||!o.props.aria.expanded)){var p=_e(o.props.triggerTarget||e);p.forEach(function(g){o.props.interactive?g.setAttribute("aria-expanded",o.state.isVisible&&g===B()?"true":"false"):g.removeAttribute("aria-expanded")})}}function W(){G().removeEventListener("mousemove",A),vn=vn.filter(function(p){return p!==A})}function Y(p){if(!(we.isTouch&&(c||p.type==="mousedown"))){var g=p.composedPath&&p.composedPath()[0]||p.target;if(!(o.props.interactive&&xt(v,g))){if(_e(o.props.triggerTarget||e).some(function(T){return xt(T,g)})){if(we.isTouch||o.state.isVisible&&o.props.trigger.indexOf("click")>=0)return}else L("onClickOutside",[o,p]);o.props.hideOnClick===!0&&(o.clearDelayTimeouts(),o.hide(),d=!0,setTimeout(function(){d=!1}),o.state.isMounted||U())}}}function te(){c=!0}function K(){c=!1}function R(){var p=G();p.addEventListener("mousedown",Y,!0),p.addEventListener("touchend",Y,Pe),p.addEventListener("touchstart",K,Pe),p.addEventListener("touchmove",te,Pe)}function U(){var p=G();p.removeEventListener("mousedown",Y,!0),p.removeEventListener("touchend",Y,Pe),p.removeEventListener("touchstart",K,Pe),p.removeEventListener("touchmove",te,Pe)}function $(p,g){ee(p,function(){!o.state.isVisible&&v.parentNode&&v.parentNode.contains(v)&&g()})}function V(p,g){ee(p,g)}function ee(p,g){var T=i().box;function P(N){N.target===T&&(Bn(T,"remove",P),g())}if(p===0)return g();Bn(T,"remove",E),Bn(T,"add",P),E=P}function Z(p,g,T){T===void 0&&(T=!1);var P=_e(o.props.triggerTarget||e);P.forEach(function(N){N.addEventListener(p,g,T),y.push({node:N,eventType:p,handler:g,options:T})})}function X(){k()&&(Z("touchstart",ie,{passive:!0}),Z("touchend",pe,{passive:!0})),Ha(o.props.trigger).forEach(function(p){if(p!=="manual")switch(Z(p,ie),p){case"mouseenter":Z("mouseleave",pe);break;case"focus":Z(Xa?"focusout":"blur",re);break;case"focusin":Z("focusout",re);break}})}function Me(){y.forEach(function(p){var g=p.node,T=p.eventType,P=p.handler,N=p.options;g.removeEventListener(T,P,N)}),y=[]}function ie(p){var g,T=!1;if(!(!o.state.isEnabled||Ae(p)||d)){var P=((g=m)==null?void 0:g.type)==="focus";m=p,b=p.currentTarget,_(),!o.state.isVisible&&qa(p)&&vn.forEach(function(N){return N(p)}),p.type==="click"&&(o.props.trigger.indexOf("mouseenter")<0||l)&&o.props.hideOnClick!==!1&&o.state.isVisible?T=!0:ve(p),p.type==="click"&&(l=!T),T&&!P&&ce(p)}}function de(p){var g=p.target,T=B().contains(g)||v.contains(g);if(!(p.type==="mousemove"&&T)){var P=ne().concat(v).map(function(N){var Q,ae=N._tippy,Fe=(Q=ae.popperInstance)==null?void 0:Q.state;return Fe?{popperRect:N.getBoundingClientRect(),popperState:Fe,props:t}:null}).filter(Boolean);Wa(P,p)&&(W(),ce(p))}}function pe(p){var g=Ae(p)||o.props.trigger.indexOf("click")>=0&&l;if(!g){if(o.props.interactive){o.hideWithInteractivity(p);return}ce(p)}}function re(p){o.props.trigger.indexOf("focusin")<0&&p.target!==B()||o.props.interactive&&p.relatedTarget&&v.contains(p.relatedTarget)||ce(p)}function Ae(p){return we.isTouch?k()!==p.type.indexOf("touch")>=0:!1}function Ie(){Ce();var p=o.props,g=p.popperOptions,T=p.placement,P=p.offset,N=p.getReferenceClientRect,Q=p.moveTransition,ae=F()?Yn(v).arrow:null,Fe=N?{getBoundingClientRect:N,contextElement:N.contextElement||B()}:e,it={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(un){var qe=un.state;if(F()){var ei=i(),Nn=ei.box;["placement","reference-hidden","escaped"].forEach(function(fn){fn==="placement"?Nn.setAttribute("data-placement",qe.placement):qe.attributes.popper["data-popper-"+fn]?Nn.setAttribute("data-"+fn,""):Nn.removeAttribute("data-"+fn)}),qe.attributes.popper={}}}},Re=[{name:"offset",options:{offset:P}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!Q}},it];F()&&ae&&Re.push({name:"arrow",options:{element:ae,padding:3}}),Re.push.apply(Re,(g==null?void 0:g.modifiers)||[]),o.popperInstance=Ra(Fe,v,Object.assign({},g,{placement:T,onFirstUpdate:w,modifiers:Re}))}function Ce(){o.popperInstance&&(o.popperInstance.destroy(),o.popperInstance=null)}function J(){var p=o.props.appendTo,g,T=B();o.props.interactive&&p===$t||p==="parent"?g=T.parentNode:g=Gt(p,[T]),g.contains(v)||g.appendChild(v),o.state.isMounted=!0,Ie()}function ne(){return En(v.querySelectorAll("[data-tippy-root]"))}function ve(p){o.clearDelayTimeouts(),p&&L("onTrigger",[o,p]),R();var g=u(!0),T=z(),P=T[0],N=T[1];we.isTouch&&P==="hold"&&N&&(g=N),g?a=setTimeout(function(){o.show()},g):o.show()}function ce(p){if(o.clearDelayTimeouts(),L("onUntrigger",[o,p]),!o.state.isVisible){U();return}if(!(o.props.trigger.indexOf("mouseenter")>=0&&o.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(p.type)>=0&&l)){var g=u(!1);g?s=setTimeout(function(){o.state.isVisible&&o.hide()},g):r=requestAnimationFrame(function(){o.hide()})}}function Le(){o.state.isEnabled=!0}function he(){o.hide(),o.state.isEnabled=!1}function be(){clearTimeout(a),clearTimeout(s),cancelAnimationFrame(r)}function Te(p){if(!o.state.isDestroyed){L("onBeforeUpdate",[o,p]),Me();var g=o.props,T=At(e,Object.assign({},g,yt(p),{ignoreAttributes:!0}));o.props=T,X(),g.interactiveDebounce!==T.interactiveDebounce&&(W(),A=gt(de,T.interactiveDebounce)),g.triggerTarget&&!T.triggerTarget?_e(g.triggerTarget).forEach(function(P){P.removeAttribute("aria-expanded")}):T.triggerTarget&&e.removeAttribute("aria-expanded"),_(),h(),D&&D(g,T),o.popperInstance&&(Ie(),ne().forEach(function(P){requestAnimationFrame(P._tippy.popperInstance.forceUpdate)})),L("onAfterUpdate",[o,p])}}function ke(p){o.setProps({content:p})}function Cn(){var p=o.state.isVisible,g=o.state.isDestroyed,T=!o.state.isEnabled,P=we.isTouch&&!o.props.touch,N=Rn(o.props.duration,0,ge.duration);if(!(p||g||T||P)&&!B().hasAttribute("disabled")&&(L("onShow",[o],!1),o.props.onShow(o)!==!1)){if(o.state.isVisible=!0,F()&&(v.style.visibility="visible"),h(),R(),o.state.isMounted||(v.style.transition="none"),F()){var Q=i(),ae=Q.box,Fe=Q.content;Pn([ae,Fe],0)}w=function(){var Re;if(!(!o.state.isVisible||f)){if(f=!0,v.offsetHeight,v.style.transition=o.props.moveTransition,F()&&o.props.animation){var Ln=i(),un=Ln.box,qe=Ln.content;Pn([un,qe],N),wt([un,qe],"visible")}S(),_(),bt(Hn,o),(Re=o.popperInstance)==null||Re.forceUpdate(),L("onMount",[o]),o.props.animation&&F()&&V(N,function(){o.state.isShown=!0,L("onShown",[o])})}},J()}}function Tn(){var p=!o.state.isVisible,g=o.state.isDestroyed,T=!o.state.isEnabled,P=Rn(o.props.duration,1,ge.duration);if(!(p||g||T)&&(L("onHide",[o],!1),o.props.onHide(o)!==!1)){if(o.state.isVisible=!1,o.state.isShown=!1,f=!1,l=!1,F()&&(v.style.visibility="hidden"),W(),U(),h(!0),F()){var N=i(),Q=N.box,ae=N.content;o.props.animation&&(Pn([Q,ae],P),wt([Q,ae],"hidden"))}S(),_(),o.props.animation?F()&&$(P,o.unmount):o.unmount()}}function Sn(p){G().addEventListener("mousemove",A),bt(vn,A),A(p)}function On(){o.state.isVisible&&o.hide(),o.state.isMounted&&(Ce(),ne().forEach(function(p){p._tippy.unmount()}),v.parentNode&&v.parentNode.removeChild(v),Hn=Hn.filter(function(p){return p!==o}),o.state.isMounted=!1,L("onHidden",[o]))}function Mn(){o.state.isDestroyed||(o.clearDelayTimeouts(),o.unmount(),Me(),delete e._tippy,o.state.isDestroyed=!0,L("onDestroy",[o]))}}function pn(e,n){n===void 0&&(n={});var t=ge.plugins.concat(n.plugins||[]);Ga();var a=Object.assign({},n,{plugins:t}),s=Ua(e),r=s.reduce(function(l,d){var c=d&&as(d,a);return c&&l.push(c),l},[]);return In(e)?r[0]:r}pn.defaultProps=ge;pn.setDefaultProps=es;pn.currentInput=we;Object.assign({},Bt,{effect:function(n){var t=n.state,a={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,a.popper),t.styles=a,t.elements.arrow&&Object.assign(t.elements.arrow.style,a.arrow)}});pn.setDefaultProps({render:Qt});const Ke=document.getElementById("fe-signage"),en=document.getElementById("no-signage"),nn=document.getElementById("ee-signage"),Be=document.getElementById("mp-signage"),ss=document.getElementById("print-map"),Wn=[Ke,en,nn,Be];let yn=!1,Qe=null,Vn=!1;function os(e){const n=localStorage.getItem(e.id);e.checked=n==="true",Ue()}function hn(e){localStorage.setItem(e.id,e.checked)}function rs(){return Wn.some(e=>e.checked)}function Ue(){if(!rs()){Qe==null||Qe.close(),Qe=null,yn=!1,ls();return}Vn||yn||(Qe=new kt({status:"success",title:"Modo señalética activo",text:"<strong>La selección de sectores ha sido deshabilitada, desactive toda la señalética visible para volver al modo normal.</strong>",effect:"slide",speed:300,customClass:"",customIcon:"",showIcon:!0,showCloseButton:!0,autoclose:!1,autotimeout:3e3,notificationsGap:null,notificationsPadding:null,type:"outline",position:"right bottom",customWrapper:""}),yn=!0,cs())}function cs(){document.querySelectorAll('[data-cell-id^="sector-"]').forEach(n=>{n.style.display="none"})}function ls(){document.querySelectorAll('[data-cell-id^="sector-"]').forEach(n=>{n.style.display="block"})}function gn(e,n){e.forEach(t=>{t.classList.toggle("is-visible",n)})}function ds(){const e=document.querySelectorAll('[data-cell-id^="er-"]'),n=document.querySelectorAll('[data-cell-id^="mp-"]'),t=document.querySelectorAll('[data-cell-id^="ee-"]'),a=document.querySelectorAll('[data-cell-id^="fe-"]'),s=document.querySelector('[data-cell-id="no-01"]'),r=document.querySelector('[data-cell-id="signage-title"]'),l=document.querySelector('[data-cell-id="signage-note"]'),d=document.querySelectorAll('[data-cell-id^="signage-text-"]'),c=document.querySelectorAll('[data-cell-id^="signage-icon-"]');r&&(r.style.display="none"),l&&(l.style.display="none"),d.forEach(f=>{f.style.display="none"}),c.forEach(f=>{f.style.display="none"}),Vn=!0,Wn.forEach(os),Be.onchange=()=>{hn(Be),gn(e,Be.checked),gn(n,Be.checked),Ue()},Ke.onchange=()=>{hn(Ke),gn(a,Ke.checked),Ue()},nn.onchange=()=>{hn(nn),gn(t,nn.checked),Ue()},en.onchange=()=>{hn(en),s&&s.classList.toggle("is-visible",en.checked),Ue()},Wn.forEach(f=>f.dispatchEvent(new Event("change"))),Vn=!1,yn=!1,Ue(),pn('[data-cell-id="fe-01"]',{content:`
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
  `,allowHTML:!0,placement:"right",animation:"fade",theme:"campus"}),ss.onclick=()=>{const f=document.createElement("div");f.innerHTML=`
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
    `;const m=new WinBox({class:["map-preview-window"],title:"Imprimir mapa",x:"center",y:"center",background:"#e25619",modal:!0,mount:f,index:1e3,width:"25%",height:"28%"});f.querySelector("#print-map2").addEventListener("click",()=>{m.close();const w=document.getElementById("map-container"),y=w==null?void 0:w.querySelector("svg"),A=document.getElementById("print-map-content");if(!y){console.error("The source map SVG was not found.");return}if(!A){console.error("The print map container was not found.");return}A.replaceChildren();const b=y.cloneNode(!0);b.querySelectorAll('[data-cell-id^="text-"]').forEach(I=>I.remove());const x=b.querySelector('[data-cell-id="explore-campus-text-box"]'),M=b.querySelector('[data-cell-id="explore-campus-icon"]');x&&(x.style.display="none"),M&&(M.style.display="none");const C=b.querySelector('[data-cell-id="signage-title"]'),O=b.querySelector('[data-cell-id="signage-note"]');C&&(C.style.display="block"),O&&(O.style.display="block");const o={fe:Ke,ee:nn,er:Be,mp:Be,no:en};b.querySelectorAll('[data-cell-id^="signage-icon-"], [data-cell-id^="signage-text-"]').forEach(I=>{I.style.display="block";const D=I.getAttribute("data-cell-id").replace(/^signage-(icon|text)-/,""),q=o[D];q&&I.classList.toggle("is-disabled",!q.checked)}),A.replaceChildren(b),window.print()})}}const ps={title:"Sector C1",description:"Caseta acceso principal",icon:"fa-solid fa-tower-observation fa-2x"},us={title:"Sector H",description:"Sector principal",icon:"fa-regular fa-building fa-2x"},fs={title:"Sector D",description:"Orientación y domo deportivo",icon:"fa-solid fa-landmark-dome fa-2x"},ms={title:"Sector M",description:"Aulas móviles",icon:"fa-solid fa-people-roof fa-2x"},vs={title:"Sector C2",description:"Caseta acceso estacionamiento",icon:"fa-solid fa-tower-observation fa-2x"},hs={c1:ps,h:us,d:fs,m:ms,c2:vs};function Tt(){document.getElementById("map-container");const e=document.querySelector("[data-cell-id='h-library']"),n=document.querySelector("[data-cell-id='h-computer-center']"),t=document.querySelector(".panel-container"),a=document.querySelector(".info-panel");e.addEventListener("click",()=>{const r=document.getElementById("h-library").content.cloneNode(!0);t.innerHTML="",t.appendChild(r),a.classList.add("open")}),n.addEventListener("click",()=>{const r=document.getElementById("h-computer-center").content.cloneNode(!0);t.innerHTML="",t.appendChild(r),a.classList.add("open")})}const gs=`<!-- Sector H information panel -->
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
`;function bs(){const e=document.querySelector("[data-cell-id='classroom-h3']"),n=document.querySelector(".panel-container"),t=document.querySelector(".info-panel");e.addEventListener("click",()=>{const a=gs;n.innerHTML="",n.innerHTML=a,t.classList.add("open")})}let Je=null;function ys(){const e=document.getElementById("sector-h-map"),n=document.querySelector(".info-panel"),t=document.querySelector(".simbology-bar"),a=document.querySelector(".bottom-nav-container");document.getElementById("home-map");const s=document.getElementById("main-bldg-down"),r=document.getElementById("main-bldg-up"),l=document.getElementById("map-container");e.addEventListener("click",()=>{n.classList.remove("open"),t.classList.add("is-not-visible"),a.classList.add("is-visible"),wn(ye.H1.id),Je=1,Tt()}),s.addEventListener("click",()=>{Je!==1&&(wn(ye.H1.id),Je=1,Tt())}),r.addEventListener("click",()=>{Je!==2&&(wn(ye.H2.id),Je=2,bs())}),l.addEventListener("click",c=>{c.target.closest('[data-cell-id="camera-h3"]')&&d()});function d(){const c=document.createElement("div");c.className="camera-viewer",c.innerHTML=`
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
  `;const f=new WinBox({class:["camera-window"],mount:c,title:"Video cámara - Aula H3",x:"center",y:"center",background:"#e25619",class:["camera-window","camera-window.max"],width:"1210",height:"760",border:4,header:45,index:300}),m=c.querySelector("#cameraVideo"),E=c.querySelector("#cameraLoader"),w=c.querySelector("#cameraProgress"),y=c.querySelector("#cameraDateTime");let A=0,b=!1,x=!1;const M=setInterval(()=>{A<90&&(A+=2,w.style.width=`${A}%`)},40);m.addEventListener("canplay",()=>{b=!0,C()}),setTimeout(()=>{x=!0,C()},1200);function C(){!b||!x||(clearInterval(M),w.style.width="100%",setTimeout(()=>{E.classList.add("is-hidden")},250))}function O(){const I=new Date;y.textContent=I.toLocaleString("es-MX",{dateStyle:"short",timeStyle:"medium"})}O();const o=setInterval(O,1e3);return f.onclose=()=>{clearInterval(o),clearInterval(M)},f}}const ws=`<!-- Sector H information panel -->
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
`,xs=`<!-- Sector H information panel -->
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
`,jn=`<section id="not-implemented" class="information-panel">

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
</section>`,Es=`<!-- Sector H information panel -->
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
            <!-- Explore sector -->Explorar
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
`,St={"sector-c1":{id:"sector-c1",title:"Sector C1",description:"En el Sector C1 se encuentra la caseta de acceso principal del plantel, en donde el personal de prefectura se encarga de brindar el acceso a las instalaciones, registrar las entradas y salidas de los alumnos, padres de familia y público en general, además de ayudar a mantener la seguridad en el plantel.",icon:"fa-tower-observation",buildings:[{id:"sector-c1-1",description:"Caseta C1"}],spaces:[{id:"sector-c1-s1",description:"Caseta de acceso principal","icon-solid":"fa-solid","icon-item":"fa-tower-observation"}]},"sector-h":{id:"sector-h",title:"Sector H",description:"El Sector H es el área principal del plantel, integra el Edificio H, el Edificio N y un espacio de cafetería al aire libre. Este sector abarca laboratorios, sanitarios, aulas, oficinas administrativas, talleres, biblioteca",icon:"fa-solid fa-building-circle-check fa-2x",buildings:[{id:"sector-h-1",description:"Área cafetería"},{id:"sector-h-2",description:"Edificio H"},{id:"sector-h-3",description:"Edificio N"}],spaces:[{id:"sector-h-s1",description:"Área cafetería","icon-solid":"fa-solid","icon-item":"fa-utensils"},{id:"sector-h-s2",description:"Laboratorio de cómputo","icon-solid":"fa-solid","icon-item":"fa-desktop"},{id:"sector-h-s3",description:"Laboratorio de ciencias","icon-solid":"fa-solid","icon-item":"fa-flask"},{id:"sector-h-s4",description:"Sanitarios","icon-solid":"fa-solid","icon-item":"fa-restroom"},{id:"sector-h-s5",description:"Finanzas","icon-solid":"fa-solid","icon-item":"fa-money-check-dollar"},{id:"sector-h-s6",description:"Subdirección","icon-item":"fa-solid","icon-solid":"fa-users"},{id:"sector-h-s7",description:"Bodega","icon-item":"fa-solid","icon-solid":"fa-box-archive"},{id:"sector-h-s8",description:"Intendencia","icon-solid":"fa-solid","icon-item":"fa-broom"},{id:"sector-h-s9",description:"Aula mantenimiento","icon-solid":"fa-solid","icon-item":"fa-screwdriver-wrench"},{id:"sector-h-s10",description:"Dirección","icon-solid":"fa-solid","icon-item":"fa-building-columns"},{id:"sector-h-s11",description:"Servicios escolares","icon-solid":"fa-solid","icon-item":"fa-address-card"},{id:"sector-h-s12",description:"Control académico","icon-solid":"fa-regular","icon-item":"fa-clipboard"},{id:"sector-h-s13",description:"Biblioteca","icon-solid":"fa-solid","icon-item":"fa-book-open"},{id:"sector-h-s14",description:"Prefectura","icon-solid":"fa-solid","icon-item":"fa-shield-halved"},{id:"sector-h-s15",description:"Aulas H1-H8","icon-solid":"fa-solid","icon-item":"fa-chalkboard"},{id:"sector-h-s16",description:"Sala de maestros","icon-solid":"fa-solid","icon-item":"fa-person-chalkboard"}]},"sector-d":{id:"sector-d",title:"Sector D",description:"En el Sector D se encuentran las oficinas de Orientación y el área de Enfermería, espacios destinados a brindar atención, orientación y apoyo a los estudiantes. También cuenta con un domo utilizado para la realización de eventos cívicos, actividades deportivas y diversas actividades escolares, que funciona como un espacio de convivencia y participación para la comunidad educativa.",icon:"",buildings:[{id:"sector-d-1",description:"Oficinas orientación"},{id:"sector-d-2",description:"Domo para eventos cívicos y deportivos"}],spaces:[{id:"sector-d-s1",description:"Ofinas de orientación y enfermería","icon-solid":"fa-solid","icon-item":"fa-people-arrows"},{id:"sector-d-s2",description:"Domo para eventos cívicos y deportivos","icon-solid":"fa-solid","icon-item":"fa-basketball"}]},"sector-m":{title:"Sector M",description:"El Sector M cuenta con aulas móviles destinadas al desarrollo de actividades académicas, un comedor para la comunidad estudiantil y personal del plantel, así como un edificio de mantenimiento donde se realizan actividades relacionadas con el cuidado y conservación de las instalaciones.",icon:"fa-people-roof",spaces:[{description:"Aula M1","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M2","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M3","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Mantenimiento","icon-solid":"fa-solid","icon-item":"fa-warehouse"},{description:"Aula M4","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M5","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M6","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M7","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M8","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M9","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Aula M10","icon-solid":"fa-solid","icon-item":"fa-house-circle-check"},{description:"Comedor","icon-solid":"fa-solid","icon-item":"fa-utensils"}]},"sector-c2":{title:"Sector C2",icon:"",description:"En el Sector C2 se encuentra la caseta de acceso al plantel desde el estacionamiento, utilizada principalmente para el ingreso del personal docente y administrativo, así como de proveedores y visitantes.",spaces:[{description:"Caseta de acceso estacionamiento","icon-solid":"fa-solid","icon-item":"fa-tower-observation"},{description:"Estacionamiento","icon-solid":"fa-solid","icon-item":"fa-car"}]}},tt=document.getElementById("map-area"),Jt=document.querySelector(".info-panel"),Ot=document.querySelector(".sector-toast"),zn=document.querySelector("#sector-toast"),Mt=document.querySelector(".panel-container");document.getElementById("not-implemented");document.getElementById("panel-h");const Kt={},ye={C:{id:"mainMap",urlMap:vi},H1:{id:"sector-h-ground",mainBuilding:{groundFloor:{urlMap:hi}}},H2:{id:"sector-h-upper",mainBuilding:{upperFloor:{urlMap:gi}}}};async function Fn(e,n){try{const t=await fetch(n);if(!t.ok)throw new Error(`Error loading map: ${e}`);Kt[e]=await t.text()}catch(t){console.error(t)}}function As(e){return Kt[e]??null}function wn(e){tt.innerHTML=As(e)}async function Is(){await Promise.all([Fn(ye.C.id,ye.C.urlMap),Fn(ye.H1.id,ye.H1.mainBuilding.groundFloor.urlMap),Fn(ye.H2.id,ye.H2.mainBuilding.upperFloor.urlMap)]),wn(ye.C.id);const e=tt.querySelector("svg");if(!e){console.error("Mapa del campus no se puede inicializar.");return}ds(),Ss(e)}Is();const Cs={"sector-h":{template:ws,title:"Sector H",icon:"fa-solid fa-building-circle-check fa-2x"},"sector-d":{template:jn,title:"Sector D",icon:"fa-solid fa-landmark-dome fa-2x"},"sector-m":{template:jn,title:"Sector M",icon:"fa-solid fa-people-roof fa-2x"},"sector-c1":{template:xs,title:"Sector C1",icon:"fa-solid fa-tower-observation fa-2x"},"sector-c2":{template:jn,title:"Sector C2",icon:"fa-solid fa-tower-observation fa-2x"}};function Ts(e,n,t,a,s){let r=St[s].spaces,l=St[s].description;e.innerHTML="",e.innerHTML=n;const d=document.getElementById("information-title"),c=document.querySelector(".information-mark i"),f=document.querySelector(".information-description");d.textContent=t,c.className=a,f.textContent=l;let m=document.querySelector(".services-grid");r.forEach(E=>{let w=document.createElement("div"),y=document.createElement("div"),A=document.createElement("i"),b=document.createElement("span");A.classList.add(E["icon-solid"],E["icon-item"]),b.textContent=E.description,w.classList.add("service-item"),y.classList.add("service-icon"),y.append(A),w.append(y,b),m.append(w)}),Jt.classList.add("open")}function Ss(e){e=tt.querySelector("svg"),console.log(e);const n=zn.querySelector(".sector-text h3"),t=zn.querySelector(".sector-text p"),a=zn.querySelector(".sector-icon i");e.addEventListener("pointerover",r=>{var m,E;const l=r.target.closest('[data-cell-id^="sector-"]');if(!l||((E=(m=r.relatedTarget)==null?void 0:m.closest)==null?void 0:E.call(m,'[data-cell-id^="sector-"]'))===l)return;const c=l.dataset.cellId.replace("sector-",""),f=hs[c];f&&(n.textContent=f.title,t.textContent=f.description,a.className=f.icon,Ot.classList.add("active"))}),e.addEventListener("pointerout",r=>{var c,f;const l=r.target.closest('[data-cell-id^="sector-"]');!l||((f=(c=r.relatedTarget)==null?void 0:c.closest)==null?void 0:f.call(c,'[data-cell-id^="sector-"]'))===l||Ot.classList.remove("active")});let s=null;e.addEventListener("click",r=>{const l=r.target.closest('[data-cell-id^="sector-"]');if(!l)return;if((s==null?void 0:s.dataset.cellId)===l.dataset.cellId){s.classList.remove("selected"),s=null,Mt.innerHTML="",Jt.classList.remove("open");return}s==null||s.classList.remove("selected"),l.classList.add("selected"),s=l;const d=Cs[l.dataset.cellId],c=l.dataset.cellId;console.log(c),d&&(Ts(Mt,Es,d.title,d.icon,c),d.title==="Sector H"&&ys())})}(function(){var e,n=document.createElement("style");n.innerHTML="@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}";var t=document.getElementsByTagName("head")[0];t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n);var a=document.createElement("div");a.innerHTML="<div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";function s(i,u,h,L){i&&i.addEventListener(u,h,L||!1)}function r(i,u){var h=window,L=E;h&&h.removeEventListener(i,u,L||!1)}function l(i,u){i.stopPropagation(),u&&i.preventDefault()}function d(i,u,h){h=""+h,i["_s_"+u]!==h&&(i.style.setProperty(u,h),i["_s_"+u]=h)}var c=[],f=[],m={capture:!0,passive:!1},E={capture:!0,passive:!0},w,y=0,A=10,b,x,M,C,O,o;function I(i,u){if(!(this instanceof I))return new I(i);if(w||D(),i){if(u){var h=i;i=u}if(typeof i=="string")h=i;else{var L=i.id,S=i.index,_=i.root,W=i.template;h=h||i.title;var Y=i.icon,te=i.mount,K=i.html,R=i.url,U=i.width,$=i.height,V=i.minwidth,ee=i.minheight,Z=i.maxwidth,X=i.maxheight,Me=i.autosize,ie=i.overflow,de=i.min,pe=i.max,re=i.hidden,Ae=i.modal,Ie=i.x||(Ae?"center":0),Ce=i.y||(Ae?"center":0),J=i.top,ne=i.left,ve=i.bottom,ce=i.right,Le=i.background,he=i.border,be=i.header,Te=i.class,ke=i.oncreate,Cn=i.onclose,Tn=i.onfocus,Sn=i.onblur,On=i.onmove,Mn=i.onresize,p=i.onfullscreen,g=i.onmaximize,T=i.onminimize,P=i.onrestore,N=i.onhide,Q=i.onshow,ae=i.onload}}this.g=(W||a).cloneNode(!0),this.g.id=this.id=L||"winbox-"+ ++y,this.g.className="winbox"+(Te?" "+(typeof Te=="string"?Te:Te.join(" ")):"")+(Ae?" modal":""),this.g.winbox=this,this.window=this.g,this.body=this.g.getElementsByClassName("wb-body")[0],this.h=be||35,f.push(this),Le&&this.setBackground(Le),he?d(this.body,"margin",he+(isNaN(he)?"":"px")):he=0,be&&(u=this.g.getElementsByClassName("wb-header")[0],d(u,"height",be+"px"),d(u,"line-height",be+"px"),d(this.body,"top",be+"px")),h&&this.setTitle(h),Y&&this.setIcon(Y),te?this.mount(te):K?this.body.innerHTML=K:R&&this.setUrl(R,ae),J=J?v(J,O):0,ve=ve?v(ve,O):0,ne=ne?v(ne,C):0,ce=ce?v(ce,C):0,h=C-ne-ce,Y=O-J-ve,Z=Z?v(Z,h):h,X=X?v(X,Y):Y,V=V?v(V,Z):150,ee=ee?v(ee,X):this.h,Me?((_||w).appendChild(this.body),U=Math.max(Math.min(this.body.clientWidth+2*he+1,Z),V),$=Math.max(Math.min(this.body.clientHeight+this.h+he+1,X),ee),this.g.appendChild(this.body)):(U=U?v(U,Z):Math.max(Z/2,V)|0,$=$?v($,X):Math.max(X/2,ee)|0),Ie=Ie?v(Ie,h,U):ne,Ce=Ce?v(Ce,Y,$):J,this.x=Ie,this.y=Ce,this.width=U,this.height=$,this.s=V,this.o=ee,this.m=Z,this.l=X,this.top=J,this.right=ce,this.bottom=ve,this.left=ne,this.index=S,this.j=ie,this.focused=this.hidden=this.full=this.max=this.min=!1,this.onclose=Cn,this.onfocus=Tn,this.onblur=Sn,this.onmove=On,this.onresize=Mn,this.onfullscreen=p,this.onmaximize=g,this.onminimize=T,this.onrestore=P,this.onhide=N,this.onshow=Q,re?this.hide():this.focus(),(S||S===0)&&(this.index=S,d(this.g,"z-index",S),S>A&&(A=S)),pe?this.maximize():de?this.minimize():this.resize().move(),q(this),(_||w).appendChild(this.g),ke&&ke.call(this,i)}I.new=function(i){return new I(i)},I.stack=function(){return f};function v(i,u,h){return typeof i=="string"&&(i==="center"?i=(u-h)/2+.5|0:i==="right"||i==="bottom"?i=u-h:(h=parseFloat(i),i=(""+h!==i&&i.substring((""+h).length))==="%"?u/100*h+.5|0:h)),i}function D(){w=document.body,w[x="requestFullscreen"]||w[x="msRequestFullscreen"]||w[x="webkitRequestFullscreen"]||w[x="mozRequestFullscreen"]||(x=""),M=x&&x.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),s(window,"resize",function(){F(),z()}),s(w,"mousedown",function(){o=!1},!0),s(w,"mousedown",function(){if(!o){var i=f.length;if(i)for(--i;0<=i;i--){var u=f[i];if(u.focused){u.blur();break}}}}),F()}function q(i){k(i,"drag"),k(i,"n"),k(i,"s"),k(i,"w"),k(i,"e"),k(i,"nw"),k(i,"ne"),k(i,"se"),k(i,"sw"),s(i.g.getElementsByClassName("wb-min")[0],"click",function(u){l(u),i.min?i.restore().focus():i.minimize()}),s(i.g.getElementsByClassName("wb-max")[0],"click",function(u){l(u),i.max?i.restore().focus():i.maximize().focus()}),x?s(i.g.getElementsByClassName("wb-full")[0],"click",function(u){l(u),i.fullscreen().focus()}):i.addClass("no-full"),s(i.g.getElementsByClassName("wb-close")[0],"click",function(u){l(u),i.close()||(i=null)}),s(i.g,"mousedown",function(){o=!0},!0),s(i.body,"mousedown",function(){i.focus()},!0)}function j(i){c.splice(c.indexOf(i),1),z(),i.removeClass("min"),i.min=!1,i.g.title=""}function z(){for(var i=c.length,u={},h={},L=0,S;L<i;L++)S=c[L],S=S.left+":"+S.top,h[S]?h[S]++:(u[S]=0,h[S]=1);L=0;for(var _,W;L<i;L++)S=c[L],_=S.left+":"+S.top,W=Math.min((C-S.left-S.right)/h[_],250),S.resize(W+1|0,S.h,!0).move(S.left+u[_]*W|0,O-S.bottom-S.h,!0),u[_]++}function k(i,u){function h(R){if(l(R,!0),i.focus(),u==="drag"){if(i.min){i.restore();return}if(!i.g.classList.contains("no-max")){var U=Date.now(),$=U-K;if(K=U,300>$){i.max?i.restore():i.maximize();return}}}i.min||(w.classList.add("wb-lock"),(W=R.touches)&&(W=W[0])?(R=W,s(window,"touchmove",L,E),s(window,"touchend",S,E)):(s(window,"mousemove",L,E),s(window,"mouseup",S,E)),Y=R.pageX,te=R.pageY)}function L(R){l(R),W&&(R=R.touches[0]);var U=R.pageX;R=R.pageY;var $=U-Y,V=R-te,ee=i.width,Z=i.height,X=i.x,Me=i.y,ie;if(u==="drag"){if(i.g.classList.contains("no-move"))return;i.x+=$,i.y+=V;var de=ie=1}else{if(u==="e"||u==="se"||u==="ne"){i.width+=$;var pe=1}else(u==="w"||u==="sw"||u==="nw")&&(i.x+=$,i.width-=$,de=pe=1);if(u==="s"||u==="se"||u==="sw"){i.height+=V;var re=1}else(u==="n"||u==="ne"||u==="nw")&&(i.y+=V,i.height-=V,ie=re=1)}pe&&(i.width=Math.max(Math.min(i.width,i.m,C-i.x-i.right),i.s),pe=i.width!==ee),re&&(i.height=Math.max(Math.min(i.height,i.l,O-i.y-i.bottom),i.o),re=i.height!==Z),(pe||re)&&i.resize(),de&&(i.max&&(i.x=(U<C/3?i.left:U>C/3*2?C-i.width-i.right:C/2-i.width/2)+$),i.x=Math.max(Math.min(i.x,i.j?C-30:C-i.width-i.right),i.j?30-i.width:i.left),de=i.x!==X),ie&&(i.max&&(i.y=i.top+V),i.y=Math.max(Math.min(i.y,i.j?O-i.h:O-i.height-i.bottom),i.top),ie=i.y!==Me),(de||ie)&&(i.max&&i.restore(),i.move()),(pe||de)&&(Y=U),(re||ie)&&(te=R)}function S(R){l(R),w.classList.remove("wb-lock"),W?(r("touchmove",L),r("touchend",S)):(r("mousemove",L),r("mouseup",S))}var _=i.g.getElementsByClassName("wb-"+u)[0];if(_){var W,Y,te,K=0;s(_,"mousedown",h,m),s(_,"touchstart",h,m)}}function F(){var i=document.documentElement;C=i.clientWidth,O=i.clientHeight}e=I.prototype,e.mount=function(i){return this.unmount(),i.i||(i.i=i.parentNode),this.body.textContent="",this.body.appendChild(i),this},e.unmount=function(i){var u=this.body.firstChild;if(u){var h=i||u.i;h&&h.appendChild(u),u.i=i}return this},e.setTitle=function(i){var u=this.g.getElementsByClassName("wb-title")[0];i=this.title=i;var h=u.firstChild;return h?h.nodeValue=i:u.textContent=i,this},e.setIcon=function(i){var u=this.g.getElementsByClassName("wb-icon")[0];return d(u,"background-image","url("+i+")"),d(u,"display","inline-block"),this},e.setBackground=function(i){return d(this.g,"background",i),this},e.setUrl=function(i,u){var h=this.body.firstChild;return h&&h.tagName.toLowerCase()==="iframe"?h.src=i:(this.body.innerHTML='<iframe src="'+i+'"></iframe>',u&&(this.body.firstChild.onload=u)),this},e.focus=function(i){if(i===!1)return this.blur();if(!this.focused){if(i=f.length,1<i)for(var u=1;u<=i;u++){var h=f[i-u];if(h.focused){h.blur(),f.push(f.splice(f.indexOf(this),1)[0]);break}}d(this.g,"z-index",++A),this.index=A,this.addClass("focus"),this.focused=!0,this.onfocus&&this.onfocus()}return this},e.blur=function(i){return i===!1?this.focus():(this.focused&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur()),this)},e.hide=function(i){if(i===!1)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")},e.show=function(i){if(i===!1)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")},e.minimize=function(i){return i===!1?this.restore():(b&&G(),this.max&&(this.removeClass("max"),this.max=!1),this.min||(c.push(this),z(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.focused&&(this.blur(),B()),this.onminimize&&this.onminimize()),this)};function B(){var i=f.length;if(i)for(--i;0<=i;i--){var u=f[i];if(!u.min){u.focus();break}}}e.restore=function(){return b&&G(),this.min&&(j(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this},e.maximize=function(i){return i===!1?this.restore():(b&&G(),this.min&&j(this),this.max||(this.addClass("max").resize(C-this.left-this.right,O-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)},e.fullscreen=function(i){if(this.min&&(j(this),this.resize().move()),!b||!G())this.body[x](),b=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(i===!1)return this.restore();return this};function G(){if(b.full=!1,document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[M](),!0}e.close=function(i){if(this.onclose&&this.onclose(i))return!0;this.min&&j(this),f.splice(f.indexOf(this),1),this.unmount(),this.g.remove(),this.g.textContent="",this.g=this.body=this.g.winbox=null,this.focused&&B()},e.move=function(i,u,h){return i||i===0?h||(this.x=i?i=v(i,C-this.left-this.right,this.width):0,this.y=u?u=v(u,O-this.top-this.bottom,this.height):0):(i=this.x,u=this.y),d(this.g,"left",i+"px"),d(this.g,"top",u+"px"),this.onmove&&this.onmove(i,u),this},e.resize=function(i,u,h){return i||i===0?h||(this.width=i?i=v(i,this.m):0,this.height=u?u=v(u,this.l):0,i=Math.max(i,this.s),u=Math.max(u,this.o)):(i=this.width,u=this.height),d(this.g,"width",i+"px"),d(this.g,"height",u+"px"),this.onresize&&this.onresize(i,u),this},e.addControl=function(i){var u=i.class,h=i.image,L=i.click;i=i.index;var S=document.createElement("span"),_=this.g.getElementsByClassName("wb-control")[0],W=this;return u&&(S.className=u),h&&d(S,"background-image","url("+h+")"),L&&(S.onclick=function(Y){L.call(this,Y,W)}),_.insertBefore(S,_.childNodes[i||0]),this},e.removeControl=function(i){return(i=this.g.getElementsByClassName(i)[0])&&i.remove(),this},e.addClass=function(i){return this.g.classList.add(i),this},e.removeClass=function(i){return this.g.classList.remove(i),this},e.toggleClass=function(i){return this.g.classList.contains(i)?this.removeClass(i):this.addClass(i)},window.WinBox=I}).call(void 0);
