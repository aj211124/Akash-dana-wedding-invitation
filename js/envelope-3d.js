/**
 * 3D ROYAL ENVELOPE UNFOLDING CONTROLLER
 */
(function() {
  let sealBtn, envelopeCard, topFlap, letterCard, landingScreen;
  let isOpened = false;

  function init3DEnvelope(onOpenCallback) {
    sealBtn = document.getElementById('waxSealBtn');
    envelopeCard = document.getElementById('envelope3D');
    topFlap = document.getElementById('envelopeTopFlap');
    letterCard = document.getElementById('invitationLetter');
    landingScreen = document.getElementById('landing');

    if (!sealBtn || !envelopeCard) return;

    sealBtn.addEventListener('click', () => {
      openEnvelope(onOpenCallback);
    });
  }

  function openEnvelope(onOpenCallback) {
    if (isOpened) return;
    isOpened = true;

    // 1. Spark explosion effect at seal location
    createSealSparks(sealBtn);

    // 2. Hide wax seal with scale pop
    sealBtn.style.transform = 'scale(1.3)';
    sealBtn.style.opacity = '0';

    setTimeout(() => {
      // 3. Rotate top flap 180deg in 3D
      if (topFlap) topFlap.classList.add('open');
      
      // 4. Slide letter card upwards out of pocket
      setTimeout(() => {
        if (letterCard) letterCard.classList.add('slide-up');
        
        // 5. Fade out landing envelope and reveal main storybook
        setTimeout(() => {
          if (landingScreen) landingScreen.classList.add('hidden');
          
          if (typeof onOpenCallback === 'function') {
            onOpenCallback();
          }
        }, 900);
      }, 400);
    }, 300);
  }

  function createSealSparks(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 35; i++) {
      const spark = document.createElement('span');
      spark.className = 'seal-spark';
      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 80;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;

      spark.style.left = centerX + 'px';
      spark.style.top = centerY + 'px';
      spark.style.setProperty('--tx', tx + 'px');
      spark.style.setProperty('--ty', ty + 'px');
      spark.style.background = Math.random() > 0.4 ? '#f4e37d' : '#b48831';

      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 800);
    }
  }

  window.Envelope3D = {
    init: init3DEnvelope,
    open: openEnvelope
  };
})();
