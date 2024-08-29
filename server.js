const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS
const userRoutes = require("./routes/userRoutes"); // Adjust the path as needed

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

const PORT = process.env.PORT || 3000;

// Health check route
app.get("/status", (req, res) => {
  res.json({ status: "Server is running", timestamp: new Date() });
});

// Use the user routes
app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
