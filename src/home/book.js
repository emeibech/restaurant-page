export let book = () => {
    function setAttributes(el, attrs) {
        for(var key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
    }
    
    const main = document.querySelector('main');
    const book = document.createElement('div');
    book.classList.add('book');
    const h3 = document.createElement('h3');
    h3.textContent = 'Book a Table';
    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    const dateLabel = document.createElement('label');
    const timeLabel = document.createElement('label');
    const phoneLabel = document.createElement('label');
    const messageLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const dateInput = document.createElement('input');
    const timeInput = document.createElement('input');
    const phoneInput = document.createElement('input');
    const messageInput = document.createElement('textarea');
    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.setAttribute('type', 'button');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Date:';
    timeLabel.setAttribute('for', 'time');
    timeLabel.textContent = 'Time:';
    phoneLabel.setAttribute('for', 'phone');
    phoneLabel.textContent = 'Phone:';
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Message:';
    setAttributes(nameInput, {'type': 'text', 'id': 'name', 'name': 'name'});
    setAttributes(dateInput, {'type': 'date', 'id': 'date', 'name': 'date'});
    setAttributes(timeInput, {'type': 'time', 'id': 'time', 'name': 'time'});
    setAttributes(phoneInput, {'type': 'tel', 'id': 'phone', 'name': 'phone'});
    setAttributes(messageInput, {'id': 'phone', 'name': 'phone', 'cols': '30', 'rows': '2'});
    form.append(nameLabel, nameInput, dateLabel, dateInput, timeLabel, timeInput, phoneLabel, phoneInput, messageLabel, messageInput, button);
    book.append(h3, form)
    main.appendChild(book);
}