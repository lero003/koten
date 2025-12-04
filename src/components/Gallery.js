export function Gallery() {
  const element = document.createElement('section');
  element.className = 'gallery';

  const collections = [
    { title: '古銭', subtitle: 'Ancient Coins', color: '#8c8c8c' },
    { title: '神社', subtitle: 'Shrines', color: '#c5a059' },
    { title: '古典籍', subtitle: 'Classic Books', color: '#1a2a3a' }
  ];

  element.innerHTML = `
    <div class="container">
      <div class="gallery-header reveal">
        <h2 class="section-title">蒐集</h2>
        <p class="section-subtitle">Collections</p>
      </div>
      <div class="gallery-grid">
        ${collections.map((item, index) => `
          <a href="#/collection/${item.id}" class="gallery-item reveal" style="--item-color: ${item.color}; transition-delay: ${index * 0.1}s">
            <div class="gallery-item-content">
              <h3 class="gallery-item-title">${item.title}</h3>
              <p class="gallery-item-subtitle">${item.subtitle}</p>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .gallery {
      padding: var(--spacing-xl) 0;
      background-color: #e8e4da; /* Slightly darker washi */
    }

    .gallery-header {
      text-align: center;
      margin-bottom: var(--spacing-lg);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-md);
    }

    .gallery-item {
      aspect-ratio: 1;
      background-color: var(--color-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition-default), box-shadow var(--transition-default);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.05);
    }

    .gallery-item:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }

    .gallery-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--item-color);
      opacity: 0.1;
      transition: opacity var(--transition-default);
    }

    .gallery-item:hover::before {
      opacity: 0.2;
    }

    .gallery-item-content {
      text-align: center;
      z-index: 1;
    }

    .gallery-item-title {
      font-size: 2rem;
      margin-bottom: var(--spacing-xs);
      color: var(--color-primary);
    }

    .gallery-item-subtitle {
      font-family: var(--font-sans);
      color: var(--color-subtle);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
  `;
  document.head.appendChild(style);

  return element;
}
