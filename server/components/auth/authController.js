const express = require('express');

const { verifyToken } = require('./verifyToken');

const authService = require('./authService');

const router = express.Router();

router.post('/login', verifyToken, async (req, res) => {
  let token;
  try {
    const { userId } = req.body;
    const { password } = req.body;
    token = authService.makeToken(userId);
  } catch (err) {
    console.log(err);
  }
  return res.json({ token });
});

router.posdt('/refresh', verifyToken, async (req, res) => {
  let token;
  try {
    const { userId } = req.decoded;
    token = authService.makeToken(userId);
  } catch (err) {
    console.log(err);
  }
  return token;
})

module.exports = router;
