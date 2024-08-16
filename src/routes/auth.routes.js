const { Router } = require('express');
const { authController } = require('../controllers');
const { validator, authMiddleware } = require('../middlewares');

const router = Router();
const { validate, requirements } = validator;

router
  .route('/login')
  .post([validate(requirements.login)], authController.login);

router
  .route('/register/jobseeker')
  .post(
    [validate(requirements.registerJobSeeker)],
    authController.registerJobSeeker
  );

router
  .route('/register/company')
  .post([validate(requirements.createCompany)], authController.registerCompany);

module.exports = router;
