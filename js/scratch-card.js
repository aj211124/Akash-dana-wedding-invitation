/**
 * Interactive Gold Scratch Card & Confetti FX
 */
(function() {
  let scratchCard, canvas, ctx, overlay;
  let drawing = false;
  let scratchDone = false;
  let onRevealCallback = null;

  function initScratchCard(onReveal) {
    onRevealCallback = onReveal;
    scratchCard = document.getElementById('scratchCard');
    canvas = document.getElementById('scratchCanvas');
    overlay = document.getElementById('scratchOverlay');

    if (!scratchCard || !canvas) return;

    ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mouse & Touch events
    canvas.addEventListener('mousedown', onStart);
    canvas.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);

    canvas.addEventListener('touchstart', onStart, { passive: false });
    canvas.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);
    
    // Double tap or click fallback to reveal
    canvas.addEventListener('dblclick', revealScratch);
  }

  function resizeCanvas() {
    if (!scratchCard || !canvas || scratchDone) return;
    const rect = scratchCard.getBoundingClientRect();
    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
    
    // Create Metallic Gold Foil Gradient
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, '#d7ba77');
    grad.addColorStop(0.3, '#f2dc9f');
    grad.addColorStop(0.65, '#b48831');
    grad.addColorStop(1, '#e5ca8a');
    
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    // Add subtle texture sparkles on foil
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * rect.width, Math.random() * rect.height, 8 + Math.random() * 24, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Switch to erase mode
    ctx.globalCompositeOperation = 'destination-out';
  }

  function pointFromEvent(e) {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e;
    return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
  }

  function scratchAt(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 32, 0, Math.PI * 2);
    ctx.fill();
  }

  let lastPoint = null;

  function scratchLine(from, to) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const distance = Math.hypot(dx, dy);
    const steps = Math.max(1, Math.ceil(distance / 8));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      scratchAt(from.x + dx * t, from.y + dy * t);
    }
  }

  function checkScratchProgress() {
    if (scratchDone) return;
    
    const sampleCanvas = document.createElement('canvas');
    sampleCanvas.width = 40;
    sampleCanvas.height = 24;
    const sctx = sampleCanvas.getContext('2d');
    sctx.drawImage(canvas, 0, 0, sampleCanvas.width, sampleCanvas.height);
    
    const data = sctx.getImageData(0, 0, sampleCanvas.width, sampleCanvas.height).data;
    let transparent = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 70) transparent++;
    }
    const ratio = transparent / (sampleCanvas.width * sampleCanvas.height);
    if (ratio > 0.22) {
      revealScratch();
    }
  }

  function revealScratch() {
    if (scratchDone) return;
    scratchDone = true;
    
    overlay.style.transition = 'opacity 0.6s ease';
    overlay.style.opacity = '0';
    setTimeout(() => { 
      overlay.style.display = 'none'; 
    }, 600);
    
    burstConfetti();
    if (typeof onRevealCallback === 'function') {
      onRevealCallback();
    }
  }

  function burstConfetti() {
    const confettiContainer = document.getElementById('confetti');
    if (!confettiContainer) return;

    const colors = ['#d7ba77', '#b48831', '#f8d7e4', '#ffd76f', '#8caf7c', '#ffffff'];
    const total = 85;
    
    for (let i = 0; i < total; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = '50%';
      piece.style.top = '40%';
      piece.style.borderRadius = Math.random() > 0.5 ? '2px' : '50%';
      piece.style.setProperty('--x', (Math.random() * 380 - 190) + 'px');
      piece.style.setProperty('--y', (Math.random() * 320 - 60) + 'px');
      piece.style.setProperty('--r', (Math.random() * 900 - 450) + 'deg');
      piece.style.width = (6 + Math.random() * 8) + 'px';
      piece.style.height = (10 + Math.random() * 10) + 'px';
      
      confettiContainer.appendChild(piece);
      setTimeout(() => piece.remove(), 1900);
    }
  }

  function onStart(e) {
    if (scratchDone) return;
    drawing = true;
    const p = pointFromEvent(e);
    lastPoint = p;
    scratchAt(p.x, p.y);
    checkScratchProgress();
    if (e.cancelable) e.preventDefault();
  }

  function onMove(e) {
    if (!drawing || scratchDone) return;
    const p = pointFromEvent(e);
    if (lastPoint) scratchLine(lastPoint, p);
    else scratchAt(p.x, p.y);
    lastPoint = p;
    checkScratchProgress();
    if (e.cancelable) e.preventDefault();
  }

  function onEnd() {
    drawing = false;
    lastPoint = null;
  }

  window.ScratchCard = {
    init: initScratchCard,
    reveal: revealScratch
  };
})();
