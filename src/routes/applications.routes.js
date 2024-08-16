const { Router } = require('express');
const { applicationsControllers } = require('../controllers');
const { validator } = require('../middlewares');
const { authMiddleware } = require('../middlewares');
const { ROLES } = require('../utils/constants');

const router = Router();
const { validate, requirements } = validator;

router
  .route('/job/:jobId')
  .get(
    [
      authMiddleware.authenticate,
      validate(requirements.getApplyByJobId),
      authMiddleware.authorize(ROLES.COMPANY)
    ],
    applicationsControllers.getApplyByJobId
  )
  .post(
    [
      authMiddleware.authenticate,
      validate(requirements.createApply),
      authMiddleware.authorize(ROLES.JOBSEEKER)
    ],
    applicationsControllers.createApply
  );

router
  .route('/seeker')
  .get(
    [authMiddleware.authenticate, authMiddleware.authorize(ROLES.JOBSEEKER)],
    applicationsControllers.getApplyBySeekerId
  );

router
  .route('/seeker/job/:jobId')
  .get(
    [authMiddleware.authenticate, authMiddleware.authorize(ROLES.JOBSEEKER)],
    applicationsControllers.getApplyBySeekerAndJobId
  )
  .put(
    [
      authMiddleware.authenticate,
      validate(requirements.updateApplyFromSeeker),
      authMiddleware.authorize(ROLES.JOBSEEKER)
    ],
    applicationsControllers.updateApplyFromSeeker
  );

router
  .route('/company/job/:jobId')
  .put(
    [
      authMiddleware.authenticate,
      validate(requirements.updateApplyFromCompany),
      authMiddleware.authorize(ROLES.COMPANY)
    ],
    applicationsControllers.updateApplyFromCompany
  );

module.exports = router;
