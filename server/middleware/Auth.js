const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const validateUser = (req, res, next) => {
    const token = req.cookies.jwt
    
    if(token){
        jwt.verify(token, process.env.JWTSECRET, async (err, decodedToken) => {
            if(err){
                console.log(err.message);
                return res.status(500).json("Error at user token validation")
            }
            else{
                let role = decodedToken['role']
                role == 'user' ? next() : res.send('Forbidden')
            }
        })
    } else {
        return res.status(403).json("Forbidden")
    }
}

const validateAdmin = (req, res, next) => {
    const token = req.cookies.jwt
    
    if(token){
        jwt.verify(token, process.env.JWTSECRET, async (err, decodedToken) => {
            if(err){
                console.log(err.message);
                return res.status(500).json("Error at admin token validation")
            }
            else{
                let role = decodedToken['role']
                role == 'admin' ? next() : res.send('Forbidden')
            }
        })
    } else {
        return res.status(403).json("Forbidden")
    }
}

module.exports = {validateUser, validateAdmin}