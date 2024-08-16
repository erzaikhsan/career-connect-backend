const { authService, UserService } = require('../services');
const bcrypt = require('bcrypt');
const logger = require('../utils/logger');

async function login(req, res) {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({
      status: 'Successfully Login',
      token: token
    });
  } catch (err) {
    if (err.message == 401) {
      res.status(401).json({
        status: 'failed',
        message: 'Incorrect Email or Password'
      });
      return;
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

const registerJobSeeker = async (req, res) => {
  const {
    email,
    password,
    full_name,
    gender,
    phone_number,
    address,
    place_of_birth,
    date_of_birth
  } = req.body;
  const role = 'jobseeker';
  let photo;
  if (gender == 'M') {
    photo = 'photo/default/man.png';
  } else {
    photo = 'photo/default/woman.png';
  }

  try {
    const hashedPass = await bcrypt.hash(password, 10);
    await authService.createJobSeeker({
      email,
      password: hashedPass,
      role: role,
      photo_profile: photo,
      full_name,
      gender,
      phone_number,
      address,
      place_of_birth,
      date_of_birth
    });
    res
      .status(200)
      .json({ status: 'Success', message: 'Register Successfull' });
  } catch (error) {
    if (error.message == 'Email already exist') {
      res.status(409).json({ status: 'failed', message: error.message });
      return;
    }
    logger.error(error.message);
    res
      .status(500)
      .send({ status: 'failed', message: 'internal server error' });
  }
};

const registerCompany = async (req, res) => {
  try {
    await authService.createCompany(req.body);
    res.status(200).json({
      status: 'Success',
      message: 'Register Successfull'
    });
  } catch (err) {
    if (err.message == 'Email already exist') {
      res.status(409).json({
        status: 'failed',
        message: err.message
      });
      return;
    }
    logger.error(`Error: ${err.message}`);
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
};

module.exports = {
  login,
  registerJobSeeker,
  registerCompany
};
