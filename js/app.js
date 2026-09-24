/**
 * MAIN MALANKARA CATHOLIC KERALA WEDDING CONTROLLER
 */
document.addEventListener('DOMContentLoaded', () => {
  const data = window.WEDDING_DATA;
  if (!data) return;

  // 1. Meta & Title
  document.title = data.meta?.pageTitle || 'Wedding Invitation';

  // 2. Populate Landing Scroll Header & Monogram
  const landingMonogram = document.getElementById('landingMonogram');
  const landingScript = document.getElementById('landingScript');
  const landingSub = document.getElementById('landingSub');
  if (landingMonogram) landingMonogram.textContent = data.couple.monogram || 'A ✝ D';
  if (landingScript) landingScript.textContent = data.couple.landingTitle || 'Marriage Invitation';
  if (landingSub) landingSub.textContent = data.couple.landingSubtitle || 'Tap the golden cross seal to unroll the invitation';

  // 3. Hero Section (Clean Name Wrapping so "Dr." stays with Bride's Name!)
  const heroCouplesNames = document.getElementById('heroCouplesNames');
  const heroTagline = document.getElementById('heroTagline');
  if (heroCouplesNames) {
    heroCouplesNames.innerHTML = `
      <span class="name-part groom-part">${data.couple.groomName}</span>
      <span class="name-amp">&amp;</span>
      <span class="name-part bride-part">${data.couple.brideName}</span>
    `;
  }
  if (heroTagline) heroTagline.textContent = data.couple.weddingTagline || '';

  // 4. Sacred Biblical Marriage Scripture Verse
  const bibleVerseText = document.getElementById('bibleVerseText');
  const bibleVerseRef = document.getElementById('bibleVerseRef');
  if (bibleVerseText) bibleVerseText.textContent = data.bibleVerse?.verse || '';
  if (bibleVerseRef) bibleVerseRef.textContent = data.bibleVerse?.reference || '';

  // 5. Two Families Lineage Showcase (Kudumbam & Parish)
  const lineageTitle = document.getElementById('lineageTitle');
  const lineageSubtitle = document.getElementById('lineageSubtitle');
  const groomSideContainer = document.getElementById('groomSideContainer');
  const brideSideContainer = document.getElementById('brideSideContainer');

  if (lineageTitle) lineageTitle.textContent = data.familyLineage?.title || 'TWO FAMILIES, ONE SACRED UNION';
  if (lineageSubtitle) lineageSubtitle.textContent = data.familyLineage?.subtitle || '';

  if (groomSideContainer && data.familyLineage?.groomSide) {
    const g = data.familyLineage.groomSide;
    groomSideContainer.innerHTML = `
      <div class="lineage-card groom-card" data-tilt>
        <div class="royal-crest-icon">✝️</div>
        <div class="lineage-role">${g.role}</div>
        <h3 class="lineage-head">${g.headName}</h3>
        <p class="lineage-house">${g.lineage}</p>
        <p class="lineage-parish">⛪ ${g.parish}</p>
        <p class="lineage-blessing">"${g.blessing}"</p>
      </div>
    `;
  }

  if (brideSideContainer && data.familyLineage?.brideSide) {
    const b = data.familyLineage.brideSide;
    brideSideContainer.innerHTML = `
      <div class="lineage-card bride-card" data-tilt>
        <div class="royal-crest-icon">🕊️</div>
        <div class="lineage-role">${b.role}</div>
        <h3 class="lineage-head">${b.headName}</h3>
        <p class="lineage-house">${b.lineage}</p>
        <p class="lineage-parish">⛪ ${b.parish}</p>
        <p class="lineage-blessing">"${b.blessing}"</p>
      </div>
    `;
  }

  // 6. Arranged Marriage Timeline
  const storyContainer = document.getElementById('storyContainer');
  if (storyContainer && Array.isArray(data.arrangedStory)) {
    storyContainer.innerHTML = data.arrangedStory.map(item => `
      <div class="story-item" data-tilt>
        <div class="story-step-badge">Phase ${item.step}</div>
        <h4 class="story-title">${item.title}</h4>
        <div class="story-subtitle">${item.subtitle}</div>
        <p class="story-desc">${item.description}</p>
      </div>
    `).join('');
  }

  // 7. Sacred Malankara Catholic Traditions & Rituals Guide
  const traditionsContainer = document.getElementById('traditionsContainer');
  if (traditionsContainer && Array.isArray(data.traditions)) {
    traditionsContainer.innerHTML = data.traditions.map(t => `
      <div class="tradition-card" data-tilt>
        <div class="tradition-icon">${t.icon}</div>
        <div class="tradition-content">
          <h4 class="tradition-title">${t.title}</h4>
          <p class="tradition-meaning">${t.meaning}</p>
        </div>
      </div>
    `).join('');
  }

  // 8. Scratch Card & Countdown Text
  const scratchHeading = document.getElementById('scratchHeading');
  const scratchDisplayDate = document.getElementById('scratchDisplayDate');
  const countdownTitle = document.getElementById('countdownTitle');
  if (scratchHeading) scratchHeading.textContent = data.weddingDate.scratchHeading || 'Scratch brass plate to reveal Marriage date';
  if (scratchDisplayDate) scratchDisplayDate.textContent = data.weddingDate.displayDate || '';
  if (countdownTitle) countdownTitle.textContent = data.weddingDate.countdownTitle || 'Countdown to Holy Marriage';

  // 9. Events Schedule Cards
  const eventsContainer = document.getElementById('eventsContainer');
  if (eventsContainer && Array.isArray(data.events)) {
    eventsContainer.innerHTML = data.events.map(evt => `
      <div class="event-card" data-tilt>
        <div class="event-icon-badge">${evt.icon || '💍'}</div>
        <h3 class="event-card-title">${evt.title}</h3>
        <div class="event-meta-item">
          <span>🗓️ <strong>Date:</strong> ${evt.date}</span>
        </div>
        <div class="event-meta-item">
          <span>⏰ <strong>Time:</strong> ${evt.time}</span>
        </div>
        <div class="event-meta-item">
          <span>📍 <strong>Venue:</strong> ${evt.venueName}, ${evt.location}</span>
        </div>
        ${evt.description ? `<p class="event-desc">${evt.description}</p>` : ''}
        ${evt.googleCalendarLink ? `
        <a class="btn-calendar" href="${evt.googleCalendarLink}" target="_blank" rel="noopener">
          📅 Add to Google Calendar
        </a>` : ''}
      </div>
    `).join('');
  }

  // 10. Venues & Maps
  const venuesContainer = document.getElementById('venuesContainer');
  if (venuesContainer && Array.isArray(data.venues)) {
    venuesContainer.innerHTML = data.venues.map(v => `
      <div class="venue-card" data-tilt>
        <div class="eyebrow">${v.eyebrow || 'Venue'}</div>
        <div class="venue-name">${v.name}</div>
        <p class="venue-address">${v.address}</p>
        <div class="map-frame">
          <iframe title="${v.name} map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${v.embedMapUrl}"></iframe>
        </div>
        <a class="map-link" href="${v.googleMapsUrl}" target="_blank" rel="noopener">
          📍 Open ${v.name} in Google Maps
        </a>
      </div>
    `).join('');
  }

  // 11. Footer Closing
  const closingLine1 = document.getElementById('closingLine1');
  const closingLine2 = document.getElementById('closingLine2');
  const closingContact = document.getElementById('closingContact');
  if (closingLine1) closingLine1.textContent = data.rsvp?.closingTitle || 'Joining the Invitation';
  if (closingLine2) closingLine2.textContent = data.rsvp?.closingCouple || 'Ajay John Abraham';
  if (closingContact) closingContact.textContent = data.rsvp?.contactNumber || '';

  // Initialize Engines
  if (window.DiyaEngine) window.DiyaEngine.init();
  if (window.TiltEngine) window.TiltEngine.init();
  if (window.WeddingAudio && data.audio?.enabled) window.WeddingAudio.init(data.audio.mp3Url);
  if (window.WeddingRSVP) window.WeddingRSVP.init();
  if (window.ScratchCard) {
    window.ScratchCard.init(() => {
      if (window.WeddingCountdown && data.weddingDate?.isoDate) {
        window.WeddingCountdown.start(data.weddingDate.isoDate);
      }
    });
  }

  // Initialize Scroll Unrolling
  const storybookWrapper = document.getElementById('invitationStorybook');
  const body = document.body;

  if (window.RoyalScroll) {
    window.RoyalScroll.init(() => {
      body.classList.remove('locked');
      body.classList.add('opened');
      if (storybookWrapper) storybookWrapper.classList.add('active');
      if (window.WeddingAudio && data.audio?.autoplayOnEnvelopeClick) {
        window.WeddingAudio.play();
      }
      initSnapScrollDots();
    });
  }

  // Full-Page Snap Scroll Side Pagination Controller
  function initSnapScrollDots() {
    const sections = document.querySelectorAll('.story-section');
    const dotsContainer = document.getElementById('sidePaginationDots');
    if (!sections.length || !dotsContainer) return;

    dotsContainer.innerHTML = Array.from(sections).map((sec, i) => `
      <button class="page-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to section ${i + 1}"></button>
    `).join('');

    const dots = dotsContainer.querySelectorAll('.page-dot');

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index'));
        if (sections[idx]) {
          sections[idx].scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    const scrollContainer = document.getElementById('invitationStorybook');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', () => {
        let currentIdx = 0;
        sections.forEach((sec, i) => {
          const rect = sec.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
            currentIdx = i;
          }
        });

        dots.forEach((d, i) => {
          d.classList.toggle('active', i === currentIdx);
        });
      });
    }
  }
});
