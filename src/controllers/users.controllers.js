const { usersService } = require('../services');
const logger = require('../utils/logger');

async function getUserById(req, res) {
  try {
    const result = await usersService.getUserById(req.userdata.id);
    res.status(200).json({
      status: 'Success',
      data: result
    });
  } catch (err) {
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

module.exports = {
  getUserById
};
