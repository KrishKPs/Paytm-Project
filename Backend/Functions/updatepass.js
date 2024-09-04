
const { user } = require('../db');
const {updatezod} = require ('../type')

const bcrypt = require ('bcryptjs');

async function updatepass (req,res) {


    const person = req.body; 

    const safeperson = updatezod.safeParse(person); 

    if (!safeperson.success) {
        res.json ({msg : 'Invalid Input'});
        return; 
    }  
    
    console.log(person); 

    const userExists = await user.findOne ({ username : person.username});
  
    if (!userExists) {
        res.json ({msg : 'Invalid Username or Password'});
        return ; 
    } 

    console.log (person.newpassword); 


    const hashed = await bcrypt.hash (person.newpassword, 10);

    await user.updateOne (  
        {username : person.username} ,  // this is a filer to find which data to update 
        {password : hashed} // this is the data to be updated
        );

        res.json ({msg : 'Password Updated Successfully'});
}

module.exports = updatepass; 