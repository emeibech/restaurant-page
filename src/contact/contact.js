import '../styles/styles.css';
import { navMenu } from "../home/navMenu";
import { contactInfo } from "./contactInfo";
import { main } from "../home/main";
import { home } from "../home/home";
import { menu } from "../menu/menu";

export const contact = () => {
    navMenu();
    contactInfo();
    main();
    document.querySelector('.home').addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        home();
    });
    document.querySelector('.menu').addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        menu();
    });
}