/**
 * ETHEREAL GOLDEN STARDUST & FIREFLY CANVAS ENGINE
 */
(function() {
  let canvas, ctx;
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let isRunning = false;

  function initStardust() {
    canvas = document.getElementById('stardustCanvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    });

    createParticles();
    isRunning = true;
    animate();
  }

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 15), 60);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: 1 + Math.random() * 2.5,
        color: Math.random() > 0.4 ? 'rgba(244, 227, 125, ' : 'rgba(255, 215, 0, ',
        alpha: 0.2 + Math.random() * 0.7,
        speedX: -0.3 + Math.random() * 0.6,
        speedY: -0.4 - Math.random() * 0.5,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }
  }

  function animate() {
    if (!isRunning || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.01;

      // Wrap boundaries
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;

      // Gentle interactive mouse attraction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 120) {
        p.x -= dx * 0.03;
        p.y -= dy * 0.03;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.max(0.1, Math.min(0.9, p.alpha)) + ')';
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(244, 227, 125, 0.8)';
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  window.StardustEngine = {
    init: initStardust
  };
})();
