const express = require('express');

const DUMMY_CAR = require("./../Model/carsModel"); //Imports DUMMY_CARS array.

//Not calling express method. Instead, calling Router method of express object returns special object, 
//which provies to handle routing operations
const router = express.Router();

//#region MIDDLEWARES REGISTERATION

//Getting DUMMY_CAR object by dynamic car id which is encoded in the URL. In order to get dynamic segment,
//use ':' + any identifier.
router.get(/*path=*/'/:cid', (req, res, next) => {
    
    //In order to return the specific cars which mentioned in the URL, cid needs to be extracted.
    //Getting the car id by using request objects params property.

    const carId = req.params.cid //params holds the value as key-value pair {cid: "1"}
    const carModel = DUMMY_CAR.find(x => {
        return x.id === carId; // returns true id current objects id is equal to carId (cid in url).
    });

    //Instead of sending response with send method, sending response as json format with json method which is provided by express.
    res.json({cars: carModel});
});

//#endregion

//#region EXPORTING

module.exports = router;

//#endregion