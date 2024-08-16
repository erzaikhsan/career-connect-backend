const { CompanyModel, UserModel } = require('../../models');

const createUser = async () => {
  return await UserModel.create({
    id: 111,
    email: 'test@mail.com',
    password: 'test',
    role: 'company'
  });
};
const removeUsers = async () => {
  return await UserModel.destroy({
    where: {
      id: 111
    },
    force: true
  });
};

const removeCompany = async () => {
  return await CompanyModel.destroy({
    where: {
      id: 111
    },
    force: true
  });
};
const createCompany = async () => {
  return await CompanyModel.create({
    id: 111,
    photo_profile: 'test',
    name: 'test company',
    type: 'Technology',
    description: 'perushaan sedang dalam test',
    website: 'test.com',
    email: 'test@mail.com',
    phone_number: '0987612',
    address: 'test'
  });
};

const getCompany = async () => {
  return await CompanyModel.findOne({
    where: {
      id: 111
    }
  });
};

module.exports = {
  removeCompany,
  createCompany,
  getCompany,
  removeUsers,
  createUser
};
