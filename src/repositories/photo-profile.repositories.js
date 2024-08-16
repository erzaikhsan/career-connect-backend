const { JobSeekerModel, CompanyModel } = require('../models');

const UpdatePhotoJobSeeker = async (params) => {
  const { id, photo_profile } = params;
  const uploadPhoto = await JobSeekerModel.update(
    {
      photo_profile: photo_profile
    },
    {
      where: {
        jobseekers_id: id
      }
    }
  );
  return uploadPhoto;
};

const UpdatePhotoCompany = async (params) => {
  const { id, photo_profile } = params;
  const uploadPhoto = await CompanyModel.update(
    {
      photo_profile: photo_profile
    },
    {
      where: {
        companies_id: id
      }
    }
  );
  return uploadPhoto;
};

module.exports = {
  UpdatePhotoJobSeeker,
  UpdatePhotoCompany
};
