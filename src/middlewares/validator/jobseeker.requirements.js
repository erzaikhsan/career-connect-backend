const { query, body, param } = require('express-validator');

const requirements = {
  updateJobSeeker: [
    body('email').isEmail().optional({ nullable: true }),
    body('password').isString({ min: 8 }).optional({ nullable: true }),
    body('fullname').isString().optional({ nullable: true }),
    body('bio').isString().optional({ nullable: true }),
    body('gender').isIn(['M', 'F']).optional({ nullable: true }),
    body('phone_number').isString().optional({ nullable: true }),
    body('address').isString().optional({ nullable: true }),
    body('place_of_birth').isString().optional({ nullable: true }),
    body('date_of_birth').isDate().optional({ nullable: true }),
    body('link_portfolio').isURL().optional({ nullable: true })
  ],

  addCertificate: [body('name').isString({ min: 5 })]
};

module.exports = requirements;
