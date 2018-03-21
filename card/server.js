var express = require('express');
var path = require('path');


var app = express();

// app.use(express.static('./dist'));
// app.use(express.static('public'));

  app.use(express.static('public'));
  app.use('/src', express.static('src'));
  // app.use('/dist', express.static('dist'));




// app.use is when a middlewear needs to be used. app.get is when there is requests like `get`. 

app.get('/', function (req, res) {
    // res.sendFile(path.resolve('client/index.html'));
    // res.sendFile(path.resolve('public/index.html'));
      res.sendFile(path.resolve('index.html'));
});


app.get('/designpage', function (req, res) {
    // res.sendFile(path.resolve('client/index.html'));
    // res.sendFile(path.resolve('public/index.html'));
      res.sendFile(__dirname + '/public/design-index.html');
});



var port = 3000;



app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});