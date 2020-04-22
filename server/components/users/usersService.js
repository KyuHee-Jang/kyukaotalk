const passwordHash = require('password-hash');

const usersDAL = require('./usersDAL');


module.exports.postUser = async (email, password) => {
  let user;
  try {
    const hashedPassword = passwordHash.generate(password);
    user = await usersDAL.create(email, hashedPassword);
  } catch (err) {
    console.log(err);
  }
  return user;
};

module.exports.updateUser = async (email, password) => {
  let user;
  try {
    const hashedPassword = passwordHash.generate(password);
    user = await usersDAL.update(email, hashedPassword);
  } catch (err) {
    console.log(err);
  }
  return user;
};

module.exports.deleteUser = async (email) => {
  let user;
  try {
    user = await usersDAL.delete(email);
  } catch (err) {
    console.log(err);
  }
  return user;
};
