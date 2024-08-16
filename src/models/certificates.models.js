const { DataTypes } = require('sequelize');
const { db } = require('../config');
const JobSeeker = require('./jobSeekers.models');

const Certificate = db.define(
  'certificates',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    jobseekers_id: {
      type: DataTypes.INTEGER,
      references: {
        model: JobSeeker,
        key: 'jobseekers_id'
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    tableName: 'certificates',
    freezeTableName: true,
    timestamps: true
  }
);

Certificate.belongsTo(JobSeeker, { foreignKey: 'jobseekers_id' });

module.exports = Certificate;
