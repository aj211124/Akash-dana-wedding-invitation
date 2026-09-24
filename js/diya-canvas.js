/**
 * HEAVENLY LIGHT RAYS & GLOWING CROSS STARDUST ENGINE (CHRISTIAN VIBES)
 * Leaf & petal animations removed as requested.
 */
(function() {
  let canvas, ctx;
  let particles = [];
  let isRunning = false;

  function initDiyaCanvas() {
    canvas = document.getElementById('diyaCanvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    createStardustParticles();
    isRunning = true;
    animate();
  }

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStardustParticles() {
    particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 20), 45);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: 1.5 + Math.random() * 2.5,
        glowRadius: 8 + Math.random() * 16,
        alpha: 0.2 + Math.random() * 0.7,
        speedX: -0.25 + Math.random() * 0.5,
        speedY: -0.35 - Math.random() * 0.5,
        pulse: Math.random() * Math.PI,
        isCrossParticle: Math.random() > 0.7
      });
    }
  }

  function animate() {
    if (!isRunning || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.pulse += 0.025;

      if (p.y < -20) p.y = canvas.height + 20;
      if (p.x < -20) p.x = canvas.width + 20;
      if (p.x > canvas.width + 20) p.x = -20;

      const currentGlow = p.glowRadius + Math.sin(p.pulse) * 4;

      if (p.isCrossParticle) {
        // Draw delicate glowing cross spark
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.strokeStyle = 'rgba(212, 175, 55, ' + p.alpha + ')';
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = currentGlow;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.9)';

        ctx.beginPath();
        ctx.moveTo(0, -6);
        ctx.lineTo(0, 6);
        ctx.moveTo(-4, -2);
        ctx.lineTo(4, -2);
        ctx.stroke();
        ctx.restore();
      } else {
        // Draw soft heavenly stardust point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(243, 223, 155, ' + p.alpha + ')';
        ctx.shadowBlur = currentGlow;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.7)';
        ctx.fill();
      }
    });

    requestAnimationFrame(animate);
  }

  window.DiyaEngine = {
    init: initDiyaCanvas
  };
})();
