const jobsRepositories = require('./jobs.repositories');
const usersRepositories = require('./users.repositories');
const companiesRepositories = require('./companies.repositories');
const ProfileRepo = require('./user-profile.repositories');
const CVRepo = require('./CV.repositories');
const CertificatesRepo = require('./certificates.repositories');
const PhotoRepo = require('./photo-profile.repositories');
const applicationsRepositories = require('./applications.repositories');

module.exports = {
  jobsRepositories,
  usersRepositories,
  companiesRepositories,
  ProfileRepo,
  CVRepo,
  CertificatesRepo,
  PhotoRepo,
  applicationsRepositories
};
