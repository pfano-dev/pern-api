const express = require("express");
const app = express();
const { PORT, CLIENT_URL } = require("./constants/index");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
//import routes
const authRoutes = require("./routes/auth");

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());

//initialize routes
app.use("/api", authRoutes);

const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

appStart();
