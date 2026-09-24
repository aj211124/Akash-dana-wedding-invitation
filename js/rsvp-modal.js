/**
 * Interactive RSVP & Floating Blessing Lantern Controller
 */
(function() {
  let modal, triggerBtn, closeBtn, form;

  function initRSVP() {
    modal = document.getElementById('rsvpModal');
    triggerBtn = document.getElementById('btnRsvpTrigger');
    closeBtn = document.getElementById('rsvpClose');
    form = document.getElementById('rsvpForm');

    if (triggerBtn && modal) {
      triggerBtn.addEventListener('click', openModal);
    }
    if (closeBtn && modal) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    if (form) {
      form.addEventListener('submit', handleSubmit);
    }
  }

  function openModal() {
    if (modal) modal.classList.add('active');
  }

  function closeModal() {
    if (modal) modal.classList.remove('active');
  }

  function spawnBlessingLantern(name, message) {
    const lantern = document.createElement('div');
    lantern.className = 'blessing-lantern';
    lantern.innerHTML = `
      <div class="lantern-light"></div>
      <div class="lantern-text">
        <strong>${name}</strong>
        <p>${message || 'Sent blessings & love!'}</p>
      </div>
    `;

    lantern.style.left = (15 + Math.random() * 70) + 'vw';
    document.body.appendChild(lantern);

    setTimeout(() => {
      lantern.remove();
    }, 8000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('guestName')?.value || 'Guest';
    const status = document.getElementById('attendanceStatus')?.value || 'Attending';
    const count = document.getElementById('guestCount')?.value || '1';
    const message = document.getElementById('guestWishes')?.value || '';

    const rsvpData = {
      name,
      status,
      count,
      message,
      timestamp: new Date().toISOString()
    };

    // Save locally
    try {
      const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      existing.push(rsvpData);
      localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
    } catch(err) {
      console.log('Local storage error:', err);
    }

    // Launch floating blessing lantern FX
    spawnBlessingLantern(name, message);

    // Format WhatsApp message if WhatsApp number configured
    const waNumber = window.WEDDING_DATA?.rsvp?.whatsappNumber;
    if (waNumber) {
      const text = `*RSVP for ${window.WEDDING_DATA?.couple?.groomName} %26 ${window.WEDDING_DATA?.couple?.brideName} Wedding*%0A%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Status:* ${encodeURIComponent(status)}%0A` +
        `*Number of Guests:* ${encodeURIComponent(count)}%0A` +
        (message ? `*Blessings:* ${encodeURIComponent(message)}` : '');

      setTimeout(() => {
        window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
      }, 1000);
    }

    closeModal();
    if (form) form.reset();
  }

  window.WeddingRSVP = {
    init: initRSVP,
    open: openModal,
    close: closeModal
  };
})();
