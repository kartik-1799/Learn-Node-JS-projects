const express = require('express');
const multer = require('multer');
const port = 3000;
const app = express();
const pdfUpload = 'public/books';
app.use(express.static(__dirname + '/public'));
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, pdfUpload);
    },
    filename: (req, file, callback, filename) => {
        // callback(null,uuid + path.extname(file.originalname));
        callback(null, file.originalname);
    }
})

const upload = multer({
    storage: Storage
});

app.get('/', (req, res) => {
    console.log(res);
    res.end('<h1>Dashboard</h1><br><a href="/status">Status</a>');
})


app.put('/status', (req, res) => {
    console.log(req.file);
    res.end('How to use put request.');
})

app.listen(port, () => {
    console.log(`Server is listening to http://localhost:${port}`)
})