require('dotenv').config();
const jsonwebtoken = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jsonwebtoken.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    req.jwt = token;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
}

