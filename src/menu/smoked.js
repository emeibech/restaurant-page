import src from '../assets/images/smoked.jpg';

export const smoked = () => {
    const foods = document.querySelector('.foods');
    const smokedKangaroo = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Smoked');
    const p1 = document.createElement('p');
    p1.textContent = 'Smoked Kangaroo';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    smokedKangaroo.append(p1, img, p2);
    foods.appendChild(smokedKangaroo);
    content.appendChild(foods);
}