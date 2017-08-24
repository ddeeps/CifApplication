const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var dbRoutes = require('./app/routes/DbRoutes.js');
var pdfRoutes = require('./app/routes/PdfRoutes.js');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/db', dbRoutes);

app.use('/api', pdfRoutes);

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});


