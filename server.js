var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;

app.get('*',
  express.static(path.join(__dirname, 'dist')),
  function (req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  }
);

app.listen(port, function function_name(argument) {
  console.log(`Angular SPA listening on port ${port}`);
});
