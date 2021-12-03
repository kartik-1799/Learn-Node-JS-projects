const http = require('http')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url); //printing request object and url paramter of same object
    res.statusCode = 200; //server code from http status code 
    res.setHeader('Content-type', 'text/html'); //To add the response in html format we used content type as html
    res.end('<h1> This is kartik </h1>');
})

server.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})