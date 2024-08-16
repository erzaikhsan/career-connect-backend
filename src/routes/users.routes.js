const { Router } = require('express');
const { usersControllers } = require('../controllers');
const { validator } = require('../middlewares');
const { authMiddleware } = require('../middlewares');

const router = Router();

router
  .route('/')
  .get([authMiddleware.authenticate], usersControllers.getUserById);

module.exports = router;
