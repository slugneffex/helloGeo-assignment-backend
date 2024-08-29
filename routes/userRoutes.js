// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET all users with pagination, filtering, search, and sorting
router.get("/", userController.getAllUsers);

// GET a specific user by ID
router.get("/:id", userController.getUserById);

// POST a new user
router.post("/", userController.createUser);

// PUT (update) a user by ID
router.put("/:id", userController.updateUserById);

// PATCH (partial update) a user by ID
router.patch("/:id", userController.partialUpdateUserById);

// DELETE a user by ID
router.delete("/:id", userController.deleteUserById);

module.exports = router;
