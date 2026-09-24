/**
 * Vinyl Album Audio Visualizer & Sound Controller
 */
(function() {
  let audioEl = null;
  let audioWidget = null;
  let eqBars = null;
  let isPlaying = false;

  function initAudio(mp3Url) {
    if (!mp3Url) return;

    audioEl = document.getElementById('bgMusic');
    if (!audioEl) {
      audioEl = document.createElement('audio');
      audioEl.id = 'bgMusic';
      audioEl.loop = true;
      audioEl.preload = 'auto';
      document.body.appendChild(audioEl);
    }
    audioEl.src = mp3Url;

    audioWidget = document.getElementById('audioWidget');
    eqBars = document.querySelectorAll('.eq-bar');

    if (audioWidget) {
      audioWidget.addEventListener('click', togglePlay);
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        pauseAudio();
      } else if (isPlaying) {
        playAudio();
      }
    });

    window.addEventListener('pagehide', pauseAudio);
    window.addEventListener('beforeunload', pauseAudio);
  }

  function playAudio() {
    if (!audioEl) return;
    audioEl.play().then(() => {
      isPlaying = true;
      if (audioWidget) {
        audioWidget.classList.add('playing');
      }
    }).catch(err => {
      console.log('Audio playback waiting for user interaction:', err);
    });
  }

  function pauseAudio() {
    if (!audioEl) return;
    audioEl.pause();
    if (audioWidget) {
      audioWidget.classList.remove('playing');
    }
  }

  function togglePlay() {
    if (isPlaying) {
      pauseAudio();
      isPlaying = false;
    } else {
      playAudio();
    }
  }

  window.WeddingAudio = {
    init: initAudio,
    play: playAudio,
    pause: pauseAudio,
    toggle: togglePlay
  };
})();
