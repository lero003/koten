import { Hero } from '../components/Hero.js';
import { About } from '../components/About.js';
import { Gallery } from '../components/Gallery.js';
import { Footer } from '../components/Footer.js';

export async function HomePage() {
    const container = document.createElement('div');
    container.className = 'page-home';

    container.appendChild(Hero());
    container.appendChild(About());
    container.appendChild(Gallery());
    container.appendChild(Footer());

    return container;
}
