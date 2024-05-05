// Import the necessary modules and files
const UserController = require('../src/controllers/userController');
const User = require('../src/models/User');
const jwt = require('jsonwebtoken');

describe('User Controller Tests', () => {
  
  // Test cases for the register function
  describe('register', () => {
    test('Should register a new user', async () => {
      // Mock request and response objects
      const req = { body: { name: 'TestUser', email: 'test@example.com', password: 'test123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      // Call the register function from userController with mock request and response
      await UserController.register(req, res);

      // Assert that the response status is 201 and contains the user details
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ user: expect.any(Object), token: expect.any(String), name: 'TestUser' }));
    }, 10000);
  });

  // Test cases for the login function
  describe('login', () => {
    test('Should log in an existing user with correct credentials', async () => {
      // Mock request and response objects
      const req = { body: { email: 'test@example.com', password: 'test123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      // Mock User.findOne to return a user with the provided email
      User.findOne = jest.fn().mockResolvedValue({ email: 'test@example.com', comparePassword: jest.fn().mockResolvedValue(true) });

      // Call the login function from userController with mock request and response
      await UserController.login(req, res);

      // Assert that the response status is 200 and contains the login message
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Login successful', token: expect.any(String), name: undefined });
    });
  });

  // Test cases for the authenticate function
  describe('authenticate', () => {
    test('Should authenticate a user with a valid JWT token', async () => {
      // Mock request and response objects
      const req = { headers: { authorization: 'Bearer validToken' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      // Mock jwt.verify to return a decoded token
      jwt.verify = jest.fn().mockReturnValue({ userId: 'userId123' });

      // Mock User.findById to return a user with the provided userId
      User.findById = jest.fn().mockResolvedValue({ _id: 'userId123' });

      // Call the authenticate function from authMiddleware with mock request and response
      await authMiddleware.authenticate(req, res);

      // Assert that the response status is 200 and contains the authentication message
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Authentication successful', user: expect.any(Object) });
    });

  });
});

