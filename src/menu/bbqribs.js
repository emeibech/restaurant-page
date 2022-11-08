import src from '../assets/images/bbq-ribs.jpg';

export const bbqribs = () => {
    const foods = document.querySelector('.menu');
    const gatorBurger = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Barbecue Ribs');
    const p1 = document.createElement('p');
    p1.textContent = 'Gator Ribs';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    gatorBurger.append(img, p1, p2);
    foods.appendChild(gatorBurger);
    content.appendChild(foods);
}