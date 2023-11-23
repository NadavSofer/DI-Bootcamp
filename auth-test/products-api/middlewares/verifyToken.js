const jwt = require('jsonwebtoken');
require('dotenv').config();
const {register,login} = require('../modules/users.js');
const { json } = require('express');

const verifyToken = (req, res, next) => {
    const accessToken = req.cookies.accessToken || req.headers['accessToken'];

    console.log('token=>>>', accessToken);

    if(!accessToken) return res.status(401).json({msg: 'not authorized'});

    jwt.verify(accessToken, process.env.LOGIN_TOKEN_SECRET,
        (err, decoded)=>{
            if(err) return res.status(403).json({msg: 'failed to verify token'});
            login(decoded.email)
            .them(row => {
                if(row.length > 0) next()
            })
            .catch(err=> {
                return res.status(401),json({msg:'not authorized'})
            })
        });
}

module.exports = {
    verifyToken
}