const express = require('express');

const { verifyToken } = require('../auth/verifyToken');

const usersService = require('./usersService');

const router = express.Router();


router.post('/', verifyToken, async (req, res, next) => {
  const { userId } = req.body;
  const { password } = req.body;
  let user;
  try {
    user = await usersService.postUser(userId, password);
  } catch (err) {
    return next(err);
  }
  return res.json(user);
});

router.put('/', verifyToken, async (req, res, next) => {
  const { userId } = req.decoded;
  const { password } = req.body;
  let user;
  try {
    user = usersService.updateUser(userId, password);
  } catch (err) {
    return next(err);
  }
  return res.json(user);
});


router.delete('/', verifyToken, async (req, res, next) => {
  const { userId } = req.decoded;
  let user;
  try {
    user = await usersService.deleteUser(userId);
  } catch (err) {
    return next(err);
  }
  return res.json(user);
});

module.exports = router;
