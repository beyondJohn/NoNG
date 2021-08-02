var express = require('express');
var app = express();
const cors = require('cors');

const https = require('https');
const fs = require('fs');
const options = {
  hostname: 'switchmagic.com',
  key: fs.readFileSync('/etc/letsencrypt/live/switchmagic.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/switchmagic.com/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/switchmagic.com/chain.pem')
};
const corsOptions = {
  origin: ['https://switchmagic.com:4999'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use('/', express.static('.'));// you can access image using this url: https://switchmagic.com:4999/editTemplate.html
// app.use('/images', express.static('./uploads/'));// you can access image using this url: http://localhost:7000/images/abc.jpg

//
const port = process.env.PORT || '4999';
app.set('port', port);

//http.createServer(app).listen(80);
https.createServer(options, app).listen(4999);
//
