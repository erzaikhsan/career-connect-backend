const companiesServices = require('./companies.services');
const jobsServices = require('./jobs.services');
const authService = require('./auth.services');
const usersService = require('./users.services');
const UserService = require('./user-profile.services');
const CVService = require('./CV.services');
const CertificatesService = require('./certificates.services');
const PhotoService = require('./photo-profile.services');
const applicationsServices = require('./applications.services');

module.exports = {
  jobsServices,
  authService,
  usersService,
  companiesServices,
  UserService,
  CVService,
  CertificatesService,
  PhotoService,
  applicationsServices
};
