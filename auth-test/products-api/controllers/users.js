const {register,login} = require('../modules/users.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const _register = async (req,res) =>{
  const {email, password} = req.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password,salt)

  const lower_email = email.toLowerCase()
  register(lower_email,hash)
  .then(row=>{
    res.json(row)
  })
  .catch(err => {
    console.log(err);
    res.status(404).json({msg:err.message})
  })
}

const _login = async(req, res) =>{
  login(req.body.email.toLowerCase())
  .then(async row => {
    // console.log(row,req.body);
    if(row.length === 0) return res.status(404).json({msg:'email not found'})

    const match = await bcrypt.compare(req.body.password, row[0].password);
    if(!match) return res.status(400).json({msg:'wrong password'})
    console.log('user info', row);
    const userId = row[0].id;
    const email = row[0].email;

    const accessToken = jwt.sign({userId, email}, process.env.LOGIN_TOKEN_SECRET, {
      expiresIn: '60s'
    })

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 60 * 1000,

    })

    res.json(accessToken)
  })
  .catch(err=>{
    console.log(err);
    res.status(404).json({msg:err.message})
  })
}


module.exports = {
  _register,
  _login
}
