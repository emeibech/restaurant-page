export let extra = () => {
    const main = document.querySelector('main');
    const extra = document.createElement('div');
    extra.classList.add('extra');
    const h3 = document.createElement('h3');
    h3.textContent = 'Extra! Extra! Read all about it!';
    const socials = document.createElement('div');
    socials.classList.add('socials')
    socials.innerHTML = 
    '<p>Socials:</p><?xml version="1.0" encoding="UTF-8"?><svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path class="fb" d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><?xml version="1.0" encoding="UTF-8"?><svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path class="tw" d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><?xml version="1.0" encoding="UTF-8"?><svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path class="ig" d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#000000" stroke-width="1.5"></path><path d="M17.5 6.51l.01-.011" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><?xml version="1.0" encoding="UTF-8"?><svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path class="tt" d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 12a3 3 0 103 3V6c.333 1 1.6 3 4 3" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
    const p1 = document.createElement('p');
    p1.innerHTML = 'Link to code <a href="https://github.com/emeibech/restaurant-page">here</a>';
    const p2 = document.createElement('p');
    p2.innerHTML = '<p>Copyright @ <a href="https://github.com/emeibech/">emeibech</a> 2022</p>';
    const p3 = document.createElement('p');
    p3.innerHTML = '<a href="https://unsplash.com/photos/STqHLqMne3k">Background image</a> courtesey of <a href="https://unsplash.com/@covertnine">Tim Toomey</a> from <a href="https://unsplash.com">Unsplash</a>';
    const p4 = document.createElement('p');
    p4.textContent = 'This is satire. Don\'t take this seriously.'
    extra.append(h3, socials, p1, p2, p3, p4);
    main.appendChild(extra);
}