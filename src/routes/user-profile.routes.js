const {
  UserControllers,
  CVControllers,
  CertificatesControllers
} = require('../controllers');
const express = require('express');
const {
  StorageCertificates,
  StorageCV,
  authMiddleware
} = require('../middlewares');
const { validator } = require('../middlewares');
const { ROLES } = require('../utils/constants');
const path = require('path');
const logger = require('../utils/logger');

const router = express.Router();
const { validate, requirements } = validator;
const uploadCV = StorageCV;
const uploadCertificate = StorageCertificates;
const uploadPath = path.join(__dirname, '../../public/uploads');

router.get('/:id', UserControllers.GetUserProfile);
router.put(
  '/',
  authMiddleware.authenticate,
  authMiddleware.authorize(ROLES.JOBSEEKER),
  validate(requirements.updateJobSeeker),
  UserControllers.UpdateUserProfile
);

router.put(
  '/profile/cv',
  authMiddleware.authenticate,
  authMiddleware.authorize(ROLES.JOBSEEKER),
  uploadCV.single('file'),
  CVControllers.UpdateCV
);

router.delete(
  '/profile/cv',
  authMiddleware.authenticate,
  authMiddleware.authorize(ROLES.JOBSEEKER),
  CVControllers.DeleteCV
);

router.post(
  '/certificates',
  authMiddleware.authenticate,
  authMiddleware.authorize(ROLES.JOBSEEKER),
  uploadCertificate.single('file'),
  [validate(requirements.addCertificate)],
  CertificatesControllers.AddCeritificates
);

router.delete(
  '/certificates/:id',
  authMiddleware.authenticate,
  authMiddleware.authorize(ROLES.JOBSEEKER),
  CertificatesControllers.DeleteCertificates
);

router.get('/certificates/:id/:filename', (req, res) => {
  const filename = req.params.filename;
  const userId = req.params.id;
  const filePath = path.join(uploadPath, `${userId}/certificates`, filename);
  res.sendFile(filePath, (err) => {
    if (err) {
      logger.error(err);
      res.status(500).end();
    }
  });
});

router.get('/cv/:id/:filename', (req, res) => {
  const filename = req.params.filename;
  const userId = req.params.id;
  logger.info(filename);
  logger.info(userId);
  const filePath = path.join(uploadPath, `${userId}`, filename);
  res.sendFile(filePath, (err) => {
    if (err) {
      logger.error(err);
      res.status(500).end();
    }
  });
});

module.exports = router;
