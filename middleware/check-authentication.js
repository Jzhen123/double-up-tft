const jwt = require('jsonwebtoken');

const checkAuthentication =  (req, res, next) => {
  try {
    // const token = req.headers.authorization.split(" ")[1];
    // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // req.userData = {
    //   userId: decodedToken.userId,
    //   email: decodedToken.email,
    //   firstName: decodedToken.firstName,
    //   lastName: decodedToken.lastName,
    //   roles: decodedToken.roles,
    //   bankId: decodedToken.bankId,
    //   primaryBranchId: decodedToken.primaryBranchId,
    //   widgets: decodedToken.widgets
    // };
    next();
  } catch (err) {
    res.status(401).json({ message: 'Auth failed!' });
  }
}

module.exports = checkAuthentication;
