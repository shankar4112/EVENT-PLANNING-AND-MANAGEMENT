const express = require('express');

const eventRouter = express.Router();

eventRouter.get('/',(req,res)=>{
    res.send("You are inside Event Router");
});

module.exports = eventRouter;