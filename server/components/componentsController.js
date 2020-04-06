const express = require('express');

const userController = require('./users/usersController');

const router = express.Router();

router.use('/users', userController);

module.exports = router;
