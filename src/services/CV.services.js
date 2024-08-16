const { CVRepo } = require('../repositories');

const UpdateCV = async (data) => {
  const { id, cv_path } = data;
  if (!id) {
    throw new Error('Invalid id');
  }
  const updateCV = CVRepo.UpdateCV({ id, cv_path });
  return updateCV;
};

module.exports = {
  UpdateCV
};
