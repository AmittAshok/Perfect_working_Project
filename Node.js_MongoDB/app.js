javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
// MongoDB connection URI from environment variable
const mongoURI = process.env.MONGO_URI;
// Connect to MongoDB
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Define a simple route
app.get('/', (req, res) => {res.send('Hello, Node.js with MongoDB!');
});

// Start the server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});