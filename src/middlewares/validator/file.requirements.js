const { body, param, query } = require('express-validator');

const requirements = {
  editPhotoProfile: [
    body('file').custom((value, { req }) => {
      if (!req.file) {
        throw new Error('No file uploaded or file type is incorrect');
      }
      return true;
    })
  ]
};

module.exports = requirements;
