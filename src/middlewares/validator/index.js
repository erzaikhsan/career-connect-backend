const { validationResult } = require('express-validator');
const companyRequirements = require('./company.requirements');
const jobsRequirements = require('./jobs.requirements');
const authRequirements = require('./auth.requirements');
const fileRequirements = require('./file.requirements');
const jobSeekerRequirements = require('./jobseeker.requirements');
const applicationRequirements = require('./application.requirements');
const logger = require('../../utils/logger');

const requirements = {
  ...jobsRequirements,
  ...companyRequirements,
  ...authRequirements,
  ...fileRequirements,
  ...jobSeekerRequirements,
  ...applicationRequirements
};

function validate(validations) {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    logger.error({ error: errors.array() });

    const error = errors.array()[0].msg;

    if (error === 'No file uploaded or file type is incorrect') {
      return res.status(400).json({
        status: 'failed',
        message: error
      });
    }

    return res.status(400).json({
      status: 'failed',
      message: 'Invalid input'
    });
  };
}

module.exports = {
  requirements,
  validate
};
