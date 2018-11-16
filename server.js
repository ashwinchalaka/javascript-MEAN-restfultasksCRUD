
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/angular/dist/angular' ));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8001, function() {
    console.log("listening on port 8001");
});