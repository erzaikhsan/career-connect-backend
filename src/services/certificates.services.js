const { CertificatesRepo, usersRepositories } = require('../repositories');

const AddCeritificates = async (id, data) => {
  const user = usersRepositories.getUserById(id);
  if (!user) {
    throw new Error('Not Found');
  }
  await CertificatesRepo.AddCeritificates(id, data);
};

const DeleteCertificates = async (id, userId) => {
  const certificate = await CertificatesRepo.getCertificateById(id, userId);
  if (!certificate) {
    throw new Error(404);
  }
  await CertificatesRepo.DeleteCertificates(id, userId);
};

module.exports = {
  AddCeritificates,
  DeleteCertificates
};
