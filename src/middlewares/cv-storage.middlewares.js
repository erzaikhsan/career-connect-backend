const multer = require('multer');
const path = require('path');
const fs = require('fs');

const CVStorage = (req, file, cb) => {
  const id = req.userdata.id;
  const userUploadPath = path.join(__dirname, `../../public/uploads/${id}`);
  if (!fs.existsSync(userUploadPath)) {
    fs.mkdirSync(userUploadPath);
  }
  cb(null, userUploadPath);
};

const uploadCV = multer({
  limits: {
    fileSize: 30000000
  },
  storage: multer.diskStorage({
    destination: CVStorage,
    filename: (req, file, cb) => {
      cb(
        null,
        `CV-` +
          file.fieldname +
          `-` +
          Date.now() +
          path.extname(file.originalname)
      );
    }
  })
});

module.exports = uploadCV;
