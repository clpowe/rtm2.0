import{_ as h,o as t,a,d as c,F as r,g as l,p,i as f,s as m,u as x,b as v,w as _,t as u,x as k}from"./bootstrap-002641b7.mjs";const w={emits:[],props:{navigationLinks:{type:Array,required:!0}},computed:{iconNavigation(){return this.navigationLinks.filter(e=>e.icon)}},methods:{close(){this.$emit("close")}}},y=e=>(p("data-v-cd04249c"),e=e(),f(),e),C={class:"drawer"},N=y(()=>c("button",{class:"",href:"/"},"Watch Now",-1)),b={class:"flex justify-between space-x-3"},S={class:"w-8 h-8"},I=["xlink:href"],L={class:"__text"},V={class:""},B=m('<div data-v-cd04249c><h2 data-v-cd04249c>Connect</h2><div class="flex space-x-2" data-v-cd04249c><svg class="w-6 h-6" data-v-cd04249c><use xlink:href="/images/icons/sprite.svg#icon-facebook" data-v-cd04249c></use></svg><svg class="w-6 h-6" data-v-cd04249c><use xlink:href="/images/icons/sprite.svg#icon-youTube" data-v-cd04249c></use></svg><svg class="w-6 h-6" data-v-cd04249c><use xlink:href="/images/icons/sprite.svg#icon-instagram" data-v-cd04249c></use></svg></div></div>',1);function D(e,n,g,$,F,i){const d=x("nuxt-link");return t(),a("div",C,[c("button",{class:"",onClick:n[0]||(n[0]=s=>e.$emit("close",s))},"Close"),N,c("div",b,[(t(!0),a(r,null,l(i.iconNavigation,(s,o)=>(t(),a("div",{key:o,class:""},[v(d,{to:s.destination,class:"text-center",onClick:i.close},{default:_(()=>[(t(),a("svg",S,[c("use",{"xlink:href":`/images/icons/sprite.svg#icon-${s.icon}`},null,8,I)])),c("div",L,u(s.name),1)]),_:2},1032,["to","onClick"])]))),128))]),c("div",V,[(t(!0),a(r,null,l(g.navigationLinks,(s,o)=>(t(),a("div",{key:o},[v(d,{to:s.destination,onClick:i.close},{default:_(()=>[k(u(s.name),1)]),_:2},1032,["to","onClick"])]))),128))]),B])}var j=h(w,[["render",D],["__scopeId","data-v-cd04249c"]]);export{j as default};
