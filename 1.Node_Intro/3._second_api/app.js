const express =  require('express');
const app = express();
const port = 8080;

// /about?firstName =______&lastName=__________
app.get("/about", (req, res)=>{
    console.log(req.query)
    res.send(req.query.firstName+ ' ' + req.query.lastName)
})

// URL parameter
app.get("/age/:myAge/:height", (req, res)=>{
    console.log(req.params)
    res.send(req.params)
})


app.get('/', (req,res)=>{
    res.status(200).send('try');
    // no code below !!!
});


const server = app.listen(port, function(error){
    if(error){
        console.log('There has been an error while running the server')
    }
    console.log(`Server is listening on port`, server.address().port)
})