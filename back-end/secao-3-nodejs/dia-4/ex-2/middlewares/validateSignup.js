const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

const expectedBodyJson = {
    "username": "string",
    "email": "string",
    "password": "string",
    "phoneNumber": "string",
    };


const validateSignup = (req, res, next) => {
    const { username, email, password, phoneNumber } = req.body;
    if(!username) return res.status(400).json({ "message": "O campo \"username\" é obrigatório" });
    if(!email) return res.status(400).json({ "message": "O campo \"email\" é obrigatório" });
    if(!password) return res.status(400).json({ "message": "O campo \"password\" é obrigatório" });
    if(!phoneNumber) return res.status(400).json({ "message": "O campo \"phoneNumber\" é obrigatório" });
    const token = generateToken();
    res.status(200).json({ "token": token });
    next();
};

module.exports = {
    validateSignup,
};
