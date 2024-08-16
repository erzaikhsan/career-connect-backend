const { UserModel } = require('../models');

async function getUserByEmail(email) {
  return UserModel.findOne({
    where: {
      email: email
    }
  });
}

async function getUserById(id) {
  return UserModel.findByPk(id);
}

module.exports = {
  getUserByEmail,
  getUserById
};
