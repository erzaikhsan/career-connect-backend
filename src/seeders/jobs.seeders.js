const { JobModel } = require('../models');
const logger = require('../utils/logger');

const jobs = [];

const createJob = (
  companies_id,
  name,
  description,
  what_will_you_do,
  what_will_you_need,
  location,
  category,
  job_type,
  salary,
  capacity,
  closing_date,
  is_open
) => {
  const job = {
    companies_id,
    name,
    description,
    what_will_you_do: JSON.stringify(what_will_you_do),
    what_will_you_need: JSON.stringify(what_will_you_need),
    location,
    category,
    job_type,
    salary,
    capacity,
    closing_date,
    is_open
  };
  jobs.push(job);
};

function getRandomClosingDate() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const thirtyDaysFromNow = new Date(today);
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

  return new Date(
    tomorrow.getTime() +
      Math.random() * (thirtyDaysFromNow.getTime() - tomorrow.getTime())
  );
}

createJob(
  6,
  'Renewable Energy Engineer',
  'Work as a Renewable Energy Engineer at EcoEnergy',
  [
    'Design and test renewable energy systems',
    'Conduct energy audits',
    'Develop energy conservation plans'
  ],
  [
    'Degree in Engineering',
    'good communication skills',
    'Experience with renewable energy systems',
    'Knowledge of energy conservation techniques'
  ],
  'Medan, Indonesia',
  'Energy',
  'WFH',
  5000000,
  5,
  getRandomClosingDate(),
  true
);
createJob(
  7,
  'Food Scientist',
  'Work as a Food Scientist at FoodieFiesta',
  [
    'Develop new food products',
    'Ensure food safety and quality',
    'Conduct sensory evaluations'
  ],
  [
    'Degree in Food Science',
    'good communication skills',
    'Experience in food product development',
    'Knowledge of food safety and quality standards'
  ],
  'Semarang, Indonesia',
  'Food',
  'WFO',
  4500000,
  4,
  getRandomClosingDate(),
  true
);
createJob(
  8,
  'Automotive Engineer',
  'Work as an Automotive Engineer at AutoMoto',
  [
    'Design and develop automotive systems',
    'Conduct performance tests',
    'Troubleshoot mechanical issues'
  ],
  [
    'Degree in Engineering',
    'good communication skills',
    'Experience in automotive systems design',
    'Knowledge of performance testing techniques'
  ],
  'Palembang, Indonesia',
  'Automotive',
  'WFH',
  5500000,
  6,
  getRandomClosingDate(),
  true
);
createJob(
  9,
  'Fashion Designer',
  'Work as a Fashion Designer at FashionForward',
  [
    'Design new fashion collections',
    'Select appropriate fabrics',
    'Follow fashion trends'
  ],
  [
    'Degree in Fashion Design',
    'good communication skills',
    'Experience in fashion design',
    'Knowledge of current fashion trends'
  ],
  'Makassar, Indonesia',
  'Fashion',
  'WFO',
  4000000,
  3,
  getRandomClosingDate(),
  true
);
createJob(
  10,
  'Construction Manager',
  'Work as a Construction Manager at BuildBetter',
  [
    'Plan and oversee construction projects',
    'Ensure projects are completed on time and within budget',
    'Ensure compliance with safety regulations'
  ],
  [
    'Degree in Construction Management',
    'good communication skills',
    'Experience in managing construction projects',
    'Knowledge of safety regulations and standards'
  ],
  'Denpasar, Indonesia',
  'Construction',
  'WFH',
  6000000,
  7,
  getRandomClosingDate(),
  true
);

createJob(
  6,
  'Solar Power Engineer',
  'Work as a Solar Power Engineer at EcoEnergy',
  [
    'Design and develop solar power systems',
    'Conduct energy audits',
    'Develop energy conservation plans'
  ],
  [
    'Degree in Engineering',
    'good communication skills',
    'Experience with renewable energy systems',
    'particularly solar',
    'Knowledge of energy conservation techniques'
  ],
  'Medan, Indonesia',
  'Energy',
  'WFH',
  7000000,
  4,
  getRandomClosingDate(),
  true
);
createJob(
  7,
  'Food Quality Inspector',
  'Work as a Food Quality Inspector at FoodieFiesta',
  [
    'Inspect food products for quality',
    'Ensure compliance with food safety standards',
    'Prepare reports on food quality'
  ],
  [
    'Degree in Food Science or related field, good communication skills',
    'Experience in food quality inspection',
    'Knowledge of food safety standards'
  ],
  'Semarang, Indonesia',
  'Food',
  'WFO',
  6500000,
  3,
  getRandomClosingDate(),
  true
);
createJob(
  8,
  'Automotive Technician',
  'Work as an Automotive Technician at AutoMoto',
  [
    'Perform maintenance and repair on vehicles',
    'Diagnose mechanical issues',
    'Ensure compliance with safety regulations'
  ],
  [
    'Certification in Automotive Service, good communication skills',
    'Experience in automotive repair and maintenance',
    'Knowledge of automotive systems and safety regulations'
  ],
  'Palembang, Indonesia',
  'Automotive',
  'WFH',
  5500000,
  6,
  getRandomClosingDate(),
  true
);
createJob(
  9,
  'Fashion Consultant',
  'Work as a Fashion Consultant at FashionForward',
  [
    'Provide fashion advice to clients',
    'Keep up with the latest fashion trends',
    'Assist in creating outfits for clients'
  ],
  [
    'Degree in Fashion Design or related field, good communication skills',
    'Experience in fashion consulting',
    'Knowledge of current fashion trends'
  ],
  'Makassar, Indonesia',
  'Fashion',
  'WFO',
  4000000,
  3,
  getRandomClosingDate(),
  true
);
createJob(
  10,
  'Construction Supervisor',
  'Work as a Construction Supervisor at BuildBetter',
  [
    'Supervise construction projects',
    'Ensure projects are completed on time and within budget',
    'Ensure compliance with safety regulations'
  ],
  [
    'Degree in Construction Management, good communication skills',
    'Experience in supervising construction projects',
    'Knowledge of safety regulations and standards'
  ],
  'Denpasar, Indonesia',
  'Construction',
  'WFH',
  6000000,
  7,
  getRandomClosingDate(),
  true
);

createJob(
  6,
  'Wind Power Consultant',
  'Work as a Wind Power Consultant at EcoEnergy',
  [
    'Advise on wind power projects',
    'Conduct energy audits',
    'Develop energy conservation plans'
  ],
  [
    'Degree in Engineering, good communication skills',
    'Experience with renewable energy systems, particularly wind',
    'Knowledge of energy conservation techniques'
  ],
  'Medan, Indonesia',
  'Energy',
  'WFH',
  7000000,
  4,
  getRandomClosingDate(),
  true
);
createJob(
  7,
  'Food Safety Officer',
  'Work as a Food Safety Officer at FoodieFiesta',
  [
    'Ensure compliance with food safety standards',
    'Inspect food products for quality',
    'Prepare reports on food safety'
  ],
  [
    'Degree in Food Science or related field, good communication skills',
    'Experience in food safety inspection',
    'Knowledge of food safety standards'
  ],
  'Semarang, Indonesia',
  'Food',
  'WFO',
  6500000,
  3,
  getRandomClosingDate(),
  true
);
createJob(
  8,
  'Automotive Sales Manager',
  'Work as an Automotive Sales Manager at AutoMoto',
  [
    'Manage automotive sales team',
    'Set sales goals and strategies',
    'Ensure customer satisfaction'
  ],
  [
    'Degree in Business or related field, good communication skills',
    'Experience in automotive sales',
    'Knowledge of customer service principles'
  ],
  'Palembang, Indonesia',
  'Automotive',
  'WFH',
  5500000,
  6,
  getRandomClosingDate(),
  true
);
createJob(
  9,
  'Fashion Marketing Specialist',
  'Work as a Fashion Marketing Specialist at FashionForward',
  [
    'Develop marketing strategies for fashion collections',
    'Conduct market research',
    'Organize fashion events'
  ],
  [
    'Degree in Marketing or related field, good communication skills',
    'Experience in fashion marketing',
    'Knowledge of current fashion trends'
  ],
  'Makassar, Indonesia',
  'Fashion',
  'WFO',
  4000000,
  3,
  getRandomClosingDate(),
  true
);
createJob(
  10,
  'Construction Safety Officer',
  'Work as a Construction Safety Officer at BuildBetter',
  [
    'Ensure compliance with safety regulations on construction sites',
    'Conduct safety inspections',
    'Train construction workers on safety procedures'
  ],
  [
    'Certification in Occupational Health and Safety, good communication skills',
    'Experience in construction safety',
    'Knowledge of safety regulations and standards'
  ],
  'Denpasar, Indonesia',
  'Construction',
  'WFH',
  6000000,
  7,
  Date.now(),
  true
);

const seedJobs = async () => {
  try {
    await JobModel.bulkCreate(jobs);
    logger.info('Job seed data inserted successfully.');
  } catch (error) {
    logger.error('Error seeding job data:', error);
  }
};

module.exports = seedJobs;
