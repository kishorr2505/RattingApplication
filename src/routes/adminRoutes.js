// src/routes/adminRoutes.js
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Only accessible by admins
router.get('/admin-data', authMiddleware(['admin']), (req, res) => {
  res.json({ message: 'Admin data' });
});

module.exports = router;
