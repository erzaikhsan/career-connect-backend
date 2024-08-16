const {
  JobSeekerModel,
  UserModel,
  CertificateModel,
  ApplicationModel
} = require('../models');
const { col } = require('sequelize');

const ProfileUser = async (id) => {
  const dataProfile = await JobSeekerModel.findOne({
    where: { jobseekers_id: id },
    attributes: [
      'jobseekers_id',
      [col('user.email'), 'email'],
      [col('user.role'), 'role'],
      'photo_profile',
      'full_name',
      'bio',
      'gender',
      'phone_number',
      'address',
      'place_of_birth',
      'date_of_birth',
      'cv_path',
      'link_portfolio',
      'on_work'
    ],
    include: [
      {
        model: UserModel,
        attributes: [],
        as: 'user'
      }
    ]
  });

  const certificate = await CertificateModel.findAll({
    attributes: ['id', 'name', 'path'],
    where: {
      jobseekers_id: id
    }
  });

  return { dataProfile, certificate };
};

const addJobSeeker = async (params) => {
  const { email, password, role } = params;

  const {
    photo_profile,
    full_name,
    gender,
    phone_number,
    address,
    place_of_birth,
    date_of_birth
  } = params;

  const addUser = await UserModel.create({
    email: email,
    password: password,
    role: role
  });

  const userId = addUser.id;
  const addData = await JobSeekerModel.create({
    jobseekers_id: userId,
    photo_profile: photo_profile,
    full_name: full_name,
    gender: gender,
    phone_number: phone_number,
    address: address,
    place_of_birth: place_of_birth,
    date_of_birth: date_of_birth
  });

  return { addUser, addData };
};

const UpdateData = async (id, params) => {
  const {
    email,
    password,
    full_name,
    bio,
    gender,
    phone_number,
    address,
    place_of_birth,
    link_portfolio,
    date_of_birth,
    on_work
  } = params;

  await UserModel.update(
    {
      email,
      password
    },
    {
      where: {
        id: id
      }
    }
  );
  await JobSeekerModel.update(
    {
      full_name: full_name,
      bio: bio,
      gender: gender,
      phone_number: phone_number,
      address: address,
      place_of_birth: place_of_birth,
      date_of_birth: date_of_birth,
      on_work: on_work,
      link_portfolio
    },
    {
      where: {
        jobseekers_id: id
      }
    }
  );
};

module.exports = {
  ProfileUser,
  addJobSeeker,
  UpdateData
};
