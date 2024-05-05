const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the user route' });
});
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/authenticate', authMiddleware.authenticate);

module.exports = router;
