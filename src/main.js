import './styles/global.css';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Gallery } from './components/Gallery.js';
import { Footer } from './components/Footer.js';

const app = document.querySelector('#app');
app.appendChild(Hero());
app.appendChild(About());
app.appendChild(Gallery());
app.appendChild(Footer());
