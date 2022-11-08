import { navMenu } from "../home/navMenu";
import { foods } from "./foods";
import { main } from "../home/main";
import { home } from "../home/home";

export const menu = () => {
    navMenu();
    foods();
    main();
    document.querySelector('.home').addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        home();
    });
}