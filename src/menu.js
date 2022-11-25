

import { createHTMLElement } from './basic';


const menuLoad = () => {

    // Create fpage div and pagecontent div
    let page_content = createHTMLElement("div", "container");
    // Change the style to grid
    // page_content.style

    // console.log(burger_menu.getLength())

    // Add here the text to the divs
    for(let i = 0; i < burger_menu.getLength(); i++){
        console.log("HERE")
        let test = createHTMLElement("div", "", "", burger_menu[i]);
        page_content.append(test);
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
}

const burger = [
    ["Hamburger", ["bun", "ground beef 150g", "pickles", "ketchup"], 5.99],
    ["Cheeseburger", ["bun", "ground beef 150g", "cheese", "pickles", "ketchup"], 6.99],
    ["RoyalBurger", ["bun", "2 x ground beef 180g", "cheese", "pickles", "ketchup"], 7.99]
]

let burger_menu = new Menu()

const makeFood = (() => {

    for(let i = 0; i < burger.length; i++){
        let dish = new Food(burger[i][0], burger[i][1], burger[i][2]);
        burger_menu.addFood(dish);
    }   


})();





export { menuLoad };