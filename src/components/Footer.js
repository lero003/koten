export function Footer() {
    const element = document.createElement('footer');
    element.className = 'footer';

    element.innerHTML = `
    <div class="container">
      <div class="footer-content">
        <p class="copyright">&copy; 2025 Kotenbu. All rights reserved.</p>
        <div class="social-links">
          <a href="https://note.com/aoikekeke" target="_blank" rel="noopener noreferrer">Note</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </div>
  `;

    const style = document.createElement('style');
    style.textContent = `
    .footer {
      padding: var(--spacing-md) 0;
      background-color: var(--color-primary);
      color: var(--color-bg);
      font-size: 0.9rem;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .social-links {
      display: flex;
      gap: var(--spacing-md);
    }

    .social-links a {
      opacity: 0.7;
    }

    .social-links a:hover {
      opacity: 1;
      color: var(--color-accent);
    }
  `;
    document.head.appendChild(style);

    return element;
}
