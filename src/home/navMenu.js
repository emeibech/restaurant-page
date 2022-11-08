export let navMenu = () => {
    const nav = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    home.classList.add('home');
    home.textContent = 'Home';
    menu.classList.add('menu')
    menu.textContent = 'Menu';
    contact.classList.add('contact')
    contact.textContent = 'Contact';
    home.setAttribute('href', '#');
    menu.setAttribute('href', '#');
    contact.setAttribute('href', '#');
    nav.append(home, menu, contact);
    content.appendChild(nav);
}