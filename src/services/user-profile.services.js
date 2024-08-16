const { id } = require('date-fns/locale');
const bcrypt = require('bcrypt');
const { ProfileRepo, usersRepositories } = require('../repositories');

const GetUserProfile = async (id) => {
  if (!id) {
    return Promise.reject(new Error('Invalid id'));
  }
  const response = await ProfileRepo.ProfileUser(id);
  if (!response.dataProfile) {
    return Promise.reject(new Error('Not Found'));
  }

  return response;
};

const UpdateUserProfile = async (id, data) => {
  const {
    email,
    password,
    full_name,
    bio,
    gender,
    phone_number,
    address,
    place_of_birth,
    date_of_birth,
    link_portfolio,
    on_work
  } = data;

  const user = await usersRepositories.getUserById(id);
  if (!user) {
    throw new Error('Not Found');
  }

  let existEmail;
  if (email) {
    existEmail = await usersRepositories.getUserByEmail(email);
  }

  if (existEmail && user.email != existEmail.email) {
    throw new Error('Email already exist');
  }

  let hashPass;
  if (password) {
    hashPass = await bcrypt.hash(password, 10);
  }
  await ProfileRepo.UpdateData(id, {
    email,
    password: hashPass,
    full_name,
    bio,
    gender,
    phone_number,
    address,
    place_of_birth,
    date_of_birth,
    link_portfolio,
    on_work
  });
};

module.exports = {
  GetUserProfile,
  UpdateUserProfile
};
