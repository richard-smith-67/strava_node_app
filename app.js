var strava = require('strava-v3');
var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/', function (req, res) {
 
    //res.send("Home page");
    // res.redirect('https://www.strava.com/oauth/authorize?client_id=9&response_type=code&redirect_uri=http://testapp.com/token_exchange&scope=write&state=mystate&approval_prompt=force')

    var client_id = 'xxxx';

     res.redirect('https://www.strava.com/oauth/authorize?client_id=' + client_id + '&response_type=code&redirect_uri=http://localhost:3000/access.html&scope=write&state=mystate&approval_prompt=force')
   
});

app.get('/athlete', function (req, res) {
 
  strava.athlete.get({id:xxxx},function(err,payload) {
    if(!err) {
        res.send(payload)
    }
    else {
        console.log(err);
    }
});

 

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
		
// strava.athlete.get({id:14088},function(err,payload) {
//     if(!err) {
//         console.log(payload);
//     }
//     else {
//         console.log(err);
//     }
// });