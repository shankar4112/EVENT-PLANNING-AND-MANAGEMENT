const express = require('express');

const paymentRouter = express.Router();

paymentRouter.get('/',(req,res)=>{
    res.send("You are inside Payment Route");
});

module.exports = paymentRouter;