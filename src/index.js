
import { pageLoad, tabs } from './pageLoad';
import { homeLoad } from './home';
import { menuLoad } from './menu.js';
import { wineLoad } from './wine';

// Import the css
import './styles.css';

pageLoad(); // this should work as expected!
const homepage = homeLoad();
const menupage = menuLoad();
const winepage = wineLoad();
const pagecontent = document.querySelector(".pagecontent");


// on First load the homepage
pagecontent.append(homeLoad());

// Add a eventlistener to every list element
document.querySelectorAll("li").forEach((e)=>{
    e.addEventListener("click", () => loadPage(e.dataset.tab));
})


// Load the Page requested
const loadPage = (pagename) => {
    pagecontent.innerHTML = "";
    if(pagename === tabs[0]){
        pagecontent.append(homepage);
    }else if (pagename === tabs[1]){
        pagecontent.append(menupage);
    }else{
        pagecontent.append(winepage);
    }

}