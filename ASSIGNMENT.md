## EP-03: Creating our Express Server
- Install Express server
- What is dependencies?
- What is package.json, package-lock.json, node_modules?
- What is the difference between package.json VS package-lock.json?
- What is ^ , ~ ?
- What is the use of "-g" while npm install
- Difference between ~ vs ^ ?
- create a server.
- Listen to port 7777
- Make request handlers for /test, /hello?
- Install nodemon and update scripts inside package.json.

## EP-04: Routing and Request Handlers
- Play with routes and route extensions ex, /, /hello, /hello/2, /text, /text/abc/pqr
- Order of the routes matter a lot
- Install postman app and make a workspace/collection > test API call
- app.use vs app.get
- Write logic GET, POST, PATCH, PUT ,DELETE API Callsn and test them on postman
- Explore routing and use of ?, + , () , * in the routes
- Use of regex in routes /a/, /.*fly$/
- Reading the query params in the routes
- Reading the dynamic Routes

## Ep-05: Middleware & Error Handlers
- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route",rH,[rH2,rH3], rH4, rH5);
- What is a middleware? why do we need it?
- How express Js Basically Handles requests behind the scenes.
- Difference b/w app.use and app.all.
- Write a dummy user auth middleware for all user routes, except /user/login
- Error Handling using app.use('/',(err,req,res,next)=>{});

## Ep-06
- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install Mongoose libraty
- Connect your application to the Database "connection-url"/revDevTinder
- Call the connectDB function and connect to a database before starting application on 7777.
- Create a User Schema & user Model
- Create a POST/signup API to data to database
- Push some documents using API calls from Postman
- Error Handling using try, catch 

## Ep-07
- JS object vs JSON(difference)
- Add the express.json middleware to your app
- Make Your signup API dynamic recive data from the end user 
- User.findOne with duplicate email ids, which object returned
- API - Get user be Email
- API - Feed api - GET/feed -get all the users from database
- API - Get user By ID
- Create a delete user API
- Difference b/w PATCH and PUT
- API -Update a user
- Explore the Mongoose Documention for Model
- what are options in a Model.findOneAndUpdate method, explore more about it
- API - Update the user API with email ID

## Ep-08

- Explore schematype options from the documentation
- add required, unique, lowercase, uppercase, min, minLength,trim
- Add default
- Create a custom validate function for gender
- Improve the DB Schema - PUT all appropiate validations on each field in schema
- Add timestamps to the userSchema
- 



