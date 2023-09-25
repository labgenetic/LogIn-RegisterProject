const express = require('express')
const app = express()


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
            res.redirect('/Login')
        }
    });
    