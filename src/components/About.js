export function About() {
    const element = document.createElement('section');
    element.className = 'about';

    element.innerHTML = `
    <div class="container">
      <div class="about-grid">
        <div class="about-header">
          <h2 class="section-title">古典部とは</h2>
          <p class="section-subtitle">About Kotenbu</p>
        </div>
        <div class="about-content">
          <p>
            新しいものは、今までできなかったことができるようになったりします。<br>
            逆に古いものはただ消えていくものです。<br>
            なくなっていくことが悪いことだとは思いません。<br>
            ただ、なくなっていくものにも残したかったものがあるのではないか、<br>
            そしてそこには金銭では測れない価値があるのではないか。
          </p>
          <p>
            どういうものを残したいか、どういうものを愛するか、というのは人それぞれになる。<br>
            でもそういう残したい何かというのは、今で言えば推し活的に、金銭では変えられない魅力がある。
          </p>
          <p>
            自分はなんだろうか。<br>
            古神道や一分銀を見ていると、昔の人がそこに込めた思いや思想というのが一番気になっている。<br>
            そういうものを好奇心に動かされ、探して、見て、触れて。<br>
            残せるものは残したい。なんとなく、これは古典部なのではと思い始めた。
          </p>
          <p class="signature">にゃんこまる@kei</p>
        </div>
      </div>
    </div>
  `;

    const style = document.createElement('style');
    style.textContent = `
    .about {
      padding: var(--spacing-xl) 0;
      background-color: var(--color-bg);
      color: var(--color-text);
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }

    @media (min-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr 2fr;
      }
    }

    .section-title {
      font-size: 2.5rem;
      margin-bottom: var(--spacing-xs);
      color: var(--color-primary);
    }

    .section-subtitle {
      font-family: var(--font-sans);
      color: var(--color-accent);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-size: 0.9rem;
    }

    .about-content p {
      margin-bottom: var(--spacing-md);
      font-size: 1.1rem;
      line-height: 2;
      text-align: justify;
    }

    .signature {
      text-align: right;
      font-style: italic;
      color: var(--color-subtle);
      margin-top: var(--spacing-lg);
    }
  `;
    document.head.appendChild(style);

    return element;
}
