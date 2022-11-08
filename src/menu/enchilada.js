import src from '../assets/images/enchilada.jpg';

export const enchilada = () => {
    const foods = document.createElement('div');
    foods.classList.add('menu');
    const possumEnchilada = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Enchilada');
    const p1 = document.createElement('p');
    p1.textContent = 'Possum Enchilada';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    possumEnchilada.append(p1, img, p2);
    foods.appendChild(possumEnchilada);
    content.appendChild(foods);
}