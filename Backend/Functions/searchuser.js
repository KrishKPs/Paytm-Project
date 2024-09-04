 const {user} = require ('../db');    
const users = require('./users');

async function searchuser (req,res) {


    const {filter} = req.body || "" ; 


    let users ; 
if (    !filter) {
     users = await user.find ({}); 
} 

else {



     users = await user.find ({

        $or : [{ firstname : { $regex : filter }  } , { lastname : { $regex : filter } } ]
   } );
} 




    res.json ({ filtered : users.map (uuser => ({
 
    firstname : uuser.firstname, 
    lastname : uuser.lastname,
    username : uuser.username,
    password : uuser.password
    }))});
}

module.exports = searchuser;