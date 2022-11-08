import src from '../assets/images/stew.jpg';

export const stew = () => {
    const foods = document.querySelector('.foods');
    const monkeyStew = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Stew');
    const p1 = document.createElement('p');
    p1.textContent = 'Monkey Stew';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    monkeyStew.append(p1, img, p2);
    foods.appendChild(monkeyStew);
    content.appendChild(foods);
}