const express = require('express')
const port = 3000
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/"+"index2.html")
    console.log("hi")
})
app.get('/get', (req, res) => {
    res.send("<h1>GET</h1>")
})
// http://localhost:3000/todos?todo=asndsla&submit=submit
app.post('/todos', (req, res) => {
    todo = {
        todos:req.body.todo
    }
    console.log(todo)
    console.log("hello")
    res.end(JSON.stringify(todo))
})

app.listen(port, ()=> {
    console.log(`server is listening to http://localhost:${port}`)
})