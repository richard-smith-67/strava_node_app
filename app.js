var strava = require('strava-v3');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false })) 
//app.use(bodyParser.json());

app.get('/', function (req, res) {
    
    res.sendFile('public/home.html' , { root : __dirname});
    //res.send("Home page");
    //res.redirect('https://www.strava.com/oauth/authorize?client_id=9&response_type=code&redirect_uri=http://testapp.com/token_exchange&scope=write&state=mystate&approval_prompt=force')

    // var client_id = '14088';

    //  res.redirect('https://www.strava.com/oauth/authorize?client_id=14088&response_type=code&redirect_uri=http://localhost:3000/access.html&scope=write&state=mystate&approval_prompt=force')
   
});

app.get('/access', function (req, res) {
 
  res.sendFile('public/access.html' , { root : __dirname});
  
});

app.get('/rider/prefs', function (req, res) {
 
  res.sendFile('public/riderPrefs.html' , { root : __dirname});
  
});

app.get('/join', function (req, res) {
 
  res.sendFile('/join.html' , { root : __dirname});
  
});

app.post('/join/handler', function (req, res) {
 
  var radius = req.body.groupsWithinRadius;
  res.send("Groups within " + radius)
  console.log('yahoo');
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
		
