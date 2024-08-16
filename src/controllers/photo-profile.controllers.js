const { PhotoService } = require('../services');
const logger = require('../utils/logger');

const UploadPhoto = async (req, res) => {
  const id = req.userdata.id;
  const fileDirr = req.file.path;
  const fileName = req.file.filename;
  try {
    const file = `photo/${id}/${fileName}`;
    const result = await PhotoService.UpdatePhoto({ id, photo_profile: file });
    res
      .status(200)
      .json({ status: 'Success', message: 'Photo Uploaded successfully' });
  } catch (error) {
    logger.error(error.message);
    res
      .status(500)
      .send({ status: 'failed', message: 'Internal server error' });
  }
};

module.exports = {
  UploadPhoto
};
