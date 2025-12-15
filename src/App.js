const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser());

const authRouter = require('./routes/auth');
const profileRouter = require('./routes/proflie');
const requestRouter = require('./routes/requests');
const userRouter = require('./routes/user');
const cors = require('cors');

app.use(cors());
app.use('/', authRouter);
app.use('/', profileRouter);
app.use('/', requestRouter);
app.use('/', userRouter);

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("server is succesfull listining on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database cant be connected:", err.message);
  });
