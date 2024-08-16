const {
  ApplicationModel,
  CertificateModel,
  CompanyModel,
  JobModel,
  JobSeekerModel,
  UserModel
} = require('../models');

const {
  applicationSeeders,
  certificateSeeders,
  companySeeders,
  jobSeeders,
  jobSeekerSeeders,
  userSeeders
} = require('../seeders');
const logger = require('./logger');

async function migrateTables() {
  await UserModel.sync({ force: true });
  await JobSeekerModel.sync({ force: true });
  await CompanyModel.sync({ force: true });
  await CertificateModel.sync({ force: true });
  await JobModel.sync({ force: true });
  await ApplicationModel.sync({ force: true });
}

async function seedData() {
  await userSeeders();
  await jobSeekerSeeders();
  await companySeeders();
  await certificateSeeders();
  await jobSeeders();
  await applicationSeeders();
}

async function syncDatabase() {
  try {
    await migrateTables();
    await seedData();

    logger.info('Database synced successfully.');
  } catch (error) {
    logger.error('Error syncing tables:', error);
  }
}

syncDatabase();
