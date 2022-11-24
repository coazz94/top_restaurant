

const createHTMLElement = (type="div", class_name, id_name, innertext) =>{

    let element = document.createElement(type);

    if (class_name)  element.className = class_name;
    if (id_name)  element.setAttribute("id", id_name);
    if (innertext)  element.textContent = innertext;
    
    return element;
}


export { createHTMLElement };