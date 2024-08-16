const { CertificateModel } = require('../models');
const logger = require('../utils/logger');

const certificates = [];

const createCertificate = (jobseekers_id, name, path) => {
  const certificate = { jobseekers_id, name, path };
  certificates.push(certificate);
};

createCertificate(1, `Certificate For Me`, `public/uploads/1/certificate1.pdf`);
createCertificate(
  1,
  `Certificate For Me Again`,
  `public/uploads/1/certificate2.pdf`
);
createCertificate(
  3,
  `Still Certificate For Me`,
  `public/uploads/3/certificate1.pdf`
);

const seedCertificates = async () => {
  try {
    await CertificateModel.bulkCreate(certificates);
    logger.info('Certificate seed data inserted successfully.');
  } catch (error) {
    logger.error('Error seeding certificate data:', error);
  }
};

module.exports = seedCertificates;
