const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crud', (error) => {
    if(!error) {
        console.log('Success')
    } else {
        console.log('Something went wrong')
        console.log(error)
    }

});

const Course = require("./course.model")



