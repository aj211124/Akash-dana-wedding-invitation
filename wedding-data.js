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
    monogram: "A & D",
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
      role: "Groom's Parents",
      headName: "Dr. Georgi P Daniel & Seeniamma C Chennattucherry",
      profession: "Dr. Georgi P Daniel – Retired Professor, Mar Ivanios College, Thiruvananthapuram, and currently Principal, Mar Chrysostom College of Arts & Science, Adoor. | Seeniamma C Chennattucherry – Retired Professor, St. Thomas College, Kozhencherry.",
      lineage: "Kollantethu Puthenpurackel, Prakkanam P O, Pathanamthitta - Pin 689643"
    },
    brideSide: {
      role: "Bride's Parents",
      headName: "Abraham John & Anulekha Philip",
      profession: "Abraham John - Retired Assistant Director, All India Radio | Anulekha Philip - Retired Principal, St. Mary's TTI Training School",
      lineage: "Pampalimannil PLRA 134, Panachamoodu Lane, Pattom P O, Thiruvananthapuram - 695004"
    }
  },

  // Arranged Marriage Journey Timeline with Integrated Events & Calendar Links
  arrangedStory: [
    {
      step: "01",
      title: "Betrothal Ceremony & Reception",
      subtitle: "Sunday, 18th October 2026",
      description: "Solemn Betrothal service at St. Mary's Major Archieparchial Cathedral Pattom, followed by celebratory Reception at Girideepam Convention Centre.",
      icon: "✝️",
      events: [
        {
          eventTitle: "Betrothal Service (Manasammatham)",
          time: "12:00 Noon",
          venue: "St. Mary's Major Archieparchial Cathedral Pattom, Thiruvananthapuram",
          calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dr.+Akash+%26+Dr.+Dana+Betrothal+Ceremony&dates=20261018T063000Z/20261018T073000Z&details=Betrothal+Ceremony+at+St.+Marys+Major+Archieparchial+Cathedral+Pattom&location=St.+Marys+Major+Archieparchial+Cathedral+Pattom+Thiruvananthapuram"
        },
        {
          eventTitle: "Betrothal Reception",
          time: "12:30 PM",
          venue: "Girideepam Convention Centre, Nalanchira, Thiruvananthapuram",
          calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dr.+Akash+%26+Dr.+Dana+Betrothal+Reception&dates=20261018T070000Z/20261018T110000Z&details=Betrothal+Reception+at+Girideepam+Convention+Centre+Nalanchira+Thiruvananthapuram&location=Girideepam+Convention+Centre+Nalanchira+Thiruvananthapuram"
        }
      ]
    },
    {
      step: "02",
      title: "Marriage (Holy Matrimony)",
      subtitle: "Saturday, 26th December 2026",
      description: "Solemn Marriage Crowning Service, Minnu Kettu, and Manthrakodi draping.",
      icon: "💍",
      events: [
        {
          eventTitle: "Holy Marriage Crowning Service",
          time: "11:00 AM",
          venue: "Sacred Heart Malankara Syrian Catholic Church Mylapra, Pathanamthitta",
          calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dr.+Akash+%26+Dr.+Dana+Holy+Marriage&dates=20261226T053000Z/20261226T103000Z&details=Marriage+at+Sacred+Heart+Malankara+Syrian+Catholic+Church+Mylapra&location=Sacred+Heart+Malankara+Syrian+Catholic+Church+Mylapra"
        }
      ]
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
    contactNumber: "+91 8301971036",
    whatsappNumber: "918301971036",
    joiningInvitation: "Ajay John Abraham",
    tagline: "Your presence is the best present",
    closingTitle: "Joining the Invitation",
    closingCouple: "Ajay John Abraham",
    footerSignature: "An AJ Group Experience",
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.WEDDING_DATA = WEDDING_DATA;
}
