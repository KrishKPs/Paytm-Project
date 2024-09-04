const jwt = require ('jsonwebtoken'); 
const JWT_SECRET = require ('./config'); 

const jwtpassword = JWT_SECRET; 
function authorise (req,res,next) {

      const token = req.headers.authorization;  

        if (!token) {
            res.json ({msg : 'Token Not Found'}); 
            
            return;
        
        }
        
        const decode = jwt.verify (token, jwtpassword); 
        
        if (!decode) {
            res.json ({msg : 'Invalid Token'}); 
            return; 
        }

        req.username = decode.username;
        next     (); 

}

module.exports = authorise; 