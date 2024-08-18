// src/index.js
require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const productRoutes = require("./routes/productRoutes");

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://tasnimulalam303:OfElGhmd6qhyMkiC@cluster0.eyzut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

connectDB();

app.use(cors());
app.use(express.json());
// app.use(errorHandler);

// Define routes
// const itemRoutes = require('./routes/items');
app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
