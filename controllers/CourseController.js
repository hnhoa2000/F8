const express = require('express');
const router = express.Router();

const CourseController = require('../models/Course');

router.get('/', (req, res, next) => {
    CourseController.find({}).lean() 
        .then(courses => {
            res.render('course',{
                title: 'courses page',
                courses
            })
        })
        .catch(next)
});

module.exports = router;