import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';
import initImageCompare from './modules/compare.js';
import initTestimonials from './modules/testimonials.js';
import initMenuHamburguer from './modules/menu-hamburguer.js';

initMenuHamburguer();
initImageCompare();
initTestimonials();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initDropdownMenu();
initMenuMobile();
