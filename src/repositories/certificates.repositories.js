const { CertificateModel, JobSeekerModel } = require('../models');
const fs = require('fs').promises;
const path = require('path');
const pathCertif = path;

const getCertificateById = async (id, userId) => {
  const data = CertificateModel.findOne({
    where: {
      id: id,
      jobseekers_id: userId
    }
  });
  return data;
};

const AddCeritificates = async (id, params) => {
  const { name, path } = params;
  await CertificateModel.create({
    jobseekers_id: id,
    name: name,
    path: path
  });
};

const DeleteCertificates = async (id, userId) => {
  await CertificateModel.destroy({
    where: {
      id: id,
      jobseekers_id: userId
    }
  });
};

module.exports = {
  getCertificateById,
  AddCeritificates,
  DeleteCertificates
};
