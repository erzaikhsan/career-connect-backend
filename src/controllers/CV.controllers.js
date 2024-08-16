const { CVService } = require('../services');
const logger = require('../utils/logger');

const UpdateCV = async (req, res) => {
  const id = req.userdata.id;
  const fileDir = req.file.path;
  const fileName = req.file.filename;
  try {
    const file = `jobseekers/cv/${id}/${fileName}`;
    await CVService.UpdateCV({ id, cv_path: file });
    res
      .status(200)
      .json({ status: 'Success', message: 'CV Uploaded successfully' });
  } catch (error) {
    logger.error(error.message);
    res
      .status(500)
      .send({ status: 'failed', message: 'internal server error' });
  }
};

const DeleteCV = async (req, res) => {
  const id = req.userdata.id;
  try {
    const result = await CVService.UpdateCV({ id, cv_path: null });
    if (result) {
      res
        .status(200)
        .json({ status: 'Success', message: 'CV deleted successfully' });
    }
  } catch (error) {
    logger.error(error.message);
    res
      .status(500)
      .send({ status: 'failed', message: 'internal server error' });
  }
};

module.exports = {
  UpdateCV,
  DeleteCV
};
