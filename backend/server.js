const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes')
require('dotenv').config();

// Express app
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);
const isProduction = process.env.NODE_ENV === 'production';
const mongoURI = isProduction
  ? process.env.MONGO_URI_PROD
  : process.env.MONGO_URI_LOCAL;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log(`MongoDB connected: ${mongoURI}`))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});