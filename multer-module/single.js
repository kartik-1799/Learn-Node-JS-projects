const express = require('express')
const multer = require('multer')
const port = 3000
const app = express()
const upload = multer({ dest: 'uploads/'})

app.get('/get', (req, res) => {
    res.sendFile(__dirname+'/'+'single.html')
})
app.post('/single', upload.single('single'), (req, res) => {
    console.log(req.file, req.body)
})