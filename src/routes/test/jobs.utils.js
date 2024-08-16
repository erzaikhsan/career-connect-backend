const { JobModel } = require('../../models');

const getJobs = async () => {
  const page = 1;
  const offset = (page - 1) * 12;
  return await JobModel.findAll({
    offset,
    limit: 12
  });
};

module.exports = { getJobs };
