// controllers/userController.js

const { Op } = require('sequelize');
const User = require('../models/user'); // Adjust the path as needed

// GET all users with pagination, filtering, search, and sorting
exports.getAllUsers = async (req, res) => {
  try {
    const {
      limit = 10,
      offset = 0,
      filter,
      search,
      sortKey = "createdAt",
      sortOrder = "ASC",
    } = req.query;

    const where = {};

    // Apply filter logic here
    if (filter) {
      try {
        const filterConditions = JSON.parse(filter);
        for (const [key, value] of Object.entries(filterConditions)) {
          if (value) {
            where[key] = { [Op.like]: `%${value}%` };
          }
        }
      } catch (error) {
        return res.status(400).json({ error: "Invalid filter format." });
      }
    }

    if (search) {
      where.userName = { [Op.like]: `%${search}%` };
    }

    const users = await User.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: [[sortKey, sortOrder]],
    });

    res.json({
      users: users.rows,
      total: users.count,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: error.message || 'An error occurred while fetching users.' });
  }
};

// GET a specific user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: "An error occurred while fetching the user." });
  }
};

// POST a new user
exports.createUser = async (req, res) => {
  try {
    const { permalink, userName, userEmail, userPassword } = req.body;
    
    if (!permalink || !userName || !userEmail || !userPassword) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const user = await User.create({
      permalink,
      userName,
      userEmail,
      userPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ error: "Invalid user data." });
  }
};

// PUT (update) a user by ID
exports.updateUserById = async (req, res) => {
  try {
    const { permalink, userName, userEmail, userPassword, enabled, deleted } = req.body;
    
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    await user.update({
      permalink,
      userName,
      userEmail,
      userPassword,
      enabled,
      deleted,
    });
    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(400).json({ error: "Invalid data." });
  }
};

// PATCH (partial update) a user by ID
exports.partialUpdateUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    await user.update(req.body);
    res.json(user);
  } catch (error) {
    console.error('Error partially updating user:', error);
    res.status(400).json({ error: "Invalid data." });
  }
};

// DELETE a user by ID
exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    
    await user.destroy();
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: "An error occurred while deleting the user." });
  }
};
