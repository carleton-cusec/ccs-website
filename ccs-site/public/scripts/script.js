document.addEventListener("DOMContentLoaded", () => {
  // ===== Binary Background =====
  const container = document.getElementById('binary-container');
  if (container) {
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = 0;
    canvas.style.opacity = 0.3; 
    container.appendChild(canvas);

    function resizeCanvas() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const ctx = canvas.getContext('2d');
    const fontSize = 18;
    let columns;
    let drops;

    function setup() {
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height / fontSize;
      }
    }

    function draw() {
      ctx.fillStyle = "#000";
      ctx.globalAlpha = 0.2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      ctx.font = fontSize + "px monospace";
      ctx.fillStyle = "#E91C24";
      for (let i = 0; i < columns; i++) {
        const text = Math.round(Math.random());
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setup();
    setInterval(draw, 50);
    window.addEventListener('resize', () => {
      resizeCanvas();
      setup();
    });
  }

  // ===== Mobile Nav Toggle =====
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isHidden = menu.classList.toggle('hidden');
      toggle.setAttribute('aria-expanded', String(!isHidden));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (!menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});
