const express = require('express');
const app = express();
const port = 5000;

app.get('/', function(req,res){
    res.send({
        "message":"He there"
    })
})

app.listen(port, function(error){
    if(error){
      console.log('Error while connecting to the server', error)
  }
  console.log(`Connected to port ${port}`)
})