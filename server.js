// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// For simplicity, credentials are hardcoded. You can later store them in a database.
const VALID_USER = {
  username: "NognogsiMe",
  password: "gandanggfkongl"
};

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === VALID_USER.username && password === VALID_USER.password) {
    return res.status(200).json({ success: true, message: "Welcome back, Lovieee!" });
  }

  res.status(401).json({ success: false, message: "Login failed. Damn who you?!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
