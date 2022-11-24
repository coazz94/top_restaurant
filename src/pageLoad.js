


const pageLoad = () => {
    // Get the Content of the Page
    let content = document.getElementById("content");

    let head = document.createElement("div");
    head.className = "head";

    let pagename = document.createElement("div");
    pagename.setAttribute("id", "pagename");
    pagename.textContent="Pizzeria Coazz";

    head.appendChild(pagename);

    content.appendChild(head)



}



export { pageLoad };