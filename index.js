const express = require('express');
require('dotenv').config(); 
const sequelize = require('./utils/db');
const bodyParser =require('body-parser')
const userRoutes = require('./router/userRouter');
const app=express()

// Middleware
app.use(bodyParser.json());
 // database connected using AWS RDS SQL
 // Routes
app.use('/users', userRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(4000,()=>{
    console.log("port 4000 is running")
})