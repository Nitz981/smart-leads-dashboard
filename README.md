# Smart Leads Dashboard 🚀

A modern Full-Stack MERN Lead Management Dashboard built using React, TypeScript, Node.js, Express.js, MongoDB Atlas, and TailwindCSS.

This project was developed as part of a Full Stack Internship Assignment to demonstrate practical knowledge of MERN Stack development, REST APIs, MongoDB integration, and modern UI design.

---

# 📌 Project Overview

Smart Leads Dashboard is a CRM-style web application that helps users manage business leads efficiently.

The application allows users to:

- ➕ Add new leads
- 📋 View all leads
- ✏️ Edit leads
- ❌ Delete leads
- 🔍 Search leads
- 🎯 Filter leads by status
- 💾 Store data permanently using MongoDB Atlas
- 🌙 Dark Mode Support

The project follows a clean full-stack architecture with separate frontend and backend folders for better scalability and maintainability.

---

# 📸 Screenshots

## 🖥️ Dashboard UI

<img width="1847" height="848" alt="Screenshot 2026-05-17 152111" src="https://github.com/user-attachments/assets/5566b636-32e3-4688-9bad-c70ef3c1f20c" />

<img width="1852" height="838" alt="Screenshot 2026-05-17 152136" src="https://github.com/user-attachments/assets/dc93e822-027e-40be-9e65-3a87d7c6a471" />

## 🗄️ MongoDB Database

<img width="1773" height="882" alt="Screenshot 2026-05-17 152233" src="https://github.com/user-attachments/assets/1caccdda-83a3-48fe-b2f8-c334abcea6dd" />


---

# 🛠️ Tech Stack

## Frontend

- React.js
- TypeScript
- TailwindCSS
- Axios
- Vite

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose
- dotenv
- cors

---

# ✨ Features

## 📊 Dashboard Features

- CRM Dashboard UI
- Sidebar Navigation
- Statistics Cards
- Responsive Layout
- Dark Mode Toggle

## 🧾 Lead Management Features

- Add Leads
- View Leads
- Edit Leads
- Delete Leads
- Search Leads
- Filter Leads by Status

## ✅ Validation

### Frontend Validation

- Required Field Validation
- Email Format Validation

### Backend Validation

- Mongoose Schema Validation
- Required Field Validation

## 🗄️ Database Features

- MongoDB Atlas Integration
- Mongoose Schema Modeling
- REST API Integration

---

# 📁 Folder Structure

```bash
smart-leads-dashboard/
│
├── screenshots/
│   ├── dashboard.png
│   ├── mongodb.png
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── server.ts
│   ├── .env
│   ├── package.json
│
├── .gitignore
├── package.json
├── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Nitz981/smart-leads-dashboard.git
```

---

## 2️⃣ Open Project

```bash
cd smart-leads-dashboard
```

---

# 🎨 Frontend Setup

## Install Dependencies

```bash
cd frontend
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# ⚡ Backend Setup

## Install Dependencies

```bash
cd backend
npm install
```

## Create .env File

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Run Backend

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔗 API Endpoints

## Get All Leads

```http
GET /api/leads
```

## Add Lead

```http
POST /api/leads
```

## Delete Lead

```http
DELETE /api/leads/:id
```

---

# 🧩 Database Schema

```ts
interface Lead {
  name: string;
  email: string;
  status: string;
  source: string;
}
```

---

# 🧪 Validation Implemented

## Frontend Validation

- Empty field validation
- Valid email format checking

## Backend Validation

- Mongoose schema validation
- Required field validation

---

# 🚀 Development Process

1. Created frontend using React + TypeScript
2. Configured TailwindCSS
3. Built Express backend using TypeScript
4. Connected MongoDB Atlas
5. Developed REST APIs
6. Created Lead Schema using Mongoose
7. Connected frontend with backend using Axios
8. Implemented CRUD operations
9. Added validations
10. Uploaded project to GitHub

---

# ⚠️ Challenges Faced

- MongoDB Atlas connection issues
- GitHub repository configuration
- TypeScript import issues
- .gitignore configuration
- API integration debugging

---

# 📚 Learning Outcomes

Through this project, I learned:

- Full-Stack MERN Development
- TypeScript Integration
- MongoDB Atlas Configuration
- REST API Development
- CRUD Operations
- Git & GitHub Workflow
- TailwindCSS Styling
- Project Architecture & Folder Structure

---

# 🔮 Future Improvements

- 🔐 Authentication System
- ✏️ Complete Lead Update API
- 📈 Charts & Analytics
- ☁️ Deployment
- 🎯 Advanced Filters
- 📄 Pagination
- 👥 Role-Based Access Control

---

# 👨‍💻 Author

## Nitish Kumar 

Full Stack Developer (Learning MERN Stack)

### GitHub Profile

https://github.com/Nitz981

### Project Repository

https://github.com/Nitz981/smart-leads-dashboard

---

# 📝 Assignment Note

This project was developed as part of a Full Stack Internship Assignment using the MERN Stack with TypeScript.

The project focuses on:

- Clean Architecture
- CRUD Operations
- Database Integration
- REST API Development
- Scalable Development Practices
