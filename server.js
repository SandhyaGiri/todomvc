require('marko/node-require').install();

require('lasso').configure({
	plugins: [
        'lasso-marko'
    ],
    minify: false,
    bundlingEnabled: false,
    fingerprintsEnabled: false
});

var express = require('express');
var app = express();

var serveStatic = require('serve-static');

app.use('/static', serveStatic(__dirname + '/static'));

app.get('/', require('./src/pages/home'));

app.listen(8080, function(){
	console.log('listening on port 8080');
});