

import { createHTMLElement } from './basic';


const homeLoad = () => {

    // Create fpage div and pagecontent div
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

    return page_content;
}



export { homeLoad };