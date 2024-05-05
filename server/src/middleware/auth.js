const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

exports.authenticate = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log("from header: " + token)
        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const decoded = jwt.verify(token, `kirusanth`);
        const user = await User.findById(decoded.userId);
        
        console.log("after auth: " + user)
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // If authentication is successful, send a success response
        return res.status(200).json({ message: 'Authentication successful', user });
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            // JWT verification failed
            return res.status(401).json({ message: 'Invalid token' });
        } else if (error.name === 'TokenExpiredError') {
            // JWT token expired
            return res.status(401).json({ message: 'Token expired' });
        } else {
            // Other errors (e.g., database lookup error)
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
};
