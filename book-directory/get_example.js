const express = require('express')
const app = express()
const port = 3000
// app.use(express.static('public')); //To save static files in public directory 
//static files such as images, css files and js files
//load files from public direc http://localhost:${port}/

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/index', (req, res) => {
    // console.log(res);
    res.sendFile(__dirname+"/"+"index.html")
})

app.get('/process_get', (req, res) => {
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.listen(port, () => {
    console.log(`Example is listening at http://localhost:${port}`)
})