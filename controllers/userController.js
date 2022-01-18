const bcrypt = require('bcrypt');
const User = require('../models/User');

const userService = require('../services/userService');


const login = async (req, res, next) => {
    
    let fetchedUser = await User.query().where('email', req.body.email);
    
    if (fetchedUser.length === 0 || !(bcrypt.compare(req.body.password, fetchedUser.password))) {
        return res.status(401).json({
        message: "Authentication failed"
        });
    } else {
        fetchedUser.password = null; // We don't want the password to be stored in the browser
        res.status(200).json({
            token: userService.createTokenFromUser(fetchedUser),
            user: fetchedUser,
            expiresIn: 28800
        });
    }
};



module.exports = {
  login
}
