const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('passport-local');
//const session = require('express-session');
const cookieParser = require('cookie-parser');
const db = require('./dbconfig');
const database = require('./database');
const operations = require('./operations');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//app.use(session({secret: 'I have a dog'}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',express.static('public'));


app.post('/signup', function(req, res) {

    operations.encrypt(req.body.email, req.body.password, function(data){
        console.log(req.body.email);
        res.send(data);

    })
});



app.listen(5000, function(req,res) {
    console.log("Port listening on 5000")
    database.connectDB();
})