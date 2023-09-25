const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const session = require('express-session')
const {body, ValidationResault } = require('express-validator')
const users = require('./Module/users')
const uuid = require('uuid')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine','ejs');

app.use(session({
    secret : 'thisisCode',
    resave : false,
    saveUnitialised : false , 
}));

app.get('/',(req,res)=>{
    res.render('Home')
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});