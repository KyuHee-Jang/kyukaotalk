const express = require('express');

const { verifyToken } = require('./verifyToken');

const authService = require('./authService');

const router = express.Router();

router.post('/login', verifyToken, async (req, res) => {
  const { userId } = req.body;
  const { password } = req.body;
  let token;
  try {
    token = authService.makeToken(userId, password);
  } catch (err) {
    console.log(err);
  }
  return res.json({ token });
});

router.post('/refresh', verifyToken, async (req, res) => {
  const { userId } = req.decoded;
  let token;
  try {
    token = authService.makeToken(userId);
  } catch (err) {
    console.log(err);
  }
  return res.json({ token });
});

module.exports = router;
