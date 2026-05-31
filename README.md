# 🎓 Online Learning & Course Recommendation Platform

A full-stack MERN application that enables learners to discover courses, receive personalized recommendations, enroll in courses, and track their learning progress through an interactive dashboard.

---

## 📌 Project Overview

The Online Learning & Course Recommendation Platform is an EdTech web application designed to help learners find relevant courses based on their interests and skills.

The platform provides:

* User Authentication (Register/Login)
* Course Catalog Management
* Personalized Course Recommendations
* Course Enrollment
* Progress Tracking
* Learner Dashboard
* Secure JWT Authentication
* RESTful API Architecture

This project demonstrates Full Stack Development using the MERN Stack and showcases practical implementation of recommendation system logic.

---

## 🚀 Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Persistent Login Session

### Course Management

* Browse Available Courses
* View Course Details
* Course Categories
* Course Tags and Skills

### Recommendation Engine

* Skill-based Recommendations
* Interest-based Recommendations
* Category Matching
* Tag Matching
* Excludes Already Enrolled Courses

### Enrollment System

* Enroll in Courses
* Prevent Duplicate Enrollment
* Enrollment History

### Progress Tracking

* Track Learning Progress
* Progress Percentage Updates
* Course Completion Status

### Dashboard

* Total Courses
* Enrolled Courses
* Completed Courses
* Recommended Courses

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Tokens)
* bcryptjs

### Development Tools

* VS Code
* Git
* GitHub
* Postman
* MongoDB Compass

---

## 🏗 System Architecture

User
↓
React Frontend
↓
Axios API Requests
↓
Express Backend
↓
MongoDB Database

Recommendation Engine
↓
Skills + Interests + Tags Matching

---

## 📂 Project Structure

Online-Learning-Course-Recommendation-Platform/

├── client/
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── server/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── seed/
│ ├── .env
│ ├── server.js
│ └── package.json
│
├── README.md
├── .gitignore
└── .env.example

---

## 🗄 Database Collections

### Users

```json
{
  "_id": "...",
  "name": "Sumedha",
  "email": "sumedha@gmail.com",
  "password": "hashedPassword",
  "skills": ["JavaScript"],
  "interests": ["React", "AI"]
}
```

### Courses

```json
{
  "_id": "...",
  "title": "React Masterclass",
  "description": "Complete React Course",
  "category": "Web Development",
  "tags": ["React", "JavaScript"],
  "instructor": "John Doe"
}
```

### Enrollments

```json
{
  "_id": "...",
  "user": "...",
  "course": "..."
}
```

### Progress

```json
{
  "_id": "...",
  "user": "...",
  "course": "...",
  "progressPercentage": 40,
  "completed": false
}
```

---

## 🧠 Recommendation Logic

The recommendation engine calculates recommendations using:

### Interest Matching

Example:

User Interest:

* React

Course Tags:

* React
* JavaScript

Recommendation Score +2

### Skill Matching

Example:

User Skill:

* JavaScript

Course Tags:

* JavaScript
* React

Recommendation Score +2

### Category Matching

Example:

User Interest:

* AI

Course Category:

* AI

Recommendation Score +1

### Enrollment Filtering

Already enrolled courses are excluded from recommendations.

---

## 🌐 API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile

### Courses

GET /api/courses

GET /api/courses/:id

### Enrollments

POST /api/enrollments/:courseId

GET /api/enrollments/my

### Recommendations

GET /api/recommendations

### Progress

GET /api/progress/my

PUT /api/progress/:id

---

## ⚙️ Environment Variables

Create a .env file inside the server folder.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/learning_platform

JWT_SECRET=your_secret_key_here
```

---

## 📥 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/online-learning-course-recommendation-platform.git
```

### Backend Setup

```bash
cd server

npm install

npm run dev
```

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## ▶ Running the Project

Backend:

```bash
npm run dev
```

Frontend:

```bash
npm run dev
```

Application:

```text
Frontend:
http://localhost:5173

Backend:
http://localhost:5000
```

---

## 🎯 Learning Outcomes

Through this project, I learned:

* MERN Stack Development
* REST API Design
* JWT Authentication
* MongoDB Schema Design
* React Routing
* State Management
* Recommendation System Logic
* Git & GitHub Workflow
* Full Stack Application Deployment

---

## 🔮 Future Enhancements

* AI-powered Recommendations
* Course Rating System
* Admin Dashboard
* Certificate Generation
* Payment Gateway Integration
* Video-based Learning Modules
* Email Notifications

---

## 👨‍💻 Author

Sumedha N

Full Stack Development Project

Built using MERN Stack.
