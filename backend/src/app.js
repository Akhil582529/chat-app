const express = require ('express');
const path = require('path');
const dotenv = require('dotenv');
const { connectDB } = require('./db');

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.get('/',(req, res) => {
    res.status(200).send('Home Page');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
    connectDB();
})
