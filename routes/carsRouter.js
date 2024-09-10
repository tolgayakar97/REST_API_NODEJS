const express = require('express');

const DUMMY_CAR = require("./../Model/carsModel"); //Imports DUMMY_CARS array.

//Not calling express method. Instead, calling Router method of express object returns special object, 
//which provies to handle routing operations
const router = express.Router();

//#region MIDDLEWARES REGISTERATION

//Getting DUMMY_CAR object by dynamic car id which is encoded in the URL. In order to get dynamic segment,
//use ':' + any identifier.
router.get(/*path=*/'/:carId', (req, res, next) => {

    //In order to return the specific cars which mentioned in the URL, cid needs to be extracted.
    //Getting the car id by using request objects params property.

    const carId = req.params.carId //params holds the value as key-value pair {carId: "1"}
    const car = DUMMY_CAR.find(x => {
        return x.id === carId; // returns true if current objects id is equal to carId (carId in url).
    });

    if (!car) {
        //If any car could not be founded, send a json format error message with status code 404. 
        return res.status(404).json({ errorMsg: 'Could not find a car based on priovided Id!' });
    }

    //Instead of sending response with send method, sending response as json format with json method which is provided by express.
    res.json({ car: car });
});

router.get('/user/:creator', (req, res, next) => {
    const creator = req.params.creator;
    const car = DUMMY_CAR.find(x => {
        return x.creator === creator;
    });

    if (!car) {
        return res.status(404).json({ errorMsg: 'Could not find a car based on priovided creator!' });
    }

    res.json({ car: car });
});

//#endregion

//#region EXPORTING

module.exports = router;

//#endregion