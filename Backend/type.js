const zod = require ('zod') 

const userzod = zod.object ({

    firstname : zod.string (),
    lastname : zod.string (),
    username : zod.string (),
    password : zod.string ()
})

const updatezod = zod.object ({

    username : zod.string (), 
    oldpassword : zod.string (), 
    newpassword : zod.string (), 

})


module.exports = {

    userzod : userzod, 
    updatezod : updatezod
 }