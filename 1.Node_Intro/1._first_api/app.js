const express = require('express'); // equals to import express from express
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send(['Apple', 'Kiwi', 'Banana'])
})

// const path = require('path');
// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname+'/index.html'));
// })



app.listen(port, function(error){
    if(error){
        console.log('Error running the server', error)
    }
    console.log(`Server is listening on port ${port}`)
}); // listen to a port and node app.js starts the server
