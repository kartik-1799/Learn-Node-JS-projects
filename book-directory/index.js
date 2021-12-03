const express = require('express');
const multer = require('multer');
const port = 3000;
const app = express();
const pdfUpload = 'public/books';
// const path = require('path');
// var uuid = require('uuid');
// uuid=uuid.v4();
// console.log(uuid);
app.use(express.static(__dirname + '/public'));
// const urlencodedParser = express.urlencoded()
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
    res.end('<h1>Dashboard</h1><br><a href="/add-book">Add new book</a>');
})

app.get('/add-book', (req, res) => {
    res.sendFile(__dirname+"/"+"index.html")
})
app.post('/add-status', upload.single('new_book'), (req, res) => {
    // upload(req, res, (err) => {
    //     if(err) {
    //         return res.end("Something went wrong")
    //     }
    //     return res.end("File uploaded successfully!")
    // })
    // response = {
    //     title:req.body.title,
    //     book:req.body.book
    // }
    // console.log(response);
    console.log(req.file);
    // console.log(path);
    res.end("<h1>Sucessfull.</h1> <br><a href = '/'>Back</a>");
})



app.listen(port, () => {
    console.log(`Server is listening to http://localhost:${port}`)
})