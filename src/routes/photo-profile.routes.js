const { PhotoControllers } = require('../controllers');
const { StoragePhoto, authMiddleware, validator } = require('../middlewares');
const express = require('express');
const path = require('path');

const router = express.Router();
const upload = StoragePhoto;
const uploadPath = path.join(__dirname, '../../public/uploads');
const { validate, requirements } = validator;

router.put(
  '/',
  authMiddleware.authenticate,
  upload.single('file'),
  [validate(requirements.editPhotoProfile)],
  PhotoControllers.UploadPhoto
);

router.use('/:foldername/:filename', (req, res) => {
  const filePath = path.join(
    uploadPath,
    req.params.foldername,
    req.params.filename
  );
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).end();
    }
  });
});

module.exports = router;
