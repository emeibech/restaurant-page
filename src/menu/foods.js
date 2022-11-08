import '../styles/menu.css'
import { enchilada } from "./enchilada";
import { bbqribs } from "./bbqribs";
import { burger } from "./burger";
import { fishfillet } from "./fishfillet";
import { hotdogs } from "./hotdogs";
import { nachos } from "./nachos";
import { pizza } from "./pizza";
import { rotisserie } from "./rotisserie";
import { steak } from "./steak";
import { wings } from "./wings";
import { smoked } from "./smoked";
import { stew } from "./stew";

export const foods = () => {
    enchilada();
    bbqribs();
    burger();
    fishfillet();
    hotdogs();
    nachos();
    pizza();
    rotisserie();
    steak();
    wings();
    smoked();
    stew();
}