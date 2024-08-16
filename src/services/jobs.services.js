const { jobsRepositories } = require('../repositories');
const { usersRepositories } = require('../repositories');

async function getJobs({ page = 1, keyword = '', job_type }) {
  const limit = 12;
  const jobs = await jobsRepositories.getJobs({
    page,
    keyword,
    job_type
  });

  if (!jobs.rows.length) {
    throw new Error('Not found');
  }

  const totalPages = Math.ceil(jobs.count / limit);

  return {
    jobs: jobs.rows,
    pagination: {
      page: page,
      perPage: limit,
      total: jobs.count,
      totalPages: totalPages
    }
  };
}

async function getJobByCompanyId(companies_id) {
  const jobs = await jobsRepositories.getJobByCompanyId(companies_id);

  if (!jobs.length) {
    throw new Error(404);
  }

  return jobs;
}

async function getJobById(id) {
  const jobs = await jobsRepositories.getJobById(id);

  if (!jobs) {
    throw new Error(404);
  }

  return jobs;
}

async function createJob({
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
  closing_date
}) {
  const user = await usersRepositories.getUserById(companies_id);
  if (!user) {
    throw new Error(404);
  }

  const jobs = await jobsRepositories.getJobByCompanyIdAndName({
    companies_id,
    name
  });

  if (jobs.length) {
    throw new Error(409);
  }

  const createJob = await jobsRepositories.createJob({
    companies_id,
    name,
    description,
    what_will_you_do: JSON.parse(what_will_you_do),
    what_will_you_need: JSON.parse(what_will_you_need),
    location,
    category,
    job_type,
    salary,
    capacity,
    closing_date
  });
}

async function updateJob({
  id,
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
}) {
  const user = await usersRepositories.getUserById(companies_id);
  if (!user) {
    throw new Error(404);
  }

  const jobs = await jobsRepositories.getJobById(id);
  if (!jobs) {
    throw new Error(404);
  }

  const access = await jobsRepositories.getJobByIdAndCompanyId({
    id,
    companies_id
  });
  if (!access) {
    throw new Error(403);
  }

  let updateFields = {
    id,
    companies_id,
    name,
    description,
    location,
    category,
    job_type,
    salary,
    capacity,
    closing_date,
    is_open
  };

  if (what_will_you_do !== undefined) {
    updateFields.what_will_you_do = JSON.parse(what_will_you_do);
  }

  if (what_will_you_need !== undefined) {
    updateFields.what_will_you_need = JSON.parse(what_will_you_need);
  }

  const updateJob = await jobsRepositories.updateJob(updateFields);
}

async function deleteJob({ id, companies_id }) {
  const user = await usersRepositories.getUserById(companies_id);
  if (!user) {
    throw new Error(404);
  }
  const jobs = await jobsRepositories.getJobById(id);

  if (!jobs) {
    throw new Error(404);
  }

  const access = await jobsRepositories.getJobByIdAndCompanyId({
    id,
    companies_id
  });
  if (!access) {
    throw new Error(403);
  }

  const deleteJob = await jobsRepositories.deleteJob(id);

  return deleteJob;
}

module.exports = {
  getJobs,
  getJobById,
  getJobByCompanyId,
  createJob,
  updateJob,
  deleteJob
};
