const bcrypt = require('bcrypt');
const { UserModel } = require('../models');
const logger = require('../utils/logger');

const users = [];

const createUser = (email, password, role) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = { email, password: hashedPassword, role };
  users.push(user);
};

createUser('alice.johnson@gmail.com', 'password123', 'jobseeker');
createUser('bob.williams@gmail.com', 'password123', 'jobseeker');
createUser('carol.davis@gmail.com', 'password123', 'jobseeker');
createUser('david.miller@gmail.com', 'password123', 'jobseeker');
createUser('eva.garcia@gmail.com', 'password123', 'jobseeker');

createUser('acme.eco@gmail.com', 'password123', 'company');
createUser('foodie.fiesta@gmail.com', 'password123', 'company');
createUser('auto.motive@gmail.com', 'password123', 'company');
createUser('forward.comp@gmail.com', 'password123', 'company');
createUser('better.build@gmail.com', 'password123', 'company');

const seedUsers = async () => {
  try {
    await UserModel.bulkCreate(users);
    logger.info('User seed data inserted successfully.');
  } catch (error) {
    logger.error('Error seeding user data:', error);
  }
};

module.exports = seedUsers;
