//jshint node:true
'use strict';
//peeked at christian townsdin's repo
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('superagent');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res) {

  var wunderURL = 'http://api.wunderground.com/api/' +
  'process.env.ENVWUNDERAPI' + '/geolookup/conditions/forecast/q/' +
  'autoip' +
  '.json';

  request
    .get(wunderURL)
    .end (function(err, wunderData) {

      if (err) console.log('there was an error');
      var tempParse = JSON.parse(wunderData.text);
      var temp = (tempParse.current_observation.temp_f);

      res.json(temp);
    });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});




