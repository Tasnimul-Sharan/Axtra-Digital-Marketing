// const mysql = require('mysql2');

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// db.connect(err => {
//     if (err) {
//         console.error('Database connection failed:', err.stack);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });

// module.exports = db;

// require('dotenv').config();
// const mysql = require('mysql2');
// const db = mysql.createPool({
//   connectionLimit: 10,
//   host: `${process.env.DB_HOST}`,
//   user: `${process.env.DB_USERNAME}`,
//   password: `${process.env.DB_PASSWORD}`,
//   database: `${process.env.DB_DATABASE}`,
// });

// db.getConnection((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL');
// });

// db.on('error', (err) => {
//   if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//     console.log('MySQL connection was lost. Reconnecting...');
//     db.connect();
//   } else {
//     throw err;
//   }
// });

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
