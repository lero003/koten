import './styles/global.css';
import { Router } from './utils/router.js';
import { HomePage } from './pages/Home.js';
import { CollectionPage } from './pages/Collection.js';
import { initScrollReveal, createBackgroundEffects } from './utils/effects.js';

console.log('main.js loaded');

// Initialize global effects
createBackgroundEffects();

const routes = {
    '/': async () => {
        const page = await HomePage();
        // Wait for DOM update then init reveal
        setTimeout(initScrollReveal, 100);
        return page;
    },
    '/collection/:id': async (params) => {
        const page = await CollectionPage(params);
        setTimeout(initScrollReveal, 100);
        return page;
    }
};

new Router(routes);
