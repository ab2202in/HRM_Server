const express = require('express');
const app = express();
const dotenv =require('dotenv');
dotenv.config();
const authRoutes = require('./routes/authRoutes');
const connect =require('./db/config');
const port = process.env.PORT;


// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.use(authRoutes);

connect();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
