const { companiesController } = require('../controllers');
const { authMiddleware, uploadFileMiddleware } = require('../middlewares');
const { Router } = require('express');
const { validator } = require('../middlewares');
const { ROLES } = require('../utils/constants');

const router = Router();
const { validate, requirements } = validator;

router
  .route('/')
  .get([validate(requirements.getCompanies)], companiesController.getCompanies)
  .put(
    [
      authMiddleware.authenticate,
      authMiddleware.authorize(ROLES.COMPANY),
      validate(requirements.updateCompanyById)
    ],
    companiesController.updateCompanyById
  );

router
  .route('/:id')
  .get(
    [validate(requirements.getCompanyById)],
    companiesController.getCompanyById
  );

module.exports = router;
