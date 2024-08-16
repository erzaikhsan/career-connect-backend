const {
  usersRepositories,
  ProfileRepo,
  companiesRepositories
} = require('../repositories');
const { secretKey } = require('../config');
const { compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function login({ email, password }) {
  const user = await usersRepositories.getUserByEmail(email);
  if (!user) {
    throw new Error(401);
  }

  const isPasswordCorrect = compareSync(password, user.dataValues.password);
  if (!isPasswordCorrect) {
    throw new Error(401);
  }

  const authUser = { id: user.dataValues.id, role: user.dataValues.role };

  const token = sign(authUser, secretKey, { expiresIn: '5h' });

  return token;
}

const createJobSeeker = async (data) => {
  const {
    email,
    password,
    role,
    photo_profile,
    full_name,
    gender,
    phone_number,
    address,
    place_of_birth,
    date_of_birth
  } = data;

  const emailExist = await usersRepositories.getUserByEmail(email);
  if (emailExist) {
    throw new Error('Email already exist');
  }

  if (
    !full_name &&
    !gender &&
    !date_of_birth &&
    !photo_profile &&
    !email &&
    !password &&
    !role
  ) {
    throw new Error('Some value null');
  }

  const response = await ProfileRepo.addJobSeeker({
    email,
    password,
    role,
    photo_profile,
    full_name,
    gender,
    phone_number,
    address,
    place_of_birth,
    date_of_birth
  });
  return response;
};

const createCompany = async ({
  email,
  password,
  name,
  type,
  address,
  phoneNumber,
  website,
  companyEmail
}) => {
  const emailExist = await usersRepositories.getUserByEmail(email);
  if (emailExist) {
    throw new Error('Email already exist');
  }

  const photo_profile = 'photo/default/company.png';
  const role = 'company';
  const hashedPass = await bcrypt.hash(password, 10);
  const input = {
    email,
    password: hashedPass,
    role,
    photo_profile,
    name,
    type,
    address,
    phoneNumber,
    website,
    companyEmail
  };
  await companiesRepositories.createCompany(input);
};

module.exports = {
  login,
  createJobSeeker,
  createCompany
};
