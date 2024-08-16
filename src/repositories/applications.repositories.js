const { col } = require('sequelize');
const {
  ApplicationModel,
  JobModel,
  CompanyModel,
  JobSeekerModel,
  UserModel
} = require('../models');

async function createApply({ jobs_id, jobseekers_id }) {
  return ApplicationModel.create({
    jobseekers_id,
    jobs_id,
    status: 'pending'
  });
}

async function getApplyBySeekerId(jobseekers_id) {
  return ApplicationModel.findAll({
    attributes: [
      'jobseekers_id',
      'jobs_id',
      [col('job.name'), 'job_name'],
      [col('job.location'), 'location'],
      [col('job.company.name'), 'company_name'],
      [col('job.company.photo_profile'), 'company_photo'],
      'status'
    ],
    where: {
      jobseekers_id
    },
    include: [
      {
        model: JobModel,
        attributes: [],
        as: 'job',
        include: [
          {
            model: CompanyModel,
            attributes: [],
            as: 'company'
          }
        ]
      }
    ]
  });
}

async function getApplyByJobId(jobs_id) {
  return ApplicationModel.findAll({
    attributes: [
      'jobseekers_id',
      'jobs_id',
      [col('jobseeker.full_name'), 'jobseeker_name'],
      [col('jobseeker.photo_profile'), 'jobseeker_photo'],
      [col('jobseeker.address'), 'jobseeker_address'],
      [col('jobseeker.gender'), 'gender'],
      [col('jobseeker.date_of_birth'), 'date_of_birth'],
      [col('jobseeker.cv_path'), 'cv_jobseeker'],
      [col('jobseeker.phone_number'), 'phone_number'],
      [col('jobseeker.user.email'), 'email'],
      'status'
    ],
    where: {
      jobs_id
    },
    include: [
      {
        model: JobSeekerModel,
        attributes: [],
        as: 'jobseeker',
        include: [
          {
            model: UserModel,
            attributes: [],
            as: 'user'
          }
        ]
      }
    ],
    order: [['jobseekers_id', 'ASC']]
  });
}

async function getApplyBySeekerAndJobId({ jobs_id, jobseekers_id }) {
  return ApplicationModel.findAll({
    where: {
      jobseekers_id,
      jobs_id
    }
  });
}

async function updateApply({ jobs_id, jobseekers_id, status }) {
  return ApplicationModel.update(
    {
      status
    },
    {
      where: {
        jobseekers_id,
        jobs_id
      }
    }
  );
}

module.exports = {
  createApply,
  getApplyBySeekerId,
  getApplyByJobId,
  getApplyBySeekerAndJobId,
  updateApply
};
