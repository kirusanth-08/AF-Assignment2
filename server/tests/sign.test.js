const { register, login } = require('../src/controllers/userController');
const User = require('../src/models/User');
const jwt = require('jsonwebtoken');

jest.mock('../src/models/User'); // Mocking the User model

describe('Authentication Controller', () => {
  describe('register', () => {
    it('should register a new user', async () => {
      const req = { body: { name: 'John Doe', email: 'john@example.com', password: 'password' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      // Mock User model's save method
      User.prototype.save.mockResolvedValueOnce({ _id: 'mockUserId', name: req.body.name, email: req.body.email });

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ user: expect.any(Object), token: expect.any(String), name: req.body.name }));
    });

    // Add more test cases to cover edge cases and error scenarios
  });

  describe('login', () => {
    it('should log in an existing user', async () => {
      const req = { body: { email: 'john@example.com', password: 'password' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      // Mock User.findOne method to return a mock user
      User.findOne.mockResolvedValueOnce({
        comparePassword: jest.fn().mockResolvedValue(true),
        _id: 'mockUserId',
        name: 'John Doe'
      });

      // Mock jwt.sign method
      jwt.sign.mockReturnValueOnce('mockToken');

      await login(req, res);

      expect(res.json).toHaveBeenCalledWith({ message: 'Login successful', token: 'mockToken', name: 'John Doe' });
    });

    // Add more test cases to cover edge cases and error scenarios
  });
});
