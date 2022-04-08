import Clock from './img/clock.svg'
import Location from './img/location.svg'
import Mail from './img/mail.svg'
import Phone from './img/phone.svg'

function contactPage() {
    //Load Images
    const clock = new Image();
    clock.src = Clock;
    const location = new Image();
    location.src = Location;
    const mail = new Image();
    mail.src = Mail;
    const phone = new Image();
    phone.src = Phone;

    const content = document.getElementById("content");

    const contactPageElement = document.createElement('div');
    contactPageElement.classList.add('second');
    contactPageElement.id = "contact-page";

    const contactTitle = document.createElement('h1');
    contactTitle.id = "contact-title";
    contactTitle.textContent = "Contact us"
    contactPageElement.appendChild(contactTitle);

    const contactContainer = document.createElement('div');
    contactContainer.id = "contact-container";

    const contactElement1 = document.createElement('div');
    contactElement1.classList.add('contact-element');
    contactElement1.appendChild(location);
    const p1 = document.createElement('p');
    p1.textContent = "1024 Oakwood Ave San Diego, CA 22434";
    contactElement1.appendChild(p1);
    contactContainer.appendChild(contactElement1);

    const contactElement2 = document.createElement('div');
    contactElement2.classList.add('contact-element');
    contactElement2.appendChild(clock);
    const p2 = document.createElement('p');
    p2.textContent = "Mon-Thurs:8am-8pm Fri-Sun:8am-11pm";
    contactElement2.appendChild(p2);
    contactContainer.appendChild(contactElement2);

    const contactElement3 = document.createElement('div');
    contactElement3.classList.add('contact-element');
    contactElement3.appendChild(phone);
    const p3 = document.createElement('p');
    p3.textContent = "Mon-Thurs:8am-8pm Fri-Sun:8am-11pm";
    contactElement3.appendChild(p3);
    contactContainer.appendChild(contactElement3);

    const form = document.createElement('form');
    const h3 = document.createElement('h3');
    h3.appendChild(mail);
    h3.appendChild(document.createTextNode("Message us"));
    form.appendChild(h3);
    const inputName = document.createElement('input');
    inputName.type = "text";
    inputName.id = "input-name";
    inputName.placeholder = "Full Name";
    form.appendChild(inputName);
    const inputEmail = document.createElement('input');
    inputEmail.type = "email";
    inputEmail.id = "input-mail";
    inputEmail.placeholder = "Email";
    form.appendChild(inputEmail);
    const textArea = document.createElement('textarea');
    textArea.name = "message";
    textArea.id = "input-message";
    textArea.cols = "30";
    textArea.rows = "5";
    textArea.placeholder = "Type your message..."
    form.appendChild(textArea);
    const inputSubmit = document.createElement('input');
    inputSubmit.type = "submit";
    inputSubmit.id = "submit-btn";
    inputSubmit.classList.add('btn');
    inputSubmit.value = "Send";
    form.appendChild(inputSubmit);
    contactContainer.appendChild(form);

    contactPageElement.appendChild(contactContainer);
    content.appendChild(contactPageElement);

}

export { contactPage };