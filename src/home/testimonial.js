export let testimonial = () => {
    const main = document.createElement('main');
    const content = document.querySelector('#content');
    const testimonial = document.createElement('div');
    testimonial.classList.add('testimonial');
    const h3 = document.createElement('h3');
    h3.textContent = 'Testimonial';
    const p1 = document.createElement('p');
    p1.textContent = 'Hey, ya ever ate possum? That\'s some good eating. Hell, ya ought to try it sometime, I tell ya man, it\'s good eating. Possum, raccoons, even zebra meat, cooks up pretty good. Pigeons. Pigeons are good too. Sometimes they come with notes attached. It\'s like...a fortune cookie with wings. Squirrels...squirrels is not so good. They...taste like goldfish. Meat\'s real stringy...ya know what I mean?';
    const p2 = document.createElement('p');
    p2.textContent = '—That caller on Chatterbox';
    p2.classList.add('attr');
    testimonial.append(h3, p1, p2);
    main.appendChild(testimonial);
    content.appendChild(main);
}