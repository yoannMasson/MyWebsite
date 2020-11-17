const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static('dist'));

router.get('/',function(req,res){
    res.sendFile('/index.html');
  });

module.exports = app;