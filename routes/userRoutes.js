const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const checkAuthentication = require('../middleware/check-authentication');
// const checkAuthorization = require('../middleware/check-authorization'); // later if we add role permissions (admin, user, etc.)



router.post('/login', checkAuthentication, userController.login);


module.exports = router;
