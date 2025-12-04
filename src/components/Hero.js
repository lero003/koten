export function Hero() {
    const element = document.createElement('section');
    element.className = 'hero';

    element.innerHTML = `
    <div class="hero-content">
      <h1 class="hero-title">古典部</h1>
      <p class="hero-subtitle">Preserving the Classic</p>
      <div class="hero-scroll">
        <span class="scroll-text">Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </div>
    <div class="hero-overlay"></div>
  `;

    // Add styles dynamically or assume they are in global/component css
    // For this pilot, we'll append a style tag for component-specific styles
    const style = document.createElement('style');
    style.textContent = `
    .hero {
      position: relative;
      height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-primary);
      color: var(--color-bg);
      overflow: hidden;
    }

    .hero-content {
      z-index: 2;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
      animation: fadeIn 2s ease-out forwards;
    }

    .hero-title {
      font-family: var(--font-serif);
      font-size: clamp(4rem, 15vw, 12rem);
      font-weight: 500;
      letter-spacing: 0.2em;
      margin-bottom: var(--spacing-sm);
      writing-mode: vertical-rl;
      text-orientation: upright;
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-shadow: 0 0 20px rgba(197, 160, 89, 0.3); /* Gold glow */
    }

    .hero-subtitle {
      font-family: var(--font-sans);
      font-size: 1rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      margin-top: var(--spacing-md);
      color: var(--color-accent);
      opacity: 0.8;
    }

    .hero-scroll {
      position: absolute;
      bottom: var(--spacing-lg);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-xs);
      opacity: 0.6;
    }

    .scroll-text {
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .scroll-line {
      width: 1px;
      height: 60px;
      background-color: var(--color-bg);
      animation: scrollDown 2s infinite;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%);
      pointer-events: none;
      z-index: 1;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes scrollDown {
      0% { transform: scaleY(0); transform-origin: top; }
      50% { transform: scaleY(1); transform-origin: top; }
      50.1% { transform: scaleY(1); transform-origin: bottom; }
      100% { transform: scaleY(0); transform-origin: bottom; }
    }
  `;
    document.head.appendChild(style);

    return element;
}
