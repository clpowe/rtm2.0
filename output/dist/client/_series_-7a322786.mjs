var P=Object.defineProperty;var D=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var C=(a,t,e)=>t in a?P(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,S=(a,t)=>{for(var e in t||(t={}))k.call(t,e)&&C(a,e,t[e]);if(D)for(var e of D(t))B.call(t,e)&&C(a,e,t[e]);return a};import{O as A,P as E,Q as I,r as i,R,_ as j,U as w,V as x,W as z,X as F,o as g,a as v,d as h,h as M,b as N,w as J,F as O,Y as L,g as V}from"./bootstrap-002641b7.mjs";import W from"./Watch-528e7f6c.mjs";import Y from"./Sermon-60724bfa.mjs";import{b as G}from"./index-e9ed121b.mjs";import H from"./SermonSlider-3b2e11ed.mjs";import K from"./mediaScroller-a9b8b485.mjs";import"./a11y-9fca501b.mjs";import"./swiper-slide-1c2d1785.mjs";const T=()=>null;function U(a,t,e={}){var m,p,y,_;if(typeof a!="string")throw new TypeError("asyncData key must be a string");if(typeof t!="function")throw new TypeError("asyncData handler must be a function");e=S({server:!0,default:T},e),e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(p=(m=e.lazy)!=null?m:e.defer)!=null?p:!1;const r=A(),o=R();if(o&&!o._nuxtOnBeforeMountCbs){const l=o._nuxtOnBeforeMountCbs=[];o&&(E(()=>{l.forEach(n=>{n()}),l.splice(0,l.length)}),I(()=>l.splice(0,l.length)))}const s={data:i((y=r.payload.data[a])!=null?y:e.default()),pending:i(!0),error:i((_=r.payload._errors[a])!=null?_:null)};s.refresh=l=>(r._asyncDataPromises[a]&&!l||(s.pending.value=!0,r._asyncDataPromises[a]=Promise.resolve(t(r)).then(n=>{e.transform&&(n=e.transform(n)),e.pick&&(n=Q(n,e.pick)),s.data.value=n,s.error.value=null}).catch(n=>{s.error.value=n,s.data.value=e.default()}).finally(()=>{s.pending.value=!1,r.payload.data[a]=s.data.value,s.error.value&&(r.payload._errors[a]=!0),delete r._asyncDataPromises[a]})),r._asyncDataPromises[a]),e.server!==!1&&r.payload.serverRendered&&r.isHydrating?s.pending.value=!1:o&&(r.isHydrating||e.lazy)?o._nuxtOnBeforeMountCbs.push(s.refresh):s.refresh();const f=Promise.resolve(r._asyncDataPromises[a]).then(()=>s);return Object.assign(f,s),f}function Q(a,t){const e={};for(const r of t)e[r]=a[r];return e}const X={async setup(a,{expose:t}){t();let e,r;const o=w(),s=i(),u=i(),f=x("sermons"),m=i(null),p=i(null),y=f.filter(c=>c.id===o.params.series),_=z(),l=_.GOOGLE_KEY,n=`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${o.params.series}&key=${l}`;try{const{data:c}=([e,r]=F(()=>U("videos",()=>$fetch(n))),e=await e,r(),e);s.value=c.value,u.value=c.value.items.map(d=>{const te=["January","February","March","April","May","June","July","August","September","October","November","December"];return{id:d.id,resourceId:d.snippet.resourceId.videoId,image:d.snippet.thumbnails.high.url,title:d.snippet.title.split("|")[0],description:d.snippet.description,pastor:d.snippet.title.split("|")[2],date:new Date(d.contentDetails.videoPublishedAt).toLocaleDateString("en-gb",{year:"numeric",month:"long",day:"numeric"})}})}catch(c){console.log(c)}const b={route:o,playlist:s,messages:u,series:f,currentMessage:m,currentMessageData:p,currentSeries:y,config:_,KEY:l,url:n,handleClick:c=>{m.value=c.resourceId,p.value=c},Watch:W,Sermon:Y,ref:i,inject:x,provide:L,useRoute:w,useFetch:G,SeriesSlider:H,mediaScroller:K};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}},q={class:"bg-dark-900 h-full text-white"},Z={class:"container"},$=["onClick"],ee=["src"];function re(a,t,e,r,o,s){return g(),v(O,null,[h("button",{onClick:t[0]||(t[0]=u=>r.currentMessage=null)},"Back Button"),h("div",null,[r.currentMessage?(g(),M(r.Watch,{key:0,message:r.currentMessage,messageData:r.currentMessageData},null,8,["message","messageData"])):(g(),M(r.Sermon,{key:1,series:r.currentSeries[0]},null,8,["series"])),h("div",q,[h("div",Z,[N(r.mediaScroller,null,{default:J(()=>[(g(!0),v(O,null,V(r.messages,u=>(g(),v("div",{key:"message.id",onClick:f=>r.handleClick(u)},[h("img",{src:u.image},null,8,ee)],8,$))),128))]),_:1})])])])],64)}var me=j(X,[["render",re]]);export{me as default};
