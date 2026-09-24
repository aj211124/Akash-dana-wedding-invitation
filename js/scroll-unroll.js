/**
 * 3D ROYAL SILK SCROLL (FARMAN / PATRIKA) UNROLLING CONTROLLER
 */
(function() {
  let ribbonBtn, scrollBody, topHandle, bottomHandle, landingScreen;
  let isUnrolled = false;

  function initRoyalScroll(onOpenCallback) {
    ribbonBtn = document.getElementById('ribbonSealBtn');
    scrollBody = document.getElementById('scrollParchment');
    topHandle = document.getElementById('scrollTopHandle');
    bottomHandle = document.getElementById('scrollBottomHandle');
    landingScreen = document.getElementById('landing');

    if (!ribbonBtn || !scrollBody) return;

    ribbonBtn.addEventListener('click', () => {
      unrollScroll(onOpenCallback);
    });
  }

  function unrollScroll(onOpenCallback) {
    if (isUnrolled) return;
    isUnrolled = true;

    // 1. Spark explosion effect at ribbon location
    createGoldSparks(ribbonBtn);

    // 2. Hide ribbon seal button
    ribbonBtn.style.transform = 'translate(-50%, -50%) scale(1.3)';
    ribbonBtn.style.opacity = '0';

    setTimeout(() => {
      // 3. Unroll parchment scroll vertically
      if (scrollBody) scrollBody.classList.add('unrolled');
      if (bottomHandle) bottomHandle.classList.add('unrolled');

      // 4. Reveal invitation content & fade out landing screen
      setTimeout(() => {
        if (landingScreen) landingScreen.classList.add('hidden');

        if (typeof onOpenCallback === 'function') {
          onOpenCallback();
        }
      }, 1000);
    }, 300);
  }

  function createGoldSparks(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 40; i++) {
      const spark = document.createElement('span');
      spark.className = 'royal-spark';
      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 90;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;

      spark.style.left = centerX + 'px';
      spark.style.top = centerY + 'px';
      spark.style.setProperty('--tx', tx + 'px');
      spark.style.setProperty('--ty', ty + 'px');
      spark.style.background = Math.random() > 0.3 ? '#e5c158' : '#8b1e2d';

      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 850);
    }
  }

  window.RoyalScroll = {
    init: initRoyalScroll,
    unroll: unrollScroll
  };
})();
