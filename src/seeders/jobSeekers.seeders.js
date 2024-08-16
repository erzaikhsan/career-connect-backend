const { JobSeekerModel } = require('../models');
const logger = require('../utils/logger');

const jobseekers = [];

const createJobSeeker = (
  jobseekers_id,
  photo_profile,
  full_name,
  bio,
  gender,
  phone_number,
  address,
  date_of_birth,
  cv_path,
  link_portfolio,
  on_work
) => {
  const jobseeker = {
    jobseekers_id,
    photo_profile,
    full_name,
    bio,
    gender,
    phone_number,
    address,
    date_of_birth,
    cv_path,
    link_portfolio,
    on_work
  };
  jobseekers.push(jobseeker);
};

createJobSeeker(
  1,
  `photo/default/woman.png`,
  `Alice Johnson`,
  `Passionate software developer with experience in Java and Python.`,
  'F',
  `+6281312345566`,
  `Jln. Merdeka, Medan, Indonesia`,
  new Date(1995, 4, 15),
  null,
  null,
  false
);
createJobSeeker(
  2,
  `photo/default/man.png`,
  `Bob Williams`,
  `Experienced project manager with a background in civil engineering.`,
  'M',
  `+628131232355366`,
  `Jln. Kemerdekaan, Surabaya, Indonesia`,
  new Date(1985, 7, 20),
  null,
  null,
  false
);
createJobSeeker(
  3,
  `photo/default/woman.png`,
  `Carol Davis`,
  `Dedicated nurse with 5 years of experience in a hospital setting.`,
  'F',
  `+6281312345522`,
  `Jln. Pancasila, Bandung, Indonesia`,
  new Date(1990, 11, 30),
  null,
  null,
  false
);
createJobSeeker(
  4,
  `photo/default/man.png`,
  `David Miller`,
  `Certified public accountant with expertise in tax accounting.`,
  'M',
  `+6281312345567`,
  `Jln. Sudirman, Jakarta, Indonesia`,
  new Date(1988, 1, 5),
  null,
  null,
  false
);
createJobSeeker(
  5,
  `photo/default/woman.png`,
  `Eva Garcia`,
  `Creative graphic designer with a strong portfolio of work.`,
  'F',
  `+628131232355367`,
  `Jln. Gatot Subroto, Bali, Indonesia`,
  new Date(1993, 5, 10),
  null,
  null,
  false
);

const seedJobSeekers = async () => {
  try {
    await JobSeekerModel.bulkCreate(jobseekers);
    logger.info('JobSeeker seed data inserted successfully.');
  } catch (error) {
    logger.error('Error seeding jobseeker data:', error);
  }
};

module.exports = seedJobSeekers;
