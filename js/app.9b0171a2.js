(function(){"use strict";var e={7145:function(e,t,n){var a=n(9242),r=n(3396);const i={id:"app"};function s(e,t,n,a,s,u){const o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(o)])}var u={name:"App"},o=n(89);const l=(0,o.Z)(u,[["render",s]]);var c=l,m=n(2483),d=n(7139);const p={class:"home"},h={class:"header"},b=(0,r._)("div",{class:"promotion"},[(0,r._)("div",{class:"TextR"},[(0,r._)("p",null," Remise -5% et livraison gratuite sur les commandes d'aumoins 40£")])],-1),v={class:"logo"},f=["src"],_={class:"wrapper--input"},g={key:0,class:"search-results"},w={class:"search"},y={class:"wrapper--img"},N=["src"],R=(0,r.uE)('<li><a href="#">COMMANDEZ MAINTENANT</a></li><li><a href="#">MENU GENERAL</a></li><li><a href="#">CATEGORIES SPECIALES</a><ul><li><a href="#">SPECIALITE</a></li><li><a href="#">HEALTHY</a></li><li><a href="#">GOURMAND</a></li><li><a href="#">MENU ENFANT</a></li><li><a href="#">EN PROMOTION</a></li></ul></li>',3),Z=(0,r._)("li",null,[(0,r._)("a",{href:"#"},"RESERVATION")],-1),M=(0,r._)("a",{href:"#"},"A PROPOS",-1),j=(0,r._)("div",{class:"slideshow"},null,-1);function T(e,t,n,i,s,u){const o=(0,r.up)("RouterLink"),l=(0,r.up)("router-link"),c=(0,r.up)("RestaurantRow");return(0,r.wg)(),(0,r.iD)("div",p,[(0,r._)("div",h,[b,(0,r._)("div",v,[(0,r._)("img",{class:"eatandgo",src:i.imageSrc,alt:"",srcset:""},null,8,f)]),(0,r._)("div",_,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.user_search_restaurant=e),type:"text",placeholder:"De quoi avez vous besoin ?"},null,512),[[a.nr,i.user_search_restaurant]]),i.user_search_restaurant.length>0?((0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("div",w,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.search_restaurant,((e,t)=>((0,r.wg)(),(0,r.j4)(o,{class:"container--restaurant--search",key:t,to:{name:"Restaurant",params:{name:e.name}}},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r._)("h2",null,(0,d.zw)(e.name),1),(0,r._)("div",y,[(0,r._)("img",{src:e.image,alt:"",srcset:"",class:"image"},null,8,N)])])])),_:2},1032,["to"])))),128))])])):(0,r.kq)("",!0)])]),(0,r._)("nav",null,[(0,r._)("ul",null,[R,(0,r.Wm)(l,{to:"/Reservation"},{default:(0,r.w5)((()=>[Z])),_:1}),(0,r._)("li",null,[M,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Wm)(o,{to:"/NosRestaurants"},{default:(0,r.w5)((()=>[(0,r.Uk)(" NOS RESTAURANTS ")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(o,{to:"/ContactezNous"},{default:(0,r.w5)((()=>[(0,r.Uk)(" CONTACTEZ - NOUS")])),_:1})])])])])]),j,((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(1,(({data:e,index:t})=>(0,r.Wm)(c,{key:t,three_restaurants:e},null,8,["three_restaurants"]))),64))])}n(7658);const q=[{name:"Subway",image:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==",note:"4.5",drive_time:"20 - 30mn"},{name:"McDonald's",image:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iODQ1NDA4Zi1lOGFmLTRkMDUtYWI4YS0yNWMwYzVjMGI4YWUuanBlZw==",note:"3.9",drive_time:"15 - 25mn"},{name:"O'Tacos",image:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mOGQ5MjU5ZS00YjIzLTRkNWYtOWQ1YS0wNjBlNjE2NDI4Y2QuanBlZw==",note:"4.4",drive_time:"15 - 25mn"},{name:"Pizza Hut",image:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zYWY1Y2IzMi0yZjYxLTQ5OWQtYjZjOC1iZWIzMDM0MmM4M2IuanBlZw==",note:"4.1",drive_time:"20 - 30mn"},{name:"Momiji",image:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80YWExZDYxOC0wZTQwLTRiZjItYjRjNS1hZTAyZDQ2Y2Y1Y2UuanBlZw==",note:"4.3",drive_time:"20 - 30mn"},{name:"Food Time",image:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9jNTMxMTVhOC0wZjExLTQ5YmUtYjIyNi0yYTc5YjgzMTA4MmI=",note:"4.2",drive_time:"25 - 35mn"},{name:"L'escale",image:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81OTI5MzU4Ni01NDk4LTQ5YTYtOGMzZS1lMzYzNTBkYmMzMTMuanBlZw==",note:"4.5",drive_time:"20 - 30mn"},{name:"M&A",image:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvMTU0NDA4NzMyMjk3Ni13NTUwLTdiLmpwZw==",note:"4.3",drive_time:"20 - 30mn"},{name:"Burger's Friends",image:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81Mzk3YWEzOC0yYjRhLTRmOTItYmU4Ny1kZDE5YWEzNGU4MTQuanBlZw==",note:"3.8",drive_time:"30 - 40mn"}];var z=q,k=n(4870);const H={class:"Restaurant--row"},L=(0,r._)("br",null,null,-1),O=(0,r._)("h2",{class:"title"}," NOS RESTAURANTS ",-1),E={class:"wrapper--card"};function Y(e,t,n,a,i,s){const u=(0,r.up)("Restaurant-card"),o=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",H,[L,O,(0,r._)("div",E,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.three_restaurants,((e,t)=>((0,r.wg)(),(0,r.j4)(o,{key:t,to:{name:"Restaurant",params:{name:e.name}}},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{info_restaurant:e},null,8,["info_restaurant"])])),_:2},1032,["to"])))),128))])])}const A=(0,r._)("div",{class:"restaurant--image"},null,-1),x={class:"restaurant--information"},D={class:"top"},C={class:"name"},S={class:"note"},U={class:"time"};function G(e,t,n,a,i,s){return(0,r.wg)(),(0,r.iD)("div",{style:(0,d.j5)(a.changeBackground),class:"restaurant--card"},[A,(0,r._)("div",x,[(0,r._)("div",D,[(0,r._)("p",C,(0,d.zw)(n.info_restaurant.name),1),(0,r._)("p",S,[(0,r._)("span",null,(0,d.zw)(n.info_restaurant.note),1)])]),(0,r._)("p",U,(0,d.zw)(n.info_restaurant.drive_time),1)])],4)}var I={name:"RestaurantCard",props:{info_restaurant:{type:Object,required:!0}},setup(e){const t=(0,r.Fl)((()=>({backgroundImage:`url(${e.info_restaurant.image})`})));return console.log(t),{changeBackground:t}}};const W=(0,o.Z)(I,[["render",G]]);var B=W,Q={name:"RestaurantRow",components:{RestaurantCard:B},setup(){class e{constructor(e,t,n,a){this.name=e,this.note=t,this.image=n,this.drive_time=a}}let t=(0,k.iH)([]),n=(0,k.iH)([]);const a=()=>{for(const a of z){const r=new e(a.name,a.note,a.image,a.drive_time);3==n.value.length?(n.value.push(r),t.value.push(n)):n.value.push(r)}};return(0,r.bv)(a),{three_restaurants:n,data_restaurant:t}}};const P=(0,o.Z)(Q,[["render",Y]]);var J=P,V={name:"HomeAccueil",components:{RestaurantRow:J},setup(){class e{constructor(e,t,n,a){this.name=e,this.note=t,this.image=n,this.drive_time=a}}let t=(0,k.iH)([]),a=[];const i=()=>{let n=[];for(const r of z){const i=new e(r.name,r.note,r.image,r.drive_time);a.push(i),n.push(i),2==n.length?(n.push(i),t.value.push(n),n=[]):n.push(i)}};let s=(0,k.iH)(""),u=(0,k.iH)([]);return(0,r.YP)(s,(e=>{let t=RegExp(e.toLowerCase()),n=a.filter((e=>t.test(e.name.toLowerCase())));u.value=0==e?[]:n})),(0,r.bv)(i),{imageSrc:n(9671),Banniere:n(8259),user_search_restaurant:s,search_restaurant:u}}};const X=(0,o.Z)(V,[["render",T]]);var F=X;const K=(0,r._)("div",{class:"returnHome"},"Retour a la home",-1),$=["src"];function ee(e,t,n,a,i,s){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u,{to:"/"},{default:(0,r.w5)((()=>[K])),_:1}),(0,r._)("div",null,[(0,r._)("img",{src:a.restaurant.image,alt:""},null,8,$)]),(0,r._)("p",null,(0,d.zw)(a.restaurant.name),1),(0,r._)("p",null," NOTE DU RESTAURANT: "+(0,d.zw)(a.restaurant.note),1),(0,r._)("p",null," TEMPS DE LIVRAISON: "+(0,d.zw)(a.restaurant.drive_time),1)],64)}var te={name:"Restaurant_tm",setup(){const e=(0,m.yj)(),t=z.find((t=>t.name===e.params.name));return{restaurant:t}}};const ne=(0,o.Z)(te,[["render",ee]]);var ae=ne;const re={class:"body"},ie=(0,r.uE)('<head><title>Réservation de restaurant</title></head><body><h1>Réservation de restaurant</h1><form><label for="nom">Nom</label><input placeholder="Ex. Kouadio" type="text" id="nom" name="nom" required><br><br><label for="nom">Prenom</label><input placeholder="Ex. Ismail" type="text" id="prenom" name="prenom" required><br><br><label for="email">E-mail </label><input placeholder="Ex. abc@gmail.com" type="email" id="email" name="email" required><br><br><label for="telephone">Téléphone </label><input type="tel" id="telephone" name="telephone" required><br><br><label for="date">Date </label><input type="date" id="date" name="date" required><br><br><label for="heure">Heure </label><input type="time" id="heure" name="heure" required><br><br><label for="personnes">Nombre de personnes </label><input type="number" id="personnes" name="personnes" min="1" max="10" required><br><br><label for="message">Commentaire </label><br><textarea id="message" name="message" rows="4" cols="50"></textarea><br><br><input type="submit" value="Envoyer"><input type="reset" value="Effacer"></form></body>',2),se=[ie];function ue(e,t,n,a,i,s){return(0,r.wg)(),(0,r.iD)("div",re,se)}var oe={name:"Reservation_tm",setup(){const e=(0,m.yj)(),t=z.find((t=>t.name===e.params.name));return{restaurant:t}}};const le=(0,o.Z)(oe,[["render",ue]]);var ce=le;const me={lang:"fr"},de=(0,r.uE)('<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>À propos - Restaurant coloré et dynamique</title><link rel="stylesheet" href="style.css"></head><body><header><h1>À propos</h1></header><main><section><h2>Notre histoire</h2><p>Notre restaurant a été fondé avec une seule idée en tête : offrir une expérience culinaire inoubliable à nos clients. Nous sommes fiers de proposer une cuisine inventive, colorée et remplie de saveurs qui saura ravir vos papilles.</p><p>Nous mettons un point d&#39;honneur à travailler avec des ingrédients de qualité, frais et locaux autant que possible. Nous pensons que cela se reflète dans la qualité de nos plats et dans la satisfaction de nos clients.</p></section><section><h2>Notre ambiance</h2><p>Notre atmosphère est aussi importante que la nourriture que nous servons. Nous avons créé un espace lumineux, joyeux et dynamique qui invite nos clients à se détendre et à profiter de leur repas. Nous croyons que la présentation des plats est tout aussi importante que leur goût, et nous travaillons donc à créer des assiettes magnifiques qui sont un véritable plaisir pour les yeux.</p></section><section><h2>Notre équipe</h2><p>Nous sommes passionnés par notre métier et nous nous efforçons de créer une expérience unique à chaque visite. Notre équipe est composée de professionnels expérimentés qui sont heureux de répondre à toutes vos questions et de vous conseiller sur notre menu.</p></section></main><footer><p>Nous sommes impatients de vous accueillir chez nous et de vous faire découvrir notre cuisine inventive, colorée et remplie de saveurs dans un cadre dynamique et attrayant.</p></footer></body>',2),pe=[de];function he(e,t,n,a,i,s){return(0,r.wg)(),(0,r.iD)("html",me,pe)}var be={};const ve=(0,o.Z)(be,[["render",he]]);var fe=ve;const _e={lang:"fr"},ge=(0,r._)("head",null,[(0,r._)("meta",{charset:"UTF-8"}),(0,r._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r._)("title",null,"Nos Restaurants"),(0,r._)("link",{rel:"stylesheet",href:"style.css"})],-1),we=(0,r._)("header",null,[(0,r._)("div",{class:"wrapper"},[(0,r._)("h1",null,"Nos Restaurants"),(0,r._)("nav",null,[(0,r._)("a",{href:"index.html"},"Accueil"),(0,r._)("a",{href:"contact.html"},"Contactez-nous")])])],-1),ye=(0,r._)("h2",null,"Restaurant 1",-1),Ne={class:"restaurant-info"},Re=["src"],Ze=(0,r._)("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut bibendum ipsum. Sed ut sollicitudin velit. Nulla rutrum justo eu velit malesuada, ac aliquam orci sollicitudin. Vivamus bibendum lacinia elit, sit amet rhoncus libero. Suspendisse bibendum placerat odio, at efficitur odio posuere ac. ",-1),Me=(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("strong",null,"Adresse :"),(0,r.Uk)(" 123 Rue des Restaurants")]),(0,r._)("li",null,[(0,r._)("strong",null,"Téléphone :"),(0,r.Uk)(" 01 23 45 67 89")]),(0,r._)("li",null,[(0,r._)("strong",null,"Horaires :"),(0,r.Uk)(" Ouvert du lundi au samedi de 11h à 22h")])],-1),je=(0,r._)("h2",null,"Restaurant 2",-1),Te={class:"restaurant-info"},qe=["src"],ze=(0,r._)("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut bibendum ipsum. Sed ut sollicitudin velit. Nulla rutrum justo eu velit malesuada, ac aliquam orci sollicitudin. Vivamus bibendum lacinia elit, sit amet rhoncus libero. Suspendisse bibendum placerat odio, at efficitur odio posuere ac. ",-1),ke=(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("strong",null,"Adresse :"),(0,r.Uk)(" 456 Avenue des Gourmets")]),(0,r._)("li",null,[(0,r._)("strong",null,"Téléphone :"),(0,r.Uk)(" 01 98 76 54 32")]),(0,r._)("li",null,[(0,r._)("strong",null,"Horaires :"),(0,r.Uk)(" Ouvert tous les jours de 11h à 23h")])],-1),He=(0,r._)("h2",null,"Restaurant 3",-1),Le={class:"restaurant-info"},Oe=["src"],Ee=(0,r._)("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut bibendum ipsum. Sed ut sollicitudin velit. Nulla rutrum justo eu velit malesuada, ac aliquam orci sollicitudin. Vivamus bibendum lacinia elit, sit amet rhoncus libero. ",-1);function Ye(e,t,n,a,i,s){return(0,r.wg)(),(0,r.iD)("html",_e,[ge,(0,r._)("body",null,[we,(0,r._)("main",null,[(0,r._)("section",null,[ye,(0,r._)("div",Ne,[(0,r._)("img",{src:a.image1,alt:"Photo du restaurant 1"},null,8,Re),Ze,Me])]),(0,r._)("section",null,[je,(0,r._)("div",Te,[(0,r._)("img",{src:a.image2,alt:"Photo du restaurant 2"},null,8,qe),ze,ke])]),(0,r._)("section",null,[He,(0,r._)("div",Le,[(0,r._)("img",{src:a.image3,alt:"Photo du restaurant 3"},null,8,Oe),Ee])])])])])}var Ae=n.p+"img/restaurant1.0e40a6dc.jpg",xe=n.p+"img/restaurant2.becb0d2d.jpg",De=n.p+"img/restaurant3.a89c5893.jpg",Ce={setup(){return{image1:Ae,image2:xe,image3:De}}};const Se=(0,o.Z)(Ce,[["render",Ye]]);var Ue=Se;const Ge=[{path:"/",component:F},{name:"Restaurant",path:"/restaurant/:name",component:ae},{name:"Reservation ",path:"/Reservation",component:ce},{name:"ContactezNous",path:"/ContactezNous",component:fe},{name:"NosRestaurants",path:"/NosRestaurants",component:Ue}],Ie=(0,m.p7)({history:(0,m.r5)(),routes:Ge}),We=(0,a.ri)(c);We.use(Ie),We.mount("#app")},8259:function(e,t,n){e.exports=n.p+"img/banniere.6def7822.jpeg"},9671:function(e,t,n){e.exports=n.p+"img/logo.7bbcf7db.jpg"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,i){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],i=e[c][2];for(var u=!0,o=0;o<a.length;o++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[o])}))?a.splice(o--,1):(u=!1,i<s&&(s=i));if(u){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,i,s=a[0],u=a[1],o=a[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(o)var c=o(n)}for(t&&t(a);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},a=self["webpackChunkvue3_ubereats"]=self["webpackChunkvue3_ubereats"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7145)}));a=n.O(a)})();
//# sourceMappingURL=app.9b0171a2.js.map