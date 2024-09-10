const express = require("express"); //Getting express object from express.js module.
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //Getting mongoose.


const carsRouter = require('./routes/carsRouter'); //Importing our routes.

const app = express(); //When express is invoked, it return an object with methods like use, get, post etc.

//region MIDDLEWARE IMPORTED MIDDLEWARES

//Registering imported carsRouter as a middleware.
//Router provides to move out the logic out of app.js

app.use('/api/cars', carsRouter); //Adding filter such as localhost:3000/api/cars/...

//#endregion

//#region Connection to database (Connect MongoDB via Mongoose)

mongoose
    .connect('mongodb://localhost:27017/myDatabase') //connect return Promise (async)
    .then(() => {

        //Starts backend service if connection is established successfully.
        app.listen(3000);
    })
    .catch(error => {
        console.log(error);
    });


//#region CHECK CONNECTION
// mongoose.connection.on('connected', () => {
//     console.log('Mongoose default connection is open.');
// });

// mongoose.connection.on('error', (err) => {
//     console.error('Mongoose default connection has occurred ' + err + ' error');
// });

// mongoose.connection.on('disconnected', () => {
//     console.log('Mongoose default connection is disconnected');
// });

//#endregion
//#endregion
