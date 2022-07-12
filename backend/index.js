// Importing modules
const express = require("express");
const cors = require("cors");
const db = require("./connection");
const path = require("path");

// Initializing an express app
const app = express();

// Server Port
const PORT = process.env.PORT || 5000;

// Formatting incoming data and allowing cross origin requests
app.use(cors({origin: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Importing Routes
const authRoute = require("./routes/auth");

// Routes
app.use("/api/auth", authRoute);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Listening on the port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
