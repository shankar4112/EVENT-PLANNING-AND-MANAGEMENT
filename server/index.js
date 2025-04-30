const express=require('express')
const app = express()


app.use('/',(req,res)=>{
  res.send("adsfad")
});

app.listen((3300),()=>{console.log("Asdf");});
