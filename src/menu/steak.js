import src from '../assets/images/steak.jpg';

export const steak = () => {
    const foods = document.querySelector('.menu');
    const tigerSteak = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Steak');
    const p1 = document.createElement('p');
    p1.textContent = 'Tiger Steak';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    tigerSteak.append(p1, img, p2);
    foods.appendChild(tigerSteak);
    content.appendChild(foods);
}