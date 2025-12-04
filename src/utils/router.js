export class Router {
    constructor(routes) {
        this.routes = routes;
        this.app = document.querySelector('#app');
        this.currentPath = null;

        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    async handleRoute() {
        const hash = window.location.hash.slice(1) || '/';

        // Handle dynamic routes (e.g., /collection/:id)
        // For this simple version, we'll just match exact paths or startsWith for collections
        let route = this.routes[hash];
        let params = {};

        if (!route) {
            // Simple pattern matching for collections
            if (hash.startsWith('/collection/')) {
                route = this.routes['/collection/:id'];
                params = { id: hash.split('/')[2] };
            } else {
                route = this.routes['404'] || this.routes['/'];
            }
        }

        if (this.currentPath === hash) return;
        this.currentPath = hash;

        // Transition effect
        this.app.style.opacity = '0';

        setTimeout(async () => {
            this.app.innerHTML = '';
            const component = await route(params);
            this.app.appendChild(component);

            // Scroll to top
            window.scrollTo(0, 0);

            // Fade in
            requestAnimationFrame(() => {
                this.app.style.opacity = '1';
            });
        }, 300); // Match transition duration
    }

    navigate(path) {
        window.location.hash = path;
    }
}
