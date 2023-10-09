const express = require('express');
const app = express();
const router = express.Router();
const json = require("./user.json")
/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile(__dirname+'/home.html');
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  res.json(json);
});


/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => {
  
  if(req.query.user=="Iana" && req.query.pass=="ib"){
    res.status(200).send("User is Valid")
  }

  if(req.query.user!="Iana"){
    res.status(401).send("Invalid user name")
  }

  if(req.query.pass!="ib"){
    res.status(401).send("Invalid Pass ")
  }

});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  res.send(`<strong> ${req.params.username} successfully logout </strong> `);
});

app.use('/', router);

app.listen(8089);

console.log('Web Server is listening at port '+ (process.env.port || 8081));