var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static(__dirname + '/public'));
ig.use({
    access_token: ''
});

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  // home page route - popular images
  ig.user_self_media_recent(function(err, medias, pagination, remaining, limit){
    if(err){
      res.render(err);
    }
    else {
      res.render('pages/index', { grams: medias });
    }
  });
});


app.listen(9000, function () {
    console.log('starting insta app...');
});
