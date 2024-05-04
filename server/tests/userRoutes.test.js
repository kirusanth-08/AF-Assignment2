const request = require('supertest');
const express = require('express');
const router = require('../src/routes/authRoutes'); 
const userController = require('../src/controllers/userController');
const authMiddleware = require('../src/middleware/auth');

const app = express();
app.use(express.json());
app.use(router);

describe('Auth Routes', () => {
  it('should register a new user', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com', password: 'password' };
    const response = await request(app)
      .post('/register')
      .send(userData);

    expect(response.status).toBe(201);
  });

  it('should log in an existing user', async () => {
    const loginData = { email: 'john@example.com', password: 'password' };
    const response = await request(app)
      .post('/login')
      .send(loginData);

    expect(response.status).toBe(200);
  });

  it('should authenticate user', async () => {
    // Mock the authenticate middleware to always pass
    authMiddleware.authenticate = jest.fn((req, res, next) => {
      req.user = { id: 'userId' }; // Mock user data for authentication
      next();
    });

    const response = await request(app)
      .post('/authenticate')
      .send();

    expect(response.status).toBe(200);
  });
});
