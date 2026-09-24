/**
 * ====================================================================
 * MALANKARA CATHOLIC KERALA WEDDING CONFIGURATION FILE
 * ====================================================================
 * Edit ONLY this file to customize your wedding invitation details!
 * No need to edit any HTML, CSS, or JavaScript files.
 * ====================================================================
 */

const WEDDING_DATA = {
  // Page Title & Meta Information
  meta: {
    pageTitle: "Dr. Akash & Dr. Dana | Wedding Invitation",
    ogTitle: "Dr. Akash Daniel Georgi & Dr. Dana Susan Abraham - Wedding Invitation",
    ogDescription: "We cordially invite you to join us to grace the betrothal and wedding ceremony of Dr. Dana Susan Abraham & Dr. Akash Daniel Georgi!",
  },

  // Couple Details & Monogram
  couple: {
    groomName: "Dr. Akash Daniel Georgi",
    brideName: "Dr. Dana Susan Abraham",
    monogram: "A ✝ D",
    groomSubtitle: "Son of Dr. Georgi P Daniel & Seeniamma C Chennattucherry",
    brideSubtitle: "Daughter of Abraham John & Anulekha Philip",
    weddingTagline: "We cordially invite you to join us in celebrating our union",
    landingTitle: "Marriage Invitation",
    landingSubtitle: "Tap the golden cross seal to unroll the invitation",
  },

  // Sacred Biblical Marriage Scripture Verse (From Invitation Card)
  bibleVerse: {
    reference: "Isaiah 41:10",
    verse: "“So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.”"
  },

  // Family Lineage Showcase (From Invitation Card)
  familyLineage: {
    title: "TWO FAMILIES, ONE SACRED UNION",
    subtitle: "With the love and blessings of our parents & family",
    groomSide: {
      role: "Groom's Family & Parents",
      headName: "Dr. Georgi P Daniel & Seeniamma C Chennattucherry",
      lineage: "Kollantethu Puthenpurackel, Prakkanam P O, Pathanamthitta - Pin 689643",
      parish: "Sacred Heart Malankara Syrian Catholic Church, Mylapra",
      blessing: "Welcoming our beloved daughter-in-law into our hearts and family."
    },
    brideSide: {
      role: "Bride's Family & Parents",
      headName: "Abraham John & Anulekha Philip",
      lineage: "Pampalimannil PLRA 134, Panachamoodu Lane, Pattom P O, Thiruvananthapuram - 695004",
      parish: "St. Mary's Major Archieparchial Cathedral, Pattom, Thiruvananthapuram",
      blessing: "Entrusting our cherished daughter into a loving family of faith and noble virtues."
    }
  },

  // Arranged Marriage Journey Timeline
  arrangedStory: [
    {
      step: "01",
      title: "Pennu Kanal & Family Fellowship",
      subtitle: "Bound in Faith & Grace",
      description: "Our families met with shared faith, warmth, and prayer. With elder blessings and God's grace, two families chose a shared future."
    },
    {
      step: "02",
      title: "Betrothal Ceremony (Manasammatham)",
      subtitle: "Sunday, 18th October 2026 • 12.00 noon",
      description: "Blessed at St. Mary's Major Archieparchial Cathedral Pattom, followed by Reception at Girideepam Convention Centre, Nalanchira, Thiruvananthapuram."
    },
    {
      step: "03",
      title: "Marriage (Holy Matrimony)",
      subtitle: "Saturday, 26th December 2026",
      description: "Taking our sacred vows, Crowning blessing, tying of the Minnu, and draping of the Manthrakodi at Sacred Heart Malankara Syrian Catholic Church Mylapra."
    }
  ],

  // Sacred Malankara Catholic Wedding Rituals Guide
  traditions: [
    {
      title: "Minnu Kettu (Tying of Sacred Minnu)",
      icon: "✝️",
      meaning: "The groom ties the Minnu (a golden pendant with 7 tiny beads forming a cross) around the bride's neck using 7 threads drawn from the Manthrakodi, symbolizing an unbreakable sacred bond under Christ."
    },
    {
      title: "Manthrakodi (Wedding Sari Veil)",
      icon: "🕊️",
      meaning: "The groom drapes the blessed wedding veil sari (Manthrakodi) over the bride's head, representing his lifelong care, protection, and devotion."
    },
    {
      title: "Service of Crowning & Blessing",
      icon: "👑",
      meaning: "In Malankara Syrian Catholic tradition, the solemn Marriage Service includes the crowning of the bride and groom, ring exchange, and pastoral nuptial blessings."
    }
  ],

  // Save The Date & Countdown Configuration (Marriage: 26 Dec 2026)
  weddingDate: {
    displayDate: "26 December 2026",
    isoDate: "2026-12-26T11:00:00",
    scratchHeading: "Scratch brass plate to reveal Marriage date",
    countdownTitle: "Countdown to Holy Marriage",
  },

  // Background Audio Configuration (Classical Instrumental Hymn)
  audio: {
    enabled: true,
    mp3Url: "https://res.cloudinary.com/dlqmwmkdh/video/upload/v1786694954/T2_l8l115.mp3",
    autoplayOnEnvelopeClick: true
  },

  // Event Schedule Cards (Exact dates & times from invitation card)
  events: [
    {
      title: "Betrothal Ceremony (Manasammatham)",
      date: "Sunday, 18 October 2026",
      time: "12:00 Noon",
      venueName: "St. Mary's Major Archieparchial Cathedral Pattom",
      location: "Pattom, Thiruvananthapuram",
      description: "Solemn Betrothal service blessed at St. Mary's Major Archieparchial Cathedral Pattom.",
      icon: "✝️",
      googleCalendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dr.+Akash+%26+Dr.+Dana+Betrothal+Ceremony&dates=20261018T063000Z/20261018T073000Z&details=Betrothal+Ceremony+at+St.+Marys+Major+Archieparchial+Cathedral+Pattom&location=St.+Marys+Major+Archieparchial+Cathedral+Pattom+Thiruvananthapuram"
    },
    {
      title: "Betrothal Reception",
      date: "Sunday, 18 October 2026",
      time: "12:30 PM",
      venueName: "Girideepam Convention Centre",
      location: "Nalanchira, Thiruvananthapuram",
      description: "Celebratory afternoon reception feast and fellowship at Girideepam Convention Centre.",
      icon: "🥂",
      googleCalendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dr.+Akash+%26+Dr.+Dana+Betrothal+Reception&dates=20261018T070000Z/20261018T110000Z&details=Betrothal+Reception+at+Girideepam+Convention+Centre+Nalanchira+Thiruvananthapuram&location=Girideepam+Convention+Centre+Nalanchira+Thiruvananthapuram"
    },
    {
      title: "Marriage (Holy Matrimony)",
      date: "Saturday, 26 December 2026",
      time: "11:00 AM",
      venueName: "Sacred Heart Malankara Syrian Catholic Church Mylapra",
      location: "Mylapra, Pathanamthitta",
      description: "Solemn Marriage Crowning Service, Minnu Kettu, and Manthrakodi draping.",
      icon: "💍",
      googleCalendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dr.+Akash+%26+Dr.+Dana+Holy+Marriage&dates=20261226T053000Z/20261226T103000Z&details=Marriage+at+Sacred+Heart+Malankara+Syrian+Catholic+Church+Mylapra&location=Sacred+Heart+Malankara+Syrian+Catholic+Church+Mylapra"
    }
  ],

  // Venue Details & Embedded Google Maps (Exact venues from invitation card)
  venues: [
    {
      eyebrow: "Betrothal Service Venue (Oct 18)",
      name: "St. Mary's Major Archieparchial Cathedral Pattom",
      address: "Pattom, Thiruvananthapuram, Kerala 695004",
      embedMapUrl: "https://www.google.com/maps?q=St.+Mary's+Major+Archieparchial+Cathedral+Pattom+Thiruvananthapuram&output=embed",
      googleMapsUrl: "https://maps.app.goo.gl/9zZ293kY7XJ8x9999"
    },
    {
      eyebrow: "Betrothal Reception Venue (Oct 18)",
      name: "Girideepam Convention Centre",
      address: "Nalanchira, Thiruvananthapuram, Kerala 695015",
      embedMapUrl: "https://www.google.com/maps?q=Girideepam+Convention+Centre+Nalanchira+Thiruvananthapuram&output=embed",
      googleMapsUrl: "https://maps.app.goo.gl/uX8x7jT28Y3z6kF97"
    },
    {
      eyebrow: "Marriage Venue (Dec 26)",
      name: "Sacred Heart Malankara Syrian Catholic Church Mylapra",
      address: "Mylapra, Pathanamthitta, Kerala 689671",
      embedMapUrl: "https://www.google.com/maps?q=Sacred+Heart+Malankara+Syrian+Catholic+Church+Mylapra&output=embed",
      googleMapsUrl: "https://maps.app.goo.gl/MylapraChurchMap"
    }
  ],

  // RSVP Modal & Contact Settings
  rsvp: {
    enabled: true,
    contactNumber: "+91 9537934186",
    whatsappNumber: "919537934186",
    joiningInvitation: "Ajay John Abraham",
    tagline: "Your presence is the best present",
    closingTitle: "Joining the Invitation",
    closingCouple: "Ajay John Abraham",
    footerSignature: "An Inviata Experience",
    instagramUrl: "https://instagram.com/inviata.in"
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.WEDDING_DATA = WEDDING_DATA;
}
