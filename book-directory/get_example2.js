const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

app.get('/get_example2', (req, res) => {
    res.send('<p>Username:&nbsp'+req.query['first_name']+'</p><p>Lastname:&nbsp'+
    req.query['last_name']+'</p>');
})

app.listen(port, () => {
    console.log(`Server is listening to ${port}`)
})