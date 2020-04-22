const express = require('express');

const { tokenVerify } = require('../auth/tokenVerify');

const usersService = require('./usersService');

const router = express.Router();


router.post('/', tokenVerify, async (req, res) => {
  let user;
  try {
    const { email } = req.body;
    const { password } = req.body;
    user = await usersService.postUser(email, password);
  } catch (err) {
    console.log(err);
  }
  return res.json(user);
});

router.put('/', tokenVerify, async (req, res) => {
  let user;
  try {
    const email = req.decoded.userId;
    const { password } = req.body;
    user = usersService.updateUser(email, password);
  } catch (err) {
    console.log(err);
  }
  return res.json(user);
});


router.delete('/', tokenVerify, async (req, res) => {
  let user;
  try {
    const email = req.decoded.userId;
    user = await usersService.deleteUser(email);
  } catch (err) {
    console.log(err);
  }
  return res.json(user);
});

module.exports = router;
