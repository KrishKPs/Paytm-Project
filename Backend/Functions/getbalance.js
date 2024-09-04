const { account } = require("../db");


async function getbalance (req , res) {


    const username = req.username; 

    if (!username) {
        res.json ({msg : 'Invalid Username'}); 
        return; 
    }
    console.log(username);

     const user = await account.findOne ({username : username}); 

     console.log(user);
     console.log(user.username);


    res.json ({balance : user.balance , username : username});


}

module.exports = getbalance;    