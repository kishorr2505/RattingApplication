// src/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret'; // Use the same secret key as above

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ error: 'Invalid token' });

      req.user = decoded;
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ error: 'Access denied' });
      }

      next();
    });
  };
};

module.exports = authMiddleware;
