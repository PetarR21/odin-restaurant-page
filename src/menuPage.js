import Chef from './img/chef.png'
import Burger from './img/hamburger.png'
import CheeseBurger from './img/cheeseburger.png'
import DoubleCheeseBurger from './img/double-cheeseburger.png'
import Steak from './img/steak.png'
import Ribs from './img/ribs.png'
import GrilledCheese from './img/grilled-cheese.png'
import CaesarSalad from './img/caesar-salad.png'
import FrenchFries from './img/french-fries.png'

function menuPage() {
    const content = document.getElementById('content');

    //Import images
    const chef = new Image();
    chef.src = Chef;
    const burger = new Image();
    burger.src = Burger;
    const cheeseBurger = new Image();
    cheeseBurger.src = CheeseBurger;
    const doubleCheeseBurger = new Image();
    doubleCheeseBurger.src = DoubleCheeseBurger;
    const steak = new Image();
    steak.src = Steak;
    const ribs = new Image();
    ribs.src = Ribs;
    const grilledCheese = new Image();
    grilledCheese.src = GrilledCheese;
    const caesarSalad = new Image();
    caesarSalad.src = CaesarSalad;
    const frenchFries = new Image();
    frenchFries.src = FrenchFries;

    //Menu container
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';
    menuContainer.classList.add('second');
    //Menu title
    const menuTitle = document.createElement('div');
    menuTitle.id = "menu-title";
    const menuTitleH3 = document.createElement('h3');
    menuTitleH3.textContent = "Menu";
    menuTitle.appendChild(menuTitleH3);
    chef.id = "chef-img";
    menuTitle.appendChild(chef);
    menuContainer.appendChild(menuTitle);

    //Menu grid
    const menuGrid = document.createElement('div');
    menuGrid.id = "menu-grid";

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    const itemContent1 = document.createElement('div');
    itemContent1.classList.add('item-content');
    const h41 = document.createElement('h4');
    const p1 = document.createElement('p');
    menuItem1.appendChild(burger);
    h41.textContent = "Hamburger: $2.49";
    p1.textContent = "Buns, patty, tomato, onions, lettuce, and our secret family recipe.";
    itemContent1.appendChild(h41);
    itemContent1.appendChild(p1);
    menuItem1.appendChild(itemContent1);
    menuGrid.appendChild(menuItem1);

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    const itemContent2 = document.createElement('div');
    itemContent2.classList.add('item-content');
    const h42 = document.createElement('h4');
    const p2 = document.createElement('p');
    menuItem2.appendChild(cheeseBurger);
    h42.textContent = "Cheeseburger: $2.99";
    p2.textContent = "Similar to our hamburger, but with cheese.";
    itemContent2.appendChild(h42);
    itemContent2.appendChild(p2);
    menuItem2.appendChild(itemContent2);
    menuGrid.appendChild(menuItem2);

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    const itemContent3 = document.createElement('div');
    itemContent3.classList.add('item-content');
    const h43 = document.createElement('h4');
    const p3 = document.createElement('p');
    menuItem3.appendChild(doubleCheeseBurger);
    h43.textContent = "Double Cheeseburger: $3.49";
    p3.textContent = "Similar to our cheeseburger, but with an extra patty.";
    itemContent3.appendChild(h43);
    itemContent3.appendChild(p3);
    menuItem3.appendChild(itemContent3);
    menuGrid.appendChild(menuItem3);

    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');
    const itemContent4 = document.createElement('div');
    itemContent4.classList.add('item-content');
    const h44 = document.createElement('h4');
    const p4 = document.createElement('p');
    menuItem4.appendChild(steak);
    h44.textContent = "Steak: $11.99";
    p4.textContent = "A juicy steak made just how you like it.";
    itemContent4.appendChild(h44);
    itemContent4.appendChild(p4);
    menuItem4.appendChild(itemContent4);
    menuGrid.appendChild(menuItem4);

    const menuItem5 = document.createElement('div');
    menuItem5.classList.add('menu-item');
    const itemContent5 = document.createElement('div');
    itemContent5.classList.add('item-content');
    const h45 = document.createElement('h4');
    const p5 = document.createElement('p');
    menuItem5.appendChild(ribs);
    h45.textContent = "BBQ Ribs: $8.99";
    p5.textContent = "Barbecue ribs with your choice of a add-ons.";
    itemContent5.appendChild(h45);
    itemContent5.appendChild(p5);
    menuItem5.appendChild(itemContent5);
    menuGrid.appendChild(menuItem5);

    const menuItem6 = document.createElement('div');
    menuItem6.classList.add('menu-item');
    const itemContent6 = document.createElement('div');
    itemContent6.classList.add('item-content');
    const h46 = document.createElement('h4');
    const p6 = document.createElement('p');
    menuItem6.appendChild(grilledCheese);
    h46.textContent = "Grilled Cheese Sandwich: $4.99";
    p6.textContent = "A toasted and grilled cheese sandwich, dipped in our special sauce.";
    itemContent6.appendChild(h46);
    itemContent6.appendChild(p6);
    menuItem6.appendChild(itemContent6);
    menuGrid.appendChild(menuItem6);

    const menuItem7 = document.createElement('div');
    menuItem7.classList.add('menu-item');
    const itemContent7 = document.createElement('div');
    itemContent7.classList.add('item-content');
    const h47 = document.createElement('h4');
    const p7 = document.createElement('p');
    menuItem7.appendChild(caesarSalad);
    h47.textContent = "Caesar Salad: $7.99";
    p7.textContent = "Your typical caesar salad that comes with your choice of dressings.";
    itemContent7.appendChild(h47);
    itemContent7.appendChild(p7);
    menuItem7.appendChild(itemContent7);
    menuGrid.appendChild(menuItem7);

    const menuItem8 = document.createElement('div');
    menuItem8.classList.add('menu-item');
    const itemContent8 = document.createElement('div');
    itemContent8.classList.add('item-content');
    const h48 = document.createElement('h4');
    const p8 = document.createElement('p');
    menuItem8.appendChild(frenchFries);
    h48.textContent = "French Fries: $1.99";
    p8.textContent = "Sometimes you don't want to eat your burger alone, why not add some french fries?";
    itemContent8.appendChild(h48);
    itemContent8.appendChild(p8);
    menuItem8.appendChild(itemContent8);
    menuGrid.appendChild(menuItem8);
    



    menuContainer.appendChild(menuGrid);

    content.appendChild(menuContainer);
}

export { menuPage }