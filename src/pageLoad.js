
import { createHTMLElement } from './basic';


const tabs = ["Home", "Menu", "Wines"];

const pageLoad = () => {
    // Get the Content of the Page
    const content = document.getElementById("content");
    const head = headLoad();
    const foot = footLoad();
    const blank_space = createHTMLElement("div", "pagecontent")


    content.append(head, blank_space, foot);


}


const headLoad =  () =>{
    // Make the head div and add a class to it
    let head = createHTMLElement("div", "head");

    // make the pagename div add id and the content
    let pagename = createHTMLElement("div", "", "pagename", "Pizzeria Coazz" );

    // create the tabs
    let ul_list = createHTMLElement("ul", "tabs");



    // For every tab make a list element and add a click function to it
    //TODO Evenetuel adde hier den document event listener
    for (let i = 0; i < tabs.length; i++){

        let li_element = createHTMLElement("li",undefined ,undefined ,tabs[i]);
        li_element.dataset.tab = tabs[i];
        ul_list.appendChild(li_element);
    }

    // create the Profile 
    let profile = createHTMLElement("div", undefined, "profile", undefined);
    profile.innerHTML = "<div>Icon</div>"

    // Adde Pagename und list to the head
    head.append(pagename, ul_list, profile);

    // return the head
    return head;
}

const footLoad = () => {

    // Create the div for footer
    let foot = createHTMLElement("div", "footer");

    // Create the footer
    let footer = document.createElement("footer");

    // add the text to the footer
    let foot_text = createHTMLElement("p", "", "", "Copyright © 2022 coazz");

    // add the link
    let link = document.createElement("a");
    link.href = "https://github.com/coazz94";

    // add a git img to the footer
    let git_img = document.createElement("img");
    git_img.src = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
    git_img.alt = "no_img";
    git_img.setAttribute("id", "git_img");

    // append the img to the link
    link.appendChild(git_img);  

    // append link and text to footer
    footer.append(foot_text, link)

    // append footer to div footer
    foot.append(footer) 

    // return foot
    return foot;

}


export { pageLoad, tabs};