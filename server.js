const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// .env ko load karna
dotenv.config();

// database connect karna
connectDB();

// express app create
const app = express();

// middleware (json data read karne ke liye)
app.use(express.json());

// routes connect karna
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});