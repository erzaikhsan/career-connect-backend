const { ApplicationModel } = require('../models');
const logger = require('../utils/logger');

const applications = [];

const createApplication = (jobseekers_id, jobs_id, status) => {
  const application = { jobseekers_id, jobs_id, status };
  applications.push(application);
};

createApplication(1, 3, 'pending');
createApplication(3, 1, 'pending');
createApplication(3, 2, 'pending');
createApplication(3, 4, 'pending');
createApplication(5, 3, 'pending');

const seedApplications = async () => {
  try {
    await ApplicationModel.bulkCreate(applications);
    logger.info('Application seed data inserted successfully.');
  } catch (error) {
    logger.error('Error seeding application data:', error);
  }
};

module.exports = seedApplications;
