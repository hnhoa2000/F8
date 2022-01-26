const express = require('express');
const router = express.Router();

const CourseModel = require('../models/Course');

router.get('/', (req, res, next) => {
    CourseModel.find({}).lean() 
        .then(courses => {
            res.render('course',{
                title: 'courses page',
                courses
            })
        })
        .catch(next);
});

router.get('/:slug', (req, res) => {
    CourseModel.findOne({slug : req.params.slug}).lean()
        .then(course => {
            res.render('course-detail',{course}); 
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;