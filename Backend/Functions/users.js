const {user} = require ('../db');

async function users (req,res) {

  const allusers = await user.find({});

  res.json(allusers);

}

module.exports = users; 