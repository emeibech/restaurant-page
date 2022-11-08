import src from '../assets/images/hotdogs.jpg';

export const hotdogs = () => {
    const foods = document.querySelector('.foods');
    const hotdogsRoulette = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Hotdogs');
    const p1 = document.createElement('p');
    p1.textContent = 'Hotdogs Roulette';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    hotdogsRoulette.append(p1, img, p2);
    foods.appendChild(hotdogsRoulette);
    content.appendChild(foods);
}