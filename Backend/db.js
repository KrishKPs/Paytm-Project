const mongoose = require ('mongoose') 
const { MONGO_URL } = require('./config')

mongoose.connect (MONGO_URL)
.then (() => { console.log ('Connected to MongoDB') })
.catch (err => { console.error ('Could not connect to MongoDB...', err) })

const userSchema = mongoose.Schema ({

    firstname : String,
    lastname : String,
    username : String,
    password : String  
})

const accountSchema = mongoose.Schema ({

    username: { type: String, ref: 'User', required: true },
    balance : Number
})

const user = mongoose.model ('User', userSchema); 

const account = mongoose.model ('Account', accountSchema); 



module.exports = {

    user : user, 
    account : account

}