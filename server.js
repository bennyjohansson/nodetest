var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
    console.log(__dirname+'/index.html');
    res.sendFile(__dirname+'/index.html');
    //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    
});

const port = process.env.port || 3000;
app.listen(8080, function () {


    console.log('Forst API running on port 3000');
    console.log(port);
})