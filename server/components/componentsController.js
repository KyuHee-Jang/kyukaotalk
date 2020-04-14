const express = require('express');

const userController = require('./users/usersController');
const authenticationController = require('./auth/authController');

const router = express.Router();

router.use('/users', userController);
router.use('/auth', authenticationController);

module.exports = router;
