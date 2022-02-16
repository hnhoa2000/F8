const express = require('express');
const router = express.Router();

const CourseModel = require('../models/Course');

router.get('/', (req, res, next) => {
    CourseModel.find({}).lean() 
        .then(courses => {
            res.render('course/course',{
                title: 'courses page',
                courses
            })
        })
        .catch(next);
});

router.get('/create', (req, res, next) => {
    res.render('course/create',{
        title: 'create course'
    });
});

router.post('/create', (req, res, next) => {
    const dataCourse = req.body;
    dataCourse.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new CourseModel(dataCourse); 
    course.save();
    res.redirect('/Courses');
});

router.get('/:slug', (req, res) => {
    CourseModel.findOne({slug : req.params.slug}).lean()
        .then(course => {
            res.render('course/course-detail',{course}); 
        })
        .catch(err => {
            console.log(err);
        });
});



module.exports = router;