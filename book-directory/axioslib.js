//not understand
//it require 3rd party library
//code not working 
//some error 
//code ref: https://nodejs.dev/learn/make-an-http-post-request-using-nodejs
const axios = require('axios')

axios
    .post('https://whatever.com/todos', {
        todo: 'Buy the milk'
    })
    .then(res => {
        console.log(`statusCode: ${res.status}`)
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    })