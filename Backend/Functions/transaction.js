const { account } = require("../db");



async function tranction (req , res ) {

    const to = req.params.username;
    const username = req.username;

   const  {amount  } = req.body ; 



if (!username) {
    res.json ({msg : 'Invalid Username'}); 
    return; 
}

const accounts = await account.findOne ({username : username}); 

  if(!accounts) {
      res.json ({msg : 'Invalid Username'});
      return; 
  }

  const sending = await account.findOne ({username : to} ) 

   if (!sending) {
       res.json ({msg : 'Invalid Recipient'});
       return; 
   }


    if (accounts.balance < amount) {
         res.json ({msg : 'Insufficient Funds'});
         return; 
    }

    await account.updateOne ({username : username} , {$inc : {balance : -amount}});
    await account.updateOne ({username : to} , {$inc : {balance : amount}});

    res.json ({msg : 'Transaction Successful'});
}



module.exports = tranction;