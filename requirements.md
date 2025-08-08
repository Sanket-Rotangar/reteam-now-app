# 📝 Employee Engagement App – Requirements Specification

## ✅ 1. Authentication & Entry Workflow   

- Splash Screen
  - Shows logo or welcome animation on app start.
  make this screen visually appealing with a modern design. 

-   Onboarding Carousel
  - Educates new users about app features in a swipeable format.

-   Authentication Flow
  - Email/Password Login
  - Signup for new users
  - Forgot Password with recovery email
  - Once authenticated → User is redirected to **AppStack** (Main Application Area)

---

## 🧭 2. Main Application Navigation (AppStack)

### Navigation Layout

- **Bottom Tab Navigator**
  - `HomeTab`
  - `AttendanceTab`
  - `FunZoneTab`
  - `SettingsTab`

- **Drawer Navigator** (Accessible via Hamburger Menu)
  - Profile
  - Leaderboard
  - Logout
  - Admin Panel (if user is admin)

---

## 🏠 3. Dashboard Module

- [ ] Home Screen
  - Displays a greeting based on time of day (Morning/Afternoon/Evening)
  - Attendance summary (Total Days, Present, Absent)
  - Announcements section
  - Fun Zone performance summary

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


## 👤 7. Profile & Settings

- [ ] View/Edit Profile Info
- [ ] Change Password
- [ ] App Preferences (Theme, Notifications, etc.)
- [ ] Logout

---

keep a consistent color scheme across the app with modern UI components. Use a primary color of #6366F1, secondary color of #EC4899, and success color of #10B981.

keep proper config files for the ui and colors, so that they can be easily modified in the future.

keep the codebase clean and maintainable with detailed comments and documentation.

keep the header and footer components consistent across all screens.
