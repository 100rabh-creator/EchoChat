EchoChat – Real-Time MERN Chat Application

EchoChat is a fully functional **real-time chat application** built using the **MERN stack** with **Socket.io**, **JWT authentication**, secure APIs, and a clean **React** UI.

---

## Features

###  Authentication
- JWT-based login & signup
- Password hashing using bcrypt
- Protected backend routes

###  User Features
- Search registered users
- Real-time 1-to-1 chat
- Persistent chat history
- Online/offline indicators (via sockets)

###  Messaging
- Real-time messaging through Socket.io
- Auto-scroll on new messages
- Sender/Receiver UI separation

---

##  Tech Stack Overview

### **Frontend**
- React + Vite
- Context API (Auth + Socket)
- Axios
- Socket.io-client
- CSS / Custom styling

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcryptjs
- Socket.io
- dotenv

---

##  Project Folder Structure

### Backend
```
backend/
└── src/
    ├── controllers
    ├── models
    ├── middleware
    ├── routes
    ├── lib
    └── index.js
```

### Frontend
```
frontend/
└── src/
    ├── components
    ├── pages
    ├── context
    ├── services
    ├── utils
    └── App.jsx
```

---

##  API Endpoints

### Auth
- POST /auth/register
- POST /auth/login

### Users
- GET /user/search?query=
- GET /user/me

### Messages
- POST /message/send
- GET /message/:receiverId

---

##  Real-Time Socket Flow

1. User connects → joins room using their userId  
2. Sender emits `send_message`  
3. Server receives → forwards to receiver room  
4. Receiver UI updates instantly  

---

## ▶ How to Run

### Backend
```
cd backend
npm install
npm start
```



### Frontend
```
cd frontend
npm install
npm run dev
```

---

##  Conclusion
EchoChat is a complete MERN real-time chat app showcasing:
- WebSockets  
- Authentication  
- REST APIs  
- React frontend patterns  

