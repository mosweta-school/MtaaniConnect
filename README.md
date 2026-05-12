## 🌍 LocalConnect – Location-Based Event Discovery System
### 📌 Project Overview

LocalConnect is a web-based platform that allows users to create, manage, and discover events happening within their immediate locality using GPS-based location detection.

The system connects event organizers with nearby audiences and provides an admin dashboard for monitoring platform activity and usage analytics.

## 🚨 Problem Statement

Event information is often scattered across different platforms, making it difficult for users to discover relevant events happening nearby. As a result, many local events suffer from low visibility and poor attendance.

Additionally, there is no centralized system that allows users to easily create, manage, and discover events based on their real-time location.

## 💡 Proposed Solution

LocalConnect solves this problem by providing:

- GPS-based event discovery
- Event creation and management system
- Role-based authentication (User & Admin)
- Admin dashboard for analytics and monitoring

Users can see events happening near them and event organizers can easily publish and manage events.

## 🎯 Key Features (MVP)
### 👤 Authentication
- User registration & login
- JWT-based authentication
- Role-based access (User / Admin)
### 📅 Event Management (CRUD)
- Create events
- View events
- Update events
- Delete events
### 📍 Location-Based Discovery
- Detect user location using GPS
- Show nearby events based on distance
- Filter events by category/location
### 🧑‍💼 Admin Dashboard
- View total users
- View total events
- Monitor event activity
- View platform statistics
### 🔎 Search & Filtering
- Search events by name
- Filter by category (Tech, Music, Sports, etc.)
### 🧑‍💻 User Roles
#### 👤 User (Event Organizer / Attendee)
- Create and manage events
- View nearby events
- Search and filter events
- Manage personal event listings
#### 🛡️ Admin
- View all users and events
- Delete inappropriate content
- Monitor system usage
- View analytics dashboard

## 🏗️ System Architecture
```bash
Frontend (React)
        ↓
REST API (Node.js + Express)
        ↓
Database (PostgreSQL / MongoDB)
        ↓
Geolocation Services (Browser API)
```

## 🛠️ Tech Stack
### Frontend
- React.js
- Tailwind CSS
### Backend
- Node.js
- Express.js
- JWT Authentication
- deployed on render (later if time allows)
### Database
- db.json = temporary mock
- PostgreSQL or MongoDB (integrated later if time allows) = production DB
### Location Services
- Browser Geolocation API
- Haversine Distance Formula

- Leaflet.js (later to display map if time allows)

## 📂 Project Structure
```bash
localconnect/
│
├── frontend/
│   ├── src/
│   └── components/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── middleware/
│
├── README.md
└── .gitignore
```
## 🔌 API Endpoints (Sample) (modified as development continues)
### Auth
- POST /api/auth/register
- POST /api/auth/login
### Events
- GET /api/events
- POST /api/events
- PUT /api/events/:id
- DELETE /api/events/:id
### Admin
- GET /api/admin/users
- GET /api/admin/stats

## Screenshots
- will be added once the app is made

## 👥 User Stories
As a User:
- I want to create an event so others can attend
- I want to see events near my location
- I want to filter events by category
- I want to manage my own events
As an Admin:
- I want to monitor users and events
- I want to delete inappropriate content
- I want to view system analytics
## 📊 Future Improvements
- Event ticket booking system
- QR code check-in
- Push notifications
- AI-based event recommendations
- Real-time chat for events
- Social media sharing
## 🚀 Setup Instructions
1. clone the repository
```bash
git clone <repo-url>
```
2. Navigate into the folder
```bash
cd MtaaniConnect
```
3. Backend
```bash
cd backend
npm install
npm run dev
```
4. Frontend
open another terminal
```bash
cd frontend
npm install
npm run dev
```
## 📌 GitHub Workflow
### Branches
- main → production-ready code (final submission)
- development → integration branch
- feature/* → individual features
### How to work
1. A contributor picks a task from Trello
2. They create a feature branch from development:
```bash
git checkout -b feature/feature-name
```
3. They complete their work and commit changes:
```bash
git add .
git commit -m "Add feature description"
git push origin feature/feature-name
```
4. A Pull Request (PR) is created on GitHub:
```bash
Base branch: development
Compare branch: feature/feature-name
```
5. The PR is reviewed by the team / Scrum Master
6. Once approved, it is merged into development
7. Once the entire app works we then push the final working code to main
## 👨‍💻 Team Roles
- Authentication & Backend API
- Event CRUD & Database
- Frontend UI/UX
- GPS & Admin Dashboard
## 📎 Links
- GitHub Repo: https://github.com/mosweta-school/MtaaniConnect
- Figma Design: https://www.figma.com/design/JEcd4J9eSDEr2z0DaTgAXb/Untitled?node-id=0-1&t=9uCWVbddBAYdlWpV-1
- Project Board: https://trello.com/invite/b/6a01f71edc444e05ce519680/ATTI8028084bd2249602e7d73513844be9ec80196F25/mtaaniconnect-location-based-event-discovery-system

## 👷‍♂️Contributors
- Deogracious Moriasi
- David Kamau
- Nina Adora 
- Wayne Kiptoo