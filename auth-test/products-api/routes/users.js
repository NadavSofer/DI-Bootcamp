const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/verifyToken.js')
const {_register,_login} = require('../controllers/users.js')


router.post('/register', _register);
router.post('/login', _login);
router.get('/token', verifyToken, (req, res)=> {
  res.sendStatus(200)
})
router.delete('/logout', (req,res)=> {
  const accessToken = req.cookies.accessToken;
  if(!accessToken) return res.sendStatus(204);
  res.clearCookie('accessToken');
  return res.sendStatus(200);
})

module.exports = {
  router
}
