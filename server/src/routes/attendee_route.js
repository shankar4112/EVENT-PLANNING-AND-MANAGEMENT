const express = require('express');

const attendeeRouter = express.Router();

attendeeRouter.get('/',(req,res)=>{
    res.send("You are inside attendee Router");
});

module.exports = attendeeRouter;