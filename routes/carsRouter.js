const express = require('express');

//Not calling express method. Instead, calling Router method of express object returns special object, 
//which provies to handle routing operations
const router = express.Router();

//#region MIDDLEWARES REGISTERATION

router.get(/*path=*/'/', (req, res, next) => {
    console.log('GET request!');

    //Instead of sending response with send method, sending response as json format with json method which is provided by express.
    res.json({message : "It works!"});
});

//#endregion

//#region EXPORTING

module.exports = router;

//#endregion