
# COMP229 Assignment 2 – Portfolio Website

## Project Description

This project is a personal portfolio website developed for COMP229 – Web Application Development at Centennial College.

The application uses React for the frontend, Node.js and Express.js for the backend, and MongoDB for database storage.

It includes RESTful API operations for managing contacts, projects, qualifications, and users, along with JWT-based user authentication.

## Technologies Used

- React.js
- Vite
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- JavaScript
- HTML and CSS
- Postman
- Git and GitHub

## Project Structure

```text
MyPortfolio/
├── client/                  # React frontend
├── config/                  # Database configuration
├── server/
│   ├── controllers/         # API controller functions
│   ├── middleware/          # JWT authentication middleware
│   ├── models/              # MongoDB Mongoose models
│   └── routes/              # REST API routes
├── server.js                # Express backend entry point
├── seedUser.js              # Initial user setup script
├── package.json
├── .gitignore
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/abellaandria/COMP229-Assignment2-Portfolio.git
cd COMP229-Assignment2-Portfolio
```

### 2. Install Dependencies

```bash
npm install
cd client
npm install
cd ..
```

### 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
MONGO_URI=mongodb://127.0.0.1:27017/Portfolio
JWT_SECRET=replace_with_your_own_secure_random_secret
PORT=5000
```

Use your own database connection settings and JWT secret.

**Never commit the `.env` file to GitHub.**

### 4. Start MongoDB

Make sure your local MongoDB server is running.

### 5. Create an Initial User

```bash
node seedUser.js
```

Enter the requested username, email, and password. The password must contain at least 12 characters.

### 6. Run the Application

```bash
npm run dev
```

The backend runs at:

http://localhost:5000

The React frontend runs on the local development URL displayed by Vite.

## REST API Endpoints

### Contacts

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/contacts | Get all contacts |
| GET | /api/contacts/:id | Get contact by ID |
| POST | /api/contacts | Create contact |
| PUT | /api/contacts/:id | Update contact |
| DELETE | /api/contacts/:id | Delete contact by ID |
| DELETE | /api/contacts | Delete all contacts |

### Projects

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/projects | Get all projects |
| GET | /api/projects/:id | Get project by ID |
| POST | /api/projects | Create project |
| PUT | /api/projects/:id | Update project |
| DELETE | /api/projects/:id | Delete project by ID |
| DELETE | /api/projects | Delete all projects |

### Qualifications

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/qualifications | Get all qualifications |
| GET | /api/qualifications/:id | Get qualification by ID |
| POST | /api/qualifications | Create qualification |
| PUT | /api/qualifications/:id | Update qualification |
| DELETE | /api/qualifications/:id | Delete qualification by ID |
| DELETE | /api/qualifications | Delete all qualifications |

### Users

The Users API requires JWT Bearer Token authentication.

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get user by ID |
| POST | /api/users | Create user |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user by ID |
| DELETE | /api/users | Delete all users |

## JWT Authentication

### Login

```http
POST /api/auth/login
```

The user submits valid login credentials and receives a JWT token.

### Protected Requests

Include the JWT token in the Authorization header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

### Logout

```http
POST /api/auth/logout
```

The logout endpoint acknowledges the request. The client must discard its token to complete logout.

## API Testing

All 24 CRUD API operations were tested using Postman.

Successful HTTP responses included:

- 200 OK – Successful retrieval, update, or deletion
- 201 Created – Successful record creation
- 401 Unauthorized – Protected request without a valid token

Screenshots of API tests and MongoDB records are provided separately in the assignment documentation.

## GitHub Repository

https://github.com/abellaandria/COMP229-Assignment2-Portfolio

## Author

Andria Abella

Software Engineering Technician  
Centennial College
