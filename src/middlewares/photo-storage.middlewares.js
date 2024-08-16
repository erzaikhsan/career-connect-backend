const multer = require('multer');
const path = require('path');
const fs = require('fs');

const PhotoStorage = (req, file, cb) => {
  const id = req.userdata.id;
  const userUploadPath = path.join(__dirname, `../../public/uploads/${id}`);
  if (!fs.existsSync(userUploadPath)) {
    fs.mkdirSync(userUploadPath);
  }
  cb(null, userUploadPath);
};

const imageFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png/;
  const extname = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedFileTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(null, false); // Reject the file silently
  }
};

const uploadPhoto = multer({
  limits: {
    fileSize: 15000000
  },
  storage: multer.diskStorage({
    destination: PhotoStorage,
    filename: (req, file, cb) => {
      cb(null, 'photo-' + Date.now() + path.extname(file.originalname));
    }
  }),
  fileFilter: imageFilter
});

module.exports = uploadPhoto;
