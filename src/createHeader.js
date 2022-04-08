function createHeader() {
    //Header
    const header = document.createElement('header');
    const headerContainer = document.createElement('div');
    headerContainer.id = "header-container";
    header.appendChild(headerContainer);
    const leftBar = document.createElement('div');
    leftBar.id = "left-bar";
    const h3 = document.createElement('h3');
    h3.textContent = "Happy Meal";
    leftBar.appendChild(h3);
    headerContainer.appendChild(leftBar);
    const ul = document.createElement('ul');
    ul.id = "right-bar";
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    li1.textContent = 'Home';
    li1.id = 'home';
    li1.classList.add('selected');
    li2.textContent = 'Menu';
    li2.id = 'menu';
    li3.textContent = 'Contact us';
    li3.id = "contact";
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    headerContainer.appendChild(ul);
    content.appendChild(header);
}

export { createHeader };