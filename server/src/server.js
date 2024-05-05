const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Add path module

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')));

// Routes
app.use('/users', require('./routes/userRoutes'));


// app.get('/check-env-vars', (req, res) => {
//   const isMongoDbUriDefined = !!process.env.MONGODB_URI;
//   const isPortDefined = !!process.env.PORT;
//   res.json({ isMongoDbUriDefined, isPortDefined });
// });

// Catch all other routes and return the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb+srv://ds2024:ds2024@cluster0.iryrt4w.mongodb.net/NASA-users', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
