const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const conectDb = require("./config/db");
// import userRoutes from "./routes/userRoutes.js";

//env config
dotenv.config();
// router
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
// database
conectDb();

// rest object
const app = express();

// port
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

// listen
app.listen(port, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode with port ${port}`.bgCyan
      .white
  );
});
