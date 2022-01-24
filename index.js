const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./middlewares/handlebars')(app);
require('./middlewares/session')(app);

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
app.use(express.json());

//require('./middlewares/passport')(app);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});