const express = require('express');
const app = express()


app.set("view engine", "ejs");

app.get('/home', function(req, res){
    res.render('home');
})


app.listen(3000)
console.log('your server is now live')