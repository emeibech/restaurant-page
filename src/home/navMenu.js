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
    nav.append(home, menu, contact);
    content.appendChild(nav);
}