export let header = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h1.textContent = 'good eatin\'s';
    h2.textContent = 'satisfy your cravings';
    header.append(h1, h2);
    content.appendChild(header);
}