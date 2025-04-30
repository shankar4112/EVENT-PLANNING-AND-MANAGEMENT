const express = require('express');

const venueRouter = express.Router();

venueRouter.get('/',(req,res)=>{
    res.send("You are inside venue Router");
});

module.exports = venueRouter;