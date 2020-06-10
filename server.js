var express  = require('express');
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

app.set('view engine','ejs');//sent views to EJS

//this is how a route is built in Express
app.get('/', (req,res)=>{
  var title = "Our Home Page";
  res.render('pages/index',{title:title});
});

app.get('/users', (req,res)=>{
  var title = "Our Home Page";
  res.render('users/index',{
    title:title,
    users:data
  });
});

app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
  console.log(data);
});
