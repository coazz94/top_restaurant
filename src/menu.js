

import { createHTMLElement } from './basic';


const menuLoad = () => {

    // Create fpage div and pagecontent div
    let page_content = createHTMLElement("div", "test");
    // Change the style to grid
    // page_content.style

    let heading = createHTMLElement("div", "headx", "", "The best Burgers in Vienna:");
    page_content.append(heading)

    // Add here the text to the divs
    for(let i = 0; i < burger_menu.getLength(); i++){
        let product = createHTMLElement("div", "", `menu_${i}`);
        let name = createHTMLElement("div", "", "", burger_menu.getElement(i).name);
        let ingridents = createHTMLElement("div", "", "", burger_menu.getElement(i).ingridents);
        let price = createHTMLElement("div", "", "", burger_menu.getElement(i).price);
        product.append(name, ingridents, price);
        page_content.append(product);
    }



    return page_content;
}



class Food {
    constructor(
        name = "none",
        ingridents = [],
        price = 0,
    ){
        this.name = name;
        this.ingridents = ingridents;
        this.price = price;
    }
}

class Menu {
    constructor(){
        this.menu = [];
    }

    addFood(food){
        this.menu.push(food)
    }

    getLength(){
        return this.menu.length
    }

    getElement(i){
        return this.menu[i];
    }
}

const burger = [
    ["Hamburger", ["bun", "ground beef 150g", "pickles", "ketchup"], 5.99],
    ["Cheeseburger", ["bun", "ground beef 150g", "cheese", "pickles", "ketchup"], 6.99],
    ["Royal Burger", ["bun", "2 x ground beef 180g", "cheese", "pickles", "ketchup"], 7.99],
    ["Big Burger", ["bun", "3 x ground beef 180g", "2 x cheese", "ketchup"], 8.99],
    ["Messi Burger", ["bun", "2 x ground beef 180g", "cheese", "ham", "ketchup"], 8.49],
    ["Djokovic Burger", ["bun", "2 x vegan beef 180g", "vegan cheese", "pickles", "ketchup"], 9.99],
    ["Hamburger", ["bun", "ground beef 150g", "pickles", "ketchup"], 5.99],
    ["Cheeseburger", ["bun", "ground beef 150g", "cheese", "pickles", "ketchup"], 6.99],
    ["Royal Burger", ["bun", "2 x ground beef 180g", "cheese", "pickles", "ketchup"], 7.99],
    ["Big Burger", ["bun", "3 x ground beef 180g", "2 x cheese", "ketchup"], 8.99],
    ["Messi Burger", ["bun", "2 x ground beef 180g", "cheese", "ham", "ketchup"], 8.49],
    ["Djokovic Burger", ["bun", "2 x vegan beef 180g", "vegan cheese", "pickles", "ketchup"], 9.99],
    ["Ronaldo Burger", ["bun", "2 x ground beef 180g", "cheese", "pickles", "ketchup"], 8.79]
]

let burger_menu = new Menu()

const makeFood = (() => {

    for(let i = 0; i < burger.length; i++){
        let dish = new Food(burger[i][0], burger[i][1], burger[i][2]);
        burger_menu.addFood(dish);
    }   


})();





export { menuLoad };