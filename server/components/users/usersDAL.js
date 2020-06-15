const UserModel = require('./UserModel');

const winston = require('../../logs/winston');


module.exports.createUser = async (userId, password) => {
  let user;
  try {
    user = await new UserModel(
      userId,
      password,
    );
    await user.save();
  } catch (err) {
    winston.error(err);
    throw err;
  }
};

module.exports.readUser = async (userId) => {
  let user;
  try {
    user = await UserModel.findOne({ userId }, { _id: false, __v: false });
    if (user) {
      return user;
    }
  } catch (err) {
    winston.error(err);
    throw err;
  }
  return user;
};

module.exports.updateUser = async (userId, password) => {
  let user;
  try {
    user = await UserModel.findOneAndUpdate(
      { userId },
      { $set: { password } },
      { _id: false, __v: false },
    );
  } catch (err) {
    winston.error(err);
    throw err;
  }
  return user;
};

module.exports.deleteUser = async (userId) => {
  let user;
  try {
    user = await UserModel.findOneAndDelete({ userId }, { _id: false, __v: false });
  } catch (err) {
    winston.error(err);
    throw err;
  }
  return user;
};
