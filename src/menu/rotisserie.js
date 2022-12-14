import src from '../assets/images/rotisserie.jpg';

export const rotisserie = () => {
    const foods = document.querySelector('.foods');
    const rotisserieOwl = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Rotisserie');
    const p1 = document.createElement('p');
    p1.textContent = 'Rotisserie Owl';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    rotisserieOwl.append(p1, img, p2);
    foods.appendChild(rotisserieOwl);
    content.appendChild(foods);
}