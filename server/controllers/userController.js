const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();

        console.log(name)
    
        // User is registered, generate a token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
        res.status(201).json({ user, token });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    
        // User is authenticated, generate a token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
        res.json({ message: 'Login successful', token });
    } catch (error) {
        next(error);
    }
};
