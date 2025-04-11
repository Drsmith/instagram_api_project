const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Instagram API backend is running!");
});

// Example route (you'll expand this later)
app.get("/profile", async (req, res) => {
  try {
    // Simulate fetching a user's Instagram profile
    const data = {
      username: "example_user",
      followers: 1200,
      posts: 50,
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
