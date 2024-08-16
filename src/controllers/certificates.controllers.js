const { CertificatesService } = require('../services');
const logger = require('../utils/logger');

const AddCeritificates = async (req, res) => {
  const id = req.userdata.id;
  const name = req.body.name;
  const fileDirr = req.file.path;
  const fileName = req.file.filename;
  try {
    const file = `jobseekers/certificates/${id}/${fileName}`;
    await CertificatesService.AddCeritificates(id, {
      name,
      path: file
    });
    res.status(200).json({
      status: 'Success',
      message: 'Certificates uploaded successfully'
    });
  } catch (error) {
    if (error.message == 'Not Found') {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error(error);
    res
      .status(500)
      .send({ status: 'failed', message: 'internal server error' });
  }
};

const DeleteCertificates = async (req, res) => {
  const id = req.params.id;
  const userId = req.userdata.id;
  try {
    await CertificatesService.DeleteCertificates(id, userId);
    res.status(200).json({
      status: 'Success',
      message: 'Certificates deleted successfully'
    });
  } catch (error) {
    if (error.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error(error.message);
    res
      .status(500)
      .send({ status: 'failed', message: 'internal server error' });
  }
};

module.exports = {
  AddCeritificates,
  DeleteCertificates
};
