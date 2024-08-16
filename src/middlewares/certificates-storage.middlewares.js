const multer = require('multer');
const path = require('path');
const fs = require('fs');

const CertificatesStorage = (req, file, cb) => {
  const id = req.userdata.id;
  const userUploadPath = path.join(
    __dirname,
    `../../public/uploads/${id}/certificates`
  );

  if (!fs.existsSync(userUploadPath)) {
    fs.mkdirSync(userUploadPath, { recursive: true });
  }

  cb(null, userUploadPath);
};

const uploadCertificates = multer({
  limits: {
    fileSize: 30000000
  },
  storage: multer.diskStorage({
    destination: CertificatesStorage,
    filename: (req, file, cb) => {
      cb(
        null,
        `certificates-` +
          file.fieldname +
          `-` +
          Date.now() +
          path.extname(file.originalname)
      );
    }
  })
});

module.exports = uploadCertificates;
