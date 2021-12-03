const connection = require('./model');
const express = require('express')
const port =3000;
const app = express();
const path = require('path');
const expressHandlerbars = require("express-handlebars");
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended : true
}));

app.get("/", (req, res) => {
    // res.end('Hello World');
    res.render("index", {})
})

app.set("views", path.join(__dirname, "/views/"));

// app.engine("hbs", expressHandlerbars({
//     extname: "hbs",
//     defaultLayout : "mainLayout",
//     layoutsDir : __dirname + "views/layouts"
// }));

var hbs = expressHandlerbars.create({
    helpers: {
        foo: function() {return 'FOO!';},
        bar: function() {return 'BAR!';}
    }
})

app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

app.listen(port,  () => {
    console.log(`Server is listenting http://localhost:${port}`)
})