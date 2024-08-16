const { DataTypes } = require('sequelize');
const { db } = require('../config');
const User = require('./users.models');

const JobSeeker = db.define(
  'jobseekers',
  {
    jobseekers_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    photo_profile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT
    },
    place_of_birth: {
      type: DataTypes.STRING(50)
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cv_path: {
      type: DataTypes.STRING(255)
    },
    link_portfolio: {
      type: DataTypes.STRING(255)
    },
    on_work: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    tableName: 'jobseekers',
    freezeTableName: true,
    timestamps: true
  }
);

JobSeeker.belongsTo(User, { foreignKey: 'jobseekers_id' });

module.exports = JobSeeker;
