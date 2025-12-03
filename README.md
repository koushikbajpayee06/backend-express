DevTinder Backend – Express + MongoDB

A backend learning project built using Node.js, Express.js, and MongoDB, covering server setup, routing, middleware, and CRUD operations.

📌 Features Implemented (Day 3 to Day 7)
📅 Day 3 — Express Server Setup

Installed Express.js

Understood dependencies, package.json, package-lock.json, node_modules

Difference between package.json vs package-lock.json

Learned version prefixes: ^ and ~

Understood npm install -g usage

Created first Express server

Added routes: /test, /hello

Installed Nodemon and updated npm scripts

Server running on port 7777

📅 Day 4 — Routing & HTTP Methods

Explored various routes and nested paths

Learned route priority and ordering

Tested APIs in Postman

Difference between app.use() and app.get()

Implemented GET, POST, PATCH, PUT, DELETE

Explored route patterns: ?, +, *, ()

Used regex routing: /a/, /.*fly$/

Read query parameters and dynamic route parameters

📅 Day 5 — Middleware & Error Handling

Implemented multiple route handlers using next()

Created global & route-level middleware

Understood what middleware is and why it’s needed

Difference between app.use and app.all

Created dummy authentication middleware

Centralized error-handling middleware using app.use((err, req, res, next) => {})

Explored Express request-handling pipeline

📅 Day 6 — MongoDB Integration

Created free MongoDB Atlas cluster

Installed and configured Mongoose

Connected Express app to MongoDB before server startup

Built User Schema & Model

Created POST /signup API to store user data

Added proper try–catch handling

Inserted documents via Postman

📅 Day 7 — CRUD Operations with Mongoose

Understood difference between JS Object and JSON

Enabled express.json() middleware

Made signup API fully dynamic

Checked duplicate emails using findOne()

API: GET /user → fetch user by email

API: GET /feed → fetch all users

API: GET /user/:id → fetch user by ID

API: DELETE /user → delete user by ID

Learned difference between PATCH vs PUT

API: PATCH /user → update a user

Explored Mongoose update options (findOneAndUpdate, returnDocument, etc.)

Updated user using both ID & email

🛠 Tech Stack

Node.js

Express.js

MongoDB Atlas

Mongoose

Nodemon

Postman

📁 Installation
git clone https://github.com/koushikbajpayee06/backend-express.git
cd backend-express
npm install
npm start

📌 Available APIs
Method	Route	Description
POST	/signup	Create user
GET	/user	Get user by email
GET	/feed	Get all users
GET	/user/:id	Get user by ID
DELETE	/user	Delete user by ID
PATCH	/user	Update user

📦 Repository
🔗 https://github.com/koushikbajpayee06/backend-express