const { User } = require('../models');

// Register a new user
exports.register = async (req, res) => {
    try {
        const { name, email, password, address, role } = req.body;

        // Basic validation
        if (!name || !email || !password || !address || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new user
        const user = await User.create({ name, email, password, address, role });

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
