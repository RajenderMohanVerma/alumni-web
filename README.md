# 🎓 Alumni Connection Network App

A comprehensive, professional Flask-based Alumni Management System with modern dynamic UI, real-time messaging, and Instagram-style connection system. Connect students, alumni, and faculty in one unified platform.

---

## 🚀 Recent & Featured Updates (2026)

### 📧 Real-Time Messaging System
- **Public & Private Chat**: WebSocket-based (Flask-SocketIO) for instant updates.
- **Admin Control**: Global lock/unlock for public messaging with message moderation.
- **1-to-1 Private Chat**: Secure messaging with typing indicators and read receipts.
- **WhatsApp Integration**: Direct "💬 WhatsApp" buttons on profiles for seamless external connection.

### 🧠 Smart Recommendation System (Rule-Based)
- **Profile Matching**: Suggests relevant users based on branch, skills, domain, and city.
- **Role-Based Suggestions**: Smartly recommends Alumni to Students and Students to Alumni.
- **Dynamic Scoring**: Uses a score-based priority system (+5 for branch/skills, +3 for domain, +2 for city).
- **One-Click Connect**: Integration with the connection system directly from recommendation cards.

### 📧 Reliable Communication System
- **Gmail SMTP Integration**: High-reliability email delivery for OTPs and notifications using Gmail App Passwords (`smtp.gmail.com`).
- **Professional OTP Redesign**: Premium glassmorphic verification page with a 2-minute (120s) countdown bar and automatic backspace/focus handling.
- **Smart Registration**: Added conflict resolution for existing email records to prevent `UNIQUE constraint` errors.

### 💼 Career Board & Job Ecosystem (v2.0 Overhaul)
- **Comprehensive Recruitment Tracking**: Added 20+ new professional fields including Work Mode, Eligibility (CGPA/Batch), CTC Range, and Selection Stages.
- **Advanced Admin UI**: Modular 11-section "Add/Edit Job" interface with interactive design and dynamic "Other" field logic.
- **Enhanced Data Management**: Full support for corporate logos, company websites, and automated recruitment lifecycle status (Open/Closed/Expired).
- **Jobs Matrix Dashboard**: High-density management interface for Admins with real-time status toggling and advanced filtering.
- **Recruitment Intel**: Optimized metadata for the Smart Recommendation engine.

### 🎨 UI/UX Excellence
- **Global Responsiveness**: Fully optimized for Laptop, Tablet, and Mobile.
  - Form split layouts stack vertically on small screens.
  - Dashboard grids adapt from multi-column to single-column automatically.
  - Hero sections and font sizes scale gracefully for readability on all devices.
- **High-Performance Counters**: Stabilized numerical counters with persistent `dataset` guards to prevent re-triggering during scroll-up.
- **Toast Notifications**: Interactive notification system in `base.html` with a 5-second auto-dismiss timeout.
- **Premium Aesthetics**: Liquid wave transitions, 3D interactive tilt effects (Tilt.js), and animated mesh backgrounds.
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

### 🧠 Rule-Based Recommendations
- **Scoring Engine**:
  - Same Branch: **+5 Points**
  - Skill Overlap: **+5 Points per match**
  - Same Domain: **+3 Points**
  - Same City: **+2 Points**
- **Smart Filtering**: Excludes already connected users, self, and pending requests.
- **Top 5 Limit**: Shows the most relevant connections to keep the UI clean.

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
# Migrate to Recommendation System schema
python migrate_db.py
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

- **[RECOMMENDATIONS.md](file:///d:/RajenderMohan_BCA/BCA_Major_Project/dbit-alumni-hub/RECOMMENDATIONS.md)**: Detailed technical documentation for the scoring engine and AI roadmap.

---

## 📁 Project Architecture

```
dbit-alumni-hub/
├── database/            # DB Helpers (messaging_db.py, etc.)
├── models/              # Core Logic (recommendation.py, etc.)
├── routes/              # API & Page Routes (messaging, social, recommendation)
├── static/              # Assets (JS, CSS, Images)
├── templates/           # Jinja2 Layouts
├── app.py               # Main Application Entry (SocketIO)
├── db_utils.py          # Database connection utility
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

---

## 🧠 Smart Recommendation System (Architecture & Logic)

The DBIT Alumni Hub features a multi-tiered recommendation engine designed for high professional relevance.

### **1. Rule-Based Scoring Engine**
The platform uses a deterministic scoring system (+5 to +2 points) based on profile similarity:
- **Branch Match (+5)**: Students/Alumni from the same department.
- **Skill Overlap (+5 per skill)**: Direct technical compatibility.
- **Mutual Connections (+2 per connection)**: Social graph proximity (Collaborative Filtering).
- **Domain Match (+3)**: Shared professional fields (e.g., AI, Web Dev).
- **City Match (+2)**: Geographic proximity for offline networking.

### **2. AI Semantic Matching (In-Progress)**
We use **SentenceTransformer (all-MiniLM-L6-v2)** to calculate cosine similarity between bios and interests. This allows the system to understand that a student interested in "UI Design" is a match for a "Product Designer" mentor, even without direct keyword matches.

### **3. Data Infrastructure**
The system relies on structured metadata from the `Users` table: `branch`, `skills`, `current_domain`, `interests`, and `city`. Logic is centralized in `models/recommendation.py` for maximum performance.

---

## 💼 Career Board & Job Matching Ecosystem

The platform features a robust Job Board designed to bridge the gap between Alumni professional networks and Student career aspirations.

### **Functional Components**
1.  **Job Posting Hub (Alumni)**: A secure form capturing title, company, description, and required skill tags.
2.  **Recommendation Grid (Student)**: A personalized view highlighting jobs matching user skills.
3.  **Job-to-Student Scoring**: 
    - **Skill Match**: Set-intersection analysis on `required_skills` vs `user_skills`.
    - **Semantic Boost**: AI matching between Student bio and Job description.

---

**Status**: ✅ Production Ready | **Version**: 3.0 | **Last Updated**: February 19, 2026
