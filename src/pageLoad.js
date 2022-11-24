


const pageLoad = () => {
    // Get the Content of the Page
    const content = document.getElementById("content");
    const head = headLoad();
    const foot = footLoad();
    const first_page = fpageLoad();


    content.append(head, first_page, foot);


}


const headLoad =  () =>{
    // Make the head div and add a class to it
    let head = createHTMLElement("div", "head");

    // make the pagename div add id and the content
    let pagename = createHTMLElement("div", "", "pagename", "Pizzeria Coazz" );

    // create the tabs
    let ul_list = createHTMLElement("ul", "tabs");


    const tabs = ["Home", "Menu", "Wines"];

    // For every tab make a list element and add a click function to it
    //TODO Evenetuel adde hier den document event listener
    for (let i = 0; i < tabs.length; i++){

        let li_element = createHTMLElement("li",undefined ,undefined ,tabs[i]);
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

const fpageLoad = () => {

    // Create fpage div and pagecontent div
    let f_page = createHTMLElement("div", "firstpage");
    let page_content = createHTMLElement("div", "container");

    // Create the greeting text and create also the p text, and a button to order
    let c_text = createHTMLElement("div", "", "commercetext", "Your Italian Restaurant in the middle of Vienna !");
    let info_text = createHTMLElement("p", "", "infotext", `
    From Monday to Friday between 12:00 and 15:00, our Business Lunch awaits you with an excellent selection of daily changing hot dishes. 
    For only €12.90, our offer is the ideal lunch to choose from pizzas, pasta dishes and many more. 
    The same applies to the variety of drinks that can be conveniently ordered in addition.
    `);

    let order_btt = createHTMLElement("button", "", "order_btt", "Order now !")


    let contact = createHTMLElement("div", "contact");
    contact.innerHTML = `
        <div id="contacthead">Contact Information</div>
        <div><strong>Adress</strong></div>
        <div>${"443 Knickerbocker Ave, Brooklyn, NY 11237, United States"}</div>
        <div><strong>Phone Number </strong></div>
        <div>${"+17184559664"}</div>
        <div><strong>Owner</strong></div>
        <div>${"Luigi"}</div>
    `


    // Append everything to page content
    page_content.append(c_text, info_text, order_btt, contact);



    f_page.append(page_content);


    return f_page;


}

const createHTMLElement = (type="div", class_name, id_name, innertext) =>{

    let element = document.createElement(type);

    if (class_name)  element.className = class_name;
    if (id_name)  element.setAttribute("id", id_name);
    if (innertext)  element.textContent = innertext;
    
    return element;


}


export { pageLoad };