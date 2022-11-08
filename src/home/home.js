import { navMenu } from "./navMenu";
import { header } from "./header";
import { main } from "./main";
import { menu } from "../menu/menu";

export const home = () => {
    navMenu();
    header();
    main();
    document.querySelector('.menu').addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        menu();
    });
}