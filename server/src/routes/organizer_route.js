const express = require('express');

const organizerRouter = express.Router();

organizerRouter.get('/',(req,res)=>{
    res.send("You are inside Organizer Route");
});

module.exports = organizerRouter;