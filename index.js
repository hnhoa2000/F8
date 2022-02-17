const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;
require('./middlewares/handlebars')(app);
require('./middlewares/session')(app);

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride('_method'));

//require('./middlewares/passport')(app);
const db = require('./models/config');
db.connect();

app.use('/Courses', require('./controllers/CourseController'));
app.use('/me', require('./controllers/meController'));

app.get('/', (req, res) => {
    res.redirect('/Courses');
});
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});