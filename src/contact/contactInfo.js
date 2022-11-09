import "../styles/contact.css";

export const contactInfo = () => {
    const contact = document.createElement('div');
    contact.classList.add('contactInfo');
    const h3 = document.createElement('h3');
    h3.textContent = 'Contact Info';
    const p1 = document.createElement('p');
    p1.classList.add('info');
    p1.textContent = 'Your feedback means nothing to us. But we are compelled by the state of Michigan to add a contact info page—an unreasanable and unconstitutional demand—because apparently, in their view, it\'s imperative that their constituents are heard, for their opinions matter (NOT TO US THOUGH). If you call or email us, I will find you, butcher you, and add you to the menu. Thank you very much. Have a good day.'
    const p2 = document.createElement('p');
    p2.textContent = 'Address: 138 River St, Elk Rapids MI 49629'
    const p3 = document.createElement('p');
    p3.textContent = 'Phone: (231) 264-6404'
    const p4 = document.createElement('p');
    p4.textContent = 'Email: support@goodeatin.com'
    contact.append(h3, p1, p2, p3, p4);
    content.appendChild(contact);
}