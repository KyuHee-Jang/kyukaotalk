const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports.tokenVerify = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, process.env.SERCRET_KEY);
      if (decoded) {
        req.decoded = decoded.userId;
        next();
      } else {
        res.status(401).json({ error: 'unahtorized' });
      }
    }
  } catch (err) {
    res.status(401).json({ error: 'token expired ' });
  }
};
