import src from '../assets/images/fish-fillet.jpg';

export const fishfillet = () => {
    const foods = document.querySelector('.foods');
    const goldFishFillet = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Fish Fillet');
    const p1 = document.createElement('p');
    p1.textContent = 'Goldfish Fillet';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    goldFishFillet.append(p1, img, p2);
    foods.appendChild(goldFishFillet);
    content.appendChild(foods);
}