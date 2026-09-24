/**
 * Live Wedding Countdown Component
 */
(function() {
  let countdownInterval = null;
  let countdownStarted = false;

  function startCountdown(isoDateString) {
    if (countdownStarted) return;
    countdownStarted = true;

    const countdownWrap = document.getElementById('countdownWrap');
    const countdownEl = document.getElementById('countdown');
    
    if (countdownWrap) {
      countdownWrap.classList.add('revealed');
    }

    if (!countdownEl || !isoDateString) return;

    const targetDate = new Date(isoDateString).getTime();

    function updateTimer() {
      const now = new Date().getTime();
      let diff = targetDate - now;

      if (diff < 0) diff = 0;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      countdownEl.innerHTML = `
        <div class="time-box">
          <span class="num">${days}</span>
          <span class="label">Days</span>
        </div>
        <div class="time-box">
          <span class="num">${hours}</span>
          <span class="label">Hours</span>
        </div>
        <div class="time-box">
          <span class="num">${minutes}</span>
          <span class="label">Mins</span>
        </div>
        <div class="time-box">
          <span class="num">${seconds}</span>
          <span class="label">Secs</span>
        </div>
      `;
    }

    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
  }

  window.WeddingCountdown = {
    start: startCountdown
  };
})();
