const { JobSeekerModel } = require('../models');
const fs = require('fs').promises;
const path = require('path');

const UpdateCV = async (params) => {
  const { id, cv_path } = params;
  const updateCV = await JobSeekerModel.update(
    {
      cv_path: cv_path
    },
    {
      where: {
        jobseekers_id: id
      }
    }
  );
  return updateCV;
};

module.exports = {
  UpdateCV
};
