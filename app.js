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
app.get('/Login',(req,res)=>{
    res.render('loginPage')
})
app.get('/register',(req,res)=>{
    res.render('registerPage')
})

app.post('/register/validateInfo',(req,res)=>{ 
    const username = req.body.user;
    const password = req.body.pass;
    const id = uuid.v4() ;
    const user = {username:username, password:password, id:id }
    req.session.users = users;
    const usernameExists = users.some(user => user.username === username);


        if (usernameExists) {
            console.error('unavailable username')
        }else{
            users.push(user)
            console.log('Account created successfully!')
            console.log(users)
        }
    });
app.listen(3000, () => {
    console.log('Server started on port 3000');
});