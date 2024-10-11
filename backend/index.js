require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/items');
const locationRoutes = require('./routes/locations');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/locations', locationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
