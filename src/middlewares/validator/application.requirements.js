const { body, param } = require('express-validator');

const requirements = {
  getApplyByJobId: [param('jobId').isInt({ min: 1 })],
  createApply: [param('jobId').isInt({ min: 1 })],
  updateApplyFromSeeker: [
    param('jobId').isInt({ min: 1 }),
    body('status').isString().isIn(['cancel'])
  ],
  updateApplyFromCompany: [
    param('jobId').isInt({ min: 1 }),
    body('status').isString().isIn(['interview', 'accepted', 'rejected']),
    body('seekerId').isInt({ min: 1 })
  ]
};

module.exports = requirements;
