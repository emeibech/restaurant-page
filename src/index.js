import 'normalize.css';
import './styles/styles.css';
import { navMenu } from './navMenu';
import { header } from './home/header';

const content = document.querySelector('#content');

navMenu();
header();