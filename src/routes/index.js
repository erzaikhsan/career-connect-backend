const { Router } = require('express');
const jobsRoutes = require('./jobs.routes');
const authRoute = require('./auth.routes');
const companiesRoutes = require('./companies.routes');
const ProfileRoutes = require('./user-profile.routes');
const PhotoRoutes = require('./photo-profile.routes');
const applicationsRoutes = require('./applications.routes');
const usersRoutes = require('./users.routes');

const router = Router();
router.use('/jobs', jobsRoutes);
router.use('/auth', authRoute);
router.use('/companies', companiesRoutes);
router.use('/jobseekers', ProfileRoutes);
router.use('/photo', PhotoRoutes);
router.use('/apply', applicationsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
