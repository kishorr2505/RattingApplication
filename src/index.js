const express = require('express');
const app = express();
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test database connection and start server
sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });
