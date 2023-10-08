const express = require('express');
const app = express();
app.get('/', function(req,res) {
    res.send('hello world');
})
app.get('/kush', function(req,res) {
    res.send('hello kush bhai ki haal chaal');
})
app.listen(3000);