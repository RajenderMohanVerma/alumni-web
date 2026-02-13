# 🎓 Alumni Connection Network App

A comprehensive, professional Flask-based Alumni Management System with modern dynamic UI, real-time messaging, and Instagram-style connection system. Connect students, alumni, and faculty in one unified platform.

---

## 🚀 Recent & Featured Updates (2026)

### 📧 Real-Time Messaging System
- **Public & Private Chat**: WebSocket-based (Flask-SocketIO) for instant updates.
- **Admin Control**: Global lock/unlock for public messaging with message moderation.
- **1-to-1 Private Chat**: Secure messaging with typing indicators and read receipts.
- **WhatsApp Integration**: Direct "💬 WhatsApp" buttons on profiles for seamless external connection.

### 🛡️ Enhanced Security & Authentication
- **Gmail SMTP Integration**: Reliable email delivery for OTPs and notifications using Gmail App Passwords.
- **Professional OTP Redesign**: Premium glassmorphic verification page (`verify_otp.html`) with a 120s countdown progress bar.
- **Smart Registration**: Robust checks for existing emails with graceful error handling.

### 🎨 UI/UX Excellence
- **Optimized Counters**: High-performance numerical counters on dashboards with persistent guards to prevent re-animation on scroll.
- **Toast Notifications**: Modern auto-dismissing (5s) notifications in `base.html`.
- **Premium Glassmorphism**: Multi-layered blurs, 3D interactive tilt effects (Tilt.js), and liquid wave transitions.
- **Ambient Visuals**: Floating glow orbs, aurora hero effects, and staggered entrance animations.

---

## 🌟 Core Features

### ✨ Multi-Role System
- **Students**: Explore networking, career opportunities, and mentorship.
- **Alumni**: Career tracking, event registration, student mentoring, and industry networking.
- **Faculty**: Academic sharing, guidance, and relationship management.
- **Admin**: Full user management, real-time analytics, and CSV report harvesting.

### 🔗 Connection Request System
- **Instagram-Style**: Send, accept, or reject requests with real-time dashboard updates.
- **Pending Section**: Dedicated area for managing incoming connection requests.

### 📊 Admin Control Center
- **Registration Tracking**: Automatic logging of all user registrations with role-specific meta-data.
- **Advanced Moderation**: Global messaging lock system and user account control.
- **Data Harvesting**: Export role-specific CSV reports with custom timestamps.

---

## 🛠️ Tech Stack

### Backend
- **Framework**: Flask 2.3.2 + Flask-Login
- **Real-Time**: Flask-SocketIO (WebSocket)
- **Database**: SQLite with WAL mode (High concurrency)
- **Security**: Werkzeug (Password hashing), Secure Session Management

### Frontend
- **Design**: Vanilla CSS + Bootstrap 5 (Customized Glassmorphism)
- **Interactive**: Vanilla JS (Fetch API, Async/Await)
- **Physics/Motion**: Vanilla Tilt.js (3D Tilt), CSS Keyframes (60fps)
- **Icons**: FontAwesome 6+

---

## 📋 Prerequisites
- Python 3.7+
- pip
- Git
- Redis (Optional for scaling WebSockets)

---

## 🚀 Quick Start

### 1. Clone & Setup
```bash
git clone <repository-url>
cd "Alumni App/dbit-alumni-hub"
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Initialize Databases
```bash
# Initialize main user database
python app.py  # Initial run creates tables
# Initialize messaging specific tables
python init_messaging_db.py
```

### 4. Configuration (.env)
Create a `.env` file in the root directory:
```env
SECRET_KEY=your_secret_key
MAIL_USERNAME=alumnihub26@gmail.com
MAIL_PASSWORD=jxrp_rghf_qcow_xfne
```

### 5. Run Application
```bash
python app.py
```
Visit `http://localhost:5000`

---

## 📝 Default Admin Credentials
- **EMAIL**: `admindbit195@college.edu`
- **PASSWORD**: `admindbit195@`

---

## 📁 Project Architecture

```
dbit-alumni-hub/
├── database/            # DB Helpers (messaging_db.py, etc.)
├── routes/              # API & Page Routes (messaging, social, connection)
├── static/              # Assets (JS, CSS, Images)
├── templates/           # Jinja2 Layouts
├── app.py               # Main Application Entry (SocketIO)
├── init_messaging_db.py # Messaging DB Setup
└── .env                 # Environment Config
```

---

## 🔒 Security Summary
- ✅ **Password Hashing** - Werkzeug salt-based hashing.
- ✅ **Secure Mail** - TSL/SSL Gmail SMTP integration.
- ✅ **XSS Protection** - Automatic Jinja2 escaping.
- ✅ **Role Access Control** - Protected routes for Admin/Role levels.
- ✅ **Duplicate Prevention** - Unique database constraints.

---

## 📊 Performance Statistics
- **Concurrency**: SQLite WAL mode enabled for simultaneous messaging.
- **Performance**: GPU-accelerated 60fps animations.
- **Load Times**: Optimized asset delivery < 2s.

---

**Status**: ✅ Production Ready | **Version**: 2.5 | **Last Updated**: February 2026
