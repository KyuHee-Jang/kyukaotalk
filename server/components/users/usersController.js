const express = require('express');

const { verifyToken } = require('../auth/verifyToken');

const usersService = require('./usersService');

const router = express.Router();


router.post('/', verifyToken, async (req, res) => {
  let user;
  try {
    const { userId } = req.body;
    const { password } = req.body;
    user = await usersService.postUser(userId, password);
  } catch (err) {
    console.log(err);
  }
  return res.json(user);
});

router.put('/', verifyToken, async (req, res) => {
  let user;
  try {
    const { userId } = req.decoded;
    const { password } = req.body;
    user = usersService.updateUser(userId, password);
  } catch (err) {
    console.log(err);
  }
  return res.json(user);
});


router.delete('/', verifyToken, async (req, res) => {
  let user;
  try {
    const { userId } = req.decoded;
    user = await usersService.deleteUser(userId);
  } catch (err) {
    console.log(err);
  }
  return res.json(user);
});

module.exports = router;
