var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.send('/ GET Route');
});

app.listen(8080, console.log('Started server at http://localhost:8080/'));
