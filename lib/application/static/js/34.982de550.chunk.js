/*! For license information please see 34.982de550.chunk.js.LICENSE.txt */
(this["webpackJsonp@stlite/application"]=this["webpackJsonp@stlite/application"]||[]).push([[34],{1783:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));var a=r(0),n=r(57),i=r(20),c=r(93),s=r(1);function o(t){var e=t.element,r=t.width,o=Object(a.useRef)(null),u=Object(a.useContext)(n.a).getBaseUriParts,l=e.type,d=e.url;Object(a.useEffect)((function(){var t=o.current,r=function(){t&&(t.currentTime=e.startTime)};return t&&t.addEventListener("loadedmetadata",r),function(){t&&t.removeEventListener("loadedmetadata",r)}}),[e]);if(l===i.u.Type.YOUTUBE_IFRAME){var f=.75*r;return Object(s.jsx)("iframe",{title:d,src:function(t){var r=e.startTime;return r?"".concat(t,"?start=").concat(r):t}(d),width:r,height:f,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0})}return Object(s.jsx)("video",{ref:o,controls:!0,src:Object(c.b)(d,u()),className:"stVideo",style:{width:r}})}}}]);
//# sourceMappingURL=34.982de550.chunk.js.map