const jwt = require('jsonwebtoken');
const usersDAL = require('../users/usersDAL');

function makeToken(userId) {
  const token = jwt.sign({
    userId,
  },
  process.env.SECRET_KEY,
  {
    expiresIn: '5m',
  });
  return token;
}

function login(userId, password) {
  let user;
  try {
    user = usersDAL.readUser
  } catch (err) {
    throw err;
  }
}

module.exports.makeToken = makeToken;
module.exports.login = login;
