const { col } = require('sequelize');
const { JobModel, CompanyModel } = require('../models');
const { Op } = require('sequelize');
const moment = require('moment-timezone');

async function closeExpiredJobs() {
  const jakartaTime = moment().tz('Asia/Jakarta');
  return JobModel.update(
    { is_open: false },
    { where: { closing_date: { [Op.lte]: jakartaTime }, is_open: true } }
  );
}

async function getJobs({ page, keyword, job_type }) {
  const offset = (page - 1) * 12;
  let whereClause = [
    {
      is_open: true
    },
    {
      [Op.or]: [
        {
          name: {
            [Op.iLike]: `%${keyword}%`
          }
        },
        {
          location: {
            [Op.iLike]: `%${keyword}%`
          }
        }
      ]
    }
  ];

  if (job_type) {
    whereClause.push({
      job_type: job_type.toUpperCase()
    });
  }

  return JobModel.findAndCountAll({
    attributes: [
      'id',
      'companies_id',
      [col('company.name'), 'company_name'],
      [col('company.photo_profile'), 'company_photo'],
      'name',
      'description',
      'what_will_you_do',
      'what_will_you_need',
      'location',
      'category',
      'job_type',
      'salary',
      'capacity',
      'closing_date',
      'is_open'
    ],
    where: whereClause,
    offset,
    limit: 12,
    include: [
      {
        model: CompanyModel,
        required: true,
        attributes: [],
        as: 'company'
      }
    ],
    order: [['id', 'ASC']]
  });
}

async function getJobByCompanyId(companies_id) {
  return JobModel.findAll({
    where: [
      {
        companies_id
      }
    ]
  });
}

async function getJobById(id) {
  const job = await JobModel.findByPk(id, {
    attributes: [
      'id',
      'companies_id',
      [col('company.name'), 'company_name'],
      [col('company.photo_profile'), 'company_photo'],
      'name',
      'description',
      'what_will_you_do',
      'what_will_you_need',
      'location',
      'category',
      'job_type',
      'salary',
      'capacity',
      'closing_date',
      'is_open'
    ],
    include: [
      {
        model: CompanyModel,
        required: true,
        attributes: [],
        as: 'company'
      }
    ]
  });

  return job;
}

async function getJobByIdAndCompanyId({ id, companies_id }) {
  return JobModel.findOne({
    where: [
      {
        id,
        companies_id
      }
    ]
  });
}

async function getJobByCompanyIdAndName({ companies_id, name }) {
  return JobModel.findAll({
    where: [
      {
        companies_id,
        name
      }
    ]
  });
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
  return JobModel.create({
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
    is_open: true
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
  return JobModel.update(
    {
      id,
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
    },
    {
      where: {
        id
      }
    }
  );
}

async function deleteJob(id) {
  return JobModel.destroy({
    where: {
      id
    }
  });
}

module.exports = {
  closeExpiredJobs,
  getJobs,
  getJobById,
  getJobByCompanyId,
  getJobByIdAndCompanyId,
  getJobByCompanyIdAndName,
  createJob,
  updateJob,
  deleteJob
};
