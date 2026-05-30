Full Stack Blog Platform✍️

Full Stack Blog Platform is a modern web application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js) that enables users to create, manage, and read blog posts through an interactive and responsive interface.

✨ Features

### 🔐 User Authentication

* Secure user registration and login
* JWT-based authentication and authorization
* Protected routes for authorized users

### 📝 Blog Management

* Create, edit, publish, and delete blog posts
* Manage blog content through an intuitive interface
* Full CRUD functionality for blogs

### 🤖 AI-Powered Blog Generation

* Generate blog content using Google Gemini AI
* Create article drafts from user prompts
* Enhance productivity with AI-assisted writing

### ✍️ Rich Text Editor

* Quill.js-powered content editor
* Support for headings, lists, links, and text formatting
* User-friendly blog writing experience

### 🖼️ Image Management

* ImageKit integration for image uploads
* Automatic image optimization and compression
* Fast image delivery through CDN services

### 🎨 Responsive User Interface

* Modern design built with React.js and Tailwind CSS
* Mobile-friendly and desktop-responsive layouts
* Smooth navigation and user experience

### 🔗 REST API Integration

* Backend APIs developed using Node.js and Express.js
* Efficient communication between frontend and backend
* Scalable and maintainable architecture

### 🗄️ Database Management

* MongoDB database with Mongoose ODM
* Secure storage of blogs, users, and application data
* Efficient data retrieval and management

### 🔍 Category & Search System

* Organize blogs by categories
* Search blogs quickly using keywords
* Improved content discovery and navigation

🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### AI Integration

* Google Gemini API

### Authentication

* JWT (JSON Web Token)

### Media Management

* ImageKit API

### Other Tools

* Vite

🚀 Installation

1️⃣ Clone the Repository
git clone https://github.com/anuradhapatil123/Full-Stack-Blog-Platform.git
cd Full-Stack-Blog-Platform

2️⃣ Install client dependencies:
cd client && npm install

3️⃣ Install server dependencies:
cd ../server && npm install

Environment Variables
Client (.env)

VITE_API_BASE_URL=http://localhost:5000
VITE_IMAGEKIT_URL_ENDPOINT=your-imagekit-endpoint
VITE_IMAGEKIT_PUBLIC_KEY=your-imagekit-public-key

Server (.env)

MONGODB_URI=your-mongodb-connection-string
GEMINI_API_KEY=your-google-gemini-key
IMAGEKIT_PRIVATE_KEY=your-imagekit-private-key
JWT_SECRET=your-jwt-secret-key
ADMIN_EMAIL=your-admin-email
PORT=5000

4️⃣ Start the development servers:
# Terminal 1 - Start backend
cd server 
npm run server

# Terminal 2 - Start frontend
cd client
npm run dev

📸 Screenshots


