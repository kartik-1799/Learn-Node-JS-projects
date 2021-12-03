const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const port =  3000;
const app = express()
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

// fieldname: Field name specified in the form.
// originalname: Name of the file on the user's computer
// encoding: Encoding type of file
// mimetype: Mime type of the file
// size: Size of the file in bytes
// destination: The folder to which the file has been saved
// filename: The name of the file in the destination
// path: The full path to the uploaded file
// buffer: A Buffer of the entire file
const Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./public/images");
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
})

const upload = multer({
    storage: Storage
}).array("imgUploader", 3); //Field name and max count 

// array(fieldname[, maxCount])

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/api/Upload", (req, res) => {
    console.log("ON the right page")
    upload(req, res, (err) => {
        if (err) {
            return res.end("Something went wrong")
        }
        return res.end("File uploaded sucessfully!")
    })
})

app.listen(port, (a) => {
    console.log(`Server is listening to www.localhost:${port}`)
})