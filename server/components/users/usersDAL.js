const UserModel = require('./userModel');


module.exports.create = async (userId, password) => {
  try {
    const user = await new UserModel(
      userId,
      password,
    );
    await user.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports.read = async (userId) => {
  let user;
  try {
    user = await UserModel.findOne({ userId });
    if (user) {
      return user;
    }
    return false;
  } catch (err) {
    console.log(err);
  }
  return user;
};

module.exports.update = async (userId, password) => {
  let user;
  try {
    user = await UserModel.findOneAndUpdate({ userId }, { $set: { password } });
  } catch (err) {
    console.log(err);
  }
  return user;
};

module.exports.delete = async (userId) => {
  let user;
  try {
    user = await UserModel.findOneAndDelete({ userId });
  } catch (err) {
    console.log(err);
  }
  return user;
};
