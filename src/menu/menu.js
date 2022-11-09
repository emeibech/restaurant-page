import '../styles/styles.css';
import { navMenu } from "../home/navMenu";
import { foods } from "./foods";
import { main } from "../home/main";
import { home } from "../home/home";
import { contact } from "../contact/contact";

export const menu = () => {
    navMenu();
    foods();
    main();
    document.querySelector('.home').addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        home();
    });
    document.querySelector('.contact').addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        contact();
    });
}