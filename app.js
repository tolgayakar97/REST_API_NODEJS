const express = require("express"); //Getting express object from express.js module.
const bodyParser = require('body-parser');

const carsRouter = require('./routes/carsRouter'); //Importing our routes.

const app = express(); //When express is invoked, it return an object with methods like use, get, post etc.

//region MIDDLEWARE IMPORTED MIDDLEWARES

//Registering imported carsRouter as a middleware.
//Router provides to move out the logic out of app.js
app.use(carsRouter);

//#endregion


//Starts listening.
app.listen(3000);