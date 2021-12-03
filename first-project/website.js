const { Console } = require('console');
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url); //printing request object and url paramter of same object
    // res.statusCode = 200; //server code from http status code 
    res.setHeader('Content-type', 'text/html'); //To add the response in html format we used content type as html
    //creating breakpoints
    if (req.url == '/'){
        res.statusCode = 200;
        res.end('<h1> Hello World </h1>');
    } else if (req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> This is about page </h1>');
    }  else if (req.url == '/hello'){
        //here to check how to use read file in the website
        res.statusCode = 200;
        const data = fs.readFileSync('json.php');
        res.end(data.toString());
    }
    else {
        res.statusCode = 404;
        res.end('<h1> Not found </h1>');
    }
    
})

server.listen(port, ()=> {
    // console.log(Console.toString())
    console.log(`Server is listening on port ${port}`);
})