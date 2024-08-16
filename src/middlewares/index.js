const validator = require('./validator');
const uploadFileMiddleware = require('./multer.middlerware');
const morganMiddleware = require('./morgan.middlewares');
const AuthMiddleware = require('./auth.middlewares');
const StoragePhoto = require('./photo-storage.middlewares');
const StorageCV = require('./cv-storage.middlewares');
const StorageCertificates = require('./certificates-storage.middlewares');

const authMiddleware = new AuthMiddleware();

module.exports = {
  validator,
  morganMiddleware,
  authMiddleware,
  uploadFileMiddleware,
  StoragePhoto,
  StorageCV,
  StorageCertificates
};
