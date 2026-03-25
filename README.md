# Real-Time Chat Application

A full-stack real-time chat application built using **Node.js, Express, Socket.IO, and MongoDB**.
This project enables users to communicate instantly with secure authentication and a modern UI.


## Features

*  User Registration & Login (JWT Authentication)
*  Real-time messaging using Socket.IO
*  Online users list
*  Private one-to-one chat
*  Instant message delivery (no refresh)
*  Clean and responsive UI (Tailwind CSS)
*  Logout functionality

##  Tech Stack

**Frontend**

* HTML
* CSS (Tailwind CSS)
* JavaScript

**Backend**

* Node.js
* Express.js

**Real-Time Communication**

* Socket.IO

**Database**

* MongoDB Atlas

**Authentication**

* JWT (JSON Web Token)
* bcrypt (password hashing)

## Project Structure

real-time-chat-app
├── server
│   ├── models/User.js
│   ├── routes/auth.js
│   └── server.js
├── public
│   ├── index.html
│   ├── register.html
│   ├── chat.html
│   └── script.js
└── .env

## Installation & Setup

1.Clone the repository

```bash
git clone https://github.com/Hemasrikanuri/Real-Time-chat-app-using-Socket.io
cd real-time-chat-app
```

2. Install dependencies

```bash
npm install
```

3.Configure environment variables

Create a `.env` file in the root folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Run the server

```bash
node server/server.js
```

5. Open in browser

```
http://localhost:5000
```

##  How to Use

1. Register a new account
2. Login with your credentials
3. Open chat page
4. Select a user from sidebar
5. Start messaging instantly

 For testing, open **two browser tabs** with different users.

## Features Demonstration

* Users appear online dynamically
* Click a user to start private chat
* Messages appear instantly
* Clean chat interface

## Future Enhancements

*  Image/file sharing
* ✔✔ Message seen/delivered status
*  Notifications
*  Dark mode
*  Mobile responsive design
*  Deployment (Render / Railway)


## Learning Outcomes

* Understanding of WebSockets and real-time systems
* Backend API development using Express
* Database integration with MongoDB
* Authentication using JWT
* Full-stack application development
!
