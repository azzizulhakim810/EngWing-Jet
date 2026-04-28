# EngWingJet

## Short Project Description

EngWingJet is a modern English learning platform built with Next.js (App Router), TypeScript, Tailwind CSS, and Firebase Authentication. The platform provides users with access to English learning courses, teacher information, and educational resources through a polished, responsive SaaS-style interface. It includes public pages for browsing courses and platform information, along with protected dashboards for authenticated users to add and manage their own courses.

---

## Project Key Features

### Public Features:

- Premium responsive landing page
- Sticky navigation bar with authentication state
- About Us page
- Our Teachers page
- Contact page
- All Courses page with:
  - Search functionality
  - Category filtering
  - Level filtering
- Dynamic course details pages
- Beautiful educational branding
- Newsletter subscription footer

### Authentication Features:

- Firebase Email/Password Registration
- Firebase Login
- Google Authentication (optional)
- Protected routes
- User session management
- Logout functionality

### Protected Features:

- Add New Course page
- Manage User Courses page
- LocalStorage-based course management
- User-specific course ownership using Firebase UID

### UI/UX Features:

- Mobile responsive design
- Modern SaaS educational layout
- Uniform course cards
- Hover/focus effects
- Premium typography
- Consistent color palette
- Toast notifications
- Clean dashboard interfaces

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Firebase Authentication
- LocalStorage
- React Context API
- Shadcn/UI
- Lucide React Icons

---

## Setup & Installation Instructions

### Clone Repository:

```bash
git clone https://github.com/azzizulhakim810/EngWing-Jet.git
```

### Navigate to Project Folder

```bash
cd engwingjet
```

### Install Required Dependencies

```bash
npm install
```

### Firebase Environment Setup

Create a .env.local file in the root directory:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Start Development Server

```bash
npm run dev
```

### Open in Browser

```bash
http://localhost:3000
```

---

## Route Summary

### Public Routes

- `/` → Landing Page
- `/about` → About Us Page
- `/teachers` → Our Teachers Page
- `/items` → All Courses Page
- `/items/[id]` → Dynamic Course Details Page
- `/contact` → Contact Page
- `/login` → User Login Page
- `/register` → User Registration Page

### Protected Routes

- `/items/add` → Add New Course Page (Authenticated Users Only)
- `/items/manage` → Manage User Courses Page (Authenticated Users Only)

---

## User Workflow

- User visits landing page
- Browses courses publicly
- Registers or logs in
- Adds personal courses
- Courses saved with Firebase UID ownership
- User manages only their own added courses
- Public users can browse all available courses

---

## Future Enhancements

- Full backend integration
- Database storage
- Admin dashboard
- Course enrollment system
- Video-based lessons
- User progress tracking
- Certificate generation
- Payment gateway
- Advanced analytics

---

## Live Demo

Vercel Deployment Link:
[https://eng-wing-jet.vercel.app]

---

## GitHub Repository

GitHub Repository Link:
[https://github.com/azzizulhakim810/EngWing-Jet.git]
