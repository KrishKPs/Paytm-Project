const express = require('express'); 
const { PORT } = require('./config');
const app = express(); 
const port = PORT ; 


const cors = require ('cors');   
app.use (cors()); 

app.use (express.json());

const mainroute = require ('./Route/index'); 



app.use ('/trynew', mainroute);


app.listen (PORT, () => { console.log (`Server is running on port ${port}`) });
