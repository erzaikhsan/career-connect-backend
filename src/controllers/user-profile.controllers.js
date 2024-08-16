const { UserService } = require('../services');
const logger = require('../utils/logger');

const GetUserProfile = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await UserService.GetUserProfile(id);
    res.status(200).json({
      status: 'Success',
      data: result
    });
  } catch (error) {
    if (error.message == 'Not Found') {
      res.status(404).json({
        status: 'failed',
        message: error.message
      });
      return;
    }
    logger.error(error.message);
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
};

const UpdateUserProfile = async (req, res) => {
  const id = req.userdata.id;
  try {
    await UserService.UpdateUserProfile(id, req.body);
    res.status(200).json({
      status: 'Success',
      message: 'Data Profile successfully updated'
    });
  } catch (error) {
    if (error.message === 'Not Found') {
      return res.status(404).json({ status: 'failed', message: error.message });
    }
    if (error.message === 'Email already exist') {
      return res.status(409).json({ status: 'failed', message: error.message });
    }
    logger.error(error.message);
    res
      .status(500)
      .send({ status: 'failed', message: 'Internal server error' });
  }
};

const UpdateUser = async (req, res) => {
  const id = req.params.id;
  try {
    await UserService.UpdateUserProfile(id, req.body);
    res
      .status(200)
      .json({ status: 'Success', message: 'Data User successfully updated' });
  } catch (error) {
    if (error.message == 'Not Found') {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error(error.message);
    res
      .status(500)
      .send({ status: 'failed', message: 'Internal server error' });
  }
};

module.exports = {
  GetUserProfile,
  UpdateUserProfile,
  UpdateUser
};
