const express = require('express');  
const  router = express.Router(); 

const signin = require ('../Functions/signin');
const signup = require('../Functions/signup');
const updatepass = require('../Functions/updatepass');
const authorise = require('../auth');
const users = require('../Functions/users');
const searchuser = require('../Functions/searchuser');


router.use (express.json());


router.post ('/signup', signup);
router.post ('/signin', signin);
router.put ('/update' , authorise,  updatepass)
router.get ('/allusers' , authorise , users)
router.post ('/searchuser' , authorise , searchuser)


module.exports = router;
