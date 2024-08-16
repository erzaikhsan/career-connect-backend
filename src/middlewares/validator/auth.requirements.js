const { body, param } = require('express-validator');

const requirements = {
  login: [
    body('email').isEmail(),
    body('password').isString().isLength({ min: 8 })
  ],

  registerJobSeeker: [
    body('email').isEmail(),
    body('password').isString().isLength({ min: 8 }),
    body('full_name').isString().notEmpty(),
    body('gender').isIn(['F', 'M']),
    body('phone_number').notEmpty(),
    body('address').isString(),
    body('place_of_birth').isString().notEmpty(),
    body('date_of_birth').isDate()
  ]
};

module.exports = requirements;
