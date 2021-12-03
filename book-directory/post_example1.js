const express = require('express')
const app = express()
const port = process.env.port || 3000
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: true})

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname+"/"+"index3.html");
})
app.post('/process_post', urlencodedParser, (req, res) => {
    // Prepare output in JSON Format
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.listen(port, () => {
    console.log(`Server is listening to http://localhost:${port}`)
})