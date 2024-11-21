const content = document.querySelector('.content-login');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');

function addClass(element, className) {
    if (element) element.classList.add(className);
}

function removeClass(element, className) {
    if (element) element.classList.remove(className);
}

if (registerLink) {
    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        addClass(content, 'active');
    });
}

if (loginLink) {
    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        removeClass(content, 'active');
    });
}

if (btnLogin) {
    btnLogin.addEventListener('click', () => {
        addClass(content, 'active-login');
    });
}

if (iconClose) {
    iconClose.addEventListener('click', () => {
        removeClass(content, 'active-login');
    });
}
