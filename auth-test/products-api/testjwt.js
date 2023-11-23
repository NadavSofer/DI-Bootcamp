const jwt = require('jsonwebtoken');

const token = jwt.sign(
    {name: 'john', email: 'john@gmail.com', id: 16},
    '556ns55!!!@@',
    {
        expiresIn:'60s'
    },

)

const oldToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJpZCI6MTYsImlhdCI6MTY4ODI4MjQyNCwiZXhwIjoxNjg4MjgyNDg0fQ.D8-UcUAFmBEunjh9s3GdV8KIeKpFSLf-kXScu7N1AFg'

jwt.verify(token, '556ns55!!!@@', (err, decoded)=> {
    if(err) return console.log(err);
    console.log(decoded);
})