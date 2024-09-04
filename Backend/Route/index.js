const express = require('express');  
const routers = express.Router();
const userrouter = require ('./user');
const adminrouter = require ('./account');






routers.use ('/user', userrouter);
routers.use ('/account', adminrouter);

module.exports = routers;