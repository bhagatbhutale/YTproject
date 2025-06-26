👉 IMP Reads :- Firstfall signup karlo, then login karo, or { userId } change kro seed.js me tabhi Videos Inserts Honge then videos dekhna shuru karo...

🎥 YouTube Clone - Full Stack Web Application

A full-featured YouTube Clone Web Application built using React (Frontend), Node.js & Express (Backend), and MongoDB (Database). The app allows users to register, upload and watch videos, manage their channels, interact with other users, and more — designed to closely replicate the experience of the real YouTube platform.

📚 Table of Contents
Features

1. Tech Stack
2. Frontend Overview
3. Backend Overview
4. Authentication
5. Video Handling
6. Search & Filter
7. Responsive Design
8. How to Run Locally
9. Folder Structure
10. Author

✅ Features
🔐 JWT-based, token cookies based  Authentication

🎥 Video upload, play, like, dislike, comment

👤 User Channel Profile

🔍 Search and Filter by category

📱 Responsive across devices

🗂️ MongoDB with Mongoose schemas

🛡️ Secure API with token verification


🛠️ Tech Stack

Layer	       Technology
Frontend	   React, Tailwind CSS
Backend	       Node.js, Express.js
Database	   MongoDB + Mongoose
Auth	       JWT (JSON Web Tokens)
State Mgmt     React useState / Redux
Video Player   HTML5 Video / iframe
Tools	       Axios, React Router DOM

🖼️ Frontend Overview :-

1. Home Page UI/UX 
Header with logo, search bar, and user profile

Sidebar with navigation options

Video grid showing thumbnails, titles, and metadata

Filter buttons (category wise)

Fully responsive on mobile, tablet, desktop


3. User Authentication
Sign up with channel name, profile picture, about
Login using JWT tokens
Route protection for pages like upload/edit videos


4. Video Player Page :-
Video player with support for:
Self-hosted .mp4 or YouTube iframe
Comment section
Like / Dislike with toggle logic
Share / Subscribe buttons (UI)


5. Channel Page :-
User dashboard with uploaded videos
Edit/Delete their own videos
Editable profile (name, about, banner, etc.)


🔧 Backend Overview :-

1. API Design 
RESTful APIs for:

Auth: /register, /login, /user/:id
Video: upload, update, delete, like/dislike, getAll, getById
Comment: add, delete, getByVideoId
Proper route structure with middlewares


2. Data Handling (MongoDB)
Schemas:
UserSchema: username, password (hashed), about, profilePic, banner
VideoSchema: title, description, videoLink, category, likes, dislikes
Relationship between videos ↔ users and comments ↔ videos


3. JWT Integration 
Secure login with jsonwebtoken
Protected routes with authMiddleware
Token verification on every critical API call (upload/edit/delete)


🔍 Search & Filter Functionality

1. Search by Title 
Instant search bar
Case-insensitive and trimmed search query
Results rendered in real-time

2. Filter by Category 
Filter videos based on videoType
Buttons like: All | Music | Learning | Coding | Movies
Data is fetched via filtered API or local state filter

📱 Responsiveness 
Mobile: collapsible sidebar, stacked layout
Tablet: two-column layout
Desktop: full three-column layout with sidebar
Flex/Grid



🧪 How to Run Locally

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone

2. Run Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev

3. Run Backend
bash
Copy
Edit
cd backend
npm install
nodemon index.js

PORT=7001

🗂️ Folder Structure
pgsql
Copy
Edit
📁 client/
 ┣ 📁 components/
 ┣ 📁 pages/
 ┣ 📁 redux/
 ┗ 📄 App.jsx

📁 server/
 ┣ 📁 controllers/
 ┣ 📁 models/
 ┣ 📁 routes/
 ┣ 📁 middleware/
 ┗ 📄 server.js



Author
Bhagat N. Bhutale
4th Year Computer Engineering
Frontend Developer | MERN Stack Developer
