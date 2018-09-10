const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const books = [
    {
        name: 'Angular'
    },
    {
        name: 'Ember'
    },
    {
        name: 'React'
    }
];

app.get("/books", (req, res, next) => {
    console.log('keke', books);
    res.send(books);
});

app.post('/books', function(req, res, next){
    books.push({
        name: req.body.name
    });
    res.send(200);
});

app.listen(3001, function () {
    console.log('back started');
});

//lsof -i tcp:8888
//kill -9 57385