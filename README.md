# ⚽ Chattal Football Club — Management & Matchday Hub

> **The all-in-one grassroots football management system for Chattal FC.**  
> Effortlessly track player registrations, monthly PKR membership dues, online payments (JazzCash / EasyPaisa / Bank Transfer), interactive tactical lineups, one-tap WhatsApp group broadcasts, and high-resolution matchday poster generation.

---

## 🌟 Key Features

### 1. 📊 Executive Club Dashboard
- **Live KPIs**: Total registered players, active squad members, total monthly fees collected (PKR), pending dues, and pending online registrations.
- **Position Distribution**: Goalkeepers (GK), Defenders (DEF), Midfielders (MID), and Attackers (FWD).
- **Official Payment Cards**: 1-click copy for JazzCash, EasyPaisa, and Bank Account details.
- **Next Fixture Card**: Instant overview of the upcoming match with 1-click WhatsApp broadcast.

### 2. 👥 Player & Squad Management
- **Full Player Directory**: Table view and responsive Card Grid view.
- **Position & Fee Filters**: Filter by GK/DEF/MID/FWD, Paid/Unpaid/Pending, Captains, and Roles.
- **1-Click WhatsApp Chat**: Open direct WhatsApp conversation with any player.
- **CSV Squad Export**: Download complete roster data into Excel/CSV.

### 3. 🛡️ Interactive Tactical Pitch & Lineup Builder
- **Dynamic Formations**: Supports `4-3-3`, `4-4-2`, `3-5-2`, `4-2-3-1`, and `7-A-Side` village formats.
- **Interactive Pitch Visualizer**: High-contrast grass pitch with goal markings, penalty areas, and position badges.
- **Substitutes Bench**: Manage reserve players.
- **Export Capabilities**: 
  - Download tactical board as high-definition PNG image.
  - Broadcast starting 11 & substitutes directly to WhatsApp group.

### 4. 💰 Monthly Fees & Online Payment Hub (PKR)
- **Direct Online Payment Integration**:
  - ⚡ **JazzCash** (Account Title & Number)
  - 📱 **EasyPaisa** (Account Title & Number)
  - 🏛️ **Bank Transfer** (Bank Name, Title, and IBAN)
- **Fee Reconciliation**: Track Paid (🟢), Unpaid (🔴), and Pending Verification (🟡) statuses with Transaction ID logging.
- **Automated Individual WhatsApp Reminders**: Send courteous, personalized fee reminders to unpaid players with 1 tap.
- **Group Dues Broadcast**: Send formatted dues list to the village WhatsApp group.

### 5. 📢 WhatsApp Broadcast Studio
- **Pre-formatted Broadcasts with 1-Tap Sharing**:
  - ⚽ **Match Alerts** (Home ground vs Away village, Kickoff & Reporting time, Kit colors, Squad list).
  - ⚠️ **Monthly Fee Reminders** (Pending players list + JazzCash/EasyPaisa transfer details).
  - 🏃 **Practice & Training Notices** (Ground timings, agenda, kit requirements).
  - 🏆 **Match Results & Highlights** (Final score, goalscorers, Man of the Match).
  - 📝 **Custom Announcements** with live smartphone preview.

### 6. 🖼️ Matchday Flyer & Poster Studio
- **High-Definition Graphics**: Generate match posters and squad roster graphics.
- **Design Themes**: Emerald & Gold Luxury, Midnight Champion, Crimson Fire, and Clean White.
- **1-Click PNG Download**: Ready to post on WhatsApp Status, Facebook, and Instagram stories.

### 7. 📝 Public Player Self-Entry Portal
- Dual-mode registration form for village players to submit their entry online, attach JazzCash/EasyPaisa Trx IDs, and await Admin verification.

### 8. 🔒 Offline-First & Data Backup
- Pure Vanilla HTML5, CSS3, and ES6+ JavaScript.
- Zero server dependencies; 100% persistent via `localStorage`.
- Full JSON backup export and restore capabilities.

---

## 🚀 How to Run Locally

1. Open `index.html` in any web browser (Chrome, Firefox, Safari, Edge, Mobile browsers).
2. Or serve using any static server:
   ```bash
   python3 -m http.server 8080
   ```
3. Visit `http://localhost:8080` in your browser.

---

## 🎨 Tech Stack
- **HTML5** & Semantic Markup
- **CSS3** (Custom Properties, Flexbox, Grid, Glassmorphism, Responsive Media Queries)
- **Vanilla JavaScript (ES6+)**
- **html2canvas** (for direct poster and lineup image downloads)
- **Font Awesome 6.5 & Google Fonts (Outfit & Plus Jakarta Sans)**

---
*Built with ❤️ for Chattal Football Club*
