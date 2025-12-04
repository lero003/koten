import { collections } from '../data/collections.js';
import { Footer } from '../components/Footer.js';

export async function CollectionPage(params) {
    const container = document.createElement('div');
    container.className = 'page-collection';

    const collectionId = params.id;
    const collection = collections[collectionId];

    if (!collection) {
        container.innerHTML = `
      <div class="container" style="padding-top: 20vh; text-align: center;">
        <h1>Collection Not Found</h1>
        <a href="#/" style="text-decoration: underline;">Return Home</a>
      </div>
    `;
        return container;
    }

    container.innerHTML = `
    <div class="collection-hero" style="background-color: ${collection.color}">
      <div class="container">
        <a href="#/" class="back-link reveal">← Back</a>
        <h1 class="collection-title reveal" style="transition-delay: 0.1s">${collection.title}</h1>
        <p class="collection-subtitle reveal" style="transition-delay: 0.2s">${collection.subtitle}</p>
        <p class="collection-description reveal" style="transition-delay: 0.3s">${collection.description}</p>
      </div>
    </div>
    <div class="container">
      <div class="collection-grid">
        ${collection.items.length > 0 ? collection.items.map((item, index) => `
          <div class="collection-item reveal" style="transition-delay: ${index * 0.1}s">
            <div class="item-placeholder"></div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        `).join('') : '<p class="empty-state reveal">Coming Soon...</p>'}
      </div>
    </div>
  `;

    container.appendChild(Footer());

    const style = document.createElement('style');
    style.textContent = `
    .collection-hero {
      padding: 15vh 0 10vh;
      color: var(--color-bg);
      margin-bottom: var(--spacing-lg);
    }

    .back-link {
      display: inline-block;
      margin-bottom: var(--spacing-md);
      opacity: 0.7;
      font-family: var(--font-sans);
    }

    .back-link:hover {
      opacity: 1;
    }

    .collection-title {
      font-size: 4rem;
      margin-bottom: var(--spacing-xs);
    }

    .collection-subtitle {
      font-family: var(--font-sans);
      text-transform: uppercase;
      letter-spacing: 0.2em;
      opacity: 0.8;
      margin-bottom: var(--spacing-md);
    }

    .collection-description {
      max-width: 600px;
      line-height: 1.8;
      font-size: 1.1rem;
    }

    .collection-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--spacing-md);
      padding-bottom: var(--spacing-xl);
    }

    .collection-item {
      background: #fff;
      padding: var(--spacing-md);
      border-radius: 4px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }

    .item-placeholder {
      width: 100%;
      aspect-ratio: 1;
      background-color: #f0f0f0;
      margin-bottom: var(--spacing-sm);
    }

    .empty-state {
      text-align: center;
      padding: var(--spacing-xl);
      color: var(--color-subtle);
      grid-column: 1 / -1;
    }
  `;
    document.head.appendChild(style);

    return container;
}
