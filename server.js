const express = require('express');
const app = express();
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const userRoutes =require ('./routes/userRoutes')
const connect = require('./db/config')
let dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(authRoutes);
app.use(userRoutes);


const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.status(200).send("Test API");
});


app.use(express.urlencoded({extended : false}));




connect();

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
  });
