import src from '../assets/images/nachos.jpg';

export const nachos = () => {
    const foods = document.querySelector('.menu');
    const squirrelNachos = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Nachos');
    const p1 = document.createElement('p');
    p1.textContent = 'Squirrel Nachos';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    squirrelNachos.append(img, p1, p2);
    foods.appendChild(squirrelNachos);
    content.appendChild(foods);
}