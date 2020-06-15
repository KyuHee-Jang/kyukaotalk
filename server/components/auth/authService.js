const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');

const usersDAL = require('../users/usersDAL');


function makeToken(userId) {
  const token = jwt.sign({
    userId,
  }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

  return token;
}

async function login(userId, password) {
  // step1. user check
  let exUser;
  try {
    exUser = await usersDAL.readUser(userId);
  } catch (err) {
    throw err;
  }
  if (!exUser) {
    const err = Error('please check your userId');
    err.status = 400;
    throw err;
  }

  // step2. password check
  if (!passwordHash.verify(password, exUser.password)) {
    const err = Error('please check your password');
    err.status = 400;
    throw err;
  }
  const token = makeToken(userId);
  return token;
}

module.exports.makeToken = makeToken;
module.exports.login = login;
