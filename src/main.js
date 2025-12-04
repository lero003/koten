import './styles/global.css';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Gallery } from './components/Gallery.js';
import { Footer } from './components/Footer.js';

console.log('main.js loaded');

const app = document.querySelector('#app');
console.log('app element:', app);

// Clear the loading message
app.innerHTML = '';

const heroElement = Hero();
console.log('Hero created:', heroElement);
app.appendChild(heroElement);

const aboutElement = About();
console.log('About created:', aboutElement);
app.appendChild(aboutElement);

const galleryElement = Gallery();
console.log('Gallery created:', galleryElement);
app.appendChild(galleryElement);

const footerElement = Footer();
console.log('Footer created:', footerElement);
app.appendChild(footerElement);

console.log('All components mounted');
