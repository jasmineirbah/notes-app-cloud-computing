# 📝 Notes App (Express + MySQL + Frontend)

A simple fullstack Notes application using:
- Backend: Node.js (Express.js)
- Database: MySQL (MariaDB on VM / local)
- Frontend: HTML, CSS, JavaScript
- API tested using REST Client / Postman

---

## 🚀 Features

- Create note
- Read all notes
- Update note
- Delete note
- Store data in MySQL database
- Display notes with date

---

## 🧱 Tech Stack

- Express.js
- MySQL / MariaDB
- HTML, CSS, JavaScript
- Fetch API

---

## 📦 Project Structure

project/
backend/
- index.js
- db.js
- routes/
frontend/
- index.html
- style.css
- script.js
notes_db.sql

---

## ⚙️ Setup Backend

### 1. Install dependencies

npm install

### 2. Run server

npm start

Server will run on:
http://localhost:3000

---

## 🗄️ Database Setup

### 1. Create database

CREATE DATABASE notes_db;

### 2. Import SQL file

mysql -u root -p notes_db < notes_db.sql

---

## 🌐 API Endpoints

GET /notes        → Get all notes  
POST /notes       → Create new note  
PUT /notes/:id    → Update note  
DELETE /notes/:id → Delete note  

---

## 🧪 API Testing

API tested using:
- REST Client (VS Code)
- Postman

Example request:

GET http://localhost:3000/notes

POST http://localhost:3000/notes  
Body:
{
  "judul": "Contoh",
  "isi": "Isi catatan"
}

PUT http://localhost:3000/notes/:id

DELETE http://localhost:3000/notes/:id

---

## ⚠️ Notes

- Frontend dijalankan secara lokal (tidak di-deploy)
- Backend berjalan di localhost:3000
- Pastikan database MySQL sudah terhubung dengan backend

---

## 🎯 Status

- CRUD API working
- Database connected
- Frontend integrated
- Tested using REST Client / Postman

---

## 👨‍💻 Author

Your Name