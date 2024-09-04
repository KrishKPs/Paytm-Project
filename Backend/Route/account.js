const express = require('express');  
const authorise = require('../auth');
const getbalance = require('../Functions/getbalance');
const tranction = require('../Functions/transaction');

const  routes = express.Router(); 


routes.get ('/balance' , authorise , getbalance);
routes.post ('/sendmoney/:username' , authorise , tranction)

module.exports = routes; 