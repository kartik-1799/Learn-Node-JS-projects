const mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseId: {
        type: String
    },
    courseDuration: {
        type: String
    },
    courseFee: {
        type: String
    }, 
});
mongoose.model("Course", CourseSchema);
