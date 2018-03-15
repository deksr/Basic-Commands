var express = require('express');
var path = require('path');


var app = express();

// app.use(express.static('./dist'));
// app.use(express.static('public'));

  app.use(express.static('public'));
  app.use('/dist', express.static('dist'));
  // app.use('/src/vueJS', express.static('src'));




app.use('/', function (req, res) {
    // res.sendFile(path.resolve('client/index.html'));
    // res.sendFile(path.resolve('public/index.html'));
      res.sendFile(path.resolve('index.html'));
});



var port = 3000;



app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});