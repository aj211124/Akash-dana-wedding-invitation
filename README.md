# 💍 Wedding Invitation Static Website

A luxury, interactive static wedding invitation website created for **Avinash & Pravitha**.

---

## 🌟 Key Features

1. **Interactive Opening Envelope**: Tap the royal envelope with floating motion to unseal the invitation with ambient music.
2. **Gold Foil Scratch Card**: Touch or drag to scratch off the gold metallic overlay and reveal the wedding date with a confetti burst.
3. **Live Countdown Timer**: Real-time ticker counting down Days, Hours, Minutes, and Seconds until the wedding.
4. **Event Schedule & Google Calendar Integration**: Elegant schedule cards with 1-click "Add to Google Calendar" buttons.
5. **Interactive Maps**: Embedded Google Maps and direct navigation links.
6. **Floating Ambient Music Player**: Plays background romantic music with a floating play/pause control button.
7. **RSVP & Guestbook Modal**: Guests can confirm attendance, guest count, and send warm wishes via WhatsApp or save locally.
8. **100% Mobile & Desktop Responsive**: Looks like a native mobile app screen centered on desktop displays and expands seamlessly on smartphones and tablets.

---

## ✏️ How to Edit Your Details (Zero Coding Required!)

You **NEVER** need to edit any HTML, CSS, or JavaScript code!

All details are stored in a single, simple configuration file at the root of the project:
`wedding-data.js`

### Step-by-Step Instructions:

1. Open `wedding-data.js` in any text editor.
2. Simply edit the text inside quotes:
   - **Groom & Bride Names**: Change `"Avinash"` and `"Pravitha"`.
   - **Wedding Date & Countdown**: Change `displayDate` and `isoDate` (e.g. `"2026-09-13T10:30:00"`).
   - **Events & Times**: Update ceremony times, reception times, dress codes, or add new events to the `events` array.
   - **Venues & Google Maps**: Change venue names, addresses, and Google Maps links under `venues`.
   - **Background Music**: Change `mp3Url` to any song link you prefer.
   - **RSVP Contact**: Update phone and WhatsApp numbers under `rsvp`.
3. Save the file and reload `index.html` in your browser!

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or host a local dev server using Node.js or Python:

```bash
# Using Python:
python3 -m http.server 8080

# Or using npx serve:
npx serve .
```

Then visit `http://localhost:8080` in your browser or phone!
