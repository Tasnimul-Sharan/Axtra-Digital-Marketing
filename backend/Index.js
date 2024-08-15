// src/index.js
require('dotenv').config();
const itemRoutes = require('./routes/itemRoutes');
const errorHandler = require('./middleware/errorHandler');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());
// app.use(errorHandler);

// Define routes
// const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
