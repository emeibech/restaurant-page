import src from '../assets/images/burger.jpg'

export const burger = () => {
    const foods = document.querySelector('.menu');
    const zebraBurger = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Burger');
    const p1 = document.createElement('p');
    p1.textContent = 'Zebra Burger';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    zebraBurger.append(img, p1, p2);
    foods.appendChild(zebraBurger);
    content.appendChild(foods);
}