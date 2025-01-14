const express = require("express");
const path = require("path");
const app = express();

// Serve React build assets (JS, CSS) from the dist folder
app.use(express.static(path.join(__dirname, "../client/dist")));

// Example API route
app.get("/api/data", (req, res) => {
  res.json({ data: "This is some data from Express" });
});

// Catch-all to serve the React app in production
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/ismael_react_proj/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
