export function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Find all elements with .reveal class
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
}

export function createBackgroundEffects() {
    // Noise
    const noise = document.createElement('div');
    noise.className = 'bg-noise';
    document.body.appendChild(noise);

    // Particles
    const particles = document.createElement('div');
    particles.className = 'particles-container';

    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 3 + 1;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100 + 100}%`; // Start below screen
        p.style.animationDelay = `${Math.random() * 10}s`;
        p.style.animationDuration = `${15 + Math.random() * 20}s`;
        particles.appendChild(p);
    }

    document.body.appendChild(particles);
}
