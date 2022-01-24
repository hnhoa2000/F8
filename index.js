const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./middlewares/handlebars')(app);
require('./middlewares/session')(app);

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
app.use(express.json());

//require('./middlewares/passport')(app);
const db = require('./models/config');
db.connect();

app.use('/Course', require('./controllers/CourseController'));

app.get('/', (req, res) => {
    res.render('home',{
        title: 'Home page'
    });
});
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});