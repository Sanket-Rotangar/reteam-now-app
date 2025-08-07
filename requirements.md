# 📝 Employee Engagement App – Requirements Specification

## ✅ 1. Authentication & Entry Workflow  ----> already implemented so skip this part 

- [x] Splash Screen
  - Shows logo or welcome animation on app start.

- [x] Onboarding Carousel
  - Educates new users about app features in a swipeable format.

- [x] Authentication Flow
  - Email/Password Login
  - Signup for new users
  - Forgot Password with recovery email
  - Once authenticated → User is redirected to **AppStack** (Main Application Area)

---

## 🧭 2. Main Application Navigation (AppStack)

### Navigation Layout

- **Bottom Tab Navigator**
  - `DashboardTab`
  - `AttendanceTab`
  - `AnnouncementsTab`
  - `FunZoneTab`
  - `SettingsTab`

- **Drawer Navigator** (Accessible via Hamburger Menu)
  - Profile
  - Leaderboard
  - Rewind Wall
  - Picnic Spot Poll
  - Logout
  - Admin Panel (if user is admin)

---

## 🏠 3. Dashboard Module

- [ ] Central hub for quick access to:
  - Attendance
  - Announcements
  - Fun Zone Highlights

- [ ] Drawer button and greeting section

---

## ⏱️ 4. Attendance & Leave Management

- [ ] Mark Daily Attendance
  - Single-tap check-in/check-out system

- [ ] Leave Application
  - Form to apply for leave
  - Leave types (Sick, Casual, etc.)

- [ ] Leave History
  - Displays all applied leaves with status (approved/pending)

---

## 📣 5. Announcements

- [ ] Admin creates announcements via the web panel

- [ ] Mobile app shows all announcements under this section

- [ ] Optional: Notifications for new announcements

---

## 🎉 6. Fun Zone (Nested Navigation inside Tab)

### 📌 FunZone Navigator (stack or tab inside `FunZoneTab`)

- [ ] **Employee of the Month**
  - Tag fellow employees for good work
  - View weekly/monthly winners on leaderboard

- [ ] **Fitness Tracker Integration**
  - Step Counter sync (via phone sensors or Health APIs)
  - Avatar changes based on activity level:
    - Couch Potato → Casual Walker → Ninja
  - Post workout summaries/updates

- [ ] **Friday Activities**
  - Image upload interface for desk decor or activity challenges
  - Voting system (like/react) by peers
  - Leaderboard of winners

- [ ] **Rewind Wall**
  - Auto-rotating gallery of past fun activities and events
  - Focus on creating memory highlights

- [ ] **Picnic Spot Poll**
  - Admin adds multiple picnic spot options
  - Employees vote on preferred location
  - Map view with past picnic spots and badges

---

## 👤 7. Profile & Settings

- [ ] View/Edit Profile Info
- [ ] Change Password
- [ ] App Preferences (Theme, Notifications, etc.)
- [ ] Logout

---

## 🔐 8. Role-Based Access

- [x] Normal user vs Admin recognition after login

- [ ] Admin-only Features (visible only to admin users):
  - Post Announcements
  - Add Picnic Poll Options
  - View tagged employees in "Employee of the Month"
  - Moderate FunZone content

---

## 🛠️ 9. Misc / Optional

- [ ] Push Notifications Integration
- [ ] Offline Attendance Mode (syncs later)
- [ ] Deep linking support (optional)
- [ ] Badge/Achievement System (Gamified engagement)
