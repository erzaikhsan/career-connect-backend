const { PhotoRepo, usersRepositories } = require('../repositories');

const UpdatePhoto = async (data) => {
  const { id, photo_profile } = data;
  if (!id && !photo_profile) {
    throw new Error('Some value null');
  }

  const user = await usersRepositories.getUserById(id);
  if (user.role == 'jobseeker') {
    const upload = await PhotoRepo.UpdatePhotoJobSeeker({ id, photo_profile });
    return upload;
  } else {
    const upload = await PhotoRepo.UpdatePhotoCompany({ id, photo_profile });
  }
};

module.exports = {
  UpdatePhoto
};
