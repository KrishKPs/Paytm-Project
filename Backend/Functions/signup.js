const {user} = require ('../db');
const {userzod} = require ('../type');
const {account} = require ('../db');  
const bycrypt = require ('bcryptjs');


const JWT_SECRET = require('../config');
const jwt = require ('jsonwebtoken');


const jwtpassword = JWT_SECRET 

function Generatejwt (person) {

 return  jwt.sign ({ username : person.username}, jwtpassword); 
    
     
   }
async function signup (req,res) {

const person = req.body; 

const safeperson = userzod.safeParse(person);
if (!safeperson.success) {
    res.json ({msg : 'Invalid Input'});
    return; 

}



    await user.create ({

        firstname : person.firstname,
        lastname : person.lastname,
        username : person.username,
        password : await bycrypt.hash (person.password, 10), 
    }) 

   const jwt =  Generatejwt (person); 

    const username = person.username; 

    account.create ({
        username : username,
        balance : 1 + Math.floor(Math.random() * 1000)
    })




    res.json ({msg : 'User Created Successfully' , jwt : jwt});
}

module.exports = signup;