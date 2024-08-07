const express = require("express"); //Getting express object from express.js module.
const app = express(); //When express is invoked, it return an object with methods like use, get, post etc.

//Hello world example.

//Registering first middleware
app.use("/", (req, res, next) => 
{
    //app.use is called for each request.
    //If no request sended, the request time out error is received.
    res.send("Hello world")
});

app.listen(3000);