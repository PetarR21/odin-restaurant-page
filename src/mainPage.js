function mainPage() {
    const content = document.getElementById("content");

    //Main
    const main = document.createElement('main');
    main.classList.add('second');
    const mainContainer = document.createElement('div');
    mainContainer.id = "main-container";
    
    const h1 = document.createElement('h1');
    h1.textContent = "Visit us and try one of our delicious meals!";
    const h5 = document.createElement('h5');
    h5.textContent = "Tastes like dream!";
    const button = document.createElement('button');
    button.id="orderBtn";
    button.classList.add('btn');
    button.textContent = "Order Now";
    mainContainer.appendChild(h1);
    mainContainer.appendChild(h5);
    mainContainer.appendChild(button);
    main.appendChild(mainContainer);
    content.appendChild(main);
}

export { mainPage }