const jwt = require('jsonwebtoken');
const User = require('../models/User');


const createTokenFromUser = (user) => {
  const userTokenObj = {
    userId: user.id,
    email: user.email,
    username: user.username
  };
  const token = jwt.sign(
    userTokenObj,
    process.env.JWT_SECRET,
    {expiresIn: '8h'}
  );
  return token;
};


module.exports = {
  createTokenFromUser
}
