const { CompanyModel } = require('../models');
const logger = require('../utils/logger');

const companies = [];

const createCompany = (
  companies_id,
  photo_profile,
  name,
  type,
  description,
  website,
  email_company,
  phone_number,
  address
) => {
  const company = {
    companies_id,
    photo_profile,
    name,
    type,
    description,
    website,
    email_company,
    phone_number,
    address
  };
  companies.push(company);
};

createCompany(
  6,
  'photo/default/company.png',
  'EcoEnergy',
  'Energy',
  'EcoEnergy is a renewable energy company committed to a sustainable future.',
  'www.ecoenergy.com',
  'info@ecoenergy.com',
  '+62852123456782',
  'Medan, Indonesia'
);
createCompany(
  7,
  'photo/default/company.png',
  'FoodieFiesta',
  'Food',
  "FoodieFiesta is a food and beverage company that brings the world's flavors to your doorstep.",
  'www.foodiefiesta.com',
  'support@foodiefiesta.com',
  '+62852123423781',
  'Semarang, Indonesia'
);
createCompany(
  8,
  'photo/default/company.png',
  'AutoMoto',
  'Automotive',
  'AutoMoto is an automotive company that designs and manufactures modern, efficient vehicles.',
  'www.automoto.com',
  'contact@automoto.com',
  '+62852124456783',
  'Palembang, Indonesia'
);
createCompany(
  9,
  'photo/default/company.png',
  'FashionForward',
  'Fashion',
  'FashionForward is a leading fashion company creating trendy and stylish clothing for all.',
  'www.fashionforward.com',
  'info@fashionforward.com',
  '+62852123456784',
  'Makassar, Indonesia'
);
createCompany(
  10,
  'photo/default/company.png',
  'BuildBetter',
  'Construction',
  'BuildBetter is a construction company committed to building better homes and offices.',
  'www.buildbetter.com',
  'support@buildbetter.com',
  '+62852123423782',
  'Denpasar, Indonesia'
);

const seedCompanies = async () => {
  try {
    await CompanyModel.bulkCreate(companies);
    logger.info('Company seed data inserted successfully.');
  } catch (error) {
    logger.error('Error seeding company data:', error);
  }
};

module.exports = seedCompanies;
