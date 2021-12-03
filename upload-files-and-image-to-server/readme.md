## Upload file and images

The project is for basic understanding on how to upload files and images on server using node js
Here important nodejs libraries which are used multer, express js.

Multer library used for handling multiform/form-data

Express js library provides robust feature for creating web and mobile application.
Here the use of express for creating a basic server, parsing the request and creating breakpoint.

Response (res) callback object is used to render get and post method response.
For get method response header is used to retrieve value.
For post method response body is used to retrieve value.
end() method/function is used to end response and render output.

post_example.js is used for solving error 'cannot get /todos'.
The solution is add method="POST" because the form use GET method by default.

The code works fine.

###How to run this code.
Method 1:
1. Clone the repo
2. Run "npm install"
3. Run "node index" 
4. Go to "http://localhost:3000"

Method 2: (using nodemon (nodejs library good for testing purposes))
1. Clone the repo
2. Run "npm install"
3. Run "npm i -g nodemon" (global nodemon installation) or "npm i nodemon" (local nodemon installation)
4. Run "nodemon ./index.js" (. current directory)
5. Go to "http://localhost:3000"