const { Router } = require('express');
const { jobsControllers, requirementsControllers } = require('../controllers');
const { validator } = require('../middlewares');
const { authMiddleware } = require('../middlewares');
const { ROLES } = require('../utils/constants');

const router = Router();
const { validate, requirements } = validator;

router
  .route('/')
  .get([validate(requirements.getJobs)], jobsControllers.getJobs)
  .post(
    [
      authMiddleware.authenticate,
      authMiddleware.authorize(ROLES.COMPANY),
      validate(requirements.createJobs)
    ],
    jobsControllers.createJob
  );

router
  .route('/company/:compId')
  .get(
    [validate(requirements.getJobByCompanyId)],
    jobsControllers.getJobByCompanyId
  );

router
  .route('/:jobId')
  .get([validate(requirements.getJobById)], jobsControllers.getJobById)
  .put(
    [
      authMiddleware.authenticate,
      validate(requirements.updateJobs),
      authMiddleware.authorize(ROLES.COMPANY)
    ],
    jobsControllers.updateJob
  )
  .delete(
    [
      authMiddleware.authenticate,
      validate(requirements.deleteJob),
      authMiddleware.authorize(ROLES.COMPANY)
    ],
    jobsControllers.deleteJob
  );

module.exports = router;
