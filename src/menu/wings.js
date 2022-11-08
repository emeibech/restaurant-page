import src from '../assets/images/wings.jpg';

export const wings = () => {
    const foods = document.querySelector('.menu');
    const pigeonWings = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Wings');
    const p1 = document.createElement('p');
    p1.textContent = 'Pigeon Wings';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    pigeonWings.append(img, p1, p2);
    foods.appendChild(pigeonWings);
    content.appendChild(foods);
}