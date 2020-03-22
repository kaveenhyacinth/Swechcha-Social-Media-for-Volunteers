/**
 * Author : Kaveen Alwis
 */

 const express = require('express');
 const cors = require('cors');

 // .env config
 require('dotenv').config();

 // init express app
 const app = express();
 const port = process.env.PORT || 5000;

 // init cors middleware to express app
 app.use(cors());
//  app.use(express.json());

// listning to port
 app.listen(port, () => {
     console.log(`Server is running on ${port}`);
 })