const express = require('express');

const ticketRouter = express.Router();

ticketRouter.get('/',(req,res)=>{
    res.send("You are inside ticket Router");
});

module.exports = ticketRouter;