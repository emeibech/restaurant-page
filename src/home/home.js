import '../styles/styles.css';
import { navMenu } from "./navMenu";
import { header } from "./header";
import { main } from "./main";
import { menu } from "../menu/menu";
import { contact } from "../contact/contact";

export const home = () => {
    navMenu();
    header();
    main();
    document.querySelector('.menu').addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        menu();
    });
    document.querySelector('.contact').addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        contact();
    });
}