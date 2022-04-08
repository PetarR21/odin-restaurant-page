import './style.css';
import { createHeader } from './createHeader';
import { mainPage } from './mainPage';
import { menuPage } from './menuPage';
import { contactPage } from './contactPage';

const content = document.querySelector('#content');

createHeader();
mainPage();

document.querySelector('#home').addEventListener('click', () => {
    document.querySelector('.second').remove();
    mainPage();
    document.querySelector('#home').classList.add('selected');
    document.querySelector('#menu').classList.remove('selected');
    document.querySelector('#contact').classList.remove('selected');
});

document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('.second').remove();
    menuPage();
    document.querySelector('#home').classList.remove('selected');
    document.querySelector('#menu').classList.add('selected');
    document.querySelector('#contact').classList.remove('selected');
});

document.querySelector('#contact').addEventListener('click', () => {
    document.querySelector('.second').remove();
    contactPage();
    document.querySelector('#home').classList.remove('selected');
    document.querySelector('#menu').classList.remove('selected');
    document.querySelector('#contact').classList.add('selected');
});




