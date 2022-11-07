export let navMenu = () => {
    const nav = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    home.setAttribute('href', '#');
    menu.setAttribute('href', '#');
    contact.setAttribute('href', '#');
    nav.append(home, menu, contact);
    content.appendChild(nav);
}