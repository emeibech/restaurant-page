import { navMenu } from "../home/navMenu";
import { foods } from "./foods";
import { main } from "../home/main";

export const menu = () => {
    navMenu();
    foods();
    main();
}