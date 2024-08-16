const { applicationsRepositories } = require('../repositories');
const { jobsRepositories } = require('../repositories');
const { usersRepositories } = require('../repositories');
const calculateAge = require('../utils/calculateAge');

async function createApply({ jobs_id, jobseekers_id }) {
  const job = await jobsRepositories.getJobById(jobs_id);
  if (!job) {
    throw new Error(404);
  }

  if (job.is_open == false) {
    throw new Error('Job is closed');
  }

  const existApply = await applicationsRepositories.getApplyBySeekerAndJobId({
    jobs_id,
    jobseekers_id
  });
  if (existApply.length) {
    throw new Error(409);
  }

  const create = await applicationsRepositories.createApply({
    jobs_id,
    jobseekers_id
  });

  return create;
}

async function getApplyBySeekerId(jobseekers_id) {
  const apply =
    await applicationsRepositories.getApplyBySeekerId(jobseekers_id);
  if (!apply.length) {
    throw new Error(404);
  }

  return apply;
}

async function getApplyBySeekerAndJobId({ jobs_id, jobseekers_id }) {
  const apply = await applicationsRepositories.getApplyBySeekerAndJobId({
    jobs_id,
    jobseekers_id
  });
  if (!apply.length) {
    throw new Error(404);
  }

  return apply;
}

async function getApplyByJobId({ jobs_id, companies_id }) {
  const access = await jobsRepositories.getJobByIdAndCompanyId({
    id: jobs_id,
    companies_id
  });
  if (!access) {
    throw new Error(403);
  }

  const apply = await applicationsRepositories.getApplyByJobId(jobs_id);
  if (!apply.length) {
    throw new Error(404);
  }

  apply.forEach((application) => {
    application.dataValues.age = calculateAge(
      application.dataValues.date_of_birth
    );
  });

  return apply;
}

async function updateApplyFromSeeker({ jobs_id, jobseekers_id, status }) {
  const job = await jobsRepositories.getJobById(jobs_id);
  if (!job) {
    throw new Error(404);
  }

  const existApply = await applicationsRepositories.getApplyBySeekerAndJobId({
    jobs_id,
    jobseekers_id
  });
  if (!existApply.length) {
    throw new Error(404);
  }

  const update = await applicationsRepositories.updateApply({
    jobs_id,
    jobseekers_id,
    status
  });

  return update;
}

async function updateApplyFromCompany({
  jobs_id,
  jobseekers_id,
  companies_id,
  status
}) {
  const existApply = await applicationsRepositories.getApplyBySeekerAndJobId({
    jobs_id,
    jobseekers_id
  });
  if (!existApply.length) {
    throw new Error(404);
  }

  if (existApply[0].dataValues.status === 'cancel') {
    throw new Error(403);
  }

  const id = jobs_id;
  const access = await jobsRepositories.getJobByIdAndCompanyId({
    id,
    companies_id
  });
  if (!access) {
    throw new Error(403);
  }

  const update = await applicationsRepositories.updateApply({
    jobs_id,
    jobseekers_id,
    status
  });

  return update;
}

module.exports = {
  createApply,
  getApplyByJobId,
  getApplyBySeekerId,
  getApplyBySeekerAndJobId,
  updateApplyFromSeeker,
  updateApplyFromCompany
};
