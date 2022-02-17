const express = require('express');
const router = express.Router();

const courseModel = require('../models/Course');

router.get('/stored/courses', (req, res) => {
    courseModel.find({}).lean()
        .then(courses => res.render('me/storedCourse', {
            title: 'Danh sachs khóa học của tôi',
            courses
        })
        )
        .catch(err => console.log(err));
})

module.exports = router;