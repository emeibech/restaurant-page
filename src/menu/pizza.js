import src from '../assets/images/pizza.jpg';

export const pizza = () => {
    const foods = document.querySelector('.menu');
    const raccoonPizza = document.createElement('div');
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('alt', 'Pizza');
    const p1 = document.createElement('p');
    p1.textContent = 'Raccoon Pizza';
    const p2 = document.createElement('p');
    p2.textContent = '$13.89';
    raccoonPizza.append(img, p1, p2);
    foods.appendChild(raccoonPizza);
    content.appendChild(foods);
}