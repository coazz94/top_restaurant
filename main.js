(()=>{"use strict";const e=(e="div",n,t,i)=>{let o=document.createElement(e);return n&&(o.className=n),t&&o.setAttribute("id",t),i&&(o.textContent=i),o},n=["Home","Menu","Wines"];class t{constructor(e="none",n=[],t=0){this.name=e,this.ingridents=n,this.price=t}}const i=[["Hamburger",["bun","ground beef 150g","pickles","ketchup"],5.99],["Cheeseburger",["bun","ground beef 150g","cheese","pickles","ketchup"],6.99],["Royal Burger",["bun","2 x ground beef 180g","cheese","pickles","ketchup"],7.99],["Big Burger",["bun","3 x ground beef 180g","2 x cheese","ketchup"],8.99],["Messi Burger",["bun","2 x ground beef 180g","cheese","ham","ketchup"],8.49],["Djokovic Burger",["bun","2 x vegan beef 180g","vegan cheese","pickles","ketchup"],9.99],["Ronaldo Burger",["bun","2 x ground beef 180g","cheese","pickles","ketchup"],8.79]];let o=new class{constructor(){this.menu=[]}addFood(e){this.menu.push(e)}getLength(){return this.menu.length}getElement(e){return this.menu[e]}};(()=>{for(let e=0;e<i.length;e++){let n=new t(i[e][0],i[e][1],i[e][2]);o.addFood(n)}})(),(()=>{const t=document.getElementById("content"),i=(()=>{let t=e("div","head"),i=e("div","","pagename","Pizzeria Coazz"),o=e("ul","tabs");for(let t=0;t<n.length;t++){let i=e("li",void 0,void 0,n[t]);i.dataset.tab=n[t],o.appendChild(i)}let d=e("div",void 0,"profile",void 0);return d.innerHTML="<div>Icon</div>",t.append(i,o,d),t})(),o=(()=>{let n=e("div","footer"),t=document.createElement("footer"),i=e("p","","","Copyright © 2022 coazz"),o=document.createElement("a");o.href="https://github.com/coazz94";let d=document.createElement("img");return d.src="https://cdn-icons-png.flaticon.com/512/25/25231.png",d.alt="no_img",d.setAttribute("id","git_img"),o.appendChild(d),t.append(i,o),n.append(t),n})(),d=e("div","pagecontent");t.append(i,d,o)})();const d=(()=>{let n=e("div","container"),t=e("div","","commercetext","Your Italian Restaurant in the middle of Vienna !"),i=e("p","","infotext","\n    From Monday to Friday between 12:00 and 15:00, our Business Lunch awaits you with an excellent selection of daily changing hot dishes. \n    For only €12.90, our offer is the ideal lunch to choose from pizzas, pasta dishes and many more. \n    The same applies to the variety of drinks that can be conveniently ordered in addition.\n    "),o=e("button","","order_btt","Order now !"),d=e("div","contact");return d.innerHTML='\n        <div id="contacthead">Contact Information</div>\n        <div><strong>Adress</strong></div>\n        <div>443 Knickerbocker Ave, Brooklyn, NY 11237, United States</div>\n        <div><strong>Phone Number </strong></div>\n        <div>+17184559664</div>\n        <div><strong>Owner</strong></div>\n        <div>Luigi</div>\n    ',n.append(t,i,o,d),n})(),r=(()=>{let n=e("div","test");for(let t=0;t<o.getLength();t++){let i=e("div","",`menu_${t}`),d=e("div","","",o.getElement(t).name),r=e("div","","",o.getElement(t).ingridents),a=e("div","","",o.getElement(t).price);i.append(d,r,a),n.append(i)}return n})(),a=(()=>{let n=e("div","container"),t=e("div","","commercetext","Your Italian Restaurant in the middle of Vienna !"),i=e("p","","infotext","\n        TEST TES TETSTSTST\n    "),o=e("button","","order_btt","Order now !"),d=e("div","contact");return d.innerHTML='\n        <div id="contacthead">Contact Information</div>\n        <div><strong>Adress</strong></div>\n        <div>443 Knickerbocker Ave, Brooklyn, NY 11237, United States</div>\n        <div><strong>Phone Number </strong></div>\n        <div>+17184559664</div>\n        <div><strong>Owner</strong></div>\n        <div>Luigi</div>\n    ',n.append(t,i,o,d),n})(),c=document.querySelector(".pagecontent");c.append(r),document.querySelectorAll("li").forEach((e=>{e.addEventListener("click",(()=>s(e.dataset.tab)))}));const s=e=>{c.innerHTML="",e===n[0]?c.append(d):e===n[1]?c.append(r):c.append(a)}})();