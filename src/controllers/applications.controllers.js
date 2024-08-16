const { applicationsServices } = require('../services');
const logger = require('../utils/logger');

async function createApply(req, res) {
  try {
    const result = await applicationsServices.createApply({
      jobs_id: req.params.jobId,
      jobseekers_id: req.userdata.id
    });
    res.status(201).json({
      status: 'Success',
      message: 'Apply Successfull'
    });
  } catch (err) {
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    if (err.message == 'Job is closed') {
      return res.status(403).json({
        status: 'failed',
        message: err.message
      });
    }
    if (err.message == 409) {
      return res.status(409).json({
        status: 'failed',
        message: 'Apply already exists'
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

async function getApplyBySeekerId(req, res) {
  try {
    const result = await applicationsServices.getApplyBySeekerId(
      req.userdata.id
    );
    res.status(200).json({
      status: 'Success',
      data: result
    });
  } catch (err) {
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

async function getApplyBySeekerAndJobId(req, res) {
  try {
    const result = await applicationsServices.getApplyBySeekerAndJobId({
      jobs_id: req.params.jobId,
      jobseekers_id: req.userdata.id
    });
    res.status(200).json({
      status: 'Success',
      data: result
    });
  } catch (err) {
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

async function getApplyByJobId(req, res) {
  try {
    const result = await applicationsServices.getApplyByJobId({
      jobs_id: req.params.jobId,
      companies_id: req.userdata.id
    });
    res.status(200).json({
      status: 'Success',
      data: result
    });
  } catch (err) {
    if (err.message == 403) {
      return res.status(403).json({
        status: 'failed',
        message: "You don't have access"
      });
    }
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

async function updateApplyFromSeeker(req, res) {
  try {
    const result = await applicationsServices.updateApplyFromSeeker({
      jobs_id: req.params.jobId,
      jobseekers_id: req.userdata.id,
      status: req.body.status
    });
    res.status(200).json({
      status: 'Success',
      message: 'Apply Canceled'
    });
  } catch (err) {
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

async function updateApplyFromCompany(req, res) {
  try {
    const { seekerId, status } = req.body;
    const jobs_id = req.params.jobId;
    const companies_id = req.userdata.id;
    const result = await applicationsServices.updateApplyFromCompany({
      jobs_id,
      jobseekers_id: seekerId,
      companies_id,
      status
    });
    res.status(200).json({
      status: 'Success',
      message: 'Apply Updated'
    });
  } catch (err) {
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    if (err.message == 403) {
      return res.status(403).json({
        status: 'failed',
        message: "You don't have access"
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

module.exports = {
  createApply,
  getApplyByJobId,
  getApplyBySeekerId,
  getApplyBySeekerAndJobId,
  updateApplyFromSeeker,
  updateApplyFromCompany
};
